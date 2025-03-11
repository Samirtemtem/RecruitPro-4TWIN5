import React, { FormEvent } from 'react';
import AddCV from "./AddCV";
import Awards from "./Awards";
import Education from "./Education";
import Experiences from "./Experiences";
import SkillsMultiple from "./SkillsMultiple";

const ResumeForm: React.FC = () => {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("Resume form submitted");
  };

  return (
    <form className="default-form" onSubmit={handleSubmit}>
      <div className="row">
        <div className="form-group col-lg-6 col-md-12">
          <label>Upload Your CV(This will start the resume parsing process and override your current resume)</label>
          <div className="form-group col-lg-6 col-md-12">
          <AddCV />
        </div>
        </div>
        {/* <!-- Input --> */}
     
        {/* <!-- End more portfolio upload --> */}

        <div className="form-group col-lg-12 col-md-12">
          <label>Description</label>
          <textarea 
            placeholder="Spent several years working on sheep on Wall Street. Had moderate success investing in Yugo's on Wall Street. Managed a small team buying and selling Pogo sticks for farmers. Spent several years licensing licorice in West Palm Beach, FL. Developed several new methods for working it banjos in the aftermarket. Spent a weekend importing banjos in West Palm Beach, FL.In this position, the Software Engineer collaborates with Evention's Development team to continuously enhance our current software solutions as well as create new solutions to eliminate the back-office operations and management challenges present"
          ></textarea>
        </div>
        {/* <!-- About Company --> */}

        <div className="form-group col-lg-12 col-md-12">
          <Education />
          {/* <!-- Resume / Education --> */}

          <Experiences />
          {/* <!-- Resume / Work & Experience --> */}
        </div>
        {/* <!--  education and word-experiences --> */}

      
        <div className="form-group col-lg-12 col-md-12">
          {/* <!-- Resume / Awards --> */}
          <Awards />
        </div>
        {/* <!-- End Award --> */}

        <div className="form-group col-lg-6 col-md-12">
          <label>Skills </label>
          <SkillsMultiple />
        </div>
        {/* <!-- Multi Selectbox --> */}

        <div className="form-group col-lg-12 col-md-12">
          <button type="submit" className="theme-btn btn-style-one">
            Save
          </button>
        </div>
        {/* <!-- Input --> */}
      </div>
      {/* End .row */}
    </form>
  );
};

export default ResumeForm;

export {
  AddCV,
  Awards,
  Education,
  Experiences,
  SkillsMultiple,
  ResumeForm
}; 