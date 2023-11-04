import * as ag from '@aws-sdk/client-auto-scaling'

import config from '../../configs/index.js'
import { getDynamicCredential } from '../credentials/index.js'

interface GroupState {
  desiredCapacity?: number
}

async function getClient() {
  const client = new ag.AutoScalingClient({
    credentials: await getDynamicCredential(),
  })

  return client
}

export async function updateState(args: GroupState) {
  const client = await getClient()

  const state = new ag.UpdateAutoScalingGroupCommand({
    AutoScalingGroupName: config.AWS_AUTOSCALING_GROUP_NAME,
    DesiredCapacity: args.desiredCapacity,
  })

  return await client.send(state)
}
