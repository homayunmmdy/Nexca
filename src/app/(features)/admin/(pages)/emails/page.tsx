"use client";
import { ErrorText, Spinner } from "@/components/atoms";
import { DeleteBtn } from "@/components/molecules";
import { EMAIL_API_URL } from "@/config/apiConstants";
import { EMAIL_QUERY_KEY } from "@/config/Constants";
import useFetch from "@/hooks/useFetch";
import { EmailCashType } from "@/types/CashTypes";

const EmailsPage = () => {
  const { data: emails, loading } = useFetch(EMAIL_QUERY_KEY, EMAIL_API_URL);
  if (loading) {
    return <Spinner />;
  }
  return (
    <div className="overflow-x-auto p-5">
      {emails?.length === 0 ? (
        <ErrorText>There are currently no emails listed.</ErrorText>
      ) : (
        <table className="table table-xs">
          <thead>
            <tr>
              <th>email</th>
              <th>delete</th>
            </tr>
          </thead>
          {emails?.map((data: EmailCashType) => (
            <tbody key={data._id}>
              <tr>
                <td>{data.email}</td>
                <td>
                  <DeleteBtn path="emails" id={data._id} />
                </td>
              </tr>
            </tbody>
          ))}
        </table>
      )}
    </div>
  );
};

export default EmailsPage;
