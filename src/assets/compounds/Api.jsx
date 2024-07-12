import axios from 'axios'
import React from 'react'

import { useEffect,useState } from 'react'

function Api() {

    const[data,setData] = useState([]);

    const[myData,mySetData] = useState([
        { id: 1, title: 'Task 1', description: 'Description 1', completed: false },
        { id: 2, title: 'Task 2', description: 'Description 2', completed: true },
        { id: 3, title: 'Task 3', description: 'Description 3', completed: false },
        { id: 4, title: 'Task 4', description: 'Description 4', completed: true },
        { id: 5, title: 'Task 5', description: 'Description 5', completed: false },
        { id: 6, title: 'Task 6', description: 'Description 6', completed: true },
        { id: 7, title: 'Task 7', description: 'Description 7', completed: false },
        { id: 8, title: 'Task 8', description: 'Description 8', completed: true },
        { id: 9, title: 'Task 9', description: 'Description 9', completed: false },
        { id: 10, title: 'Task 10', description: 'Description 10', completed: true }
    ])

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

  return (
    <div>
        <h1>API</h1>
        {/* <h1 style={{color: 'green'}}>{myData}</h1> */}
        {
            myData.map(e => {
                console.log(e.title);
                return(
                    <div className='card'>
                        <p>{e.title}</p>
                    </div>
                )
            })
        }
        {
            data.map((element,index) => {
                // console.log(element.name.common);
                // console.log(index);
                return(
                    <div key={index} className='card'>
                        <h1>Name :  {element.name.common}</h1>
                        <h1>Population :  {element.population}</h1>
                    </div>

                )
            })
        }
    </div>
  )
}

export default Api