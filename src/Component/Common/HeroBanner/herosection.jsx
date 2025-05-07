import React, { useContext } from "react";

const Herosection = () => {

  // =========
  // States
  // =========

  return (
    <section className="banner-section">
      <div className="container">
        <div className="text-center">
          <h3 className="text-uppercase text-blue fw-bold font-size-46 mb-0">
            Milky Way Galaxy
          </h3>
        </div>
        {/* <ul className="d-flex justify-content-between mb-0 mt-4 pt-2 px-0">
            <li className="list-unstyled text-dark-blue fw-semibold font-size-24"><span className="d-block font-size-16 fw-normal text-light-white mb-1">Meteors Gained</span>300 Meteors</li>
            <li className="list-unstyled text-dark-blue fw-semibold font-size-24"><span className="d-block font-size-16 fw-normal text-light-white mb-1">Stars Gained</span>0 Stars</li>
            <li className="list-unstyled fw-normal font-size-46 text-white">Planet A</li>
            <li className="list-unstyled text-dark-blue fw-semibold font-size-24"><span className="d-block font-size-16 fw-normal text-light-white mb-1">Total Meteors</span>1000 Meteors</li>
            <li className="list-unstyled text-dark-blue fw-semibold font-size-24"><span className="d-block font-size-16 fw-normal text-light-white mb-1">Planet Status</span>Unlocked</li>
        </ul> */}
        <div className="row justify-content-center mt-5 pt-5">
          <div className="col-3 col-lg-3 ">
          <div className="list-unstyled text-dark-blue fw-semibold font-size-24"><span className="d-block font-size-16 fw-normal text-light-white mb-1">Meteors Gained</span>300 Meteors</div>
          <div className="list-unstyled text-dark-blue fw-semibold font-size-24"><span className="d-block font-size-16 fw-normal text-light-white mb-1">Stars Gained</span>0 Stars</div>
          </div>
          <div className="col-4 col-lg-4 text-center">
          <div className="list-unstyled fw-normal font-size-46 text-white">Planet A</div>
          </div>
          <div className="col-3 col-lg-3 ">
            <div className="list-unstyled text-dark-blue fw-semibold font-size-24"><span className="d-block font-size-16 fw-normal text-light-white mb-1">Total Meteors</span>1000 Meteors</div>
            <div className="list-unstyled text-dark-blue fw-semibold font-size-24"><span className="d-block font-size-16 fw-normal text-light-white mb-1">Planet Status</span>Unlocked</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Herosection;
