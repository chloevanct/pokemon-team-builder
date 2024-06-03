// Dialog design inspired by ChatGPT 4.0 and Google Search on June 1-2 2024
// Prompts used were “Help me get started on adding dialog with react-redux"
// The generated code was adopted: overall code structure
// Dialog design: maintaining ref to the same DOM element avoids creating new DOM elements unnecessarily.
// Helps keep DOM structure stable

import React, { useRef } from 'react';

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
      <h2>{member.name}</h2>
      <p>{member.type}</p>
      <o>{member.weaknesses}</o>
      <p>{member.description}</p>
      <p>Age: {member.age}</p>
      <img src={member.memberImageURL}></img>
      <button onClick={() => {
        dialogRef.current.close();
        onClose();
      }}>Close</button>
    </dialog>
  );
};

export default MemberDetail;