<template>
    <header>
        <!--create  a  div  to display  Home and WishList  as  a Menu -->
        <div id="toolbar">
            <router-link to="/home" class ="menuItem">Home</router-link>
            <router-link to="/wishlist" class="menuItem">WishList</router-link>
            <router-link to="/login" class="menuItem">Login</router-link>
            <router-link to="/register" class="menuItem">Register</router-link>

        </div>
     </header>
   

   
</template>

<script>
export default {
  name: 'HeaderPart',
}
</script>

<style scoped>
/* create  blue background, white color   25px ,7vh  toolbar */
#toolbar {
    background-color: blue;
    color: white;
    font-size: 25px;
    height: 7vh;
    display: flex;
    justify-content: space-around;
    align-items: center;
}
.menuItem {
    text-decoration: none;
    color: white;
    font-size: 25px;
}



 
</style>
