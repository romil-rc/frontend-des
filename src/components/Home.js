import React from 'react'
import LeftSidePanel from './LeftSidePanel'
import MiddlePanel from './MiddlePanel'
import RightSidePanel from './RightSidePanel'
import TopDiv from './TopDiv'

export default function Home() {
  return (
    <div>
        <TopDiv />
        <div className="flex min-h-screen text-neutral-50 my-4">
          <div className="flex-auto w-3">
            <LeftSidePanel />
          </div>
          <div className="flex-auto w-96 border-x border-zinc-500">
            <MiddlePanel />
          </div>
          <div className="flex-auto w-24">
            <RightSidePanel />
          </div>
        </div>
    </div>
  )
}
