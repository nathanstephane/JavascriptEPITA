import React, {useState} from 'react'


const Button = () => {
    const [counter, setCount] = useState(0)
    const onClickHandler = (event) =>{
     setCount(counter+1)
    }
  return (<>
    <div>{counter}</div>
    <button onClick={onClickHandler}>Ajouter</button>
    </> )
}

export default Button