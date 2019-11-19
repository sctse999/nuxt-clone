(window.webpackJsonp = window.webpackJsonp || []).push([
  [11], {
    158: function(t, e, n) {},
    179: function(t, e, n) {
      "use strict";
      var c = n(158);
      n.n(c).a
    },
    180: function(t, e, n) {
      t.exports = n.p + "/images/d52507f.svg"
    },
    181: function(t, e, n) {
      "use strict";
      var c = {
        props: {
          title: {
            type: String,
            default: function() {
              return ""
            }
          },
          desc: {
            type: String,
            default: function() {
              return ""
            }
          },
          css: {
            type: Object,
            default: function() {
              return {}
            }
          }
        }
      },
      r = (n(179), n(6)),
      component = Object(r.a)(c, (function() {
        var t = this,
        e = t.$createElement,
        n = t._self._c || e;
        return n("div", {
          staticClass: "banner",
          style: t.css.container
        }, [n("div", {
          staticClass: "container"
        }, [n("div", {
          staticClass: "content"
        }, [n("div", {
          staticClass: "title"
        }, [t._v(t._s(t.title))]), n("div", {
          staticClass: "desc"
        }, [t._v(t._s(t.desc))])]), n("div", {
          staticClass: "icon",
          style: t.css.icon
        })])])
      }), [], !1, null, "65843835", null);
      e.a = component.exports
    },
    194: function(t, e, n) {},
    309: function(t, e, n) {
      var c = n(310);
      t.exports = function(object, path, t) {
        return null == object ? object : c(object, path, t)
      }
    },
    310: function(t, e, n) {
      var c = n(234),
      r = n(215),
      o = n(312),
      l = n(165),
      f = n(239);
      t.exports = function(object, path, t, e) {
        if (!l(object)) return object;
        for (var n = -1, d = (path = r(path, object)).length, v = d - 1, m = object; null != m && ++n < d;) {
          var _ = f(path[n]),
          O = t;
          if (n != v) {
            var C = m[_];
            void 0 === (O = e ? e(C, _, m) : void 0) && (O = l(C) ? C : o(path[n + 1]) ? [] : {})
          }
          c(m, _, O), m = m[_]
        }
        return object
      }
    },
    313: function(t, e, n) {
      "use strict";
      var c = n(194);
      n.n(c).a
    },
    314: function(t, e, n) {},
    315: function(t, e, n) {},
    336: function(t, e, n) {
      "use strict";
      n(76), n(57);
      var c = n(38),
      r = (n(107), n(108), n(35), n(29), n(58), n(309)),
      o = n.n(r);
      
      function l(object, t) {
        var e = Object.keys(object);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(object);
          t && (n = n.filter((function(t) {
            return Object.getOwnPropertyDescriptor(object, t).enumerable
          }))), e.push.apply(e, n)
        }
        return e
      }
      var f = {
        props: {
          data: {
            type: Array,
            default: function() {
              return []
            }
          },
          reverse: {
            type: Boolean,
            default: function() {
              return !1
            }
          }
        },
        data: function() {
          return {
            features: this.calcCSS(this.data)
          }
        },
        methods: {
          calcCSS: function(t) {
            return t.map((function(t) {
              if (t.css) {
                var e = {};
                Object.keys(t.css).forEach((function(n) {
                  n.includes(".") ? o()(e, n, t.css[n]) : e[n] = function(t) {
                    for (var i = 1; i < arguments.length; i++) {
                      var source = null != arguments[i] ? arguments[i] : {};
                      i % 2 ? l(source, !0).forEach((function(e) {
                        Object(c.a)(t, e, source[e])
                      })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(source)) : l(source).forEach((function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(source, e))
                      }))
                    }
                    return t
                  }({}, t.css[n])
                })), t.css = e
              } else t.css = {};
              return t
            }))
          }
        }
      },
      d = (n(313), n(6)),
      component = Object(d.a)(f, (function() {
        var t = this,
        e = t.$createElement,
        n = t._self._c || e;
        return n("div", {
          staticClass: "features",
          class: {
            reverse: this.reverse
          }
        }, t._l(t.features, (function(i) {
          return n("div", {
            staticClass: "item",
            style: i.css.item
          }, [n("div", {
            staticClass: "container"
          }, [n("div", {
            staticClass: "content"
          }, [n("div", {
            staticClass: "box"
          }, [n("div", {
            staticClass: "title"
          }, [t._v(t._s(i.title))]), n("div", {
            staticClass: "desc",
            style: i.css.desc,
            domProps: {
              innerHTML: t._s(i.desc)
            }
          }), i.slot ? n("div", {
            domProps: {
              innerHTML: t._s(i.slot)
            }
          }) : t._e()])]), n("div", {
            staticClass: "icon"
          }, [n("img", {
            directives: [{
              name: "lazy",
              rawName: "v-lazy",
              value: i.icon,
              expression: "i.icon"
            }],
            style: i.css.img,
            attrs: {
              border: "0",
              alt: i.title
            }
          })])])])
        })), 0)
      }), [], !1, null, "5968acc5", null);
      e.a = component.exports
    },
    653: function(t, e, n) {
      t.exports = n.p + "/images/f00ad9a.svg"
    },
    654: function(t, e, n) {
      t.exports = n.p + "/images/8b89662.svg"
    },
    655: function(t, e, n) {
      t.exports = n.p + "/images/46ce47e.svg"
    },
    656: function(t, e, n) {
      t.exports = n.p + "/images/9f8f337.svg"
    },
    657: function(t, e, n) {
      t.exports = n.p + "/images/d38dbbf.svg"
    },
    658: function(t, e, n) {
      "use strict";
      var c = n(314);
      n.n(c).a
    },
    659: function(t, e, n) {
      t.exports = n.p + "/images/9601036.svg"
    },
    660: function(t, e, n) {
      t.exports = n.p + "/images/f2d3c36.svg"
    },
    661: function(t, e, n) {
      t.exports = n.p + "/images/0aa28b2.svg"
    },
    662: function(t, e, n) {
      t.exports = n.p + "/images/ade91e8.svg"
    },
    663: function(t, e, n) {
      t.exports = n.p + "/images/35331b3.svg"
    },
    664: function(t, e, n) {
      t.exports = n.p + "/images/5fe8ab6.svg"
    },
    665: function(t, e, n) {
      t.exports = n.p + "/images/057481e.svg"
    },
    666: function(t, e, n) {
      t.exports = n.p + "/images/daa3a8d.svg"
    },
    667: function(t, e, n) {
      t.exports = n.p + "/images/eb68daa.svg"
    },
    668: function(t, e, n) {
      "use strict";
      var c = n(315);
      n.n(c).a
    },
    843: function(t, e, n) {
      "use strict";
      n.r(e);
      var c = n(181),
      r = n(336),
      o = {
        data: function() {
          return {
            list: [{
              logo: {
                src: n(653),
                alt: "系统兼容"
              },
              title: "操作系统兼容",
              desc: "兼容 “中标，麒麟，深度，中科方德，普华，思普，一铭” 操作系统"
            }, {
              logo: {
                src: n(654)
              },
              title: "文件格式兼容",
              desc: "兼容文字排版、表格计算、演示动画三大核心，支持多种Office文档格式以及国家标准文档格式"
            }, {
              logo: {
                src: n(655)
              },
              title: "二次开发兼容",
              desc: "兼容API接口定义<br/>支持国家标准的文档控件标准接口<br/>支持国家标准的公文域的定义，调用集成及内容显示"
            }, {
              logo: {
                src: n(656)
              },
              title: "CPU兼容",
              desc: "深度兼容 “龙芯，飞腾，兆芯，申威，众志” CPU"
            }, {
              logo: {
                src: n(657)
              },
              title: "操作习惯兼容",
              desc: "尊重用户使用习惯，降低软件迁移成本"
            }]
          }
        }
      },
      l = (n(658), n(6)),
      f = Object(l.a)(o, (function() {
        var t = this,
        e = t.$createElement,
        n = t._self._c || e;
        return n("div", {
          staticClass: "standard"
        }, [n("div", {
          staticClass: "container"
        }, [n("div", {
          staticClass: "title"
        }, [t._v("正版化平台新标准")]), n("div", {
          staticClass: "desc"
        }, [t._v("无论是WPS Office For Windows版还是Linux版，都可无缝切换软件产品，平滑过渡")]), n("div", {
          staticClass: "standard-list clearfix"
        }, t._l(t.list, (function(e) {
          return n("div", {
            staticClass: "item"
          }, [n("div", {
            staticClass: "logo-box"
          }, [n("img", {
            attrs: {
              src: e.logo.src,
              alt: e.logo.alt || e.title
            }
          })]), n("div", {
            staticClass: "content"
          }, [n("div", {
            staticClass: "title"
          }, [t._v(t._s(e.title))]), n("div", {
            staticClass: "desc",
            domProps: {
              innerHTML: t._s(e.desc)
            }
          })])])
        })), 0)]), n("div", {
          staticClass: "clearfix"
        })])
      }), [], !1, null, "ff6b71da", null).exports,
      d = {
        components: {
          banner: c.a,
          standard: f,
          features: r.a
        },
        data: function() {
          return {
            slogan: {
              title: "政企正版化解决方案",
              desc: "以WPS Office客户端为核心，提供正版化解决方案",
              css: {
                container: {
                  "background-image": "url(".concat(n(180), ")")
                },
                icon: {
                  "background-image": "url(".concat(n(659), ")")
                }
              }
            },
            features: [{
              title: "高性价比的解决方案",
              desc: "WPS Office可帮助你快速实现软件正版化，规避因版权法律诉讼带来的经济损失",
              icon: n(660),
              slot: '\n            <ul class="slot-office-icons">\n              <li>\n                <img src='.concat(n(661), ' alt="DOC">\n                <span>DOC</span>\n              </li>\n              <li>\n                <img src=').concat(n(662), ' alt="XLS">\n                <span>XLS</span>\n              </li>\n              <li>\n                <img src=').concat(n(663), ' alt="PPT">\n                <span>PPT</span>\n              </li>\n              <li>\n                <img src=').concat(n(664), ' alt="PDF">\n                <span>PDF</span>\n              </li>\n            </ul>\n          ')
            }, {
              title: "杜绝正版化死角",
              desc: "快速统计政企单位内部Office软件使用情况",
              icon: n(665)
            }, {
              title: "降低IT运维成本",
              desc: "将WPS Office统一升级至最新版本，提升办公效率，解决因浏览器版本、Office控件和版本差异造成的兼容性问题。简单改造，直接调用WPS Office进行预览、编辑操作",
              icon: n(666)
            }, {
              title: "培养专业技能，获得认可",
              desc: "为政企客户提供了多种高级培训课程，培养员工高效使用办公软件，提高工作效率",
              icon: n(667)
            }]
          }
        }
      },
      v = (n(668), Object(l.a)(d, (function() {
        var t = this.$createElement,
        e = this._self._c || t;
        return e("div", {
          attrs: {
            id: "official"
          }
        }, [e("banner", {
          attrs: {
            title: this.slogan.title,
            desc: this.slogan.desc,
            css: this.slogan.css
          }
        }), e("standard"), e("features", {
          attrs: {
            data: this.features,
            reverse: !0
          }
        })], 1)
      }), [], !1, null, null, null));
      e.default = v.exports
    }
  }
]);
