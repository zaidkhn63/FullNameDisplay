import React, { useState } from 'react';
// import './NameForm.css';

const NameForm = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [fullName, setFullName] = useState('');
  const [formError, setFormError] = useState(false);

  const handleFirstNameChange = (event) => {
    setFirstName(event.target.value);
  };

  const handleLastNameChange = (event) => {
    setLastName(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Validate inputs
    if (firstName.trim() === '' || lastName.trim() === '') {
      setFormError(true);
      setFullName('');
    } else {
      setFormError(false);
      const fullName = `${firstName} ${lastName}`;
      setFullName(fullName);
    }
  };

  return (
    <div className="name-form">
      <h2>Enter Your Name</h2>
      <form onSubmit={handleSubmit}>
      <div>
      <h2 style={{ display: 'inline-block', marginRight: '10px' }}>First Name:</h2>
      <input
        type="text"
        placeholder="First Name"
        value={firstName}
        required
        onChange={handleFirstNameChange}
        style={{ padding: '10px', width: '200px', display: 'inline-block' }}
      />
    </div>
          <div>
          <h2 style={{ display: 'inline-block', marginRight: '10px' }}>Last Name:</h2>
          <input
          required
            type="text"
            placeholder="Last Name"
            value={lastName}
            onChange={handleLastNameChange}
            style={{ padding: '10px', width: '200px', display: 'inline-block' }}
          />
        </div>
        {formError && <p className="error-message">Please fill in both fields.</p>}
        <button type="submit">Submit</button>
      </form>
      {fullName && (
        <div className="full-name-container">
          <h2 style={{ display: 'inline-block', marginRight: '10px' }}>Full Name:</h2>
          <p style={{ width: '200px', display: 'inline-block' }} className="full-name">{fullName}</p>
        </div>
      )}
    </div>
  );
};

export default NameForm;
