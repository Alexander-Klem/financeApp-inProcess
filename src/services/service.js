import generateRandomColor from "../functions/generateRandomColor";
const service = () => { 
    const fetchData = (key) => { 
        return JSON.parse(localStorage.getItem(key));
    }

    const getBudget = (key) => { 
       return JSON.parse(localStorage.getItem(key)); 
    }

    const deleteItem = ({ key }) => { 
        return localStorage.removeItem(key)
    }

    const deleteBudget = ({ key }) => { 
        return localStorage.removeItem(key)
    }

    const setItem = (key, value) => { 
        return localStorage.setItem(key, JSON.stringify(value));
    }

    const createBudget = ({ name, amount }) => { 
        const newItem = {
            id: crypto.randomUUID(),
            name: name,
            createdAt: Date.now(),
            amount: +amount,
            color: generateRandomColor()
        }
        const existingBudgets = fetchData("budgets") ?? [];
        return localStorage.setItem("budgets", JSON.stringify([...existingBudgets, newItem]))
    }


    
    return {
        fetchData,
        deleteItem,
        setItem,
        createBudget, 
        getBudget,
        deleteBudget
    }
}

export default service;

