module.exports = function reverse(n) {
  if (n < 0) {
    return Number(n.toString().split('').reverse().join('').replace('-', ''));
  }

  else {
    return Number(n.toString().split('').reverse().join(''));
  }
}
