import React from 'react'

type Greetingparams = {
    firstName: String,
    lastName:String,
    age?: Number

}
const Greeting = ({firstName, lastName, age=3} : Greetingparams) =>{
    return <>
    <>Hello {firstName} {lastName}, you young wanpaman, </>
    <br></br>
    <>You've been here for {age} years it's time to go </>
    </>
}

export default Greeting