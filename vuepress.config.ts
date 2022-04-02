import { defineUserConfig } from 'vuepress'
import type { DefaultThemeOptions } from 'vuepress'

export default defineUserConfig<DefaultThemeOptions>({
	// site config
	lang: 'en-US',
	title: 'Moddie',
	description: 'Just playing around',

	head: [
		['script', { src: 'https://analytics.zdigus.net/umami.js', async: true, defer: true, 'data-website-id': '75ce02ef-2289-4ee6-b78d-660acec662b3', 'data-do-not-track': 'true' }],
	],

	// theme and its config
	theme: '@vuepress/theme-default',
	themeConfig: {
		repo: 'ModdieDiscord/Moddie',
		docsBranch: 'master',
		docsRepo: 'ModdieDiscord/docs',
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
				collapsible: true,
				children: [
					{
						text: 'Self-host with the public Developer API',
						link: '/docs/self-host/selfhost-public-api/',
						children: []
					}
				]
			}
		]
	},
})