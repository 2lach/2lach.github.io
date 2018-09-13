module.exports = {
    extends: 'fyndiq',
    
    settings: {
      'import/resolver': {
        webpack: {
          config: './webpack.config.js',
        },
      },
    },
    "parserOptions": {
      "ecmaFeatures": {
          "jsx": true,
          "modules": true,
          "experimentalObjectRestSpread": true
      }
  },
  "plugins": [
      "react"
  ],
    rules: {
      // BFF pattern uses classes that don't necessarily use `this`
      'class-methods-use-this': 0,
      // associated control test
      'jsx-a11y/label-has-for': [0, {
        required: {
          some: ['nesting', 'id'],
        },
      }],
      "comma-dangle" : 0,
      'react/prop-types': 1,
      "react/no-unused-styles": 0,
      "no-restricted-imports": 0,
      // Accessibility methods are not crucial
      'jsx-a11y/no-static-element-interactions': 0,
      'jsx-a11y/click-events-have-key-events': 0,
      'jsx-a11y/no-autofocus': 0,
      'jsx-a11y/accessible-emoji': 0,
    }
    
  }
  