"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

const Ads = () => {
  const [formData, setFormData] = useState({ title: '', link: '', imgurl: '', advsec: 1 });
  const [message, setMessage] = useState('');
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
      const response = await fetch('/api/Ads', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ formData }),
      });

      if (res.ok) {
        router.refresh();
      } else {
        console.error("Error deleting item:", res.statusText);
      }

      const data = await response.json();
      setMessage(data.message);
    } catch (error) {
      console.error('Error:', error);
      setMessage('Failed to submit data');
    }
  };
  return (
    <div>
      {message && <p>{message}</p>}
      <form onSubmit={handleSubmit}>
        <div>
          <label>title:</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>link:</label>
          <input
            type="text"
            name="link"
            value={formData.link}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>imgurl:</label>
          <input
            type="text"
            name="imgurl"
            value={formData.imgurl}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>advsec:</label>
          <input
            type="number"
            name="advsec"
            value={formData.advsec}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Ads;
