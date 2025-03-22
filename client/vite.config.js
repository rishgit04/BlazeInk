import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

// https://vitejs.dev/config/
//const VITE_SERVER = import.meta.env.VITE_API_URL
export default defineConfig({
  plugins: [react()],
});
