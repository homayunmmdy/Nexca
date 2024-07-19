import { CiEdit } from "react-icons/ci";
import { DeleteBlock } from ".";
import Link from "next/link";

const DataTable = ({ data, path }) => {
    // Sort data by `secid` in ascending order
    const sortedData = data ? [...data].sort((a, b) => a.secid - b.secid) : [];

    return (
        <div className="overflow-x-auto">
            <table className="table table-zebra">
                <thead>
                    <tr>
                        <th>id</th>
                        <th>sec</th>
                        <th>edit</th>
                        <th>delete</th>
                    </tr>
                </thead>
                <tbody>
                    {sortedData.map((item) => (
                        <tr key={item.id}>
                            <td>{item.secid}</td>
                            <td>{item.name}</td>
                            <td>
                                <Link href={`/admin/sections/${item._id}`}>
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