/* ChatGPT 4.0 June 16 2024
Prompts used were “How do I use fetch and how to I handle requests with plain text error messages"
The generated handleResponse, getMembersApi and updateMembersApi code was adopted with some renaming and referenced Stephanie's repo from workshop*/

const API_BASE_URL = 'http://localhost:3000/members'

const handleResponse = async (response) => {
    if (!response.ok) {
        const errorText = await response.text();
        const errorData = { message: errorText };
        throw new Error(`${response.status}: ${errorData.message}`);
    }
    return await response.json();
}

export const getMembersApi = async () => {
    const response = await fetch(API_BASE_URL, {
        method: 'GET',
    });
    return handleResponse(response);
}

export const addMembersApi = async (member) => {
    const response = await fetch(API_BASE_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(member),
    });

    return handleResponse(response);
}

export const updateMembersApi = async (id, member) => {
    const response = await fetch(`${API_BASE_URL}/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(member),
    });

    return handleResponse(response);
}

export const deleteMembersApi = async (id) => {
    const response = await fetch (`${API_BASE_URL}/${id}`, {
        method: 'DELETE',
    });
    if (!response.ok) {
        const errorText = await response.text();
        const errorData = { message: errorText };
        throw new Error(`${response.status}: ${errorData.message}`);
    }
    return id;
}