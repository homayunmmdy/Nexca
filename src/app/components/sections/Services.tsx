import React from 'react'

const Services: React.FC = () => {
    return (
        <>
            <div id="services" className="container relative flex flex-col justify-between h-full max-w-7xl px-10 mx-auto xl:px-0 mt-5">
                <h2 className="mb-1 text-3xl font-extrabold leading-tight text-center">Services</h2>
                <p className="mb-12 text-lg text-gray-500 text-center">Here is a few of the awesome Services we provide.</p>
                <div className="w-full">
                    <div className="flex flex-col w-full mb-10 sm:flex-row">
                        <div className="w-full mb-10 sm:mb-0 sm:w-1/2">
                            <div className="relative h-full ml-0 mr-0 sm:mr-10">
                                <span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-indigo-500 rounded-lg"></span>
                                <div className="relative h-full p-5e border-2 border-indigo-500 rounded-lg">
                                    <div className="flex items-center -mt-1">
                                        <h3 className="my-2 ml-3 text-lg font-bold text-gray-800">CRUD</h3>
                                    </div>
                                    <p className="mt-3 mb-1 text-xs font-medium text-indigo-500 uppercase">------------</p>
                                    <p className="mb-2 text-gray-600 p-2">With Nexca panel you cna Create Read Update Delete All your posts without any coding knowlege</p>
                                </div>
                            </div>
                        </div>
                        <div className="w-full sm:w-1/2">
                            <div className="relative h-full ml-0 md:mr-10">
                                <span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-purple-500 rounded-lg"></span>
                                <div className="relative h-full p-5e border-2 border-purple-500 rounded-lg">
                                    <div className="flex items-center -mt-1">
                                        <h3 className="my-2 ml-3 text-lg font-bold text-gray-800">Access All your posts Easily</h3>
                                    </div>
                                    <p className="mt-3 mb-1 text-xs font-medium text-purple-500 uppercase">------------</p>
                                    <p className="mb-2 text-gray-600 p-2">Inside of your panel you can see all your post and be able to modifiy theme. Also you can send any post to anywhere on your site</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col w-full mb-5 sm:flex-row">
                        <div className="w-full mb-10 sm:mb-0 sm:w-1/2">
                            <div className="relative h-full ml-0 mr-0 sm:mr-10">
                                <span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-blue-400 rounded-lg"></span>
                                <div className="relative h-full p-5e border-2 border-blue-400 rounded-lg">
                                    <div className="flex items-center -mt-1">
                                        <h3 className="my-2 ml-3 text-lg font-bold text-gray-800">Services</h3>
                                    </div>
                                    <p className="mt-3 mb-1 text-xs font-medium text-blue-400 uppercase">------------</p>
                                    <p className="mb-2 text-gray-600 p-2">Add Services page for your webiste from your panel and move you post into that.</p>
                                </div>
                            </div>
                        </div>
                        <div className="w-full mb-10 sm:mb-0 sm:w-1/2">
                            <div className="relative h-full ml-0 mr-0 sm:mr-10">
                                <span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-yellow-400 rounded-lg"></span>
                                <div className="relative h-full p-5e border-2 border-yellow-400 rounded-lg">
                                    <div className="flex items-center -mt-1">
                                        <h3 className="my-2 ml-3 text-lg font-bold text-gray-800">FeedBack</h3>
                                    </div>
                                    <p className="mt-3 mb-1 text-xs font-medium text-yellow-400 uppercase">------------</p>
                                    <p className="mb-2 text-gray-600 p-2">Inside of your panel and see all the idea and feed back of other people about your website</p>
                                </div>
                            </div>
                        </div>
                        <div className="w-full sm:w-1/2">
                            <div className="relative h-full ml-0 md:mr-10">
                                <span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-green-500 rounded-lg"></span>
                                <div className="relative h-full p-5e border-2 border-green-500 rounded-lg">
                                    <div className="flex items-center -mt-1">
                                        <h3 className="my-2 ml-3 text-lg font-bold text-gray-800">Admin Page</h3>
                                    </div>
                                    <p className="mt-3 mb-1 text-xs font-medium text-green-500 uppercase">------------</p>
                                    <p className="mb-2 text-gray-600 p-2">In the home page you see the detail about amount of your post , categories and so on.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Services