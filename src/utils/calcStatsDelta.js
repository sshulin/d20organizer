const calcStatsDelta = (oldStats, newStats) => {
  let delta = {};

  Object.keys(newStats).forEach((key) => {
    delta[key] = newStats[key] - oldStats[key];
  })

  return delta;
}

export default calcStatsDelta;