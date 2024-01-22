const chokes = [
  'Arm triangle',
  'Rear naked choke',
  'Triangle',
  'Guillotine',
  'Ezequiel choke',
  'North-South choke',
];

const armLocks = ['Arm bar', 'Americana', 'Kimura', 'Omoplata'];

const legLocks = [
  'Outside heel hook',
  'Inside heel hook',
  'Ankle lock',
  'Knee bar',
];

const sweeps = [
  'Scissor sweep',
  'Waiter sweep',
  'Flower sweep',
  'Sit up sweep',
];

const positions = [
  'Side control',
  'Mount',
  'Back',
  'Open guard',
  'Quarter guard',
  'Half guard',
  'Full guard',
  'Spider guard',
];

function getRandomValue(array) {
  return array[Math.floor(Math.random() * array.length)];
}

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

module.exports = {getChoke, getArmLock, getLegLock, getSweep, getPostion}
