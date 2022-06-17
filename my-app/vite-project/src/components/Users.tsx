import React, { useEffect, useState } from 'react'

type Users = {
    id:number
    name:string

}



const Users = () => {

  
    const [users, setUser] = useState([])
    useEffect(()=>{
        const getUsers = async()=>{
            const res = await fetch('https://jsonplaceholder.typicode.com/users')
            const respJson = await res.json()
            console.log('Fetcher')
            console.log(respJson) //stpd
            setUser(respJson)
        }
        getUsers()
    }, [])
  return (<>
  

    <div>Users list</div>
    <ul>

        {users && users.map((users, index)  => 
        <li key={`users-${index}`}>{ users.name }</li>)}
    </ul>
    </>
  )
}

export default Users