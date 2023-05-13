

import Link from 'next/link';
import React from 'react';


const Skills = () => {

return (
  <section className="pb-6 mb-4 mt-0 first:mt-0 break-inside-avoid border-b-4 border-gray-300 ">
  {/* To keep in the same column */}
  <section className="break-inside-avoid">
    <h2
      className="mb-2 text-lg font-bold tracking-widest text-gray-700 print:font-normal"
    >
      SKILLS
    </h2>
    <section className="mb-0 break-inside-avoid">
      <section className="mt-1 last:pb-1">
        <ul
          className="flex flex-wrap text-md leading-relaxed -mr-1.6 -mb-1 font-bold"
        >
          <li
            className="p-1.5 mr-1.6 mb-1 text-white leading-relaxed print:bg-white print:border-inset bg-gray-800"
          >
            <Link href="/tech/1" className='underline'>React</Link>/<Link href="/tech/2" className='underline'>Angular</Link>/Javascript/Typescript/Micro Frontends/<Link href="/tech/3" className='underline'>React Native</Link>/asp.net core/asp.net
          </li>
          <li
            className="p-1.5 mr-1.6 mb-1 text-white leading-relaxed print:bg-white print:border-inset bg-gray-800"
          >
            C#/.net core/.net/Micro Services/Multi threaded programming/Design patterns/C++
          </li>
          <li
            className="p-1.5 mr-1.6 mb-1 text-white leading-relaxed print:bg-white print:border-inset bg-gray-800"
          >
            Decent knowlege of Azure Devops/CI/CD/Containerization/Azure/AWS/Google cloud
          </li>
          <li
          className="p-1.5 mr-1.6 mb-1 text-white leading-relaxed print:bg-white print:border-inset bg-gray-800"
        >
          SQL server / Oracle / TSQL / Elastic Search / Mongo / Firebase
        </li>
        
        <li
          className="p-1.5 mr-1.6 mb-1 text-white leading-relaxed print:bg-white print:border-inset bg-gray-800"
        >
          Agile/Xp/Scrum/JIRA/Project Management
        </li>
          </ul>
      </section>
    </section>
    </section>
  </section>
);
}

export default React.memo(Skills);