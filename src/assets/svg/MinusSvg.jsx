const MinusSvg = ({ className = "" }) => {
  return (
    <svg className={`${className}`} width="11" height="11" fill="none">
      <path
        d="M1 5.5H10"
        stroke="#ada8c4"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
};

export default MinusSvg;


// const PlusSvg = ({ className = "" }) => {
//   return (
//     <svg className={`${className} || ""`} width="11" height="11" fill="none">
//       <path
//         d="M7 1a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v2a1 1 0 0 1-1 1H1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1h2a1 1 0 0 1 1 1v2a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1V8a1 1 0 0 1 1-1h2a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1H8a1 1 0 0 1-1-1V1z"
//         fill="#ada8c4"
//       />
//     </svg>
//   );
// };

// export default PlusSvg;


// const CrossSvg = ({ className = "" }) => {
//   return (
//     <svg className={`${className}`} width="11" height="11" fill="none">
//     <path
//       d="M1 1L10 10M1 10L10 1"
//       stroke="#ada8c4"
//       strokeWidth="2"
//       strokeLinecap="round"
//     />
//   </svg>
//   );
// };

// export default CrossSvg;