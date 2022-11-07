export const formatSignUpApiData = (data) => {
  const { firstName, lastName, email, password } = data;
  const formatSignupData = {
    signup: {
      first_name: firstName,
      last_name: lastName,
      email: email,
      password: password,
    },
  };
  return formatSignupData;
};


export const formatLoginApiData = (data) => {
  const {email, password } = data;
  const formatSigninData = {
    signin: {
      email: email,
      password: password,
    },
  };
  return formatSigninData;
};
