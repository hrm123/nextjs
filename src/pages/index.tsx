import Head from 'next/head'
import Image from 'next/image'
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
