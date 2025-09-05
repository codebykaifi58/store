import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// 👇 Match this exactly to your GitHub repo name
const repoName = 'store'

export default defineConfig({
  plugins: [react()],
  base: `/${repoName}/`, // 👈 Case-sensitive!
})
