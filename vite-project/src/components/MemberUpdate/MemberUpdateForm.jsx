import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateMember as updateMemberAsync } from '../../features/members/membersThunk';
import "../MemberForm/MemberForm.css";

const MemberUpdateForm = ({ member, onClose }) => {
    const [formData, setFormData] = useState(member);

    const dispatch = useDispatch();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(updateMemberAsync({id: member.id, member: formData}));
        onClose();
    };

    return (
        <div className="registration">
            <h1> Edit {member.name} </h1>
            <form className="member-form" onSubmit={handleSubmit}>
            <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Name"
                required
            />
            <input
                type="text"
                name="type"
                value={formData.type}
                onChange={handleChange}
                placeholder="Type"
                required
            />
            <input
                type="text"
                name="weaknesses"
                value={formData.weaknesses}
                onChange={handleChange}
                placeholder="Weaknesses"
                required
            />
            <input
                type="text"
                name="description"
                value={formData.description}
                onChange={handleChange}
                placeholder="Description"
                required
            />
            <input
                type="number"
                name="age"
                value={formData.age}
                onChange={handleChange}
                placeholder="Age"
                min="1"
                max="100"
                required
            />
            <input
                type="url"
                name="memberImageURL"
                value={formData.memberImageURL}
                onChange={handleChange}
                placeholder="Image URL"
                required
            />
            <button type="submit" className="form-button submit-button">Update {member.name}</button>
            <button type="button" className="form-button cancel" onClick={onClose}>Cancel</button>
        </form>
        </div>
    );
};

export default MemberUpdateForm;