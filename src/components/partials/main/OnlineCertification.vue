<template>
    <section class="certification py-5">
        <div class="container">
            <div class="row">
                <div class="col-12 d-flex flex-column text-center">
                    
                    <div class="co-text">
                            <!-- SUBTITLE -->
                        <div class="co-subtitle">
                            <h6 class="m-0 fs-5">Start today for getting <span>Online Certification</span></h6>
                        </div>
                        <!-- TITLE -->
                        <div class="co-title">
                            <h2>You can be your own guiding star with our help!</h2>
                        </div>
                        <!-- IMG -->
                        <div class="co-img">
                            <div class="co-img-tl">
                                <font-awesome-icon icon="fa-solid fa-o" />
                            </div>
                            <div class="co-img-bl">
                                <img src="@/assets/img/maxcoach-shape-01.png" alt="">
                            </div>
                            <div class="co-img-r">
                                <img src="@/assets/img/maxcoach-shape-02.png" alt="">
                            </div>
                        </div>
                    </div>

                    <!-- BUTTON -->
                    <div class="co-button col-12 d-flex justify-content-center py-2">
                        <button class="btn">Get started now</button>
                    </div>

                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: 'OnlineCertification'
}
</script>

<style lang="scss" scoped>
.certification{
    background-color: $Hint-of-Red;
    .co-text{
        position: relative;
        .co-subtitle{
            span{color: $Mountain-Meadow; font-weight: 200 !important;}
        }
        .co-img{
            width: 100%;
            position: absolute;
            img{width: 100%;}
            .co-img-tl{
                position: absolute;
                color: $Shady-Lady;
                font-size: 50px;
                left: 100px;
                top: -90px;
            }
            .co-img-bl{
                position: absolute;
                width: 100px;
                left: 100px;
                top: -10px;
            }
            .co-img-r{
                position: absolute;
                width: 80px;
                right: 60px;
                top: -10px;
            }
        }
    }
}
</style>