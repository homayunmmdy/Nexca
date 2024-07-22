import { CiEdit } from "react-icons/ci";
import { DeleteBlock } from ".";
import Link from "next/link";

const DataTable = ({ data, path }) => {
    // Sort data by `secid` in ascending order
    const sortedData = data ? [...data].sort((a, b) => a.secid - b.secid) : [];

    return (
        <div className="overflow-x-auto">
            <div className="w-full flex justify-center">
                <Link href={`/admin/${path}/new`} className="btn btn-outline btn-primary m-3">New {path}</Link>
            </div>
            <table className="table table-zebra my-2">
                <thead>
                    <tr>
                        <th>id</th>
                        <th>sec</th>
                        <th>edit</th>
                        <th>delete</th>
                    </tr>
                </thead>
                <tbody>
                    {sortedData?.map((item) => (
                        <tr key={item.id}>
                            <td>{item.secid}</td>
                            <td>{item.name}</td>
                            <td>
                                <Link href={`/admin/${path}/${item._id}`}>
                                    <CiEdit size={25} />
                                </Link>
                            </td>
                            <td>
                                <DeleteBlock path={path} id={item._id} />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default DataTable;