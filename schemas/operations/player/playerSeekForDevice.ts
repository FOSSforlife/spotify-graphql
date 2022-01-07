import { YamlConfig } from '@graphql-mesh/types'

const operation: YamlConfig.JsonSchemaHTTPOperation = {
  type: 'Mutation',
  field: 'playerSeekForDevice',
  method: 'PUT',
  description:
    'Seek To Position In Currently Playing Track: Seeks to the given position in the user’s currently playing track.',
  path:
    '/me/player/seek?device_id={args.device_id}&position_ms={args.position_ms}',
  responseTypeName: 'Void',
  argTypeMap: {
    position_ms: 'Int',
  },
}

export default operation
