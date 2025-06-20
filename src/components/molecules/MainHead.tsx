import React from 'react';
import {Container} from "@/components/atoms";
import FormatTime from "@/app/(pages)/posts/components/FormatTime";

interface Props {
    title: string;
    description: string;
    createdAt?: string;
}

function MainHead({title, description, createdAt}: Props) {
    return (
        <div
            className="relative mt-[30px] overflow-hidden bg-gradient-to-r from-indigo-900 via-indigo-800 to-purple-900">
            <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-transparent opacity-40"></div>
            <Container className="relative py-8">
                <div
                    className="text-4xl text-center font-bold tracking-tight mb-4  text-white sm:text-5xl md:text-6xl line-clamp-3">
                    {title}
                </div>
                <p className="bg-gradient-to-r from-indigo-400 to-purple-300 bg-clip-text text-transparent line-clamp-4 text-center md:line-clamp-3">{description}</p>
                {createdAt && (
                    <p className="my-3 text-center text-lg text-white">
                        <FormatTime timestamp={createdAt} />
                    </p>
                )}
            </Container>
        </div>
    );
}

export default MainHead;