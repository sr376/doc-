module.exports = {
    presets: [
      '@babel/preset-env', // Transpiles modern JS to support older browsers
      '@babel/preset-react' // For React JSX/JSX-like syntax
    ],
    plugins: [
      '@babel/plugin-proposal-class-properties' // For class properties (if needed)
    ]
  };
  
