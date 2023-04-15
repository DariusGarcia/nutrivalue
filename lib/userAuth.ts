export default async function loginUser(username: string, password: string) {
  const baseUrl = process.env.SERVER_BASE_URL
  const headersOptions = { 'Content-Type': 'application/json' }

  const user = await fetch(`http://localhost:4001/api/user/login`, {
    method: 'POST',
    headers: headersOptions,
    body: JSON.stringify({ username: username, password: password }),
  })
    .then((user) => user.json())
    .catch((err) => err)

  if (!user) {
    throw new Error('Could not login user')
  }

  localStorage.setItem('user', JSON.stringify(user))

  return user
}
