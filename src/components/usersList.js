import React from 'react';
import { useSelector } from 'react-redux';
import { getPersonalInfoState } from '../reducers/personal-info.reducer';

const UsersList = () => {

    const personalInfoState = useSelector(getPersonalInfoState);
    console.log('personalInfoState ', personalInfoState);
    const usersList = personalInfoState.users;

    

    const constructTableData = () => {
        if(!usersList.length) {
            return (
                <tr>
                    <td colSpan={2}> No Data Found</td>
                </tr>
            )
        }
        return usersList.map((user, i) => {
            return (
                <tr key={i}>
                    <td>{user?.firstName}</td>
                    <td>{user?.lastName}</td>
                    <td><button type="button">Remove</button></td>
                </tr>
            )
        })
    }

    return (
        <table style={{margin: "10px 20px", border: "1px solid #fff"}}>
            <thead>
                <tr>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {constructTableData()}
            </tbody>
        </table>
    )
}

export default UsersList;