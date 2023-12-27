import { createScoreString } from '../createScoreString';

test('should return a string with a preceding dollar sign', () => {
  const score = 500;
  const scoreString = createScoreString(score);
  expect(scoreString).toEqual('$500');
});

test('should return a string with a negative sign for scores lower than 0', () => {
  const score = -500;
  const scoreString = createScoreString(score);
  expect(scoreString).toEqual('-$500');
});

test('should include a comma in scores greater than 1,000', () => {
  const score = 2500;
  const scoreString = createScoreString(score);
  expect(scoreString).toEqual('$2,500');
});
