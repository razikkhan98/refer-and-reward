import React, { useEffect, useRef, useState } from 'react';
import navCenterImg from '../../../assets/navbar/navCenterImg.svg';
const Navbar = () => {
  const navItems = [
    { label: 'Home', color: 'orange' },
    { label: 'About', color: 'green' },
    { img: navCenterImg },
    { label: 'Testimonials', color: 'blue' },
    { label: 'Contact', color: 'rebeccapurple' },
  ];
  const indicatorRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const navRefs = useRef([]);
  const blurShadowRef = useRef(null);


  const handleClick = (index) => {
    setActiveIndex(index);
  };

  // useEffect(() => {
  //   const currentItem = navRefs.current[activeIndex];
  //   if (currentItem && indicatorRef.current) {
  //     indicatorRef.current.style.width = `${currentItem.offsetWidth}px`;
  //     indicatorRef.current.style.left = `${currentItem.offsetLeft}px`;
  //     indicatorRef.current.style.backgroundColor = '#fff';
  //   }
  // }, [activeIndex]);
  useEffect(() => {
    const currentItem = navRefs.current[activeIndex];
    if (currentItem && indicatorRef.current && blurShadowRef.current) {
      const { offsetWidth, offsetLeft, offsetTop } = currentItem;
  
      indicatorRef.current.style.width = `${offsetWidth}px`;
      indicatorRef.current.style.left = `${offsetLeft}px`;
      indicatorRef.current.style.backgroundColor = '#fff';
  
      blurShadowRef.current.style.width = `200px`; // fixed width as per your CSS
      blurShadowRef.current.style.left = `${offsetLeft - 50}px`; // offset slightly for blur effect
      // blurShadowRef.current.style.top = `${offsetTop}px`;
    }
  }, [activeIndex]);
  
  return (
    <section className="header-section">
      <nav class="navbar navbar-expand-lg  my-0 py-0">
        <div class="container-fluid justify-content-end">
          <div class="navbar-collapse my-0 py-0">
            <div className="container-fluid px-5">
              <ul className="d-flex justify-content-between my-0 py-0 px-0">
                {navItems?.map((i, index) => {
                  return !i?.img ? (
                    <li
                      className={`list-unstyled list-background h-100 text-white fw-medium mt-4 pt-3`}
                    >
                      <span
                        data-active-color="orange"
                        ref={(el) => (navRefs.current[index] = el)}
                        className={`nav-link px-3 ${activeIndex === index ? 'active' : ''
                          }`}
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
                <span
                  className="nav-indicator position-absolute"
                  ref={indicatorRef}
                ></span>
                <span
  className="active-blur-shadow position-absolute"
  ref={blurShadowRef}
/>

              </ul>
            </div>
          </div>
        </div>
      </nav>
    </section>
  );
};

export default Navbar;
