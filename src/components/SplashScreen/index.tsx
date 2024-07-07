// "use client";
// import { cn } from "@/lib/utils";
// import React, { useEffect, useRef } from "react";
// import gsap from "gsap";

// const Preloader: React.FC = () => {
//   const ref = useRef<HTMLDivElement>(null);
//   const percentRef = useRef<HTMLDivElement>(null);
//   const barRef = useRef<HTMLDivElement>(null);
//   const innerRef = useRef<HTMLDivElement>(null);
//   const textRef = useRef<HTMLHeadingElement>(null);
//   const headingRef = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     const tl = gsap.timeline({ defaults: { duration: 1 } });
//     tl.fromTo(
//       percentRef.current,
//       { opacity: 1, zIndex: 1, duration: 2 },
//       {
//         opacity: 0,
//         zIndex: -1,
//         duration: 2,
//       }
//     )
//       .to(barRef.current, {
//         opacity: 0,
//         zIndex: -1,
//       })
//       .to(innerRef.current, {
//         width: "0%",
//       })
//       .from(
//         headingRef.current,
//         {
//           y: "0%",
//         },
//         "-=0.5"
//       )
//       .to(textRef.current, {
//         opacity: 1,
//         boxShadow: "12px 20px rgba(255, 255, 255, 0.23)",
//         skewY: 5,
//         y: "10%",
//         stagger: {
//           amount: 0.4,
//         },
//       });

//     const interval = setInterval(() => {
//       if (percentRef.current && ref.current) {
//         const percentText = percentRef.current.innerHTML;
//         const percent = parseInt(percentText, 10);
//         if (percent >= 100) {
//           clearInterval(interval);
//         } else {
//           const newPercent = percent + 1;
//           percentRef.current.innerHTML = newPercent + "%";
//           ref.current.style.width = newPercent + "%";
//         }
//       }
//     }, 10);

//     return () => {
//       clearInterval(interval);
//     };
//   }, []);

//   return (
//     <div className={cn(`relative h-dvh w-full overflow-hidden`)}>
//       <div
//         ref={innerRef}
//         className={cn(
//           `absolute top-0 left-0 w-full h-dvh bg-[#0f0f0f] z-50 flex justify-center items-center flex-col`
//         )}
//       >
//         <div ref={percentRef} className={cn(`text-[#fff]`)}>
//           1%
//         </div>
//         <div ref={barRef} className={cn(`w-[60%] mt-5`)}>
//           <div ref={ref} className={cn(`w-[1%] py-[1px] px-0 bg-[#fff]`)}></div>
//         </div>
//       </div>
//       <div
//         ref={headingRef}
//         className={cn(
//           `absolute flex items-center justify-center w-full h-screen bg-[#017d3f] bg-[url('https://res.cloudinary.com/adaired/image/upload/v1718599616/Static%20Website%20Images/adaired_logo.png')] bg-no-repeat bg-[position:bottom_right]`
//         )}
//       >
//         <h1 ref={textRef} className={cn(`uppercase opacity-0 text-4xl text-[#fff]`)}>
//           Adaired Digital Media
//         </h1>
//       </div>
//     </div>
//   );
// };

// export default Preloader;

// ---------------------------------------------------------------------------------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------------------------------------------------------------------------------

// "use client";
// import { cn } from "@/lib/utils";
// import React, { useEffect, useRef } from "react";
// import gsap from "gsap";
// const Preloader: React.FC = () => {
//   const ref = useRef<HTMLDivElement>(null);
//   const percentRef = useRef<HTMLDivElement>(null);
//   const barRef = useRef<HTMLDivElement>(null);
//   const innerRef = useRef<HTMLDivElement>(null);
//   const textRef = useRef<HTMLHeadingElement>(null);
//   const headingRef = useRef<HTMLDivElement>(null);
//   const contentRef = useRef<HTMLDivElement>(null); // Ref for the main content

//   useEffect(() => {
//     const tl = gsap.timeline({ defaults: { duration: 1 } });

