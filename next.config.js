/* eslint-disable @typescript-eslint/no-var-requires */
const withPWA = require("next-pwa");

// @ts-ignore
const intercept = require("intercept-stdout")

// safely ignore recoil stdout warning messages 
function interceptStdout(text) {
  if (text.includes('Duplicate atom key')) {
    return ''
  }
  return text
}
// Intercept in dev and prod
intercept(interceptStdout)

/** @type {import('next').NextConfig} */
module.exports = withPWA({
  pwa: {
    disable:
      process.env.NODE_ENV === "development" ||
      process.env.NODE_ENV === "production",
    // delete two lines above to enable PWA in production deployment
    // add your own icons to public/manifest.json
    // to re-generate manifest.json, you can visit https://tomitm.github.io/appmanifest/
    dest: "public",
    register: true,
  },
  reactStrictMode: true,
  eslint: {
    dirs: ["src"],
  },
  
});

