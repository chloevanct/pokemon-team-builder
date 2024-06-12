// Dialog design inspired by ChatGPT 4.0 and Google Search on June 1-2 2024
// Prompts used were “Help me get started on adding dialog with react-redux"
// The generated code was adopted: overall code structure
// Dialog design: maintaining ref to the same DOM element avoids creating new DOM elements unnecessarily.
// Helps keep DOM structure stable

import React, { useRef } from 'react';
import './MemberDetail.css';

const MemberDetail = ({ member, onClose }) => {
  const dialogRef = useRef(null);

  React.useEffect(() => {
    if (member) {
      dialogRef.current.showModal();
    } else {
      dialogRef.current.close();
    }
  }, [member]);

  if (!member) return null;

  return (
    <dialog ref={dialogRef}>
        <div className="member-detail">
      <h2>{member.name}</h2>
      <p>Type: {member.type}</p>
      <o>Weaknesses: {member.weaknesses}</o>
      <p>{member.description}</p>
      <p>Age: {member.age}</p>
      <img src={member.memberImageURL} className="member-detail-image" alt={member.name} />
      <button onClick={() => {
        dialogRef.current.close();
        onClose();
      }}>Close</button>
    </div>
    </dialog>
  );
};

export default MemberDetail;