import { createContext, useEffect, useState } from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import './App.css'
import { BrowserRouter, Routes,Route } from 'react-router-dom'
import Home from './pages/home'
import Header from './components/header'
import axios from 'axios'
import Footer from './components/footer'

const MyContext = createContext();


function App() {
  const [countryList,setCountryList] = useState([]);
  const [selectedCountry,setSelectedCountry] = useState('');
  useEffect(()=>{
    getCountry("https://countriesnow.space/api/v0.1/countries")
  },[]);


  const getCountry = async url=>{
    const response = await axios.get(url).then(res=>{
      setCountryList(res.data.data);
      console.log(res.data.data);
    })
  }
  const values = {
    countryList,
    setCountryList,
    setSelectedCountry,
    selectedCountry,
  }

  return (
    <BrowserRouter>
      <MyContext.Provider value={values}>
        <Header />
        <Routes>
          <Route path="/" exact={true} element={<Home />} />
        </Routes>
        <Footer/>
      </MyContext.Provider>
    </BrowserRouter>
  )
}

export default App
export {MyContext}
