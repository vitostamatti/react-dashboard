import React, {useEffect} from 'react'
import {AiOutlineMenu} from 'react-icons/ai'
import {FiShoppingCart} from 'react-icons/fi';
import {BsChatLeft} from 'react-icons/bs';
import {RiNotification3Line} from 'react-icons/ri';
import {MdKeyboardArrowDown} from 'react-icons/md';
import {TooltipComponent} from '@syncfusion/ej2-react-popups';

import avatar from '../data/avatar.jpg';

import {Cart, Chat, Notification, UserProfile} from '.';

import { useStateContext } from '../contexts/ContextProvider';


const NavButtom = ({title, customFunc, icon, color, dotColor}) => (
  <TooltipComponent content={title} position='BottomCenter'>
    <button type='button' onClick={customFunc}
    style={{color}} className='relative text-xl rounded-full p-3
    hover:bg-light-gray'>
      <span style={{background:dotColor}}
        className="absolute inline-flex rounded-full h-2 w-2 right-2 top-2"
      />
      {icon}
    </button>
  </TooltipComponent>
)

const Navbar = () => {
  const {activeMenu, setActiveMenu, isClicked, setIsClicked,
    handleClick, screenSize, setScreenSize,
    currentColor
  } = useStateContext();

  useEffect(()=>{
    const handleResize = () => setScreenSize(window.innerWidth)
    window.addEventListener('resize', handleResize);

    handleResize();

    return () => window.removeEventListener('resize', handleResize)
  },[]);

  useEffect(()=> {
    if (screenSize <= 900){
      setActiveMenu(false);
    }else{
      setActiveMenu(true)
    }
  }, [screenSize])

  return (
    <div className='flex justify-between p-2 md:mx-6 relative'
    >
      <NavButtom title="Menu" customFunc={()=>{
        setActiveMenu((prevActiveMenu)=>(!prevActiveMenu))
      }}
      color={currentColor} icon={<AiOutlineMenu/>}
      />
      <div className='flex'>
        <NavButtom 
          title="Cart" 
          customFunc={() => handleClick('cart')}
          color={currentColor} 
          icon={<FiShoppingCart/>}
        />
        <NavButtom 
          title="Chat" 
          customFunc={() => handleClick('chat')}
          color={currentColor} 
          dotColor="#03c9d7"
          icon={<BsChatLeft/>}
        />
        <NavButtom 
          title="Notifications" 
          customFunc={() => handleClick('notification')}
          color={currentColor}
          dotColor="#03c9d7"
          icon={<RiNotification3Line/>}
        />
        <TooltipComponent
        content='Profile' position="BottomCenter"
        >
          <div className='flex items-center gap-2 cursor-pointer p-2 hover:bg-light-gray'
          onClick={()=> handleClick('userProfile')}
          >
            <img className='rounded-full w-8 h-8'
            src={avatar} alt="avatar" />
            <p>
              <span className='text-gray-400 text-14'>Hi, </span> {" "}
              <span className='text-gray-400 text-14 font-bold mx-1'>Michael</span>
            </p>
            <p>
              <MdKeyboardArrowDown
              className='text-gray-400 text-14'
              />
            </p>
          </div>
        </TooltipComponent>
        {isClicked.cart && <Cart/>}
        {isClicked.chat && <Chat/>}
        {isClicked.notification && <Notification/>}
        {isClicked.userProfile && <UserProfile/>}
      </div>
    </div>
  )
}

export default Navbar