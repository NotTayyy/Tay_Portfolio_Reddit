'use client'
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/16/solid";
import React, { useState } from "react";

function  Accordion({...props}:any) {
  const [accOpen, setAccOpen] = useState(false);

  return (
    <>
    <div className={`m-1 p-1 ${props.textCol}`}>
      <button onClick={() => setAccOpen(!accOpen)} className="flex justify-between w-full">
        <span>{props.title}</span>
        {accOpen ? <ChevronUpIcon className="h-5 w-5 ml-auto mr-2"></ChevronUpIcon> : <ChevronDownIcon className="h-5 w-5 ml-auto mr-2"></ChevronDownIcon> }
      </button>
      <div className={`grid overflow-hidden transition-all duration-300 ease-in-out text-sm 
        ${ accOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}
      >
        <div className="overflow-hidden p-1 pl-2 pb-0">{props.collapsed}</div>
      </div>
    </div>
    <hr className="bg-reddit_Border m-0 mx-2 border-0 h-0.5" />
    </>
  )
}

export default Accordion;
