<template>
    <div id="app">
        <HeaderSite />
        <JumbotronSite />
        <MainSite />
        <FooterSite />
    </div>
</template>

<script>
import HeaderSite from './components/HeaderSite.vue'
import JumbotronSite from './components/JumbotronSite.vue'
import MainSite from './components/MainSite.vue'
import FooterSite from './components/FooterSite.vue'

export default {
    name: 'App',
    components: {
        HeaderSite,
        JumbotronSite,
        MainSite,
        FooterSite,
    }
}
</script>

<style lang="scss">
@import '@/assets/scss/style.scss';
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Roboto+Slab&display=swap');

#app {
    font-family: $primary-font-family;
    .container{width: 1200px !important;}
    a{text-decoration: none;}
}
</style>