//     tl.fromTo(
//       percentRef.current,
//       { opacity: 1, zIndex: 1, duration: 2 },
//       {
//         opacity: 0,
//         zIndex: -1,
//         duration: 2,
//       }
//     )
//       .to(barRef.current, {
//         opacity: 0,
//         zIndex: -1,
//       })
//       .to(innerRef.current, {
//         width: "0%",
//       })
//       .from(
//         headingRef.current,
//         {
//           y: "0%",
//         },
//         "-=0.5"
//       )
//       .to(textRef.current, {
//         opacity: 1,
//         boxShadow: "12px 20px rgba(255, 255, 255, 0.23)",
//         // skewY: -5,
//         // y: "10%",
//         stagger: {
//           amount: 0.4,
//         },
//       })
//       .to(
//         headingRef.current,
//         {
//           scale: 100,
//           opacity: 0,
//           duration: 1.5,
//         },
//         "+=1"
//       );

//     const interval = setInterval(() => {
//       if (percentRef.current && ref.current) {
//         const percentText = percentRef.current.innerHTML;
//         const percent = parseInt(percentText, 10);
//         if (percent >= 100) {
//           clearInterval(interval);
//         } else {
//           const newPercent = percent + 1;
//           percentRef.current.innerHTML = newPercent + "%";
//           ref.current.style.width = newPercent + "%";
//         }
//       }
//     }, 10);

//     return () => {
//       clearInterval(interval);
//     };
//   }, []);

