import React from 'react';
import PostCard from "@/components/organisms/postsSection/PostCard";
import {Container} from "@/components/atoms";

function TemplatePage() {
    return (
        <>
            <Container>
                <div id="main"
                     className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 items-start gap-x-3 my-5">
                    {templates?.map((template) => (
                        <PostCard post={template} key={template.id}/>
                    ))}
                </div>
            </Container>
        </>
    );
}

const templates = [
    {
        id: 1,
        title: 'default',
        description: 'Common Template for list of the templates',
        imgurl: '/static/Image/logo.jpg',
        link: '/templates/default'
    },
    {
        id: 2,
        title: 'AI Hub',
        description: 'Share the latest news about AI',
        imgurl: '/static/Image/logo.jpg',
        link: '/templates/ai-hub'
    },
    {
        id: 3,
        title: 'Bank News',
        description: 'See News about bank , finance and things like that.',
        imgurl: '/static/Image/logo.jpg',
        link: '/templates/bank-news'
    },
    {
        id: 4,
        title: 'Chronicle',
        description: 'A news agency that share world wide news.',
        imgurl: '/static/Image/logo.jpg',
        link: '/templates/chronicle'
    },
    {
        id: 5,
        title: 'music',
        description: 'Share you latest songs and albums',
        imgurl: '/static/Image/logo.jpg',
        link: '/templates/music'
    }
]

export default TemplatePage;