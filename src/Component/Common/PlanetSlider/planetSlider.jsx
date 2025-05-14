import React, { useState } from 'react';

// images
import centerPlanet1 from '../../../assets/HomePlanets/purple.svg';
import centerPlanet2 from '../../../assets/HomePlanets/yellow.svg';
import centerPlanet3 from '../../../assets/HomePlanets/green.svg';
import centerPlanet4 from '../../../assets/HomePlanets/blue.svg';
import planetRing from '../../../assets/HomePlanets/rings.svg';

// image json
const images = [centerPlanet1, centerPlanet2, centerPlanet3, centerPlanet4];

function PlanetSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [rotation, setRotation] = useState(0);
  const [ringRotation, setRingRotation] = useState(0); // new state for ring rotation
  const [direction, setDirection] = useState('');

  //  const [setCurrentPlanet] = useContext(UserContext)

  const rotate = (dir) => {
    setDirection(dir);
    // Update planet rotation
    setRotation((prev) => (dir === 'right' ? prev + 50 : prev - 50));
    // Update ring rotation to match direction
    setRingRotation((prev) => (dir === 'right' ? prev + 50 : prev - 50));

    setTimeout(() => {
      setCurrentIndex((prevIndex) =>
        dir === 'right'
          ? (prevIndex + 1) % images.length
          : (prevIndex - 1 + images.length) % images.length,
      );
    }, 200); // Wait until halfway through rotation to switch image
  };

  // Calculate previous and next images
  const prevIndex = (currentIndex - 1 + images.length) % images.length;
  const nextIndex = (currentIndex + 1) % images.length;

  return (
    <div className="text-center solar-sys mt-5 pt-5">
      <div className="row align-items-center mt-5">
        {/* Planet ring with rotation */}
        <div className="d-flex justify-content-center">
          <img
            className="bg-planet-ring position-absolute"
            src={planetRing}
            alt="planets-planetRing"
            style={{
              transform: `rotate(${ringRotation}deg)`,
              transition: 'transform 0.2s linear',
            }}
          />
        </div>
        <div className="col text-start">
          {/* Left arrow */}
          <img
            className={`navitag-left planet-shadow-${prevIndex == 0 ? 'purple' : prevIndex == 1 ? 'yellow' : prevIndex == 2 ? 'green' : 'blue'}`}
            onClick={() => rotate('left')}
            src={images[prevIndex]}
            alt="planets-images"
          />
          <span className="navi-plnt-left space-grotesk-medium">
            Planet{' '}
            {`${prevIndex == 0 ? 'A' : prevIndex == 1 ? 'B' : prevIndex == 2 ? 'C' : 'D'}`}
          </span>
        </div>
        <div className="col-6">
          {/* Main rotating planet */}
          <div
            className={`image-container d-flex justify-content-center align-items-center ${direction}`}
            style={{
              transform: `rotate(${rotation}deg)`,
              transition: 'transform 0.2s linear',
            }}
          >
            <img
              src={images[currentIndex]}
              alt="rotating"
              className={`img-fluid rounded-circle planet-shadow-${currentIndex == 0 ? 'purple' : currentIndex == 1 ? 'yellow' : currentIndex == 2 ? 'green' : 'blue'}`}
            />
          </div>
        </div>
        <div className="col text-end">
          {/* Right arrow */}
          <img
            className={`navitag-right planet-shadow-${nextIndex == 0 ? 'purple' : nextIndex == 1 ? 'yellow' : nextIndex == 2 ? 'green' : 'blue'}`}
            onClick={() => rotate('right')}
            src={images[nextIndex]}
            alt="planets-images"
          />
          <span className="navi-plnt-right space-grotesk-medium">
            Planet{' '}
            {`${nextIndex == 0 ? 'A' : nextIndex == 1 ? 'B' : nextIndex == 2 ? 'C' : 'D'}`}
          </span>
        </div>
      </div>
    </div>
  );
}

export default PlanetSlider;
