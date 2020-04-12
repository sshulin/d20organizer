import calcBuffedStats from './calcBuffedStats';
import calcStatsDelta from './calcStatsDelta';

const calcResult = (character, buffs) => {
  const buffData = buffs.filter((buff) => character.buffs.indexOf(buff.code) !== -1);

  return {
    stats: calcBuffedStats(character.stats, buffData),
    delta: calcStatsDelta(character.stats, calcBuffedStats(character.stats, buffData))
  }
}

export default calcResult;