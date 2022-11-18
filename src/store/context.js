import { createContext} from 'react';
export const authContext = createContext(
    {
        auth: {
            token: null,
            userId: null,
            name: null
        },
        updateAuth: (f)=>{}
    })