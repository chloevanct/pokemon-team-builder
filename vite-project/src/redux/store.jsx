import { configureStore } from '@reduxjs/toolkit';
import membersReducer from '../features/members/membersSlice';

// configureStore(configuration object)
//    reducer property is an object that maps slice names to reducer functions.
//    membersReducer manages state available under the members key (slice name)
// Thunks requires that the redux-thunk middleware (a type of plugin for Redux) be added to the Redux store when it's created.
// Fortunately configureStore function already sets that up for us automatically, so we can go ahead and use thunks here.
const store = configureStore({
  reducer: {
    members: membersReducer,
  },
});

export { store };