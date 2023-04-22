import { default as react, default as reactModuleReload } from '@vitejs/plugin-react';
import reactPageReload from '@vitejs/plugin-react-refresh';
import { defineConfig, loadEnv } from 'vite';
import jsconfigPaths from 'vite-jsconfig-paths';

// https://vitejs.dev/config/
export default defineConfig((args) => {
  // eslint-disable-next-line no-undef
  const env = loadEnv(args.mode, process.cwd());
  return {
    plugins: [jsconfigPaths(), react()],
    build: {
      sourcemap: true,
    },
  };
});
