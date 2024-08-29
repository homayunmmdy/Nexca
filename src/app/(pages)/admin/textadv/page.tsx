"use client";
import { TEXTADV_API_URL } from "@/config/apiConstants";
import useFetch from "@/hooks/useFetch";
import Link from "next/link";
import { CiEdit } from "react-icons/ci";
import { DeleteBlock } from "../components/elements";
import { Button, Spinner } from "@/components";

const AdminTextAdvPage = () => {
  const { data: sections, loading } = useFetch(TEXTADV_API_URL);
  if (loading) {
    return <Spinner />;
  }
  {/* @ts-ignore */}
  const sortedData = sections ? [...sections].sort((a, b) => a.textadvid - b.textadvid) : [];

  return (
    <>
      <div className="overflow-x-auto">
        <div className="w-full flex justify-center">
          <Link
            href={`/admin/textadv/new`}
          >
            <Button title="New textadv" color="btn-primary" style="btn-outline m-3"/>
          </Link>
        </div>
        <table className="table table-zebra my-2">
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th className="hidden lg:block">Description</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {sortedData?.map((item) => (
              <>
                {/* @ts-ignore */}
                <tr key={item.id}>
                  {/* @ts-ignore */}
                  <td>{item.textadvid}</td>
                  {/* @ts-ignore */}
                  <td>{item.advname}</td>
                  {/* @ts-ignore */}
                  <td>{item.body}</td>
                  <td>
                    {/* @ts-ignore */}
                    <Link href={`/admin/textadv/${item._id}`}>
                      <CiEdit size={25} />
                    </Link>
                  </td>
                  <td>
                    {/* @ts-ignore */}
                    <DeleteBlock path="textadv" id={item._id} />
                  </td>
                </tr>
              </>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default AdminTextAdvPage;
