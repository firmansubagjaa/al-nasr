import './index.css'

import { createApp } from 'vue'
import NavbarComponent from './components/NavbarComponent/NavbarComponent.vue'
import HeroComponent from './components/HeroComponent/HeroComponent.vue'
import FeatureComponent from './components/FeatureComponent/FeatureContent.vue'
import PackagesComponent from './components/PackagesComponent/PackagesComponent.vue'
import SponsorContent from './components/SponsorComponent/SponsorContent.vue'
import MarqueeText from 'vue-marquee-text-component'
import FacilitesContent from './components/FacilitiesComponent/FacilitesContent.vue'
import TestimonialComponent from './components/TestimonialComponent/TestimonialComponent.vue'
import FooterComponent from './components/FooterComponent/FooterComponent.vue'
import App from './App.vue'

const app = createApp(App)
app.component('NavbarComponent', NavbarComponent)
app.component('HeroComponent', HeroComponent)
app.component('FeatureComponent', FeatureComponent)
app.component('PackageComponent', PackagesComponent)
app.component('SponsorContent', SponsorContent)
app.component('FacilitiesComponent', FacilitesContent)
app.component('TestimonialComponent', TestimonialComponent)
app.component('FooterComponent', FooterComponent)
app.component('marquee-text', MarqueeText)
app.mount('#app')
