'use client'
import { useState } from 'react';
import { ArrowLeftEndOnRectangleIcon, ChevronDownIcon, ChevronUpIcon, UserIcon } from '@heroicons/react/24/outline';
import { useAuthStore} from '@/src/store';
import OutsideClickHandler from 'react-outside-click-handler';

function UserHeroMenu() {

  const [userDropVis, setUserDropVis] = useState('hidden');
  const {setAuthVisible, setModalType} = useAuthStore();

  const toggleUserDrop = () => {
    if (userDropVis === 'hidden') {
      setUserDropVis('block')
    } else {
      setUserDropVis('hidden')
    }
  };

  const logBtn = () => {
    setModalType('login');
    setAuthVisible('block')
  }

  return(
    // <ClickOutHandler onClickOut={() => setUserDropVis('hidden')}>
    <OutsideClickHandler onOutsideClick={() => setUserDropVis('hidden')}>
      <span>
        <button onClick={() => toggleUserDrop()}  className="p-1 mx-1 flex bg-reddit-Grey mr-4 items-center border border-gray-800 rounded-md hover:bg-reddit-Dark_Grey" >
          <div className="flex">
            {/* <Image src={Avatar} className="h-9 w-9 icons m-0 block rounded-md" alt="Your_Avatar"/> */}
            <UserIcon className="icons m-0 text-gray-400"/>
          </div>
          { userDropVis === 'hidden' ? <ChevronDownIcon className="ml-1 text-gray-100 h-6 w-6 my-1" /> : <ChevronUpIcon className="ml-1 text-gray-100 h-6 w-6 my-1" />}
        </button>
        <div className={`w-72 absolute right-4 top-11 bg-reddit-Dark border-1 border-gray-700 z-10 rounded-md flex-col flex p-0 text-sm ${userDropVis}`}>
          <button onClick={() => logBtn()} className="h-10 flex flex-row items-center w-full px-5 py-6 hover:bg-reddit-Grey text-sm justify-between">
            <ArrowLeftEndOnRectangleIcon className="icons h-7 w-7 m-0 p-0 mr-5"></ArrowLeftEndOnRectangleIcon>
            <span className="w-full h-full flex items-center">Login / SignUp</span>
          </button>
        </div>
      </span>
    </OutsideClickHandler>
  )

}

export default UserHeroMenu;