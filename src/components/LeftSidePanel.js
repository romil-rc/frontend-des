import React from 'react'
import closingIcon from '../assets/closingIcon.png'
import home from '../assets/home.png'
import sectionOne from '../assets/sectionOne.png'
import sectionTwo from '../assets/sectionTwo.png'
import sectionThree from '../assets/sectionThree.png'
import sectionFour from '../assets/sectionFour.png'
import sectionFive from '../assets/sectionFive.png'
import sectionSix from '../assets/sectionSix.png'
import sectionSeven from '../assets/sectionSeven.png'
import sectionEight from '../assets/sectionEight.png'
import documentation from '../assets/documentation.png'
import language from '../assets/language.png'
import toggle from '../assets/toggle.png'

export default function LeftSidePanel() {
  return (
    <div className='p-5 pt-0 space-y-7 w-full'>
        <div className='flex justify-between font-poppins'>
            <div className='flex'>
                <div className='bg-blue-500 w-8 h-8 rounded-full text-xl font-semibold pt-0.5 hover:scale-125 ease-linear duration-200 cursor-pointer'>N</div>
                <div className='font-semibold text-2xl pl-3'>Name</div>
            </div>
            <img src={closingIcon} className="hover:-translate-x-1 ease-linear duration-100 cursor-pointer" alt="close" />
        </div>
        <div className='font-inter text-gray-400'>
            <ul className="list-none flex flex-col space-y-3 w-full">
                <li className='flex hover:bg-slate-700 hover:p-2 hover:rounded-xl hover:text-white cursor-pointer ease-linear duration-100 hover:-translate-y-1'><img className='bg-transparent p-1' src={home} alt="" /><span className='mx-3'></span>Home</li>
                <li className='flex hover:bg-slate-700 hover:p-2 hover:rounded-xl hover:text-white cursor-pointer ease-linear duration-100 hover:-translate-y-1'><img className='bg-transparent p-1' src={sectionOne} alt="" /><span className='mx-3'></span>Section 1</li>
                <li className='flex hover:bg-slate-700 hover:p-2 hover:rounded-xl hover:text-white cursor-pointer ease-linear duration-100 hover:-translate-y-1'><img className='bg-transparent p-1' src={sectionTwo} alt="" /><span className='mx-3'></span>Section 2</li>
                <li className='flex hover:bg-slate-700 hover:p-2 hover:rounded-xl hover:text-white cursor-pointer ease-linear duration-100 hover:-translate-y-1'><img className='bg-transparent p-1' src={sectionThree} alt="" /><span className='mx-3'></span>Section 3</li>
                <li className='flex hover:bg-slate-700 hover:p-2 hover:rounded-xl hover:text-white cursor-pointer ease-linear duration-100 hover:-translate-y-1'><img className='bg-transparent p-1' src={sectionFour} alt="" /><span className='mx-3'></span>Section 4</li>
                <li className='flex hover:bg-slate-700 hover:p-2 hover:rounded-xl hover:text-white cursor-pointer ease-linear duration-100 hover:-translate-y-1'><img className='bg-transparent p-1' src={sectionFive} alt="" /><span className='mx-3'></span>Section 5</li>
                <li className='flex hover:bg-slate-700 hover:p-2 hover:rounded-xl hover:text-white cursor-pointer ease-linear duration-100 hover:-translate-y-1'><img className='bg-transparent p-1' src={sectionSix} alt="" /><span className='mx-3'></span>Section 6</li>
                <li className='flex hover:bg-slate-700 hover:p-2 hover:rounded-xl hover:text-white cursor-pointer ease-linear duration-100 hover:-translate-y-1'><img className='bg-transparent p-1' src={sectionSeven} alt="" /><span className='mx-3'></span>Section 7</li>
                <li className="flex hover:bg-slate-700 hover:p-2 hover:rounded-xl hover:text-white cursor-pointer ease-linear duration-100 hover:-translate-y-1"><img className='bg-transparent p-1 opacity-50' src={sectionEight} alt="" /><span className='mx-3'></span>Section 8</li>
                <li className='flex hover:bg-slate-700 hover:p-2 hover:rounded-xl hover:text-white cursor-pointer ease-linear duration-100 hover:-translate-y-1'><img className='bg-transparent p-1' src={documentation} alt="" /><span className='mx-3'></span>Documentation</li>  
            </ul>
        </div>
        <div className="flex font-inter space-x-4">
            <div className="flex bg-slate-700 p-2 rounded-xl w-full justify-center hover:bg-slate-800 cursor-pointer ease-linear duration-200 hover:scale-105"><div className='bg-blue-500 w-6 h-6 rounded-full text-md font-normal mr-2'>N</div>$0.90</div>
            <div className="flex bg-blue-300 p-2 rounded-xl w-full justify-center text-blue-800 font-bold hover:bg-blue-400 cursor-pointer ease-linear duration-200 hover:scale-105">Buy $XYZ</div>
        </div>
        <div className='flex'>
            <div className="flex h-7 w-7 cursor-pointer ease-linear duration-200 hover:scale-110"><img src={language} alt="" /></div>
            <span className='mx-3'></span>
            <div className="flex cursor-pointer ease-linear duration-200 hover:scale-110"><img src={toggle} alt="" /></div>
        </div>
    </div>
  )
}
