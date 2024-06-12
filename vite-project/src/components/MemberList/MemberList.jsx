import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteMember } from '../../features/members/membersSlice';
import "./MemberList.css";

const MemberList = ({ setSelectedMember }) => {
  const members = useSelector((state) => state.members.members);
  const searchQuery = useSelector((state) => state.members.searchQuery);

  const filteredMembers = members.filter((member) =>
    member.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    member.type.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const dispatch = useDispatch();
  const handleDelete = (name) => {
    dispatch(deleteMember(name));
  }

  return (
    <div>
      <ul className="member-list">
      <h2>Member List</h2>
        {filteredMembers.map((member, index) => (
          <li className="member-list-item" key={index}>
            <img src={member.memberImageURL} alt={member.name} className="member-list-image" onClick={() => setSelectedMember(member)}/>
            <span onClick={() => setSelectedMember(member)}>{member.name}</span>
            <button className="delete-button" onClick={() => handleDelete(member.name)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MemberList;