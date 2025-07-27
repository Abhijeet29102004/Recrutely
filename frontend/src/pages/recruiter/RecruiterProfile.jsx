import React, { useState } from "react";
import "./recruiterProfile.css";
import { FaCamera } from "react-icons/fa";

const RecruiterProfile = () => {
  const [skills, setSkills] = useState([]);
  const [skillInput, setSkillInput] = useState("");
  const [companyLogo, setCompanyLogo] = useState(null);

  const handleAddSkill = () => {
    if (skillInput.trim() !== "") {
      setSkills([...skills, skillInput.trim()]);
      setSkillInput("");
    }
  };

  const handleRemoveSkill = (index) => {
    const newSkills = [...skills];
    newSkills.splice(index, 1);
    setSkills(newSkills);
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    setCompanyLogo(URL.createObjectURL(file));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Save form data logic
    alert("Profile submitted!");
  };

  const handleReset = () => {
    setSkills([]);
    setSkillInput("");
    setCompanyLogo(null);
    document.getElementById("recruiter-form").reset();
  };

  return (
    <div className="recruiter-profile-container">
      <h2>Recruiter Profile</h2>
      <form onSubmit={handleSubmit} id="recruiter-form">
        {/* Upload Company Logo */}

        <div className="profile-photo-section">
          <p>Company Logo</p>
          <div className="profile-photo-box">
            {companyLogo ? (
              <img
                src={companyLogo}
                alt="Company Logo"
                className="profile-preview-img"
              />
            ) : (
              <div className="photo-placeholder">
                <FaCamera className="camera-icon"/>
              </div>
            )}

            <input
              type="file"
              id="logo-upload"
              className="file-input"
              accept=".png,.jpg,.jpeg"
              style={{ display: "none" }}
              onChange={(e) => {
                const file = e.target.files[0];
                setCompanyLogo(URL.createObjectURL(file));
              }}
            />
            <label htmlFor="logo-upload" className="upload-photo-btn">
              📤 Upload Logo
            </label>
            <p className="recommend">Recommended 300x300 px</p>
          </div>
        </div>

        {/* Personal Info */}
        <div className="form-grid">
          <div className="form-group">
            <label>Full Name</label>
            <input type="text" placeholder="e.g. John Doe" required />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input type="email" placeholder="e.g. john@company.com" required />
          </div>
          <div className="form-group">
            <label>Company Name</label>
            <input type="text" placeholder="e.g. ABC Corp" required />
          </div>
          <div className="form-group">
            <label>Company Industry Type</label>
            <input
              type="text"
              placeholder="e.g. Technology Finance etc."
              required
            />
          </div>
          <div className="form-group">
            <label>Company Size</label>
            <input type="text" placeholder="e.g. 10000-20000" required />
          </div>
          <div className="form-group">
            <label>Company Location</label>
            <input type="text" placeholder="e.g. Delhi" required />
          </div>
          <div className="form-group">
            <label>Work Mode</label>
            <input type="text" placeholder="e.g. Remote" required />
          </div>
          <div className="form-group">
            <label>Company Website Link</label>
            <input type="text" placeholder="e.g. www.google.com" required />
          </div>
          <div className="form-group">
            <label>Designation</label>
            <input type="text" placeholder="e.g. Talent Acquisition Head" />
          </div>
        </div>

        {/* Skills */}
        <div className="form-group">
          <label>Skills</label>
          <div className="skills-input">
            <input
              type="text"
              placeholder="Enter a skill and press Add"
              value={skillInput}
              onChange={(e) => setSkillInput(e.target.value)}
              onKeyDown={(e) =>
                e.key === "Enter" && (e.preventDefault(), handleAddSkill())
              }
            />
            <button type="button" className="add-btn" onClick={handleAddSkill}>
              Add
            </button>
          </div>
          <div className="skills-list">
            {skills.map((skill, idx) => (
              <span className="skill-pill" key={idx}>
                {skill}
                <button type="button" onClick={() => handleRemoveSkill(idx)}>
                  ×
                </button>
              </span>
            ))}
          </div>
        </div>

        {/* Company Description */}
        <div className="form-group">
          <label>Company Description</label>
          <textarea
            placeholder="Describe your company, mission, values, etc."
            rows="4"
          />
        </div>

        {/* Buttons */}
        <div className="form-buttons">
          <button type="button" onClick={handleReset} className="reset-btn">
            Reset
          </button>
          <button type="submit" className="submit-btn">
            Save Profile
          </button>
        </div>
      </form>
    </div>
  );
};

export default RecruiterProfile;
