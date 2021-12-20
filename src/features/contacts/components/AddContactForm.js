import React, { useState } from "react";

export const AddContactForm = ({
  handleSubmit,
  handleNameChange,
  handleSurnameChange,
  handleDateOfBirthChange,
  handlePhoneChange,
  handleLandlineChange,
  handleEmailChange,
  handlePagerChange,
}) => {
  const [phoneCheckbox, setPhoneCheckbox] = useState(false);
  const [landlineCheckbox, setLandlineCheckbox] = useState(false);
  const [emailCheckbox, setEmailCheckbox] = useState(false);
  const [pagerCheckbox, setPagerCheckbox] = useState(false);
  const today = new Date().toISOString().split("T")[0];

  return (
    <div className="add-contact-container">
      <form onSubmit={handleSubmit} className="add-contact-form">
        <div className="add-contact-form-line">
          <label className="add-form-label">Name:</label>
          <input
            className="add-form-input"
            type="text"
            maxLength="20"
            required
            onChange={(e) => handleNameChange(e.target.value)}
          />
        </div>
        <div className="add-contact-form-line">
          <label className="add-form-label">Surname:</label>
          <input
            className="add-form-input"
            type="text"
            maxLength="30"
            required
            onChange={(e) => handleSurnameChange(e.target.value)}
          />
        </div>
        <div className="add-contact-form-line">
          <label className="add-form-label">Date of birth:</label>
          <input
            className="add-form-input"
            type="date"
            max={today}
            required
            onChange={(e) => handleDateOfBirthChange(e.target.value)}
          />
        </div>
        <div className="add-contact-form-line">
          <label className="add-form-label">E-mail:</label>
          <input
            type="checkbox"
            checked={emailCheckbox}
            onChange={(e) => setEmailCheckbox(e.target.checked)}
          />
          {emailCheckbox ? (
            <input
              className="add-form-input"
              type="email"
              required
              onChange={(e) => handleEmailChange(e.target.value)}
            />
          ) : (
            <input className="add-form-input" disabled />
          )}
        </div>
        <div className="add-contact-form-line">
          <label className="add-form-label">Phone number:</label>
          <input
            type="checkbox"
            checked={phoneCheckbox}
            onChange={(e) => setPhoneCheckbox(e.target.checked)}
          />
          {phoneCheckbox ? (
            <input
              className="add-form-input"
              type="tel"
              required
              pattern="^\d{9,10}$"
              onChange={(e) => handlePhoneChange(e.target.value)}
            />
          ) : (
            <input className="add-form-input" disabled />
          )}
        </div>
        <div className="add-contact-form-line">
          <label className="add-form-label">Landline number:</label>
          <input
            type="checkbox"
            checked={landlineCheckbox}
            onChange={(e) => setLandlineCheckbox(e.target.checked)}
          />
          {landlineCheckbox ? (
            <input
              className="add-form-input"
              type="tel"
              pattern="^\d{8,9}$"
              required
              onChange={(e) => handleLandlineChange(e.target.value)}
            />
          ) : (
            <input className="add-form-input" disabled />
          )}
        </div>
        <div className="add-contact-form-line">
          <label className="add-form-label">Pager number:</label>
          <input
            type="checkbox"
            checked={pagerCheckbox}
            onChange={(e) => setPagerCheckbox(e.target.checked)}
          />
          {pagerCheckbox ? (
            <input
              className="add-form-input"
              type="tel"
              pattern="^\d{9,10}$"
              required
              onChange={(e) => handlePagerChange(e.target.value)}
            />
          ) : (
            <input className="add-form-input" disabled />
          )}
        </div>
        <button className="add-button" type="submit">
          ADD
        </button>
      </form>
    </div>
  );
};
