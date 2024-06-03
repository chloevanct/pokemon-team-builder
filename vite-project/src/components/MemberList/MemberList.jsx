import React from 'react';
import { useSelector } from 'react-redux';
import "./MemberList.css";

const MemberList = ({ setSelectedMember }) => {
  const members = useSelector((state) => state.members.members);
  const searchQuery = useSelector((state) => state.members.searchQuery);

  const filteredMembers = members.filter((member) =>
    member.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    member.type.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <ul className="member-list">
      <h2>Member List</h2>
        {filteredMembers.map((member, index) => (
          <li className="member-list-item" key={index} onClick={() => setSelectedMember(member)}>
            <img src={member.memberImageURL} alt={member.name} className="member-list-image"/>
            {member.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MemberList;