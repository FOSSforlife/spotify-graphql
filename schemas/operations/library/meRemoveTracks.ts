import { YamlConfig } from '@graphql-mesh/types'
import * as schema from 'functional-json-schema'

const operation: YamlConfig.JsonSchemaHTTPOperation = {
  type: 'Mutation',
  field: 'meRemoveTracks',
  method: 'DELETE',
  description:
    'Remove Tracks for Current User: Remove one or more Tracks from the current user’s ‘Your Music’ library.',
  path: '/me/tracks',
  requestSchema: schema.definition('MeRemoveTracksInput', {
    ids: schema.types.type('string', {
      description: 'A comma-separated list of the Spotify IDs.',
    }),
  }),
  responseTypeName: 'Void',
}

export default operation
