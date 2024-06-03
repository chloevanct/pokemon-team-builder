// Search and Dialog design inspired by ChatGPT 4.0 and Google Search on June 1-2 2024
// Prompts used were “Help me get started on adding search functionality/dialog with react-redux"
// The generated code was adopted: overall code structure
// Dialog design: keep is simple, manage locally, state doesn't need global accessibility
// Search functionality: helps with scalability (other filters, pagination)

import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import MemberForm from '../components/MemberForm';
import MemberList from '../components/MemberList';
import MemberDetail from '../components/MemberDetail';
import { setSearchQuery } from '../features/members/membersSlice';

const Home = () => {
  const [selectedMember, setSelectedMember] = useState(null);
  const dispatch = useDispatch();
  const searchQuery = useSelector((state) => state.members.searchQuery);

  const handleSearchInputChange = (e) => {
    dispatch(setSearchQuery(e.target.value));
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search members by name or type"
        value={searchQuery}
        onChange={handleSearchInputChange}
      />
      <MemberForm />
      <MemberList setSelectedMember={setSelectedMember} />
      {selectedMember && <MemberDetail member={selectedMember} onClose={() => setSelectedMember(null)} />}
    </div>
  );
};

export default Home;