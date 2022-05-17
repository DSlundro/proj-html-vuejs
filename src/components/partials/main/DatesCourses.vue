<template>
    <section class="dates">
        <div class="container">
            <div class="row m-0">
                <div class="col-6 d-flex text-center justify-content-between">
                    <div class="dc-card">
                        <h6>Successfully <br> trained</h6>
                        <h2>1790</h2>
                        <p>Enrolled learners</p>
                    </div>
                    <div class="dc-card">
                        <h6>Proudly <br> Received</h6>
                        <h2>19</h2>
                        <p>Countrywide Awards</p>
                    </div>
                </div>
                <div class="col-6 d-flex text-center justify-content-between">
                    <div class="dc-card">
                        <h6>Firmly <br> Established</h6>
                        <h2>24</h2>
                        <p>Local branches</p>
                    </div>
                    <div class="dc-card">
                        <h6>Getting <br> Featured on</h6>
                        <h2>1090</h2>
                        <p>Blog posts</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: 'DatesCourses',
}
</script>

<style lang="scss" scoped>
.col-6:first-child{border-left: 2px solid $Hint-of-Red;}
.col-6:last-child{border-left: 2px solid $Hint-of-Red;border-right: 2px solid $Hint-of-Red;}
.dc-card{
    padding: 70px 0px;
    margin: 0 55px;
    h6  {font-size: 22px; font-weight: 500;}
    h2  {font-size: 50px; color: $Mountain-Meadow; font-weight: bold;}
    p   {font-size: 16px; color: $Shady-Lady; text-transform: uppercase;}
}
</style>