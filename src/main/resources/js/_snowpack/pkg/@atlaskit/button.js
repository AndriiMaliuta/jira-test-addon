import { c as createCommonjsModule, g as getDefaultExportFromCjs, r as react } from '../common/index-6fe79ff9.js';

var _extends_1 = createCommonjsModule(function (module) {
function _extends() {
  module.exports = _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  }, module.exports.__esModule = true, module.exports["default"] = module.exports;
  return _extends.apply(this, arguments);
}

module.exports = _extends, module.exports.__esModule = true, module.exports["default"] = module.exports;
});

var _extends = /*@__PURE__*/getDefaultExportFromCjs(_extends_1);

var arrayWithHoles = createCommonjsModule(function (module) {
function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

module.exports = _arrayWithHoles, module.exports.__esModule = true, module.exports["default"] = module.exports;
});

var iterableToArrayLimit = createCommonjsModule(function (module) {
function _iterableToArrayLimit(arr, i) {
  var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];

  if (_i == null) return;
  var _arr = [];
  var _n = true;
  var _d = false;

  var _s, _e;

  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

module.exports = _iterableToArrayLimit, module.exports.__esModule = true, module.exports["default"] = module.exports;
});

var arrayLikeToArray = createCommonjsModule(function (module) {
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

module.exports = _arrayLikeToArray, module.exports.__esModule = true, module.exports["default"] = module.exports;
});

var unsupportedIterableToArray = createCommonjsModule(function (module) {
function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return arrayLikeToArray(o, minLen);
}

module.exports = _unsupportedIterableToArray, module.exports.__esModule = true, module.exports["default"] = module.exports;
});

var nonIterableRest = createCommonjsModule(function (module) {
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

module.exports = _nonIterableRest, module.exports.__esModule = true, module.exports["default"] = module.exports;
});

var slicedToArray = createCommonjsModule(function (module) {
function _slicedToArray(arr, i) {
  return arrayWithHoles(arr) || iterableToArrayLimit(arr, i) || unsupportedIterableToArray(arr, i) || nonIterableRest();
}

module.exports = _slicedToArray, module.exports.__esModule = true, module.exports["default"] = module.exports;
});

var _slicedToArray = /*@__PURE__*/getDefaultExportFromCjs(slicedToArray);

var objectWithoutPropertiesLoose = createCommonjsModule(function (module) {
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

module.exports = _objectWithoutPropertiesLoose, module.exports.__esModule = true, module.exports["default"] = module.exports;
});

var objectWithoutProperties = createCommonjsModule(function (module) {
function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = objectWithoutPropertiesLoose(source, excluded);
  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

module.exports = _objectWithoutProperties, module.exports.__esModule = true, module.exports["default"] = module.exports;
});

var _objectWithoutProperties = /*@__PURE__*/getDefaultExportFromCjs(objectWithoutProperties);

/* eslint-disable @atlaskit/design-system/ensure-design-token-usage */
var R100 = '#FF8F73';
var R300 = '#FF5630';
var R400 = '#DE350B';
var R500 = '#BF2600'; // Yellows
var Y200 = '#FFC400';
var Y300 = '#FFAB00';
var Y400 = '#FF991F';
var Y500 = '#FF8B00'; // Greens

var B50 = '#DEEBFF';
var B75 = '#B3D4FF';
var B100 = '#4C9AFF';
var B200 = '#2684FF';
var B300 = '#0065FF';
var B400 = '#0052CC';
var B500 = '#0747A6'; // Purples

var N0 = '#FFFFFF';
var N20 = '#F4F5F7';
var N70 = '#A5ADBA';
var N90 = '#8993A4';
var N200 = '#6B778C';
var N400 = '#505F79';
var N500 = '#42526E';
var N700 = '#253858';
var N800 = '#172B4D'; // ATTENTION: update the tints if you update this
var N20A = 'rgba(9, 30, 66, 0.04)';
var N30A = 'rgba(9, 30, 66, 0.08)';
var DN400 = '#9FB0CC';
var DN300 = '#8C9CB8';
var DN100 = '#67758F';
var DN70 = '#3B475C';
var DN60 = '#313D52';
var DN30 = '#1B2638';

var DN0 = '#0D1424'; // Each dark tint is made of DN0 and an alpha channel

/*
  These theme values are expressed as functions so that if we decide to make
  them dependent on props in the future, it wouldn't require a significant
  refactor everywhere they are being used.
*/

var borderRadius = function borderRadius() {
  return 3;
};
var gridSize = function gridSize() {
  return 8;
};
var fontSize = function fontSize() {
  return 14;
};

var _excluded = ["children"];

/**
 * createTheme is used to create a set of Providers and Consumers for theming components.
 * - Takes a default theme function; this theme function gets a set of props, and returns tokens
 *  based on those props. An example of this default theme function is one that produces the standard
 *  appearance of the component
 * - Returns three things - a Provider that allow for additional themes to be applied, a Consumer
 *  that can get the current theme and fetch it, and a custom hook - useTheme which provides an alternate (although functionally the same) API
 *  to the Consumer.
 */
function createTheme(defaultGetTokens) {
  var emptyThemeFn = function emptyThemeFn(getTokens, props) {
    return getTokens(props);
  };
  /**
   * Internally, Theme uses React Context, with internal providers and consumers.
   * The React Context passes only a function that gets props, and turns them into tokens. This
   * function gets mixed as more Providers with their own themes are added. This mixed function
   * is ultimately picked up by Consumers, which implement a context consumer internally to fetch
   * the theme.
   */


  var ThemeContext = /*#__PURE__*/react.createContext(defaultGetTokens);

  function useTheme(themeProps) {
    var theme = react.useContext(ThemeContext);
    var themeFn = theme || emptyThemeFn;
    var tokens = themeFn(themeProps);
    return tokens;
  } // The Theme Consumer takes a function as its child - this function takes tokens, and the
  // return value is generally a set of nodes with the tokens applied appropriately.


  function Consumer(props) {
    var children = props.children,
        themeProps = _objectWithoutProperties(props, _excluded); // @ts-ignore See issue for more info: https://github.com/Microsoft/TypeScript/issues/10727
    // Argument of type 'Pick<ThemeProps & { children: (tokens: ThemeTokens) => ReactNode; }, Exclude<keyof ThemeProps, "children">>' is not assignable to parameter of type 'ThemeProps'.ts(2345)


    var tokens = useTheme(themeProps); // We add a fragment to ensure we don't break people upgrading.
    // Previously they may have been able to pass in undefined without things blowing up.

    return /*#__PURE__*/react.createElement(react.Fragment, null, children(tokens));
  }
  /**
   * The Theme Provider takes regular nodes as its children, but also takes a *theme function*
   * - The theme function takes a set of props, as well as a function (getTokens) that can turn props into tokens.
   * - The getTokens function isn't called immediately - instead the props are passed
   *    through a mix of parent theming functions
   * Children of this provider will receive this mixed theme
   */


  function Provider(props) {
    var themeFn = react.useContext(ThemeContext);
    var valueFn = props.value || emptyThemeFn;
    var mixedFn = react.useCallback(function (themeProps) {
      return valueFn(themeFn, themeProps);
    }, [themeFn, valueFn]);
    return /*#__PURE__*/react.createElement(ThemeContext.Provider, {
      value: mixedFn
    }, props.children);
  }

  return {
    Consumer: Consumer,
    Provider: Provider,
    useTheme: useTheme
  };
}

var _createTheme = createTheme(function () {
  return {
    mode: 'light'
  };
}),
    useTheme = _createTheme.useTheme;

/*

Based off glamor's StyleSheet, thanks Sunil ❤️

high performance StyleSheet for css-in-js systems

- uses multiple style tags behind the scenes for millions of rules
- uses `insertRule` for appending in production for *much* faster performance

// usage

import { StyleSheet } from '@emotion/sheet'

let styleSheet = new StyleSheet({ key: '', container: document.head })

styleSheet.insert('#box { border: 1px solid red; }')
- appends a css rule into the stylesheet

styleSheet.flush()
- empties the stylesheet of all its contents

*/
// $FlowFixMe
function sheetForTag(tag) {
  if (tag.sheet) {
    // $FlowFixMe
    return tag.sheet;
  } // this weirdness brought to you by firefox

  /* istanbul ignore next */


  for (var i = 0; i < document.styleSheets.length; i++) {
    if (document.styleSheets[i].ownerNode === tag) {
      // $FlowFixMe
      return document.styleSheets[i];
    }
  }
}

function createStyleElement(options) {
  var tag = document.createElement('style');
  tag.setAttribute('data-emotion', options.key);

  if (options.nonce !== undefined) {
    tag.setAttribute('nonce', options.nonce);
  }

  tag.appendChild(document.createTextNode(''));
  return tag;
}

var StyleSheet =
/*#__PURE__*/
function () {
  function StyleSheet(options) {
    this.isSpeedy = options.speedy === undefined ? "production" === 'production' : options.speedy;
    this.tags = [];
    this.ctr = 0;
    this.nonce = options.nonce; // key is the value of the data-emotion attribute, it's used to identify different sheets

    this.key = options.key;
    this.container = options.container;
    this.before = null;
  }

  var _proto = StyleSheet.prototype;

  _proto.insert = function insert(rule) {
    // the max length is how many rules we have per style tag, it's 65000 in speedy mode
    // it's 1 in dev because we insert source maps that map a single rule to a location
    // and you can only have one source map per style tag
    if (this.ctr % (this.isSpeedy ? 65000 : 1) === 0) {
      var _tag = createStyleElement(this);

      var before;

      if (this.tags.length === 0) {
        before = this.before;
      } else {
        before = this.tags[this.tags.length - 1].nextSibling;
      }

      this.container.insertBefore(_tag, before);
      this.tags.push(_tag);
    }

    var tag = this.tags[this.tags.length - 1];

    if (this.isSpeedy) {
      var sheet = sheetForTag(tag);

      try {
        // this is a really hot path
        // we check the second character first because having "i"
        // as the second character will happen less often than
        // having "@" as the first character
        var isImportRule = rule.charCodeAt(1) === 105 && rule.charCodeAt(0) === 64; // this is the ultrafast version, works across browsers
        // the big drawback is that the css won't be editable in devtools

        sheet.insertRule(rule, // we need to insert @import rules before anything else
        // otherwise there will be an error
        // technically this means that the @import rules will
        // _usually_(not always since there could be multiple style tags)
        // be the first ones in prod and generally later in dev
        // this shouldn't really matter in the real world though
        // @import is generally only used for font faces from google fonts and etc.
        // so while this could be technically correct then it would be slower and larger
        // for a tiny bit of correctness that won't matter in the real world
        isImportRule ? 0 : sheet.cssRules.length);
      } catch (e) {
      }
    } else {
      tag.appendChild(document.createTextNode(rule));
    }

    this.ctr++;
  };

  _proto.flush = function flush() {
    // $FlowFixMe
    this.tags.forEach(function (tag) {
      return tag.parentNode.removeChild(tag);
    });
    this.tags = [];
    this.ctr = 0;
  };

  return StyleSheet;
}();

