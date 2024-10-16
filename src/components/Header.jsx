import React, { useState } from 'react';
import { RxCaretDown } from "react-icons/rx";
import { CiSearch } from "react-icons/ci";
import { CiDiscount1 } from "react-icons/ci";
import { IoHelpBuoyOutline } from "react-icons/io5";

export default function Header() {
  const [toggle, setToggle] = useState(false);
 
  const hideSideMenu =() => {
    setToggle(false);
  }

  const links = [
    {
      icons: < CiSearch/>,
      name:"serach"
    },


    {
      icons: < CiDiscount1/>,
      name:"offers",
      
    },
    
    {
      icons: < IoHelpBuoyOutline/>,
      name:"help"
    },
    
    {
      icons: < CiSearch/>,
      name:"Sign in"
    },
    {
      icons: < CiSearch/>,
      name:"Cart"

    },
    

  ]

  

  return (
    <>
      <div
        className='black-overlay w-full h-full fixed duration-500' onClick={hideSideMenu}
        style={{
          opacity: toggle ? 1 : 0,
          visibility: toggle ? "visible" : "hidden"
        }}
      >
     

      <div onClick={(e)=> {
         e.stopPropagation();
      }}
       className='w-[500px] bg-white h-full absolute duration-[400ms]' style={{

       
        left: toggle? '0%' :'-100%'
       }}>

       </div>

      </div>

      <header className='p-[15px] shadow-xl'>
        <div className='max-w-[1200px] mx-auto  flex items-center'>
          <div className='w-[100px] '>
            <img src="images/logo.png" className='w-full' alt="Logo" />
          </div>
          <div>
            <span className='font-bold border-b border-b-[3px] border-[black]'>Ratanada</span> Jodhpur, Rajasthan, India 
            <RxCaretDown fontSize={35} className='inline text-[0.9rem] text-[#fc8019] cursor-pointer' onClick={() => setToggle(!toggle)} />
          </div>
          <nav className='flex list-none gap-7 ml-auto font-bold text-[18px] font-semibold'>
            {
              links.map(
                (link, index) =>{
                  return <li key={index} className='flex cursor-pointer hover:text-[#fc8019] items-center gap-2'>
                    {link.icon}
                    {link.name}

                  </li>
                }
              )
            }
            
            <li className='flex items-center gap-3'>
            <CiSearch  />
              serach
            </li>
           
          </nav>
        </div>
      </header>
    </>
  );
}
