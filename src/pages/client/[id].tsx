import React from 'react';
import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import { useRouter } from 'next/router'
import Header from '@/components/header'
//@ts-ignore
import { ChatIcon, HomeIcon, PhoneIcon } from "@heroicons/react/20/solid";
import Link from 'next/link'
import ThemeSwitch from '@/components/themeSwitch';

const inter = Inter({ subsets: ['latin'] })


const clientMap: { [id: string]: any} = {}
clientMap['1'] = {
  title: 'Bank of America',
  id: 1,
  projects : [
    {
      name: 'Senior Consultant - Skillstorm, NJ/remote ',
      dates: 'Sep 2020 - Sep 2021',
      details: 'Working on full SDLC of enterprise website (GIS)  using technologies like angular 10, .net core, c#, web apis, sql server'
    },
    {
      name: 'Senior Consultant - Mitchell Martin, NY ',
      dates: 'June 2018 – Dec 2019',
      details: 'Worked on developing server side SOA/ Micro Services design/architecture of mobile app ‘Insight’ for Bank of America. Work involved creating microservices, orchestrating microservices to consume data from different business groups, deployment, maintenance and production support. Main technologies used – C#, Angular, SQL server, Java, Mulesoft Anypoint Studio, Oracle. Developed a content management system framework using Angular 7/ MongoDB for codeweek. Developed a augmented video recording system using ArCore for codeweek. Created design for microservices Auth/throttling using JWT, design document for SOA layer, push notifications etc. and implemented these features. For Codeweek implemented augmented reality application (Arcore / video recording) along with streaming protobuf / grpc (hosted in AWS)'
    },
    {
      name: 'Developer Level4  - TEK Systems, NY/NJ ',
      dates: 'June 2015 – Nov 2016',
      details: '•	UI development :- Design and  implementation of several views using Angular/asp.net mvc/kendo angular based UI for RAILS intranet website. Used concepts like angular views, routes, ngroute, uirouter, controllers, services, directives (for reusable business components) etc and asp.net views, controllers, partial views, bundling, and kendo angular widgets like grid, dropdown etc. ' +
      ' •	Middle tier :– Design and implementation of middle tier based n entity framework, repository pattern and unit of work and dependency injection. Creating web services (SOAP based with WCF, RESTful with webAPI) for several tasks like reporting, approval work flow etc. using entity framework code first approach. Design and implementation of logging and identity that correlates a flow across across n-tiers. Designed and implemented Excel export of the reports using OpenXML including storing/retrieving huge excel documents (~50MB+) in sql server  and a multi-threaded batch process for excel exports. ' +
      '•	Database tier :– Repository pattern and unit of work based DAL, several stored procs/functions (t-sql) for generating reports datasets consisting millions of rows and use server based paging, filtering and sorting for the dataset, uploading and downloading 100MB+ excel files from UI<-> sql server database. ' +
      ' •	Environment :- visual studio 2012, .net framework 4.0/4.5, asp.net mvc, angular 1.3, kendo ui, twitter bootstrap, perforce source control with branching and merging, WCF,Web API,  ninject/MEF,  IIS, sql server 2012, Agile / scrum process using Altassian JIRA, perforce and other tools. '+
      ' •	Misc :- Assigning work and coordinating offshore resource(s) for few tasks, production support and troubleshooting, communicating with BA team on daily basis to gather and clarify requirements and helping the team on testing setup.'
       
    },
  ]
};

clientMap['2'] = {
  title: 'GEP/NB Ventures',
  id:2,
  projects : [
    {
      name: 'Principal Software Engineer',
      dates: 'Jan 2020 - Mar 2020',
      details: 'Worked on developing/design/architecture for  supply chain planning product using .net core, angular, react native, C#, .net core web api (REST, Azure cloud, Entity Framework, Design patterns), sql server (Azure) and other technologies to develop a instant messaging system (angular, firebase, google cloud, nodejs) and design/framework/prototype for multi tenant mobile application (react native, redux, saga etc) using the concept of MicroFrontends and MicroServices'
    }
  ]
  };

