import { Formik, Form, Field, ErrorMessage as FormikErrorMessage } from 'formik';
import * as Yup from 'yup';

import './addBudgetForm.scss';
import { CurrencyDollarIcon } from '@heroicons/react/24/solid';
import service from '../../services/service';
import { toast } from 'react-toastify';

const AddBudgetForm = ({handleBudget}) => {
    const { createBudget } = service();

    return (
        <div className="form-wrapper">
            <h2 className="h3">
                Create budget
            </h2>
            <Formik
                initialValues={{
                    userBudget: '',
                    budgetName: '',
                }}
                
                validationSchema={Yup.object({
                    budgetName: Yup.string()
                        .min(2, 'Minimum 2 symbols')
                        .required('This field is required'),
                    userBudget: Yup.number()
                        .min(3, 'Minimum amount is 3 numbers')
                        .required('This field is required')
                })}
                
                // async
                onSubmit={ (values, { resetForm} ) => {
                    console.log(values);
                        // await new Promise (res => setTimeout(res, 2000))
                    createBudget({
                        name: values.budgetName,
                        amount: values.userBudget,
                    })
                    toast.success('Budget Created');
                    resetForm();
                    handleBudget();
                }}>
                {({isSubmitting}) => (
                    <Form>
                    <div className='grid-xs'>
                        <label htmlFor="budgetName">Budget Name</label>
                        <Field
                            type='text'
                            name='budgetName'
                            id='budgetName'
                            required
                            placeholder='e.g., Groceries'
                            />
                        
                        <FormikErrorMessage
                            component='div'
                            className="budgetName__search-error"
                            name="budgetName" />
                        
                    </div>
                    <div className="grid-xs"> 
                        <label htmlFor='amount'>Amount</label>
                         
                        <Field
                            type="number"
                            name="userBudget"
                            id='userBudget'
                            required
                            placeholder='e.g., 350$'
                            inputMode='decimal'
                            />

                        <FormikErrorMessage
                            component='div'
                            className="userBudget__search-error"
                            name="userBudget" />
                    </div>
                    <button
                        type="submit"
                        className="btn btn--dark"
                        disabled={isSubmitting}> 
                            {isSubmitting ?
                                <span >Submitting</span> : 
                                <>
                                <span >Create Budget</span>
                                <CurrencyDollarIcon width={20} />
                                </>}
                        
                        </button>
                        
                    </Form>
                )}
                </Formik>
        </div>
    )
}

export default AddBudgetForm;