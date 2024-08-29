import { Button } from "@/components";
import React from "react";

//@ts-ignore
const DataForm = ({ formData, handleChange, handleSubmit }) => (
    <form onSubmit={handleSubmit} className="space-y-4 p-4  shadow-md rounded-md">
        <div className="flex gap-3 items-center">
            <label className="block text-sm font-medium text-gray-700">Name:</label>
            <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2"
            />
        </div>
        <div className="flex gap-3 items-center">
            <label className="block text-sm font-medium text-gray-700">Secid:</label>
            <input
                type="number"
                name="secid"
                value={formData.secid}
                onChange={handleChange}
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2"
            />
        </div>
        <Button type="submit" title="Submit" color="btn-primary" style="w-full"/>
    </form>
);

export default DataForm;