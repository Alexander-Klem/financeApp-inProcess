import { Formik, Form, Field, ErrorMessage as FormikErrorMessage } from 'formik';
import * as Yup from 'yup';

const AddExpenseForm = ({ budgets }) => { 
    return (
        <div className="form-wrapper">
            <h2 className="h3">
                Add New{' '} 
                <span className="accent">{budgets.length === 1 && `${budgets.map((budg) => budg.name)}`}</span>{' '}
                Expense
            </h2>
            <Formik
                initialValues={{
                    newExpense: '',
                    newExpenseAmount: '',
                    newExpenseBudget: '',
                }}
            
                validationSchema={Yup.object({
                    newExpense: Yup.string()
                        .min(2, 'Minimum 2 symbols')
                        .required('This field is required'),
                    newExpenseAmount: Yup.number()
                        .min(2, 'Minimum 2 symbols')
                        .required('This field is required'),
                    newExpenseBudget: Yup.string()
                        .min(2, 'Minimum 2 symbols')
                        .required('This field is required'),
                })}>
                <Form>
                    {/* <div className="expense-inputs"> */}
                        <div className="grid-xs">
                            <label htmlFor="newExpense">Expense Name</label>
                            <Field
                                id='newExpense'
                                name='newExpense'
                                type='text'
                                placeholder="e.g., Coffee"
                                />
                        </div>
                        
                    
                    <div className="grid-xs">
                            <label htmlFor="newExpenseAmount">Amount</label>
                            <Field
                                step="0.01"
                                id="newExpenseAmount"
                                name="newExpenseAmount"
                                type="number"
                                placeholder="e.g., 3.50$"
                                />
                        </div>
                    {/* </div> */}
                    <div className="grid-xs">
                        <label htmlFor='newExpenseBudget'>Budget Category</label>
                        <select name='newExpenseBudget' id='newExpenseBudget'></select>
                    </div>
                </Form>
            </Formik>
        </div>
    )
}

export default AddExpenseForm;