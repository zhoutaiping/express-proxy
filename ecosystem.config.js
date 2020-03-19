module.exports = {
  /**
   * http://pm2.keymetrics.io/docs/usage/application-declaration/
   */
  apps: [
    {
      name: 'express-router',
      script: './bin/www',
      env_release: {
        API_ENV: 'release',
        NODE_ENV: 'production'
      }

    }
  ]
}
