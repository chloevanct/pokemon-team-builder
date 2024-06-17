import { createAsyncThunk } from '@reduxjs/toolkit';
import { getMembersApi, addMembersApi, updateMembersApi, deleteMembersApi } from './membersService';

export const getMembers = createAsyncThunk(
    'members/getMembers',
    async () => {
        return await getMembersApi();
    }
)

export const addMember = createAsyncThunk(
    'members/addMembers',
    async(member) => {
        return await addMembersApi(member);
    }
)

export const updateMember = createAsyncThunk(
    'members/updateMembers',
    async({id, member}) => {
        return await updateMembersApi(id. member);
    }
)

export const deleteMember = createAsyncThunk(
    'members/deleteMember',
    async(id) => {
        return await deleteMembersApi(id);
    }
)