// import React from "react";
// import navCenterImg from "../../../assets/navbar/navCenterImg.png";
// const Navbar = () => {
//   return (
//     <section className="header-section">
//       <nav class="navbar navbar-expand-lg  my-0 py-0">
//         <div class="container-fluid">
//           <button
//             class="navbar-toggler"
//             type="button"
//             data-bs-toggle="collapse"
//             data-bs-target="#navbarTogglerDemo03"
//             aria-controls="navbarTogglerDemo03"
//             aria-expanded="false"
//             aria-label="Toggle navigation"
//           >
//             <span class="navbar-toggler-icon"></span>
//           </button>
//           <div
//             class="collapse navbar-collapse my-0 py-0"
//             id="navbarTogglerDemo03"
//           >
//             <div className="container-fluid px-5">
//             <ul className="row justify-content-between my-0 py-0 px-0">
//               <li className="col-lg-2 list-unstyled h-100 text-white fw-medium mt-4 pt-3 ps-5 text-decoration-underline text-underline-offset-6">
//                 Home
//               </li>
//               <li className="col-lg-2 list-unstyled h-100 text-white fw-medium mt-4 pt-3 text-center">
//                 My Rewards
//               </li>
//               <li className="col-lg-3 list-unstyled text-center">
//                 <img className="header-center-img h-75" src={navCenterImg} alt="" />
//               </li>
//               <li className="col-lg-2 list-unstyled h-100 text-white fw-medium mt-4 pt-3 text-center">
//                 My Referrals
//               </li>
//               <li className="col-lg-2 list-unstyled h-100 text-white fw-medium mt-4 pt-3 pe-5 text-end">
//                 Profile
//               </li>
//             </ul>
//             </div>
//           </div>
//         </div>
//       </nav>
//     </section>
//   );
// };

// export default Navbar;


import React, { useEffect, useRef, useState } from "react";
import navCenterImg from "../../../Assets/Images/navbar/navCenterImg.png";
const Navbar = () => {
  const navItems = [
    { label: "Home", color: "orange" },
    { label: "About", color: "green" },
    { img: navCenterImg },
    { label: "Testimonials", color: "blue" },
    { label: "Contact", color: "rebeccapurple" },
  ];
  const indicatorRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const navRefs = useRef([]);

  const handleClick = (index) => {
    setActiveIndex(index);
  };

  useEffect(() => {
    const currentItem = navRefs.current[activeIndex];
    if (currentItem && indicatorRef.current) {
      indicatorRef.current.style.width = `${currentItem.offsetWidth}px`;
      indicatorRef.current.style.left = `${currentItem.offsetLeft}px`;
      indicatorRef.current.style.backgroundColor = "#fff";
    }
  }, [activeIndex]);
  return (
    <section className="header-section">
      <nav class="navbar navbar-expand-lg  my-0 py-0">
        <div class="container-fluid">
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo03"
            aria-controls="navbarTogglerDemo03"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div
            class="collapse navbar-collapse my-0 py-0"
            id="navbarTogglerDemo03"
          >
            <div className="container-fluid px-5">
              <ul className="d-flex justify-content-between my-0 py-0 px-0">
                {navItems?.map((i, index) => {
                  return !i?.img ? (
                    <li
                      className={` ${
                        index == 0
                          ? " list-unstyled h-100 text-white fw-medium mt-4  pt-3"
                          : index == 3
                          ? " list-unstyled h-100 text-white fw-medium mt-4 pt-3"
                          : " list-unstyled h-100 text-white fw-medium mt-4 pt-3"
                      }`}
                    >
                      <span
                        data-active-color="orange"
                        ref={(el) => (navRefs.current[index] = el)}
                        className={`nav-link px-3 ${
                          activeIndex === index ? "active" : ""
                        }`}
                        // style={{
                        //   color: activeIndex === index ? i.color : "#83818c",
                        // }}
                        onClick={() => handleClick(index)}
                      >
                        {i?.label}
                      </span>
                    </li>
                  ) : (
                    <li className="list-unstyled text-center">
                      <img
                        className="header-center-img h-75"
                        src={navCenterImg}
                        alt=""
                      />
                    </li>
                  );
                })}
                <span className="nav-indicator position-absolute" ref={indicatorRef}></span>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </section>
  );
};

export default Navbar;
