import React from 'react';

const SectionsHelpAdminPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl overflow-hidden rounded-xl bg-white shadow-md">
        <div className="bg-indigo-600 px-8 py-6">
          <h1 className="text-3xl font-bold text-white">Understanding Sections in Nexca</h1>
          <p className="mt-2 text-indigo-100">A comprehensive guide to organizing your content</p>
        </div>
        
        <div className="p-8">
          <section className="mb-12">
            <p className="mb-6 text-gray-700">
              Nexca is a versatile platform designed to streamline content creation and management. 
              One of its core features is the use of <span className="font-semibold">sections</span>, 
              which play a crucial role in organizing and distributing posts.
            </p>
            
            <div className="mb-8 rounded-lg border-l-4 border-indigo-500 bg-indigo-50 p-6">
              <h2 className="mb-4 text-2xl font-bold text-indigo-800">What Are Sections in Nexca?</h2>
              <p className="text-gray-700">
                Sections in Nexca are designated areas where posts are categorized and displayed. 
                When you create a post, you first select a service and then choose a section to publish it. 
                This ensures that your content is organized and reaches the intended audience.
              </p>
              <p className="mt-4 text-gray-700">
                For example, if you're creating a post about a new product launch, you might choose 
                a section like "Announcements" or "Product Updates."
              </p>
            </div>
            
            <div className="grid gap-8 md:grid-cols-2">
              <div className="rounded-lg border border-gray-200 bg-white p-6 shadow">
                <h3 className="mb-3 text-xl font-semibold text-gray-800">Customizing Section Names</h3>
                <p className="text-gray-600">
                  Nexca allows admins to <span className="font-medium">rename sections</span> to better suit their needs. 
                  This flexibility ensures that the platform can adapt to different use cases and organizational structures.
                </p>
              </div>
              
              <div className="rounded-lg border border-gray-200 bg-white p-6 shadow">
                <h3 className="mb-3 text-xl font-semibold text-gray-800">Section Limitations</h3>
                <p className="text-gray-600">
                  Creating new sections requires the <span className="font-medium">Master Editor</span> role,
                  as each section must be coded and styled before connecting to the admin interface.
                </p>
              </div>
            </div>
          </section>
          
          <section className="mb-12">
            <h2 className="mb-6 text-2xl font-bold text-indigo-800">Key Section Restrictions</h2>
            
            <div className="space-y-6">
              <div className="rounded-lg border-l-4 border-amber-500 bg-amber-50 p-6">
                <h3 className="mb-2 text-lg font-semibold text-amber-800">Why Can't I Create a New Section?</h3>
                <p className="text-gray-700">Only the Master Editor can create new sections because each section must first be coded and styled.</p>
                <ul className="ml-6 mt-3 list-disc space-y-1 text-gray-600">
                  <li>Ensures consistency across the platform</li>
                  <li>Proper backend integration for categorization</li>
                  <li>Maintains seamless user experience</li>
                </ul>
              </div>
              
              <div className="rounded-lg border-l-4 border-rose-500 bg-rose-50 p-6">
                <h3 className="mb-2 text-lg font-semibold text-rose-800">Why Can't I Change a Section's ID?</h3>
                <p className="text-gray-700">
                  Section IDs are unique identifiers that link sections to their corresponding code. 
                  Changing a section's ID can cause <span className="font-medium">sync issues</span>, resulting in lost posts.
                </p>
              </div>
              
              <div className="rounded-lg border-l-4 border-emerald-500 bg-emerald-50 p-6">
                <h3 className="mb-2 text-lg font-semibold text-emerald-800">Why Can't I See Some Sections in the Admin Panel?</h3>
                <p className="text-gray-700">
                  Some sections are <span className="font-medium">automatically generated</span> based on content in other sections.
                  For example, "Next Main" might pull content from the "Main" section without requiring manual intervention.
                </p>
              </div>
            </div>
          </section>
          
          <section className="mb-8">
            <h2 className="mb-6 text-2xl font-bold text-indigo-800">Best Practices for Managing Sections</h2>
            
            <div className="rounded-lg bg-gray-100 p-6">
              <ul className="space-y-4">
                {[
                  {
                    title: "Plan Your Sections",
                    description: "Before creating posts, map out your content strategy and determine which sections are needed."
                  },
                  {
                    title: "Use Descriptive Names",
                    description: "Rename sections to clearly reflect their purpose and content type."
                  },
                  {
                    title: "Collaborate with the Master Editor",
                    description: "If you need a new section, coordinate with the Master Editor to ensure proper coding and integration."
                  },
                  {
                    title: "Avoid Unnecessary Changes",
                    description: "Refrain from modifying section IDs or deleting sections unless absolutely necessary."
                  }
                ].map((practice, index) => (
                  <li key={index} className="flex">
                    <div className="flex-shrink-0">
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-indigo-500 text-white">
                        {index + 1}
                      </div>
                    </div>
                    <div className="ml-4">
                      <h4 className="text-lg font-medium text-gray-900">{practice.title}</h4>
                      <p className="mt-1 text-gray-600">{practice.description}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </section>
          
          <div className="border-t border-gray-200 pt-8">
            <div className="rounded-lg bg-blue-50 p-6 text-center">
              <h2 className="mb-2 text-xl font-semibold text-blue-800">Need More Help?</h2>
              <p className="text-gray-700">
                Visit the Nexca admin panel at{" "}
                <a href="https://nexca.vercel.app/admin/sections" className="text-blue-600 hover:underline">
                  https://nexca.vercel.app/admin/sections
                </a>
                {" "}or reach out to your Master Editor.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionsHelpAdminPage;