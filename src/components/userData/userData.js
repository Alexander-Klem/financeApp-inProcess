import { createContext} from 'react';
// import service from '../services/service';

const userData = createContext({
    userName: 'Alex',
    // setUserName: () => {},
    setUserName: '',
});

export default userData;