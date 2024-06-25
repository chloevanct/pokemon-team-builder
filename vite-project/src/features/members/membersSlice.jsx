import { createSlice } from '@reduxjs/toolkit';
import { getMembers as getMembersAsync, addMember as addMemberAsync, updateMember as updateMemberAsync, deleteMember as deleteMemberAsync } from './membersThunk';

// May 27 - June 2 2024: reference code structure from redux docs
// https://redux.js.org/tutorials/essentials/part-2-app-structure

/* ChatGPT 4.0 June 16 2024
Prompts used were “How do I incorporate thunk into my slice, how to use extraReducers and builder"
The generated code in extraReducers was adopted with some renaming and referenced Stephanie's repo from workshop*/

const initialState = {
    members: [],
    searchQuery: '',
  };

const membersSlice = createSlice({
    name: 'members',
    initialState: initialState,
    reducers: {
        setSearchQuery: (state, action) => {
          state.searchQuery = action.payload;
        },
    },
    extraReducers: (builder) => {
      builder
      .addCase(getMembersAsync.fulfilled, (state, action) => {
        state.members = action.payload;
      })
      .addCase(addMemberAsync.fulfilled, (state, action) => {
        state.members.push(action.payload);
      })
      .addCase(updateMemberAsync.fulfilled, (state, action) => {
        const index = state.members.findIndex(member => member.id === action.payload.id);
        if (index !== -1) {
          state.members[index] = action.payload;
        }
      })
      .addCase(deleteMemberAsync.fulfilled, (state, action) => {
        state.members = state.members.filter(member => member.id !== action.payload)
      })
    },
});

export const { addMember, setSearchQuery, deleteMember } = membersSlice.actions;

export default membersSlice.reducer;