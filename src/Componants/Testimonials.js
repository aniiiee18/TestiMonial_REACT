import React, { useState } from 'react'
import Card from './Card'
import reviews from '../data'
import {FiChevronLeft, FiChevronRight} from 'react-icons/fi'

 const Testimonials = (props) => {

    let reviews = props.reviews;
    const [index, setIndex] = useState(0);

    function LeftShiftHandler(){

        if(index-1<0)
        {
            setIndex(reviews.length-1);
        }
        else
        {
            setIndex(index-1);
        }

    }

    function RightShiftHandler(){

        if(index+1>=reviews.length)
        {
            setIndex(0);
        }
        else
        {
            setIndex(index+1);
        }

    }

    function SurpriceMeHandler(){

        let randomIndex = Math.floor(Math.random()*reviews.length);
        setIndex(randomIndex);
    }



  return (
    <div className='w-[85vw] md:w-[700px] bg-white flex flex-col
     justify-center items-center
    mt-10 p-10 transition-all duration-300 hover:shadow-xl rounded-md' >

        <Card reviews={reviews[index]}/>

        <div className='flex text-3xl mt-10 gap-3 text-violet-400 font-bold mx-auto'>
            <button className='cursor-pointer hover:text-violet-500'
            onClick={LeftShiftHandler}>
                <FiChevronLeft/>
            </button>
            <button className='cursor-pointer hover:text-violet-500'
            onClick={RightShiftHandler}>
                <FiChevronRight/>
            </button>
        </div>

        <div className='mt-6'>
            <button className='bg-violet-500 hover:bg-voilet-500 transition-all duration-200
            cursor-pointer px-10 py-2 rounded-md font-bold text-white text-lg'
            onClick={SurpriceMeHandler}>
                Surprice Me
            </button>
        </div>

    </div>
  )
}

export default Testimonials
