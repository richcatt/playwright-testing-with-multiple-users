import { use, useState } from 'react'
import './App.css'

type User = {
  id : string,
  name: string,
  username: string,
  roles: string[]
}

function App() {
  const [user, setUser] = useState<User | null>(null)

  const signIn = async (formData: FormData) => {
    const userName = formData.get('userName')

    try {
      const response = await fetch('api/signin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ userName }),
      })

      if (!response.ok) {
        throw new Error('Network response was not ok')
      }

      const data = await response.json()
      setUser(data)
    } catch (error) {
      console.error('Error signing in:', error)
    }
  }

  const ViewOnlyComponent = () => {
    return (
      <div>
        <h2>View Only Content</h2>
        <p>This content is only visible to users with the "viewOnly" role.</p>
      </div>
    )
  }

  const EditComponent = () => {
    return (
      <div>
        <h2>Edit Content</h2>
        <p>This content is only visible to users with the "edit" role.</p>
      </div>
    )
  }

  const AdminComponent = () => {
    return (
      <div>
        <h2>Admin Content</h2>
        <p>This content is only visible to users with the "admin" role.</p>
      </div>
    )
  }


  return !user ? (
    <>
      <h1>Welcome</h1>
      <form action={signIn}>
        <input type="text" name="userName" placeholder="Username" required />
        <button type="submit">Sign In</button>
      </form>
    </>
  )
  : (
    <>
      <h1>Welcome {user.name}</h1>
      {user.roles.includes('viewOnly') && <ViewOnlyComponent />}
      {user.roles.includes('edit') && <EditComponent />}
      {user.roles.includes('admin') && <AdminComponent />}
    </>
  )
}

export default App
