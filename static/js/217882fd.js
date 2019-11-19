(window.webpackJsonp = window.webpackJsonp || []).push([
  [9], {
    161: function(t, e, n) {
      var o = n(200),
      r = "object" == typeof self && self && self.Object === Object && self,
      c = o || r || Function("return this")();
      t.exports = c
    },
    163: function(t, e) {
      t.exports = function(t) {
        return null != t && "object" == typeof t
      }
    },
    168: function(t, e, n) {
      var o = n(169),
      r = n(209),
      c = n(210),
      l = "[object Null]",
      f = "[object Undefined]",
      d = o ? o.toStringTag : void 0;
      t.exports = function(t) {
        return null == t ? void 0 === t ? f : l : d && d in Object(t) ? r(t) : c(t)
      }
    },
    169: function(t, e, n) {
      var o = n(161).Symbol;
      t.exports = o
    },
    177: function(t, e, n) {
      var o = n(168),
      r = n(190),
      c = n(163),
      l = "[object Object]",
      f = Function.prototype,
      d = Object.prototype,
      v = f.toString,
      h = d.hasOwnProperty,
      m = v.call(Object);
      t.exports = function(t) {
        if (!c(t) || o(t) != l) return !1;
        var e = r(t);
        if (null === e) return !0;
        var n = h.call(e, "constructor") && e.constructor;
        return "function" == typeof n && n instanceof n && v.call(n) == m
      }
    },
    190: function(t, e, n) {
      var o = n(201)(Object.getPrototypeOf, Object);
      t.exports = o
    },
    200: function(t, e, n) {
      (function(e) {
        var n = "object" == typeof e && e && e.Object === Object && e;
        t.exports = n
      }).call(this, n(19))
    },
    201: function(t, e) {
      t.exports = function(t, e) {
        return function(n) {
          return t(e(n))
        }
      }
    },
    209: function(t, e, n) {
      var o = n(169),
      r = Object.prototype,
      c = r.hasOwnProperty,
      l = r.toString,
      f = o ? o.toStringTag : void 0;
      t.exports = function(t) {
        var e = c.call(t, f),
        n = t[f];
        try {
          t[f] = void 0;
          var o = !0
        } catch (t) {}
        var r = l.call(t);
        return o && (e ? t[f] = n : delete t[f]), r
      }
    },
    210: function(t, e) {
      var n = Object.prototype.toString;
      t.exports = function(t) {
        return n.call(t)
      }
    },
    308: function(t, e, n) {},
    379: function(t, e, n) {
      t.exports = n.p + "/images/aaf336c.svg"
    },
    611: function(t, e, n) {
      t.exports = n.p + "/images/ca4c17d.png"
    },
    612: function(t, e, n) {},
    613: function(t, e, n) {
      "use strict";
      Object.defineProperty(e, "__esModule", {
        value: !0
      });
      var o = x(n(160)),
      r = x(n(156)),
      c = x(n(155)),
      l = x(n(157)),
      f = x(n(614)),
      d = x(n(186)),
      v = x(n(615)),
      h = x(n(231)),
      m = x(n(616)),
      y = x(n(164)),
      _ = x(n(617));
      
      function x(t) {
        return t && t.__esModule ? t : {
          default: t
        }
      }
      
      function w(t) {
        return t !== window ? t.getBoundingClientRect() : {
          top: 0,
          left: 0,
          bottom: 0
        }
      }
      
      function S() {
        return "undefined" != typeof window ? window : null
      }
      var C = {
        name: "AAffix",
        props: {
          offsetTop: l.default.number,
          offset: l.default.number,
          offsetBottom: l.default.number,
          target: l.default.func,
          prefixCls: l.default.string
        },
        mixins: [y.default],
        data: function() {
          return this.events = ["resize", "scroll", "touchstart", "touchmove", "touchend", "pageshow", "load"], this.eventHandlers = {}, {
            affixStyle: void 0,
            placeholderStyle: void 0
          }
        },
        beforeMount: function() {
          this.updatePosition = (0, _.default)(this.updatePosition)
        },
        mounted: function() {
          var t = this,
          e = this.target || S;
          this.timeout = setTimeout((function() {
            t.setTargetEventListeners(e), t.updatePosition({})
          }))
        },
        watch: {
          target: function(t) {
            this.clearEventListeners(), this.setTargetEventListeners(t), this.updatePosition({})
          },
          offsetTop: function() {
            this.updatePosition({})
          },
          offsetBottom: function() {
            this.updatePosition({})
          }
        },
        beforeDestroy: function() {
          this.clearEventListeners(), clearTimeout(this.timeout), this.updatePosition.cancel()
        },
        methods: {
          setAffixStyle: function(t, e) {
            var n = this,
            o = this.target,
            r = void 0 === o ? S : o,
            c = this.affixStyle,
            l = r() === window;
            "scroll" === t.type && c && e && l || (0, v.default)(e, c) || this.setState({
              affixStyle: e
            }, (function() {
              var t = !!n.affixStyle;
              (e && !c || !e && c) && n.$emit("change", t)
            }))
          },
          setPlaceholderStyle: function(t) {
            var e = this.placeholderStyle;
            (0, v.default)(t, e) || this.setState({
              placeholderStyle: t
            })
          },
          syncPlaceholderStyle: function(t) {
            var e = this.affixStyle;
            e && (this.$refs.placeholderNode.style.cssText = "", this.setAffixStyle(t, (0, c.default)({}, e, {
              width: this.$refs.placeholderNode.offsetWidth + "px"
            })), this.setPlaceholderStyle({
              width: this.$refs.placeholderNode.offsetWidth + "px"
            }))
          },
          updatePosition: function(t) {
            var e = this.offsetBottom,
            n = this.offset,
            o = this.target,
            r = void 0 === o ? S : o,
            l = this.offsetTop,
            f = r();
            l = void 0 === l ? n : l;
            var d = (0, m.default)(f, !0),
            v = this.$el,
            h = function(element, t) {
              var e = element.getBoundingClientRect(),
              n = w(t),
              o = (0, m.default)(t, !0),
              r = (0, m.default)(t, !1),
              c = window.document.body,
              l = c.clientTop || 0,
              f = c.clientLeft || 0;
              return {
                top: e.top - n.top + o - l,
                left: e.left - n.left + r - f,
                width: e.width,
                height: e.height
              }
            }(v, f),
            y = (this.$refs.fixedNode.offsetWidth, this.$refs.fixedNode.offsetHeight),
            _ = {
              top: !1,
              bottom: !1
            };
            "number" != typeof l && "number" != typeof e ? (_.top = !0, l = 0) : (_.top = "number" == typeof l, _.bottom = "number" == typeof e);
            var x = w(f),
            C = f.innerHeight || f.clientHeight;
            if (d > h.top - l && _.top) {
              var P = h.width + "px",
              j = x.top + l + "px";
              this.setAffixStyle(t, {
                position: "fixed",
                top: j,
                left: x.left + h.left + "px",
                width: P
              }), this.setPlaceholderStyle({
                width: P,
                height: y + "px"
              })
            } else if (d < h.top + y + e - C && _.bottom) {
              var O = f === window ? 0 : window.innerHeight - x.bottom,
              T = h.width + "px";
              this.setAffixStyle(t, {
                position: "fixed",
                bottom: O + e + "px",
                left: x.left + h.left + "px",
                width: T
              }), this.setPlaceholderStyle({
                width: T,
                height: h.height + "px"
              })
            } else {
              var E = this.affixStyle;
              "resize" === t.type && E && "fixed" === E.position && v.offsetWidth ? this.setAffixStyle(t, (0, c.default)({}, E, {
                width: v.offsetWidth + "px"
              })) : this.setAffixStyle(t, null), this.setPlaceholderStyle(null)
            }
            "resize" === t.type && this.syncPlaceholderStyle(t)
          },
          setTargetEventListeners: function(t) {
            var e = this,
            n = t();
            n && (this.clearEventListeners(), this.events.forEach((function(t) {
              e.eventHandlers[t] = (0, f.default)(n, t, e.updatePosition)
            })))
          },
          clearEventListeners: function() {
            var t = this;
            this.events.forEach((function(e) {
              var n = t.eventHandlers[e];
              n && n.remove && n.remove()
            }))
          }
        },
        render: function() {
          var t = arguments[0],
          e = this.prefixCls,
          n = this.affixStyle,
          c = this.placeholderStyle,
          l = this.$slots,
          f = this.$props,
          v = (0, d.default)((0, r.default)({}, e || "ant-affix", n)),
          m = {
            attrs: (0, h.default)(f, ["prefixCls", "offsetTop", "offsetBottom", "target"])
          };
          return t("div", (0, o.default)([m, {
            style: c,
            ref: "placeholderNode"
          }]), [t("div", {
            class: v,
            ref: "fixedNode",
            style: n
          }, [l.default])])
        },
        install: function(t) {
          t.component(C.name, C)
        }
      };
      e.default = C
    },
    614: function(t, e, n) {
      "use strict";
      Object.defineProperty(e, "__esModule", {
        value: !0
      }), e.default = function(t, e, n, option) {
        return (0, c.default)(t, e, n, option)
      };
      var o, r = n(233),
      c = (o = r) && o.__esModule ? o : {
        default: o
      }
    },
    615: function(t, e) {
      t.exports = function(t, e, n, o) {
        var r = n ? n.call(o, t, e) : void 0;
        if (void 0 !== r) return !!r;
        if (t === e) return !0;
        if ("object" != typeof t || !t || "object" != typeof e || !e) return !1;
        var c = Object.keys(t),
        l = Object.keys(e);
        if (c.length !== l.length) return !1;
        for (var f = Object.prototype.hasOwnProperty.bind(e), d = 0; d < c.length; d++) {
          var v = c[d];
          if (!f(v)) return !1;
          var h = t[v],
          m = e[v];
          if (!1 === (r = n ? n.call(o, h, m, v) : void 0) || void 0 === r && h !== m) return !1
        }
        return !0
      }
    },
    616: function(t, e, n) {
      "use strict";
      Object.defineProperty(e, "__esModule", {
        value: !0
      }), e.default = function(t, e) {
        if ("undefined" == typeof window) return 0;
        var n = e ? "pageYOffset" : "pageXOffset",
        o = e ? "scrollTop" : "scrollLeft",
        r = t === window,
        c = r ? t[n] : t[o];
        r && "number" != typeof c && (c = window.document.documentElement[o]);
        return c
      }
    },
    617: function(t, e, n) {
      "use strict";
      Object.defineProperty(e, "__esModule", {
        value: !0
      });
      var o = c(n(185));
      e.default = l, e.throttleByAnimationFrameDecorator = function() {
        return function(t, e, n) {
          var o = n.value,
          r = !1;
          return {
            configurable: !0,
            get: function() {
              if (r || this === t.prototype || this.hasOwnProperty(e)) return o;
              var n = l(o.bind(this));
              return r = !0, Object.defineProperty(this, e, {
                value: n,
                configurable: !0,
                writable: !0
              }), r = !1, n
            }
          }
        }
      };
      var r = c(n(232));
      
      function c(t) {
        return t && t.__esModule ? t : {
          default: t
        }
      }
      
      function l(t) {
        var e = void 0,
        n = function(n) {
          return function() {
            e = null, t.apply(void 0, (0, o.default)(n))
          }
        },
        c = function() {
          for (var t = arguments.length, o = Array(t), c = 0; c < t; c++) o[c] = arguments[c];
          null == e && (e = (0, r.default)(n(o)))
        };
        return c.cancel = function() {
          return r.default.cancel(e)
        }, c
      }
    },
    618: function(t, e, n) {
      t.exports = n.p + "/images/f419d09.svg"
    },
    619: function(t, e, n) {
      t.exports = n.p + "/images/9195a28.svg"
    },
    620: function(t, e, n) {
      t.exports = n.p + "/images/da35aa2.png"
    },
    621: function(t, e, n) {
      t.exports = n.p + "/images/de5aed2.png"
    },
    622: function(t, e, n) {
      t.exports = n.p + "/images/dfbb674.png"
    },
    623: function(t, e, n) {
      t.exports = n.p + "/images/4fd90da.png"
    },
    624: function(t, e, n) {
      t.exports = n.p + "/images/04e0867.png"
    },
    625: function(t, e, n) {
      "use strict";
      var o = n(308);
      n.n(o).a
    },
    848: function(t, e, n) {
      "use strict";
      n.r(e);
      n(112), n(57), n(35);
      var o = n(38),
      r = (n(36), n(612), n(613)),
      c = n.n(r),
      l = {
        components: Object(o.a)({}, c.a.name, c.a),
        data: function() {
          return {
            advantages: [{
              title: "安全稳定",
              icon: n(618),
              desc: "WPS正版软件拥有良好的稳定性和兼容性。不含恶意软件和广告，避免遭受病毒攻击，造成核心数据丢失等后果。在构建安全稳定的办公环境的同时，提高企业用户的办公效率。"
            }, {
              title: "完善服务",
              icon: n(619),
              desc: "WPS正版软件包含完善的厂家售后服务，用户在使用软件的过程中，可以获得来自企业强大的技术支持和完善的原厂服务。"
            }, {
              title: "持续的软件更新",
              icon: n(379),
              desc: "金山办公一直致力于为用户提供更好的WPS和服务。购买WPS正版软件，用户可以获得最新产品更新，保持软件最新最佳状态。"
            }, {
              title: "规避法律风险",
              icon: n(379),
              desc: "使用WPS正版软件，规避法律风险，享受知识产权条例的保护，避免承担使用不合法软件的法律责任。"
            }],
            harms: [{
              title: "为企业业务正常运行带来隐患",
              desc: "今天，软件已成为企业经营业务不可缺少的生产资料，并且是企业信息系统的核心，对整个企业经营业务、保证经营安全以及促进企业发展都有着非常重要的影响。在这种情况下，如果企业使用了盗版软件，不仅侵害著作权人的合法权益，而且对企业的经营无异于埋下了定时炸弹，随时威胁着整个企业信息系统的安全，为企业业务正常运行带来种种隐患。"
            }, {
              title: "危害企业信息系统的安全和业务运行",
              desc: "盗版软件容易遭受病毒攻击，造成核心数据丢失等后果，给企业经营业务造成严重危害；由于盗版软件粗制滥造，无法保证产品质量，势必导致很多优秀的软件无法发挥其正常的功能，更有一些盗版软件经常会出现这样或那样的错误，给企业的业务带来许多问题和隐患；软件是高科技产品，往往需要与之相配合的服务才能保证用户获得一流的体验和价值。<br/><br/> 一个完整、安全和有效的系统网络是需要经常升级和扩展的，而使用盗版软件企业由于无法得到供应商服务，使得企业用户不能得到升级保证和技术支持服务，从而影响了整个系统的安全稳定。"
            }, {
              title: "给企业带来法律风险",
              desc: "使用盗版软件是侵犯知识产权的行为，是国家法律明令禁止的。企业如果使用非法复制的软件．则将使自己面临法律的制裁，给企业带来巨大损失。而这样的情况一旦发生，被企业珍视为生命的品牌和企业形象等无形资产，也必然受到严重损害，造成难以挽回的负面影响。"
            }],
            identities: [{
              title: "看包装",
              desc: "盗版软件包装通常简单、粗糙，包装图案印刷质量低劣缺少真实版权信息用户手册、注册卡等。"
            }, {
              title: "看盘片",
              desc: "正版光盘表面基本都通过丝印技术，印有色彩鲜艳、设计讲究的图案，同时在光盘中心圆孔周围印有“激光信息来源识别码（Source Identified Code，SID）”；盗版光盘的盘面多数不采用丝印，只有少量信息，更不可能存在 SID 码等信息。"
            }, {
              img: n(620)
            }, {
              img: n(621)
            }, {
              title: "比价格",
              desc: "盗版软件的价格极为低廉，常以略高于空白光盘的成本价格批量销售。"
            }, {
              title: "看模式",
              desc: "盗版光盘经常以众多软件的合集出现，而正版软件公司一般不会以拼盘的形式销售自己的产品。非法复制的光盘几乎都是以大批、散装的形式贩卖。"
            }, {
              title: "看授权",
              desc: "企业使用正版软件，最权威的识别标准是是否获得软件著作权人授予的授权许可。"
            }],
            licenses: [{
              title: "单用户授权",
              desc: "单用户授权许可，是一种适用于单个用户的许可，只要符合软件安装过程中出现的最终用户许可协议的要求，某一用户可以在协议允许的范围内，获得在授权终端上使用软件的权利。<br/><br/>单用户授权许可通常以零售软件产品为代表，俗称“彩包”，一般包括最终用户许可协议、说明手册、原始介质、发票或者收据。",
              img: n(622),
              class: "cover-bottom"
            }, {
              title: "数量授权",
              desc: "数量授权许可，是指软件著作权人根据用户实际被授权的计算机数量，授权被许可人在约定的硬件设备数量内以办公为目的的安装、使用软件的方式。<br/><br/>该许可方式可以减少著作权人提供的介质数量，而只提供安装序列号，从而降低了无谓的介质生产消耗，同时减少了用户管理软件介质的成本，并较单用户授权许可价格更为低廉。<br/><br/>数量授权许可一般都明确约定可使用软件的计算机数量，并分别配置安装序列号，是中小企业比较常见的授权方式。<br/><br/>数量授权许可一般默认包含所购买的当前版本一年内的升级服务。为使用单位提供许可证书，许可内容包括用户单位名称，许可软件的名称、数量和升级期限等信息。<br/><br/>一般提供一套免费软件介质，或者单独订购光盘介质，也可以在厂商网站下载安装程序进行安装。",
              img: n(623),
              class: "cover-right"
            }, {
              title: "租赁授权",
              desc: "租赁授权许可，顾名思义，就是指用户通过租赁而不是购买的方式，获得自己所需软件的有期限的使用权，软件开发商在租赁期内为用户一定数量授权许可，租赁期截止服务即终止。当用户需要有期限的使用某软件时，这种授权许可常常被采用。<br /><br/>这种授权许可的优点是目的性强、费用低、软件升级和维护的影响小、不易发生资产流失，缺点是长期连续租赁费用较高。",
              img: n(624),
              class: "cover-right"
            }],
            activated: 0,
            titles: ["正版优势", "盗版危害", "识别正版", "授权许可"],
            flag: !0
          }
        },
        mounted: function() {
          this.__ticking = !1, window.addEventListener("scroll", this.scroll), window.addEventListener("resize", this.resize), this.activeToc()
        },
        destroyed: function() {
          window.removeEventListener("scroll", this.scroll), window.removeEventListener("resize", this.resize)
        },
        methods: {
          findVisibleAnchor: function() {
            var t = document.querySelectorAll(".header"),
            e = null,
            n = null,
            o = !0,
            r = !1,
            c = void 0;
            try {
              for (var l, f = t[Symbol.iterator](); !(o = (l = f.next()).done); o = !0) {
                var d = l.value,
                rect = d.getBoundingClientRect();
                if (rect.top >= 0) {
                  rect.top < window.innerHeight && (e = d);
                  break
                }
                n = d
              }
            } catch (t) {
              r = !0, c = t
            } finally {
              try {
                o || null == f.return || f.return()
              } finally {
                if (r) throw c
              }
            }
            return e || n
          },
          activeToc: function() {
            var t = this.findVisibleAnchor();
            t && (this.activated = t.getAttribute("data-id"))
          },
          scroll: function() {
            var t = this;
            this.__ticking || (requestAnimationFrame((function() {
              t.activeToc(), t.__ticking = !1
            })), this.__ticking = !0)
          },
          go: function(t) {
            var e = document.querySelector('.header[data-id="'.concat(t, '"]'));
            window.scrollTo(window.scrollX, e.offsetTop - 100)
          },
          resize: function() {
            var t = this;
            this.__affix_tick && clearTimeout(this.__affix_tick), this.flag = !1, this.__affix_tick = setTimeout((function() {
              t.flag = !0
            }), 500)
          }
        }
      },
      f = (n(625), n(6)),
      component = Object(f.a)(l, (function() {
        var t = this,
        e = t.$createElement,
        o = t._self._c || e;
        return o("div", {
          attrs: {
            id: "genuine"
          }
        }, [o("div", {
          directives: [{
            name: "lazy",
            rawName: "v-lazy:background-image",
            value: n(611),
            expression: "require('~/assets/genuine/bg@2x.png')",
            arg: "background-image"
          }],
          staticClass: "banner bg-cover",
          attrs: {
            "data-format": "webp"
          }
        }, [t._m(0)]), o("div", {
          staticClass: "container"
        }, [o("div", {
          staticClass: "toc-affix"
        }, [t.flag ? o("a-affix", {
          attrs: {
            offsetTop: 106
          }
        }, [o("ul", {
          staticClass: "toc"
        }, t._l(t.titles, (function(title, e) {
          return o("li", {
            class: {
              active: t.activated == e
            },
            on: {
              click: function(n) {
                return t.go(e)
              }
            }
          }, [o("span", [t._v(t._s(title))])])
        })), 0)]) : t._e()], 1), o("div", {
          staticClass: "content"
        }, [o("div", {
          staticClass: "section"
        }, [o("div", {
          staticClass: "header",
          attrs: {
            "data-id": "0"
          }
        }, [t._v("正版优势")]), o("ul", {
          staticClass: "advantage"
        }, t._l(t.advantages, (function(i, e) {
          return o("li", [o("div", {
            staticClass: "title"
          }, [o("span", {
            staticClass: "num"
          }, [t._v(t._s("0" + (e + 1)))]), o("span", [t._v(t._s(i.title))])]), o("div", {
            staticClass: "desc"
          }, [t._v(t._s(i.desc))])])
        })), 0)]), o("div", {
          staticClass: "section"
        }, [o("div", {
          staticClass: "header",
          attrs: {
            "data-id": "1"
          }
        }, [t._v("盗版危害")]), o("ul", {
          staticClass: "harm"
        }, t._l(t.harms, (function(i) {
          return o("li", [o("div", {
            staticClass: "article"
          }, [o("div", {
            staticClass: "title"
          }, [t._v(t._s(i.title))]), o("div", {
            staticClass: "desc",
            domProps: {
              innerHTML: t._s(i.desc)
            }
          })])])
        })), 0)]), o("div", {
          staticClass: "section"
        }, [o("div", {
          staticClass: "header",
          attrs: {
            "data-id": "2"
          }
        }, [t._v("识别正版")]), o("ul", {
          staticClass: "identification"
        }, t._l(t.identities, (function(i) {
          return o("li", [o("div", {
            staticClass: "article"
          }, [o("div", {
            staticClass: "title"
          }, [t._v(t._s(i.title))]), o("div", {
            staticClass: "desc",
            domProps: {
              innerHTML: t._s(i.desc)
            }
          }), i.img ? o("div", {
            staticClass: "cover"
          }, [o("img", {
            attrs: {
              src: i.img
            }
          })]) : t._e()])])
        })), 0)]), o("div", {
          staticClass: "section"
        }, [o("div", {
          staticClass: "header",
          attrs: {
            "data-id": "3"
          }
        }, [t._v("授权许可方式")]), o("ul", {
          staticClass: "license"
        }, t._l(t.licenses, (function(i) {
          return o("li", {
            class: [i.class]
          }, [o("div", {
            staticClass: "article"
          }, [o("div", {
            staticClass: "article-box"
          }, [o("div", {
            staticClass: "title"
          }, [t._v(t._s(i.title))]), o("div", {
            staticClass: "desc",
            domProps: {
              innerHTML: t._s(i.desc)
            }
          })]), i.img ? o("div", {
            staticClass: "cover"
          }, [o("img", {
            directives: [{
              name: "lazy",
              rawName: "v-lazy",
              value: i.img,
              expression: "i.img"
            }],
            attrs: {
              "data-format": "webp"
            }
          })]) : t._e()])])
        })), 0)])])])])
      }), [function() {
        var t = this.$createElement,
        e = this._self._c || t;
        return e("div", {
          staticClass: "banner-box"
        }, [this._v("如何正确"), e("br"), this._v("识别WPS正版授权")])
      }], !1, null, "1a9692f7", null);
      e.default = component.exports
    }
  }
]);
