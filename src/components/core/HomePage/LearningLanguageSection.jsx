import React from 'react'
import HighLightText from "./HighLightText"
import CTAButton from "../../common/Button";
import Know_your_progress from "../../../assets/Images/Know_your_progress.png";
import Compare_with_others from "../../../assets/Images/Compare_with_others.svg";
import Plan_your_lessons from "../../../assets/Images/Plan_your_lessons.svg";

export default function LearningLanguageSection() {
  return (
    <div className=' my-10'>
      {/* Heading */}
      <div className='text-4xl font-semibold text-center'>
        Your swiss knife for<HighLightText> learning any language</HighLightText>
        <p className=' text-richblack-700 font-medium lg:w-[75%] mx-auto leading-6 text-base mt-3'>
          Using spin making learning multiple languages easy. with 20+
          languages realistic voice-over, progress tracking, custom schedule and more.
        </p>
      </div>

      {/* 3 picture section */}
      <div className='flex flex-col lg:flex-row items-center justify-center mt-8 lg:mt-0'>
        <img
          src={Know_your_progress}
          alt="Know your progress"
          className=' object-contain lg:-mr-32'
        />
        <img
          src={Compare_with_others}
          alt="Compare with others"
          className=' object-contain lg:-mb-10 lg:-mt-0 -mt-12'
        />
        <img
          src={Plan_your_lessons}
          alt="Plan your lessons"
          className=' object-contain lg:-ml-36 lg:-mt-5 -mt-16'
        />
      </div>
      {/* Button */}
      <div className=' w-fit mx-auto lg:mb-11 mb-8 mt-16'>
        <CTAButton active={true} linkto={"/signup"}>Learn More</CTAButton>
      </div>
      
    </div>
  )
}
