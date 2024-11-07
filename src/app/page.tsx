/* eslint-disable @next/next/no-img-element */
import React from "react";
import Image from "next/image";

export default function Idcard() {
  return (

    <div className=" flex flex-col min-h-screen bg-white">
      <div className=" flex-grow flex items-center justify-center p-6">
        <div className=" bg-slate-200 p-12 rounded-2xl shadow-xl max-w-4xl w-full flex items-center justify-center border-8 border-sky-400">

          {/* bakground image  */}


          <div className=" absolute inset-0 flex items-center justify-center">
            <div className="relative w-full h-full max-w-[400px] max-h-[300px]">

              <Image
                src="/kamrankhan-pic.png"
                alt=" bkimage"
                width={400}
                height={300}
                objectFit="cover"
                className="opacity-10 justify-center flex items-center" />
            </div>
          </div>





          {/* left side */}
          <div className="w-2/3 pr-4 pt-16 relative z-10">

            {/* logo */}
            <img
              src={"/logo-gov.png"}
              alt={"logo"}
              className="absolute top-[-20px] left-0 w-16 h-18 z-10"

            />

            <p className="mb-2">
              <span className="text-sky-500"> <strong> Name: </strong></span>
              <span className=" text-black"> Muhammad Abdullah </span>
            </p>


            <p className="mb-2">
              <span className="text-sky-500"> <strong> Roll No: </strong></span>
              <span className=" text-black"> 00005177 </span>
            </p>


            <p className="mb-2">
              <span className="text-sky-500"> <strong> Distance Learning: </strong></span>
              <span className=" text-black"> No </span>
            </p>


            <p className="mb-2">
              <span className="text-sky-500"> <strong> City: </strong></span>
              <span className=" text-black"> Karachi </span>
            </p>


            <p className="mb-2">
              <span className="text-sky-500"> <strong> Campus: </strong></span>
              <span className=" text-black"> Main </span>
            </p>


            <p className="mb-2">
              <span className="text-sky-500"> <strong> Center: </strong></span>
              <span className=" text-black"> Governer House Karachi </span>
            </p>


            <p className="mb-2">
              <span className="text-sky-500"> <strong> Days / Time: </strong></span>
              <span className=" text-black"> Sunday-02:00 PM - 05:00 PM  </span>
            </p>


            <p className="mb-2">
              <span className="text-sky-500"> <strong> Btach 1 </strong></span>
            </p>

            {/* button section */}

            <div className="flex flex-col mt-4">
              <button className="relative w-full p-1 rounded-lg border bg-gray-300 bg bg-gray-500 text-white items-center justify-center flex">
                <span className=" absolute inset-0 bg bg-slate-500"
                  style={{ width: "50%" }}>
                </span>

                <span className="relative z-10">Q2</span>
              </button>
            </div>
          </div>



          {/* Right section */}


          <div className="w-1/3 text-center relative z-10">
            <Image
              src={"/pp.png"}
              alt={"pp"}
              width={"800"}
              height={"800"}
              className="rounded-e-lg mb-16 w-full border-blue-500" />


            <p className=" border-t-2 border-t-slate-900 pt-2 font-bold text-sky-400 mt-10 text-2xl"> Authorized Signature</p>


          </div>
        </div>
      </div>
    </div>
  );
}
