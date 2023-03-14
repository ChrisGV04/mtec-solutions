import dotenv from 'dotenv';
import path from 'path';
import { buildConfig } from 'payload/config';
import Media from './collections/Media';
import Users from './collections/Users';

dotenv.config({ path: path.resolve(__dirname, '../.env') });

export default buildConfig({
  maxDepth: 2,
  defaultDepth: 2,
  graphQL: { disable: true },
  serverURL: `${process.env.PAYLOAD_PUBLIC_SERVER_URL}`,
  cors: process.env.CORS_DOMAIN ? [process.env.CORS_DOMAIN] : '*',

  routes: {
    api: '/api',
    admin: '/admin',
  },

  admin: {
    user: Users.slug,
    meta: {
      titleSuffix: '- MTec Admin',
      favicon: '/favicon.png',
    },
    components: {
      graphics: {},
    },
  },

  globals: [],
  collections: [Users, Media],

  typescript: {
    outputFile: path.resolve(__dirname, 'payload-types.ts'),
  },
});