function stylis_min (W) {
  function M(d, c, e, h, a) {
    for (var m = 0, b = 0, v = 0, n = 0, q, g, x = 0, K = 0, k, u = k = q = 0, l = 0, r = 0, I = 0, t = 0, B = e.length, J = B - 1, y, f = '', p = '', F = '', G = '', C; l < B;) {
      g = e.charCodeAt(l);
      l === J && 0 !== b + n + v + m && (0 !== b && (g = 47 === b ? 10 : 47), n = v = m = 0, B++, J++);

      if (0 === b + n + v + m) {
        if (l === J && (0 < r && (f = f.replace(N, '')), 0 < f.trim().length)) {
          switch (g) {
            case 32:
            case 9:
            case 59:
            case 13:
            case 10:
              break;

            default:
              f += e.charAt(l);
          }

          g = 59;
        }

        switch (g) {
          case 123:
            f = f.trim();
            q = f.charCodeAt(0);
            k = 1;

            for (t = ++l; l < B;) {
              switch (g = e.charCodeAt(l)) {
                case 123:
                  k++;
                  break;

                case 125:
                  k--;
                  break;

                case 47:
                  switch (g = e.charCodeAt(l + 1)) {
                    case 42:
                    case 47:
                      a: {
                        for (u = l + 1; u < J; ++u) {
                          switch (e.charCodeAt(u)) {
                            case 47:
                              if (42 === g && 42 === e.charCodeAt(u - 1) && l + 2 !== u) {
                                l = u + 1;
                                break a;
                              }

                              break;

                            case 10:
                              if (47 === g) {
                                l = u + 1;
                                break a;
                              }

                          }
                        }

                        l = u;
                      }

                  }

                  break;

                case 91:
                  g++;

                case 40:
                  g++;

                case 34:
                case 39:
                  for (; l++ < J && e.charCodeAt(l) !== g;) {
                  }

              }

              if (0 === k) break;
              l++;
            }

            k = e.substring(t, l);
            0 === q && (q = (f = f.replace(ca, '').trim()).charCodeAt(0));

            switch (q) {
              case 64:
                0 < r && (f = f.replace(N, ''));
                g = f.charCodeAt(1);

                switch (g) {
                  case 100:
                  case 109:
                  case 115:
                  case 45:
                    r = c;
                    break;

                  default:
                    r = O;
                }

                k = M(c, r, k, g, a + 1);
                t = k.length;
                0 < A && (r = X(O, f, I), C = H(3, k, r, c, D, z, t, g, a, h), f = r.join(''), void 0 !== C && 0 === (t = (k = C.trim()).length) && (g = 0, k = ''));
                if (0 < t) switch (g) {
                  case 115:
                    f = f.replace(da, ea);

                  case 100:
                  case 109:
                  case 45:
                    k = f + '{' + k + '}';
                    break;

                  case 107:
                    f = f.replace(fa, '$1 $2');
                    k = f + '{' + k + '}';
                    k = 1 === w || 2 === w && L('@' + k, 3) ? '@-webkit-' + k + '@' + k : '@' + k;
                    break;

                  default:
                    k = f + k, 112 === h && (k = (p += k, ''));
                } else k = '';
                break;

              default:
                k = M(c, X(c, f, I), k, h, a + 1);
            }

            F += k;
            k = I = r = u = q = 0;
            f = '';
            g = e.charCodeAt(++l);
            break;

          case 125:
          case 59:
            f = (0 < r ? f.replace(N, '') : f).trim();
            if (1 < (t = f.length)) switch (0 === u && (q = f.charCodeAt(0), 45 === q || 96 < q && 123 > q) && (t = (f = f.replace(' ', ':')).length), 0 < A && void 0 !== (C = H(1, f, c, d, D, z, p.length, h, a, h)) && 0 === (t = (f = C.trim()).length) && (f = '\x00\x00'), q = f.charCodeAt(0), g = f.charCodeAt(1), q) {
              case 0:
                break;

              case 64:
                if (105 === g || 99 === g) {
                  G += f + e.charAt(l);
                  break;
                }

              default:
                58 !== f.charCodeAt(t - 1) && (p += P(f, q, g, f.charCodeAt(2)));
            }
            I = r = u = q = 0;
            f = '';
            g = e.charCodeAt(++l);
        }
      }

      switch (g) {
        case 13:
        case 10:
          47 === b ? b = 0 : 0 === 1 + q && 107 !== h && 0 < f.length && (r = 1, f += '\x00');
          0 < A * Y && H(0, f, c, d, D, z, p.length, h, a, h);
          z = 1;
          D++;
          break;

        case 59:
        case 125:
          if (0 === b + n + v + m) {
            z++;
            break;
          }

        default:
          z++;
          y = e.charAt(l);

          switch (g) {
            case 9:
            case 32:
              if (0 === n + m + b) switch (x) {
                case 44:
                case 58:
                case 9:
                case 32:
                  y = '';
                  break;

                default:
                  32 !== g && (y = ' ');
              }
              break;

            case 0:
              y = '\\0';
              break;

            case 12:
              y = '\\f';
              break;

            case 11:
              y = '\\v';
              break;

            case 38:
              0 === n + b + m && (r = I = 1, y = '\f' + y);
              break;

            case 108:
              if (0 === n + b + m + E && 0 < u) switch (l - u) {
                case 2:
                  112 === x && 58 === e.charCodeAt(l - 3) && (E = x);

                case 8:
                  111 === K && (E = K);
              }
              break;

            case 58:
              0 === n + b + m && (u = l);
              break;

            case 44:
              0 === b + v + n + m && (r = 1, y += '\r');
              break;

            case 34:
            case 39:
              0 === b && (n = n === g ? 0 : 0 === n ? g : n);
              break;

            case 91:
              0 === n + b + v && m++;
              break;

            case 93:
              0 === n + b + v && m--;
              break;

            case 41:
              0 === n + b + m && v--;
              break;

            case 40:
              if (0 === n + b + m) {
                if (0 === q) switch (2 * x + 3 * K) {
                  case 533:
                    break;

                  default:
                    q = 1;
                }
                v++;
              }

              break;

            case 64:
              0 === b + v + n + m + u + k && (k = 1);
              break;

            case 42:
            case 47:
              if (!(0 < n + m + v)) switch (b) {
                case 0:
                  switch (2 * g + 3 * e.charCodeAt(l + 1)) {
                    case 235:
                      b = 47;
                      break;

                    case 220:
                      t = l, b = 42;
                  }

                  break;

                case 42:
                  47 === g && 42 === x && t + 2 !== l && (33 === e.charCodeAt(t + 2) && (p += e.substring(t, l + 1)), y = '', b = 0);
              }
          }

          0 === b && (f += y);
      }

      K = x;
      x = g;
      l++;
    }

    t = p.length;

    if (0 < t) {
      r = c;
      if (0 < A && (C = H(2, p, r, d, D, z, t, h, a, h), void 0 !== C && 0 === (p = C).length)) return G + p + F;
      p = r.join(',') + '{' + p + '}';

      if (0 !== w * E) {
        2 !== w || L(p, 2) || (E = 0);

        switch (E) {
          case 111:
            p = p.replace(ha, ':-moz-$1') + p;
            break;

          case 112:
            p = p.replace(Q, '::-webkit-input-$1') + p.replace(Q, '::-moz-$1') + p.replace(Q, ':-ms-input-$1') + p;
        }

        E = 0;
      }
    }

    return G + p + F;
  }

  function X(d, c, e) {
    var h = c.trim().split(ia);
    c = h;
    var a = h.length,
        m = d.length;

    switch (m) {
      case 0:
      case 1:
        var b = 0;

        for (d = 0 === m ? '' : d[0] + ' '; b < a; ++b) {
          c[b] = Z(d, c[b], e).trim();
        }

        break;

      default:
        var v = b = 0;

        for (c = []; b < a; ++b) {
          for (var n = 0; n < m; ++n) {
            c[v++] = Z(d[n] + ' ', h[b], e).trim();
          }
        }

    }

    return c;
  }

  function Z(d, c, e) {
    var h = c.charCodeAt(0);
    33 > h && (h = (c = c.trim()).charCodeAt(0));

    switch (h) {
      case 38:
        return c.replace(F, '$1' + d.trim());

      case 58:
        return d.trim() + c.replace(F, '$1' + d.trim());

      default:
        if (0 < 1 * e && 0 < c.indexOf('\f')) return c.replace(F, (58 === d.charCodeAt(0) ? '' : '$1') + d.trim());
    }

    return d + c;
  }

  function P(d, c, e, h) {
    var a = d + ';',
        m = 2 * c + 3 * e + 4 * h;

    if (944 === m) {
      d = a.indexOf(':', 9) + 1;
      var b = a.substring(d, a.length - 1).trim();
      b = a.substring(0, d).trim() + b + ';';
      return 1 === w || 2 === w && L(b, 1) ? '-webkit-' + b + b : b;
    }

    if (0 === w || 2 === w && !L(a, 1)) return a;

    switch (m) {
      case 1015:
        return 97 === a.charCodeAt(10) ? '-webkit-' + a + a : a;

      case 951:
        return 116 === a.charCodeAt(3) ? '-webkit-' + a + a : a;

      case 963:
        return 110 === a.charCodeAt(5) ? '-webkit-' + a + a : a;

      case 1009:
        if (100 !== a.charCodeAt(4)) break;

      case 969:
      case 942:
        return '-webkit-' + a + a;

      case 978:
        return '-webkit-' + a + '-moz-' + a + a;

      case 1019:
      case 983:
        return '-webkit-' + a + '-moz-' + a + '-ms-' + a + a;

      case 883:
        if (45 === a.charCodeAt(8)) return '-webkit-' + a + a;
        if (0 < a.indexOf('image-set(', 11)) return a.replace(ja, '$1-webkit-$2') + a;
        break;

      case 932:
        if (45 === a.charCodeAt(4)) switch (a.charCodeAt(5)) {
          case 103:
            return '-webkit-box-' + a.replace('-grow', '') + '-webkit-' + a + '-ms-' + a.replace('grow', 'positive') + a;

          case 115:
            return '-webkit-' + a + '-ms-' + a.replace('shrink', 'negative') + a;

          case 98:
            return '-webkit-' + a + '-ms-' + a.replace('basis', 'preferred-size') + a;
        }
        return '-webkit-' + a + '-ms-' + a + a;

      case 964:
        return '-webkit-' + a + '-ms-flex-' + a + a;

      case 1023:
        if (99 !== a.charCodeAt(8)) break;
        b = a.substring(a.indexOf(':', 15)).replace('flex-', '').replace('space-between', 'justify');
        return '-webkit-box-pack' + b + '-webkit-' + a + '-ms-flex-pack' + b + a;

      case 1005:
        return ka.test(a) ? a.replace(aa, ':-webkit-') + a.replace(aa, ':-moz-') + a : a;

      case 1e3:
        b = a.substring(13).trim();
        c = b.indexOf('-') + 1;

        switch (b.charCodeAt(0) + b.charCodeAt(c)) {
          case 226:
            b = a.replace(G, 'tb');
            break;

          case 232:
            b = a.replace(G, 'tb-rl');
            break;

          case 220:
            b = a.replace(G, 'lr');
            break;

          default:
            return a;
        }

        return '-webkit-' + a + '-ms-' + b + a;

      case 1017:
        if (-1 === a.indexOf('sticky', 9)) break;

      case 975:
        c = (a = d).length - 10;
        b = (33 === a.charCodeAt(c) ? a.substring(0, c) : a).substring(d.indexOf(':', 7) + 1).trim();

        switch (m = b.charCodeAt(0) + (b.charCodeAt(7) | 0)) {
          case 203:
            if (111 > b.charCodeAt(8)) break;

          case 115:
            a = a.replace(b, '-webkit-' + b) + ';' + a;
            break;

          case 207:
          case 102:
            a = a.replace(b, '-webkit-' + (102 < m ? 'inline-' : '') + 'box') + ';' + a.replace(b, '-webkit-' + b) + ';' + a.replace(b, '-ms-' + b + 'box') + ';' + a;
        }

        return a + ';';

      case 938:
        if (45 === a.charCodeAt(5)) switch (a.charCodeAt(6)) {
          case 105:
            return b = a.replace('-items', ''), '-webkit-' + a + '-webkit-box-' + b + '-ms-flex-' + b + a;

          case 115:
            return '-webkit-' + a + '-ms-flex-item-' + a.replace(ba, '') + a;

          default:
            return '-webkit-' + a + '-ms-flex-line-pack' + a.replace('align-content', '').replace(ba, '') + a;
        }
        break;

      case 973:
      case 989:
        if (45 !== a.charCodeAt(3) || 122 === a.charCodeAt(4)) break;

      case 931:
      case 953:
        if (!0 === la.test(d)) return 115 === (b = d.substring(d.indexOf(':') + 1)).charCodeAt(0) ? P(d.replace('stretch', 'fill-available'), c, e, h).replace(':fill-available', ':stretch') : a.replace(b, '-webkit-' + b) + a.replace(b, '-moz-' + b.replace('fill-', '')) + a;
        break;

      case 962:
        if (a = '-webkit-' + a + (102 === a.charCodeAt(5) ? '-ms-' + a : '') + a, 211 === e + h && 105 === a.charCodeAt(13) && 0 < a.indexOf('transform', 10)) return a.substring(0, a.indexOf(';', 27) + 1).replace(ma, '$1-webkit-$2') + a;
    }

    return a;
  }

  function L(d, c) {
    var e = d.indexOf(1 === c ? ':' : '{'),
        h = d.substring(0, 3 !== c ? e : 10);
    e = d.substring(e + 1, d.length - 1);
    return R(2 !== c ? h : h.replace(na, '$1'), e, c);
  }

  function ea(d, c) {
    var e = P(c, c.charCodeAt(0), c.charCodeAt(1), c.charCodeAt(2));
    return e !== c + ';' ? e.replace(oa, ' or ($1)').substring(4) : '(' + c + ')';
  }

  function H(d, c, e, h, a, m, b, v, n, q) {
    for (var g = 0, x = c, w; g < A; ++g) {
      switch (w = S[g].call(B, d, x, e, h, a, m, b, v, n, q)) {
        case void 0:
        case !1:
        case !0:
        case null:
          break;

        default:
          x = w;
      }
    }

    if (x !== c) return x;
  }

  function T(d) {
    switch (d) {
      case void 0:
      case null:
        A = S.length = 0;
        break;

      default:
        if ('function' === typeof d) S[A++] = d;else if ('object' === typeof d) for (var c = 0, e = d.length; c < e; ++c) {
          T(d[c]);
        } else Y = !!d | 0;
    }

    return T;
  }

  function U(d) {
    d = d.prefix;
    void 0 !== d && (R = null, d ? 'function' !== typeof d ? w = 1 : (w = 2, R = d) : w = 0);
    return U;
  }

  function B(d, c) {
    var e = d;
    33 > e.charCodeAt(0) && (e = e.trim());
    V = e;
    e = [V];

    if (0 < A) {
      var h = H(-1, c, e, e, D, z, 0, 0, 0, 0);
      void 0 !== h && 'string' === typeof h && (c = h);
    }

    var a = M(O, e, c, 0, 0);
    0 < A && (h = H(-2, a, e, e, D, z, a.length, 0, 0, 0), void 0 !== h && (a = h));
    V = '';
    E = 0;
    z = D = 1;
    return a;
  }

  var ca = /^\0+/g,
      N = /[\0\r\f]/g,
      aa = /: */g,
      ka = /zoo|gra/,
      ma = /([,: ])(transform)/g,
      ia = /,\r+?/g,
      F = /([\t\r\n ])*\f?&/g,
      fa = /@(k\w+)\s*(\S*)\s*/,
      Q = /::(place)/g,
      ha = /:(read-only)/g,
      G = /[svh]\w+-[tblr]{2}/,
      da = /\(\s*(.*)\s*\)/g,
      oa = /([\s\S]*?);/g,
      ba = /-self|flex-/g,
      na = /[^]*?(:[rp][el]a[\w-]+)[^]*/,
      la = /stretch|:\s*\w+\-(?:conte|avail)/,
      ja = /([^-])(image-set\()/,
      z = 1,
      D = 1,
      E = 0,
      w = 1,
      O = [],
      S = [],
      A = 0,
      R = null,
      Y = 0,
      V = '';
  B.use = T;
  B.set = U;
  void 0 !== W && U(W);
  return B;
}

// https://github.com/thysultan/stylis.js/tree/master/plugins/rule-sheet
// inlined to avoid umd wrapper and peerDep warnings/installing stylis
// since we use stylis after closure compiler
var delimiter = '/*|*/';
var needle = delimiter + '}';

function toSheet(block) {
  if (block) {
    Sheet.current.insert(block + '}');
  }
}

var Sheet = {
  current: null
};
var ruleSheet = function ruleSheet(context, content, selectors, parents, line, column, length, ns, depth, at) {
  switch (context) {
    // property
    case 1:
      {
        switch (content.charCodeAt(0)) {
          case 64:
            {
              // @import
              Sheet.current.insert(content + ';');
              return '';
            }
          // charcode for l

          case 108:
            {
              // charcode for b
              // this ignores label
              if (content.charCodeAt(2) === 98) {
                return '';
              }
            }
        }

        break;
      }
    // selector

    case 2:
      {
        if (ns === 0) return content + delimiter;
        break;
      }
    // at-rule

    case 3:
      {
        switch (ns) {
          // @font-face, @page
          case 102:
          case 112:
            {
              Sheet.current.insert(selectors[0] + content);
              return '';
            }

          default:
            {
              return content + (at === 0 ? delimiter : '');
            }
        }
      }

    case -2:
      {
        content.split(needle).forEach(toSheet);
      }
  }
};

var createCache = function createCache(options) {
  if (options === undefined) options = {};
  var key = options.key || 'css';
  var stylisOptions;

  if (options.prefix !== undefined) {
    stylisOptions = {
      prefix: options.prefix
    };
  }

  var stylis = new stylis_min(stylisOptions);

  var inserted = {}; // $FlowFixMe

  var container;

  {
    container = options.container || document.head;
    var nodes = document.querySelectorAll("style[data-emotion-" + key + "]");
    Array.prototype.forEach.call(nodes, function (node) {
      var attrib = node.getAttribute("data-emotion-" + key); // $FlowFixMe

      attrib.split(' ').forEach(function (id) {
        inserted[id] = true;
      });

      if (node.parentNode !== container) {
        container.appendChild(node);
      }
    });
  }

  var _insert;

  {
    stylis.use(options.stylisPlugins)(ruleSheet);

    _insert = function insert(selector, serialized, sheet, shouldCache) {
      var name = serialized.name;
      Sheet.current = sheet;

      stylis(selector, serialized.styles);

      if (shouldCache) {
        cache.inserted[name] = true;
      }
    };
  }

  var cache = {
    key: key,
    sheet: new StyleSheet({
      key: key,
      container: container,
      nonce: options.nonce,
      speedy: options.speedy
    }),
    nonce: options.nonce,
    inserted: inserted,
    registered: {},
    insert: _insert
  };
  return cache;
};

var setPrototypeOf = createCommonjsModule(function (module) {
function _setPrototypeOf(o, p) {
  module.exports = _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  }, module.exports.__esModule = true, module.exports["default"] = module.exports;
  return _setPrototypeOf(o, p);
}

module.exports = _setPrototypeOf, module.exports.__esModule = true, module.exports["default"] = module.exports;
});