//   return (
//     <div className={cn(`relative h-dvh w-full overflow-hidden`)}>
//       <div
//         ref={innerRef}
//         className={cn(
//           `absolute top-0 left-0 w-full h-dvh bg-[#0f0f0f] z-50 flex justify-center items-center flex-col`
//         )}
//       >
//         <div ref={percentRef} className={cn(`text-[#fff]`)}>
//           1%
//         </div>
//         <div ref={barRef} className={cn(`w-[60%] mt-5`)}>
//           <div ref={ref} className={cn(`w-[1%] py-[1px] px-0 bg-[#fff]`)}></div>
//         </div>
//       </div>
//       <div
//         ref={headingRef}
//         // bg-[#017d3f] bg-[url('https://res.cloudinary.com/adaired/image/upload/v1718599616/Static%20Website%20Images/adaired_logo.png')] bg-no-repeat bg-[position:center]
//         className={cn(
//           `absolute flex items-center justify-center w-full h-screen `
//         )}
//       >
//         {/* <h1
//           ref={textRef}
//           className={cn(`uppercase opacity-0 text-4xl text-[#0f0f0f]`)}
//         >
//           Adaired Digital Media
//         </h1> */}
//         <div ref={textRef}>
//           <svg
//             width="184"
//             height="36"
//             viewBox="0 0 184 36"
//             fill="none"
//             xmlns="http://www.w3.org/2000/svg"
//           >
//             <path
//               d="M26.5188 31.7224C26.5188 32.9129 26.1229 33.8757 25.3312 34.6108C24.5395 35.3459 23.5409 35.7137 22.3355 35.7143C21.3798 35.7228 20.4467 35.4267 19.6744 34.87C18.8821 34.3071 18.4552 33.5557 18.3938 32.6157L18.2512 29.3279H10.3114C9.55161 30.5809 8.89452 31.6143 8.34016 32.4282C7.88461 33.1153 7.37597 33.7666 6.8188 34.376C6.35949 34.8618 5.90815 35.2063 5.46477 35.4095C5.01783 35.6131 4.53111 35.7172 4.03903 35.7143C2.86713 35.7143 1.90099 35.3464 1.14059 34.6108C0.380198 33.8751 0 32.9123 0 31.7224C0 31.3785 0.103018 30.9715 0.309053 30.5015C0.448556 30.1601 0.615572 29.8303 0.808489 29.5154L18.5329 2.79227C19.0574 1.99108 19.7656 1.32347 20.5998 0.843614C21.4273 0.361458 22.3714 0.109957 23.3318 0.115823C24.2504 0.115823 25.0108 0.436659 25.613 1.07833C26.2151 1.72 26.5171 2.54179 26.5188 3.5437V31.7224ZM14.3103 21.627H18.1248V15.9043L14.3103 21.627Z"
//               fill="#FB9100"
//             />
//             <path
//               d="M73.713 21.627H77.5266V15.9043L73.713 21.627ZM85.9573 31.7241C85.9573 32.9146 85.5611 33.8773 84.7689 34.6124C83.9766 35.3476 82.9789 35.7154 81.7757 35.716C80.8199 35.7246 79.8868 35.4285 79.1146 34.8717C78.3223 34.3088 77.8954 33.5574 77.834 32.6174L77.6914 29.3296H69.7516C68.9912 30.5826 68.3339 31.616 67.7795 32.4299C67.3244 33.1162 66.8166 33.7668 66.2607 34.376C65.8003 34.8618 65.3486 35.2063 64.9058 35.4095C64.4605 35.6124 63.9756 35.7164 63.4852 35.7143C62.3122 35.7143 61.3446 35.3464 60.5825 34.6108C59.8204 33.8751 59.4402 32.9123 59.4419 31.7224C59.4419 31.3785 59.5449 30.9715 59.751 30.5015C59.8905 30.1601 60.0575 29.8303 60.2504 29.5154L77.974 2.79227C78.4985 1.99108 79.2066 1.32347 80.0409 0.843614C80.8683 0.361458 81.8124 0.109957 82.7728 0.115823C83.6915 0.115823 84.4518 0.436659 85.054 1.07833C85.6562 1.72 85.9573 2.54179 85.9573 3.5437V31.7241Z"
//               fill="#1B5A96"
//             />
//             <path
//               d="M111.44 21.9539V31.535C111.441 32.0845 111.333 32.6288 111.121 33.1366C110.908 33.6445 110.597 34.1058 110.204 34.4942C109.811 34.8826 109.344 35.1903 108.83 35.3997C108.317 35.6091 107.766 35.716 107.211 35.7143C106.66 35.7188 106.116 35.5983 105.619 35.3623C105.136 35.1329 104.701 34.8143 104.339 34.4234C103.972 34.0287 103.689 33.5653 103.507 33.0607C103.319 32.5571 103.223 32.0246 103.222 31.4878V4.43621C103.222 3.2463 103.594 2.26128 104.339 1.48114C105.083 0.701003 106.041 0.309526 107.213 0.306712H114.484C115.961 0.291692 117.425 0.579156 118.784 1.15102C120.064 1.69101 121.22 2.48202 122.182 3.47624C123.139 4.47313 123.89 5.64569 124.391 6.92776C124.923 8.29074 125.189 9.74083 125.176 11.2016C125.176 13.5195 124.724 15.453 123.821 17.002C122.918 18.551 121.611 19.8268 119.901 20.8292L124.225 29.9401C124.507 30.4936 124.653 31.1051 124.652 31.725C124.65 32.2335 124.545 32.7365 124.343 33.2042C124.139 33.6876 123.84 34.1265 123.464 34.496C123.075 34.8781 122.615 35.1815 122.108 35.3893C121.574 35.6102 121 35.7219 120.421 35.7177C119.683 35.7142 118.959 35.5097 118.331 35.1267C117.657 34.73 117.112 34.1519 116.759 33.4601L111.44 21.9539ZM111.44 8.42808V14.2048H114.481C114.957 14.2048 115.352 14.0959 115.669 13.8764C115.973 13.6712 116.231 13.4076 116.429 13.1013C116.619 12.8058 116.755 12.4802 116.833 12.1388C116.908 11.8309 116.948 11.5157 116.953 11.1991C116.948 10.9139 116.907 10.6304 116.833 10.3548C116.751 10.0365 116.615 9.73461 116.429 9.46236C116.229 9.17081 115.97 8.92308 115.669 8.73457C115.352 8.53109 114.957 8.42893 114.481 8.42893L111.44 8.42808Z"
//               fill="#1B5A96"
//             />
//             <path
//               d="M59.5259 11.1056C58.6237 9.02374 57.3344 7.12784 55.7251 5.51627C54.1014 3.90581 52.1821 2.61633 50.0699 1.71689C49.424 1.43714 48.7607 1.19829 48.0841 1.00177C46.468 0.535019 44.7922 0.301272 43.1086 0.307748H35.6956C34.3962 0.307748 33.3111 0.729901 32.4403 1.57421C31.5694 2.41851 31.134 3.49866 31.134 4.81465V31.2524C31.1331 31.8115 31.2546 32.3643 31.49 32.8726C31.9551 33.896 32.7839 34.715 33.819 35.1742C34.3333 35.4071 34.8925 35.5272 35.4582 35.5263H43.1086C43.8987 35.5271 44.6881 35.4772 45.4717 35.3768C47.0575 35.1756 48.6061 34.7517 50.0708 34.118C54.3355 32.3067 57.7245 28.9316 59.5259 24.7014C60.4624 22.5431 60.9385 20.217 60.9243 17.8685C60.9365 15.5427 60.4603 13.2398 59.5259 11.1056ZM51.9943 21.7193C51.5446 22.8467 50.8655 23.8706 49.999 24.7275C49.1325 25.5845 48.0972 26.2561 46.9572 26.7007C46.6806 26.8122 46.3972 26.9084 46.1077 26.9937C45.1333 27.2733 44.1231 27.4121 43.1086 27.4057H39.3521V8.42828H43.3459C44.7398 8.42828 46.015 8.66328 47.1715 9.13327C47.268 9.17211 47.3619 9.2177 47.4566 9.25654C48.4597 9.6927 49.3706 10.312 50.1416 11.0819C50.9798 11.9336 51.6283 12.9494 52.0455 14.064C52.4992 15.2816 52.7245 16.5709 52.7105 17.8685C52.7083 19.2768 52.4695 20.5604 51.9943 21.7193Z"
//               fill="#FB9100"
//             />
//             <path
//               d="M97.5713 1.26592C96.8314 0.546568 95.9261 0.16466 94.8556 0.120193C94.7855 0.120193 94.7138 0.120193 94.6421 0.120193C94.1053 0.111264 93.572 0.208375 93.0736 0.405834C92.5751 0.603294 92.1216 0.897133 91.7394 1.27014C90.9358 2.03846 90.5345 2.98577 90.5356 4.11207V31.7225C90.5356 32.8483 90.9369 33.7953 91.7394 34.5636C92.1213 34.9371 92.5748 35.2312 93.0733 35.4289C93.5718 35.6265 94.1052 35.7236 94.6421 35.7144C94.7138 35.7144 94.7855 35.7144 94.8556 35.7102C95.9267 35.6663 96.832 35.2841 97.5713 34.5636C98.3584 33.797 98.7523 32.85 98.7529 31.7225V4.10785C98.7529 2.98042 98.359 2.03311 97.5713 1.26592Z"
//               fill="#1B5A96"
//             />
//             <path
//               d="M145.654 21.86C146.825 21.86 147.799 21.4685 148.576 20.6856C149.353 19.9026 149.741 18.9323 149.74 17.7744C149.74 16.6487 149.352 15.6935 148.576 14.9089C147.8 14.1242 146.826 13.733 145.654 13.7353H137.576V8.42797H145.654C146.825 8.42797 147.799 8.0289 148.576 7.23075C148.954 6.84989 149.252 6.39831 149.452 5.90238C149.652 5.40646 149.75 4.87613 149.74 4.34238C149.74 3.21664 149.352 2.26173 148.576 1.47765C147.8 0.693576 146.826 0.302099 145.654 0.303225H133.445C132.307 0.303225 131.34 0.694702 130.543 1.47765C129.746 2.26061 129.35 3.231 129.354 4.38882V31.4404C129.345 31.9762 129.446 32.5083 129.65 33.0047C129.854 33.501 130.158 33.9514 130.543 34.3287C131.02 34.8229 131.621 35.183 132.285 35.3723C132.661 35.4766 133.05 35.5286 133.441 35.5268H145.65C146.821 35.5268 147.795 35.1353 148.572 34.3524C149.349 33.5694 149.737 32.6145 149.736 31.4876C149.745 30.9539 149.648 30.4236 149.448 29.9276C149.248 29.4317 148.95 28.9801 148.572 28.5993C148.289 28.3055 147.962 28.0572 147.602 27.863C147.001 27.5493 146.329 27.3908 145.65 27.402H137.572V21.86H145.654Z"
//               fill="#1B5A96"
//             />
//             <path
//               d="M182.599 11.1053C182.551 10.9972 182.503 10.89 182.454 10.7836C181.561 8.82694 180.323 7.0432 178.797 5.51602C177.174 3.9054 175.255 2.61588 173.143 1.71665C170.947 0.771848 168.576 0.29185 166.181 0.3075H158.768C157.468 0.3075 156.384 0.729652 155.513 1.57396C154.643 2.41826 154.207 3.49841 154.206 4.8144V31.2521C154.205 31.8114 154.327 32.3642 154.563 32.8724C155.028 33.8955 155.857 34.7144 156.891 35.1739C157.406 35.4069 157.965 35.527 158.53 35.526H166.181C168.576 35.5412 170.947 35.0613 173.143 34.1169C177.407 32.3054 180.797 28.9307 182.599 24.7012C183.536 22.543 184.014 20.2169 184.001 17.8682C184.012 15.5423 183.534 13.2394 182.599 11.1053ZM175.069 21.7191C174.619 22.8462 173.94 23.87 173.073 24.7269C172.207 25.5837 171.172 26.2555 170.032 26.7005C168.807 27.1804 167.5 27.4199 166.183 27.4055H162.426V8.42803H166.418C167.811 8.42803 169.086 8.66303 170.243 9.13303C171.357 9.57525 172.368 10.2384 173.213 11.0817C174.05 11.9337 174.697 12.9495 175.113 14.0638C175.148 14.1524 175.178 14.2436 175.209 14.3339C175.597 15.4724 175.79 16.6669 175.779 17.8682C175.78 19.2765 175.543 20.5601 175.069 21.7191Z"
//               fill="#1B5A96"
//             />
//           </svg>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Preloader;

