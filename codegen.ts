import 'dotenv/config'
import type { CodegenConfig } from '@graphql-codegen/cli'
 
const config: CodegenConfig = {
   schema: process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT_URL ?? "https://spacex-production.up.railway.app/",
documents: ['src/**/*.{ts,tsx}'],
   ignoreNoDocuments: true,
   generates: {
      './src/gql/': {
        preset: 'client',
      }
   }
}
export default config