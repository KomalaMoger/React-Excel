import './App.css'
import {CSVLink} from 'react-csv'

const headers=[
  {label:'userId',key:'id'},
  {label:'userName',key:'name'},
  {label:'userLocation',key:'city'}
]

const users=[
  {id:1,name:'Nisha',city:'Delhi'},
  {id:2,name:'mamata',city:'mysore'},
  {id:3,name:'raju',city:'bangalore'},
  {id:4,name:'sneha',city:'Noida'}
]

function App() {
  return (
    <div className="App">
      <h1>React CSV Example</h1>
      <CSVLink data={users} headers={headers}>
      <button>Export Users Data</button>
      </CSVLink>
     
    </div>
  );
}

export default App;
