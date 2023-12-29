import { useState } from "react";
import CustomNavbar from "../components/CustomNavbar";
import ProblemList from "../components/ProblemList";
import MainHeading from "../components/MainHeading";
import { useEffect } from "react";
import axios, { AxiosError } from "axios";
import { useNavigate } from "react-router-dom";
import { API_URL } from "../App";
import { Link } from "react-router-dom";
import { TypeAnimation } from "react-type-animation";
const Interview = ({
    
}: {
    token: string | null;
    id: string | null;
}) => {
    
    return(
        <div className="fixed w-full h-[60px] bg-black border-b border-borders flex felx-row z-[100]">
                <Link to="/" className=" select-none">
                    <div
                        id="logo-cont"
                        className="inline-block text-[24px] font-bold italic mx-[36px] mt-[12px]"
                    >
                        <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-600 px-[1px]">
                            Code
                        </span>
                        <span>X</span>
                    </div>
                </Link>
                <h1 className="absolute text-[38px] md:text-[48px] mx-auto text-center font-bold mt-[100px] z-50 inset-0 top-[100px]">
                   
                        We Will Reach Soon (:
                    </h1>
        </div>
        
    )
}
   

export default Interview;
