import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

// Bootstrap
const bootstrap = require('bootstrap')
Vue.use(bootstrap)
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import specific icons */
import { faCalendar, faCircleUser, faEye, faFileLines, faUser,} from '@fortawesome/free-regular-svg-icons'
import { faBook, faCartShopping, faLifeRing,  faDownload, faMagnifyingGlass, faO, faHeadset, faRightLong, faCircle } from '@fortawesome/free-solid-svg-icons'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faFacebookSquare, faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons'

/* add icons to the library */
library.add(
  faCircleUser, faMagnifyingGlass, faDownload, faO, 
  faCartShopping, faBook, faLifeRing, faHeadset, faRightLong, 
  faFileLines, faUser, faCircle, faCalendar, faEye, 
  faFacebookSquare, faTwitter, faInstagram, faLinkedin)

/* add font awesome icon component */
Vue.component('font-awesome-icon', FontAwesomeIcon)

new Vue({
  render: h => h(App),
}).$mount('#app')
