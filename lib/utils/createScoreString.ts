export const createScoreString = (score: number): string => {
  if (score < 0) {
    return `-$${Math.abs(score).toLocaleString()}`;
  }

  return `$${score.toLocaleString()}`;
};
