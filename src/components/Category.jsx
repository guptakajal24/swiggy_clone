import React, { useEffect, useState } from 'react';
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa6";

export default function Category() {
  const [Categories, setCategory] = useState([]);


  const fetchCategory = async () => {
    try {
      const response = await fetch('http://localhost:3000/categories'); // Adjust path if necessary
      const data = await response.json();
      setCategory(data); // Set categories from the fetched data
    } catch (error) {
      console.log(error);
  };

  useEffect(() => {
    fetchCategory();
  }, []);

  return (
    <div className='max-w-[1200px] mx-auto'>
      <div className='flex items-center justify-between'>
        <div className='text-[25px]'>What's on Your Mind</div>
        <div className='flex'>
          <div className='cursor-pointer flex justify-center items-center w-[30px] h-[30px] bg-[#e2e2e7] rounded-full mx-2'>
            <FaArrowLeft />
          </div>
          <div className='cursor-pointer flex justify-center items-center w-[30px] h-[30px] bg-[#e2e2e7] rounded-full mx-2'>
            <FaArrowRight />
          </div>
        </div>
      </div>
      <div className='flex'>
        {
          Categories.map((cat,index)=>{
            return (
              <div className="">
                  <img src={"http://localhost:3000/images"+cat.name} alt="" />
              </div>
            )
          })
        }
      </div>
    </div>
  );
}
}
