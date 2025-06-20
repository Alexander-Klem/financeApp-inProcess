import { useCallback, useContext, useState } from 'react';
import { useEffect } from 'react';
import Intro from "../components/Intro/Intro";
import { toast } from 'react-toastify';
import service from '../services/service';
import UserData from '../components/userData/userData';
import AddBudgetForm from '../components/AddBudgetForm/AddBudgetForm';
import AddExpenseForm from '../components/AddExpenseForm/AddExpenseForm';

const Dashboard = () => {
    const { userName } = useContext(UserData)
    const { setItem, fetchData, getBudget } = service();
    // const budgets = getBudget("budgets") || [];
    const [budgets, setBudgets] = useState([]);

    useEffect(() => {
        console.log('Dashboard useEffect')
        if (userName && fetchData('userName') !== userName) {
            console.log('Dashboard if')
            setItem("userName", userName);
            toast.success(`welcome, ${userName}`)
        }
    }, [userName]);

    useEffect(() => {
    const storedBudgets = getBudget("budgets") || [];
    setBudgets(storedBudgets);
}, []);

    const handleBudget = () => { 
        console.log('usecallback budget')
        const updateBudget = getBudget("budgets") || [];
        setBudgets(updateBudget);
    }

    console.log('Dashboard')

    return (
        <>
            {userName ? 
                <div className="dashboard">
                    <h1>Welcome back, <span className='accent'>{userName}</span> </h1>
                    
                    
                    <div className="grid-sm">
                        { budgets && budgets.length > 0 ? (
                            <div className="grid-lg">
                                <div className="flex-lg">
                                    <AddBudgetForm handleBudget={handleBudget} />
                                    <AddExpenseForm budgets={budgets} />
                                </div>
                            </div>) : (
                                <div className="grid-sm">
                                    <p>Personal budgeting is the secret to financial freedom</p>
                                    <p>Create a budget to get started!</p>
                                    <AddBudgetForm handleBudget={handleBudget}/>
                                </div>)
                        }
                    </div>
                </div>
            : <Intro />}
        </>
    )
};

export default Dashboard;