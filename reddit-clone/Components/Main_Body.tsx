import { FireIcon } from "@heroicons/react/24/solid";
import Create_Post from "./Create_Post";
import Link from "next/link";
import { ArrowTrendingUpIcon, ChevronDownIcon, EllipsisHorizontalIcon, QueueListIcon, StarIcon } from "@heroicons/react/24/outline";
import Reddit_Info from "./Reddit_Info";



function Main_Body() {
  return (
    <div className="p-5 w-full flex justify-center">
        <div className="flex-col w-full max-w-screen-sm mr-6">
          <Create_Post />
          <div className="p-3 w-full bg-reddit-Grey max-w-screen-sm flex rounded-md items-center" style={{border: '1px solid #343536'}}>
            <Link href='#' className="flex items-center p-0 pr-3 bg-reddit-Dark_Grey rounded-full mr-1"><FireIcon className="icons m-1 text-gray-200" />Hot</Link>
            <Link href='#' className="flex items-center p-0 pr-3 rounded-full mr-1 hover:bg-reddit-Dark_Grey"><StarIcon className="icons m-1 text-gray-500" />New</Link>
            <Link href='#' className="flex items-center p-0 pr-3 rounded-full mr-1 hover:bg-reddit-Dark_Grey"><ArrowTrendingUpIcon className="icons m-1 text-gray-500" />Top</Link>
            <Link href='#' className="flex items-center p-1 px-3 pr-1 bg-reddit-Dark_Grey rounded-full mr-2">Today<ChevronDownIcon className="h-4 icons m-1"/></Link>
            <Link href='#' className="flex items-center bg-reddit-Dark_Grey rounded-full mr-3"><EllipsisHorizontalIcon className="icons m-1"/></Link>
            <div className="flex-grow"/>
            <Link href='#' className="flex items-center mr-2"><QueueListIcon className="icons m-1 text-gray-500" /><ChevronDownIcon className=" text-gray-400 h-3 w-3 my-1" /></Link>
          </div>
        </div>
        
        <Reddit_Info />
      </div>  
  )
}

export default Main_Body;