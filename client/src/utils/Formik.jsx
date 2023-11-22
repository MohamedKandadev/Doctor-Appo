
export const loginForm = {
  initialvalues: {
    email: 'doctor@gmail.com',
    password: 'Doctor@@123'
  },
  validate: values => {
    const { email, password } = values;
    const errors = {};
  
    if (!values.email) {
      errors.email = 'Email is required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
      errors.email = 'Invalid email address';
    }
    if(!password){
      errors.password = 'Password is required';
    }
  
    return errors;
  }
}

export const registerForm = {
  initialvalues: {
    email: '',
    password: '',
    firstName: '',
    lastName: '',
    role: 'doctor',
  },
  validate: values => {
    const { email, password, firstName, lastName, role } = values;
    const errors = {};
  
    if (!values.email) {
      errors.email = 'Email is required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
      errors.email = 'Invalid email address';
    }
    if(!password){
      errors.password = 'Password is required';
    }
    if(!firstName){
      errors.firstName = 'First name is required';
    }
    if(!lastName){
      errors.lastName = 'Last name is required';
    }
    if(!role){
      errors.role = 'Role is required';
    }
  
    return errors;
  }
}