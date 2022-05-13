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
#app {


}
</style>
