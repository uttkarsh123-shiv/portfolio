import Header from "./components/Header";
const FooterSection = ({ id }) => {
  return (
    <div
      id={id}
      className="w-screen h-[40vh] md:h-[70vh] mt-30 md:mt-70 flex flex-col gap-6 md:gap-10 justify-center items-center"
    >
      <div className="w-[80vw] md:w-[75vw] h-[150px] bg-white md:h-[300px] border border-[#00000033] rounded-[20px]  md:rounded-[60px] flex flex-col justify-center items-center gap-5 md:gap-10">
        <h1 className="text-[12px]  md:text-4xl">GET IN TOUCH</h1>

        <div className="button-grp gap-3 flex">
          <button
            className="border pl-4 md:pl-7 pr-4 md:pr-7 p-2 md:p-3 rounded-full bg-black text-white cursor-pointer text-[9px] md:text-[20px] hover:bg-[#292929]"
            onClick={() =>
              (window.location.href =
                "mailto:uttkarshsingh450@gmail.com?subject=Collaboration Request")
            }
          >
            Let's Collaborate
          </button>
          <button
            className="border border-gray-400  pl-4 md:pl-6 pr-4 md:pr-6 p-2 md:p-3 rounded-full cursor-pointer text-[9px] md:text-[20px]"
            onClick={() =>
              window.open(
                "https://drive.google.com/file/d/1hBX85vX9Xa61N-9dNdOrrhXUDfwUP5p2/view",
                "_blank"
              )
            }
          >
            View CV
          </button>
        </div>
      </div>

      <div className="w-[75vw] border border-black opacity-30"></div>

      <div className="flex  items-center  justify-between w-[80vw] md:w-[75vw] text-[12px] md:text-[16px]">
                <p className="text-center">Made with  💓</p>

        <ul className="flex gap-5">
          <li className="border p-4 border-gray-400 cursor-pointer rounded-full">
            <a
              href="https://leetcode.com/u/Uttkarsh_2103/"
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
         <svg  xmlns="http://www.w3.org/2000/svg" width="20" height="20"  
fill="currentColor" viewBox="0 0 24 24" >
<path d="m15.42 16.94-2.25 2.17a2.1 2.1 0 0 1-1.52.56 2.1 2.1 0 0 1-1.52-.56l-3.61-3.63a2.18 2.18 0 0 1-.58-1.55 2.07 2.07 0 0 1 .58-1.52l3.6-3.65a2.1 2.1 0 0 1 1.53-.54 2.08 2.08 0 0 1 1.52.55l2.25 2.17A1.14 1.14 0 0 0 17 9.33l-2.17-2.2a4.24 4.24 0 0 0-2-1.12l2.06-2.08a1.15 1.15 0 0 0-1.62-1.62l-8.43 8.42a4.48 4.48 0 0 0-1.24 3.2 4.57 4.57 0 0 0 1.24 3.23l3.63 3.63A4.38 4.38 0 0 0 11.66 22a4.45 4.45 0 0 0 3.2-1.25L17 18.56a1.14 1.14 0 0 0-1.61-1.62z"></path><path d="M19.34 12.84h-8.45a1.12 1.12 0 0 0 0 2.24h8.45a1.12 1.12 0 0 0 0-2.24"></path>
</svg>
            </a>
          </li>
          <li className="border p-4 border-gray-400 cursor-pointer rounded-full">
            <a
              href="https://www.linkedin.com/in/uttkarsh-singh450/"
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                <g clip-path="url(#clip0_149_17)">
                  <path
                    d="M16.9451 0.333008H1.05621C0.658984 0.333008 0.333984 0.658008 0.333984 1.05523V16.9441C0.333984 17.3413 0.658984 17.6663 1.05621 17.6663H16.9451C17.3423 17.6663 17.6673 17.3413 17.6673 16.9441V1.05523C17.6673 0.658008 17.3423 0.333008 16.9451 0.333008ZM5.46176 15.1025H2.89787V6.83301H5.46176V15.1025ZM4.19787 5.71356C3.36732 5.71356 2.71732 5.06356 2.71732 4.23301C2.71732 3.40245 3.36732 2.75245 4.19787 2.75245C5.02843 2.75245 5.67843 3.40245 5.67843 4.23301C5.67843 5.02745 5.02843 5.71356 4.19787 5.71356ZM15.1034 15.1025H12.5395V11.0941C12.5395 10.1191 12.5395 8.89134 11.2034 8.89134C9.86732 8.89134 9.65065 9.93856 9.65065 11.0219V15.1025H7.08676V6.83301H9.54232V7.95245H9.57843C9.90343 7.30245 10.7701 6.61634 11.9979 6.61634C14.5979 6.61634 15.0673 8.31356 15.0673 10.5525V15.1025H15.1034Z"
                    fill="#000"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_149_17">
                    <rect width="18" height="18" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </a>
          </li>
          <li className="border p-4 border-gray-400 cursor-pointer rounded-full">
            <a
              href="https://github.com/uttkarsh123-shiv"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                width="18px"
                height="18px"
                viewBox="0 0 20 20"
                version="1.1"
                aria-hidden="true"
              >
                <title>github [#142]</title>
                <desc>Created with Sketch.</desc>
                <defs></defs>
                <g
                  id="Page-1"
                  stroke="none"
                  strokeWidth="1"
                  fill="none"
                  fillRule="evenodd"
                >
                  <g
                    id="Dribbble-Light-Preview"
                    transform="translate(-140.000000, -7559.000000)"
                    fill="#000"
                  >
                    <g id="icons" transform="translate(56.000000, 160.000000)">
                      <path
                        d="M94,7399 C99.523,7399 104,7403.59 104,7409.253 C104,7413.782 101.138,7417.624 97.167,7418.981 C96.66,7419.082 96.48,7418.762 96.48,7418.489 C96.48,7418.151 96.492,7417.047 96.492,7415.675 C96.492,7414.719 96.172,7414.095 95.813,7413.777 C98.04,7413.523 100.38,7412.656 100.38,7408.718 C100.38,7407.598 99.992,7406.684 99.35,7405.966 C99.454,7405.707 99.797,7404.664 99.252,7403.252 C99.252,7403.252 98.414,7402.977 96.505,7404.303 C95.706,7404.076 94.85,7403.962 94,7403.958 C93.15,7403.962 92.295,7404.076 91.497,7404.303 C89.586,7402.977 88.746,7403.252 88.746,7403.252 C88.203,7404.664 88.546,7405.707 88.649,7405.966 C88.01,7406.684 87.619,7407.598 87.619,7408.718 C87.619,7412.646 89.954,7413.526 92.175,7413.785 C91.889,7414.041 91.63,7414.493 91.54,7415.156 C90.97,7415.418 89.522,7415.871 88.63,7414.304 C88.63,7414.304 88.101,7413.319 87.097,7413.247 C87.097,7413.247 86.122,7413.234 87.029,7413.87 C87.029,7413.87 87.684,7414.185 88.139,7415.37 C88.139,7415.37 88.726,7417.2 91.508,7416.58 C91.513,7417.437 91.522,7418.245 91.522,7418.489 C91.522,7418.76 91.338,7419.077 90.839,7418.982 C86.865,7417.627 84,7413.783 84,7409.253 C84,7403.59 88.478,7399 94,7399"
                        id="github-[#142]"
                      ></path>
                    </g>
                  </g>
                </g>
              </svg>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default FooterSection;
