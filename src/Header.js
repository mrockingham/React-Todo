import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Qod from './Qod'

const Header =() =>{
    const [quotes,setQuotes] =useState([])
    
    useEffect(()=>{
      axios.get('https://quotes.rest/qod')
      .then(response =>{
        setQuotes(response.data.contents.quotes)
        console.log('what am i looking at',response)
      })
      .catch(error =>{
        console.log(error)
    })
    },[])
    return(
        <div>
            {quotes.map (Qods =>(
              <Qod Qods ={Qods} />

            ))}
        </div>
    //    console.log('what am i looking at two',quotes.data) 
    )
    
      }

export default Header