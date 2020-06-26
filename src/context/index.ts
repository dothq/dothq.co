import { createGlobalState } from 'react-hooks-global-state';
 
const initialState = { user: undefined, builds: undefined, afUser: undefined, afBuilds: undefined };
export const { useGlobalState } = createGlobalState(initialState);