// import React, { useRef, useState } from 'react';
// import './invitefriend.scss';
// import FacebookIcon from '../../../assets/Invitefriend/fb-invite.svg';
// import TwitterIcon from '../../../assets/Invitefriend/twitter-invite.svg';
// import InstaIcon from '../../../assets/Invitefriend/insta-invite.svg';
// import YoutubeIcon from '../../../assets/Invitefriend/youtube-invite.svg';
// const Invitefriend = () => {
//   const inputRef = useRef(null);
//   const [copied, setCopied] = useState(false);

//   const handleCopy = async () => {
//     try {
//       await navigator.clipboard.writeText(inputRef.current.value);
//       setCopied(true);
//       setTimeout(() => setCopied(false), 1500);
//     } catch (err) {
//       console.error('Failed to copy: ', err);
//     }
//   };

//   return (
//     <section className="section-invitefriend position-relative" >
//       <div
//         className="invite-bottom-image"
//         data-aos="fade-up"
//         data-aos-duration="4000"
//       ></div>
//       <div className="container">
//         <div className="row text-center justify-content-center align-items-start h-100">
//           <div className="col-12 col-md-5 content-z-index pt-72">
//             <h2 className="text-white font-40 mb-58 space-grotesk-b">
//               Invite a friend
//             </h2>
//             <div className="copy-input-container">
//               <input
//                 ref={inputRef}
//                 type="text"
//                 defaultValue="https://example.com/my-link"
//                 className="copy-input input-invite-friend bg-white mb-60"
//               />
//               <button className="copy-button" onClick={handleCopy}>
//                 {copied ? 'Copied!' : 'Copy'}
//               </button>
//             </div>
//             <div className="divider-with-text">
//               <span className="divider-border">Or</span>
//             </div>
//             <button className="btn-share-via-whatsapp poppins-regular text-white bg-primary-color font-18 mb-46">
//               Share Via Whatsapp
//             </button>
//             <ul className="social-nav pl-0 d-flex justify-content-center">
//               <li className="social-list">
//                 <a
//                   className="social-link"
//                   href=""
//                   target="_blank"
//                   rel="noopener noreferrer"
//                 >
//                   <img
//                     className="social-icon"
//                     src={FacebookIcon}
//                     alt="Facebook"
//                   />
//                 </a>
//               </li>
//               <li className="social-list">
//                 <a
//                   className="social-link"
//                   href=""
//                   target="_blank"
//                   rel="noopener noreferrer"
//                 >
//                   <img className="social-icon" src={InstaIcon} alt="Facebook" />
//                 </a>
//               </li>
//               <li className="social-list">
//                 <a
//                   className="social-link"
//                   href=""
//                   target="_blank"
//                   rel="noopener noreferrer"
//                 >
//                   <img
//                     className="social-icon"
//                     src={YoutubeIcon}
//                     alt="Facebook"
//                   />
//                 </a>
//               </li>
//               <li className="social-list">
//                 <a
//                   className="social-link"
//                   href=""
//                   target="_blank"
//                   rel="noopener noreferrer"
//                 >
//                   <img
//                     className="social-icon"
//                     src={TwitterIcon}
//                     alt="Facebook"
//                   />
//                 </a>
//               </li>
//             </ul>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };
// export default Invitefriend;
import React, { useEffect, useRef, useState } from 'react';
import stars from '../../../assets/redeemEarn/starts.svg';
import footer from '../../../assets/Invitefriend/Bottom-invite.svg';
import FacebookIcon from '../../../assets/Invitefriend/fb-invite.svg';
import TwitterIcon from '../../../assets/Invitefriend/twitter-invite.svg';
import InstaIcon from '../../../assets/Invitefriend/insta-invite.svg';
import YoutubeIcon from '../../../assets/Invitefriend/youtube-invite.svg';

