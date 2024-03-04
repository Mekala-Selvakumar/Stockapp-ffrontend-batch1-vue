<template>
  <div class="registration-page">
    <h1>Registration Page</h1>
    <form @submit="handleSubmit">
      <div class="form-group">
        <label for="email">Email:</label>
        <input type="email" id="email" v-model="emailId" required>
      </div>
      <div class="form-group">
        <label for="password">Password:</label>
        <input type="password" id="password" v-model="password" required>
      </div>
      <div class="form-group">
        <label for="confirm-password">Confirm Password:</label>
        <input type="password" id="confirm-password" v-model="confirmPassword" required>
      </div>
      <div class="form-group">
        <label for="username">Username:</label>
        <input type="text" id="username" v-model="username" required>
      </div>
      <div class="form-group">
        <label for="mobile">MobileNumber:</label>
        <input type="text" id="mobile" v-model="mobile" required>
      </div>
      <button type="submit">Register</button>
    </form>
  </div>
</template>

<script>
import UserService from '@/services/UserService';
 

export default {
    name: "RegistrationPage",
  
  data() {
    return {
      emailId: '',
      password: '',
      confirmPassword: '',
      username: '',
      mobile: ''
      
      
    };
  },
  methods: {
    handleSubmit(event) {
       event.preventDefault();
      // Validate fields
      if (!this.emailId || !this.password || !this.confirmPassword || !this.username) {
        alert('Please fill in all fields');
        return;
      }
      if (this.password !== this.confirmPassword) {
        alert('Passwords do not match');
        return;
      }
      // Call UserService register method
      UserService.registerUser({
        emailId: this.emailId,
        password: this.password,
        username: this.username,
        mobile: this.mobile
      })
        .then(() => {
          alert('Regis"tration successful');
          this.$router.push( "/login");   
         
        })
        .catch((error) => {
          alert('Registration failed');
          console.error(error);
        });
    },
  },
};
</script>

<style scoped>
.registration-page {
  max-width: 400px;
  margin: 0 auto;
  padding: 2rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  background-color: #f9f9f9;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.form-group {
  margin-bottom: 1rem;
}

label {
  display: block;
  font-weight: bold;
}

input[type="email"],
input[type="password"],
input[type="text"] {
  width: 100%;
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
}
</style>
