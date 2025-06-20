import service from "../services/service";

const generateRandomColor = () => { 
    const { fetchData } = service();
    const existingBudgetsLength = fetchData("budgets")?.length ?? 0;
    return `${existingBudgetsLength * 34} 65% 50%`
}

export default generateRandomColor;