import React from "react";
// import "./whoarewe.css";
import Image from "./khalilpic.jpg";

// export const Whoarewe = () => {
//   return (
//     <div className="box">
//       <div className="img-box">
//         <img className="whoarewe-img" src={Image} alt="khalilpic" />
//       </div>
//       <h1 className="title">Khalil Selyan</h1>
//       <p className="description">
//         Lorem Ipsum is simply dummy text of the printing and typesetting
//         industry. Lorem Ipsum has been the industry's standard dummy text ever
//         since the 1500s, when an unknown printer took a galley of type and
//         scrambled it to make a type specimen book. It has survived not only five
//         centuries, but also the leap into electronic typesetting, remaining
//         essentially unchanged. It was popularised in the 1960s with the release
//         of Letraset sheets containing Lorem Ipsum passages, and more recently
//         with desktop publishing software like Aldus PageMaker including versions
//         of Lorem Ipsum.
//       </p>
//     </div>
//   );
// };
export const Whoarewe = () => {
  return (
    <div className="w-[90%] lg:w-[60rem] h-[35rem] lg:h-[40rem] flex flex-col items-center space-y-4 bg-[#ebcc9b] rounded-[1.5625rem] lg:px-12">
      <div className="pt-4 lg:pt-10">
        <img
          className="w-60 lg:w-[24rem] p-2 rounded-[1.5625rem]"
          src={Image}
          alt="khalilpic"
        />
      </div>
      <div className="border-t border-b border-black w-4/5 lg:w-3/4 text-2xl lg:text-[2.125rem] font-bold font-pacifico py-2 lg:py-4">
        Khalil Selyan
      </div>
      <p className="text-[1rem] lg:text-[1.5rem] text-center">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.
      </p>
    </div>
  );
};
