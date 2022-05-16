<template>
    <section class="top-learners py-4">
        <div class="container py-5">
            <div class="row">
                <!-- TITLE -->
                <div class="tl-title col-12 text-center">
                    <h6>
                        GREAT WORDS ABOUT MAXCOACH
                    </h6>
                    <h2>
                        Our <span>top learners'</span> verbatim
                    </h2>
                </div>
            </div>
        </div>

        <div class="sc">
            <div class="row justify-content-center m-0">

                <!-- CARD -->
                <div class="tlb-card col-3 d-flex flex-column p-4 my-3 mx-3" v-for="(learner, index) in learners" :key="index">
                    <!-- TITLE -->
                    <div class="tlb-title py-2">
                        <h6>{{learner.title}}</h6>
                    </div>
                    <!-- TEXT -->
                    <div class="tlb-text py-2">
                        <p>{{learner.text}}</p>
                    </div>
                    <!-- USER -->
                    <div class="tlb-user d-flex align-items-center">
                        <!-- IMG -->
                        <div class="tlb-user-img">
                            <img :src="learner.img" alt="">
                        </div>
                        <!-- DESCRIPTION -->
                        <div class="tlb-user-description d-flex flex-column justify-content-center gap-3">
                            <!-- NAME -->
                            <div class="tlb-user-name">
                                <h6 class="m-0">{{learner.name}}</h6>
                            </div>
                            <!-- JOB -->
                            <div class="tlb-user-job">
                                <p class="m-0">/ {{learner.job}}</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-12 text-center py-5">
                    <div class="d-flex gap-2 justify-content-center">
                        <font-awesome-icon icon="fa-solid fa-circle" />
                        <font-awesome-icon icon="fa-solid fa-circle" />
                        <font-awesome-icon icon="fa-solid fa-circle" />
                        <font-awesome-icon icon="fa-solid fa-circle" />
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: 'TopLearners',
    data(){
        return{
            learners:[
                {
                    img: require('@/assets/img/ta-2.jpg'),
                    name: 'Florence Themes',
                    job: 'Multimedia Admin',
                    title: `It's a choice of quality for people with special needs`,
                    text: `I'm a very scrict person so I require everything to be organized and neat. Then, I'll be able to make things right and shine. MaxCoach guys just got me.`,
                },
                {
                    img: require('@/assets/img/ta-3.jpg'),
                    name: 'Mina Hollace',
                    job: 'Freelancer',
                    title: `High level of efficiency and scientific teaching methond`,
                    text: `I am free to learn at my own pace, follow my own schedule and choose the subject I want to learn from the syllabus. Great study portal for people like me.`,
                },
                {
                    img: require('@/assets/img/ta-4.jpg'),
                    name: 'Madley Pondor',
                    job: 'IT Specialist',
                    title: `Professional team of specialist and passionate mentors at reach`,
                    text: `I need to get a certification for English proficiency and MaxCoach is my best choice. Their tutors are smart and professional when dealing with students.`,
                },
            ]
        }
    }
}
</script>

<style lang="scss" scoped>
.top-learners{
    background-color: $Hint-of-Red;
}
.tl-title{
        h6{color: $Shady-Lady;text-transform: uppercase;}
        span{color: $Mountain-Meadow;font-weight: 100;}
    }
.tlb-card{
    background-color: $White;
    .tlb-title h6{color: $Cod-Gray;}
    .tlb-text p{color: $Shady-Lady;}
    .tlb-user-img img{width: 80px; border-radius: 50%;}
    .tlb-user-name h6{text-transform: uppercase;}
    .tlb-user-job p{color: $Shady-Lady;}
}
</style>