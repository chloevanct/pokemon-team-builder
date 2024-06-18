import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import "./MemberList.css";
import { getMembers as getMembersAsync, deleteMember as deleteMemberAsync } from '../../features/members/membersThunk';
import MemberUpdateForm from '../MemberUpdate/MemberUpdateForm';


const MemberList = ({ setSelectedMember }) => {
  const members = useSelector((state) => state.members.members);
  const searchQuery = useSelector((state) => state.members.searchQuery);
  const dispatch = useDispatch();

  // edit a member
  const [editingMember, setEditingMember] = useState(null);

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

  const handleEdit = (member) => {
    setEditingMember(member);
};

const handleCloseEdit = () => {
    setEditingMember(null);
};

  return (
    <div className="member-list-edit-group">
      <ul className="member-list">
      <h2>Member List</h2>
        {filteredMembers.map((member, index) => (
          <li className="member-list-item" key={index}>
            <img src={member.memberImageURL} alt={member.name} className="member-list-image" onClick={() => setSelectedMember(member)}/>
            <span
              className={editingMember && editingMember.id === member.id ? 'member-name-editing' : 'member-name'}
              onClick={() => setSelectedMember(member)}
            >
              {member.name}
            </span>
             <button className="edit-button"
              onClick={() => handleEdit(member)}
              disabled={editingMember}
              >
                Edit
              </button>
            <button
              className="delete-button"
              onClick={() => handleDelete(member.id)}
              disabled={editingMember}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
      {editingMember && (
                <MemberUpdateForm
                    member={editingMember}
                    onClose={handleCloseEdit}
                />
            )}
    </div>
  );
};

export default MemberList;