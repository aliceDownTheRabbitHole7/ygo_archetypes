import React from "react";
import RedEyesData from "../data/RedEyesData";
import * as FaIcons from "react-icons/fa6";

const RedEyes = ({
  openModal,
  slideNumber,
  setSlideNumber,
  handleMagnify,
  handleClose,
}) => {
  const handleNext = () => {
    slideNumber + 1 === RedEyesData.length
      ? setSlideNumber(0)
      : setSlideNumber(slideNumber + 1);
  };

  const handlePrev = () => {
    slideNumber === 0
      ? setSlideNumber(RedEyesData.length - 1)
      : setSlideNumber(slideNumber - 1);
  };

  const RedEyesMap = RedEyesData.map((card, i) => {
    return (
      <img onClick={() => handleMagnify(i)} src={card.image} key={i} className="card-img" />
    );
  });

  return (
    <div className="archetype-container">
      {openModal && (
        <div className="slider-wrap">
          <FaIcons.FaCircleChevronLeft onClick={handlePrev} className="left-btn" />
          <FaIcons.FaCircleXmark onClick={handleClose} className="exit-btn" />
          <FaIcons.FaCircleChevronRight onClick={handleNext} className="right-btn" />
          <div className="full-screen">
            <img src={RedEyesData[slideNumber].image} className="full-image" />
          </div>
        </div>
      )}
      <div className="gallery-wrap">
        <p className="page-header">Red-Eyes Archetype</p>
        <div className="map-container">{RedEyesMap}</div>
      </div>
    </div>
  );
};

export default RedEyes;
