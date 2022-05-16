import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

// Bootstrap
const bootstrap = require('bootstrap')
Vue.use(bootstrap)
import 'bootstrap/dist/js/bootstrap.min.js'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import specific icons */
import { faCircleUser, faFileLines, faUser,} from '@fortawesome/free-regular-svg-icons'
import { faBook, faCartShopping, faLifeRing,  faDownload, faMagnifyingGlass, faO, faHeadset, faRightLong, faCircle } from '@fortawesome/free-solid-svg-icons'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* add icons to the library */
library.add(
  faCircleUser, faMagnifyingGlass, faDownload, faO, 
  faCartShopping, faBook, faLifeRing, faHeadset, faRightLong, faFileLines, faUser, faCircle)

/* add font awesome icon component */
Vue.component('font-awesome-icon', FontAwesomeIcon)

new Vue({
  render: h => h(App),
}).$mount('#app')
