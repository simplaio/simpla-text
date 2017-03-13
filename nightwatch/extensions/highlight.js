module.exports = {
  command(count = 1, direction = 'right', meter = 'word') {
    let keys = [
      this.Keys.SHIFT,
      direction === 'right' ? this.Keys.RIGHT_ARROW : this.Keys.LEFT_ARROW
    ];

    if (meter === 'word') {
      keys.unshift(this.Keys.ALT);
    }

    for (let i = 0; i < count; i++) {
      this.keys(keys);
      this.keys(this.Keys.NULL);
    }
  }  
}
