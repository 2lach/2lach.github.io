/*! For license information please see service-worker.js.LICENSE.txt */
!(function () {
  "use strict";
  var e = {
      923: function () {
        try {
          self["workbox:core:6.6.0"] && _();
        } catch (e) {}
      },
      190: function () {
        try {
          self["workbox:expiration:6.6.0"] && _();
        } catch (e) {}
      },
      437: function () {
        try {
          self["workbox:precaching:6.6.0"] && _();
        } catch (e) {}
      },
      185: function () {
        try {
          self["workbox:routing:6.6.0"] && _();
        } catch (e) {}
      },
      833: function () {
        try {
          self["workbox:strategies:6.6.0"] && _();
        } catch (e) {}
      },
    },
    t = {};
  function r(n) {
    var a = t[n];
    if (void 0 !== a) return a.exports;
    var i = (t[n] = { exports: {} });
    return e[n](i, i.exports, r), i.exports;
  }
  !(function () {
    function e(t) {
      return (
        (e =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (e) {
                return typeof e;
              }
            : function (e) {
                return e &&
                  "function" == typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? "symbol"
                  : typeof e;
              }),
        e(t)
      );
    }
    function t() {
      t = function () {
        return r;
      };
      var r = {},
        n = Object.prototype,
        a = n.hasOwnProperty,
        i =
          Object.defineProperty ||
          function (e, t, r) {
            e[t] = r.value;
          },
        s = "function" == typeof Symbol ? Symbol : {},
        c = s.iterator || "@@iterator",
        o = s.asyncIterator || "@@asyncIterator",
        u = s.toStringTag || "@@toStringTag";
      function h(e, t, r) {
        return (
          Object.defineProperty(e, t, {
            value: r,
            enumerable: !0,
            configurable: !0,
            writable: !0,
          }),
          e[t]
        );
      }
      try {
        h({}, "");
      } catch (T) {
        h = function (e, t, r) {
          return (e[t] = r);
        };
      }
      function f(e, t, r, n) {
        var a = t && t.prototype instanceof v ? t : v,
          s = Object.create(a.prototype),
          c = new C(n || []);
        return i(s, "_invoke", { value: _(e, r, c) }), s;
      }
      function l(e, t, r) {
        try {
          return { type: "normal", arg: e.call(t, r) };
        } catch (T) {
          return { type: "throw", arg: T };
        }
      }
      r.wrap = f;
      var p = {};
      function v() {}
      function d() {}
      function y() {}
      var b = {};
      h(b, c, function () {
        return this;
      });
      var g = Object.getPrototypeOf,
        m = g && g(g(O([])));
      m && m !== n && a.call(m, c) && (b = m);
      var x = (y.prototype = v.prototype = Object.create(b));
      function w(e) {
        ["next", "throw", "return"].forEach(function (t) {
          h(e, t, function (e) {
            return this._invoke(t, e);
          });
        });
      }
      function k(t, r) {
        function n(i, s, c, o) {
          var u = l(t[i], t, s);
          if ("throw" !== u.type) {
            var h = u.arg,
              f = h.value;
            return f && "object" == e(f) && a.call(f, "__await")
              ? r.resolve(f.__await).then(
                  function (e) {
                    n("next", e, c, o);
                  },
                  function (e) {
                    n("throw", e, c, o);
                  }
                )
              : r.resolve(f).then(
                  function (e) {
                    (h.value = e), c(h);
                  },
                  function (e) {
                    return n("throw", e, c, o);
                  }
                );
          }
          o(u.arg);
        }
        var s;
        i(this, "_invoke", {
          value: function (e, t) {
            function a() {
              return new r(function (r, a) {
                n(e, t, r, a);
              });
            }
            return (s = s ? s.then(a, a) : a());
          },
        });
      }
      function _(e, t, r) {
        var n = "suspendedStart";
        return function (a, i) {
          if ("executing" === n)
            throw new Error("Generator is already running");
          if ("completed" === n) {
            if ("throw" === a) throw i;
            return S();
          }
          for (r.method = a, r.arg = i; ; ) {
            var s = r.delegate;
            if (s) {
              var c = R(s, r);
              if (c) {
                if (c === p) continue;
                return c;
              }
            }
            if ("next" === r.method) r.sent = r._sent = r.arg;
            else if ("throw" === r.method) {
              if ("suspendedStart" === n) throw ((n = "completed"), r.arg);
              r.dispatchException(r.arg);
            } else "return" === r.method && r.abrupt("return", r.arg);
            n = "executing";
            var o = l(e, t, r);
            if ("normal" === o.type) {
              if (((n = r.done ? "completed" : "suspendedYield"), o.arg === p))
                continue;
              return { value: o.arg, done: r.done };
            }
            "throw" === o.type &&
              ((n = "completed"), (r.method = "throw"), (r.arg = o.arg));
          }
        };
      }
      function R(e, t) {
        var r = t.method,
          n = e.iterator[r];
        if (void 0 === n)
          return (
            (t.delegate = null),
            ("throw" === r &&
              e.iterator.return &&
              ((t.method = "return"),
              (t.arg = void 0),
              R(e, t),
              "throw" === t.method)) ||
              ("return" !== r &&
                ((t.method = "throw"),
                (t.arg = new TypeError(
                  "The iterator does not provide a '" + r + "' method"
                )))),
            p
          );
        var a = l(n, e.iterator, t.arg);
        if ("throw" === a.type)
          return (t.method = "throw"), (t.arg = a.arg), (t.delegate = null), p;
        var i = a.arg;
        return i
          ? i.done
            ? ((t[e.resultName] = i.value),
              (t.next = e.nextLoc),
              "return" !== t.method && ((t.method = "next"), (t.arg = void 0)),
              (t.delegate = null),
              p)
            : i
          : ((t.method = "throw"),
            (t.arg = new TypeError("iterator result is not an object")),
            (t.delegate = null),
            p);
      }
      function E(e) {
        var t = { tryLoc: e[0] };
        1 in e && (t.catchLoc = e[1]),
          2 in e && ((t.finallyLoc = e[2]), (t.afterLoc = e[3])),
          this.tryEntries.push(t);
      }
      function L(e) {
        var t = e.completion || {};
        (t.type = "normal"), delete t.arg, (e.completion = t);
      }
      function C(e) {
        (this.tryEntries = [{ tryLoc: "root" }]),
          e.forEach(E, this),
          this.reset(!0);
      }
      function O(e) {
        if (e) {
          var t = e[c];
          if (t) return t.call(e);
          if ("function" == typeof e.next) return e;
          if (!isNaN(e.length)) {
            var r = -1,
              n = function t() {
                for (; ++r < e.length; )
                  if (a.call(e, r)) return (t.value = e[r]), (t.done = !1), t;
                return (t.value = void 0), (t.done = !0), t;
              };
            return (n.next = n);
          }
        }
        return { next: S };
      }
      function S() {
        return { value: void 0, done: !0 };
      }
      return (
        (d.prototype = y),
        i(x, "constructor", { value: y, configurable: !0 }),
        i(y, "constructor", { value: d, configurable: !0 }),
        (d.displayName = h(y, u, "GeneratorFunction")),
        (r.isGeneratorFunction = function (e) {
          var t = "function" == typeof e && e.constructor;
          return (
            !!t &&
            (t === d || "GeneratorFunction" === (t.displayName || t.name))
          );
        }),
        (r.mark = function (e) {
          return (
            Object.setPrototypeOf
              ? Object.setPrototypeOf(e, y)
              : ((e.__proto__ = y), h(e, u, "GeneratorFunction")),
            (e.prototype = Object.create(x)),
            e
          );
        }),
        (r.awrap = function (e) {
          return { __await: e };
        }),
        w(k.prototype),
        h(k.prototype, o, function () {
          return this;
        }),
        (r.AsyncIterator = k),
        (r.async = function (e, t, n, a, i) {
          void 0 === i && (i = Promise);
          var s = new k(f(e, t, n, a), i);
          return r.isGeneratorFunction(t)
            ? s
            : s.next().then(function (e) {
                return e.done ? e.value : s.next();
              });
        }),
        w(x),
        h(x, u, "Generator"),
        h(x, c, function () {
          return this;
        }),
        h(x, "toString", function () {
          return "[object Generator]";
        }),
        (r.keys = function (e) {
          var t = Object(e),
            r = [];
          for (var n in t) r.push(n);
          return (
            r.reverse(),
            function e() {
              for (; r.length; ) {
                var n = r.pop();
                if (n in t) return (e.value = n), (e.done = !1), e;
              }
              return (e.done = !0), e;
            }
          );
        }),
        (r.values = O),
        (C.prototype = {
          constructor: C,
          reset: function (e) {
            if (
              ((this.prev = 0),
              (this.next = 0),
              (this.sent = this._sent = void 0),
              (this.done = !1),
              (this.delegate = null),
              (this.method = "next"),
              (this.arg = void 0),
              this.tryEntries.forEach(L),
              !e)
            )
              for (var t in this)
                "t" === t.charAt(0) &&
                  a.call(this, t) &&
                  !isNaN(+t.slice(1)) &&
                  (this[t] = void 0);
          },
          stop: function () {
            this.done = !0;
            var e = this.tryEntries[0].completion;
            if ("throw" === e.type) throw e.arg;
            return this.rval;
          },
          dispatchException: function (e) {
            if (this.done) throw e;
            var t = this;
            function r(r, n) {
              return (
                (s.type = "throw"),
                (s.arg = e),
                (t.next = r),
                n && ((t.method = "next"), (t.arg = void 0)),
                !!n
              );
            }
            for (var n = this.tryEntries.length - 1; n >= 0; --n) {
              var i = this.tryEntries[n],
                s = i.completion;
              if ("root" === i.tryLoc) return r("end");
              if (i.tryLoc <= this.prev) {
                var c = a.call(i, "catchLoc"),
                  o = a.call(i, "finallyLoc");
                if (c && o) {
                  if (this.prev < i.catchLoc) return r(i.catchLoc, !0);
                  if (this.prev < i.finallyLoc) return r(i.finallyLoc);
                } else if (c) {
                  if (this.prev < i.catchLoc) return r(i.catchLoc, !0);
                } else {
                  if (!o)
                    throw new Error("try statement without catch or finally");
                  if (this.prev < i.finallyLoc) return r(i.finallyLoc);
                }
              }
            }
          },
          abrupt: function (e, t) {
            for (var r = this.tryEntries.length - 1; r >= 0; --r) {
              var n = this.tryEntries[r];
              if (
                n.tryLoc <= this.prev &&
                a.call(n, "finallyLoc") &&
                this.prev < n.finallyLoc
              ) {
                var i = n;
                break;
              }
            }
            i &&
              ("break" === e || "continue" === e) &&
              i.tryLoc <= t &&
              t <= i.finallyLoc &&
              (i = null);
            var s = i ? i.completion : {};
            return (
              (s.type = e),
              (s.arg = t),
              i
                ? ((this.method = "next"), (this.next = i.finallyLoc), p)
                : this.complete(s)
            );
          },
          complete: function (e, t) {
            if ("throw" === e.type) throw e.arg;
            return (
              "break" === e.type || "continue" === e.type
                ? (this.next = e.arg)
                : "return" === e.type
                ? ((this.rval = this.arg = e.arg),
                  (this.method = "return"),
                  (this.next = "end"))
                : "normal" === e.type && t && (this.next = t),
              p
            );
          },
          finish: function (e) {
            for (var t = this.tryEntries.length - 1; t >= 0; --t) {
              var r = this.tryEntries[t];
              if (r.finallyLoc === e)
                return this.complete(r.completion, r.afterLoc), L(r), p;
            }
          },
          catch: function (e) {
            for (var t = this.tryEntries.length - 1; t >= 0; --t) {
              var r = this.tryEntries[t];
              if (r.tryLoc === e) {
                var n = r.completion;
                if ("throw" === n.type) {
                  var a = n.arg;
                  L(r);
                }
                return a;
              }
            }
            throw new Error("illegal catch attempt");
          },
          delegateYield: function (e, t, r) {
            return (
              (this.delegate = { iterator: O(e), resultName: t, nextLoc: r }),
              "next" === this.method && (this.arg = void 0),
              p
            );
          },
        }),
        r
      );
    }
    function n(e, t) {
      (null == t || t > e.length) && (t = e.length);
      for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
      return n;
    }
    function a(e, t) {
      if (e) {
        if ("string" === typeof e) return n(e, t);
        var r = Object.prototype.toString.call(e).slice(8, -1);
        return (
          "Object" === r && e.constructor && (r = e.constructor.name),
          "Map" === r || "Set" === r
            ? Array.from(e)
            : "Arguments" === r ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
            ? n(e, t)
            : void 0
        );
      }
    }
    function i(e, t) {
      return (
        (function (e) {
          if (Array.isArray(e)) return e;
        })(e) ||
        (function (e, t) {
          var r =
            null == e
              ? null
              : ("undefined" != typeof Symbol && e[Symbol.iterator]) ||
                e["@@iterator"];
          if (null != r) {
            var n,
              a,
              i,
              s,
              c = [],
              o = !0,
              u = !1;
            try {
              if (((i = (r = r.call(e)).next), 0 === t)) {
                if (Object(r) !== r) return;
                o = !1;
              } else
                for (
                  ;
                  !(o = (n = i.call(r)).done) &&
                  (c.push(n.value), c.length !== t);
                  o = !0
                );
            } catch (h) {
              (u = !0), (a = h);
            } finally {
              try {
                if (
                  !o &&
                  null != r.return &&
                  ((s = r.return()), Object(s) !== s)
                )
                  return;
              } finally {
                if (u) throw a;
              }
            }
            return c;
          }
        })(e, t) ||
        a(e, t) ||
        (function () {
          throw new TypeError(
            "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
          );
        })()
      );
    }
    function s(e, t, r, n, a, i, s) {
      try {
        var c = e[i](s),
          o = c.value;
      } catch (u) {
        return void r(u);
      }
      c.done ? t(o) : Promise.resolve(o).then(n, a);
    }
    function c(e) {
      return function () {
        var t = this,
          r = arguments;
        return new Promise(function (n, a) {
          var i = e.apply(t, r);
          function c(e) {
            s(i, n, a, c, o, "next", e);
          }
          function o(e) {
            s(i, n, a, c, o, "throw", e);
          }
          c(void 0);
        });
      };
    }
    function o(e, t) {
      var r =
        ("undefined" !== typeof Symbol && e[Symbol.iterator]) ||
        e["@@iterator"];
      if (!r) {
        if (
          Array.isArray(e) ||
          (r = a(e)) ||
          (t && e && "number" === typeof e.length)
        ) {
          r && (e = r);
          var n = 0,
            i = function () {};
          return {
            s: i,
            n: function () {
              return n >= e.length ? { done: !0 } : { done: !1, value: e[n++] };
            },
            e: function (e) {
              throw e;
            },
            f: i,
          };
        }
        throw new TypeError(
          "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
        );
      }
      var s,
        c = !0,
        o = !1;
      return {
        s: function () {
          r = r.call(e);
        },
        n: function () {
          var e = r.next();
          return (c = e.done), e;
        },
        e: function (e) {
          (o = !0), (s = e);
        },
        f: function () {
          try {
            c || null == r.return || r.return();
          } finally {
            if (o) throw s;
          }
        },
      };
    }
    function u(e) {
      return (
        (function (e) {
          if (Array.isArray(e)) return n(e);
        })(e) ||
        (function (e) {
          if (
            ("undefined" !== typeof Symbol && null != e[Symbol.iterator]) ||
            null != e["@@iterator"]
          )
            return Array.from(e);
        })(e) ||
        a(e) ||
        (function () {
          throw new TypeError(
            "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
          );
        })()
      );
    }
    function h(e, t) {
      if (!(e instanceof t))
        throw new TypeError("Cannot call a class as a function");
    }
    function f(t) {
      var r = (function (t, r) {
        if ("object" !== e(t) || null === t) return t;
        var n = t[Symbol.toPrimitive];
        if (void 0 !== n) {
          var a = n.call(t, r || "default");
          if ("object" !== e(a)) return a;
          throw new TypeError("@@toPrimitive must return a primitive value.");
        }
        return ("string" === r ? String : Number)(t);
      })(t, "string");
      return "symbol" === e(r) ? r : String(r);
    }
    function l(e, t) {
      for (var r = 0; r < t.length; r++) {
        var n = t[r];
        (n.enumerable = n.enumerable || !1),
          (n.configurable = !0),
          "value" in n && (n.writable = !0),
          Object.defineProperty(e, f(n.key), n);
      }
    }
    function p(e, t, r) {
      return (
        t && l(e.prototype, t),
        r && l(e, r),
        Object.defineProperty(e, "prototype", { writable: !1 }),
        e
      );
    }
    function v(e, t) {
      return (
        (v = Object.setPrototypeOf
          ? Object.setPrototypeOf.bind()
          : function (e, t) {
              return (e.__proto__ = t), e;
            }),
        v(e, t)
      );
    }
    function d(e, t) {
      if ("function" !== typeof t && null !== t)
        throw new TypeError(
          "Super expression must either be null or a function"
        );
      (e.prototype = Object.create(t && t.prototype, {
        constructor: { value: e, writable: !0, configurable: !0 },
      })),
        Object.defineProperty(e, "prototype", { writable: !1 }),
        t && v(e, t);
    }
    function y(e) {
      return (
        (y = Object.setPrototypeOf
          ? Object.getPrototypeOf.bind()
          : function (e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            }),
        y(e)
      );
    }
    function b() {
      if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
      if (Reflect.construct.sham) return !1;
      if ("function" === typeof Proxy) return !0;
      try {
        return (
          Boolean.prototype.valueOf.call(
            Reflect.construct(Boolean, [], function () {})
          ),
          !0
        );
      } catch (e) {
        return !1;
      }
    }
    function g(t, r) {
      if (r && ("object" === e(r) || "function" === typeof r)) return r;
      if (void 0 !== r)
        throw new TypeError(
          "Derived constructors may only return object or undefined"
        );
      return (function (e) {
        if (void 0 === e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return e;
      })(t);
    }
    function m(e) {
      var t = b();
      return function () {
        var r,
          n = y(e);
        if (t) {
          var a = y(this).constructor;
          r = Reflect.construct(n, arguments, a);
        } else r = n.apply(this, arguments);
        return g(this, r);
      };
    }
    function x(e, t, r) {
      return (
        (x = b()
          ? Reflect.construct.bind()
          : function (e, t, r) {
              var n = [null];
              n.push.apply(n, t);
              var a = new (Function.bind.apply(e, n))();
              return r && v(a, r.prototype), a;
            }),
        x.apply(null, arguments)
      );
    }
    function w(e) {
      var t = "function" === typeof Map ? new Map() : void 0;
      return (
        (w = function (e) {
          if (
            null === e ||
            ((r = e), -1 === Function.toString.call(r).indexOf("[native code]"))
          )
            return e;
          var r;
          if ("function" !== typeof e)
            throw new TypeError(
              "Super expression must either be null or a function"
            );
          if ("undefined" !== typeof t) {
            if (t.has(e)) return t.get(e);
            t.set(e, n);
          }
          function n() {
            return x(e, arguments, y(this).constructor);
          }
          return (
            (n.prototype = Object.create(e.prototype, {
              constructor: {
                value: n,
                enumerable: !1,
                writable: !0,
                configurable: !0,
              },
            })),
            v(n, e)
          );
        }),
        w(e)
      );
    }
    r(923);
    var k = function (e) {
        for (
          var t = e,
            r = arguments.length,
            n = new Array(r > 1 ? r - 1 : 0),
            a = 1;
          a < r;
          a++
        )
          n[a - 1] = arguments[a];
        return n.length > 0 && (t += " :: ".concat(JSON.stringify(n))), t;
      },
      _ = (function (e) {
        d(r, e);
        var t = m(r);
        function r(e, n) {
          var a;
          h(this, r);
          var i = k(e, n);
          return ((a = t.call(this, i)).name = e), (a.details = n), a;
        }
        return p(r);
      })(w(Error)),
      R = {
        googleAnalytics: "googleAnalytics",
        precache: "precache-v2",
        prefix: "workbox",
        runtime: "runtime",
        suffix: "undefined" !== typeof registration ? registration.scope : "",
      },
      E = function (e) {
        return [R.prefix, e, R.suffix]
          .filter(function (e) {
            return e && e.length > 0;
          })
          .join("-");
      },
      L = function (e) {
        return e || E(R.precache);
      },
      C = function (e) {
        return e || E(R.runtime);
      },
      O = null;
    function S(e, t) {
      var r = t();
      return e.waitUntil(r), r;
    }
    r(437);
    function T(e) {
      if (!e) throw new _("add-to-cache-list-unexpected-type", { entry: e });
      if ("string" === typeof e) {
        var t = new URL(e, location.href);
        return { cacheKey: t.href, url: t.href };
      }
      var r = e.revision,
        n = e.url;
      if (!n) throw new _("add-to-cache-list-unexpected-type", { entry: e });
      if (!r) {
        var a = new URL(n, location.href);
        return { cacheKey: a.href, url: a.href };
      }
      var i = new URL(n, location.href),
        s = new URL(n, location.href);
      return (
        i.searchParams.set("__WB_REVISION__", r),
        { cacheKey: i.href, url: s.href }
      );
    }
    var j,
      P = p(function e() {
        var r = this;
        h(this, e),
          (this.updatedURLs = []),
          (this.notUpdatedURLs = []),
          (this.handlerWillStart = (function () {
            var e = c(
              t().mark(function e(r) {
                var n, a;
                return t().wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        (n = r.request),
                          (a = r.state) && (a.originalRequest = n);
                      case 2:
                      case "end":
                        return e.stop();
                    }
                }, e);
              })
            );
            return function (t) {
              return e.apply(this, arguments);
            };
          })()),
          (this.cachedResponseWillBeUsed = (function () {
            var e = c(
              t().mark(function e(n) {
                var a, i, s, c;
                return t().wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          (a = n.event),
                          (i = n.state),
                          (s = n.cachedResponse),
                          "install" === a.type &&
                            i &&
                            i.originalRequest &&
                            i.originalRequest instanceof Request &&
                            ((c = i.originalRequest.url),
                            s
                              ? r.notUpdatedURLs.push(c)
                              : r.updatedURLs.push(c)),
                          e.abrupt("return", s)
                        );
                      case 3:
                      case "end":
                        return e.stop();
                    }
                }, e);
              })
            );
            return function (t) {
              return e.apply(this, arguments);
            };
          })());
      }),
      D = p(function e(r) {
        var n = this,
          a = r.precacheController;
        h(this, e),
          (this.cacheKeyWillBeUsed = (function () {
            var e = c(
              t().mark(function e(r) {
                var a, i, s;
                return t().wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          (a = r.request),
                          (i = r.params),
                          (s =
                            (null === i || void 0 === i
                              ? void 0
                              : i.cacheKey) ||
                            n._precacheController.getCacheKeyForURL(a.url)),
                          e.abrupt(
                            "return",
                            s ? new Request(s, { headers: a.headers }) : a
                          )
                        );
                      case 3:
                      case "end":
                        return e.stop();
                    }
                }, e);
              })
            );
            return function (t) {
              return e.apply(this, arguments);
            };
          })()),
          (this._precacheController = a);
      });
    function q() {
      if (void 0 === j) {
        var e = new Response("");
        if ("body" in e)
          try {
            new Response(e.body), (j = !0);
          } catch (t) {
            j = !1;
          }
        j = !1;
      }
      return j;
    }
    function N(e, t) {
      return U.apply(this, arguments);
    }
    function U() {
      return (U = c(
        t().mark(function e(r, n) {
          var a, i, s, c, o, u;
          return t().wrap(function (e) {
            for (;;)
              switch ((e.prev = e.next)) {
                case 0:
                  if (
                    ((a = null),
                    r.url && ((i = new URL(r.url)), (a = i.origin)),
                    a === self.location.origin)
                  ) {
                    e.next = 4;
                    break;
                  }
                  throw new _("cross-origin-copy-response", { origin: a });
                case 4:
                  if (
                    ((s = r.clone()),
                    (c = {
                      headers: new Headers(s.headers),
                      status: s.status,
                      statusText: s.statusText,
                    }),
                    (o = n ? n(c) : c),
                    !q())
                  ) {
                    e.next = 11;
                    break;
                  }
                  (e.t0 = s.body), (e.next = 14);
                  break;
                case 11:
                  return (e.next = 13), s.blob();
                case 13:
                  e.t0 = e.sent;
                case 14:
                  return (u = e.t0), e.abrupt("return", new Response(u, o));
                case 16:
                case "end":
                  return e.stop();
              }
          }, e);
        })
      )).apply(this, arguments);
    }
    var I = function (e) {
      return new URL(String(e), location.href).href.replace(
        new RegExp("^".concat(location.origin)),
        ""
      );
    };
    function A(e, t) {
      var r,
        n = new URL(e),
        a = o(t);
      try {
        for (a.s(); !(r = a.n()).done; ) {
          var i = r.value;
          n.searchParams.delete(i);
        }
      } catch (s) {
        a.e(s);
      } finally {
        a.f();
      }
      return n.href;
    }
    function K(e, t, r, n) {
      return M.apply(this, arguments);
    }
    function M() {
      return (M = c(
        t().mark(function e(r, n, a, i) {
          var s, c, u, h, f, l, p;
          return t().wrap(
            function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    if (((s = A(n.url, a)), n.url !== s)) {
                      e.next = 3;
                      break;
                    }
                    return e.abrupt("return", r.match(n, i));
                  case 3:
                    return (
                      (c = Object.assign(Object.assign({}, i), {
                        ignoreSearch: !0,
                      })),
                      (e.next = 6),
                      r.keys(n, c)
                    );
                  case 6:
                    (u = e.sent), (h = o(u)), (e.prev = 8), h.s();
                  case 10:
                    if ((f = h.n()).done) {
                      e.next = 17;
                      break;
                    }
                    if (((l = f.value), (p = A(l.url, a)), s !== p)) {
                      e.next = 15;
                      break;
                    }
                    return e.abrupt("return", r.match(l, i));
                  case 15:
                    e.next = 10;
                    break;
                  case 17:
                    e.next = 22;
                    break;
                  case 19:
                    (e.prev = 19), (e.t0 = e.catch(8)), h.e(e.t0);
                  case 22:
                    return (e.prev = 22), h.f(), e.finish(22);
                  case 25:
                    return e.abrupt("return");
                  case 26:
                  case "end":
                    return e.stop();
                }
            },
            e,
            null,
            [[8, 19, 22, 25]]
          );
        })
      )).apply(this, arguments);
    }
    var W = p(function e() {
        var t = this;
        h(this, e),
          (this.promise = new Promise(function (e, r) {
            (t.resolve = e), (t.reject = r);
          }));
      }),
      B = new Set();
    function F() {
      return H.apply(this, arguments);
    }
    function H() {
      return (H = c(
        t().mark(function e() {
          var r, n, a;
          return t().wrap(
            function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    0, (r = o(B)), (e.prev = 2), r.s();
                  case 4:
                    if ((n = r.n()).done) {
                      e.next = 11;
                      break;
                    }
                    return (a = n.value), (e.next = 8), a();
                  case 8:
                    0;
                  case 9:
                    e.next = 4;
                    break;
                  case 11:
                    e.next = 16;
                    break;
                  case 13:
                    (e.prev = 13), (e.t0 = e.catch(2)), r.e(e.t0);
                  case 16:
                    return (e.prev = 16), r.f(), e.finish(16);
                  case 19:
                    0;
                  case 20:
                  case "end":
                    return e.stop();
                }
            },
            e,
            null,
            [[2, 13, 16, 19]]
          );
        })
      )).apply(this, arguments);
    }
    function V(e) {
      return new Promise(function (t) {
        return setTimeout(t, e);
      });
    }
    r(833);
    function G(e) {
      return "string" === typeof e ? new Request(e) : e;
    }
    var $ = (function () {
        function e(t, r) {
          h(this, e),
            (this._cacheKeys = {}),
            Object.assign(this, r),
            (this.event = r.event),
            (this._strategy = t),
            (this._handlerDeferred = new W()),
            (this._extendLifetimePromises = []),
            (this._plugins = u(t.plugins)),
            (this._pluginStateMap = new Map());
          var n,
            a = o(this._plugins);
          try {
            for (a.s(); !(n = a.n()).done; ) {
              var i = n.value;
              this._pluginStateMap.set(i, {});
            }
          } catch (s) {
            a.e(s);
          } finally {
            a.f();
          }
          this.event.waitUntil(this._handlerDeferred.promise);
        }
        return (
          p(e, [
            {
              key: "fetch",
              value: (function (e) {
                function t(t) {
                  return e.apply(this, arguments);
                }
                return (
                  (t.toString = function () {
                    return e.toString();
                  }),
                  t
                );
              })(
                (function () {
                  var e = c(
                    t().mark(function e(r) {
                      var n, a, i, s, c, u, h, f, l, p, v, d;
                      return t().wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                if (
                                  ((n = this.event),
                                  !(
                                    "navigate" === (a = G(r)).mode &&
                                    n instanceof FetchEvent &&
                                    n.preloadResponse
                                  ))
                                ) {
                                  e.next = 9;
                                  break;
                                }
                                return (e.next = 5), n.preloadResponse;
                              case 5:
                                if (!(i = e.sent)) {
                                  e.next = 9;
                                  break;
                                }
                                return e.abrupt("return", i);
                              case 9:
                                (s = this.hasCallback("fetchDidFail")
                                  ? a.clone()
                                  : null),
                                  (e.prev = 10),
                                  (c = o(
                                    this.iterateCallbacks("requestWillFetch")
                                  )),
                                  (e.prev = 12),
                                  c.s();
                              case 14:
                                if ((u = c.n()).done) {
                                  e.next = 21;
                                  break;
                                }
                                return (
                                  (h = u.value),
                                  (e.next = 18),
                                  h({ request: a.clone(), event: n })
                                );
                              case 18:
                                a = e.sent;
                              case 19:
                                e.next = 14;
                                break;
                              case 21:
                                e.next = 26;
                                break;
                              case 23:
                                (e.prev = 23), (e.t0 = e.catch(12)), c.e(e.t0);
                              case 26:
                                return (e.prev = 26), c.f(), e.finish(26);
                              case 29:
                                e.next = 35;
                                break;
                              case 31:
                                if (
                                  ((e.prev = 31),
                                  (e.t1 = e.catch(10)),
                                  !(e.t1 instanceof Error))
                                ) {
                                  e.next = 35;
                                  break;
                                }
                                throw new _("plugin-error-request-will-fetch", {
                                  thrownErrorMessage: e.t1.message,
                                });
                              case 35:
                                return (
                                  (f = a.clone()),
                                  (e.prev = 36),
                                  (e.next = 39),
                                  fetch(
                                    a,
                                    "navigate" === a.mode
                                      ? void 0
                                      : this._strategy.fetchOptions
                                  )
                                );
                              case 39:
                                (l = e.sent),
                                  (p = o(
                                    this.iterateCallbacks("fetchDidSucceed")
                                  )),
                                  (e.prev = 42),
                                  p.s();
                              case 44:
                                if ((v = p.n()).done) {
                                  e.next = 51;
                                  break;
                                }
                                return (
                                  (d = v.value),
                                  (e.next = 48),
                                  d({ event: n, request: f, response: l })
                                );
                              case 48:
                                l = e.sent;
                              case 49:
                                e.next = 44;
                                break;
                              case 51:
                                e.next = 56;
                                break;
                              case 53:
                                (e.prev = 53), (e.t2 = e.catch(42)), p.e(e.t2);
                              case 56:
                                return (e.prev = 56), p.f(), e.finish(56);
                              case 59:
                                return e.abrupt("return", l);
                              case 62:
                                if (((e.prev = 62), (e.t3 = e.catch(36)), !s)) {
                                  e.next = 68;
                                  break;
                                }
                                return (
                                  (e.next = 68),
                                  this.runCallbacks("fetchDidFail", {
                                    error: e.t3,
                                    event: n,
                                    originalRequest: s.clone(),
                                    request: f.clone(),
                                  })
                                );
                              case 68:
                                throw e.t3;
                              case 69:
                              case "end":
                                return e.stop();
                            }
                        },
                        e,
                        this,
                        [
                          [10, 31],
                          [12, 23, 26, 29],
                          [36, 62],
                          [42, 53, 56, 59],
                        ]
                      );
                    })
                  );
                  return function (t) {
                    return e.apply(this, arguments);
                  };
                })()
              ),
            },
            {
              key: "fetchAndCachePut",
              value: (function () {
                var e = c(
                  t().mark(function e(r) {
                    var n, a;
                    return t().wrap(
                      function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (e.next = 2), this.fetch(r);
                            case 2:
                              return (
                                (n = e.sent),
                                (a = n.clone()),
                                this.waitUntil(this.cachePut(r, a)),
                                e.abrupt("return", n)
                              );
                            case 6:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      this
                    );
                  })
                );
                return function (t) {
                  return e.apply(this, arguments);
                };
              })(),
            },
            {
              key: "cacheMatch",
              value: (function () {
                var e = c(
                  t().mark(function e(r) {
                    var n, a, i, s, c, u, h, f, l, p;
                    return t().wrap(
                      function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                (n = G(r)),
                                (i = this._strategy),
                                (s = i.cacheName),
                                (c = i.matchOptions),
                                (e.next = 4),
                                this.getCacheKey(n, "read")
                              );
                            case 4:
                              return (
                                (u = e.sent),
                                (h = Object.assign(Object.assign({}, c), {
                                  cacheName: s,
                                })),
                                (e.next = 8),
                                caches.match(u, h)
                              );
                            case 8:
                              (a = e.sent),
                                (f = o(
                                  this.iterateCallbacks(
                                    "cachedResponseWillBeUsed"
                                  )
                                )),
                                (e.prev = 11),
                                f.s();
                            case 13:
                              if ((l = f.n()).done) {
                                e.next = 23;
                                break;
                              }
                              return (
                                (p = l.value),
                                (e.next = 17),
                                p({
                                  cacheName: s,
                                  matchOptions: c,
                                  cachedResponse: a,
                                  request: u,
                                  event: this.event,
                                })
                              );
                            case 17:
                              if (((e.t0 = e.sent), e.t0)) {
                                e.next = 20;
                                break;
                              }
                              e.t0 = void 0;
                            case 20:
                              a = e.t0;
                            case 21:
                              e.next = 13;
                              break;
                            case 23:
                              e.next = 28;
                              break;
                            case 25:
                              (e.prev = 25), (e.t1 = e.catch(11)), f.e(e.t1);
                            case 28:
                              return (e.prev = 28), f.f(), e.finish(28);
                            case 31:
                              return e.abrupt("return", a);
                            case 32:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      this,
                      [[11, 25, 28, 31]]
                    );
                  })
                );
                return function (t) {
                  return e.apply(this, arguments);
                };
              })(),
            },
            {
              key: "cachePut",
              value: (function () {
                var e = c(
                  t().mark(function e(r, n) {
                    var a, i, s, c, u, h, f, l, p, v, d, y, b;
                    return t().wrap(
                      function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (a = G(r)), (e.next = 3), V(0);
                            case 3:
                              return (e.next = 5), this.getCacheKey(a, "write");
                            case 5:
                              (i = e.sent), (e.next = 11);
                              break;
                            case 9:
                              (s = n.headers.get("Vary")) &&
                                O.debug(
                                  "The response for ".concat(I(i.url), " ") +
                                    "has a 'Vary: ".concat(s, "' header. ") +
                                    "Consider setting the {ignoreVary: true} option on your strategy to ensure cache matching and deletion works as expected."
                                );
                            case 11:
                              if (n) {
                                e.next = 14;
                                break;
                              }
                              throw new _("cache-put-with-no-response", {
                                url: I(i.url),
                              });
                            case 14:
                              return (
                                (e.next = 16),
                                this._ensureResponseSafeToCache(n)
                              );
                            case 16:
                              if ((c = e.sent)) {
                                e.next = 20;
                                break;
                              }
                              return e.abrupt("return", !1);
                            case 20:
                              return (
                                (u = this._strategy),
                                (h = u.cacheName),
                                (f = u.matchOptions),
                                (e.next = 23),
                                self.caches.open(h)
                              );
                            case 23:
                              if (
                                ((l = e.sent),
                                !(p = this.hasCallback("cacheDidUpdate")))
                              ) {
                                e.next = 31;
                                break;
                              }
                              return (
                                (e.next = 28),
                                K(l, i.clone(), ["__WB_REVISION__"], f)
                              );
                            case 28:
                              (e.t0 = e.sent), (e.next = 32);
                              break;
                            case 31:
                              e.t0 = null;
                            case 32:
                              return (
                                (v = e.t0),
                                (e.prev = 34),
                                (e.next = 37),
                                l.put(i, p ? c.clone() : c)
                              );
                            case 37:
                              e.next = 46;
                              break;
                            case 39:
                              if (
                                ((e.prev = 39),
                                (e.t1 = e.catch(34)),
                                !(e.t1 instanceof Error))
                              ) {
                                e.next = 46;
                                break;
                              }
                              if ("QuotaExceededError" !== e.t1.name) {
                                e.next = 45;
                                break;
                              }
                              return (e.next = 45), F();
                            case 45:
                              throw e.t1;
                            case 46:
                              (d = o(this.iterateCallbacks("cacheDidUpdate"))),
                                (e.prev = 47),
                                d.s();
                            case 49:
                              if ((y = d.n()).done) {
                                e.next = 55;
                                break;
                              }
                              return (
                                (b = y.value),
                                (e.next = 53),
                                b({
                                  cacheName: h,
                                  oldResponse: v,
                                  newResponse: c.clone(),
                                  request: i,
                                  event: this.event,
                                })
                              );
                            case 53:
                              e.next = 49;
                              break;
                            case 55:
                              e.next = 60;
                              break;
                            case 57:
                              (e.prev = 57), (e.t2 = e.catch(47)), d.e(e.t2);
                            case 60:
                              return (e.prev = 60), d.f(), e.finish(60);
                            case 63:
                              return e.abrupt("return", !0);
                            case 64:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      this,
                      [
                        [34, 39],
                        [47, 57, 60, 63],
                      ]
                    );
                  })
                );
                return function (t, r) {
                  return e.apply(this, arguments);
                };
              })(),
            },
            {
              key: "getCacheKey",
              value: (function () {
                var e = c(
                  t().mark(function e(r, n) {
                    var a, i, s, c, u;
                    return t().wrap(
                      function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              if (
                                ((a = "".concat(r.url, " | ").concat(n)),
                                this._cacheKeys[a])
                              ) {
                                e.next = 24;
                                break;
                              }
                              (i = r),
                                (s = o(
                                  this.iterateCallbacks("cacheKeyWillBeUsed")
                                )),
                                (e.prev = 4),
                                s.s();
                            case 6:
                              if ((c = s.n()).done) {
                                e.next = 15;
                                break;
                              }
                              return (
                                (u = c.value),
                                (e.t0 = G),
                                (e.next = 11),
                                u({
                                  mode: n,
                                  request: i,
                                  event: this.event,
                                  params: this.params,
                                })
                              );
                            case 11:
                              (e.t1 = e.sent), (i = (0, e.t0)(e.t1));
                            case 13:
                              e.next = 6;
                              break;
                            case 15:
                              e.next = 20;
                              break;
                            case 17:
                              (e.prev = 17), (e.t2 = e.catch(4)), s.e(e.t2);
                            case 20:
                              return (e.prev = 20), s.f(), e.finish(20);
                            case 23:
                              this._cacheKeys[a] = i;
                            case 24:
                              return e.abrupt("return", this._cacheKeys[a]);
                            case 25:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      this,
                      [[4, 17, 20, 23]]
                    );
                  })
                );
                return function (t, r) {
                  return e.apply(this, arguments);
                };
              })(),
            },
            {
              key: "hasCallback",
              value: function (e) {
                var t,
                  r = o(this._strategy.plugins);
                try {
                  for (r.s(); !(t = r.n()).done; ) {
                    if (e in t.value) return !0;
                  }
                } catch (n) {
                  r.e(n);
                } finally {
                  r.f();
                }
                return !1;
              },
            },
            {
              key: "runCallbacks",
              value: (function () {
                var e = c(
                  t().mark(function e(r, n) {
                    var a, i, s;
                    return t().wrap(
                      function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              (a = o(this.iterateCallbacks(r))),
                                (e.prev = 1),
                                a.s();
                            case 3:
                              if ((i = a.n()).done) {
                                e.next = 9;
                                break;
                              }
                              return (s = i.value), (e.next = 7), s(n);
                            case 7:
                              e.next = 3;
                              break;
                            case 9:
                              e.next = 14;
                              break;
                            case 11:
                              (e.prev = 11), (e.t0 = e.catch(1)), a.e(e.t0);
                            case 14:
                              return (e.prev = 14), a.f(), e.finish(14);
                            case 17:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      this,
                      [[1, 11, 14, 17]]
                    );
                  })
                );
                return function (t, r) {
                  return e.apply(this, arguments);
                };
              })(),
            },
            {
              key: "iterateCallbacks",
              value: t().mark(function e(r) {
                var n,
                  a,
                  i,
                  s = this;
                return t().wrap(
                  function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          (n = o(this._strategy.plugins)),
                            (e.prev = 1),
                            (i = t().mark(function e() {
                              var n, i, c;
                              return t().wrap(function (e) {
                                for (;;)
                                  switch ((e.prev = e.next)) {
                                    case 0:
                                      if (
                                        "function" !== typeof (n = a.value)[r]
                                      ) {
                                        e.next = 6;
                                        break;
                                      }
                                      return (
                                        (i = s._pluginStateMap.get(n)),
                                        (c = function (e) {
                                          var t = Object.assign(
                                            Object.assign({}, e),
                                            { state: i }
                                          );
                                          return n[r](t);
                                        }),
                                        (e.next = 6),
                                        c
                                      );
                                    case 6:
                                    case "end":
                                      return e.stop();
                                  }
                              }, e);
                            })),
                            n.s();
                        case 4:
                          if ((a = n.n()).done) {
                            e.next = 8;
                            break;
                          }
                          return e.delegateYield(i(), "t0", 6);
                        case 6:
                          e.next = 4;
                          break;
                        case 8:
                          e.next = 13;
                          break;
                        case 10:
                          (e.prev = 10), (e.t1 = e.catch(1)), n.e(e.t1);
                        case 13:
                          return (e.prev = 13), n.f(), e.finish(13);
                        case 16:
                        case "end":
                          return e.stop();
                      }
                  },
                  e,
                  this,
                  [[1, 10, 13, 16]]
                );
              }),
            },
            {
              key: "waitUntil",
              value: function (e) {
                return this._extendLifetimePromises.push(e), e;
              },
            },
            {
              key: "doneWaiting",
              value: (function () {
                var e = c(
                  t().mark(function e() {
                    var r;
                    return t().wrap(
                      function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              if (!(r = this._extendLifetimePromises.shift())) {
                                e.next = 5;
                                break;
                              }
                              return (e.next = 3), r;
                            case 3:
                              e.next = 0;
                              break;
                            case 5:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      this
                    );
                  })
                );
                return function () {
                  return e.apply(this, arguments);
                };
              })(),
            },
            {
              key: "destroy",
              value: function () {
                this._handlerDeferred.resolve(null);
              },
            },
            {
              key: "_ensureResponseSafeToCache",
              value: (function () {
                var e = c(
                  t().mark(function e(r) {
                    var n, a, i, s, c;
                    return t().wrap(
                      function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              (n = r),
                                (a = !1),
                                (i = o(
                                  this.iterateCallbacks("cacheWillUpdate")
                                )),
                                (e.prev = 3),
                                i.s();
                            case 5:
                              if ((s = i.n()).done) {
                                e.next = 18;
                                break;
                              }
                              return (
                                (c = s.value),
                                (e.next = 9),
                                c({
                                  request: this.request,
                                  response: n,
                                  event: this.event,
                                })
                              );
                            case 9:
                              if (((e.t0 = e.sent), e.t0)) {
                                e.next = 12;
                                break;
                              }
                              e.t0 = void 0;
                            case 12:
                              if (((n = e.t0), (a = !0), n)) {
                                e.next = 16;
                                break;
                              }
                              return e.abrupt("break", 18);
                            case 16:
                              e.next = 5;
                              break;
                            case 18:
                              e.next = 23;
                              break;
                            case 20:
                              (e.prev = 20), (e.t1 = e.catch(3)), i.e(e.t1);
                            case 23:
                              return (e.prev = 23), i.f(), e.finish(23);
                            case 26:
                              return (
                                a || (n && 200 !== n.status && (n = void 0)),
                                e.abrupt("return", n)
                              );
                            case 28:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      this,
                      [[3, 20, 23, 26]]
                    );
                  })
                );
                return function (t) {
                  return e.apply(this, arguments);
                };
              })(),
            },
          ]),
          e
        );
      })(),
      Y = (function () {
        function e() {
          var t =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          h(this, e),
            (this.cacheName = C(t.cacheName)),
            (this.plugins = t.plugins || []),
            (this.fetchOptions = t.fetchOptions),
            (this.matchOptions = t.matchOptions);
        }
        return (
          p(e, [
            {
              key: "handle",
              value: function (e) {
                return i(this.handleAll(e), 1)[0];
              },
            },
            {
              key: "handleAll",
              value: function (e) {
                e instanceof FetchEvent &&
                  (e = { event: e, request: e.request });
                var t = e.event,
                  r =
                    "string" === typeof e.request
                      ? new Request(e.request)
                      : e.request,
                  n = "params" in e ? e.params : void 0,
                  a = new $(this, { event: t, request: r, params: n }),
                  i = this._getResponse(a, r, t);
                return [i, this._awaitComplete(i, a, r, t)];
              },
            },
            {
              key: "_getResponse",
              value: (function () {
                var e = c(
                  t().mark(function e(r, n, a) {
                    var i, s, c, u, h, f, l;
                    return t().wrap(
                      function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                (e.next = 2),
                                r.runCallbacks("handlerWillStart", {
                                  event: a,
                                  request: n,
                                })
                              );
                            case 2:
                              return (
                                (i = void 0),
                                (e.prev = 3),
                                (e.next = 6),
                                this._handle(n, r)
                              );
                            case 6:
                              if ((i = e.sent) && "error" !== i.type) {
                                e.next = 9;
                                break;
                              }
                              throw new _("no-response", { url: n.url });
                            case 9:
                              e.next = 39;
                              break;
                            case 11:
                              if (
                                ((e.prev = 11),
                                (e.t0 = e.catch(3)),
                                !(e.t0 instanceof Error))
                              ) {
                                e.next = 34;
                                break;
                              }
                              (s = o(r.iterateCallbacks("handlerDidError"))),
                                (e.prev = 15),
                                s.s();
                            case 17:
                              if ((c = s.n()).done) {
                                e.next = 26;
                                break;
                              }
                              return (
                                (u = c.value),
                                (e.next = 21),
                                u({ error: e.t0, event: a, request: n })
                              );
                            case 21:
                              if (!(i = e.sent)) {
                                e.next = 24;
                                break;
                              }
                              return e.abrupt("break", 26);
                            case 24:
                              e.next = 17;
                              break;
                            case 26:
                              e.next = 31;
                              break;
                            case 28:
                              (e.prev = 28), (e.t1 = e.catch(15)), s.e(e.t1);
                            case 31:
                              return (e.prev = 31), s.f(), e.finish(31);
                            case 34:
                              if (i) {
                                e.next = 38;
                                break;
                              }
                              throw e.t0;
                            case 38:
                              0;
                            case 39:
                              (h = o(r.iterateCallbacks("handlerWillRespond"))),
                                (e.prev = 40),
                                h.s();
                            case 42:
                              if ((f = h.n()).done) {
                                e.next = 49;
                                break;
                              }
                              return (
                                (l = f.value),
                                (e.next = 46),
                                l({ event: a, request: n, response: i })
                              );
                            case 46:
                              i = e.sent;
                            case 47:
                              e.next = 42;
                              break;
                            case 49:
                              e.next = 54;
                              break;
                            case 51:
                              (e.prev = 51), (e.t2 = e.catch(40)), h.e(e.t2);
                            case 54:
                              return (e.prev = 54), h.f(), e.finish(54);
                            case 57:
                              return e.abrupt("return", i);
                            case 58:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      this,
                      [
                        [3, 11],
                        [15, 28, 31, 34],
                        [40, 51, 54, 57],
                      ]
                    );
                  })
                );
                return function (t, r, n) {
                  return e.apply(this, arguments);
                };
              })(),
            },
            {
              key: "_awaitComplete",
              value: (function () {
                var e = c(
                  t().mark(function e(r, n, a, i) {
                    var s, c;
                    return t().wrap(
                      function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (e.prev = 0), (e.next = 3), r;
                            case 3:
                              (s = e.sent), (e.next = 8);
                              break;
                            case 6:
                              (e.prev = 6), (e.t0 = e.catch(0));
                            case 8:
                              return (
                                (e.prev = 8),
                                (e.next = 11),
                                n.runCallbacks("handlerDidRespond", {
                                  event: i,
                                  request: a,
                                  response: s,
                                })
                              );
                            case 11:
                              return (e.next = 13), n.doneWaiting();
                            case 13:
                              e.next = 18;
                              break;
                            case 15:
                              (e.prev = 15),
                                (e.t1 = e.catch(8)),
                                e.t1 instanceof Error && (c = e.t1);
                            case 18:
                              return (
                                (e.next = 20),
                                n.runCallbacks("handlerDidComplete", {
                                  event: i,
                                  request: a,
                                  response: s,
                                  error: c,
                                })
                              );
                            case 20:
                              if ((n.destroy(), !c)) {
                                e.next = 23;
                                break;
                              }
                              throw c;
                            case 23:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      null,
                      [
                        [0, 6],
                        [8, 15],
                      ]
                    );
                  })
                );
                return function (t, r, n, a) {
                  return e.apply(this, arguments);
                };
              })(),
            },
          ]),
          e
        );
      })(),
      Q = (function (e) {
        d(n, e);
        var r = m(n);
        function n() {
          var e,
            t =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {};
          return (
            h(this, n),
            (t.cacheName = L(t.cacheName)),
            ((e = r.call(this, t))._fallbackToNetwork =
              !1 !== t.fallbackToNetwork),
            e.plugins.push(n.copyRedirectedCacheableResponsesPlugin),
            e
          );
        }
        return (
          p(n, [
            {
              key: "_handle",
              value: (function () {
                var e = c(
                  t().mark(function e(r, n) {
                    var a;
                    return t().wrap(
                      function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (e.next = 2), n.cacheMatch(r);
                            case 2:
                              if (!(a = e.sent)) {
                                e.next = 5;
                                break;
                              }
                              return e.abrupt("return", a);
                            case 5:
                              if (!n.event || "install" !== n.event.type) {
                                e.next = 9;
                                break;
                              }
                              return (e.next = 8), this._handleInstall(r, n);
                            case 8:
                            case 11:
                              return e.abrupt("return", e.sent);
                            case 9:
                              return (e.next = 11), this._handleFetch(r, n);
                            case 12:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      this
                    );
                  })
                );
                return function (t, r) {
                  return e.apply(this, arguments);
                };
              })(),
            },
            {
              key: "_handleFetch",
              value: (function () {
                var e = c(
                  t().mark(function e(r, n) {
                    var a, i, s, c, o, u;
                    return t().wrap(
                      function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              if (
                                ((i = n.params || {}), !this._fallbackToNetwork)
                              ) {
                                e.next = 17;
                                break;
                              }
                              return (
                                (s = i.integrity),
                                (c = r.integrity),
                                (o = !c || c === s),
                                (e.next = 8),
                                n.fetch(
                                  new Request(r, {
                                    integrity:
                                      "no-cors" !== r.mode ? c || s : void 0,
                                  })
                                )
                              );
                            case 8:
                              if (
                                ((a = e.sent), !s || !o || "no-cors" === r.mode)
                              ) {
                                e.next = 15;
                                break;
                              }
                              return (
                                this._useDefaultCacheabilityPluginIfNeeded(),
                                (e.next = 13),
                                n.cachePut(r, a.clone())
                              );
                            case 13:
                              e.sent;
                            case 15:
                              e.next = 18;
                              break;
                            case 17:
                              throw new _("missing-precache-entry", {
                                cacheName: this.cacheName,
                                url: r.url,
                              });
                            case 18:
                              e.next = 34;
                              break;
                            case 23:
                              e.t0 = e.sent;
                            case 24:
                              (u = e.t0),
                                O.groupCollapsed(
                                  "Precaching is responding to: " + I(r.url)
                                ),
                                O.log(
                                  "Serving the precached url: ".concat(
                                    I(u instanceof Request ? u.url : u)
                                  )
                                ),
                                O.groupCollapsed("View request details here."),
                                O.log(r),
                                O.groupEnd(),
                                O.groupCollapsed("View response details here."),
                                O.log(a),
                                O.groupEnd(),
                                O.groupEnd();
                            case 34:
                              return e.abrupt("return", a);
                            case 35:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      this
                    );
                  })
                );
                return function (t, r) {
                  return e.apply(this, arguments);
                };
              })(),
            },
            {
              key: "_handleInstall",
              value: (function () {
                var e = c(
                  t().mark(function e(r, n) {
                    var a;
                    return t().wrap(
                      function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                this._useDefaultCacheabilityPluginIfNeeded(),
                                (e.next = 3),
                                n.fetch(r)
                              );
                            case 3:
                              return (
                                (a = e.sent),
                                (e.next = 6),
                                n.cachePut(r, a.clone())
                              );
                            case 6:
                              if (e.sent) {
                                e.next = 9;
                                break;
                              }
                              throw new _("bad-precaching-response", {
                                url: r.url,
                                status: a.status,
                              });
                            case 9:
                              return e.abrupt("return", a);
                            case 10:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      this
                    );
                  })
                );
                return function (t, r) {
                  return e.apply(this, arguments);
                };
              })(),
            },
            {
              key: "_useDefaultCacheabilityPluginIfNeeded",
              value: function () {
                var e,
                  t = null,
                  r = 0,
                  a = o(this.plugins.entries());
                try {
                  for (a.s(); !(e = a.n()).done; ) {
                    var s = i(e.value, 2),
                      c = s[0],
                      u = s[1];
                    u !== n.copyRedirectedCacheableResponsesPlugin &&
                      (u === n.defaultPrecacheCacheabilityPlugin && (t = c),
                      u.cacheWillUpdate && r++);
                  }
                } catch (h) {
                  a.e(h);
                } finally {
                  a.f();
                }
                0 === r
                  ? this.plugins.push(n.defaultPrecacheCacheabilityPlugin)
                  : r > 1 && null !== t && this.plugins.splice(t, 1);
              },
            },
          ]),
          n
        );
      })(Y);
    (Q.defaultPrecacheCacheabilityPlugin = {
      cacheWillUpdate: function (e) {
        return c(
          t().mark(function r() {
            var n;
            return t().wrap(function (t) {
              for (;;)
                switch ((t.prev = t.next)) {
                  case 0:
                    if ((n = e.response) && !(n.status >= 400)) {
                      t.next = 3;
                      break;
                    }
                    return t.abrupt("return", null);
                  case 3:
                    return t.abrupt("return", n);
                  case 4:
                  case "end":
                    return t.stop();
                }
            }, r);
          })
        )();
      },
    }),
      (Q.copyRedirectedCacheableResponsesPlugin = {
        cacheWillUpdate: function (e) {
          return c(
            t().mark(function r() {
              var n;
              return t().wrap(function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      if (!(n = e.response).redirected) {
                        t.next = 7;
                        break;
                      }
                      return (t.next = 4), N(n);
                    case 4:
                      (t.t0 = t.sent), (t.next = 8);
                      break;
                    case 7:
                      t.t0 = n;
                    case 8:
                      return t.abrupt("return", t.t0);
                    case 9:
                    case "end":
                      return t.stop();
                  }
              }, r);
            })
          )();
        },
      });
    var J,
      z = (function () {
        function e() {
          var t =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {},
            r = t.cacheName,
            n = t.plugins,
            a = void 0 === n ? [] : n,
            i = t.fallbackToNetwork,
            s = void 0 === i || i;
          h(this, e),
            (this._urlsToCacheKeys = new Map()),
            (this._urlsToCacheModes = new Map()),
            (this._cacheKeysToIntegrities = new Map()),
            (this._strategy = new Q({
              cacheName: L(r),
              plugins: [].concat(u(a), [new D({ precacheController: this })]),
              fallbackToNetwork: s,
            })),
            (this.install = this.install.bind(this)),
            (this.activate = this.activate.bind(this));
        }
        return (
          p(e, [
            {
              key: "strategy",
              get: function () {
                return this._strategy;
              },
            },
            {
              key: "precache",
              value: function (e) {
                this.addToCacheList(e),
                  this._installAndActiveListenersAdded ||
                    (self.addEventListener("install", this.install),
                    self.addEventListener("activate", this.activate),
                    (this._installAndActiveListenersAdded = !0));
              },
            },
            {
              key: "addToCacheList",
              value: function (e) {
                var t,
                  r = [],
                  n = o(e);
                try {
                  for (n.s(); !(t = n.n()).done; ) {
                    var a = t.value;
                    "string" === typeof a
                      ? r.push(a)
                      : a && void 0 === a.revision && r.push(a.url);
                    var i = T(a),
                      s = i.cacheKey,
                      c = i.url,
                      u =
                        "string" !== typeof a && a.revision
                          ? "reload"
                          : "default";
                    if (
                      this._urlsToCacheKeys.has(c) &&
                      this._urlsToCacheKeys.get(c) !== s
                    )
                      throw new _("add-to-cache-list-conflicting-entries", {
                        firstEntry: this._urlsToCacheKeys.get(c),
                        secondEntry: s,
                      });
                    if ("string" !== typeof a && a.integrity) {
                      if (
                        this._cacheKeysToIntegrities.has(s) &&
                        this._cacheKeysToIntegrities.get(s) !== a.integrity
                      )
                        throw new _(
                          "add-to-cache-list-conflicting-integrities",
                          { url: c }
                        );
                      this._cacheKeysToIntegrities.set(s, a.integrity);
                    }
                    if (
                      (this._urlsToCacheKeys.set(c, s),
                      this._urlsToCacheModes.set(c, u),
                      r.length > 0)
                    ) {
                      var h =
                        "Workbox is precaching URLs without revision " +
                        "info: ".concat(
                          r.join(", "),
                          "\nThis is generally NOT safe. "
                        ) +
                        "Learn more at https://bit.ly/wb-precache";
                      console.warn(h);
                    }
                  }
                } catch (f) {
                  n.e(f);
                } finally {
                  n.f();
                }
              },
            },
            {
              key: "install",
              value: function (e) {
                var r = this;
                return S(
                  e,
                  c(
                    t().mark(function n() {
                      var a, s, c, u, h, f, l, p, v, d, y;
                      return t().wrap(
                        function (t) {
                          for (;;)
                            switch ((t.prev = t.next)) {
                              case 0:
                                (a = new P()),
                                  r.strategy.plugins.push(a),
                                  (s = o(r._urlsToCacheKeys)),
                                  (t.prev = 3),
                                  s.s();
                              case 5:
                                if ((c = s.n()).done) {
                                  t.next = 14;
                                  break;
                                }
                                return (
                                  (u = i(c.value, 2)),
                                  (h = u[0]),
                                  (f = u[1]),
                                  (l = r._cacheKeysToIntegrities.get(f)),
                                  (p = r._urlsToCacheModes.get(h)),
                                  (v = new Request(h, {
                                    integrity: l,
                                    cache: p,
                                    credentials: "same-origin",
                                  })),
                                  (t.next = 12),
                                  Promise.all(
                                    r.strategy.handleAll({
                                      params: { cacheKey: f },
                                      request: v,
                                      event: e,
                                    })
                                  )
                                );
                              case 12:
                                t.next = 5;
                                break;
                              case 14:
                                t.next = 19;
                                break;
                              case 16:
                                (t.prev = 16), (t.t0 = t.catch(3)), s.e(t.t0);
                              case 19:
                                return (t.prev = 19), s.f(), t.finish(19);
                              case 22:
                                return (
                                  (d = a.updatedURLs),
                                  (y = a.notUpdatedURLs),
                                  t.abrupt("return", {
                                    updatedURLs: d,
                                    notUpdatedURLs: y,
                                  })
                                );
                              case 25:
                              case "end":
                                return t.stop();
                            }
                        },
                        n,
                        null,
                        [[3, 16, 19, 22]]
                      );
                    })
                  )
                );
              },
            },
            {
              key: "activate",
              value: function (e) {
                var r = this;
                return S(
                  e,
                  c(
                    t().mark(function e() {
                      var n, a, i, s, c, u, h;
                      return t().wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (
                                  (e.next = 2),
                                  self.caches.open(r.strategy.cacheName)
                                );
                              case 2:
                                return (n = e.sent), (e.next = 5), n.keys();
                              case 5:
                                (a = e.sent),
                                  (i = new Set(r._urlsToCacheKeys.values())),
                                  (s = []),
                                  (c = o(a)),
                                  (e.prev = 9),
                                  c.s();
                              case 11:
                                if ((u = c.n()).done) {
                                  e.next = 19;
                                  break;
                                }
                                if (((h = u.value), i.has(h.url))) {
                                  e.next = 17;
                                  break;
                                }
                                return (e.next = 16), n.delete(h);
                              case 16:
                                s.push(h.url);
                              case 17:
                                e.next = 11;
                                break;
                              case 19:
                                e.next = 24;
                                break;
                              case 21:
                                (e.prev = 21), (e.t0 = e.catch(9)), c.e(e.t0);
                              case 24:
                                return (e.prev = 24), c.f(), e.finish(24);
                              case 27:
                                return e.abrupt("return", { deletedURLs: s });
                              case 29:
                              case "end":
                                return e.stop();
                            }
                        },
                        e,
                        null,
                        [[9, 21, 24, 27]]
                      );
                    })
                  )
                );
              },
            },
            {
              key: "getURLsToCacheKeys",
              value: function () {
                return this._urlsToCacheKeys;
              },
            },
            {
              key: "getCachedURLs",
              value: function () {
                return u(this._urlsToCacheKeys.keys());
              },
            },
            {
              key: "getCacheKeyForURL",
              value: function (e) {
                var t = new URL(e, location.href);
                return this._urlsToCacheKeys.get(t.href);
              },
            },
            {
              key: "getIntegrityForCacheKey",
              value: function (e) {
                return this._cacheKeysToIntegrities.get(e);
              },
            },
            {
              key: "matchPrecache",
              value: (function () {
                var e = c(
                  t().mark(function e(r) {
                    var n, a, i;
                    return t().wrap(
                      function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              if (
                                ((n = r instanceof Request ? r.url : r),
                                !(a = this.getCacheKeyForURL(n)))
                              ) {
                                e.next = 7;
                                break;
                              }
                              return (
                                (e.next = 5),
                                self.caches.open(this.strategy.cacheName)
                              );
                            case 5:
                              return (
                                (i = e.sent), e.abrupt("return", i.match(a))
                              );
                            case 7:
                              return e.abrupt("return", void 0);
                            case 8:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      this
                    );
                  })
                );
                return function (t) {
                  return e.apply(this, arguments);
                };
              })(),
            },
            {
              key: "createHandlerBoundToURL",
              value: function (e) {
                var t = this,
                  r = this.getCacheKeyForURL(e);
                if (!r) throw new _("non-precached-url", { url: e });
                return function (n) {
                  return (
                    (n.request = new Request(e)),
                    (n.params = Object.assign({ cacheKey: r }, n.params)),
                    t.strategy.handle(n)
                  );
                };
              },
            },
          ]),
          e
        );
      })(),
      X = function () {
        return J || (J = new z()), J;
      };
    r(185);
    var Z,
      ee = function (e) {
        return e && "object" === typeof e ? e : { handle: e };
      },
      te = (function () {
        function e(t, r) {
          var n =
            arguments.length > 2 && void 0 !== arguments[2]
              ? arguments[2]
              : "GET";
          h(this, e),
            (this.handler = ee(r)),
            (this.match = t),
            (this.method = n);
        }
        return (
          p(e, [
            {
              key: "setCatchHandler",
              value: function (e) {
                this.catchHandler = ee(e);
              },
            },
          ]),
          e
        );
      })(),
      re = (function (e) {
        d(r, e);
        var t = m(r);
        function r(e, n, a) {
          h(this, r);
          return t.call(
            this,
            function (t) {
              var r = t.url,
                n = e.exec(r.href);
              if (n && (r.origin === location.origin || 0 === n.index))
                return n.slice(1);
            },
            n,
            a
          );
        }
        return p(r);
      })(te),
      ne = (function () {
        function e() {
          h(this, e),
            (this._routes = new Map()),
            (this._defaultHandlerMap = new Map());
        }
        return (
          p(e, [
            {
              key: "routes",
              get: function () {
                return this._routes;
              },
            },
            {
              key: "addFetchListener",
              value: function () {
                var e = this;
                self.addEventListener("fetch", function (t) {
                  var r = t.request,
                    n = e.handleRequest({ request: r, event: t });
                  n && t.respondWith(n);
                });
              },
            },
            {
              key: "addCacheListener",
              value: function () {
                var e = this;
                self.addEventListener("message", function (t) {
                  if (t.data && "CACHE_URLS" === t.data.type) {
                    var r = t.data.payload;
                    0;
                    var n = Promise.all(
                      r.urlsToCache.map(function (r) {
                        "string" === typeof r && (r = [r]);
                        var n = x(Request, u(r));
                        return e.handleRequest({ request: n, event: t });
                      })
                    );
                    t.waitUntil(n),
                      t.ports &&
                        t.ports[0] &&
                        n.then(function () {
                          return t.ports[0].postMessage(!0);
                        });
                  }
                });
              },
            },
            {
              key: "handleRequest",
              value: function (e) {
                var r = this,
                  n = e.request,
                  a = e.event;
                var i = new URL(n.url, location.href);
                if (i.protocol.startsWith("http")) {
                  var s = i.origin === location.origin,
                    o = this.findMatchingRoute({
                      event: a,
                      request: n,
                      sameOrigin: s,
                      url: i,
                    }),
                    u = o.params,
                    h = o.route,
                    f = h && h.handler;
                  0;
                  var l = n.method;
                  if (
                    (!f &&
                      this._defaultHandlerMap.has(l) &&
                      (f = this._defaultHandlerMap.get(l)),
                    f)
                  ) {
                    var p;
                    0;
                    try {
                      p = f.handle({ url: i, request: n, event: a, params: u });
                    } catch (d) {
                      p = Promise.reject(d);
                    }
                    var v = h && h.catchHandler;
                    return (
                      p instanceof Promise &&
                        (this._catchHandler || v) &&
                        (p = p.catch(
                          (function () {
                            var e = c(
                              t().mark(function e(s) {
                                return t().wrap(
                                  function (e) {
                                    for (;;)
                                      switch ((e.prev = e.next)) {
                                        case 0:
                                          if (!v) {
                                            e.next = 11;
                                            break;
                                          }
                                          return (
                                            (e.prev = 2),
                                            (e.next = 5),
                                            v.handle({
                                              url: i,
                                              request: n,
                                              event: a,
                                              params: u,
                                            })
                                          );
                                        case 5:
                                          return e.abrupt("return", e.sent);
                                        case 8:
                                          (e.prev = 8),
                                            (e.t0 = e.catch(2)),
                                            e.t0 instanceof Error && (s = e.t0);
                                        case 11:
                                          if (!r._catchHandler) {
                                            e.next = 14;
                                            break;
                                          }
                                          return e.abrupt(
                                            "return",
                                            r._catchHandler.handle({
                                              url: i,
                                              request: n,
                                              event: a,
                                            })
                                          );
                                        case 14:
                                          throw s;
                                        case 15:
                                        case "end":
                                          return e.stop();
                                      }
                                  },
                                  e,
                                  null,
                                  [[2, 8]]
                                );
                              })
                            );
                            return function (t) {
                              return e.apply(this, arguments);
                            };
                          })()
                        )),
                      p
                    );
                  }
                }
              },
            },
            {
              key: "findMatchingRoute",
              value: function (e) {
                var t,
                  r = e.url,
                  n = e.sameOrigin,
                  a = e.request,
                  i = e.event,
                  s = o(this._routes.get(a.method) || []);
                try {
                  for (s.s(); !(t = s.n()).done; ) {
                    var c = t.value,
                      u = void 0,
                      h = c.match({
                        url: r,
                        sameOrigin: n,
                        request: a,
                        event: i,
                      });
                    if (h)
                      return (
                        (u = h),
                        ((Array.isArray(u) && 0 === u.length) ||
                          (h.constructor === Object &&
                            0 === Object.keys(h).length) ||
                          "boolean" === typeof h) &&
                          (u = void 0),
                        { route: c, params: u }
                      );
                  }
                } catch (f) {
                  s.e(f);
                } finally {
                  s.f();
                }
                return {};
              },
            },
            {
              key: "setDefaultHandler",
              value: function (e) {
                var t =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : "GET";
                this._defaultHandlerMap.set(t, ee(e));
              },
            },
            {
              key: "setCatchHandler",
              value: function (e) {
                this._catchHandler = ee(e);
              },
            },
            {
              key: "registerRoute",
              value: function (e) {
                this._routes.has(e.method) || this._routes.set(e.method, []),
                  this._routes.get(e.method).push(e);
              },
            },
            {
              key: "unregisterRoute",
              value: function (e) {
                if (!this._routes.has(e.method))
                  throw new _("unregister-route-but-not-found-with-method", {
                    method: e.method,
                  });
                var t = this._routes.get(e.method).indexOf(e);
                if (!(t > -1))
                  throw new _("unregister-route-route-not-registered");
                this._routes.get(e.method).splice(t, 1);
              },
            },
          ]),
          e
        );
      })(),
      ae = function () {
        return (
          Z || ((Z = new ne()).addFetchListener(), Z.addCacheListener()), Z
        );
      };
    function ie(e, t, r) {
      var n;
      if ("string" === typeof e) {
        var a = new URL(e, location.href);
        n = new te(
          function (e) {
            return e.url.href === a.href;
          },
          t,
          r
        );
      } else if (e instanceof RegExp) n = new re(e, t, r);
      else if ("function" === typeof e) n = new te(e, t, r);
      else {
        if (!(e instanceof te))
          throw new _("unsupported-route-type", {
            moduleName: "workbox-routing",
            funcName: "registerRoute",
            paramName: "capture",
          });
        n = e;
      }
      return ae().registerRoute(n), n;
    }
    function se(e) {
      for (
        var t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
          r = function () {
            var r = a[n];
            t.some(function (e) {
              return e.test(r);
            }) && e.searchParams.delete(r);
          },
          n = 0,
          a = u(e.searchParams.keys());
        n < a.length;
        n++
      )
        r();
      return e;
    }
    var ce = (function (e) {
      d(n, e);
      var r = m(n);
      function n(e, a) {
        h(this, n);
        return r.call(
          this,
          function (r) {
            var n,
              i = r.request,
              s = e.getURLsToCacheKeys(),
              c = o(
                (function (e) {
                  var r =
                      arguments.length > 1 && void 0 !== arguments[1]
                        ? arguments[1]
                        : {},
                    n = r.ignoreURLParametersMatching,
                    a = void 0 === n ? [/^utm_/, /^fbclid$/] : n,
                    i = r.directoryIndex,
                    s = void 0 === i ? "index.html" : i,
                    c = r.cleanURLs,
                    u = void 0 === c || c,
                    h = r.urlManipulation;
                  return t().mark(function r() {
                    var n, i, c, f, l, p, v, d;
                    return t().wrap(
                      function (t) {
                        for (;;)
                          switch ((t.prev = t.next)) {
                            case 0:
                              return (
                                ((n = new URL(e, location.href)).hash = ""),
                                (t.next = 4),
                                n.href
                              );
                            case 4:
                              return (i = se(n, a)), (t.next = 7), i.href;
                            case 7:
                              if (!s || !i.pathname.endsWith("/")) {
                                t.next = 12;
                                break;
                              }
                              return (
                                ((c = new URL(i.href)).pathname += s),
                                (t.next = 12),
                                c.href
                              );
                            case 12:
                              if (!u) {
                                t.next = 17;
                                break;
                              }
                              return (
                                ((f = new URL(i.href)).pathname += ".html"),
                                (t.next = 17),
                                f.href
                              );
                            case 17:
                              if (!h) {
                                t.next = 36;
                                break;
                              }
                              (l = h({ url: n })),
                                (p = o(l)),
                                (t.prev = 20),
                                p.s();
                            case 22:
                              if ((v = p.n()).done) {
                                t.next = 28;
                                break;
                              }
                              return (d = v.value), (t.next = 26), d.href;
                            case 26:
                              t.next = 22;
                              break;
                            case 28:
                              t.next = 33;
                              break;
                            case 30:
                              (t.prev = 30), (t.t0 = t.catch(20)), p.e(t.t0);
                            case 33:
                              return (t.prev = 33), p.f(), t.finish(33);
                            case 36:
                            case "end":
                              return t.stop();
                          }
                      },
                      r,
                      null,
                      [[20, 30, 33, 36]]
                    );
                  })();
                })(i.url, a)
              );
            try {
              for (c.s(); !(n = c.n()).done; ) {
                var u = n.value,
                  h = s.get(u);
                if (h)
                  return {
                    cacheKey: h,
                    integrity: e.getIntegrityForCacheKey(h),
                  };
              }
            } catch (f) {
              c.e(f);
            } finally {
              c.f();
            }
          },
          e.strategy
        );
      }
      return p(n);
    })(te);
    function oe(e) {
      e.then(function () {});
    }
    function ue(e, t, r) {
      return (
        (t = f(t)) in e
          ? Object.defineProperty(e, t, {
              value: r,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (e[t] = r),
        e
      );
    }
    function he(e, t) {
      var r = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(e);
        t &&
          (n = n.filter(function (t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable;
          })),
          r.push.apply(r, n);
      }
      return r;
    }
    function fe(e) {
      for (var t = 1; t < arguments.length; t++) {
        var r = null != arguments[t] ? arguments[t] : {};
        t % 2
          ? he(Object(r), !0).forEach(function (t) {
              ue(e, t, r[t]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
          : he(Object(r)).forEach(function (t) {
              Object.defineProperty(
                e,
                t,
                Object.getOwnPropertyDescriptor(r, t)
              );
            });
      }
      return e;
    }
    var le,
      pe,
      ve = function (e, t) {
        return t.some(function (t) {
          return e instanceof t;
        });
      };
    var de = new WeakMap(),
      ye = new WeakMap(),
      be = new WeakMap(),
      ge = new WeakMap(),
      me = new WeakMap();
    var xe = {
      get: function (e, t, r) {
        if (e instanceof IDBTransaction) {
          if ("done" === t) return ye.get(e);
          if ("objectStoreNames" === t) return e.objectStoreNames || be.get(e);
          if ("store" === t)
            return r.objectStoreNames[1]
              ? void 0
              : r.objectStore(r.objectStoreNames[0]);
        }
        return _e(e[t]);
      },
      set: function (e, t, r) {
        return (e[t] = r), !0;
      },
      has: function (e, t) {
        return (
          (e instanceof IDBTransaction && ("done" === t || "store" === t)) ||
          t in e
        );
      },
    };
    function we(e) {
      return e !== IDBDatabase.prototype.transaction ||
        "objectStoreNames" in IDBTransaction.prototype
        ? (
            pe ||
            (pe = [
              IDBCursor.prototype.advance,
              IDBCursor.prototype.continue,
              IDBCursor.prototype.continuePrimaryKey,
            ])
          ).includes(e)
          ? function () {
              for (
                var t = arguments.length, r = new Array(t), n = 0;
                n < t;
                n++
              )
                r[n] = arguments[n];
              return e.apply(Re(this), r), _e(de.get(this));
            }
          : function () {
              for (
                var t = arguments.length, r = new Array(t), n = 0;
                n < t;
                n++
              )
                r[n] = arguments[n];
              return _e(e.apply(Re(this), r));
            }
        : function (t) {
            for (
              var r = arguments.length, n = new Array(r > 1 ? r - 1 : 0), a = 1;
              a < r;
              a++
            )
              n[a - 1] = arguments[a];
            var i = e.call.apply(e, [Re(this), t].concat(n));
            return be.set(i, t.sort ? t.sort() : [t]), _e(i);
          };
    }
    function ke(e) {
      return "function" === typeof e
        ? we(e)
        : (e instanceof IDBTransaction &&
            (function (e) {
              if (!ye.has(e)) {
                var t = new Promise(function (t, r) {
                  var n = function () {
                      e.removeEventListener("complete", a),
                        e.removeEventListener("error", i),
                        e.removeEventListener("abort", i);
                    },
                    a = function () {
                      t(), n();
                    },
                    i = function () {
                      r(
                        e.error || new DOMException("AbortError", "AbortError")
                      ),
                        n();
                    };
                  e.addEventListener("complete", a),
                    e.addEventListener("error", i),
                    e.addEventListener("abort", i);
                });
                ye.set(e, t);
              }
            })(e),
          ve(
            e,
            le ||
              (le = [
                IDBDatabase,
                IDBObjectStore,
                IDBIndex,
                IDBCursor,
                IDBTransaction,
              ])
          )
            ? new Proxy(e, xe)
            : e);
    }
    function _e(e) {
      if (e instanceof IDBRequest)
        return (function (e) {
          var t = new Promise(function (t, r) {
            var n = function () {
                e.removeEventListener("success", a),
                  e.removeEventListener("error", i);
              },
              a = function () {
                t(_e(e.result)), n();
              },
              i = function () {
                r(e.error), n();
              };
            e.addEventListener("success", a), e.addEventListener("error", i);
          });
          return (
            t
              .then(function (t) {
                t instanceof IDBCursor && de.set(t, e);
              })
              .catch(function () {}),
            me.set(t, e),
            t
          );
        })(e);
      if (ge.has(e)) return ge.get(e);
      var t = ke(e);
      return t !== e && (ge.set(e, t), me.set(t, e)), t;
    }
    var Re = function (e) {
      return me.get(e);
    };
    function Ee(e, t) {
      var r =
          arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        n = r.blocked,
        a = r.upgrade,
        i = r.blocking,
        s = r.terminated,
        c = indexedDB.open(e, t),
        o = _e(c);
      return (
        a &&
          c.addEventListener("upgradeneeded", function (e) {
            a(_e(c.result), e.oldVersion, e.newVersion, _e(c.transaction), e);
          }),
        n &&
          c.addEventListener("blocked", function (e) {
            return n(e.oldVersion, e.newVersion, e);
          }),
        o
          .then(function (e) {
            s &&
              e.addEventListener("close", function () {
                return s();
              }),
              i &&
                e.addEventListener("versionchange", function (e) {
                  return i(e.oldVersion, e.newVersion, e);
                });
          })
          .catch(function () {}),
        o
      );
    }
    var Le = ["get", "getKey", "getAll", "getAllKeys", "count"],
      Ce = ["put", "add", "delete", "clear"],
      Oe = new Map();
    function Se(e, r) {
      if (e instanceof IDBDatabase && !(r in e) && "string" === typeof r) {
        if (Oe.get(r)) return Oe.get(r);
        var n = r.replace(/FromIndex$/, ""),
          a = r !== n,
          i = Ce.includes(n);
        if (
          n in (a ? IDBIndex : IDBObjectStore).prototype &&
          (i || Le.includes(n))
        ) {
          var s = (function () {
            var e = c(
              t().mark(function e(r) {
                var s,
                  c,
                  o,
                  u,
                  h,
                  f,
                  l = arguments;
                return t().wrap(
                  function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          for (
                            c = this.transaction(
                              r,
                              i ? "readwrite" : "readonly"
                            ),
                              o = c.store,
                              u = l.length,
                              h = new Array(u > 1 ? u - 1 : 0),
                              f = 1;
                            f < u;
                            f++
                          )
                            h[f - 1] = l[f];
                          return (
                            a && (o = o.index(h.shift())),
                            (e.next = 6),
                            Promise.all([(s = o)[n].apply(s, h), i && c.done])
                          );
                        case 6:
                          return e.abrupt("return", e.sent[0]);
                        case 7:
                        case "end":
                          return e.stop();
                      }
                  },
                  e,
                  this
                );
              })
            );
            return function (t) {
              return e.apply(this, arguments);
            };
          })();
          return Oe.set(r, s), s;
        }
      }
    }
    xe = (function (e) {
      return fe(
        fe({}, e),
        {},
        {
          get: function (t, r, n) {
            return Se(t, r) || e.get(t, r, n);
          },
          has: function (t, r) {
            return !!Se(t, r) || e.has(t, r);
          },
        }
      );
    })(xe);
    r(190);
    var Te = "cache-entries",
      je = function (e) {
        var t = new URL(e, location.href);
        return (t.hash = ""), t.href;
      },
      Pe = (function () {
        function e(t) {
          h(this, e), (this._db = null), (this._cacheName = t);
        }
        return (
          p(e, [
            {
              key: "_upgradeDb",
              value: function (e) {
                var t = e.createObjectStore(Te, { keyPath: "id" });
                t.createIndex("cacheName", "cacheName", { unique: !1 }),
                  t.createIndex("timestamp", "timestamp", { unique: !1 });
              },
            },
            {
              key: "_upgradeDbAndDeleteOldDbs",
              value: function (e) {
                this._upgradeDb(e),
                  this._cacheName &&
                    (function (e) {
                      var t = (
                          arguments.length > 1 && void 0 !== arguments[1]
                            ? arguments[1]
                            : {}
                        ).blocked,
                        r = indexedDB.deleteDatabase(e);
                      t &&
                        r.addEventListener("blocked", function (e) {
                          return t(e.oldVersion, e);
                        }),
                        _e(r).then(function () {});
                    })(this._cacheName);
              },
            },
            {
              key: "setTimestamp",
              value: (function () {
                var e = c(
                  t().mark(function e(r, n) {
                    var a, i, s;
                    return t().wrap(
                      function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                (r = je(r)),
                                (a = {
                                  url: r,
                                  timestamp: n,
                                  cacheName: this._cacheName,
                                  id: this._getId(r),
                                }),
                                (e.next = 4),
                                this.getDb()
                              );
                            case 4:
                              return (
                                (i = e.sent),
                                (s = i.transaction(Te, "readwrite", {
                                  durability: "relaxed",
                                })),
                                (e.next = 8),
                                s.store.put(a)
                              );
                            case 8:
                              return (e.next = 10), s.done;
                            case 10:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      this
                    );
                  })
                );
                return function (t, r) {
                  return e.apply(this, arguments);
                };
              })(),
            },
            {
              key: "getTimestamp",
              value: (function () {
                var e = c(
                  t().mark(function e(r) {
                    var n, a;
                    return t().wrap(
                      function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (e.next = 2), this.getDb();
                            case 2:
                              return (
                                (n = e.sent),
                                (e.next = 5),
                                n.get(Te, this._getId(r))
                              );
                            case 5:
                              return (
                                (a = e.sent),
                                e.abrupt(
                                  "return",
                                  null === a || void 0 === a
                                    ? void 0
                                    : a.timestamp
                                )
                              );
                            case 7:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      this
                    );
                  })
                );
                return function (t) {
                  return e.apply(this, arguments);
                };
              })(),
            },
            {
              key: "expireEntries",
              value: (function () {
                var e = c(
                  t().mark(function e(r, n) {
                    var a, i, s, c, o, u, h, f, l;
                    return t().wrap(
                      function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (e.next = 2), this.getDb();
                            case 2:
                              return (
                                (a = e.sent),
                                (e.next = 5),
                                a
                                  .transaction(Te)
                                  .store.index("timestamp")
                                  .openCursor(null, "prev")
                              );
                            case 5:
                              (i = e.sent), (s = []), (c = 0);
                            case 8:
                              if (!i) {
                                e.next = 16;
                                break;
                              }
                              return (
                                (o = i.value).cacheName === this._cacheName &&
                                  ((r && o.timestamp < r) || (n && c >= n)
                                    ? s.push(i.value)
                                    : c++),
                                (e.next = 13),
                                i.continue()
                              );
                            case 13:
                              (i = e.sent), (e.next = 8);
                              break;
                            case 16:
                              (u = []), (h = 0), (f = s);
                            case 18:
                              if (!(h < f.length)) {
                                e.next = 26;
                                break;
                              }
                              return (
                                (l = f[h]), (e.next = 22), a.delete(Te, l.id)
                              );
                            case 22:
                              u.push(l.url);
                            case 23:
                              h++, (e.next = 18);
                              break;
                            case 26:
                              return e.abrupt("return", u);
                            case 27:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      this
                    );
                  })
                );
                return function (t, r) {
                  return e.apply(this, arguments);
                };
              })(),
            },
            {
              key: "_getId",
              value: function (e) {
                return this._cacheName + "|" + je(e);
              },
            },
            {
              key: "getDb",
              value: (function () {
                var e = c(
                  t().mark(function e() {
                    return t().wrap(
                      function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              if (this._db) {
                                e.next = 4;
                                break;
                              }
                              return (
                                (e.next = 3),
                                Ee("workbox-expiration", 1, {
                                  upgrade:
                                    this._upgradeDbAndDeleteOldDbs.bind(this),
                                })
                              );
                            case 3:
                              this._db = e.sent;
                            case 4:
                              return e.abrupt("return", this._db);
                            case 5:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      this
                    );
                  })
                );
                return function () {
                  return e.apply(this, arguments);
                };
              })(),
            },
          ]),
          e
        );
      })(),
      De = (function () {
        function e(t) {
          var r =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          h(this, e),
            (this._isRunning = !1),
            (this._rerunRequested = !1),
            (this._maxEntries = r.maxEntries),
            (this._maxAgeSeconds = r.maxAgeSeconds),
            (this._matchOptions = r.matchOptions),
            (this._cacheName = t),
            (this._timestampModel = new Pe(t));
        }
        return (
          p(e, [
            {
              key: "expireEntries",
              value: (function () {
                var e = c(
                  t().mark(function e() {
                    var r, n, a, i, s, c;
                    return t().wrap(
                      function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              if (!this._isRunning) {
                                e.next = 3;
                                break;
                              }
                              return (
                                (this._rerunRequested = !0), e.abrupt("return")
                              );
                            case 3:
                              return (
                                (this._isRunning = !0),
                                (r = this._maxAgeSeconds
                                  ? Date.now() - 1e3 * this._maxAgeSeconds
                                  : 0),
                                (e.next = 7),
                                this._timestampModel.expireEntries(
                                  r,
                                  this._maxEntries
                                )
                              );
                            case 7:
                              return (
                                (n = e.sent),
                                (e.next = 10),
                                self.caches.open(this._cacheName)
                              );
                            case 10:
                              (a = e.sent), (i = o(n)), (e.prev = 12), i.s();
                            case 14:
                              if ((s = i.n()).done) {
                                e.next = 20;
                                break;
                              }
                              return (
                                (c = s.value),
                                (e.next = 18),
                                a.delete(c, this._matchOptions)
                              );
                            case 18:
                              e.next = 14;
                              break;
                            case 20:
                              e.next = 25;
                              break;
                            case 22:
                              (e.prev = 22), (e.t0 = e.catch(12)), i.e(e.t0);
                            case 25:
                              return (e.prev = 25), i.f(), e.finish(25);
                            case 28:
                              0,
                                (this._isRunning = !1),
                                this._rerunRequested &&
                                  ((this._rerunRequested = !1),
                                  oe(this.expireEntries()));
                            case 31:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      this,
                      [[12, 22, 25, 28]]
                    );
                  })
                );
                return function () {
                  return e.apply(this, arguments);
                };
              })(),
            },
            {
              key: "updateTimestamp",
              value: (function () {
                var e = c(
                  t().mark(function e(r) {
                    return t().wrap(
                      function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                (e.next = 3),
                                this._timestampModel.setTimestamp(r, Date.now())
                              );
                            case 3:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      this
                    );
                  })
                );
                return function (t) {
                  return e.apply(this, arguments);
                };
              })(),
            },
            {
              key: "isURLExpired",
              value: (function () {
                var e = c(
                  t().mark(function e(r) {
                    var n, a;
                    return t().wrap(
                      function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              if (this._maxAgeSeconds) {
                                e.next = 6;
                                break;
                              }
                              e.next = 3;
                              break;
                            case 3:
                              return e.abrupt("return", !1);
                            case 6:
                              return (
                                (e.next = 8),
                                this._timestampModel.getTimestamp(r)
                              );
                            case 8:
                              return (
                                (n = e.sent),
                                (a = Date.now() - 1e3 * this._maxAgeSeconds),
                                e.abrupt("return", void 0 === n || n < a)
                              );
                            case 11:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      this
                    );
                  })
                );
                return function (t) {
                  return e.apply(this, arguments);
                };
              })(),
            },
            {
              key: "delete",
              value: (function () {
                var e = c(
                  t().mark(function e() {
                    return t().wrap(
                      function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                (this._rerunRequested = !1),
                                (e.next = 3),
                                this._timestampModel.expireEntries(1 / 0)
                              );
                            case 3:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      this
                    );
                  })
                );
                return function () {
                  return e.apply(this, arguments);
                };
              })(),
            },
          ]),
          e
        );
      })();
    var qe = (function () {
        function e() {
          var r = this,
            n =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {};
          h(this, e),
            (this.cachedResponseWillBeUsed = (function () {
              var e = c(
                t().mark(function e(n) {
                  var a, i, s, c, o, u, h;
                  return t().wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          if (
                            ((a = n.event),
                            (i = n.request),
                            (s = n.cacheName),
                            (c = n.cachedResponse))
                          ) {
                            e.next = 3;
                            break;
                          }
                          return e.abrupt("return", null);
                        case 3:
                          if (
                            ((o = r._isResponseDateFresh(c)),
                            oe((u = r._getCacheExpiration(s)).expireEntries()),
                            (h = u.updateTimestamp(i.url)),
                            a)
                          )
                            try {
                              a.waitUntil(h);
                            } catch (t) {
                              0;
                            }
                          return e.abrupt("return", o ? c : null);
                        case 9:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                })
              );
              return function (t) {
                return e.apply(this, arguments);
              };
            })()),
            (this.cacheDidUpdate = (function () {
              var e = c(
                t().mark(function e(n) {
                  var a, i, s;
                  return t().wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (a = n.cacheName),
                            (i = n.request),
                            (s = r._getCacheExpiration(a)),
                            (e.next = 5),
                            s.updateTimestamp(i.url)
                          );
                        case 5:
                          return (e.next = 7), s.expireEntries();
                        case 7:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                })
              );
              return function (t) {
                return e.apply(this, arguments);
              };
            })()),
            (this._config = n),
            (this._maxAgeSeconds = n.maxAgeSeconds),
            (this._cacheExpirations = new Map()),
            n.purgeOnQuotaError &&
              (function (e) {
                B.add(e);
              })(function () {
                return r.deleteCacheAndMetadata();
              });
        }
        return (
          p(e, [
            {
              key: "_getCacheExpiration",
              value: function (e) {
                if (e === C()) throw new _("expire-custom-caches-only");
                var t = this._cacheExpirations.get(e);
                return (
                  t ||
                    ((t = new De(e, this._config)),
                    this._cacheExpirations.set(e, t)),
                  t
                );
              },
            },
            {
              key: "_isResponseDateFresh",
              value: function (e) {
                if (!this._maxAgeSeconds) return !0;
                var t = this._getDateHeaderTimestamp(e);
                return (
                  null === t || t >= Date.now() - 1e3 * this._maxAgeSeconds
                );
              },
            },
            {
              key: "_getDateHeaderTimestamp",
              value: function (e) {
                if (!e.headers.has("date")) return null;
                var t = e.headers.get("date"),
                  r = new Date(t).getTime();
                return isNaN(r) ? null : r;
              },
            },
            {
              key: "deleteCacheAndMetadata",
              value: (function () {
                var e = c(
                  t().mark(function e() {
                    var r, n, a, s, c;
                    return t().wrap(
                      function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              (r = o(this._cacheExpirations)),
                                (e.prev = 1),
                                r.s();
                            case 3:
                              if ((n = r.n()).done) {
                                e.next = 11;
                                break;
                              }
                              return (
                                (a = i(n.value, 2)),
                                (s = a[0]),
                                (c = a[1]),
                                (e.next = 7),
                                self.caches.delete(s)
                              );
                            case 7:
                              return (e.next = 9), c.delete();
                            case 9:
                              e.next = 3;
                              break;
                            case 11:
                              e.next = 16;
                              break;
                            case 13:
                              (e.prev = 13), (e.t0 = e.catch(1)), r.e(e.t0);
                            case 16:
                              return (e.prev = 16), r.f(), e.finish(16);
                            case 19:
                              this._cacheExpirations = new Map();
                            case 20:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      this,
                      [[1, 13, 16, 19]]
                    );
                  })
                );
                return function () {
                  return e.apply(this, arguments);
                };
              })(),
            },
          ]),
          e
        );
      })(),
      Ne = {
        cacheWillUpdate: (function () {
          var e = c(
            t().mark(function e(r) {
              var n;
              return t().wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      if (200 !== (n = r.response).status && 0 !== n.status) {
                        e.next = 3;
                        break;
                      }
                      return e.abrupt("return", n);
                    case 3:
                      return e.abrupt("return", null);
                    case 4:
                    case "end":
                      return e.stop();
                  }
              }, e);
            })
          );
          return function (t) {
            return e.apply(this, arguments);
          };
        })(),
      },
      Ue = (function (e) {
        d(n, e);
        var r = m(n);
        function n() {
          var e,
            t =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {};
          return (
            h(this, n),
            (e = r.call(this, t)).plugins.some(function (e) {
              return "cacheWillUpdate" in e;
            }) || e.plugins.unshift(Ne),
            e
          );
        }
        return (
          p(n, [
            {
              key: "_handle",
              value: (function () {
                var e = c(
                  t().mark(function e(r, n) {
                    var a, i, s;
                    return t().wrap(
                      function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                [],
                                (a = n
                                  .fetchAndCachePut(r)
                                  .catch(function () {})),
                                n.waitUntil(a),
                                (e.next = 6),
                                n.cacheMatch(r)
                              );
                            case 6:
                              if (!(i = e.sent)) {
                                e.next = 11;
                                break;
                              }
                              0, (e.next = 21);
                              break;
                            case 11:
                              return (e.prev = 12), (e.next = 15), a;
                            case 15:
                              (i = e.sent), (e.next = 21);
                              break;
                            case 18:
                              (e.prev = 18),
                                (e.t0 = e.catch(12)),
                                e.t0 instanceof Error && (s = e.t0);
                            case 21:
                              if (i) {
                                e.next = 24;
                                break;
                              }
                              throw new _("no-response", {
                                url: r.url,
                                error: s,
                              });
                            case 24:
                              return e.abrupt("return", i);
                            case 25:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      this,
                      [[12, 18]]
                    );
                  })
                );
                return function (t, r) {
                  return e.apply(this, arguments);
                };
              })(),
            },
          ]),
          n
        );
      })(Y);
    var Ie;
    self.addEventListener("activate", function () {
      return self.clients.claim();
    }),
      (function (e) {
        X().precache(e);
      })([
        { revision: "b234c11f7a9533e96e977a09e34833ff", url: "/index.html" },
        { revision: null, url: "/static/css/558.0dc9cc92.chunk.css" },
        { revision: null, url: "/static/css/main.80393370.css" },
        { revision: null, url: "/static/js/193.c49b3b24.chunk.js" },
        { revision: null, url: "/static/js/280.e9e81579.chunk.js" },
        { revision: null, url: "/static/js/462.2c52bffc.chunk.js" },
        { revision: null, url: "/static/js/466.fbdd1371.chunk.js" },
        { revision: null, url: "/static/js/471.163bf0e7.chunk.js" },
        { revision: null, url: "/static/js/558.c28d04b0.chunk.js" },
        { revision: null, url: "/static/js/608.96ad5ff9.chunk.js" },
        { revision: null, url: "/static/js/787.9aa604fe.chunk.js" },
        { revision: null, url: "/static/js/main.4af76577.js" },
        {
          revision: null,
          url: "/static/media/landscape.2e61342b606ab9570f73.jpg",
        },
        {
          revision: null,
          url: "/static/media/portrait.c5e889bb50c270c8aa9c.jpg",
        },
        { revision: null, url: "/static/media/sl.91320432a8d47ca610c8.jpg" },
      ]),
      (function (e) {
        var t = X();
        ie(new ce(t, e));
      })(Ie);
    var Ae,
      Ke = new RegExp("/[^/?]+\\.[^/]+$");
    ie(function (e) {
      var t = e.request,
        r = e.url;
      return (
        "navigate" === t.mode &&
        !r.pathname.startsWith("/_") &&
        !r.pathname.match(Ke)
      );
    }, ((Ae = "/index.html"), X().createHandlerBoundToURL(Ae))),
      ie(
        function (e) {
          var t = e.url;
          return (
            t.origin === self.location.origin && t.pathname.endsWith(".png")
          );
        },
        new Ue({
          cacheName: "images",
          plugins: [new qe({ maxEntries: 50 })],
        })
      ),
      self.addEventListener("message", function (e) {
        e.data && "SKIP_WAITING" === e.data.type && self.skipWaiting();
      });
  })();
})();
//# sourceMappingURL=service-worker.js.map