clientMap['3'] = {
  title: 'PwC',
  id:3,
  projects : [
    {
      name: 'Tech Lead - PwC/Infosys',
      dates: 'Dec 2021 - Sep 2022',
      details: 'Hands on tech lead creating Next Generation Audit website (Center of Excellence) is creating enterprise websites with latest architecture - React/Redux/C#/Azure/Micro Services/ gRPC,, web apis, sql server'
    },
    {
      name: 'Tech Lead - PwC/Infosys',
      dates: 'Sep 2022 - May 2023',
      details: 'Hands on tech lead working on design, architect, coding, dev-ops for next generation audit (Acceleration cecnter) website using technologies -  React, Redux Toolkit, Flux,  Typescript, Fluent UI (React),  webpack, SCSS, react bootstrap, C#, .NET core, Azure, Micro Frontends, CI/CD with azure devops, authentication & authorization, Microservices using gRPC/REST, C#, sql server, mongo'
    }
  ]
  };
 
  clientMap['4'] = {
    title: 'Software Engineer II - Trade Station',
    id:4,
    projects : [
      {
        name: 'Tradestation.com ',
        dates: 'Sep 2021 - Dec  2021',
        details: 'Worked on developing/enhancing react screens, auth0 logon process for web site tradestation.com. Technologies – React, AWS, Gitlab, Auth0'
      }
    ]
  };

  clientMap['6'] = {
    title: 'Senior Consultant - Moodys Analytics /  Sail Technologies',
    id:6,
    projects : [
      {
        name: 'Moodys website ',
        dates: 'Sep 2021 - Dec  2021',
        details: 'Worked on Moodys analytics website rewrite using technologies like ReactJS, Redux, Javascript/ES2015,  Babel, linting, Node.JS,  C#, HTML5, CSS3, LESS, asp.net mvc, web api, rally, agile, TDD (mocha, chai etc), Hapi server, SOA, Micro services. ' +
        ' •	Developed React/Redux components to be used in various parts of the responsive screening and reporting web site. ' +
        ' •	Talking to onsite BAs, offshore QA team, and scrum standups with team and project management being part of other daily tasks. ' 
      }
    ]
  };

  clientMap['8'] = {
    title: 'Lead Consultant - Aetna',
    id:8,
    projects : [
      {
        name: 'Claims Validation website ',
        dates: 'May 2020 - Sep  2020',
        details: 'Working on full SDLC of enterprise website (claims validations project)  using technologies like react, asp.net, c#, web apis, sql server' 
      }
    ]
  };

function ClientPage() {
  const router = useRouter();
  const selectedClient = router.query.id ? router.query.id[0] : '1';
  console.log({selectedClient})
  return (
    <section className="max-w-3xl p-3 mx-auto my-auto bg-gray-100 border-4 border-gray-700 print:border-0 page print:max-w-letter print:max-h-letter print:mx-0 print:my-o lg:h-letter md:max-w-letter md:h-letter xsm:p-8 sm:p-9 md:p-16 lg:mt-6 rounded-2xl print:bg-white">
        <Link href="/" className="float-right"><HomeIcon className="h-10 w-10 mx-2"/></Link><ThemeSwitch />
        <h1 className="mb-0 text-5xl font-bold text-gray-700">{`${clientMap[selectedClient].title}`}</h1>
        {clientMap[selectedClient].projects.map((client:any) => (
          <section key={client.id} className="mb-2 break-inside-avoid border-t-2 border-gray-300">
            <header>
              <h3
                className="text-md font-semibold text-gray-800 leading-snugish "
              >
                {client.name}
              </h3>
              <p className="leading-normal text-sm text-gray-500">
                {client.dates}
              </p>
            </header>
            <p className="text-md text-gray-800">
              {client.details}
            </p>
        </section>
        ))}
        
    </section>
  )
}



export default React.memo(ClientPage)