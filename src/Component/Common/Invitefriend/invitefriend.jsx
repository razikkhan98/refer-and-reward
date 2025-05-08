import React, { useRef, useState } from "react";
import './invitefriend.scss';  
import FacebookIcon from "../../../assets/Invitefriend/fb-invite.svg"
import TwitterIcon from "../../../assets/Invitefriend/twitter-invite.svg"
import InstaIcon from "../../../assets/Invitefriend/insta-invite.svg"
import YoutubeIcon from "../../../assets/Invitefriend/youtube-invite.svg"
const Invitefriend = () => {
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
  return (
    <section className="section-invitefriend position-relative">
        <div className="row justify-content-center align-items-center h-100">
            <div className="col-12 col-md-5">
                <h2 className="text-white font-40 mb-58">Invite a friend</h2>
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
                <button className="btn-share-via-whatsapp text-white bg-primary-color font-18 mb-46">Share Via Whatsapp</button>
                <ul className="social-nav pl-0 d-flex justify-content-center">
                    <li className="social-list">
                        <a className="social-link" href="" target="_blank" rel="noopener noreferrer">
                            <img className="social-icon" src={FacebookIcon} alt="Facebook" />
                        </a>
                    </li>
                    <li className="social-list">
                        <a className="social-link" href="" target="_blank" rel="noopener noreferrer">
                            <img className="social-icon" src={InstaIcon} alt="Facebook" />
                        </a>
                    </li>
                    <li className="social-list">
                        <a className="social-link" href="" target="_blank" rel="noopener noreferrer">
                            <img className="social-icon" src={YoutubeIcon} alt="Facebook" />
                        </a>
                    </li>
                    <li className="social-list">
                        <a className="social-link" href="" target="_blank" rel="noopener noreferrer">
                            <img className="social-icon" src={TwitterIcon} alt="Facebook" />
                        </a>
                    </li>
                </ul>
            </div>
        </div>
        <div className="invite-bottom-image" data-aos="fade-up"></div>
    </section>
  );
}
export default Invitefriend;