"use client"
import { Spinner } from "@/app/components/elements";
import { CONTACTS_API_URL } from "@/app/config/apiConstants";
import useFetch from "@/app/hooks/useFetch";
import { DeleteBlock } from "../components/elements";


const ContactsPage = () => {
  const { data: contactData, loading } = useFetch(`${CONTACTS_API_URL}`)
  if (loading) {
    return <Spinner />
  }
  return (
    <div className="p-5">
      <div>
        <div className="overflow-x-auto">
          <table className="table table-xs">
            <thead>
              <tr>
                <th>name</th>
                <th>email</th>
                <th>message</th>
                <th>delete</th>
              </tr>
            </thead>
            {contactData?.map((data) => (
              <tbody key={data.id}>
                <tr>
                  <td>{data.name}</td>
                  <td>{data.email}</td>
                  <td>{data.message}</td>
                  <td>
                    <DeleteBlock path="contacts" id={data._id} />
                  </td>
                </tr>
              </tbody>
            ))}
          </table>
        </div>
      </div>
    </div>
  );
};

export default ContactsPage;