var inheritsLoose = createCommonjsModule(function (module) {
function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  setPrototypeOf(subClass, superClass);
}

module.exports = _inheritsLoose, module.exports.__esModule = true, module.exports["default"] = module.exports;
});

var isBrowser = "object" !== 'undefined';
function getRegisteredStyles(registered, registeredStyles, classNames) {
  var rawClassName = '';
  classNames.split(' ').forEach(function (className) {
    if (registered[className] !== undefined) {
      registeredStyles.push(registered[className]);
    } else {
      rawClassName += className + " ";
    }
  });
  return rawClassName;
}
var insertStyles = function insertStyles(cache, serialized, isStringTag) {
  var className = cache.key + "-" + serialized.name;

  if ( // we only need to add the styles to the registered cache if the
  // class name could be used further down
  // the tree but if it's a string tag, we know it won't
  // so we don't have to add it to registered cache.
  // this improves memory usage since we can avoid storing the whole style string
  (isStringTag === false || // we need to always store it if we're in compat mode and
  // in node since emotion-server relies on whether a style is in
  // the registered cache to know whether a style is global or not
  // also, note that this check will be dead code eliminated in the browser
  isBrowser === false ) && cache.registered[className] === undefined) {
    cache.registered[className] = serialized.styles;
  }

  if (cache.inserted[serialized.name] === undefined) {
    var current = serialized;

    do {
      var maybeStyles = cache.insert("." + className, current, cache.sheet, true);

      current = current.next;
    } while (current !== undefined);
  }
};

/* eslint-disable */
// Inspired by https://github.com/garycourt/murmurhash-js
// Ported from https://github.com/aappleby/smhasher/blob/61a0530f28277f2e850bfc39600ce61d02b518de/src/MurmurHash2.cpp#L37-L86
function murmur2(str) {
  // 'm' and 'r' are mixing constants generated offline.
  // They're not really 'magic', they just happen to work well.
  // const m = 0x5bd1e995;
  // const r = 24;
  // Initialize the hash
  var h = 0; // Mix 4 bytes at a time into the hash

  var k,
      i = 0,
      len = str.length;

  for (; len >= 4; ++i, len -= 4) {
    k = str.charCodeAt(i) & 0xff | (str.charCodeAt(++i) & 0xff) << 8 | (str.charCodeAt(++i) & 0xff) << 16 | (str.charCodeAt(++i) & 0xff) << 24;
    k =
    /* Math.imul(k, m): */
    (k & 0xffff) * 0x5bd1e995 + ((k >>> 16) * 0xe995 << 16);
    k ^=
    /* k >>> r: */
    k >>> 24;
    h =
    /* Math.imul(k, m): */
    (k & 0xffff) * 0x5bd1e995 + ((k >>> 16) * 0xe995 << 16) ^
    /* Math.imul(h, m): */
    (h & 0xffff) * 0x5bd1e995 + ((h >>> 16) * 0xe995 << 16);
  } // Handle the last few bytes of the input array


  switch (len) {
    case 3:
      h ^= (str.charCodeAt(i + 2) & 0xff) << 16;

    case 2:
      h ^= (str.charCodeAt(i + 1) & 0xff) << 8;

    case 1:
      h ^= str.charCodeAt(i) & 0xff;
      h =
      /* Math.imul(h, m): */
      (h & 0xffff) * 0x5bd1e995 + ((h >>> 16) * 0xe995 << 16);
  } // Do a few final mixes of the hash to ensure the last few
  // bytes are well-incorporated.


  h ^= h >>> 13;
  h =
  /* Math.imul(h, m): */
  (h & 0xffff) * 0x5bd1e995 + ((h >>> 16) * 0xe995 << 16);
  return ((h ^ h >>> 15) >>> 0).toString(36);
}

