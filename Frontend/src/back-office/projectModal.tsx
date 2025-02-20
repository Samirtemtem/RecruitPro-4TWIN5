import React, { useState } from "react";
import { Link ,useNavigate  } from "react-router-dom";

const ProjectModals = () => {


  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    address: "",
    phoneNumber: "",
    role: "Select",
    department: "Select",
    privilege: "Select",
    image: null as File | null, // Explicitly define the type as File or null
  });
  

  const clientChoose = [
    { value: "Select", label: "Select" },
    { value: "HR-MANAGER", label: "HR-MANAGER" },
    { value: "DEPARTMENT-MANAGER", label: "DEPARTMENT-MANAGER" },
    { value: "EMPLOYEE", label: "EMPLOYEE" },
  ];
  const departmentChoose = [
    { value: "Select", label: "Select" },
    { value: "ELECTROMECANIQUE", label: "ELECTROMECANIQUE" },
    { value: "GENIE-CIVIL", label: "GENIE-CIVIL" },
    { value: "TIC", label: "TIC" },
  ];

  const privilegeChoose = [
    { value: "Select", label: "Select" },
    { value: "JOB-POSTING", label: "JOB-POSTING" },
    { value: "REGULAR", label: "REGULAR" },
  ];

  // Handle form input changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle file input change for the image
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files ? e.target.files[0] : null;
    if (file) {
      setFormData({
        ...formData,
        image: file, // Store the file in the state
      });
    }
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Form validation (example)
    if (formData.firstName && formData.lastName && formData.email && formData.password) {
      const formDataToSend = new FormData();
      formDataToSend.append("firstName", formData.firstName);
      formDataToSend.append("lastName", formData.lastName);
      formDataToSend.append("email", formData.email);
      formDataToSend.append("password", formData.password);
      formDataToSend.append("address", formData.address);
      formDataToSend.append("phoneNumber", formData.phoneNumber);
      formDataToSend.append("role", formData.role);
      formDataToSend.append("department", formData.department);
      formDataToSend.append("privilege", formData.privilege);
      
      if (formData.image) {
        formDataToSend.append("image", formData.image);
      }

      try {
        const response = await fetch("http://localhost:5000/api/user/users", {
          method: "POST",
          headers: {
            "Accept": "application/json",
          },
          body: formDataToSend,
        });

        if (!response.ok) {
          const errorText = await response.text();
          console.error("Error response:", errorText);
          throw new Error("Error in request");
        }

        const data = await response.json();
        console.log("Response data:", data);

        // Success handling: reset form or close modal
        alert("Employee added successfully");
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          password: "",
          address: "",
          phoneNumber: "",
          role: "Select",
          department: "Select",
          privilege: "Select",
          image: null, // Reset image field
        });
        
        // Close modal if it's open
        const modal = document.getElementById("add_project");
        
        if (modal) {
          // Close modal logic here
        }
      } catch (error) {
        console.error("Error:", error);
        alert("An error occurred while adding the employee.");
      }
    } else {
      alert("Please fill in all required fields.");
    }
  };

  return (
    <>
      {/* Add Project */}
      <div className="modal fade" id="add_project" role="dialog">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header header-border align-items-center justify-content-between">
              <div className="d-flex align-items-center">
                <h5 className="modal-title me-2">Add Employee</h5>
              </div>
              <button
                type="button"
                className="btn-close custom-btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                <i className="ti ti-x" />
              </button>
            </div>
            <div className="add-info-fieldset">
              <div className="add-details-wizard p-3 pb-0">
                <ul className="progress-bar-wizard d-flex align-items-center border-bottom">
                  <li className="p-2 pt-0">
                    <h6 className="fw-medium">Informations</h6>
                  </li>
                </ul>
              </div>

              <fieldset id="first-field-file">
                <form onSubmit={handleSubmit}>
                  <div className="modal-body">
                    <div className="row">
                      <div className="col-md-12">
                        <div className="d-flex align-items-center flex-wrap row-gap-3 bg-light w-100 rounded p-3 mb-4">
                          <div className="d-flex align-items-center justify-content-center avatar avatar-xxl rounded-circle border border-dashed me-2 flex-shrink-0 text-dark frames">
                            {formData.image ? (
                              <img
                                src={URL.createObjectURL(formData.image)}
                                alt="Preview"
                                className="img-fluid rounded-circle"
                                width="100"
                                height="100"
                              />
                            ) : (
                              <i className="ti ti-photo text-gray-2 fs-16" />
                            )}
                          </div>
                          <div className="profile-upload">
                            <div className="mb-2">
                              <h6 className="mb-1">Upload Photo</h6>
                              <p className="fs-12">Image should be below 4 mb</p>
                            </div>
                            <div className="profile-uploader d-flex align-items-center">
                              <div className="drag-upload-btn btn btn-sm btn-primary me-2">
                                Upload
                                <input
                                  type="file"
                                  className="form-control image-sign"
                                  accept="image/*"
                                  onChange={handleFileChange}
                                />
                              </div>
                              <Link
                                to="#"
                                className="btn btn-light btn-sm"
                                onClick={() => setFormData({ ...formData, image: null })}
                              >
                                Cancel
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Other form fields... */}

                      <div className="col-md-6">
                        <div className="mb-3">
                          <label className="form-label">First Name</label>
                          <input
                            type="text"
                            className="form-control"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleInputChange}
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="mb-3">
                          <label className="form-label">Last Name</label>
                          <input
                            type="text"
                            className="form-control"
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleInputChange}
                          />
                        </div>
                      </div>

                      <div className="col-md-6">
                        <div className="mb-3">
                          <label className="form-label">Email</label>
                          <input
                            type="email"
                            className="form-control"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="mb-3">
                          <label className="form-label">Password</label>
                          <input
                            type="password"
                            className="form-control"
                            name="password"
                            value={formData.password}
                            onChange={handleInputChange}
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="mb-3">
                          <label className="form-label">Address</label>
                          <input
                            type="text"
                            className="form-control"
                            name="address"
                            value={formData.address}
                            onChange={handleInputChange}
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="mb-3">
                          <label className="form-label">Phone Number</label>
                          <input
                            type="tel"
                            className="form-control"
                            name="phoneNumber"
                            value={formData.phoneNumber}
                            onChange={handleInputChange}
                          />
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="mb-3">
                          <label className="form-label">Role</label>
                          <select
                            className="form-select"
                            name="role"
                            value={formData.role}
                            onChange={handleInputChange}
                          >
                            {clientChoose.map((option, index) => (
                              <option key={index} value={option.value}>
                                {option.label}
                              </option>
                            ))}
                          </select>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="mb-3">
                          <label className="form-label">Department</label>
                          <select
                            className="form-select"
                            name="department"
                            value={formData.department}
                            onChange={handleInputChange}
                          >
                            {departmentChoose.map((option, index) => (
                              <option key={index} value={option.value}>
                                {option.label}
                              </option>
                            ))}
                          </select>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="mb-3">
                          <label className="form-label">Privilege</label>
                          <select
                            className="form-select"
                            name="privilege"
                            value={formData.privilege}
                            onChange={handleInputChange}
                          >
                            {privilegeChoose.map((option, index) => (
                              <option key={index} value={option.value}>
                                {option.label}
                              </option>
                            ))}
                          </select>
                        </div>
                      </div>
                    </div>

                    </div>
                 
                  <div className="modal-footer">
                    <div className="d-flex align-items-center justify-content-end">
                      <Link
                        type="button"
                        to="#"
                        className="btn btn-outline-light border me-2"
                        data-bs-dismiss="modal"
                      >
                        Cancel
                      </Link>
                      <button
                        type="submit"
                        className="btn btn-primary wizard-next-btn"
                      >
                        Add Employee
                      </button>
                    </div>
                  </div>
                </form>
              </fieldset>
            </div>
          </div>
        </div>
      </div>
      {/* /Add Project */}
    </>
  );
};

export default ProjectModals;
