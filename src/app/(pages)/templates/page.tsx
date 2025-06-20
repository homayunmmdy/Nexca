import React from 'react';
import PostCard from "@/components/organisms/postsSection/PostCard";
import {Container} from "@/components/atoms";

function TemplatePage() {
    return (
        <Container>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 items-start gap-x-3 my-5">
                {templates?.map((template) => (
                    <PostCard post={template} key={template.id} />
                ))}
            </div>
        </Container>
    );
}

const templates = [
    {
        id: 1,
        title : '90min',
        description : 'Sport Page Template',
        imgurl : '/static/Image/logo.jpg',
        link : '/templates/90min'
    },
    {
        id: 2,
        title : 'AI Hub',
        description : 'Share the latest news about AI',
        imgurl : '/static/Image/logo.jpg',
        link : '/templates/ai-hub'
    },
    {
        id: 3,
        title : 'Bank News',
        description : 'See News about bank , finance and things like that.',
        imgurl : '/static/Image/logo.jpg',
        link : '/templates/bank-news'
    },
    {
        id: 4,
        title : 'Chronicle',
        description : 'A news agency that share world wide news.',
        imgurl : '/static/Image/logo.jpg',
        link : '/templates/chronicle'
    },
    {
        id: 5,
        title : 'e-commerce',
        description : 'A template to sell you products',
        imgurl : '/static/Image/logo.jpg',
        link : '/templates/e-commerce'
    },
    {
        id: 6,
        title : 'music',
        description : 'Share you latest songs and albums',
        imgurl : '/static/Image/logo.jpg',
        link : '/templates/music'
    },
    {
        id: 7,
        title : 'shop zone',
        description : 'A place that you have to shop shop zone nice page to represent your products',
        imgurl : '/static/Image/logo.jpg',
        link : '/templates/shop-zone'
    },
    {
        id: 8,
        title : 'Star Scope',
        description : 'See the news about your favorite celebrate here',
        imgurl : '/static/Image/logo.jpg',
        link : '/templates/star-scope'
    },
    {
        id: 9,
        title : 'Student Portfolio',
        description : 'Share your latest studies and article among your colleges',
        imgurl : '/static/Image/logo.jpg',
        link : '/templates/student-portfolio'
    },
]

export default TemplatePage;