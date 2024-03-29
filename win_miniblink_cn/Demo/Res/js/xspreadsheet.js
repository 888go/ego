﻿!function (t) {
    var e = {};

    function n(r) {
        if (e[r]) return e[r].exports;
        var i = e[r] = {i: r, l: !1, exports: {}};
        return t[r].call(i.exports, i, i.exports, n), i.l = !0, i.exports
    }

    n.m = t, n.c = e, n.d = function (t, e, r) {
        n.o(t, e) || Object.defineProperty(t, e, {enumerable: !0, get: r})
    }, n.r = function (t) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {value: "Module"}), Object.defineProperty(t, "__esModule", {value: !0})
    }, n.t = function (t, e) {
        if (1 & e && (t = n(t)), 8 & e) return t;
        if (4 & e && "object" == typeof t && t && t.__esModule) return t;
        var r = Object.create(null);
        if (n.r(r), Object.defineProperty(r, "default", {
            enumerable: !0,
            value: t
        }), 2 & e && "string" != typeof t) for (var i in t) n.d(r, i, function (e) {
            return t[e]
        }.bind(null, i));
        return r
    }, n.n = function (t) {
        var e = t && t.__esModule ? function () {
            return t.default
        } : function () {
            return t
        };
        return n.d(e, "a", e), e
    }, n.o = function (t, e) {
        return Object.prototype.hasOwnProperty.call(t, e)
    }, n.p = "", n(n.s = 1)
}([function (t, e, n) {
}, function (t, e, n) {
    "use strict";

    function r(t) {
        return function (t) {
            if (Array.isArray(t)) return t
        }(t) || function (t) {
            if (Symbol.iterator in Object(t) || "[object Arguments]" === Object.prototype.toString.call(t)) return Array.from(t)
        }(t) || function () {
            throw new TypeError("Invalid attempt to destructure non-iterable instance")
        }()
    }

    function i(t, e) {
        for (var n = 0; n < e.length; n++) {
            var r = e[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
        }
    }

    n.r(e);
    var o = function () {
        function t(e) {
            var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
            !function (t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }(this, t), "string" == typeof e ? (this.el = document.createElement(e), this.el.className = n) : this.el = e, this.data = {}
        }

        var e, n, o;
        return e = t, (n = [{
            key: "data", value: function (t, e) {
                return void 0 !== e ? (this.data[t] = e, this) : this.data[t]
            }
        }, {
            key: "on", value: function (t, e) {
                var n = r(t.split(".")), i = n[0], o = n.slice(1), a = i;
                return "mousewheel" === a && /Firefox/i.test(window.navigator.userAgent) && (a = "DOMMouseScroll"), this.el.addEventListener(a, function (t) {
                    e(t);
                    for (var n = 0; n < o.length; n += 1) {
                        var r = o[n];
                        if ("left" === r && 0 !== t.button) return;
                        if ("right" === r && 2 !== t.button) return;
                        "stop" === r && t.stopPropagation()
                    }
                }), this
            }
        }, {
            key: "offset", value: function (t) {
                var e = this;
                if (void 0 !== t) return Object.keys(t).forEach(function (n) {
                    e.css(n, "".concat(t[n], "px"))
                }), this;
                var n = this.el;
                return {top: n.offsetTop, left: n.offsetLeft, height: n.offsetHeight, width: n.offsetWidth}
            }
        }, {
            key: "scroll", value: function (t) {
                var e = this.el;
                return void 0 !== t && (void 0 !== t.left && (e.scrollLeft = t.left), void 0 !== t.top && (e.scrollTop = t.top)), {
                    left: e.scrollLeft,
                    top: e.scrollTop
                }
            }
        }, {
            key: "box", value: function () {
                return this.el.getBoundingClientRect()
            }
        }, {
            key: "parent", value: function () {
                return new t(this.el.parentNode)
            }
        }, {
            key: "children", value: function () {
                for (var t = this, e = arguments.length, n = new Array(e), r = 0; r < e; r++) n[r] = arguments[r];
                return 0 === arguments.length ? this.el.childNodes : (n.forEach(function (e) {
                    return t.child(e)
                }), this)
            }
        }, {
            key: "child", value: function (e) {
                var n = e;
                return "string" == typeof e ? n = document.createTextNode(e) : e instanceof t && (n = e.el), this.el.appendChild(n), this
            }
        }, {
            key: "contains", value: function (t) {
                return this.el.contains(t)
            }
        }, {
            key: "className", value: function (t) {
                return void 0 !== t ? (this.el.className = t, this) : this.el.className
            }
        }, {
            key: "addClass", value: function (t) {
                return this.el.classList.add(t), this
            }
        }, {
            key: "hasClass", value: function (t) {
                return this.el.classList.contains(t)
            }
        }, {
            key: "removeClass", value: function (t) {
                return this.el.classList.remove(t), this
            }
        }, {
            key: "toggle", value: function () {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "active";
                return this.toggleClass(t)
            }
        }, {
            key: "toggleClass", value: function (t) {
                return this.el.classList.toggle(t)
            }
        }, {
            key: "active", value: function () {
                var t = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
                    e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "active";
                return t ? this.addClass(e) : this.removeClass(e), this
            }
        }, {
            key: "checked", value: function () {
                var t = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
                return this.active(t, "checked"), this
            }
        }, {
            key: "disabled", value: function () {
                var t = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
                return t ? this.addClass("disabled") : this.removeClass("disabled"), this
            }
        }, {
            key: "attr", value: function (t, e) {
                var n = this;
                if (void 0 !== e) this.el.setAttribute(t, e); else {
                    if ("string" == typeof t) return this.el.getAttribute(t);
                    Object.keys(t).forEach(function (e) {
                        n.el.setAttribute(e, t[e])
                    })
                }
                return this
            }
        }, {
            key: "removeAttr", value: function (t) {
                return this.el.removeAttribute(t), this
            }
        }, {
            key: "html", value: function (t) {
                return void 0 !== t ? (this.el.innerHTML = t, this) : this.el.innerHTML
            }
        }, {
            key: "val", value: function (t) {
                return void 0 !== t ? (this.el.value = t, this) : this.el.value
            }
        }, {
            key: "cssRemoveKeys", value: function () {
                for (var t = this, e = arguments.length, n = new Array(e), r = 0; r < e; r++) n[r] = arguments[r];
                return n.forEach(function (e) {
                    return t.el.style.removeProperty(e)
                }), this
            }
        }, {
            key: "css", value: function (t, e) {
                var n = this;
                return void 0 === e && "string" != typeof t ? (Object.keys(t).forEach(function (e) {
                    n.el.style[e] = t[e]
                }), this) : void 0 !== e ? (this.el.style[t] = e, this) : this.el.style[t]
            }
        }, {
            key: "computedStyle", value: function () {
                return window.getComputedStyle(this.el, null)
            }
        }, {
            key: "show", value: function () {
                return this.css("display", "block"), this
            }
        }, {
            key: "hide", value: function () {
                return this.css("display", "none"), this
            }
        }]) && i(e.prototype, n), o && i(e, o), t
    }(), a = function (t) {
        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
        return new o(t, e)
    };

    function l(t, e) {
        return function (t) {
            if (Array.isArray(t)) return t
        }(t) || function (t, e) {
            var n = [], r = !0, i = !1, o = void 0;
            try {
                for (var a, l = t[Symbol.iterator](); !(r = (a = l.next()).done) && (n.push(a.value), !e || n.length !== e); r = !0) ;
            } catch (t) {
                i = !0, o = t
            } finally {
                try {
                    r || null == l.return || l.return()
                } finally {
                    if (i) throw o
                }
            }
            return n
        }(t, e) || function () {
            throw new TypeError("Invalid attempt to destructure non-iterable instance")
        }()
    }

    var c = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

    function u(t) {
        for (var e = "", n = t; n >= c.length;) n /= c.length, n -= 1, e += c[parseInt(n, 10) % c.length];
        var r = t % c.length;
        return e += c[r]
    }

    function s(t) {
        for (var e = 0, n = 0; n < t.length - 1; n += 1) {
            var r = t.charCodeAt(n) - 65, i = t.length - 1 - n;
            e += Math.pow(c.length, i) + c.length * r
        }
        return e += t.charCodeAt(t.length - 1) - 65
    }

    function f(t) {
        for (var e = "", n = "", r = 0; r < t.length; r += 1) t.charAt(r) >= "0" && t.charAt(r) <= "9" ? n += t.charAt(r) : e += t.charAt(r);
        return [s(e), parseInt(n, 10) - 1]
    }

    function h(t, e) {
        return "".concat(u(t)).concat(e + 1)
    }

    function y(t, e, n) {
        var r = l(f(t), 2);
        return h(r[0] + e, r[1] + n)
    }

    function p(t, e) {
        return function (t) {
            if (Array.isArray(t)) return t
        }(t) || function (t, e) {
            var n = [], r = !0, i = !1, o = void 0;
            try {
                for (var a, l = t[Symbol.iterator](); !(r = (a = l.next()).done) && (n.push(a.value), !e || n.length !== e); r = !0) ;
            } catch (t) {
                i = !0, o = t
            } finally {
                try {
                    r || null == l.return || l.return()
                } finally {
                    if (i) throw o
                }
            }
            return n
        }(t, e) || function () {
            throw new TypeError("Invalid attempt to destructure non-iterable instance")
        }()
    }

    function v(t, e) {
        for (var n = 0; n < e.length; n++) {
            var r = e[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
        }
    }

    var d = function () {
        function t(e, n, r, i) {
            var o = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0,
                a = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0;
            !function (t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }(this, t), this.sri = e, this.sci = n, this.eri = r, this.eci = i, this.w = o, this.h = a
        }

        var e, n, r;
        return e = t, r = [{
            key: "valueOf", value: function (e) {
                var n = e.split(":"), r = p(f(n[0]), 2), i = r[0], o = r[1], a = o, l = i;
                if (n.length > 1) {
                    var c = p(f(n[1]), 2);
                    l = c[0], a = c[1]
                }
                return new t(o, i, a, l)
            }
        }], (n = [{
            key: "set", value: function (t, e, n, r) {
                this.sri = t, this.sci = e, this.eri = n, this.eci = r
            }
        }, {
            key: "multiple", value: function () {
                return this.eri - this.sri > 0 || this.eci - this.sci > 0
            }
        }, {
            key: "includes", value: function () {
                for (var t = 0, e = 0, n = arguments.length, r = new Array(n), i = 0; i < n; i++) r[i] = arguments[i];
                if (1 === r.length) {
                    var o = f(r[0]), a = p(o, 2);
                    e = a[0], t = a[1]
                } else 2 === r.length && (t = r[0], e = r[1]);
                var l = this.sri, c = this.sci, u = this.eri, s = this.eci;
                return l <= t && t <= u && c <= e && e <= s
            }
        }, {
            key: "each", value: function (t) {
                for (var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : function () {
                    return !0
                }, n = this.sri, r = this.sci, i = this.eri, o = this.eci, a = n; a <= i; a += 1) if (e(a)) for (var l = r; l <= o; l += 1) t(a, l)
            }
        }, {
            key: "contains", value: function (t) {
                return this.sri <= t.sri && this.sci <= t.sci && this.eri >= t.eri && this.eci >= t.eci
            }
        }, {
            key: "within", value: function (t) {
                return this.sri >= t.sri && this.sci >= t.sci && this.eri <= t.eri && this.eci <= t.eci
            }
        }, {
            key: "disjoint", value: function (t) {
                return this.sri > t.eri || this.sci > t.eci || t.sri > this.eri || t.sci > this.eci
            }
        }, {
            key: "intersects", value: function (t) {
                return this.sri <= t.eri && this.sci <= t.eci && t.sri <= this.eri && t.sci <= this.eci
            }
        }, {
            key: "union", value: function (e) {
                var n = this.sri, r = this.sci, i = this.eri, o = this.eci;
                return new t(e.sri < n ? e.sri : n, e.sci < r ? e.sci : r, e.eri > i ? e.eri : i, e.eci > o ? e.eci : o)
            }
        }, {
            key: "difference", value: function (e) {
                var n = [], r = function (e, r, i, o) {
                        n.push(new t(e, r, i, o))
                    }, i = this.sri, o = this.sci, a = this.eri, l = this.eci, c = e.sri - i, u = e.sci - o, s = a - e.eri,
                    f = l - e.eci;
                return c > 0 ? (r(i, o, e.sri - 1, l), s > 0 ? (r(e.eri + 1, o, a, l), u > 0 && r(e.sri, o, e.eri, e.sci - 1), f > 0 && r(e.sri, e.eci + 1, e.eri, l)) : (u > 0 && r(e.sri, o, a, e.sci - 1), f > 0 && r(e.sri, e.eci + 1, a, l))) : s > 0 && (r(e.eri + 1, o, a, l), u > 0 && r(i, o, e.eri, e.sci - 1), f > 0 && r(i, e.eci + 1, e.eri, l)), u > 0 ? (r(i, o, a, e.sci - 1), f > 0 ? (r(i, e.eri + 1, a, l), c > 0 && r(i, e.sci, e.sri - 1, e.eci), s > 0 && r(e.sri + 1, e.sci, a, e.eci)) : (c > 0 && r(i, e.sci, e.sri - 1, l), s > 0 && r(e.sri + 1, e.sci, a, l))) : f > 0 && (r(a, e.eci + 1, a, l), c > 0 && r(i, o, e.sri - 1, e.eci), s > 0 && r(e.eri + 1, o, a, e.eci)), n
            }
        }, {
            key: "size", value: function () {
                return [this.eri - this.sri + 1, this.eci - this.sci + 1]
            }
        }, {
            key: "toString", value: function () {
                var t = this.sri, e = this.sci, n = this.eri, r = this.eci, i = h(e, t);
                return this.multiple() && (i = "".concat(i, ":").concat(h(r, n))), i
            }
        }, {
            key: "clone", value: function () {
                return new t(this.sri, this.sci, this.eri, this.eci, this.w, this.h)
            }
        }, {
            key: "equals", value: function (t) {
                return this.eri === t.eri && this.eci === t.eci && this.sri === t.sri && this.sci === t.sci
            }
        }]) && v(e.prototype, n), r && v(e, r), t
    }();

    function b(t, e) {
        for (var n = 0; n < e.length; n++) {
            var r = e[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
        }
    }

    var g = function () {
        function t() {
            !function (t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }(this, t), this.range = new d(0, 0, 0, 0), this.ri = 0, this.ci = 0
        }

        var e, n, r;
        return e = t, (n = [{
            key: "multiple", value: function () {
                return this.range.multiple()
            }
        }, {
            key: "setIndexes", value: function (t, e) {
                this.ri = t, this.ci = e
            }
        }, {
            key: "size", value: function () {
                return this.range.size()
            }
        }]) && b(e.prototype, n), r && b(e, r), t
    }();
    var m = function t() {
        !function (t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }(this, t), this.x = 0, this.y = 0, this.ri = 0, this.ci = 0
    };

    function w(t, e) {
        for (var n = 0; n < e.length; n++) {
            var r = e[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
        }
    }

    var k = function () {
        function t() {
            !function (t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }(this, t), this.undoItems = [], this.redoItems = []
        }

        var e, n, r;
        return e = t, (n = [{
            key: "add", value: function (t) {
                this.undoItems.push(JSON.stringify(t)), this.redoItems = []
            }
        }, {
            key: "canUndo", value: function () {
                return this.undoItems.length > 0
            }
        }, {
            key: "canRedo", value: function () {
                return this.redoItems.length > 0
            }
        }, {
            key: "undo", value: function (t, e) {
                var n = this.undoItems, r = this.redoItems;
                this.canUndo() && (r.push(JSON.stringify(t)), e(JSON.parse(n.pop())))
            }
        }, {
            key: "redo", value: function (t, e) {
                var n = this.undoItems, r = this.redoItems;
                this.canRedo() && (n.push(JSON.stringify(t)), e(JSON.parse(r.pop())))
            }
        }]) && w(e.prototype, n), r && w(e, r), t
    }();

    function O(t, e) {
        for (var n = 0; n < e.length; n++) {
            var r = e[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
        }
    }

    var S = function () {
        function t() {
            !function (t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }(this, t), this.range = null, this.state = "clear"
        }

        var e, n, r;
        return e = t, (n = [{
            key: "copy", value: function (t) {
                return this.range = t, this.state = "copy", this
            }
        }, {
            key: "cut", value: function (t) {
                return this.range = t, this.state = "cut", this
            }
        }, {
            key: "isCopy", value: function () {
                return "copy" === this.state
            }
        }, {
            key: "isCut", value: function () {
                return "cut" === this.state
            }
        }, {
            key: "isClear", value: function () {
                return "clear" === this.state
            }
        }, {
            key: "clear", value: function () {
                this.range = null, this.state = "clear"
            }
        }]) && O(e.prototype, n), r && O(e, r), t
    }();

    function x(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }

    function E(t, e) {
        for (var n = 0; n < e.length; n++) {
            var r = e[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
        }
    }

    function j(t, e, n) {
        return e && E(t.prototype, e), n && E(t, n), t
    }

    var _ = function () {
        function t(e, n, r) {
            x(this, t), this.ci = e, this.operator = n, this.value = r
        }

        return j(t, [{
            key: "set", value: function (t, e) {
                this.operator = t, this.value = e
            }
        }, {
            key: "includes", value: function (t) {
                var e = this.operator, n = this.value;
                return "all" === e || "in" === e && n.includes(t)
            }
        }, {
            key: "vlength", value: function () {
                var t = this.operator, e = this.value;
                return "in" === t ? e.length : 0
            }
        }, {
            key: "getData", value: function () {
                return {ci: this.ci, operator: this.operator, value: this.value}
            }
        }]), t
    }(), C = function () {
        function t(e, n) {
            x(this, t), this.ci = e, this.order = n
        }

        return j(t, [{
            key: "asc", value: function () {
                return "asc" === this.order
            }
        }, {
            key: "desc", value: function () {
                return "desc" === this.order
            }
        }]), t
    }(), T = function () {
        function t() {
            x(this, t), this.ref = null, this.filters = [], this.sort = null
        }

        return j(t, [{
            key: "setData", value: function (t) {
                var e = t.ref, n = t.filters, r = t.sort;
                null != e && (this.ref = e, this.fitlers = n.map(function (t) {
                    return new _(t.ci, t.operator, t.value)
                }), r && (this.sort = new C(r.ci, r.order)))
            }
        }, {
            key: "getData", value: function () {
                if (this.active()) {
                    var t = this.ref, e = this.filters, n = this.sort;
                    return {
                        ref: t, filters: e.map(function (t) {
                            return t.getData()
                        }), sort: n
                    }
                }
                return {}
            }
        }, {
            key: "addFilter", value: function (t, e, n) {
                var r = this.getFilter(t);
                null == r ? this.filters.push(new _(t, e, n)) : r.set(e, n)
            }
        }, {
            key: "setSort", value: function (t, e) {
                this.sort = e ? new C(t, e) : null
            }
        }, {
            key: "includes", value: function (t, e) {
                return !!this.active() && this.hrange().includes(t, e)
            }
        }, {
            key: "getSort", value: function (t) {
                var e = this.sort;
                return e && e.ci === t ? e : null
            }
        }, {
            key: "getFilter", value: function (t) {
                for (var e = this.filters, n = 0; n < e.length; n += 1) if (e[n].ci === t) return e[n];
                return null
            }
        }, {
            key: "filteredRows", value: function (t) {
                var e = new Set, n = new Set;
                if (this.active()) for (var r = this.range(), i = r.sri, o = r.eri, a = this.filters, l = i + 1; l <= o; l += 1) for (var c = 0; c < a.length; c += 1) {
                    var u = a[c], s = t(l, u.ci), f = s ? s.text : "";
                    if (!u.includes(f)) {
                        e.add(l);
                        break
                    }
                    n.add(l)
                }
                return {rset: e, fset: n}
            }
        }, {
            key: "items", value: function (t, e) {
                var n = {};
                if (this.active()) for (var r = this.range(), i = r.sri, o = r.eri, a = i + 1; a <= o; a += 1) {
                    var l = e(a, t);
                    if (null === l || /^\s*$/.test(l.text)) n[""] = (n[""] || 0) + 1; else {
                        var c = l.text, u = (n[c] || 0) + 1;
                        n[c] = u
                    }
                }
                return n
            }
        }, {
            key: "range", value: function () {
                return d.valueOf(this.ref)
            }
        }, {
            key: "hrange", value: function () {
                var t = this.range();
                return t.eri = t.sri, t
            }
        }, {
            key: "clear", value: function () {
                this.ref = null, this.filters = [], this.sort = null
            }
        }, {
            key: "active", value: function () {
                return null !== this.ref
            }
        }]), t
    }();

    function P(t, e) {
        for (var n = 0; n < e.length; n++) {
            var r = e[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
        }
    }

    var A = function () {
        function t() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
            !function (t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }(this, t), this._ = e
        }

        var e, n, r;
        return e = t, (n = [{
            key: "forEach", value: function (t) {
                this._.forEach(t)
            }
        }, {
            key: "deleteWithin", value: function (t) {
                this._ = this._.filter(function (e) {
                    return !e.within(t)
                })
            }
        }, {
            key: "getFirstIncludes", value: function (t, e) {
                for (var n = 0; n < this._.length; n += 1) {
                    var r = this._[n];
                    if (r.includes(t, e)) return r
                }
                return null
            }
        }, {
            key: "filterIntersects", value: function (e) {
                return new t(this._.filter(function (t) {
                    return t.intersects(e)
                }))
            }
        }, {
            key: "intersects", value: function (t) {
                for (var e = 0; e < this._.length; e += 1) {
                    if (this._[e].intersects(t)) return !0
                }
                return !1
            }
        }, {
            key: "union", value: function (t) {
                var e = t;
                return this._.forEach(function (t) {
                    t.intersects(e) && (e = t.union(e))
                }), e
            }
        }, {
            key: "add", value: function (t) {
                this.deleteWithin(t), this._.push(t)
            }
        }, {
            key: "shift", value: function (t, e, n, r) {
                this._.forEach(function (i) {
                    var o = i.sri, a = i.sci, l = i.eri, c = i.eci, u = i;
                    "row" === t ? o >= e ? (u.sri += n, u.eri += n) : o < e && e <= l && (u.eri += n, r(o, a, n, 0)) : "column" === t && (a >= e ? (u.sci += n, u.eci += n) : a < e && e <= c && (u.eci += n, r(o, a, 0, n)))
                })
            }
        }, {
            key: "move", value: function (t, e, n) {
                this._.forEach(function (r) {
                    var i = r;
                    i.within(t) && (i.eri += e, i.sri += e, i.sci += n, i.eci += n)
                })
            }
        }, {
            key: "setData", value: function (t) {
                return this._ = t.map(function (t) {
                    return d.valueOf(t)
                }), this
            }
        }, {
            key: "getData", value: function () {
                return this._.map(function (t) {
                    return t.toString()
                })
            }
        }]) && P(e.prototype, n), r && P(e, r), t
    }();
    var R = function t() {
        for (var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), i = 1; i < n; i++) r[i - 1] = arguments[i];
        return r.forEach(function (n) {
            Object.keys(n).forEach(function (r) {
                var i = n[r];
                "string" == typeof i || "number" == typeof i || "boolean" == typeof i ? e[r] = i : "function" != typeof i && !Array.isArray(i) && i instanceof Object ? (e[r] = e[r] || {}, t(e[r], i)) : e[r] = i
            })
        }), e
    };
    var D = {
        cloneDeep: function (t) {
            return JSON.parse(JSON.stringify(t))
        }, merge: function () {
            for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++) e[n] = arguments[n];
            return R.apply(void 0, [{}].concat(e))
        }, equals: function t(e, n) {
            var r = Object.keys(e);
            if (r.length !== Object.keys(n).length) return !1;
            for (var i = 0; i < r.length; i += 1) {
                var o = r[i], a = e[o], l = n[o];
                if (void 0 === l) return !1;
                if ("string" == typeof a || "number" == typeof a || "boolean" == typeof a) {
                    if (a !== l) return !1
                } else if (Array.isArray(a)) {
                    if (a.length !== l.length) return !1;
                    for (var c = 0; c < a.length; c += 1) if (!t(a[c], l[c])) return !1
                } else if ("function" != typeof a && !Array.isArray(a) && a instanceof Object && !t(a, l)) return !1
            }
            return !0
        }, arrayEquals: function (t, e) {
            if (t.length !== e.length) return !1;
            for (var n = 0; n < t.length; n += 1) if (t[n] !== e[n]) return !1;
            return !0
        }, sum: function (t) {
            var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : function (t) {
                return t
            }, n = 0, r = 0;
            return Object.keys(t).forEach(function (i) {
                n += e(t[i], i), r += 1
            }), [n, r]
        }, rangeEach: function (t, e, n) {
            for (var r = t; r < e; r += 1) n(r)
        }, rangeSum: function (t, e, n) {
            for (var r = 0, i = t; i < e; i += 1) r += n(i);
            return r
        }, rangeReduceIf: function (t, e, n, r, i, o) {
            for (var a = n, l = r, c = t; c < e && !(a > i); c += 1) a += l = o(c);
            return [c, a - l, l]
        }, deleteProperty: function (t, e) {
            var n = t["".concat(e)];
            return delete t["".concat(e)], n
        }
    };

    function z(t, e) {
        return function (t) {
            if (Array.isArray(t)) return t
        }(t) || function (t, e) {
            var n = [], r = !0, i = !1, o = void 0;
            try {
                for (var a, l = t[Symbol.iterator](); !(r = (a = l.next()).done) && (n.push(a.value), !e || n.length !== e); r = !0) ;
            } catch (t) {
                i = !0, o = t
            } finally {
                try {
                    r || null == l.return || l.return()
                } finally {
                    if (i) throw o
                }
            }
            return n
        }(t, e) || function () {
            throw new TypeError("Invalid attempt to destructure non-iterable instance")
        }()
    }

    function I(t, e) {
        for (var n = 0; n < e.length; n++) {
            var r = e[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
        }
    }

    var M = function () {
        function t(e) {
            var n = e.len, r = e.height;
            !function (t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }(this, t), this._ = {}, this.len = n, this.height = r
        }

        var e, n, r;
        return e = t, (n = [{
            key: "getHeight", value: function (t) {
                var e = this.get(t);
                return e && e.height ? e.height : this.height
            }
        }, {
            key: "setHeight", value: function (t, e) {
                this.getOrNew(t).height = e
            }
        }, {
            key: "setStyle", value: function (t, e) {
                this.getOrNew(t).style = e
            }
        }, {
            key: "sumHeight", value: function (t, e, n) {
                var r = this;
                return D.rangeSum(t, e, function (t) {
                    return n && n.has(t) ? 0 : r.getHeight(t)
                })
            }
        }, {
            key: "totalHeight", value: function () {
                return this.sumHeight(0, this.len)
            }
        }, {
            key: "get", value: function (t) {
                return this._[t]
            }
        }, {
            key: "getOrNew", value: function (t) {
                return this._[t] = this._[t] || {cells: {}}, this._[t]
            }
        }, {
            key: "getCell", value: function (t, e) {
                var n = this.get(t);
                return void 0 !== n && void 0 !== n.cells && void 0 !== n.cells[e] ? n.cells[e] : null
            }
        }, {
            key: "getCellMerge", value: function (t, e) {
                var n = this.getCell(t, e);
                return n && n.merge ? n.merge : [0, 0]
            }
        }, {
            key: "getCellOrNew", value: function (t, e) {
                var n = this.getOrNew(t);
                return n.cells[e] = n.cells[e] || {}, n.cells[e]
            }
        }, {
            key: "setCell", value: function (t, e, n) {
                var r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "all", i = this.getOrNew(t);
                "all" === r ? i.cells[e] = n : "text" === r ? (i.cells[e] = i.cells[e] || {}, i.cells[e].text = n.text) : "format" === r && (i.cells[e] = i.cells[e] || {}, i.cells[e].style = n.style, n.merge && (i.cells[e].merge = n.merge))
            }
        }, {
            key: "setCellText", value: function (t, e, n) {
                this.getCellOrNew(t, e).text = n
            }
        }, {
            key: "copyPaste", value: function (t, e, n) {
                var r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
                    i = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : function () {
                    }, o = t.sri, a = t.sci, l = t.eri, c = t.eci, u = e.sri, s = e.sci, f = e.eri, h = e.eci,
                    p = t.size(), v = z(p, 2), d = v[0], b = v[1], g = e.size(), m = z(g, 2), w = m[0], k = m[1],
                    O = !0, S = 0;
                (f < o || h < a) && (O = !1, S = f < o ? w : k);
                for (var x = o; x <= l; x += 1) if (this._[x]) for (var E = a; E <= c; E += 1) if (this._[x].cells && this._[x].cells[E]) for (var j = u; j <= f; j += d) for (var _ = s; _ <= h; _ += b) {
                    var C = j + (x - o), T = _ + (E - a), P = D.cloneDeep(this._[x].cells[E]);
                    r && P && P.text && P.text.length > 0 && function () {
                        var t = P.text, e = _ - s + (j - u) + 2;
                        if (O || (e -= S + 1), "=" === t[0]) P.text = t.replace(/\w{1,3}\d/g, function (t) {
                            var n = 0, r = 0;
                            return o === u ? n = e - 1 : r = e - 1, y(t, n, r)
                        }); else {
                            var n = /[\\.\d]+$/.exec(t);
                            if (null !== n) {
                                var r = Number(n[0]) + e - 1;
                                P.text = t.substring(0, n.index) + r
                            }
                        }
                    }(), this.setCell(C, T, P, n), i(C, T, P)
                }
            }
        }, {
            key: "cutPaste", value: function (t, e) {
                var n = this, r = {};
                this.each(function (i) {
                    n.eachCells(i, function (o) {
                        var a = parseInt(i, 10), l = parseInt(o, 10);
                        t.includes(i, o) && (a = e.sri + (a - t.sri), l = e.sci + (l - t.sci)), r[a] = r[a] || {cells: {}}, r[a].cells[l] = n._[i].cells[o]
                    })
                }), this._ = r
            }
        }, {
            key: "insert", value: function (t) {
                var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1, n = {};
                this.each(function (r, i) {
                    var o = parseInt(r, 10);
                    o >= t && (o += e), n[o] = i
                }), this._ = n, this.len += e
            }
        }, {
            key: "delete", value: function (t, e) {
                var n = e - t + 1, r = {};
                this.each(function (i, o) {
                    var a = parseInt(i, 10);
                    a < t ? r[a] = o : i > e && (r[a - n] = o)
                }), this._ = r, this.len -= n
            }
        }, {
            key: "insertColumn", value: function (t) {
                var e = this, n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
                this.each(function (r, i) {
                    var o = {};
                    e.eachCells(r, function (e, r) {
                        var i = parseInt(e, 10);
                        i >= t && (i += n), o[i] = r
                    }), i.cells = o
                })
            }
        }, {
            key: "deleteColumn", value: function (t, e) {
                var n = this, r = e - t + 1;
                this.each(function (i, o) {
                    var a = {};
                    n.eachCells(i, function (n, i) {
                        var o = parseInt(n, 10);
                        o < t ? a[o] = i : o > e && (a[o - r] = i)
                    }), o.cells = a
                })
            }
        }, {
            key: "deleteCells", value: function (t) {
                var e = this, n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "all";
                t.each(function (t, r) {
                    e.deleteCell(t, r, n)
                })
            }
        }, {
            key: "deleteCell", value: function (t, e) {
                var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "all", r = this.get(t);
                if (null !== r) {
                    var i = this.getCell(t, e);
                    null !== i && ("all" === n ? delete r.cells[e] : "text" === n ? (i.text && delete i.text, i.value && delete i.value) : "format" === n ? (void 0 !== i.style && delete i.style, i.merge && delete i.merge) : "merge" === n && i.merge && delete i.merge)
                }
            }
        }, {
            key: "each", value: function (t) {
                Object.entries(this._).forEach(function (e) {
                    var n = z(e, 2), r = n[0], i = n[1];
                    t(r, i)
                })
            }
        }, {
            key: "eachCells", value: function (t, e) {
                this._[t] && this._[t].cells && Object.entries(this._[t].cells).forEach(function (t) {
                    var n = z(t, 2), r = n[0], i = n[1];
                    e(r, i)
                })
            }
        }, {
            key: "setData", value: function (t) {
                t.len && (this.len = t.len, delete t.len), this._ = t
            }
        }, {
            key: "getData", value: function () {
                var t = this.len;
                return Object.assign({len: t}, this._)
            }
        }]) && I(e.prototype, n), r && I(e, r), t
    }();

    function W(t, e) {
        for (var n = 0; n < e.length; n++) {
            var r = e[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
        }
    }

    var F = function () {
        function t(e) {
            var n = e.len, r = e.width, i = e.indexWidth, o = e.minWidth;
            !function (t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }(this, t), this._ = {}, this.len = n, this.width = r, this.indexWidth = i, this.minWidth = o
        }

        var e, n, r;
        return e = t, (n = [{
            key: "setData", value: function (t) {
                t.len && (this.len = t.len, delete t.len), this._ = t
            }
        }, {
            key: "getData", value: function () {
                var t = this.len;
                return Object.assign({len: t}, this._)
            }
        }, {
            key: "getWidth", value: function (t) {
                var e = this._[t];
                return e && e.width ? e.width : this.width
            }
        }, {
            key: "getOrNew", value: function (t) {
                return this._[t] = this._[t] || {}, this._[t]
            }
        }, {
            key: "setWidth", value: function (t, e) {
                this.getOrNew(t).width = e
            }
        }, {
            key: "setStyle", value: function (t, e) {
                this.getOrNew(t).style = e
            }
        }, {
            key: "sumWidth", value: function (t, e) {
                var n = this;
                return D.rangeSum(t, e, function (t) {
                    return n.getWidth(t)
                })
            }
        }, {
            key: "totalWidth", value: function () {
                return this.sumWidth(0, this.len)
            }
        }]) && W(e.prototype, n), r && W(e, r), t
    }(), N = "en", H = {
        en: {
            toolbar: {
                undo: "Undo",
                redo: "Redo",
                paintformat: "Paint format",
                clearformat: "Clear format",
                format: "Format",
                fontName: "Font",
                fontSize: "Font size",
                fontBold: "Font bold",
                fontItalic: "Font italic",
                underline: "Underline",
                strike: "Strike",
                color: "Text color",
                bgcolor: "Fill color",
                border: "Borders",
                merge: "Merge cells",
                align: "Horizontal align",
                valign: "Vertical align",
                textwrap: "Text wrapping",
                freeze: "Freeze cell",
                autofilter: "Filter",
                formula: "Functions",
                more: "More"
            },
            contextmenu: {
                copy: "Copy",
                cut: "Cut",
                paste: "Paste",
                pasteValue: "Paste values only",
                pasteFormat: "Paste format only",
                insertRow: "Insert row",
                insertColumn: "Insert column",
                deleteRow: "Delete row",
                deleteColumn: "Delete column",
                deleteCell: "Delete cell",
                deleteCellText: "Delete cell text",
                validation: "Data validations"
            },
            format: {
                normal: "Normal",
                text: "Plain Text",
                number: "Number",
                percent: "Percent",
                rmb: "RMB",
                usd: "USD",
                eur: "EUR",
                date: "Date",
                time: "Time",
                datetime: "Date time",
                duration: "Duration"
            },
            formula: {
                sum: "Sum",
                average: "Average",
                max: "Max",
                min: "Min",
                _if: "IF",
                and: "AND",
                or: "OR",
                concat: "Concat"
            },
            validation: {
                required: "it must be required",
                notMatch: "it not match its validation rule",
                between: "it is between {} and {}",
                notBetween: "it is not between {} and {}",
                notIn: "it is not in list",
                equal: "it equal to {}",
                notEqual: "it not equal to {}",
                lessThan: "it less than {}",
                lessThanEqual: "it less than or equal to {}",
                greaterThan: "it greater than {}",
                greaterThanEqual: "it greater than or equal to {}"
            },
            error: {pasteForMergedCell: "Unable to do this for merged cells"},
            calendar: {
                weeks: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
                months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
            },
            button: {cancel: "Cancel", remove: "Remove", save: "Save", ok: "OK"},
            sort: {desc: "Sort Z -> A", asc: "Sort A -> Z"},
            filter: {empty: "empty"},
            dataValidation: {
                mode: "Mode",
                range: "Cell Range",
                criteria: "Criteria",
                modeType: {cell: "Cell", column: "Colun", row: "Row"},
                type: {list: "List", number: "Number", date: "Date", phone: "Phone", email: "Email"},
                operator: {
                    be: "between",
                    nbe: "not betwwen",
                    lt: "less than",
                    lte: "less than or equal to",
                    gt: "greater than",
                    gte: "greater than or equal to",
                    eq: "equal to",
                    neq: "not equal to"
                }
            }
        }
    };

    function V(t, e) {
        if (e && e[N]) for (var n = e[N], r = t.split("."), i = 0; i < r.length; i += 1) {
            var o = n[r[i]];
            if (i === r.length - 1) return o;
            if (!o) return;
            n = o
        }
    }

    function q(t) {
        var e = V(t, H);
        return !e && window && window.x && window.x.spreadsheet && window.x.spreadsheet.$messages && (e = V(t, window.x.spreadsheet.$messages)), e || ""
    }

    function B(t) {
        return function () {
            return q(t)
        }
    }

    function L(t, e) {
        N = t, e && (H[t] = e)
    }

    function U(t, e) {
        return function (t) {
            if (Array.isArray(t)) return t
        }(t) || function (t, e) {
            var n = [], r = !0, i = !1, o = void 0;
            try {
                for (var a, l = t[Symbol.iterator](); !(r = (a = l.next()).done) && (n.push(a.value), !e || n.length !== e); r = !0) ;
            } catch (t) {
                i = !0, o = t
            } finally {
                try {
                    r || null == l.return || l.return()
                } finally {
                    if (i) throw o
                }
            }
            return n
        }(t, e) || function () {
            throw new TypeError("Invalid attempt to destructure non-iterable instance")
        }()
    }

    function Y(t, e) {
        for (var n = 0; n < e.length; n++) {
            var r = e[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
        }
    }

    var $ = {phone: /^[1-9]\d{10}$/, email: /w+([-+.]w+)*@w+([-.]w+)*.w+([-.]w+)*/};

    function X(t, e) {
        var n = "";
        if (!t) {
            for (var r = arguments.length, i = new Array(r > 2 ? r - 2 : 0), o = 2; o < r; o++) i[o - 2] = arguments[o];
            n = q.apply(void 0, ["validation.".concat(e)].concat(i))
        }
        return [t, n]
    }

    var K = function () {
        function t(e, n, r, i) {
            !function (t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }(this, t), this.required = n, this.value = r, this.type = e, this.operator = i, this.message = ""
        }

        var e, n, r;
        return e = t, (n = [{
            key: "parseValue", value: function (t) {
                var e = this.type;
                return "date" === e ? new Date(t) : "number" === e ? Number(t) : t
            }
        }, {
            key: "equals", value: function (t) {
                var e = this.type === t.type && this.required === t.required && this.operator === t.operator;
                return e && (e = Array.isArray(this.value) ? D.arrayEquals(this.value, t.value) : this.value === t.value), e
            }
        }, {
            key: "values", value: function () {
                return this.value.split(",")
            }
        }, {
            key: "validate", value: function (t) {
                var e = this.required, n = this.operator, r = this.value, i = this.type;
                if (e && /^\s*$/.test(t)) return X(!1, "required");
                if (/^\s*$/.test(t)) return [!0];
                if ($[i] && !$[i].test(t)) return X(!1, "notMatch");
                if ("list" === i) return X(this.values().includes(t), "notIn");
                if (n) {
                    var o = this.parseValue(t);
                    if ("be" === n) {
                        var a = U(r, 2), l = a[0], c = a[1];
                        return X(o >= this.parseValue(l) && o <= this.parseValue(c), "between", l, c)
                    }
                    if ("nbe" === n) {
                        var u = U(r, 2), s = u[0], f = u[1];
                        return X(o < this.parseValue(s) || o > this.parseValue(f), "notBetween", s, f)
                    }
                    if ("eq" === n) return X(o === this.parseValue(r), "equal", r);
                    if ("neq" === n) return X(o !== this.parseValue(r), "notEqual", r);
                    if ("lt" === n) return X(o < this.parseValue(r), "lessThan", r);
                    if ("lte" === n) return X(o <= this.parseValue(r), "lessThanEqual", r);
                    if ("gt" === n) return X(o > this.parseValue(r), "greaterThan", r);
                    if ("gte" === n) return X(o >= this.parseValue(r), "greaterThanEqual", r)
                }
                return [!0]
            }
        }]) && Y(e.prototype, n), r && Y(e, r), t
    }();

    function J(t, e) {
        return function (t) {
            if (Array.isArray(t)) return t
        }(t) || function (t, e) {
            var n = [], r = !0, i = !1, o = void 0;
            try {
                for (var a, l = t[Symbol.iterator](); !(r = (a = l.next()).done) && (n.push(a.value), !e || n.length !== e); r = !0) ;
            } catch (t) {
                i = !0, o = t
            } finally {
                try {
                    r || null == l.return || l.return()
                } finally {
                    if (i) throw o
                }
            }
            return n
        }(t, e) || function () {
            throw new TypeError("Invalid attempt to destructure non-iterable instance")
        }()
    }

    function Z(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }

    function G(t, e) {
        for (var n = 0; n < e.length; n++) {
            var r = e[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
        }
    }

    function Q(t, e, n) {
        return e && G(t.prototype, e), n && G(t, n), t
    }

    var tt = function () {
        function t(e, n, r) {
            Z(this, t), this.refs = n, this.mode = e, this.validator = r
        }

        return Q(t, [{
            key: "includes", value: function (t, e) {
                for (var n = this.refs, r = 0; r < n.length; r += 1) {
                    if (d.valueOf(n[r]).includes(t, e)) return !0
                }
                return !1
            }
        }, {
            key: "addRef", value: function (t) {
                this.remove(d.valueOf(t)), this.refs.push(t)
            }
        }, {
            key: "remove", value: function (t) {
                var e = [];
                this.refs.forEach(function (n) {
                    var r = d.valueOf(n);
                    r.intersects(t) ? r.difference(t).forEach(function (t) {
                        return e.push(t.toString())
                    }) : e.push(n)
                }), this.refs = e
            }
        }, {
            key: "getData", value: function () {
                var t = this.refs, e = this.mode, n = this.validator;
                return {refs: t, mode: e, type: n.type, required: n.required, operator: n.operator, value: n.value}
            }
        }], [{
            key: "valueOf", value: function (e) {
                var n = e.refs, r = e.mode, i = e.type, o = e.required, a = e.operator, l = e.value;
                return new t(r, n, new K(i, o, l, a))
            }
        }]), t
    }(), et = function () {
        function t() {
            Z(this, t), this._ = [], this.errors = new Map
        }

        return Q(t, [{
            key: "getError", value: function (t, e) {
                return this.errors.get("".concat(t, "_").concat(e))
            }
        }, {
            key: "validate", value: function (t, e, n) {
                var r = this.get(t, e), i = "".concat(t, "_").concat(e), o = this.errors;
                if (null !== r) {
                    var a = J(r.validator.validate(n), 2), l = a[0], c = a[1];
                    l ? o.delete(i) : o.set(i, c)
                } else o.delete(i);
                return !0
            }
        }, {
            key: "add", value: function (t, e, n) {
                var r = n.type, i = n.required, o = n.value, a = n.operator, l = new K(r, i, o, a),
                    c = this.getByValidator(l);
                null !== c ? c.addRef(e) : this._.push(new tt(t, [e], l))
            }
        }, {
            key: "getByValidator", value: function (t) {
                for (var e = 0; e < this._.length; e += 1) {
                    var n = this._[e];
                    if (n.validator.equals(t)) return n
                }
                return null
            }
        }, {
            key: "get", value: function (t, e) {
                for (var n = 0; n < this._.length; n += 1) {
                    var r = this._[n];
                    if (r.includes(t, e)) return r
                }
                return null
            }
        }, {
            key: "remove", value: function (t) {
                this.each(function (e) {
                    e.remove(t)
                })
            }
        }, {
            key: "each", value: function (t) {
                this._.forEach(function (e) {
                    return t(e)
                })
            }
        }, {
            key: "getData", value: function () {
                return this._.filter(function (t) {
                    return t.refs.length > 0
                }).map(function (t) {
                    return t.getData()
                })
            }
        }, {
            key: "setData", value: function (t) {
                this._ = t.map(function (t) {
                    return tt.valueOf(t)
                })
            }
        }]), t
    }();

    function nt(t) {
        return function (t) {
            if (Array.isArray(t)) {
                for (var e = 0, n = new Array(t.length); e < t.length; e++) n[e] = t[e];
                return n
            }
        }(t) || function (t) {
            if (Symbol.iterator in Object(t) || "[object Arguments]" === Object.prototype.toString.call(t)) return Array.from(t)
        }(t) || function () {
            throw new TypeError("Invalid attempt to spread non-iterable instance")
        }()
    }

    function rt(t, e) {
        for (var n = 0; n < e.length; n++) {
            var r = e[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
        }
    }

    function it(t, e) {
        return function (t) {
            if (Array.isArray(t)) return t
        }(t) || function (t, e) {
            var n = [], r = !0, i = !1, o = void 0;
            try {
                for (var a, l = t[Symbol.iterator](); !(r = (a = l.next()).done) && (n.push(a.value), !e || n.length !== e); r = !0) ;
            } catch (t) {
                i = !0, o = t
            } finally {
                try {
                    r || null == l.return || l.return()
                } finally {
                    if (i) throw o
                }
            }
            return n
        }(t, e) || function () {
            throw new TypeError("Invalid attempt to destructure non-iterable instance")
        }()
    }

    var ot = {
        view: {
            height: function () {
                return document.documentElement.clientHeight
            }, width: function () {
                return document.documentElement.clientWidth
            }
        },
        showGrid: !0,
        showToolbar: !0,
        showContextmenu: !0,
        row: {len: 100, height: 25},
        col: {len: 26, width: 100, indexWidth: 60, minWidth: 60},
        style: {
            bgcolor: "#ffffff",
            align: "left",
            valign: "middle",
            textwrap: !1,
            strike: !1,
            underline: !1,
            color: "#0a0a0a",
            font: {name: "Arial", size: 10, bold: !1, italic: !1}
        }
    };

    function at(t, e) {
        var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : function () {
            }, r = this.merges, i = e.clone(), o = it(t.size(), 2), a = o[0], l = o[1], c = it(e.size(), 2), u = c[0],
            s = c[1];
        return a > u && (i.eri = e.sri + a - 1), l > s && (i.eci = e.sci + l - 1), !r.intersects(i) || (n(q("error.pasteForMergedCell")), !1)
    }

    function lt(t, e, n) {
        var r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3], i = this.rows, o = this.merges;
        "all" !== n && "format" !== n || (i.deleteCells(e, n), o.deleteWithin(e)), i.copyPaste(t, e, n, r, function (t, e, n) {
            if (n && n.merge) {
                var r = it(n.merge, 2), i = r[0], a = r[1];
                if (i <= 0 && a <= 0) return;
                o.add(new d(t, e, t + i, e + a))
            }
        })
    }

    function ct(t, e) {
        var n = this.clipboard, r = this.rows, i = this.merges;
        r.cutPaste(t, e), i.move(t, e.sri - t.sri, e.sci - t.sci), n.clear()
    }

    function ut(t, e, n) {
        var r = this.styles, i = this.rows.getCellOrNew(t, e), o = {};
        void 0 !== i.style && (o = D.cloneDeep(r[i.style])), Object.assign(o, {border: n}), i.style = this.addStyle(o)
    }

    var st = function () {
        function t(e, n) {
            !function (t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }(this, t), this.settings = D.merge(ot, n || {}), this.name = e || "sheet", this.freeze = [0, 0], this.styles = [], this.merges = new A, this.rows = new M(this.settings.row), this.cols = new F(this.settings.col), this.validations = new et, this.hyperlinks = {}, this.comments = {}, this.selector = new g, this.scroll = new m, this.history = new k, this.clipboard = new S, this.autoFilter = new T, this.change = function () {
            }, this.exceptRowSet = new Set, this.sortedRowMap = new Map, this.unsortedRowMap = new Map
        }

        var e, n, r;
        return e = t, (n = [{
            key: "addValidation", value: function (t, e, n) {
                var r = this;
                this.changeData(function () {
                    r.validations.add(t, e, n)
                })
            }
        }, {
            key: "removeValidation", value: function () {
                var t = this, e = this.selector.range;
                this.changeData(function () {
                    t.validations.remove(e)
                })
            }
        }, {
            key: "getSelectedValidator", value: function () {
                var t = this.selector, e = t.ri, n = t.ci, r = this.validations.get(e, n);
                return r ? r.validator : null
            }
        }, {
            key: "getSelectedValidation", value: function () {
                var t = this.selector, e = t.ri, n = t.ci, r = t.range, i = this.validations.get(e, n),
                    o = {ref: r.toString()};
                return null !== i && (o.mode = i.mode, o.validator = i.validator), o
            }
        }, {
            key: "canUndo", value: function () {
                return this.history.canUndo()
            }
        }, {
            key: "canRedo", value: function () {
                return this.history.canRedo()
            }
        }, {
            key: "undo", value: function () {
                var t = this;
                this.history.undo(this.getData(), function (e) {
                    t.setData(e)
                })
            }
        }, {
            key: "redo", value: function () {
                var t = this;
                this.history.redo(this.getData(), function (e) {
                    t.setData(e)
                })
            }
        }, {
            key: "copy", value: function () {
                this.clipboard.copy(this.selector.range)
            }
        }, {
            key: "cut", value: function () {
                this.clipboard.cut(this.selector.range)
            }
        }, {
            key: "paste", value: function () {
                var t = this, e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "all",
                    n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : function () {
                    }, r = this.clipboard, i = this.selector;
                return !r.isClear() && (!!at.call(this, r.range, i.range, n) && (this.changeData(function () {
                    r.isCopy() ? lt.call(t, r.range, i.range, e) : r.isCut() && ct.call(t, r.range, i.range)
                }), !0))
            }
        }, {
            key: "autofill", value: function (t, e) {
                var n = this, r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : function () {
                }, i = this.selector.range;
                return !!at.call(this, i, t, r) && (this.changeData(function () {
                    lt.call(n, i, t, e, !0)
                }), !0)
            }
        }, {
            key: "clearClipboard", value: function () {
                this.clipboard.clear()
            }
        }, {
            key: "calSelectedRangeByEnd", value: function (t, e) {
                var n = this.selector, r = this.rows, i = this.cols, o = this.merges, a = n.range, l = a.sri, c = a.sci,
                    u = a.eri, s = a.eci, f = n.ri, h = n.ci, y = t, p = e;
                return t < 0 && (y = r.len - 1), e < 0 && (p = i.len - 1), y > f ? (l = f, u = y) : (l = y, u = f), p > h ? (c = h, s = p) : (c = p, s = h), n.range = o.union(new d(l, c, u, s)), n.range = o.union(n.range), n.range
            }
        }, {
            key: "calSelectedRangeByStart", value: function (t, e) {
                var n = this.selector, r = this.rows, i = this.cols, o = this.merges.getFirstIncludes(t, e);
                return null === o && (o = new d(t, e, t, e), -1 === t && (o.sri = 0, o.eri = r.len - 1), -1 === e && (o.sci = 0, o.eci = i.len - 1)), n.range = o, o
            }
        }, {
            key: "setSelectedCellAttr", value: function (t, e) {
                var n = this;
                this.changeData(function () {
                    var r = n.selector, i = n.styles, o = n.rows;
                    if ("merge" === t) e ? n.merge() : n.unmerge(); else if ("border" === t) (function (t) {
                        var e = this, n = t.mode, r = t.style, i = t.color, o = this.styles, a = this.selector,
                            l = this.rows, c = a.range, u = c.sri, s = c.sci, f = c.eri, h = c.eci,
                            y = !this.isSignleSelected();
                        if (y || "inside" !== n && "horizontal" !== n && "vertical" !== n) if ("outside" !== n || y) {
                            if ("none" === n) a.range.each(function (t, n) {
                                var r = l.getCell(t, n);
                                if (r && void 0 !== r.style) {
                                    var i = D.cloneDeep(o[r.style]);
                                    delete i.border, r.style = e.addStyle(i)
                                }
                            }); else if ("all" === n || "inside" === n || "outside" === n || "horizontal" === n || "vertical" === n) !function () {
                                for (var t = [], o = u; o <= f; o += 1) for (var a = s; a <= h; a += 1) {
                                    for (var c = [], p = 0; p < t.length; p += 1) {
                                        var v = it(t[p], 4), d = v[0], b = v[1], g = v[2], m = v[3];
                                        if (o === d + g + 1 && c.push(p), d <= o && o <= d + g && a === b) {
                                            a += m + 1;
                                            break
                                        }
                                    }
                                    if (c.forEach(function (e) {
                                        return t.splice(e, 1)
                                    }), a > h) break;
                                    var w = l.getCell(o, a), k = 0, O = 0;
                                    if (w && w.merge) {
                                        var S = it(w.merge, 2);
                                        k = S[0], O = S[1], t.push([o, a, k, O])
                                    }
                                    var x = k > 0 && o + k === f, E = O > 0 && a + O === h, j = {};
                                    "all" === n ? j = {
                                        bottom: [r, i],
                                        top: [r, i],
                                        left: [r, i],
                                        right: [r, i]
                                    } : "inside" === n ? (!E && a < h && (j.right = [r, i]), !x && o < f && (j.bottom = [r, i])) : "horizontal" === n ? !x && o < f && (j.bottom = [r, i]) : "vertical" === n ? !E && a < h && (j.right = [r, i]) : "outside" === n && y && (u === o && (j.top = [r, i]), (x || f === o) && (j.bottom = [r, i]), s === a && (j.left = [r, i]), (E || h === a) && (j.right = [r, i])), Object.keys(j).length > 0 && ut.call(e, o, a, j), a += O
                                }
                            }(); else if ("top" === n || "bottom" === n) for (var p = s; p <= h; p += 1) "top" === n && (ut.call(this, u, p, {top: [r, i]}), p += l.getCellMerge(u, p)[1]), "bottom" === n && (ut.call(this, f, p, {bottom: [r, i]}), p += l.getCellMerge(f, p)[1]); else if ("left" === n || "right" === n) for (var v = u; v <= f; v += 1) "left" === n && (ut.call(this, v, s, {left: [r, i]}), v += l.getCellMerge(v, s)[0]), "right" === n && (ut.call(this, v, h, {right: [r, i]}), v += l.getCellMerge(v, h)[0])
                        } else ut.call(this, u, s, {top: [r, i], bottom: [r, i], left: [r, i], right: [r, i]})
                    }).call(n, e); else if ("formula" === t) {
                        var a = r.ri, l = r.ci, c = r.range;
                        if (r.multiple()) {
                            var u = it(r.size(), 2), s = u[0], f = u[1], y = c.sri, p = c.sci, v = c.eri, d = c.eci;
                            if (s > 1) for (var b = p; b <= d; b += 1) {
                                o.getCellOrNew(v + 1, b).text = "=".concat(e, "(").concat(h(b, y), ":").concat(h(b, v), ")")
                            } else if (f > 1) {
                                o.getCellOrNew(a, d + 1).text = "=".concat(e, "(").concat(h(p, a), ":").concat(h(d, a), ")")
                            }
                        } else {
                            o.getCellOrNew(a, l).text = "=".concat(e, "()")
                        }
                    } else r.range.each(function (r, a) {
                        var l = o.getCellOrNew(r, a), c = {};
                        if (void 0 !== l.style && (c = D.cloneDeep(i[l.style])), "format" === t) c.format = e, l.style = n.addStyle(c); else if ("font-bold" === t || "font-italic" === t || "font-name" === t || "font-size" === t) {
                            var u = {};
                            u[t.split("-")[1]] = e, c.font = Object.assign(c.font || {}, u), l.style = n.addStyle(c)
                        } else "strike" !== t && "textwrap" !== t && "underline" !== t && "align" !== t && "valign" !== t && "color" !== t && "bgcolor" !== t || (c[t] = e, l.style = n.addStyle(c))
                    })
                })
            }
        }, {
            key: "setSelectedCellText", value: function (t) {
                var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "input", n = this.autoFilter,
                    r = this.selector, i = this.rows, o = r.ri, a = r.ci, l = o;
                this.unsortedRowMap.has(o) && (l = this.unsortedRowMap.get(o));
                var c = i.getCell(l, a), u = c ? c.text : "";
                if (this.setCellText(l, a, t, e), n.active()) {
                    var s = n.getFilter(a);
                    if (s) {
                        var f = s.value.findIndex(function (t) {
                            return t === u
                        });
                        f >= 0 && s.value.splice(f, 1, t)
                    }
                }
            }
        }, {
            key: "getSelectedCell", value: function () {
                var t = this.selector, e = t.ri, n = t.ci, r = e;
                return this.unsortedRowMap.has(e) && (r = this.unsortedRowMap.get(e)), this.rows.getCell(r, n)
            }
        }, {
            key: "xyInSelectedRect", value: function (t, e) {
                var n = this.getSelectedRect(), r = n.left, i = n.top, o = n.width, a = n.height,
                    l = t - this.cols.indexWidth, c = e - this.rows.height;
                return l > r && l < r + o && c > i && c < i + a
            }
        }, {
            key: "getSelectedRect", value: function () {
                return this.getRect(this.selector.range)
            }
        }, {
            key: "getClipboardRect", value: function () {
                var t = this.clipboard;
                return t.isClear() ? {left: -100, top: -100} : this.getRect(t.range)
            }
        }, {
            key: "getRect", value: function (t) {
                var e = this.scroll, n = this.rows, r = this.cols, i = this.exceptRowSet, o = t.sri, a = t.sci,
                    l = t.eri, c = t.eci;
                if (o < 0 && a < 0) return {left: 0, l: 0, top: 0, t: 0, scroll: e};
                var u = r.sumWidth(0, a), s = n.sumHeight(0, o, i), f = n.sumHeight(o, l + 1, i),
                    h = r.sumWidth(a, c + 1), y = u - e.x, p = s - e.y, v = this.freezeTotalHeight(),
                    d = this.freezeTotalWidth();
                return d > 0 && d > u && (y = u), v > 0 && v > s && (p = s), {
                    l: u,
                    t: s,
                    left: y,
                    top: p,
                    height: f,
                    width: h,
                    scroll: e
                }
            }
        }, {
            key: "getCellRectByXY", value: function (t, e) {
                var n = this.scroll, r = this.merges, i = this.rows, o = this.cols, a = function (t, e) {
                    var n = this.rows, r = this.freezeTotalHeight(), i = n.height;
                    r + n.height < t && (i -= e);
                    for (var o = this.exceptRowSet, a = 0, l = i, c = n.height; a < n.len && !(l > t); a += 1) o.has(a) || (l += c = n.getHeight(a));
                    return (l -= c) <= 0 ? {ri: -1, top: 0, height: c} : {ri: a - 1, top: l, height: c}
                }.call(this, e, n.y), l = a.ri, c = a.top, u = a.height, s = function (t, e) {
                    var n = this.cols, r = this.freezeTotalWidth(), i = n.indexWidth;
                    r + n.indexWidth < t && (i -= e);
                    var o = it(D.rangeReduceIf(0, n.len, i, n.indexWidth, t, function (t) {
                        return n.getWidth(t)
                    }), 3), a = o[0], l = o[1], c = o[2];
                    return l <= 0 ? {ci: -1, left: 0, width: n.indexWidth} : {ci: a - 1, left: l, width: c}
                }.call(this, t, n.x), f = s.ci, h = s.left, y = s.width;
                if (-1 === f && (y = o.totalWidth()), -1 === l && (u = i.totalHeight()), l >= 0 || f >= 0) {
                    var p = r.getFirstIncludes(l, f);
                    if (p) {
                        l = p.sri, f = p.sci;
                        var v = this.cellRect(l, f);
                        h = v.left, c = v.top, y = v.width, u = v.height
                    }
                }
                return {ri: l, ci: f, left: h, top: c, width: y, height: u}
            }
        }, {
            key: "isSignleSelected", value: function () {
                var t = this.selector.range, e = t.sri, n = t.sci, r = t.eri, i = t.eci, o = this.getCell(e, n);
                if (o && o.merge) {
                    var a = it(o.merge, 2), l = a[0], c = a[1];
                    if (e + l === r && n + c === i) return !0
                }
                return !this.selector.multiple()
            }
        }, {
            key: "canUnmerge", value: function () {
                var t = this.selector.range, e = t.sri, n = t.sci, r = t.eri, i = t.eci, o = this.getCell(e, n);
                if (o && o.merge) {
                    var a = it(o.merge, 2), l = a[0], c = a[1];
                    if (e + l === r && n + c === i) return !0
                }
                return !1
            }
        }, {
            key: "merge", value: function () {
                var t = this, e = this.selector, n = this.rows;
                if (!this.isSignleSelected()) {
                    var r = it(e.size(), 2), i = r[0], o = r[1];
                    if (i > 1 || o > 1) {
                        var a = e.range, l = a.sri, c = a.sci;
                        this.changeData(function () {
                            var r = n.getCellOrNew(l, c);
                            r.merge = [i - 1, o - 1], t.merges.add(e.range), t.rows.deleteCells(e.range), t.rows.setCell(l, c, r)
                        })
                    }
                }
            }
        }, {
            key: "unmerge", value: function () {
                var t = this, e = this.selector;
                if (this.isSignleSelected()) {
                    var n = e.range, r = n.sri, i = n.sci;
                    this.changeData(function () {
                        t.rows.deleteCell(r, i, "merge"), t.merges.deleteWithin(e.range)
                    })
                }
            }
        }, {
            key: "canAutofilter", value: function () {
                return !this.autoFilter.active()
            }
        }, {
            key: "autofilter", value: function () {
                var t = this, e = this.autoFilter, n = this.selector;
                this.changeData(function () {
                    e.active() ? (e.clear(), t.exceptRowSet = new Set, t.sortedRowMap = new Map, t.unsortedRowMap = new Map) : e.ref = n.range.toString()
                })
            }
        }, {
            key: "setAutoFilter", value: function (t, e, n, r) {
                var i = this.autoFilter;
                i.addFilter(t, n, r), i.setSort(t, e), this.resetAutoFilter()
            }
        }, {
            key: "resetAutoFilter", value: function () {
                var t = this, e = this.autoFilter, n = this.rows;
                if (e.active()) {
                    var r = e.sort, i = e.filteredRows(function (t, e) {
                        return n.getCell(t, e)
                    }), o = i.rset, a = i.fset, l = Array.from(a), c = Array.from(a);
                    r && l.sort(function (t, e) {
                        return "asc" === r.order ? t - e : "desc" === r.order ? e - t : 0
                    }), this.exceptRowSet = o, this.sortedRowMap = new Map, this.unsortedRowMap = new Map, l.forEach(function (e, n) {
                        t.sortedRowMap.set(c[n], e), t.unsortedRowMap.set(e, c[n])
                    })
                }
            }
        }, {
            key: "deleteCell", value: function () {
                var t = this, e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "all",
                    n = this.selector;
                this.changeData(function () {
                    t.rows.deleteCells(n.range, e), "all" !== e && "format" !== e || t.merges.deleteWithin(n.range)
                })
            }
        }, {
            key: "insert", value: function (t) {
                var e = this, n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
                this.changeData(function () {
                    var r = e.selector.range, i = r.sri, o = r.sci, a = e.rows, l = e.merges, c = e.cols, u = i;
                    "row" === t ? a.insert(i, n) : "column" === t && (a.insertColumn(o, n), u = o, c.len += 1), l.shift(t, u, n, function (t, e, n, r) {
                        var i = a.getCell(t, e);
                        i.merge[0] += n, i.merge[1] += r
                    })
                })
            }
        }, {
            key: "delete", value: function (t) {
                var e = this;
                this.changeData(function () {
                    var n = e.rows, r = e.merges, i = e.selector, o = e.cols, a = i.range, l = i.range, c = l.sri,
                        u = l.sci, s = l.eri, f = l.eci, h = it(i.range.size(), 2), y = h[0], p = h[1], v = c, d = y;
                    "row" === t ? n.delete(c, s) : "column" === t && (n.deleteColumn(u, f), v = a.sci, d = p, o.len -= 1), r.shift(t, v, -d, function (t, e, r, i) {
                        var o = n.getCell(t, e);
                        o.merge[0] += r, o.merge[1] += i, 0 === o.merge[0] && 0 === o.merge[1] && delete o.merge
                    })
                })
            }
        }, {
            key: "scrollx", value: function (t, e) {
                var n = this.scroll, r = this.freeze, i = this.cols, o = it(r, 2)[1],
                    a = it(D.rangeReduceIf(o, i.len, 0, 0, t, function (t) {
                        return i.getWidth(t)
                    }), 3), l = a[0], c = a[1], u = a[2], s = c;
                t > 0 && (s += u), n.x !== s && (n.ci = t > 0 ? l : 0, n.x = s, e())
            }
        }, {
            key: "scrolly", value: function (t, e) {
                var n = this.scroll, r = this.freeze, i = this.rows, o = it(r, 1)[0],
                    a = it(D.rangeReduceIf(o, i.len, 0, 0, t, function (t) {
                        return i.getHeight(t)
                    }), 3), l = a[0], c = a[1], u = a[2], s = c;
                t > 0 && (s += u), n.y !== s && (n.ri = t > 0 ? l : 0, n.y = s, e())
            }
        }, {
            key: "cellRect", value: function (t, e) {
                var n = this.rows, r = this.cols, i = r.sumWidth(0, e), o = n.sumHeight(0, t), a = n.getCell(t, e),
                    l = r.getWidth(e), c = n.getHeight(t);
                if (null !== a && a.merge) {
                    var u = it(a.merge, 2), s = u[0], f = u[1];
                    if (s > 0) for (var h = 1; h <= s; h += 1) c += n.getHeight(t + h);
                    if (f > 0) for (var y = 1; y <= f; y += 1) l += r.getWidth(e + y)
                }
                return {left: i, top: o, width: l, height: c, cell: a}
            }
        }, {
            key: "getCell", value: function (t, e) {
                return this.rows.getCell(t, e)
            }
        }, {
            key: "getCellTextOrDefault", value: function (t, e) {
                var n = this.getCell(t, e);
                return n && n.text ? n.text : ""
            }
        }, {
            key: "getCellStyle", value: function (t, e) {
                var n = this.getCell(t, e);
                return n && void 0 !== n.style ? this.styles[n.style] : null
            }
        }, {
            key: "getCellStyleOrDefault", value: function (t, e) {
                var n = this.styles, r = this.rows.getCell(t, e), i = r && void 0 !== r.style ? n[r.style] : {};
                return D.merge(this.defaultStyle(), i)
            }
        }, {
            key: "getSelectedCellStyle", value: function () {
                var t = this.selector, e = t.ri, n = t.ci;
                return this.getCellStyleOrDefault(e, n)
            }
        }, {
            key: "setCellText", value: function (t, e, n, r) {
                var i = this.rows, o = this.history, a = this.validations;
                "finished" === r ? (i.setCellText(t, e, ""), o.add(this.getData()), i.setCellText(t, e, n)) : (i.setCellText(t, e, n), this.change(this.getData())), a.validate(t, e, n)
            }
        }, {
            key: "freezeIsActive", value: function () {
                var t = it(this.freeze, 2), e = t[0], n = t[1];
                return e > 0 || n > 0
            }
        }, {
            key: "setFreeze", value: function (t, e) {
                var n = this;
                this.changeData(function () {
                    n.freeze = [t, e]
                })
            }
        }, {
            key: "freezeTotalWidth", value: function () {
                return this.cols.sumWidth(0, this.freeze[1])
            }
        }, {
            key: "freezeTotalHeight", value: function () {
                return this.rows.sumHeight(0, this.freeze[0])
            }
        }, {
            key: "setRowHeight", value: function (t, e) {
                var n = this;
                this.changeData(function () {
                    n.rows.setHeight(t, e)
                })
            }
        }, {
            key: "setColWidth", value: function (t, e) {
                var n = this;
                this.changeData(function () {
                    n.cols.setWidth(t, e)
                })
            }
        }, {
            key: "viewHeight", value: function () {
                var t = this.settings, e = t.view, n = t.showToolbar, r = e.height();
                return n && (r -= 41), r
            }
        }, {
            key: "viewWidth", value: function () {
                return this.settings.view.width()
            }
        }, {
            key: "freezeViewRange", value: function () {
                var t = it(this.freeze, 2), e = t[0], n = t[1];
                return new d(0, 0, e - 1, n - 1, this.freezeTotalWidth(), this.freezeTotalHeight())
            }
        }, {
            key: "exceptRowTotalHeight", value: function (t, e) {
                var n = this.exceptRowSet, r = this.rows, i = Array.from(n), o = 0;
                return i.forEach(function (n) {
                    if (n < t || n > e) {
                        var i = r.getHeight(n);
                        o += i
                    }
                }), o
            }
        }, {
            key: "viewRange", value: function () {
                var t = this.scroll, e = this.rows, n = this.cols, r = this.freeze, i = this.exceptRowSet, o = t.ri,
                    a = t.ci;
                o <= 0 && (o = it(r, 1)[0]);
                a <= 0 && (a = it(r, 2)[1]);
                for (var l = 0, c = 0, u = [e.len, n.len], s = u[0], f = u[1], h = o; h < e.len && (i.has(h) || (c += e.getHeight(h), s = h), !(c > this.viewHeight())); h += 1) ;
                for (var y = a; y < n.len && (f = y, !((l += n.getWidth(y)) > this.viewWidth())); y += 1) ;
                return new d(o, a, s, f, l, c)
            }
        }, {
            key: "eachMergesInView", value: function (t, e) {
                this.merges.filterIntersects(t).forEach(function (t) {
                    return e(t)
                })
            }
        }, {
            key: "rowEach", value: function (t, e, n) {
                for (var r = 0, i = this.rows, o = this.exceptRowSet, a = nt(o), l = 0, c = 0; c < a.length; c += 1) a[c] < t && (l += 1);
                for (var u = t + l; u <= e + l; u += 1) if (o.has(u)) l += 1; else {
                    var s = i.getHeight(u);
                    if (n(u, r, s), (r += s) > this.viewHeight()) break
                }
            }
        }, {
            key: "colEach", value: function (t, e, n) {
                for (var r = 0, i = this.cols, o = t; o <= e; o += 1) {
                    var a = i.getWidth(o);
                    if (n(o, r, a), (r += a) > this.viewWidth()) break
                }
            }
        }, {
            key: "defaultStyle", value: function () {
                return this.settings.style
            }
        }, {
            key: "addStyle", value: function (t) {
                for (var e = this.styles, n = 0; n < e.length; n += 1) {
                    var r = e[n];
                    if (D.equals(r, t)) return n
                }
                return e.push(t), e.length - 1
            }
        }, {
            key: "changeData", value: function (t) {
                this.history.add(this.getData()), t(), this.change(this.getData())
            }
        }, {
            key: "setData", value: function (t) {
                var e = this;
                return Object.keys(t).forEach(function (n) {
                    if ("merges" === n || "rows" === n || "cols" === n || "validations" === n) e[n].setData(t[n]); else if ("freeze" === n) {
                        var r = it(f(t[n]), 2), i = r[0], o = r[1];
                        e.freeze = [o, i]
                    } else void 0 !== t[n] && (e[n] = t[n])
                }), this
            }
        }, {
            key: "getData", value: function () {
                var t = this.name, e = this.freeze, n = this.styles, r = this.merges, i = this.rows, o = this.cols,
                    a = this.validations, l = this.autoFilter;
                return {
                    name: t,
                    freeze: h(e[1], e[0]),
                    styles: n,
                    merges: r.getData(),
                    rows: i.getData(),
                    cols: o.getData(),
                    validations: a.getData(),
                    autofilter: l.getData()
                }
            }
        }]) && rt(e.prototype, n), r && rt(e, r), t
    }();

    function ft(t, e, n) {
        t.addEventListener(e, n)
    }

    function ht(t, e, n) {
        t.removeEventListener(e, n)
    }

    function yt(t) {
        t.xclickoutside && (ht(window.document.body, "click", t.xclickoutside), delete t.xclickoutside)
    }

    function pt(t, e) {
        t.xclickoutside = function (n) {
            2 === n.detail || t.contains(n.target) || (e ? e(t) : (t.hide(), yt(t)))
        }, ft(window.document.body, "click", t.xclickoutside)
    }

    function vt(t, e, n) {
        ft(t, "mousemove", e), t.xEvtUp = function (r) {
            ht(t, "mousemove", e), ht(t, "mouseup", t.xEvtUp), n(r)
        }, ft(t, "mouseup", t.xEvtUp)
    }

    function dt(t, e, n, r) {
        Math.abs(t) > Math.abs(e) ? r(t > 0 ? "right" : "left", t, n) : r(e > 0 ? "down" : "up", e, n)
    }

    var bt = "x-spreadsheet";
    window.devicePixelRatio;

    function gt(t, e) {
        for (var n = 0; n < e.length; n++) {
            var r = e[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
        }
    }

    var mt = function () {
        function t() {
            var e = this, n = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                r = arguments.length > 1 ? arguments[1] : void 0;
            !function (t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }(this, t), this.moving = !1, this.vertical = n, this.el = a("div", "".concat(bt, "-resizer ").concat(n ? "vertical" : "horizontal")).children(this.hoverEl = a("div", "".concat(bt, "-resizer-hover")).on("mousedown.stop", function (t) {
                return e.mousedownHandler(t)
            }), this.lineEl = a("div", "".concat(bt, "-resizer-line")).hide()).hide(), this.cRect = null, this.finishedFn = null, this.minDistance = r
        }

        var e, n, r;
        return e = t, (n = [{
            key: "show", value: function (t, e) {
                var n = this.moving, r = this.vertical, i = this.hoverEl, o = this.lineEl, a = this.el;
                if (!n) {
                    this.cRect = t;
                    var l = t.left, c = t.top, u = t.width, s = t.height;
                    a.offset({left: r ? l + u - 5 : l, top: r ? c : c + s - 5}).show(), i.offset({
                        width: r ? 5 : u,
                        height: r ? s : 5
                    }), o.offset({width: r ? 0 : e.width, height: r ? e.height : 0})
                }
            }
        }, {
            key: "hide", value: function () {
                this.el.offset({left: 0, top: 0}).hide()
            }
        }, {
            key: "mousedownHandler", value: function (t) {
                var e = this, n = t, r = this.el, i = this.lineEl, o = this.cRect, a = this.vertical,
                    l = this.minDistance, c = a ? o.width : o.height;
                i.show(), vt(window, function (t) {
                    e.moving = !0, null !== n && 1 === t.buttons && (a ? (c += t.movementX) > l && r.css("left", "".concat(o.left + c, "px")) : (c += t.movementY) > l && r.css("top", "".concat(o.top + c, "px")), n = t)
                }, function () {
                    n = null, i.hide(), e.moving = !1, e.hide(), e.finishedFn && (c < l && (c = l), e.finishedFn(o, c))
                })
            }
        }]) && gt(e.prototype, n), r && gt(e, r), t
    }();

    function wt(t, e) {
        for (var n = 0; n < e.length; n++) {
            var r = e[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
        }
    }

    var kt = function () {
        function t(e) {
            var n = this;
            !function (t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }(this, t), this.vertical = e, this.moveFn = null, this.el = a("div", "".concat(bt, "-scrollbar ").concat(e ? "vertical" : "horizontal")).child(this.contentEl = a("div", "")).on("mousemove.stop", function () {
            }).on("scroll.stop", function (t) {
                var e = t.target, r = e.scrollTop, i = e.scrollLeft;
                n.moveFn && n.moveFn(n.vertical ? r : i, t)
            })
        }

        var e, n, r;
        return e = t, (n = [{
            key: "move", value: function (t) {
                return this.el.scroll(t), this
            }
        }, {
            key: "scroll", value: function () {
                return this.el.scroll()
            }
        }, {
            key: "set", value: function (t, e) {
                var n = t - 1;
                if (e > n) {
                    var r = this.vertical ? "height" : "width";
                    this.el.css(r, "".concat(n - 15, "px")).show(), this.contentEl.css(this.vertical ? "width" : "height", "1px").css(r, "".concat(e, "px"))
                } else this.el.hide();
                return this
            }
        }]) && wt(e.prototype, n), r && wt(e, r), t
    }();

    function Ot(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }

    function St(t, e) {
        for (var n = 0; n < e.length; n++) {
            var r = e[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
        }
    }

    function xt(t, e, n) {
        return e && St(t.prototype, e), n && St(t, n), t
    }

    var Et = 10, jt = function () {
        function t() {
            Ot(this, t), this.cornerEl = a("div", "".concat(bt, "-selector-corner")), this.areaEl = a("div", "".concat(bt, "-selector-area")).child(this.cornerEl).hide(), this.clipboardEl = a("div", "".concat(bt, "-selector-clipboard")).hide(), this.autofillEl = a("div", "".concat(bt, "-selector-autofill")).hide(), this.el = a("div", "".concat(bt, "-selector")).css("z-index", "".concat(Et)).children(this.areaEl, this.clipboardEl, this.autofillEl).hide(), Et += 1
        }

        return xt(t, [{
            key: "setOffset", value: function (t) {
                return this.el.offset(t).show(), this
            }
        }, {
            key: "hide", value: function () {
                return this.el.hide(), this
            }
        }, {
            key: "setAreaOffset", value: function (t) {
                var e = t.left, n = t.top, r = t.width, i = t.height;
                this.areaEl.offset({width: r - 3 + .8, height: i - 3 + .8, left: e - .8, top: n - .8}).show()
            }
        }, {
            key: "setClipboardOffset", value: function (t) {
                var e = t.left, n = t.top, r = t.width, i = t.height;
                this.clipboardEl.offset({left: e, top: n, width: r - 5, height: i - 5})
            }
        }, {
            key: "showAutofill", value: function (t) {
                var e = t.left, n = t.top, r = t.width, i = t.height;
                this.autofillEl.offset({width: r - 3, height: i - 3, left: e, top: n}).show()
            }
        }, {
            key: "hideAutofill", value: function () {
                this.autofillEl.hide()
            }
        }, {
            key: "showClipboard", value: function () {
                this.clipboardEl.show()
            }
        }, {
            key: "hideClipboard", value: function () {
                this.clipboardEl.hide()
            }
        }]), t
    }();

    function _t(t) {
        var e = this.data, n = t.left, r = t.top, i = t.width, o = t.height, a = t.scroll, l = t.l, c = t.t,
            u = e.freezeTotalWidth(), s = e.freezeTotalHeight(), f = n - u;
        u > l && (f -= a.x);
        var h = r - s;
        return s > c && (h -= a.y), {left: f, top: h, width: i, height: o}
    }

    function Ct(t) {
        var e = this.data, n = t.left, r = t.width, i = t.height, o = t.l, a = t.t, l = t.scroll,
            c = e.freezeTotalWidth(), u = n - c;
        return c > o && (u -= l.x), {left: u, top: a, width: r, height: i}
    }

    function Tt(t) {
        var e = this.data, n = t.top, r = t.width, i = t.height, o = t.l, a = t.t, l = t.scroll,
            c = e.freezeTotalHeight(), u = n - c;
        return c > a && (u -= l.y), {left: o, top: u, width: r, height: i}
    }

    function Pt(t) {
        this.br.setAreaOffset(_t.call(this, t))
    }

    function At(t) {
        this.t.setAreaOffset(Ct.call(this, t))
    }

    function Rt(t) {
        this.l.setAreaOffset(Tt.call(this, t))
    }

    function Dt(t) {
        this.l.setClipboardOffset(Tt.call(this, t))
    }

    function zt(t) {
        this.br.setClipboardOffset(_t.call(this, t))
    }

    function It(t) {
        this.t.setClipboardOffset(Ct.call(this, t))
    }

    function Mt(t) {
        Pt.call(this, t), function (t) {
            this.tl.setAreaOffset(t)
        }.call(this, t), At.call(this, t), Rt.call(this, t)
    }

    function Wt(t) {
        zt.call(this, t), function (t) {
            this.tl.setClipboardOffset(t)
        }.call(this, t), It.call(this, t), Dt.call(this, t)
    }

    var Ft = function () {
        function t(e) {
            Ot(this, t), this.data = e, this.br = new jt, this.t = new jt, this.l = new jt, this.tl = new jt, this.br.el.show(), this.offset = null, this.areaOffset = null, this.indexes = null, this.range = null, this.arange = null, this.el = a("div", "".concat(bt, "-selectors")).children(this.tl.el, this.t.el, this.l.el, this.br.el).hide(), this.lastri = -1, this.lastci = -1, Et += 1
        }

        return xt(t, [{
            key: "hide", value: function () {
                this.el.hide()
            }
        }, {
            key: "resetOffset", value: function () {
                var t = this.data, e = this.tl, n = this.t, r = this.l, i = this.br, o = t.freezeTotalHeight(),
                    a = t.freezeTotalWidth();
                o > 0 || a > 0 ? (e.setOffset({width: a, height: o}), n.setOffset({
                    left: a,
                    height: o
                }), r.setOffset({top: o, width: a}), i.setOffset({
                    left: a,
                    top: o
                })) : (e.hide(), n.hide(), r.hide(), i.setOffset({left: 0, top: 0}))
            }
        }, {
            key: "resetAreaOffset", value: function () {
                var t = this.data.getSelectedRect(), e = this.data.getClipboardRect();
                Mt.call(this, t), Wt.call(this, e), this.resetOffset()
            }
        }, {
            key: "resetBRTAreaOffset", value: function () {
                var t = this.data.getSelectedRect(), e = this.data.getClipboardRect();
                Pt.call(this, t), At.call(this, t), zt.call(this, e), It.call(this, e), this.resetOffset()
            }
        }, {
            key: "resetBRLAreaOffset", value: function () {
                var t = this.data.getSelectedRect(), e = this.data.getClipboardRect();
                Pt.call(this, t), Rt.call(this, t), zt.call(this, e), Dt.call(this, e), this.resetOffset()
            }
        }, {
            key: "set", value: function (t, e) {
                var n = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2], r = this.data,
                    i = r.calSelectedRangeByStart(t, e), o = i.sri, a = i.sci;
                if (n) {
                    var l = t, c = e;
                    t < 0 && (l = 0), e < 0 && (c = 0), r.selector.setIndexes(l, c), this.indexes = [l, c]
                }
                this.moveIndexes = [o, a], this.range = i, this.resetAreaOffset(), this.el.show()
            }
        }, {
            key: "setEnd", value: function (t, e) {
                var n = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2], r = this.data,
                    i = this.lastri, o = this.lastci;
                if (n) {
                    if (t === i && e === o) return;
                    this.lastri = t, this.lastci = e
                }
                this.range = r.calSelectedRangeByEnd(t, e), Mt.call(this, this.data.getSelectedRect())
            }
        }, {
            key: "reset", value: function () {
                var t = this.data.selector.range, e = t.eri, n = t.eci;
                this.setEnd(e, n)
            }
        }, {
            key: "showAutofill", value: function (t, e) {
                if (-1 !== t || -1 !== e) {
                    var n = this.range, r = n.sri, i = n.sci, o = n.eri, a = n.eci, l = t, c = e, u = r - t, s = o - t,
                        f = a - e;
                    if (i - e > 0) this.arange = new d(r, c, o, i - 1); else if (u > 0) this.arange = new d(l, i, r - 1, a); else if (f < 0) this.arange = new d(r, a + 1, o, c); else {
                        if (!(s < 0)) return void (this.arange = null);
                        this.arange = new d(o + 1, i, l, a)
                    }
                    if (null !== this.arange) {
                        var h = this.data.getRect(this.arange);
                        h.width += 2, h.height += 2;
                        var y = this.br, p = this.l, v = this.t, b = this.tl;
                        y.showAutofill(_t.call(this, h)), p.showAutofill(Tt.call(this, h)), v.showAutofill(Ct.call(this, h)), b.showAutofill(h)
                    }
                }
            }
        }, {
            key: "hideAutofill", value: function () {
                var t = this;
                ["br", "l", "t", "tl"].forEach(function (e) {
                    t[e].hideAutofill()
                })
            }
        }, {
            key: "showClipboard", value: function () {
                var t = this, e = this.data.getClipboardRect();
                Wt.call(this, e), ["br", "l", "t", "tl"].forEach(function (e) {
                    t[e].showClipboard()
                })
            }
        }, {
            key: "hideClipboard", value: function () {
                var t = this;
                ["br", "l", "t", "tl"].forEach(function (e) {
                    t[e].hideClipboard()
                })
            }
        }]), t
    }();

    function Nt(t) {
        return function (t) {
            if (Array.isArray(t)) {
                for (var e = 0, n = new Array(t.length); e < t.length; e++) n[e] = t[e];
                return n
            }
        }(t) || function (t) {
            if (Symbol.iterator in Object(t) || "[object Arguments]" === Object.prototype.toString.call(t)) return Array.from(t)
        }(t) || function () {
            throw new TypeError("Invalid attempt to spread non-iterable instance")
        }()
    }

    function Ht(t, e) {
        for (var n = 0; n < e.length; n++) {
            var r = e[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
        }
    }

    function Vt(t) {
        t.preventDefault();
        var e = this.filterItems;
        e.length <= 0 || (t.stopPropagation(), this.itemIndex < 0 && (this.itemIndex = 0), e[this.itemIndex].el.click(), this.hide())
    }

    var qt = function () {
        function t(e, n) {
            var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "200px";
            !function (t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }(this, t), this.filterItems = [], this.items = e, this.el = a("div", "".concat(bt, "-suggest")).css("width", r).hide(), this.itemClick = n, this.itemIndex = -1
        }

        var e, n, r;
        return e = t, (n = [{
            key: "setOffset", value: function (t) {
                this.el.cssRemoveKeys("top", "bottom").offset(t)
            }
        }, {
            key: "hide", value: function () {
                var t = this.el;
                this.filterItems = [], this.itemIndex = -1, t.hide(), yt(this.el.parent())
            }
        }, {
            key: "setItems", value: function (t) {
                this.items = t
            }
        }, {
            key: "search", value: function (t) {
                var e, n = this, r = this.items;
                if (/^\s*$/.test(t) || (r = r.filter(function (e) {
                    return (e.key || e).startsWith(t.toUpperCase())
                })), r = r.map(function (t) {
                    var e = t.title;
                    e ? "function" == typeof e && (e = e()) : e = t;
                    var r = a("div", "".concat(bt, "-item")).child(e).on("click.stop", function () {
                        n.itemClick(t), n.hide()
                    });
                    return t.label && r.child(a("div", "label").html(t.label)), r
                }), this.filterItems = r, !(r.length <= 0)) {
                    var i = this.el;
                    (e = i.html("")).children.apply(e, Nt(r)).show(), pt(i.parent(), function () {
                        n.hide()
                    })
                }
            }
        }, {
            key: "bindInputEvents", value: function (t) {
                var e = this;
                t.on("keydown", function (t) {
                    return function (t) {
                        var e = t.keyCode;
                        switch (t.ctrlKey && t.stopPropagation(), e) {
                            case 37:
                                t.stopPropagation();
                                break;
                            case 38:
                                (function (t) {
                                    t.preventDefault(), t.stopPropagation();
                                    var e = this.filterItems;
                                    e.length <= 0 || (this.itemIndex >= 0 && e[this.itemIndex].toggle(), this.itemIndex -= 1, this.itemIndex < 0 && (this.itemIndex = e.length - 1), e[this.itemIndex].toggle())
                                }).call(this, t);
                                break;
                            case 39:
                                t.stopPropagation();
                                break;
                            case 40:
                                (function (t) {
                                    t.stopPropagation();
                                    var e = this.filterItems;
                                    e.length <= 0 || (this.itemIndex >= 0 && e[this.itemIndex].toggle(), this.itemIndex += 1, this.itemIndex > e.length - 1 && (this.itemIndex = 0), e[this.itemIndex].toggle())
                                }).call(this, t);
                                break;
                            case 13:
                            case 9:
                                Vt.call(this, t);
                                break;
                            default:
                                t.stopPropagation()
                        }
                    }.call(e, t)
                })
            }
        }]) && Ht(e.prototype, n), r && Ht(e, r), t
    }();

    function Bt(t) {
        return (Bt = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
            return typeof t
        } : function (t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        })(t)
    }

    function Lt(t, e) {
        for (var n = 0; n < e.length; n++) {
            var r = e[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
        }
    }

    function Ut(t, e) {
        return !e || "object" !== Bt(e) && "function" != typeof e ? function (t) {
            if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return t
        }(t) : e
    }

    function Yt(t) {
        return (Yt = Object.setPrototypeOf ? Object.getPrototypeOf : function (t) {
            return t.__proto__ || Object.getPrototypeOf(t)
        })(t)
    }

    function $t(t, e) {
        return ($t = Object.setPrototypeOf || function (t, e) {
            return t.__proto__ = e, t
        })(t, e)
    }

    var Xt = function (t) {
        function e(t) {
            var n;
            return function (t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }(this, e), (n = Ut(this, Yt(e).call(this, "div", "".concat(bt, "-icon")))).iconNameEl = a("div", "".concat(bt, "-icon-img ").concat(t)), n.child(n.iconNameEl), n
        }

        var n, r, i;
        return function (t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
            t.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: t,
                    writable: !0,
                    configurable: !0
                }
            }), e && $t(t, e)
        }(e, o), n = e, (r = [{
            key: "setName", value: function (t) {
                this.iconNameEl.className("".concat(bt, "-icon-img ").concat(t))
            }
        }]) && Lt(n.prototype, r), i && Lt(n, i), e
    }();

    function Kt(t) {
        return function (t) {
            if (Array.isArray(t)) {
                for (var e = 0, n = new Array(t.length); e < t.length; e++) n[e] = t[e];
                return n
            }
        }(t) || function (t) {
            if (Symbol.iterator in Object(t) || "[object Arguments]" === Object.prototype.toString.call(t)) return Array.from(t)
        }(t) || function () {
            throw new TypeError("Invalid attempt to spread non-iterable instance")
        }()
    }

    function Jt(t, e) {
        for (var n = 0; n < e.length; n++) {
            var r = e[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
        }
    }

    function Zt(t, e) {
        t.setMonth(t.getMonth() + e)
    }

    function Gt(t, e) {
        var n = new Date(t);
        return n.setDate(e - t.getDay() + 1), n
    }

    var Qt = function () {
        function t(e) {
            var n, r = this;
            !function (t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }(this, t), this.value = e, this.cvalue = new Date(e), this.headerLeftEl = a("div", "calendar-header-left"), this.bodyEl = a("tbody", ""), this.buildAll(), this.el = a("div", "x-spreadsheet-calendar").children(a("div", "calendar-header").children(this.headerLeftEl, a("div", "calendar-header-right").children(a("a", "calendar-prev").on("click.stop", function () {
                return r.prev()
            }).child(new Xt("chevron-left")), a("a", "calendar-next").on("click.stop", function () {
                return r.next()
            }).child(new Xt("chevron-right")))), a("table", "calendar-body").children(a("thead", "").child((n = a("tr", "")).children.apply(n, Kt(q("calendar.weeks").map(function (t) {
                return a("th", "cell").child(t)
            })))), this.bodyEl)), this.selectChange = function () {
            }
        }

        var e, n, r;
        return e = t, (n = [{
            key: "setValue", value: function (t) {
                this.value = t, this.cvalue = new Date(t), this.buildAll()
            }
        }, {
            key: "prev", value: function () {
                Zt(this.value, -1), this.buildAll()
            }
        }, {
            key: "next", value: function () {
                Zt(this.value, 1), this.buildAll()
            }
        }, {
            key: "buildAll", value: function () {
                this.buildHeaderLeft(), this.buildBody()
            }
        }, {
            key: "buildHeaderLeft", value: function () {
                var t = this.value;
                this.headerLeftEl.html("".concat(q("calendar.months")[t.getMonth()], " ").concat(t.getFullYear()))
            }
        }, {
            key: "buildBody", value: function () {
                var t, e = this, n = this.value, r = this.cvalue, i = this.bodyEl, o = function (t, e, n) {
                    for (var r = new Date(t, e, 1, 23, 59, 59), i = [[], [], [], [], [], []], o = 0; o < 6; o += 1) for (var a = 0; a < 7; a += 1) {
                        var l = Gt(r, 7 * o + a), c = l.getMonth() !== e,
                            u = l.getMonth() === n.getMonth() && l.getDate() === n.getDate();
                        i[o][a] = {d: l, disabled: c, active: u}
                    }
                    return i
                }(n.getFullYear(), n.getMonth(), r).map(function (t) {
                    var n, r = t.map(function (t) {
                        var n = "cell";
                        return t.disabled && (n += " disabled"), t.active && (n += " active"), a("td", "").child(a("div", n).on("click.stop", function () {
                            e.selectChange(t.d)
                        }).child(t.d.getDate().toString()))
                    });
                    return (n = a("tr", "")).children.apply(n, Kt(r))
                });
                (t = i.html("")).children.apply(t, Kt(o))
            }
        }]) && Jt(e.prototype, n), r && Jt(e, r), t
    }();

    function te(t, e) {
        for (var n = 0; n < e.length; n++) {
            var r = e[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
        }
    }

    var ee = function () {
        function t() {
            !function (t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }(this, t), this.calendar = new Qt(new Date), this.el = a("div", "".concat(bt, "-datepicker")).child(this.calendar.el).hide()
        }

        var e, n, r;
        return e = t, (n = [{
            key: "setValue", value: function (t) {
                var e = this.calendar;
                return "string" == typeof t ? /^\d{4}-\d{1,2}-\d{1,2}$/.test(t) && e.setValue(new Date(t.replace(new RegExp("-", "g"), "/"))) : t instanceof Date && e.setValue(t), this
            }
        }, {
            key: "change", value: function (t) {
                var e = this;
                this.calendar.selectChange = function (n) {
                    t(n), e.hide()
                }
            }
        }, {
            key: "show", value: function () {
                this.el.show()
            }
        }, {
            key: "hide", value: function () {
                this.el.hide()
            }
        }]) && te(e.prototype, n), r && te(e, r), t
    }();

    function ne(t, e) {
        for (var n = 0; n < e.length; n++) {
            var r = e[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
        }
    }

    function re() {
        if (!/^\s*$/.test(this.inputText)) {
            var t = this.textlineEl, e = this.textEl, n = this.areaOffset, r = t.offset().width + 9,
                i = this.viewFn().width - n.left - 9;
            if (r > n.width) {
                var o = r;
                if (r > i) {
                    o = i;
                    var a = parseInt(r / i, 10);
                    a += r % i > 0 ? 1 : 0, (a *= this.rowHeight) > n.height && e.css("height", "".concat(a, "px"))
                }
                e.css("width", "".concat(o, "px"))
            }
        }
    }

    function ie(t, e) {
        var n = this.textEl, r = this.textlineEl;
        n.el.blur(), n.val(t), r.html(t), function (t) {
            var e = this.textEl.el;
            setTimeout(function () {
                e.focus(), e.setSelectionRange(t, t)
            }, 0)
        }.call(this, e)
    }

    var oe = function () {
        function t(e, n, r) {
            var i = this;
            !function (t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }(this, t), this.viewFn = n, this.rowHeight = r, this.formulas = e, this.suggest = new qt(e, function (t) {
                (function (t) {
                    var e = this.inputText, n = this.validator, r = 0;
                    if (n && "list" === n.type) this.inputText = t, r = this.inputText.length; else {
                        var i = e.lastIndexOf("="), o = e.substring(0, i + 1), a = e.substring(i + 1);
                        a = -1 !== a.indexOf(")") ? a.substring(a.indexOf(")")) : "", this.inputText = "".concat(o + t.key, "("), r = this.inputText.length, this.inputText += ")".concat(a)
                    }
                    ie.call(this, this.inputText, r)
                }).call(i, t)
            }), this.datepicker = new ee, this.datepicker.change(function (t) {
                i.setText(function (t) {
                    var e = t.getMonth() + 1, n = t.getDate();
                    return e < 10 && (e = "0".concat(e)), n < 10 && (n = "0".concat(n)), "".concat(t.getFullYear(), "-").concat(e, "-").concat(n)
                }(t)), i.clear()
            }), this.areaEl = a("div", "".concat(bt, "-editor-area")).children(this.textEl = a("textarea", "").on("input", function (t) {
                return function (t) {
                    var e = t.target.value, n = this.suggest, r = this.textlineEl, i = this.validator;
                    if (this.inputText = e, i) "list" === i.type ? n.search(e) : n.hide(); else {
                        var o = e.lastIndexOf("=");
                        -1 !== o ? n.search(e.substring(o + 1)) : n.hide()
                    }
                    r.html(e), re.call(this), this.change("input", e)
                }.call(i, t)
            }), this.textlineEl = a("div", "textline"), this.suggest.el, this.datepicker.el).on("mousemove.stop", function () {
            }).on("mousedown.stop", function () {
            }), this.el = a("div", "".concat(bt, "-editor")).child(this.areaEl).hide(), this.suggest.bindInputEvents(this.textEl), this.areaOffset = null, this.freeze = {
                w: 0,
                h: 0
            }, this.cell = null, this.inputText = "", this.change = function () {
            }
        }

        var e, n, r;
        return e = t, (n = [{
            key: "setFreezeLengths", value: function (t, e) {
                this.freeze.w = t, this.freeze.h = e
            }
        }, {
            key: "clear", value: function () {
                "" !== this.inputText && this.change("finished", this.inputText), this.cell = null, this.areaOffset = null, this.inputText = "", this.el.hide(), this.textEl.val(""), this.textlineEl.html(""), function () {
                    this.suggest.setItems(this.formulas)
                }.call(this), this.datepicker.hide()
            }
        }, {
            key: "setOffset", value: function (t) {
                var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "top", n = this.textEl,
                    r = this.areaEl, i = this.suggest, o = this.freeze, a = this.el;
                if (t) {
                    this.areaOffset = t;
                    var l = t.left, c = t.top, u = t.width, s = t.height, f = t.l, h = t.t, y = {left: 0, top: 0};
                    o.w > f && o.h > h || (o.w < f && o.h < h ? (y.left = o.w, y.top = o.h) : o.w > f ? y.top = o.h : o.h > h && (y.left = o.w)), a.offset(y), r.offset({
                        left: l - y.left - .8,
                        top: c - y.top - .8
                    }), n.offset({width: u - 9 + .8, height: s - 3 + .8});
                    var p = {left: 0};
                    p[e] = s, i.setOffset(p), i.hide()
                }
            }
        }, {
            key: "setCell", value: function (t, e) {
                var n = this.el, r = this.datepicker, i = this.suggest;
                n.show(), this.cell = t;
                var o = t && t.text || "";
                if (this.setText(o), this.validator = e, e) {
                    var a = e.type;
                    "date" === a && (r.show(), /^\s*$/.test(o) || r.setValue(o)), "list" === a && (i.setItems(e.values()), i.search(""))
                }
            }
        }, {
            key: "setText", value: function (t) {
                this.inputText = t, ie.call(this, t, t.length), re.call(this)
            }
        }]) && ne(e.prototype, n), r && ne(e, r), t
    }();

    function ae(t) {
        return function (t) {
            if (Array.isArray(t)) {
                for (var e = 0, n = new Array(t.length); e < t.length; e++) n[e] = t[e];
                return n
            }
        }(t) || function (t) {
            if (Symbol.iterator in Object(t) || "[object Arguments]" === Object.prototype.toString.call(t)) return Array.from(t)
        }(t) || function () {
            throw new TypeError("Invalid attempt to spread non-iterable instance")
        }()
    }

    function le(t, e) {
        for (var n = 0; n < e.length; n++) {
            var r = e[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
        }
    }

    var ce = [{key: "copy", title: B("contextmenu.copy"), label: "Ctrl+C"}, {
        key: "cut",
        title: B("contextmenu.cut"),
        label: "Ctrl+X"
    }, {key: "paste", title: B("contextmenu.paste"), label: "Ctrl+V"}, {
        key: "paste-value",
        title: B("contextmenu.pasteValue"),
        label: "Ctrl+Shift+V"
    }, {
        key: "paste-format",
        title: B("contextmenu.pasteFormat"),
        label: "Ctrl+Alt+V"
    }, {key: "divider"}, {key: "insert-row", title: B("contextmenu.insertRow")}, {
        key: "insert-column",
        title: B("contextmenu.insertColumn")
    }, {key: "divider"}, {key: "delete-row", title: B("contextmenu.deleteRow")}, {
        key: "delete-column",
        title: B("contextmenu.deleteColumn")
    }, {key: "delete-cell-text", title: B("contextmenu.deleteCellText")}, {key: "divider"}, {
        key: "validation",
        title: B("contextmenu.validation")
    }];

    function ue() {
        var t = this;
        return ce.map(function (e) {
            return function (t) {
                var e = this;
                return "divider" === t.key ? a("div", "".concat(bt, "-item divider")) : a("div", "".concat(bt, "-item")).on("click", function () {
                    e.itemClick(t.key), e.hide()
                }).children(t.title(), a("div", "label").child(t.label || ""))
            }.call(t, e)
        })
    }

    var se = function () {
            function t(e) {
                var n, r = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                !function (t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }(this, t), this.el = (n = a("div", "".concat(bt, "-contextmenu"))).children.apply(n, ae(ue.call(this))).hide(), this.viewFn = e, this.itemClick = function () {
                }, this.isHide = r
            }

            var e, n, r;
            return e = t, (n = [{
                key: "hide", value: function () {
                    var t = this.el;
                    t.hide(), yt(t)
                }
            }, {
                key: "setPosition", value: function (t, e) {
                    if (!this.isHide) {
                        var n = this.el, r = n.show().offset(), i = r.height, o = r.width, a = this.viewFn(), l = e, c = t;
                        a.height - e <= i && (l -= i), a.width - t <= o && (c -= o), n.offset({left: c, top: l}), pt(n)
                    }
                }
            }]) && le(e.prototype, n), r && le(e, r), t
        }(), fe = [{key: "Arial", title: "Arial"}, {key: "Helvetica", title: "Helvetica"}, {
            key: "Source Sans Pro",
            title: "Source Sans Pro"
        }, {key: "Comic Sans MS", title: "Comic Sans MS"}, {key: "Courier New", title: "Courier New"}, {
            key: "Verdana",
            title: "Verdana"
        }, {key: "Lato", title: "Lato"}],
        he = [{pt: 7.5, px: 10}, {pt: 8, px: 11}, {pt: 9, px: 12}, {pt: 10, px: 13}, {pt: 10.5, px: 14}, {
            pt: 11,
            px: 15
        }, {pt: 12, px: 16}, {pt: 14, px: 18.7}, {pt: 15, px: 20}, {pt: 16, px: 21.3}, {pt: 18, px: 24}, {
            pt: 22,
            px: 29.3
        }, {pt: 24, px: 32}, {pt: 26, px: 34.7}, {pt: 36, px: 48}, {pt: 42, px: 56}];

    function ye(t, e) {
        return function (t) {
            if (Array.isArray(t)) return t
        }(t) || function (t, e) {
            var n = [], r = !0, i = !1, o = void 0;
            try {
                for (var a, l = t[Symbol.iterator](); !(r = (a = l.next()).done) && (n.push(a.value), !e || n.length !== e); r = !0) ;
            } catch (t) {
                i = !0, o = t
            } finally {
                try {
                    r || null == l.return || l.return()
                } finally {
                    if (i) throw o
                }
            }
            return n
        }(t, e) || function () {
            throw new TypeError("Invalid attempt to destructure non-iterable instance")
        }()
    }

    var pe = function (t) {
        for (var e = [], n = [], r = [], i = 0, o = "", a = 1, l = 0; l < t.length; l += 1) {
            var c = t.charAt(l);
            if (" " !== c) if (c >= "a" && c <= "z") r.push(c.toUpperCase()); else if (c >= "0" && c <= "9" || c >= "A" && c <= "Z" || "." === c) r.push(c); else if ('"' === c) {
                for (l += 1; '"' !== t.charAt(l);) r.push(t.charAt(l)), l += 1;
                n.push('"'.concat(r.join(""))), r = []
            } else {
                if ("(" !== c && r.length > 0 && n.push(r.join("")), ")" === c) {
                    var u = e.pop();
                    if (2 === i) try {
                        for (var s = ye(f(n.pop()), 2), y = s[0], p = s[1], v = ye(f(n.pop()), 2), d = v[0], b = v[1], g = 0, m = d; m <= y; m += 1) for (var w = b; w <= p; w += 1) n.push(h(m, w)), g += 1;
                        n.push([u, g])
                    } catch (t) {
                    } else if (1 === i || 3 === i) 3 === i && n.push(o), n.push([u, a]), a = 1; else for (; "(" !== u && (n.push(u), !(e.length <= 0));) u = e.pop();
                    i = 0
                } else if ("=" === c || ">" === c || "<" === c) {
                    var k = t.charAt(l + 1);
                    o = c, "=" === k && (o += k, l += 1), i = 3
                } else if (":" === c) i = 2; else if ("," === c) 3 === i && n.push(o), i = 1, a += 1; else if ("(" === c && r.length > 0) e.push(r.join("")); else {
                    if (e.length > 0 && ("+" === c || "-" === c)) {
                        var O = e[e.length - 1];
                        if ("(" !== O && n.push(e.pop()), "*" === O || "/" === O) for (; e.length > 0 && "(" !== (O = e[e.length - 1]);) n.push(e.pop())
                    }
                    e.push(c)
                }
                r = []
            }
        }
        for (r.length > 0 && n.push(r.join("")); e.length > 0;) n.push(e.pop());
        return n
    }, ve = function (t, e) {
        if (t[0] >= "0" && t[0] <= "9") return Number(t);
        if ('"' === t[0]) return t.substring(1);
        var n = ye(f(t), 2);
        return e(n[0], n[1])
    }, de = function (t, e, n, r) {
        for (var i = [], o = 0; o < t.length; o += 1) {
            var a = t[o], l = a[0];
            if ("+" === a) {
                var c = i.pop();
                i.push(Number(i.pop()) + Number(c))
            } else if ("-" === a) {
                var u = i.pop();
                i.push(Number(i.pop()) - Number(u))
            } else if ("*" === a) i.push(Number(i.pop()) * Number(i.pop())); else if ("/" === a) {
                var s = i.pop();
                i.push(Number(i.pop()) / Number(s))
            } else if ("=" === l || ">" === l || "<" === l) {
                var f = i.pop(), h = Function;
                i.push(new h("return ".concat(i.pop(), " ").concat("=" === a ? "==" : a, " ").concat(f))())
            } else if (Array.isArray(a)) {
                for (var y = ye(a, 2), p = y[0], v = y[1], d = [], b = 0; b < v; b += 1) d.push(i.pop());
                i.push(e[p].render(d.reverse()))
            } else {
                if (r.includes(a)) return 0;
                (l >= "a" && l <= "z" || l >= "A" && l <= "Z") && r.push(a), i.push(ve(a, n))
            }
        }
        return i[0]
    }, be = {
        render: function t(e, n, r) {
            var i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : [];
            if ("=" === e[0]) {
                var o = pe(e.substring(1));
                return o.length <= 0 ? e : de(o, n, function (e, o) {
                    return t(r(e, o), n, r, i)
                }, i)
            }
            return e
        }
    };

    function ge(t, e) {
        return function (t) {
            if (Array.isArray(t)) return t
        }(t) || function (t, e) {
            var n = [], r = !0, i = !1, o = void 0;
            try {
                for (var a, l = t[Symbol.iterator](); !(r = (a = l.next()).done) && (n.push(a.value), !e || n.length !== e); r = !0) ;
            } catch (t) {
                i = !0, o = t
            } finally {
                try {
                    r || null == l.return || l.return()
                } finally {
                    if (i) throw o
                }
            }
            return n
        }(t, e) || function () {
            throw new TypeError("Invalid attempt to destructure non-iterable instance")
        }()
    }

    function me(t) {
        return function (t) {
            if (Array.isArray(t)) {
                for (var e = 0, n = new Array(t.length); e < t.length; e++) n[e] = t[e];
                return n
            }
        }(t) || function (t) {
            if (Symbol.iterator in Object(t) || "[object Arguments]" === Object.prototype.toString.call(t)) return Array.from(t)
        }(t) || function () {
            throw new TypeError("Invalid attempt to spread non-iterable instance")
        }()
    }

    var we = [{
        key: "SUM", title: B("formula.sum"), render: function (t) {
            return t.reduce(function (t, e) {
                return Number(t) + Number(e)
            }, 0)
        }
    }, {
        key: "AVERAGE", title: B("formula.average"), render: function (t) {
            return t.reduce(function (t, e) {
                return Number(t) + Number(e)
            }, 0) / t.length
        }
    }, {
        key: "MAX", title: B("formula.max"), render: function (t) {
            return Math.max.apply(Math, me(t.map(function (t) {
                return Number(t)
            })))
        }
    }, {
        key: "MIN", title: B("formula.min"), render: function (t) {
            return Math.min.apply(Math, me(t.map(function (t) {
                return Number(t)
            })))
        }
    }, {
        key: "IF", title: B("formula._if"), render: function (t) {
            var e = ge(t, 3), n = e[0], r = e[1], i = e[2];
            return n ? r : i
        }
    }, {
        key: "AND", title: B("formula.and"), render: function (t) {
            return t.every(function (t) {
                return t
            })
        }
    }, {
        key: "OR", title: B("formula.or"), render: function (t) {
            return t.some(function (t) {
                return t
            })
        }
    }, {
        key: "CONCAT", title: B("formula.concat"), render: function (t) {
            return t.join("")
        }
    }], ke = we, Oe = {};

    function Se(t) {
        return function (t) {
            if (Array.isArray(t)) {
                for (var e = 0, n = new Array(t.length); e < t.length; e++) n[e] = t[e];
                return n
            }
        }(t) || Ee(t) || function () {
            throw new TypeError("Invalid attempt to spread non-iterable instance")
        }()
    }

    function xe(t) {
        return function (t) {
            if (Array.isArray(t)) return t
        }(t) || Ee(t) || function () {
            throw new TypeError("Invalid attempt to destructure non-iterable instance")
        }()
    }

    function Ee(t) {
        if (Symbol.iterator in Object(t) || "[object Arguments]" === Object.prototype.toString.call(t)) return Array.from(t)
    }

    we.forEach(function (t) {
        Oe[t.key] = t
    });
    var je = function (t) {
        return t
    }, _e = function (t) {
        if (/^(-?\d*.?\d*)$/.test(t)) {
            var e = xe(Number(t).toFixed(2).toString().split("\\.")), n = e[0], r = e.slice(1);
            return [n.replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")].concat(Se(r))
        }
        return t
    }, Ce = [{key: "normal", title: B("format.normal"), type: "string", render: je}, {
        key: "text",
        title: B("format.text"),
        type: "string",
        render: je
    }, {key: "number", title: B("format.number"), type: "number", label: "1,000.12", render: _e}, {
        key: "percent",
        title: B("format.percent"),
        type: "number",
        label: "10.12%",
        render: function (t) {
            return "".concat(t, "%")
        }
    }, {
        key: "rmb", title: B("format.rmb"), type: "number", label: "￥10.00", render: function (t) {
            return "￥".concat(_e(t))
        }
    }, {
        key: "usd", title: B("format.usd"), type: "number", label: "$10.00", render: function (t) {
            return "$".concat(_e(t))
        }
    }, {
        key: "eur", title: B("format.eur"), type: "number", label: "€10.00", render: function (t) {
            return "€".concat(_e(t))
        }
    }, {key: "date", title: B("format.date"), type: "date", label: "26/09/2008", render: je}, {
        key: "time",
        title: B("format.time"),
        type: "date",
        label: "15:59:00",
        render: je
    }, {
        key: "datetime",
        title: B("format.datetime"),
        type: "date",
        label: "26/09/2008 15:59:00",
        render: je
    }, {key: "duration", title: B("format.duration"), type: "date", label: "24:01:00", render: je}], Te = {};

    function Pe(t) {
        return function (t) {
            if (Array.isArray(t)) {
                for (var e = 0, n = new Array(t.length); e < t.length; e++) n[e] = t[e];
                return n
            }
        }(t) || function (t) {
            if (Symbol.iterator in Object(t) || "[object Arguments]" === Object.prototype.toString.call(t)) return Array.from(t)
        }(t) || function () {
            throw new TypeError("Invalid attempt to spread non-iterable instance")
        }()
    }

    function Ae(t, e) {
        return function (t) {
            if (Array.isArray(t)) return t
        }(t) || function (t, e) {
            var n = [], r = !0, i = !1, o = void 0;
            try {
                for (var a, l = t[Symbol.iterator](); !(r = (a = l.next()).done) && (n.push(a.value), !e || n.length !== e); r = !0) ;
            } catch (t) {
                i = !0, o = t
            } finally {
                try {
                    r || null == l.return || l.return()
                } finally {
                    if (i) throw o
                }
            }
            return n
        }(t, e) || function () {
            throw new TypeError("Invalid attempt to destructure non-iterable instance")
        }()
    }

    function Re(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }

    function De(t, e) {
        for (var n = 0; n < e.length; n++) {
            var r = e[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
        }
    }

    function ze(t, e, n) {
        return e && De(t.prototype, e), n && De(t, n), t
    }

    function Ie() {
        return window.devicePixelRatio || 1
    }

    function Me() {
        return Ie() - .5
    }

    function We(t) {
        return parseInt(t * Ie(), 10)
    }

    function Fe(t) {
        var e = We(t);
        return e > 0 ? e - .5 : .5
    }

    Ce.forEach(function (t) {
        Te[t.key] = t
    });
    var Ne = function () {
        function t(e, n, r, i) {
            var o = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0;
            Re(this, t), this.x = e, this.y = n, this.width = r, this.height = i, this.padding = o, this.bgcolor = "#ffffff", this.borderTop = null, this.borderRight = null, this.borderBottom = null, this.borderLeft = null
        }

        return ze(t, [{
            key: "setBorders", value: function (t) {
                var e = t.top, n = t.bottom, r = t.left, i = t.right;
                e && (this.borderTop = e), i && (this.borderRight = i), n && (this.borderBottom = n), r && (this.borderLeft = r)
            }
        }, {
            key: "innerWidth", value: function () {
                return this.width - 2 * this.padding
            }
        }, {
            key: "innerHeight", value: function () {
                return this.height - 2 * this.padding
            }
        }, {
            key: "textx", value: function (t) {
                var e = this.width, n = this.padding, r = this.x;
                return "left" === t ? r += n : "center" === t ? r += e / 2 : "right" === t && (r += e - n), r
            }
        }, {
            key: "texty", value: function (t, e, n) {
                var r = this.height, i = this.padding, o = this.y;
                return "top" === t ? o += i : "middle" === t ? o = o + r / 2 - n : "bottom" === t && (o += r - 2 * n - i), o
            }
        }, {
            key: "topxys", value: function () {
                var t = this.x, e = this.y;
                return [[t, e], [t + this.width, e]]
            }
        }, {
            key: "rightxys", value: function () {
                var t = this.x, e = this.y, n = this.width;
                return [[t + n, e], [t + n, e + this.height]]
            }
        }, {
            key: "bottomxys", value: function () {
                var t = this.x, e = this.y, n = this.width, r = this.height;
                return [[t, e + r], [t + n, e + r]]
            }
        }, {
            key: "leftxys", value: function () {
                var t = this.x, e = this.y;
                return [[t, e], [t, e + this.height]]
            }
        }]), t
    }();

    function He(t, e, n, r, i, o, a) {
        var l = {x: 0, y: 0};
        "underline" === t ? l.y = "bottom" === i ? 0 : "top" === i ? -(o + 2) : -o / 2 : "strike" === t && ("bottom" === i ? l.y = o / 2 : "top" === i && (l.y = -(o / 2 + 2))), "center" === r ? l.x = a / 2 : "right" === r && (l.x = a), this.line([e - l.x, n - l.y], [e - l.x + a, n - l.y])
    }

    var Ve = function () {
        function t(e, n, r) {
            Re(this, t), this.el = e, this.ctx = e.getContext("2d"), this.resize(n, r), this.ctx.scale(Ie(), Ie())
        }

        return ze(t, [{
            key: "resize", value: function (t, e) {
                this.el.style.width = "".concat(t, "px"), this.el.style.height = "".concat(e, "px"), this.el.width = We(t), this.el.height = We(e)
            }
        }, {
            key: "clear", value: function () {
                var t = this.el, e = t.width, n = t.height;
                return this.ctx.clearRect(0, 0, e, n), this
            }
        }, {
            key: "attr", value: function (t) {
                return Object.assign(this.ctx, t), this
            }
        }, {
            key: "save", value: function () {
                return this.ctx.save(), this.ctx.beginPath(), this
            }
        }, {
            key: "restore", value: function () {
                return this.ctx.restore(), this
            }
        }, {
            key: "beginPath", value: function () {
                return this.ctx.beginPath(), this
            }
        }, {
            key: "translate", value: function (t, e) {
                return this.ctx.translate(We(t), We(e)), this
            }
        }, {
            key: "clearRect", value: function (t, e, n, r) {
                return this.ctx.clearRect(t, e, n, r), this
            }
        }, {
            key: "fillRect", value: function (t, e, n, r) {
                return this.ctx.fillRect(We(t) - .5, We(e) - .5, We(n), We(r)), this
            }
        }, {
            key: "fillText", value: function (t, e, n) {
                return this.ctx.fillText(t, We(e), We(n)), this
            }
        }, {
            key: "text", value: function (t, e) {
                var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                    r = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3], i = this.ctx, o = n.align,
                    a = n.valign, l = n.font, c = n.color, u = n.strike, s = n.underline, f = e.textx(o);
                i.save(), i.beginPath(), this.attr({
                    textAlign: o,
                    textBaseline: a,
                    font: "".concat(l.italic ? "italic" : "", " ").concat(l.bold ? "bold" : "", " ").concat(We(l.size), "px ").concat(l.name),
                    fillStyle: c,
                    strokeStyle: c
                });
                var h = i.measureText(t).width, y = 0;
                if (r) {
                    var p = Math.ceil(h / e.innerWidth());
                    y = (p - 1) * l.size / 2
                }
                var v = e.texty(a, l.size, y);
                if (r && h > e.innerWidth()) {
                    for (var d = {
                        len: 0,
                        start: 0
                    }, b = 0; b < t.length; b += 1) d.len >= e.innerWidth() && (this.fillText(t.substring(d.start, b), f, v), u && He.call(this, "strike", f, v, o, a, l.size, d.len), s && He.call(this, "underline", f, v, o, a, l.size, d.len), v += l.size + 2, d.len = 0, d.start = b), d.len += i.measureText(t[b]).width;
                    d.len > 0 && (this.fillText(t.substring(d.start), f, v), u && He.call(this, "strike", f, v, o, a, l.size, d.len), s && He.call(this, "underline", f, v, o, a, l.size, d.len))
                } else this.fillText(t, f, v), u && He.call(this, "strike", f, v, o, a, l.size, h), s && He.call(this, "underline", f, v, o, a, l.size, h);
                return i.restore(), this
            }
        }, {
            key: "border", value: function (t, e) {
                var n = this.ctx;
                return n.lineWidth = Me, n.strokeStyle = e, "medium" === t ? n.lineWidth = We(2) - .5 : "thick" === t ? n.lineWidth = We(3) : "dashed" === t ? n.setLineDash([We(3), We(2)]) : "dotted" === t ? n.setLineDash([We(1), We(1)]) : "double" === t && n.setLineDash([We(2), 0]), this
            }
        }, {
            key: "line", value: function () {
                var t = this.ctx;
                if (arguments.length > 1) {
                    var e = arguments.length <= 0 ? void 0 : arguments[0], n = Ae(e, 2), r = n[0], i = n[1];
                    t.moveTo(Fe(r), Fe(i));
                    for (var o = 1; o < arguments.length; o += 1) {
                        var a = o < 0 || arguments.length <= o ? void 0 : arguments[o], l = Ae(a, 2), c = l[0],
                            u = l[1];
                        t.lineTo(Fe(c), Fe(u))
                    }
                    t.stroke()
                }
                return this
            }
        }, {
            key: "strokeBorders", value: function (t) {
                var e = this.ctx;
                e.save(), e.beginPath();
                var n = t.borderTop, r = t.borderRight, i = t.borderBottom, o = t.borderLeft;
                n && (this.border.apply(this, Pe(n)), this.line.apply(this, Pe(t.topxys()))), r && (this.border.apply(this, Pe(r)), this.line.apply(this, Pe(t.rightxys()))), i && (this.border.apply(this, Pe(i)), this.line.apply(this, Pe(t.bottomxys()))), o && (this.border.apply(this, Pe(o)), this.line.apply(this, Pe(t.leftxys()))), e.restore()
            }
        }, {
            key: "dropdown", value: function (t) {
                var e = this.ctx, n = t.x, r = t.y, i = n + t.width - 15, o = r + t.height - 15;
                e.save(), e.beginPath(), e.moveTo(We(i), We(o)), e.lineTo(We(i + 8), We(o)), e.lineTo(We(i + 4), We(o + 6)), e.closePath(), e.fillStyle = "rgba(0, 0, 0, .45)", e.fill(), e.restore()
            }
        }, {
            key: "error", value: function (t) {
                var e = this.ctx, n = t.x, r = t.y, i = n + t.width - 1;
                e.save(), e.beginPath(), e.moveTo(We(i - 8), We(r - 1)), e.lineTo(We(i), We(r - 1)), e.lineTo(We(i), We(r + 8)), e.closePath(), e.fillStyle = "rgba(255, 0, 0, .65)", e.fill(), e.restore()
            }
        }, {
            key: "rect", value: function (t, e) {
                var n = this.ctx, r = t.x, i = t.y, o = t.width, a = t.height, l = t.bgcolor;
                n.save(), n.beginPath(), n.fillStyle = l || "#fff", n.rect(Fe(r + 1), Fe(i + 1), We(o - 2), We(a - 2)), n.clip(), n.fill(), e(), n.restore()
            }
        }]), t
    }();

    function qe(t, e) {
        return function (t) {
            if (Array.isArray(t)) return t
        }(t) || function (t, e) {
            var n = [], r = !0, i = !1, o = void 0;
            try {
                for (var a, l = t[Symbol.iterator](); !(r = (a = l.next()).done) && (n.push(a.value), !e || n.length !== e); r = !0) ;
            } catch (t) {
                i = !0, o = t
            } finally {
                try {
                    r || null == l.return || l.return()
                } finally {
                    if (i) throw o
                }
            }
            return n
        }(t, e) || function () {
            throw new TypeError("Invalid attempt to destructure non-iterable instance")
        }()
    }

    function Be(t, e) {
        for (var n = 0; n < e.length; n++) {
            var r = e[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
        }
    }

    var Le = 5, Ue = {fillStyle: "#f4f5f8"}, Ye = {fillStyle: "#fff", lineWidth: Me, strokeStyle: "#e6e6e6"};

    function $e(t, e) {
        var n = this.data.cellRect(t, e), r = n.left, i = n.top, o = n.width, a = n.height;
        return new Ne(r, i, o, a, Le)
    }

    function Xe(t, e) {
        var n = this.draw, r = this.data, i = r.sortedRowMap, o = t;
        i.has(t) && (o = i.get(t));
        var a = r.getCell(o, e);
        if (null !== a) {
            var l = r.getCellStyleOrDefault(o, e), c = $e.call(this, t, e);
            c.bgcolor = l.bgcolor, void 0 !== l.border && (c.setBorders(l.border), n.strokeBorders(c)), n.rect(c, function () {
                var i = be.render(a.text || "", Oe, function (t, e) {
                    return r.getCellTextOrDefault(e, t)
                });
                l.format && (i = Te[l.format].render(i));
                var o = Object.assign({}, l.font);
                o.size = function (t) {
                    for (var e = 0; e < he.length; e += 1) {
                        var n = he[e];
                        if (n.pt === t) return n.px
                    }
                    return t
                }(o.size), n.text(i, c, {
                    align: l.align,
                    valign: l.valign,
                    font: o,
                    color: l.color,
                    strike: l.strike,
                    underline: l.underline
                }, l.textwrap), r.validations.getError(t, e) && n.error(c)
            })
        }
    }

    function Ke(t, e, n, r, i) {
        var o = this, a = this.draw, l = this.data;
        a.save(), a.translate(e, n).translate(r, i);
        var c = l.exceptRowSet, u = l.exceptRowTotalHeight(t.sri, t.eri);
        a.save(), a.translate(0, -u), t.each(function (t, e) {
            Xe.call(o, t, e)
        }, function (t) {
            return function (t) {
                var e = c.has(t);
                if (e) {
                    var n = l.rows.getHeight(t);
                    a.translate(0, -n)
                }
                return !e
            }(t)
        }), a.restore();
        var s = new Set;
        a.save(), a.translate(0, -u), l.eachMergesInView(t, function (t) {
            var e = t.sri, n = t.sci, r = t.eri;
            if (c.has(e)) {
                if (!s.has(e)) {
                    s.add(e);
                    var i = l.rows.sumHeight(e, r + 1);
                    a.translate(0, -i)
                }
            } else Xe.call(o, e, n)
        }), a.restore(), function (t) {
            var e = this, n = this.data, r = this.draw;
            if (t) {
                var i = n.autoFilter;
                if (!i.active()) return;
                var o = i.hrange();
                t.intersects(o) && o.each(function (t, n) {
                    var i = $e.call(e, t, n);
                    r.dropdown(i)
                })
            }
        }.call(this, t), a.restore()
    }

    function Je(t, e, n, r) {
        var i = this.draw;
        i.save(), i.attr({fillStyle: "rgba(75, 137, 255, 0.08)"}).fillRect(t, e, n, r), i.restore()
    }

    function Ze(t, e, n, r, i, o) {
        var a = this, l = this.draw, c = this.data, s = e.h, f = e.w, h = o + r, y = i + n;
        l.save(), l.attr(Ue), "all" !== t && "left" !== t || l.fillRect(0, h, n, s), "all" !== t && "top" !== t || l.fillRect(y, 0, f, r);
        var p = c.selector.range, v = p.sri, d = p.sci, b = p.eri, g = p.eci;
        l.attr({
            textAlign: "center",
            textBaseline: "middle",
            font: "500 ".concat(We(12), "px Source Sans Pro"),
            fillStyle: "#585757",
            lineWidth: Me(),
            strokeStyle: "#e6e6e6"
        }), "all" !== t && "left" !== t || (c.rowEach(e.sri, e.eri, function (t, e, r) {
            var i = h + e, o = t;
            l.line([0, i], [n, i]), v <= o && o < b + 1 && Je.call(a, 0, i, n, r), l.fillText(o + 1, n / 2, i + r / 2)
        }), l.line([0, s + h], [n, s + h]), l.line([n, h], [n, s + h])), "all" !== t && "top" !== t || (c.colEach(e.sci, e.eci, function (t, e, n) {
            var i = y + e, o = t;
            l.line([i, 0], [i, r]), d <= o && o < g + 1 && Je.call(a, i, 0, n, r), l.fillText(u(o), i + n / 2, r / 2)
        }), l.line([f + y, 0], [f + y, r]), l.line([0, r], [f + y, r])), l.restore()
    }

    function Ge(t, e, n, r, i) {
        var o = t.sri, a = t.sci, l = t.eri, c = t.eci, u = t.w, s = t.h, f = this.draw, h = this.data, y = h.settings;
        f.save(), f.attr(Ye).translate(e + r, n + i), f.clearRect(0, 0, u, s), y.showGrid ? (h.rowEach(o, l, function (t, e, n) {
            t !== o && f.line([0, e], [u, e]), t === l && f.line([0, e + n], [u, e + n])
        }), h.colEach(a, c, function (t, e, n) {
            t !== a && f.line([e, 0], [e, s]), t === c && f.line([e + n, 0], [e + n, s])
        }), f.restore()) : f.restore()
    }

    var Qe = function () {
        function t(e, n) {
            !function (t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }(this, t), this.el = e, this.draw = new Ve(e, n.viewWidth(), n.viewHeight()), this.data = n
        }

        var e, n, r;
        return e = t, (n = [{
            key: "render", value: function () {
                var t = this.data, e = t.rows, n = t.cols.indexWidth, r = e.height;
                this.draw.resize(t.viewWidth(), t.viewHeight()), this.clear();
                var i = t.viewRange(), o = t.freezeTotalWidth(), a = t.freezeTotalHeight(), l = t.scroll, c = l.x,
                    u = l.y;
                Ge.call(this, i, n, r, o, a), Ke.call(this, i, n, r, -c, -u), Ze.call(this, "all", i, n, r, o, a), function (t, e) {
                    var n = this.draw;
                    n.save(), n.attr({fillStyle: "#f4f5f8"}).fillRect(0, 0, t, e), n.restore()
                }.call(this, n, r);
                var s = qe(t.freeze, 2), f = s[0], h = s[1];
                if (f > 0 || h > 0) {
                    if (f > 0) {
                        var y = i.clone();
                        y.sri = 0, y.eri = f - 1, y.h = a, Ge.call(this, y, n, r, o, 0), Ke.call(this, y, n, r, -c, 0), Ze.call(this, "top", y, n, r, o, 0)
                    }
                    if (h > 0) {
                        var p = i.clone();
                        p.sci = 0, p.eci = h - 1, p.w = o, Ge.call(this, p, n, r, 0, a), Ze.call(this, "left", p, n, r, 0, a), Ke.call(this, p, n, r, 0, -u)
                    }
                    var v = t.freezeViewRange();
                    Ge.call(this, v, n, r, 0, 0), Ze.call(this, "all", v, n, r, 0, 0), Ke.call(this, v, n, r, 0, 0), function (t, e, n, r) {
                        var i = this.draw, o = this.data, a = o.viewWidth() - t, l = o.viewHeight() - e;
                        i.save().translate(t, e).attr({strokeStyle: "rgba(75, 137, 255, .6)"}), i.line([0, r], [a, r]), i.line([n, 0], [n, l]), i.restore()
                    }.call(this, n, r, o, a)
                }
            }
        }, {
            key: "clear", value: function () {
                this.draw.clear()
            }
        }]) && Be(e.prototype, n), r && Be(e, r), t
    }();

    function tn(t, e) {
        for (var n = 0; n < e.length; n++) {
            var r = e[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
        }
    }

    var en = function () {
        function t(e, n, r) {
            !function (t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }(this, t), this.tip = q("toolbar.".concat(e.replace(/-[a-z]/g, function (t) {
                return t[1].toUpperCase()
            }))), this.tag = e, this.shortcut = n, this.value = r, this.el = this.element(), this.change = function () {
            }
        }

        var e, n, r;
        return e = t, (n = [{
            key: "element", value: function () {
                var t = this.tip;
                return a("div", "".concat(bt, "-toolbar-btn")).on("mouseenter", function (e) {
                    !function (t, e) {
                        if (!e.classList.contains("active")) {
                            var n = e.getBoundingClientRect(), r = n.left, i = n.top, o = n.width, l = n.height,
                                c = a("div", "".concat(bt, "-tooltip")).html(t).show();
                            document.body.appendChild(c.el);
                            var u = c.box();
                            c.css("left", "".concat(r + o / 2 - u.width / 2, "px")).css("top", "".concat(i + l + 2, "px")), ft(e, "mouseleave", function () {
                                document.body.contains(c.el) && document.body.removeChild(c.el)
                            }), ft(e, "click", function () {
                                document.body.contains(c.el) && document.body.removeChild(c.el)
                            })
                        }
                    }(t, e.target)
                }).attr("data-tooltip", t)
            }
        }, {
            key: "setState", value: function () {
            }
        }]) && tn(e.prototype, n), r && tn(e, r), t
    }();

    function nn(t) {
        return (nn = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
            return typeof t
        } : function (t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        })(t)
    }

    function rn(t, e) {
        for (var n = 0; n < e.length; n++) {
            var r = e[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
        }
    }

    function on(t, e) {
        return !e || "object" !== nn(e) && "function" != typeof e ? function (t) {
            if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return t
        }(t) : e
    }

    function an(t, e, n) {
        return (an = "undefined" != typeof Reflect && Reflect.get ? Reflect.get : function (t, e, n) {
            var r = function (t, e) {
                for (; !Object.prototype.hasOwnProperty.call(t, e) && null !== (t = ln(t));) ;
                return t
            }(t, e);
            if (r) {
                var i = Object.getOwnPropertyDescriptor(r, e);
                return i.get ? i.get.call(n) : i.value
            }
        })(t, e, n || t)
    }

    function ln(t) {
        return (ln = Object.setPrototypeOf ? Object.getPrototypeOf : function (t) {
            return t.__proto__ || Object.getPrototypeOf(t)
        })(t)
    }

    function cn(t, e) {
        return (cn = Object.setPrototypeOf || function (t, e) {
            return t.__proto__ = e, t
        })(t, e)
    }

    var un = function (t) {
        function e() {
            return function (t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }(this, e), on(this, ln(e).apply(this, arguments))
        }

        var n, r, i;
        return function (t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
            t.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: t,
                    writable: !0,
                    configurable: !0
                }
            }), e && cn(t, e)
        }(e, en), n = e, (r = [{
            key: "dropdown", value: function () {
            }
        }, {
            key: "getValue", value: function (t) {
                return t
            }
        }, {
            key: "element", value: function () {
                var t = this, n = this.tag;
                return this.dd = this.dropdown(), this.dd.change = function (e) {
                    return t.change(n, t.getValue(e))
                }, an(ln(e.prototype), "element", this).call(this).child(this.dd)
            }
        }, {
            key: "setState", value: function (t) {
                t && (this.value = t, this.dd.setTitle(t))
            }
        }]) && rn(n.prototype, r), i && rn(n, i), e
    }();

    function sn(t) {
        return (sn = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
            return typeof t
        } : function (t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        })(t)
    }

    function fn(t, e) {
        for (var n = 0; n < e.length; n++) {
            var r = e[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
        }
    }

    function hn(t, e) {
        return !e || "object" !== sn(e) && "function" != typeof e ? function (t) {
            if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return t
        }(t) : e
    }

    function yn(t) {
        return (yn = Object.setPrototypeOf ? Object.getPrototypeOf : function (t) {
            return t.__proto__ || Object.getPrototypeOf(t)
        })(t)
    }

    function pn(t, e) {
        return (pn = Object.setPrototypeOf || function (t, e) {
            return t.__proto__ = e, t
        })(t, e)
    }

    var vn = function (t) {
        function e(t, n, r, i) {
            var o, l;
            !function (t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }(this, e), (l = hn(this, yn(e).call(this, "div", "".concat(bt, "-dropdown ").concat(i)))).title = t, l.change = function () {
            }, "string" == typeof t ? l.title = a("div", "".concat(bt, "-dropdown-title")).child(t) : r && l.title.addClass("arrow-left");
            for (var c = arguments.length, u = new Array(c > 4 ? c - 4 : 0), s = 4; s < c; s++) u[s - 4] = arguments[s];
            return l.contentEl = (o = a("div", "".concat(bt, "-dropdown-content"))).children.apply(o, u).css("width", n).hide(), l.headerEl = a("div", "".concat(bt, "-dropdown-header")), l.headerEl.on("click", function () {
                "block" !== l.contentEl.css("display") ? l.show() : l.hide()
            }).children(l.title, r ? a("div", "".concat(bt, "-icon arrow-right")).child(a("div", "".concat(bt, "-icon-img arrow-down"))) : ""), l.children(l.headerEl, l.contentEl), l
        }

        var n, r, i;
        return function (t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
            t.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: t,
                    writable: !0,
                    configurable: !0
                }
            }), e && pn(t, e)
        }(e, o), n = e, (r = [{
            key: "setTitle", value: function (t) {
                this.title.html(t), this.hide()
            }
        }, {
            key: "show", value: function () {
                var t = this;
                this.contentEl.show(), this.parent().active(), pt(this.parent(), function () {
                    t.hide()
                })
            }
        }, {
            key: "hide", value: function () {
                this.parent().active(!1), this.contentEl.hide(), yt(this.parent())
            }
        }]) && fn(n.prototype, r), i && fn(n, i), e
    }();

    function dn(t) {
        return (dn = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
            return typeof t
        } : function (t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        })(t)
    }

    function bn(t) {
        return function (t) {
            if (Array.isArray(t)) {
                for (var e = 0, n = new Array(t.length); e < t.length; e++) n[e] = t[e];
                return n
            }
        }(t) || function (t) {
            if (Symbol.iterator in Object(t) || "[object Arguments]" === Object.prototype.toString.call(t)) return Array.from(t)
        }(t) || function () {
            throw new TypeError("Invalid attempt to spread non-iterable instance")
        }()
    }

    function gn(t, e) {
        for (var n = 0; n < e.length; n++) {
            var r = e[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
        }
    }

    function mn(t, e) {
        return !e || "object" !== dn(e) && "function" != typeof e ? function (t) {
            if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return t
        }(t) : e
    }

    function wn(t) {
        return (wn = Object.setPrototypeOf ? Object.getPrototypeOf : function (t) {
            return t.__proto__ || Object.getPrototypeOf(t)
        })(t)
    }

    function kn(t, e) {
        return (kn = Object.setPrototypeOf || function (t, e) {
            return t.__proto__ = e, t
        })(t, e)
    }

    var On = function (t) {
        function e(t, n) {
            var r, i;
            !function (t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }(this, e);
            var o = new Xt("align-".concat(n)), l = t.map(function (t) {
                return (e = "align-".concat(t), a("div", "".concat(bt, "-item")).child(new Xt(e))).on("click", function () {
                    i.setTitle(t), i.change(t)
                });
                var e
            });
            return i = mn(this, (r = wn(e)).call.apply(r, [this, o, "auto", !0, "bottom-left"].concat(bn(l))))
        }

        var n, r, i;
        return function (t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
            t.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: t,
                    writable: !0,
                    configurable: !0
                }
            }), e && kn(t, e)
        }(e, vn), n = e, (r = [{
            key: "setTitle", value: function (t) {
                this.title.setName("align-".concat(t)), this.hide()
            }
        }]) && gn(n.prototype, r), i && gn(n, i), e
    }();

    function Sn(t) {
        return (Sn = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
            return typeof t
        } : function (t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        })(t)
    }

    function xn(t, e) {
        for (var n = 0; n < e.length; n++) {
            var r = e[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
        }
    }

    function En(t, e) {
        return !e || "object" !== Sn(e) && "function" != typeof e ? function (t) {
            if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return t
        }(t) : e
    }

    function jn(t) {
        return (jn = Object.setPrototypeOf ? Object.getPrototypeOf : function (t) {
            return t.__proto__ || Object.getPrototypeOf(t)
        })(t)
    }

    function _n(t, e) {
        return (_n = Object.setPrototypeOf || function (t, e) {
            return t.__proto__ = e, t
        })(t, e)
    }

    var Cn = function (t) {
        function e(t) {
            return function (t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }(this, e), En(this, jn(e).call(this, "align", "", t))
        }

        var n, r, i;
        return function (t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
            t.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: t,
                    writable: !0,
                    configurable: !0
                }
            }), e && _n(t, e)
        }(e, un), n = e, (r = [{
            key: "dropdown", value: function () {
                var t = this.value;
                return new On(["left", "center", "right"], t)
            }
        }]) && xn(n.prototype, r), i && xn(n, i), e
    }();

    function Tn(t) {
        return (Tn = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
            return typeof t
        } : function (t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        })(t)
    }

    function Pn(t, e) {
        for (var n = 0; n < e.length; n++) {
            var r = e[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
        }
    }

    function An(t, e) {
        return !e || "object" !== Tn(e) && "function" != typeof e ? function (t) {
            if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return t
        }(t) : e
    }

    function Rn(t) {
        return (Rn = Object.setPrototypeOf ? Object.getPrototypeOf : function (t) {
            return t.__proto__ || Object.getPrototypeOf(t)
        })(t)
    }

    function Dn(t, e) {
        return (Dn = Object.setPrototypeOf || function (t, e) {
            return t.__proto__ = e, t
        })(t, e)
    }

    var zn = function (t) {
        function e(t) {
            return function (t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }(this, e), An(this, Rn(e).call(this, "valign", "", t))
        }

        var n, r, i;
        return function (t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
            t.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: t,
                    writable: !0,
                    configurable: !0
                }
            }), e && Dn(t, e)
        }(e, un), n = e, (r = [{
            key: "dropdown", value: function () {
                var t = this.value;
                return new On(["top", "middle", "bottom"], t)
            }
        }]) && Pn(n.prototype, r), i && Pn(n, i), e
    }();

    function In(t) {
        return (In = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
            return typeof t
        } : function (t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        })(t)
    }

    function Mn(t, e) {
        for (var n = 0; n < e.length; n++) {
            var r = e[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
        }
    }

    function Wn(t, e) {
        return !e || "object" !== In(e) && "function" != typeof e ? function (t) {
            if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return t
        }(t) : e
    }

    function Fn(t, e, n) {
        return (Fn = "undefined" != typeof Reflect && Reflect.get ? Reflect.get : function (t, e, n) {
            var r = function (t, e) {
                for (; !Object.prototype.hasOwnProperty.call(t, e) && null !== (t = Nn(t));) ;
                return t
            }(t, e);
            if (r) {
                var i = Object.getOwnPropertyDescriptor(r, e);
                return i.get ? i.get.call(n) : i.value
            }
        })(t, e, n || t)
    }

    function Nn(t) {
        return (Nn = Object.setPrototypeOf ? Object.getPrototypeOf : function (t) {
            return t.__proto__ || Object.getPrototypeOf(t)
        })(t)
    }

    function Hn(t, e) {
        return (Hn = Object.setPrototypeOf || function (t, e) {
            return t.__proto__ = e, t
        })(t, e)
    }

    var Vn = function (t) {
        function e() {
            return function (t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }(this, e), Wn(this, Nn(e).apply(this, arguments))
        }

        var n, r, i;
        return function (t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
            t.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: t,
                    writable: !0,
                    configurable: !0
                }
            }), e && Hn(t, e)
        }(e, en), n = e, (r = [{
            key: "element", value: function () {
                var t = this, n = this.tag;
                return Fn(Nn(e.prototype), "element", this).call(this).child(new Xt(n)).on("click", function () {
                    return t.click()
                })
            }
        }, {
            key: "click", value: function () {
                this.change(this.tag, this.toggle())
            }
        }, {
            key: "setState", value: function (t) {
                this.el.active(t)
            }
        }, {
            key: "toggle", value: function () {
                return this.el.toggle()
            }
        }, {
            key: "active", value: function () {
                return this.el.hasClass("active")
            }
        }]) && Mn(n.prototype, r), i && Mn(n, i), e
    }();

    function qn(t) {
        return (qn = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
            return typeof t
        } : function (t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        })(t)
    }

    function Bn(t, e) {
        for (var n = 0; n < e.length; n++) {
            var r = e[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
        }
    }

    function Ln(t, e) {
        return !e || "object" !== qn(e) && "function" != typeof e ? function (t) {
            if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return t
        }(t) : e
    }

    function Un(t) {
        return (Un = Object.setPrototypeOf ? Object.getPrototypeOf : function (t) {
            return t.__proto__ || Object.getPrototypeOf(t)
        })(t)
    }

    function Yn(t, e) {
        return (Yn = Object.setPrototypeOf || function (t, e) {
            return t.__proto__ = e, t
        })(t, e)
    }

    var $n = function (t) {
        function e() {
            return function (t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }(this, e), Ln(this, Un(e).call(this, "autofilter"))
        }

        var n, r, i;
        return function (t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
            t.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: t,
                    writable: !0,
                    configurable: !0
                }
            }), e && Yn(t, e)
        }(e, Vn), n = e, (r = [{
            key: "setState", value: function () {
            }
        }]) && Bn(n.prototype, r), i && Bn(n, i), e
    }();

    function Xn(t) {
        return (Xn = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
            return typeof t
        } : function (t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        })(t)
    }

    function Kn(t, e) {
        return !e || "object" !== Xn(e) && "function" != typeof e ? function (t) {
            if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return t
        }(t) : e
    }

    function Jn(t) {
        return (Jn = Object.setPrototypeOf ? Object.getPrototypeOf : function (t) {
            return t.__proto__ || Object.getPrototypeOf(t)
        })(t)
    }

    function Zn(t, e) {
        return (Zn = Object.setPrototypeOf || function (t, e) {
            return t.__proto__ = e, t
        })(t, e)
    }

    var Gn = function (t) {
        function e() {
            return function (t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }(this, e), Kn(this, Jn(e).call(this, "font-bold", "Ctrl+B"))
        }

        return function (t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
            t.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: t,
                    writable: !0,
                    configurable: !0
                }
            }), e && Zn(t, e)
        }(e, Vn), e
    }();

    function Qn(t) {
        return (Qn = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
            return typeof t
        } : function (t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        })(t)
    }

    function tr(t, e) {
        return !e || "object" !== Qn(e) && "function" != typeof e ? function (t) {
            if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return t
        }(t) : e
    }

    function er(t) {
        return (er = Object.setPrototypeOf ? Object.getPrototypeOf : function (t) {
            return t.__proto__ || Object.getPrototypeOf(t)
        })(t)
    }

    function nr(t, e) {
        return (nr = Object.setPrototypeOf || function (t, e) {
            return t.__proto__ = e, t
        })(t, e)
    }

    var rr = function (t) {
        function e() {
            return function (t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }(this, e), tr(this, er(e).call(this, "font-italic", "Ctrl+I"))
        }

        return function (t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
            t.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: t,
                    writable: !0,
                    configurable: !0
                }
            }), e && nr(t, e)
        }(e, Vn), e
    }();

    function ir(t) {
        return (ir = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
            return typeof t
        } : function (t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        })(t)
    }

    function or(t, e) {
        return !e || "object" !== ir(e) && "function" != typeof e ? function (t) {
            if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return t
        }(t) : e
    }

    function ar(t) {
        return (ar = Object.setPrototypeOf ? Object.getPrototypeOf : function (t) {
            return t.__proto__ || Object.getPrototypeOf(t)
        })(t)
    }

    function lr(t, e) {
        return (lr = Object.setPrototypeOf || function (t, e) {
            return t.__proto__ = e, t
        })(t, e)
    }

    var cr = function (t) {
        function e() {
            return function (t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }(this, e), or(this, ar(e).call(this, "strike", "Ctrl+U"))
        }

        return function (t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
            t.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: t,
                    writable: !0,
                    configurable: !0
                }
            }), e && lr(t, e)
        }(e, Vn), e
    }();

    function ur(t) {
        return (ur = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
            return typeof t
        } : function (t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        })(t)
    }

    function sr(t, e) {
        return !e || "object" !== ur(e) && "function" != typeof e ? function (t) {
            if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return t
        }(t) : e
    }

    function fr(t) {
        return (fr = Object.setPrototypeOf ? Object.getPrototypeOf : function (t) {
            return t.__proto__ || Object.getPrototypeOf(t)
        })(t)
    }

    function hr(t, e) {
        return (hr = Object.setPrototypeOf || function (t, e) {
            return t.__proto__ = e, t
        })(t, e)
    }

    var yr = function (t) {
        function e() {
            return function (t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }(this, e), sr(this, fr(e).call(this, "underline", "Ctrl+U"))
        }

        return function (t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
            t.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: t,
                    writable: !0,
                    configurable: !0
                }
            }), e && hr(t, e)
        }(e, Vn), e
    }();

    function pr(t) {
        return function (t) {
            if (Array.isArray(t)) {
                for (var e = 0, n = new Array(t.length); e < t.length; e++) n[e] = t[e];
                return n
            }
        }(t) || function (t) {
            if (Symbol.iterator in Object(t) || "[object Arguments]" === Object.prototype.toString.call(t)) return Array.from(t)
        }(t) || function () {
            throw new TypeError("Invalid attempt to spread non-iterable instance")
        }()
    }

    var vr = ["#ffffff", "#000100", "#e7e5e6", "#445569", "#5b9cd6", "#ed7d31", "#a5a5a5", "#ffc001", "#4371c6", "#71ae47"],
        dr = [["#f2f2f2", "#7f7f7f", "#d0cecf", "#d5dce4", "#deeaf6", "#fce5d5", "#ededed", "#fff2cd", "#d9e2f3", "#e3efd9"], ["#d8d8d8", "#595959", "#afabac", "#adb8ca", "#bdd7ee", "#f7ccac", "#dbdbdb", "#ffe59a", "#b3c6e7", "#c5e0b3"], ["#bfbfbf", "#3f3f3f", "#756f6f", "#8596b0", "#9cc2e6", "#f4b184", "#c9c9c9", "#fed964", "#8eaada", "#a7d08c"], ["#a5a5a5", "#262626", "#3a3839", "#333f4f", "#2e75b5", "#c45a10", "#7b7b7b", "#bf8e01", "#2f5596", "#538136"], ["#7f7f7f", "#0c0c0c", "#171516", "#222a35", "#1f4e7a", "#843c0a", "#525252", "#7e6000", "#203864", "#365624"]],
        br = ["#c00000", "#fe0000", "#fdc101", "#ffff01", "#93d051", "#00b04e", "#01b0f1", "#0170c1", "#012060", "#7030a0"];

    function gr(t) {
        var e = this;
        return a("td", "").child(a("div", "".concat(bt, "-color-palette-cell")).on("click.stop", function () {
            return e.change(t)
        }).css("background-color", t))
    }

    var mr = function t() {
        var e, n, r, i = this;
        !function (t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }(this, t), this.el = a("div", "".concat(bt, "-color-palette")), this.change = function () {
        };
        var o = a("table", "").children((e = a("tbody", "")).children.apply(e, [(n = a("tr", "".concat(bt, "-theme-color-placeholders"))).children.apply(n, pr(vr.map(function (t) {
            return gr.call(i, t)
        })))].concat(pr(dr.map(function (t) {
            var e;
            return (e = a("tr", "".concat(bt, "-theme-colors"))).children.apply(e, pr(t.map(function (t) {
                return gr.call(i, t)
            })))
        })), [(r = a("tr", "".concat(bt, "-standard-colors"))).children.apply(r, pr(br.map(function (t) {
            return gr.call(i, t)
        })))])));
        this.el.child(o)
    };

    function wr(t) {
        return (wr = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
            return typeof t
        } : function (t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        })(t)
    }

    function kr(t, e) {
        for (var n = 0; n < e.length; n++) {
            var r = e[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
        }
    }

    function Or(t, e) {
        return !e || "object" !== wr(e) && "function" != typeof e ? function (t) {
            if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return t
        }(t) : e
    }

    function Sr(t) {
        return (Sr = Object.setPrototypeOf ? Object.getPrototypeOf : function (t) {
            return t.__proto__ || Object.getPrototypeOf(t)
        })(t)
    }

    function xr(t, e) {
        return (xr = Object.setPrototypeOf || function (t, e) {
            return t.__proto__ = e, t
        })(t, e)
    }

    var Er = function (t) {
        function e(t, n) {
            var r;
            !function (t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }(this, e);
            var i = new Xt(t).css("height", "16px").css("border-bottom", "3px solid ".concat(n)), o = new mr;
            return o.change = function (t) {
                r.setTitle(t), r.change(t)
            }, r = Or(this, Sr(e).call(this, i, "auto", !1, "bottom-left", o.el))
        }

        var n, r, i;
        return function (t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
            t.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: t,
                    writable: !0,
                    configurable: !0
                }
            }), e && xr(t, e)
        }(e, vn), n = e, (r = [{
            key: "setTitle", value: function (t) {
                this.title.css("border-color", t), this.hide()
            }
        }]) && kr(n.prototype, r), i && kr(n, i), e
    }();

    function jr(t) {
        return (jr = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
            return typeof t
        } : function (t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        })(t)
    }

    function _r(t) {
        return function (t) {
            if (Array.isArray(t)) {
                for (var e = 0, n = new Array(t.length); e < t.length; e++) n[e] = t[e];
                return n
            }
        }(t) || function (t) {
            if (Symbol.iterator in Object(t) || "[object Arguments]" === Object.prototype.toString.call(t)) return Array.from(t)
        }(t) || function () {
            throw new TypeError("Invalid attempt to spread non-iterable instance")
        }()
    }

    function Cr(t, e) {
        return !e || "object" !== jr(e) && "function" != typeof e ? function (t) {
            if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return t
        }(t) : e
    }

    function Tr(t) {
        return (Tr = Object.setPrototypeOf ? Object.getPrototypeOf : function (t) {
            return t.__proto__ || Object.getPrototypeOf(t)
        })(t)
    }

    function Pr(t, e) {
        return (Pr = Object.setPrototypeOf || function (t, e) {
            return t.__proto__ = e, t
        })(t, e)
    }

    var Ar = [["thin", '<svg xmlns="http://www.w3.org/2000/svg" width="50" height="1" style="user-select: none;"><line x1="0" y1="0.5" x2="50" y2="0.5" stroke-width="1" stroke="black" style="user-select: none;"></line></svg>'], ["medium", '<svg xmlns="http://www.w3.org/2000/svg" width="50" height="2" style="user-select: none;"><line x1="0" y1="1.0" x2="50" y2="1.0" stroke-width="2" stroke="black" style="user-select: none;"></line></svg>'], ["thick", '<svg xmlns="http://www.w3.org/2000/svg" width="50" height="3" style="user-select: none;"><line x1="0" y1="1.5" x2="50" y2="1.5" stroke-width="3" stroke="black" style="user-select: none;"></line></svg>'], ["dashed", '<svg xmlns="http://www.w3.org/2000/svg" width="50" height="1" style="user-select: none;"><line x1="0" y1="0.5" x2="50" y2="0.5" stroke-width="1" stroke="black" stroke-dasharray="2" style="user-select: none;"></line></svg>'], ["dotted", '<svg xmlns="http://www.w3.org/2000/svg" width="50" height="1" style="user-select: none;"><line x1="0" y1="0.5" x2="50" y2="0.5" stroke-width="1" stroke="black" stroke-dasharray="1" style="user-select: none;"></line></svg>']],
        Rr = function (t) {
            function e(t) {
                var n, r;
                !function (t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }(this, e);
                var i = new Xt("line-type"), o = 0, l = Ar.map(function (e, n) {
                    return a("div", "".concat(bt, "-item state ").concat(t === e[0] ? "checked" : "")).on("click", function () {
                        l[o].toggle("checked"), l[n].toggle("checked"), o = n, r.hide(), r.change(e)
                    }).child(a("div", "".concat(bt, "-line-type")).html(e[1]))
                });
                return r = Cr(this, (n = Tr(e)).call.apply(n, [this, i, "auto", !1, "bottom-left"].concat(_r(l))))
            }

            return function (t, e) {
                if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        writable: !0,
                        configurable: !0
                    }
                }), e && Pr(t, e)
            }(e, vn), e
        }();

    function Dr(t) {
        return function (t) {
            if (Array.isArray(t)) {
                for (var e = 0, n = new Array(t.length); e < t.length; e++) n[e] = t[e];
                return n
            }
        }(t) || function (t) {
            if (Symbol.iterator in Object(t) || "[object Arguments]" === Object.prototype.toString.call(t)) return Array.from(t)
        }(t) || function () {
            throw new TypeError("Invalid attempt to spread non-iterable instance")
        }()
    }

    function zr(t, e) {
        return function (t) {
            if (Array.isArray(t)) return t
        }(t) || function (t, e) {
            var n = [], r = !0, i = !1, o = void 0;
            try {
                for (var a, l = t[Symbol.iterator](); !(r = (a = l.next()).done) && (n.push(a.value), !e || n.length !== e); r = !0) ;
            } catch (t) {
                i = !0, o = t
            } finally {
                try {
                    r || null == l.return || l.return()
                } finally {
                    if (i) throw o
                }
            }
            return n
        }(t, e) || function () {
            throw new TypeError("Invalid attempt to destructure non-iterable instance")
        }()
    }

    function Ir() {
        var t;
        return a("table", "").child((t = a("tbody", "")).children.apply(t, arguments))
    }

    function Mr(t) {
        var e = this;
        return a("td", "").child(a("div", "".concat(bt, "-border-palette-cell")).child(new Xt("border-".concat(t))).on("click", function () {
            e.mode = t;
            var n = e.mode, r = e.style, i = e.color;
            e.change({mode: n, style: r, color: i})
        }))
    }

    var Wr = function t() {
        var e, n, r = this;
        !function (t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }(this, t), this.color = "#000", this.style = "thin", this.mode = "all", this.change = function () {
        }, this.ddColor = new Er("line-color", this.color), this.ddColor.change = function (t) {
            r.color = t
        }, this.ddType = new Rr(this.style), this.ddType.change = function (t) {
            var e = zr(t, 1)[0];
            r.style = e
        }, this.el = a("div", "".concat(bt, "-border-palette"));
        var i = Ir(a("tr", "").children(a("td", "".concat(bt, "-border-palette-left")).child(Ir((e = a("tr", "")).children.apply(e, Dr(["all", "inside", "horizontal", "vertical", "outside"].map(function (t) {
            return Mr.call(r, t)
        }))), (n = a("tr", "")).children.apply(n, Dr(["left", "top", "right", "bottom", "none"].map(function (t) {
            return Mr.call(r, t)
        }))))), a("td", "".concat(bt, "-border-palette-right")).children(a("div", "".concat(bt, "-toolbar-btn")).child(this.ddColor.el), a("div", "".concat(bt, "-toolbar-btn")).child(this.ddType.el))));
        this.el.child(i)
    };

    function Fr(t) {
        return (Fr = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
            return typeof t
        } : function (t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        })(t)
    }

    function Nr(t, e) {
        return !e || "object" !== Fr(e) && "function" != typeof e ? function (t) {
            if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return t
        }(t) : e
    }

    function Hr(t) {
        return (Hr = Object.setPrototypeOf ? Object.getPrototypeOf : function (t) {
            return t.__proto__ || Object.getPrototypeOf(t)
        })(t)
    }

    function Vr(t, e) {
        return (Vr = Object.setPrototypeOf || function (t, e) {
            return t.__proto__ = e, t
        })(t, e)
    }

    var qr = function (t) {
        function e() {
            var t;
            !function (t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }(this, e);
            var n = new Xt("border-all"), r = new Wr;
            return r.change = function (e) {
                t.change(e), t.hide()
            }, t = Nr(this, Hr(e).call(this, n, "auto", !1, "bottom-left", r.el))
        }

        return function (t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
            t.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: t,
                    writable: !0,
                    configurable: !0
                }
            }), e && Vr(t, e)
        }(e, vn), e
    }();

    function Br(t) {
        return (Br = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
            return typeof t
        } : function (t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        })(t)
    }

    function Lr(t, e) {
        for (var n = 0; n < e.length; n++) {
            var r = e[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
        }
    }

    function Ur(t, e) {
        return !e || "object" !== Br(e) && "function" != typeof e ? function (t) {
            if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return t
        }(t) : e
    }

    function Yr(t) {
        return (Yr = Object.setPrototypeOf ? Object.getPrototypeOf : function (t) {
            return t.__proto__ || Object.getPrototypeOf(t)
        })(t)
    }

    function $r(t, e) {
        return ($r = Object.setPrototypeOf || function (t, e) {
            return t.__proto__ = e, t
        })(t, e)
    }

    var Xr = function (t) {
        function e() {
            return function (t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }(this, e), Ur(this, Yr(e).call(this, "border"))
        }

        var n, r, i;
        return function (t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
            t.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: t,
                    writable: !0,
                    configurable: !0
                }
            }), e && $r(t, e)
        }(e, un), n = e, (r = [{
            key: "dropdown", value: function () {
                return new qr
            }
        }]) && Lr(n.prototype, r), i && Lr(n, i), e
    }();

    function Kr(t) {
        return (Kr = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
            return typeof t
        } : function (t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        })(t)
    }

    function Jr(t, e) {
        for (var n = 0; n < e.length; n++) {
            var r = e[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
        }
    }

    function Zr(t, e) {
        return !e || "object" !== Kr(e) && "function" != typeof e ? function (t) {
            if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return t
        }(t) : e
    }

    function Gr(t, e, n) {
        return (Gr = "undefined" != typeof Reflect && Reflect.get ? Reflect.get : function (t, e, n) {
            var r = function (t, e) {
                for (; !Object.prototype.hasOwnProperty.call(t, e) && null !== (t = Qr(t));) ;
                return t
            }(t, e);
            if (r) {
                var i = Object.getOwnPropertyDescriptor(r, e);
                return i.get ? i.get.call(n) : i.value
            }
        })(t, e, n || t)
    }

    function Qr(t) {
        return (Qr = Object.setPrototypeOf ? Object.getPrototypeOf : function (t) {
            return t.__proto__ || Object.getPrototypeOf(t)
        })(t)
    }

    function ti(t, e) {
        return (ti = Object.setPrototypeOf || function (t, e) {
            return t.__proto__ = e, t
        })(t, e)
    }

    var ei = function (t) {
        function e() {
            return function (t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }(this, e), Zr(this, Qr(e).apply(this, arguments))
        }

        var n, r, i;
        return function (t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
            t.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: t,
                    writable: !0,
                    configurable: !0
                }
            }), e && ti(t, e)
        }(e, en), n = e, (r = [{
            key: "element", value: function () {
                var t = this;
                return Gr(Qr(e.prototype), "element", this).call(this).child(new Xt(this.tag)).on("click", function () {
                    return t.change(t.tag)
                })
            }
        }, {
            key: "setState", value: function (t) {
                this.el.disabled(t)
            }
        }]) && Jr(n.prototype, r), i && Jr(n, i), e
    }();

    function ni(t) {
        return (ni = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
            return typeof t
        } : function (t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        })(t)
    }

    function ri(t, e) {
        return !e || "object" !== ni(e) && "function" != typeof e ? function (t) {
            if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return t
        }(t) : e
    }

    function ii(t) {
        return (ii = Object.setPrototypeOf ? Object.getPrototypeOf : function (t) {
            return t.__proto__ || Object.getPrototypeOf(t)
        })(t)
    }

    function oi(t, e) {
        return (oi = Object.setPrototypeOf || function (t, e) {
            return t.__proto__ = e, t
        })(t, e)
    }

    var ai = function (t) {
        function e() {
            return function (t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }(this, e), ri(this, ii(e).call(this, "clearformat"))
        }

        return function (t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
            t.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: t,
                    writable: !0,
                    configurable: !0
                }
            }), e && oi(t, e)
        }(e, ei), e
    }();

    function li(t) {
        return (li = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
            return typeof t
        } : function (t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        })(t)
    }

    function ci(t, e) {
        for (var n = 0; n < e.length; n++) {
            var r = e[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
        }
    }

    function ui(t, e) {
        return !e || "object" !== li(e) && "function" != typeof e ? function (t) {
            if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return t
        }(t) : e
    }

    function si(t) {
        return (si = Object.setPrototypeOf ? Object.getPrototypeOf : function (t) {
            return t.__proto__ || Object.getPrototypeOf(t)
        })(t)
    }

    function fi(t, e) {
        return (fi = Object.setPrototypeOf || function (t, e) {
            return t.__proto__ = e, t
        })(t, e)
    }

    var hi = function (t) {
        function e() {
            return function (t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }(this, e), ui(this, si(e).call(this, "paintformat"))
        }

        var n, r, i;
        return function (t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
            t.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: t,
                    writable: !0,
                    configurable: !0
                }
            }), e && fi(t, e)
        }(e, Vn), n = e, (r = [{
            key: "setState", value: function () {
            }
        }]) && ci(n.prototype, r), i && ci(n, i), e
    }();

    function yi(t) {
        return (yi = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
            return typeof t
        } : function (t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        })(t)
    }

    function pi(t, e) {
        for (var n = 0; n < e.length; n++) {
            var r = e[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
        }
    }

    function vi(t, e) {
        return !e || "object" !== yi(e) && "function" != typeof e ? function (t) {
            if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return t
        }(t) : e
    }

    function di(t) {
        return (di = Object.setPrototypeOf ? Object.getPrototypeOf : function (t) {
            return t.__proto__ || Object.getPrototypeOf(t)
        })(t)
    }

    function bi(t, e) {
        return (bi = Object.setPrototypeOf || function (t, e) {
            return t.__proto__ = e, t
        })(t, e)
    }

    var gi = function (t) {
        function e(t) {
            return function (t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }(this, e), vi(this, di(e).call(this, "color", void 0, t))
        }

        var n, r, i;
        return function (t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
            t.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: t,
                    writable: !0,
                    configurable: !0
                }
            }), e && bi(t, e)
        }(e, un), n = e, (r = [{
            key: "dropdown", value: function () {
                var t = this.tag, e = this.value;
                return new Er(t, e)
            }
        }]) && pi(n.prototype, r), i && pi(n, i), e
    }();

    function mi(t) {
        return (mi = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
            return typeof t
        } : function (t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        })(t)
    }

    function wi(t, e) {
        for (var n = 0; n < e.length; n++) {
            var r = e[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
        }
    }

    function ki(t, e) {
        return !e || "object" !== mi(e) && "function" != typeof e ? function (t) {
            if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return t
        }(t) : e
    }

    function Oi(t) {
        return (Oi = Object.setPrototypeOf ? Object.getPrototypeOf : function (t) {
            return t.__proto__ || Object.getPrototypeOf(t)
        })(t)
    }

    function Si(t, e) {
        return (Si = Object.setPrototypeOf || function (t, e) {
            return t.__proto__ = e, t
        })(t, e)
    }

    var xi = function (t) {
        function e(t) {
            return function (t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }(this, e), ki(this, Oi(e).call(this, "bgcolor", void 0, t))
        }

        var n, r, i;
        return function (t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
            t.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: t,
                    writable: !0,
                    configurable: !0
                }
            }), e && Si(t, e)
        }(e, un), n = e, (r = [{
            key: "dropdown", value: function () {
                var t = this.tag, e = this.value;
                return new Er(t, e)
            }
        }]) && wi(n.prototype, r), i && wi(n, i), e
    }();

    function Ei(t) {
        return (Ei = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
            return typeof t
        } : function (t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        })(t)
    }

    function ji(t) {
        return function (t) {
            if (Array.isArray(t)) {
                for (var e = 0, n = new Array(t.length); e < t.length; e++) n[e] = t[e];
                return n
            }
        }(t) || function (t) {
            if (Symbol.iterator in Object(t) || "[object Arguments]" === Object.prototype.toString.call(t)) return Array.from(t)
        }(t) || function () {
            throw new TypeError("Invalid attempt to spread non-iterable instance")
        }()
    }

    function _i(t, e) {
        return !e || "object" !== Ei(e) && "function" != typeof e ? function (t) {
            if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return t
        }(t) : e
    }

    function Ci(t) {
        return (Ci = Object.setPrototypeOf ? Object.getPrototypeOf : function (t) {
            return t.__proto__ || Object.getPrototypeOf(t)
        })(t)
    }

    function Ti(t, e) {
        return (Ti = Object.setPrototypeOf || function (t, e) {
            return t.__proto__ = e, t
        })(t, e)
    }

    var Pi = function (t) {
        function e() {
            var t, n;
            !function (t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }(this, e);
            var r = he.map(function (t) {
                return a("div", "".concat(bt, "-item")).on("click", function () {
                    n.setTitle("".concat(t.pt)), n.change(t)
                }).child("".concat(t.pt))
            });
            return n = _i(this, (t = Ci(e)).call.apply(t, [this, "10", "60px", !0, "bottom-left"].concat(ji(r))))
        }

        return function (t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
            t.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: t,
                    writable: !0,
                    configurable: !0
                }
            }), e && Ti(t, e)
        }(e, vn), e
    }();

    function Ai(t) {
        return (Ai = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
            return typeof t
        } : function (t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        })(t)
    }

    function Ri(t, e) {
        for (var n = 0; n < e.length; n++) {
            var r = e[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
        }
    }

    function Di(t, e) {
        return !e || "object" !== Ai(e) && "function" != typeof e ? function (t) {
            if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return t
        }(t) : e
    }

    function zi(t) {
        return (zi = Object.setPrototypeOf ? Object.getPrototypeOf : function (t) {
            return t.__proto__ || Object.getPrototypeOf(t)
        })(t)
    }

    function Ii(t, e) {
        return (Ii = Object.setPrototypeOf || function (t, e) {
            return t.__proto__ = e, t
        })(t, e)
    }

    var Mi = function (t) {
        function e() {
            return function (t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }(this, e), Di(this, zi(e).call(this, "font-size"))
        }

        var n, r, i;
        return function (t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
            t.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: t,
                    writable: !0,
                    configurable: !0
                }
            }), e && Ii(t, e)
        }(e, un), n = e, (r = [{
            key: "getValue", value: function (t) {
                return t.pt
            }
        }, {
            key: "dropdown", value: function () {
                return new Pi
            }
        }]) && Ri(n.prototype, r), i && Ri(n, i), e
    }();

    function Wi(t) {
        return (Wi = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
            return typeof t
        } : function (t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        })(t)
    }

    function Fi(t) {
        return function (t) {
            if (Array.isArray(t)) {
                for (var e = 0, n = new Array(t.length); e < t.length; e++) n[e] = t[e];
                return n
            }
        }(t) || function (t) {
            if (Symbol.iterator in Object(t) || "[object Arguments]" === Object.prototype.toString.call(t)) return Array.from(t)
        }(t) || function () {
            throw new TypeError("Invalid attempt to spread non-iterable instance")
        }()
    }

    function Ni(t, e) {
        return !e || "object" !== Wi(e) && "function" != typeof e ? function (t) {
            if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return t
        }(t) : e
    }

    function Hi(t) {
        return (Hi = Object.setPrototypeOf ? Object.getPrototypeOf : function (t) {
            return t.__proto__ || Object.getPrototypeOf(t)
        })(t)
    }

    function Vi(t, e) {
        return (Vi = Object.setPrototypeOf || function (t, e) {
            return t.__proto__ = e, t
        })(t, e)
    }

    var qi = function (t) {
        function e() {
            var t, n;
            !function (t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }(this, e);
            var r = fe.map(function (t) {
                return a("div", "".concat(bt, "-item")).on("click", function () {
                    n.setTitle(t.title), n.change(t)
                }).child(t.title)
            });
            return n = Ni(this, (t = Hi(e)).call.apply(t, [this, fe[0].title, "160px", !0, "bottom-left"].concat(Fi(r))))
        }

        return function (t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
            t.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: t,
                    writable: !0,
                    configurable: !0
                }
            }), e && Vi(t, e)
        }(e, vn), e
    }();

    function Bi(t) {
        return (Bi = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
            return typeof t
        } : function (t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        })(t)
    }

    function Li(t, e) {
        for (var n = 0; n < e.length; n++) {
            var r = e[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
        }
    }

    function Ui(t, e) {
        return !e || "object" !== Bi(e) && "function" != typeof e ? function (t) {
            if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return t
        }(t) : e
    }

    function Yi(t) {
        return (Yi = Object.setPrototypeOf ? Object.getPrototypeOf : function (t) {
            return t.__proto__ || Object.getPrototypeOf(t)
        })(t)
    }

    function $i(t, e) {
        return ($i = Object.setPrototypeOf || function (t, e) {
            return t.__proto__ = e, t
        })(t, e)
    }

    var Xi = function (t) {
        function e() {
            return function (t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }(this, e), Ui(this, Yi(e).call(this, "font-name"))
        }

        var n, r, i;
        return function (t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
            t.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: t,
                    writable: !0,
                    configurable: !0
                }
            }), e && $i(t, e)
        }(e, un), n = e, (r = [{
            key: "getValue", value: function (t) {
                return t.key
            }
        }, {
            key: "dropdown", value: function () {
                return new qi
            }
        }]) && Li(n.prototype, r), i && Li(n, i), e
    }();

    function Ki(t) {
        return (Ki = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
            return typeof t
        } : function (t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        })(t)
    }

    function Ji(t) {
        return function (t) {
            if (Array.isArray(t)) {
                for (var e = 0, n = new Array(t.length); e < t.length; e++) n[e] = t[e];
                return n
            }
        }(t) || function (t) {
            if (Symbol.iterator in Object(t) || "[object Arguments]" === Object.prototype.toString.call(t)) return Array.from(t)
        }(t) || function () {
            throw new TypeError("Invalid attempt to spread non-iterable instance")
        }()
    }

    function Zi(t, e) {
        for (var n = 0; n < e.length; n++) {
            var r = e[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
        }
    }

    function Gi(t, e) {
        return !e || "object" !== Ki(e) && "function" != typeof e ? function (t) {
            if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return t
        }(t) : e
    }

    function Qi(t) {
        return (Qi = Object.setPrototypeOf ? Object.getPrototypeOf : function (t) {
            return t.__proto__ || Object.getPrototypeOf(t)
        })(t)
    }

    function to(t, e) {
        return (to = Object.setPrototypeOf || function (t, e) {
            return t.__proto__ = e, t
        })(t, e)
    }

    var eo = function (t) {
        function e() {
            var t, n;
            !function (t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }(this, e);
            var r = Ce.slice(0);
            return r.splice(2, 0, {key: "divider"}), r.splice(8, 0, {key: "divider"}), r = r.map(function (t) {
                var e = a("div", "".concat(bt, "-item"));
                return "divider" === t.key ? e.addClass("divider") : (e.child(t.title()).on("click", function () {
                    n.setTitle(t.title()), n.change(t)
                }), t.label && e.child(a("div", "label").html(t.label))), e
            }), n = Gi(this, (t = Qi(e)).call.apply(t, [this, "Normal", "220px", !0, "bottom-left"].concat(Ji(r))))
        }

        var n, r, i;
        return function (t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
            t.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: t,
                    writable: !0,
                    configurable: !0
                }
            }), e && to(t, e)
        }(e, vn), n = e, (r = [{
            key: "setTitle", value: function (t) {
                for (var e = 0; e < Ce.length; e += 1) Ce[e].key === t && this.title.html(Ce[e].title);
                this.hide()
            }
        }]) && Zi(n.prototype, r), i && Zi(n, i), e
    }();

    function no(t) {
        return (no = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
            return typeof t
        } : function (t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        })(t)
    }

    function ro(t, e) {
        for (var n = 0; n < e.length; n++) {
            var r = e[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
        }
    }

    function io(t, e) {
        return !e || "object" !== no(e) && "function" != typeof e ? function (t) {
            if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return t
        }(t) : e
    }

    function oo(t) {
        return (oo = Object.setPrototypeOf ? Object.getPrototypeOf : function (t) {
            return t.__proto__ || Object.getPrototypeOf(t)
        })(t)
    }

    function ao(t, e) {
        return (ao = Object.setPrototypeOf || function (t, e) {
            return t.__proto__ = e, t
        })(t, e)
    }

    var lo = function (t) {
        function e() {
            return function (t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }(this, e), io(this, oo(e).call(this, "format"))
        }

        var n, r, i;
        return function (t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
            t.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: t,
                    writable: !0,
                    configurable: !0
                }
            }), e && ao(t, e)
        }(e, un), n = e, (r = [{
            key: "getValue", value: function (t) {
                return t.key
            }
        }, {
            key: "dropdown", value: function () {
                return new eo
            }
        }]) && ro(n.prototype, r), i && ro(n, i), e
    }();

    function co(t) {
        return (co = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
            return typeof t
        } : function (t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        })(t)
    }

    function uo(t) {
        return function (t) {
            if (Array.isArray(t)) {
                for (var e = 0, n = new Array(t.length); e < t.length; e++) n[e] = t[e];
                return n
            }
        }(t) || function (t) {
            if (Symbol.iterator in Object(t) || "[object Arguments]" === Object.prototype.toString.call(t)) return Array.from(t)
        }(t) || function () {
            throw new TypeError("Invalid attempt to spread non-iterable instance")
        }()
    }

    function so(t, e) {
        return !e || "object" !== co(e) && "function" != typeof e ? function (t) {
            if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return t
        }(t) : e
    }

    function fo(t) {
        return (fo = Object.setPrototypeOf ? Object.getPrototypeOf : function (t) {
            return t.__proto__ || Object.getPrototypeOf(t)
        })(t)
    }

    function ho(t, e) {
        return (ho = Object.setPrototypeOf || function (t, e) {
            return t.__proto__ = e, t
        })(t, e)
    }

    var yo = function (t) {
        function e() {
            var t, n;
            !function (t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }(this, e);
            var r = we.map(function (t) {
                return a("div", "".concat(bt, "-item")).on("click", function () {
                    n.hide(), n.change(t)
                }).child(t.key)
            });
            return n = so(this, (t = fo(e)).call.apply(t, [this, new Xt("formula"), "180px", !0, "bottom-left"].concat(uo(r))))
        }

        return function (t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
            t.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: t,
                    writable: !0,
                    configurable: !0
                }
            }), e && ho(t, e)
        }(e, vn), e
    }();

    function po(t) {
        return (po = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
            return typeof t
        } : function (t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        })(t)
    }

    function vo(t, e) {
        for (var n = 0; n < e.length; n++) {
            var r = e[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
        }
    }

    function bo(t, e) {
        return !e || "object" !== po(e) && "function" != typeof e ? function (t) {
            if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return t
        }(t) : e
    }

    function go(t) {
        return (go = Object.setPrototypeOf ? Object.getPrototypeOf : function (t) {
            return t.__proto__ || Object.getPrototypeOf(t)
        })(t)
    }

    function mo(t, e) {
        return (mo = Object.setPrototypeOf || function (t, e) {
            return t.__proto__ = e, t
        })(t, e)
    }

    var wo = function (t) {
        function e() {
            return function (t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }(this, e), bo(this, go(e).call(this, "formula"))
        }

        var n, r, i;
        return function (t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
            t.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: t,
                    writable: !0,
                    configurable: !0
                }
            }), e && mo(t, e)
        }(e, un), n = e, (r = [{
            key: "getValue", value: function (t) {
                return t.key
            }
        }, {
            key: "dropdown", value: function () {
                return new yo
            }
        }]) && vo(n.prototype, r), i && vo(n, i), e
    }();

    function ko(t) {
        return (ko = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
            return typeof t
        } : function (t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        })(t)
    }

    function Oo(t, e) {
        return !e || "object" !== ko(e) && "function" != typeof e ? function (t) {
            if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return t
        }(t) : e
    }

    function So(t) {
        return (So = Object.setPrototypeOf ? Object.getPrototypeOf : function (t) {
            return t.__proto__ || Object.getPrototypeOf(t)
        })(t)
    }

    function xo(t, e) {
        return (xo = Object.setPrototypeOf || function (t, e) {
            return t.__proto__ = e, t
        })(t, e)
    }

    var Eo = function (t) {
        function e() {
            return function (t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }(this, e), Oo(this, So(e).call(this, "freeze"))
        }

        return function (t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
            t.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: t,
                    writable: !0,
                    configurable: !0
                }
            }), e && xo(t, e)
        }(e, Vn), e
    }();

    function jo(t) {
        return (jo = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
            return typeof t
        } : function (t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        })(t)
    }

    function _o(t, e) {
        for (var n = 0; n < e.length; n++) {
            var r = e[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
        }
    }

    function Co(t, e) {
        return !e || "object" !== jo(e) && "function" != typeof e ? function (t) {
            if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return t
        }(t) : e
    }

    function To(t) {
        return (To = Object.setPrototypeOf ? Object.getPrototypeOf : function (t) {
            return t.__proto__ || Object.getPrototypeOf(t)
        })(t)
    }

    function Po(t, e) {
        return (Po = Object.setPrototypeOf || function (t, e) {
            return t.__proto__ = e, t
        })(t, e)
    }

    var Ao = function (t) {
        function e() {
            return function (t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }(this, e), Co(this, To(e).call(this, "merge"))
        }

        var n, r, i;
        return function (t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
            t.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: t,
                    writable: !0,
                    configurable: !0
                }
            }), e && Po(t, e)
        }(e, Vn), n = e, (r = [{
            key: "setState", value: function (t, e) {
                this.el.active(t).disabled(e)
            }
        }]) && _o(n.prototype, r), i && _o(n, i), e
    }();

    function Ro(t) {
        return (Ro = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
            return typeof t
        } : function (t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        })(t)
    }

    function Do(t, e) {
        return !e || "object" !== Ro(e) && "function" != typeof e ? function (t) {
            if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return t
        }(t) : e
    }

    function zo(t) {
        return (zo = Object.setPrototypeOf ? Object.getPrototypeOf : function (t) {
            return t.__proto__ || Object.getPrototypeOf(t)
        })(t)
    }

    function Io(t, e) {
        return (Io = Object.setPrototypeOf || function (t, e) {
            return t.__proto__ = e, t
        })(t, e)
    }

    var Mo = function (t) {
        function e() {
            return function (t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }(this, e), Do(this, zo(e).call(this, "redo", "Ctrl+Y"))
        }

        return function (t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
            t.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: t,
                    writable: !0,
                    configurable: !0
                }
            }), e && Io(t, e)
        }(e, ei), e
    }();

    function Wo(t) {
        return (Wo = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
            return typeof t
        } : function (t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        })(t)
    }

    function Fo(t, e) {
        return !e || "object" !== Wo(e) && "function" != typeof e ? function (t) {
            if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return t
        }(t) : e
    }

    function No(t) {
        return (No = Object.setPrototypeOf ? Object.getPrototypeOf : function (t) {
            return t.__proto__ || Object.getPrototypeOf(t)
        })(t)
    }

    function Ho(t, e) {
        return (Ho = Object.setPrototypeOf || function (t, e) {
            return t.__proto__ = e, t
        })(t, e)
    }

    var Vo = function (t) {
        function e() {
            return function (t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }(this, e), Fo(this, No(e).call(this, "undo", "Ctrl+Z"))
        }

        return function (t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
            t.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: t,
                    writable: !0,
                    configurable: !0
                }
            }), e && Ho(t, e)
        }(e, ei), e
    }();

    function qo(t) {
        return (qo = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
            return typeof t
        } : function (t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        })(t)
    }

    function Bo(t, e) {
        return !e || "object" !== qo(e) && "function" != typeof e ? function (t) {
            if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return t
        }(t) : e
    }

    function Lo(t) {
        return (Lo = Object.setPrototypeOf ? Object.getPrototypeOf : function (t) {
            return t.__proto__ || Object.getPrototypeOf(t)
        })(t)
    }

    function Uo(t, e) {
        return (Uo = Object.setPrototypeOf || function (t, e) {
            return t.__proto__ = e, t
        })(t, e)
    }

    var Yo = function (t) {
        function e() {
            return function (t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }(this, e), Bo(this, Lo(e).call(this, "textwrap"))
        }

        return function (t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
            t.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: t,
                    writable: !0,
                    configurable: !0
                }
            }), e && Uo(t, e)
        }(e, Vn), e
    }();

    function $o(t, e) {
        for (var n = 0; n < e.length; n++) {
            var r = e[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
        }
    }

    function Xo(t) {
        return (Xo = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
            return typeof t
        } : function (t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        })(t)
    }

    function Ko(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }

    function Jo(t, e) {
        return !e || "object" !== Xo(e) && "function" != typeof e ? function (t) {
            if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return t
        }(t) : e
    }

    function Zo(t) {
        return (Zo = Object.setPrototypeOf ? Object.getPrototypeOf : function (t) {
            return t.__proto__ || Object.getPrototypeOf(t)
        })(t)
    }

    function Go(t, e) {
        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
        t.prototype = Object.create(e && e.prototype, {
            constructor: {
                value: t,
                writable: !0,
                configurable: !0
            }
        }), e && Qo(t, e)
    }

    function Qo(t, e) {
        return (Qo = Object.setPrototypeOf || function (t, e) {
            return t.__proto__ = e, t
        })(t, e)
    }

    var ta = function (t) {
        function e() {
            var t;
            Ko(this, e);
            var n = new Xt("ellipsis"), r = a("div", "".concat(bt, "-toolbar-more"));
            return (t = Jo(this, Zo(e).call(this, n, "auto", !1, "bottom-right", r))).moreBtns = r, t.contentEl.css("max-width", "420px"), t
        }

        return Go(e, vn), e
    }(), ea = function (t) {
        function e() {
            var t;
            return Ko(this, e), (t = Jo(this, Zo(e).call(this, "more"))).el.hide(), t
        }

        var n, r, i;
        return Go(e, un), n = e, (r = [{
            key: "dropdown", value: function () {
                return new ta
            }
        }, {
            key: "show", value: function () {
                this.el.show()
            }
        }, {
            key: "hide", value: function () {
                this.el.hide()
            }
        }]) && $o(n.prototype, r), i && $o(n, i), e
    }();

    function na(t, e) {
        for (var n = 0; n < e.length; n++) {
            var r = e[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
        }
    }

    function ra(t, e) {
        return function (t) {
            if (Array.isArray(t)) return t
        }(t) || function (t, e) {
            var n = [], r = !0, i = !1, o = void 0;
            try {
                for (var a, l = t[Symbol.iterator](); !(r = (a = l.next()).done) && (n.push(a.value), !e || n.length !== e); r = !0) ;
            } catch (t) {
                i = !0, o = t
            } finally {
                try {
                    r || null == l.return || l.return()
                } finally {
                    if (i) throw o
                }
            }
            return n
        }(t, e) || function () {
            throw new TypeError("Invalid attempt to destructure non-iterable instance")
        }()
    }

    function ia() {
        return a("div", "".concat(bt, "-toolbar-divider"))
    }

    function oa() {
        var t, e, n = this.el, r = this.btns, i = this.moreEl, o = this.btns2, a = i.dd, l = a.moreBtns,
            c = a.contentEl;
        n.css("width", "".concat(this.widthFn() - 60, "px"));
        var u = n.box(), s = 160, f = 12, h = [], y = [];
        o.forEach(function (t, e) {
            var n = ra(t, 2), r = n[0], i = n[1];
            s += i, e === o.length - 1 || s < u.width ? h.push(r) : (f += i, y.push(r))
        }), (t = r.html("")).children.apply(t, h), (e = l.html("")).children.apply(e, y), c.css("width", "".concat(f, "px")), y.length > 0 ? i.show() : i.hide()
    }

    var aa = function () {
        function t(e, n) {
            var r = this, i = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
            !function (t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }(this, t), this.data = e, this.change = function () {
            }, this.widthFn = n, this.isHide = i;
            var o = e.defaultStyle();
            this.items = [[this.undoEl = new Vo, this.redoEl = new Mo, this.paintformatEl = new hi, this.clearformatEl = new ai], ia(), [this.formatEl = new lo], ia(), [this.fontEl = new Xi, this.fontSizeEl = new Mi], ia(), [this.boldEl = new Gn, this.italicEl = new rr, this.underlineEl = new yr, this.strikeEl = new cr, this.textColorEl = new gi(o.color)], ia(), [this.fillColorEl = new xi(o.bgcolor), this.borderEl = new Xr, this.mergeEl = new Ao], ia(), [this.alignEl = new Cn(o.align), this.valignEl = new zn(o.valign), this.textwrapEl = new Yo], ia(), [this.freezeEl = new Eo, this.autofilterEl = new $n, this.formulaEl = new wo, this.moreEl = new ea]], this.el = a("div", "".concat(bt, "-toolbar")), this.btns = a("div", "".concat(bt, "-toolbar-btns")), this.items.forEach(function (t) {
                Array.isArray(t) ? t.forEach(function (t) {
                    r.btns.child(t.el), t.change = function () {
                        r.change.apply(r, arguments)
                    }
                }) : r.btns.child(t.el)
            }), this.el.child(this.btns), i ? this.el.hide() : (this.reset(), setTimeout(function () {
                (function () {
                    var t = this;
                    this.btns2 = [], this.items.forEach(function (e) {
                        if (Array.isArray(e)) e.forEach(function (e) {
                            var n = e.el, r = n.box(), i = n.computedStyle(), o = i.marginLeft, a = i.marginRight;
                            t.btns2.push([n, r.width + parseInt(o, 10) + parseInt(a, 10)])
                        }); else {
                            var n = e.box(), r = e.computedStyle(), i = r.marginLeft, o = r.marginRight;
                            t.btns2.push([e, n.width + parseInt(i, 10) + parseInt(o, 10)])
                        }
                    })
                }).call(r), oa.call(r)
            }, 0), ft(window, "resize", function () {
                oa.call(r)
            }))
        }

        var e, n, r;
        return e = t, (n = [{
            key: "paintformatActive", value: function () {
                return this.paintformatEl.active()
            }
        }, {
            key: "paintformatToggle", value: function () {
                this.paintformatEl.toggle()
            }
        }, {
            key: "trigger", value: function (t) {
                this["".concat(t, "El")].click()
            }
        }, {
            key: "reset", value: function () {
                if (!this.isHide) {
                    var t = this.data, e = t.getSelectedCellStyle(), n = t.getSelectedCell();
                    this.undoEl.setState(!t.canUndo()), this.redoEl.setState(!t.canRedo()), this.mergeEl.setState(t.canUnmerge(), !t.selector.multiple()), this.autofilterEl.setState(!t.canAutofilter());
                    var r = e.font;
                    this.fontEl.setState(r.name), this.fontSizeEl.setState(r.size), this.boldEl.setState(r.bold), this.italicEl.setState(r.italic), this.underlineEl.setState(e.underline), this.strikeEl.setState(e.strike), this.textColorEl.setState(e.color), this.fillColorEl.setState(e.bgcolor), this.alignEl.setState(e.align), this.valignEl.setState(e.valign), this.textwrapEl.setState(e.textwrap), this.freezeEl.setState(t.freezeIsActive()), n && n.format && this.formatEl.setState(n.format)
                }
            }
        }]) && na(e.prototype, n), r && na(e, r), t
    }();

    function la(t) {
        return function (t) {
            if (Array.isArray(t)) {
                for (var e = 0, n = new Array(t.length); e < t.length; e++) n[e] = t[e];
                return n
            }
        }(t) || function (t) {
            if (Symbol.iterator in Object(t) || "[object Arguments]" === Object.prototype.toString.call(t)) return Array.from(t)
        }(t) || function () {
            throw new TypeError("Invalid attempt to spread non-iterable instance")
        }()
    }

    function ca(t, e) {
        for (var n = 0; n < e.length; n++) {
            var r = e[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
        }
    }

    var ua = function () {
        function t(e, n) {
            var r, i = this, o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "600px";
            !function (t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }(this, t), this.title = e, this.el = a("div", "".concat(bt, "-modal")).css("width", o).children(a("div", "".concat(bt, "-modal-header")).children(new Xt("close").on("click.stop", function () {
                return i.hide()
            }), this.title), (r = a("div", "".concat(bt, "-modal-content"))).children.apply(r, la(n))).hide()
        }

        var e, n, r;
        return e = t, (n = [{
            key: "show", value: function () {
                var t = this;
                this.dimmer = a("div", "".concat(bt, "-dimmer active")), document.body.appendChild(this.dimmer.el);
                var e = this.el.show().box(), n = e.width, r = e.height, i = document.documentElement,
                    o = i.clientHeight, l = i.clientWidth;
                this.el.offset({left: (l - n) / 2, top: (o - r) / 3}), window.xkeydownEsc = function (e) {
                    27 === e.keyCode && t.hide()
                }, ft(window, "keydown", window.xkeydownEsc)
            }
        }, {
            key: "hide", value: function () {
                this.el.hide(), document.body.removeChild(this.dimmer.el), ht(window, "keydown", window.xkeydownEsc), delete window.xkeydownEsc
            }
        }]) && ca(e.prototype, n), r && ca(e, r), t
    }();

    function sa(t, e) {
        for (var n = 0; n < e.length; n++) {
            var r = e[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
        }
    }

    var fa = function () {
        function t(e, n) {
            var r = this;
            !function (t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }(this, t), this.vchange = function () {
            }, this.el = a("div", "".concat(bt, "-form-input")), this.input = a("input", "").css("width", e).on("input", function (t) {
                return r.vchange(t)
            }).attr("placeholder", n), this.el.child(this.input)
        }

        var e, n, r;
        return e = t, (n = [{
            key: "hint", value: function (t) {
                this.input.attr("placeholder", t)
            }
        }, {
            key: "val", value: function (t) {
                return this.input.val(t)
            }
        }]) && sa(e.prototype, n), r && sa(e, r), t
    }();

    function ha(t, e) {
        for (var n = 0; n < e.length; n++) {
            var r = e[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
        }
    }

    var ya = function () {
        function t(e, n, r) {
            var i = this, o = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : function (t) {
                return t
            }, l = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : function () {
            };
            !function (t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }(this, t), this.key = e, this.getTitle = o, this.vchange = function () {
            }, this.el = a("div", "".concat(bt, "-form-select")), this.suggest = new qt(n.map(function (t) {
                return {key: t, title: i.getTitle(t)}
            }), function (t) {
                i.itemClick(t.key), l(t.key), i.vchange(t.key)
            }, r, this.el), this.el.children(this.itemEl = a("div", "input-text").html(this.getTitle(e)), this.suggest.el).on("click", function () {
                return i.show()
            })
        }

        var e, n, r;
        return e = t, (n = [{
            key: "show", value: function () {
                this.suggest.search("")
            }
        }, {
            key: "itemClick", value: function (t) {
                this.key = t, this.itemEl.html(this.getTitle(t))
            }
        }, {
            key: "val", value: function (t) {
                return void 0 !== t ? (this.key = t, this.itemEl.html(this.getTitle(t)), this) : this.key
            }
        }]) && ha(e.prototype, n), r && ha(e, r), t
    }();

    function pa(t, e) {
        for (var n = 0; n < e.length; n++) {
            var r = e[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
        }
    }

    var va = {number: /(^\d+$)|(^\d+(\.\d{0,4})?$)/, date: /^\d{4}-\d{1,2}-\d{1,2}$/}, da = function () {
        function t(e, n, r, i) {
            var o = this;
            !function (t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }(this, t), this.label = "", this.rule = n, r && (this.label = a("label", "label").css("width", "".concat(i, "px")).html(r)), this.tip = a("div", "tip").child("tip").hide(), this.input = e, this.input.vchange = function () {
                return o.validate()
            }, this.el = a("div", "".concat(bt, "-form-field")).children(this.label, e.el, this.tip)
        }

        var e, n, r;
        return e = t, (n = [{
            key: "isShow", value: function () {
                return "none" !== this.el.css("display")
            }
        }, {
            key: "show", value: function () {
                this.el.show()
            }
        }, {
            key: "hide", value: function () {
                return this.el.hide(), this
            }
        }, {
            key: "val", value: function (t) {
                return this.input.val(t)
            }
        }, {
            key: "hint", value: function (t) {
                this.input.hint(t)
            }
        }, {
            key: "validate", value: function () {
                var t = this.input, e = this.rule, n = this.tip, r = this.el, i = t.val();
                if (e.required && /^\s*$/.test(i)) return n.html(q("validation.required")), r.addClass("error"), !1;
                if ((e.type || e.pattern) && !(e.pattern || va[e.type]).test(i)) return n.html(q("validation.notMatch")), r.addClass("error"), !1;
                return r.removeClass("error"), !0
            }
        }]) && pa(e.prototype, n), r && pa(e, r), t
    }();

    function ba(t) {
        return (ba = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
            return typeof t
        } : function (t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        })(t)
    }

    function ga(t, e) {
        return !e || "object" !== ba(e) && "function" != typeof e ? function (t) {
            if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return t
        }(t) : e
    }

    function ma(t) {
        return (ma = Object.setPrototypeOf ? Object.getPrototypeOf : function (t) {
            return t.__proto__ || Object.getPrototypeOf(t)
        })(t)
    }

    function wa(t, e) {
        return (wa = Object.setPrototypeOf || function (t, e) {
            return t.__proto__ = e, t
        })(t, e)
    }

    var ka = function (t) {
        function e(t) {
            var n, r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
            return function (t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }(this, e), (n = ga(this, ma(e).call(this, "div", "".concat(bt, "-button ").concat(r)))).child(q("button.".concat(t))), n
        }

        return function (t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
            t.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: t,
                    writable: !0,
                    configurable: !0
                }
            }), e && wa(t, e)
        }(e, o), e
    }();

    function Oa(t) {
        return (Oa = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
            return typeof t
        } : function (t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        })(t)
    }

    function Sa(t, e) {
        for (var n = 0; n < e.length; n++) {
            var r = e[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
        }
    }

    function xa(t, e) {
        return !e || "object" !== Oa(e) && "function" != typeof e ? function (t) {
            if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return t
        }(t) : e
    }

    function Ea(t) {
        return (Ea = Object.setPrototypeOf ? Object.getPrototypeOf : function (t) {
            return t.__proto__ || Object.getPrototypeOf(t)
        })(t)
    }

    function ja(t, e) {
        return (ja = Object.setPrototypeOf || function (t, e) {
            return t.__proto__ = e, t
        })(t, e)
    }

    var _a = 100, Ca = function (t) {
        function e() {
            var t;
            !function (t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }(this, e);
            var n = new da(new ya("cell", ["cell"], "100%", function (t) {
                    return q("dataValidation.modeType.".concat(t))
                }), {required: !0}, "".concat(q("dataValidation.range"), ":"), _a),
                r = new da(new fa("120px", "E3 or E3:F12"), {
                    required: !0,
                    pattern: /^([A-Z]{1,2}[1-9]\d*)(:[A-Z]{1,2}[1-9]\d*)?$/
                }), i = new da(new ya("list", ["list", "number", "date", "phone", "email"], "100%", function (t) {
                    return q("dataValidation.type.".concat(t))
                }, function (e) {
                    return t.criteriaSelected(e)
                }), {required: !0}, "".concat(q("dataValidation.criteria"), ":"), _a),
                o = new da(new ya("be", ["be", "nbe", "eq", "neq", "lt", "lte", "gt", "gte"], "160px", function (t) {
                    return q("dataValidation.operator.".concat(t))
                }, function (e) {
                    return t.criteriaOperatorSelected(e)
                }), {required: !0}).hide(), l = new da(new fa("70px", "10"), {required: !0}).hide(),
                c = new da(new fa("70px", "100"), {required: !0, type: "number"}).hide(),
                u = new da(new fa("120px", "a,b,c"), {required: !0}),
                s = new da(new fa("70px", "10"), {required: !0, type: "number"}).hide();
            return (t = xa(this, Ea(e).call(this, q("contextmenu.validation"), [a("div", "".concat(bt, "-form-fields")).children(n.el, r.el), a("div", "".concat(bt, "-form-fields")).children(i.el, o.el, l.el, c.el, s.el, u.el), a("div", "".concat(bt, "-buttons")).children(new ka("cancel").on("click", function () {
                return t.btnClick("cancel")
            }), new ka("remove").on("click", function () {
                return t.btnClick("remove")
            }), new ka("save", "primary").on("click", function () {
                return t.btnClick("save")
            }))]))).mf = n, t.rf = r, t.cf = i, t.of = o, t.minvf = l, t.maxvf = c, t.vf = s, t.svf = u, t.change = function () {
            }, t
        }

        var n, r, i;
        return function (t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
            t.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: t,
                    writable: !0,
                    configurable: !0
                }
            }), e && ja(t, e)
        }(e, ua), n = e, (r = [{
            key: "showVf", value: function (t) {
                var e = "date" === t ? "2018-11-12" : "10", n = this.vf;
                n.input.hint(e), n.show()
            }
        }, {
            key: "criteriaSelected", value: function (t) {
                var e = this.of, n = this.minvf, r = this.maxvf, i = this.vf, o = this.svf;
                "date" === t || "number" === t ? (e.show(), n.rule.type = t, r.rule.type = t, "date" === t ? (n.hint("2018-11-12"), r.hint("2019-11-12")) : (n.hint("10"), r.hint("100")), n.show(), r.show(), i.hide(), o.hide()) : ("list" === t ? o.show() : o.hide(), i.hide(), e.hide(), n.hide(), r.hide())
            }
        }, {
            key: "criteriaOperatorSelected", value: function (t) {
                if (t) {
                    var e = this.minvf, n = this.maxvf, r = this.vf;
                    if ("be" === t || "nbe" === t) e.show(), n.show(), r.hide(); else {
                        var i = this.cf.val();
                        r.rule.type = i, "date" === i ? r.hint("2018-11-12") : r.hint("10"), r.show(), e.hide(), n.hide()
                    }
                }
            }
        }, {
            key: "btnClick", value: function (t) {
                if ("cancel" === t) this.hide(); else if ("remove" === t) this.change("remove"), this.hide(); else if ("save" === t) {
                    for (var e = ["mf", "rf", "cf", "of", "svf", "vf", "minvf", "maxvf"], n = 0; n < e.length; n += 1) {
                        var r = this[e[n]];
                        if (r.isShow() && !r.validate()) return
                    }
                    var i = this.mf.val(), o = this.rf.val(), a = this.cf.val(), l = this.of.val(), c = this.svf.val();
                    "number" !== a && "date" !== a || (c = "be" === l || "nbe" === l ? [this.minvf.val(), this.maxvf.val()] : this.vf.val()), this.change("save", i, o, {
                        type: a,
                        operator: l,
                        required: !1,
                        value: c
                    }), this.hide()
                }
            }
        }, {
            key: "setValue", value: function (t) {
                if (t) {
                    var e = this.mf, n = this.rf, r = this.cf, i = this.of, o = this.svf, a = this.vf, l = this.minvf,
                        c = this.maxvf, u = t.mode, s = t.ref, f = t.validator || {type: "list"}, h = f.type,
                        y = f.operator, p = f.value;
                    e.val(u || "cell"), n.val(s), r.val(h), i.val(y), Array.isArray(p) ? (l.val(p[0]), c.val(p[1])) : (o.val(p || ""), a.val(p || "")), this.criteriaSelected(h), this.criteriaOperatorSelected(y)
                }
                this.show()
            }
        }]) && Sa(n.prototype, r), i && Sa(n, i), e
    }();

    function Ta(t, e) {
        for (var n = 0; n < e.length; n++) {
            var r = e[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
        }
    }

    function Pa(t) {
        return a("div", "".concat(bt, "-item ").concat(t))
    }

    function Aa(t) {
        var e = this;
        return Pa("state").child(q("sort.".concat(t))).on("click.stop", function () {
            return e.itemClick(t)
        })
    }

    function Ra() {
        var t = this.filterhEl, e = this.filterValues, n = this.values;
        t.html("".concat(e.length, " / ").concat(n.length)), t.checked(e.length === n.length)
    }

    var Da = function () {
        function t() {
            var e = this;
            !function (t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }(this, t), this.filterbEl = a("div", "".concat(bt, "-body")), this.filterhEl = a("div", "".concat(bt, "-header state")).on("click.stop", function () {
                return e.filterClick(0, "all")
            }), this.el = a("div", "".concat(bt, "-sort-filter")).children(this.sortAscEl = Aa.call(this, "asc"), this.sortDescEl = Aa.call(this, "desc"), Pa("divider"), a("div", "".concat(bt, "-filter")).children(this.filterhEl, this.filterbEl), a("div", "".concat(bt, "-buttons")).children(new ka("cancel").on("click", function () {
                return e.btnClick("cancel")
            }), new ka("ok", "primary").on("click", function () {
                return e.btnClick("ok")
            }))).hide(), this.ci = null, this.sortDesc = null, this.values = null, this.filterValues = []
        }

        var e, n, r;
        return e = t, (n = [{
            key: "btnClick", value: function (t) {
                if ("ok" === t) {
                    var e = this.ci, n = this.sort, r = this.filterValues;
                    this.ok && this.ok(e, n, "in", r)
                }
                this.hide()
            }
        }, {
            key: "itemClick", value: function (t) {
                this.sort = t;
                var e = this.sortAscEl, n = this.sortDescEl;
                e.checked("asc" === t), n.checked("desc" === t)
            }
        }, {
            key: "filterClick", value: function (t, e) {
                var n = this.filterbEl, r = this.filterValues, i = this.values, o = n.children();
                "all" === e ? o.length === r.length ? (this.filterValues = [], o.forEach(function (t) {
                    return a(t).checked(!1)
                })) : (this.filterValues = Array.from(i), o.forEach(function (t) {
                    return a(t).checked(!0)
                })) : a(o[t]).toggle("checked") ? r.push(e) : r.splice(r.findIndex(function (t) {
                    return t === e
                }), 1);
                Ra.call(this)
            }
        }, {
            key: "set", value: function (t, e, n, r) {
                this.ci = t;
                var i = this.sortAscEl, o = this.sortDescEl;
                null !== r ? (this.sort = r.order, i.checked(r.asc()), o.checked(r.desc())) : (this.sortDesc = null, i.checked(!1), o.checked(!1)), this.values = Object.keys(e), this.filterValues = n ? Array.from(n.value) : Object.keys(e), function (t) {
                    var e = this, n = this.filterbEl, r = this.filterValues;
                    n.html(""), Object.keys(t).forEach(function (i, o) {
                        var l = t[i], c = r.includes(i) ? "checked" : "";
                        n.child(a("div", "".concat(bt, "-item state ").concat(c)).on("click.stop", function () {
                            return e.filterClick(o, i)
                        }).children("" === i ? q("filter.empty") : i, a("div", "label").html("(".concat(l, ")"))))
                    })
                }.call(this, e, n), Ra.call(this)
            }
        }, {
            key: "setOffset", value: function (t) {
                var e = this;
                this.el.offset(t).show();
                var n = 1;
                pt(this.el, function () {
                    n <= 0 && e.hide(), n -= 1
                })
            }
        }, {
            key: "show", value: function () {
                this.el.show()
            }
        }, {
            key: "hide", value: function () {
                this.el.hide(), yt(this.el)
            }
        }]) && Ta(e.prototype, n), r && Ta(e, r), t
    }();

    function za(t, e) {
        var n = a("div", "".concat(bt, "-toast")), r = a("div", "".concat(bt, "-dimmer active"));
        n.children(a("div", "".concat(bt, "-toast-header")).children(new Xt("close").on("click.stop", function () {
            return document.body.removeChild(n.el), void document.body.removeChild(r.el)
        }), t), a("div", "".concat(bt, "-toast-content")).html(e)), document.body.appendChild(n.el), document.body.appendChild(r.el);
        var i = n.box(), o = i.width, l = i.height, c = document.documentElement, u = c.clientHeight, s = c.clientWidth;
        n.offset({left: (s - o) / 2, top: (u - l) / 3})
    }

    function Ia(t, e) {
        for (var n = 0; n < e.length; n++) {
            var r = e[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
        }
    }

    function Ma(t, e) {
        return function (t) {
            if (Array.isArray(t)) return t
        }(t) || function (t, e) {
            var n = [], r = !0, i = !1, o = void 0;
            try {
                for (var a, l = t[Symbol.iterator](); !(r = (a = l.next()).done) && (n.push(a.value), !e || n.length !== e); r = !0) ;
            } catch (t) {
                i = !0, o = t
            } finally {
                try {
                    r || null == l.return || l.return()
                } finally {
                    if (i) throw o
                }
            }
            return n
        }(t, e) || function () {
            throw new TypeError("Invalid attempt to destructure non-iterable instance")
        }()
    }

    function Wa(t, e, n) {
        var r = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3],
            i = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        if (-1 !== e || -1 !== n) {
            var o = this.table, a = this.selector, l = this.toolbar;
            t ? a.setEnd(e, n, i) : a.set(e, n, r), l.reset(), o.render()
        }
    }

    function Fa(t, e) {
        var n = this.selector, r = this.data, i = r.rows, o = r.cols, a = Ma(n.indexes, 2), l = a[0], c = a[1],
            u = n.range, s = u.eri, f = u.eci;
        if (t) {
            var h = Ma(n.moveIndexes, 2);
            l = h[0], c = h[1]
        }
        "left" === e ? c > 0 && (c -= 1) : "right" === e ? (f !== c && (c = f), c < o.len - 1 && (c += 1)) : "up" === e ? l > 0 && (l -= 1) : "down" === e ? (s !== l && (l = s), l < i.len - 1 && (l += 1)) : "row-first" === e ? c = 0 : "row-last" === e ? c = o.len - 1 : "col-first" === e ? l = 0 : "col-last" === e && (l = i.len - 1), t && (n.moveIndexes = [l, c]), Wa.call(this, t, l, c), function () {
            var t = this.data, e = this.verticalScrollbar, n = this.horizontalScrollbar, r = t.getSelectedRect(),
                i = r.l, o = r.t, a = r.left, l = r.top, c = r.width, u = r.height, s = this.getTableOffset();
            if (Math.abs(a) + c > s.width) n.move({left: i + c - s.width}); else {
                var f = t.freezeTotalWidth();
                a < f && n.move({left: i - 1 - f})
            }
            if (Math.abs(l) + u > s.height) e.move({top: o + u - s.height - 1}); else {
                var h = t.freezeTotalHeight();
                l < h && e.move({top: o - 1 - h})
            }
        }.call(this)
    }

    function Na() {
        var t = this.data, e = this.verticalScrollbar, n = this.getTableOffset().height,
            r = t.exceptRowTotalHeight(0, -1);
        e.set(n, t.rows.totalHeight() - r)
    }

    function Ha() {
        var t = this.data, e = this.horizontalScrollbar, n = this.getTableOffset().width;
        t && e.set(n, t.cols.totalWidth())
    }

    function Va() {
        var t = this.tableEl, e = this.overlayerEl, n = this.overlayerCEl, r = this.table, i = this.toolbar,
            o = this.selector, a = this.el, l = this.getTableOffset(), c = this.getRect();
        t.attr(c), e.offset(c), n.offset(l), a.css("width", "".concat(c.width, "px")), Na.call(this), Ha.call(this), function () {
            var t = this.selector, e = this.data, n = this.editor, r = Ma(e.freeze, 2), i = r[0], o = r[1];
            if (i > 0 || o > 0) {
                var a = e.freezeTotalWidth(), l = e.freezeTotalHeight();
                n.setFreezeLengths(a, l)
            }
            t.resetAreaOffset()
        }.call(this), r.render(), i.reset(), o.reset()
    }

    function qa() {
        var t = this.data, e = this.selector;
        t.clearClipboard(), e.hideClipboard()
    }

    function Ba() {
        var t = this.data, e = this.selector;
        t.copy(), e.showClipboard()
    }

    function La() {
        var t = this.data, e = this.selector;
        t.cut(), e.showClipboard()
    }

    function Ua(t) {
        this.data.paste(t, function (t) {
            return za("Tip", t)
        }) && Va.call(this)
    }

    function Ya(t) {
        var e = this, n = this.selector, r = this.data, i = this.table, o = this.sortFilter, a = t.offsetX,
            l = t.offsetY, c = t.target.className === "".concat(bt, "-selector-corner"), u = r.getCellRectByXY(a, l),
            s = u.left, f = u.top, h = u.width, y = u.height, p = u.ri, v = u.ci, d = r.autoFilter;
        if (d.includes(p, v) && s + h - 20 < a && f + y - 20 < l) {
            var b = d.items(v, function (t, e) {
                return r.rows.getCell(t, e)
            });
            return o.set(v, b, d.getFilter(v), d.getSort(v)), void o.setOffset({left: s, top: f + y + 2})
        }
        t.shiftKey || (c ? n.showAutofill(p, v) : Wa.call(this, !1, p, v), vt(window, function (t) {
            var i = r.getCellRectByXY(t.offsetX, t.offsetY);
            p = i.ri, v = i.ci, c ? n.showAutofill(p, v) : 1 !== t.buttons || t.shiftKey || Wa.call(e, !0, p, v, !0, !0)
        }, function () {
            c && r.autofill(n.arange, "all", function (t) {
                return za("Tip", t)
            }) && i.render(), n.hideAutofill(), function () {
                var t = this.toolbar;
                t.paintformatActive() && (Ua.call(this, "format"), qa.call(this), t.paintformatToggle())
            }.call(e)
        })), c || 1 !== t.buttons || t.shiftKey && Wa.call(this, !0, p, v)
    }

    function $a() {
        var t = this.editor, e = this.data.getSelectedRect(), n = this.getTableOffset(), r = "top";
        e.top > n.height / 2 && (r = "bottom"), t.setOffset(e, r)
    }

    function Xa() {
        var t = this.editor, e = this.data;
        $a.call(this), t.setCell(e.getSelectedCell(), e.getSelectedValidator()), qa.call(this)
    }

    function Ka(t) {
        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "finished", n = this.data,
            r = this.table;
        n.setSelectedCellText(t, e), "finished" === e && r.render()
    }

    function Ja(t) {
        var e = this.data;
        "insert-row" === t ? e.insert("row") : "delete-row" === t ? e.delete("row") : "insert-column" === t ? e.insert("column") : "delete-column" === t ? e.delete("column") : "delete-cell" === t ? e.deleteCell() : "delete-cell-format" === t ? e.deleteCell("format") : "delete-cell-text" === t && e.deleteCell("text"), qa.call(this), Va.call(this)
    }

    function Za(t, e) {
        var n = this.data;
        if ("undo" === t) this.undo(); else if ("redo" === t) this.redo(); else if ("print" === t) ; else if ("paintformat" === t) !0 === e ? Ba.call(this) : qa.call(this); else if ("clearformat" === t) Ja.call(this, "delete-cell-format"); else if ("link" === t) ; else if ("chart" === t) ; else if ("autofilter" === t) (function () {
            this.data.autofilter(), Va.call(this)
        }).call(this); else if ("freeze" === t) if (e) {
            var r = n.selector, i = r.ri, o = r.ci;
            this.freeze(i, o)
        } else this.freeze(0, 0); else n.setSelectedCellAttr(t, e), "formula" !== t || n.selector.multiple() || Xa.call(this), Va.call(this)
    }

    function Ga() {
        var t, e, n, r, i, o, a = this, l = this.overlayerEl, c = this.rowResizer, u = this.colResizer,
            s = this.verticalScrollbar, f = this.horizontalScrollbar, h = this.editor, y = this.contextMenu,
            p = this.data, v = this.toolbar, d = this.modalValidation, b = this.sortFilter;
        l.on("mousemove", function (t) {
            (function (t) {
                if (0 === t.buttons && t.target.className !== "".concat(bt, "-resizer-hover")) {
                    var e = t.offsetX, n = t.offsetY, r = this.rowResizer, i = this.colResizer, o = this.tableEl,
                        a = this.data, l = a.rows, c = a.cols;
                    if (e > c.indexWidth && n > l.height) return r.hide(), void i.hide();
                    var u = o.box(), s = a.getCellRectByXY(t.offsetX, t.offsetY);
                    s.ri >= 0 && -1 === s.ci ? (s.width = c.indexWidth, r.show(s, {width: u.width})) : r.hide(), -1 === s.ri && s.ci >= 0 ? (s.height = l.height, i.show(s, {height: u.height})) : i.hide()
                }
            }).call(a, t)
        }).on("mousedown", function (t) {
            2 === t.buttons ? p.xyInSelectedRect(t.offsetX, t.offsetY) ? (y.setPosition(t.offsetX, t.offsetY), t.stopPropagation()) : y.hide() : 2 === t.detail ? Xa.call(a) : (h.clear(), Ya.call(a, t))
        }).on("mousewheel.stop", function (t) {
            (function (t) {
                var e = this.verticalScrollbar, n = this.data, r = e.scroll().top, i = t.deltaY, o = n.rows;
                if (t.detail && (i = 40 * t.detail), i > 0) {
                    var a = n.scroll.ri + 1;
                    a < o.len && e.move({top: r + o.getHeight(a) - 1})
                } else {
                    var l = n.scroll.ri - 1;
                    l >= 0 && e.move({top: 0 === l ? 0 : r - o.getHeight(l)})
                }
            }).call(a, t)
        }), t = l.el, n = (e = {
            move: function (t, e) {
                (function (t, e) {
                    var n = this.verticalScrollbar, r = this.horizontalScrollbar, i = n.scroll().top,
                        o = r.scroll().left;
                    "left" === t || "right" === t ? r.move({left: o - e}) : "up" !== t && "down" !== t || n.move({top: i - e})
                }).call(a, t, e)
            }
        }).move, r = e.end, i = 0, o = 0, ft(t, "touchstart", function (t) {
            var e = t.touches[0], n = e.pageX, r = e.pageY;
            i = n, o = r
        }), ft(t, "touchmove", function (t) {
            if (n) {
                var e = t.changedTouches[0], r = e.pageX, a = e.pageY, l = r - i, c = a - o;
                (Math.abs(l) > 10 || Math.abs(c) > 10) && (dt(l, c, t, n), i = r, o = a), t.preventDefault()
            }
        }), ft(t, "touchend", function (t) {
            if (r) {
                var e = t.changedTouches[0], n = e.pageX, a = e.pageY;
                dt(n - i, a - o, t, r)
            }
        }), v.change = function (t, e) {
            return Za.call(a, t, e)
        }, b.ok = function (t, e, n, r) {
            return function (t, e, n, r) {
                this.data.setAutoFilter(t, e, n, r), Va.call(this)
            }.call(a, t, e, n, r)
        }, c.finishedFn = function (t, e) {
            (function (t, e) {
                var n = t.ri, r = this.table, i = this.selector;
                this.data.rows.setHeight(n, e), r.render(), i.resetAreaOffset(), Na.call(this), $a.call(this)
            }).call(a, t, e)
        }, u.finishedFn = function (t, e) {
            (function (t, e) {
                var n = t.ci, r = this.table, i = this.selector;
                this.data.cols.setWidth(n, e), r.render(), i.resetAreaOffset(), Ha.call(this), $a.call(this)
            }).call(a, t, e)
        }, s.moveFn = function (t, e) {
            (function (t) {
                var e = this, n = this.data, r = this.table, i = this.selector;
                n.scrolly(t, function () {
                    i.resetBRLAreaOffset(), $a.call(e), r.render()
                })
            }).call(a, t, e)
        }, f.moveFn = function (t, e) {
            (function (t) {
                var e = this, n = this.data, r = this.table, i = this.selector;
                n.scrollx(t, function () {
                    i.resetBRTAreaOffset(), $a.call(e), r.render()
                })
            }).call(a, t, e)
        }, h.change = function (t, e) {
            Ka.call(a, e, t)
        }, d.change = function (t) {
            if ("save" === t) {
                for (var e = arguments.length, n = new Array(e > 1 ? e - 1 : 0), r = 1; r < e; r++) n[r - 1] = arguments[r];
                p.addValidation.apply(p, n)
            } else p.removeValidation()
        }, y.itemClick = function (t) {
            "validation" === t ? d.setValue(p.getSelectedValidation()) : "copy" === t ? Ba.call(a) : "cut" === t ? La.call(a) : "paste" === t ? Ua.call(a, "all") : "paste-value" === t ? Ua.call(a, "text") : "paste-format" === t ? Ua.call(a, "format") : Ja.call(a, t)
        }, ft(window, "resize", function () {
            a.reload()
        }), ft(window, "click", function (t) {
            a.focusing = l.contains(t.target)
        }), ft(window, "keydown", function (t) {
            if (a.focusing) {
                var e = t.keyCode || t.which, n = t.key, r = t.ctrlKey, i = t.shiftKey, o = t.altKey, l = t.metaKey;
                if (r || l) {
                    var c = "all";
                    switch (i && (c = "text"), o && (c = "format"), e) {
                        case 90:
                            a.undo(), t.preventDefault();
                            break;
                        case 89:
                            a.redo(), t.preventDefault();
                            break;
                        case 67:
                            Ba.call(a), t.preventDefault();
                            break;
                        case 88:
                            La.call(a), t.preventDefault();
                            break;
                        case 85:
                            v.trigger("underline"), t.preventDefault();
                            break;
                        case 86:
                            Ua.call(a, c), t.preventDefault();
                            break;
                        case 37:
                            Fa.call(a, i, "row-first"), t.preventDefault();
                            break;
                        case 38:
                            Fa.call(a, i, "col-first"), t.preventDefault();
                            break;
                        case 39:
                            Fa.call(a, i, "row-last"), t.preventDefault();
                            break;
                        case 40:
                            Fa.call(a, i, "col-last"), t.preventDefault();
                            break;
                        case 32:
                            Wa.call(a, !1, -1, p.selector.ci, !1), t.preventDefault();
                            break;
                        case 66:
                            v.trigger("bold");
                            break;
                        case 73:
                            v.trigger("italic")
                    }
                } else {
                    switch (e) {
                        case 32:
                            i && Wa.call(a, !1, p.selector.ri, -1, !1);
                            break;
                        case 27:
                            y.hide(), qa.call(a);
                            break;
                        case 37:
                            Fa.call(a, i, "left"), t.preventDefault();
                            break;
                        case 38:
                            Fa.call(a, i, "up"), t.preventDefault();
                            break;
                        case 39:
                            Fa.call(a, i, "right"), t.preventDefault();
                            break;
                        case 40:
                            Fa.call(a, i, "down"), t.preventDefault();
                            break;
                        case 9:
                            h.clear(), Fa.call(a, !1, i ? "left" : "right"), t.preventDefault();
                            break;
                        case 13:
                            h.clear(), Fa.call(a, !1, i ? "up" : "down"), t.preventDefault();
                            break;
                        case 8:
                            Ja.call(a, "delete-cell-text"), t.preventDefault()
                    }
                    "Delete" === n ? (Ja.call(a, "delete-cell-text"), t.preventDefault()) : e >= 65 && e <= 90 || e >= 48 && e <= 57 || e >= 96 && e <= 105 || "=" === t.key ? (Ka.call(a, t.key, "input"), Xa.call(a)) : 113 === e && Xa.call(a)
                }
            }
        })
    }

    var Qa = function () {
        function t(e, n) {
            var r = this;
            !function (t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }(this, t);
            var i = n.settings, o = i.view, l = i.showToolbar, c = i.showContextmenu;
            this.el = a("div", "".concat(bt, "-sheet")), this.toolbar = new aa(n, o.width, !l), e.children(this.toolbar.el, this.el), this.data = n, this.tableEl = a("canvas", "".concat(bt, "-table")), this.rowResizer = new mt(!1, n.rows.height), this.colResizer = new mt(!0, n.cols.minWidth), this.verticalScrollbar = new kt(!0), this.horizontalScrollbar = new kt(!1), this.editor = new oe(ke, function () {
                return r.getTableOffset()
            }, n.rows.height), this.modalValidation = new Ca, this.contextMenu = new se(function () {
                return r.getTableOffset()
            }, !c), this.selector = new Ft(n), this.overlayerCEl = a("div", "".concat(bt, "-overlayer-content")).children(this.editor.el, this.selector.el), this.overlayerEl = a("div", "".concat(bt, "-overlayer")).child(this.overlayerCEl), this.sortFilter = new Da, this.el.children(this.tableEl, this.overlayerEl.el, this.rowResizer.el, this.colResizer.el, this.verticalScrollbar.el, this.horizontalScrollbar.el, this.contextMenu.el, this.modalValidation.el, this.sortFilter.el), this.table = new Qe(this.tableEl.el, n), Ga.call(this), Va.call(this), Wa.call(this, !1, 0, 0)
        }

        var e, n, r;
        return e = t, (n = [{
            key: "loadData", value: function (t) {
                return this.data.setData(t), Va.call(this), this
            }
        }, {
            key: "freeze", value: function (t, e) {
                return this.data.setFreeze(t, e), Va.call(this), this
            }
        }, {
            key: "undo", value: function () {
                this.data.undo(), Va.call(this)
            }
        }, {
            key: "redo", value: function () {
                this.data.redo(), Va.call(this)
            }
        }, {
            key: "reload", value: function () {
                return Va.call(this), this
            }
        }, {
            key: "getRect", value: function () {
                var t = this.data;
                return {width: t.viewWidth(), height: t.viewHeight()}
            }
        }, {
            key: "getTableOffset", value: function () {
                var t = this.data, e = t.rows, n = t.cols, r = this.getRect(), i = r.width, o = r.height;
                return {width: i - n.indexWidth, height: o - e.height, left: n.indexWidth, top: e.height}
            }
        }]) && Ia(e.prototype, n), r && Ia(e, r), t
    }();
    n(0);

    function tl(t, e) {
        for (var n = 0; n < e.length; n++) {
            var r = e[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
        }
    }

    n.d(e, "spreadsheet", function () {
        return nl
    });
    var el = function () {
        function t(e) {
            var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            !function (t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }(this, t);
            var r = e;
            "string" == typeof e && (r = document.querySelector(e)), this.data = new st("sheet1", n);
            var i = a("div", "".concat(bt)).on("contextmenu", function (t) {
                return t.preventDefault()
            });
            r.appendChild(i.el), this.sheet = new Qa(i, this.data)
        }

        var e, n, r;
        return e = t, r = [{
            key: "locale", value: function (t, e) {
                L(t, e)
            }
        }], (n = [{
            key: "loadData", value: function (t) {
                return this.sheet.loadData(t), this
            }
        }, {
            key: "getData", value: function () {
                return this.data.getData()
            }
        }, {
            key: "validate", value: function () {
                return this.data.validations.errors.size <= 0
            }
        }, {
            key: "change", value: function (t) {
                return this.data.change = t, this
            }
        }]) && tl(e.prototype, n), r && tl(e, r), t
    }(), nl = function (t) {
        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        return new el(t, e)
    };
    window && (window.x = window.x || {}, window.x.spreadsheet = nl, window.x.spreadsheet.locale = function (t, e) {
        return L(t, e)
    });
    e.default = el
}]);
//# sourceMappingURL=xspreadsheet.js.map