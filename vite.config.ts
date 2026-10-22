import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// VITE_BASE is "/" for a site at the root of a domain. For GitHub Pages project sites
// (https://user.github.io/repo-name/) the deploy workflow sets it to "/repo-name/".
export default defineConfig({ base: process.env.VITE_BASE || "/", plugins: [react()] });
