import { createGlobalState } from 'react-hooks-global-state';
 
const initialState = { user: undefined };
export const { useGlobalState } = createGlobalState(initialState);