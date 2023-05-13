import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import { useRouter } from 'next/router'
import Header from '@/components/header'
//@ts-ignore
import { ChatIcon, HomeIcon, PhoneIcon } from "@heroicons/react/20/solid";
import Link from 'next/link'
const inter = Inter({ subsets: ['latin'] })


const techMap: { [id: string]: any} = {}
techMap['1'] = {
  title: 'React Projects',
  clients : [
    {
      name: 'Hands on full stack tech lead - Infosys/Pwc',
      id:1,
      dates: 'Dec 2021 - Present',
      details: 'Hands on tech lead working on design, architect, coding, dev-ops for next generation audit website (NGA) using technologies -  React, Redux Toolkit, Flux,  Typescript, Fluent UI (React),  webpack, SCSS, react bootstrap, C#, .NET core, Azure, Micro Frontends, Module Federation,  CI/CD with azure devops, authentication (Azure AD) & authorization, Microservices using gRPC/REST, C#, sql server, mongo'
    },
    {
      name: 'Software Engineer II - Tradestation',
      id:2,
      dates: 'Sep 2021 - Dec 2021',
      details: 'Working on developing/enhancing react screens, auth0 logon process for web site tradestation.com. Technologies – React, AWS, Gitlab, Auth0'
    },
    {
      name: 'Lead Consultant - Aetna',
      id:3,
      dates: 'May 2020 - Sep 2020',
      details: 'Working on full SDLC of enterprise website (claims validations project)  using technologies like react, asp.net, c#, web apis, sql server'
    },
    {
      name: 'senior Consultant - Moodys Analytics / SAIL Technologies',
      id:4,
      dates: 'Nov 2016 - Jan 2017',
      details: 'Worked on Moodys analytics website rewrite using technologies like ReactJS, Redux, Javascript/ES2015,  Babel, linting, Node.JS,  C#, HTML5, CSS3, LESS, asp.net mvc, web api, rally, agile, TDD (mocha, chai etc), Hapi server, SOA, Micro services'
    },
    {
      name: 'Principal Software Engineer - NB Ventures/GEP',
      id:5,
      dates: 'Jan 2020 - Mar 2020',
      details: 'Worked on developing/design/architecture for  supply chain planning product using .net core, angular, react native, C#, .net core web api (REST, Azure cloud, Entity Framework, Design patterns), sql server (Azure) and other technologies to develop a instant messaging system (angular, firebase, google cloud, nodejs) and design/framework/prototype for multi tenant mobile application (react native, redux, saga etc) using the concept of MicroFrontends and MicroServices'
    },
    {
      name: 'SafeFinance – Parttime (Right now not maintaining the app)',
      id:6,
      dates: 'Jan 2018 - Mar 2020',
      details: 'App that lets user to set time or price-based alerts for market tickers so that they can be alerted, and they can buy/sell the positions - https://play.google.com/store/apps/details?id=com.portfoliodroid247.pitechworks.safefinance  '
    },
  ]
};

techMap['2'] = {
  title: 'Angular Projects',
  clients : [
    {
      name: 'Senior Consultant - Bank of America/SkillStorm, Remote',
      id:1,
      dates: 'Sep 2020 - Sep 2021',
      details: 'Working on full SDLC of enterprise website (claims validations project)  using technologies like react, asp.net, c#, web apis, sql server'
    },
    {
      name: 'Principal Software Engineer - NB Ventures/GEP',
      id:2,
      dates: 'Jan 2020 - Mar 2020',
      details: 'Worked on developing/design/architecture for  supply chain planning product using .net core, angular, react native, C#, .net core web api (REST, Azure cloud, Entity Framework, Design patterns), sql server (Azure) and other technologies to develop a instant messaging system (angular, firebase, google cloud, nodejs) and design/framework/prototype for multi tenant mobile application (react native, redux, saga etc) using the concept of MicroFrontends and MicroServices'
    },
    {
      name: 'Senior Consultant - SealedAir/Invonto',
      id:3,
      dates: 'Feb 2018 - May 2018',
       details: ' Used technologies including angular 5/2/1, bootstrap 3, less, asp.net mvc 5, c#, git, Amazon web services, Hangfire, responsive site technologies, teamwork, springloops, sql server, visual studio 2015/2017 to migrating from angular 2.0 to 5.0, Combining angular 5 site with asp.net mvc website, performance of angular 1.4 and angular 2+ sites, angular material, login/session timeout management from SPA website, localization, performance improvements of asp.net mvc website and c# multithreading to speed up pdf exports and other middle tier processes'
    },
    {
      name: 'Developer Level IV - Bank of America/TEK Systems',
      id:4,
      dates: 'Feb 2017 - Jan 2018',
       details: ' Design and  implementation of several views using Angular JS/asp.net mvc/kendo angular based UI for RAILS intranet website. Used concepts like angular views, routes, ngroute, uirouter, controllers, services, directives (for reusable business components) etc and asp.net views, controllers, partial views, bundling, and kendo angular widgets like grid, dropdown etc. Assigning work and coordinating offshore resource(s) for few tasks, production support and troubleshooting, communicating with BA team on daily basis to gather and clarify requirements and helping the team on testing setup'
    },
  ]
  };
 
  techMap['3'] = {
    title: 'React Native Projects',
    clients : [
      {
        name: 'SafeFinance - https://play.google.com/store/apps/details?id=com.portfoliodroid247.pitechworks.safefinance ',
        id:1,
        dates: 'Sep 2018 - Sep 2020',
        details: 'App that lets user to set time or price-based alerts for market tickers so that they can be alerted, and they can buy/sell the positions. Technologies : react native, redux, saga, axios, firebase, google functions, sqlite, Java/JUnit, React-testing-library, Mocha, Chai, firebase, google functions, omniscient etc '
      },
      {
        name: 'Developer Level IV - NB Ventures - Field Service',
        id:2,
        dates: 'Jan 2020 - Mar 2020',
         details: 'Developed a react native multi-tenant iOS app framework for NB Ventures for Field Service / Supplychain Management project. Developed the app using the concept of micro frontend / multi tenant architecture.'
      },
    ]
  };

export default function TechnologyPage() {
  const router = useRouter();
  const selctedTech = router.query.id ? router.query.id[0] : '1';
  return (
    <section className="max-w-3xl p-3 mx-auto my-auto bg-gray-100 border-4 border-gray-700 print:border-0 page print:max-w-letter print:max-h-letter print:mx-0 print:my-o lg:h-letter md:max-w-letter md:h-letter xsm:p-8 sm:p-9 md:p-16 lg:mt-6 rounded-2xl print:bg-white">
        <Link href="/" className="float-right"><HomeIcon className="h-4 w-4 mx-2"/></Link>
        <h1 className="mb-0 text-5xl font-bold text-gray-700">{`${techMap[selctedTech].title}`}</h1>
        {techMap[selctedTech].clients.map((client:any) => (
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
