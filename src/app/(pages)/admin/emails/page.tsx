"use client";
import { Spinner } from "@/components";
import { EMAIL_API_URL } from "@/etc/config/apiConstants";
import { EMAIL_QUERY_KEY } from "@/etc/config/Constants";
import useFetch from "@/hooks/useFetch";
import { EmailCashType } from "@/types/CashTypes";
import { DeleteBlock } from "../components/elements";

const EmailsPage = () => {
  const { data: emailData, loading } = useFetch(EMAIL_QUERY_KEY, EMAIL_API_URL);
  if (loading) {
    return <Spinner />;
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
            {emailData?.map((data: EmailCashType) => (
              <tbody key={data._id}>
                <tr>
                  <td>{data.email}</td>
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
