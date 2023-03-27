import './App.css';

import { useState, useEffect } from 'react';


function App() {

  const [results, setResults] = useState([])
  const [model, setModel] = useState(false)


  const [query, setquery] = useState('')


  console.log(query)

  useEffect(() => {
    fetch("https://vehicle-info-api.onrender.com/vehicles", {
      headers: {
        'Acess-Control-Allow-origin': "*"
      }
    })
      .then((res) => res.json()).then(response => setResults(response))
      .catch(err => console.log(err))





  }, [])

  const clickHandler = (e) => {
    setModel(!model)
  }




  return (
    <div className="App">

      {model ?   <div className="modal">
          <div onClick={clickHandler} className="overlay"></div>
          <div className="modal-content">
            <h2>Tesla</h2>
            <p>
             
            </p>
            <button className="close-modal" onClick={clickHandler}>
              CLOSE
            </button>
          </div>
        </div>

      :<div>
      <div>
        <h2>VEHICLE MANUFACTURERS</h2>
      </div>
      <div className='input_filter'>
        <div>
          <h3>Search</h3>

          <input placeholder='search' onChange={(e) => setquery(e.target.value)} />
        </div>




        <div>
          <h3>filter By</h3>
          <select >

            <option>Passenger Car</option>
            <option>Trailer</option>
            <option>Low Speed Vehicle (LSV)</option>


          </select>
        </div>







      </div>
      <div>
        <table>
          <thead>
            <th>Name</th>
            <th>Country</th>
            <th>Type</th>
          </thead>

          <tbody>
            {results.filter(data => data.name.toLowerCase().includes(query)).map((data, index) => {


              return (
                <tr onClick={clickHandler} key={index}>
                  <td >{data.name}</td>
                  <td>{data.country}</td>
                  <td>{data?.type}</td>


                </tr>

              )





            })}

          </tbody>
        </table>
      </div>


        </div>}
      </div>
  );
}

export default App;
