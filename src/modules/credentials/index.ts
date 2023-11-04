import { fromContainerMetadata, fromEnv } from '@aws-sdk/credential-providers'

export function getDynamicCredential() {
  return fromEnv()()
    .then(() => fromEnv())
    .catch(() => fromContainerMetadata())
}