var unitlessKeys = {
  animationIterationCount: 1,
  borderImageOutset: 1,
  borderImageSlice: 1,
  borderImageWidth: 1,
  boxFlex: 1,
  boxFlexGroup: 1,
  boxOrdinalGroup: 1,
  columnCount: 1,
  columns: 1,
  flex: 1,
  flexGrow: 1,
  flexPositive: 1,
  flexShrink: 1,
  flexNegative: 1,
  flexOrder: 1,
  gridRow: 1,
  gridRowEnd: 1,
  gridRowSpan: 1,
  gridRowStart: 1,
  gridColumn: 1,
  gridColumnEnd: 1,
  gridColumnSpan: 1,
  gridColumnStart: 1,
  msGridRow: 1,
  msGridRowSpan: 1,
  msGridColumn: 1,
  msGridColumnSpan: 1,
  fontWeight: 1,
  lineHeight: 1,
  opacity: 1,
  order: 1,
  orphans: 1,
  tabSize: 1,
  widows: 1,
  zIndex: 1,
  zoom: 1,
  WebkitLineClamp: 1,
  // SVG-related properties
  fillOpacity: 1,
  floodOpacity: 1,
  stopOpacity: 1,
  strokeDasharray: 1,
  strokeDashoffset: 1,
  strokeMiterlimit: 1,
  strokeOpacity: 1,
  strokeWidth: 1
};

function memoize(fn) {
  var cache = {};
  return function (arg) {
    if (cache[arg] === undefined) cache[arg] = fn(arg);
    return cache[arg];
  };
}

var hyphenateRegex = /[A-Z]|^ms/g;
var animationRegex = /_EMO_([^_]+?)_([^]*?)_EMO_/g;

var isCustomProperty = function isCustomProperty(property) {
  return property.charCodeAt(1) === 45;
};

var isProcessableValue = function isProcessableValue(value) {
  return value != null && typeof value !== 'boolean';
};

var processStyleName = memoize(function (styleName) {
  return isCustomProperty(styleName) ? styleName : styleName.replace(hyphenateRegex, '-$&').toLowerCase();
});

var processStyleValue = function processStyleValue(key, value) {
  switch (key) {
    case 'animation':
    case 'animationName':
      {
        if (typeof value === 'string') {
          return value.replace(animationRegex, function (match, p1, p2) {
            cursor = {
              name: p1,
              styles: p2,
              next: cursor
            };
            return p1;
          });
        }
      }
  }

  if (unitlessKeys[key] !== 1 && !isCustomProperty(key) && typeof value === 'number' && value !== 0) {
    return value + 'px';
  }

  return value;
};

function handleInterpolation(mergedProps, registered, interpolation, couldBeSelectorInterpolation) {
  if (interpolation == null) {
    return '';
  }

  if (interpolation.__emotion_styles !== undefined) {

    return interpolation;
  }

  switch (typeof interpolation) {
    case 'boolean':
      {
        return '';
      }

    case 'object':
      {
        if (interpolation.anim === 1) {
          cursor = {
            name: interpolation.name,
            styles: interpolation.styles,
            next: cursor
          };
          return interpolation.name;
        }

        if (interpolation.styles !== undefined) {
          var next = interpolation.next;

          if (next !== undefined) {
            // not the most efficient thing ever but this is a pretty rare case
            // and there will be very few iterations of this generally
            while (next !== undefined) {
              cursor = {
                name: next.name,
                styles: next.styles,
                next: cursor
              };
              next = next.next;
            }
          }

          var styles = interpolation.styles + ";";

          return styles;
        }

        return createStringFromObject(mergedProps, registered, interpolation);
      }

    case 'function':
      {
        if (mergedProps !== undefined) {
          var previousCursor = cursor;
          var result = interpolation(mergedProps);
          cursor = previousCursor;
          return handleInterpolation(mergedProps, registered, result, couldBeSelectorInterpolation);
        }

        break;
      }
  } // finalize string values (regular strings and functions interpolated into css calls)


  if (registered == null) {
    return interpolation;
  }

  var cached = registered[interpolation];

  return cached !== undefined && !couldBeSelectorInterpolation ? cached : interpolation;
}

function createStringFromObject(mergedProps, registered, obj) {
  var string = '';

  if (Array.isArray(obj)) {
    for (var i = 0; i < obj.length; i++) {
      string += handleInterpolation(mergedProps, registered, obj[i], false);
    }
  } else {
    for (var _key in obj) {
      var value = obj[_key];

      if (typeof value !== 'object') {
        if (registered != null && registered[value] !== undefined) {
          string += _key + "{" + registered[value] + "}";
        } else if (isProcessableValue(value)) {
          string += processStyleName(_key) + ":" + processStyleValue(_key, value) + ";";
        }
      } else {
        if (_key === 'NO_COMPONENT_SELECTOR' && "production" !== 'production') {
          throw new Error('Component selectors can only be used in conjunction with babel-plugin-emotion.');
        }

        if (Array.isArray(value) && typeof value[0] === 'string' && (registered == null || registered[value[0]] === undefined)) {
          for (var _i = 0; _i < value.length; _i++) {
            if (isProcessableValue(value[_i])) {
              string += processStyleName(_key) + ":" + processStyleValue(_key, value[_i]) + ";";
            }
          }
        } else {
          var interpolated = handleInterpolation(mergedProps, registered, value, false);

          switch (_key) {
            case 'animation':
            case 'animationName':
              {
                string += processStyleName(_key) + ":" + interpolated + ";";
                break;
              }

            default:
              {

                string += _key + "{" + interpolated + "}";
              }
          }
        }
      }
    }
  }

  return string;
}

var labelPattern = /label:\s*([^\s;\n{]+)\s*;/g;
// keyframes are stored on the SerializedStyles object as a linked list


var cursor;
var serializeStyles = function serializeStyles(args, registered, mergedProps) {
  if (args.length === 1 && typeof args[0] === 'object' && args[0] !== null && args[0].styles !== undefined) {
    return args[0];
  }

  var stringMode = true;
  var styles = '';
  cursor = undefined;
  var strings = args[0];

  if (strings == null || strings.raw === undefined) {
    stringMode = false;
    styles += handleInterpolation(mergedProps, registered, strings, false);
  } else {

    styles += strings[0];
  } // we start at 1 since we've already handled the first arg


  for (var i = 1; i < args.length; i++) {
    styles += handleInterpolation(mergedProps, registered, args[i], styles.charCodeAt(styles.length - 1) === 46);

    if (stringMode) {

      styles += strings[i];
    }
  }


  labelPattern.lastIndex = 0;
  var identifierName = '';
  var match; // https://esbench.com/bench/5b809c2cf2949800a0f61fb5

  while ((match = labelPattern.exec(styles)) !== null) {
    identifierName += '-' + // $FlowFixMe we know it's not null
    match[1];
  }

  var name = murmur2(styles) + identifierName;

  return {
    name: name,
    styles: styles,
    next: cursor
  };
};

var hasOwnProperty = Object.prototype.hasOwnProperty;

var EmotionCacheContext = /*#__PURE__*/react.createContext( // we're doing this to avoid preconstruct's dead code elimination in this one case
// because this module is primarily intended for the browser and node
// but it's also required in react native and similar environments sometimes
// and we could have a special build just for that
// but this is much easier and the native packages
// might use a different theme context in the future anyway
typeof HTMLElement !== 'undefined' ? createCache() : null);
var ThemeContext = /*#__PURE__*/react.createContext({});
var CacheProvider = EmotionCacheContext.Provider;

var withEmotionCache = function withEmotionCache(func) {
  var render = function render(props, ref) {
    return /*#__PURE__*/react.createElement(EmotionCacheContext.Consumer, null, function (cache) {
      return func(props, cache, ref);
    });
  }; // $FlowFixMe


  return /*#__PURE__*/react.forwardRef(render);
};

var typePropName = '__EMOTION_TYPE_PLEASE_DO_NOT_USE__';
var createEmotionProps = function createEmotionProps(type, props) {

  var newProps = {};

  for (var key in props) {
    if (hasOwnProperty.call(props, key)) {
      newProps[key] = props[key];
    }
  }

  newProps[typePropName] = type; // TODO: check if this still works with all of those different JSX functions

  return newProps;
};

var Noop = function Noop() {
  return null;
};

var render = function render(cache, props, theme, ref) {
  var cssProp = theme === null ? props.css : props.css(theme); // so that using `css` from `emotion` and passing the result to the css prop works
  // not passing the registered cache to serializeStyles because it would
  // make certain babel optimisations not possible

  if (typeof cssProp === 'string' && cache.registered[cssProp] !== undefined) {
    cssProp = cache.registered[cssProp];
  }

  var type = props[typePropName];
  var registeredStyles = [cssProp];
  var className = '';

  if (typeof props.className === 'string') {
    className = getRegisteredStyles(cache.registered, registeredStyles, props.className);
  } else if (props.className != null) {
    className = props.className + " ";
  }

  var serialized = serializeStyles(registeredStyles);

  var rules = insertStyles(cache, serialized, typeof type === 'string');
  className += cache.key + "-" + serialized.name;
  var newProps = {};

  for (var key in props) {
    if (hasOwnProperty.call(props, key) && key !== 'css' && key !== typePropName && ("production" === 'production' )) {
      newProps[key] = props[key];
    }
  }

  newProps.ref = ref;
  newProps.className = className;
  var ele = /*#__PURE__*/react.createElement(type, newProps);
  var possiblyStyleElement = /*#__PURE__*/react.createElement(Noop, null);


  return /*#__PURE__*/react.createElement(react.Fragment, null, possiblyStyleElement, ele);
}; // eslint-disable-next-line no-undef


var Emotion = /* #__PURE__ */withEmotionCache(function (props, cache, ref) {
  if (typeof props.css === 'function') {
    return /*#__PURE__*/react.createElement(ThemeContext.Consumer, null, function (theme) {
      return render(cache, props, theme, ref);
    });
  }

  return render(cache, props, null, ref);
});

var jsx = function jsx(type, props) {
  var args = arguments;

  if (props == null || !hasOwnProperty.call(props, 'css')) {
    // $FlowFixMe
    return react.createElement.apply(undefined, args);
  }

  var argsLength = args.length;
  var createElementArgArray = new Array(argsLength);
  createElementArgArray[0] = Emotion;
  createElementArgArray[1] = createEmotionProps(type, props);

  for (var i = 2; i < argsLength; i++) {
    createElementArgArray[i] = args[i];
  } // $FlowFixMe


  return react.createElement.apply(null, createElementArgArray);
};

var _typeof_1 = createCommonjsModule(function (module) {
function _typeof(obj) {
  "@babel/helpers - typeof";

  return (module.exports = _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  }, module.exports.__esModule = true, module.exports["default"] = module.exports), _typeof(obj);
}

module.exports = _typeof, module.exports.__esModule = true, module.exports["default"] = module.exports;
});

