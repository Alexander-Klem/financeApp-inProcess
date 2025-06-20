import { useEffect, useState } from 'react';
import Dashboard from '../../pages/Dashboard';
import UserData from '../../components/userData/userData';
import Intro from '../../components/Intro/Intro';
import Nav from '../../components/Navigation/Nav';
import { Outlet, useNavigate } from 'react-router-dom';

import waves from './img/wave.svg';
import service from '../../services/service';

const { Provider } = UserData;
const { fetchData } = service();

const Main = () => { 
    const [userName, setUserName] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        const storedName = fetchData('userName');
        console.log('main use')
        if (storedName) {
        console.log('main if')
        setUserName(storedName);
        navigate('/Dashboard')
    }
}, []);

    console.log('main')

    return (
        <Provider value={{userName, setUserName}}>
            <div className="layout">
                <Nav />
                <main>
                    {/* <Dashboard /> */}
                    <Outlet/>
                </main>
                <img src={waves} alt="waves" />
                </div>
        </Provider>
    )
}

export default Main;