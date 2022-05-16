<template>
    <main>
        <OnlineCourses />
        <SmartTutoring />
        <CompanionShip />
        <TopLearners />
    </main>
</template>

<script>
import OnlineCourses from '@/components/partials/main/OnlineCourses.vue'
import SmartTutoring from '@/components/partials/main/SmartTutoring.vue'
import CompanionShip from '@/components/partials/main/CompanionShip.vue'
import TopLearners from '@/components/partials/main/TopLearners.vue'

export default {
    name: 'MainSite',
    components:{
        OnlineCourses,
        SmartTutoring,
        CompanionShip,
        TopLearners
    }
}
</script>

<style lang="scss" scoped>

</style>