import Link from "next/link";
import Image from "next/image";
import { ArrowUpIcon, ArrowDownIcon, ChatBubbleLeftIcon, ArrowUturnRightIcon, EllipsisHorizontalCircleIcon } from "@heroicons/react/24/outline";
import Red_Logo from '../public/Images/Red_Logo.webp'


function Reddit_Post_Tmp() {
  return (
<div className="relative pl-10 p-0 w-full bg-reddit-Grey_tint max-w-screen-sm flex rounded-md items-center mb-4 border-reddit_Border border-1">
      <div className="absolute left-0 top-2 flex flex-col items-center m-3 ml-1 mt-1 w-fit h-fit">
        <button className="h-7 w-7 p-0 pb-1 m-0"><ArrowUpIcon className="text-gray-200 hover:text-red-500" /></button>
        <p className="text-sm py-1"> {Math.floor(Math.random() * 101)} </p>
        <button href='#' className="h-7 w-7 p-0 m-0"><ArrowDownIcon className="text-gray-200" /></button>
      </div>
    <div className="flex flex-col relative bg-reddit-Grey p-0 px-3 w-full">
      <div className="p-0 m-0 flex items-center text-xs text-gray-600">
        <Link href='*' className="flex items-center p-0 m-0 my-2 text-white">
          <Image src={Red_Logo} className="w-6 h-6 rounded-xl mr-2 text-white" alt="Reddit_Logo"></Image>
          <>r/TheFinals</>
        </Link>
        <p>&nbsp;• posted by</p>
        <Link href='*' className="flex items-center p-0 m-0 my-2">&nbsp;u/GrannyBacon</Link>
        <p>&nbsp;{Math.floor(Math.random() * 24)} hours ago</p>

        {/* Header with all the user and reddit info */}
      </div>
        <h2 className="text-xl pb-2">
          Is Shinto as important in Japan as depicted in animes?
        </h2>
        <div className="text-sm pb-9">
        I hope this is a fair question to ask. Recently I've learned how far from Japanese reality most animes are. This is, of course, normal; fiction is where our imagination can roam free. But, exemplifying with high school animes, hair styles and uniforms are strictly kept in check, there are no love confessions every break (or at all at school?), girls don't cook bentos for everyone, many times you can't even go to rooftops, although this is a must in these animes.
        </div>
      </div>
      <div>
        <div className="absolute bottom-0 inset-x-11 w-full flex items-center">
          <button className="text-white flex items-center text-xs pr-2"><ChatBubbleLeftIcon className="icons h-5 w-5" /> {Math.floor(Math.random()*100)}&nbsp;Comments</button>
          <button className="text-white flex items-center text-xs pr-2"><ArrowUturnRightIcon className="icons h-5 w-5"/>&nbsp;Share</button>
          <button className="text-white flex items-center text-xs pr-2"><EllipsisHorizontalCircleIcon className="icons h-5 w-5"/></button>
        </div>
      </div>
    </div>
  )
}

export default Reddit_Post_Tmp;