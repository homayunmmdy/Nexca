import React from 'react';
import { FiLayers, FiLink, FiList, FiPlus } from 'react-icons/fi';

const ServicesHelpAdminPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="mx-auto max-w-4xl px-4 py-12">
        {/* Header Section */}
        <div className="mb-16 text-center">
          <h1 className="mb-4 text-4xl font-bold text-gray-900">Understanding Nexca Services</h1>
          <p className="text-xl text-gray-600">
            A powerful way to organize and categorize your content
          </p>
        </div>
       
        {/* What Are Services Section */}
        <div className="mb-10 rounded-lg bg-white p-8 shadow-md">
          <h2 className="mb-6 text-2xl font-semibold text-gray-800">
            What Are Nexca Services?
          </h2>
          <p className="mb-6 text-gray-700">
            <span className="font-medium">Nexca Services</span> are a core feature of the Nexca CMS that allow you to categorize and organize your content in meaningful ways. Think of a service as a grouping mechanism for posts, letting you define clear relationships between content and its associated categories.
          </p>
          <div className="rounded border-l-4 border-indigo-500 bg-indigo-50 p-4">
            <p className="text-indigo-700">
              Services are particularly useful for projects with diverse content types or multiple categories, helping your users navigate through related content more intuitively.
            </p>
          </div>
        </div>
       
        {/* Benefits Grid */}
        <div className="mb-16 grid gap-8 md:grid-cols-2">
          <div className="rounded-lg bg-white p-6 shadow-md">
            <div className="mb-4 flex items-center">
              <FiLayers className="mr-3 text-2xl text-purple-600" />
              <h3 className="text-xl font-medium text-gray-800">Organized Content Structure</h3>
            </div>
            <p className="text-gray-700">
              Create logical groupings for your posts based on categories, functions, or any organizational scheme that makes sense for your project.
            </p>
          </div>
         
          <div className="rounded-lg bg-white p-6 shadow-md">
            <div className="mb-4 flex items-center">
              <FiLink className="mr-3 text-2xl text-purple-600" />
              <h3 className="text-xl font-medium text-gray-800">Clear Content Relationships</h3>
            </div>
            <p className="text-gray-700">
              Establish meaningful connections between related posts, making it easier for users to discover content relevant to their interests.
            </p>
          </div>
         
          <div className="rounded-lg bg-white p-6 shadow-md">
            <div className="mb-4 flex items-center">
              <FiList className="mr-3 text-2xl text-purple-600" />
              <h3 className="text-xl font-medium text-gray-800">Unlimited Flexibility</h3>
            </div>
            <p className="text-gray-700">
              Create as many services as you need with no limitations, tailoring the system perfectly to your specific requirements.
            </p>
          </div>
         
          <div className="rounded-lg bg-white p-6 shadow-md">
            <div className="mb-4 flex items-center">
              <FiPlus className="mr-3 text-2xl text-purple-600" />
              <h3 className="text-xl font-medium text-gray-800">Enhanced Navigation</h3>
            </div>
            <p className="text-gray-700">
              Services appear in your navbar, giving users a direct path to explore content categories that interest them.
            </p>
          </div>
        </div>
       
        {/* How To Use Section */}
        <div className="mb-10 rounded-lg bg-white p-8 shadow-md">
          <h2 className="mb-6 text-2xl font-semibold text-gray-800">
            How To Create and Use Services
          </h2>
         
          <div className="mb-8">
            <h3 className="mb-4 text-xl font-medium text-gray-800">Creating a Service</h3>
            <ol className="space-y-4 text-gray-700">
              <li className="flex">
                <span className="mr-3 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-purple-100 font-bold text-purple-800">1</span>
                <div>
                  <p className="font-medium">Navigate to the Admin Panel</p>
                  <p className="mt-1 text-gray-600">Go to the Nexca Admin Services Page from your dashboard.</p>
                </div>
              </li>
              <li className="flex">
                <span className="mr-3 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-purple-100 font-bold text-purple-800">2</span>
                <div>
                  <p className="font-medium">Fill in the Required Details</p>
                  <ul className="ml-6 mt-2 list-disc space-y-1 text-gray-600">
                    <li><span className="font-medium">Service ID:</span> A unique identifier for your service</li>
                    <li><span className="font-medium">Image:</span> Upload a visual representation</li>
                    <li><span className="font-medium">Service Name:</span> A descriptive title</li>
                    <li><span className="font-medium">Description:</span> Details about the service's purpose</li>
                  </ul>
                </div>
              </li>
              <li className="flex">
                <span className="mr-3 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-purple-100 font-bold text-purple-800">3</span>
                <div>
                  <p className="font-medium">Submit the Form</p>
                  <p className="mt-1 text-gray-600">After ensuring the ID is unique, save your new service.</p>
                </div>
              </li>
            </ol>
          </div>
         
          <div className="mb-8">
            <h3 className="mb-4 text-xl font-medium text-gray-800">Associating Posts with Services</h3>
            <p className="mb-4 text-gray-700">
              During post creation, you can assign your content to one or more services. This creates a logical relationship that helps organize your content effectively.
            </p>
            <div className="rounded border-l-4 border-yellow-400 bg-yellow-50 p-4">
              <p className="text-yellow-800">
                <span className="font-medium">Pro Tip:</span> Associating posts with relevant services not only organizes your content but also improves content discovery for your users.
              </p>
            </div>
          </div>
         
          <div>
            <h3 className="mb-4 text-xl font-medium text-gray-800">Viewing Services and Their Posts</h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <svg className="mr-2 h-6 w-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <p>
                  <span className="font-medium">Service-Specific Page:</span> Access all posts related to a service at
                  <code className="mx-1 rounded bg-gray-100 px-2 py-1 text-sm">https://nexca.vercel.app/services/[id-of-your-service]</code>
                </p>
              </li>
              <li className="flex items-start">
                <svg className="mr-2 h-6 w-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <p>
                  <span className="font-medium">Unlimited Services:</span> Create as many services as needed to perfectly categorize your content
                </p>
              </li>
              <li className="flex items-start">
                <svg className="mr-2 h-6 w-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <p>
                  <span className="font-medium">Service List in Navbar:</span> Users can easily browse all services from the main navigation
                </p>
              </li>
            </ul>
          </div>
        </div>
       
        {/* Final CTA */}
        <div className="rounded-lg bg-gradient-to-r from-purple-600 to-indigo-600 p-8 text-center text-white shadow-lg">
          <h2 className="mb-4 text-2xl font-bold">Ready to Organize Your Content?</h2>
          <p className="mb-6 text-lg">
            Start creating your first service today and experience how Nexca's powerful organization tools can transform your content management.
          </p>
          <a
            href="https://nexca.vercel.app/admin/services/new"
            className="inline-block rounded-lg bg-white px-6 py-3 font-medium text-indigo-700 shadow transition-colors hover:bg-gray-100"
          >
            Create Your First Service
          </a>
        </div>
      </div>
    </div>
  );
};

export default ServicesHelpAdminPage;

