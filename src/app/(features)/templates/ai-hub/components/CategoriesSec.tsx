import React from 'react';
import { AI_HUB_categories } from '../../data/aiHub';
import TabContent from '../../(components)/TabContent';
import { useCategoryStore } from '../../(components)/categoryStore';

const CategoriesSec = () => {
   const { activeCategory, setActiveCategory } = useCategoryStore();
   return (
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
         <div className="flex flex-wrap gap-4 justify-center">
            {AI_HUB_categories.map((category) => (
               <TabContent
                  key={category.id}
                  category={category}
                  setActiveCategory={setActiveCategory}
                  activeCategory={activeCategory}
               />
            ))}
         </div>
      </section>
   );
};

export default CategoriesSec;
