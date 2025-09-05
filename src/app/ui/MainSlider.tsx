"use client";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import Slider from "react-slick";
import Image from "next/image";

export default function MainSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay : true, 
    autoplaySpeed : 2000    ,   
  };

  return (
    <Slider className="" {...settings}>
      <div>
          <Image src="/assets/banner-1.webp" alt="banner" width={1000} height={500} />
      </div>
      <div>
          <Image src="/assets/banner-2.webp" alt="banner" width={1000} height={500} />
      </div>
    </Slider>

  );
}
