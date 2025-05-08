import React from 'react'
// import images
import metero from '../../../assets/secondScreen/metero.svg'
import star from '../../../assets/secondScreen/star.svg'


const SecondScreen = () => {
  return (
    <section className='second-screen-section' id=''>
        <div className="container">
            <div className="row justify-content-between ">
              <div className="col-lg-3">
              back
              </div>
              <div className="col-lg-4">
                  <div className="till-ship">
                    <img src="" alt="" />
                    <div>
                      <span>300
                      <img src={metero} alt="" />
                      Meteors</span>
                      <span>
                        1 
                        <img src={star} alt="" />
                        star
                      </span>
                    </div>
                  </div>
              </div>
            </div>
        </div>
    </section>
  )
}

export default SecondScreen