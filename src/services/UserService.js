// create  userService to fetcch user data from API http://localhost:9090/api/v1/users
//create   functions to  register User , validate User

import axios from 'axios';

const USER_API_BASE_URL = "http://localhost:9090/api/v1/users";

const  UserService = {
    //register user
    registerUser(user){
        return axios.post(USER_API_BASE_URL +"/register", user);
    },

    //validate user
    validateUser(user){
        return axios.post(USER_API_BASE_URL + '/login', user);
    }
}

export default UserService;
