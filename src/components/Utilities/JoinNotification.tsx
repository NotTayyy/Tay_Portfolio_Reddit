'use client'
import Link from "next/link";
import { BellIcon } from "@heroicons/react/24/outline";
import { useState } from "react";

function JoinNotification() {

  const [notiIcon, setNotiIcon] = useState('hidden');

  const flipNotiIcon = () => {
    if (notiIcon === 'hidden') {
      setNotiIcon('block');
    } else {
      setNotiIcon('hidden');
    }
  } 

  return (
    <>
    <div>
      {notiIcon === 'hidden' && (
        <button onClick={() => flipNotiIcon()} className="rounded-full my-3 py-1 px-8 text-zinc-800 bg-gray-200 hover:bg-gray-300 mr-2 font-bold" >Join</button>    
      )}
      {notiIcon === 'block' && (
        <button onClick={() => flipNotiIcon()} className="rounded-full my-3 py-1 px-8 bg-zinc-800 text-gray-200 hover:bg-gray-300 mr-2 font-bold border-gray-300 border-1" >Joined</button>  
      )}
    </div>
    <div className={`${notiIcon}`}>
      <Link href='#'><BellIcon className={`h-8 w-8 rounded-full my-3 text-white border-1 border-white hover:text-slate-300 hover:border-slate-300`} /></Link>
    </div>
    </>
  )
}

export default JoinNotification;