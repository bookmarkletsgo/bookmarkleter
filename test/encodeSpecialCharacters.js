const bookmarkleter = require( '../bookmarkleter' );

exports.encodeSpecialCharacters = test => {
  const data = [
    [
      'var test = \'%"<>#@&?\';',
      'javascript:var%20test%20=%20\'%25%22%3C%3E%23%40%26%3F\';',
    ],
    [
      'var test = \'Iñtërnâtiônàlizætiøn\';',
      'javascript:var%20test%20=%20\'Iñtërnâtiônàlizætiøn\';',
    ],
    [
      'var test = "<a href=\\"#\\">hi</a>";',
      'javascript:var%20test%20=%20%22%3Ca%20href=%5C%22%23%5C%22%3Ehi%3C/a%3E%22;',
    ],
  ];

  data.forEach( ( [ input, output ] ) => test.equal( bookmarkleter( input ), output ) );

  test.done();
};
