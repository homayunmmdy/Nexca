"use client"
import { EMAIL_API_URL } from "@/config/apiConstants";
import { Spinner } from "@/components";
import useFetch from "@/hooks/useFetch";
import { DeleteBlock } from "../components/elements";


const EmailsPage = () => {
  const { data: emailData , loading} = useFetch(`${EMAIL_API_URL}`)
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
                <th>email</th>
                <th>delete</th>
              </tr>
            </thead>
            {/* @ts-ignore */}
            {emailData?.map((data) => (
              <tbody key={data.id}>
                <tr>
                  <td>{data.emails}</td>
                  <td>
                    <DeleteBlock path="emails" id={data._id} />
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

export default EmailsPage;