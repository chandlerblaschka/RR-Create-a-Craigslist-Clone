// Import data
import Gallery from './gallery'
import Directory from './directory';
import sideBar from './sideBar';
import searchBar from './searchBar';

// Import components
import './App.css';

function App() {
  return (
    <div>
      <h1>craigslist</h1>
      <div className="App">
        {<searchBar />}
        {<Gallery />}
      </div>
    </div>
  );
}

export default App;




// import Menu from './Menu.js'
    
// function App(){
//     let food = "noodles"
//     return (
//         <div>
//             <h1>Super Cool Noodle Shop</h1>
//         <Menu items={food}/>
//         </div>
//     )
// }

//USE STATE
// import { useState } from 'react'

// function Form(){
//     let [ color, setColor ] = useState('blue')
//     return (
//         <div style={{backgroundColor: color}} >
//             <select value={color} onChange = {e => setColor(e.target.value)}>
//                 <option>blue</option>
//                 <option>red</option>
//                 <option>green</option>
//                 <option>purple</option>
//             </select>
//         </div>
//     )
// }
