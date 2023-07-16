export const tagColors = [
  'yellow',
  'magenta',
  'red',
  'volcano',
  'orange',
  'lime',
  'green',
  'cyan',
  'blue',
  'gold',
  'geekblue',
  'purple',
  'pink',
]; //13

export const defineTagColor = (tagUrl) => {
  const arr = tagUrl.split('/');
  const tagId = arr[arr.length - 2];

  if (tagId < tagColors.length) {
    return tagColors[tagId];
  } else {
    return tagColors[Math.trunc((14 / tagColors.length) * 10)];
  }
};
