import { createSlice } from '@reduxjs/toolkit';
// May 27 - June 2 2024: reference code structure from redux docs
// https://redux.js.org/tutorials/essentials/part-2-app-structure

const initialState = {
    members: [
      {
        name: "Pikachu",
        description: "When it is angered, it immediately discharges the energy stored in the pouches in its cheeks.",
        type: "Electric",
        weaknesses: "Ground",
        age: 10,
        memberImageURL: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/025.png"
      },
      {
        name: "Charizard",
        description: "If Charizard becomes truly angered, the flame at the tip of its tail burns in a light blue shade.",
        type: "Fire, Flying",
        weaknesses: "Water, Electric, Rock",
        age: 8,
        memberImageURL: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/006.png"
      },
      {
        name: "Espeon",
        description: "The tip of its forked tail quivers when it is predicting its opponent’s next move.",
        type: "Psychic",
        weaknesses: "Bug, Ghost, Dark",
        age: 6,
        memberImageURL: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/196.png"
      },
      {
        name: "Bulbasaur",
        description: "For some time after its birth, it uses the nutrients that are packed into the seed on its back in order to grow.",
        type: "Grass, Poison",
        weaknesses: "Fire, Ice, Flying, Psychic",
        age: 4,
        memberImageURL: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/001.png"
      },
      {
        name: "Excadrill",
        description: "Forming a drill with its steel claws and head, it can bore through a steel plate, no matter how thick it is.",
        type: "Ground, Steel",
        weaknesses: "Fire, Water, Fighting, Ground",
        age: 11,
        memberImageURL: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/530.png"
      },
    ],
    searchQuery: '',
  };

const membersSlice = createSlice({
    name: 'members',
    initialState: initialState,
    reducers: {
        addMember: (state, action) => {
            state.members.push(action.payload)
        },
        setSearchQuery: (state, action) => {
          state.searchQuery = action.payload;
        },
        deleteMember: (state, action) => {
          state.members = state.members.filter(member => member.name != action.payload);
        },
    },
});

export const { addMember, setSearchQuery, deleteMember } = membersSlice.actions;

export default membersSlice.reducer;