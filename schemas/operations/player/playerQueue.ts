import { YamlConfig } from '@graphql-mesh/types'

const operation: YamlConfig.JsonSchemaHTTPOperation = {
  type: 'Mutation',
  field: 'playerQueue',
  method: 'PUT',
  description:
    'Add an item to queue: Add an item to the end of the user’s current playback queue.',
  path: '/me/player/queue?uri={args.uri}',
  responseTypeName: 'Void',
}

export default operation
