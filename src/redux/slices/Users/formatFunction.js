export const formatProfileApiData = (data) => {
  const { first_name, last_name, email, role } = data;
  const formatProfileData = {
    firstName: first_name,
    lastName: last_name,
    email: email,
    role:role
  };
  return formatProfileData;
};
