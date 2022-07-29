import axios from 'axios';

const UsersUrl = 'http://localhost:5000';

export const registerForm = async (user) => {
    console.log(user);
    return await axios.post(`${UsersUrl}/register`, {user})
      .then((res) => res.data);
}

export const loginForm = async (user) => {
    console.log(user);
    return await axios.post(`${UsersUrl}/login`, {user})
      .then((res) => res.data);
}