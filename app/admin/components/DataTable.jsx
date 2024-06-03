import DeleteBlock from "@/app/components/DeleteBlock";
import React from "react";

const DataTable = ({ data , path }) => (
    <div className="overflow-x-auto">
        <table className="table table-zebra">
            <thead>
                <tr>
                    <th>id</th>
                    <th>sec</th>
                    <th>delete</th>
                </tr>
            </thead>
            {data?.map((item) => (
                <tbody key={item.id}>
                    <tr>
                        <td>{item.secid}</td>
                        <td>{item.name}</td>
                        <td>
                            <DeleteBlock path={path} id={item._id} />
                        </td>
                    </tr>
                </tbody>
            ))}
        </table>
    </div>
);

export default DataTable;