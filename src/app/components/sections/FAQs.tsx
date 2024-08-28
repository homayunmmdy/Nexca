import React from "react";

const FQAs: React.FC = () => {
  return (
    <>
      <section className="sm:py-10  bg-indigo-800 text-white overflow-hidden">
        <div className="mx-auto max-w-7xl px-4">
          <div className="relative py-16 px-8 bg-indigo overflow-hidden rounded-3xl">
            <div className="relative z-10 md:max-w-7xl mx-auto">
              <div className="mb-10">
                <span className="inline-block mb-5 text-md text-mygray font-bold uppercase tracking-widest">
                  Frequently asked questions
                </span>
                <h2 className="font-heading text-mygray text-4xl lg:text-5xl font-bold font-heading">
                  Got questions? We are here to help!
                </h2>
              </div>
              <div className="flex flex-wrap -m-3">
                <div className="join join-vertical w-full my-10">
                  <div className="collapse collapse-arrow join-item border border-base-300">
                    <input
                      id="nexca-question-1"
                      type="radio"
                      name="my-accordion-4"
                      defaultChecked
                    />
                    <label
                      htmlFor="nexca-question-1"
                      className="collapse-title text-xl font-bold "
                    >
                      What is Nexca?
                    </label>
                    <div className="collapse-content">
                      Nexca is an admin panel designed to help you manage and
                      administer your site. It's built with Next.js, JavaScript,
                      TailwindCSS, and uses MongoDB for the database.
                    </div>
                  </div>
                  <div className="collapse collapse-arrow join-item border border-base-300">
                    <input
                      id="nexca-question-2"
                      type="radio"
                      name="my-accordion-4"
                    />
                    <label
                      htmlFor="nexca-question-2"
                      className="collapse-title text-xl font-bold"
                    >
                      What is the purpose of Nexca?
                    </label>
                    <div className="collapse-content">
                      Nexca aims to provide a user-friendly admin panel to
                      efficiently manage and control your website's content and
                      functionalities.
                    </div>
                  </div>
                  <div className="collapse collapse-arrow join-item border border-base-300">
                    <input
                      id="nexca-question-3"
                      type="radio"
                      name="my-accordion-4"
                      defaultChecked
                    />
                    <label
                      htmlFor="nexca-question-3"
                      className="collapse-title text-xl font-bold"
                    >
                      How do I set up Nexca?
                    </label>
                    <div className="collapse-content">
                      <p>
                        To set up Nexca, clone the repository, install all
                        necessary packages, configure the .env file with your
                        environment variables, and then host it to use with your
                        site.
                      </p>
                    </div>
                  </div>

                  <div className="collapse collapse-arrow join-item border border-base-300">
                    <input
                      id="nexca-question-4"
                      type="radio"
                      name="my-accordion-4"
                      defaultChecked
                    />
                    <label
                      htmlFor="nexca-question-4"
                      className="collapse-title text-xl font-bold"
                    >
                      How do I configure the environment variables?
                    </label>
                    <div className="collapse-content">
                      <p>
                        {" "}
                        Change the env.sample to env.local then Enter your
                        specific environment variables in the .env file as per
                        your hosting requirements.
                      </p>
                    </div>
                  </div>
                  <div className="collapse collapse-arrow join-item border border-base-300">
                    <input
                      id="nexca-question-5"
                      type="radio"
                      name="my-accordion-4"
                      defaultChecked
                    />
                    <label
                      htmlFor="nexca-question-5"
                      className="collapse-title text-xl font-bold"
                    >
                      What are the system requirements for Nexca?
                    </label>
                    <div className="collapse-content">
                      You need Node.js installed on your system to run Nexca,
                      along with a MongoDB database instance.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FQAs;
