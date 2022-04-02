import { defineUserConfig } from 'vuepress'
import type { DefaultThemeOptions } from 'vuepress'

export default defineUserConfig<DefaultThemeOptions>({
	// site config
	lang: 'en-US',
	title: 'Moddie',
	description: 'Just playing around',

	// theme and its config
	theme: '@vuepress/theme-default',
	themeConfig: {
		navbar: [
			{
				text: 'Documentation',
				link: '/docs/'
			}
		],
		sidebar: [
			'/docs/',
			{
				text: 'Self-host',
				link: '/docs/self-host/',
				children: [
					'selfhost-public-api'
				]
			}
		]
	},
})