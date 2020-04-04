const calcBuffedStats = (stats, buffs) => {
  let newStats = {};

  Object.keys(stats).forEach((statKey) => {
    newStats[statKey] = stats[statKey];

    buffs.forEach((buff) => {
      if(buff.bonuses && buff.bonuses[statKey]) {
        newStats[statKey] += buff.bonuses[statKey];
      }
    })
  })
  return newStats;
}

export default calcBuffedStats;