import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'


const mock_server = {
  name: "mock-counter-api",
  configureServer(server) {
    let count = 0;

    server.middlewares.use("/counter", (req, res, next) => {
      if (req.method !== "GET" && req.method !== "POST") return next();

      if (req.method === "POST") count += 1;

      res.statusCode = 200;
      res.setHeader("Content-Type", "application/json");
      res.end(JSON.stringify({ count }));
    });
  },
};

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),mock_server],
})
