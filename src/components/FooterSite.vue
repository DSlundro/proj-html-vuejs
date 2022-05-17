<template>
    <footer>
        <div class="container py-5">
            <div class="row">
                <div class="col-5">
                    <!-- ADDRESS -->
                    <div class="ft-address">
                        <div class="ft-address-title">
                            <h6 class="text-black">Address</h6>
                        </div>
                        <!-- DATES -->
                        <div class="ft-address-dates">
                            <p>382 NE 191st St # 87394 Miami, FL 33179-3899</p>
                            <p>+1(305) 547-9909 (9am - 5pm EST, Monday - Friday)</p>
                            <p>support@maxcoach.com</p>
                        </div>
                        <!-- SOCIAL -->
                        <div class="ft-address-social d-flex gap-4 fs-5">
                            <!-- FACEBOOK -->
                            <div class="ft-address-social-fb">
                                <font-awesome-icon icon="fa-brands fa-facebook-square" />
                            </div>
                            <!-- TWITTER -->
                            <div class="ft-address-social-tw">
                                <font-awesome-icon icon="fa-brands fa-twitter" />
                            </div>
                            <!-- INSTAGRAM -->
                            <div class="ft-address-social-ig">
                                <font-awesome-icon icon="fa-brands fa-instagram" />
                            </div>
                            <!-- LINKEDIN -->
                            <div class="ft-address-social-in">
                                <font-awesome-icon icon="fa-brands fa-linkedin" />
                            </div>
                        </div>
                    </div>
                </div>

                <!-- LISTS -->
                <div class="col-7 row m-0">
                    <FooterList :list="list" v-for="(list, index) in lists" :key="index"/>
                </div>

                <div class="col-12 text-center pt-5">
                    <p>&copy; 2020 Maxcoach. All Rights Reserved</p>
                </div>
            </div>
        </div>
    </footer>
</template>

<script>
import FooterList from '@/components/partials/footer/FooterList.vue'

export default {
    name: 'FooterSite',
    components:{
        FooterList,
    },
    data(){
        return{
            lists:[
                {
                    title: 'Explore',
                    items:[
                        {item: 'Start Here'},
                        {item: 'Blog'},
                        {item: 'About us'},
                    ]
                },
                {
                    items:[
                        {item: 'Success story'}, 
                        {item: 'Courses'}, 
                        {item: 'Contact us'}
                    ]
                },
                {
                    title: 'Information',
                    items:[
                        {item: 'Membership'}, 
                        {item: 'Purchase guide'}, 
                        {item: 'Privacy policy'}, 
                        {item: 'Terms of services'}
                    ]
                },
            ]
        }
    },
}
</script>

<style lang="scss" scoped>
footer{
    color: $Shady-Lady;
    p{
        font-size: 14px;
    }
    

}
</style>