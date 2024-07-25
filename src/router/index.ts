import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import HomeView from "../views/HomeView.vue";
import AboutView from "../views/AboutView.vue";
import OfferView from "../views/OfferView.vue";
import WorkMethodsView from "../views/WorkMethodsView.vue";
import TreatmentsView from "../views/TreatmentsView.vue";
import PricingView from "../views/PricingView.vue";
import ContactView from "../views/ContactView.vue";

const routes: Array<RouteRecordRaw> = [
	{
		path: "/",
		name: "home",
		component: HomeView,
	},
	{
		path: "/o-mnie",
		name: "about",
		component: AboutView,
	},
	{
		path: "/oferta",
		name: "offer",
		component: OfferView,
	},
	{
		path: "/zakres-uslug",
		name: "workmethods",
		component: WorkMethodsView,
	},
	{
		path: "/zabiegi",
		name: "treatments",
		component: TreatmentsView,
	},
	{
		path: "/cennik",
		name: "pricing",
		component: PricingView,
	},
	{
		path: "/kontakt",
		name: "contact",
		component: ContactView,
	},
];

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes,
	scrollBehavior(to) {
		if (to.hash) {
			return new Promise((resolve) => {
				setTimeout(() => {
					const element = document.querySelector(to.hash);
					if (element) {
						const yOffset = -70; // Adjust the offset value as needed
						const y =
							element.getBoundingClientRect().top +
							window.pageYOffset +
							yOffset;
						window.scrollTo({ top: y, behavior: "smooth" });
					}
					resolve();
				}, 0);
			});
		}
		return { top: 0 };
	},
});

export default router;
