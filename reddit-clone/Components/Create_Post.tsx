import { PhotoIcon, LinkIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import Image from "next/image";
import Avatar from '../public/Images/Avatar.png';

function Create_Post() {
  return (
    <div className="px-2 w-full bg-reddit-Grey max-w-screen-sm flex rounded-md items-center mb-4 border-1 border-reddit_Border">
      <Link href='#' className='mr-4'>
        <div>
          <Image src={Avatar} alt='To Your Profile' width={256} height={256} className="h-9 w-12 scale-110 rounded-2xl"/>
        </div>
      </Link>
      <input type="text" placeholder="Create Post!" className=" p-2 py-2 my-2 w-full h-5/6 rounded-md bg-reddit-Dark_Grey mr-2" style={{border: '1px solid #343536'}}/>
      <Link href='#'><PhotoIcon className="h-10 w-10 text-gray-400 p-2 hover:bg-reddit-Dark_Grey rounded-sm"/></Link>
      <Link href='#'><LinkIcon className="h-10 w-10 text-gray-400 p-2 hover:bg-reddit-Dark_Grey rounded-sm" /></Link>
    </div>
  )
}

export default Create_Post;