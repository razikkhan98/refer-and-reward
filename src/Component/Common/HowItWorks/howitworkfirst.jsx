import React from 'react';
import Robortgif from '../../../assets/HowItWorks/gif-hiw.gif';
import './howitworks.scss';
const Howitworksfirst = () => {
  return (
    <section className="section-howitworks invite-bg-image text-center position-relative">
      <h2 className="space-grotesk-bold font-40 text-black-heading pt-5">
        How It Works
      </h2>
      <div className="h-75 d-flex justify-content-center align-items-center">
        <img
          data-aos="fade-down"
          data-aos-duration="3000"
          className="width-20 centered-image"
          src={Robortgif}
          alt="Robort"
        />
      </div>
    </section>
  );
};
export default Howitworksfirst;
