<template>
    <main>
        <OnlineCourses />
        <SmartTutoring />
        <CompanionShip />
        <TopLearners />
        <OnlineCertification />
    </main>
</template>

<script>
import OnlineCourses from '@/components/partials/main/OnlineCourses.vue'
import SmartTutoring from '@/components/partials/main/SmartTutoring.vue'
import CompanionShip from '@/components/partials/main/CompanionShip.vue'
import TopLearners from '@/components/partials/main/TopLearners.vue'
import OnlineCertification from '@/components/partials/main/OnlineCertification.vue'

export default {
    name: 'MainSite',
    components:{
        OnlineCourses,
        SmartTutoring,
        CompanionShip,
        TopLearners,
        OnlineCertification,
    }
}
</script>

<style lang="scss" scoped>

</style>