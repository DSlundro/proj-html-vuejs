<template>
    <section class="blogs py-5">
        <div class="container py-5">
            <div class="row">
                <div class="col-4">
                    <!-- SUBTITLE -->
                    <div class="bb-subtitle">
                        <p>Enjoyable insights</p>
                    </div>
                    <!-- TITLE -->
                    <div class="bb-title pb-3">
                        <h2>Most Viewed <span>Best Blogs</span></h2>
                    </div>
                    <!-- TEXT -->
                    <div class="bb-text">
                        
                        <div class="d-flex py-3">
                            <span><font-awesome-icon icon="fa-solid fa-right-long" class="pe-2"/></span>
                            <span>Become a Better Blogger: Content Planning</span>
                        </div>
                        <div class="d-flex py-3">
                            <span><font-awesome-icon icon="fa-solid fa-right-long" class="pe-2"/></span>
                            <span>Promoting Your Online Business on Pinterest</span>
                        </div>
                        <div class="d-flex py-3">
                            <span><font-awesome-icon icon="fa-solid fa-right-long" class="pe-2"/></span>
                            <span>Gamification and Game-Based Learning</span>
                        </div> 
                        <div class="d-flex py-3">
                            <span><font-awesome-icon icon="fa-solid fa-right-long" class="pe-2"/></span>
                            <span>Designing on Online Course from Expert's Perspective</span>
                        </div>
                        <div class="d-flex py-3">
                            <span><font-awesome-icon icon="fa-solid fa-right-long" class="pe-2"/></span>
                            <span>Why Online Courses Are the Future of Education</span>
                        </div>

                    </div>
                </div>

                <div class="col-4">
                    <div class="bb-card">
                        <div class="bb-card-img">
                            <img src="@/assets/img/bb-1.jpeg" alt="">
                        </div>
                        <div class="bb-card-body">
                            <div class="bb-card-body-job py-2">
                                <p>Artist</p>
                            </div>
                            <div class="bb-card-body-title py-2">
                                <p>Brush Strokes Energize Trees in Paintings</p>
                            </div>
                            <div class="bb-card-body-dates d-flex gap-5 pt-3">
                                <div class="bb-card-body-dates-date">
                                    <font-awesome-icon icon="fa-regular fa-calendar" class="pe-2"/>
                                    <span>May 15, 2020</span>
                                </div>
                                <div class="bb-card-body-dates-views">
                                    <font-awesome-icon icon="fa-regular fa-eye"  class="pe-2"/>
                                    <span>688 views</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-4">
                    <div class="bb-card">
                        <div class="bb-card-img">
                            <img src="@/assets/img/bb-2.jpg" alt="">
                        </div>
                        <div class="bb-card-body">
                            <div class="bb-card-body-job py-2">
                                <p>Artist</p>
                            </div>
                            <div class="bb-card-body-title py-2">
                                <p>Pocket-Sized Notebooks Hold Miniature Paintings</p>
                            </div>
                            <div class="bb-card-body-dates d-flex gap-5 pt-3">
                                <div class="bb-card-body-dates-date">
                                    <font-awesome-icon icon="fa-regular fa-calendar" class="pe-2"/>
                                    <span>May 15, 2020</span>
                                </div>
                                <div class="bb-card-body-dates-views">
                                    <font-awesome-icon icon="fa-regular fa-eye"  class="pe-2"/>
                                    <span>603 views</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: 'BestBlogs',
}
</script>

<style lang="scss" scoped>
.blogs{
    background-color: $Hint-of-Red;
    .bb-subtitle{
        color: $Shady-Lady;
        text-transform: uppercase;
    }
    .bb-title span{
        color: $Mountain-Meadow;
        font-weight: 200;
    }
    .bb-card{
        &:hover {transform: scale(1.04); cursor: pointer;}
        background-color: $White;
        width: 350px;
        border-radius: 7px;
        box-shadow: 0px 0px 30px 0px rgba(0, 0, 0, 0.301);
        .bb-card-img{
            img{
                width: 100%; 
                border-top-left-radius: 7px;
                border-top-right-radius: 7px;
                }
        }
        .bb-card-body{
            padding: 30px;
            p{margin: 0;}
            .bb-card-body-job{
                color: $Shady-Lady;
                letter-spacing: 1px;
                text-transform: uppercase;
            }
            .bb-card-body-title{
                font-size: 20px;
                font-weight: 500;
                letter-spacing: 1px;
            }
            .bb-card-body-dates{
                color: $Shady-Lady;
            }
        }
    }
}
</style>