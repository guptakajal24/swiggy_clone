import React, { useEffect, useState } from 'react';
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa6";

export default function Category() {
  const [Categories, setCategory] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchCategory = async () => {
    try {
      const response = await fetch('/categories.json'); // Adjust path if necessary
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      console.log(data); // Log the data to check its structure
      setCategory(data); // Set categories from the fetched data
    } catch (error) {
      console.error('There was a problem with the fetch operation:', error);
      setError(error.message); // Set error state
    } finally {
      setLoading(false); // Set loading to false regardless of success or failure
    }
  };

  useEffect(() => {
    fetchCategory();
  }, []);

  if (loading) {
    return <div>Loading...</div>; // Show loading indicator
  }

  if (error) {
    return <div>Error: {error}</div>; // Show error message if fetching fails
  }

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
        {Categories.map((cat, index) => {
          console.log(cat); // Log the entire category object
          return (
            <div className='grow-1' key={index}>
              <img 
                src={`https://drive.google.com/uc?export=view&id=${cat.path}/${cat.image}`} 
                alt={cat.image} 
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
