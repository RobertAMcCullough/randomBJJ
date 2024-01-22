function getRandomValue(array: string[]) {
  return array[Math.floor(Math.random() * array.length)];
}

export { getRandomValue };
