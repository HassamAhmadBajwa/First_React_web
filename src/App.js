import './App.css'
import List from './List'
import Data from './Data'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import React, { useState } from 'react'

function App() {
  const [people, setPeople] = useState(Data)
  const Remove = () => {
    setPeople([]);
  }
  return (
    <>
      <section className='header'>
        <main className='container'>
          <div className='row'>
            <div className='col-6'>
              <div className='bg-white text-center content'>
                <h4 className='text-capitalize'>{people.length} birthday today</h4>
                <List people={people} />
                <button className='btn bg-dark text-white clear-btn' onClick={Remove}>Remove All</button>
              </div>
            </div>
          </div>
        </main>
      </section>
    </>
  );
}

export default App;
