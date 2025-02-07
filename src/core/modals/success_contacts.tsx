import { DatePicker } from 'antd';
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import CommonSelect from '../common/commonSelect';
import CommonTagsInput from '../common/Taginput';
import { status } from '../common/selectoption/selectoption';
import { all_routes } from '../../feature-module/router/all_routes';
import ImageWithBasePath from '../common/imageWithBasePath';

const SuccesContacts = () => {
  const currency = [
    { value: "Dollar", label: "Dollar" },
    { value: "Euro", label: "Euro" },
  ];

  const source = [
    { value: "Phone Calls", label: "Phone Calls" },
    { value: "Social Media", label: "Social Media" },
    { value: "Refferal Sites", label: "Refferal Sites" },
    { value: "Web Analytics", label: "Web Analytics" },
    { value: "Previous Purchase", label: "Previous Purchase" },
  ];

  const company = [
    { value: "BrightWave Innovations", label: "BrightWave Innovations" },
    { value: "Stellar Dynamics", label: "Stellar Dynamics" },
    { value: "Quantum Nexus", label: "Quantum Nexus" },
  ]
  const phoneNumber = [
    { value: "Work", label: "Work" },
    { value: "Home", label: "Home" },
  ]
  const email = [
    { value: "Work", label: "Work" },
    { value: "Home", label: "Home" },
  ]
  const industry = [
    { value: "Rentail Industry", label: "Rentail Industry" },
    { value: "Banking", label: "Banking" },
    { value: "Hotels", label: "Hotels" },
  ]
  const owner = [
    { value: "Darlee Robertson", label: "Darlee Robertson" },
    { value: "Sharon Roy", label: "Sharon Roy" },
    { value: "Vaughan Lewis", label: "Vaughan Lewis" },
  ]
  const [tags4, setTags4] = useState<string[]>(["Collab"]);
  return (
    <>
      {/* Success Contact */}
      <div className="modal fade" id="success_compay">
        <div className="modal-dialog modal-dialog-centered modal-md">
          <div className="modal-content">
            <div className="modal-body pb-0">
              <div className="p-4">
                <div className="row">
                  <div className="col-md-12">
                    <div className="d-flex flex-column align-items-center justify-content-center mb-3">
                      <ImageWithBasePath
                        src="assets/img/reports-img/check-icon.svg"
                        alt="icon"
                        className="mb-3"
                      />
                      <h5>Company Added Successfully</h5>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="mb-3">
                      <Link
                        to="companies-crm.html"
                        className="btn btn-dark d-flex justify-content-center "
                      >
                        Back to List
                      </Link>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="mb-3">
                      <Link
                        to={all_routes.companiesDetails}
                        className="btn btn-primary bg-primary-gradient d-flex justify-content-center "
                      >
                        Detail Page
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* /Success Contact */}
    </>

  )
}

export default SuccesContacts
