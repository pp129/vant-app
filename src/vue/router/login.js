const login = () =>
	import(/* webpackChunkName: "login" */ "@/views/login/login");

export default [
	{
		path: "/",
		name: "login",
		component: login
	},
	{
		path: "*",
		redirect: {
			name: "login"
		}
	}
];
