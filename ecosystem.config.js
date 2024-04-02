module.exports = {
  apps: [
    {
      name: 'NuxtAppName',
      port: '3000',
      exec_mode: 'cluster',
      instances: '4',
      script: './.output/server/index.mjs',
      env: {
        NODE_ENV: "production",
        PORT: 3000,
      }
    }
  ]
}