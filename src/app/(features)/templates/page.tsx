import React from 'react';
import PostCard from '@/components/organisms/postsSection/PostCard';
import { Container } from '@/components/atoms';
import { PostItem } from '@/components/posts';

function TemplatePage() {
   return (
      <>
         <Container className="mt-30">
            <div
               id="main"
               className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 items-start gap-3 md:gap-5 my-5"
            >
               {templates?.map((template) => (
                  <PostItem post={template} key={template.id} />
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
      imgurl: '/static/Image/default_template.png',
      link: '/templates/default',
      author: 'Homayoun',
   },
   {
      id: 2,
      title: 'AI Hub',
      description: 'Share the latest news about AI',
      imgurl: '/static/Image/ai_hub_template.png',
      link: '/templates/ai-hub',
      author: 'Homayoun',
   },
   {
      id: 3,
      title: 'Bank News',
      description: 'See News about bank , finance and things like that.',
      imgurl: '/static/Image/bank_news_template.png',
      link: '/templates/bank-news',
      author: 'Homayoun',
   },
   {
      id: 4,
      title: 'Chronicle',
      description: 'A news agency that share world wide news.',
      imgurl: '/static/Image/chronicle_template.png',
      link: '/templates/chronicle',
      author: 'Homayoun',
   },
   {
      id: 5,
      title: 'music',
      description: 'Share you latest songs and albums',
      imgurl: '/static/Image/music_template.png',
      link: '/templates/music',
      author: 'Homayoun',
   },
];

export default TemplatePage;
