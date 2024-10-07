/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack: (config, { isServer }) => {
      // 只在客户端配置 sourcemap
      if (!isServer) {
        config.devtool = 'source-map';
      }
  
      // 其他自定义 webpack 配置可以放在这里
  
      return config;
    },
  };
  
  export default nextConfig;