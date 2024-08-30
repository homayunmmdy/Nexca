import { Button, Input } from "@/components";
import React from "react";

//@ts-ignore
const DataForm = ({ formData, handleChange, handleSubmit }) => (
  <form onSubmit={handleSubmit} className="space-y-4 p-4  shadow-md rounded-md">
    <div className="flex gap-3 items-center">
      <label className="block text-sm font-medium text-gray-700">Name:</label>
      <Input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        required={true}
        style="mt-1 w-full block"
      />
    </div>
    <div className="flex gap-3 items-center">
      <label className="block text-sm font-medium text-gray-700">Secid:</label>
      <Input
        type="number"
        name="secid"
        value={formData.secid}
        onChange={handleChange}
        required={true}
        style="mt-1 w-full block"
      />
    </div>
    <Button type="submit" title="Submit" color="btn-primary" style="w-full" />
  </form>
);

export default DataForm;