import './App.css'
import Diabetes from './components/diabetes.js'
import Heart from './components/heart.js'
import Parkinsons from './components/parkinsons.js'
import { useState } from "react"

function App() {
  const [page, setPage] = useState("diabetes");

  return (
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

    </div>
  );
}

export default App;
