import React, { useState, useEffect } from "react";
import "./ExperienceModal.css"; // reuse styles from ExperienceModal if applicable

const EducationModal = ({ onClose, onSave, initialData }) => {
  const [formData, setFormData] = useState({
    degree: "",
    institution: "",
    startDate: "",
    endDate: "",
    description: "",
  });

  useEffect(() => {
    if (initialData) {
      setFormData({
        degree: initialData.degree || "",
        institution: initialData.institution || "",
        startDate: initialData.start_date || initialData.startDate || "",
        endDate: initialData.end_date || initialData.endDate || "",
        description: initialData.description || "",
      });
    }
  }, [initialData]);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = () => {
    const { degree, institution, startDate, endDate, description } = formData;
    if (degree && institution) {
      onSave({
        degree,
        institution,
        description,
        start_date: startDate,
        end_date: endDate,
      });
      onClose();
    }
  };

  return (
    <div className="modal-overlay">
      <div className="modal-box">
        <h3>{initialData ? "Edit" : "Add"} Education</h3>
        <input
          name="degree"
          placeholder="Degree"
          value={formData.degree}
          onChange={handleChange}
        />
        <input
          name="institution"
          placeholder="Institution"
          value={formData.institution}
          onChange={handleChange}
        />
        <div className="date-inputs">
          <input
            name="startDate"
            placeholder="start"
            type="date"
            value={formData.startDate}
            onChange={handleChange}
          />
          <span>to</span>
          <input
            name="endDate"
            placeholder="end"
            type="date"
            value={formData.endDate}
            onChange={handleChange}
          />
        </div>
        <textarea
          name="description"
          placeholder="Description"
          value={formData.description}
          onChange={handleChange}
        />
        <div className="modal-buttons">
          <button className="modal-cancel" onClick={onClose}>
            Cancel
          </button>
          <button className="modal-submit" onClick={handleSubmit}>
            {initialData ? "Update" : "Add"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default EducationModal;

