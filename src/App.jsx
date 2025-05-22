import{useState} from 'react'
import './App.css'

function App() {
  
  const[value, setValue]=useState(0);
  

  return (

    <>
   <h1>Count {value}</h1>
   <button onClick={()=>{
    setValue(value+1);
   }

   }>add</button>
   <button onClick={()=>{
    setValue(value-1)
   }}>subtract</button>
   <button onClick={()=>{
    setValue(0);
   }}>reset</button>
    </>
    )
}

export default App
