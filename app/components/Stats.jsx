"use client"
import React, { useState, useEffect } from "react";
import axios from "axios";
import Stat from "./Stat";

const Stats = () => {
    const [posts, setPosts] = useState([]);
    const [sections, setSections] = useState([]);
    const [contacts, setContacts] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const [postsResponse, sectionsResponse, contactsResponse] = await Promise.all([
                    axios.get(`/api/Posts`),
                    axios.get(`/api/Section`),
                    axios.get(`/api/Contacts`)
                ]);

                setPosts(postsResponse.data.posts);
                setSections(sectionsResponse.data.sections);
                setContacts(contactsResponse.data.contact);
    
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };
    
        fetchData();
    }, []);

    return (
        <div className='grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
            <Stat title="Available Posts" number={posts.length} />
            <Stat title="Available Sections" number={sections.length} />
            <Stat title="Messages" number={contacts.length} />
        </div>
    );
};

export default Stats;