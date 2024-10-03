import React, { useState } from "react";
import { GrFormDown } from "react-icons/gr";
import { GrFormUp } from "react-icons/gr";

export default function Accord() {
  const [check, setCheck] = useState(null);
  const data = [
    {
      question: "What is Viva’s Line of Credit?",
      answer:
        "Viva offers a flexible loan that lets you operate multiple credit lines at the same time. That means you can withdraw your full credit limit, or in parts as needed. Since this is a revolving line of credit, you have multiple options for repayment and redemption, based on what works for you.",
    },
    {
      question: "What is Viva’s Line of Credit?",
      answer:
        "Viva offers a flexible loan that lets you operate multiple credit lines at the same time. That means you can withdraw your full credit limit, or in parts as needed. Since this is a revolving line of credit, you have multiple options for repayment and redemption, based on what works for you.",
    },

    {
      question: "What is Viva’s Line of Credit?",
      answer:
        "Viva offers a flexible loan that lets you operate multiple credit lines at the same time. That means you can withdraw your full credit limit, or in parts as needed. Since this is a revolving line of credit, you have multiple options for repayment and redemption, based on what works for you.Viva offers a flexible loan that lets you operate multiple credit lines at the same time. That means you can withdraw your full credit limit, or in parts as needed. Since this is a revolving line of credit, you have multiple options for repayment and redemption, based on what works for you",
    },

    {
      question: "What is Viva’s Line of Credit?",
      answer:
        "Viva offers a flexible loan that lets you operate multiple credit lines at the same time. That means you can withdraw your full credit limit, or in parts as needed. Since this is a revolving line of credit, you have multiple options for repayment and redemption, based on what works for you.",
    },

    {
      question: "What is Viva’s Line of Credit?",
      answer:
        "Viva offers a flexible loan that lets you operate multiple credit lines at the same time. That means you can withdraw your full credit limit, or in parts as needed. Since this is a revolving line of credit, you have multiple options for repayment and redemption, based on what works for you.",
    },
  ];
  const handleAccordion = (index) => {
    console.log("iddd", index);
    if (check === index) setCheck(null);
    else setCheck(index);
  };
  return (
    <div>
      <div className="flex @apply ml-[310px] text-3xl font-extrabold bg-gradient-to-bl from-blue-500 to-purple-800 bg-clip-text text-transparent">
        Frequently Asked Questions
      </div>

      {data.map((faq, index) => (
        <div
          key={index}
          className=" pl-8 @apply ml-[310px] bg-white m-4 w-[800px] p-8 rounded-lg text-xl"
        >
          <div className="flex justify-between	">
            
            <div
              
              className="transition-transform duration-500 ease-in-out"
            >
              {faq.question}
            </div>
            {check === index ? <GrFormUp onClick={() => handleAccordion(index)}/> : <GrFormDown onClick={() => handleAccordion(index)}/>}
          </div>
          {check === index && (
            <div className="pb-4 pt-4 bg-white">{faq.answer}</div>
          )}
        </div>
      ))}
    </div>
  );
}