// ---------------------------------------------------------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------------------------------------------------------

"use client";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const words = [
  "Hello",
  "Bonjour",
  "Ciao",
  "Olà",
  "やあ",
  "Hallå",
  "Guten tag",
  "Hallo",
  "स्वागत है",
];

const Preloader = () => {
  const [index, setIndex] = useState(0);
  const [dimension, setDimension] = useState({ width: 0, height: 0 });

  useEffect(() => {
    setDimension({ width: window.innerWidth, height: window.innerHeight });
  }, []);

  useEffect(() => {
    if (index == words.length - 1) return;
    setTimeout(
      () => {
        setIndex(index + 1);
      },
      index == 0 ? 1000 : 150
    );
  }, [index]);

  const initialPath = `M0 0 L${dimension.width} 0 L${dimension.width} ${
    dimension.height
  } Q${dimension.width / 2} ${dimension.height + 300} 0 ${
    dimension.height
  }  L0 0`;
  const targetPath = `M0 0 L${dimension.width} 0 L${dimension.width} ${
    dimension.height
  } Q${dimension.width / 2} ${dimension.height} 0 ${dimension.height}  L0 0`;

  const curve = {
    initial: {
      d: initialPath,
      transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1] },
    },
    exit: {
      d: targetPath,
      transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1], delay: 0.3 },
    },
  };
  return (
    <motion.div
      variants={slideUp}
      initial="initial"
      exit="exit"
      className={cn(
        `h-screen w-screen flex items-center justify-center fixed z-51 bg-[##141516] `
      )}
    >
      {dimension.width > 0 && (
        <>
          <motion.p
            variants={opacity}
            initial="initial"
            animate="enter"
            className={cn(
              `flex text-white text-5xl items-center justify-center z-52`
            )}
          >
            <span className="block w-2.5 h-2.5 bg-white rounded-[50%] mr-2.5"></span>
            {words[index]}
          </motion.p>
          <svg className={cn(`absolute top-0 w-full h-custom-100p-300`)}>
            <motion.path
              className={cn(`fill-[#141516]`)}
              variants={curve}
              initial="initial"
              exit="exit"
            ></motion.path>
          </svg>
        </>
      )}
    </motion.div>
  );
};

