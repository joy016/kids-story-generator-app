import { defineConfig } from 'drizzle-kit';

export default defineConfig({
  schema: './config/schema.tsx',
  dialect: 'postgresql',
  dbCredentials: {
    url: 'postgresql://storydata_owner:hef1XcpWygU5@ep-summer-queen-a1w0zdin.ap-southeast-1.aws.neon.tech/storydata?sslmode=requires',
  },
  verbose: true,
  strict: true,
});
