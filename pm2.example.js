module.exports = {
  apps: [
    {
      name: 'mtec-website',
      exec_mode: 'cluster',
      instances: 'max',
      args: ['-r dotenv/config'],
      cwd: './client',
      script: './.output/server/index.mjs',
      env: { PORT: 8080 },
    },
    {
      name: 'mtec-cms',
      script: 'npm',
      args: 'run serve',
      cwd: './cms',
    },
  ],
};
