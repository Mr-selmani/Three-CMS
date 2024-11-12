import path from 'path'

import { payloadCloud } from '@payloadcms/plugin-cloud'
import { postgresAdapter } from '@payloadcms/db-postgres'
import { webpackBundler } from '@payloadcms/bundler-webpack'
import { buildConfig } from 'payload/config'
import { lexicalEditor } from '@payloadcms/richtext-lexical';
import { slateEditor } from '@payloadcms/richtext-slate';
import AdminLogo from './components/adminLogo';
import AdminIcon from './components/adminIcon';

import Users from './collections/Users';
import Projects from './collections/Projects';
import Articles from './collections/Articles';
import Partnerships from './collections/Partnerships';
import Media from './collections/Media';
import ArticleCategories from './collections/ArticleCategories';

export default buildConfig({
  admin: {
    user: Users.slug,
    bundler: webpackBundler(),
    css: path.resolve(__dirname, './assets/custom.scss'),
    components: {
      graphics: {
        Icon: AdminIcon,
        Logo: AdminLogo,
      }
    },
    meta: {
      favicon: '/assets/favicon.svg',
      titleSuffix: '- Three Content Managment System',
    }
  },
  collections: [
    Projects,
    Articles,
    ArticleCategories,
    Partnerships,
    Media,
    Users
  ],
  editor: slateEditor({}),
  typescript: {
    outputFile: path.resolve(__dirname, 'payload-types.ts'),
  },
  graphQL: {
    schemaOutputFile: path.resolve(__dirname, 'generated-schema.graphql'),
  },
  plugins: [payloadCloud()],
  db: postgresAdapter({
    pool: {
      connectionString: process.env.DATABASE_URI,
    },
  }),
  upload: {
    limits: {
      fileSize: 2000000, // 5MB, written in bytes
    },
  },
})
