import {
  NumberKeyValue,
  duoLayer,
  hyperLayer,
  ifApp,
  ifDevice,
  ifVar,
  layer,
  map,
  mapDoubleTap,
  rule,
  simlayer,
  toApp,
  withCondition,
  withMapper,
  writeToProfile,
} from 'karabiner.ts';

const ifAppleKeyboard = ifDevice({ vendor_id: 1452 });

const rules = [
  layer('spacebar', 'num-layer').manipulators([
    withCondition(ifAppleKeyboard)([
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
  layer('caps_lock', 'nav-layer').manipulators([
    withCondition(ifAppleKeyboard)([
      map('h').to('left_arrow'),
      map('j').to('down_arrow'),
      map('k').to('up_arrow'),
      map('l').to('right_arrow'),
    ]),
  ]),
  // rule('capslock is ctrl and esc', ifAppleKeyboard).manipulators([
  //   map('caps_lock', 'optionalAny').to('left_control').toIfAlone('escape'),
  // ]),
  // rule('a and ; are ctrls', ifAppleKeyboard).manipulators([
  //   map('a', 'optionalAny').to('left_control', undefined, {}).toIfAlone('a'),
  //   map('semicolon', 'optionalAny').to('right_control').toIfAlone('semicolon'),
  // ]),

  // rule('f and j are shift', ifAppleKeyboard).manipulators([
  //   map('f', 'optionalAny').to('left_shift').toIfAlone('f'),
  //   map('j', 'optionalAny').to('right_shift').toIfAlone('j'),
  // ]),
];

writeToProfile('dcai', rules, {
  'simlayer.threshold_milliseconds': 80,
  'basic.to_if_alone_timeout_milliseconds': 500,
  'basic.to_if_held_down_threshold_milliseconds': 500,
  'basic.to_delayed_action_delay_milliseconds': 500,
  'basic.simultaneous_threshold_milliseconds': 50,
});
