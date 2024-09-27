"use client";
import { Input } from "@/components";
import { TICKETS_API_URL } from "@/config/apiConstants";
import { MASTER_KEY } from "@/config/Constants";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import { Sidebar } from "../../admin/components/sections";

//@ts-ignore
const TicketForm = ({ ticket }) => {
  const EDITMODE = ticket._id !== "new";
  const router = useRouter();
  const startingTicketData = {
    title: EDITMODE ? ticket.title : "",
    description: EDITMODE ? ticket.description : "",
    body: EDITMODE ? ticket.body : "",
    priority: EDITMODE ? ticket.priority : 1,
    progress: EDITMODE ? ticket.progress : 0,
    status: EDITMODE ? ticket.status : "not started",
    startTime: EDITMODE ? ticket.startTime : "",
    endTime: EDITMODE ? ticket.endTime : "",
  };

  const [formData, setFormData] = useState(startingTicketData);
  const [loading, setLoading] = useState(false);

  //@ts-ignore
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  //@ts-ignore
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const url = EDITMODE
      ? `${TICKETS_API_URL}/${ticket._id}`
      : `${TICKETS_API_URL}`;
    const method = EDITMODE ? "PUT" : "POST";
    const headers = { "Content-Type": "application/json" };

    const res = await fetch(url, {
      method,
      headers,
      body: JSON.stringify({ formData }),
    });

    if (!res.ok) {
      setLoading(false);
      toast.error(`Failed to ${EDITMODE ? "update" : "create"} ticket`);
      throw new Error(`Failed to ${EDITMODE ? "update" : "create"} ticket`);
    }

    toast.success("Ticket Created Successfully");
    router.refresh();
    router.push("/");
  };
  let master: boolean;
  const isMaster =
    typeof window !== "undefined" ? localStorage.getItem(MASTER_KEY) : false;

  if (isMaster) {
    master = true;
  } else {
    master = false;
  }

  return (
    <>
      <ToastContainer />
      {loading && (
        <span className="absolute loading loading-ring loading-lg"></span>
      )}
      {master ? (
        <div className="grid grid-cols-12 p-5 gap-5">
          <aside className="col-span-12  lg:col-span-3 rounded-xl shadow-xl border-2 border-indigo-400">
            <Sidebar />
          </aside>
          <main className="col-span-12  lg:col-span-9 rounded-xl mt-5 lg:mt-0 shadow-xl border-2 border-indigo-400">
            <div className=" w-full h-full p-4">
              <div className="flex items-center justify-center px-12">
                <div className="mx-auto w-full max-w-[550px] ">
                  <h1 className="font-bold my-2 text-center">
                    {EDITMODE ? "Edit Ticket" : "Create New Ticket"}
                  </h1>
                  <form onSubmit={handleSubmit} method="post">
                    <div className="mb-5">
                      <Input
                        type="text"
                        id="title"
                        name="title"
                        placeholder="Title"
                        value={formData.title}
                        onChange={handleChange}
                        color="input-primary"
                        required
                        style="w-full"
                      />
                    </div>
                    <div className="mb-5">
                      <textarea
                        id="description"
                        name="description"
                        placeholder="description"
                        value={formData.description}
                        onChange={handleChange}
                        required
                        className="textarea textarea-primary w-full"
                      />
                    </div>

                    <div className="-mx-3 flex flex-wrap">
                      <div className="w-full px-3 sm:w-1/2">
                        <div className="mb-5">
                          <Input
                            type="datetime-local"
                            id="startTime"
                            name="startTime"
                            placeholder="startTime"
                            value={formData.startTime}
                            onChange={handleChange}
                            color="input-primary"
                            required
                            style="w-full"
                          />
                        </div>
                      </div>
                      <div className="w-full px-3 sm:w-1/2">
                        <div className="mb-5">
                          <Input
                            type="datetime-local"
                            id="endTime"
                            name="endTime"
                            placeholder="endTime"
                            value={formData.endTime}
                            color="input-primary"
                            onChange={handleChange}
                            required
                            style="w-full"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="mb-5">
                      <textarea
                        id="body"
                        name="body"
                        placeholder="body"
                        value={formData.body}
                        rows={10}
                        onChange={handleChange}
                        required
                        className="textarea textarea-primary w-full"
                      />
                    </div>
                    <div className="mb-5 ">
                      <div className="flex gap-2">
                        <input
                          id="priority-1"
                          name="priority"
                          type="radio"
                          onChange={handleChange}
                          value={1}
                          checked={formData.priority == 1}
                          className="radio radio-primary"
                        />
                        <label>1</label>
                        <input
                          id="priority-2"
                          name="priority"
                          type="radio"
                          onChange={handleChange}
                          value={2}
                          checked={formData.priority == 2}
                          className="radio radio-primary"
                        />
                        <label>2</label>
                        <input
                          id="priority-3"
                          name="priority"
                          type="radio"
                          onChange={handleChange}
                          value={3}
                          checked={formData.priority == 3}
                          className="radio radio-primary"
                        />
                        <label>3</label>
                        <input
                          id="priority-4"
                          name="priority"
                          type="radio"
                          onChange={handleChange}
                          value={4}
                          checked={formData.priority == 4}
                          className="radio radio-primary"
                        />
                        <label>4</label>
                        <input
                          id="priority-5"
                          name="priority"
                          type="radio"
                          onChange={handleChange}
                          value={5}
                          checked={formData.priority == 5}
                          className="radio radio-primary"
                        />
                        <label>5</label>
                      </div>
                    </div>
                    <div className="mb-5 ">
                      <input
                        type="range"
                        id="progress"
                        name="progress"
                        value={formData.progress}
                        min="0"
                        max="100"
                        onChange={handleChange}
                        className="bg-red-600 h-2.5 rounded-full w-full"
                      />
                    </div>
                    <div className="mb-5">
                      <select
                        name="status"
                        value={formData.status}
                        onChange={handleChange}
                        className="select select-primary w-full"
                      >
                        <option value="not started">Not Started</option>
                        <option value="started">Started</option>
                        <option value="delay">delay</option>
                        <option value="done">Done</option>
                      </select>
                    </div>
                    <input
                      type="submit"
                      className="btn w-full  btn-primary mb-5"
                      value={EDITMODE ? "Update Ticket" : "Create Ticket"}
                    />
                  </form>
                </div>
              </div>
            </div>
          </main>
        </div>
      ) : (
        <div className="flex items-center justify-center px-12">
          <div className="mx-auto w-full max-w-[550px] ">
            <h1 className="font-bold my-2 text-center">
              {EDITMODE ? "Edit Ticket" : "Create New Ticket"}
            </h1>
            <form onSubmit={handleSubmit} method="post">
              <div className="mb-5">
                <Input
                  type="text"
                  id="title"
                  name="title"
                  placeholder="Title"
                  value={formData.title}
                  onChange={handleChange}
                  color="input-primary"
                  required
                  style="w-full"
                />
              </div>
              <div className="mb-5">
                <textarea
                  id="description"
                  name="description"
                  placeholder="description"
                  value={formData.description}
                  onChange={handleChange}
                  required
                  className="textarea textarea-primary w-full"
                />
              </div>
              <div className="mb-5">
                <textarea
                  id="body"
                  name="body"
                  placeholder="body"
                  value={formData.body}
                  rows={10}
                  onChange={handleChange}
                  required
                  className="textarea textarea-primary w-full"
                />
              </div>
              <input
                type="submit"
                className="btn w-full  btn-primary mb-5"
                value={EDITMODE ? "Update Ticket" : "Create Ticket"}
              />
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default TicketForm;
