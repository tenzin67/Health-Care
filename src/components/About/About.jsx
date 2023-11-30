import React from "react";
import aboutIMG from "../../assets/images/about.png";
import aboutCardImg from "../../assets/images/about-card.png";

import {Link } from "react-router-dom";


function About() {
  return (
    
    <section>
      <div className="container">
        <div className='flex justify-between gap-[50px] lg:gap-[130px] xl:gap-0 flex-col lg:flex-row '>
          {/* --IMG-- */}
          <div className="relative w-3/4 1g:w-1/2 xl:w-[770px] z-10 order-2 1g:order-1">
            <img src={aboutIMG} alt="" srcset="" />
            <div className="absolute z-20 bottom-4 w-[200px] md:w-[300px] right-[-30%] md:right-[-7%] lg:right-[22%]">
              <img src={aboutCardImg} alt="" srcset="" />
            </div>
          </div>

          {/* --about the content */}

          <div className=" w-full lg:w-1/2 xl:w-[670px] order-1 lg:order-3">
           <h2 className="heading">Proud to be one of the nations best</h2>
           <p className="text_para">For 30 years in a row, U.S. News & World Report has recognized usContact.jsx 22 as one of the best publics hospitals in the Nation and #1 in Home.jsx 1, U 23 Texas. Lorem ipsum dolor w Loginjsx 24 25 Quas, nemo? </p>

           <p className="text_para mt-[30px]">our best is something we strive for each day, caring for ourpatients-not looking back at what we accomplished but towards what we can do tomorrow. Providing the best. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, modi?</p> 

           <Link to='/'> <button className="btn">Learn More</button> </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
