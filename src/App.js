import React, { useState } from 'react';
import './style.css';

const FormComponent = ({ stavka }) => {
  const [formData, setFormData] = useState({
    input1: '',
    input2: '',
    input3: '',
    input4: '',
    input5: '',
  });

  const onEnterKey = (event) => {
    if (event.keyCode === 13 && event.target && event.target.form) {
      const form = event.target.form;
      const index = Array.prototype.indexOf.call(form, event.target);
      for (let i = index + 1; i < form.elements.length; i++) {
        const nextElement = form.elements[i];
        if (nextElement.tabIndex === -1) {
          continue;
        }
        nextElement.focus();
        break;
      }
    }
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
    alert(JSON.stringify(formData, null, 2));
  };

  return (
    <form onKeyUp={onEnterKey} onSubmit={handleSubmit}>
      <input
        name="input1"
        autoFocus
        value={formData.input1}
        onChange={handleInputChange}
      />
      <input
        name="input2"
        value={formData.input2}
        onChange={handleInputChange}
      />
      <input
        name="input3"
        value={formData.input3}
        onChange={handleInputChange}
      />
      <input
        name="input4"
        value={formData.input4}
        onChange={handleInputChange}
      />
      <input
        name="input5"
        value={formData.input5}
        onChange={handleInputChange}
      />
      <button type="button" onClick={handleSubmit}>
        Save
      </button>
    </form>
  );
};

export default FormComponent;
