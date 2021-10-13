import { getRandomWait } from './login';

const logOutAuthenticate = ({ username = '' }) => {
  console.log(username, 'auth');
  return username.toLowerCase() === 'mrauthoto';
};

const logoutHandler = async (request, response) => {
  const body = request.body;
  try {
    await new Promise((resolve) => setTimeout(resolve, getRandomWait()));

    if (body.throw) {
      throw new Error('Fail requested');
    }

    if (logOutAuthenticate(body)) {
      return response.status(200).json({
        username: body.username,
        loggedOut: new Date(),
        status: 'logout succeed',
      });
    }

    return response.status(401).json({
      failedAt: new Date(),
      message:
        'User id is not correct - are you trying to logout someone else?!!! REPORTED!',
      status: 'logout failed',
    });
  } catch (error) {
    return response.status(500).json({
      message: error.toString(),
      status: 'Something horrible happened',
    });
  }
};

export default logoutHandler;
