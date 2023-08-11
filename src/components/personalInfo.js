import React from 'react';
import { useFormik } from 'formik';
import { useDispatch } from 'react-redux';
import { personalInfoActions } from '../reducers/personal-info.reducer';

const PersonalInfo = () => {

    const dispatch = useDispatch();

    const formik = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            rememberMe: false
        },
        validate: (data) => {
            const error = {};
            if(!data) {
                error.firstName = "First Name required";
                error.lastName = "Last Name required";
            }

            if(!data.firstName) {
                error.firstName = "First Name required";
            }

            if(!data.lastName) {
                error.lastName = "Last Name required";
            }
            return error;
        },
        onSubmit: (data) => {
            dispatch(personalInfoActions.addUserInfo(data))
        }
    })

    return (
        <form action={formik.handleSubmit}>
            <div>
                <label>First Name &nbsp;</label>
                <input type="text" id="firstName" name="firstName" onChange={formik.handleChange} onBlur={formik.handleBlur} />
            </div>
            <div>
                <label>Last Name &nbsp;</label>
                <input type="text" id="lastName" name="lastName" onChange={formik.handleChange} onBlur={formik.handleBlur} />
            </div>
            <div>
                <label>Remember me &nbsp;</label>
                <input type="checkbox" id="rememberMe" name="rememberMe" checked={formik.values.rememberMe} onChange={formik.handleChange} onBlur={formik.handleBlur} />
            </div>
            <div>
                <button id="submit" type="submit" onClick={formik.handleSubmit} disabled={Object.keys(formik.errors).length}>Submit</button>
            </div>
        </form>
    )
}

export default PersonalInfo;