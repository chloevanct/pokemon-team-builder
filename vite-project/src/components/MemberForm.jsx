// ChatGPT 4.0 June 1-2 2024
// Prompts used were “Help me get started on adding form with these values"
// The generated code was adopted: overall code structure - single source of truth principle
// The input fields are controlled by React state (formData); state and the input fields are always synchronized

import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addMember } from '../features/members/membersSlice';

const MemberForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    type: '',
    weaknesses: '',
    description: '',
    age: '',
    memberImageURL: '',
  });

  const dispatch = useDispatch();

  // keeps the formData state up to date
  // e.target is input field that triggered the change
  // name: 'name' attribute of input field
  // value: current value of input field
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleAdd = () => {
    dispatch(addMember(formData));
    setFormData({
      name: '',
      type: '',
      weaknesses: '',
      description: '',
      age: '',
      memberImageURL: '',
    });
  };

  const handleClear = () => {
    setFormData({
      name: '',
      type: '',
      weaknesses: '',
      description: '',
      age: '',
      memberImageURL: '',
    });
  };

  return (
    <div>
      <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Name" />
      <input type="text" name="type" value={formData.type} onChange={handleChange} placeholder="Type" />
      <input type="text" name="weaknesses" value={formData.weaknesses} onChange={handleChange} placeholder="Weaknesses" />
      <input type="text" name="description" value={formData.description} onChange={handleChange} placeholder="Description" />
      <input type="number" name="age" value={formData.age} onChange={handleChange} placeholder="Age" />
      <input type="text" name="memberImageURL" value={formData.memberImageURL} onChange={handleChange} placeholder="Image URL" />
      <button onClick={handleAdd}>Add Member</button>
      <button onClick={handleClear}>Clear</button>
    </div>
  );
};

export default MemberForm;