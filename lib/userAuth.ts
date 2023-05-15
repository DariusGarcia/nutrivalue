interface LocalStorage {
  id: number
  loggedIn: boolean
  message: string
  token: string
  username: string
}
class AuthHandler {
  loggedIn() {
    const token: any = JSON.parse(localStorage.getItem('user') || '{}')
    console.log(token?.loggedIn)
    return token.loggedIn
  }

  getToken() {
    return localStorage.getItem('user')
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
