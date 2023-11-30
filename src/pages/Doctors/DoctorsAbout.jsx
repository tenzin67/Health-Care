import React from "react";
import { formatDate } from "../../utils/formateDate";

function DoctorsAbout() {
  return (
    <div>
      <div>
        <h3 className="text-[20px] leading-[30px] text-headingColor font-semibold flex items-center gap-2">
          About of{" "}
          <span className=' text-irisBlueColor font-bold text-[24p×] leading-9">'>
            Muhibur Rahman
          </span>
        </h3>

        <p className="text_para">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita quae
          ullam, delectus aliquid aliquam fugiat hic temporibus laborum itaque,
          molestiae, facilis sunt minus deleniti corrupti tempora error
          excepturi quisquam dicta ipsum iusto molestias ut quaerat minima.
          Officia nostrum, quisquam sit unde laboriosam distinctio quam quas
          voluptatum iste eligendi qui officiis?
        </p>
      </div>

      <div className="mt-12">
        <h3 className="text-[20px] leading-[30px] text-headingColor font-semibold">
          Education
        </h3>
        <ul className=" pt-4 md:p-5">
          <li className=" flex flex-col sm:flex-row sm:justify-between sm:items-end md:gap-5 mb-[30px]">
            <div>
              <span className="text-irisBlueColor text-[15px] leading-6 font-semibold">
                {formatDate("2002-01-09")}
              </span>
              <p className="text-[16px] leading-6 font-medium text-textColor">
                PHD in Surgeon
              </p>
            </div>
            <p className="text-[16px] leading-5 font-medium text-textColor">
              New Apollo Hospital, New York
            </p>
          </li>
          <li className=" flex flex-col sm:flex-row sm:justify-between sm:items-end md:gap-5 mb-[30px]">
            <div>
              <span className="text-irisBlueColor text-[15px] leading-6 font-semibold">
                {formatDate("2023-11-29")}
              </span>
              <p className="text-[16px] leading-6 font-medium text-textColor">
                PHD in Surgeon
              </p>
            </div>
            <p className="text-[16px] leading-5 font-medium text-textColor">
              New Apollo Hospital, New York
            </p>
          </li>
        </ul>
      </div>

      <div className=" mt-12">
        <h3 className="text-[20px] leading-[30px] text-headingColor font-semibold">
          Experiance
        </h3>

        <ul className="grid sm:grid-cols-2 gap-[30px] pt-4 md:p-5">
          <li className="p-4 rounded bg-[#fff9ea]">
            <span className=" text-yellowColor text-[15px] leading-6 font-semibold">
              {formatDate("2052-11-29")} - {formatDate("2023-11-29")}
            </span>
            <p className="text-[16px] leading-6 font-medium text-textColor">
              Sr. Surgeon
            </p>

            <p className="text-[16px] leading-5 font-medium text-textColor">
              New Apollo Hospital, New York
            </p>
          </li>
          <li className="p-4 rounded bg-[#fff9ea]">
            <span className=" text-yellowColor text-[15px] leading-6 font-semibold">
              {formatDate("2052-11-29")} - {formatDate("2023-11-29")}
            </span>
            <p className="text-[16px] leading-6 font-medium text-textColor">
              Sr. Surgeon
            </p>

            <p className="text-[16px] leading-5 font-medium text-textColor">
              New Apollo Hospital, New York
            </p>
          </li>

        </ul>
      </div>
    </div>
  );
}

export default DoctorsAbout;
