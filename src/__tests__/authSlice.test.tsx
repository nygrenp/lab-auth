import authReducer, { loginAsync } from '../features/auth/authSlice';

describe('slice test', () => {

    it('login fulfilled and the response is 200', () => {
        const action = {
            type: loginAsync.fulfilled,
            payload: {
                isLoggedIn: true,
                username: 'mrauthoto',
                status: 'login succeeded',
              }
        }
    
        const nextState = authReducer({
            isLoggedIn: false,
            username: '',
            status: null
            }, action);
        expect(nextState.isLoggedIn).toEqual(false);
        expect(nextState.username).toEqual('mrauthoto');
        expect(nextState.status).toEqual('login succeeded');
    
    
    
    })
});
