<template>
    <main>
        <OnlineCourses />
        <SmartTutoring />
        <CompanionShip />
        <TopLearners />
        <OnlineCertification />
        <DatesCourses />
    </main>
</template>

<script>
import OnlineCourses from '@/components/partials/main/OnlineCourses.vue'
import SmartTutoring from '@/components/partials/main/SmartTutoring.vue'
import CompanionShip from '@/components/partials/main/CompanionShip.vue'
import TopLearners from '@/components/partials/main/TopLearners.vue'
import OnlineCertification from '@/components/partials/main/OnlineCertification.vue'
import DatesCourses from '@/components/partials/main/DatesCourses.vue'

export default {
    name: 'MainSite',
    components:{
        OnlineCourses,
        SmartTutoring,
        CompanionShip,
        TopLearners,
        OnlineCertification,
        DatesCourses,
    }
}
</script>

<style lang="scss" scoped>

</style>