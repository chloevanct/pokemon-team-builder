import { configureStore } from '@reduxjs/toolkit';
import membersReducer from '../features/members/membersSlice';

// configureStore(configuration object)
//    reducer property is an object that maps slice names to reducer functions.
//    membersReducer manages state available under the members key (slice name)
const store = configureStore({
  reducer: {
    members: membersReducer,
  },
});

export { store };