var _typeof = /*@__PURE__*/getDefaultExportFromCjs(_typeof_1);

var classCallCheck = createCommonjsModule(function (module) {
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck, module.exports.__esModule = true, module.exports["default"] = module.exports;
});

var _classCallCheck = /*@__PURE__*/getDefaultExportFromCjs(classCallCheck);

var createClass = createCommonjsModule(function (module) {
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", {
    writable: false
  });
  return Constructor;
}

module.exports = _createClass, module.exports.__esModule = true, module.exports["default"] = module.exports;
});

var _createClass = /*@__PURE__*/getDefaultExportFromCjs(createClass);

var defineProperty = createCommonjsModule(function (module) {
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

module.exports = _defineProperty, module.exports.__esModule = true, module.exports["default"] = module.exports;
});

var _defineProperty = /*@__PURE__*/getDefaultExportFromCjs(defineProperty);

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var AnalyticsEvent = /*#__PURE__*/function () {
  function AnalyticsEvent(props) {
    var _this = this;

    _classCallCheck(this, AnalyticsEvent);

    _defineProperty(this, "_isAnalyticsEvent", true);

    _defineProperty(this, "clone", function () {
      // just a shallow clone, don't change sub refs unless you want to
      // affect the original's too
      var payload = _objectSpread({}, _this.payload);

      return new AnalyticsEvent({
        payload: payload
      });
    });

    this.payload = props.payload;
  }

  _createClass(AnalyticsEvent, [{
    key: "update",
    value: function update(updater) {
      if (typeof updater === 'function') {
        this.payload = updater(this.payload);
      }

      if (_typeof(updater) === 'object') {
        this.payload = _objectSpread(_objectSpread({}, this.payload), updater);
      }

      return this;
    }
  }]);

  return AnalyticsEvent;
}();

var arrayWithoutHoles = createCommonjsModule(function (module) {
function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return arrayLikeToArray(arr);
}

module.exports = _arrayWithoutHoles, module.exports.__esModule = true, module.exports["default"] = module.exports;
});

var iterableToArray = createCommonjsModule(function (module) {
function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}

module.exports = _iterableToArray, module.exports.__esModule = true, module.exports["default"] = module.exports;
});

var nonIterableSpread = createCommonjsModule(function (module) {
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

module.exports = _nonIterableSpread, module.exports.__esModule = true, module.exports["default"] = module.exports;
});

var toConsumableArray = createCommonjsModule(function (module) {
function _toConsumableArray(arr) {
  return arrayWithoutHoles(arr) || iterableToArray(arr) || unsupportedIterableToArray(arr) || nonIterableSpread();
}

module.exports = _toConsumableArray, module.exports.__esModule = true, module.exports["default"] = module.exports;
});

var _toConsumableArray = /*@__PURE__*/getDefaultExportFromCjs(toConsumableArray);

var assertThisInitialized = createCommonjsModule(function (module) {
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

module.exports = _assertThisInitialized, module.exports.__esModule = true, module.exports["default"] = module.exports;
});

var _assertThisInitialized = /*@__PURE__*/getDefaultExportFromCjs(assertThisInitialized);

var getPrototypeOf = createCommonjsModule(function (module) {
function _getPrototypeOf(o) {
  module.exports = _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  }, module.exports.__esModule = true, module.exports["default"] = module.exports;
  return _getPrototypeOf(o);
}

module.exports = _getPrototypeOf, module.exports.__esModule = true, module.exports["default"] = module.exports;
});

var _getPrototypeOf = /*@__PURE__*/getDefaultExportFromCjs(getPrototypeOf);

var superPropBase = createCommonjsModule(function (module) {
function _superPropBase(object, property) {
  while (!Object.prototype.hasOwnProperty.call(object, property)) {
    object = getPrototypeOf(object);
    if (object === null) break;
  }

  return object;
}

module.exports = _superPropBase, module.exports.__esModule = true, module.exports["default"] = module.exports;
});

var get = createCommonjsModule(function (module) {
function _get() {
  if (typeof Reflect !== "undefined" && Reflect.get) {
    module.exports = _get = Reflect.get, module.exports.__esModule = true, module.exports["default"] = module.exports;
  } else {
    module.exports = _get = function _get(target, property, receiver) {
      var base = superPropBase(target, property);
      if (!base) return;
      var desc = Object.getOwnPropertyDescriptor(base, property);

      if (desc.get) {
        return desc.get.call(arguments.length < 3 ? target : receiver);
      }

      return desc.value;
    }, module.exports.__esModule = true, module.exports["default"] = module.exports;
  }

  return _get.apply(this, arguments);
}

module.exports = _get, module.exports.__esModule = true, module.exports["default"] = module.exports;
});

var _get = /*@__PURE__*/getDefaultExportFromCjs(get);

var inherits = createCommonjsModule(function (module) {
function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  Object.defineProperty(subClass, "prototype", {
    writable: false
  });
  if (superClass) setPrototypeOf(subClass, superClass);
}

module.exports = _inherits, module.exports.__esModule = true, module.exports["default"] = module.exports;
});

var _inherits = /*@__PURE__*/getDefaultExportFromCjs(inherits);

var possibleConstructorReturn = createCommonjsModule(function (module) {
var _typeof = _typeof_1["default"];



function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  } else if (call !== void 0) {
    throw new TypeError("Derived constructors may only return object or undefined");
  }

  return assertThisInitialized(self);
}

module.exports = _possibleConstructorReturn, module.exports.__esModule = true, module.exports["default"] = module.exports;
});

var _possibleConstructorReturn = /*@__PURE__*/getDefaultExportFromCjs(possibleConstructorReturn);

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var UIAnalyticsEvent = /*#__PURE__*/function (_AnalyticsEvent) {
  _inherits(UIAnalyticsEvent, _AnalyticsEvent);

  var _super = _createSuper(UIAnalyticsEvent);

  function UIAnalyticsEvent(props) {
    var _this;

    _classCallCheck(this, UIAnalyticsEvent);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "_isUIAnalyticsEvent", true);

    _defineProperty(_assertThisInitialized(_this), "clone", function () {
      if (_this.hasFired) {

        return null;
      }

      var context = _toConsumableArray(_this.context);

      var handlers = _toConsumableArray(_this.handlers);
      /**
       * A hacky "deep clone" of the object. This is limited in that it wont
       * support functions, regexs, Maps, Sets, etc, but none of those need to
       * be represented in our payload.
       */


      var payload = JSON.parse(JSON.stringify(_this.payload));
      return new UIAnalyticsEvent({
        context: context,
        handlers: handlers,
        payload: payload
      });
    });

    _defineProperty(_assertThisInitialized(_this), "fire", function (channel) {
      if (_this.hasFired) {

        return;
      }

      _this.handlers.forEach(function (handler) {
        return handler(_assertThisInitialized(_this), channel);
      });

      _this.hasFired = true;
    });

    _this.context = props.context || [];
    _this.handlers = props.handlers || [];
    _this.hasFired = false;
    return _this;
  }

  _createClass(UIAnalyticsEvent, [{
    key: "update",
    value: function update(updater) {
      if (this.hasFired) {

        return this;
      }

      return _get(_getPrototypeOf(UIAnalyticsEvent.prototype), "update", this).call(this, updater);
    }
  }]);

  return UIAnalyticsEvent;
}(AnalyticsEvent);

var AnalyticsNextContext = react.createContext({
    getAtlaskitAnalyticsContext: function () { return []; },
    getAtlaskitAnalyticsEventHandlers: function () { return []; },
});

var useAnalyticsContext = function useAnalyticsContext() {
  return react.useContext(AnalyticsNextContext);
};

var useTrackedRef = function useTrackedRef(value) {
  var ref = react.useRef(value);
  react.useEffect(function () {
    ref.current = value;
  }, [value]);
  return ref;
};

function areInputsEqual(newInputs, lastInputs) {
  if (newInputs.length !== lastInputs.length) {
    return false;
  }

  for (var i = 0; i < newInputs.length; i++) {
    if (newInputs[i] !== lastInputs[i]) {
      return false;
    }
  }

  return true;
}

function useMemoOne(getResult, inputs) {
  var initial = react.useState(function () {
    return {
      inputs: inputs,
      result: getResult()
    };
  })[0];
  var isFirstRun = react.useRef(true);
  var committed = react.useRef(initial);
  var useCache = isFirstRun.current || Boolean(inputs && committed.current.inputs && areInputsEqual(inputs, committed.current.inputs));
  var cache = useCache ? committed.current : {
    inputs: inputs,
    result: getResult()
  };
  react.useEffect(function () {
    isFirstRun.current = false;
    committed.current = cache;
  }, [cache]);
  return cache.result;
}
function useCallbackOne(callback, inputs) {
  return useMemoOne(function () {
    return callback;
  }, inputs);
}

function useAnalyticsEvents() {
  var analyticsContext = useAnalyticsContext();
  var createAnalyticsEvent = useCallbackOne(function (payload) {
    return new UIAnalyticsEvent({
      context: analyticsContext.getAtlaskitAnalyticsContext(),
      handlers: analyticsContext.getAtlaskitAnalyticsEventHandlers(),
      payload: payload
    });
  }, [analyticsContext]);
  return {
    createAnalyticsEvent: createAnalyticsEvent
  };
}

