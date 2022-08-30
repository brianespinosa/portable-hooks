// eslint-disable-next-line @typescript-eslint/no-var-requires
const withNx = require('@nrwl/next/plugins/with-nx');
const theme = require('shiki/themes/dracula.json');

const { remarkCodeHike } = require('@code-hike/mdx');

const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [[remarkCodeHike, { theme, lineNumbers: true }]],
    providerImportSource: '@mdx-js/react',
  },
});

/**
 * @type {import('@nrwl/next/plugins/with-nx').WithNxOptions}
 **/
const nextConfig = {
  nx: {
    // Set this to true if you would like to to use SVGR
    // See: https://github.com/gregberge/svgr
    svgr: false,
  },
};

module.exports = withNx(
  withMDX({
    ...nextConfig,
    pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
  })
);
