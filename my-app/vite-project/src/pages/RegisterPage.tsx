import React, {useState}from 'react'




const RegisterPage = () => {
    const [form, setForm] = useState({
        username: '',
        email: ''
    })

    const onchangeHandler = (event:any) => {
        console.log(event.target)
        const {name, value} = event.target
        setForm({...form, [name]: value})
    }

    const onSubmitHandler = (event:any) => {
        event.preventDefault()
        console.log(form)
    }

  return (<>
    <div>RegisterPage</div>
    <form onSubmit={onSubmitHandler}>
        <input type="text" name="username" id="" value={form.username} onChange={onchangeHandler} />
        <input type="email" name="email" id="" value={form.email} onChange={onchangeHandler} />
    </form>
    <button type='submit'>Send</button>
    </>
  )
}

export default RegisterPage