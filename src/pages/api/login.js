export const getRandomWait = (min = 200, max = 2000) => {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min + 1)) + min
}

const authenticate = ({ username = '', password = '' }) => {
  return (
    username.toLowerCase() === 'mrauthoto' && password.toLowerCase() === 'thepass'
  )
}

const loginHandler = async (request, response) => {
  try {
    console.log(request.body)
    const body = request.body;

    await new Promise((resolve) => setTimeout(resolve, getRandomWait()))

    if (body.throw) {
      throw new Error('Fail requested')
    }

    if (authenticate(body)) {
      return response.status(200).json({
        username: body.username,
        loggedIn: new Date(),
        bankAccountNo: '25622-235-215',
        status: 'login succeeded',
      })
    }

    return response.status(401).json({
      failedAt: new Date(),
      message: 'Credentials are not correct',
      status: 'login failed',
    })
  } catch (error) {
    return response.status(500).json({
      message: error.toString(),
      status: 'Something horrible happened',
    })
  }
}

export default loginHandler
