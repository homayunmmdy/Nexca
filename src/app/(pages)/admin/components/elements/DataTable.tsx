import { CiEdit } from "react-icons/ci";
import { DeleteBlock } from ".";
import Link from "next/link";
import { Button } from "@/components";

//@ts-ignore
const DataTable = ({ data, path, editor }) => {
  // Sort data by `secid` in ascending order
  const sortedData = data ? [...data].sort((a, b) => a.secid - b.secid) : [];

  return (
    <div className="overflow-x-auto">
      {editor ? (
        <div className="flex w-full justify-center">
          <Link href={`/admin/${path}/new`}>
            <Button
              color="btn-error"
              style="btn-outline m-3"
            >{`New ${path}`}</Button>
          </Link>
        </div>
      ) : null}
      <table className="table table-zebra my-2">
        <thead>
          <tr>
            <th>id</th>
            <th>sec</th>
            <th>edit</th>
            {editor ? <th>delete</th> : null}
          </tr>
        </thead>
        <tbody>
          {sortedData?.map((item) => (
            <tr key={item.id}>
              <td>{item.secid}</td>
              <td>{item.name}</td>
              <td>
                <Link href={`/admin/${path}/${item._id}`}>
                  <Button
                    color="btn-warning"
                    style="me-2 mb-2"
                  ><CiEdit size={25} /></Button>
                </Link>
              </td>
              {editor ? (
                <td>
                  <DeleteBlock path={path} id={item._id} />
                </td>
              ) : null}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DataTable;
