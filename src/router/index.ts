import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import OfferView from '../views/OfferView.vue'
import WorkMethodsView from '../views/WorkMethodsView.vue'
import TreatmentsView from '../views/TreatmentsView.vue'
import PricingView from '../views/PricingView.vue'
import ContactView from '../views/ContactView.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/o-mnie',
    name: 'about',
    component: AboutView
  }
  ,
  {
    path: '/oferta',
    name: 'offer',
    component: OfferView
  },
  {
    path: '/jak-pracuje',
    name: 'workmethods',
    component: WorkMethodsView
  },
  {
    path: '/zabiegi',
    name: 'treatments',
    component: TreatmentsView
  },
  {
    path: '/cennik',
    name: 'pricing',
    component: PricingView
  },
  {
    path: '/kontakt',
    name: 'contact',
    component: ContactView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
