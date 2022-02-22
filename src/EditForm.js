import React, { useState } from "react";

const EditTeamForm = props => {

    const [newInfo, setNewInfo] = useState(props.member);
    

    const addList = e => {
        setNewInfo({...newInfo, [e.target.name]: e.target.value 
        })
    };

    console.log(props.member)
    const hitSubmit = e => {
        let newObj = newInfo;
        let newObj2 = {...newObj, id: props.member[0].id};
        e.preventDefault();
        props.edit(newObj2);
    };

    return (
        <div className='editCont'>
        <h2 className='title'>Edit Member Form</h2>
        <form onSubmit={hitSubmit} className='edit'>
            <label htmlFor='name'>Name: </label>
            <input
                id='name'
                value={newInfo.name}
                name='name'
                type='text'
                onChange={addList}
                className='input'
            />
            <br></br>
            <label htmlFor='email'>email: &nbsp;</label>
            <input
                id='email'
                value={newInfo.email}
                name='email'
                type='text'
                onChange={addList}                
                className='input'
            />
            <br></br>
            <label htmlFor='role'>role: &nbsp;&nbsp;&nbsp;</label>
            <input
                id='role'
                value={newInfo.role}
                name='role'
                type='text'
                onChange={addList}
                className='input'
            />
            <br></br>
            <button className='button' type='submit'>Submit Changes</button>
            <button className='button' onClick={props.cancel}>Cancel</button>
        </form>
        </div>
    )
}

export default EditTeamForm;