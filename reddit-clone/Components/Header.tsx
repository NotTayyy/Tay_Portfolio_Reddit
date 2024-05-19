import Image from "next/image";
import Logo from '../public/Images/red_icon.png';
import Avatar from '../public/Images/Avatar.png';
import { BellIcon, ChatBubbleOvalLeftEllipsisIcon, ChevronDownIcon, MagnifyingGlassIcon, MegaphoneIcon, PlusIcon, ShieldExclamationIcon, XCircleIcon} from '@heroicons/react/24/outline';
import Link from "next/link";
import Red_Logo from '../public/Images/Red_Logo.webp'

function Header() {
  return (
    <header className="flex w-full bg-reddit-Grey items-center over">
        <div className="mx-4 items-center flex">
          <Link href="#"><Image src={Logo} className="icons w-8 h-8 mr-2" alt="Reddit_Logo"/></Link>
          <span className="font-extrabold text-3xl">reddit</span>
        </div>
        <div className="items-center flex ml-2 mr-4">
          <Image src={Red_Logo} width={256} height={256} alt='Sub Reddit Logo' className="mr-3 icons rounded-full"></Image>
          <div className="pr-28 text-xs">r/thefinals</div>
          <ChevronDownIcon className="ml-1 text-gray-100 h-4 w-4 my-1" />
        </div>
        <form action='' className="bg-reddit-Dark_Grey flex px-3 rounded-full items-center border-2 border-gray-700 mx-3 flex-grow" id="Search">
          <button><MagnifyingGlassIcon className="text-gray-400 h-7 w-7 p-1"/></button>
          <div className="bg-black text-gray-300 mx-1 px-2 rounded-full items-center flex text-xs py-1">
            <Image src={Red_Logo} width={256} height={256} alt='Sub Reddit Logo' className=" h-4 w-4 mr-2 my-0 icons rounded-full">
            </Image>r/thefinals
            <XCircleIcon className="h-4 w-4 m-0 ml-2 icons"></XCircleIcon>
          </div>
          <input type="text" className="bg-reddit-Dark_Grey px-2 py-1 focus:outline-none flex-grow" placeholder="Search Reddit"></input>
        </form>
        <Link href="#" className="ico_btn"> <ShieldExclamationIcon className="icons"/> </Link>
        <Link href="#" className="ico_btn"> <ChatBubbleOvalLeftEllipsisIcon className="icons"/> </Link>
        <Link href="#" className="ico_btn"> <BellIcon className="icons"/> </Link>
        <Link href="#" className="ico_btn"> <PlusIcon className="icons" />  </Link>
        <Link href="#" className="ico_btn p-0 pr-3 pl-1 flex items-center bg-reddit-Dark_Grey rounded-full mr-4"> <MegaphoneIcon className="icons h-5 w-5 mx-1"/><h1 className="text-sm">Advertise</h1> </Link>
        <Link href="#" className="p-1 mx-1 flex bg-reddit-Grey mr-4 items-center border border-gray-700 rounded-md">
          <div className="flex">
            <Image src={Avatar} className="h-9 w-9 icons m-0 block rounded-md" alt="Your_Avatar"/>
          </div>
          <ChevronDownIcon className="ml-1 text-gray-100 h-6 w-6 my-1" />
        </Link>
    </header>
  );
}

export default Header;