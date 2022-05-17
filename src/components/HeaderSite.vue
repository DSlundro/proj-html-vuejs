<template>
    <header>
        <div class="container">
            <div class="row align-items-center">
                <div class="col-2">
                    <img src="@/assets/img/dark-logo.png" alt="">
                </div>

                <div class="col-10 d-flex justify-content-end">
                    <nav class="navbar navbar-expand-lg navbar-light">
                        <div class="collapse navbar-collapse" id="navbarSupportedContent" >
                            <ul class="navbar-nav mr-auto d-flex gap-3 pe-3">
                                <NavBar :nav="nav" v-for="(nav, index) in navbar" :key="index"/>
                                <li class="nav-item d-flex align-items-center" v-once>
                                    <font-awesome-icon icon="fa-regular fa-circle-user" />
                                </li>
                            </ul>
                            <form class="form-inline my-2 my-lg-0 d-flex">
                                <input class="form-control mr-sm-2" type="search" placeholder="Search..." aria-label="Search" aria-describedby="search-addon">
                                <font-awesome-icon icon="fa-solid fa-magnifying-glass" />
                            </form>
                        </div>
                    </nav>
                </div>
            </div>
        </div>
    </header>
</template>

<script>
import NavBar from '@/components/partials/header/NavBar.vue'
export default {
    name: 'HeaderSite',
    components:{
        NavBar
    },
    data(){
        return{
            navbar:[
                {
                    menu: 'Home',
                    dropdown: [
                        {item: 'MaxCoach Education'},
                        {item: 'Course Portal'},
                        {item: 'Distant Education'},
                        {item: 'Multimedia Pedagogy'},
                        {item: 'Modern Schooling'},
                        {item: 'Remote Training'},
                        {item: 'Business'},
                    ]
                },
                {
                    menu: 'Pages',
                    dropdown: [
                        {item: 'Start Here'},
                        {item: 'Success Story'},
                        {item: 'About me'},
                        {item: 'Contact me'},
                        {item: 'Contact us'},
                        {item: 'Purchase Guide'},
                        {item: 'Privacy Policy'},
                        {item: 'Terms of Service'},
                    ]
                },
                {
                    menu: 'Courses',
                    dropdown: [
                        {item: 'Courses'},
                        {item: 'Membership Levels'},
                        {item: 'Become a Teacher'},
                        {item: 'Profile'},
                        {item: 'Checkout'},
                        {item: 'Single Layout'},
                    ]
                },
                {
                    menu: 'Features',
                    dropdown: [
                        {item: 'Events'},
                        {item: 'Zoom Meetings'},
                    ]
                },
                {
                    menu: 'Blog',
                    dropdown: [
                        {item: 'Blog Grid'},
                        {item: 'Blog Masonry'},
                        {item: 'Blog Classic'},
                        {item: 'Blog List'},
                    ]
                },
                {
                    menu: 'Shop',
                    dropdown: [
                        {item: 'Shop Left Sidebar'},
                        {item: 'Shop Right Sidebar'},
                        {item: 'Cart'},
                        {item: 'Wishlist'},
                        {item: 'Single Product'},
                    ]
                },
            ]
        }
    }
}
</script>

<style lang="scss" scoped>

header{
    border-bottom: 2px solid $Hint-of-Red;
    img{width: 150px;}
    form{  
        position: relative;
        input{
            background-color: $Hint-of-Red;
            &:focus{
                box-shadow: none;
            }
        }
        svg{
            position: absolute;
            top: 12px;
            right: 10px;
            color: $Royal-Blue;
            font-size: 15px;
        }
    }
}

</style>