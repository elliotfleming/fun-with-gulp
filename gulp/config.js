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
  bower: {
    styles: {
      src: "bower_components/**/*.css",
      dest: dest + "/styles",
      name: "vendor.css"
    },
    scripts: {
      src: "bower_components/**/*.js",
      dest: dest + "/js",
      name: "vendor.js"
    }
  },
  stylus: {
    src: src + "/**/*.styl",
    dest: dest + "/styles",
    name: "app.css"
  }
};