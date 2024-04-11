import {
  ifApp,
  ifVar,
  layer,
  map,
  mapDoubleTap,
  withCondition,
  NumberKeyValue,
  rule,
  simlayer,
  withMapper,
  ifDevice,
  writeToProfile,
} from 'karabiner.ts';

const ifMacbookBuiltInKeyboard = ifDevice({ vendor_id: 1452, product_id: 834 });

writeToProfile('apple_keyboard', [
  simlayer('spacebar', 'num-layer').manipulators([
    withCondition(ifMacbookBuiltInKeyboard)([
      map('q').to('1'),
      map('w').to('2'),
      map('e').to('3'),
      map('a').to('4'),
      map('s').to('5'),
      map('d').to('6'),
      map('z').to('7'),
      map('x').to('8'),
      map('c').to('9'),
      map('v').to('0'),
      map('f').to('period'),
    ]),
  ]),
  simlayer('s', 'nav-layer').manipulators([
    withCondition(ifMacbookBuiltInKeyboard)([
      map('h').to('left_arrow'),
      map('j').to('down_arrow'),
      map('k').to('up_arrow'),
      map('l').to('right_arrow'),
    ]),
  ]),
  rule('a and ; are ctrls', ifMacbookBuiltInKeyboard).manipulators([
    map('a').to('left_control').toIfAlone('a'),
    map('semicolon').to('right_control').toIfAlone('semicolon'),
  ]),
  rule('f and j are shift', ifMacbookBuiltInKeyboard).manipulators([
    map('f').to('left_shift').toIfAlone('f'),
    map('j').to('right_shift').toIfAlone('j'),
  ]),
]);
