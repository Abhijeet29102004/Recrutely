import React, { useState, useEffect } from "react";
import axios from "axios";
import "./ApplyModal.css";

function ApplyModal({ onClose, jobTitle, jobId }) {
  // const [selectedFile, setSelectedFile] = useState(null);
  const [savedResumes, setSavedResumes] = useState([]);
  const [selectedResumeUrl, setSelectedResumeUrl] = useState(null);
  const [personalMessage, setPersonalMessage] = useState("");

  const user = JSON.parse(localStorage.getItem("user"));
  const userId = user?.id;

  useEffect(() => {
    axios
      .get(`http://localhost:5050/api/profile/resumes/${userId}`)
      .then((res) => setSavedResumes(res.data))
      .catch((err) => console.error("Failed to fetch resumes", err));
  }, [userId]);

// This function uploads files to Cloudinary
const handleFileUpload = async (file, type) => {
  const formData = new FormData();
  formData.append("file", file);

  const endpoint = type === "photo" ? "photo" : "resume";

  try {
    const res = await fetch(`http://localhost:5050/api/upload/${endpoint}`, {
      method: "POST",
      body: formData,
    });

    const data = await res.json();
    return data.url; // Cloudinary file URL
  } catch (error) {
    console.error(`${type} Upload Error:`, error);
    return null;
  }
};

const handleResumeInputChange = async (e) => {
  const file = e.target.files[0];
  if (!file) return;

  
  const uploadedUrl = await handleFileUpload(file, "resume");

  if (uploadedUrl) {
    setSelectedResumeUrl(uploadedUrl);
    console.log("✅ Resume uploaded:", uploadedUrl);
  } else {
    alert("❌ Failed to upload resume.");
  }
};


  const handleSubmit = async () => {
    if (!selectedResumeUrl) {
      alert("Please upload or select a resume");
      return;
    }

    try {
      const res = await axios.post("http://localhost:5050/api/applications", {
        userId,
        jobId,
        resumeUrl: selectedResumeUrl,
        personalMessage,
      });

      alert("✅ Application submitted!");
      onClose(); // close modal
    } catch (err) {
      console.error("Application failed", err);
      alert("❌ Could not apply");
    }
  };

  return (
    <div className="overlay">
      <div className="popup">
        <h2 className="popup-title">Apply For {jobTitle}</h2>

        {/* Upload Resume */}
        <div className="upload-section">
          <p className="label">Upload Resume</p>
          <div className="upload-box">
            <div className="upload-icon">📄</div>
            <p>
              Drag and drop your resume
              <br />
              or click to browse
            </p>
            <input
              type="file"
              id="resume-upload"
              className="file-input"
              accept=".pdf,.doc,.docx"
              onChange={handleResumeInputChange}
            />
            
            <button htmlFor="resume-upload" className="upload-button">
              Upload Resume
            </button>
            <p className="upload-note">PDF, DOCX (Max 5MB)</p>
          </div>
        </div>

        {/* Divider */}
        <div className="divider">
          <hr />
          <span>OR</span>
          <hr />
        </div>

        {/* Saved Resumes */}
        <div className="saved-resumes">
          <p className="label">Select from saved resumes</p>

          {savedResumes.map((resume) => (
            <div
              key={resume.id}
              className={`resume-item ${
                selectedResumeUrl === resume.resume_url ? "selected" : ""
              }`}
              onClick={() => setSelectedResumeUrl(resume.resume_url)}
            >
              <div className="resume-info">
                <span className="pdf-icon">📄</span>
                <div>
                  <p className="resume-name">
                    {decodeURIComponent(resume.resume_url.split("/").pop())
                      .replace(/\.pdf$/, "")
                      .replace(/[_-]/g, " ")
                      .split(" ")
                      .slice(0, 4)
                      .join(" ") + ".pdf"}
                  </p>
                  <p className="resume-meta">
                    Uploaded on{" "}
                    {new Date(resume.uploaded_at).toLocaleDateString()}
                  </p>
                </div>
              </div>
              <div className="resume-actions">
                <a
                  href={resume.resume_url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  🔍
                </a>
                <a href={resume.resume_url} download>
                  ⬇️
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Optional Message */}
        <div className="message-box">
          <p className="label">Personal Message (Optional)</p>
          <textarea
            placeholder="Write a brief message to employer..."
            value={personalMessage}
            onChange={(e) => setPersonalMessage(e.target.value)}
          />
        </div>

        {/* Buttons */}
        <div className="popup-actions">
          <button className="cancel" onClick={onClose}>
            Cancel
          </button>
          <button className="submit-job" onClick={handleSubmit}>
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}

export default ApplyModal;
