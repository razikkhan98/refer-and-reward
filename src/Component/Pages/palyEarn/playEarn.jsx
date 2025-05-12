import React from 'react';

const PlayEarn = () => {
  return (
    <section className="pay-earn-section " id="">
      <div className="pay-earn-content">
        <div className="container h-100 d-flex align-items-end pb-5">
          <div className="row justify-content-between mb-5 p-4 rounded-4">
            <div className="col-lg-2 text-center ms-3 my-3">
              <h4 className='mt-4 pt-1 mb-2 font-size-28 fw-bold text-uppercase text-dark-blue'>Play & Win</h4>
              <p className='font-size-18 fw-semibold text-dark-blue'>Enter the Game Zone and get chance to earn more points!!</p>
            </div>
            <div className="col-lg-3 hover-card pb-1 bg-light text-center rounded-4 my-3">
              <h3 className='mt-4 pt-1 mb-2 text-uppercase font-size-24 fw-bold text-dark-blue'>Spin The Wheel</h3>
              <p className='font-size-16 fw-medium text-blue'>
                Spin and win bonus points, perks, and exclusive rewards. Give it
                a go now!
              </p>
              <button className='btn background-text-blue text-white font-size-16 rounded-5 mb-4 px-4'>Play Now</button>
            </div>
            <div className="col-lg-3 hover-card pb-1 bg-light text-center rounded-4 my-3">
              <h3 className='mt-4 pt-1 mb-2 text-uppercase font-size-24 fw-bold text-dark-blue'>Spin The Wheel</h3>
              <p className='font-size-16 fw-medium text-blue'>
                Spin and win bonus points, perks, and exclusive rewards. Give it
                a go now!
              </p>
              <button className='btn background-text-blue text-white font-size-16 rounded-5 mb-4 px-4'>Play Now</button>
            </div>
            <div className="col-lg-3 hover-card pb-1 bg-light text-center rounded-4 me-3 my-3">
              <h3 className='mt-4 pt-1 mb-2 text-uppercase font-size-24 fw-bold text-dark-blue'>Spin The Wheel</h3>
              <p className='font-size-16 fw-medium text-blue'>
                Spin and win bonus points, perks, and exclusive rewards. Give it
                a go now!
              </p>
              <button className='btn background-text-blue text-white font-size-16 rounded-5 mb-4 px-4'>Play Now</button>
            </div>{' '}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlayEarn;
