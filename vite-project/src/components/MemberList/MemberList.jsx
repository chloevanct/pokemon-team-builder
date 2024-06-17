import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import "./MemberList.css";
import { getMembers as getMembersAsync, deleteMember as deleteMemberAsync } from '../../features/members/membersThunk';

const MemberList = ({ setSelectedMember }) => {
  const members = useSelector((state) => state.members.members);
  const searchQuery = useSelector((state) => state.members.searchQuery);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMembersAsync());
  }, []);

  const filteredMembers = members.filter((member) =>
    member.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    member.type.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleDelete = (id) => {
    dispatch(deleteMemberAsync(id));
  };

  return (
    <div>
      <ul className="member-list">
      <h2>Member List</h2>
        {filteredMembers.map((member, index) => (
          <li className="member-list-item" key={index}>
            <img src={member.memberImageURL} alt={member.name} className="member-list-image" onClick={() => setSelectedMember(member)}/>
            <span onClick={() => setSelectedMember(member)}>{member.name}</span>
            <button className="delete-button" onClick={() => handleDelete(member.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MemberList;