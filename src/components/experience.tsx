import React from 'react';


const Experience = () => {
    return (
      <section className="pb-2 pb-4 mt-4 border-b-4 border-gray-300 first:mt-0">
      {/* To keep in the same column ----------------------------------------------------------------------*/}
      <section className="break-inside-avoid">
        <h2
          className="mb-2 text-xl font-bold tracking-widest text-gray-800 print:font-normal"
        >
          EXPERIENCE
        </h2>
        {/*Job 1*/}
        <section className="mb-2 break-inside-avoid border-b-2 border-gray-300">
          <header>
            <h3
              className="text-md font-semibold text-gray-800 leading-snugish "
            >
              Hands on full stack tech lead / Senior Consultant
            </h3>
            <p className="leading-normal text-sm text-gray-500">
              Feb 2014 &ndash; Present
            </p>
          </header>
          <ul className="mt-2 font-normal text-md  text-gray-700 leading-snugish pl-3">
          <li>
              <span
                className="transform -translate-y-px select-none text-gray-500"
              >
                &rsaquo;
              </span>
              Developed high-quality  applications full software development life cycle for clients - PwC, Trade Station, Bank of America, Aetna, NB Ventures,Invonto, Verisk,Moodys
            </li>
            <li>
              <span
                className="transform -translate-y-px select-none text-gray-500"
              >
                &rsaquo;
              </span>
              Utilized various front-end frameworks, such as React, Angular, asp.net, Micro frontends, & back-end frameworks, such as Cloud technologies, Micro services,  C#, Design patterns, Devops, to deliver robust and scalable web solutions. 
            </li>
            <li>
              <span
                className="transform -translate-y-px select-none text-gray-500"
              >
                &rsaquo;
              </span>
              Designed and implemented databases using SQL and NoSQL technologies, such as SQL server, Elastic Search, MongoDB, and Firebase, to store and manage data effectively
            </li>
     
          </ul>
        </section>
      {/* job 2  */}
        <section className="mb-2 break-inside-avoid border-b-2 border-gray-300">
          <header>
            <h3
              className="text-md font-semibold text-gray-800 leading-snugish"
            >
              Senior software engineer
            </h3>
            <p className="leading-snugish text-sm text-gray-500">
            May 2004 &ndash; Jan 2014
            </p>
          </header>
          <ul className="mt-2 font-normal text-md  text-gray-700 leading-snugish pl-3">
            <li>
              <span
                className="transform -translate-y-px select-none text-gray-500"
              >
                &rsaquo;
              </span>
              Developed high-quality  applications full software development life cycle for clients - City of NewYork, KPMG, Northpoint Solutions, Prudential, Citi Group, AIG, Credit Suisse, Ipreo, Redcats, Verizon
            </li>
            <li>
              <span
                className="transform -translate-y-px select-none text-gray-500"
              >
                &rsaquo;
              </span>
              Utilized various front-end frameworks, such as Angular, asp.net, winforms, asp,  & back-end frameworks, such as Web services,  C#, Design patterns, c++, COM,  to deliver robust and scalable web solutions. 
            </li>
            <li>
              <span
                className="transform -translate-y-px select-none text-gray-500"
              >
                &rsaquo;
              </span>
              Designed and implemented databases using SQL server and Oracle, to store and manage data effectively
            </li>
        
   
          </ul>
        </section>
      {/* job 3 */}
      <section className="mb-2 break-inside-avoid border-b-2 border-gray-300">
        <header>
          <h3
            className="text-md font-semibold text-gray-800 leading-snugish"
          >
            Part time projects
          </h3>
          <p className="leading-snugish text-sm text-gray-500">
            Feb 2010 to present
          </p>
        </header>
        <ul className="mt-2 font-normal text-md  text-gray-700 leading-snugish pl-3">
          <li>
            <span
              className="transform -translate-y-px select-none text-gray-500"
            >
              &rsaquo;
            </span>
            Developed few react native apps for android/ios - financial, productivity, Augmented Reality
          </li>
          <li>
            <span
              className="transform -translate-y-px select-none text-gray-500"
            >
              &rsaquo;
            </span>
            Several part time projects or courses/specializations - Algorithms with Stanford University,  C++ algorithms from UIUC, TDD/BDD, Nextjs, Ruby on Rails, etc 
          </li>

          
        </ul>
      </section>
   
        {/*                Additional Jobs Would Go Here*/}
      </section>
    </section>
    );
}

export default React.memo(Experience);