import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react';
import next from '../assets/next.png'

export default function Table() {

    const [post, setPost] = useState([]);

    useEffect(() => {
        axios.get('https://raw.githubusercontent.com/akshita151199/APIs/main/data')
        .then(response => {
        //   console.log(response.data.data)
            setPost(response.data.data)
        })
        .catch(error => {
          console.log(error)
        })
    }, [])

  return (
    <div>
      <table className="table-fixed font-poppins w-full">
              <thead className='text-zinc-500'>
                  <tr>
                  <th className='bg-[#191B20] font-medium text-sm py-2 rounded-l-md'>ASSET</th>
                  <th className='bg-[#191B20] font-medium text-sm py-2'>AMOUNT</th>
                  <th className='bg-[#191B20] font-medium text-sm py-2'>USER ACCOUNT</th>
                  <th className='bg-[#191B20] font-medium text-sm py-2 rounded-r-md'>REFERRAL EARNING</th>
                  </tr>
              </thead>
              <tbody className='text-white text-center'>
              {post.map((elements, i) => {
                  return (
                    <>
                    <div className='h-1' />
                    <tr className='cursor-pointer ease-linear duration-200 hover:scale-105'>
                      <td className='bg-[#24273166] font-medium text-md py-2 rounded-l-md'>
                        <img className='absolute bg-transparent px-3 py-1' alt='' src={elements.img} />{elements.asset}
                        <div className='flex bg-transparent'>
                          <p className='pl-12 px-2 bg-transparent font-normal text-zinc-500 text-xs'>
                            {elements.type}
                          </p>
                          <div className='h-fit w-14 bg-zinc-500 text-white rounded-full text-[10px] flex'>
                            <img className='bg-transparent px-1' alt='' src={elements.chain.img} />
                            {elements.chain.name}
                          </div>
                          </div>
                      </td>
                      <td className='bg-[#24273166] font-medium text-md py-2'>{elements.amount} BNB <br /><p className='bg-transparent font-normal text-zinc-500 text-xs'>{elements.state}</p></td>
                      <td className='truncate bg-[#24273166] font-medium text-md py-2'>{elements.user}</td>
                      <td className='bg-[#24273166] font-medium text-md py-2 rounded-r-md'>{elements.referral_earnings} BNB <br /><div className='flex bg-transparent px-3'><p className='bg-transparent font-normal text-zinc-500 text-xs'>View on BSC Scan</p><img className='bg-transparent px-1' alt='' src={next} /></div></td>
                    </tr>
                    </>
                  )
              })}
              
              </tbody>
              </table>
              
              
        
    </div>
  )
}
