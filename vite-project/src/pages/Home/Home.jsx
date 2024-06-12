// Search and Dialog design inspired by ChatGPT 4.0 and Google Search on June 1-2 2024
// Prompts used were “Help me get started on adding search functionality/dialog with react-redux"
// The generated code was adopted: overall code structure
// Dialog design: keep is simple, manage locally, state doesn't need global accessibility
// Search functionality: helps with scalability (other filters, pagination)

import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import MemberForm from '../../components/MemberForm/MemberForm';
import MemberList from '../../components/MemberList/MemberList';
import MemberDetail from '../../components/MemberDetail/MemberDetail';
import { setSearchQuery } from '../../features/members/membersSlice';
import "./Home.css";

const Home = () => {
  const [selectedMember, setSelectedMember] = useState(null);
  const dispatch = useDispatch();
  const searchQuery = useSelector((state) => state.members.searchQuery);

  const handleSearchInputChange = (e) => {
    dispatch(setSearchQuery(e.target.value));
  };

  return (
    <>
    <div className="home">
      <input
        type="text"
        placeholder="Search members by name or type"
        value={searchQuery}
        onChange={handleSearchInputChange}
        className="search-bar"
      />
      <div className="member-form-list-group">
      <MemberForm />
      <MemberList setSelectedMember={setSelectedMember} />
      {selectedMember && <MemberDetail member={selectedMember} onClose={() => setSelectedMember(null)} />}
      </div>
    </div>
    </>
  );
};

export default Home;