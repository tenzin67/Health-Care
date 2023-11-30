import React, { useState } from "react";
import avatar from "../../assets/images/avatar-icon.png";
import { formatDate } from "../../utils/formateDate";
import {AiFillStar} from 'react-icons/ai'
import FeedBackForm from "./FeedBackForm";

function Feedback() {

     const [ShowFeebackform,setShowFeedbackform] =useState(false)
  return (
    <div>
      <div className="mb-[50px]">
        <h4 className="text-[20px] leading-[30px] font-bold text-headingColor mb-[30px]">
          {" "}
          All reviews(272)
        </h4>

        <div className="flex justify-between gap-10 mb-[30px]">
          <div className=" flex gap-3">
            <figure className="w-10 h-10 rounded-full">
              <img className="w-full" src={avatar} alt="" srcset="" />
            </figure>
            <div>
              <h5 className="text-[16px] leading-6 text-primanryColor font-bold">
                Tenzin Palgyal
              </h5>

              <p className="text-[14px] Leading-6 text-textColor">
                {formatDate("2023-05-14")}
              </p>
              <p className="text_para mt-3 font-medium text-[15px]">Good Services,highly recommended </p>
            </div>
          </div>

          <div className="flex gap-1">
               {[...Array(5).keys()].map((_,index)=><AiFillStar key={index} color="#dab600"/>)}
          </div>

        </div>
      </div>

      {!ShowFeebackform && <div className=" text-center">
          <button className="btn" onClick={()=>setShowFeedbackform(true)}>Give FeedBack</button>
      </div>}
      
      {ShowFeebackform && <FeedBackForm/>}
    </div>
  );
}

export default Feedback;
