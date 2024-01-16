export const validateEmail = (email) => {
  // Regular expression for a valid email address
  const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return pattern.test(email);
};

