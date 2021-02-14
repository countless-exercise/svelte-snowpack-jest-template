const production = process.env.NODE_ENV === 'production'

module.exports = {
  mount: {
    public: {url: '/', static: true},
    src: {url: '/dist'},
  },
  plugins: [
    '@snowpack/plugin-svelte',
    '@snowpack/plugin-dotenv',
    '@snowpack/plugin-typescript',
    '@snowpack/plugin-sass',
    '@snowpack/plugin-babel',
    '@snowpack/plugin-optimize'
  ],
  alias: {
    '~': './src',
    '@': './types'
  },
  devOptions: {
//    open: 'none',
//    port: 8079
  },
  routes: [
    /* Example: Enable an SPA Fallback in development: */
    // {"match": "routes", "src": ".*", "dest": "/index.html"},
  ],
  optimize: {/* 난독화 (Minify) */
    /* Example: Bundle your final build: */
    bundle: production,
  },
  packageOptions: {
    /* ... */
  },
  buildOptions: {
    sourceMap: !production// 소스 맵 사용 여부
  },
};
