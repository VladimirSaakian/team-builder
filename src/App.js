import React, {useState} from 'react';
import './App.css';
import TeamForm from './Form';
import EditTeamForm from './EditForm';


function App() {
  const [team, setTeam] = useState([
    {
      name: '',
      email: '',
      role: '',
      id: 0
    },
    {
      name: '',
      email: '',
      role: "",
      id: 1
    },
    {
      name: '',
      email: '',
      role: '',
      id: 2
    }
  ])

  const addMember = info => {
    const newMember = {
      name: info.name,
      email: info.email,
      role: info.role,
      id: team.length
    };
    setTeam([...team, newMember]);
    console.log(team)
  };

  const [member, setMember] = useState([]);
  const [edit, setEdit] = useState(false);

  const selectEdit = (button) => {
    setEdit(true);
    let id = Number(button.target.value);
    const arr = team.filter(i => {
      return(i.id === id)
    });
    setMember(arr);
  };

  const editMember = info => {
    console.log(info);
    let newArray = team.filter(i => i.id !== info.id)
    console.log(newArray);
    const update = {
      name: info.name,
      email: info.email,
      role: info.role,
      id: team.length
    };
    setTeam([...newArray, update]);
    setEdit(false);    
  }

  const cancelEdit = () => {
    setEdit(false);
  };
  
  return (
    <div className="App"> 
      <div className='teamList'>
        <h1 className='team'> Team </h1>
        <div className='cards'>
          {team.map(data => {
            return(
            <div className='memberInfo'>
              <p>{data.name}</p>
              <p>{data.email}</p>
              <p>{data.role}</p>
              <button value={data.id} onClick={selectEdit}>Edit</button>
            </div>
          )})}
          </div>
        </div>
      {edit === true ? <EditTeamForm cancel={cancelEdit} member={member} edit={editMember}/> : <TeamForm addMember={addMember}/>}
      <div></div>
    </div>
  );
}


export default App;