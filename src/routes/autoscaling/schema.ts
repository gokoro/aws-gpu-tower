import { Static, Type } from '@sinclair/typebox'

export const Autoscaling = Type.Object({
  desiredCapacity: Type.Number(),
})

export type AutoscalingType = Static<typeof Autoscaling>

export const AutoscalingReturn = Type.Object({
  requestId: Type.String(),
})

export type AutoscalingReturnType = Static<typeof AutoscalingReturn>
