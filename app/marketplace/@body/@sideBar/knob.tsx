"use client"
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


// import required modules
import { Pagination, Mousewheel } from 'swiper/modules';
import { Button } from '@/components/ui/button';
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area';


 const Knob = ({data, handleKnob}:any) => {
  const initialSlideIndex = 3;
  return (
    <>

   
      <Swiper
        direction={'horizontal'}
        slidesPerView={2}
        loop={true}
        spaceBetween={5}
        mousewheel={true}
        pagination={{
          clickable: true,
        }}
        modules={[Mousewheel]}
        initialSlide={initialSlideIndex}
        className="swiper-container transition: transform 0.3s ease-in-out"

      >
       {data.map((obj: any) => {
  return (
    <SwiperSlide key={obj}>
      <Button className='mb-2 mx-4' onClick={() => handleKnob(obj)}>
        {obj}
      </Button>
    </SwiperSlide>
  );
})}
      </Swiper>
    </>
  );
}
export default  Knob;