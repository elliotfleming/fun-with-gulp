var src = './src';
var dest = "./build";

module.exports = {
  build: {
    src: src,
    dest: dest
  },
  assets: {
    src: src + "/assets/**/*",
    dest: dest
  },
  stylus: {
    src: src + "/**/*.styl",
    dest: dest + "/styles"
  }
};