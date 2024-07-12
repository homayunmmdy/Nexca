"use client"
import React from "react";
import DeleteBlock from "@/app/components/DeleteBlock";
import { CONTACTS_API_URL } from "@/app/config/apiConstants";
import useFetch from "@/app/hooks/useFetch";


const ContactsPage =  () => {
  const data = useFetch(CONTACTS_API_URL)
  if (!data.data) {
    return <p>No data send.</p>;
  }

  const contactData = data.data;

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
            {contactData.map((data) => (
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