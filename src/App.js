import './App.css'
import { FormMain } from './components/FormMain'
import { Sidebar } from './components/Sidebar'
import Diabetes from './components/diabetes.jsx'
import Heart from './components/heart.jsx'
import Parkinsons from './components/parkinsons.jsx'
import { useState } from "react"

function App() {
  const [page, setPage] = useState("diabetes");

  return (
    < div className='App'>
     
      <Sidebar setPage={setPage}/>
      <FormMain page={page}/>


      {/* <div className='main-heading'>
        <h1>This is a Disease Prediction device</h1>
        <p>type your data in the feilds nd get about know your disease</p>
        </div>
        <div className='root'>
        
        <nav className='root1'>
        <ul>
        <li>
        <button onClick={() => setPage('diabetes')} value="diabetes">
        Diabetes Prediction
        </button>
        </li>
        <li>
        <button onClick={() => setPage('heart')} value="heart">
        Heart disease Prediction
        </button>
        </li>
        <li>
        <button onClick={() => setPage('parkinsons')} value="parkinsons">
        Parkinsons Prediction
        </button>
        </li>
        </ul>
        </nav>
        
        <main className='root2'>
          <div>
          {page === "diabetes" && <Diabetes />}
            {page === "heart" && <Heart />}
            {page === "parkinsons" && <Parkinsons />}
          </div>
        </main>
        
      </div> */}
      </div>
      
      );
}

export default App;
