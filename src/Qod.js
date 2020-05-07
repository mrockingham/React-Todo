import React from 'react'

const Qod = props =>{

    const {Qods} = props

    return(

        <div>
            <h2>Quote of the day</h2>
            <h3>{Qods.quote}</h3>

        </div>
    )
}

export default Qod