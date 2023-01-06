Array.prototype.first = function (n) {
  if (!arguments.length) {
    return this[0];
  } else {
    return this.slice(0, Math.max(0, n));
  }
};

Array.prototype.last = function (n) {
  if (!arguments.length) {
    return this[this.length - 1];
  } else {
    return this.slice(Math.max(0, this.length - n));
  }
};

String.prototype.capitalize = function () {
  return this.charAt(0).toUpperCase() + this.slice(1);
};
