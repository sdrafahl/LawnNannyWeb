export const signupJsonForm = {
  SignUp: {
    button: 'Sign Up',
    fields: [
      {
        name: 'Email',
        type: 'input',
        placeholder: 'email@example.com',
        id: 'email',
        validation: true,
      },
      {
        name: 'Password',
        name2: 'Retype Password',
        type: 'registerPassword',
        placeholder: 'password',
        placeholder2: 'retype',
        id: 'password',
        id2: 'retype',
        validation: true,
        password: 'password',
      },
    ],
  },
};
export default signupJsonForm;
