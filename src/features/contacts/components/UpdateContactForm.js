import React, { useState } from "react";

export const UpdateContactForm = ({
  contact,
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
            placeholder={contact.name}
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
            placeholder={contact.surname}
            onChange={(e) => handleSurnameChange(e.target.value)}
          />
        </div>
        <div className="add-contact-form-line">
          <label className="add-form-label">Date of birth:</label>
          <input
            className="add-form-input"
            type="text"
            max={today}
            required
            placeholder={contact.dateOfBirth}
            onBlur={(e) => (e.target.type = "text")}
            onFocus={(e) => (e.target.type = "date")}
            onChange={(e) => handleDateOfBirthChange(e.target.value)}
          />
        </div>
        <div className="add-contact-form-line">
          <label className="add-form-label">E-mail:</label>
          <input
            type="checkbox"
            checked={emailCheckbox}
            onChange={(e) => {
              handleEmailChange("");
              setEmailCheckbox(e.target.checked);
            }}
          />
          {emailCheckbox ? (
            <input
              className="add-form-input"
              type="email"
              placeholder={contact.email}
              onChange={(e) => handleEmailChange(e.target.value)}
            />
          ) : (
            <input
              className="add-form-input"
              disabled
              placeholder={contact.email}
            />
          )}
        </div>
        <div className="add-contact-form-line">
          <label className="add-form-label">Phone number:</label>
          <input
            type="checkbox"
            checked={phoneCheckbox}
            onChange={(e) => {
              handlePhoneChange("");
              setPhoneCheckbox(e.target.checked);
            }}
          />
          {phoneCheckbox ? (
            <input
              className="add-form-input"
              type="tel"
              pattern="^\d{9,10}$"
              placeholder={contact.phone}
              onChange={(e) => handlePhoneChange(e.target.value)}
            />
          ) : (
            <input
              className="add-form-input"
              disabled
              placeholder={contact.phone}
            />
          )}
        </div>
        <div className="add-contact-form-line">
          <label className="add-form-label">Landline number:</label>
          <input
            type="checkbox"
            checked={landlineCheckbox}
            onChange={(e) => {
              handleLandlineChange("");
              setLandlineCheckbox(e.target.checked);
            }}
          />
          {landlineCheckbox ? (
            <input
              className="add-form-input"
              type="tel"
              placeholder={contact.landline}
              pattern="^\d{8,9}$"
              onChange={(e) => handleLandlineChange(e.target.value)}
            />
          ) : (
            <input
              className="add-form-input"
              disabled
              placeholder={contact.landline}
            />
          )}
        </div>
        <div className="add-contact-form-line">
          <label className="add-form-label">Pager number:</label>
          <input
            type="checkbox"
            checked={pagerCheckbox}
            onChange={(e) => {
              handlePagerChange("");
              setPagerCheckbox(e.target.checked);
            }}
          />
          {pagerCheckbox ? (
            <input
              className="add-form-input"
              type="tel"
              pattern="^\d{9,10}$"
              placeholder={contact.pager}
              onChange={(e) => {
                handlePagerChange(e.target.value);
              }}
            />
          ) : (
            <input
              className="add-form-input"
              disabled
              placeholder={contact.pager}
            />
          )}
        </div>
        <button className="update-button" type="submit">
          CONFIRM UPDATE
        </button>
      </form>
    </div>
  );
};
