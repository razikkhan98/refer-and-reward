import React from "react";
import navCenterImg from "../../../assets/navbar/navCenterImg.png";
const Navbar = () => {
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
            <ul className="row justify-content-between my-0 py-0 px-0">
              <li className="col-lg-2 list-unstyled h-100 text-white fw-medium mt-4 pt-3 ps-5 text-decoration-underline text-underline-offset-6">
                Home
              </li>
              <li className="col-lg-2 list-unstyled h-100 text-white fw-medium mt-4 pt-3 text-center">
                My Rewards
              </li>
              <li className="col-lg-3 list-unstyled text-center">
                <img className="header-center-img h-75" src={navCenterImg} alt="" />
              </li>
              <li className="col-lg-2 list-unstyled h-100 text-white fw-medium mt-4 pt-3 text-center">
                My Referrals
              </li>
              <li className="col-lg-2 list-unstyled h-100 text-white fw-medium mt-4 pt-3 pe-5 text-end">
                Profile
              </li>
            </ul>
            </div>
          </div>
        </div>
      </nav>
    </section>
  );
};

export default Navbar;

