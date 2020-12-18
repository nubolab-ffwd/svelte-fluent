const commonConfig = {
  transform: {
    '^.+\\.js$': [
      'babel-jest',
      {
        presets: [
          [
            '@babel/preset-env',
            {
              targets: {
                node: 'current'
              }
            }
          ]
        ]
      }
    ],
    '\\.svelte$': 'jest-transform-svelte'
  },
  transformIgnorePatterns: [
    'node_modules/(?!(@fluent/dom)/)'
  ],
  moduleFileExtensions: [
    'js',
    'svelte',
    'json'
  ],
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': '<rootDir>/__mocks__/fileMock.js',
    '\\.(css|scss|stylesheet)$': '<rootDir>/__mocks__/styleMock.js'
  },
  setupFilesAfterEnv: [
    '@testing-library/jest-dom/extend-expect'
  ],
  testPathIgnorePatterns: [
    '/node_modules/',
    '/build/',
    '/storybook-static/'
  ]
}

const domConfig = {
  name: 'svelte-fluent DOM',
  ...commonConfig,
  transform: {
    ...commonConfig.transform,
    '\\.svelte$': 'jest-transform-svelte'
  },
  testMatch: ['**/*.test.js']
}

const ssrConfig = {
  name: 'svelte-fluent SSR',
  ...commonConfig,
  transform: {
    ...commonConfig.transform,
    '\\.svelte$': [
      'jest-transform-svelte',
      {
        compilerOptions: {
          generate: 'ssr'
        }
      }
    ]
  },
  testMatch: ['**/*.test.ssr.js']
}

module.exports = {
  projects: [domConfig, ssrConfig]
}
