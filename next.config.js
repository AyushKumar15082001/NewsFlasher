/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
        {
            protocol: 'https',
            hostname: '**',
            port: '',
            pathname: '**',
        },
      ],
      domains: ["www.si.com","cdn.wionews.com","www.thestreet.com", "www.cricbuzz.com","arizonasports.com"],
},
}

module.exports = nextConfig
