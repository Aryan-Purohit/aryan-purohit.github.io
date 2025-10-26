import{j as r}from"./index-C349eTwI.js";const o=()=>{const e=()=>{window.scrollTo({top:window.innerHeight,behavior:"smooth"})};return r.jsxs(r.Fragment,{children:[r.jsx("style",{children:`
          @keyframes scroll-wheel {
            0% {
              transform: translateY(0);
              opacity: 1;
            }
            30% {
              transform: translateY(20px);
              opacity: 1;
            }
            60% {
                transform: translateY(20px);
                opacity: 0;
            }
            100% {
              transform: translateY(0);
              opacity: 0;
            }
          }
          .animate-scroll-wheel {
            animation: scroll-wheel 2s infinite;
          }
        `}),r.jsx("div",{className:"absolute bottom-10 left-1/2 -translate-x-1/2 cursor-pointer",onClick:e,children:r.jsx("div",{className:"w-7 h-12 border-2 border-white rounded-full",children:r.jsx("div",{className:"w-1 h-2 bg-white rounded-full mx-auto mt-2 animate-scroll-wheel"})})})]})};export{o as default};
