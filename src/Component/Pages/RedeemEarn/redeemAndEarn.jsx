import React from 'react';

// imports images
import metero from '../../../assets/secondScreen/metero.svg';
import redeembox from '../../../assets/redeemEarn/redembox.svg';
import leftcloud from '../../../assets/redeemEarn/leftcloud.svg';
import rocket from '../../../assets/redeemEarn/moverokt.svg';
import coins from '../../../assets/redeemEarn/coinsclt.svg';

const RedeemAndEarn = () => {
  return (
    <section
      className="hero-section d-flex justify-content-center align-items-center px-5"
      id=""
    >
      <div className="redeem-box position-relative w-50 p-5 bg-opacity-25 bg-light rounded"
        data-aos="fade-up"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
          // data-aos-duration="500"
      >
        <div
          className="redeem-circle-sect position-absolute"
          data-aos="fade-left"
          data-aos-offset="600"
          data-aos-easing="ease-in-sine"
        >
          <div className="redeem-circle redeem-shadow position-relative d-flex justify-content-center align-items-center">
            <img
              className="position-absolute redem-box"
              src={redeembox}
              alt="redeembox"
            />
            <img
              className="position-absolute left-cloud start-0 "
              src={leftcloud}
              alt="redeembox"
            />

            <div className="redeem-circle-cont text-center">
              <h2 className="text-white mb-0 font-size-24 ms-5 ps-3">Redeem</h2>
              <div className="text-white d-flex justify-content-center align-items-center ms-5 ps-4">
                <span className="text-light-yellow font-size-12 fw-semibold">
                  150
                </span>
                <img className="mx-1" src={metero} alt="metero" />
                <span className="font-size-14 fw-medium">Total Meteors</span>
              </div>
            </div>
            <img
              className="position-absolute launch-rocket"
              src={rocket}
              alt="rocket"
            />
          </div>
        </div>
        <p className="text-center font-32 fw-medium px-5 pt-4 text-dark-blue">
          Earn more with every action and redeem for real rewards on your
          journey through the stars
        </p>

        <div
          className="earnmore-circle-sect  position-absolute"
          data-aos="fade-right"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
        >
          <div className="redeem-circle earn-shadow position-relative d-flex justify-content-center align-items-center">
            <img
              className="position-absolute coins-box"
              src={coins}
              alt="coins"
            />
            <img
              className="position-absolute left-cloud start-0 "
              src={leftcloud}
              alt="redeembox"
            />

            <div className="earnmore-circle-cont text-center">
              <h2 className="text-white mb-0 font-size-24 ms-5 ps-3">
                Earn More
              </h2>
              <div className="text-white d-flex justify-content-center align-items-center ms-5 ps-4">
                <span className="text-light-yellow font-size-12 fw-semibold">
                  150
                </span>
                <img className="mx-1" src={metero} alt="metero" />
                <span className="font-size-14 fw-medium">Total Meteors</span>
              </div>
            </div>
            <img
              className="position-absolute launch-rocket"
              src={rocket}
              alt="rocket"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default RedeemAndEarn;

// import React, { useState, useEffect } from 'react';

// const RedeemAndEarn = () => {
//   // State for tracking scroll direction
//   const [scrollDirection, setScrollDirection] = useState(null);
//   // State for box size
//   const [size, setSize] = useState(100);
//   // State for box position
//   const [position, setPosition] = useState({ top: '50%', left: '50%' });
//   // State to store last scrollY position
//   const [lastScrollY, setLastScrollY] = useState(window.scrollY);

//   // Constants for size limits
//   const MIN_SIZE = 50;
//   const MAX_SIZE = 200;

//   useEffect(() => {
//     const handleScroll = () => {
//       const currentScrollY = window.scrollY;

//       if (currentScrollY > lastScrollY) {
//         // Scrolling down
//         if (scrollDirection !== 'down') {
//           setScrollDirection('down');
//         }
//         // Increase size
//         setSize(prevSize => Math.min(prevSize + 5, MAX_SIZE));
//         // Move box to bottom right
//         setPosition({ top: '80%', left: '80%' });
//       } else if (currentScrollY < lastScrollY) {
//         // Scrolling up
//         if (scrollDirection !== 'up') {
//           setScrollDirection('up');
//         }
//         // Decrease size
//         setSize(prevSize => Math.max(prevSize - 5, MIN_SIZE));
//         // Move box back to center
//         setPosition({ top: '50%', left: '50%' });
//       }
//       setLastScrollY(currentScrollY);
//     };

//     window.addEventListener('scroll', handleScroll);

//     // Cleanup on unmount
//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//     };
//   }, [lastScrollY, scrollDirection]);

//   return (
//     <div style={{
//       height: '100vh', // To enable scrolling
//       position: 'relative',
//       backgroundColor: '#f0f0f0',
//     }}>
//       <div
//         style={{
//           position: 'absolute',
//           top: position.top,
//           left: position.left,
//           transform: 'translate(-50%, -50%)',
//           width: `${size}px`,
//           height: `${size}px`,
//           backgroundColor: '#4CAF50',
//           borderRadius: '8px',
//           display: 'flex',
//           alignItems: 'center',
//           justifyContent: 'center',
//           color: '#fff',
//           fontWeight: 'bold',
//           boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
//           transition: 'all 0.3s ease',
//           zIndex: 1000,
//         }}
//       >
//         Box
//       </div>
//       {/* Optional: Add some content to scroll */}
//       <div style={{ padding: '50px' }}>
//         <h2>Scroll Up and Down</h2>
//         <p>Scroll the page up and down to see the box animate.</p>
//         {/* Add more content if needed */}
//       </div>
//     </div>
//   );
// };

// export default RedeemAndEarn;

// import React, { useState, useEffect, useRef } from 'react';

// const RedeemAndEarn = () => {
//   const [size, setSize] = useState(100);
//   const [position, setPosition] = useState({ top: '50%', left: '50%' });
//   const lastScrollY = useRef(window.scrollY);
//   const scrollDirection = useRef(null);

//   const MIN_SIZE = 50;
//   const MAX_SIZE = 200;

//   useEffect(() => {
//     const handleScroll = () => {
//       const currentScrollY = window.scrollY;
//       const direction = currentScrollY > lastScrollY.current ? 'down' : 'up';

//       // Update scroll direction ref
//       scrollDirection.current = direction;

//       if (direction === 'down') {
//         // Increase size up to MAX_SIZE
//         setSize((prev) => Math.min(prev + 5, MAX_SIZE));
//         // Move box to bottom right
//         setPosition({ top: '80%', left: '80%' });
//       } else {
//         // Decrease size down to MIN_SIZE
//         setSize((prev) => Math.max(prev - 5, MIN_SIZE));
//         // Move box back to center
//         setPosition({ top: '50%', left: '50%' });
//       }

//       lastScrollY.current = currentScrollY;
//     };

//     window.addEventListener('scroll', handleScroll);

//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   return (
//     <div
//       style={{
//         height: '100vh', // Make page scrollable
//         position: 'relative',
//         backgroundColor: '#f0f0f0',
//       }}
//     >
//       <div
//         style={{
//           position: 'absolute',
//           top: position.top,
//           left: position.left,
//           transform: 'translate(-50%, -50%)',
//           width: `${size}px`,
//           height: `${size}px`,
//           backgroundColor: '#4CAF50',
//           borderRadius: '8px',
//           display: 'flex',
//           alignItems: 'center',
//           justifyContent: 'center',
//           color: '#fff',
//           fontWeight: 'bold',
//           boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
//           transition: 'all 0.3s ease',
//           zIndex: 1000,
//         }}
//       >
//         Box
//       </div>
//     </div>
//   );
// };

// export default RedeemAndEarn;
