<template>
    <div class="jumbotron">
        <aside class="d-flex flex-column gap-3 justify-content-center align-items-center">
            <font-awesome-icon icon="fa-solid fa-headset" />
            <font-awesome-icon icon="fa-solid fa-life-ring" />
            <font-awesome-icon icon="fa-solid fa-book" />
            <font-awesome-icon icon="fa-solid fa-cart-shopping" />
        </aside>
        <div class="container">
            <div class="row jb-row align-items-center py-5">

                <!-- LEFT COL -->
                <div class="col-5">

                    <!-- TITLE -->
                    <div class="jb-title">
                        <h1 class="display-5">
                            Distant learning for futher expansion
                        </h1>
                    </div>

                    <!-- DESCRIPTION -->
                    <div class="jb-description">
                        <p>
                            Learning is a life-long journey that in fact we never find
                            the terminate stop. Stop searching, enjoy the process.
                        </p>
                    </div>

                    <!-- BUTTON -->
                    <div class="jb-button py-3">
                        <button class="btn">
                            <font-awesome-icon icon="fa-solid fa-download" class="pe-2"/>
                            Download free guide
                        </button>
                    </div>

                    <!-- QUESTIONS -->
                    <div class="jb-question pt-1">
                        <p>
                            Have questions? 
                            <a href="#">Get Free Sample</a>
                        </p>
                    </div>
                </div>

                <!-- RIGHT COL -->
                <div class="col-7 d-flex justify-content-center">
                    <!-- IMG GROUP -->
                        <div class="jb-img">

                        <!-- CENTRAL IMG -->
                        <div class="rounded-img d-flex justify-content-center">
                            <img src="@/assets/img/about-me.jpg" alt="">
                        </div>

                        <!-- BACK IMG -->
                        <div class="jb-back-img">
                            <!-- LEFT IMG -->
                            <div class="jb-back-img-l d-flex flex-column gap-3">
                                <img src="@/assets/img/maxcoach-shape-08.png" alt="">
                                <img src="@/assets/img/maxcoach-shape-08.png" alt="">
                                <div class="jb-back-img-lb">
                                    <font-awesome-icon icon="fa-solid fa-o" />
                                </div>
                            </div>
                            <!-- BOTTOM IMG -->
                            <div class="jb-back-img-b">
                                <img src="@/assets/img/maxcoach-shape-07-150x150.png" alt="">
                            </div>
                            <!-- RIGHT IMG -->
                            <div class="jb-back-img-r">
                                <img src="@/assets/img/maxcoach-shape-02.png" alt="">
                            </div>
                        </div>
                    </div>
                </div>

                <!-- BOTTOM COL -->
                <div class="col-12 jb-clients-img">
                    <!-- CLIENTS IMG -->
                    <div class="row m-0 d-flex justify-content-between align-items-center py-5">
                        <div class="col-2">
                            <img src="@/assets/img/client-logo-01.png" alt="">
                        </div>
                        <div class="col-2" >
                            <img src="@/assets/img/client-logo-02.png" alt="">
                        </div>
                        <div class="col-2">
                            <img src="@/assets/img/client-logo-03.png" alt="">
                        </div>
                        <div class="col-2">
                            <img src="@/assets/img/client-logo-04.png" alt="">
                        </div>
                        <div class="col-2">
                            <img src="@/assets/img/client-logo-05.png" alt="">
                        </div>
                        <div class="col-2">
                            <img src="@/assets/img/client-logo-06.png" alt="">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'JumbotronSite'
}
</script>

<style lang="scss" scoped>
aside{
    background-color: $White;
    position: fixed;
    right: 0;
    top: 150px;
    box-shadow: 0 1px 7px $Shady-Lady;
    border-radius:5px;
    padding: 10px 7px;
    color: $Cod-Gray !important;
    svg{
        cursor: pointer;
    }
}
.jb-row{

    .jb-title{
        h1{
            color: $Cod-Gray;
            font-weight: $primary-font-weight;
        }
    }
    .jb-description{
        p{
            color: $Shady-Lady;
            font-size: 18px;
        }   
    }
    .jb-question{
        a{
            color: $Jungle-Green;
        }
    }
    .jb-img {
        position: relative;
        .rounded-img{
            position: relative;
            height: auto;
            z-index: 10;
            img{
                border-radius: 50%;
                width: 85% !important;
            }
        }
        .jb-back-img{
            width: 100%;
            height: 100%;
            position: absolute;
            top: 0;
            z-index: 9;
            .jb-back-img-l{
                position: absolute;
                top: 50%;
                transform: translate(0, -50%);
                left: -30px;
                img{
                    width: 90%;
                }
                .jb-back-img-lb svg{
                    font-size: 50px;
                    position: absolute;
                    color: $Eunry-LightVibrant;
                    bottom: 10px;
                    left: 45px;
                }
            }
            .jb-back-img-b{
                position: absolute;
                right: 85px;
                bottom: 10px;
            }
            .jb-back-img-r{
                position: absolute;
                right: -72px;
                top: 90px;
            }
        }
    }
    .jb-clients-img{
        text-align: center;
    }
}
</style>