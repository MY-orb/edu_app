import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    { path: '/', component: '@/pages/index' },
    { path: '/test', component: '@/pages/test/index' },
  ],
  fastRefresh: {},
  eslintConfig: {
    // extends: [require.resolve('@umijs/fabric/dist/eslint')],
    extends: 'react-app',
  },
});
