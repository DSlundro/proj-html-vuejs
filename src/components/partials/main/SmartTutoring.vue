<template>
    <section class="tutoring py-4">
        <div class="container py-5">
            <div class="row">
                <!-- TITLE -->
                <div class="st-title col-12 text-center">
                    <h6>
                        MAXCOACH AVAILABLE COURSES
                    </h6>
                    <h2>
                        Access <span>Smart Tutoring</span> Program For Benefits.
                    </h2>
                </div>

                <!-- CARD -->
                <div class="st-card col-4 py-3 px-3" v-for="(st, index) in tutoring" :key="index">
                    <!-- IMG -->
                    <div class="st-img py-4">
                        <img :src="st.img" :alt="st.img">
                    </div>
                    <!-- NAME -->
                    <div class="st-name">
                        <h5>{{st.name}}</h5>
                    </div>
                    <!-- TEXT -->
                    <div class="st-text py-2">
                        <p>{{st.text}}</p>
                    </div>
                    <!-- GO -->
                    <div class="st-go">
                        <a href="#">{{st.go}} <font-awesome-icon icon="fa-solid fa-right-long" class="ps-2"/></a>
                    </div>
                </div>

            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: 'SmartTutoring',
    data(){
        return{
            tutoring:[
                {
                    img: require('@/assets/img/st-1.png'),
                    name: 'Customize Preferences',
                    text: 'Learners are given the right to arrange and customize their study schedule and timetable based on preferences.',
                    go: 'Start here',
                },
                {
                    img: require('@/assets/img/st-2.png'),
                    name: 'Cloud Storage',
                    text: 'You can store online lessons via online cloud or download to your device and revise lessons on the way.',
                    go: 'Get Free Quote',
                },
                {
                    img: require('@/assets/img/st-3.png'),
                    name: 'Multimedia Channels',
                    text: 'We provide study materials with various formats; video, audio, slides, doc, print, books, and applications.',
                    go: 'Start now',
                },
            ]
        }
    }
}
</script>

<style lang="scss" scoped>
.tutoring{
    .st-title{
        h6{color: $Shady-Lady;text-transform: uppercase;}
        span{color: $Turquoise-Blue;font-weight: 100;}
    }
    .st-card{
        .st-name{color: $Cod-Gray;}
        .st-text, a{color: $Shady-Lady;}
    }
}
</style>