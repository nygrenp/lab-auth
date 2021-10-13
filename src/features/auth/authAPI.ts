import { loginStatus } from "./authSlice"

export async function loginUser({username, password}): 
  Promise<{ username?: any, loggedIn?: Date, bankAccountNo?: string, status: loginStatus, failedAt?: Date, message?: string } | any> {
    const response = await fetch('/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password }),
    })
    const result = await response.json()

    return result
}

export async function logoutUser(username): 
  Promise<{ username?: any, loggedOut?: Date, status?: string} | any> {
    const response = await fetch('/api/logout', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username }),
    })
    const result = await response.json()

    return result
}