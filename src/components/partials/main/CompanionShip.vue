<template>
    <section class="companionship py-5">
        <div class="container py-5">
            <div class="row justify-content-between pb-5">

                <!-- LEFT -->
                <div class="ps-left col-7">
                    <!-- IMG -->
                    <div class="ps-img">
                        <div class="ps-front-img">
                            <img class="rounded-3" src="@/assets/img/poster.jpg" alt="">
                        </div>
                        <div class="ps-back-img">
                            <div class="ps-back-img-b">
                                <img src="@/assets/img/maxcoach-shape-07-150x150.png" alt="">
                            </div>
                            <div class="ps-back-img-ts">
                                <img src="@/assets/img/maxcoach-shape-05-150x150.png" alt="">
                            </div>
                        </div>
                    </div>
                    <!-- YOUTUBE -->
                    <div class="ps-yt">
                        <img src="@/assets/img/yt.png" alt="">
                    </div>
                </div>
                
                <!-- RIGHT -->
                <div class="ps-right col-5 d-flex flex-column justify-content-center p-5">
                    <!-- SUBTITLE -->
                    <div class="ps-subtitle">
                        <p>GET STARTED <span>EFFORTLESSLY</span></p>
                    </div>
                    <!-- TITLE -->
                    <div class="ps-title py-2 pe-5">
                        <h2>Enjoy Our <span>Companionship</span></h2>
                    </div>
                    <!-- TEXT -->
                    <div class="ps-text py-3 pe-5">
                        <p>
                            Sneek peek into what has in store for you on our online teaching and mentoring portal.
                            Seek for some hidden hints of early-bird rewards a well.
                        </p>
                    </div>
                    <!-- LINK -->
                    <div class="ps-link py-3">
                        <a href="#">Download free guidebook <font-awesome-icon icon="fa-solid fa-right-long" class="ps-2"/></a>
                    </div>

                    <div class="ps-back-img-tr">
                        <font-awesome-icon icon="fa-solid fa-o" />
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: 'CompanionShip',
}
</script>

<style lang="scss" scoped>
.companionship{
    .ps-left{
        position: relative;
        .ps-img{
            position: relative;
            .ps-back-img{
                position: absolute;
                width: 100%;
                .ps-back-img-b{
                    position: absolute;
                    right: -10px;
                    bottom: -95px;
                    z-index: -1;
                }
                .ps-back-img-ts{
                    position: absolute;
                    left: -90px;
                    top: -380px;
                    z-index: -1;
                }
                
            }
        }
        .ps-yt{
            img{
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
            }
        }        
    }
    .ps-right{
        position: relative;
        .ps-subtitle{color: $Shady-Lady;}
        .ps-title{color: $Cod-Gray;
            span{color: $Mountain-Meadow;}
        }
        .ps-text{color: $Shady-Lady;}
        .ps-link a{
            color: $Mountain-Meadow;
            &:hover{
                border-bottom: 1px solid $Mountain-Meadow;
            }
        }
        .ps-back-img-tr{
                    position: absolute;
                    color: $Eunry-LightVibrant;
                    font-size: 70px;
                    top: -70px;
                    left: 10px;
                }
    }
}
</style>