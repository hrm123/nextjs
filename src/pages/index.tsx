import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Link from 'next/link'
import ReactFlow, { Controls, Edge, EdgeTypes } from 'reactflow'
import 'reactflow/dist/style.css'
import CustomEdge from '@/components/customFlowEdge'

const inter = Inter({ subsets: ['latin'] })

const edgeTypes: EdgeTypes = {
  custom: CustomEdge,
};


const range = (start: number, stop: number, step: number) =>
  Array.from({ length: (stop - start) / step + 1 }, (_, i) => start + i * step);
console.log({range: range(2004,2023,1)})
const initialNodes = range(2004,2023,1).map((year,iter) => ({id: `${iter}`, position: {x: iter*60, y: iter*60}, data: {label: `${year}`}}));

console.log(initialNodes);
const initialEdges : Edge[] =  range(2004,2023,1).map((year,iter) => ({id:`e${iter}-${iter+1}`, source: `${iter}`, target:`${iter+1}`, type: 'custom', data: {year}}))
//[{ id: 'e1-2', source: '1', target: '2' }];
console.log({initialEdges})
export default function ResumeFlow() {
  return ( <>
  {/* page */}
    <section className="max-w-3xl p-3 mx-auto my-auto bg-gray-100 border-4 border-gray-700 print:border-0 page print:max-w-letter print:max-h-letter print:mx-0 print:my-o lg:h-letter md:max-w-letter md:h-letter xsm:p-8 sm:p-9 md:p-16 lg:mt-6 rounded-2xl print:bg-white">
      <header
            className="inline-flex items-baseline justify-between w-full mb-2 align-top border-b-4 border-gray-300"
          >
            <section className="block">
              <h1 className="mb-0 text-5xl font-bold text-gray-700">
                Rammohan Holagundi
              </h1>
              <h2
                className="m-0 ml-2 text-2xl font-semibold text-gray-700 leading-snugish"
              >
                Hands on full stack tech lead - Microsoft/Javascript stacks
              </h2>
              <h3
                className="m-0 mt-2 ml-2 font-semibold text-lg text-gray-500 leading-snugish"
              >
                San Diego, California
              </h3>
            </section>
            <section
              className="justify-between px-3 mt-0 mb-5 text-4xl font-bold leading-none text-white initials-container bg-gray-700 print:bg-black"
              style={{paddingBottom: "1.5rem", paddingTop: "1.5rem"}}
            >
              <section className="text-center initial">H</section>
              <section className="text-center initial">R</section>
              <section className="text-center initial">M</section>
            </section>
      </header>
      {/* Column -------------------------------------------------------------------------------------------------- */}
        <section
          className=" col-gap-8 md:col-count-2 print:col-count-2 md:h-letter-col-full print:h-letter-col-full col-fill-balance"
        ><section className="flex-col">
          {/* Contact Information ----------------------------------------------------------------------------------*/}
          <section className="pb-2 mb-0 mt-4 first:mt-0">
            {/* To keep in the same column -----------------------------------------------------------------------*/}
            <section className="break-inside-avoid">
              <section className="pb-4 mb-2 border-b-4 border-gray-300 break-inside-avoid">
                <ul className="list-inside pr-7">
                  <li
                    className="mt-1 leading-normal text-black transition duration-100 ease-in text-gray-500 text-md hover:text-gray-700 print:"
                  >
                    <a href="https://rammohanholagundi.com" className="group">
                      <span
                        className="mr-2 text-lg font-semibold text-gray-700 leading-snugish"
                      >
                        Portfolio:
                      </span>
                      rammohanholagundi.com
                      <span
                        className="inline-block font-normal text-black transition duration-100 ease-in text-gray-500 print:text-black group-hover:text-gray-700 print:"
                      >
                        ↗
                      </span>
                    </a>
                  </li>
                  <li
                    className="mt-1 leading-normal transition duration-100 ease-in text-gray-500 text-md hover:text-gray-700"
                  >
                    <a href="https://github.com/Thomashighbaugh" className="group">
                      <span
                        className="mr-5 text-lg font-semibold text-gray-700 leading-snugish"
                      >
                        Github:
                      </span>
                        hrm123
                      <span
                        className="inline-block font-normal text-black transition duration-100 ease-in text-gray-500 print:text-black group-hover:text-gray-700 print:"
                      >
                        ↗
                      </span>
                    </a>
                  </li>

                  <li
                    className="mt-1 leading-normal transition duration-100 ease-in text-gray-500 text-md hover:text-gray-700"
                  >
                    <a href="mailto:thighbaugh@zoho.com" className="group">
                      <span
                        className="mr-8 text-lg font-semibold text-gray-700 leading-snugish"
                      >
                        Email:
                      </span>
                      hrammohan@yahoo.com
                      <span
                        className="inline-block font-normal transition duration-100 ease-in text-gray-500 print:text-black group-hover:text-gray-700"
                      >
                        ↗
                      </span>
                    </a>
                  </li>
                  <li
                    className="mt-1 leading-normal transition duration-100 ease-in text-gray-500 text-md hover:text-gray-700"
                  >
                    <a href="tel:+15103095128">
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
          {/*Summary -------------------------------------------------------------------------------------------------------*/}
          <section className="pb-2 pb-4 mt-0 border-b-4 border-gray-300 first:mt-0">
            {/* To keep in the same column */}
            <section className="break-inside-avoid">
              <h2
                className="mb-2 text-xl font-bold tracking-widest text-gray-700 print:font-normal"
              >
                SUMMARY
              </h2>

              <section className="mb-2 break-inside-avoid">
                <p className="mt-2 leading-normal text-gray-700 text-md">
                Over 20+ years of full stack work experience (.NET / Javascript stack, SQL, NoSql etc) in developing/ architecting/ maintaining/ supporting including web, mobile, web services, distributed, multi-threaded, high performance/throughput applications.
                </p>
              </section>
            </section>
          </section>

             {/*Education -----------------------------------------------------------------------------------------------------*/}
             <section className="pb-0 break-inside-avoid mt-2 border-b-4 border-gray-300 first:mt-0">
              {/* To keep in the same column */}
              <section className="break-inside-avoid">
                <h2
                  className="mb-2 text-lg font-bold tracking-widest text-gray-700 print:font-normal"
                >
                  EDUCATION
                </h2>
                {/* school ------------------------------------------------------------------------*/}
                <section className="pb-4 mt-4 mb-4 border-b-2 break-inside-avoid">
                  <header>
                    <h3
                      className="flex-grow text-lg font-semibold text-gray-700 leading-snugish"
                    >
                      Stanford University
                    </h3>
                    <p className="leading-normal text-md text-gray-500">
                      2022  | Algorithms Specialization
                      Education
                    </p>
                  </header>
                  <p className="mt-1 leading-normal text-md text-gray-800">
                    <span
                      className="font-semibold text-gray-700 text-md leading-snugish"
                    >
                      Major:
                    </span>
                    Algorithms
                  </p>
                  <p className="mt-1 leading-normal text-md text-gray-800"></p>
                  <p className="leading-normal text-gray-700 text-md">
                    <span
                      className="font-semibold text-gray-700 text-md leading-snugish"
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
                      className=" text-lg font-semibold text-gray-700 leading-snugish"
                    >
                      Indian Institure of technology, Kanpur
                    </h3>
                    <p className="leading-normal text-md text-gray-500">
                      Master of Engineering
                    </p>
                  </header>
                  <p className="mt-1 leading-normal text-md text-gray-800">
                    <span
                      className="font-semibold text-gray-700 text-md leading-snugish"
                    >
                      Major:
                    </span>
                    Mechanical Engineering
                  </p>
                  <p className="mt-1 leading-normal text-md text-gray-800">
                    <span
                      className="font-semibold text-gray-700 text-md leading-snugish"
                    >
                      Minor:
                    </span>
                    Computers
                  </p>
                  <p className="leading-normal text-gray-700 text-md">
                    <span
                      className="font-semibold text-gray-700 text-md leading-snugish"
                    >
                      GPA:
                    </span>
                    9.6
                  </p>
                </section>
  
                {/*school 3 ------------------------------------------------------------------------------*/}
                <section className="pb-4 mt-4 mb-4 break-inside-avoid">
                  <header>
                    <h3
                      className="flex-grow text-lg font-semibold text-gray-700 leading-snugish"
                    >
                      Osmania University
                    </h3>
                    <p className="leading-normal text-md text-gray-500">
                       Bachelors of Engineering
                    </p>
                  </header>
                  <p className="mt-1 leading-normal text-md text-gray-800">
                    <span
                      className="font-semibold text-gray-700 text-md leading-snugish"
                    >
                      Subject:
                    </span>
                    Mechanical Engineering
                  </p>
                </section>
              </section>
            </section>
          
            {/*Begin Skills --------------------------------------------------------------------------------------------------*/}
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
                        React/Angular/Javascript/Typescript/Micro Frontends/React Native/asp.net core/asp.net
                      </li>
                      <li
                        className="p-1.5 mr-1.6 mb-1 text-white leading-relaxed print:bg-white print:border-inset bg-gray-800"
                      >
                        C#/.net core/.net/Micro Services/Multi threaded programming/Design patterns/C++
                      </li>
                      <li
                        className="p-1.5 mr-1.6 mb-1 text-white leading-relaxed print:bg-white print:border-inset bg-gray-800"
                      >
                        Azure Devops/CI/CD/Containerization
                      </li>
                      <li
                      className="p-1.5 mr-1.6 mb-1 text-white leading-relaxed print:bg-white print:border-inset bg-gray-800"
                    >
                      SQL server / Oracle / TSQL / Elastic Search / Mongo / Firebase
                    </li>
                    <li
                      className="p-1.5 mr-1.6 mb-1 text-white leading-relaxed print:bg-white print:border-inset bg-gray-800"
                    >
                      Decent knowlege of Azure/AWS/Google cloud/Java
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
          {/*Experience ---------------------------------------------------------------------------------------------------*/}
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
                    Hands of full stack tech lead
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
                    Developed high-quality web applications from scratch, using a range of programming languages, including HTML, CSS, JavaScript, PHP, and Python, to meet clients' specific needs
                  </li>
                  <li>
                    <span
                      className="transform -translate-y-px select-none text-gray-500"
                    >
                      &rsaquo;
                    </span>
                    Utilized various front-end frameworks, such as React, Angular, and Vue.js, and back-end frameworks, such as Node.js, Express, and Laravel, to deliver robust and scalable web solutions. 
                  </li>
                  <li>
                    <span
                      className="transform -translate-y-px select-none text-gray-500"
                    >
                      &rsaquo;
                    </span>
                    Designed and implemented databases using SQL and NoSQL technologies, such as MySQL, PostgreSQL, MongoDB, and Firebase, to store and manage data effectively
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
                    Provided freelance computer repair services to individual and business clients, including troubleshooting, diagnosis, and repair of hardware and software issues.
                  </li>
                  <li>
                    <span
                      className="transform -translate-y-px select-none text-gray-500"
                    >
                      &rsaquo;
                    </span>
                    Demonstrated expertise in a range of operating systems, including Windows, macOS, and Linux, and a variety of hardware components, including CPUs, RAM, hard drives, and graphics cards.
                  </li>
                  <li>
                    <span
                      className="transform -translate-y-px select-none text-gray-500"
                    >
                      &rsaquo;
                    </span>
                    Offered customized solutions to clients, including hardware upgrades, software installations, and virus/malware removal, to meet their specific needs.
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
                  Trained and supervised staff on product knowledge, customer engagement, and sales techniques.
                </li>
                <li>
                  <span
                    className="transform -translate-y-px select-none text-gray-500"
                  >
                    &rsaquo;
                  </span>
                  Maintained a clean and organized store environment, ensuring the highest level of customer satisfaction.
                </li>
    
                <li>
                  <span
                    className="transform -translate-y-px select-none text-gray-500"
                  >
                    &rsaquo;
                  </span>
                  Demonstrated a deep understanding of the pet food industry, including trends, products, and competitors, to provide customers with informed recommendations and advice.
                </li>
              </ul>
            </section>
         
              {/*                Additional Jobs Would Go Here*/}
            </section>
          </section>
       
          
            </section>
          </section>
        </section>
        {/* End Column -------------------------------------------------------------------------------------------------- */}
    {/* end page */}
    
    </>
  )
}
