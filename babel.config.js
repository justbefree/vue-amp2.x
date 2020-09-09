module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset',
  ],
  plugins: [
    ["prismjs", {
      "languages": ["javascript", "css", "markup"],
      "plugins": ["line-numbers"],
      // "theme": "twilight",
      // "theme": "tomorrow",
      // "theme": "coy",
      "theme": "okaidia",
      "css": true
    }]
  ]
};
