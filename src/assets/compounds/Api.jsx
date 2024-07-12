import axios from 'axios'
import React from 'react'

import { useEffect,useState } from 'react'

function Api() {



    // const[myData,mySetData] = useState([
    //     { id: 1, title: 'Task 1', description: 'Description 1', completed: false },
    //     { id: 2, title: 'Task 2', description: 'Description 2', completed: true },
    //     { id: 3, title: 'Task 3', description: 'Description 3', completed: false },
    //     { id: 4, title: 'Task 4', description: 'Description 4', completed: true },
    //     { id: 5, title: 'Task 5', description: 'Description 5', completed: false },
    //     { id: 6, title: 'Task 6', description: 'Description 6', completed: true },
    //     { id: 7, title: 'Task 7', description: 'Description 7', completed: false },
    //     { id: 8, title: 'Task 8', description: 'Description 8', completed: true },
    //     { id: 9, title: 'Task 9', description: 'Description 9', completed: false },
    //     { id: 10, title: 'Task 10', description: 'Description 10', completed: true }
    // ])

    const[data,setData] = useState([]);
    const [displayData,setDisplayData] = useState([]);
    const [editIndex, setEditIndex] = useState(null);
    const [editName, setEditName] = useState('');
    const [editPopulation, setEditPopulation] = useState('');

    useEffect(() => {
 fetchData()
    },[])

    const fetchData = async () => {

    //    try {
    //     const res = await fetch("https://restcountries.com/v3.1/all");

    //     const jsonData = await res.json()
    //     console.log(jsonData);

    //     setData(jsonData)
    //    } catch (error) {
    //     console.log(error.message);
    //    }

       await axios.get("https://restcountries.com/v3.1/all").then(res => {
        console.log(res.data);
        setData(res.data)
       }).catch(error => {
        console.log(error);
       })

    }

    const addLogic = () => {

        // const newAdd = {...data,id: data.length+1};

        // console.log(newAdd.id);

      setDisplayData(data)

    }
    const removeLogic = () => {

      setDisplayData([])

    }
    function removeItem(index) {
        console.log("remove from card no : ", index);
        const newData = displayData.filter((_, i) => i !== index);
        setDisplayData(newData);
      }


      const startEdit = (index) => {
        setEditIndex(index);
        setEditName(displayData[index].name.common);
        setEditPopulation(displayData[index].population);
      };
    
      const saveEdit = () => {
        const updatedData = displayData.map((item, index) =>
          index === editIndex ? { ...item, name: { common: editName }, population: editPopulation } : item
        );
        setDisplayData(updatedData);
        setEditIndex(null);
        setEditName('');
        setEditPopulation('');
      };
    
  return (
    <div className="container">
    <h1>API</h1>
    <button className="btn btn-primary mb-3" onClick={addLogic}>Add</button>
    <button className="btn btn-danger mb-3" onClick={removeLogic}>Remove</button>
    <div className="row">
      {displayData.map((element, index) => (
        <div key={index} className="col-md-4">
          <div className="card mb-4">
            <div className="card-body">
              {editIndex === index ? (
                <div>
                  <input
                    type="text"
                    value={editName}
                    onChange={(e) => setEditName(e.target.value)}
                    className="form-control mb-2"
                  />
                  <input
                    type="number"
                    value={editPopulation}
                    onChange={(e) => setEditPopulation(e.target.value)}
                    className="form-control mb-2"
                  />
                  <button className="btn btn-success" onClick={saveEdit}>Save</button>
                </div>
              ) : (
                <div>
                  <h5 className="card-title">Name: {element.name.common}</h5>
                  <p className="card-text">Population: {element.population}</p>
                  <button className="btn btn-warning me-2" onClick={() => startEdit(index)}>Edit</button>
                  <button className="btn btn-danger" onClick={() => removeItem(index)}>Delete</button>
                </div>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
  )
 
}

export default Api