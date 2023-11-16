import React from 'react'
import AncientGearData from '../data/AncientGearData'
import * as FaIcons from "react-icons/fa6";


const AncientGear = ({ openModal, slideNumber, setSlideNumber, handleMagnify, handleClose }) => {
    
  const handleNext = () => {
    slideNumber + 1 === AncientGearData.length
      ? setSlideNumber(0)
      : setSlideNumber(slideNumber + 1);
  };

  const handlePrev = () => {
    slideNumber === 0
      ? setSlideNumber(AncientGearData.length - 1)
      : setSlideNumber(slideNumber - 1);
  };
  
  const AncientGearMap = AncientGearData.map((card, i) => {
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
            <img src={AncientGearData[slideNumber].image} className="full-image" />
          </div>
        </div>
      )}
      <div className="gallery-wrap">
        <p className="page-header">Ancient Gear Archetype</p>
        <div className="map-container">{AncientGearMap}</div>
      </div>
    </div>
  )
}

export default AncientGear
