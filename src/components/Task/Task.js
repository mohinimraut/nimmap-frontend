import React, { useState, useEffect } from 'react';
import { Typography, Button, TextField, Checkbox, FormGroup, FormControlLabel } from '@mui/material';

import { v4 as uuidv4 } from 'uuid';
import axios from 'axios'




import "./Task.scss";


const Task = () => {
  const [initialList, setInitialList] = useState([]);
  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/todos")
      .then((res) => setInitialList(res.data))

  }, []);
  // const initialList = [
  //   {
  //     id: 'a',
  //     title: 'Robin',
  //     comvalue:false
  //   },
  //   {
  //     id: 'b',
  //     title: 'Dennis',
  //     comvalue:true
  //   },
  // ];
  // const [list, setList] = React.useState(initialList);
  // const [name, setName] = React.useState('');
  const [comvalue, setComvalue] = React.useState('fruit');

  const [inputs, setInputs] = useState({
    id: "",
    title: "",
    // comvalue:"",

  })

  const options = [
    { label: 'select', value: 'select' },
    { label: 'True', value: 'true' },
    { label: 'False', value: 'false' },
  ];

  const handleChange = (e) => {

    setInputs((prevState) => (
      {
        ...prevState,
        [e.target.name]: e.target.value
      }
    ))
    setComvalue(e.target.value)
  }

  function handleAdd() {
    const { title } = inputs;

    const newList = initialList.concat({ title, id: uuidv4(), comvalue });
    setInitialList(newList);


  }
  const deteteData = (id) => {
    alert("Removed task..")
    var newdata = initialList.filter(myData => myData.id !== id);
    setInitialList(newdata)
  }


  return (
    <div className='tContainer'>
      <div className="tUserAdddiv">
        <h1>Task List</h1>


      </div>
      <div style={{display:"flex",justifyContent:'space-around',
      alignItems:"center",width:"60%",marginTop:"20px",
      marginBottom:"20px",borderBottom:"2px solid gray",textAlign:"center"}}>
        <input type="text" name="title" value={inputs.title} onChange={handleChange} placeholder="Add task" />
        <Dropdown
          label="Completed?"
          options={options}
          name="completed"
          value={comvalue}
          onChange={handleChange}
        />

        <Button className="tDelateBtn" variant="contained" color="info" type="button" onClick={handleAdd}>
          Add
        </Button>
      </div>
      <div className='tdata'>
        <ul>

          {initialList.map((todo) => (
            <>
              <div style={{marginBottom:"20px"}}>
              <li key={todo.id}><span>{todo.id}</span><span style={{marginLeft:"10px"}}>{todo.title}</span> <span style={{marginLeft:"10px"}}>{todo.comvalue}</span></li>
              <Button className="tDelateBtn" variant="contained" color="error"
                onClick={() => deteteData(todo.id)}
              >Delete</Button>
              
              </div>
             
            </>

          ))}
        </ul>
      </div>
    </div>
  );
};


const Dropdown = ({ label, value, options, onChange }) => {

  return (

    <label>

      {label}

      <select value={value} onChange={onChange}>

        {options.map((option) => (

          <option value={option.value}>{option.label}</option>

        ))}

      </select>

    </label>

  );

};
export default Task;