<template>
    <main>
        <OnlineCourses />
        <SmartTutoring />
        <CompanionShip />
        <TopLearners />
        <OnlineCertification />
        <DatesCourses />
        <BestBlogs />
    </main>
</template>

<script>
import OnlineCourses        from '@/components/partials/main/OnlineCourses.vue'
import SmartTutoring        from '@/components/partials/main/SmartTutoring.vue'
import CompanionShip        from '@/components/partials/main/CompanionShip.vue'
import TopLearners          from '@/components/partials/main/TopLearners.vue'
import OnlineCertification  from '@/components/partials/main/OnlineCertification.vue'
import DatesCourses         from '@/components/partials/main/DatesCourses.vue'
import BestBlogs            from '@/components/partials/main/BestBlogs.vue'

export default {
    name: 'MainSite',
    components:{
        OnlineCourses,
        SmartTutoring,
        CompanionShip,
        TopLearners,
        OnlineCertification,
        DatesCourses,
        BestBlogs
    }
}
</script>

<style lang="scss" scoped>
*{margin: 0;margin: 0;box-sizing: border-box;}
</style>