export default Preloader;

export const opacity = {
  initial: {
    opacity: 0,
  },
  enter: {
    opacity: 0.75,
    transition: { duration: 1, delay: 0.2 },
  },
};

export const slideUp = {
  initial: {
    top: 0,
  },
  exit: {
    top: "-100vh",
    transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.2 },
  },
};




// ----------------------------------------------------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------------------------------------------------


// "use client";
// import { cn } from "@/lib/utils";
// import { motion } from "framer-motion";
// import React, { useEffect, useRef, useState } from "react";
// import gsap from "gsap";

// const words = [
//   "Hello",
//   "Bonjour",
//   "Ciao",
//   "Olà",
//   "やあ",
//   "Hallå",
//   "Guten tag",
//   "Hallo",
//   "स्वागत है",
// ];

// const Preloader: React.FC = () => {
//   const [index, setIndex] = useState(0);
//   const [dimension, setDimension] = useState({ width: 0, height: 0 });
//   const [countingComplete, setCountingComplete] = useState(false);

//   const ref = useRef<HTMLDivElement>(null);
//   const percentRef = useRef<HTMLDivElement>(null);
//   const barRef = useRef<HTMLDivElement>(null);
//   const innerRef = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     setDimension({ width: window.innerWidth, height: window.innerHeight });

