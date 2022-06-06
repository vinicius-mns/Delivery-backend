const min = 6;

class Classlogin {
  regex = /\S+@\S+\.\S+/

  constructor() {
    this.minLenPass = min;
  }

  validateLogin = (email, password) => (
    !(password.length >= this.minLenPass && this.regex.test(email))
  );
}

export default new Classlogin();
