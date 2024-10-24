import { defineConfig } from 'astro/config';
import { pluginLineNumbers } from '@expressive-code/plugin-line-numbers';

import mdx from '@astrojs/mdx';
import icon from 'astro-icon';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';
import expressiveCode from 'astro-expressive-code';

import remarkReadingTime from './src/utils/remarkReadingTime';
import remarkUnwrapImages from 'remark-unwrap-images';
import rehypeExternalLinks from 'rehype-external-links';

import vercel from '@astrojs/vercel/static';

export default defineConfig({
	site: 'https://developershihab.com',
	integrations: [
		icon(),
		sitemap(),
		tailwind({ applyBaseStyles: false }),
		expressiveCode({
			themes: ['github-dark-default', 'github-light'],
			themeCssSelector: (theme, { styleVariants }) => {
				if (styleVariants.length >= 2) {
					const baseTheme = styleVariants[0]?.theme;
					const altTheme = styleVariants.find((v) => v.theme.type !== baseTheme?.type)?.theme;
					if (theme === baseTheme || theme === altTheme) return `[data-theme='${theme.type}']`;
				}
				return `[data-theme="${theme.name}"]`;
			},
			useThemedScrollbars: false,
			styleOverrides: {
				frames: { frameBoxShadowCssValue: 'none' },
				uiLineHeight: 'inherit',
				codeFontSize: '0.875rem',
				codeLineHeight: '1.6rem',
				borderRadius: '4px',
				codePaddingInline: '1rem'
			},
			plugins: [pluginLineNumbers()],
			defaultProps: {
				showLineNumbers: false,
				overridesByLang: {
					'html,css,js,ts,jsx,tsx,java,python,php,c,cpp': {
						showLineNumbers: true
					}
				}
			}
		}),
		mdx(),
		react()
	],
	markdown: {
		remarkPlugins: [remarkUnwrapImages, remarkReadingTime],
		rehypePlugins: [
			[rehypeExternalLinks, { target: '_blank', rel: ['nofollow, noopener, noreferrer'] }]
		],
		remarkRehype: { footnoteLabelProperties: { className: [''] } }
	},
	output: 'static',
	adapter: vercel({ webAnalytics: { enabled: true } })
});
