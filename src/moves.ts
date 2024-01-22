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

const allMoves = [...chokes, ...armLocks, ...legLocks, ...sweeps]

export { chokes, armLocks, legLocks, sweeps, positions, allMoves };