//     const tl = gsap.timeline({ defaults: { duration: 1 } });
//     tl.fromTo(
//       percentRef.current,
//       { opacity: 1, zIndex: 1, duration: 2 },
//       {
//         opacity: 0,
//         zIndex: -1,
//         duration: 2,
//       }
//     ).to(barRef.current, {
//       opacity: 0,
//       zIndex: -1,
//     });

//     const interval = setInterval(() => {
//       if (percentRef.current && ref.current) {
//         const percentText = percentRef.current.innerHTML;
//         const percent = parseInt(percentText, 10);
//         if (percent >= 100) {
//           clearInterval(interval);
//           setCountingComplete(true);
//         } else {
//           const newPercent = percent + 1;
//           percentRef.current.innerHTML = newPercent + "%";
//           ref.current.style.width = newPercent + "%";
//         }
//       }
//     }, 10);

//     return () => {
//       clearInterval(interval);
//     };
//   }, []);

//   useEffect(() => {
//     if (!countingComplete || index === words.length - 1) return;
//     const timeout = setTimeout(
//       () => {
//         setIndex(index + 1);
//       },
//       index === 0 ? 1000 : 150
//     );
//     return () => clearTimeout(timeout);
//   }, [index, countingComplete]);

//   const initialPath = `M0 0 L${dimension.width} 0 L${dimension.width} ${
//     dimension.height
//   } Q${dimension.width / 2} ${dimension.height + 300} 0 ${
//     dimension.height
//   }  L0 0`;
//   const targetPath = `M0 0 L${dimension.width} 0 L${dimension.width} ${
//     dimension.height
//   } Q${dimension.width / 2} ${dimension.height} 0 ${dimension.height}  L0 0`;

//   const curve = {
//     initial: {
//       d: initialPath,
//       transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1] },
//     },
//     exit: {
//       d: targetPath,
//       transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1], delay: 0.3 },
//     },
//   };

//   return (
//     <motion.div
//       variants={slideUp}
//       initial="initial"
//       exit="exit"
//       className={cn(
//         "h-screen w-screen flex items-center justify-center fixed z-51 bg-[#141516]"
//       )}
//     >
//       <div
//         ref={innerRef}
//         className={cn(
//           "absolute top-0 left-0 w-full h-dvh bg-[#0f0f0f] z-50 flex justify-center items-center flex-col"
//         )}
//       >
//         <div ref={percentRef} className={cn("text-[#fff]")}>
//           1%
//         </div>
//         <div ref={barRef} className={cn("w-[60%] mt-5")}>
//           <div ref={ref} className={cn("w-[1%] py-[1px] px-0 bg-[#fff]")}></div>
//         </div>
//       </div>
//       {dimension.width > 0 && (
//         <>
//           {countingComplete && (
//             <motion.p
//               variants={opacity}
//               initial="initial"
//               animate="enter"
//               className={cn(
//                 "flex text-white text-5xl items-center justify-center z-52"
//               )}
//             >
//               <span className="block w-2.5 h-2.5 bg-white rounded-[50%] mr-2.5"></span>
//               {words[index]}
//             </motion.p>
//           )}
//           <svg className={cn("absolute top-0 w-full h-custom-100p-300")}>
//             <motion.path
//               className={cn("fill-[#141516]")}
//               variants={curve}
//               initial="initial"
//               exit="exit"
//             ></motion.path>
//           </svg>
//         </>
//       )}
//     </motion.div>
//   );
// };

// export default Preloader;

// export const opacity = {
//   initial: {
//     opacity: 0,
//   },
//   enter: {
//     opacity: 0.75,
//     transition: { duration: 1, delay: 0.2 },
//   },
// };

// export const slideUp = {
//   initial: {
//     top: 0,
//   },
//   exit: {
//     top: "-100vh",
//     transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.2 },
//   },
// };
