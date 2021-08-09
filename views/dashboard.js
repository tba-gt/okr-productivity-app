import React, {useState} from 'react';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
  integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC"
  crossorigin="anonymous"
/>

const Dashboard = () => {
  const [formLog, setFormLog] = useState('') // to store single current okr object
  const [formLogs, setFormLogs] = useState([]) // to store all okr objects

  function handleChange(e){ // update current okr constantly as the user types into the form 
    setFormLog(e.target.value)
  }
  function handleSubmit(e){ // add current okr to list of okrs once form is submitted
    e.preventDefault()
    setFormLogs([...formLogs, formLog])
    alert('OKR has been submitted:'+ formLog )
  }
  function OKR(okr){ // displays single okr
    return(
      <div>
        <Box component="span" m={1}>
          {log}
          <Button />
        </Box>
      </div>
    )
  }
  function display(arr){ // displays all okrs
    return(
      <div>
        {arr.map((log,index)=>(
          <div key={index}>
            <OKR okr={log}/>
          </div>
        ))}
      </div>
    )
    
  }

  return (    
      <div>
          <h1>OKR Dashboard</h1>
          <br/>
          <form onSubmit={handleSubmit}> // ! have to change specific URL to connect to backend
            <input type="text" placeholder="OKR" value={formLog} onChange = {handleChange}/>
            <input type="submit" value="Add OKR"/>
          </form>
          <h3>{display(formLogs)}</h3>
      </div>
  )
  };

export default Dashboard;
