import './App.css'

function App(){
  const datum = new Date()
  const a = 10
  const b = 20
 
  return (
  <div>
  <p>Dobar dan React, danas je {datum.toString()}</p>
  <p className='izracun'>
  {a} plus {b} je {a + b}
  </p>
  </div>
  )
 }
 
export default App
