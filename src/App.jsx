import { useState } from 'react'
import './App.css'
import FormInput from './components/FormInput'

function App() {


  // set states
  const [values, setValues] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: ""
  });

 //const emailRegex =  /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/i/;
  // inputs Data
  const inputs = [
    {
      id: 1,
      name: "username",
      type: "text",
      placeholder: "Username",
      label: "Username",
      errorMsg:"Username should be 3-16 characters and should not include any special characters",
      icon:"mail-outline",
      required: true,
      pattern:"^[A-Za-z0-9]{3,16}$"
    },
    {
      id: 2,
      name: "email",
      type: "email",
      placeholder: "Email",
      label: "Email",
      errorMsg:"It should be a valid email address",
      icon:"people-outline",
      required: true,
      pattern:`^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$` ,
    },
    {
      id: 3,
      name: "password",
      type: "password",
      placeholder: "Password",
      label: "Password",
      errorMsg:"should be 8-20 characters and include at least 1 letter, 1 number and 1 special character",
      icon:"lock-closed-outline",
      required: true,
      pattern:`^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
    },
    {
      id: 4,
      name: "confirmPassword",
      type: "password",
      placeholder: "Confirm Password",
      label: "Confirm Password",
      errorMsg:"password do not match!",
      icon:"time-outline",
      required: true,
      pattern:values.password,
    }
  ];

  // const usernameRef = useRef();
  const handleSubmit = (e) => {
    e.preventDefault();
  }

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value })
  }

  return (

    <div className='w-screen h-screen
      flex justify-center overflow-x-hidden
      items-center
    bg-[#fbcfe8]'>

      <form
        onSubmit={handleSubmit}
        className=' py-4 rounded-xl 
       lg:w-[20%] md:w-[40%] sm:w-[40%] max-sm:w-[50%]
          shadow-2xl
        bg-[#fdecf6]
         flex flex-col
          justify-center items-center'>
        <header className='flex h-[10%] p-2
        justify-center items-center'>
          <button className='text-[#7e22ce] 
           px-6 py-1 m-1' disabled>
            Sign in
          </button>
          <button className='bg-[#7e22ce] 
          text-white px-6 py-1 rounded m-1'>
            Sign in
          </button>
        </header>
        <main className='flex flex-col
        justify-center items-center'>
          {inputs.map((input) => (
            <FormInput
              key={input.id}
              {...input}
              value={values[input.name]}
              onChange={onChange} />
          ))}
          <button type='submit' className='
          flex justify-center items-center
           w-[90%] mt-8 py-1 rounded-lg
           text-white bg-[#7e22ce]'>Sign up</button>
        </main>
      </form>
    </div>

  )
}

export default App
