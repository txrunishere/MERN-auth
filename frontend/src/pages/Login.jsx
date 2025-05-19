import { useState } from "react";
import axios from 'axios'

export default function Login() {
  const [data, setData] = useState({
    email: '',
    password: ''
  })

  const handleLogin = async () => {
    await axios.get('/api/v1/user/healthcheck')
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
