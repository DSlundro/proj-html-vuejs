<template>
    <section class="companionship py-5">
        <div class="container py-5">
            <div class="row justify-content-between pb-5">

                <!-- LEFT -->
                <div class="ps-left col-7">
                    <!-- IMG -->
                    <div class="ps-img">
                        <div class="ps-front-img">
                            <img src="@/assets/img/poster.jpg" alt="">
                        </div>
                        <div class="ps-back-img">
                            
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
        .ps-subtitle{color: $Shady-Lady;}
        .ps-title{color: $Cod-Gray;
            span{color: $Mountain-Meadow;}
        }
        .ps-text{color: $Shady-Lady;}
        .ps-link a{color: $Mountain-Meadow;}
    }
}
</style>