function ownKeys$1(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$1(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$1(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$1(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }
// WARNING: This hook will only function correctly for leaf node components - as in
// no children inside the component will require analytics themselves.
// Ignoring this warning will mean the analytics context of child components will not
// include the context of this component, .e.g, lost data.
// If you are going to have child components that require analytics use withAnalytics
// or AnalyticsContext component instead.
function usePlatformLeafEventHandler(_ref) {
  var fn = _ref.fn,
      action = _ref.action,
      componentName = _ref.componentName,
      actionSubject = _ref.actionSubject,
      packageName = _ref.packageName,
      packageVersion = _ref.packageVersion,
      analyticsData = _ref.analyticsData;

  var _useAnalyticsEvents = useAnalyticsEvents(),
      createAnalyticsEvent = _useAnalyticsEvents.createAnalyticsEvent; // We put analyticsData and fn in a ref so that we don't need to break
  // memoization.
  // Generally these could be defined by consumers inline
  // and so we do this to avoid breaking memoization of useCallback


  var dataRef = useTrackedRef(analyticsData);
  var fnRef = useTrackedRef(fn);
  var handler = react.useCallback(function (value) {
    var analyticsEvent = createAnalyticsEvent({
      action: action,
      actionSubject: actionSubject || componentName,
      attributes: {
        componentName: componentName,
        packageName: packageName,
        packageVersion: packageVersion
      }
    }); // To avoid wrapping this component in AnalyticsContext we manually
    // push the parent context's meta data into the context.
    // Note: this new 'context'

    var context = _objectSpread$1({
      componentName: componentName,
      packageName: packageName,
      packageVersion: packageVersion
    }, dataRef.current);

    analyticsEvent.context.push(context); // fire an event on the atlaskit channel

    var clone = analyticsEvent.clone();

    if (clone) {
      clone.fire('atlaskit');
    }

    fnRef.current(value, analyticsEvent);
  }, [// These are strings and won't change
  action, componentName, actionSubject, packageName, packageVersion, // This function is memoized in the context
  createAnalyticsEvent, // these are a stable ref because of the useTrackedRef hook
  dataRef, fnRef]);
  return handler;
}

/**
 * Focusing on the passed element ref after initial mount.
 * Will only focus on initial mount.
 *
 * https://developer.mozilla.org/en-US/docs/Web/API/HTMLSelectElement/autofocus
 *
 * ```tsx
 * import useAutoFocus from '@atlaskit/ds-lib/use-auto-focus';
 *
 * const elementRef = useRef();
 * useAutoFocus(elementRef, true);
 *
 * <button ref={elementRef} />;
 * ```
 *
 * @param ref
 * @param autoFocus
 */

function useAutoFocus(ref, autoFocus) {
  var initialMount = react.useRef(true);
  react.useEffect(function () {
    if (ref && initialMount.current && autoFocus && ref.current) {
      ref.current.focus();
    }

    initialMount.current = false;
  }, [autoFocus, ref]);
}

function abort(event) {
  event.preventDefault();
  event.stopPropagation();
}

var tabKeyCode = 9;

function onKey(event) {
  // Allowing tab so that a user can move focus away
  if (event.keyCode === tabKeyCode) {
    return;
  }

  abort(event);
}

var block = {
  onMouseDownCapture: abort,
  onMouseUpCapture: abort,
  // because we have tabIndex = -1 when disabled,
  // keyboard events can only occur when there is an overlay
  onKeyDownCapture: onKey,
  onKeyUpCapture: onKey,
  onTouchStartCapture: abort,
  onTouchEndCapture: abort,
  onPointerDownCapture: abort,
  onPointerUpCapture: abort,
  onClickCapture: abort,
  // Just smashing the existing onClick for good measure
  onClick: abort
};
var doNotBlock = {};
function blockEvents(_ref) {
  var isInteractive = _ref.isInteractive;
  return isInteractive ? doNotBlock : block;
}

// Hard coding the active rgba color value rather than using a helper to convert it
// With helper it would be: hex2rgba(colors.B75, 0.6)
var fadedB75 = 'rgba(179, 212, 255, 0.6)';
var values = {
  // Default appearance
  background: {
    default: {
      default: {
        light: "var(--ds-background-neutral, ".concat(N20A, ")"),
        dark: "var(--ds-background-neutral, ".concat(DN70, ")")
      },
      hover: {
        light: "var(--ds-background-neutral-hovered, ".concat(N30A, ")"),
        dark: "var(--ds-background-neutral-hovered, ".concat(DN60, ")")
      },
      active: {
        light: "var(--ds-background-neutral-pressed, ".concat(fadedB75, ")"),
        dark: "var(--ds-background-neutral-pressed, ".concat(B75, ")")
      },
      disabled: {
        light: "var(--ds-background-disabled, ".concat(N20A, ")"),
        dark: "var(--ds-background-disabled, ".concat(DN70, ")")
      },
      selected: {
        light: "var(--ds-background-brand, ".concat(N700, ")"),
        dark: "var(--ds-background-brand, ".concat(DN0, ")")
      },
      focusSelected: {
        light: "var(--ds-background-brand, ".concat(N700, ")"),
        dark: "var(--ds-background-brand, ".concat(DN0, ")")
      }
    },
    primary: {
      default: {
        light: "var(--ds-background-brand-bold, ".concat(B400, ")"),
        dark: "var(--ds-background-brand-bold, ".concat(B100, ")")
      },
      hover: {
        light: "var(--ds-background-brand-bold-hovered, ".concat(B300, ")"),
        dark: "var(--ds-background-brand-bold-hovered, ".concat(B75, ")")
      },
      active: {
        light: "var(--ds-background-brand-bold-pressed, ".concat(B500, ")"),
        dark: "var(--ds-background-brand-bold-pressed, ".concat(B200, ")")
      },
      disabled: {
        light: "var(--ds-background-disabled, ".concat(N20A, ")"),
        dark: "var(--ds-background-disabled, ".concat(DN70, ")")
      },
      selected: {
        light: "var(--ds-background-brand, ".concat(N700, ")"),
        dark: "var(--ds-background-brand, ".concat(DN0, ")")
      },
      focusSelected: {
        light: "var(--ds-background-brand, ".concat(N700, ")"),
        dark: "var(--ds-background-brand, ".concat(DN0, ")")
      }
    },
    warning: {
      default: {
        light: "var(--ds-background-warning-bold, ".concat(Y300, ")"),
        dark: "var(--ds-background-warning-bold, ".concat(Y300, ")")
      },
      hover: {
        light: "var(--ds-background-warning-bold-hovered, ".concat(Y200, ")"),
        dark: "var(--ds-background-warning-bold-hovered, ".concat(Y200, ")")
      },
      active: {
        light: "var(--ds-background-warning-bold-pressed, ".concat(Y400, ")"),
        dark: "var(--ds-background-warning-bold-pressed, ".concat(Y400, ")")
      },
      disabled: {
        light: "var(--ds-background-disabled, ".concat(N20A, ")"),
        dark: "var(--ds-background-disabled, ".concat(DN70, ")")
      },
      selected: {
        light: "var(--ds-background-brand, ".concat(Y400, ")"),
        dark: "var(--ds-background-brand, ".concat(Y400, ")")
      },
      focusSelected: {
        light: "var(--ds-background-brand, ".concat(Y400, ")"),
        dark: "var(--ds-background-brand, ".concat(Y400, ")")
      }
    },
    danger: {
      default: {
        light: "var(--ds-background-danger-bold, ".concat(R400, ")"),
        dark: "var(--ds-background-danger-bold, ".concat(R400, ")")
      },
      hover: {
        light: "var(--ds-background-danger-bold-hovered, ".concat(R300, ")"),
        dark: "var(--ds-background-danger-bold-hovered, ".concat(R300, ")")
      },
      active: {
        light: "var(--ds-background-danger-bold-pressed, ".concat(R500, ")"),
        dark: "var(--ds-background-danger-bold-pressed, ".concat(R500, ")")
      },
      disabled: {
        light: "var(--ds-background-disabled, ".concat(N20A, ")"),
        dark: "var(--ds-background-disabled, ".concat(DN70, ")")
      },
      selected: {
        light: "var(--ds-background-brand, ".concat(R500, ")"),
        dark: "var(--ds-background-brand, ".concat(R500, ")")
      },
      focusSelected: {
        light: "var(--ds-background-brand, ".concat(R500, ")"),
        dark: "var(--ds-background-brand, ".concat(R500, ")")
      }
    },
    link: {
      default: {
        light: 'none',
        dark: 'none'
      },
      selected: {
        light: "var(--ds-background-brand, ".concat(N700, ")"),
        dark: "var(--ds-background-brand, ".concat(N20, ")")
      },
      focusSelected: {
        light: "var(--ds-background-brand, ".concat(N700, ")"),
        dark: "var(--ds-background-brand, ".concat(N20, ")")
      }
    },
    subtle: {
      default: {
        light: 'none',
        dark: 'none'
      },
      hover: {
        light: "var(--ds-background-neutral-subtle-hovered, ".concat(N30A, ")"),
        dark: "var(--ds-background-neutral-subtle-hovered, ".concat(DN60, ")")
      },
      active: {
        light: "var(--ds-background-neutral-subtle-pressed, ".concat(fadedB75, ")"),
        dark: "var(--ds-background-neutral-subtle-pressed, ".concat(B75, ")")
      },
      disabled: {
        light: 'none',
        dark: 'none'
      },
      selected: {
        light: "var(--ds-background-brand, ".concat(N700, ")"),
        dark: "var(--ds-background-brand, ".concat(DN0, ")")
      },
      focusSelected: {
        light: "var(--ds-background-brand, ".concat(N700, ")"),
        dark: "var(--ds-background-brand, ".concat(DN0, ")")
      }
    },
    'subtle-link': {
      default: {
        light: 'none',
        dark: 'none'
      },
      selected: {
        light: "var(--ds-background-brand, ".concat(N700, ")"),
        dark: "var(--ds-background-brand, ".concat(N20, ")")
      },
      focusSelected: {
        light: "var(--ds-background-brand, ".concat(N700, ")"),
        dark: "var(--ds-background-brand, ".concat(N20, ")")
      }
    }
  },
  boxShadowColor: {
    default: {
      focus: {
        light: "var(--ds-border-focused, ".concat(B100, ")"),
        dark: "var(--ds-border-focused, ".concat(B75, ")")
      },
      focusSelected: {
        light: "var(--ds-border-focused, ".concat(B100, ")"),
        dark: "var(--ds-border-focused, ".concat(B75, ")")
      }
    },
    primary: {
      focus: {
        light: "var(--ds-border-focused, ".concat(B100, ")"),
        dark: "var(--ds-border-focused, ".concat(B75, ")")
      },
      focusSelected: {
        light: "var(--ds-border-focused, ".concat(B100, ")"),
        dark: "var(--ds-border-focused, ".concat(B75, ")")
      }
    },
    warning: {
      focus: {
        light: "var(--ds-border-focused, ".concat(Y500, ")"),
        dark: "var(--ds-border-focused, ".concat(Y500, ")")
      },
      focusSelected: {
        light: "var(--ds-border-focused, ".concat(Y500, ")"),
        dark: "var(--ds-border-focused, ".concat(Y500, ")")
      }
    },
    danger: {
      focus: {
        light: "var(--ds-border-focused, ".concat(R100, ")"),
        dark: "var(--ds-border-focused, ".concat(R100, ")")
      },
      focusSelected: {
        light: "var(--ds-border-focused, ".concat(R100, ")"),
        dark: "var(--ds-border-focused, ".concat(R100, ")")
      }
    },
    link: {
      focus: {
        light: "var(--ds-border-focused, ".concat(B100, ")"),
        dark: "var(--ds-border-focused, ".concat(B75, ")")
      },
      focusSelected: {
        light: "var(--ds-border-focused, ".concat(B100, ")"),
        dark: "var(--ds-border-focused, ".concat(B75, ")")
      }
    },
    subtle: {
      focus: {
        light: "var(--ds-border-focused, ".concat(B100, ")"),
        dark: "var(--ds-border-focused, ".concat(B75, ")")
      },
      focusSelected: {
        light: "var(--ds-border-focused, ".concat(B100, ")"),
        dark: "var(--ds-border-focused, ".concat(B75, ")")
      }
    },
    'subtle-link': {
      focus: {
        light: "var(--ds-border-focused, ".concat(B100, ")"),
        dark: "var(--ds-border-focused, ".concat(B75, ")")
      },
      focusSelected: {
        light: "var(--ds-border-focused, ".concat(B100, ")"),
        dark: "var(--ds-border-focused, ".concat(B75, ")")
      }
    }
  },
  color: {
    default: {
      default: {
        light: "var(--ds-text, ".concat(N500, ")"),
        dark: "var(--ds-text, ".concat(DN400, ")")
      },
      active: {
        light: "var(--ds-text, ".concat(B400, ")"),
        dark: "var(--ds-text, ".concat(B400, ")")
      },
      disabled: {
        light: "var(--ds-text-disabled, ".concat(N70, ")"),
        dark: "var(--ds-text-disabled, ".concat(DN30, ")")
      },
      selected: {
        light: "var(--ds-text-brand, ".concat(N20, ")"),
        dark: "var(--ds-text-brand, ".concat(DN400, ")")
      },
      focusSelected: {
        light: "var(--ds-text-brand, ".concat(N20, ")"),
        dark: "var(--ds-text-brand, ".concat(DN400, ")")
      }
    },
    primary: {
      default: {
        light: "var(--ds-text-inverse, ".concat(N0, ")"),
        dark: "var(--ds-text-inverse, ".concat(DN30, ")")
      },
      disabled: {
        light: "var(--ds-text-disabled, ".concat(N70, ")"),
        dark: "var(--ds-text-disabled, ".concat(DN30, ")")
      },
      selected: {
        light: "var(--ds-text-brand, ".concat(N20, ")"),
        dark: "var(--ds-text-brand, ".concat(DN400, ")")
      },
      focusSelected: {
        light: "var(--ds-text-brand, ".concat(N20, ")"),
        dark: "var(--ds-text-brand, ".concat(DN400, ")")
      }
    },
    warning: {
      default: {
        light: "var(--ds-text-warning-inverse, ".concat(N800, ")"),
        dark: "var(--ds-text-warning-inverse, ".concat(N800, ")")
      },
      disabled: {
        light: "var(--ds-text-disabled, ".concat(N70, ")"),
        dark: "var(--ds-text-disabled, ".concat(DN30, ")")
      },
      selected: {
        light: "var(--ds-text-brand, ".concat(N800, ")"),
        dark: "var(--ds-text-brand, ".concat(N800, ")")
      },
      focusSelected: {
        light: "var(--ds-text-brand, ".concat(N800, ")"),
        dark: "var(--ds-text-brand, ".concat(N800, ")")
      }
    },
    danger: {
      default: {
        light: "var(--ds-text-inverse, ".concat(N0, ")"),
        dark: "var(--ds-text-inverse, ".concat(N0, ")")
      },
      disabled: {
        light: "var(--ds-text-disabled, ".concat(N70, ")"),
        dark: "var(--ds-text-disabled, ".concat(DN30, ")")
      },
      selected: {
        light: "var(--ds-text-brand, ".concat(N0, ")"),
        dark: "var(--ds-text-brand, ".concat(N0, ")")
      },
      focusSelected: {
        light: "var(--ds-text-brand, ".concat(N0, ")"),
        dark: "var(--ds-text-brand, ".concat(N0, ")")
      }
    },
    link: {
      default: {
        light: "var(--ds-link, ".concat(B400, ")"),
        dark: "var(--ds-link, ".concat(B100, ")")
      },
      hover: {
        light: "var(--ds-link, ".concat(B300, ")"),
        dark: "var(--ds-link, ".concat(B75, ")")
      },
      active: {
        light: "var(--ds-link-pressed, ".concat(B500, ")"),
        dark: "var(--ds-link-pressed, ".concat(B200, ")")
      },
      disabled: {
        light: "var(--ds-text-disabled, ".concat(N70, ")"),
        dark: "var(--ds-text-disabled, ".concat(DN100, ")")
      },
      selected: {
        light: "var(--ds-text-brand, ".concat(N20, ")"),
        dark: "var(--ds-text-brand, ".concat(N700, ")")
      },
      focusSelected: {
        light: "var(--ds-text-brand, ".concat(N20, ")"),
        dark: "var(--ds-text-brand, ".concat(N700, ")")
      }
    },
    subtle: {
      default: {
        light: "var(--ds-text, ".concat(N500, ")"),
        dark: "var(--ds-text, ".concat(DN400, ")")
      },
      active: {
        light: "var(--ds-text, ".concat(B400, ")"),
        dark: "var(--ds-text, ".concat(B400, ")")
      },
      disabled: {
        light: "var(--ds-text-disabled, ".concat(N70, ")"),
        dark: "var(--ds-text-disabled, ".concat(DN100, ")")
      },
      selected: {
        light: "var(--ds-text-brand, ".concat(N20, ")"),
        dark: "var(--ds-text-brand, ".concat(DN400, ")")
      },
      focusSelected: {
        light: "var(--ds-text-brand, ".concat(N20, ")"),
        dark: "var(--ds-text-brand, ".concat(DN400, ")")
      }
    },
    'subtle-link': {
      default: {
        light: "var(--ds-text-subtle, ".concat(N200, ")"),
        dark: "var(--ds-text-subtle, ".concat(DN400, ")")
      },
      hover: {
        light: "var(--ds-text-subtle, ".concat(N90, ")"),
        dark: "var(--ds-text-subtle, ".concat(B50, ")")
      },
      active: {
        light: "var(--ds-text, ".concat(N400, ")"),
        dark: "var(--ds-text, ".concat(DN300, ")")
      },
      disabled: {
        light: "var(--ds-text-disabled, ".concat(N70, ")"),
        dark: "var(--ds-text-disabled, ".concat(DN100, ")")
      },
      selected: {
        light: "var(--ds-text-brand, ".concat(N20, ")"),
        dark: "var(--ds-text-brand, ".concat(DN400, ")")
      },
      focusSelected: {
        light: "var(--ds-text-brand, ".concat(N20, ")"),
        dark: "var(--ds-text-brand, ".concat(DN400, ")")
      }
    }
  }
};

function ownKeys$2(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$2(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys$2(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys$2(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
var borderRadius$1 = borderRadius();
var gridSize$1 = gridSize();
var fontSize$1 = fontSize(); // ## Button layout
//
// /------------------------------------------------------------------------------------------------------------------\
// |       →  |  ←      |          |      →  |  ←      |           |      →  |  ←      |         |      →  |  ←       |
// |  10px →  |  ← 2px  |   icon   |  2px →  |  ← 2px  |           |  2px →  |  ← 2px  |  icon   |  2px →  |  ← 10px  |
// |  padding |  margin |  before  |  margin |  margin |  content  |  margin |  margin |  after  |  margin |  padding |
// |    (12px total)    |          |    (4px total)    |           |    (4px total)    |         |    (12px total)    |
// |       →  |  ←      |          |      →  |  ←      |           |      →  |  ←      |         |      →  |  ←       |
// \------------------------------------------------------------------------------------------------------------------/
//                                           ↑                               ↑
//                                        Margins don't collapse with inline-flex
//

var heights = {
  default: "".concat(gridSize$1 * 4 / fontSize$1, "em"),
  // 32px
  compact: "".concat(gridSize$1 * 3 / fontSize$1, "em"),
  none: 'auto'
};
var lineHeights = {
  default: heights.default,
  compact: heights.compact,
  none: 'inherit'
};
var padding = {
  // 10px gutter
  default: "0 ".concat(gridSize$1 + gridSize$1 / 4, "px"),
  compact: "0 ".concat(gridSize$1 + gridSize$1 / 4, "px"),
  none: '0'
};
var singleIconPadding = {
  // 2px gutter
  compact: "0 ".concat(gridSize$1 / 4, "px"),
  default: "0 ".concat(gridSize$1 / 4, "px"),
  none: '0'
};
var verticalAlign = {
  default: 'middle',
  compact: 'middle',
  none: 'baseline'
};
var innerMargin = {
  content: "0 ".concat(gridSize$1 / 4, "px"),
  icon: "0 ".concat(gridSize$1 / 4, "px")
};

function getColor(_ref) {
  var group = _ref.group,
      key = _ref.key,
      mode = _ref.mode;
  var rule = group[key] || group.default;
  return rule[mode];
}

function getColors(_ref2) {
  var appearance = _ref2.appearance,
      key = _ref2.key,
      mode = _ref2.mode;
  return {
    background: getColor({
      group: values.background[appearance],
      key: key,
      mode: mode
    }),
    // Needing to add !important to overcome specificity issue caused by deprecated AtlaskitThemeProvider
    color: "".concat(getColor({
      group: values.color[appearance],
      key: key,
      mode: mode
    }), " !important")
  };
}

function getCss(_ref3) {
  var appearance = _ref3.appearance,
      spacing = _ref3.spacing,
      mode = _ref3.mode,
      isSelected = _ref3.isSelected,
      shouldFitContainer = _ref3.shouldFitContainer,
      isOnlySingleIcon = _ref3.isOnlySingleIcon;
  var baseColors = getColors({
    appearance: appearance,
    key: isSelected ? 'selected' : 'default',
    mode: mode
  });
  return _objectSpread$2(_objectSpread$2({
    // 0px margin added to css-reset
    alignItems: 'baseline',
    borderWidth: 0,
    borderRadius: borderRadius$1,
    boxSizing: 'border-box',
    display: 'inline-flex',
    fontSize: 'inherit',
    fontStyle: 'normal',
    // Chrome recently changed button so that they use 'arial' as the font family
    fontFamily: 'inherit',
    fontWeight: 500,
    // margin for button has been applied to css reset
    maxWidth: '100%',
    // Needed to position overlay
    position: 'relative',
    textAlign: 'center',
    textDecoration: 'none',
    transition: 'background 0.1s ease-out, box-shadow 0.15s cubic-bezier(0.47, 0.03, 0.49, 1.38)',
    whiteSpace: 'nowrap'
  }, baseColors), {}, {
    cursor: 'pointer',
    height: heights[spacing],
    lineHeight: lineHeights[spacing],
    padding: isOnlySingleIcon ? singleIconPadding[spacing] : padding[spacing],
    verticalAlign: verticalAlign[spacing],
    width: shouldFitContainer ? '100%' : 'auto',
    // justifyContent required for shouldFitContainer buttons with an icon inside
    justifyContent: 'center',
    // Note: we cannot disable pointer events when there is an overlay.
    // That would be easy for styling, but it would start letting events through on disabled buttons
    // Disabling visited styles (just using the base colors)
    '&:visited': _objectSpread$2({}, baseColors),
    '&:hover': _objectSpread$2(_objectSpread$2({}, getColors({
      appearance: appearance,
      key: isSelected ? 'selected' : 'hover',
      mode: mode
    })), {}, {
      textDecoration: !isSelected && (appearance === 'link' || appearance === 'subtle-link') ? 'underline' : 'inherit',
      // background, box-shadow
      transitionDuration: '0s, 0.15s'
    }),
    '&:focus': _objectSpread$2(_objectSpread$2({}, getColors({
      appearance: appearance,
      key: isSelected ? 'focusSelected' : 'focus',
      mode: mode
    })), {}, {
      boxShadow: "0 0 0 2px ".concat(values.boxShadowColor[appearance].focus[mode]),
      // background, box-shadow
      transitionDuration: '0s, 0.2s',
      // disabling browser focus outline
      outline: 'none'
    }),
    // giving active styles preference by listing them after focus
    '&:active': _objectSpread$2(_objectSpread$2({}, getColors({
      appearance: appearance,
      key: isSelected ? 'selected' : 'active',
      mode: mode
    })), {}, {
      // background, box-shadow
      transitionDuration: '0s, 0s'
    }),
    // preventDefault prevents regular active styles from applying in Firefox
    '&[data-firefox-is-active="true"]': _objectSpread$2(_objectSpread$2({}, getColors({
      appearance: appearance,
      key: isSelected ? 'selected' : 'active',
      mode: mode
    })), {}, {
      // background, box-shadow
      transitionDuration: '0s, 0s'
    }),
    // Giving disabled styles preference over active by listing them after.
    // Not using '&:disabled' because :disabled is not a valid state for all element types
    // so we are targeting the attribute
    // Attributes have the same specificity a pseudo classes so we are overriding :disabled here
    '&[disabled]': _objectSpread$2(_objectSpread$2({}, getColors({
      appearance: appearance,
      key: 'disabled',
      mode: mode
    })), {}, {
      cursor: 'not-allowed',
      textDecoration: 'none'
    }),
    '&[data-has-overlay="true"]': {
      cursor: 'default',
      textDecoration: 'none'
    },
    // disabling hover and active color changes when there is an overlay, but the button is not disabled
    '&[data-has-overlay="true"]:not([disabled]):hover, &[data-has-overlay="true"]:not([disabled]):active': _objectSpread$2({}, getColors({
      appearance: appearance,
      key: isSelected ? 'selected' : 'default',
      mode: mode
    })),
    '&::-moz-focus-inner': {
      border: 0,
      margin: 0,
      padding: 0
    }
  });
} // inline-flex child

function getIconStyle(_ref4) {
  var spacing = _ref4.spacing;
  return {
    alignSelf: 'center',
    display: 'flex',
    // icon size cannot grow and shrink
    flexGrow: 0,
    flexShrink: 0,
    lineHeight: 0,
    fontSize: 0,
    userSelect: 'none',
    margin: spacing === 'none' ? 0 : innerMargin.icon
  };
} // inline-flex child

function getContentStyle(_ref5) {
  var spacing = _ref5.spacing;
  return {
    margin: spacing === 'none' ? 0 : innerMargin.content,
    // content can grow and shrink
    flexGrow: 1,
    flexShrink: 1,
    // ellipsis for overflow text
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap'
  };
}
function getFadingCss(_ref6) {
  var hasOverlay = _ref6.hasOverlay;
  return {
    transition: 'opacity 0.3s',
    opacity: hasOverlay ? 0 : 1
  };
}
var overlayCss = {
  // stretching to full width / height of button
  // this is important as we need it to still block
  // event if clicking in the button's own padding
  position: 'absolute',
  left: 0,
  top: 0,
  right: 0,
  bottom: 0,
  // Putting all children in the center
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
};

var _excluded$1 = ["appearance", "buttonCss", "spacing", "autoFocus", "isDisabled", "shouldFitContainer", "isSelected", "iconBefore", "iconAfter", "children", "className", "href", "overlay", "tabIndex", "type", "onMouseDown", "onClick", "component", "testId", "analyticsContext"];

function noop() {} // Disabled buttons will still publish events for nested elements in webkit.
// We are disabling pointer events on child elements so that
// the button will always be the target of events
// Note: firefox does not have this behaviour for child elements


var noPointerEventsOnChildrenCss = {
  '> *': {
    pointerEvents: 'none'
  }
};
var ButtonBase = /*#__PURE__*/react.forwardRef(function ButtonBase(props, ref) {
  var _props$appearance = props.appearance,
      appearance = _props$appearance === void 0 ? 'default' : _props$appearance,
      buttonCss = props.buttonCss,
      _props$spacing = props.spacing,
      spacing = _props$spacing === void 0 ? 'default' : _props$spacing,
      _props$autoFocus = props.autoFocus,
      autoFocus = _props$autoFocus === void 0 ? false : _props$autoFocus,
      _props$isDisabled = props.isDisabled,
      isDisabled = _props$isDisabled === void 0 ? false : _props$isDisabled,
      _props$shouldFitConta = props.shouldFitContainer,
      _props$isSelected = props.isSelected,
      isSelected = _props$isSelected === void 0 ? false : _props$isSelected,
      iconBefore = props.iconBefore,
      iconAfter = props.iconAfter,
      children = props.children,
      className = props.className,
      href = props.href,
      overlay = props.overlay,
      _props$tabIndex = props.tabIndex,
      tabIndex = _props$tabIndex === void 0 ? 0 : _props$tabIndex,
      _props$type = props.type,
      type = _props$type === void 0 ? !href ? 'button' : undefined : _props$type,
      _props$onMouseDown = props.onMouseDown,
      providedOnMouseDown = _props$onMouseDown === void 0 ? noop : _props$onMouseDown,
      _props$onClick = props.onClick,
      providedOnClick = _props$onClick === void 0 ? noop : _props$onClick,
      _props$component = props.component,
      Component = _props$component === void 0 ? href ? 'a' : 'button' : _props$component,
      testId = props.testId,
      analyticsContext = props.analyticsContext,
      rest = _objectWithoutProperties(props, _excluded$1);

  var ourRef = react.useRef();
  var setRef = react.useCallback(function (node) {
    ourRef.current = node;

    if (ref == null) {
      return;
    }

    if (typeof ref === 'function') {
      ref(node);
      return;
    } // @ts-ignore


    ref.current = node;
  }, [ourRef, ref]); // Cross browser auto focusing is pretty broken, so we are doing it ourselves

  useAutoFocus(ourRef, autoFocus);
  var onClick = usePlatformLeafEventHandler({
    fn: providedOnClick,
    action: 'clicked',
    componentName: 'button',
    packageName: "@atlaskit/button",
    packageVersion: "16.1.6",
    analyticsData: analyticsContext
  }); // Button currently calls preventDefault, which is not standard button behaviour

  var onMouseDown = react.useCallback(function (event) {
    event.preventDefault();
    providedOnMouseDown(event);
  }, [providedOnMouseDown]); // Lose focus when becoming disabled (standard button behaviour)

  react.useEffect(function () {
    var el = ourRef.current;

    if (isDisabled && el && el === document.activeElement) {
      el.blur();
    }
  }, [isDisabled]); // we are 'disabling' input with a button when there is an overlay

  var hasOverlay = Boolean(overlay);
  var fadeCss = getFadingCss({
    hasOverlay: hasOverlay
  });
  var isInteractive = !isDisabled && !hasOverlay;
  /** HACK: Spinner needs to have different colours in the "new" tokens design compared to the old design.
   * For now, while we support both, these styles reach into Spinner when a theme is set, applies the right color.
   * Ticket to remove: https://product-fabric.atlassian.net/browse/DSP-2067
   */

  var spinnerHackCss = {};

  if (isSelected || isDisabled || appearance === 'warning') {
    spinnerHackCss = {
      '[data-theme] & svg': {
        stroke: isSelected || isDisabled ? "var(--ds-text-subtle, ".concat(N500, ")") : "var(--ds-text-warning-inverse, ".concat(N500, ")")
      }
    };
  }

  return jsx(Component, _extends({}, rest, {
    css: [buttonCss, isInteractive ? null : noPointerEventsOnChildrenCss],
    className: className,
    ref: setRef,
    onClick: onClick,
    onMouseDown: onMouseDown,
    disabled: isDisabled,
    href: isInteractive ? href : undefined // using undefined so that the property doesn't exist when false
    ,
    "data-has-overlay": hasOverlay ? true : undefined,
    "data-testid": testId,
    type: type // Adding a tab index so element is always focusable, even when not a <button> or <a>
    // Disabling focus via keyboard navigation when disabled
    // as this is standard button behaviour
    ,
    tabIndex: isDisabled ? -1 : tabIndex
  }, blockEvents({
    isInteractive: isInteractive
  })), iconBefore ? jsx("span", {
    css: [fadeCss, getIconStyle({
      spacing: spacing
    })]
  }, iconBefore) : null, children ? jsx("span", {
    css: [fadeCss, getContentStyle({
      spacing: spacing
    })]
  }, children) : null, iconAfter ? jsx("span", {
    css: [fadeCss, getIconStyle({
      spacing: spacing
    })]
  }, iconAfter) : null, overlay ? jsx("span", {
    css: [overlayCss, spinnerHackCss]
  }, overlay) : null);
});

function getIsOnlySingleIcon(_ref) {
  var children = _ref.children,
      iconBefore = _ref.iconBefore,
      iconAfter = _ref.iconAfter;

  if (children) {
    return false;
  }

  if (iconBefore && !iconAfter) {
    return true;
  }

  if (!iconBefore && iconAfter) {
    return true;
  }

  return false;
}

var _excluded$2 = ["onMouseDown", "onMouseUp"];

function noop$1() {}

var isFirefox = typeof navigator !== 'undefined' && navigator.userAgent.toLowerCase().indexOf('firefox') > -1;
var Button = /*#__PURE__*/react.memo( /*#__PURE__*/react.forwardRef(function Button(_ref, ref) {
  var _ref$onMouseDown = _ref.onMouseDown,
      providedOnMouseDown = _ref$onMouseDown === void 0 ? noop$1 : _ref$onMouseDown,
      _ref$onMouseUp = _ref.onMouseUp,
      providedOnMouseUp = _ref$onMouseUp === void 0 ? noop$1 : _ref$onMouseUp,
      rest = _objectWithoutProperties(_ref, _excluded$2);

  var _useGlobalTheme = useTheme(),
      mode = _useGlobalTheme.mode;

  var appearance = rest.appearance || 'default';
  var spacing = rest.spacing || 'default';
  var shouldFitContainer = Boolean(rest.shouldFitContainer);
  var isSelected = Boolean(rest.isSelected);
  var isOnlySingleIcon = getIsOnlySingleIcon(rest);

  var _useState = react.useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      isActive = _useState2[0],
      setIsActive = _useState2[1]; // Wrap onMouseDown / onMouseUp to manually trigger active state
  //  in Firefox


  var onMouseDown = react.useCallback(function (event) {
    providedOnMouseDown(event);

    if (isFirefox) {
      setIsActive(true);
    }
  }, [providedOnMouseDown, setIsActive]);
  var onMouseUp = react.useCallback(function (event) {
    providedOnMouseUp(event);

    if (isFirefox) {
      setIsActive(false);
    }
  }, [providedOnMouseUp, setIsActive]);
  var buttonCss = react.useMemo(function () {
    return getCss({
      appearance: appearance,
      spacing: spacing,
      mode: mode,
      isSelected: isSelected,
      shouldFitContainer: shouldFitContainer,
      isOnlySingleIcon: isOnlySingleIcon
    });
  }, [appearance, spacing, mode, isSelected, shouldFitContainer, isOnlySingleIcon]);
  return /*#__PURE__*/react.createElement(ButtonBase, _extends({}, rest, {
    ref: ref,
    buttonCss: buttonCss // Due to how click events are set, we need to set active styles
    //  manually in Firefox and wrap onMouseDown/onMouseUp
    ,
    "data-firefox-is-active": isActive ? true : undefined,
    onMouseDown: onMouseDown,
    onMouseUp: onMouseUp
  }));
})); // Tools including enzyme rely on components having a display name

Button.displayName = 'Button';

export default Button;
