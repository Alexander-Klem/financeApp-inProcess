// import { Form } from "react-router-dom";
import service from '../../services/service';
import { Formik, Form, Field, ErrorMessage as FormikErrorMessage } from 'formik';
import * as Yup from 'yup';
import { UserPlusIcon } from "@heroicons/react/24/solid";
import { toast } from 'react-toastify';

import './intro.scss';
import illustration from './img/illustration.jpg' 
import { useNavigate } from 'react-router-dom';
import { useContext, useEffect } from 'react';
import userData from '../userData/userData';
    
const Intro = () => { 
    const { setItem, fetchData } = service();
    const {userName, setUserName } = useContext(userData);
    const navigate = useNavigate();

    // useEffect(() => {
    //     deleteItem('userName');
    //     setUserName('');
    // }, [userName]);

    return (
        <div className="intro">
            <div>
                <h1>
                    Take Control of <span className="accent">Your money</span> 
                </h1>
                <p>
                    Personal budgeting is the secret to financial freedom. Start your journey today
                </p>
                <Formik
                    initialValues={{
                        userName: '',
                    }}
                
                    validationSchema={Yup.object({
                            userName: Yup.string()
                                .min(2, 'Minimum 2 symbols')
                                .required('This field is required'),
                    })}
                
                    onSubmit={(values) => {
                        const prevName = fetchData('userName');
                        setItem('userName', values.userName);
                        setUserName(values.userName);

                        if (prevName !== values.userName) { 
                            toast.success(`Welcome, ${values.userName}`);
                        }
                        navigate('/Dashboard')}}>
                    <Form>
                        <div className='field'>
                        <Field
                            type="text"
                            name="userName"
                            required
                            placeholder="What is your name?"
                            aria-label="Your Name"
                            autoComplete="given-name" />
                        <FormikErrorMessage
                            component='div'
                            className="user__search-error"
                            name="userName" />
                        </div>
                        <button type="submit" className="btn btn--dark">
                            <span>Create Account</span>
                            <UserPlusIcon width={20} />
                        </button>
                        
                    </Form>
                </Formik>
            </div>
            <img src={illustration} alt="Person with money" width={600}/>
        </div>
    )
}

export default Intro;