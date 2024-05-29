import Link from "next/link";
import Image from "next/image";
import { ArrowUpIcon, ArrowDownIcon, ChatBubbleLeftIcon, ArrowUturnRightIcon, EllipsisHorizontalCircleIcon, BookmarkIcon } from "@heroicons/react/24/outline";
import Red_Logo from '../public/Images/Red_Logo.webp'

function Reddit_Posts_Empty(props: any) {
  return(
<div className="relative pl-10 p-0 w-full bg-reddit-Grey_tint max-w-screen-sm flex rounded-md items-center mb-2 border-reddit_Border border-1">
      <div className="absolute left-0 top-2 flex flex-col items-center m-3 ml-1 mt-1 w-fit h-fit">
        <button className="h-7 w-7 p-0 pb-1 m-0"><ArrowUpIcon className="text-reddit-Dark_Tint hover:text-red-500" /></button>
        <p className="text-sm py-1"> {Math.floor(Math.random() * 101)} {/*Likes of the Post*/} </p>
        <button className="h-7 w-7 p-0 m-0"><ArrowDownIcon className="text-reddit-Dark_Tint hover:text-blue-500" /></button>
      </div>
    <div className="flex flex-col relative bg-reddit-Grey p-0 px-3 w-full">
         {/* Header with all the user and reddit info */}
      <div className="p-0 m-0 flex items-center text-xs text-reddit-Dark_Tint">
        <Link href='*' className="flex items-center p-0 m-0 my-2 text-white">
          <Image src={Red_Logo} className="w-6 h-6 rounded-xl mr-2 text-white" alt="Reddit_Logo"></Image>
          {/*Reddit Username of the Post*/}
          <>r/TheFinals</>
        </Link>
        <p>&nbsp;• posted by</p>
        {/*Username of the Post*/}
        <Link href='*' className="flex items-center p-0 m-0 my-2 hover:underline">&nbsp;u/{props.userName}</Link>
        <p>&nbsp;{Math.floor(Math.random() * 24)} hours ago</p>
      </div>
        <h2 className="text-xl pb-2">
          {/*Title of the Post*/}
          {props.postTitle}
        </h2>
        <div className="text-sm pb-9">
          {/*Content of the Post*/}
          {props.postContent}
        </div>
      </div>
      <div>
        <div className="absolute bottom-0 inset-x-11 w-full flex items-center text-reddit-Dark_Tint">
          <button className=" flex items-center text-xs pr-2 hover:bg-reddit-Dark_Grey"><ChatBubbleLeftIcon className="icons h-5 w-5 text-reddit-Dark_Tint" />{/*Comments of the Post*/} {Math.floor(Math.random()*100)}&nbsp;Comments</button>
          <button className=" flex items-center text-xs pr-2 hover:bg-reddit-Dark_Grey"><ArrowUturnRightIcon className="icons h-5 w-5 text-reddit-Dark_Tint"/>&nbsp;Share</button>
          <button className=" flex items-center text-xs pr-2 hover:bg-reddit-Dark_Grey"><BookmarkIcon className="icons h-5 w-5 text-reddit-Dark_Tint"/>&nbsp;Save</button>
          <button className=" flex items-center text-xs px-0.5 hover:bg-reddit-Dark_Grey"><EllipsisHorizontalCircleIcon className="m-0.5 h-5 w-5 text-reddit-Dark_Tint"/></button>
        </div>
      </div>
    </div>
  )
}

export default Reddit_Posts_Empty;