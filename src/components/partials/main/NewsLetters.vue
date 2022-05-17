<template>
    <section class="newsletters py-5">
        <div class="container py-5">
            <div class="row justify-content-center">

                <div class="col-3">
                    <div class="nl-img-l">
                        <font-awesome-icon icon="fa-solid fa-o" />
                    </div>
                </div>

                <div class="col-5 text-center">
                    <!-- Title -->
                    <div class="nl-title py-2">
                        <h2>Subscribe <span>Newsletters</span></h2>
                    </div>
                    <!-- TITLE -->
                    <div class="nl-subtitle">
                        <p>
                            Enter your email address to register to our newsletter subscription delivered on a regular basis!
                        </p>
                    </div>
                    <!-- SUBSCRIBE -->
                    <div class="nl-subscribe pt-3">
                        <div class="input-group">
                            <div class="form-outline w-75">
                                <input type="search" id="form1" class="form-control" placeholder="Enter your email"/>
                            </div>
                            <button type="button" class="btn">Subscribe</button>
                        </div>
                    </div>
                </div>

                <div class="col-3">
                    <div class="nl-img-r">
                        <img src="@/assets/img/maxcoach-shape-02.png" alt="">
                    </div>
                </div>

            </div>
        </div>
    </section> 
</template>

<script>
export default {
    name:'NewsLetters',
}
</script>

<style lang="scss" scoped>
.newsletters{
    position: relative;
    .nl-title{
        h2{
            font-size: 36px;
        }
        span{color: $Mountain-Meadow; font-weight: 100;}
    }
    .nl-subtitle{
        color: $Shady-Lady;
        font-size: 16px;
    }
    .btn{
        width: 25% !important;     
    }
    input{
        background-color: $Hint-of-Red;
        border-radius: 0 !important;
        height: 100%;
        &:focus{box-shadow: none; border: 1px solid $Mountain-Meadow;}
    }
    .nl-img-r{
        position: relative;
        img{
            position: absolute;
            right: 0;
            top: 60px;
        }
    }
    .nl-img-l{
        position: absolute;
        font-size: 45px;
        color: $Mountain-Meadow;
        bottom: 130px;
    }
}
</style>