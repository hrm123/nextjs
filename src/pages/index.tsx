import Head from 'next/head'
import Image from 'next/image'
import React, { useEffect, useState } from 'react';
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Link from 'next/link'
import ReactFlow, { Controls, Edge, EdgeTypes } from 'reactflow'
import 'reactflow/dist/style.css'
import CustomEdge from '@/components/customFlowEdge'
import Header from '@/components/header'
import Contact from '@/components/contact'
import Summary from '@/components/summary'
import Education from '@/components/education'
import Skills from '@/components/skills'
import Experience from '@/components/experience'
import ThemeSwitch from '@/components/themeSwitch';
// import { useTheme } from 'next-themes';

const inter = Inter({ subsets: ['latin'] })

const edgeTypes: EdgeTypes = {
  custom: CustomEdge,
};


function ResumeFlow() {
  return ( <>
  {/* page */}
    <section className="min-w-full p-3 mx-auto my-auto
     bg-gray-100 border-4 border-gray-700 
     print:border-0 page print:max-w-letter print:max-h-letter print:mx-0 print:my-o 
     lg:h-letter md:max-w-letter md:h-letter xsm:p-8 sm:p-9 md:p-16 lg:mt-6 rounded-2xl print:bg-white">
      <div className="float-right"><ThemeSwitch /></div> 
      <Header />
      {/* Column -------------------------------------------------------------------------------------------------- */}
        <section
          className=" col-gap-8 md:col-count-2 print:col-count-2 md:h-letter-col-full print:h-letter-col-full col-fill-balance"
        >
          <section className="flex-col">
            <Contact />
            <Summary />
            <Skills />
            <Education />
            <Experience />
          </section>
        </section>
    </section>
    {/* End Column -------------------------------------------------------------------------------------------------- */}
    {/* end page */}
    
    </>
  )
}


export default React.memo(ResumeFlow)