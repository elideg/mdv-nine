module.exports = {
  name: 'ui-libaries',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/ui-libaries',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
