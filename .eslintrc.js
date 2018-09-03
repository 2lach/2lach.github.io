module.exports = {
    extends: 'fyndiq',
    settings: {
      'import/resolver': {
        webpack: {
          config: 'build/webpack.dev.config.js',
        },
      },
    },
    rules: {
      // BFF pattern uses classes that don't necessarily use `this`
      'class-methods-use-this': 0,
      // associated control test
      'jsx-a11y/label-has-for': [0, {
        required: {
          some: ['nesting', 'id'],
        },
      }],
  
      // FIXME: shouldn't be disabled
      'react/prop-types': 1,
  
      // Accessibility methods are not crucial
      'jsx-a11y/no-static-element-interactions': 0,
      'jsx-a11y/click-events-have-key-events': 0,
      'jsx-a11y/no-autofocus': 0,
      'jsx-a11y/accessible-emoji': 0,
    }
  }
  