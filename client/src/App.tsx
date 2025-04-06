import { useState } from 'react'
import './App.css'

function App() {
  const [user, setUser] = useState<User | null>(null)

  // Simulate user authentication and fetch user data from the server
  const signIn = async (formData: FormData) => {
    const username = formData.get('username')

    try {
      const response = await fetch('api/signin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username }),
      })

      const data = await response.json()
      setUser(data)
    } catch (error) {
      console.error('Error signing in:', error)
    }
  }

  // Simulate user logout by clearing the user state
  const signOut = () => {
    setUser(null)
  }

  const Permission1Component = () => {
    return (
      <div>
        <h2>Permission 1 Content</h2>
        <p>This content is only visible to users with the "Permission 1" permission.</p>
      </div>
    )
  }

  const Permission2Component = () => {
    return (
      <div>
        <h2>Permission 2 Content</h2>
        <p>This content is only visible to users with the "Permission 2" permission.</p>
      </div>
    )
  }

  return !user ? (
    // Display sign-in form if user is not authenticated
    <form action={signIn}>
      <input type="text" name="username" placeholder="Username" required />
      <button type="submit">Sign In</button>
    </form>
  )
  // Display user-specific content if user is authenticated
  : (
    <>
      <h1>Welcome {user.name}</h1>
      {user.permissions.includes('permission1') && <Permission1Component />}
      {user.permissions.includes('permission2') && <Permission2Component />}
      {!user.permissions.length && <p>You do not have permission to view any content</p>}
      <form action={signOut}>
        <button type="submit">Sign Out</button>
      </form>
    </>
  )
}

export default App
