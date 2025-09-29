

import Link from 'next/link';
import React from 'react';


const Skills = () => {

return (
  <section className="pb-6 mb-4 mt-0 first:mt-0 break-inside-avoid border-b-4 border-gray-300 ">
  {/* To keep in the same column */}
  <section className="break-inside-avoid">
    <h2
      className="mb-2 text-lg font-bold tracking-widest  print:font-normal"
    >
      SKILLS<sup>*</sup>
    </h2>
    <section className="mb-0 break-inside-avoid">
      <section className="mt-1 last:pb-1">
        <ul
          className="flex flex-wrap text-md leading-relaxed -mr-1.6 -mb-1 font-bold"
        >
          <li
            className="p-1.5 mr-1.6 mb-1 text-white leading-relaxed print:bg-white print:border-inset bg-gray-800"
          >
           <span
                        className="text-sm"
                      >Frontend - </span><Link href="/tech/1" className='underline'>React</Link>/<Link href="/tech/2" className='underline'>Angular</Link>/asp.net/.net core/.net framework/Micro Frontends/<Link href="/tech/3" className='underline'>React Native</Link> 
          </li>
          <li
            className="p-1.5 mr-1.6 mb-1 text-white leading-relaxed print:bg-white print:border-inset bg-gray-800"
          >
            <span
                        className="text-sm"
                      >Languages - </span>C#/Javascript/Typescript/TSQL/C++/VB.NET/Java/Python
          </li>
          <li
            className="p-1.5 mr-1.6 mb-1 text-white leading-relaxed print:bg-white print:border-inset bg-gray-800"
          >
            <span
                        className="text-sm"
                      >Server Side - </span>Micro Services/Parallel programming/Design patterns/Application Architecture/Azure/GCP/AWS
          </li>
          <li
          className="p-1.5 mr-1.6 mb-1 text-white leading-relaxed print:bg-white print:border-inset bg-gray-800"
        >
          <span className="text-sm">Database - </span>SQL server/Oracle/Postgres/Elastic Search/Mongo/Firebase
        </li>
        
        <li
          className="p-1.5 mr-1.6 mb-1 text-white leading-relaxed print:bg-white print:border-inset bg-gray-800"
        >
          <span className="text-sm">Management - </span>Tech Lead/Agile/Xp/Scrum/JIRA/Project Management
        </li>
          </ul>

      </section>
    </section>
    </section>
  </section>
);
}

export default React.memo(Skills);