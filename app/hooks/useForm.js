import { useState } from "react";
import { useRouter } from "next/navigation";

const useForm = (apiPath) => {
  const [formData, setFormData] = useState({ name: "", secid: 1 });
  const [message, setMessage] = useState("");
  const router = useRouter();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`/api/${apiPath}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ formData }),
      });

      if (response.ok) {
        router.refresh();
      } else {
        console.error("Error deleting item:", response.statusText);
      }

      const data = await response.json();
      setMessage(data.message);
    } catch (error) {
      console.error("Error:", error);
      setMessage("Failed to submit data");
    }
  };

  return {
    formData,
    message,
    handleChange,
    handleSubmit,
  };
};

export default useForm;