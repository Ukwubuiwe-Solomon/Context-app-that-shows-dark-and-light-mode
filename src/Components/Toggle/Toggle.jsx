import React from 'react'
import { useContext } from 'react'
import { ThemeContext } from '../../Context'
import "./Toggle.css"

const Toggle = () => {
    const theme = useContext(ThemeContext)
    const handleClick = () => {
        theme.dispatch({type:"Toggle"})
    }

  return (
    <div className='t'>
        <div className="t-button" onClick={handleClick} style= {{left: theme.state.darkMode ? 0 : 25}}></div>

    </div>
  )
}

export default Toggle