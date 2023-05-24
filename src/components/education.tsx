

import React from 'react';


const Education = () => {

return (
    <section className="pb-0 break-inside-avoid mt-2 border-b-4 border-gray-300 first:mt-0">
              {/* To keep in the same column */}
              <section className="break-inside-avoid">
                <h2
                  className="mb-2 text-lg font-bold tracking-widest  print:font-normal"
                >
                  EDUCATION
                </h2>
                {/* school ------------------------------------------------------------------------*/}
                <section className="pb-4 mt-4 mb-4 border-b-2 break-inside-avoid">
                  <header>
                    <h3
                      className="flex-grow text-lg font-semibold  leading-snugish"
                    >
                      Stanford University
                    </h3>
                    <p className="leading-normal text-md ">
                      <a className='underline' href='https://www.coursera.org/account/accomplishments/specialization/certificate/5RZXGG8ZS4FC'>Algorithms Specialization</a>
                    </p>
                  </header>
                  
                  <p className="mt-1 leading-normal text-md text-gray-800"></p>
                  <p className="leading-normal  text-md">
                    <span
                      className="font-semibold  text-md leading-snugish"
                    >
                      GPA:
                    </span>
                    4.0
                  </p>
                </section>
                {/*school 2------------------------------------------------------------------------------------------*/}
                
                <section className="mt-2  border-b-2 break-inside-avoid">
                  <header>
                    <h3
                      className=" text-lg font-semibold  leading-snugish"
                    >
                      Indian Institute of technology, Kanpur
                    </h3>
                    <p className="leading-normal text-md ">
                      Master of Engineering
                    </p>
                  </header>
                  <p className="mt-1 leading-normal text-md text-gray-800">
                    <span
                      className="font-semibold  text-md leading-snugish"
                    >
                      Major:
                    </span>
                    Mechanical Engineering
                  </p>
                  
                  <p className="leading-normal  text-md">
                    <span
                      className="font-semibold  text-md leading-snugish"
                    >
                      GPA:
                    </span>
                    9.6
                  </p>
                </section>
  
                {/*school 3 ------------------------------------------------------------------------------*/}
                <section className="mt-4 break-inside-avoid">
                  <header>
                    <h3
                      className="flex-grow text-lg font-semibold  leading-snugish"
                    >
                      Osmania University
                    </h3>
                    <p className="leading-normal text-md ">
                       Bachelors of Engineering
                    </p>
                  </header>
                  <p className="mt-1 leading-normal text-md text-gray-800">
                    <span
                      className="font-semibold  text-md leading-snugish"
                    >
                      Subject:
                    </span>
                    Mechanical Engineering
                  </p>
                  <p className="leading-normal  text-md">
                    <span
                      className="font-semibold  text-md leading-snugish"
                    >
                      GPA:
                    </span>
                    8.4
                  </p>
                </section>
              </section>
            </section>
);
}

export default React.memo(Education);