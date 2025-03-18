import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons"; // Import LinkedIn icon

library.add(faEnvelope, faLinkedin, faGithub);

const app = createApp(App);
app.component("font-awesome-icon", FontAwesomeIcon);
app.mount('#app')
