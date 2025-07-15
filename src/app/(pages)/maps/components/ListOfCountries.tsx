import React from 'react';
import {CountriesMapData} from "@/config/countries";
import Link from "next/link";

const ListOfCountries = () => {
    return (
        <div className='flex gap-3 flex-wrap pb-4 md:py-4'>
            {CountriesMapData.map(country => (
                <Link href={`/maps/${country.code}`} title={`link to map of ${country.name}`} key={country.secid} className="badge badge-soft badge-primary">{country.name}</Link>
            ))}
        </div>
    );
};

export default ListOfCountries;