import React from 'react';
import { useSelector } from 'react-redux';

const MemberList = ({ setSelectedMember }) => {
  const members = useSelector((state) => state.members.members);
  const searchQuery = useSelector((state) => state.members.searchQuery);

  const filteredMembers = members.filter((member) =>
    member.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    member.type.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <h2>Member List</h2>
      <ul>
        {filteredMembers.map((member, index) => (
          <li key={index} onClick={() => setSelectedMember(member)}>
            <img src={member.memberImageURL} alt={member.name} className="member-list-image"/>
            {member.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MemberList;