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
                    <div class="col-3">
                        <ul>
                            <th>Explore</th>
                            <li>Start here</li>
                            <li>Blog</li>
                            <li>About us</li>
                        </ul>
                    </div>
                    <div class="col-3">
                        <ul>
                            <th><br></th>
                            <li>Success story</li>
                            <li>Courses</li>
                            <li>Contact us</li>
                        </ul>
                    </div>
                    <div class="col-3">
                        <ul>
                            <th>Information</th>
                            <li>Membership</li>
                            <li>Purchase guide</li>
                            <li>Privacy policy</li>
                            <li>Terms of services</li>
                        </ul>
                    </div>
                </div>

                <div class="col-12 text-center pt-5">
                    <p>&copy; 2020 Maxcoach. All Rights Reserved</p>
                </div>
            </div>
        </div>
    </footer>
</template>

<script>
export default {
    name: 'FooterSite'
}
</script>

<style lang="scss" scoped>
footer{
    color: $Shady-Lady;
    p{
        font-size: 14px;
    }
    ul{
        th{color: black; padding-bottom: 5px;}
        li{list-style: none; padding: 5px 0; font-size: 14px;}
    }

}
</style>