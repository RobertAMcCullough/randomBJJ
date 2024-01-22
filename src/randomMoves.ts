import { chokes, armLocks, legLocks, sweeps, positions } from './moves';
import { getRandomValue } from './helperFunctions';

function getChoke() {
  return getRandomValue(chokes);
}

function getArmLock() {
  return getRandomValue(armLocks);
}

function getLegLock() {
  return getRandomValue(legLocks);
}

function getSweep() {
  return getRandomValue(sweeps);
}

function getPostion() {
  return getRandomValue(positions);
}

export { getChoke, getArmLock, getLegLock, getSweep, getPostion };
