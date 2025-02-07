import React, { useState } from "react";

import Slider from "rc-slider";
import "rc-slider/assets/index.css";

const RangeSlides = () => {
  const [sliderValue, setSliderValue] = useState(0);

  const handleChange = (value:any) => {
    setSliderValue(value);
  };
  const [sliderValueDefault, setSliderValueDefault] = useState(0);

  const handleChangeDefault = (value:any) => {
    setSliderValueDefault(value);
  };
  const [sliderValues, setSliderValues] = useState([200, 800]);

  const handleSliderChange = (values:any) => {
    setSliderValues(values);
  };

  const [sliderValuesRange, setSliderValuesRange] = useState([-500, 500]);

  const handleSliderChangeRange = (values:any) => {
    setSliderValuesRange(values);
  };
  const [sliderValuesStep, setSliderValuesStep] = useState([-500, 500]);

  const handleSliderChangeStep = (values:any) => {
    setSliderValuesStep(values);
  };

  const [sliderValueCustomValue, setSliderValueCustomValue] = useState([0, 5]);

  const handleSliderChangeCustomValue = (values:any) => {
    setSliderValueCustomValue(values);
  };
  const [sliderValueModernSkin, setSliderValueModernSkin] = useState(30);

  const handleSliderChangeModernSkin = (value:any) => {
    setSliderValueModernSkin(value);
  };
  const [sliderValueSharpeSkin] = useState(30);

  const handleSliderChangeSharpeSkin = (value:any) => {
    setSliderValue(value);
  };
  const [sliderValueRoundSkin, setSliderValueRoundSkin] = useState(30);

  const handleSliderChangeRoundSkin = (value:any) => {
    setSliderValueRoundSkin(value);
  };
  const [sliderValueSquareSkin, setSliderValueSquareSkin] = useState(30);

  const handleSliderChangeSquareSkin = (value:any) => {
    setSliderValueSquareSkin(value);
  };

  return (
    <>
      {/* Page Wrapper */}
      <div className="page-wrapper">
        <div className="content container-fluid">
          {/* Page Header */}
          <div className="page-header">
            <div className="row align-items-center">
              <div className="col">
                <h3 className="page-title">Range Slider</h3>
                {/* <ul className="breadcrumb">
                    <li className="breadcrumb-item">
                      <Link to="/admindashboard">Dashboard</Link>
                    </li>
                    <li className="breadcrumb-item active">Components</li>
                  </ul> */}
              </div>
            </div>
          </div>
          {/* /Page Header */}
          <div className="row">
            {/* Rangeslider */}
            <div className="col-md-6">
              <div className="card">
                <div className="card-header">
                  <h5 className="card-title">Default</h5>
                </div>
                <div className="card-body">
                  <Slider
                    min={0}
                    max={100}
                    value={sliderValueDefault}
                    defaultValue={[0, 50]}
                    onChange={handleChangeDefault}
                  />
                  {sliderValueDefault}
                </div>
              </div>
            </div>
            {/* /Rangeslider */}
            {/* Rangeslider */}
            <div className="col-md-6">
              <div className="card">
                <div className="card-header">
                  <h5 className="card-title">Min-Max</h5>
                </div>
                <div className="card-body">
                  <Slider
                    min={0}
                    max={1000}
                    defaultValue={550}
                    value={sliderValue}
                    onChange={handleChange}
                  />
                  {sliderValue}
                </div>
              </div>
            </div>
            {/* /Rangeslider */}
            {/* Rangeslider */}
            <div className="col-md-6">
              <div className="card">
                <div className="card-header">
                  <h5 className="card-title">Prefix</h5>
                </div>
                <div className="card-body">
                  <Slider
                    min={0}
                    max={1000}
                    step={2}
                    value={sliderValues}
                    onChange={handleSliderChange}
                    range
                  />
                  ${sliderValues[0]} ${sliderValues[1]}
                </div>
              </div>
            </div>
            {/* /Rangeslider */}
            {/* Rangeslider */}
            <div className="col-md-6">
              <div className="card">
                <div className="card-header">
                  <h5 className="card-title">Range</h5>
                </div>
                <div className="card-body">
                  <Slider
                    min={-1000}
                    max={1000}
                    step={2}
                    value={sliderValuesRange}
                    onChange={handleSliderChangeRange}
                    range
                    // marks={{ 1000: '-1000', 0: '0', 1000: '1000' }}
                    dots
                  />
                  {sliderValuesRange[0]} To: {sliderValuesRange[1]}
                </div>
              </div>
            </div>
            {/* /Rangeslider */}
            {/* Rangeslider */}
            <div className="col-md-6">
              <div className="card">
                <div className="card-header">
                  <h5 className="card-title">Step</h5>
                </div>
                <div className="card-body">
                  <Slider
                    min={-1000}
                    max={1000}
                    step={1}
                    value={sliderValuesStep}
                    onChange={handleSliderChangeStep}
                    range
                    // marks={{ 1000: '-1000', 0: '0', 1000: '1000' }}
                    dots
                  />
                  {sliderValuesStep[0]} To: {sliderValuesStep[1]}
                </div>
              </div>
            </div>
            {/* /Rangeslider */}
            {/* Rangeslider */}
            <div className="col-md-6">
              <div className="card">
                <div className="card-header">
                  <h5 className="card-title">Custom Values</h5>
                </div>
                <div className="card-body">
                  <Slider
                    min={0}
                    max={5} // Ensure that the range matches the number of items in your monthLabels array
                    step={1}
                    value={sliderValueCustomValue}
                    onChange={handleSliderChangeCustomValue}
                    range
                    marks={{
                      0: "Jan",
                      1: "Feb",
                      2: "Mar",
                      3: "Apr",
                      4: "May",
                      5: "June",
                    }}
                    dots
                  />
                </div>
              </div>
            </div>
            {/* /Rangeslider */}
            {/* Rangeslider */}
            <div className="col-md-6">
              <div className="card">
                <div className="card-header">
                  <h5 className="card-title">Modern skin</h5>
                </div>
                <div className="card-body">
                  <Slider
                    min={10}
                    max={100}
                    value={sliderValueModernSkin}
                    onChange={handleSliderChangeModernSkin}
                  />
                  {sliderValueModernSkin}
                </div>
              </div>
            </div>
            {/* /Rangeslider */}
            {/* Rangeslider */}
            <div className="col-md-6">
              <div className="card">
                <div className="card-header">
                  <h5 className="card-title">Sharp Skin</h5>
                </div>
                <div className="card-body">
                  <Slider
                    min={10}
                    max={100}
                    value={sliderValueSharpeSkin}
                    onChange={handleSliderChangeSharpeSkin}
                    className="custom-slider" // Apply your custom styles
                  />
                  {sliderValueSharpeSkin}
                </div>
              </div>
            </div>
            {/* /Rangeslider */}
            {/* Rangeslider */}
            <div className="col-md-6">
              <div className="card">
                <div className="card-header">
                  <h5 className="card-title">Round skin</h5>
                </div>
                <div className="card-body">
                  <Slider
                    min={10}
                    max={100}
                    value={sliderValueRoundSkin}
                    onChange={handleSliderChangeRoundSkin}
                    className="custom-slider" // Apply your custom styles
                  />
                  {sliderValueRoundSkin}
                </div>
              </div>
            </div>
            {/* /Rangeslider */}
            {/* Rangeslider */}
            <div className="col-md-6">
              <div className="card">
                <div className="card-header">
                  <h5 className="card-title">Square Skin</h5>
                </div>
                <div className="card-body">
                  <Slider
                    min={10}
                    max={100}
                    value={sliderValueSquareSkin}
                    onChange={handleSliderChangeSquareSkin}
                    className="custom-slider" // Apply your custom styles
                  />
                  {sliderValueSquareSkin}
                </div>
              </div>
            </div>
            {/* /Rangeslider */}
          </div>
        </div>
      </div>
      {/* /Main Wrapper */}
    </>
  );
};

export default RangeSlides;
