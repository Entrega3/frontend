import './App.css';
import Landing from './components/landing';
import Contacto from './components/contacto';
import { Routes, Route } from "react-router-dom"

export default function App() {
  return (
    <Routes>
        <Route path="/" element={ <Landing /> } />
        <Route path="contacto" element={ <Contacto /> } />
      </Routes>
  )
}
