import React from 'react'
import avalanche from '../assets/avalanche.png'
import downArrow from '../assets/downArrow.png'
import wallet from '../assets/wallet.png'
import arrowLeft from '../assets/arrowLeft.png'
import enter from '../assets/enter.png'
import cancel from '../assets/cancel.png'

export default function RightSidePanel() {
  return (
    <div className='p-5 pt-0 space-y-7'>
      <div className='flex justify-between'>
        <div className='flex h-fit w-fit bg-zinc-700 px-2.5 py-2 rounded-xl space-x-2 cursor-pointer ease-linear duration-200 hover:bg-zinc-600'>
          <img className='bg-transparent' src={avalanche} alt="" />
          <p className='bg-transparent font-poppins'>Avalanche</p>
          <img className='bg-transparent py-2' src={downArrow} alt="" />
        </div>
        <div className='flex h-fit w-fit border-solid border-2 border-indigo-600 px-2.5 py-1.5 rounded-xl space-x-2 cursor-pointer ease-linear duration-200 hover:border-indigo-400'>
          <img className='bg-transparent py-1' src={wallet} alt="" />
          <p className='bg-transparent font-poppins'>0xf6...1353</p>
          <img className='bg-transparent py-2' src={downArrow} alt="" />
        </div>
        <div></div>
      </div>
      <div className='flex flex-col space-y-5'>
        <div className='flex space-x-5'>
          <img className='py-2 bg-transparent hover:-translate-x-1 ease-linear duration-100 cursor-pointer' src={arrowLeft} alt="" />
          <p className='font-inter font-medium'>Custom Link</p>
        </div>
        <p className='flex text-left px-5 font-poppins'>https://testnet.xyz.xyz/trade?ref=</p>
        <div className="flex h-fit w-full bg-gray-800 p-3 rounded-xl cursor-text ease-linear duration-150 hover:bg-gray-700">
          <p className='bg-transparent text-gray-500 px-3 text-sm'>ENTER</p>
        </div>
        <div className='flex justify-evenly space-x-3'>
            <div className='flex py-2 bg-blue-600 rounded-xl font-inter font-medium text-sm w-36 justify-center cursor-pointer ease-linear duration-200 hover:scale-110'>
              <img className='p-1 bg-transparent' src={enter} alt="" />
              <p className='py-0.5 bg-transparent'>Custom Link</p>
            </div>
            <div className='flex py-2 bg-black border rounded-xl font-inter font-medium text-sm w-36 justify-center cursor-pointer ease-linear duration-200 hover:scale-110'>
              <img className='p-1 bg-transparent' src={cancel} alt="" />
              <p className='py-0.5 bg-transparent'>Cancel</p>
            </div>
        </div>
      </div>
    </div>
  )
}
