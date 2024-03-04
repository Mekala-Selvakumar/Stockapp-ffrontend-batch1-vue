<template>
  <div class="login-page">
    <h1>Login Page</h1>
    <!-- create  form for login page  with emailId,password with user defined format -->
    <form @submit.prevent="login">
      <div class="form-group">
        <label for="email">Email:</label>
        <input type="email" id="email" v-model="emailId" required>
    </div>
        <div class="form-group">
            <label for="password">Password:</label>
            <input type="password" id="password" v-model="password" required>
        </div>
        <button type="submit">Login</button>
    </form>



     
  </div>
</template>

<script>
//import the UserService
import UserService from '../services/UserService';
export default {
  data() {
    return {
      emailId: '',
      password: ''
    };
  },
  methods: {
    //create an arrow function called login  , it should call the method from the UserService 
    //using axios
  async  login  () {
      console.log('Login', this.emailId, this.password);
          //create an object with email and password
               const user = {
          emailId: this.emailId,
          password: this.password
        };
        try {
            let response =  await UserService.validateUser(user) ;
            sessionStorage.setItem('LoggedIn', true);
            this.$router.push('/home');
         }
        catch (error) {
          console.log(error);
          alert('Invalid  EmailId/password . Please try again   ');
        }
      
  }
    }
};



</script>

<style scoped>
    .login-page {
        display: flex;
        flex-direction: column;
        align-items: center;
         
    }
    .form-group {
        margin-bottom: 1rem;
        
    }
    label {
        display: block;
    }
    input {
        padding: 0.5rem;
        font-size: 1rem;
    }
    button {
        padding: 0.5rem 1rem;
        font-size: 1rem;
        background-color: #007bff;
        color: white;
        border: none;
        cursor: pointer;
    }
    button:hover {
        background-color: #0056b3;
    }
    button:active {
        background-color: #004080;
    }
    button:focus {
        outline: none;
    }
    button:disabled {
        background-color: #b3b3b3;
        cursor: not-allowed;
    }
    button:disabled:hover {
        background-color: #b3b3b3;
    }
form {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    max-width: 400px;
    margin: 0 auto;
    padding: 2rem;
    border: 1px solid #ccc;
    border-radius: 4px;
    background-color: #f9f9f9;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}


 
</style>
