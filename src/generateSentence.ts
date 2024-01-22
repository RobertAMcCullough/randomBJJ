import { allMoves } from './moves';
import { getRandomValue } from './helperFunctions';
import { GenerateSentenceProps } from './types';

export function generateSentence({
  personOne,
  personTwo,
}: GenerateSentenceProps): string {
  if (!personTwo) {
    return `${personOne}'s favorite move is ${getRandomValue(allMoves)}`;
  }

  return `${personOne} performed a ${getRandomValue(allMoves)} on ${personTwo}`;
}

export function generateSentenceNoProps(
  personOne: string,
  personTwo: string
 ): string {
  if (!personTwo) {
    return `${personOne}'s favorite move is ${getRandomValue(allMoves)}`;
  }

  return `${personOne} performed a ${getRandomValue(allMoves)} on ${personTwo}`;
}
