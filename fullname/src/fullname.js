import React, { useState } from 'react';

const NameForm = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [fullName, setFullName] = useState('');
  const [formError, setFormError] = useState(false);

  const handleFirstNameChange = (event) => {
    setFirstName(event.target.value);
    setFormError(false); // Clear form error when typing
  };

  const handleLastNameChange = (event) => {
    setLastName(event.target.value);
    setFormError(false); // Clear form error when typing
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Validate inputs
    if (firstName.trim() === '' || lastName.trim() === '') {
      setFormError(true);
      setFullName('');
    } else {
      const fullName = `${firstName} ${lastName}`;
      setFullName(fullName);
      setFormError(false);
    }
  };

  return (
    <div className="name-form">
      <h2>Enter Your Name</h2>
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <label htmlFor="firstName" style={{ display: 'inline-block', marginRight: '10px' }}>
            First Name:
          </label>
          <input
            type="text"
            id="firstName"
            value={firstName}
            onChange={handleFirstNameChange}
            style={{ padding: '10px', width: '200px', display: 'inline-block' }}
            required
          />
        </div>
        <div className="input-container">
          <label htmlFor="lastName" style={{ display: 'inline-block', marginRight: '10px' }}>
            Last Name:
          </label>
          <input
            type="text"
            id="lastName"
            value={lastName}
            onChange={handleLastNameChange}
            style={{ padding: '10px', width: '200px', display: 'inline-block' }}
            required
          />
        </div>
        {formError && <p className="error-message">Please fill in both fields.</p>}
        <button type="submit">Submit</button>
      </form>
      {fullName && (
        <div className="full-name-container">
          <h2 style={{ display: 'inline-block', marginRight: '10px' }}>Full Name:</h2>
          <p className="full-name" style={{ display: 'inline-block', fontWeight: 'bold' }}>
            {fullName}
          </p>
        </div>
      )}
    </div>
  );
};

export default NameForm;
