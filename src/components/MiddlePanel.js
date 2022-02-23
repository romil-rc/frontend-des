import React from 'react'
import Table from './Table'
import wallet from '../assets/wallet.png'
import lorem from '../assets/lorem.png'
import cross from '../assets/cross.png'
import enter from '../assets/enter.png'
import oval from '../assets/oval.png'
import copy from '../assets/copy.png'
import '../styles/copy.css'

export default function MiddlePanel() {
  
  return (
      <div className='p-5 pt-0 w-fit space-y-7'>
        <div className='flex font-medium justify-between'>
            <div className='text-left text-xl font-inter underline decoration-sky-500 decoration-2 underline-offset-8 pl-2'>Section</div>
            <div className="flex bg-slate-800 rounded-xl px-2 py-1 cursor-pointer ease-linear duration-200 hover:scale-105">
              <img className='bg-transparent py-2' src={wallet} alt="" />
              <span className='bg-transparent px-2 py-1'>0.2 $XYZ</span>
              <div className="px-2 flex bg-blue-300 rounded-lg py-1 text-blue-700">Tier 1</div>
            </div>
        </div>
        <div className='relative flex h-fit'>
          <div className='w-full bg-blue-200 rounded-md font-semibold text-sm text-blue-900 text-left py-3 px-3'>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            <div className='mt-2 h-fit w-fit p-0.5 px-3 bg-white rounded-md cursor-pointer ease-linear duration-200 hover:scale-110'>Tutorial</div>
          </div>
          <img className='absolute -top-3 -right-3 bg-transparent cursor-pointer ease-linear duration-200 hover:scale-110' src={cross} alt="" />
          <img className='absolute top-0 right-0 bg-transparent' src={lorem} alt="" />
        </div>
        <div className='flex justify-around bg-zinc-900 p-5 pl-0 font-poppins w-full rounded-2xl'>
          <div className='flex flex-col space-y-3 bg-transparent'>
            <p className='inline-block bg-transparent text-left'>Your Rewards</p>
            <p className='inline-block bg-transparent font-medium text-xl text-left'>$ 0.26231428</p>
            <div className='flex space-x-2 bg-transparent'>
              <div className='px-2.5 py-1 bg-zinc-700 rounded-full cursor-default hover:bg-zinc-800 ease-linear duration-200'>$40 AVAX</div>
              <div className='px-2.5 py-1 bg-zinc-700 rounded-full cursor-default hover:bg-zinc-800 ease-linear duration-200'>$10 BNB</div>
              <div className='px-2.5 py-1 bg-zinc-700 rounded-full cursor-default hover:bg-zinc-800 ease-linear duration-200'>$210 BTC</div>
            </div>
          </div>
          <div className='flex flex-col bg-transparent font-inter font-medium text-sm self-center'>
            <div className='flex px-2.5 py-2 bg-blue-600 rounded-lg  cursor-pointer ease-linear duration-200 hover:scale-110'>
              <img className='p-1 bg-transparent' src={enter} alt="" />
              <span className='px-0.5 bg-transparent' />
              <p className='py-0.5 bg-transparent'>Custom Link</p>
            </div>
          </div>
        </div>
        <div className='flex justify-around space-x-5'>
          <div className="flex flex-col space-y-3 bg-zinc-900 w-full rounded-2xl p-5">
            <div className="flex bg-transparent font-poppins">
              <img className='bg-transparent pr-3' src={oval} alt="" />
              <p className='inline-block bg-transparent font-medium text-xl text-left'>12.5% of fee</p>
            </div>
            <p className='inline-block bg-transparent text-left text-zinc-500'>Your Referral Link for xyz</p>
            <div className='flex justify-between bg-zinc-800 p-3 rounded-md'>
              <p className='bg-transparent font-inter text-sm'>https://unityexchange.design</p>
              <div className='hover-trigger bg-transparent'>
                <img className='bg-transparent cursor-pointer hover:scale-110' src={copy} alt="" />
                <div className="absolute bg-transparent text-white opacity-50 hover-target py-3">Copy</div>
              </div>
            </div>
          </div>
          <div className="flex flex-col space-y-3 bg-zinc-900 w-full rounded-2xl p-5">
            <div className="flex bg-transparent font-poppins">
              <img className='bg-transparent pr-3' src={oval} alt="" />
              <p className='inline-block bg-transparent font-medium text-xl text-left'>12.5% of fee</p>
            </div>
            <p className='inline-block bg-transparent text-left text-zinc-500'>Your Referral Link for xyz</p>
            <div className='flex justify-between bg-zinc-800 p-3 rounded-md'>
              <p className='bg-transparent font-inter text-sm'>https://unityexchange.design</p>
              <div className='hover-trigger bg-transparent'>
                <img className='bg-transparent cursor-pointer hover:scale-110' src={copy} alt="" />
                <div className="absolute bg-transparent text-white opacity-50 hover-target py-3">Copy</div>
              </div>            
            </div>
          </div>
        </div>
        <div className='flex font-medium justify-start space-x-5 font-inter pl-2'>
            <div className='text-left text-xl underline decoration-sky-500 decoration-2 underline-offset-8 cursor-pointer'>First Tab</div>
            <div className='text-left text-xl text-zinc-500 cursor-pointer'>Second Tab</div>
        </div>
        <div className='flex w-full'>
            <Table />
        </div>
      </div>
  )
}
