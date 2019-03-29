// Code your solution in this file!
function distanceFromHqInBlocks(block) {
  if (block > 42) {
    return block - 42
  }
  if (block < 42) {
    return 42 - block
  }
};
function distanceFromHqInFeet(block) {
  return distanceFromHqInBlocks(block) * 264
};
function distanceTravelledInFeet(start, destination) {
  if (start < destination) {
    return (destination - start) * 264
  }
  if (destination - start) {
    return (start - destination) * 264
  }
};
function calculatesFarePrice(start, destination) {

};
