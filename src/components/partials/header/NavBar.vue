<template>
 <li class="nav-item dropdown" >
    <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
        {{nav.menu}}
    </a>
    <ul class="dropdown-menu">
        <li  v-for="(obj, index) in nav.dropdown" :key="index">
            <a class="dropdown-item" href="#">{{obj.item}}</a>
        </li>
    </ul>
</li>
</template>

<script>
export default {
    name: 'NavBar',
    props:{
        nav: Object
    }
}
</script>

<style lang="scss" scoped>
nav li a{
    color: $Cod-Gray !important;
}
</style>