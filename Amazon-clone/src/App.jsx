import { useEffect, useState,useContext } from 'react'
import './App.css'
import Routing from './Router'
import { DataContext } from './Components/DataProvider/DataProvider'
import {Type} from "../src/Components/utility/action.type"
import {auth} from "./Components/utility/firebase"

function App() {
  const[{user},dispatch] = useContext(DataContext)
  useEffect(()=>{
    auth.onAuthStateChanged((authUser)=>{
      if(authUser){
        console.log(authUser);
        dispatch({
          type:Type.SET_USER,
          user:authUser
        })
      }
      else{
        dispatch({
          type:Type.SET_USER,
          user:null
        })
      }
    })
  },[])

  return (
    <>
    <Routing/>
    </>
  )
}

export default App
