import React from "react";

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
        <button
            type="submit"
            className="w-full inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
            Submit
        </button>
    </form>
);

export default DataForm;