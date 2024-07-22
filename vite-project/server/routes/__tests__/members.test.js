/* ChatGPT 4.0 June 21 2024
Prompts used were “Help me build a test suite for my routers using Jest and supertest"
The generated code was adopted*/

const request = require('supertest');
const app = require('../../app');
const Member = require('../../db/model/member');
const { v4: uuidv4 } = require('uuid');


// Set the environment variable to 'test'
process.env.NODE_ENV = 'test';

// Mock the mongoose connection
jest.mock('mongoose', () => {
    const actualMongoose = jest.requireActual('mongoose');
    return {
        ...actualMongoose,
        connect: jest.fn().mockResolvedValue(() => {
            console.log('Mocked Mongoose connection');
        }),
        connection: {
            on: jest.fn(),
            once: jest.fn(),
        },
    };
});

// Mocking allows you to simulate the behaviour of the model without interacting with the actual db.
// Useful because it isolates the tests from external dependencies like a database
jest.mock('../../db/model/member', () => {
    const mockMemberModel = {
        find: jest.fn(),
        deleteOne: jest.fn(),
        findOneAndUpdate: jest.fn(),
    };

// Adding the instance method 'save' to the prototype
function Member(data) {
    this.save = jest.fn().mockResolvedValue(data);
    Object.assign(this, data);
}

  // Static methods on the model itself
    Member.find = mockMemberModel.find;
    Member.deleteOne = mockMemberModel.deleteOne;
    Member.findOneAndUpdate = mockMemberModel.findOneAndUpdate;

    return Member;
});

// describe: a Jest function to group related tests
// it groups all tests related to the 'Members API'
describe('Members API', () => {
    let mockMember;

    beforeEach(() => {
        mockMember = {
            id: uuidv4(),
            name: 'Test Member',
            description: 'Test member description',
            type: 'Test Type',
            weaknesses: 'Test Weaknesses',
            age: 3,
            memberImageURL: 'https://www.cs.ubc.ca/sites/default/files/styles/profile_page/public/people/Patrice%20Belleville%202023.jpg?h=defbe60e&itok=z2E6vyPM',
        };
    });

    it('should fetch all members', async () => {
        Member.find.mockResolvedValue([mockMember]);

        const response = await request(app).get('/members');
        expect(response.status).toBe(200);
        expect(response.body).toEqual([mockMember]);
    });

    it('should add a new member', async () => {
        const response = await request(app).post('/members').send(mockMember);
        console.log('Response status:', response.status);
        console.log('Response body:', response.body);
        expect(response.status).toBe(201);
        expect(response.body).toEqual(mockMember);
    });

    it('should delete a member', async () => {
        Member.deleteOne.mockResolvedValue({ deletedCount: 1 });

        const response = await request(app).delete(`/members/${mockMember.id}`);
        expect(response.status).toBe(204);
    });

    it('should update a member', async () => {
        const updatedMember = { ...mockMember, name: 'Updated Name' };
        Member.findOneAndUpdate.mockResolvedValue(updatedMember);

        const response = await request(app).put(`/members/${mockMember.id}`).send(updatedMember);
        expect(response.status).toBe(200);
        expect(response.body).toEqual(updatedMember);
    });
});
