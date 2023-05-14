import React from 'react';

const Contact = () => {
    return (
        <section className="pb-2 mb-0 mt-4 first:mt-0">
            {/* To keep in the same column -----------------------------------------------------------------------*/}
            <section className="break-inside-avoid">
              <section className="pb-4 mb-2 border-b-4 border-gray-300 break-inside-avoid">
                <ul className="list-inside pr-7">
                  <li
                    className="mt-1 leading-normal text-black transition duration-100 ease-in text-gray-500 text-md hover:text-gray-700 print:"
                  >
                    <a href="https://rammohanholagundi.net" className="group">
                      <span
                        className="mr-2 text-lg font-semibold text-gray-700 leading-snugish"
                      >
                        Portfolio:
                      </span>
                      rammohanholagundi.net
                      <span
                        className="inline-block font-normal text-black transition duration-100 ease-in text-gray-500 print:text-black group-hover:text-gray-700 print:"
                      >
                        
                      </span>
                    </a>
                  </li>
                  <li
                    className="mt-1 leading-normal transition duration-100 ease-in text-gray-500 text-md hover:text-gray-700"
                  >
                    <a href="https://github.com/hrm123" className="group">
                      <span
                        className="mr-5 text-lg font-semibold text-gray-700 leading-snugish"
                      >
                        Github:
                      </span>
                        hrm123
                      <span
                        className="inline-block font-normal text-black transition duration-100 ease-in text-gray-500 print:text-black group-hover:text-gray-700 print:"
                      >
                        
                      </span>
                    </a>
                  </li>

                  <li
                    className="mt-1 leading-normal transition duration-100 ease-in text-gray-500 text-md hover:text-gray-700"
                  >
                    <a href="mailto:hrammohan@yahoo.com" className="group">
                      <span
                        className="mr-8 text-lg font-semibold text-gray-700 leading-snugish"
                      >
                        Email:
                      </span>
                      hrammohan@yahoo.com
                      <span
                        className="inline-block font-normal transition duration-100 ease-in text-gray-500 print:text-black group-hover:text-gray-700"
                      >
                        
                      </span>
                    </a>
                  </li>
                  <li
                    className="mt-1 leading-normal transition duration-100 ease-in text-gray-500 text-md hover:text-gray-700"
                  >
                    <a href="https://www.linkedin.com/in/rammohanholagundi/">
                      <span
                        className="mr-5 text-lg font-semibold text-gray-700 leading-snugish"
                      >
                        Linkedin:
                      </span>
                      www.linkedin.com/in/rammohanholagundi/
                    </a>
                  </li>
                </ul>
              </section>
            </section>
          </section>
    );
}

export default React.memo(Contact);