import { useContext } from 'react';
import userData from '../userData/userData';
import { useState } from 'react';

import { TrashIcon } from '@heroicons/react/24/solid'
import { Link, useNavigate  } from 'react-router-dom';
import service from "../../services/service";
import { toast } from 'react-toastify';
import Intro from '../Intro/Intro';

import './nav.scss';
import logomark from './img/logomark.svg';

const Nav = () => {
    const { userName, setUserName } = useContext(userData);
    const [showPopUp, setShowPopUp] = useState(false);
    const navigate = useNavigate();
    const { deleteItem, deleteBudget } = service();


    const handleHomeClick = () => {
        deleteItem({
            key: "userName"
        });
        setUserName('');
        navigate('/Intro');
    }

    const handleConfirmDelete = () => {
        deleteItem({
            key: "userName"
        });
        deleteBudget({
            key: "budgets"
        });
        setUserName('');
        setShowPopUp(false);
        navigate('/');
        toast.success('You have deleted your account')
    };
    console.log('nav')

    return (
        <nav>
            { 
                userName && (
                    <Link to='/Intro' onClick={handleHomeClick}>
                        <img
                            src={logomark}
                            height={30} alt='logomark' />
                        <span>Home</span>
                    </Link>
                )
            }
            {
                userName && (
                    <button onClick={() => setShowPopUp(true)} className="btn btn--warning">
                        <span>Delete User</span>
                        <TrashIcon width={20} />
                    </button>
                )
            }
            {
                showPopUp && (
                    <div className='popup'>
                        <div className="popup__content">
                            <h3>Are you sure?</h3>
                            <p>This action will delete the user permanently.</p>
                            <div className="popup__actions">
                                <button
                                    onClick={() => setShowPopUp(false)}
                                    className="btn btn--danger">Cancel</button>
                                <button
                                    onClick={() => handleConfirmDelete()}
                                    className="btn btn--warning">Yes, delete</button>
                            </div>
                        </div>
                    </div>
                )
            }
        </nav>
    )
};

export default Nav;