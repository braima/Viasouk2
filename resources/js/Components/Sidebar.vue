<template>
    <div class="sidebar">
        <ul>
            <li><router-link to="/Dashboard">Dashboard</router-link></li>
            <li><router-link to="/categories">Category</router-link></li>
            <li><router-link to="/products">Product</router-link></li>
            <li><router-link to="/parameters">Parameters</router-link></li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'Sidebar',
}
</script>

<style scoped>
.sidebar {
    width: 250px;
    height: 100vh;
    background-color: #2c3e50; /* Dark background */
    color: white; /* Text color */
    padding: 20px;
    position: fixed; /* Fixed sidebar */
    transition: width 0.3s; /* Smooth transition */
}

.sidebar ul {
    list-style-type: none; /* Remove bullet points */
    padding: 0; /* Remove padding */
}

.sidebar li {
    margin: 20px 0; /* Space between items */
}

.sidebar a {
    color: white; /* Link color */
    text-decoration: none; /* Remove underline */
    font-weight: bold; /* Bold text */
    transition: color 0.3s; /* Smooth color transition */
}

.sidebar a:hover {
    color: #3498db; /* Change color on hover */
}
</style>
