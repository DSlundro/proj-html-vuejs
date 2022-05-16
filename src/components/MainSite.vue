<template>
    <main>
        <OnlineCourses />
        <SmartTutoring />
    </main>
</template>

<script>
import OnlineCourses from '@/components/partials/main/OnlineCourses.vue'
import SmartTutoring from '@/components/partials/main/SmartTutoring.vue'

export default {
    name: 'MainSite',
    components:{
        OnlineCourses,
        SmartTutoring,
    }
}
</script>

<style lang="scss" scoped>

</style>