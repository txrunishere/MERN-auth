import { useState } from "react";
import axios from 'axios'
import { toast } from 'react-toastify'
import { useNavigate } from "react-router";

export default function Login() {
  const [data, setData] = useState({
    email: '',
    password: ''
  })
  const navigate = useNavigate()

  const handleLogin = async () => {
    try {
      const { email, password } = data
      const res = await axios.post('/login', {
        email,
        password
      })
      toast.success(res.data.message)
      navigate('/')
    } catch (error) {
      console.log("E", error);
      toast.error(error.response.data.error);
    }
  }

  const handleForm = (e) => {
    e.preventDefault();
    handleLogin()
  };

  return (
    <div className="flex gap-8 mt-[200px] items-center justify-center">
      <h1 className="text-2xl font-medium">Login</h1>
      <div>
        <form className="flex flex-col gap-4" onSubmit={handleForm}>
          <input
            className="outline-none border border-gray-500 rounded-full px-2 py-1"
            type="email"
            placeholder="Enter email"
            value={data.email}
            onChange={e => setData({...data, email: e.target.value})}
          />
          <input
            className="outline-none border border-gray-500 rounded-full px-2 py-1"
            type="password"
            placeholder="Enter password"
            value={data.password}
            onChange={e => setData({...data, password: e.target.value})}
          />
          <button
            className="cursor-pointer shadow-2xl bg-black rounded-full py-1"
            type="submit"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
