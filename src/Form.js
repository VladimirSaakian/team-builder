import React, { useState } from "react";

const TeamForm = props => {

    const [newMember, setNewMember] = useState({name:'', email:'', role:'', id:null});

    const addList = e => {
        setNewMember({...newMember, [e.target.name]: e.target.value })
    };

    const hitSubmit = e => {
        e.preventDefault();
        props.addMember(newMember);
        setNewMember({name:'', email:'', role:'', id:null});
    };

    return (
        <div className='formCont'>
        <h2 className='title'>Add New Member Form</h2>
        <form onSubmit={hitSubmit} className='form'>
            <label htmlFor='name'>Name: </label>
            <input
                id='name'
                value={newMember.name}
                name='name'
                type='text'
                onChange={addList}
                className='input'
            />
            <br></br>
            <label htmlFor='email'>email: &nbsp;</label>
            <input
                id='email'
                value={newMember.email}
                name='email'
                type='text'
                onChange={addList}
                className='input'
            />
            <br></br>
            <label htmlFor='role'>role: &nbsp;&nbsp;&nbsp;</label>
            <input
                id='role'
                value={newMember.role}
                name='role'
                type='text'
                onChange={addList}
                className='input'
            />
            <br></br>
            <button className='button' type='submit'>Add Member</button>
        </form>
        </div>
    )
}

export default TeamForm;