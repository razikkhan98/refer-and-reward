import React, { useState } from 'react';

// import images
import metero from '../../../assets/secondScreen/metero.svg';
import tiltship from '../../../assets/secondScreen/tillship.svg';
import star from '../../../assets/secondScreen/star.svg';
import borderstar from '../../../assets/secondScreen/bdrstar.svg';
import prgicon from '../../../assets/secondScreen/prgicon.svg';
import leftarrow from '../../../assets/secondScreen/leftarrow.svg';
import longarrow from '../../../assets/secondScreen/lngarw.svg';
import rocket from '../../../assets/secondScreen/rocket.svg';
import astronot from '../../../assets/secondScreen/astronot.svg';
import alenship from '../../../assets/secondScreen/alienship.svg';

import pathway from '../../../assets/secondScreen/pathway.svg';
import blue from '../../../assets/HomePlanets/blue.svg';
import green from '../../../assets/HomePlanets/green.svg';
import purple from '../../../assets/HomePlanets/purple.svg';
import yellow from '../../../assets/HomePlanets/yellow.svg';

const SecondScreen = () => {
  const [showModal, setShowModal] = useState(true); // open by default

  const handleClose = () => setShowModal(false);
  const handleOpen = () => setShowModal(true);
  return (
    <section className="second-screen-section position-relative" id="">
      <div className="container">
        <div className="row justify-content-between mt-4">
          <div className="col-lg-3">
            <span className=" text-white d-flex font-size-14 fw-medium">
              <img className="me-1" src={leftarrow} alt="" /> Back
            </span>
          </div>
          <div className="col-lg-3 px-4 mt-4">
            <div className="till-ship position-relative tilte-shadow rounded-3">
              <img
                className="position-absolute till-ship-img"
                src={tiltship}
                alt=""
              />
              <div className="py-2 offset-2 text-white">
                <span className="font-size-14 fw-bold till-ship-border-color pe-3 z-1 position-relative">
                  300
                  <img className="my-1 mx-2" src={metero} alt="" />
                  <span className="fw-medium">Meteors</span>
                </span>
                <span className="font-size-14 fw-bold ms-3">
                  1
                  <img className="mx-1" src={star} alt="" />
                  <span className="fw-medium">star</span>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="row justify-content-between">
          <div className="col-lg-2 px-0">
            <p className="text-dark-blue font-size-16 fw-medium mb-3">
              Your Progress So far
            </p>
            <div className="progress-sect rounded-4">
              <ul className="list-unstyled mb-0 ps-4 pt-1">
                <li className="d-flex pt-2">
                  <div className="d-grid progress-side-sec">
                    <img className="w-50 mx-auto" src={prgicon} alt="" />{' '}
                    <hr className="progress-side-hr" />
                  </div>{' '}
                  <span className="ms-2 progress-sect-name font-size-16 fw-medium text-blue-2">
                    Planet A
                  </span>
                </li>
                <li className="d-flex pt-1">
                  <div className="d-grid progress-side-sec">
                    <hr className="progress-side-hr-2" />
                    <img className="w-50 mx-auto" src={prgicon} alt="" />{' '}
                  </div>{' '}
                  <span className="ms-2 progress-sect-name mt-1 d-flex align-items-end font-size-16 fw-medium text-blue-2">
                    Planet B
                  </span>
                </li>
                <li className="d-flex pt-2">
                  <div className="d-grid progress-side-sec">
                    <hr className="progress-side-hr-2" />
                    <img className="w-50 mx-auto" src={prgicon} alt="" />{' '}
                  </div>{' '}
                  <span className="ms-2 progress-sect-name mt-1 d-flex align-items-end font-size-16 fw-medium text-blue-2">
                    Planet C
                  </span>
                </li>
                <li className="d-flex pt-2">
                  <div className="d-grid progress-side-sec">
                    <hr className="progress-side-hr-2" />
                    <img className="w-50 mx-auto" src={prgicon} alt="" />{' '}
                  </div>{' '}
                  <span className="ms-2 progress-sect-name mt-1 d-flex align-items-end font-size-16 fw-medium text-blue-2">
                    Planet D
                  </span>
                </li>
              </ul>
              <div className="text-center mt-4 pb-3">
                <img className="w-25" src={borderstar} alt="" />
                <h4 className="my-0 mt-2 font-size-18 fw-medium">
                  Galaxy Complete
                </h4>
              </div>
            </div>
            <div className=" mt-5">
              <div className="d-flex justify-content-evenly background-text-blue rounded-2 position-relative py-2">
                <img
                  className="w-25 progress-sect-rocket position-absolute"
                  src={rocket}
                  alt=""
                />
                <span className="text-white font-size-16 fw-semibold offset-3 me-3">
                  Play & Earn
                </span>
                <img src={longarrow} alt="" />
              </div>
              <div className="d-flex justify-content-evenly background-dark-pink mt-5 rounded-2 position-relative py-2">
                <img
                  className=" progress-sect-astronot position-absolute"
                  src={astronot}
                  alt=""
                />
                <span className="text-white font-size-16 fw-semibold offset-3 me-3">
                  Invite & Earn
                </span>
                <img src={longarrow} alt="" />
              </div>
            </div>
          </div>
          <div className="col-lg-9 ">
            <div className="row">
              <div className="col-lg-3 text-center">
                <img
                  className="w-50 planet-shadow-purple"
                  src={purple}
                  alt=""
                />
              </div>
              <div className="col-lg-3"></div>
              <div className="col-lg-3 text-center">
                <img
                  className="w-50 planet-shadow-yellow"
                  src={yellow}
                  alt=""
                  srcset=""
                />
              </div>
              <div className="col-lg-3"></div>
            </div>
            <div className="row position-relative">
              <img
                className="position-absolute second-screen-pathway px-0"
                src={pathway}
                alt=""
              />
              <div className="col-lg-3 text-center text-dark-blue mt-4 pt-4">
                <h4 className="mb-2">Planet A</h4>
                <p className="font-size-16 fw-normal my-0">
                  Complete the level and earn
                </p>
                <span className="fw-medium">1000 Meteors</span>
              </div>
              <div className="col-lg-3"></div>
              <div className="col-lg-3 text-center text-dark-blue mt-4 pt-4">
                <h4 className="mb-2">Planet C</h4>
                <p className="font-size-16 fw-normal my-0">
                  Little more consistency and
                </p>
                you will earn <span className="fw-medium">2080 Meteors</span>
              </div>
              <div className="col-lg-3"></div>
            </div>
            <div className="row mt-2">
              <div className="col-lg-3"></div>
              <div className="col-lg-3 text-center text-dark-blue">
                <img
                  className="w-50 planet-shadow-green"
                  src={green}
                  alt=""
                  srcset=""
                />
                <div className=" text-center text-dark-blue">
                  <h4 className="mb-2">Planet B</h4>
                  You are just <span className="fw-medium">1850 Meteors</span>
                  <p className="font-size-16 fw-normal my-0">
                    away to reach to this planet
                  </p>
                </div>
              </div>
              <div className="col-lg-3"></div>
              <div className="col-lg-3 text-center text-dark-blue">
                <img
                  className="w-50 planet-shadow-blue"
                  src={blue}
                  alt=""
                  srcset=""
                />
                <div className=" text-center text-dark-blue">
                  <h4 className="mb-2">Planet D</h4>
                  <span className="fw-medium">3080 Meteors</span>Meteors to go
                  <p className="font-size-16 fw-normal my-0">
                    and your exclusive reward awaits!!!
                  </p>
                </div>
              </div>
            </div>
            <div>
              {/* Modal */}
              {showModal && (
                <div
                  className="fade show d-block"
                  tabIndex="-1"
                  aria-labelledby="exampleModalLabel"
                  aria-hidden="true"
                >
                  <div className="modal-dialog modal-xl modal-bottom">
                    <div className="modal-content border-0">
                      <div className="modal-header border-0">
                        <button
                          type="button"
                          className="btn-close bg-light p-2 mb-2 rounded-circle"
                          onClick={handleClose}
                          aria-label="Close"
                        ></button>
                      </div>
                      <div className="modal-body position-relative background-push-notification rounded-3 d-flex justify-content-between align-items-center">
                        <div className="">
                          <img
                            className="position-absolute progress-foot-alen"
                            src={alenship}
                            alt=""
                          />
                        </div>
                        <span className="py-4 font-size-18 fw-medium text-white">
                          Push Up Notification
                        </span>
                        <button
                          type="button"
                          className="btn btn-light rounded-3 me-3 font-size-16 fw-semibold"
                        >
                          View
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SecondScreen;
