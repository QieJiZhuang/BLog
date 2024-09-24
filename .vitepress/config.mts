import { defineConfig } from "vitepress";
import { set_sidebar } from "../.vitepress/utils/auto-gen-sidebar.mjs";
console.log(set_sidebar("/py/cc"));

// https://vitepress.dev/reference/site-config
export default defineConfig({
	base: "/BLog",
	title: "Mercurius的技术文档",
	description: "为了技术冲啊！",
	themeConfig: {
		outline: [2, 3],
		outlineTitle: "文章目录",
		// https://vitepress.dev/reference/default-theme-config
		nav: [
			// { text: "首页", link: "/" },
			{
				text: "前端基础",
				items: [
					{ text: "JS", link: "../front-end/JS/入门.md" },
					{ text: "Html", link: "/item-2" },
					{ text: "CSS", link: "/item-3" },
				],
			},
			{ text: "C#", link: "../backend/net/C#入门.md" },
		],
		sidebar: {
			"/front-end/JS": set_sidebar("/front-end/JS"),
			"/backend/net": set_sidebar("/backend/net"),
			"/py/cc": set_sidebar("/py/cc"),
		},
		search: {
			provider: "local",
			options: {
				translations: {
					button: {
						buttonText: "搜索文档",
						buttonAriaLabel: "搜索文档",
					},
					modal: {
						noResultsText: "无法找到结果",
						resetButtonTitle: "重置",
						footer: {
							selectText: "选择",
							navigateText: "切换",
						},
					},
				},
			},
		},

		socialLinks: [
			{ icon: "github", link: "https://github.com/vuejs/vitepress" },
		],
	},
});
