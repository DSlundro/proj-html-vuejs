<template>
    <section class="courses">
        <div class="container py-5 px-5">
            <div class="row py-4 justify-content-center">

                <!-- TITLE -->
                <div class="title col-12 text-center">
                    <h6>
                        STIMULATED TO LEARN?
                    </h6>
                    <h2>
                        Featured Online Courses
                    </h2>
                </div>

                <div class="course col-6 d-flex gap-4 gy-5 py-3" v-for="(course, index) in courses" :key="index">
                    <div>
                        <img :src="course.img" :alt="course.img">
                    </div>
                    <div class="description d-flex flex-column justify-content-center">
                        <h3 class="price">{{course.price}}<span>{{course.rest}}</span></h3>
                        <p class="text">{{course.text}}</p>
                        <div class="content d-flex gap-5">
                            <div>
                                <font-awesome-icon icon="fa-regular fa-file-lines" class="pe-1"/> {{course.lessons}} Lessons
                            </div>
                            <div>
                                <font-awesome-icon icon="fa-regular fa-user" class="pe-1"/> {{course.students}} Students
                            </div>
                        </div>
                    </div>
                </div>

                <!-- BUTTON -->
                <div class="col-12 d-flex justify-content-center py-5">
                    <button class="btn">
                        Download free guide
                        <font-awesome-icon icon="fa-solid fa-right-long" class="ps-2"/>
                    </button>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: 'OnlineCourses',
    data(){
        return{
            courses: [
                {
                    img: require('@/assets/img/course-1.jpg'),
                    price: '$40',
                    rest: '.00',
                    text: 'Learging to Write as a Professional Author',
                    lessons: '20',
                    students: '50',
                },
                {
                    img: require('@/assets/img/course-2.jpg'),
                    price: 'Free',
                    text: 'Customer-centric Info-Tech Strategies',
                    lessons: '24',
                    students: '769',
                },
                {
                    img: require('@/assets/img/course-3.jpg'),
                    price: '$19',
                    rest: '.00',
                    text: 'Open Programming Courses for Everyone: Python',
                    lessons: '17',
                    students: '62',
                },
                {
                    img: require('@/assets/img/course-4.jpg'),
                    price: '$26',
                    rest: '.00',
                    text: 'Academic Listening and Note-taking',
                    lessons: '14',
                    students: '67',
                },
                {
                    img: require('@/assets/img/course-5.jpg'),
                    price: '$39',
                    rest: '.00',
                    text: 'Master jQuery in a Short Period of Time',
                    lessons: '6',
                    students: '51',
                },
                {
                    img: require('@/assets/img/course-6.jpg'),
                    price: '$59',
                    rest: '.00',
                    text: 'Introduction to Javascript for Begginers',
                    lessons: '14',
                    students: '76',
                },
            ]
        }
    }
}
</script>

<style lang="scss" scoped>
.courses{
    h2, p{color: $Cod-Gray}
    background-color: $Hint-of-Red;
    .title{
        h6{
            color: $Shady-Lady;
            text-transform: uppercase;
        }
    }
    img{
        width: 140px;
        aspect-ratio: 1/1;
        border-radius: 50%;
        object-fit: cover;
    }
    .description{
        width:55%;
        .price{
            color: $Mountain-Meadow;
            font-size: 20px;
        }
        .text{
            color: $Cod-Gray;
            font-weight: $accent-font-weight;
            letter-spacing: 1px;
            &:hover{
                color: $Mountain-Meadow;
            }
        }
        .content{
            color: $Shady-Lady;
            font-size: 12px;
        }
    }
    .course:hover{
        background-color: $White;
        cursor: pointer;
    }
    h3 {
        font-weight: bold;
        span{
            font-size: 14px;
        }
    }  
}
</style>