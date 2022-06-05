export const validateLogin = (email, password) => {
  const seis = 6;
  const P = password.length >= seis;
  const regex = /\S+@\S+\.\S+/;
  const E = regex.test(email);

  return !(P && E);
};

export const a = () => 1;
