import { createContext } from 'react';

export default createContext({
    initialize: () => Promise,
    saveCard: () => { },
});