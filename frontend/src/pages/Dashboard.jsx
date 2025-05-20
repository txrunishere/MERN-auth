import { useUserData } from "../context/UserContext"

const Dashboard = () => {
  const { user } = useUserData()

  return (
    <div>
      <h1>Dashboard</h1>
      {
        user && ( <h2>Hi {user.user.name}</h2> )
      }
    </div>
  )
}

export default Dashboard