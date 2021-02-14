module.exports = {
  transform: {
    '^.+\\.svelte$': ['svelte-jester', { preprocess: true }],
    '^.+\\.ts$': 'ts-jest',
    '^.+\\.js$': 'babel-jest',
  },
  moduleFileExtensions: [
    'svelte',
    'ts',
    'js',
  ],
  moduleNameMapper: {
    '@/(.*)$': '<rootDir>/src/$1',
  },
}