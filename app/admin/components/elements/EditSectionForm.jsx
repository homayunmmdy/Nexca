"use client"
import { SECTIONS_API_URL } from '@/app/config/apiConstants';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { FormField } from '.';

const EditSectionForm = ({ data }) => {
    const EDITMODE = data._id !== "new";
    const router = useRouter();

    const startingData = {
        name: EDITMODE ? data.name : "",
        secid: EDITMODE ? data.secid : 1,
    };
    const [formData, setFormData] = useState(startingData);
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        const url = EDITMODE ? `${SECTIONS_API_URL}/${data._id}` : `${SECTIONS_API_URL}`;
        const method = EDITMODE ? "PUT" : "POST";
        const headers = { "Content-Type": "application/json" };

        const res = await fetch(url, {
            method,
            headers,
            body: JSON.stringify({ formData }),
        });

        if (!res.ok) {
            setLoading(false);
            throw new Error(`Failed to ${EDITMODE ? "update" : "create"} section`);
        }

        router.refresh();
        router.push("/admin");
    };
    return (
        <>
            <div className="flex justify-center">
                {loading && <span className="absolute loading loading-ring loading-lg"></span>}
                <form onSubmit={handleSubmit} method="post" className="flex flex-col gap-3 w-full md:w-1/2 mb-3">
                    <h3 className="text-center font-semibold text-2xl">{EDITMODE ? "Edit Section" : "New Section"}</h3>
                    <FormField id="name" name="name" label="Name" value={formData.name} onChange={handleChange} />
                    <FormField id="secid" type='number' name="secid" label="secid" value={formData.secid} onChange={handleChange} required />
                </form>
            </div>
        </>
    )
}

export default EditSectionForm