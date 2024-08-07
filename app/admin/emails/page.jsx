"use client"
import { Spinner } from "@/app/components/elements";
import { EMAIL_API_URL } from "@/app/config/apiConstants";
import useFetch from "@/app/hooks/useFetch";
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