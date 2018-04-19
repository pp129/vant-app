const tab_home = () =>
	import(/* webpackChunkName: "tabbar-home" */ "@/views/home/tabbar-home.vue");
const Tabbar = () =>
	import(/* webpackChunkName: "Tabbar" */ "@/vue/components/Tabbar/");

import { Toast } from "vant";

export default [
	{
		path: "/home",
		name: "home",
		components: {
			default: tab_home,
			tabbar: Tabbar
		},
		meta: {
			keepAlive: true
		}
	}
];
