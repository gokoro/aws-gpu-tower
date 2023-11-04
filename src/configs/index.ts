const requiredValues = {
  AWS_AUTOSCALING_GROUP_NAME: process.env.AWS_AUTOSCALING_GROUP_NAME as string,
}

const optionalValues = {
  AWS_ACCESS_KEY_ID: process.env.AWS_ACCESS_KEY_ID,
  AWS_SECRET_ACCESS_KEY: process.env.AWS_SECRET_ACCESS_KEY,
}

let k: keyof typeof requiredValues

for (k in requiredValues) {
  if (!requiredValues[k]) {
    throw new Error(`Required environment variable isn't set: ${k}`)
  }
}

export default { ...requiredValues, ...optionalValues }
