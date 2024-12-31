import * as K from 'karabiner.ts';

const ifAppleKeyboard = K.ifDevice({ vendor_id: 1452 });

const rules = [
  K.layer('/', 'num-layer').manipulators([
    K.withCondition(ifAppleKeyboard)([
      K.map('q').to('1'),
      K.map('w').to('2'),
      K.map('e').to('3'),
      K.map('a').to('4'),
      K.map('s').to('5'),
      K.map('d').to('6'),
      K.map('z').to('7'),
      K.map('x').to('8'),
      K.map('c').to('9'),
      K.map('v').to('0'),
      K.map('f').to('period'),
    ]),
  ]),
  K.layer('caps_lock', 'nav-layer').manipulators([
    K.withCondition(ifAppleKeyboard)([
      K.map('h').to('left_arrow'),
      K.map('j').to('down_arrow'),
      K.map('k').to('up_arrow'),
      K.map('l').to('right_arrow'),
    ]),
  ]),
  K.rule('; is ctrl', ifAppleKeyboard).manipulators([
    K.map('semicolon', 'optionalAny')
      .to('right_control')
      .toIfAlone('semicolon'),
  ]),
  K.rule('enter key is shift + ctrl', ifAppleKeyboard).manipulators([
    K.map('return_or_enter', 'optionalAny')
      .to('left_shift', 'left_control')
      .toIfAlone('return_or_enter'),
  ]),
  // rule('capslock is ctrl and esc', ifAppleKeyboard).manipulators([
  //   map('caps_lock', 'optionalAny').to('left_control').toIfAlone('escape'),
  // ]),
  // rule('f and j are shift', ifAppleKeyboard).manipulators([
  //   map('f', 'optionalAny').to('left_shift').toIfAlone('f'),
  //   map('j', 'optionalAny').to('right_shift').toIfAlone('j'),
  // ]),
];

K.writeToProfile('dcai', rules, {
  'simlayer.threshold_milliseconds': 80,
  'basic.to_if_alone_timeout_milliseconds': 500,
  'basic.to_if_held_down_threshold_milliseconds': 500,
  'basic.to_delayed_action_delay_milliseconds': 500,
  'basic.simultaneous_threshold_milliseconds': 50,
});
