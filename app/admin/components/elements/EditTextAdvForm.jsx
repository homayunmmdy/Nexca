"use client"
import { TEXTADV_API_URL } from '@/app/config/apiConstants';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { FormField } from '.';

const EditTextAdvForm = ({ data }) => {
    const EDITMODE = data._id !== "new";
    const router = useRouter();

    const startingData = {
        textadvid: EDITMODE ? data.textadvid : 1,
        advname: EDITMODE ? data.advname : "",
        body: EDITMODE ? data.body : "",
        link: EDITMODE ? data.link : "",
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
        const url = EDITMODE ? `${TEXTADV_API_URL}/${data._id}` : `${TEXTADV_API_URL}`;
        const method = EDITMODE ? "PUT" : "POST";
        const headers = { "Content-Type": "application/json" };

        const res = await fetch(url, {
            method,
            headers,
            body: JSON.stringify({ formData }),
        });

        if (!res.ok) {
            setLoading(false);
            throw new Error(`Failed to ${EDITMODE ? "update" : "create"} advtest`);
        }

        router.refresh();
        router.push("/admin/textadv");
    };
    return (
        <>
            <div className="flex justify-center">
                {loading && <span className="absolute loading loading-ring loading-lg"></span>}
                <form onSubmit={handleSubmit} method="post" className="flex flex-col gap-3 w-full md:w-1/2 mb-3">
                    <h3 className="text-center font-semibold text-2xl">{EDITMODE ? "Edit TextAdv" : "New TextAdv"}</h3>
                    <FormField id="textadvid" type='number' name="textadvid" label="textadvid" value={formData.textadvid} onChange={handleChange} required />
                    <FormField id="advname" name="advname" label="advname" value={formData.advname} onChange={handleChange} required/>
                    <FormField id="body" name="body" label="body" value={formData.body} onChange={handleChange} required/>
                    <FormField id="link" name="link" label="link" value={formData.link} onChange={handleChange} required/>
                    <input type="submit" className="btn btn-active btn-primary" value={EDITMODE ? "Save" : "Post"} />
                </form>
            </div>
        </>
    )
}

export default EditTextAdvForm