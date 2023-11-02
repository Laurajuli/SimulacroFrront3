import { useState } from 'react'
import './App.css'
import lista from './Components/lista'

function App() {
  const [search, setSerch] = useState('')
    let doctores = [
    { id: 1, nombre:'Rick Sanchez', especialidad: 'Gastrenterologo'},
    { id: 2, nombre:'Julius Hibbert', especialidad: 'Dermatologo'},
    { id: 3, nombre:'Nick Riviera', especialidad: 'Otorrinolaringologoo'},
    { id: 4, nombre:'John Zoidedberg', especialidad: 'Cirujano'},
  ]
  const handleChange = (event)=> setSearch(event.target.value)
  const handleSearch = () => {
  const filteredDocs = doctores.filter(doctor => doctor.nombre.includes(search))
  console.log(filteredDocs)

}
  return (
    <>
      <input type="text" placeholder='Busqueda' onChange={handleChange}/>//setSearch
      <button onClick={handleSearch}>🎾</button>
      <Lista doctores={doctores} />
      {search}
      </>  
    
  )
}

export default App