const Invitefriend = () => {
    const [animate, setAnimate] = useState(false);
    const inputRef = useRef(null);
    const [copied, setCopied] = useState(false);

    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(inputRef.current.value);
            setCopied(true);
            setTimeout(() => setCopied(false), 1500);
        } catch (err) {
            console.error('Failed to copy: ', err);
        }
    };
    const handleClick = () => {
        setAnimate(!animate);
    };

    // ---------------------------------
    // scroll function

    const [scrollProgress, setScrollProgress] = useState(0);

    // Optional: separate states for each animation if needed
    const [animateTop, setAnimateTop] = useState(false);
    const [animateMiddle, setAnimateMiddle] = useState(false);
    const [animateFooter, setAnimateFooter] = useState(false);

    const handleScroll = () => {
        const scrollTop = window.scrollY;
        const docHeight =
            document.documentElement.scrollHeight - window.innerHeight;

        const scrollPercent = (scrollTop / docHeight) * 100;
        setScrollProgress(scrollPercent);

        // Example thresholds, adjust as needed
        if (scrollPercent > 53) {
            setAnimateTop(true);
        } else {
            setAnimateTop(false);
        }

        if (scrollPercent > 55) {
            setAnimateMiddle(true);
        } else {
            setAnimateMiddle(false);
        }

        if (scrollPercent > 55) {
            setAnimateFooter(true);
        } else {
            setAnimateFooter(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <>
            <section
                className={`text-center section-invitefriend first-section invite-bg-image position-relative ${scrollProgress > 55 ? 'scrHghRed' : 'scrHghInc'}`}
            >
                {/* Top Starts images */}
                <div
                    className={`top-section  asto-transition-all duration-1000 w-100 position-absolute ${animateTop ? 'nav-slide-top' : ''
                        }`}
                >
                    <img className="w-100" src={stars} alt="" />
                </div>

                {/* middle section */}
                <div
                    className={`container center-section  transition-all duration-1000 ${animateMiddle ? 'form-fade-down' : ''
                        }`}
                >
                    <div className="row text-center justify-content-center align-items-start h-100">
                        <div className="col-12 col-md-5 content-z-index pt-72">
                            <h2 className="text-white font-40 mb-58 space-grotesk-b">
                                Invite a friend
                            </h2>
                            <div className="copy-input-container">
                                <input
                                    ref={inputRef}
                                    type="text"
                                    defaultValue="https://example.com/my-link"
                                    className="copy-input input-invite-friend bg-white mb-60"
                                />
                                <button className="copy-button" onClick={handleCopy}>
                                    {copied ? 'Copied!' : 'Copy'}
                                </button>
                            </div>
                            <div className="divider-with-text">
                                <span className="divider-border">Or</span>
                            </div>
                            <button
                                onClick={handleClick}
                                className="btn-share-via-whatsapp poppins-regular text-white bg-primary-color font-18 mb-46"
                            >
                                Share Via Whatsapp
                            </button>
                            <ul className="social-nav pl-0 d-flex justify-content-center">
                                <li className="social-list">
                                    <a
                                        className="social-link"
                                        href=""
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <img
                                            className="social-icon"
                                            src={FacebookIcon}
                                            alt="Facebook"
                                        />
                                    </a>
                                </li>
                                <li className="social-list">
                                    <a
                                        className="social-link"
                                        href=""
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <img
                                            className="social-icon"
                                            src={InstaIcon}
                                            alt="Facebook"
                                        />
                                    </a>
                                </li>
                                <li className="social-list">
                                    <a
                                        className="social-link"
                                        href=""
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <img
                                            className="social-icon"
                                            src={YoutubeIcon}
                                            alt="Facebook"
                                        />
                                    </a>
                                </li>
                                <li className="social-list">
                                    <a
                                        className="social-link"
                                        href=""
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <img
                                            className="social-icon"
                                            src={TwitterIcon}
                                            alt="Facebook"
                                        />
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* footer section */}
                <div
                    className={`footer-section asto-transition-all duration-1000 position-absolute w-100 bottom-0 ${animateFooter ? 'astro-slide-down' : ''
                        }`}
                >
                    <img data-aos="fade-up"
                        data-aos-duration="4000"  className="w-100" src={footer} alt="" />
                </div>
            </section>
        </>
    );
};

export default Invitefriend;
