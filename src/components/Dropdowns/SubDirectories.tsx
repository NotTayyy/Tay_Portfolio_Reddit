'use client'
import {ChevronDownIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import { useState } from "react";
import { ClickOutHandler } from "react-clickout-ts";

function SubDirectories({Red_Logo}:any) {

  const [subRedditDrop, setSubRedditDrop] = useState('hidden');

  const toggleSubDrop = () => {
    if (subRedditDrop === 'hidden') {
      setSubRedditDrop('block');
    } else {
      setSubRedditDrop('hidden');
    }
  }

  return (
    <ClickOutHandler onClickOut={() => setSubRedditDrop('hidden')}>
      <span className="hidden lg:block">
        <button onClick={() => toggleSubDrop()} className="items-center flex mx-0 px-1 border-1 border-reddit-Grey hover:border-reddit_Border rounded-lg">
          <Image src={Red_Logo} width={256} height={256} alt='Sub Reddit Logo' className="mr-3 icons rounded-full"></Image>
          <div className="pr-24 text-xs">r/thefinals</div>
          <ChevronDownIcon className="ml-1 text-gray-100 h-4 w-4 my-1" />
        </button>
        <div className={`w-56 absolute top-11 bg-reddit-Dark border-1 border-gray-700 z-10 rounded-md flex-col flex p-0 text-sm ${subRedditDrop}`}>
          <button className=" h-10 flex flex-row items-center w-full px-5 hover:bg-reddit-Grey text-sm justify-evenly">
            <span className="w-full m-auto h-full flex items-center">Nothing Here :3</span>
          </button>
        </div>
      </span>
    </ClickOutHandler>
  )
}

export default SubDirectories;