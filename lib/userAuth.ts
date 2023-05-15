interface LocalStorage {
  id: number
  loggedIn: boolean
  message: string
  token: string
  username: string
}
class AuthHandler {
  loggedIn() {
    const userString: string | null = localStorage.getItem('user')
    const user = userString ? JSON.parse(userString) : {} // check if userString is truthy before parsing
    console.log({ user: user })
    return user?.loggedIn || false // return false if loggedIn property is not present
  }

  getToken() {
    const token: LocalStorage = JSON.parse(localStorage.getItem('user') || '{}')
    return token.token
  }

  getUsername() {
    const localStorageUsername = localStorage.getItem('user') || ''
    const username = JSON.parse(localStorageUsername)
    return username
  }

  login(user: any) {
    localStorage.setItem('user', user)
    window.location.assign('/diary')
  }

  logout() {
    localStorage.removeItem('user')
    window.location.assign('/')
  }
}

export default new AuthHandler()
