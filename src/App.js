import React, { useEffect, useState } from 'react'
import './App.css';
import Header from './Header';
import { 
  BrowserRouter as Router, 
  Routes, 
  Route, 
  Navigate } 
  from 'react-router-dom';
import Menu from './Menu'
import HeaderBlock from './HeaderBlock';
import Login from './Login';
import { useDispatch, useSelector } from 'react-redux'
import { login,logout,selectUser } from './features/userSlice'
import Signup from './Signup'
import TeslaAccount from './TeslaAccount'
import { auth } from './firebase'

function App() {
  const user= useSelector(selectUser)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const dispatch= useDispatch()
  useEffect(() => {

    auth.onAuthStateChanged((userAuth)=>{
      if(userAuth){
        dispatch(login({
          email: userAuth.email,
          uid: userAuth.uid,
          displayName: userAuth.displayName
        }))
      }
      else{
        dispatch(logout())
      }
    })

  },[dispatch])
  
  
  return (
<Router>
      <div className="app">
  <Routes>
      <Route path='/' element={
      <>
        <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
          {isMenuOpen && <Menu />}
        <HeaderBlock />
      </>
      } />  
      <Route path='/login' element={
        user ? <Navigate to='/teslaaccount' /> : <Login />
      } />
      <Route path='/signup' element={<Signup />} />
      <Route path='/teslaaccount' element=
      
      {!user ? <Navigate to='/login' /> :
      <>
        <TeslaAccount isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
        {isMenuOpen && <Menu />}
      </>
      } />
  </Routes>
      </div>
</Router>
  );
}

export default App;
