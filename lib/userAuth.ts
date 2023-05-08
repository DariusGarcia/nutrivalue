import decode from 'jwt-decode'

class AuthHandler {
  // getProfile() {
  //   return decode(this.getToken())
  // }

  loggedIn() {
    const token = this.getToken()
    return token ? true : false
  }

  getToken() {
    return localStorage.getItem('auth_token')
  }

  getUsername() {
    const localStorageUsername = localStorage.getItem('auth_token') || ''
    const username = JSON.parse(localStorageUsername)
    return username
  }

  login(user: any) {
    localStorage.setItem('auth_token', user)
    window.location.assign('/diary')
  }

  logout() {
    localStorage.removeItem('auth_token')
    window.location.assign('/')
  }
}

export default new AuthHandler()
