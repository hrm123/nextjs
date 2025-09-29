import React from 'react';

const Contact = () => {
    return (
        <section className="pb-2 mb-0 mt-4 first:mt-0">
            {/* To keep in the same column -----------------------------------------------------------------------*/}
            <section className="break-inside-avoid">
              <section className="pb-4 mb-2 border-b-4 border-gray-300 break-inside-avoid">
                <ul className="list-inside pr-7">
                  <li
                    className="mt-1 leading-normal  transition duration-100 ease-in  text-md hover: print:"
                  >
                    <a href="https://rammohanholagundi.net" className="group">
                      <span
                        className="mr-2 text-lg font-semibold  leading-snugish"
                      >
                        Portfolio:
                      </span>
                      rammohanholagundi.net
                      <span
                        className="inline-block font-normal  transition duration-100 ease-in  print: group-hover: print:"
                      >
                        
                      </span>
                    </a>
                  </li>
                  <li
                    className="mt-1 leading-normal transition duration-100 ease-in  text-md hover:"
                  >
                    <a href="https://github.com/hrm123" className="group">
                      <span
                        className="mr-5 text-lg font-semibold  leading-snugish"
                      >
                        Github:
                      </span>
                        hrm123
                      <span
                        className="inline-block font-normal  transition duration-100 ease-in  print: group-hover: print:"
                      >
                        
                      </span>
                    </a>
                  </li>

                  <li
                    className="mt-1 leading-normal transition duration-100 ease-in  text-md hover:"
                  >
                    <a href="mailto:hrammohan@yahoo.com" className="group">
                      <span
                        className="mr-8 text-lg font-semibold  leading-snugish"
                      >
                        Email:
                      </span>
                      hrammohan@yahoo.com
                      <span
                        className="inline-block font-normal transition duration-100 ease-in  print: group-hover:"
                      >
                        
                      </span>
                    </a>
                  </li>
                  <li
                    className="mt-1 leading-normal transition duration-100 ease-in  text-md hover:"
                  >
                    <a href="https://www.linkedin.com/in/rammohanholagundi/">
                      <span
                        className="mr-5 text-lg font-semibold  leading-snugish"
                      >
                        Linkedin:
                      </span>
                      www.linkedin.com/in/rammohanholagundi/
                    </a>
                  </li>
                  <li
                    className="mt-1 leading-normal transition duration-100 ease-in  text-md hover:"
                  >
                    <a href="mailto:hrammohan@yahoo.com" className="group">
                      <span
                        className="mr-8 text-lg font-semibold  leading-snugish"
                      >
                        Work Authorization:
                      </span>
                      Citizen of USA
                      <span
                        className="inline-block font-normal transition duration-100 ease-in  print: group-hover:"
                      >
                        
                      </span>
                    </a>
                  </li>
                </ul>
              </section>
            </section>
          </section>
    );
}

export default React.memo(Contact);