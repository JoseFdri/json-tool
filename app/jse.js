import {j as Od} from "./jsx-runtime.D_zvdyIk.js";
import {F as Ml, c as Tt, P as D1, v as Kg, w as Ia, g as Ke, i as Zo, Q as q1, r as Lr, t as $r, h as nf, n as Xu, o as vi, R as $1, k as rf, l as Tc, S as F1, T as B1, a as Ao, p as ea, B as of, x as ga, U as W1, V as H1, u as Yg, W as ln, X as Aa, Y as au, A as br, Z as Po, _ as V1, $ as va, a0 as Xg, a1 as Bo, a2 as yn, a3 as Go, a4 as Zs, a5 as af, a6 as Jo, a7 as sf, a8 as vo, a9 as G1, aa as Qg, ab as el, ac as iu, ad as sa, ae as wa, af as os, ag as pn, ah as Zg, ai as J1, aj as K1, ak as Y1, al as X1, am as em, an as tl, ao as Oi, ap as Ei, aq as tm, m as nl, ar as Q1, as as Z1, at as Fs, au as lf, av as Ic, aw as rl, ax as nm, ay as rm, az as om, aA as ek, aB as tk, aC as uf, aD as am, aE as nk, aF as im, aG as cf, aH as rk, aI as ok, aJ as ak, I as Gi, aK as ik, aL as sk, aM as lk, q as rn, y as qo, K as df, J as vf, s as ff, E as Qu, aN as sm, aO as lm, O as ql, C as pf, aP as um, aQ as cm, b as Os, L as hf, aR as dm, G as Nc, D as gf, M as Ji, d as mf, f as uk, e as ck, j as ta, H as dk, N as vk, z as Hp, aS as fs, aT as Ed} from "./index.BWtW_5Ah.js";
import {W as fk, A as pk, a as hk, d as gk, b as mk, c as bk} from "./json-schema-draft-06.BUXeb-dj.js";
import {c as vm, S as xk, v as jk, f as yk, u as wk} from "./debug.CVbbYUwk.js";
import {g as kk} from "./_commonjsHelpers.CqkleIqs.js";
import {k as Ki, m as la, t as rr, n as Kr, l as gt, u as mi, f as fm, a as pm, b as _k, g as Sk} from "./floating-ui.dom.PpoSrlT1.js";
import {W as Vp, e as jo, r as as, b as fo, d as dr, f as ol, g as Ck, h as Xa, k as Io, c as Qa, j as su, l as Ai, m as Lc, n as Uc, o as Zu, p as Ri, q as Ok, s as Ha, t as bf, u as ec, v as Dc, w as hm, x as is, y as Bs, z as Ek, A as xf, B as Ak, C as Rk, D as jf, S as tc, E as gm, F as Mk, G as Ad, H as Pk, i as vn, a as Wt, I as mm, J as bm} from "./isEqual.DmZLcNBb.js";
import {r as zk} from "./index.BhTQDHyb.js";
import {_ as Tk} from "./preload-helper.BlTxHScW.js";
import {n as Va, o as $l, d as qc, e as Ik, g as Nk, A as Is, B as xm, C as jm, D as Ns, f as si, E as ym, F as wm, G as Lk, q as nc, r as rc, H as sv, I as Eu, J as Es, K as Uk, L as Dk, p as $c, s as km, t as yf, u as wf, v as qk, w as $k, M as oc, m as bi, b as kf, l as Gp, k as _m, x as Fk, y as Bk, i as Yi, z as Wk, j as Hk, h as Vk, Q as Gk, N as Jk, O as Jp, P as Kk} from "./index.Bffy9uG8.js";
import {Q as Yk, t as _l, y as Sm, V as Xk, R as Kp, S as Qk, T as Zk, E as ps, k as Yp, U as Sl, l as e_, o as t_, p as n_, q as r_, u as o_, v as a_, w as i_, x as s_, z as l_, A as u_, B as c_, D as d_, F as v_, G as f_, H as p_, a as hs, j as h_, W as g_, i as m_, P as b_, I as x_, d as j_, J as y_, M as w_, N as k_, O as __, X as S_, n as Rd, Z as Xp, _ as C_, Y as O_, $ as E_, a0 as A_} from "./index.DSBDrhrG.js";
import {R as $o, _ as Fo, u as Qp, Y as R_} from "./fontUtils.xykbuCrS.js";
function M_(e, t) {
    for (var n = 0; n < t.length; n++) {
        const o = t[n];
        if (typeof o != "string" && !Array.isArray(o)) {
            for (const a in o)
                if (a !== "default" && !(a in e)) {
                    const i = Object.getOwnPropertyDescriptor(o, a);
                    i && Object.defineProperty(e, a, i.get ? i : {
                        enumerable: !0,
                        get: () => o[a]
                    })
                }
        }
    }
    return Object.freeze(Object.defineProperty(e, Symbol.toStringTag, {
        value: "Module"
    }))
}
const P_ = Object.freeze(Object.defineProperty({
    __proto__: null,
    appendToJSONPointer: Ml,
    compileJSONPointer: Tt,
    compileJSONPointerProp: D1,
    deleteIn: Kg,
    existsIn: Ia,
    getIn: Ke,
    immutableJSONPatch: Zo,
    insertAt: q1,
    isJSONArray: Lr,
    isJSONObject: $r,
    isJSONPatchAdd: nf,
    isJSONPatchCopy: Xu,
    isJSONPatchMove: vi,
    isJSONPatchOperation: $1,
    isJSONPatchRemove: rf,
    isJSONPatchReplace: Tc,
    isJSONPatchTest: F1,
    parseFrom: B1,
    parseJSONPointer: Ao,
    parsePath: ea,
    revertJSONPatch: of,
    setIn: ga,
    startsWithJSONPointer: W1,
    transform: H1,
    updateIn: Yg
}, Symbol.toStringTag, {
    value: "Module"
}));
var z_ = NaN;
function Zp(e) {
    return typeof e == "number" ? e : Ki(e) ? z_ : +e
}
function Fc(e, t) {
    return function(n, o) {
        var a;
        if (n === void 0 && o === void 0)
            return t;
        if (n !== void 0 && (a = n),
        o !== void 0) {
            if (a === void 0)
                return o;
            typeof n == "string" || typeof o == "string" ? (n = la(n),
            o = la(o)) : (n = Zp(n),
            o = Zp(o)),
            a = e(n, o)
        }
        return a
    }
}
var Cm = Fc(function(e, t) {
    return e + t
}, 0)
  , T_ = "Expected a function";
function Om(e, t) {
    if (typeof t != "function")
        throw new TypeError(T_);
    return e = ln(e),
    function() {
        if (--e < 1)
            return t.apply(this, arguments)
    }
}
var ac = Vp && new Vp
  , Em = ac ? function(e, t) {
    return ac.set(e, t),
    e
}
: Aa;
function Fl(e) {
    return function() {
        var t = arguments;
        switch (t.length) {
        case 0:
            return new e;
        case 1:
            return new e(t[0]);
        case 2:
            return new e(t[0],t[1]);
        case 3:
            return new e(t[0],t[1],t[2]);
        case 4:
            return new e(t[0],t[1],t[2],t[3]);
        case 5:
            return new e(t[0],t[1],t[2],t[3],t[4]);
        case 6:
            return new e(t[0],t[1],t[2],t[3],t[4],t[5]);
        case 7:
            return new e(t[0],t[1],t[2],t[3],t[4],t[5],t[6])
        }
        var n = au(e.prototype)
          , o = e.apply(n, t);
        return jo(o) ? o : n
    }
}
var I_ = 1;
function N_(e, t, n) {
    var o = t & I_
      , a = Fl(e);
    function i() {
        var s = this && this !== as && this instanceof i ? a : e;
        return s.apply(o ? n : this, arguments)
    }
    return i
}
var L_ = Math.max;
function Am(e, t, n, o) {
    for (var a = -1, i = e.length, s = n.length, l = -1, u = t.length, d = L_(i - s, 0), c = Array(u + d), v = !o; ++l < u; )
        c[l] = t[l];
    for (; ++a < s; )
        (v || a < i) && (c[n[a]] = e[a]);
    for (; d--; )
        c[l++] = e[a++];
    return c
}
var U_ = Math.max;
function Rm(e, t, n, o) {
    for (var a = -1, i = e.length, s = -1, l = n.length, u = -1, d = t.length, c = U_(i - l, 0), v = Array(c + d), p = !o; ++a < c; )
        v[a] = e[a];
    for (var f = a; ++u < d; )
        v[f + u] = t[u];
    for (; ++s < l; )
        (p || a < i) && (v[f + n[s]] = e[a++]);
    return v
}
function D_(e, t) {
    for (var n = e.length, o = 0; n--; )
        e[n] === t && ++o;
    return o
}
function Bc() {}
var q_ = 4294967295;
function En(e) {
    this.__wrapped__ = e,
    this.__actions__ = [],
    this.__dir__ = 1,
    this.__filtered__ = !1,
    this.__iteratees__ = [],
    this.__takeCount__ = q_,
    this.__views__ = []
}
En.prototype = au(Bc.prototype);
En.prototype.constructor = En;
var _f = ac ? function(e) {
    return ac.get(e)
}
: br
  , Ls = {}
  , $_ = Object.prototype
  , F_ = $_.hasOwnProperty;
function Hu(e) {
    for (var t = e.name + "", n = Ls[t], o = F_.call(Ls, t) ? n.length : 0; o--; ) {
        var a = n[o]
          , i = a.func;
        if (i == null || i == e)
            return a.name
    }
    return t
}
function Wo(e, t) {
    this.__wrapped__ = e,
    this.__actions__ = [],
    this.__chain__ = !!t,
    this.__index__ = 0,
    this.__values__ = void 0
}
Wo.prototype = au(Bc.prototype);
Wo.prototype.constructor = Wo;
function Mm(e) {
    if (e instanceof En)
        return e.clone();
    var t = new Wo(e.__wrapped__,e.__chain__);
    return t.__actions__ = Po(e.__actions__),
    t.__index__ = e.__index__,
    t.__values__ = e.__values__,
    t
}
var B_ = Object.prototype
  , W_ = B_.hasOwnProperty;
function _(e) {
    if (fo(e) && !dr(e) && !(e instanceof En)) {
        if (e instanceof Wo)
            return e;
        if (W_.call(e, "__wrapped__"))
            return Mm(e)
    }
    return new Wo(e)
}
_.prototype = Bc.prototype;
_.prototype.constructor = _;
function lv(e) {
    var t = Hu(e)
      , n = _[t];
    if (typeof n != "function" || !(t in En.prototype))
        return !1;
    if (e === n)
        return !0;
    var o = _f(n);
    return !!o && e === o[0]
}
var Pm = V1(Em)
  , H_ = /\{\n\/\* \[wrapped with (.+)\] \*/
  , V_ = /,? & /;
function G_(e) {
    var t = e.match(H_);
    return t ? t[1].split(V_) : []
}
var J_ = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/;
function K_(e, t) {
    var n = t.length;
    if (!n)
        return e;
    var o = n - 1;
    return t[o] = (n > 1 ? "& " : "") + t[o],
    t = t.join(n > 2 ? ", " : " "),
    e.replace(J_, `{
/* [wrapped with ` + t + `] */
`)
}
function Wc(e, t, n, o) {
    for (var a = e.length, i = n + (o ? 1 : -1); o ? i-- : ++i < a; )
        if (t(e[i], i, e))
            return i;
    return -1
}
function zm(e) {
    return e !== e
}
function Y_(e, t, n) {
    for (var o = n - 1, a = e.length; ++o < a; )
        if (e[o] === t)
            return o;
    return -1
}
function al(e, t, n) {
    return t === t ? Y_(e, t, n) : Wc(e, zm, n)
}
function Hc(e, t) {
    var n = e == null ? 0 : e.length;
    return !!n && al(e, t, 0) > -1
}
var X_ = 1
  , Q_ = 2
  , Z_ = 8
  , e2 = 16
  , t2 = 32
  , n2 = 64
  , r2 = 128
  , o2 = 256
  , a2 = 512
  , i2 = [["ary", r2], ["bind", X_], ["bindKey", Q_], ["curry", Z_], ["curryRight", e2], ["flip", a2], ["partial", t2], ["partialRight", n2], ["rearg", o2]];
function s2(e, t) {
    return va(i2, function(n) {
        var o = "_." + n[0];
        t & n[1] && !Hc(e, o) && e.push(o)
    }),
    e.sort()
}
function Tm(e, t, n) {
    var o = t + "";
    return Xg(e, K_(o, s2(G_(o), n)))
}
var l2 = 4
  , u2 = 8
  , eh = 32
  , th = 64;
function Im(e, t, n, o, a, i, s, l, u, d) {
    var c = t & u2
      , v = c ? s : void 0
      , p = c ? void 0 : s
      , f = c ? i : void 0
      , m = c ? void 0 : i;
    t |= c ? eh : th,
    t &= ~(c ? th : eh),
    t & l2 || (t &= -4);
    var x = [e, t, a, f, v, m, p, l, u, d]
      , y = n.apply(void 0, x);
    return lv(e) && Pm(y, x),
    y.placeholder = o,
    Tm(y, e, t)
}
function il(e) {
    var t = e;
    return t.placeholder
}
var c2 = Math.min;
function d2(e, t) {
    for (var n = e.length, o = c2(t.length, n), a = Po(e); o--; ) {
        var i = t[o];
        e[o] = ol(i, n) ? a[i] : void 0
    }
    return e
}
var nh = "__lodash_placeholder__";
function xi(e, t) {
    for (var n = -1, o = e.length, a = 0, i = []; ++n < o; ) {
        var s = e[n];
        (s === t || s === nh) && (e[n] = nh,
        i[a++] = n)
    }
    return i
}
var v2 = 1
  , f2 = 2
  , p2 = 8
  , h2 = 16
  , g2 = 128
  , m2 = 512;
function Vc(e, t, n, o, a, i, s, l, u, d) {
    var c = t & g2
      , v = t & v2
      , p = t & f2
      , f = t & (p2 | h2)
      , m = t & m2
      , x = p ? void 0 : Fl(e);
    function y() {
        for (var w = arguments.length, S = Array(w), P = w; P--; )
            S[P] = arguments[P];
        if (f)
            var R = il(y)
              , k = D_(S, R);
        if (o && (S = Am(S, o, a, f)),
        i && (S = Rm(S, i, s, f)),
        w -= k,
        f && w < d) {
            var I = xi(S, R);
            return Im(e, t, Vc, y.placeholder, n, S, I, l, u, d - w)
        }
        var H = v ? n : this
          , Y = p ? H[e] : e;
        return w = S.length,
        l ? S = d2(S, l) : m && w > 1 && S.reverse(),
        c && u < w && (S.length = u),
        this && this !== as && this instanceof y && (Y = x || Fl(Y)),
        Y.apply(H, S)
    }
    return y
}
function b2(e, t, n) {
    var o = Fl(e);
    function a() {
        for (var i = arguments.length, s = Array(i), l = i, u = il(a); l--; )
            s[l] = arguments[l];
        var d = i < 3 && s[0] !== u && s[i - 1] !== u ? [] : xi(s, u);
        if (i -= d.length,
        i < n)
            return Im(e, t, Vc, a.placeholder, void 0, s, d, void 0, void 0, n - i);
        var c = this && this !== as && this instanceof a ? o : e;
        return Bo(c, this, s)
    }
    return a
}
var x2 = 1;
function j2(e, t, n, o) {
    var a = t & x2
      , i = Fl(e);
    function s() {
        for (var l = -1, u = arguments.length, d = -1, c = o.length, v = Array(c + u), p = this && this !== as && this instanceof s ? i : e; ++d < c; )
            v[d] = o[d];
        for (; u--; )
            v[d++] = arguments[++l];
        return Bo(p, a ? n : this, v)
    }
    return s
}
var rh = "__lodash_placeholder__"
  , Md = 1
  , y2 = 2
  , w2 = 4
  , oh = 8
  , Cl = 128
  , ah = 256
  , k2 = Math.min;
function _2(e, t) {
    var n = e[1]
      , o = t[1]
      , a = n | o
      , i = a < (Md | y2 | Cl)
      , s = o == Cl && n == oh || o == Cl && n == ah && e[7].length <= t[8] || o == (Cl | ah) && t[7].length <= t[8] && n == oh;
    if (!(i || s))
        return e;
    o & Md && (e[2] = t[2],
    a |= n & Md ? 0 : w2);
    var l = t[3];
    if (l) {
        var u = e[3];
        e[3] = u ? Am(u, l, t[4]) : l,
        e[4] = u ? xi(e[3], rh) : t[4]
    }
    return l = t[5],
    l && (u = e[5],
    e[5] = u ? Rm(u, l, t[6]) : l,
    e[6] = u ? xi(e[5], rh) : t[6]),
    l = t[7],
    l && (e[7] = l),
    o & Cl && (e[8] = e[8] == null ? t[8] : k2(e[8], t[8])),
    e[9] == null && (e[9] = t[9]),
    e[0] = t[0],
    e[1] = a,
    e
}
var S2 = "Expected a function"
  , ih = 1
  , C2 = 2
  , sh = 8
  , lh = 16
  , uh = 32
  , O2 = 64
  , ch = Math.max;
function Za(e, t, n, o, a, i, s, l) {
    var u = t & C2;
    if (!u && typeof e != "function")
        throw new TypeError(S2);
    var d = o ? o.length : 0;
    if (d || (t &= -97,
    o = a = void 0),
    s = s === void 0 ? s : ch(ln(s), 0),
    l = l === void 0 ? l : ln(l),
    d -= a ? a.length : 0,
    t & O2) {
        var c = o
          , v = a;
        o = a = void 0
    }
    var p = u ? void 0 : _f(e)
      , f = [e, t, n, o, a, c, v, i, s, l];
    if (p && _2(f, p),
    e = f[0],
    t = f[1],
    n = f[2],
    o = f[3],
    a = f[4],
    l = f[9] = f[9] === void 0 ? u ? 0 : e.length : ch(f[9] - d, 0),
    !l && t & (sh | lh) && (t &= -25),
    !t || t == ih)
        var m = N_(e, t, n);
    else
        t == sh || t == lh ? m = b2(e, t, l) : (t == uh || t == (ih | uh)) && !a.length ? m = j2(e, t, n, o) : m = Vc.apply(void 0, f);
    var x = p ? Em : Pm;
    return Tm(x(m, f), e, t)
}
var E2 = 128;
function Sf(e, t, n) {
    return t = n ? void 0 : t,
    t = e && t == null ? e.length : t,
    Za(e, E2, void 0, void 0, void 0, void 0, t)
}
function sl(e) {
    return yn(function(t, n) {
        var o = -1
          , a = n.length
          , i = a > 1 ? n[a - 1] : void 0
          , s = a > 2 ? n[2] : void 0;
        for (i = e.length > 3 && typeof i == "function" ? (a--,
        i) : void 0,
        s && Go(n[0], n[1], s) && (i = a < 3 ? void 0 : i,
        a = 1),
        t = Object(t); ++o < a; ) {
            var l = n[o];
            l && e(t, l, o, i)
        }
        return t
    })
}
var A2 = Object.prototype
  , R2 = A2.hasOwnProperty
  , Nm = sl(function(e, t) {
    if (Ck(t) || Xa(t)) {
        Zs(t, Io(t), e);
        return
    }
    for (var n in t)
        R2.call(t, n) && af(e, n, t[n])
})
  , uv = sl(function(e, t) {
    Zs(t, Jo(t), e)
})
  , Bl = sl(function(e, t, n, o) {
    Zs(t, Jo(t), e, o)
})
  , Lm = sl(function(e, t, n, o) {
    Zs(t, Io(t), e, o)
});
function Cf(e, t) {
    for (var n = -1, o = t.length, a = Array(o), i = e == null; ++n < o; )
        a[n] = i ? void 0 : sf(e, t[n]);
    return a
}
function Of(e) {
    var t = e == null ? 0 : e.length;
    return t ? vo(e, 1) : []
}
function ei(e) {
    return Xg(G1(e, void 0, Of), e + "")
}
var Um = ei(Cf)
  , M2 = "[object Object]"
  , P2 = Function.prototype
  , z2 = Object.prototype
  , Dm = P2.toString
  , T2 = z2.hasOwnProperty
  , I2 = Dm.call(Object);
function ll(e) {
    if (!fo(e) || Qa(e) != M2)
        return !1;
    var t = Qg(e);
    if (t === null)
        return !0;
    var n = T2.call(t, "constructor") && t.constructor;
    return typeof n == "function" && n instanceof n && Dm.call(n) == I2
}
var N2 = "[object DOMException]"
  , L2 = "[object Error]";
function Gc(e) {
    if (!fo(e))
        return !1;
    var t = Qa(e);
    return t == L2 || t == N2 || typeof e.message == "string" && typeof e.name == "string" && !ll(e)
}
var Ef = yn(function(e, t) {
    try {
        return Bo(e, void 0, t)
    } catch (n) {
        return Gc(n) ? n : new Error(n)
    }
})
  , U2 = "Expected a function";
function Af(e, t) {
    var n;
    if (typeof t != "function")
        throw new TypeError(U2);
    return e = ln(e),
    function() {
        return --e > 0 && (n = t.apply(this, arguments)),
        e <= 1 && (t = void 0),
        n
    }
}
var D2 = 1
  , q2 = 32
  , lu = yn(function(e, t, n) {
    var o = D2;
    if (n.length) {
        var a = xi(n, il(lu));
        o |= q2
    }
    return Za(e, o, t, n, a)
});
lu.placeholder = {};
var qm = ei(function(e, t) {
    return va(t, function(n) {
        n = el(n),
        iu(e, n, lu(e[n], e))
    }),
    e
})
  , $2 = 1
  , F2 = 2
  , B2 = 32
  , Jc = yn(function(e, t, n) {
    var o = $2 | F2;
    if (n.length) {
        var a = xi(n, il(Jc));
        o |= B2
    }
    return Za(t, o, e, n, a)
});
Jc.placeholder = {};
function Mi(e, t, n) {
    var o = e.length;
    return n = n === void 0 ? o : n,
    !t && n >= o ? e : sa(e, t, n)
}
var W2 = "\\ud800-\\udfff"
  , H2 = "\\u0300-\\u036f"
  , V2 = "\\ufe20-\\ufe2f"
  , G2 = "\\u20d0-\\u20ff"
  , J2 = H2 + V2 + G2
  , K2 = "\\ufe0e\\ufe0f"
  , Y2 = "\\u200d"
  , X2 = RegExp("[" + Y2 + W2 + J2 + K2 + "]");
function ul(e) {
    return X2.test(e)
}
function Q2(e) {
    return e.split("")
}
var $m = "\\ud800-\\udfff"
  , Z2 = "\\u0300-\\u036f"
  , eS = "\\ufe20-\\ufe2f"
  , tS = "\\u20d0-\\u20ff"
  , nS = Z2 + eS + tS
  , rS = "\\ufe0e\\ufe0f"
  , oS = "[" + $m + "]"
  , cv = "[" + nS + "]"
  , dv = "\\ud83c[\\udffb-\\udfff]"
  , aS = "(?:" + cv + "|" + dv + ")"
  , Fm = "[^" + $m + "]"
  , Bm = "(?:\\ud83c[\\udde6-\\uddff]){2}"
  , Wm = "[\\ud800-\\udbff][\\udc00-\\udfff]"
  , iS = "\\u200d"
  , Hm = aS + "?"
  , Vm = "[" + rS + "]?"
  , sS = "(?:" + iS + "(?:" + [Fm, Bm, Wm].join("|") + ")" + Vm + Hm + ")*"
  , lS = Vm + Hm + sS
  , uS = "(?:" + [Fm + cv + "?", cv, Bm, Wm, oS].join("|") + ")"
  , cS = RegExp(dv + "(?=" + dv + ")|" + uS + lS, "g");
function dS(e) {
    return e.match(cS) || []
}
function ua(e) {
    return ul(e) ? dS(e) : Q2(e)
}
function Gm(e) {
    return function(t) {
        t = rr(t);
        var n = ul(t) ? ua(t) : void 0
          , o = n ? n[0] : t.charAt(0)
          , a = n ? Mi(n, 1).join("") : t.slice(1);
        return o[e]() + a
    }
}
var Kc = Gm("toUpperCase");
function Rf(e) {
    return Kc(rr(e).toLowerCase())
}
function Mf(e, t, n, o) {
    var a = -1
      , i = e == null ? 0 : e.length;
    for (o && i && (n = e[++a]); ++a < i; )
        n = t(n, e[a], a, e);
    return n
}
function Pf(e) {
    return function(t) {
        return e?.[t]
    }
}
var vS = {
    À: "A",
    Á: "A",
    Â: "A",
    Ã: "A",
    Ä: "A",
    Å: "A",
    à: "a",
    á: "a",
    â: "a",
    ã: "a",
    ä: "a",
    å: "a",
    Ç: "C",
    ç: "c",
    Ð: "D",
    ð: "d",
    È: "E",
    É: "E",
    Ê: "E",
    Ë: "E",
    è: "e",
    é: "e",
    ê: "e",
    ë: "e",
    Ì: "I",
    Í: "I",
    Î: "I",
    Ï: "I",
    ì: "i",
    í: "i",
    î: "i",
    ï: "i",
    Ñ: "N",
    ñ: "n",
    Ò: "O",
    Ó: "O",
    Ô: "O",
    Õ: "O",
    Ö: "O",
    Ø: "O",
    ò: "o",
    ó: "o",
    ô: "o",
    õ: "o",
    ö: "o",
    ø: "o",
    Ù: "U",
    Ú: "U",
    Û: "U",
    Ü: "U",
    ù: "u",
    ú: "u",
    û: "u",
    ü: "u",
    Ý: "Y",
    ý: "y",
    ÿ: "y",
    Æ: "Ae",
    æ: "ae",
    Þ: "Th",
    þ: "th",
    ß: "ss",
    Ā: "A",
    Ă: "A",
    Ą: "A",
    ā: "a",
    ă: "a",
    ą: "a",
    Ć: "C",
    Ĉ: "C",
    Ċ: "C",
    Č: "C",
    ć: "c",
    ĉ: "c",
    ċ: "c",
    č: "c",
    Ď: "D",
    Đ: "D",
    ď: "d",
    đ: "d",
    Ē: "E",
    Ĕ: "E",
    Ė: "E",
    Ę: "E",
    Ě: "E",
    ē: "e",
    ĕ: "e",
    ė: "e",
    ę: "e",
    ě: "e",
    Ĝ: "G",
    Ğ: "G",
    Ġ: "G",
    Ģ: "G",
    ĝ: "g",
    ğ: "g",
    ġ: "g",
    ģ: "g",
    Ĥ: "H",
    Ħ: "H",
    ĥ: "h",
    ħ: "h",
    Ĩ: "I",
    Ī: "I",
    Ĭ: "I",
    Į: "I",
    İ: "I",
    ĩ: "i",
    ī: "i",
    ĭ: "i",
    į: "i",
    ı: "i",
    Ĵ: "J",
    ĵ: "j",
    Ķ: "K",
    ķ: "k",
    ĸ: "k",
    Ĺ: "L",
    Ļ: "L",
    Ľ: "L",
    Ŀ: "L",
    Ł: "L",
    ĺ: "l",
    ļ: "l",
    ľ: "l",
    ŀ: "l",
    ł: "l",
    Ń: "N",
    Ņ: "N",
    Ň: "N",
    Ŋ: "N",
    ń: "n",
    ņ: "n",
    ň: "n",
    ŋ: "n",
    Ō: "O",
    Ŏ: "O",
    Ő: "O",
    ō: "o",
    ŏ: "o",
    ő: "o",
    Ŕ: "R",
    Ŗ: "R",
    Ř: "R",
    ŕ: "r",
    ŗ: "r",
    ř: "r",
    Ś: "S",
    Ŝ: "S",
    Ş: "S",
    Š: "S",
    ś: "s",
    ŝ: "s",
    ş: "s",
    š: "s",
    Ţ: "T",
    Ť: "T",
    Ŧ: "T",
    ţ: "t",
    ť: "t",
    ŧ: "t",
    Ũ: "U",
    Ū: "U",
    Ŭ: "U",
    Ů: "U",
    Ű: "U",
    Ų: "U",
    ũ: "u",
    ū: "u",
    ŭ: "u",
    ů: "u",
    ű: "u",
    ų: "u",
    Ŵ: "W",
    ŵ: "w",
    Ŷ: "Y",
    ŷ: "y",
    Ÿ: "Y",
    Ź: "Z",
    Ż: "Z",
    Ž: "Z",
    ź: "z",
    ż: "z",
    ž: "z",
    Ĳ: "IJ",
    ĳ: "ij",
    Œ: "Oe",
    œ: "oe",
    ŉ: "'n",
    ſ: "s"
}
  , fS = Pf(vS)
  , pS = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g
  , hS = "\\u0300-\\u036f"
  , gS = "\\ufe20-\\ufe2f"
  , mS = "\\u20d0-\\u20ff"
  , bS = hS + gS + mS
  , xS = "[" + bS + "]"
  , jS = RegExp(xS, "g");
function zf(e) {
    return e = rr(e),
    e && e.replace(pS, fS).replace(jS, "")
}
var yS = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;
function wS(e) {
    return e.match(yS) || []
}
var kS = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;
function _S(e) {
    return kS.test(e)
}
var Jm = "\\ud800-\\udfff"
  , SS = "\\u0300-\\u036f"
  , CS = "\\ufe20-\\ufe2f"
  , OS = "\\u20d0-\\u20ff"
  , ES = SS + CS + OS
  , Km = "\\u2700-\\u27bf"
  , Ym = "a-z\\xdf-\\xf6\\xf8-\\xff"
  , AS = "\\xac\\xb1\\xd7\\xf7"
  , RS = "\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf"
  , MS = "\\u2000-\\u206f"
  , PS = " \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000"
  , Xm = "A-Z\\xc0-\\xd6\\xd8-\\xde"
  , zS = "\\ufe0e\\ufe0f"
  , Qm = AS + RS + MS + PS
  , Zm = "['’]"
  , dh = "[" + Qm + "]"
  , TS = "[" + ES + "]"
  , eb = "\\d+"
  , IS = "[" + Km + "]"
  , tb = "[" + Ym + "]"
  , nb = "[^" + Jm + Qm + eb + Km + Ym + Xm + "]"
  , NS = "\\ud83c[\\udffb-\\udfff]"
  , LS = "(?:" + TS + "|" + NS + ")"
  , US = "[^" + Jm + "]"
  , rb = "(?:\\ud83c[\\udde6-\\uddff]){2}"
  , ob = "[\\ud800-\\udbff][\\udc00-\\udfff]"
  , ws = "[" + Xm + "]"
  , DS = "\\u200d"
  , vh = "(?:" + tb + "|" + nb + ")"
  , qS = "(?:" + ws + "|" + nb + ")"
  , fh = "(?:" + Zm + "(?:d|ll|m|re|s|t|ve))?"
  , ph = "(?:" + Zm + "(?:D|LL|M|RE|S|T|VE))?"
  , ab = LS + "?"
  , ib = "[" + zS + "]?"
  , $S = "(?:" + DS + "(?:" + [US, rb, ob].join("|") + ")" + ib + ab + ")*"
  , FS = "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])"
  , BS = "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])"
  , WS = ib + ab + $S
  , HS = "(?:" + [IS, rb, ob].join("|") + ")" + WS
  , VS = RegExp([ws + "?" + tb + "+" + fh + "(?=" + [dh, ws, "$"].join("|") + ")", qS + "+" + ph + "(?=" + [dh, ws + vh, "$"].join("|") + ")", ws + "?" + vh + "+" + fh, ws + "+" + ph, BS, FS, eb, HS].join("|"), "g");
function GS(e) {
    return e.match(VS) || []
}
function Tf(e, t, n) {
    return e = rr(e),
    t = n ? void 0 : t,
    t === void 0 ? _S(e) ? GS(e) : wS(e) : e.match(t) || []
}
var JS = "['’]"
  , KS = RegExp(JS, "g");
function cl(e) {
    return function(t) {
        return Mf(Tf(zf(t).replace(KS, "")), e, "")
    }
}
var sb = cl(function(e, t, n) {
    return t = t.toLowerCase(),
    e + (n ? Rf(t) : t)
});
function lb() {
    if (!arguments.length)
        return [];
    var e = arguments[0];
    return dr(e) ? e : [e]
}
var YS = as.isFinite
  , XS = Math.min;
function If(e) {
    var t = Math[e];
    return function(n, o) {
        if (n = wa(n),
        o = o == null ? 0 : XS(ln(o), 292),
        o && YS(n)) {
            var a = (rr(n) + "e").split("e")
              , i = t(a[0] + "e" + (+a[1] + o));
            return a = (rr(i) + "e").split("e"),
            +(a[0] + "e" + (+a[1] - o))
        }
        return t(n)
    }
}
var ub = If("ceil");
function Nf(e) {
    var t = _(e);
    return t.__chain__ = !0,
    t
}
var QS = Math.ceil
  , ZS = Math.max;
function cb(e, t, n) {
    (n ? Go(e, t, n) : t === void 0) ? t = 1 : t = ZS(ln(t), 0);
    var o = e == null ? 0 : e.length;
    if (!o || t < 1)
        return [];
    for (var a = 0, i = 0, s = Array(QS(o / t)); a < o; )
        s[i++] = sa(e, a, a += t);
    return s
}
function ss(e, t, n) {
    return e === e && (n !== void 0 && (e = e <= n ? e : n),
    t !== void 0 && (e = e >= t ? e : t)),
    e
}
function db(e, t, n) {
    return n === void 0 && (n = t,
    t = void 0),
    n !== void 0 && (n = wa(n),
    n = n === n ? n : 0),
    t !== void 0 && (t = wa(t),
    t = t === t ? t : 0),
    ss(wa(e), t, n)
}
var eC = 4;
function vb(e) {
    return os(e, eC)
}
var tC = 4;
function fb(e, t) {
    return t = typeof t == "function" ? t : void 0,
    os(e, tC, t)
}
function vv() {
    return new Wo(this.value(),this.__chain__)
}
function pb(e) {
    for (var t = -1, n = e == null ? 0 : e.length, o = 0, a = []; ++t < n; ) {
        var i = e[t];
        i && (a[o++] = i)
    }
    return a
}
function hb() {
    var e = arguments.length;
    if (!e)
        return [];
    for (var t = Array(e - 1), n = arguments[0], o = e; o--; )
        t[o - 1] = arguments[o];
    return su(dr(n) ? Po(n) : [n], vo(t, 1))
}
var nC = "Expected a function";
function gb(e) {
    var t = e == null ? 0 : e.length
      , n = pn;
    return e = t ? Kr(e, function(o) {
        if (typeof o[1] != "function")
            throw new TypeError(nC);
        return [n(o[0]), o[1]]
    }) : [],
    yn(function(o) {
        for (var a = -1; ++a < t; ) {
            var i = e[a];
            if (Bo(i[0], this, o))
                return Bo(i[1], this, o)
        }
    })
}
function mb(e, t, n) {
    var o = n.length;
    if (e == null)
        return !o;
    for (e = Object(e); o--; ) {
        var a = n[o]
          , i = t[a]
          , s = e[a];
        if (s === void 0 && !(a in e) || !i(s))
            return !1
    }
    return !0
}
function rC(e) {
    var t = Io(e);
    return function(n) {
        return mb(n, e, t)
    }
}
var oC = 1;
function bb(e) {
    return rC(os(e, oC))
}
function xb(e, t) {
    return t == null || mb(e, t, Io(t))
}
var aC = Object.prototype
  , iC = aC.hasOwnProperty
  , jb = Zg(function(e, t, n) {
    iC.call(e, n) ? ++e[n] : iu(e, n, 1)
});
function yb(e, t) {
    var n = au(e);
    return t == null ? n : J1(n, t)
}
var sC = 8;
function Yc(e, t, n) {
    t = n ? void 0 : t;
    var o = Za(e, sC, void 0, void 0, void 0, void 0, void 0, t);
    return o.placeholder = Yc.placeholder,
    o
}
Yc.placeholder = {};
var lC = 16;
function Xc(e, t, n) {
    t = n ? void 0 : t;
    var o = Za(e, lC, void 0, void 0, void 0, void 0, void 0, t);
    return o.placeholder = Xc.placeholder,
    o
}
Xc.placeholder = {};
function wb(e, t) {
    return e == null || e !== e ? t : e
}
var kb = Object.prototype
  , uC = kb.hasOwnProperty
  , _b = yn(function(e, t) {
    e = Object(e);
    var n = -1
      , o = t.length
      , a = o > 2 ? t[2] : void 0;
    for (a && Go(t[0], t[1], a) && (o = 1); ++n < o; )
        for (var i = t[n], s = Jo(i), l = -1, u = s.length; ++l < u; ) {
            var d = s[l]
              , c = e[d];
            (c === void 0 || Ai(c, kb[d]) && !uC.call(e, d)) && (e[d] = i[d])
        }
    return e
});
function fv(e, t, n) {
    (n !== void 0 && !Ai(e[t], n) || n === void 0 && !(t in e)) && iu(e, t, n)
}
function Ur(e) {
    return fo(e) && Xa(e)
}
function pv(e, t) {
    if (!(t === "constructor" && typeof e[t] == "function") && t != "__proto__")
        return e[t]
}
function Lf(e) {
    return Zs(e, Jo(e))
}
function cC(e, t, n, o, a, i, s) {
    var l = pv(e, n)
      , u = pv(t, n)
      , d = s.get(u);
    if (d) {
        fv(e, n, d);
        return
    }
    var c = i ? i(l, u, n + "", e, t, s) : void 0
      , v = c === void 0;
    if (v) {
        var p = dr(u)
          , f = !p && Lc(u)
          , m = !p && !f && Uc(u);
        c = u,
        p || f || m ? dr(l) ? c = l : Ur(l) ? c = Po(l) : f ? (v = !1,
        c = K1(u, !0)) : m ? (v = !1,
        c = Y1(u, !0)) : c = [] : ll(u) || Zu(u) ? (c = l,
        Zu(l) ? c = Lf(l) : (!jo(l) || Ri(l)) && (c = X1(u))) : v = !1
    }
    v && (s.set(u, c),
    a(c, u, o, i, s),
    s.delete(u)),
    fv(e, n, c)
}
function Qc(e, t, n, o, a) {
    e !== t && em(t, function(i, s) {
        if (a || (a = new Ok),
        jo(i))
            cC(e, t, s, n, Qc, o, a);
        else {
            var l = o ? o(pv(e, s), i, s + "", e, t, a) : void 0;
            l === void 0 && (l = i),
            fv(e, s, l)
        }
    }, Jo)
}
function Sb(e, t, n, o, a, i) {
    return jo(e) && jo(t) && (i.set(t, e),
    Qc(e, t, void 0, Sb, i),
    i.delete(t)),
    e
}
var Uf = sl(function(e, t, n, o) {
    Qc(e, t, n, o)
})
  , Cb = yn(function(e) {
    return e.push(void 0, Sb),
    Bo(Uf, void 0, e)
})
  , dC = "Expected a function";
function Ob(e, t, n) {
    if (typeof e != "function")
        throw new TypeError(dC);
    return setTimeout(function() {
        e.apply(void 0, n)
    }, t)
}
var Eb = yn(function(e, t) {
    return Ob(e, 1, t)
})
  , Ab = yn(function(e, t, n) {
    return Ob(e, wa(t) || 0, n)
});
function Df(e, t, n) {
    for (var o = -1, a = e == null ? 0 : e.length; ++o < a; )
        if (n(t, e[o]))
            return !0;
    return !1
}
var vC = 200;
function uu(e, t, n, o) {
    var a = -1
      , i = Hc
      , s = !0
      , l = e.length
      , u = []
      , d = t.length;
    if (!l)
        return u;
    n && (t = Kr(t, Ha(n))),
    o ? (i = Df,
    s = !1) : t.length >= vC && (i = ec,
    s = !1,
    t = new bf(t));
    e: for (; ++a < l; ) {
        var c = e[a]
          , v = n == null ? c : n(c);
        if (c = o || c !== 0 ? c : 0,
        s && v === v) {
            for (var p = d; p--; )
                if (t[p] === v)
                    continue e;
            u.push(c)
        } else
            i(t, v, o) || u.push(c)
    }
    return u
}
var Rb = yn(function(e, t) {
    return Ur(e) ? uu(e, vo(t, 1, Ur, !0)) : []
})
  , Mb = yn(function(e, t) {
    var n = gt(t);
    return Ur(n) && (n = void 0),
    Ur(e) ? uu(e, vo(t, 1, Ur, !0), pn(n)) : []
})
  , Pb = yn(function(e, t) {
    var n = gt(t);
    return Ur(n) && (n = void 0),
    Ur(e) ? uu(e, vo(t, 1, Ur, !0), void 0, n) : []
})
  , zb = Fc(function(e, t) {
    return e / t
}, 1);
function Tb(e, t, n) {
    var o = e == null ? 0 : e.length;
    return o ? (t = n || t === void 0 ? 1 : ln(t),
    sa(e, t < 0 ? 0 : t, o)) : []
}
function Ib(e, t, n) {
    var o = e == null ? 0 : e.length;
    return o ? (t = n || t === void 0 ? 1 : ln(t),
    t = o - t,
    sa(e, 0, t < 0 ? 0 : t)) : []
}
function Zc(e, t, n, o) {
    for (var a = e.length, i = o ? a : -1; (o ? i-- : ++i < a) && t(e[i], i, e); )
        ;
    return n ? sa(e, o ? 0 : i, o ? i + 1 : a) : sa(e, o ? i + 1 : 0, o ? a : i)
}
function Nb(e, t) {
    return e && e.length ? Zc(e, pn(t), !0, !0) : []
}
function Lb(e, t) {
    return e && e.length ? Zc(e, pn(t), !0) : []
}
function hv(e, t) {
    var n = dr(e) ? va : tl;
    return n(e, Oi(t))
}
function Ub(e, t, n) {
    e = rr(e),
    t = la(t);
    var o = e.length;
    n = n === void 0 ? o : ss(ln(n), 0, o);
    var a = n;
    return n -= t.length,
    n >= 0 && e.slice(n, a) == t
}
function fC(e, t) {
    return Kr(t, function(n) {
        return [n, e[n]]
    })
}
function pC(e) {
    var t = -1
      , n = Array(e.size);
    return e.forEach(function(o) {
        n[++t] = [o, o]
    }),
    n
}
var hC = "[object Map]"
  , gC = "[object Set]";
function Db(e) {
    return function(t) {
        var n = Dc(t);
        return n == hC ? hm(t) : n == gC ? pC(t) : fC(t, e(t))
    }
}
var gv = Db(Io)
  , mv = Db(Jo)
  , mC = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;"
}
  , bC = Pf(mC)
  , qb = /[&<>"']/g
  , xC = RegExp(qb.source);
function qf(e) {
    return e = rr(e),
    e && xC.test(e) ? e.replace(qb, bC) : e
}
var $b = /[\\^$.*+?()[\]{}|]/g
  , jC = RegExp($b.source);
function Fb(e) {
    return e = rr(e),
    e && jC.test(e) ? e.replace($b, "\\$&") : e
}
function Bb(e, t) {
    for (var n = -1, o = e == null ? 0 : e.length; ++n < o; )
        if (!t(e[n], n, e))
            return !1;
    return !0
}
function yC(e, t) {
    var n = !0;
    return tl(e, function(o, a, i) {
        return n = !!t(o, a, i),
        n
    }),
    n
}
function Wb(e, t, n) {
    var o = dr(e) ? Bb : yC;
    return n && Go(e, t, n) && (t = void 0),
    o(e, pn(t))
}
var wC = 4294967295;
function $f(e) {
    return e ? ss(ln(e), 0, wC) : 0
}
function kC(e, t, n, o) {
    var a = e.length;
    for (n = ln(n),
    n < 0 && (n = -n > a ? 0 : a + n),
    o = o === void 0 || o > a ? a : ln(o),
    o < 0 && (o += a),
    o = n > o ? 0 : $f(o); n < o; )
        e[n++] = t;
    return e
}
function Hb(e, t, n, o) {
    var a = e == null ? 0 : e.length;
    return a ? (n && typeof n != "number" && Go(e, t, n) && (n = 0,
    o = a),
    kC(e, t, n, o)) : []
}
function Vb(e, t) {
    var n = [];
    return tl(e, function(o, a, i) {
        t(o, a, i) && n.push(o)
    }),
    n
}
function Gb(e, t) {
    var n = dr(e) ? is : Vb;
    return n(e, pn(t))
}
function Jb(e) {
    return function(t, n, o) {
        var a = Object(t);
        if (!Xa(t)) {
            var i = pn(n);
            t = Io(t),
            n = function(l) {
                return i(a[l], l, a)
            }
        }
        var s = e(t, n, o);
        return s > -1 ? a[i ? t[s] : s] : void 0
    }
}
var _C = Math.max;
function Ff(e, t, n) {
    var o = e == null ? 0 : e.length;
    if (!o)
        return -1;
    var a = n == null ? 0 : ln(n);
    return a < 0 && (a = _C(o + a, 0)),
    Wc(e, pn(t), a)
}
var Kb = Jb(Ff);
function Yb(e, t, n) {
    var o;
    return n(e, function(a, i, s) {
        if (t(a, i, s))
            return o = i,
            !1
    }),
    o
}
function Xb(e, t) {
    return Yb(e, pn(t), Ei)
}
var SC = Math.max
  , CC = Math.min;
function Bf(e, t, n) {
    var o = e == null ? 0 : e.length;
    if (!o)
        return -1;
    var a = o - 1;
    return n !== void 0 && (a = ln(n),
    a = n < 0 ? SC(o + a, 0) : CC(a, o - 1)),
    Wc(e, pn(t), a, !0)
}
var Qb = Jb(Bf);
function Zb(e, t) {
    return Yb(e, pn(t), tm)
}
function ex(e, t) {
    return vo(nl(e, t), 1)
}
var OC = 1 / 0;
function tx(e, t) {
    return vo(nl(e, t), OC)
}
function nx(e, t, n) {
    return n = n === void 0 ? 1 : ln(n),
    vo(nl(e, t), n)
}
var EC = 1 / 0;
function rx(e) {
    var t = e == null ? 0 : e.length;
    return t ? vo(e, EC) : []
}
function ox(e, t) {
    var n = e == null ? 0 : e.length;
    return n ? (t = t === void 0 ? 1 : ln(t),
    vo(e, t)) : []
}
var AC = 512;
function ax(e) {
    return Za(e, AC)
}
var ix = If("floor")
  , RC = "Expected a function"
  , MC = 8
  , PC = 32
  , zC = 128
  , TC = 256;
function sx(e) {
    return ei(function(t) {
        var n = t.length
          , o = n
          , a = Wo.prototype.thru;
        for (e && t.reverse(); o--; ) {
            var i = t[o];
            if (typeof i != "function")
                throw new TypeError(RC);
            if (a && !s && Hu(i) == "wrapper")
                var s = new Wo([],!0)
        }
        for (o = s ? o : n; ++o < n; ) {
            i = t[o];
            var l = Hu(i)
              , u = l == "wrapper" ? _f(i) : void 0;
            u && lv(u[0]) && u[1] == (zC | MC | PC | TC) && !u[4].length && u[9] == 1 ? s = s[Hu(u[0])].apply(s, u[3]) : s = i.length == 1 && lv(i) ? s[l]() : s.thru(i)
        }
        return function() {
            var d = arguments
              , c = d[0];
            if (s && d.length == 1 && dr(c))
                return s.plant(c).value();
            for (var v = 0, p = n ? t[v].apply(this, d) : c; ++v < n; )
                p = t[v].call(this, p);
            return p
        }
    })
}
var lx = sx()
  , ux = sx(!0);
function cx(e, t) {
    return e == null ? e : em(e, Oi(t), Jo)
}
function dx(e, t) {
    return e == null ? e : Q1(e, Oi(t), Jo)
}
function vx(e, t) {
    return e && Ei(e, Oi(t))
}
function fx(e, t) {
    return e && tm(e, Oi(t))
}
function px(e) {
    for (var t = -1, n = e == null ? 0 : e.length, o = {}; ++t < n; ) {
        var a = e[t];
        o[a[0]] = a[1]
    }
    return o
}
function ed(e, t) {
    return is(t, function(n) {
        return Ri(e[n])
    })
}
function hx(e) {
    return e == null ? [] : ed(e, Io(e))
}
function gx(e) {
    return e == null ? [] : ed(e, Jo(e))
}
function Wf(e, t) {
    return e > t
}
function td(e) {
    return function(t, n) {
        return typeof t == "string" && typeof n == "string" || (t = wa(t),
        n = wa(n)),
        e(t, n)
    }
}
var mx = td(Wf)
  , bx = td(function(e, t) {
    return e >= t
})
  , IC = Object.prototype
  , NC = IC.hasOwnProperty;
function LC(e, t) {
    return e != null && NC.call(e, t)
}
function xx(e, t) {
    return e != null && Z1(e, t, LC)
}
var UC = Math.max
  , DC = Math.min;
function qC(e, t, n) {
    return e >= DC(t, n) && e < UC(t, n)
}
function jx(e, t, n) {
    return t = Fs(t),
    n === void 0 ? (n = t,
    t = 0) : n = Fs(n),
    e = wa(e),
    qC(e, t, n)
}
var $C = "[object String]";
function cu(e) {
    return typeof e == "string" || !dr(e) && fo(e) && Qa(e) == $C
}
function Hf(e, t) {
    return Kr(t, function(n) {
        return e[n]
    })
}
function ls(e) {
    return e == null ? [] : Hf(e, Io(e))
}
var FC = Math.max;
function yx(e, t, n, o) {
    e = Xa(e) ? e : ls(e),
    n = n && !o ? ln(n) : 0;
    var a = e.length;
    return n < 0 && (n = FC(a + n, 0)),
    cu(e) ? n <= a && e.indexOf(t, n) > -1 : !!a && al(e, t, n) > -1
}
var BC = Math.max;
function wx(e, t, n) {
    var o = e == null ? 0 : e.length;
    if (!o)
        return -1;
    var a = n == null ? 0 : ln(n);
    return a < 0 && (a = BC(o + a, 0)),
    al(e, t, a)
}
var WC = Math.min;
function Vf(e, t, n) {
    for (var o = n ? Df : Hc, a = e[0].length, i = e.length, s = i, l = Array(i), u = 1 / 0, d = []; s--; ) {
        var c = e[s];
        s && t && (c = Kr(c, Ha(t))),
        u = WC(c.length, u),
        l[s] = !n && (t || a >= 120 && c.length >= 120) ? new bf(s && c) : void 0
    }
    c = e[0];
    var v = -1
      , p = l[0];
    e: for (; ++v < a && d.length < u; ) {
        var f = c[v]
          , m = t ? t(f) : f;
        if (f = n || f !== 0 ? f : 0,
        !(p ? ec(p, m) : o(d, m, n))) {
            for (s = i; --s; ) {
                var x = l[s];
                if (!(x ? ec(x, m) : o(e[s], m, n)))
                    continue e
            }
            p && p.push(m),
            d.push(f)
        }
    }
    return d
}
function Gf(e) {
    return Ur(e) ? e : []
}
var kx = yn(function(e) {
    var t = Kr(e, Gf);
    return t.length && t[0] === e[0] ? Vf(t) : []
})
  , _x = yn(function(e) {
    var t = gt(e)
      , n = Kr(e, Gf);
    return t === gt(n) ? t = void 0 : n.pop(),
    n.length && n[0] === e[0] ? Vf(n, pn(t)) : []
})
  , Sx = yn(function(e) {
    var t = gt(e)
      , n = Kr(e, Gf);
    return t = typeof t == "function" ? t : void 0,
    t && n.pop(),
    n.length && n[0] === e[0] ? Vf(n, void 0, t) : []
});
function HC(e, t, n, o) {
    return Ei(e, function(a, i, s) {
        t(o, n(a), i, s)
    }),
    o
}
function Cx(e, t) {
    return function(n, o) {
        return HC(n, e, t(o), {})
    }
}
var VC = Object.prototype
  , GC = VC.toString
  , Ox = Cx(function(e, t, n) {
    t != null && typeof t.toString != "function" && (t = GC.call(t)),
    e[t] = n
}, lf(Aa))
  , Ex = Object.prototype
  , JC = Ex.hasOwnProperty
  , KC = Ex.toString
  , Ax = Cx(function(e, t, n) {
    t != null && typeof t.toString != "function" && (t = KC.call(t)),
    JC.call(e, t) ? e[t].push(n) : e[t] = [n]
}, pn);
function Rx(e, t) {
    return t.length < 2 ? e : Ic(e, sa(t, 0, -1))
}
function du(e, t, n) {
    t = rl(t, e),
    e = Rx(e, t);
    var o = e == null ? e : e[el(gt(t))];
    return o == null ? void 0 : Bo(o, e, n)
}
var Mx = yn(du)
  , Px = yn(function(e, t, n) {
    var o = -1
      , a = typeof t == "function"
      , i = Xa(e) ? Array(e.length) : [];
    return tl(e, function(s) {
        i[++o] = a ? Bo(t, s, n) : du(s, t, n)
    }),
    i
})
  , YC = "[object ArrayBuffer]";
function XC(e) {
    return fo(e) && Qa(e) == YC
}
var hh = Bs && Bs.isArrayBuffer
  , zx = hh ? Ha(hh) : XC
  , QC = "[object Boolean]";
function Tx(e) {
    return e === !0 || e === !1 || fo(e) && Qa(e) == QC
}
var ZC = "[object Date]";
function eO(e) {
    return fo(e) && Qa(e) == ZC
}
var gh = Bs && Bs.isDate
  , Ix = gh ? Ha(gh) : eO;
function Nx(e) {
    return fo(e) && e.nodeType === 1 && !ll(e)
}
function Lx(e, t, n) {
    n = typeof n == "function" ? n : void 0;
    var o = n ? n(e, t) : void 0;
    return o === void 0 ? Ek(e, t, void 0, n) : !!o
}
var tO = as.isFinite;
function Ux(e) {
    return typeof e == "number" && tO(e)
}
function Jf(e) {
    return typeof e == "number" && e == ln(e)
}
function Dx(e, t) {
    return e === t || nm(e, t, rm(t))
}
function qx(e, t, n) {
    return n = typeof n == "function" ? n : void 0,
    nm(e, t, rm(t), n)
}
var nO = "[object Number]";
function Kf(e) {
    return typeof e == "number" || fo(e) && Qa(e) == nO
}
function $x(e) {
    return Kf(e) && e != +e
}
var rO = Ak ? Ri : xf
  , oO = "Unsupported core-js use. Try https://npms.io/search?q=ponyfill.";
function Fx(e) {
    if (rO(e))
        throw new Error(oO);
    return Rk(e)
}
function Bx(e) {
    return e == null
}
function Wx(e) {
    return e === null
}
var aO = "[object RegExp]";
function iO(e) {
    return fo(e) && Qa(e) == aO
}
var mh = Bs && Bs.isRegExp
  , nd = mh ? Ha(mh) : iO
  , bh = 9007199254740991;
function Hx(e) {
    return Jf(e) && e >= -bh && e <= bh
}
function Vx(e) {
    return e === void 0
}
var sO = "[object WeakMap]";
function Gx(e) {
    return fo(e) && Dc(e) == sO
}
var lO = "[object WeakSet]";
function Jx(e) {
    return fo(e) && Qa(e) == lO
}
var uO = 1;
function Kx(e) {
    return pn(typeof e == "function" ? e : os(e, uO))
}
var cO = Array.prototype
  , dO = cO.join;
function Yx(e, t) {
    return e == null ? "" : dO.call(e, t)
}
var Xx = cl(function(e, t, n) {
    return e + (n ? "-" : "") + t.toLowerCase()
})
  , Qx = Zg(function(e, t, n) {
    iu(e, n, t)
});
function vO(e, t, n) {
    for (var o = n + 1; o--; )
        if (e[o] === t)
            return o;
    return o
}
var fO = Math.max
  , pO = Math.min;
function Zx(e, t, n) {
    var o = e == null ? 0 : e.length;
    if (!o)
        return -1;
    var a = o;
    return n !== void 0 && (a = ln(n),
    a = a < 0 ? fO(o + a, 0) : pO(a, o - 1)),
    t === t ? vO(e, t, a) : Wc(e, zm, a, !0)
}
var e0 = cl(function(e, t, n) {
    return e + (n ? " " : "") + t.toLowerCase()
})
  , t0 = Gm("toLowerCase")
  , n0 = td(om)
  , r0 = td(function(e, t) {
    return e <= t
});
function o0(e, t) {
    var n = {};
    return t = pn(t),
    Ei(e, function(o, a, i) {
        iu(n, t(o, a, i), o)
    }),
    n
}
var hO = 1;
function a0(e) {
    return ek(os(e, hO))
}
var gO = 1;
function i0(e, t) {
    return tk(e, os(t, gO))
}
function s0(e) {
    return e && e.length ? uf(e, Aa, Wf) : void 0
}
function l0(e, t) {
    return e && e.length ? uf(e, pn(t), Wf) : void 0
}
function Yf(e, t) {
    for (var n, o = -1, a = e.length; ++o < a; ) {
        var i = t(e[o]);
        i !== void 0 && (n = n === void 0 ? i : n + i)
    }
    return n
}
var mO = NaN;
function u0(e, t) {
    var n = e == null ? 0 : e.length;
    return n ? Yf(e, t) / n : mO
}
function c0(e) {
    return u0(e, Aa)
}
function d0(e, t) {
    return u0(e, pn(t))
}
var v0 = sl(function(e, t, n) {
    Qc(e, t, n)
})
  , f0 = yn(function(e, t) {
    return function(n) {
        return du(n, e, t)
    }
})
  , p0 = yn(function(e, t) {
    return function(n) {
        return du(e, n, t)
    }
});
function h0(e) {
    return e && e.length ? uf(e, Aa, om) : void 0
}
function g0(e, t, n) {
    var o = Io(t)
      , a = ed(t, o)
      , i = !(jo(n) && "chain"in n) || !!n.chain
      , s = Ri(e);
    return va(a, function(l) {
        var u = t[l];
        e[l] = u,
        s && (e.prototype[l] = function() {
            var d = this.__chain__;
            if (i || d) {
                var c = e(this.__wrapped__)
                  , v = c.__actions__ = Po(this.__actions__);
                return v.push({
                    func: u,
                    args: arguments,
                    thisArg: e
                }),
                c.__chain__ = d,
                c
            }
            return u.apply(e, su([this.value()], arguments))
        }
        )
    }),
    e
}
var m0 = Fc(function(e, t) {
    return e * t
}, 1)
  , bO = "Expected a function";
function vu(e) {
    if (typeof e != "function")
        throw new TypeError(bO);
    return function() {
        var t = arguments;
        switch (t.length) {
        case 0:
            return !e.call(this);
        case 1:
            return !e.call(this, t[0]);
        case 2:
            return !e.call(this, t[0], t[1]);
        case 3:
            return !e.call(this, t[0], t[1], t[2])
        }
        return !e.apply(this, t)
    }
}
function xO(e) {
    for (var t, n = []; !(t = e.next()).done; )
        n.push(t.value);
    return n
}
var jO = "[object Map]"
  , yO = "[object Set]"
  , Pd = tc ? tc.iterator : void 0;
function Xf(e) {
    if (!e)
        return [];
    if (Xa(e))
        return cu(e) ? ua(e) : Po(e);
    if (Pd && e[Pd])
        return xO(e[Pd]());
    var t = Dc(e)
      , n = t == jO ? hm : t == yO ? jf : ls;
    return n(e)
}
function bv() {
    this.__values__ === void 0 && (this.__values__ = Xf(this.value()));
    var e = this.__index__ >= this.__values__.length
      , t = e ? void 0 : this.__values__[this.__index__++];
    return {
        done: e,
        value: t
    }
}
function b0(e, t) {
    var n = e.length;
    if (n)
        return t += t < 0 ? n : 0,
        ol(t, n) ? e[t] : void 0
}
function x0(e, t) {
    return e && e.length ? b0(e, ln(t)) : void 0
}
function j0(e) {
    return e = ln(e),
    yn(function(t) {
        return b0(t, e)
    })
}
function Qf(e, t) {
    return t = rl(t, e),
    e = Rx(e, t),
    e == null || delete e[el(gt(t))]
}
function wO(e) {
    return ll(e) ? void 0 : e
}
var kO = 1
  , _O = 2
  , SO = 4
  , ic = ei(function(e, t) {
    var n = {};
    if (e == null)
        return n;
    var o = !1;
    t = Kr(t, function(i) {
        return i = rl(i, e),
        o || (o = i.length > 1),
        i
    }),
    Zs(e, am(e), n),
    o && (n = os(n, kO | _O | SO, wO));
    for (var a = t.length; a--; )
        Qf(n, t[a]);
    return n
});
function fu(e, t, n, o) {
    if (!jo(e))
        return e;
    t = rl(t, e);
    for (var a = -1, i = t.length, s = i - 1, l = e; l != null && ++a < i; ) {
        var u = el(t[a])
          , d = n;
        if (u === "__proto__" || u === "constructor" || u === "prototype")
            return e;
        if (a != s) {
            var c = l[u];
            d = o ? o(c, u, l) : void 0,
            d === void 0 && (d = jo(c) ? c : ol(t[a + 1]) ? [] : {})
        }
        af(l, u, d),
        l = l[u]
    }
    return e
}
function y0(e, t, n) {
    for (var o = -1, a = t.length, i = {}; ++o < a; ) {
        var s = t[o]
          , l = Ic(e, s);
        n(l, s) && fu(i, rl(s, e), l)
    }
    return i
}
function Zf(e, t) {
    if (e == null)
        return {};
    var n = Kr(am(e), function(o) {
        return [o]
    });
    return t = pn(t),
    y0(e, n, function(o, a) {
        return t(o, a[0])
    })
}
function w0(e, t) {
    return Zf(e, vu(pn(t)))
}
function k0(e) {
    return Af(2, e)
}
function _0(e, t, n, o) {
    return e == null ? [] : (dr(t) || (t = t == null ? [] : [t]),
    n = o ? void 0 : n,
    dr(n) || (n = n == null ? [] : [n]),
    nk(e, t, n))
}
function ep(e) {
    return ei(function(t) {
        return t = Kr(t, Ha(pn)),
        yn(function(n) {
            var o = this;
            return e(t, function(a) {
                return Bo(a, o, n)
            })
        })
    })
}
var S0 = ep(Kr)
  , CO = yn
  , OO = Math.min
  , C0 = CO(function(e, t) {
    t = t.length == 1 && dr(t[0]) ? Kr(t[0], Ha(pn)) : Kr(vo(t, 1), Ha(pn));
    var n = t.length;
    return yn(function(o) {
        for (var a = -1, i = OO(o.length, n); ++a < i; )
            o[a] = t[a].call(this, o[a]);
        return Bo(e, this, o)
    })
})
  , O0 = ep(Bb)
  , E0 = ep(gm)
  , EO = 9007199254740991
  , AO = Math.floor;
function xv(e, t) {
    var n = "";
    if (!e || t < 1 || t > EO)
        return n;
    do
        t % 2 && (n += e),
        t = AO(t / 2),
        t && (e += e);
    while (t);
    return n
}
var RO = im("length")
  , A0 = "\\ud800-\\udfff"
  , MO = "\\u0300-\\u036f"
  , PO = "\\ufe20-\\ufe2f"
  , zO = "\\u20d0-\\u20ff"
  , TO = MO + PO + zO
  , IO = "\\ufe0e\\ufe0f"
  , NO = "[" + A0 + "]"
  , jv = "[" + TO + "]"
  , yv = "\\ud83c[\\udffb-\\udfff]"
  , LO = "(?:" + jv + "|" + yv + ")"
  , R0 = "[^" + A0 + "]"
  , M0 = "(?:\\ud83c[\\udde6-\\uddff]){2}"
  , P0 = "[\\ud800-\\udbff][\\udc00-\\udfff]"
  , UO = "\\u200d"
  , z0 = LO + "?"
  , T0 = "[" + IO + "]?"
  , DO = "(?:" + UO + "(?:" + [R0, M0, P0].join("|") + ")" + T0 + z0 + ")*"
  , qO = T0 + z0 + DO
  , $O = "(?:" + [R0 + jv + "?", jv, M0, P0, NO].join("|") + ")"
  , xh = RegExp(yv + "(?=" + yv + ")|" + $O + qO, "g");
function FO(e) {
    for (var t = xh.lastIndex = 0; xh.test(e); )
        ++t;
    return t
}
function dl(e) {
    return ul(e) ? FO(e) : RO(e)
}
var BO = Math.ceil;
function sc(e, t) {
    t = t === void 0 ? " " : la(t);
    var n = t.length;
    if (n < 2)
        return n ? xv(t, e) : t;
    var o = xv(t, BO(e / dl(t)));
    return ul(t) ? Mi(ua(o), 0, e).join("") : o.slice(0, e)
}
var WO = Math.ceil
  , HO = Math.floor;
function I0(e, t, n) {
    e = rr(e),
    t = ln(t);
    var o = t ? dl(e) : 0;
    if (!t || o >= t)
        return e;
    var a = (t - o) / 2;
    return sc(HO(a), n) + e + sc(WO(a), n)
}
function N0(e, t, n) {
    e = rr(e),
    t = ln(t);
    var o = t ? dl(e) : 0;
    return t && o < t ? e + sc(t - o, n) : e
}
function L0(e, t, n) {
    e = rr(e),
    t = ln(t);
    var o = t ? dl(e) : 0;
    return t && o < t ? sc(t - o, n) + e : e
}
var VO = /^\s+/
  , GO = as.parseInt;
function U0(e, t, n) {
    return n || t == null ? t = 0 : t && (t = +t),
    GO(rr(e).replace(VO, ""), t || 0)
}
var JO = 32
  , pu = yn(function(e, t) {
    var n = xi(t, il(pu));
    return Za(e, JO, void 0, t, n)
});
pu.placeholder = {};
var KO = 64
  , rd = yn(function(e, t) {
    var n = xi(t, il(rd));
    return Za(e, KO, void 0, t, n)
});
rd.placeholder = {};
function YO(e, t) {
    return y0(e, t, function(n, o) {
        return cf(e, o)
    })
}
var D0 = ei(function(e, t) {
    return e == null ? {} : YO(e, t)
});
function wv(e) {
    for (var t, n = this; n instanceof Bc; ) {
        var o = Mm(n);
        o.__index__ = 0,
        o.__values__ = void 0,
        t ? a.__wrapped__ = o : t = o;
        var a = o;
        n = n.__wrapped__
    }
    return a.__wrapped__ = e,
    t
}
function q0(e) {
    return function(t) {
        return e == null ? void 0 : Ic(e, t)
    }
}
function XO(e, t, n, o) {
    for (var a = n - 1, i = e.length; ++a < i; )
        if (o(e[a], t))
            return a;
    return -1
}
var QO = Array.prototype
  , jh = QO.splice;
function tp(e, t, n, o) {
    var a = o ? XO : al
      , i = -1
      , s = t.length
      , l = e;
    for (e === t && (t = Po(t)),
    n && (l = Kr(e, Ha(n))); ++i < s; )
        for (var u = 0, d = t[i], c = n ? n(d) : d; (u = a(l, c, u, o)) > -1; )
            l !== e && jh.call(l, u, 1),
            jh.call(e, u, 1);
    return e
}
function np(e, t) {
    return e && e.length && t && t.length ? tp(e, t) : e
}
var $0 = yn(np);
function F0(e, t, n) {
    return e && e.length && t && t.length ? tp(e, t, pn(n)) : e
}
function B0(e, t, n) {
    return e && e.length && t && t.length ? tp(e, t, void 0, n) : e
}
var ZO = Array.prototype
  , eE = ZO.splice;
function W0(e, t) {
    for (var n = e ? t.length : 0, o = n - 1; n--; ) {
        var a = t[n];
        if (n == o || a !== i) {
            var i = a;
            ol(a) ? eE.call(e, a, 1) : Qf(e, a)
        }
    }
    return e
}
var H0 = ei(function(e, t) {
    var n = e == null ? 0 : e.length
      , o = Cf(e, t);
    return W0(e, Kr(t, function(a) {
        return ol(a, n) ? +a : a
    }).sort(rk)),
    o
})
  , tE = Math.floor
  , nE = Math.random;
function rp(e, t) {
    return e + tE(nE() * (t - e + 1))
}
var rE = parseFloat
  , oE = Math.min
  , aE = Math.random;
function V0(e, t, n) {
    if (n && typeof n != "boolean" && Go(e, t, n) && (t = n = void 0),
    n === void 0 && (typeof t == "boolean" ? (n = t,
    t = void 0) : typeof e == "boolean" && (n = e,
    e = void 0)),
    e === void 0 && t === void 0 ? (e = 0,
    t = 1) : (e = Fs(e),
    t === void 0 ? (t = e,
    e = 0) : t = Fs(t)),
    e > t) {
        var o = e;
        e = t,
        t = o
    }
    if (n || e % 1 || t % 1) {
        var a = aE();
        return oE(e + a * (t - e + rE("1e-" + ((a + "").length - 1))), t)
    }
    return rp(e, t)
}
var G0 = ok(!0)
  , iE = 256
  , J0 = ei(function(e, t) {
    return Za(e, iE, void 0, void 0, void 0, t)
});
function K0(e, t, n, o, a) {
    return a(e, function(i, s, l) {
        n = o ? (o = !1,
        i) : t(n, i, s, l)
    }),
    n
}
function Y0(e, t, n) {
    var o = dr(e) ? Mf : K0
      , a = arguments.length < 3;
    return o(e, pn(t), n, a, tl)
}
function sE(e, t, n, o) {
    var a = e == null ? 0 : e.length;
    for (o && a && (n = e[--a]); a--; )
        n = t(n, e[a], a, e);
    return n
}
function X0(e, t, n) {
    var o = dr(e) ? sE : K0
      , a = arguments.length < 3;
    return o(e, pn(t), n, a, ak)
}
function Q0(e, t) {
    var n = dr(e) ? is : Vb;
    return n(e, vu(pn(t)))
}
function Z0(e, t) {
    var n = [];
    if (!(e && e.length))
        return n;
    var o = -1
      , a = []
      , i = e.length;
    for (t = pn(t); ++o < i; ) {
        var s = e[o];
        t(s, o, e) && (n.push(s),
        a.push(o))
    }
    return W0(e, a),
    n
}
function ej(e, t, n) {
    return (n ? Go(e, t, n) : t === void 0) ? t = 1 : t = ln(t),
    xv(rr(e), t)
}
function tj() {
    var e = arguments
      , t = rr(e[0]);
    return e.length < 3 ? t : t.replace(e[1], e[2])
}
var lE = "Expected a function";
function nj(e, t) {
    if (typeof e != "function")
        throw new TypeError(lE);
    return t = t === void 0 ? t : ln(t),
    yn(e, t)
}
function rj(e, t, n) {
    t = rl(t, e);
    var o = -1
      , a = t.length;
    for (a || (a = 1,
    e = void 0); ++o < a; ) {
        var i = e?.[el(t[o])];
        i === void 0 && (o = a,
        i = n),
        e = Ri(i) ? i.call(e) : i
    }
    return e
}
var uE = Array.prototype
  , cE = uE.reverse;
function lc(e) {
    return e == null ? e : cE.call(e)
}
var oj = If("round");
function aj(e) {
    var t = e.length;
    return t ? e[rp(0, t - 1)] : void 0
}
function dE(e) {
    return aj(ls(e))
}
function ij(e) {
    var t = dr(e) ? aj : dE;
    return t(e)
}
function od(e, t) {
    var n = -1
      , o = e.length
      , a = o - 1;
    for (t = t === void 0 ? o : t; ++n < t; ) {
        var i = rp(n, a)
          , s = e[i];
        e[i] = e[n],
        e[n] = s
    }
    return e.length = t,
    e
}
function vE(e, t) {
    return od(Po(e), ss(t, 0, e.length))
}
function fE(e, t) {
    var n = ls(e);
    return od(n, ss(t, 0, n.length))
}
function sj(e, t, n) {
    (n ? Go(e, t, n) : t === void 0) ? t = 1 : t = ln(t);
    var o = dr(e) ? vE : fE;
    return o(e, t)
}
function lj(e, t, n) {
    return e == null ? e : fu(e, t, n)
}
function uj(e, t, n, o) {
    return o = typeof o == "function" ? o : void 0,
    e == null ? e : fu(e, t, n, o)
}
function pE(e) {
    return od(Po(e))
}
function hE(e) {
    return od(ls(e))
}
function cj(e) {
    var t = dr(e) ? pE : hE;
    return t(e)
}
var gE = "[object Map]"
  , mE = "[object Set]";
function dj(e) {
    if (e == null)
        return 0;
    if (Xa(e))
        return cu(e) ? dl(e) : e.length;
    var t = Dc(e);
    return t == gE || t == mE ? e.size : Mk(e).length
}
function vj(e, t, n) {
    var o = e == null ? 0 : e.length;
    return o ? (n && typeof n != "number" && Go(e, t, n) ? (t = 0,
    n = o) : (t = t == null ? 0 : ln(t),
    n = n === void 0 ? o : ln(n)),
    sa(e, t, n)) : []
}
var fj = cl(function(e, t, n) {
    return e + (n ? "_" : "") + t.toLowerCase()
});
function bE(e, t) {
    var n;
    return tl(e, function(o, a, i) {
        return n = t(o, a, i),
        !n
    }),
    !!n
}
function pj(e, t, n) {
    var o = dr(e) ? gm : bE;
    return n && Go(e, t, n) && (t = void 0),
    o(e, pn(t))
}
var xE = 4294967295
  , jE = xE - 1
  , yE = Math.floor
  , wE = Math.min;
function op(e, t, n, o) {
    var a = 0
      , i = e == null ? 0 : e.length;
    if (i === 0)
        return 0;
    t = n(t);
    for (var s = t !== t, l = t === null, u = Ki(t), d = t === void 0; a < i; ) {
        var c = yE((a + i) / 2)
          , v = n(e[c])
          , p = v !== void 0
          , f = v === null
          , m = v === v
          , x = Ki(v);
        if (s)
            var y = o || m;
        else
            d ? y = m && (o || p) : l ? y = m && p && (o || !f) : u ? y = m && p && !f && (o || !x) : f || x ? y = !1 : y = o ? v <= t : v < t;
        y ? a = c + 1 : i = c
    }
    return wE(i, jE)
}
var kE = 4294967295
  , _E = kE >>> 1;
function ad(e, t, n) {
    var o = 0
      , a = e == null ? o : e.length;
    if (typeof t == "number" && t === t && a <= _E) {
        for (; o < a; ) {
            var i = o + a >>> 1
              , s = e[i];
            s !== null && !Ki(s) && (n ? s <= t : s < t) ? o = i + 1 : a = i
        }
        return a
    }
    return op(e, t, Aa, n)
}
function hj(e, t) {
    return ad(e, t)
}
function gj(e, t, n) {
    return op(e, t, pn(n))
}
function mj(e, t) {
    var n = e == null ? 0 : e.length;
    if (n) {
        var o = ad(e, t);
        if (o < n && Ai(e[o], t))
            return o
    }
    return -1
}
function bj(e, t) {
    return ad(e, t, !0)
}
function xj(e, t, n) {
    return op(e, t, pn(n), !0)
}
function jj(e, t) {
    var n = e == null ? 0 : e.length;
    if (n) {
        var o = ad(e, t, !0) - 1;
        if (Ai(e[o], t))
            return o
    }
    return -1
}
function yj(e, t) {
    for (var n = -1, o = e.length, a = 0, i = []; ++n < o; ) {
        var s = e[n]
          , l = t ? t(s) : s;
        if (!n || !Ai(l, u)) {
            var u = l;
            i[a++] = s === 0 ? 0 : s
        }
    }
    return i
}
function wj(e) {
    return e && e.length ? yj(e) : []
}
function kj(e, t) {
    return e && e.length ? yj(e, pn(t)) : []
}
var SE = 4294967295;
function _j(e, t, n) {
    return n && typeof n != "number" && Go(e, t, n) && (t = n = void 0),
    n = n === void 0 ? SE : n >>> 0,
    n ? (e = rr(e),
    e && (typeof t == "string" || t != null && !nd(t)) && (t = la(t),
    !t && ul(e)) ? Mi(ua(e), 0, n) : e.split(t, n)) : []
}
var CE = "Expected a function"
  , OE = Math.max;
function Sj(e, t) {
    if (typeof e != "function")
        throw new TypeError(CE);
    return t = t == null ? 0 : OE(ln(t), 0),
    yn(function(n) {
        var o = n[t]
          , a = Mi(n, 0, t);
        return o && su(a, o),
        Bo(e, this, a)
    })
}
var Cj = cl(function(e, t, n) {
    return e + (n ? " " : "") + Kc(t)
});
function Oj(e, t, n) {
    return e = rr(e),
    n = n == null ? 0 : ss(ln(n), 0, e.length),
    t = la(t),
    e.slice(n, n + t.length) == t
}
function Ej() {
    return {}
}
function Aj() {
    return ""
}
function Rj() {
    return !0
}
var Mj = Fc(function(e, t) {
    return e - t
}, 0);
function Pj(e) {
    return e && e.length ? Yf(e, Aa) : 0
}
function zj(e, t) {
    return e && e.length ? Yf(e, pn(t)) : 0
}
function Tj(e) {
    var t = e == null ? 0 : e.length;
    return t ? sa(e, 1, t) : []
}
function Ij(e, t, n) {
    return e && e.length ? (t = n || t === void 0 ? 1 : ln(t),
    sa(e, 0, t < 0 ? 0 : t)) : []
}
function Nj(e, t, n) {
    var o = e == null ? 0 : e.length;
    return o ? (t = n || t === void 0 ? 1 : ln(t),
    t = o - t,
    sa(e, t < 0 ? 0 : t, o)) : []
}
function Lj(e, t) {
    return e && e.length ? Zc(e, pn(t), !1, !0) : []
}
function Uj(e, t) {
    return e && e.length ? Zc(e, pn(t)) : []
}
function Dj(e, t) {
    return t(e),
    e
}
var qj = Object.prototype
  , EE = qj.hasOwnProperty;
function yh(e, t, n, o) {
    return e === void 0 || Ai(e, qj[n]) && !EE.call(o, n) ? t : e
}
var AE = {
    "\\": "\\",
    "'": "'",
    "\n": "n",
    "\r": "r",
    "\u2028": "u2028",
    "\u2029": "u2029"
};
function RE(e) {
    return "\\" + AE[e]
}
var $j = /<%=([\s\S]+?)%>/g
  , ME = /<%-([\s\S]+?)%>/g
  , PE = /<%([\s\S]+?)%>/g
  , uc = {
    escape: ME,
    evaluate: PE,
    interpolate: $j,
    variable: "",
    imports: {
        _: {
            escape: qf
        }
    }
}
  , zE = "Invalid `variable` option passed into `_.template`"
  , TE = /\b__p \+= '';/g
  , IE = /\b(__p \+=) '' \+/g
  , NE = /(__e\(.*?\)|\b__t\)) \+\n'';/g
  , LE = /[()=,{}\[\]\/\s]/
  , UE = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g
  , Au = /($^)/
  , DE = /['\n\r\u2028\u2029\\]/g
  , qE = Object.prototype
  , wh = qE.hasOwnProperty;
function Fj(e, t, n) {
    var o = uc.imports._.templateSettings || uc;
    n && Go(e, t, n) && (t = void 0),
    e = rr(e),
    t = Bl({}, t, o, yh);
    var a = Bl({}, t.imports, o.imports, yh), i = Io(a), s = Hf(a, i), l, u, d = 0, c = t.interpolate || Au, v = "__p += '", p = RegExp((t.escape || Au).source + "|" + c.source + "|" + (c === $j ? UE : Au).source + "|" + (t.evaluate || Au).source + "|$", "g"), f = wh.call(t, "sourceURL") ? "//# sourceURL=" + (t.sourceURL + "").replace(/\s/g, " ") + `
` : "";
    e.replace(p, function(y, w, S, P, R, k) {
        return S || (S = P),
        v += e.slice(d, k).replace(DE, RE),
        w && (l = !0,
        v += `' +
__e(` + w + `) +
'`),
        R && (u = !0,
        v += `';
` + R + `;
__p += '`),
        S && (v += `' +
((__t = (` + S + `)) == null ? '' : __t) +
'`),
        d = k + y.length,
        y
    }),
    v += `';
`;
    var m = wh.call(t, "variable") && t.variable;
    if (!m)
        v = `with (obj) {
` + v + `
}
`;
    else if (LE.test(m))
        throw new Error(zE);
    v = (u ? v.replace(TE, "") : v).replace(IE, "$1").replace(NE, "$1;"),
    v = "function(" + (m || "obj") + `) {
` + (m ? "" : `obj || (obj = {});
`) + "var __t, __p = ''" + (l ? ", __e = _.escape" : "") + (u ? `, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
` : `;
`) + v + `return __p
}`;
    var x = Ef(function() {
        return Function(i, f + "return " + v).apply(void 0, s)
    });
    if (x.source = v,
    Gc(x))
        throw x;
    return x
}
var $E = "Expected a function";
function Bj(e, t, n) {
    var o = !0
      , a = !0;
    if (typeof e != "function")
        throw new TypeError($E);
    return jo(n) && (o = "leading"in n ? !!n.leading : o,
    a = "trailing"in n ? !!n.trailing : a),
    Gi(e, t, {
        leading: o,
        maxWait: t,
        trailing: a
    })
}
function hu(e, t) {
    return t(e)
}
function kv() {
    return this
}
function Wj(e, t) {
    var n = e;
    return n instanceof En && (n = n.value()),
    Mf(t, function(o, a) {
        return a.func.apply(a.thisArg, su([o], a.args))
    }, n)
}
function Pl() {
    return Wj(this.__wrapped__, this.__actions__)
}
function Hj(e) {
    return rr(e).toLowerCase()
}
function Vj(e) {
    return dr(e) ? Kr(e, el) : Ki(e) ? [e] : Po(ik(rr(e)))
}
var kh = 9007199254740991;
function Gj(e) {
    return e ? ss(ln(e), -kh, kh) : e === 0 ? e : 0
}
function Jj(e) {
    return rr(e).toUpperCase()
}
function Kj(e, t, n) {
    var o = dr(e)
      , a = o || Lc(e) || Uc(e);
    if (t = pn(t),
    n == null) {
        var i = e && e.constructor;
        a ? n = o ? new i : [] : jo(e) ? n = Ri(i) ? au(Qg(e)) : {} : n = {}
    }
    return (a ? va : Ei)(e, function(s, l, u) {
        return t(n, s, l, u)
    }),
    n
}
function Yj(e, t) {
    for (var n = e.length; n-- && al(t, e[n], 0) > -1; )
        ;
    return n
}
function Xj(e, t) {
    for (var n = -1, o = e.length; ++n < o && al(t, e[n], 0) > -1; )
        ;
    return n
}
function Qj(e, t, n) {
    if (e = rr(e),
    e && (n || t === void 0))
        return sk(e);
    if (!e || !(t = la(t)))
        return e;
    var o = ua(e)
      , a = ua(t)
      , i = Xj(o, a)
      , s = Yj(o, a) + 1;
    return Mi(o, i, s).join("")
}
function Zj(e, t, n) {
    if (e = rr(e),
    e && (n || t === void 0))
        return e.slice(0, lk(e) + 1);
    if (!e || !(t = la(t)))
        return e;
    var o = ua(e)
      , a = Yj(o, ua(t)) + 1;
    return Mi(o, 0, a).join("")
}
var FE = /^\s+/;
function ey(e, t, n) {
    if (e = rr(e),
    e && (n || t === void 0))
        return e.replace(FE, "");
    if (!e || !(t = la(t)))
        return e;
    var o = ua(e)
      , a = Xj(o, ua(t));
    return Mi(o, a).join("")
}
var BE = 30
  , WE = "..."
  , HE = /\w*$/;
function ty(e, t) {
    var n = BE
      , o = WE;
    if (jo(t)) {
        var a = "separator"in t ? t.separator : a;
        n = "length"in t ? ln(t.length) : n,
        o = "omission"in t ? la(t.omission) : o
    }
    e = rr(e);
    var i = e.length;
    if (ul(e)) {
        var s = ua(e);
        i = s.length
    }
    if (n >= i)
        return e;
    var l = n - dl(o);
    if (l < 1)
        return o;
    var u = s ? Mi(s, 0, l).join("") : e.slice(0, l);
    if (a === void 0)
        return u + o;
    if (s && (l += u.length - l),
    nd(a)) {
        if (e.slice(l).search(a)) {
            var d, c = u;
            for (a.global || (a = RegExp(a.source, rr(HE.exec(a)) + "g")),
            a.lastIndex = 0; d = a.exec(c); )
                var v = d.index;
            u = u.slice(0, v === void 0 ? l : v)
        }
    } else if (e.indexOf(la(a), l) != l) {
        var p = u.lastIndexOf(a);
        p > -1 && (u = u.slice(0, p))
    }
    return u + o
}
function ny(e) {
    return Sf(e, 1)
}
var VE = {
    "&amp;": "&",
    "&lt;": "<",
    "&gt;": ">",
    "&quot;": '"',
    "&#39;": "'"
}
  , GE = Pf(VE)
  , ry = /&(?:amp|lt|gt|quot|#39);/g
  , JE = RegExp(ry.source);
function oy(e) {
    return e = rr(e),
    e && JE.test(e) ? e.replace(ry, GE) : e
}
var KE = 1 / 0
  , YE = Ad && 1 / jf(new Ad([, -0]))[1] == KE ? function(e) {
    return new Ad(e)
}
: br
  , XE = 200;
function ji(e, t, n) {
    var o = -1
      , a = Hc
      , i = e.length
      , s = !0
      , l = []
      , u = l;
    if (n)
        s = !1,
        a = Df;
    else if (i >= XE) {
        var d = t ? null : YE(e);
        if (d)
            return jf(d);
        s = !1,
        a = ec,
        u = new bf
    } else
        u = t ? [] : l;
    e: for (; ++o < i; ) {
        var c = e[o]
          , v = t ? t(c) : c;
        if (c = n || c !== 0 ? c : 0,
        s && v === v) {
            for (var p = u.length; p--; )
                if (u[p] === v)
                    continue e;
            t && u.push(v),
            l.push(c)
        } else
            a(u, v, n) || (u !== l && u.push(v),
            l.push(c))
    }
    return l
}
var ay = yn(function(e) {
    return ji(vo(e, 1, Ur, !0))
})
  , iy = yn(function(e) {
    var t = gt(e);
    return Ur(t) && (t = void 0),
    ji(vo(e, 1, Ur, !0), pn(t))
})
  , sy = yn(function(e) {
    var t = gt(e);
    return t = typeof t == "function" ? t : void 0,
    ji(vo(e, 1, Ur, !0), void 0, t)
});
function ly(e) {
    return e && e.length ? ji(e) : []
}
function uy(e, t) {
    return e && e.length ? ji(e, pn(t)) : []
}
function cy(e, t) {
    return t = typeof t == "function" ? t : void 0,
    e && e.length ? ji(e, void 0, t) : []
}
function dy(e, t) {
    return e == null ? !0 : Qf(e, t)
}
var QE = Math.max;
function id(e) {
    if (!(e && e.length))
        return [];
    var t = 0;
    return e = is(e, function(n) {
        if (Ur(n))
            return t = QE(n.length, t),
            !0
    }),
    Pk(t, function(n) {
        return Kr(e, im(n))
    })
}
function ap(e, t) {
    if (!(e && e.length))
        return [];
    var n = id(e);
    return t == null ? n : Kr(n, function(o) {
        return Bo(t, void 0, o)
    })
}
function vy(e, t, n, o) {
    return fu(e, t, n(Ic(e, t)), o)
}
function fy(e, t, n) {
    return e == null ? e : vy(e, t, Oi(n))
}
function py(e, t, n, o) {
    return o = typeof o == "function" ? o : void 0,
    e == null ? e : vy(e, t, Oi(n), o)
}
var hy = cl(function(e, t, n) {
    return e + (n ? " " : "") + t.toUpperCase()
});
function gy(e) {
    return e == null ? [] : Hf(e, Jo(e))
}
var my = yn(function(e, t) {
    return Ur(e) ? uu(e, t) : []
});
function by(e, t) {
    return pu(Oi(t), e)
}
var xy = ei(function(e) {
    var t = e.length
      , n = t ? e[0] : 0
      , o = this.__wrapped__
      , a = function(i) {
        return Cf(i, e)
    };
    return t > 1 || this.__actions__.length || !(o instanceof En) || !ol(n) ? this.thru(a) : (o = o.slice(n, +n + (t ? 1 : 0)),
    o.__actions__.push({
        func: hu,
        args: [a],
        thisArg: void 0
    }),
    new Wo(o,this.__chain__).thru(function(i) {
        return t && !i.length && i.push(void 0),
        i
    }))
});
function jy() {
    return Nf(this)
}
function yy() {
    var e = this.__wrapped__;
    if (e instanceof En) {
        var t = e;
        return this.__actions__.length && (t = new En(this)),
        t = t.reverse(),
        t.__actions__.push({
            func: hu,
            args: [lc],
            thisArg: void 0
        }),
        new Wo(t,this.__chain__)
    }
    return this.thru(lc)
}
function ip(e, t, n) {
    var o = e.length;
    if (o < 2)
        return o ? ji(e[0]) : [];
    for (var a = -1, i = Array(o); ++a < o; )
        for (var s = e[a], l = -1; ++l < o; )
            l != a && (i[a] = uu(i[a] || s, e[l], t, n));
    return ji(vo(i, 1), t, n)
}
var wy = yn(function(e) {
    return ip(is(e, Ur))
})
  , ky = yn(function(e) {
    var t = gt(e);
    return Ur(t) && (t = void 0),
    ip(is(e, Ur), pn(t))
})
  , _y = yn(function(e) {
    var t = gt(e);
    return t = typeof t == "function" ? t : void 0,
    ip(is(e, Ur), void 0, t)
})
  , Sy = yn(id);
function Cy(e, t, n) {
    for (var o = -1, a = e.length, i = t.length, s = {}; ++o < a; ) {
        var l = o < i ? t[o] : void 0;
        n(s, e[o], l)
    }
    return s
}
function Oy(e, t) {
    return Cy(e || [], t || [], af)
}
function Ey(e, t) {
    return Cy(e || [], t || [], fu)
}
var Ay = yn(function(e) {
    var t = e.length
      , n = t > 1 ? e[t - 1] : void 0;
    return n = typeof n == "function" ? (e.pop(),
    n) : void 0,
    ap(e, n)
});
const ot = {
    chunk: cb,
    compact: pb,
    concat: hb,
    difference: Rb,
    differenceBy: Mb,
    differenceWith: Pb,
    drop: Tb,
    dropRight: Ib,
    dropRightWhile: Nb,
    dropWhile: Lb,
    fill: Hb,
    findIndex: Ff,
    findLastIndex: Bf,
    flatten: Of,
    flattenDeep: rx,
    flattenDepth: ox,
    fromPairs: px,
    head: qo,
    indexOf: wx,
    initial: rn,
    intersection: kx,
    intersectionBy: _x,
    intersectionWith: Sx,
    join: Yx,
    lastIndexOf: Zx,
    nth: x0,
    pull: $0,
    pullAll: np,
    pullAllBy: F0,
    pullAllWith: B0,
    pullAt: H0,
    remove: Z0,
    reverse: lc,
    slice: vj,
    sortedIndex: hj,
    sortedIndexBy: gj,
    sortedIndexOf: mj,
    sortedLastIndex: bj,
    sortedLastIndexBy: xj,
    sortedLastIndexOf: jj,
    sortedUniq: wj,
    sortedUniqBy: kj,
    tail: Tj,
    take: Ij,
    takeRight: Nj,
    takeRightWhile: Lj,
    takeWhile: Uj,
    union: ay,
    unionBy: iy,
    unionWith: sy,
    uniq: ly,
    uniqBy: uy,
    uniqWith: cy,
    unzip: id,
    unzipWith: ap,
    without: my,
    xor: wy,
    xorBy: ky,
    xorWith: _y,
    zip: Sy,
    zipObject: Oy,
    zipObjectDeep: Ey,
    zipWith: Ay
}
  , vr = {
    countBy: jb,
    every: Wb,
    filter: Gb,
    find: Kb,
    findLast: Qb,
    flatMap: ex,
    flatMapDeep: tx,
    flatMapDepth: nx,
    forEach: hv,
    forEachRight: Qu,
    groupBy: df,
    includes: yx,
    invokeMap: Px,
    keyBy: Qx,
    map: nl,
    orderBy: _0,
    partition: vf,
    reduce: Y0,
    reduceRight: X0,
    reject: Q0,
    sample: ij,
    sampleSize: sj,
    shuffle: cj,
    size: dj,
    some: pj,
    sortBy: ff
}
  , ZE = {
    now: sm
}
  , Dr = {
    after: Om,
    ary: Sf,
    before: Af,
    bind: lu,
    bindKey: Jc,
    curry: Yc,
    curryRight: Xc,
    debounce: Gi,
    defer: Eb,
    delay: Ab,
    flip: ax,
    memoize: lm,
    once: k0,
    overArgs: C0,
    partial: pu,
    partialRight: rd,
    rearg: J0,
    rest: nj,
    spread: Sj,
    throttle: Bj,
    unary: ny,
    wrap: by
}
  , Mt = {
    castArray: lb,
    clone: vb,
    cloneDeep: ql,
    cloneDeepWith: pf,
    cloneWith: fb,
    conformsTo: xb,
    eq: Ai,
    gt: mx,
    gte: bx,
    isArguments: Zu,
    isArrayBuffer: zx,
    isArrayLike: Xa,
    isArrayLikeObject: Ur,
    isBoolean: Tx,
    isBuffer: Lc,
    isDate: Ix,
    isElement: Nx,
    isEmpty: vn,
    isEqual: Wt,
    isEqualWith: Lx,
    isError: Gc,
    isFinite: Ux,
    isFunction: Ri,
    isInteger: Jf,
    isLength: mm,
    isMap: um,
    isMatch: Dx,
    isMatchWith: qx,
    isNaN: $x,
    isNative: Fx,
    isNil: Bx,
    isNull: Wx,
    isNumber: Kf,
    isObjectLike: fo,
    isPlainObject: ll,
    isRegExp: nd,
    isSafeInteger: Hx,
    isSet: cm,
    isString: cu,
    isSymbol: Ki,
    isTypedArray: Uc,
    isUndefined: Vx,
    isWeakMap: Gx,
    isWeakSet: Jx,
    lt: n0,
    lte: r0,
    toArray: Xf,
    toFinite: Fs,
    toLength: $f,
    toNumber: wa,
    toPlainObject: Lf,
    toSafeInteger: Gj,
    toString: rr
}
  , po = {
    add: Cm,
    ceil: ub,
    divide: zb,
    floor: ix,
    max: s0,
    maxBy: l0,
    mean: c0,
    meanBy: d0,
    min: h0,
    minBy: Os,
    multiply: m0,
    round: oj,
    subtract: Mj,
    sum: Pj,
    sumBy: zj
}
  , sp = {
    clamp: db,
    inRange: jx,
    random: V0
}
  , Kt = {
    assign: Nm,
    assignIn: uv,
    assignInWith: Bl,
    assignWith: Lm,
    at: Um,
    create: yb,
    defaults: _b,
    defaultsDeep: Cb,
    findKey: Xb,
    findLastKey: Zb,
    forIn: cx,
    forInRight: dx,
    forOwn: vx,
    forOwnRight: fx,
    functions: hx,
    functionsIn: gx,
    get: sf,
    has: xx,
    hasIn: cf,
    invert: Ox,
    invertBy: Ax,
    invoke: Mx,
    keysIn: Jo,
    mapKeys: o0,
    mapValues: hf,
    merge: v0,
    mergeWith: Uf,
    omit: ic,
    omitBy: w0,
    pick: D0,
    pickBy: Zf,
    result: rj,
    set: lj,
    setWith: uj,
    toPairs: gv,
    toPairsIn: mv,
    transform: Kj,
    unset: dy,
    update: fy,
    updateWith: py,
    values: ls,
    valuesIn: gy
}
  , Ra = {
    at: xy,
    chain: Nf,
    commit: vv,
    next: bv,
    plant: wv,
    reverse: yy,
    tap: Dj,
    toIterator: kv,
    value: Pl,
    wrapperChain: jy
}
  , Vn = {
    camelCase: sb,
    capitalize: Rf,
    deburr: zf,
    endsWith: Ub,
    escape: qf,
    escapeRegExp: Fb,
    kebabCase: Xx,
    lowerCase: e0,
    lowerFirst: t0,
    pad: I0,
    padEnd: N0,
    padStart: L0,
    parseInt: U0,
    repeat: ej,
    replace: tj,
    snakeCase: fj,
    split: _j,
    startCase: Cj,
    startsWith: Oj,
    template: Fj,
    templateSettings: uc,
    toLower: Hj,
    toUpper: Jj,
    trim: Qj,
    trimEnd: Zj,
    trimStart: ey,
    truncate: ty,
    unescape: oy,
    upperCase: hy,
    upperFirst: Kc,
    words: Tf
}
  , Qn = {
    attempt: Ef,
    bindAll: qm,
    cond: gb,
    conforms: bb,
    constant: lf,
    defaultTo: wb,
    flow: lx,
    flowRight: ux,
    iteratee: Kx,
    matches: a0,
    matchesProperty: i0,
    method: f0,
    methodOf: p0,
    noop: br,
    nthArg: j0,
    over: S0,
    overEvery: O0,
    overSome: E0,
    property: dm,
    propertyOf: q0,
    range: Nc,
    rangeRight: G0,
    stubArray: bm,
    stubFalse: xf,
    stubObject: Ej,
    stubString: Aj,
    stubTrue: Rj,
    times: gf,
    toPath: Vj,
    uniqueId: mi
};
function eA() {
    var e = new En(this.__wrapped__);
    return e.__actions__ = Po(this.__actions__),
    e.__dir__ = this.__dir__,
    e.__filtered__ = this.__filtered__,
    e.__iteratees__ = Po(this.__iteratees__),
    e.__takeCount__ = this.__takeCount__,
    e.__views__ = Po(this.__views__),
    e
}
function tA() {
    if (this.__filtered__) {
        var e = new En(this);
        e.__dir__ = -1,
        e.__filtered__ = !0
    } else
        e = this.clone(),
        e.__dir__ *= -1;
    return e
}
var nA = Math.max
  , rA = Math.min;
function oA(e, t, n) {
    for (var o = -1, a = n.length; ++o < a; ) {
        var i = n[o]
          , s = i.size;
        switch (i.type) {
        case "drop":
            e += s;
            break;
        case "dropRight":
            t -= s;
            break;
        case "take":
            t = rA(t, e + s);
            break;
        case "takeRight":
            e = nA(e, t - s);
            break
        }
    }
    return {
        start: e,
        end: t
    }
}
var aA = 1
  , iA = 2
  , sA = Math.min;
function lA() {
    var e = this.__wrapped__.value()
      , t = this.__dir__
      , n = dr(e)
      , o = t < 0
      , a = n ? e.length : 0
      , i = oA(0, a, this.__views__)
      , s = i.start
      , l = i.end
      , u = l - s
      , d = o ? l : s - 1
      , c = this.__iteratees__
      , v = c.length
      , p = 0
      , f = sA(u, this.__takeCount__);
    if (!n || !o && a == u && f == u)
        return Wj(e, this.__actions__);
    var m = [];
    e: for (; u-- && p < f; ) {
        d += t;
        for (var x = -1, y = e[d]; ++x < v; ) {
            var w = c[x]
              , S = w.iteratee
              , P = w.type
              , R = S(y);
            if (P == iA)
                y = R;
            else if (!R) {
                if (P == aA)
                    continue e;
                break e
            }
        }
        m[p++] = y
    }
    return m
}
/**
 * @license
 * Lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="es" -o ./`
 * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */
var uA = "4.17.21"
  , cA = 2
  , dA = 1
  , vA = 3
  , Ry = 4294967295
  , fA = Array.prototype
  , pA = Object.prototype
  , My = pA.hasOwnProperty
  , _h = tc ? tc.iterator : void 0
  , hA = Math.max
  , Sh = Math.min
  , lp = function(e) {
    return function(t, n, o) {
        if (o == null) {
            var a = jo(n)
              , i = a && Io(n)
              , s = i && i.length && ed(n, i);
            (s ? s.length : a) || (o = n,
            n = t,
            t = this)
        }
        return e(t, n, o)
    }
}(g0);
_.after = Dr.after;
_.ary = Dr.ary;
_.assign = Kt.assign;
_.assignIn = Kt.assignIn;
_.assignInWith = Kt.assignInWith;
_.assignWith = Kt.assignWith;
_.at = Kt.at;
_.before = Dr.before;
_.bind = Dr.bind;
_.bindAll = Qn.bindAll;
_.bindKey = Dr.bindKey;
_.castArray = Mt.castArray;
_.chain = Ra.chain;
_.chunk = ot.chunk;
_.compact = ot.compact;
_.concat = ot.concat;
_.cond = Qn.cond;
_.conforms = Qn.conforms;
_.constant = Qn.constant;
_.countBy = vr.countBy;
_.create = Kt.create;
_.curry = Dr.curry;
_.curryRight = Dr.curryRight;
_.debounce = Dr.debounce;
_.defaults = Kt.defaults;
_.defaultsDeep = Kt.defaultsDeep;
_.defer = Dr.defer;
_.delay = Dr.delay;
_.difference = ot.difference;
_.differenceBy = ot.differenceBy;
_.differenceWith = ot.differenceWith;
_.drop = ot.drop;
_.dropRight = ot.dropRight;
_.dropRightWhile = ot.dropRightWhile;
_.dropWhile = ot.dropWhile;
_.fill = ot.fill;
_.filter = vr.filter;
_.flatMap = vr.flatMap;
_.flatMapDeep = vr.flatMapDeep;
_.flatMapDepth = vr.flatMapDepth;
_.flatten = ot.flatten;
_.flattenDeep = ot.flattenDeep;
_.flattenDepth = ot.flattenDepth;
_.flip = Dr.flip;
_.flow = Qn.flow;
_.flowRight = Qn.flowRight;
_.fromPairs = ot.fromPairs;
_.functions = Kt.functions;
_.functionsIn = Kt.functionsIn;
_.groupBy = vr.groupBy;
_.initial = ot.initial;
_.intersection = ot.intersection;
_.intersectionBy = ot.intersectionBy;
_.intersectionWith = ot.intersectionWith;
_.invert = Kt.invert;
_.invertBy = Kt.invertBy;
_.invokeMap = vr.invokeMap;
_.iteratee = Qn.iteratee;
_.keyBy = vr.keyBy;
_.keys = Io;
_.keysIn = Kt.keysIn;
_.map = vr.map;
_.mapKeys = Kt.mapKeys;
_.mapValues = Kt.mapValues;
_.matches = Qn.matches;
_.matchesProperty = Qn.matchesProperty;
_.memoize = Dr.memoize;
_.merge = Kt.merge;
_.mergeWith = Kt.mergeWith;
_.method = Qn.method;
_.methodOf = Qn.methodOf;
_.mixin = lp;
_.negate = vu;
_.nthArg = Qn.nthArg;
_.omit = Kt.omit;
_.omitBy = Kt.omitBy;
_.once = Dr.once;
_.orderBy = vr.orderBy;
_.over = Qn.over;
_.overArgs = Dr.overArgs;
_.overEvery = Qn.overEvery;
_.overSome = Qn.overSome;
_.partial = Dr.partial;
_.partialRight = Dr.partialRight;
_.partition = vr.partition;
_.pick = Kt.pick;
_.pickBy = Kt.pickBy;
_.property = Qn.property;
_.propertyOf = Qn.propertyOf;
_.pull = ot.pull;
_.pullAll = ot.pullAll;
_.pullAllBy = ot.pullAllBy;
_.pullAllWith = ot.pullAllWith;
_.pullAt = ot.pullAt;
_.range = Qn.range;
_.rangeRight = Qn.rangeRight;
_.rearg = Dr.rearg;
_.reject = vr.reject;
_.remove = ot.remove;
_.rest = Dr.rest;
_.reverse = ot.reverse;
_.sampleSize = vr.sampleSize;
_.set = Kt.set;
_.setWith = Kt.setWith;
_.shuffle = vr.shuffle;
_.slice = ot.slice;
_.sortBy = vr.sortBy;
_.sortedUniq = ot.sortedUniq;
_.sortedUniqBy = ot.sortedUniqBy;
_.split = Vn.split;
_.spread = Dr.spread;
_.tail = ot.tail;
_.take = ot.take;
_.takeRight = ot.takeRight;
_.takeRightWhile = ot.takeRightWhile;
_.takeWhile = ot.takeWhile;
_.tap = Ra.tap;
_.throttle = Dr.throttle;
_.thru = hu;
_.toArray = Mt.toArray;
_.toPairs = Kt.toPairs;
_.toPairsIn = Kt.toPairsIn;
_.toPath = Qn.toPath;
_.toPlainObject = Mt.toPlainObject;
_.transform = Kt.transform;
_.unary = Dr.unary;
_.union = ot.union;
_.unionBy = ot.unionBy;
_.unionWith = ot.unionWith;
_.uniq = ot.uniq;
_.uniqBy = ot.uniqBy;
_.uniqWith = ot.uniqWith;
_.unset = Kt.unset;
_.unzip = ot.unzip;
_.unzipWith = ot.unzipWith;
_.update = Kt.update;
_.updateWith = Kt.updateWith;
_.values = Kt.values;
_.valuesIn = Kt.valuesIn;
_.without = ot.without;
_.words = Vn.words;
_.wrap = Dr.wrap;
_.xor = ot.xor;
_.xorBy = ot.xorBy;
_.xorWith = ot.xorWith;
_.zip = ot.zip;
_.zipObject = ot.zipObject;
_.zipObjectDeep = ot.zipObjectDeep;
_.zipWith = ot.zipWith;
_.entries = Kt.toPairs;
_.entriesIn = Kt.toPairsIn;
_.extend = Kt.assignIn;
_.extendWith = Kt.assignInWith;
lp(_, _);
_.add = po.add;
_.attempt = Qn.attempt;
_.camelCase = Vn.camelCase;
_.capitalize = Vn.capitalize;
_.ceil = po.ceil;
_.clamp = sp.clamp;
_.clone = Mt.clone;
_.cloneDeep = Mt.cloneDeep;
_.cloneDeepWith = Mt.cloneDeepWith;
_.cloneWith = Mt.cloneWith;
_.conformsTo = Mt.conformsTo;
_.deburr = Vn.deburr;
_.defaultTo = Qn.defaultTo;
_.divide = po.divide;
_.endsWith = Vn.endsWith;
_.eq = Mt.eq;
_.escape = Vn.escape;
_.escapeRegExp = Vn.escapeRegExp;
_.every = vr.every;
_.find = vr.find;
_.findIndex = ot.findIndex;
_.findKey = Kt.findKey;
_.findLast = vr.findLast;
_.findLastIndex = ot.findLastIndex;
_.findLastKey = Kt.findLastKey;
_.floor = po.floor;
_.forEach = vr.forEach;
_.forEachRight = vr.forEachRight;
_.forIn = Kt.forIn;
_.forInRight = Kt.forInRight;
_.forOwn = Kt.forOwn;
_.forOwnRight = Kt.forOwnRight;
_.get = Kt.get;
_.gt = Mt.gt;
_.gte = Mt.gte;
_.has = Kt.has;
_.hasIn = Kt.hasIn;
_.head = ot.head;
_.identity = Aa;
_.includes = vr.includes;
_.indexOf = ot.indexOf;
_.inRange = sp.inRange;
_.invoke = Kt.invoke;
_.isArguments = Mt.isArguments;
_.isArray = dr;
_.isArrayBuffer = Mt.isArrayBuffer;
_.isArrayLike = Mt.isArrayLike;
_.isArrayLikeObject = Mt.isArrayLikeObject;
_.isBoolean = Mt.isBoolean;
_.isBuffer = Mt.isBuffer;
_.isDate = Mt.isDate;
_.isElement = Mt.isElement;
_.isEmpty = Mt.isEmpty;
_.isEqual = Mt.isEqual;
_.isEqualWith = Mt.isEqualWith;
_.isError = Mt.isError;
_.isFinite = Mt.isFinite;
_.isFunction = Mt.isFunction;
_.isInteger = Mt.isInteger;
_.isLength = Mt.isLength;
_.isMap = Mt.isMap;
_.isMatch = Mt.isMatch;
_.isMatchWith = Mt.isMatchWith;
_.isNaN = Mt.isNaN;
_.isNative = Mt.isNative;
_.isNil = Mt.isNil;
_.isNull = Mt.isNull;
_.isNumber = Mt.isNumber;
_.isObject = jo;
_.isObjectLike = Mt.isObjectLike;
_.isPlainObject = Mt.isPlainObject;
_.isRegExp = Mt.isRegExp;
_.isSafeInteger = Mt.isSafeInteger;
_.isSet = Mt.isSet;
_.isString = Mt.isString;
_.isSymbol = Mt.isSymbol;
_.isTypedArray = Mt.isTypedArray;
_.isUndefined = Mt.isUndefined;
_.isWeakMap = Mt.isWeakMap;
_.isWeakSet = Mt.isWeakSet;
_.join = ot.join;
_.kebabCase = Vn.kebabCase;
_.last = gt;
_.lastIndexOf = ot.lastIndexOf;
_.lowerCase = Vn.lowerCase;
_.lowerFirst = Vn.lowerFirst;
_.lt = Mt.lt;
_.lte = Mt.lte;
_.max = po.max;
_.maxBy = po.maxBy;
_.mean = po.mean;
_.meanBy = po.meanBy;
_.min = po.min;
_.minBy = po.minBy;
_.stubArray = Qn.stubArray;
_.stubFalse = Qn.stubFalse;
_.stubObject = Qn.stubObject;
_.stubString = Qn.stubString;
_.stubTrue = Qn.stubTrue;
_.multiply = po.multiply;
_.nth = ot.nth;
_.noop = Qn.noop;
_.now = ZE.now;
_.pad = Vn.pad;
_.padEnd = Vn.padEnd;
_.padStart = Vn.padStart;
_.parseInt = Vn.parseInt;
_.random = sp.random;
_.reduce = vr.reduce;
_.reduceRight = vr.reduceRight;
_.repeat = Vn.repeat;
_.replace = Vn.replace;
_.result = Kt.result;
_.round = po.round;
_.sample = vr.sample;
_.size = vr.size;
_.snakeCase = Vn.snakeCase;
_.some = vr.some;
_.sortedIndex = ot.sortedIndex;
_.sortedIndexBy = ot.sortedIndexBy;
_.sortedIndexOf = ot.sortedIndexOf;
_.sortedLastIndex = ot.sortedLastIndex;
_.sortedLastIndexBy = ot.sortedLastIndexBy;
_.sortedLastIndexOf = ot.sortedLastIndexOf;
_.startCase = Vn.startCase;
_.startsWith = Vn.startsWith;
_.subtract = po.subtract;
_.sum = po.sum;
_.sumBy = po.sumBy;
_.template = Vn.template;
_.times = Qn.times;
_.toFinite = Mt.toFinite;
_.toInteger = ln;
_.toLength = Mt.toLength;
_.toLower = Vn.toLower;
_.toNumber = Mt.toNumber;
_.toSafeInteger = Mt.toSafeInteger;
_.toString = Mt.toString;
_.toUpper = Vn.toUpper;
_.trim = Vn.trim;
_.trimEnd = Vn.trimEnd;
_.trimStart = Vn.trimStart;
_.truncate = Vn.truncate;
_.unescape = Vn.unescape;
_.uniqueId = Qn.uniqueId;
_.upperCase = Vn.upperCase;
_.upperFirst = Vn.upperFirst;
_.each = vr.forEach;
_.eachRight = vr.forEachRight;
_.first = ot.head;
lp(_, function() {
    var e = {};
    return Ei(_, function(t, n) {
        My.call(_.prototype, n) || (e[n] = t)
    }),
    e
}(), {
    chain: !1
});
_.VERSION = uA;
(_.templateSettings = Vn.templateSettings).imports._ = _;
va(["bind", "bindKey", "curry", "curryRight", "partial", "partialRight"], function(e) {
    _[e].placeholder = _
});
va(["drop", "take"], function(e, t) {
    En.prototype[e] = function(n) {
        n = n === void 0 ? 1 : hA(ln(n), 0);
        var o = this.__filtered__ && !t ? new En(this) : this.clone();
        return o.__filtered__ ? o.__takeCount__ = Sh(n, o.__takeCount__) : o.__views__.push({
            size: Sh(n, Ry),
            type: e + (o.__dir__ < 0 ? "Right" : "")
        }),
        o
    }
    ,
    En.prototype[e + "Right"] = function(n) {
        return this.reverse()[e](n).reverse()
    }
});
va(["filter", "map", "takeWhile"], function(e, t) {
    var n = t + 1
      , o = n == dA || n == vA;
    En.prototype[e] = function(a) {
        var i = this.clone();
        return i.__iteratees__.push({
            iteratee: pn(a),
            type: n
        }),
        i.__filtered__ = i.__filtered__ || o,
        i
    }
});
va(["head", "last"], function(e, t) {
    var n = "take" + (t ? "Right" : "");
    En.prototype[e] = function() {
        return this[n](1).value()[0]
    }
});
va(["initial", "tail"], function(e, t) {
    var n = "drop" + (t ? "" : "Right");
    En.prototype[e] = function() {
        return this.__filtered__ ? new En(this) : this[n](1)
    }
});
En.prototype.compact = function() {
    return this.filter(Aa)
}
;
En.prototype.find = function(e) {
    return this.filter(e).head()
}
;
En.prototype.findLast = function(e) {
    return this.reverse().find(e)
}
;
En.prototype.invokeMap = yn(function(e, t) {
    return typeof e == "function" ? new En(this) : this.map(function(n) {
        return du(n, e, t)
    })
});
En.prototype.reject = function(e) {
    return this.filter(vu(pn(e)))
}
;
En.prototype.slice = function(e, t) {
    e = ln(e);
    var n = this;
    return n.__filtered__ && (e > 0 || t < 0) ? new En(n) : (e < 0 ? n = n.takeRight(-e) : e && (n = n.drop(e)),
    t !== void 0 && (t = ln(t),
    n = t < 0 ? n.dropRight(-t) : n.take(t - e)),
    n)
}
;
En.prototype.takeRightWhile = function(e) {
    return this.reverse().takeWhile(e).reverse()
}
;
En.prototype.toArray = function() {
    return this.take(Ry)
}
;
Ei(En.prototype, function(e, t) {
    var n = /^(?:filter|find|map|reject)|While$/.test(t)
      , o = /^(?:head|last)$/.test(t)
      , a = _[o ? "take" + (t == "last" ? "Right" : "") : t]
      , i = o || /^find/.test(t);
    a && (_.prototype[t] = function() {
        var s = this.__wrapped__
          , l = o ? [1] : arguments
          , u = s instanceof En
          , d = l[0]
          , c = u || dr(s)
          , v = function(w) {
            var S = a.apply(_, su([w], l));
            return o && p ? S[0] : S
        };
        c && n && typeof d == "function" && d.length != 1 && (u = c = !1);
        var p = this.__chain__
          , f = !!this.__actions__.length
          , m = i && !p
          , x = u && !f;
        if (!i && c) {
            s = x ? s : new En(this);
            var y = e.apply(s, l);
            return y.__actions__.push({
                func: hu,
                args: [v],
                thisArg: void 0
            }),
            new Wo(y,p)
        }
        return m && x ? e.apply(this, l) : (y = this.thru(v),
        m ? o ? y.value()[0] : y.value() : y)
    }
    )
});
va(["pop", "push", "shift", "sort", "splice", "unshift"], function(e) {
    var t = fA[e]
      , n = /^(?:push|sort|unshift)$/.test(e) ? "tap" : "thru"
      , o = /^(?:pop|shift)$/.test(e);
    _.prototype[e] = function() {
        var a = arguments;
        if (o && !this.__chain__) {
            var i = this.value();
            return t.apply(dr(i) ? i : [], a)
        }
        return this[n](function(s) {
            return t.apply(dr(s) ? s : [], a)
        })
    }
});
Ei(En.prototype, function(e, t) {
    var n = _[t];
    if (n) {
        var o = n.name + "";
        My.call(Ls, o) || (Ls[o] = []),
        Ls[o].push({
            name: t,
            func: n
        })
    }
});
Ls[Vc(void 0, cA).name] = [{
    name: "wrapper",
    func: void 0
}];
En.prototype.clone = eA;
En.prototype.reverse = tA;
En.prototype.value = lA;
_.prototype.at = Ra.at;
_.prototype.chain = Ra.wrapperChain;
_.prototype.commit = Ra.commit;
_.prototype.next = Ra.next;
_.prototype.plant = Ra.plant;
_.prototype.reverse = Ra.reverse;
_.prototype.toJSON = _.prototype.valueOf = _.prototype.value = Ra.value;
_.prototype.first = _.prototype.head;
_h && (_.prototype[_h] = Ra.toIterator);
/**
 * @license
 * Lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="es" -o ./`
 * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */
const Py = Object.freeze(Object.defineProperty({
    __proto__: null,
    add: Cm,
    after: Om,
    ary: Sf,
    assign: Nm,
    assignIn: uv,
    assignInWith: Bl,
    assignWith: Lm,
    at: Um,
    attempt: Ef,
    before: Af,
    bind: lu,
    bindAll: qm,
    bindKey: Jc,
    camelCase: sb,
    capitalize: Rf,
    castArray: lb,
    ceil: ub,
    chain: Nf,
    chunk: cb,
    clamp: db,
    clone: vb,
    cloneDeep: ql,
    cloneDeepWith: pf,
    cloneWith: fb,
    commit: vv,
    compact: pb,
    concat: hb,
    cond: gb,
    conforms: bb,
    conformsTo: xb,
    constant: lf,
    countBy: jb,
    create: yb,
    curry: Yc,
    curryRight: Xc,
    debounce: Gi,
    deburr: zf,
    default: _,
    defaultTo: wb,
    defaults: _b,
    defaultsDeep: Cb,
    defer: Eb,
    delay: Ab,
    difference: Rb,
    differenceBy: Mb,
    differenceWith: Pb,
    divide: zb,
    drop: Tb,
    dropRight: Ib,
    dropRightWhile: Nb,
    dropWhile: Lb,
    each: hv,
    eachRight: Qu,
    endsWith: Ub,
    entries: gv,
    entriesIn: mv,
    eq: Ai,
    escape: qf,
    escapeRegExp: Fb,
    every: Wb,
    extend: uv,
    extendWith: Bl,
    fill: Hb,
    filter: Gb,
    find: Kb,
    findIndex: Ff,
    findKey: Xb,
    findLast: Qb,
    findLastIndex: Bf,
    findLastKey: Zb,
    first: qo,
    flatMap: ex,
    flatMapDeep: tx,
    flatMapDepth: nx,
    flatten: Of,
    flattenDeep: rx,
    flattenDepth: ox,
    flip: ax,
    floor: ix,
    flow: lx,
    flowRight: ux,
    forEach: hv,
    forEachRight: Qu,
    forIn: cx,
    forInRight: dx,
    forOwn: vx,
    forOwnRight: fx,
    fromPairs: px,
    functions: hx,
    functionsIn: gx,
    get: sf,
    groupBy: df,
    gt: mx,
    gte: bx,
    has: xx,
    hasIn: cf,
    head: qo,
    identity: Aa,
    inRange: jx,
    includes: yx,
    indexOf: wx,
    initial: rn,
    intersection: kx,
    intersectionBy: _x,
    intersectionWith: Sx,
    invert: Ox,
    invertBy: Ax,
    invoke: Mx,
    invokeMap: Px,
    isArguments: Zu,
    isArray: dr,
    isArrayBuffer: zx,
    isArrayLike: Xa,
    isArrayLikeObject: Ur,
    isBoolean: Tx,
    isBuffer: Lc,
    isDate: Ix,
    isElement: Nx,
    isEmpty: vn,
    isEqual: Wt,
    isEqualWith: Lx,
    isError: Gc,
    isFinite: Ux,
    isFunction: Ri,
    isInteger: Jf,
    isLength: mm,
    isMap: um,
    isMatch: Dx,
    isMatchWith: qx,
    isNaN: $x,
    isNative: Fx,
    isNil: Bx,
    isNull: Wx,
    isNumber: Kf,
    isObject: jo,
    isObjectLike: fo,
    isPlainObject: ll,
    isRegExp: nd,
    isSafeInteger: Hx,
    isSet: cm,
    isString: cu,
    isSymbol: Ki,
    isTypedArray: Uc,
    isUndefined: Vx,
    isWeakMap: Gx,
    isWeakSet: Jx,
    iteratee: Kx,
    join: Yx,
    kebabCase: Xx,
    keyBy: Qx,
    keys: Io,
    keysIn: Jo,
    last: gt,
    lastIndexOf: Zx,
    lodash: _,
    lowerCase: e0,
    lowerFirst: t0,
    lt: n0,
    lte: r0,
    map: nl,
    mapKeys: o0,
    mapValues: hf,
    matches: a0,
    matchesProperty: i0,
    max: s0,
    maxBy: l0,
    mean: c0,
    meanBy: d0,
    memoize: lm,
    merge: v0,
    mergeWith: Uf,
    method: f0,
    methodOf: p0,
    min: h0,
    minBy: Os,
    mixin: g0,
    multiply: m0,
    negate: vu,
    next: bv,
    noop: br,
    now: sm,
    nth: x0,
    nthArg: j0,
    omit: ic,
    omitBy: w0,
    once: k0,
    orderBy: _0,
    over: S0,
    overArgs: C0,
    overEvery: O0,
    overSome: E0,
    pad: I0,
    padEnd: N0,
    padStart: L0,
    parseInt: U0,
    partial: pu,
    partialRight: rd,
    partition: vf,
    pick: D0,
    pickBy: Zf,
    plant: wv,
    property: dm,
    propertyOf: q0,
    pull: $0,
    pullAll: np,
    pullAllBy: F0,
    pullAllWith: B0,
    pullAt: H0,
    random: V0,
    range: Nc,
    rangeRight: G0,
    rearg: J0,
    reduce: Y0,
    reduceRight: X0,
    reject: Q0,
    remove: Z0,
    repeat: ej,
    replace: tj,
    rest: nj,
    result: rj,
    reverse: lc,
    round: oj,
    sample: ij,
    sampleSize: sj,
    set: lj,
    setWith: uj,
    shuffle: cj,
    size: dj,
    slice: vj,
    snakeCase: fj,
    some: pj,
    sortBy: ff,
    sortedIndex: hj,
    sortedIndexBy: gj,
    sortedIndexOf: mj,
    sortedLastIndex: bj,
    sortedLastIndexBy: xj,
    sortedLastIndexOf: jj,
    sortedUniq: wj,
    sortedUniqBy: kj,
    split: _j,
    spread: Sj,
    startCase: Cj,
    startsWith: Oj,
    stubArray: bm,
    stubFalse: xf,
    stubObject: Ej,
    stubString: Aj,
    stubTrue: Rj,
    subtract: Mj,
    sum: Pj,
    sumBy: zj,
    tail: Tj,
    take: Ij,
    takeRight: Nj,
    takeRightWhile: Lj,
    takeWhile: Uj,
    tap: Dj,
    template: Fj,
    templateSettings: uc,
    throttle: Bj,
    thru: hu,
    times: gf,
    toArray: Xf,
    toFinite: Fs,
    toInteger: ln,
    toIterator: kv,
    toJSON: Pl,
    toLength: $f,
    toLower: Hj,
    toNumber: wa,
    toPairs: gv,
    toPairsIn: mv,
    toPath: Vj,
    toPlainObject: Lf,
    toSafeInteger: Gj,
    toString: rr,
    toUpper: Jj,
    transform: Kj,
    trim: Qj,
    trimEnd: Zj,
    trimStart: ey,
    truncate: ty,
    unary: ny,
    unescape: oy,
    union: ay,
    unionBy: iy,
    unionWith: sy,
    uniq: ly,
    uniqBy: uy,
    uniqWith: cy,
    uniqueId: mi,
    unset: dy,
    unzip: id,
    unzipWith: ap,
    update: fy,
    updateWith: py,
    upperCase: hy,
    upperFirst: Kc,
    value: Pl,
    valueOf: Pl,
    values: ls,
    valuesIn: gy,
    without: my,
    words: Tf,
    wrap: by,
    wrapperAt: xy,
    wrapperChain: jy,
    wrapperCommit: vv,
    wrapperLodash: _,
    wrapperNext: bv,
    wrapperPlant: wv,
    wrapperReverse: yy,
    wrapperToIterator: kv,
    wrapperValue: Pl,
    xor: wy,
    xorBy: ky,
    xorWith: _y,
    zip: Sy,
    zipObject: Oy,
    zipObjectDeep: Ey,
    zipWith: Ay
}, Symbol.toStringTag, {
    value: "Module"
}));
var zd = {}, Ch;
function gA() {
    return Ch || (Ch = 1,
    function(e) {
        (function(t) {
            function n(j) {
                return j !== null ? Object.prototype.toString.call(j) === "[object Array]" : !1
            }
            function o(j) {
                return j !== null ? Object.prototype.toString.call(j) === "[object Object]" : !1
            }
            function a(j, C) {
                if (j === C)
                    return !0;
                var A = Object.prototype.toString.call(j);
                if (A !== Object.prototype.toString.call(C))
                    return !1;
                if (n(j) === !0) {
                    if (j.length !== C.length)
                        return !1;
                    for (var $ = 0; $ < j.length; $++)
                        if (a(j[$], C[$]) === !1)
                            return !1;
                    return !0
                }
                if (o(j) === !0) {
                    var re = {};
                    for (var Ce in j)
                        if (hasOwnProperty.call(j, Ce)) {
                            if (a(j[Ce], C[Ce]) === !1)
                                return !1;
                            re[Ce] = !0
                        }
                    for (var ze in C)
                        if (hasOwnProperty.call(C, ze) && re[ze] !== !0)
                            return !1;
                    return !0
                }
                return !1
            }
            function i(j) {
                if (j === "" || j === !1 || j === null)
                    return !0;
                if (n(j) && j.length === 0)
                    return !0;
                if (o(j)) {
                    for (var C in j)
                        if (j.hasOwnProperty(C))
                            return !1;
                    return !0
                } else
                    return !1
            }
            function s(j) {
                for (var C = Object.keys(j), A = [], $ = 0; $ < C.length; $++)
                    A.push(j[C[$]]);
                return A
            }
            var l;
            typeof String.prototype.trimLeft == "function" ? l = function(j) {
                return j.trimLeft()
            }
            : l = function(j) {
                return j.match(/^\s*(.*)/)[1]
            }
            ;
            var u = 0
              , d = 1
              , c = 2
              , v = 3
              , p = 4
              , f = 5
              , m = 6
              , x = 7
              , y = 8
              , w = 9
              , S = {
                0: "number",
                1: "any",
                2: "string",
                3: "array",
                4: "object",
                5: "boolean",
                6: "expression",
                7: "null",
                8: "Array<number>",
                9: "Array<string>"
            }
              , P = "EOF"
              , R = "UnquotedIdentifier"
              , k = "QuotedIdentifier"
              , I = "Rbracket"
              , H = "Rparen"
              , Y = "Comma"
              , M = "Colon"
              , Z = "Rbrace"
              , ae = "Number"
              , ee = "Current"
              , se = "Expref"
              , _e = "Pipe"
              , fe = "Or"
              , Oe = "And"
              , De = "EQ"
              , Ne = "GT"
              , je = "LT"
              , Ae = "GTE"
              , Pe = "LTE"
              , Ve = "NE"
              , ge = "Flatten"
              , de = "Star"
              , ye = "Filter"
              , ct = "Dot"
              , qt = "Not"
              , X = "Lbrace"
              , D = "Lbracket"
              , le = "Lparen"
              , F = "Literal"
              , we = {
                ".": ct,
                "*": de,
                ",": Y,
                ":": M,
                "{": X,
                "}": Z,
                "]": I,
                "(": le,
                ")": H,
                "@": ee
            }
              , ne = {
                "<": !0,
                ">": !0,
                "=": !0,
                "!": !0
            }
              , Be = {
                " ": !0,
                "	": !0,
                "\n": !0
            };
            function J(j) {
                return j >= "a" && j <= "z" || j >= "A" && j <= "Z" || j === "_"
            }
            function U(j) {
                return j >= "0" && j <= "9" || j === "-"
            }
            function _t(j) {
                return j >= "a" && j <= "z" || j >= "A" && j <= "Z" || j >= "0" && j <= "9" || j === "_"
            }
            function nt() {}
            nt.prototype = {
                tokenize: function(j) {
                    var C = [];
                    this._current = 0;
                    for (var A, $, re; this._current < j.length; )
                        if (J(j[this._current]))
                            A = this._current,
                            $ = this._consumeUnquotedIdentifier(j),
                            C.push({
                                type: R,
                                value: $,
                                start: A
                            });
                        else if (we[j[this._current]] !== void 0)
                            C.push({
                                type: we[j[this._current]],
                                value: j[this._current],
                                start: this._current
                            }),
                            this._current++;
                        else if (U(j[this._current]))
                            re = this._consumeNumber(j),
                            C.push(re);
                        else if (j[this._current] === "[")
                            re = this._consumeLBracket(j),
                            C.push(re);
                        else if (j[this._current] === '"')
                            A = this._current,
                            $ = this._consumeQuotedIdentifier(j),
                            C.push({
                                type: k,
                                value: $,
                                start: A
                            });
                        else if (j[this._current] === "'")
                            A = this._current,
                            $ = this._consumeRawStringLiteral(j),
                            C.push({
                                type: F,
                                value: $,
                                start: A
                            });
                        else if (j[this._current] === "`") {
                            A = this._current;
                            var Ce = this._consumeLiteral(j);
                            C.push({
                                type: F,
                                value: Ce,
                                start: A
                            })
                        } else if (ne[j[this._current]] !== void 0)
                            C.push(this._consumeOperator(j));
                        else if (Be[j[this._current]] !== void 0)
                            this._current++;
                        else if (j[this._current] === "&")
                            A = this._current,
                            this._current++,
                            j[this._current] === "&" ? (this._current++,
                            C.push({
                                type: Oe,
                                value: "&&",
                                start: A
                            })) : C.push({
                                type: se,
                                value: "&",
                                start: A
                            });
                        else if (j[this._current] === "|")
                            A = this._current,
                            this._current++,
                            j[this._current] === "|" ? (this._current++,
                            C.push({
                                type: fe,
                                value: "||",
                                start: A
                            })) : C.push({
                                type: _e,
                                value: "|",
                                start: A
                            });
                        else {
                            var ze = new Error("Unknown character:" + j[this._current]);
                            throw ze.name = "LexerError",
                            ze
                        }
                    return C
                },
                _consumeUnquotedIdentifier: function(j) {
                    var C = this._current;
                    for (this._current++; this._current < j.length && _t(j[this._current]); )
                        this._current++;
                    return j.slice(C, this._current)
                },
                _consumeQuotedIdentifier: function(j) {
                    var C = this._current;
                    this._current++;
                    for (var A = j.length; j[this._current] !== '"' && this._current < A; ) {
                        var $ = this._current;
                        j[$] === "\\" && (j[$ + 1] === "\\" || j[$ + 1] === '"') ? $ += 2 : $++,
                        this._current = $
                    }
                    return this._current++,
                    JSON.parse(j.slice(C, this._current))
                },
                _consumeRawStringLiteral: function(j) {
                    var C = this._current;
                    this._current++;
                    for (var A = j.length; j[this._current] !== "'" && this._current < A; ) {
                        var $ = this._current;
                        j[$] === "\\" && (j[$ + 1] === "\\" || j[$ + 1] === "'") ? $ += 2 : $++,
                        this._current = $
                    }
                    this._current++;
                    var re = j.slice(C + 1, this._current - 1);
                    return re.replace("\\'", "'")
                },
                _consumeNumber: function(j) {
                    var C = this._current;
                    this._current++;
                    for (var A = j.length; U(j[this._current]) && this._current < A; )
                        this._current++;
                    var $ = parseInt(j.slice(C, this._current));
                    return {
                        type: ae,
                        value: $,
                        start: C
                    }
                },
                _consumeLBracket: function(j) {
                    var C = this._current;
                    return this._current++,
                    j[this._current] === "?" ? (this._current++,
                    {
                        type: ye,
                        value: "[?",
                        start: C
                    }) : j[this._current] === "]" ? (this._current++,
                    {
                        type: ge,
                        value: "[]",
                        start: C
                    }) : {
                        type: D,
                        value: "[",
                        start: C
                    }
                },
                _consumeOperator: function(j) {
                    var C = this._current
                      , A = j[C];
                    if (this._current++,
                    A === "!")
                        return j[this._current] === "=" ? (this._current++,
                        {
                            type: Ve,
                            value: "!=",
                            start: C
                        }) : {
                            type: qt,
                            value: "!",
                            start: C
                        };
                    if (A === "<")
                        return j[this._current] === "=" ? (this._current++,
                        {
                            type: Pe,
                            value: "<=",
                            start: C
                        }) : {
                            type: je,
                            value: "<",
                            start: C
                        };
                    if (A === ">")
                        return j[this._current] === "=" ? (this._current++,
                        {
                            type: Ae,
                            value: ">=",
                            start: C
                        }) : {
                            type: Ne,
                            value: ">",
                            start: C
                        };
                    if (A === "=" && j[this._current] === "=")
                        return this._current++,
                        {
                            type: De,
                            value: "==",
                            start: C
                        }
                },
                _consumeLiteral: function(j) {
                    this._current++;
                    for (var C = this._current, A = j.length, $; j[this._current] !== "`" && this._current < A; ) {
                        var re = this._current;
                        j[re] === "\\" && (j[re + 1] === "\\" || j[re + 1] === "`") ? re += 2 : re++,
                        this._current = re
                    }
                    var Ce = l(j.slice(C, this._current));
                    return Ce = Ce.replace("\\`", "`"),
                    this._looksLikeJSON(Ce) ? $ = JSON.parse(Ce) : $ = JSON.parse('"' + Ce + '"'),
                    this._current++,
                    $
                },
                _looksLikeJSON: function(j) {
                    var C = '[{"'
                      , A = ["true", "false", "null"]
                      , $ = "-0123456789";
                    if (j === "")
                        return !1;
                    if (C.indexOf(j[0]) >= 0)
                        return !0;
                    if (A.indexOf(j) >= 0)
                        return !0;
                    if ($.indexOf(j[0]) >= 0)
                        try {
                            return JSON.parse(j),
                            !0
                        } catch {
                            return !1
                        }
                    else
                        return !1
                }
            };
            var Se = {};
            Se[P] = 0,
            Se[R] = 0,
            Se[k] = 0,
            Se[I] = 0,
            Se[H] = 0,
            Se[Y] = 0,
            Se[Z] = 0,
            Se[ae] = 0,
            Se[ee] = 0,
            Se[se] = 0,
            Se[_e] = 1,
            Se[fe] = 2,
            Se[Oe] = 3,
            Se[De] = 5,
            Se[Ne] = 5,
            Se[je] = 5,
            Se[Ae] = 5,
            Se[Pe] = 5,
            Se[Ve] = 5,
            Se[ge] = 9,
            Se[de] = 20,
            Se[ye] = 21,
            Se[ct] = 40,
            Se[qt] = 45,
            Se[X] = 50,
            Se[D] = 55,
            Se[le] = 60;
            function mt() {}
            mt.prototype = {
                parse: function(j) {
                    this._loadTokens(j),
                    this.index = 0;
                    var C = this.expression(0);
                    if (this._lookahead(0) !== P) {
                        var A = this._lookaheadToken(0)
                          , $ = new Error("Unexpected token type: " + A.type + ", value: " + A.value);
                        throw $.name = "ParserError",
                        $
                    }
                    return C
                },
                _loadTokens: function(j) {
                    var C = new nt
                      , A = C.tokenize(j);
                    A.push({
                        type: P,
                        value: "",
                        start: j.length
                    }),
                    this.tokens = A
                },
                expression: function(j) {
                    var C = this._lookaheadToken(0);
                    this._advance();
                    for (var A = this.nud(C), $ = this._lookahead(0); j < Se[$]; )
                        this._advance(),
                        A = this.led($, A),
                        $ = this._lookahead(0);
                    return A
                },
                _lookahead: function(j) {
                    return this.tokens[this.index + j].type
                },
                _lookaheadToken: function(j) {
                    return this.tokens[this.index + j]
                },
                _advance: function() {
                    this.index++
                },
                nud: function(j) {
                    var C, A, $;
                    switch (j.type) {
                    case F:
                        return {
                            type: "Literal",
                            value: j.value
                        };
                    case R:
                        return {
                            type: "Field",
                            name: j.value
                        };
                    case k:
                        var re = {
                            type: "Field",
                            name: j.value
                        };
                        if (this._lookahead(0) === le)
                            throw new Error("Quoted identifier not allowed for function names.");
                        return re;
                    case qt:
                        return A = this.expression(Se.Not),
                        {
                            type: "NotExpression",
                            children: [A]
                        };
                    case de:
                        return C = {
                            type: "Identity"
                        },
                        A = null,
                        this._lookahead(0) === I ? A = {
                            type: "Identity"
                        } : A = this._parseProjectionRHS(Se.Star),
                        {
                            type: "ValueProjection",
                            children: [C, A]
                        };
                    case ye:
                        return this.led(j.type, {
                            type: "Identity"
                        });
                    case X:
                        return this._parseMultiselectHash();
                    case ge:
                        return C = {
                            type: ge,
                            children: [{
                                type: "Identity"
                            }]
                        },
                        A = this._parseProjectionRHS(Se.Flatten),
                        {
                            type: "Projection",
                            children: [C, A]
                        };
                    case D:
                        return this._lookahead(0) === ae || this._lookahead(0) === M ? (A = this._parseIndexExpression(),
                        this._projectIfSlice({
                            type: "Identity"
                        }, A)) : this._lookahead(0) === de && this._lookahead(1) === I ? (this._advance(),
                        this._advance(),
                        A = this._parseProjectionRHS(Se.Star),
                        {
                            type: "Projection",
                            children: [{
                                type: "Identity"
                            }, A]
                        }) : this._parseMultiselectList();
                    case ee:
                        return {
                            type: ee
                        };
                    case se:
                        return $ = this.expression(Se.Expref),
                        {
                            type: "ExpressionReference",
                            children: [$]
                        };
                    case le:
                        for (var Ce = []; this._lookahead(0) !== H; )
                            this._lookahead(0) === ee ? ($ = {
                                type: ee
                            },
                            this._advance()) : $ = this.expression(0),
                            Ce.push($);
                        return this._match(H),
                        Ce[0];
                    default:
                        this._errorToken(j)
                    }
                },
                led: function(j, C) {
                    var A;
                    switch (j) {
                    case ct:
                        var $ = Se.Dot;
                        return this._lookahead(0) !== de ? (A = this._parseDotRHS($),
                        {
                            type: "Subexpression",
                            children: [C, A]
                        }) : (this._advance(),
                        A = this._parseProjectionRHS($),
                        {
                            type: "ValueProjection",
                            children: [C, A]
                        });
                    case _e:
                        return A = this.expression(Se.Pipe),
                        {
                            type: _e,
                            children: [C, A]
                        };
                    case fe:
                        return A = this.expression(Se.Or),
                        {
                            type: "OrExpression",
                            children: [C, A]
                        };
                    case Oe:
                        return A = this.expression(Se.And),
                        {
                            type: "AndExpression",
                            children: [C, A]
                        };
                    case le:
                        for (var re = C.name, Ce = [], ze, oe; this._lookahead(0) !== H; )
                            this._lookahead(0) === ee ? (ze = {
                                type: ee
                            },
                            this._advance()) : ze = this.expression(0),
                            this._lookahead(0) === Y && this._match(Y),
                            Ce.push(ze);
                        return this._match(H),
                        oe = {
                            type: "Function",
                            name: re,
                            children: Ce
                        },
                        oe;
                    case ye:
                        var Q = this.expression(0);
                        return this._match(I),
                        this._lookahead(0) === ge ? A = {
                            type: "Identity"
                        } : A = this._parseProjectionRHS(Se.Filter),
                        {
                            type: "FilterProjection",
                            children: [C, A, Q]
                        };
                    case ge:
                        var dt = {
                            type: ge,
                            children: [C]
                        }
                          , Ye = this._parseProjectionRHS(Se.Flatten);
                        return {
                            type: "Projection",
                            children: [dt, Ye]
                        };
                    case De:
                    case Ve:
                    case Ne:
                    case Ae:
                    case je:
                    case Pe:
                        return this._parseComparator(C, j);
                    case D:
                        var he = this._lookaheadToken(0);
                        return he.type === ae || he.type === M ? (A = this._parseIndexExpression(),
                        this._projectIfSlice(C, A)) : (this._match(de),
                        this._match(I),
                        A = this._parseProjectionRHS(Se.Star),
                        {
                            type: "Projection",
                            children: [C, A]
                        });
                    default:
                        this._errorToken(this._lookaheadToken(0))
                    }
                },
                _match: function(j) {
                    if (this._lookahead(0) === j)
                        this._advance();
                    else {
                        var C = this._lookaheadToken(0)
                          , A = new Error("Expected " + j + ", got: " + C.type);
                        throw A.name = "ParserError",
                        A
                    }
                },
                _errorToken: function(j) {
                    var C = new Error("Invalid token (" + j.type + '): "' + j.value + '"');
                    throw C.name = "ParserError",
                    C
                },
                _parseIndexExpression: function() {
                    if (this._lookahead(0) === M || this._lookahead(1) === M)
                        return this._parseSliceExpression();
                    var j = {
                        type: "Index",
                        value: this._lookaheadToken(0).value
                    };
                    return this._advance(),
                    this._match(I),
                    j
                },
                _projectIfSlice: function(j, C) {
                    var A = {
                        type: "IndexExpression",
                        children: [j, C]
                    };
                    return C.type === "Slice" ? {
                        type: "Projection",
                        children: [A, this._parseProjectionRHS(Se.Star)]
                    } : A
                },
                _parseSliceExpression: function() {
                    for (var j = [null, null, null], C = 0, A = this._lookahead(0); A !== I && C < 3; ) {
                        if (A === M)
                            C++,
                            this._advance();
                        else if (A === ae)
                            j[C] = this._lookaheadToken(0).value,
                            this._advance();
                        else {
                            var $ = this._lookahead(0)
                              , re = new Error("Syntax error, unexpected token: " + $.value + "(" + $.type + ")");
                            throw re.name = "Parsererror",
                            re
                        }
                        A = this._lookahead(0)
                    }
                    return this._match(I),
                    {
                        type: "Slice",
                        children: j
                    }
                },
                _parseComparator: function(j, C) {
                    var A = this.expression(Se[C]);
                    return {
                        type: "Comparator",
                        name: C,
                        children: [j, A]
                    }
                },
                _parseDotRHS: function(j) {
                    var C = this._lookahead(0)
                      , A = [R, k, de];
                    if (A.indexOf(C) >= 0)
                        return this.expression(j);
                    if (C === D)
                        return this._match(D),
                        this._parseMultiselectList();
                    if (C === X)
                        return this._match(X),
                        this._parseMultiselectHash()
                },
                _parseProjectionRHS: function(j) {
                    var C;
                    if (Se[this._lookahead(0)] < 10)
                        C = {
                            type: "Identity"
                        };
                    else if (this._lookahead(0) === D)
                        C = this.expression(j);
                    else if (this._lookahead(0) === ye)
                        C = this.expression(j);
                    else if (this._lookahead(0) === ct)
                        this._match(ct),
                        C = this._parseDotRHS(j);
                    else {
                        var A = this._lookaheadToken(0)
                          , $ = new Error("Sytanx error, unexpected token: " + A.value + "(" + A.type + ")");
                        throw $.name = "ParserError",
                        $
                    }
                    return C
                },
                _parseMultiselectList: function() {
                    for (var j = []; this._lookahead(0) !== I; ) {
                        var C = this.expression(0);
                        if (j.push(C),
                        this._lookahead(0) === Y && (this._match(Y),
                        this._lookahead(0) === I))
                            throw new Error("Unexpected token Rbracket")
                    }
                    return this._match(I),
                    {
                        type: "MultiSelectList",
                        children: j
                    }
                },
                _parseMultiselectHash: function() {
                    for (var j = [], C = [R, k], A, $, re, Ce; ; ) {
                        if (A = this._lookaheadToken(0),
                        C.indexOf(A.type) < 0)
                            throw new Error("Expecting an identifier token, got: " + A.type);
                        if ($ = A.value,
                        this._advance(),
                        this._match(M),
                        re = this.expression(0),
                        Ce = {
                            type: "KeyValuePair",
                            name: $,
                            value: re
                        },
                        j.push(Ce),
                        this._lookahead(0) === Y)
                            this._match(Y);
                        else if (this._lookahead(0) === Z) {
                            this._match(Z);
                            break
                        }
                    }
                    return {
                        type: "MultiSelectHash",
                        children: j
                    }
                }
            };
            function Fe(j) {
                this.runtime = j
            }
            Fe.prototype = {
                search: function(j, C) {
                    return this.visit(j, C)
                },
                visit: function(j, C) {
                    var A, $, re, Ce, ze, oe, Q, dt, Ye, he;
                    switch (j.type) {
                    case "Field":
                        return C !== null && o(C) ? (oe = C[j.name],
                        oe === void 0 ? null : oe) : null;
                    case "Subexpression":
                        for (re = this.visit(j.children[0], C),
                        he = 1; he < j.children.length; he++)
                            if (re = this.visit(j.children[1], re),
                            re === null)
                                return null;
                        return re;
                    case "IndexExpression":
                        return Q = this.visit(j.children[0], C),
                        dt = this.visit(j.children[1], Q),
                        dt;
                    case "Index":
                        if (!n(C))
                            return null;
                        var ft = j.value;
                        return ft < 0 && (ft = C.length + ft),
                        re = C[ft],
                        re === void 0 && (re = null),
                        re;
                    case "Slice":
                        if (!n(C))
                            return null;
                        var Zt = j.children.slice(0)
                          , Tn = this.computeSliceParams(C.length, Zt)
                          , _n = Tn[0]
                          , Xt = Tn[1]
                          , Rn = Tn[2];
                        if (re = [],
                        Rn > 0)
                            for (he = _n; he < Xt; he += Rn)
                                re.push(C[he]);
                        else
                            for (he = _n; he > Xt; he += Rn)
                                re.push(C[he]);
                        return re;
                    case "Projection":
                        var on = this.visit(j.children[0], C);
                        if (!n(on))
                            return null;
                        for (Ye = [],
                        he = 0; he < on.length; he++)
                            $ = this.visit(j.children[1], on[he]),
                            $ !== null && Ye.push($);
                        return Ye;
                    case "ValueProjection":
                        if (on = this.visit(j.children[0], C),
                        !o(on))
                            return null;
                        Ye = [];
                        var It = s(on);
                        for (he = 0; he < It.length; he++)
                            $ = this.visit(j.children[1], It[he]),
                            $ !== null && Ye.push($);
                        return Ye;
                    case "FilterProjection":
                        if (on = this.visit(j.children[0], C),
                        !n(on))
                            return null;
                        var St = []
                          , Ht = [];
                        for (he = 0; he < on.length; he++)
                            A = this.visit(j.children[2], on[he]),
                            i(A) || St.push(on[he]);
                        for (var hn = 0; hn < St.length; hn++)
                            $ = this.visit(j.children[1], St[hn]),
                            $ !== null && Ht.push($);
                        return Ht;
                    case "Comparator":
                        switch (Ce = this.visit(j.children[0], C),
                        ze = this.visit(j.children[1], C),
                        j.name) {
                        case De:
                            re = a(Ce, ze);
                            break;
                        case Ve:
                            re = !a(Ce, ze);
                            break;
                        case Ne:
                            re = Ce > ze;
                            break;
                        case Ae:
                            re = Ce >= ze;
                            break;
                        case je:
                            re = Ce < ze;
                            break;
                        case Pe:
                            re = Ce <= ze;
                            break;
                        default:
                            throw new Error("Unknown comparator: " + j.name)
                        }
                        return re;
                    case ge:
                        var Ut = this.visit(j.children[0], C);
                        if (!n(Ut))
                            return null;
                        var He = [];
                        for (he = 0; he < Ut.length; he++)
                            $ = Ut[he],
                            n($) ? He.push.apply(He, $) : He.push($);
                        return He;
                    case "Identity":
                        return C;
                    case "MultiSelectList":
                        if (C === null)
                            return null;
                        for (Ye = [],
                        he = 0; he < j.children.length; he++)
                            Ye.push(this.visit(j.children[he], C));
                        return Ye;
                    case "MultiSelectHash":
                        if (C === null)
                            return null;
                        Ye = {};
                        var Yt;
                        for (he = 0; he < j.children.length; he++)
                            Yt = j.children[he],
                            Ye[Yt.name] = this.visit(Yt.value, C);
                        return Ye;
                    case "OrExpression":
                        return A = this.visit(j.children[0], C),
                        i(A) && (A = this.visit(j.children[1], C)),
                        A;
                    case "AndExpression":
                        return Ce = this.visit(j.children[0], C),
                        i(Ce) === !0 ? Ce : this.visit(j.children[1], C);
                    case "NotExpression":
                        return Ce = this.visit(j.children[0], C),
                        i(Ce);
                    case "Literal":
                        return j.value;
                    case _e:
                        return Q = this.visit(j.children[0], C),
                        this.visit(j.children[1], Q);
                    case ee:
                        return C;
                    case "Function":
                        var Vt = [];
                        for (he = 0; he < j.children.length; he++)
                            Vt.push(this.visit(j.children[he], C));
                        return this.runtime.callFunction(j.name, Vt);
                    case "ExpressionReference":
                        var bn = j.children[0];
                        return bn.jmespathType = se,
                        bn;
                    default:
                        throw new Error("Unknown node type: " + j.type)
                    }
                },
                computeSliceParams: function(j, C) {
                    var A = C[0]
                      , $ = C[1]
                      , re = C[2]
                      , Ce = [null, null, null];
                    if (re === null)
                        re = 1;
                    else if (re === 0) {
                        var ze = new Error("Invalid slice, step cannot be 0");
                        throw ze.name = "RuntimeError",
                        ze
                    }
                    var oe = re < 0;
                    return A === null ? A = oe ? j - 1 : 0 : A = this.capSliceRange(j, A, re),
                    $ === null ? $ = oe ? -1 : j : $ = this.capSliceRange(j, $, re),
                    Ce[0] = A,
                    Ce[1] = $,
                    Ce[2] = re,
                    Ce
                },
                capSliceRange: function(j, C, A) {
                    return C < 0 ? (C += j,
                    C < 0 && (C = A < 0 ? -1 : 0)) : C >= j && (C = A < 0 ? j - 1 : j),
                    C
                }
            };
            function $e(j) {
                this._interpreter = j,
                this.functionTable = {
                    abs: {
                        _func: this._functionAbs,
                        _signature: [{
                            types: [u]
                        }]
                    },
                    avg: {
                        _func: this._functionAvg,
                        _signature: [{
                            types: [y]
                        }]
                    },
                    ceil: {
                        _func: this._functionCeil,
                        _signature: [{
                            types: [u]
                        }]
                    },
                    contains: {
                        _func: this._functionContains,
                        _signature: [{
                            types: [c, v]
                        }, {
                            types: [d]
                        }]
                    },
                    ends_with: {
                        _func: this._functionEndsWith,
                        _signature: [{
                            types: [c]
                        }, {
                            types: [c]
                        }]
                    },
                    floor: {
                        _func: this._functionFloor,
                        _signature: [{
                            types: [u]
                        }]
                    },
                    length: {
                        _func: this._functionLength,
                        _signature: [{
                            types: [c, v, p]
                        }]
                    },
                    map: {
                        _func: this._functionMap,
                        _signature: [{
                            types: [m]
                        }, {
                            types: [v]
                        }]
                    },
                    max: {
                        _func: this._functionMax,
                        _signature: [{
                            types: [y, w]
                        }]
                    },
                    merge: {
                        _func: this._functionMerge,
                        _signature: [{
                            types: [p],
                            variadic: !0
                        }]
                    },
                    max_by: {
                        _func: this._functionMaxBy,
                        _signature: [{
                            types: [v]
                        }, {
                            types: [m]
                        }]
                    },
                    sum: {
                        _func: this._functionSum,
                        _signature: [{
                            types: [y]
                        }]
                    },
                    starts_with: {
                        _func: this._functionStartsWith,
                        _signature: [{
                            types: [c]
                        }, {
                            types: [c]
                        }]
                    },
                    min: {
                        _func: this._functionMin,
                        _signature: [{
                            types: [y, w]
                        }]
                    },
                    min_by: {
                        _func: this._functionMinBy,
                        _signature: [{
                            types: [v]
                        }, {
                            types: [m]
                        }]
                    },
                    type: {
                        _func: this._functionType,
                        _signature: [{
                            types: [d]
                        }]
                    },
                    keys: {
                        _func: this._functionKeys,
                        _signature: [{
                            types: [p]
                        }]
                    },
                    values: {
                        _func: this._functionValues,
                        _signature: [{
                            types: [p]
                        }]
                    },
                    sort: {
                        _func: this._functionSort,
                        _signature: [{
                            types: [w, y]
                        }]
                    },
                    sort_by: {
                        _func: this._functionSortBy,
                        _signature: [{
                            types: [v]
                        }, {
                            types: [m]
                        }]
                    },
                    join: {
                        _func: this._functionJoin,
                        _signature: [{
                            types: [c]
                        }, {
                            types: [w]
                        }]
                    },
                    reverse: {
                        _func: this._functionReverse,
                        _signature: [{
                            types: [c, v]
                        }]
                    },
                    to_array: {
                        _func: this._functionToArray,
                        _signature: [{
                            types: [d]
                        }]
                    },
                    to_string: {
                        _func: this._functionToString,
                        _signature: [{
                            types: [d]
                        }]
                    },
                    to_number: {
                        _func: this._functionToNumber,
                        _signature: [{
                            types: [d]
                        }]
                    },
                    not_null: {
                        _func: this._functionNotNull,
                        _signature: [{
                            types: [d],
                            variadic: !0
                        }]
                    }
                }
            }
            $e.prototype = {
                callFunction: function(j, C) {
                    var A = this.functionTable[j];
                    if (A === void 0)
                        throw new Error("Unknown function: " + j + "()");
                    return this._validateArgs(j, C, A._signature),
                    A._func.call(this, C)
                },
                _validateArgs: function(j, C, A) {
                    var $;
                    if (A[A.length - 1].variadic) {
                        if (C.length < A.length)
                            throw $ = A.length === 1 ? " argument" : " arguments",
                            new Error("ArgumentError: " + j + "() takes at least" + A.length + $ + " but received " + C.length)
                    } else if (C.length !== A.length)
                        throw $ = A.length === 1 ? " argument" : " arguments",
                        new Error("ArgumentError: " + j + "() takes " + A.length + $ + " but received " + C.length);
                    for (var re, Ce, ze, oe = 0; oe < A.length; oe++) {
                        ze = !1,
                        re = A[oe].types,
                        Ce = this._getTypeName(C[oe]);
                        for (var Q = 0; Q < re.length; Q++)
                            if (this._typeMatches(Ce, re[Q], C[oe])) {
                                ze = !0;
                                break
                            }
                        if (!ze) {
                            var dt = re.map(function(Ye) {
                                return S[Ye]
                            }).join(",");
                            throw new Error("TypeError: " + j + "() expected argument " + (oe + 1) + " to be type " + dt + " but received type " + S[Ce] + " instead.")
                        }
                    }
                },
                _typeMatches: function(j, C, A) {
                    if (C === d)
                        return !0;
                    if (C === w || C === y || C === v) {
                        if (C === v)
                            return j === v;
                        if (j === v) {
                            var $;
                            C === y ? $ = u : C === w && ($ = c);
                            for (var re = 0; re < A.length; re++)
                                if (!this._typeMatches(this._getTypeName(A[re]), $, A[re]))
                                    return !1;
                            return !0
                        }
                    } else
                        return j === C
                },
                _getTypeName: function(j) {
                    switch (Object.prototype.toString.call(j)) {
                    case "[object String]":
                        return c;
                    case "[object Number]":
                        return u;
                    case "[object Array]":
                        return v;
                    case "[object Boolean]":
                        return f;
                    case "[object Null]":
                        return x;
                    case "[object Object]":
                        return j.jmespathType === se ? m : p
                    }
                },
                _functionStartsWith: function(j) {
                    return j[0].lastIndexOf(j[1]) === 0
                },
                _functionEndsWith: function(j) {
                    var C = j[0]
                      , A = j[1];
                    return C.indexOf(A, C.length - A.length) !== -1
                },
                _functionReverse: function(j) {
                    var C = this._getTypeName(j[0]);
                    if (C === c) {
                        for (var A = j[0], $ = "", re = A.length - 1; re >= 0; re--)
                            $ += A[re];
                        return $
                    } else {
                        var Ce = j[0].slice(0);
                        return Ce.reverse(),
                        Ce
                    }
                },
                _functionAbs: function(j) {
                    return Math.abs(j[0])
                },
                _functionCeil: function(j) {
                    return Math.ceil(j[0])
                },
                _functionAvg: function(j) {
                    for (var C = 0, A = j[0], $ = 0; $ < A.length; $++)
                        C += A[$];
                    return C / A.length
                },
                _functionContains: function(j) {
                    return j[0].indexOf(j[1]) >= 0
                },
                _functionFloor: function(j) {
                    return Math.floor(j[0])
                },
                _functionLength: function(j) {
                    return o(j[0]) ? Object.keys(j[0]).length : j[0].length
                },
                _functionMap: function(j) {
                    for (var C = [], A = this._interpreter, $ = j[0], re = j[1], Ce = 0; Ce < re.length; Ce++)
                        C.push(A.visit($, re[Ce]));
                    return C
                },
                _functionMerge: function(j) {
                    for (var C = {}, A = 0; A < j.length; A++) {
                        var $ = j[A];
                        for (var re in $)
                            C[re] = $[re]
                    }
                    return C
                },
                _functionMax: function(j) {
                    if (j[0].length > 0) {
                        var C = this._getTypeName(j[0][0]);
                        if (C === u)
                            return Math.max.apply(Math, j[0]);
                        for (var A = j[0], $ = A[0], re = 1; re < A.length; re++)
                            $.localeCompare(A[re]) < 0 && ($ = A[re]);
                        return $
                    } else
                        return null
                },
                _functionMin: function(j) {
                    if (j[0].length > 0) {
                        var C = this._getTypeName(j[0][0]);
                        if (C === u)
                            return Math.min.apply(Math, j[0]);
                        for (var A = j[0], $ = A[0], re = 1; re < A.length; re++)
                            A[re].localeCompare($) < 0 && ($ = A[re]);
                        return $
                    } else
                        return null
                },
                _functionSum: function(j) {
                    for (var C = 0, A = j[0], $ = 0; $ < A.length; $++)
                        C += A[$];
                    return C
                },
                _functionType: function(j) {
                    switch (this._getTypeName(j[0])) {
                    case u:
                        return "number";
                    case c:
                        return "string";
                    case v:
                        return "array";
                    case p:
                        return "object";
                    case f:
                        return "boolean";
                    case m:
                        return "expref";
                    case x:
                        return "null"
                    }
                },
                _functionKeys: function(j) {
                    return Object.keys(j[0])
                },
                _functionValues: function(j) {
                    for (var C = j[0], A = Object.keys(C), $ = [], re = 0; re < A.length; re++)
                        $.push(C[A[re]]);
                    return $
                },
                _functionJoin: function(j) {
                    var C = j[0]
                      , A = j[1];
                    return A.join(C)
                },
                _functionToArray: function(j) {
                    return this._getTypeName(j[0]) === v ? j[0] : [j[0]]
                },
                _functionToString: function(j) {
                    return this._getTypeName(j[0]) === c ? j[0] : JSON.stringify(j[0])
                },
                _functionToNumber: function(j) {
                    var C = this._getTypeName(j[0]), A;
                    return C === u ? j[0] : C === c && (A = +j[0],
                    !isNaN(A)) ? A : null
                },
                _functionNotNull: function(j) {
                    for (var C = 0; C < j.length; C++)
                        if (this._getTypeName(j[C]) !== x)
                            return j[C];
                    return null
                },
                _functionSort: function(j) {
                    var C = j[0].slice(0);
                    return C.sort(),
                    C
                },
                _functionSortBy: function(j) {
                    var C = j[0].slice(0);
                    if (C.length === 0)
                        return C;
                    var A = this._interpreter
                      , $ = j[1]
                      , re = this._getTypeName(A.visit($, C[0]));
                    if ([u, c].indexOf(re) < 0)
                        throw new Error("TypeError");
                    for (var Ce = this, ze = [], oe = 0; oe < C.length; oe++)
                        ze.push([oe, C[oe]]);
                    ze.sort(function(dt, Ye) {
                        var he = A.visit($, dt[1])
                          , ft = A.visit($, Ye[1]);
                        if (Ce._getTypeName(he) !== re)
                            throw new Error("TypeError: expected " + re + ", received " + Ce._getTypeName(he));
                        if (Ce._getTypeName(ft) !== re)
                            throw new Error("TypeError: expected " + re + ", received " + Ce._getTypeName(ft));
                        return he > ft ? 1 : he < ft ? -1 : dt[0] - Ye[0]
                    });
                    for (var Q = 0; Q < ze.length; Q++)
                        C[Q] = ze[Q][1];
                    return C
                },
                _functionMaxBy: function(j) {
                    for (var C = j[1], A = j[0], $ = this.createKeyFunction(C, [u, c]), re = -1 / 0, Ce, ze, oe = 0; oe < A.length; oe++)
                        ze = $(A[oe]),
                        ze > re && (re = ze,
                        Ce = A[oe]);
                    return Ce
                },
                _functionMinBy: function(j) {
                    for (var C = j[1], A = j[0], $ = this.createKeyFunction(C, [u, c]), re = 1 / 0, Ce, ze, oe = 0; oe < A.length; oe++)
                        ze = $(A[oe]),
                        ze < re && (re = ze,
                        Ce = A[oe]);
                    return Ce
                },
                createKeyFunction: function(j, C) {
                    var A = this
                      , $ = this._interpreter
                      , re = function(Ce) {
                        var ze = $.visit(j, Ce);
                        if (C.indexOf(A._getTypeName(ze)) < 0) {
                            var oe = "TypeError: expected one of " + C + ", received " + A._getTypeName(ze);
                            throw new Error(oe)
                        }
                        return ze
                    };
                    return re
                }
            };
            function Lt(j) {
                var C = new mt
                  , A = C.parse(j);
                return A
            }
            function We(j) {
                var C = new nt;
                return C.tokenize(j)
            }
            function $t(j, C) {
                var A = new mt
                  , $ = new $e
                  , re = new Fe($);
                $._interpreter = re;
                var Ce = A.parse(C);
                return re.search(Ce, j)
            }
            t.tokenize = We,
            t.compile = Lt,
            t.search = $t,
            t.strictDeepEqual = a
        }
        )(e)
    }(zd)),
    zd
}
var zy = gA();
const Ty = kk(zy)
  , mA = M_({
    __proto__: null,
    default: Ty
}, [zy]);
class bA {
    add(t, n, o) {
        if (typeof arguments[0] != "string")
            for (let a in arguments[0])
                this.add(a, arguments[0][a], arguments[1]);
        else
            (Array.isArray(t) ? t : [t]).forEach(function(a) {
                this[a] = this[a] || [],
                n && this[a][o ? "unshift" : "push"](n)
            }, this)
    }
    run(t, n) {
        this[t] = this[t] || [],
        this[t].forEach(function(o) {
            o.call(n && n.context ? n.context : n, n)
        })
    }
}
class xA {
    constructor(t) {
        this.jsep = t,
        this.registered = {}
    }
    register() {
        for (var t = arguments.length, n = new Array(t), o = 0; o < t; o++)
            n[o] = arguments[o];
        n.forEach(a => {
            if (typeof a != "object" || !a.name || !a.init)
                throw new Error("Invalid JSEP plugin format");
            this.registered[a.name] || (a.init(this.jsep),
            this.registered[a.name] = a)
        }
        )
    }
}
class ue {
    static get version() {
        return "1.4.0"
    }
    static toString() {
        return "JavaScript Expression Parser (JSEP) v" + ue.version
    }
    static addUnaryOp(t) {
        return ue.max_unop_len = Math.max(t.length, ue.max_unop_len),
        ue.unary_ops[t] = 1,
        ue
    }
    static addBinaryOp(t, n, o) {
        return ue.max_binop_len = Math.max(t.length, ue.max_binop_len),
        ue.binary_ops[t] = n,
        o ? ue.right_associative.add(t) : ue.right_associative.delete(t),
        ue
    }
    static addIdentifierChar(t) {
        return ue.additional_identifier_chars.add(t),
        ue
    }
    static addLiteral(t, n) {
        return ue.literals[t] = n,
        ue
    }
    static removeUnaryOp(t) {
        return delete ue.unary_ops[t],
        t.length === ue.max_unop_len && (ue.max_unop_len = ue.getMaxKeyLen(ue.unary_ops)),
        ue
    }
    static removeAllUnaryOps() {
        return ue.unary_ops = {},
        ue.max_unop_len = 0,
        ue
    }
    static removeIdentifierChar(t) {
        return ue.additional_identifier_chars.delete(t),
        ue
    }
    static removeBinaryOp(t) {
        return delete ue.binary_ops[t],
        t.length === ue.max_binop_len && (ue.max_binop_len = ue.getMaxKeyLen(ue.binary_ops)),
        ue.right_associative.delete(t),
        ue
    }
    static removeAllBinaryOps() {
        return ue.binary_ops = {},
        ue.max_binop_len = 0,
        ue
    }
    static removeLiteral(t) {
        return delete ue.literals[t],
        ue
    }
    static removeAllLiterals() {
        return ue.literals = {},
        ue
    }
    get char() {
        return this.expr.charAt(this.index)
    }
    get code() {
        return this.expr.charCodeAt(this.index)
    }
    constructor(t) {
        this.expr = t,
        this.index = 0
    }
    static parse(t) {
        return new ue(t).parse()
    }
    static getMaxKeyLen(t) {
        return Math.max(0, ...Object.keys(t).map(n => n.length))
    }
    static isDecimalDigit(t) {
        return t >= 48 && t <= 57
    }
    static binaryPrecedence(t) {
        return ue.binary_ops[t] || 0
    }
    static isIdentifierStart(t) {
        return t >= 65 && t <= 90 || t >= 97 && t <= 122 || t >= 128 && !ue.binary_ops[String.fromCharCode(t)] || ue.additional_identifier_chars.has(String.fromCharCode(t))
    }
    static isIdentifierPart(t) {
        return ue.isIdentifierStart(t) || ue.isDecimalDigit(t)
    }
    throwError(t) {
        const n = new Error(t + " at character " + this.index);
        throw n.index = this.index,
        n.description = t,
        n
    }
    runHook(t, n) {
        if (ue.hooks[t]) {
            const o = {
                context: this,
                node: n
            };
            return ue.hooks.run(t, o),
            o.node
        }
        return n
    }
    searchHook(t) {
        if (ue.hooks[t]) {
            const n = {
                context: this
            };
            return ue.hooks[t].find(function(o) {
                return o.call(n.context, n),
                n.node
            }),
            n.node
        }
    }
    gobbleSpaces() {
        let t = this.code;
        for (; t === ue.SPACE_CODE || t === ue.TAB_CODE || t === ue.LF_CODE || t === ue.CR_CODE; )
            t = this.expr.charCodeAt(++this.index);
        this.runHook("gobble-spaces")
    }
    parse() {
        this.runHook("before-all");
        const t = this.gobbleExpressions()
          , n = t.length === 1 ? t[0] : {
            type: ue.COMPOUND,
            body: t
        };
        return this.runHook("after-all", n)
    }
    gobbleExpressions(t) {
        let n = [], o, a;
        for (; this.index < this.expr.length; )
            if (o = this.code,
            o === ue.SEMCOL_CODE || o === ue.COMMA_CODE)
                this.index++;
            else if (a = this.gobbleExpression())
                n.push(a);
            else if (this.index < this.expr.length) {
                if (o === t)
                    break;
                this.throwError('Unexpected "' + this.char + '"')
            }
        return n
    }
    gobbleExpression() {
        const t = this.searchHook("gobble-expression") || this.gobbleBinaryExpression();
        return this.gobbleSpaces(),
        this.runHook("after-expression", t)
    }
    gobbleBinaryOp() {
        this.gobbleSpaces();
        let t = this.expr.substr(this.index, ue.max_binop_len)
          , n = t.length;
        for (; n > 0; ) {
            if (ue.binary_ops.hasOwnProperty(t) && (!ue.isIdentifierStart(this.code) || this.index + t.length < this.expr.length && !ue.isIdentifierPart(this.expr.charCodeAt(this.index + t.length))))
                return this.index += n,
                t;
            t = t.substr(0, --n)
        }
        return !1
    }
    gobbleBinaryExpression() {
        let t, n, o, a, i, s, l, u, d;
        if (s = this.gobbleToken(),
        !s || (n = this.gobbleBinaryOp(),
        !n))
            return s;
        for (i = {
            value: n,
            prec: ue.binaryPrecedence(n),
            right_a: ue.right_associative.has(n)
        },
        l = this.gobbleToken(),
        l || this.throwError("Expected expression after " + n),
        a = [s, i, l]; n = this.gobbleBinaryOp(); ) {
            if (o = ue.binaryPrecedence(n),
            o === 0) {
                this.index -= n.length;
                break
            }
            i = {
                value: n,
                prec: o,
                right_a: ue.right_associative.has(n)
            },
            d = n;
            const c = v => i.right_a && v.right_a ? o > v.prec : o <= v.prec;
            for (; a.length > 2 && c(a[a.length - 2]); )
                l = a.pop(),
                n = a.pop().value,
                s = a.pop(),
                t = {
                    type: ue.BINARY_EXP,
                    operator: n,
                    left: s,
                    right: l
                },
                a.push(t);
            t = this.gobbleToken(),
            t || this.throwError("Expected expression after " + d),
            a.push(i, t)
        }
        for (u = a.length - 1,
        t = a[u]; u > 1; )
            t = {
                type: ue.BINARY_EXP,
                operator: a[u - 1].value,
                left: a[u - 2],
                right: t
            },
            u -= 2;
        return t
    }
    gobbleToken() {
        let t, n, o, a;
        if (this.gobbleSpaces(),
        a = this.searchHook("gobble-token"),
        a)
            return this.runHook("after-token", a);
        if (t = this.code,
        ue.isDecimalDigit(t) || t === ue.PERIOD_CODE)
            return this.gobbleNumericLiteral();
        if (t === ue.SQUOTE_CODE || t === ue.DQUOTE_CODE)
            a = this.gobbleStringLiteral();
        else if (t === ue.OBRACK_CODE)
            a = this.gobbleArray();
        else {
            for (n = this.expr.substr(this.index, ue.max_unop_len),
            o = n.length; o > 0; ) {
                if (ue.unary_ops.hasOwnProperty(n) && (!ue.isIdentifierStart(this.code) || this.index + n.length < this.expr.length && !ue.isIdentifierPart(this.expr.charCodeAt(this.index + n.length)))) {
                    this.index += o;
                    const i = this.gobbleToken();
                    return i || this.throwError("missing unaryOp argument"),
                    this.runHook("after-token", {
                        type: ue.UNARY_EXP,
                        operator: n,
                        argument: i,
                        prefix: !0
                    })
                }
                n = n.substr(0, --o)
            }
            ue.isIdentifierStart(t) ? (a = this.gobbleIdentifier(),
            ue.literals.hasOwnProperty(a.name) ? a = {
                type: ue.LITERAL,
                value: ue.literals[a.name],
                raw: a.name
            } : a.name === ue.this_str && (a = {
                type: ue.THIS_EXP
            })) : t === ue.OPAREN_CODE && (a = this.gobbleGroup())
        }
        return a ? (a = this.gobbleTokenProperty(a),
        this.runHook("after-token", a)) : this.runHook("after-token", !1)
    }
    gobbleTokenProperty(t) {
        this.gobbleSpaces();
        let n = this.code;
        for (; n === ue.PERIOD_CODE || n === ue.OBRACK_CODE || n === ue.OPAREN_CODE || n === ue.QUMARK_CODE; ) {
            let o;
            if (n === ue.QUMARK_CODE) {
                if (this.expr.charCodeAt(this.index + 1) !== ue.PERIOD_CODE)
                    break;
                o = !0,
                this.index += 2,
                this.gobbleSpaces(),
                n = this.code
            }
            this.index++,
            n === ue.OBRACK_CODE ? (t = {
                type: ue.MEMBER_EXP,
                computed: !0,
                object: t,
                property: this.gobbleExpression()
            },
            t.property || this.throwError('Unexpected "' + this.char + '"'),
            this.gobbleSpaces(),
            n = this.code,
            n !== ue.CBRACK_CODE && this.throwError("Unclosed ["),
            this.index++) : n === ue.OPAREN_CODE ? t = {
                type: ue.CALL_EXP,
                arguments: this.gobbleArguments(ue.CPAREN_CODE),
                callee: t
            } : (n === ue.PERIOD_CODE || o) && (o && this.index--,
            this.gobbleSpaces(),
            t = {
                type: ue.MEMBER_EXP,
                computed: !1,
                object: t,
                property: this.gobbleIdentifier()
            }),
            o && (t.optional = !0),
            this.gobbleSpaces(),
            n = this.code
        }
        return t
    }
    gobbleNumericLiteral() {
        let t = "", n, o;
        for (; ue.isDecimalDigit(this.code); )
            t += this.expr.charAt(this.index++);
        if (this.code === ue.PERIOD_CODE)
            for (t += this.expr.charAt(this.index++); ue.isDecimalDigit(this.code); )
                t += this.expr.charAt(this.index++);
        if (n = this.char,
        n === "e" || n === "E") {
            for (t += this.expr.charAt(this.index++),
            n = this.char,
            (n === "+" || n === "-") && (t += this.expr.charAt(this.index++)); ue.isDecimalDigit(this.code); )
                t += this.expr.charAt(this.index++);
            ue.isDecimalDigit(this.expr.charCodeAt(this.index - 1)) || this.throwError("Expected exponent (" + t + this.char + ")")
        }
        return o = this.code,
        ue.isIdentifierStart(o) ? this.throwError("Variable names cannot start with a number (" + t + this.char + ")") : (o === ue.PERIOD_CODE || t.length === 1 && t.charCodeAt(0) === ue.PERIOD_CODE) && this.throwError("Unexpected period"),
        {
            type: ue.LITERAL,
            value: parseFloat(t),
            raw: t
        }
    }
    gobbleStringLiteral() {
        let t = "";
        const n = this.index
          , o = this.expr.charAt(this.index++);
        let a = !1;
        for (; this.index < this.expr.length; ) {
            let i = this.expr.charAt(this.index++);
            if (i === o) {
                a = !0;
                break
            } else if (i === "\\")
                switch (i = this.expr.charAt(this.index++),
                i) {
                case "n":
                    t += `
`;
                    break;
                case "r":
                    t += "\r";
                    break;
                case "t":
                    t += "	";
                    break;
                case "b":
                    t += "\b";
                    break;
                case "f":
                    t += "\f";
                    break;
                case "v":
                    t += "\v";
                    break;
                default:
                    t += i
                }
            else
                t += i
        }
        return a || this.throwError('Unclosed quote after "' + t + '"'),
        {
            type: ue.LITERAL,
            value: t,
            raw: this.expr.substring(n, this.index)
        }
    }
    gobbleIdentifier() {
        let t = this.code
          , n = this.index;
        for (ue.isIdentifierStart(t) ? this.index++ : this.throwError("Unexpected " + this.char); this.index < this.expr.length && (t = this.code,
        ue.isIdentifierPart(t)); )
            this.index++;
        return {
            type: ue.IDENTIFIER,
            name: this.expr.slice(n, this.index)
        }
    }
    gobbleArguments(t) {
        const n = [];
        let o = !1
          , a = 0;
        for (; this.index < this.expr.length; ) {
            this.gobbleSpaces();
            let i = this.code;
            if (i === t) {
                o = !0,
                this.index++,
                t === ue.CPAREN_CODE && a && a >= n.length && this.throwError("Unexpected token " + String.fromCharCode(t));
                break
            } else if (i === ue.COMMA_CODE) {
                if (this.index++,
                a++,
                a !== n.length) {
                    if (t === ue.CPAREN_CODE)
                        this.throwError("Unexpected token ,");
                    else if (t === ue.CBRACK_CODE)
                        for (let s = n.length; s < a; s++)
                            n.push(null)
                }
            } else if (n.length !== a && a !== 0)
                this.throwError("Expected comma");
            else {
                const s = this.gobbleExpression();
                (!s || s.type === ue.COMPOUND) && this.throwError("Expected comma"),
                n.push(s)
            }
        }
        return o || this.throwError("Expected " + String.fromCharCode(t)),
        n
    }
    gobbleGroup() {
        this.index++;
        let t = this.gobbleExpressions(ue.CPAREN_CODE);
        if (this.code === ue.CPAREN_CODE)
            return this.index++,
            t.length === 1 ? t[0] : t.length ? {
                type: ue.SEQUENCE_EXP,
                expressions: t
            } : !1;
        this.throwError("Unclosed (")
    }
    gobbleArray() {
        return this.index++,
        {
            type: ue.ARRAY_EXP,
            elements: this.gobbleArguments(ue.CBRACK_CODE)
        }
    }
}
const jA = new bA;
Object.assign(ue, {
    hooks: jA,
    plugins: new xA(ue),
    COMPOUND: "Compound",
    SEQUENCE_EXP: "SequenceExpression",
    IDENTIFIER: "Identifier",
    MEMBER_EXP: "MemberExpression",
    LITERAL: "Literal",
    THIS_EXP: "ThisExpression",
    CALL_EXP: "CallExpression",
    UNARY_EXP: "UnaryExpression",
    BINARY_EXP: "BinaryExpression",
    ARRAY_EXP: "ArrayExpression",
    TAB_CODE: 9,
    LF_CODE: 10,
    CR_CODE: 13,
    SPACE_CODE: 32,
    PERIOD_CODE: 46,
    COMMA_CODE: 44,
    SQUOTE_CODE: 39,
    DQUOTE_CODE: 34,
    OPAREN_CODE: 40,
    CPAREN_CODE: 41,
    OBRACK_CODE: 91,
    CBRACK_CODE: 93,
    QUMARK_CODE: 63,
    SEMCOL_CODE: 59,
    COLON_CODE: 58,
    unary_ops: {
        "-": 1,
        "!": 1,
        "~": 1,
        "+": 1
    },
    binary_ops: {
        "||": 1,
        "??": 1,
        "&&": 2,
        "|": 3,
        "^": 4,
        "&": 5,
        "==": 6,
        "!=": 6,
        "===": 6,
        "!==": 6,
        "<": 7,
        ">": 7,
        "<=": 7,
        ">=": 7,
        "<<": 8,
        ">>": 8,
        ">>>": 8,
        "+": 9,
        "-": 9,
        "*": 10,
        "/": 10,
        "%": 10,
        "**": 11
    },
    right_associative: new Set(["**"]),
    additional_identifier_chars: new Set(["$", "_"]),
    literals: {
        true: !0,
        false: !1,
        null: null
    },
    this_str: "this"
});
ue.max_unop_len = ue.getMaxKeyLen(ue.unary_ops);
ue.max_binop_len = ue.getMaxKeyLen(ue.binary_ops);
const Ga = e => new ue(e).parse()
  , yA = Object.getOwnPropertyNames(class {
}
);
Object.getOwnPropertyNames(ue).filter(e => !yA.includes(e) && Ga[e] === void 0).forEach(e => {
    Ga[e] = ue[e]
}
);
Ga.Jsep = ue;
const wA = "ConditionalExpression";
var kA = {
    name: "ternary",
    init(e) {
        e.hooks.add("after-expression", function(n) {
            if (n.node && this.code === e.QUMARK_CODE) {
                this.index++;
                const o = n.node
                  , a = this.gobbleExpression();
                if (a || this.throwError("Expected expression"),
                this.gobbleSpaces(),
                this.code === e.COLON_CODE) {
                    this.index++;
                    const i = this.gobbleExpression();
                    if (i || this.throwError("Expected expression"),
                    n.node = {
                        type: wA,
                        test: o,
                        consequent: a,
                        alternate: i
                    },
                    o.operator && e.binary_ops[o.operator] <= .9) {
                        let s = o;
                        for (; s.right.operator && e.binary_ops[s.right.operator] <= .9; )
                            s = s.right;
                        n.node.test = s.right,
                        s.right = n.node,
                        n.node = o
                    }
                } else
                    this.throwError("Expected :")
            }
        })
    }
};
Ga.plugins.register(kA);
const Oh = 47
  , _A = 92;
var SA = {
    name: "regex",
    init(e) {
        e.hooks.add("gobble-token", function(n) {
            if (this.code === Oh) {
                const o = ++this.index;
                let a = !1;
                for (; this.index < this.expr.length; ) {
                    if (this.code === Oh && !a) {
                        const i = this.expr.slice(o, this.index);
                        let s = "";
                        for (; ++this.index < this.expr.length; ) {
                            const u = this.code;
                            if (u >= 97 && u <= 122 || u >= 65 && u <= 90 || u >= 48 && u <= 57)
                                s += this.char;
                            else
                                break
                        }
                        let l;
                        try {
                            l = new RegExp(i,s)
                        } catch (u) {
                            this.throwError(u.message)
                        }
                        return n.node = {
                            type: e.LITERAL,
                            value: l,
                            raw: this.expr.slice(o - 1, this.index)
                        },
                        n.node = this.gobbleTokenProperty(n.node),
                        n.node
                    }
                    this.code === e.OBRACK_CODE ? a = !0 : a && this.code === e.CBRACK_CODE && (a = !1),
                    this.index += this.code === _A ? 2 : 1
                }
                this.throwError("Unclosed Regex")
            }
        })
    }
};
const Td = 43
  , CA = 45
  , ks = {
    name: "assignment",
    assignmentOperators: new Set(["=", "*=", "**=", "/=", "%=", "+=", "-=", "<<=", ">>=", ">>>=", "&=", "^=", "|=", "||=", "&&=", "??="]),
    updateOperators: [Td, CA],
    assignmentPrecedence: .9,
    init(e) {
        const t = [e.IDENTIFIER, e.MEMBER_EXP];
        ks.assignmentOperators.forEach(o => e.addBinaryOp(o, ks.assignmentPrecedence, !0)),
        e.hooks.add("gobble-token", function(a) {
            const i = this.code;
            ks.updateOperators.some(s => s === i && s === this.expr.charCodeAt(this.index + 1)) && (this.index += 2,
            a.node = {
                type: "UpdateExpression",
                operator: i === Td ? "++" : "--",
                argument: this.gobbleTokenProperty(this.gobbleIdentifier()),
                prefix: !0
            },
            (!a.node.argument || !t.includes(a.node.argument.type)) && this.throwError(`Unexpected ${a.node.operator}`))
        }),
        e.hooks.add("after-token", function(a) {
            if (a.node) {
                const i = this.code;
                ks.updateOperators.some(s => s === i && s === this.expr.charCodeAt(this.index + 1)) && (t.includes(a.node.type) || this.throwError(`Unexpected ${a.node.operator}`),
                this.index += 2,
                a.node = {
                    type: "UpdateExpression",
                    operator: i === Td ? "++" : "--",
                    argument: a.node,
                    prefix: !1
                })
            }
        }),
        e.hooks.add("after-expression", function(a) {
            a.node && n(a.node)
        });
        function n(o) {
            ks.assignmentOperators.has(o.operator) ? (o.type = "AssignmentExpression",
            n(o.left),
            n(o.right)) : o.operator || Object.values(o).forEach(a => {
                a && typeof a == "object" && n(a)
            }
            )
        }
    }
};
Ga.plugins.register(SA, ks);
Ga.addUnaryOp("typeof");
Ga.addLiteral("null", null);
Ga.addLiteral("undefined", void 0);
const OA = new Set(["constructor", "__proto__", "__defineGetter__", "__defineSetter__"])
  , cr = {
    evalAst(e, t) {
        switch (e.type) {
        case "BinaryExpression":
        case "LogicalExpression":
            return cr.evalBinaryExpression(e, t);
        case "Compound":
            return cr.evalCompound(e, t);
        case "ConditionalExpression":
            return cr.evalConditionalExpression(e, t);
        case "Identifier":
            return cr.evalIdentifier(e, t);
        case "Literal":
            return cr.evalLiteral(e, t);
        case "MemberExpression":
            return cr.evalMemberExpression(e, t);
        case "UnaryExpression":
            return cr.evalUnaryExpression(e, t);
        case "ArrayExpression":
            return cr.evalArrayExpression(e, t);
        case "CallExpression":
            return cr.evalCallExpression(e, t);
        case "AssignmentExpression":
            return cr.evalAssignmentExpression(e, t);
        default:
            throw SyntaxError("Unexpected expression", e)
        }
    },
    evalBinaryExpression(e, t) {
        return {
            "||": (o, a) => o || a(),
            "&&": (o, a) => o && a(),
            "|": (o, a) => o | a(),
            "^": (o, a) => o ^ a(),
            "&": (o, a) => o & a(),
            "==": (o, a) => o == a(),
            "!=": (o, a) => o != a(),
            "===": (o, a) => o === a(),
            "!==": (o, a) => o !== a(),
            "<": (o, a) => o < a(),
            ">": (o, a) => o > a(),
            "<=": (o, a) => o <= a(),
            ">=": (o, a) => o >= a(),
            "<<": (o, a) => o << a(),
            ">>": (o, a) => o >> a(),
            ">>>": (o, a) => o >>> a(),
            "+": (o, a) => o + a(),
            "-": (o, a) => o - a(),
            "*": (o, a) => o * a(),
            "/": (o, a) => o / a(),
            "%": (o, a) => o % a()
        }[e.operator](cr.evalAst(e.left, t), () => cr.evalAst(e.right, t))
    },
    evalCompound(e, t) {
        let n;
        for (let o = 0; o < e.body.length; o++) {
            e.body[o].type === "Identifier" && ["var", "let", "const"].includes(e.body[o].name) && e.body[o + 1] && e.body[o + 1].type === "AssignmentExpression" && (o += 1);
            const a = e.body[o];
            n = cr.evalAst(a, t)
        }
        return n
    },
    evalConditionalExpression(e, t) {
        return cr.evalAst(e.test, t) ? cr.evalAst(e.consequent, t) : cr.evalAst(e.alternate, t)
    },
    evalIdentifier(e, t) {
        if (Object.hasOwn(t, e.name))
            return t[e.name];
        throw ReferenceError(`${e.name} is not defined`)
    },
    evalLiteral(e) {
        return e.value
    },
    evalMemberExpression(e, t) {
        const n = String(e.computed ? cr.evalAst(e.property) : e.property.name)
          , o = cr.evalAst(e.object, t);
        if (o == null)
            throw TypeError(`Cannot read properties of ${o} (reading '${n}')`);
        if (!Object.hasOwn(o, n) && OA.has(n))
            throw TypeError(`Cannot read properties of ${o} (reading '${n}')`);
        const a = o[n];
        return typeof a == "function" ? a.bind(o) : a
    },
    evalUnaryExpression(e, t) {
        return {
            "-": o => -cr.evalAst(o, t),
            "!": o => !cr.evalAst(o, t),
            "~": o => ~cr.evalAst(o, t),
            "+": o => +cr.evalAst(o, t),
            typeof: o => typeof cr.evalAst(o, t)
        }[e.operator](e.argument)
    },
    evalArrayExpression(e, t) {
        return e.elements.map(n => cr.evalAst(n, t))
    },
    evalCallExpression(e, t) {
        const n = e.arguments.map(a => cr.evalAst(a, t));
        return cr.evalAst(e.callee, t)(...n)
    },
    evalAssignmentExpression(e, t) {
        if (e.left.type !== "Identifier")
            throw SyntaxError("Invalid left-hand side in assignment");
        const n = e.left.name
          , o = cr.evalAst(e.right, t);
        return t[n] = o,
        t[n]
    }
};
class EA {
    constructor(t) {
        this.code = t,
        this.ast = Ga(this.code)
    }
    runInNewContext(t) {
        const n = Object.assign(Object.create(null), t);
        return cr.evalAst(this.ast, n)
    }
}
function ti(e, t) {
    return e = e.slice(),
    e.push(t),
    e
}
function _v(e, t) {
    return t = t.slice(),
    t.unshift(e),
    t
}
class AA extends Error {
    constructor(t) {
        super('JSONPath should not be called with "new" (it prevents return of (unwrapped) scalar values)'),
        this.avoidNew = !0,
        this.value = t,
        this.name = "NewError"
    }
}
function qn(e, t, n, o, a) {
    if (!(this instanceof qn))
        try {
            return new qn(e,t,n,o,a)
        } catch (s) {
            if (!s.avoidNew)
                throw s;
            return s.value
        }
    typeof e == "string" && (a = o,
    o = n,
    n = t,
    t = e,
    e = null);
    const i = e && typeof e == "object";
    if (e = e || {},
    this.json = e.json || n,
    this.path = e.path || t,
    this.resultType = e.resultType || "value",
    this.flatten = e.flatten || !1,
    this.wrap = Object.hasOwn(e, "wrap") ? e.wrap : !0,
    this.sandbox = e.sandbox || {},
    this.eval = e.eval === void 0 ? "safe" : e.eval,
    this.ignoreEvalErrors = typeof e.ignoreEvalErrors > "u" ? !1 : e.ignoreEvalErrors,
    this.parent = e.parent || null,
    this.parentProperty = e.parentProperty || null,
    this.callback = e.callback || o || null,
    this.otherTypeCallback = e.otherTypeCallback || a || function() {
        throw new TypeError("You must supply an otherTypeCallback callback option with the @other() operator.")
    }
    ,
    e.autostart !== !1) {
        const s = {
            path: i ? e.path : t
        };
        i ? "json"in e && (s.json = e.json) : s.json = n;
        const l = this.evaluate(s);
        if (!l || typeof l != "object")
            throw new AA(l);
        return l
    }
}
qn.prototype.evaluate = function(e, t, n, o) {
    let a = this.parent
      , i = this.parentProperty
      , {flatten: s, wrap: l} = this;
    if (this.currResultType = this.resultType,
    this.currEval = this.eval,
    this.currSandbox = this.sandbox,
    n = n || this.callback,
    this.currOtherTypeCallback = o || this.otherTypeCallback,
    t = t || this.json,
    e = e || this.path,
    e && typeof e == "object" && !Array.isArray(e)) {
        if (!e.path && e.path !== "")
            throw new TypeError('You must supply a "path" property when providing an object argument to JSONPath.evaluate().');
        if (!Object.hasOwn(e, "json"))
            throw new TypeError('You must supply a "json" property when providing an object argument to JSONPath.evaluate().');
        ({json: t} = e),
        s = Object.hasOwn(e, "flatten") ? e.flatten : s,
        this.currResultType = Object.hasOwn(e, "resultType") ? e.resultType : this.currResultType,
        this.currSandbox = Object.hasOwn(e, "sandbox") ? e.sandbox : this.currSandbox,
        l = Object.hasOwn(e, "wrap") ? e.wrap : l,
        this.currEval = Object.hasOwn(e, "eval") ? e.eval : this.currEval,
        n = Object.hasOwn(e, "callback") ? e.callback : n,
        this.currOtherTypeCallback = Object.hasOwn(e, "otherTypeCallback") ? e.otherTypeCallback : this.currOtherTypeCallback,
        a = Object.hasOwn(e, "parent") ? e.parent : a,
        i = Object.hasOwn(e, "parentProperty") ? e.parentProperty : i,
        e = e.path
    }
    if (a = a || null,
    i = i || null,
    Array.isArray(e) && (e = qn.toPathString(e)),
    !e && e !== "" || !t)
        return;
    const u = qn.toPathArray(e);
    u[0] === "$" && u.length > 1 && u.shift(),
    this._hasParentSelector = null;
    const d = this._trace(u, t, ["$"], a, i, n).filter(function(c) {
        return c && !c.isParentSelector
    });
    return d.length ? !l && d.length === 1 && !d[0].hasArrExpr ? this._getPreferredOutput(d[0]) : d.reduce( (c, v) => {
        const p = this._getPreferredOutput(v);
        return s && Array.isArray(p) ? c = c.concat(p) : c.push(p),
        c
    }
    , []) : l ? [] : void 0
}
;
qn.prototype._getPreferredOutput = function(e) {
    const t = this.currResultType;
    switch (t) {
    case "all":
        {
            const n = Array.isArray(e.path) ? e.path : qn.toPathArray(e.path);
            return e.pointer = qn.toPointer(n),
            e.path = typeof e.path == "string" ? e.path : qn.toPathString(e.path),
            e
        }
    case "value":
    case "parent":
    case "parentProperty":
        return e[t];
    case "path":
        return qn.toPathString(e[t]);
    case "pointer":
        return qn.toPointer(e.path);
    default:
        throw new TypeError("Unknown result type")
    }
}
;
qn.prototype._handleCallback = function(e, t, n) {
    if (t) {
        const o = this._getPreferredOutput(e);
        e.path = typeof e.path == "string" ? e.path : qn.toPathString(e.path),
        t(o, n, e)
    }
}
;
qn.prototype._trace = function(e, t, n, o, a, i, s, l) {
    let u;
    if (!e.length)
        return u = {
            path: n,
            value: t,
            parent: o,
            parentProperty: a,
            hasArrExpr: s
        },
        this._handleCallback(u, i, "value"),
        u;
    const d = e[0]
      , c = e.slice(1)
      , v = [];
    function p(f) {
        Array.isArray(f) ? f.forEach(m => {
            v.push(m)
        }
        ) : v.push(f)
    }
    if ((typeof d != "string" || l) && t && Object.hasOwn(t, d))
        p(this._trace(c, t[d], ti(n, d), t, d, i, s));
    else if (d === "*")
        this._walk(t, f => {
            p(this._trace(c, t[f], ti(n, f), t, f, i, !0, !0))
        }
        );
    else if (d === "..")
        p(this._trace(c, t, n, o, a, i, s)),
        this._walk(t, f => {
            typeof t[f] == "object" && p(this._trace(e.slice(), t[f], ti(n, f), t, f, i, !0))
        }
        );
    else {
        if (d === "^")
            return this._hasParentSelector = !0,
            {
                path: n.slice(0, -1),
                expr: c,
                isParentSelector: !0
            };
        if (d === "~")
            return u = {
                path: ti(n, d),
                value: a,
                parent: o,
                parentProperty: null
            },
            this._handleCallback(u, i, "property"),
            u;
        if (d === "$")
            p(this._trace(c, t, n, null, null, i, s));
        else if (/^(-?\d*):(-?\d*):?(\d*)$/u.test(d))
            p(this._slice(d, c, t, n, o, a, i));
        else if (d.indexOf("?(") === 0) {
            if (this.currEval === !1)
                throw new Error("Eval [?(expr)] prevented in JSONPath expression.");
            const f = d.replace(/^\?\((.*?)\)$/u, "$1")
              , m = /@.?([^?]*)[['](\??\(.*?\))(?!.\)\])[\]']/gu.exec(f);
            m ? this._walk(t, x => {
                const y = [m[2]]
                  , w = m[1] ? t[x][m[1]] : t[x];
                this._trace(y, w, n, o, a, i, !0).length > 0 && p(this._trace(c, t[x], ti(n, x), t, x, i, !0))
            }
            ) : this._walk(t, x => {
                this._eval(f, t[x], x, n, o, a) && p(this._trace(c, t[x], ti(n, x), t, x, i, !0))
            }
            )
        } else if (d[0] === "(") {
            if (this.currEval === !1)
                throw new Error("Eval [(expr)] prevented in JSONPath expression.");
            p(this._trace(_v(this._eval(d, t, n.at(-1), n.slice(0, -1), o, a), c), t, n, o, a, i, s))
        } else if (d[0] === "@") {
            let f = !1;
            const m = d.slice(1, -2);
            switch (m) {
            case "scalar":
                (!t || !["object", "function"].includes(typeof t)) && (f = !0);
                break;
            case "boolean":
            case "string":
            case "undefined":
            case "function":
                typeof t === m && (f = !0);
                break;
            case "integer":
                Number.isFinite(t) && !(t % 1) && (f = !0);
                break;
            case "number":
                Number.isFinite(t) && (f = !0);
                break;
            case "nonFinite":
                typeof t == "number" && !Number.isFinite(t) && (f = !0);
                break;
            case "object":
                t && typeof t === m && (f = !0);
                break;
            case "array":
                Array.isArray(t) && (f = !0);
                break;
            case "other":
                f = this.currOtherTypeCallback(t, n, o, a);
                break;
            case "null":
                t === null && (f = !0);
                break;
            default:
                throw new TypeError("Unknown value type " + m)
            }
            if (f)
                return u = {
                    path: n,
                    value: t,
                    parent: o,
                    parentProperty: a
                },
                this._handleCallback(u, i, "value"),
                u
        } else if (d[0] === "`" && t && Object.hasOwn(t, d.slice(1))) {
            const f = d.slice(1);
            p(this._trace(c, t[f], ti(n, f), t, f, i, s, !0))
        } else if (d.includes(",")) {
            const f = d.split(",");
            for (const m of f)
                p(this._trace(_v(m, c), t, n, o, a, i, !0))
        } else
            !l && t && Object.hasOwn(t, d) && p(this._trace(c, t[d], ti(n, d), t, d, i, s, !0))
    }
    if (this._hasParentSelector)
        for (let f = 0; f < v.length; f++) {
            const m = v[f];
            if (m && m.isParentSelector) {
                const x = this._trace(m.expr, t, m.path, o, a, i, s);
                if (Array.isArray(x)) {
                    v[f] = x[0];
                    const y = x.length;
                    for (let w = 1; w < y; w++)
                        f++,
                        v.splice(f, 0, x[w])
                } else
                    v[f] = x
            }
        }
    return v
}
;
qn.prototype._walk = function(e, t) {
    if (Array.isArray(e)) {
        const n = e.length;
        for (let o = 0; o < n; o++)
            t(o)
    } else
        e && typeof e == "object" && Object.keys(e).forEach(n => {
            t(n)
        }
        )
}
;
qn.prototype._slice = function(e, t, n, o, a, i, s) {
    if (!Array.isArray(n))
        return;
    const l = n.length
      , u = e.split(":")
      , d = u[2] && Number.parseInt(u[2]) || 1;
    let c = u[0] && Number.parseInt(u[0]) || 0
      , v = u[1] && Number.parseInt(u[1]) || l;
    c = c < 0 ? Math.max(0, c + l) : Math.min(l, c),
    v = v < 0 ? Math.max(0, v + l) : Math.min(l, v);
    const p = [];
    for (let f = c; f < v; f += d)
        this._trace(_v(f, t), n, o, a, i, s, !0).forEach(x => {
            p.push(x)
        }
        );
    return p
}
;
qn.prototype._eval = function(e, t, n, o, a, i) {
    this.currSandbox._$_parentProperty = i,
    this.currSandbox._$_parent = a,
    this.currSandbox._$_property = n,
    this.currSandbox._$_root = this.json,
    this.currSandbox._$_v = t;
    const s = e.includes("@path");
    s && (this.currSandbox._$_path = qn.toPathString(o.concat([n])));
    const l = this.currEval + "Script:" + e;
    if (!qn.cache[l]) {
        let u = e.replaceAll("@parentProperty", "_$_parentProperty").replaceAll("@parent", "_$_parent").replaceAll("@property", "_$_property").replaceAll("@root", "_$_root").replaceAll(/@([.\s)[])/gu, "_$_v$1");
        if (s && (u = u.replaceAll("@path", "_$_path")),
        this.currEval === "safe" || this.currEval === !0 || this.currEval === void 0)
            qn.cache[l] = new this.safeVm.Script(u);
        else if (this.currEval === "native")
            qn.cache[l] = new this.vm.Script(u);
        else if (typeof this.currEval == "function" && this.currEval.prototype && Object.hasOwn(this.currEval.prototype, "runInNewContext")) {
            const d = this.currEval;
            qn.cache[l] = new d(u)
        } else if (typeof this.currEval == "function")
            qn.cache[l] = {
                runInNewContext: d => this.currEval(u, d)
            };
        else
            throw new TypeError(`Unknown "eval" property "${this.currEval}"`)
    }
    try {
        return qn.cache[l].runInNewContext(this.currSandbox)
    } catch (u) {
        if (this.ignoreEvalErrors)
            return !1;
        throw new Error("jsonPath: " + u.message + ": " + e)
    }
}
;
qn.cache = {};
qn.toPathString = function(e) {
    const t = e
      , n = t.length;
    let o = "$";
    for (let a = 1; a < n; a++)
        /^(~|\^|@.*?\(\))$/u.test(t[a]) || (o += /^[0-9*]+$/u.test(t[a]) ? "[" + t[a] + "]" : "['" + t[a] + "']");
    return o
}
;
qn.toPointer = function(e) {
    const t = e
      , n = t.length;
    let o = "";
    for (let a = 1; a < n; a++)
        /^(~|\^|@.*?\(\))$/u.test(t[a]) || (o += "/" + t[a].toString().replaceAll("~", "~0").replaceAll("/", "~1"));
    return o
}
;
qn.toPathArray = function(e) {
    const {cache: t} = qn;
    if (t[e])
        return t[e].concat();
    const n = []
      , a = e.replaceAll(/@(?:null|boolean|number|string|integer|undefined|nonFinite|scalar|array|object|function|other)\(\)/gu, ";$&;").replaceAll(/[['](\??\(.*?\))[\]'](?!.\])/gu, function(i, s) {
        return "[#" + (n.push(s) - 1) + "]"
    }).replaceAll(/\[['"]([^'\]]*)['"]\]/gu, function(i, s) {
        return "['" + s.replaceAll(".", "%@%").replaceAll("~", "%%@@%%") + "']"
    }).replaceAll("~", ";~;").replaceAll(/['"]?\.['"]?(?![^[]*\])|\[['"]?/gu, ";").replaceAll("%@%", ".").replaceAll("%%@@%%", "~").replaceAll(/(?:;)?(\^+)(?:;)?/gu, function(i, s) {
        return ";" + s.split("").join(";") + ";"
    }).replaceAll(/;;;|;;/gu, ";..;").replaceAll(/;$|'?\]|'$/gu, "").split(";").map(function(i) {
        const s = i.match(/#(\d+)/u);
        return !s || !s[1] ? i : n[s[1]]
    });
    return t[e] = a,
    t[e].concat()
}
;
qn.prototype.safeVm = {
    Script: EA
};
const RA = function(e, t, n) {
    const o = e.length;
    for (let a = 0; a < o; a++) {
        const i = e[a];
        n(i) && t.push(e.splice(a--, 1)[0])
    }
};
class MA {
    constructor(t) {
        this.code = t
    }
    runInNewContext(t) {
        let n = this.code;
        const o = Object.keys(t)
          , a = [];
        RA(o, a, d => typeof t[d] == "function");
        const i = o.map(d => t[d]);
        n = a.reduce( (d, c) => {
            let v = t[c].toString();
            return /function/u.test(v) || (v = "function " + v),
            "var " + c + "=" + v + ";" + d
        }
        , "") + n,
        !/(['"])use strict\1/u.test(n) && !o.includes("arguments") && (n = "var arguments = undefined;" + n),
        n = n.replace(/;\s*$/u, "");
        const l = n.lastIndexOf(";")
          , u = l !== -1 ? n.slice(0, l + 1) + " return " + n.slice(l + 1) : " return " + n;
        return new Function(...o,u)(...i)
    }
}
qn.prototype.vm = {
    Script: MA
};
var PA = ["mainAxis", "crossAxis", "fallbackPlacements", "fallbackStrategy", "fallbackAxisSideDirection", "flipAlignment"]
  , zA = ["mainAxis", "crossAxis", "limiter"];
function Iy(e, t) {
    if (e == null)
        return {};
    var n, o, a = function(s, l) {
        if (s == null)
            return {};
        var u = {};
        for (var d in s)
            if ({}.hasOwnProperty.call(s, d)) {
                if (l.indexOf(d) !== -1)
                    continue;
                u[d] = s[d]
            }
        return u
    }(e, t);
    if (Object.getOwnPropertySymbols) {
        var i = Object.getOwnPropertySymbols(e);
        for (o = 0; o < i.length; o++)
            n = i[o],
            t.indexOf(n) === -1 && {}.propertyIsEnumerable.call(e, n) && (a[n] = e[n])
    }
    return a
}
function Eh(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        t && (o = o.filter(function(a) {
            return Object.getOwnPropertyDescriptor(e, a).enumerable
        })),
        n.push.apply(n, o)
    }
    return n
}
function ke(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t] != null ? arguments[t] : {};
        t % 2 ? Eh(Object(n), !0).forEach(function(o) {
            Sv(e, o, n[o])
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Eh(Object(n)).forEach(function(o) {
            Object.defineProperty(e, o, Object.getOwnPropertyDescriptor(n, o))
        })
    }
    return e
}
function Ah(e, t, n, o, a, i, s) {
    try {
        var l = e[i](s)
          , u = l.value
    } catch (d) {
        return void n(d)
    }
    l.done ? t(u) : Promise.resolve(u).then(o, a)
}
function wt(e) {
    return function() {
        var t = this
          , n = arguments;
        return new Promise(function(o, a) {
            var i = e.apply(t, n);
            function s(u) {
                Ah(i, o, a, s, l, "next", u)
            }
            function l(u) {
                Ah(i, o, a, s, l, "throw", u)
            }
            s(void 0)
        }
        )
    }
}
function Sv(e, t, n) {
    return (t = function(o) {
        var a = function(i, s) {
            if (typeof i != "object" || !i)
                return i;
            var l = i[Symbol.toPrimitive];
            if (l !== void 0) {
                var u = l.call(i, s);
                if (typeof u != "object")
                    return u;
                throw new TypeError("@@toPrimitive must return a primitive value.")
            }
            return (s === "string" ? String : Number)(i)
        }(o, "string");
        return typeof a == "symbol" ? a : a + ""
    }(t))in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n,
    e
}
var Rh, Id, Mh, Nd;
typeof window < "u" && ((Id = (Rh = (Nd = (Mh = window).__svelte) !== null && Nd !== void 0 ? Nd : Mh.__svelte = {}).v) !== null && Id !== void 0 ? Id : Rh.v = new Set).add("5");
var vl = !1;
vl = !0;
var oo = Symbol()
  , fl = Array.isArray
  , TA = Array.prototype.indexOf
  , Cv = Array.from
  , IA = Object.defineProperty
  , qa = Object.getOwnPropertyDescriptor
  , Ny = Object.getOwnPropertyDescriptors
  , NA = Object.prototype
  , LA = Array.prototype
  , up = Object.getPrototypeOf
  , Ph = Object.isExtensible;
function Ol(e) {
    return typeof e == "function"
}
var zh = () => {}
;
function UA(e) {
    return e()
}
function cc(e) {
    for (var t = 0; t < e.length; t++)
        e[t]()
}
var sd = 32
  , Ly = 64
  , na = 256
  , Ov = 512
  , To = 1024
  , Ws = 2048
  , us = 4096
  , fi = 8192
  , cp = 16384
  , gu = 65536
  , DA = 1 << 17
  , qA = 1 << 19
  , Ev = 1 << 20
  , $A = 1 << 21
  , ka = Symbol("$state")
  , Uy = Symbol("legacy props")
  , FA = Symbol("")
  , Dy = new class extends Error {
    constructor() {
        super(...arguments),
        Sv(this, "name", "StaleReactionError"),
        Sv(this, "message", "The reaction that called `getAbortSignal()` was re-run or destroyed")
    }
}
;
function qy(e) {
    return e === this.v
}
function dp(e, t) {
    return e != e ? t == t : e !== t || e !== null && typeof e == "object" || typeof e == "function"
}
function BA(e, t) {
    return e !== t
}
function $y(e) {
    return !dp(e, this.v)
}
function mu(e) {
    throw new Error("https://svelte.dev/e/lifecycle_outside_component")
}
var Yn = null;
function Th(e) {
    Yn = e
}
function Pi(e) {
    return Fy().get(e)
}
function it(e) {
    Yn = {
        p: Yn,
        c: null,
        e: null,
        s: e,
        x: null,
        l: null
    },
    vl && !(arguments.length > 1 && arguments[1] !== void 0 && arguments[1]) && (Yn.l = {
        s: null,
        u: null,
        r1: [],
        r2: Xi(!1)
    })
}
function st(e) {
    var t = Yn
      , n = t.e;
    if (n !== null)
        for (var o of (t.e = null,
        n))
            Yy(o);
    return e !== void 0 && (t.x = e),
    Yn = t.p,
    e ?? {}
}
function pl() {
    return !vl || Yn !== null && Yn.l === null
}
function Fy(e) {
    var t, n;
    return Yn === null && mu(),
    (n = (t = Yn).c) !== null && n !== void 0 ? n : t.c = new Map(function(o) {
        for (var a = o.p; a !== null; ) {
            var i = a.c;
            if (i !== null)
                return i;
            a = a.p
        }
        return null
    }(Yn) || void 0)
}
function As(e) {
    if (typeof e != "object" || e === null || ka in e)
        return e;
    var t = up(e);
    if (t !== NA && t !== LA)
        return e;
    var n = new Map
      , o = fl(e)
      , a = za(0)
      , i = Wi
      , s = l => {
        if (Wi === i)
            return l();
        var u = yr
          , d = Wi;
        wi(null),
        Uh(i);
        var c = l();
        return wi(u),
        Uh(d),
        c
    }
    ;
    return o && n.set("length", za(e.length)),
    new Proxy(e,{
        defineProperty(l, u, d) {
            "value"in d && d.configurable !== !1 && d.enumerable !== !1 && d.writable !== !1 || function() {
                throw new Error("https://svelte.dev/e/state_descriptors_fixed")
            }();
            var c = n.get(u);
            return c === void 0 ? c = s( () => {
                var v = za(d.value);
                return n.set(u, v),
                v
            }
            ) : h(c, d.value, !0),
            !0
        },
        deleteProperty(l, u) {
            var d = n.get(u);
            if (d === void 0) {
                if (u in l) {
                    var c = s( () => za(oo));
                    n.set(u, c),
                    Ld(a)
                }
            } else {
                if (o && typeof u == "string") {
                    var v = n.get("length")
                      , p = Number(u);
                    Number.isInteger(p) && p < v.v && h(v, p)
                }
                h(d, oo),
                Ld(a)
            }
            return !0
        },
        get(l, u, d) {
            var c;
            if (u === ka)
                return e;
            var v = n.get(u)
              , p = u in l;
            if (v === void 0 && (!p || (c = qa(l, u)) !== null && c !== void 0 && c.writable) && (v = s( () => za(As(p ? l[u] : oo))),
            n.set(u, v)),
            v !== void 0) {
                var f = r(v);
                return f === oo ? void 0 : f
            }
            return Reflect.get(l, u, d)
        },
        getOwnPropertyDescriptor(l, u) {
            var d = Reflect.getOwnPropertyDescriptor(l, u);
            if (d && "value"in d) {
                var c = n.get(u);
                c && (d.value = r(c))
            } else if (d === void 0) {
                var v = n.get(u)
                  , p = v?.v;
                if (v !== void 0 && p !== oo)
                    return {
                        enumerable: !0,
                        configurable: !0,
                        value: p,
                        writable: !0
                    }
            }
            return d
        },
        has(l, u) {
            var d;
            if (u === ka)
                return !0;
            var c = n.get(u)
              , v = c !== void 0 && c.v !== oo || Reflect.has(l, u);
            return (c !== void 0 || Xn !== null && (!v || (d = qa(l, u)) !== null && d !== void 0 && d.writable)) && (c === void 0 && (c = s( () => za(v ? As(l[u]) : oo)),
            n.set(u, c)),
            r(c) === oo) ? !1 : v
        },
        set(l, u, d, c) {
            var v, p = n.get(u), f = u in l;
            if (o && u === "length")
                for (var m = d; m < p.v; m += 1) {
                    var x = n.get(m + "");
                    x !== void 0 ? h(x, oo) : m in l && (x = s( () => za(oo)),
                    n.set(m + "", x))
                }
            p === void 0 ? (!f || (v = qa(l, u)) !== null && v !== void 0 && v.writable) && (h(p = s( () => za(void 0)), As(d)),
            n.set(u, p)) : (f = p.v !== oo,
            h(p, s( () => As(d))));
            var y = Reflect.getOwnPropertyDescriptor(l, u);
            if (y != null && y.set && y.set.call(c, d),
            !f) {
                if (o && typeof u == "string") {
                    var w = n.get("length")
                      , S = Number(u);
                    Number.isInteger(S) && S >= w.v && h(w, S + 1)
                }
                Ld(a)
            }
            return !0
        },
        ownKeys(l) {
            r(a);
            var u = Reflect.ownKeys(l).filter(v => {
                var p = n.get(v);
                return p === void 0 || p.v !== oo
            }
            );
            for (var [d,c] of n)
                c.v === oo || d in l || u.push(d);
            return u
        },
        setPrototypeOf() {
            (function() {
                throw new Error("https://svelte.dev/e/state_prototype_fixed")
            }
            )()
        }
    })
}
function Ih(e) {
    try {
        if (e !== null && typeof e == "object" && ka in e)
            return e[ka]
    } catch {}
    return e
}
function WA(e, t) {
    return Object.is(Ih(e), Ih(t))
}
function hl(e) {
    var t = 2050
      , n = yr !== null && 2 & yr.f ? yr : null;
    return Xn === null || n !== null && (n.f & na) !== 0 ? t |= na : Xn.f |= qA,
    {
        ctx: Yn,
        deps: null,
        effects: null,
        equals: qy,
        f: t,
        fn: e,
        reactions: null,
        rv: 0,
        v: oo,
        wv: 0,
        parent: n ?? Xn,
        ac: null
    }
}
function mo(e) {
    var t = hl(e);
    return aw(t),
    t
}
function pe(e) {
    var t = hl(e);
    return t.equals = $y,
    t
}
function By(e) {
    var t = e.effects;
    if (t !== null) {
        e.effects = null;
        for (var n = 0; n < t.length; n += 1)
            Ho(t[n])
    }
}
function vp(e) {
    var t, n = Xn;
    ki(function(o) {
        for (var a = o.parent; a !== null; ) {
            if (!(2 & a.f))
                return a;
            a = a.parent
        }
        return null
    }(e));
    try {
        By(e),
        t = lw(e)
    } finally {
        ki(n)
    }
    return t
}
function Wy(e) {
    var t = vp(e);
    e.equals(t) || (e.v = t,
    e.wv = iw()),
    yi || ca(e, !li && (e.f & na) === 0 || e.deps === null ? To : us)
}
var Fi = new Map;
function Xi(e, t) {
    return {
        f: 0,
        v: e,
        reactions: null,
        equals: qy,
        rv: 0,
        wv: 0
    }
}
function za(e, t) {
    var n = Xi(e);
    return aw(n),
    n
}
function T(e) {
    var t, n, o = arguments.length > 1 && arguments[1] !== void 0 && arguments[1], a = !(arguments.length > 2 && arguments[2] !== void 0) || arguments[2], i = Xi(e);
    return o || (i.equals = $y),
    vl && a && Yn !== null && Yn.l !== null && ((n = (t = Yn.l).s) !== null && n !== void 0 ? n : t.s = []).push(i),
    i
}
function Oo(e, t) {
    return h(e, N( () => r(e))),
    t
}
function h(e, t) {
    var n, o = arguments.length > 2 && arguments[2] !== void 0 && arguments[2];
    return yr === null || xa && (yr.f & DA) === 0 || !pl() || !(131090 & yr.f) || (n = Fa) !== null && n !== void 0 && n.includes(e) || function() {
        throw new Error("https://svelte.dev/e/state_unsafe_mutation")
    }(),
    dc(e, o ? As(t) : t)
}
function dc(e, t) {
    if (!e.equals(t)) {
        var n = e.v;
        yi ? Fi.set(e, t) : Fi.set(e, n),
        e.v = t,
        2 & e.f && ((e.f & Ws) !== 0 && vp(e),
        ca(e, (e.f & na) === 0 ? To : us)),
        e.wv = iw(),
        Hy(e, Ws),
        !pl() || Xn === null || (Xn.f & To) === 0 || 96 & Xn.f || (No === null ? function(o) {
            No = o
        }([e]) : No.push(e))
    }
    return t
}
function Nh(e) {
    var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1
      , n = r(e)
      , o = t === 1 ? n++ : n--;
    return h(e, n),
    o
}
function Ld(e) {
    h(e, e.v + 1)
}
function Hy(e, t) {
    var n = e.reactions;
    if (n !== null)
        for (var o = pl(), a = n.length, i = 0; i < a; i++) {
            var s = n[i]
              , l = s.f;
            (l & Ws) === 0 && (o || s !== Xn) && (ca(s, t),
            1280 & l && (2 & l ? Hy(s, us) : vd(s)))
        }
}
var $a, Vy, Gy, Jy;
function ld() {
    var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "";
    return document.createTextNode(e)
}
function Eo(e) {
    return Gy.call(e)
}
function ud(e) {
    return Jy.call(e)
}
function z(e, t) {
    return Eo(e)
}
function ht(e, t) {
    var n = Eo(e);
    return n instanceof Comment && n.data === "" ? ud(n) : n
}
function B(e) {
    for (var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1, n = e; t--; )
        n = ud(n);
    return n
}
function Ky(e) {
    Xn === null && yr === null && function() {
        throw new Error("https://svelte.dev/e/effect_orphan")
    }(),
    yr !== null && (yr.f & na) !== 0 && Xn === null && function() {
        throw new Error("https://svelte.dev/e/effect_in_unowned_derived")
    }(),
    yi && function() {
        throw new Error("https://svelte.dev/e/effect_in_teardown")
    }()
}
function zi(e, t, n) {
    var o = !(arguments.length > 3 && arguments[3] !== void 0) || arguments[3]
      , a = Xn
      , i = {
        ctx: Yn,
        deps: null,
        nodes_start: null,
        nodes_end: null,
        f: e | Ws,
        first: null,
        fn: t,
        last: null,
        next: null,
        parent: a,
        b: a && a.b,
        prev: null,
        teardown: null,
        transitions: null,
        wv: 0,
        ac: null
    };
    if (n)
        try {
            dd(i),
            i.f |= 32768
        } catch (u) {
            throw Ho(i),
            u
        }
    else
        t !== null && vd(i);
    if (!(n && i.deps === null && i.first === null && i.nodes_start === null && i.teardown === null && !(524416 & i.f)) && o && (a !== null && function(u, d) {
        var c = d.last;
        c === null ? d.last = d.first = u : (c.next = u,
        u.prev = c,
        d.last = u)
    }(i, a),
    yr !== null && 2 & yr.f)) {
        var s, l = yr;
        ((s = l.effects) !== null && s !== void 0 ? s : l.effects = []).push(i)
    }
    return i
}
function fp(e) {
    var t = zi(8, null, !1);
    return ca(t, To),
    t.teardown = e,
    t
}
function Av(e) {
    if (Ky(),
    yr || !Xn || (Xn.f & sd) === 0)
        return Yy(e);
    var t, n = Yn;
    ((t = n.e) !== null && t !== void 0 ? t : n.e = []).push(e)
}
function Yy(e) {
    return zi(2097156, e, !1)
}
function Gr(e) {
    return zi(4, e, !1)
}
function V(e, t) {
    var n = Yn
      , o = {
        effect: null,
        ran: !1
    };
    n.l.r1.push(o),
    o.effect = bu( () => {
        e(),
        o.ran || (o.ran = !0,
        h(n.l.r2, !0),
        N(t))
    }
    )
}
function An() {
    var e = Yn;
    bu( () => {
        if (r(e.l.r2)) {
            for (var t of e.l.r1) {
                var n = t.effect;
                (n.f & To) !== 0 && ca(n, us),
                xu(n) && dd(n),
                t.ran = !1
            }
            e.l.r2.v = !1
        }
    }
    )
}
function bu(e) {
    return zi(8, e, !0)
}
function Ee(e) {
    var t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : hl
      , n = (arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : []).map(t);
    return Ti( () => e(...n.map(r)))
}
function Ti(e) {
    return zi(24 | (arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0), e, !0)
}
function Oa(e) {
    return zi(40, e, !0, !(arguments.length > 1 && arguments[1] !== void 0) || arguments[1])
}
function Xy(e) {
    var t = e.teardown;
    if (t !== null) {
        var n = yi
          , o = yr;
        Lh(!0),
        wi(null);
        try {
            t.call(null)
        } finally {
            Lh(n),
            wi(o)
        }
    }
}
function Qy(e) {
    var t = arguments.length > 1 && arguments[1] !== void 0 && arguments[1]
      , n = e.first;
    for (e.first = e.last = null; n !== null; ) {
        var o;
        (o = n.ac) === null || o === void 0 || o.abort(Dy);
        var a = n.next;
        (n.f & Ly) !== 0 ? n.parent = null : Ho(n, t),
        n = a
    }
}
function Ho(e) {
    var t = !(arguments.length > 1 && arguments[1] !== void 0) || arguments[1]
      , n = !1;
    (t || 262144 & e.f) && e.nodes_start !== null && e.nodes_end !== null && (Zy(e.nodes_start, e.nodes_end),
    n = !0),
    Qy(e, t && !n),
    pc(e, 0),
    ca(e, cp);
    var o = e.transitions;
    if (o !== null)
        for (var a of o)
            a.stop();
    Xy(e);
    var i = e.parent;
    i !== null && i.first !== null && ew(e),
    e.next = e.prev = e.teardown = e.ctx = e.deps = e.fn = e.nodes_start = e.nodes_end = e.ac = null
}
function Zy(e, t) {
    for (; e !== null; ) {
        var n = e === t ? null : ud(e);
        e.remove(),
        e = n
    }
}
function ew(e) {
    var t = e.parent
      , n = e.prev
      , o = e.next;
    n !== null && (n.next = o),
    o !== null && (o.prev = n),
    t !== null && (t.first === e && (t.first = o),
    t.last === e && (t.last = n))
}
function Hs(e, t) {
    var n = [];
    pp(e, n, !0),
    tw(n, () => {
        Ho(e),
        t && t()
    }
    )
}
function tw(e, t) {
    var n = e.length;
    if (n > 0) {
        var o = () => --n || t();
        for (var a of e)
            a.out(o)
    } else
        t()
}
function pp(e, t, n) {
    if ((e.f & fi) === 0) {
        if (e.f ^= fi,
        e.transitions !== null)
            for (var o of e.transitions)
                (o.is_global || n) && t.push(o);
        for (var a = e.first; a !== null; ) {
            var i = a.next;
            pp(a, t, ((a.f & gu) !== 0 || (a.f & sd) !== 0) && n),
            a = i
        }
    }
}
function vc(e) {
    nw(e, !0)
}
function nw(e, t) {
    if ((e.f & fi) !== 0) {
        e.f ^= fi;
        for (var n = e.first; n !== null; ) {
            var o = n.next;
            nw(n, ((n.f & gu) !== 0 || (n.f & sd) !== 0) && t),
            n = o
        }
        if (e.transitions !== null)
            for (var a of e.transitions)
                (a.is_global || t) && a.in()
    }
}
var Wl = []
  , Ud = [];
function rw() {
    var e = Wl;
    Wl = [],
    cc(e)
}
function cd(e) {
    Wl.length === 0 && queueMicrotask(rw),
    Wl.push(e)
}
function HA() {
    var e;
    Wl.length > 0 && rw(),
    Ud.length > 0 && (e = Ud,
    Ud = [],
    cc(e))
}
function ow(e, t) {
    for (; t !== null; ) {
        if (128 & t.f)
            try {
                return void t.b.error(e)
            } catch {}
        t = t.parent
    }
    throw e
}
var Hl = !1
  , Vl = null
  , Bi = !1
  , yi = !1;
function Lh(e) {
    yi = e
}
var Ll = []
  , yr = null
  , xa = !1;
function wi(e) {
    yr = e
}
var Xn = null;
function ki(e) {
    Xn = e
}
var Fa = null;
function aw(e) {
    yr !== null && yr.f & Ev && (Fa === null ? Fa = [e] : Fa.push(e))
}
var co = null
  , So = 0
  , No = null
  , fc = 1
  , Gl = 0
  , Wi = Gl;
function Uh(e) {
    Wi = e
}
var li = !1
  , Rs = null;
function iw() {
    return ++fc
}
function xu(e) {
    var t = e.f;
    if ((t & Ws) !== 0)
        return !0;
    if ((t & us) !== 0) {
        var n = e.deps
          , o = (t & na) !== 0;
        if (n !== null) {
            var a, i, s = (t & Ov) !== 0, l = o && Xn !== null && !li, u = n.length;
            if (s || l) {
                var d = e
                  , c = d.parent;
                for (a = 0; a < u; a++) {
                    var v, p, f;
                    i = n[a],
                    (s || (v = i) === null || v === void 0 || (v = v.reactions) === null || v === void 0 || !v.includes(d)) && ((f = (p = i).reactions) !== null && f !== void 0 ? f : p.reactions = []).push(d)
                }
                s && (d.f ^= Ov),
                l && c !== null && (c.f & na) === 0 && (d.f ^= na)
            }
            for (a = 0; a < u; a++)
                if (xu(i = n[a]) && Wy(i),
                i.wv > e.wv)
                    return !0
        }
        o && (Xn === null || li) || ca(e, To)
    }
    return !1
}
function sw(e, t) {
    var n, o = !(arguments.length > 2 && arguments[2] !== void 0) || arguments[2], a = e.reactions;
    if (a !== null && ((n = Fa) === null || n === void 0 || !n.includes(e)))
        for (var i = 0; i < a.length; i++) {
            var s = a[i];
            2 & s.f ? sw(s, t, !1) : t === s && (o ? ca(s, Ws) : (s.f & To) !== 0 && ca(s, us),
            vd(s))
        }
}
function lw(e) {
    var t = co
      , n = So
      , o = No
      , a = yr
      , i = li
      , s = Fa
      , l = Yn
      , u = xa
      , d = Wi
      , c = e.f;
    co = null,
    So = 0,
    No = null,
    li = (c & na) !== 0 && (xa || !Bi || yr === null),
    yr = 96 & c ? null : e,
    Fa = null,
    Th(e.ctx),
    xa = !1,
    Wi = ++Gl,
    e.f |= Ev,
    e.ac !== null && (e.ac.abort(Dy),
    e.ac = null);
    try {
        var v = (0,
        e.fn)()
          , p = e.deps;
        if (co !== null) {
            var f;
            if (pc(e, So),
            p !== null && So > 0)
                for (p.length = So + co.length,
                f = 0; f < co.length; f++)
                    p[So + f] = co[f];
            else
                e.deps = p = co;
            if (!li || 2 & c && e.reactions !== null)
                for (f = So; f < p.length; f++) {
                    var m, x;
                    ((x = (m = p[f]).reactions) !== null && x !== void 0 ? x : m.reactions = []).push(e)
                }
        } else
            p !== null && So < p.length && (pc(e, So),
            p.length = So);
        if (pl() && No !== null && !xa && p !== null && !(6146 & e.f))
            for (f = 0; f < No.length; f++)
                sw(No[f], e);
        return a !== null && a !== e && (Gl++,
        No !== null && (o === null ? o = No : o.push(...No))),
        v
    } catch (y) {
        (function(w) {
            var S = Xn;
            if (32768 & S.f)
                ow(w, S);
            else {
                if (!(128 & S.f))
                    throw w;
                S.fn(w)
            }
        }
        )(y)
    } finally {
        co = t,
        So = n,
        No = o,
        yr = a,
        li = i,
        Fa = s,
        Th(l),
        xa = u,
        Wi = d,
        e.f ^= Ev
    }
}
function VA(e, t) {
    var n = t.reactions;
    if (n !== null) {
        var o = TA.call(n, e);
        if (o !== -1) {
            var a = n.length - 1;
            a === 0 ? n = t.reactions = null : (n[o] = n[a],
            n.pop())
        }
    }
    n === null && 2 & t.f && (co === null || !co.includes(t)) && (ca(t, us),
    768 & t.f || (t.f ^= Ov),
    By(t),
    pc(t, 0))
}
function pc(e, t) {
    var n = e.deps;
    if (n !== null)
        for (var o = t; o < n.length; o++)
            VA(e, n[o])
}
function dd(e) {
    var t = e.f;
    if ((t & cp) === 0) {
        ca(e, To);
        var n = Xn
          , o = Bi;
        Xn = e,
        Bi = !0;
        try {
            16 & t ? function(i) {
                for (var s = i.first; s !== null; ) {
                    var l = s.next;
                    (s.f & sd) === 0 && Ho(s),
                    s = l
                }
            }(e) : Qy(e),
            Xy(e);
            var a = lw(e);
            e.teardown = typeof a == "function" ? a : null,
            e.wv = fc
        } finally {
            Bi = o,
            Xn = n
        }
    }
}
function GA() {
    try {
        (function() {
            throw new Error("https://svelte.dev/e/effect_update_depth_exceeded")
        }
        )()
    } catch (e) {
        if (Vl === null)
            throw e;
        ow(e, Vl)
    }
}
function uw() {
    var e = Bi;
    try {
        var t = 0;
        for (Bi = !0; Ll.length > 0; ) {
            t++ > 1e3 && GA();
            var n = Ll
              , o = n.length;
            Ll = [];
            for (var a = 0; a < o; a++)
                JA(KA(n[a]));
            Fi.clear()
        }
    } finally {
        Hl = !1,
        Bi = e,
        Vl = null
    }
}
function JA(e) {
    var t = e.length;
    if (t !== 0) {
        for (var n = 0; n < t; n++) {
            var o = e[n];
            if (!(24576 & o.f) && xu(o)) {
                var a = fc;
                if (dd(o),
                o.deps === null && o.first === null && o.nodes_start === null && (o.teardown === null ? ew(o) : o.fn = null),
                fc > a && (o.f & $A) !== 0)
                    break
            }
        }
        for (; n < t; n += 1)
            vd(e[n])
    }
}
function vd(e) {
    Hl || (Hl = !0,
    queueMicrotask(uw));
    for (var t = Vl = e; t.parent !== null; ) {
        var n = (t = t.parent).f;
        if (96 & n) {
            if ((n & To) === 0)
                return;
            t.f ^= To
        }
    }
    Ll.push(t)
}
function KA(e) {
    for (var t = [], n = e; n !== null; ) {
        var o = n.f
          , a = !!(96 & o);
        if (!(a && (o & To) !== 0) && (o & fi) === 0) {
            4 & o ? t.push(n) : a ? n.f ^= To : xu(n) && dd(n);
            var i = n.first;
            if (i !== null) {
                n = i;
                continue
            }
        }
        var s = n.parent;
        for (n = n.next; n === null && s !== null; )
            n = s.next,
            s = s.parent
    }
    return t
}
function tr(e) {
    for (; ; ) {
        if (HA(),
        Ll.length === 0)
            return Hl = !1,
            void (Vl = null);
        Hl = !0,
        uw()
    }
}
function cw() {
    return (cw = wt(function*() {
        yield Promise.resolve(),
        tr()
    })).apply(this, arguments)
}
function r(e) {
    var t, n = !!(2 & e.f);
    if (Rs !== null && Rs.add(e),
    yr === null || xa) {
        if (n && e.deps === null && e.effects === null) {
            var o = e
              , a = o.parent;
            a !== null && (a.f & na) === 0 && (o.f ^= na)
        }
    } else if ((t = Fa) === null || t === void 0 || !t.includes(e)) {
        var i = yr.deps;
        e.rv < Gl && (e.rv = Gl,
        co === null && i !== null && i[So] === e ? So++ : co === null ? co = [e] : li && co.includes(e) || co.push(e))
    }
    if (n && !yi && xu(o = e) && Wy(o),
    yi) {
        if (Fi.has(e))
            return Fi.get(e);
        if (n) {
            var s = (o = e).v;
            return ((o.f & To) !== 0 || dw(o)) && (s = vp(o)),
            Fi.set(o, s),
            s
        }
    }
    return e.v
}
function dw(e) {
    if (e.v === oo)
        return !0;
    if (e.deps === null)
        return !1;
    for (var t of e.deps)
        if (Fi.has(t) || 2 & t.f && dw(t))
            return !0;
    return !1
}
function YA(e) {
    var t = function(o) {
        var a, i = Rs, s = Rs = new Set;
        try {
            if (N(o),
            i !== null)
                for (a of Rs)
                    i.add(a)
        } finally {
            Rs = i
        }
        return s
    }( () => N(e));
    for (var n of t)
        dc(n, n.v)
}
function N(e) {
    var t = xa;
    try {
        return xa = !0,
        e()
    } finally {
        xa = t
    }
}
var XA = -7169;
function ca(e, t) {
    e.f = e.f & XA | t
}
function b(e) {
    if (typeof e == "object" && e && !(e instanceof EventTarget)) {
        if (ka in e)
            Rv(e);
        else if (!Array.isArray(e))
            for (var t in e) {
                var n = e[t];
                typeof n == "object" && n && ka in n && Rv(n)
            }
    }
}
function Rv(e) {
    var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : new Set;
    if (!(typeof e != "object" || e === null || e instanceof EventTarget || t.has(e))) {
        for (var n in t.add(e),
        e instanceof Date && e.getTime(),
        e)
            try {
                Rv(e[n], t)
            } catch {}
        var o = up(e);
        if (o !== Object.prototype && o !== Array.prototype && o !== Map.prototype && o !== Set.prototype && o !== Date.prototype) {
            var a = Ny(o);
            for (var i in a) {
                var s = a[i].get;
                if (s)
                    try {
                        s.call(e)
                    } catch {}
            }
        }
    }
}
var Dh = !1;
function vw(e) {
    var t = yr
      , n = Xn;
    wi(null),
    ki(null);
    try {
        return e()
    } finally {
        wi(t),
        ki(n)
    }
}
function fw(e, t, n) {
    var o = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : n;
    e.addEventListener(t, () => vw(n));
    var a = e.__on_r;
    e.__on_r = a ? () => {
        a(),
        o(!0)
    }
    : () => o(!0),
    Dh || (Dh = !0,
    document.addEventListener("reset", i => {
        Promise.resolve().then( () => {
            if (!i.defaultPrevented)
                for (var s of i.target.elements) {
                    var l;
                    (l = s.__on_r) === null || l === void 0 || l.call(s)
                }
        }
        )
    }
    , {
        capture: !0
    }))
}
var pw = new Set
  , Mv = new Set;
function hw(e, t, n) {
    var o = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
    function a(i) {
        if (o.capture || zl.call(t, i),
        !i.cancelBubble)
            return vw( () => n?.call(this, i))
    }
    return e.startsWith("pointer") || e.startsWith("touch") || e === "wheel" ? cd( () => {
        t.addEventListener(e, a, o)
    }
    ) : t.addEventListener(e, a, o),
    a
}
function me(e, t, n, o, a) {
    var i = {
        capture: o,
        passive: a
    }
      , s = hw(e, t, n, i);
    (t === document.body || t === window || t === document || t instanceof HTMLMediaElement) && fp( () => {
        t.removeEventListener(e, s, i)
    }
    )
}
function ju(e) {
    for (var t = 0; t < e.length; t++)
        pw.add(e[t]);
    for (var n of Mv)
        n(e)
}
function zl(e) {
    var t, n = this, o = n.ownerDocument, a = e.type, i = ((t = e.composedPath) === null || t === void 0 ? void 0 : t.call(e)) || [], s = i[0] || e.target, l = 0, u = e.__root;
    if (u) {
        var d = i.indexOf(u);
        if (d !== -1 && (n === document || n === window))
            return void (e.__root = n);
        var c = i.indexOf(n);
        if (c === -1)
            return;
        d <= c && (l = d)
    }
    if ((s = i[l] || e.target) !== n) {
        IA(e, "currentTarget", {
            configurable: !0,
            get: () => s || o
        });
        var v = yr
          , p = Xn;
        wi(null),
        ki(null);
        try {
            for (var f, m = []; s !== null; ) {
                var x = s.assignedSlot || s.parentNode || s.host || null;
                try {
                    var y = s["__" + a];
                    if (y != null && (!s.disabled || e.target === s))
                        if (fl(y)) {
                            var [w,...S] = y;
                            w.apply(s, [e, ...S])
                        } else
                            y.call(s, e)
                } catch (k) {
                    f ? m.push(k) : f = k
                }
                if (e.cancelBubble || x === n || x === null)
                    break;
                s = x
            }
            if (f) {
                var P = function(k) {
                    queueMicrotask( () => {
                        throw k
                    }
                    )
                };
                for (var R of m)
                    P(R);
                throw f
            }
        } finally {
            e.__root = n,
            delete e.currentTarget,
            wi(v),
            ki(p)
        }
    }
}
function hp(e) {
    var t = document.createElement("template");
    return t.innerHTML = e.replaceAll("<!>", "<!---->"),
    t.content
}
function Qi(e, t) {
    var n = Xn;
    n.nodes_start === null && (n.nodes_start = e,
    n.nodes_end = t)
}
function K(e, t) {
    var n, o = !!(1 & t), a = !!(2 & t), i = !e.startsWith("<!>");
    return () => {
        n === void 0 && (n = hp(i ? e : "<!>" + e),
        o || (n = Eo(n)));
        var s = a || Vy ? document.importNode(n, !0) : n.cloneNode(!0);
        return o ? Qi(Eo(s), s.lastChild) : Qi(s, s),
        s
    }
}
function Ii(e, t) {
    return function(n, o) {
        var a, i = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "svg", s = !n.startsWith("<!>"), l = !!(1 & o), u = "<".concat(i, ">").concat(s ? n : "<!>" + n, "</").concat(i, ">");
        return () => {
            if (!a) {
                var d = Eo(hp(u));
                if (l)
                    for (a = document.createDocumentFragment(); Eo(d); )
                        a.appendChild(Eo(d));
                else
                    a = Eo(d)
            }
            var c = a.cloneNode(!0);
            return l ? Qi(Eo(c), c.lastChild) : Qi(c, c),
            c
        }
    }(e, t, "svg")
}
function Jr() {
    var e = ld((arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "") + "");
    return Qi(e, e),
    e
}
function jr() {
    var e = document.createDocumentFragment()
      , t = document.createComment("")
      , n = ld();
    return e.append(t, n),
    Qi(t, n),
    e
}
function L(e, t) {
    e !== null && e.before(t)
}
var QA = ["beforeinput", "click", "change", "dblclick", "contextmenu", "focusin", "focusout", "input", "keydown", "keyup", "mousedown", "mousemove", "mouseout", "mouseover", "mouseup", "pointerdown", "pointermove", "pointerout", "pointerover", "pointerup", "touchend", "touchmove", "touchstart"]
  , ZA = {
    formnovalidate: "formNoValidate",
    ismap: "isMap",
    nomodule: "noModule",
    playsinline: "playsInline",
    readonly: "readOnly",
    defaultvalue: "defaultValue",
    defaultchecked: "defaultChecked",
    srcobject: "srcObject",
    novalidate: "noValidate",
    allowfullscreen: "allowFullscreen",
    disablepictureinpicture: "disablePictureInPicture",
    disableremoteplayback: "disableRemotePlayback"
}
  , eR = ["touchstart", "touchmove"];
function tR(e) {
    return eR.includes(e)
}
function lt(e, t) {
    var n, o = t == null ? "" : typeof t == "object" ? t + "" : t;
    o !== ((n = e.__t) !== null && n !== void 0 ? n : e.__t = e.nodeValue) && (e.__t = o,
    e.nodeValue = o + "")
}
function nR(e, t) {
    return function(n, o) {
        var {target: a, anchor: i, props: s={}, events: l, context: u} = o;
        (function() {
            if ($a === void 0) {
                $a = window,
                Vy = /Firefox/.test(navigator.userAgent);
                var f = Element.prototype
                  , m = Node.prototype
                  , x = Text.prototype;
                Gy = qa(m, "firstChild").get,
                Jy = qa(m, "nextSibling").get,
                Ph(f) && (f.__click = void 0,
                f.__className = void 0,
                f.__attributes = null,
                f.__style = void 0,
                f.__e = void 0),
                Ph(x) && (x.__t = void 0)
            }
        }
        )();
        var d = new Set
          , c = f => {
            for (var m = 0; m < f.length; m++) {
                var x = f[m];
                if (!d.has(x)) {
                    d.add(x);
                    var y = tR(x);
                    a.addEventListener(x, zl, {
                        passive: y
                    });
                    var w = gs.get(x);
                    w === void 0 ? (document.addEventListener(x, zl, {
                        passive: y
                    }),
                    gs.set(x, 1)) : gs.set(x, w + 1)
                }
            }
        }
        ;
        c(Cv(pw)),
        Mv.add(c);
        var v = void 0
          , p = function(f) {
            var m = zi(Ly, f, !0);
            return function() {
                var x = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
                return new Promise(y => {
                    x.outro ? Hs(m, () => {
                        Ho(m),
                        y(void 0)
                    }
                    ) : (Ho(m),
                    y(void 0))
                }
                )
            }
        }( () => {
            var f = i ?? a.appendChild(ld());
            return Oa( () => {
                u && (it({}),
                Yn.c = u),
                l && (s.$$events = l),
                v = n(f, s) || {},
                u && st()
            }
            ),
            () => {
                for (var m of d) {
                    a.removeEventListener(m, zl);
                    var x = gs.get(m);
                    --x === 0 ? (document.removeEventListener(m, zl),
                    gs.delete(m)) : gs.set(m, x)
                }
                var y;
                Mv.delete(c),
                f !== i && ((y = f.parentNode) === null || y === void 0 || y.removeChild(f))
            }
        }
        );
        return Pv.set(v, p),
        v
    }(e, t)
}
var gs = new Map
  , Pv = new WeakMap;
function ao(e) {
    Yn === null && mu(),
    vl && Yn.l !== null ? gw(Yn).m.push(e) : Av( () => {
        var t = N(e);
        if (typeof t == "function")
            return t
    }
    )
}
function Vo(e) {
    Yn === null && mu(),
    ao( () => () => N(e))
}
function rR() {
    var e = Yn;
    return e === null && mu(),
    (t, n, o) => {
        var a, i = (a = e.s.$$events) === null || a === void 0 ? void 0 : a[t];
        if (i) {
            var s = fl(i) ? i.slice() : [i]
              , l = function(d, c) {
                var {bubbles: v=!1, cancelable: p=!1} = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
                return new CustomEvent(d,{
                    detail: c,
                    bubbles: v,
                    cancelable: p
                })
            }(t, n, o);
            for (var u of s)
                u.call(e.x, l);
            return !l.defaultPrevented
        }
        return !0
    }
}
function oR(e) {
    Yn === null && mu(),
    Yn.l === null && function() {
        throw new Error("https://svelte.dev/e/lifecycle_legacy_only")
    }(),
    gw(Yn).b.push(e)
}
function gw(e) {
    var t, n = e.l;
    return (t = n.u) !== null && t !== void 0 ? t : n.u = {
        a: [],
        b: [],
        m: []
    }
}
function ie(e, t) {
    var [n,o] = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : [0, 0]
      , a = e
      , i = null
      , s = null
      , l = oo
      , u = !1
      , d = function(v) {
        u = !0,
        c(!(arguments.length > 1 && arguments[1] !== void 0) || arguments[1], v)
    }
      , c = (v, p) => {
        l !== (l = v) && (l ? (i ? vc(i) : p && (i = Oa( () => p(a))),
        s && Hs(s, () => {
            s = null
        }
        )) : (s ? vc(s) : p && (s = Oa( () => p(a, [n + 1, o]))),
        i && Hs(i, () => {
            i = null
        }
        )))
    }
    ;
    Ti( () => {
        u = !1,
        t(d),
        u || c(null, null)
    }
    , n > 0 ? gu : 0)
}
function mw(e, t, n) {
    var o, a = e, i = oo, s = pl() ? BA : dp;
    Ti( () => {
        s(i, i = t()) && (o && Hs(o),
        o = Oa( () => n(a)))
    }
    )
}
function Rr(e, t) {
    return t
}
function wr(e, t, n, o, a) {
    var i = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : null
      , s = e
      , l = {
        flags: t,
        items: new Map,
        first: null
    };
    !(4 & t) || (s = e.appendChild(ld()));
    var u = null
      , d = !1
      , c = pe( () => {
        var v = n();
        return fl(v) ? v : v == null ? [] : Cv(v)
    }
    );
    Ti( () => {
        var v = r(c)
          , p = v.length;
        d && p === 0 || (d = p === 0,
        function(f, m, x, y, w, S, P) {
            var R, k, I, H, Y, M, Z = !!(8 & w), ae = !!(3 & w), ee = f.length, se = m.items, _e = m.first, fe = _e, Oe = null, De = [], Ne = [];
            if (Z)
                for (M = 0; M < ee; M += 1) {
                    var je;
                    H = S(I = f[M], M),
                    (Y = se.get(H)) !== void 0 && ((je = Y.a) === null || je === void 0 || je.measure(),
                    (k ?? (k = new Set)).add(Y))
                }
            for (M = 0; M < ee; M += 1)
                if (H = S(I = f[M], M),
                (Y = se.get(H)) !== void 0) {
                    var Ae;
                    if (ae && aR(Y, I, M, w),
                    (Y.e.f & fi) !== 0 && (vc(Y.e),
                    Z && ((Ae = Y.a) === null || Ae === void 0 || Ae.unfix(),
                    (k ?? (k = new Set)).delete(Y))),
                    Y !== fe) {
                        if (R !== void 0 && R.has(Y)) {
                            if (De.length < Ne.length) {
                                var Pe, Ve = Ne[0];
                                Oe = Ve.prev;
                                var ge = De[0]
                                  , de = De[De.length - 1];
                                for (Pe = 0; Pe < De.length; Pe += 1)
                                    qh(De[Pe], Ve, x);
                                for (Pe = 0; Pe < Ne.length; Pe += 1)
                                    R.delete(Ne[Pe]);
                                ni(m, ge.prev, de.next),
                                ni(m, Oe, ge),
                                ni(m, de, Ve),
                                fe = Ve,
                                Oe = de,
                                M -= 1,
                                De = [],
                                Ne = []
                            } else
                                R.delete(Y),
                                qh(Y, fe, x),
                                ni(m, Y.prev, Y.next),
                                ni(m, Y, Oe === null ? m.first : Oe.next),
                                ni(m, Oe, Y),
                                Oe = Y;
                            continue
                        }
                        for (De = [],
                        Ne = []; fe !== null && fe.k !== H; )
                            (fe.e.f & fi) === 0 && (R ?? (R = new Set)).add(fe),
                            Ne.push(fe),
                            fe = fe.next;
                        if (fe === null)
                            continue;
                        Y = fe
                    }
                    De.push(Y),
                    Oe = Y,
                    fe = Y.next
                } else
                    Oe = iR(fe ? fe.e.nodes_start : x, m, Oe, Oe === null ? m.first : Oe.next, I, H, M, y, w, P),
                    se.set(H, Oe),
                    De = [],
                    Ne = [],
                    fe = Oe.next;
            if (fe !== null || R !== void 0) {
                for (var ye = R === void 0 ? [] : Cv(R); fe !== null; )
                    (fe.e.f & fi) === 0 && ye.push(fe),
                    fe = fe.next;
                var ct = ye.length;
                if (ct > 0) {
                    var qt = 4 & w && ee === 0 ? x : null;
                    if (Z) {
                        for (M = 0; M < ct; M += 1) {
                            var X;
                            (X = ye[M].a) === null || X === void 0 || X.measure()
                        }
                        for (M = 0; M < ct; M += 1) {
                            var D;
                            (D = ye[M].a) === null || D === void 0 || D.fix()
                        }
                    }
                    (function(le, F, we, ne) {
                        for (var Be = [], J = F.length, U = 0; U < J; U++)
                            pp(F[U].e, Be, !0);
                        var _t = J > 0 && Be.length === 0 && we !== null;
                        if (_t) {
                            var nt = we.parentNode;
                            nt.textContent = "",
                            nt.append(we),
                            ne.clear(),
                            ni(le, F[0].prev, F[J - 1].next)
                        }
                        tw(Be, () => {
                            for (var Se = 0; Se < J; Se++) {
                                var mt = F[Se];
                                _t || (ne.delete(mt.k),
                                ni(le, mt.prev, mt.next)),
                                Ho(mt.e, !_t)
                            }
                        }
                        )
                    }
                    )(m, ye, qt, se)
                }
            }
            Z && cd( () => {
                if (k !== void 0)
                    for (Y of k) {
                        var le;
                        (le = Y.a) === null || le === void 0 || le.apply()
                    }
            }
            ),
            Xn.first = m.first && m.first.e,
            Xn.last = Oe && Oe.e
        }(v, l, s, a, t, o, n),
        i !== null && (p === 0 ? u ? vc(u) : u = Oa( () => i(s)) : u !== null && Hs(u, () => {
            u = null
        }
        )),
        r(c))
    }
    )
}
function aR(e, t, n, o) {
    1 & o && dc(e.v, t),
    2 & o ? dc(e.i, n) : e.i = n
}
function iR(e, t, n, o, a, i, s, l, u, d) {
    var c = 1 & u ? 16 & u ? Xi(a) : T(a, !1, !1) : a
      , v = 2 & u ? Xi(s) : s
      , p = {
        i: v,
        v: c,
        k: i,
        a: null,
        e: null,
        prev: n,
        next: o
    };
    try {
        return p.e = Oa( () => l(e, c, v, d), !1),
        p.e.prev = n && n.e,
        p.e.next = o && o.e,
        n === null ? t.first = p : (n.next = p,
        n.e.next = p.e),
        o !== null && (o.prev = p,
        o.e.prev = p.e),
        p
    } finally {}
}
function qh(e, t, n) {
    for (var o = e.next ? e.next.e.nodes_start : n, a = t ? t.e.nodes_start : n, i = e.e.nodes_start; i !== o; ) {
        var s = ud(i);
        a.before(i),
        i = s
    }
}
function ni(e, t, n) {
    t === null ? e.first = n : (t.next = n,
    t.e.next = n && n.e),
    n !== null && (n.prev = t,
    n.e.prev = t && t.e)
}
function bw(e, t) {
    var n = arguments.length > 2 && arguments[2] !== void 0 && arguments[2]
      , o = arguments.length > 3 && arguments[3] !== void 0 && arguments[3]
      , a = e
      , i = "";
    Ee( () => {
        var s, l = Xn;
        if (i !== (i = (s = t()) !== null && s !== void 0 ? s : "") && (l.nodes_start !== null && (Zy(l.nodes_start, l.nodes_end),
        l.nodes_start = l.nodes_end = null),
        i !== "")) {
            var u = i + "";
            n ? u = "<svg>".concat(u, "</svg>") : o && (u = "<math>".concat(u, "</math>"));
            var d = hp(u);
            if ((n || o) && (d = Eo(d)),
            Qi(Eo(d), d.lastChild),
            n || o)
                for (; Eo(d); )
                    a.before(Eo(d));
            else
                a.before(d)
        }
    }
    )
}
function _r(e, t, n, o, a) {
    var i, s = (i = t.$$slots) === null || i === void 0 ? void 0 : i[n], l = !1;
    s === !0 && (s = t[n === "default" ? "children" : n],
    l = !0),
    s === void 0 ? a !== null && a(e) : s(e, l ? () => o : o)
}
function xw(e, t, n) {
    var o, a, i = e;
    Ti( () => {
        o !== (o = t()) && (a && (Hs(a),
        a = null),
        o && (a = Oa( () => n(i, o))))
    }
    , gu)
}
function lo(e, t, n) {
    Gr( () => {
        var o = N( () => t(e, n?.()) || {});
        if (n && o != null && o.update) {
            var a = !1
              , i = {};
            bu( () => {
                var s = n();
                b(s),
                a && dp(i, s) && (i = s,
                o.update(s))
            }
            ),
            a = !0
        }
        if (o != null && o.destroy)
            return () => o.destroy()
    }
    )
}
function sR(e, t) {
    var n, o = void 0;
    Ti( () => {
        o !== (o = t()) && (n && (Ho(n),
        n = null),
        o && (n = Oa( () => {
            Gr( () => o(e))
        }
        )))
    }
    )
}
function jw(e) {
    var t, n, o = "";
    if (typeof e == "string" || typeof e == "number")
        o += e;
    else if (typeof e == "object")
        if (Array.isArray(e)) {
            var a = e.length;
            for (t = 0; t < a; t++)
                e[t] && (n = jw(e[t])) && (o && (o += " "),
                o += n)
        } else
            for (n in e)
                e[n] && (o && (o += " "),
                o += n);
    return o
}
function _i(e) {
    return typeof e == "object" ? function() {
        for (var t, n, o = 0, a = "", i = arguments.length; o < i; o++)
            (t = arguments[o]) && (n = jw(t)) && (a && (a += " "),
            a += n);
        return a
    }(e) : e ?? ""
}
var $h = [...` 	
\r\f \v\uFEFF`];
function Fh(e) {
    var t = arguments.length > 1 && arguments[1] !== void 0 && arguments[1] ? " !important;" : ";"
      , n = "";
    for (var o in e) {
        var a = e[o];
        a != null && a !== "" && (n += " " + o + ": " + a + t)
    }
    return n
}
function Dd(e) {
    return e[0] !== "-" || e[1] !== "-" ? e.toLowerCase() : e
}
function At(e, t, n, o, a, i) {
    var s = e.__className;
    if (s !== n || s === void 0) {
        var l = function(c, v, p) {
            var f = c == null ? "" : "" + c;
            if (v && (f = f ? f + " " + v : v),
            p) {
                for (var m in p)
                    if (p[m])
                        f = f ? f + " " + m : m;
                    else if (f.length)
                        for (var x = m.length, y = 0; (y = f.indexOf(m, y)) >= 0; ) {
                            var w = y + x;
                            y !== 0 && !$h.includes(f[y - 1]) || w !== f.length && !$h.includes(f[w]) ? y = w : f = (y === 0 ? "" : f.substring(0, y)) + f.substring(w + 1)
                        }
            }
            return f === "" ? null : f
        }(n, o, i);
        l == null ? e.removeAttribute("class") : t ? e.className = l : e.setAttribute("class", l),
        e.__className = n
    } else if (i && a !== i)
        for (var u in i) {
            var d = !!i[u];
            a != null && d === !!a[u] || e.classList.toggle(u, d)
        }
    return i
}
function qd(e) {
    var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}
      , n = arguments.length > 2 ? arguments[2] : void 0
      , o = arguments.length > 3 ? arguments[3] : void 0;
    for (var a in n) {
        var i = n[a];
        t[a] !== i && (n[a] == null ? e.style.removeProperty(a) : e.style.setProperty(a, i, o))
    }
}
function ra(e, t, n, o) {
    if (e.__style !== t) {
        var a = function(i, s) {
            if (s) {
                var l, u, d = "";
                if (Array.isArray(s) ? (l = s[0],
                u = s[1]) : l = s,
                i) {
                    i = String(i).replaceAll(/\s*\/\*.*?\*\/\s*/g, "").trim();
                    var c = !1
                      , v = 0
                      , p = !1
                      , f = [];
                    l && f.push(...Object.keys(l).map(Dd)),
                    u && f.push(...Object.keys(u).map(Dd));
                    for (var m = 0, x = -1, y = i.length, w = 0; w < y; w++) {
                        var S = i[w];
                        if (p ? S === "/" && i[w - 1] === "*" && (p = !1) : c ? c === S && (c = !1) : S === "/" && i[w + 1] === "*" ? p = !0 : S === '"' || S === "'" ? c = S : S === "(" ? v++ : S === ")" && v--,
                        !p && c === !1 && v === 0) {
                            if (S === ":" && x === -1)
                                x = w;
                            else if (S === ";" || w === y - 1) {
                                if (x !== -1) {
                                    var P = Dd(i.substring(m, x).trim());
                                    f.includes(P) || (S !== ";" && w++,
                                    d += " " + i.substring(m, w).trim() + ";")
                                }
                                m = w + 1,
                                x = -1
                            }
                        }
                    }
                }
                return l && (d += Fh(l)),
                u && (d += Fh(u, !0)),
                (d = d.trim()) === "" ? null : d
            }
            return i == null ? null : String(i)
        }(t, o);
        a == null ? e.removeAttribute("style") : e.style.cssText = a,
        e.__style = t
    } else
        o && (Array.isArray(o) ? (qd(e, n?.[0], o[0]),
        qd(e, n?.[1], o[1], "important")) : qd(e, n, o));
    return o
}
function hc(e, t) {
    var n = arguments.length > 2 && arguments[2] !== void 0 && arguments[2];
    if (e.multiple) {
        if (t == null)
            return;
        if (!fl(t))
            return void console.warn("https://svelte.dev/e/select_multiple_invalid_value");
        for (var o of e.options)
            o.selected = t.includes(Ul(o))
    } else {
        for (o of e.options)
            if (WA(Ul(o), t))
                return void (o.selected = !0);
        n && t === void 0 || (e.selectedIndex = -1)
    }
}
function yw(e) {
    var t = new MutationObserver( () => {
        hc(e, e.__value)
    }
    );
    t.observe(e, {
        childList: !0,
        subtree: !0,
        attributes: !0,
        attributeFilter: ["value"]
    }),
    fp( () => {
        t.disconnect()
    }
    )
}
function Ul(e) {
    return "__value"in e ? e.__value : e.value
}
var _s = Symbol("class")
  , El = Symbol("style")
  , ww = Symbol("is custom element")
  , kw = Symbol("is html");
function Zi(e, t) {
    var n = gp(e);
    n.value !== (n.value = t ?? void 0) && (e.value !== t || t === 0 && e.nodeName === "PROGRESS") && (e.value = t ?? "")
}
function zn(e, t, n, o) {
    var a = gp(e);
    a[t] !== (a[t] = n) && (t === "loading" && (e[FA] = n),
    n == null ? e.removeAttribute(t) : typeof n != "string" && _w(e).includes(t) ? e[t] = n : e.setAttribute(t, n))
}
function lR(e, t, n, o) {
    var a, i = gp(e), s = i[ww], l = !i[kw], u = t || {}, d = e.tagName === "OPTION";
    for (var c in t)
        c in n || (n[c] = null);
    n.class ? n.class = _i(n.class) : (o || n[_s]) && (n.class = null),
    n[El] && ((a = n.style) !== null && a !== void 0 || (n.style = null));
    var v, p, f, m, x, y, w = _w(e), S = function(R) {
        var k = n[R];
        if (d && R === "value" && k == null)
            return e.value = e.__value = "",
            u[R] = k,
            0;
        if (R === "class")
            return v = e.namespaceURI === "http://www.w3.org/1999/xhtml",
            At(e, v, k, o, t?.[_s], n[_s]),
            u[R] = k,
            u[_s] = n[_s],
            0;
        if (R === "style")
            return ra(e, k, t?.[El], n[El]),
            u[R] = k,
            u[El] = n[El],
            0;
        if (k === (p = u[R]) && (k !== void 0 || !e.hasAttribute(R)) || (u[R] = k,
        (f = R[0] + R[1]) === "$$"))
            return 0;
        if (f === "on") {
            var I = {}
              , H = "$$" + R
              , Y = R.slice(2);
            if (m = function(se) {
                return QA.includes(se)
            }(Y),
            function(se) {
                return se.endsWith("capture") && se !== "gotpointercapture" && se !== "lostpointercapture"
            }(Y) && (Y = Y.slice(0, -7),
            I.capture = !0),
            !m && p) {
                if (k != null)
                    return 0;
                e.removeEventListener(Y, u[H], I),
                u[H] = null
            }
            if (k != null)
                if (m)
                    e["__".concat(Y)] = k,
                    ju([Y]);
                else {
                    let se = function(_e) {
                        u[R].call(this, _e)
                    };
                    u[H] = hw(Y, e, se, I)
                }
            else
                m && (e["__".concat(Y)] = void 0)
        } else if (R === "style")
            zn(e, R, k);
        else if (R === "autofocus")
            (function(se, _e) {
                if (_e) {
                    var fe = document.body;
                    se.autofocus = !0,
                    cd( () => {
                        document.activeElement === fe && se.focus()
                    }
                    )
                }
            }
            )(e, !!k);
        else if (s || R !== "__value" && (R !== "value" || k == null))
            if (R === "selected" && d)
                (function(se, _e) {
                    _e ? se.hasAttribute("selected") || se.setAttribute("selected", "") : se.removeAttribute("selected")
                }
                )(e, k);
            else if (x = R,
            l || (x = function(se) {
                var _e;
                return se = se.toLowerCase(),
                (_e = ZA[se]) !== null && _e !== void 0 ? _e : se
            }(x)),
            y = x === "defaultValue" || x === "defaultChecked",
            k != null || s || y)
                y || w.includes(x) && (s || typeof k != "string") ? e[x] = k : typeof k != "function" && zn(e, x, k);
            else if (i[R] = null,
            x === "value" || x === "checked") {
                var M = e
                  , Z = t === void 0;
                if (x === "value") {
                    var ae = M.defaultValue;
                    M.removeAttribute(x),
                    M.defaultValue = ae,
                    M.value = M.__value = Z ? ae : null
                } else {
                    var ee = M.defaultChecked;
                    M.removeAttribute(x),
                    M.defaultChecked = ee,
                    M.checked = !!Z && ee
                }
            } else
                e.removeAttribute(R);
        else
            e.value = e.__value = k
    };
    for (var P in n)
        S(P);
    return u
}
function Vu(e, t) {
    var n = arguments.length > 3 ? arguments[3] : void 0
      , o = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : hl
      , a = (arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : []).map(o)
      , i = void 0
      , s = {}
      , l = e.nodeName === "SELECT"
      , u = !1;
    if (Ti( () => {
        var c = t(...a.map(r))
          , v = lR(e, i, c, n);
        for (var p of (u && l && "value"in c && hc(e, c.value),
        Object.getOwnPropertySymbols(s)))
            c[p] || Ho(s[p]);
        for (var f of Object.getOwnPropertySymbols(c)) {
            var m = c[f];
            f.description !== "@attach" || i && m === i[f] || (s[f] && Ho(s[f]),
            s[f] = Oa( () => sR(e, () => m))),
            v[f] = m
        }
        i = v
    }
    ),
    l) {
        var d = e;
        Gr( () => {
            hc(d, i.value, !0),
            yw(d)
        }
        )
    }
    u = !0
}
function gp(e) {
    var t;
    return (t = e.__attributes) !== null && t !== void 0 ? t : e.__attributes = {
        [ww]: e.nodeName.includes("-"),
        [kw]: e.namespaceURI === "http://www.w3.org/1999/xhtml"
    }
}
var Bh = new Map;
function _w(e) {
    var t, n = Bh.get(e.nodeName);
    if (n)
        return n;
    Bh.set(e.nodeName, n = []);
    for (var o = e, a = Element.prototype; a !== o; ) {
        for (var i in t = Ny(o))
            t[i].set && n.push(i);
        o = up(o)
    }
    return n
}
function gc(e, t) {
    var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : t
      , o = pl();
    fw(e, "input", a => {
        var i = a ? e.defaultValue : e.value;
        if (i = $d(e) ? Fd(i) : i,
        n(i),
        o && i !== (i = t())) {
            var s = e.selectionStart
              , l = e.selectionEnd;
            e.value = i ?? "",
            l !== null && (e.selectionStart = s,
            e.selectionEnd = Math.min(l, e.value.length))
        }
    }
    ),
    N(t) == null && e.value && n($d(e) ? Fd(e.value) : e.value),
    bu( () => {
        var a = t();
        $d(e) && a === Fd(e.value) || (e.type !== "date" || a || e.value) && a !== e.value && (e.value = a ?? "")
    }
    )
}
function $d(e) {
    var t = e.type;
    return t === "number" || t === "range"
}
function Fd(e) {
    return e === "" ? null : +e
}
function Et(e, t, n) {
    var o = qa(e, t);
    o && o.set && (e[t] = n,
    fp( () => {
        e[t] = null
    }
    ))
}
function Wh(e, t) {
    return e === t || e?.[ka] === t
}
function nr() {
    var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}
      , t = arguments.length > 1 ? arguments[1] : void 0
      , n = arguments.length > 2 ? arguments[2] : void 0;
    return Gr( () => {
        var o, a;
        return bu( () => {
            o = a,
            a = [],
            N( () => {
                e !== n(...a) && (t(e, ...a),
                o && Wh(n(...o), e) && t(null, ...o))
            }
            )
        }
        ),
        () => {
            cd( () => {
                a && Wh(n(...a), e) && t(null, ...a)
            }
            )
        }
    }
    ),
    e
}
function Ta(e) {
    return function() {
        for (var t = arguments.length, n = new Array(t), o = 0; o < t; o++)
            n[o] = arguments[o];
        return n[0].stopPropagation(),
        e?.apply(this, n)
    }
}
function ri(e) {
    return function() {
        for (var t = arguments.length, n = new Array(t), o = 0; o < t; o++)
            n[o] = arguments[o];
        return n[0].preventDefault(),
        e?.apply(this, n)
    }
}
function Rt() {
    var e = arguments.length > 0 && arguments[0] !== void 0 && arguments[0]
      , t = Yn
      , n = t.l.u;
    if (n) {
        var o, a = () => b(t.s);
        if (e) {
            var i = 0
              , s = {}
              , l = hl( () => {
                var u = !1
                  , d = t.s;
                for (var c in d)
                    d[c] !== s[c] && (s[c] = d[c],
                    u = !0);
                return u && i++,
                i
            }
            );
            a = () => r(l)
        }
        n.b.length && (o = () => {
            Hh(t, a),
            cc(n.b)
        }
        ,
        Ky(),
        zi(2097160, o, !0)),
        Av( () => {
            var u = N( () => n.m.map(UA));
            return () => {
                for (var d of u)
                    typeof d == "function" && d()
            }
        }
        ),
        n.a.length && Av( () => {
            Hh(t, a),
            cc(n.a)
        }
        )
    }
}
function Hh(e, t) {
    if (e.l.s)
        for (var n of e.l.s)
            r(n);
    t()
}
function fd(e) {
    var t = Xi(0);
    return function() {
        return arguments.length === 1 ? (h(t, r(t) + 1),
        arguments[0]) : (r(t),
        e())
    }
}
function Tl(e, t) {
    var n, o = (n = e.$$events) === null || n === void 0 ? void 0 : n[t.type], a = fl(o) ? o.slice() : o == null ? [] : [o];
    for (var i of a)
        i.call(this, t)
}
var Ru = !1
  , uR = {
    get(e, t) {
        if (!e.exclude.includes(t))
            return r(e.version),
            t in e.special ? e.special[t]() : e.props[t]
    },
    set(e, t, n) {
        if (!(t in e.special)) {
            var o = Xn;
            try {
                ki(e.parent_effect),
                e.special[t] = g({
                    get[t]() {
                        return e.props[t]
                    }
                }, t, 4)
            } finally {
                ki(o)
            }
        }
        return e.special[t](n),
        Nh(e.version),
        !0
    },
    getOwnPropertyDescriptor(e, t) {
        if (!e.exclude.includes(t))
            return t in e.props ? {
                enumerable: !0,
                configurable: !0,
                value: e.props[t]
            } : void 0
    },
    deleteProperty: (e, t) => (e.exclude.includes(t) || (e.exclude.push(t),
    Nh(e.version)),
    !0),
    has: (e, t) => !e.exclude.includes(t) && t in e.props,
    ownKeys: e => Reflect.ownKeys(e.props).filter(t => !e.exclude.includes(t))
};
function Mu(e, t) {
    return new Proxy({
        props: e,
        exclude: t,
        special: {},
        version: Xi(0),
        parent_effect: Xn
    },uR)
}
var cR = {
    get(e, t) {
        for (var n = e.props.length; n--; ) {
            var o = e.props[n];
            if (Ol(o) && (o = o()),
            typeof o == "object" && o !== null && t in o)
                return o[t]
        }
    },
    set(e, t, n) {
        for (var o = e.props.length; o--; ) {
            var a = e.props[o];
            Ol(a) && (a = a());
            var i = qa(a, t);
            if (i && i.set)
                return i.set(n),
                !0
        }
        return !1
    },
    getOwnPropertyDescriptor(e, t) {
        for (var n = e.props.length; n--; ) {
            var o = e.props[n];
            if (Ol(o) && (o = o()),
            typeof o == "object" && o !== null && t in o) {
                var a = qa(o, t);
                return a && !a.configurable && (a.configurable = !0),
                a
            }
        }
    },
    has(e, t) {
        if (t === ka || t === Uy)
            return !1;
        for (var n of e.props)
            if (Ol(n) && (n = n()),
            n != null && t in n)
                return !0;
        return !1
    },
    ownKeys(e) {
        var t = [];
        for (var n of e.props)
            if (Ol(n) && (n = n()),
            n) {
                for (var o in n)
                    t.includes(o) || t.push(o);
                for (var a of Object.getOwnPropertySymbols(n))
                    t.includes(a) || t.push(a)
            }
        return t
    }
};
function pi() {
    for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
        t[n] = arguments[n];
    return new Proxy({
        props: t
    },cR)
}
function g(e, t, n, o) {
    var a, i, s = !vl || !!(2 & n), l = !!(8 & n), u = !!(16 & n), d = o, c = !0, v = () => (c && (c = !1,
    d = u ? N(o) : o),
    d);
    if (l) {
        var p, f, m = ka in e || Uy in e;
        a = (p = (f = qa(e, t)) === null || f === void 0 ? void 0 : f.set) !== null && p !== void 0 ? p : m && t in e ? k => e[t] = k : void 0
    }
    var x, y = !1;
    if (l ? [i,y] = function(k) {
        var I = Ru;
        try {
            return Ru = !1,
            [k(), Ru]
        } finally {
            Ru = I
        }
    }( () => e[t]) : i = e[t],
    i === void 0 && o !== void 0 && (i = v(),
    a && (s && function() {
        throw new Error("https://svelte.dev/e/props_invalid_value")
    }(),
    a(i))),
    x = s ? () => {
        var k = e[t];
        return k === void 0 ? v() : (c = !0,
        k)
    }
    : () => {
        var k = e[t];
        return k !== void 0 && (d = void 0),
        k === void 0 ? d : k
    }
    ,
    s && !(4 & n))
        return x;
    if (a) {
        var w = e.$$legacy;
        return function(k, I) {
            return arguments.length > 0 ? (s && I && !w && !y || a(I ? x() : k),
            k) : x()
        }
    }
    var S = !1
      , P = (1 & n ? hl : pe)( () => (S = !1,
    x()));
    l && r(P);
    var R = Xn;
    return function(k, I) {
        if (arguments.length > 0) {
            var H = I ? r(P) : s && l ? As(k) : k;
            return h(P, H),
            S = !0,
            d !== void 0 && (d = H),
            k
        }
        return yi && S || (R.f & cp) !== 0 ? P.v : r(P)
    }
}
function Hr(e) {
    var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : function(o) {
        var a = function(i) {
            try {
                if (typeof window < "u" && window.localStorage !== void 0)
                    return window.localStorage[i]
            } catch {}
        }("debug");
        return a != null && a.endsWith("*") ? o.startsWith(a.slice(0, -1)) : o === a
    }(e);
    if (!t)
        return dR;
    var n = function(o) {
        for (var a = 0, i = 0; i < o.length; i++)
            a = (a << 5) - a + o.charCodeAt(i),
            a |= 0;
        return Vh[Math.abs(a) % Vh.length]
    }(e);
    return function() {
        for (var o = arguments.length, a = new Array(o), i = 0; i < o; i++)
            a[i] = arguments[i];
        console.log("%c".concat(e), "color:".concat(n), ...a)
    }
}
function dR() {}
var Vh = ["#0000CC", "#0099FF", "#009400", "#8dd200", "#CCCC00", "#CC9933", "#ae04e7", "#ff35d7", "#FF3333", "#FF6600", "#FF9933", "#FFCC33"]
  , vR = 0;
function Ms() {
    return ++vR
}
function Zr(e) {
    return parseInt(e, 10)
}
function mp(e) {
    return fR.test(e)
}
var fR = /^-?(?:0|[1-9]\d*)(?:\.\d+)?(?:[eE][+-]?\d+)?$/;
function On(e) {
    return typeof e == "object" && e !== null && (e.constructor === void 0 || e.constructor.name === "Object")
}
function xr(e) {
    return typeof e == "object" && e !== null && (e.constructor === void 0 || e.constructor.name === "Object" || e.constructor.name === "Array")
}
function pR(e) {
    return e === !0 || e === !1
}
function zv(e) {
    if (typeof e == "number")
        return e > 9466848e5 && isFinite(e) && Math.floor(e) === e && !isNaN(new Date(e).valueOf());
    if (typeof e == "bigint")
        return zv(Number(e));
    try {
        var t = e && e.valueOf();
        if (t !== e)
            return zv(t)
    } catch {
        return !1
    }
    return !1
}
function Sw(e) {
    (Pu = Pu || window.document.createElement("div")).style.color = "",
    Pu.style.color = e;
    var t = Pu.style.color;
    return t !== "" ? t.replace(/\s+/g, "").toLowerCase() : void 0
}
var Pu = void 0;
function hR(e) {
    return typeof e == "string" && e.length < 99 && !!Sw(e)
}
function bp(e, t) {
    if (typeof e == "number" || typeof e == "string" || typeof e == "boolean" || e === void 0)
        return typeof e;
    if (typeof e == "bigint")
        return "number";
    if (e === null)
        return "null";
    if (Array.isArray(e))
        return "array";
    if (On(e))
        return "object";
    var n = t.stringify(e);
    return n && mp(n) ? "number" : n === "true" || n === "false" ? "boolean" : n === "null" ? "null" : "unknown"
}
var gR = /^https?:\/\/\S+$/;
function pd(e) {
    return typeof e == "string" && gR.test(e)
}
function gl(e, t) {
    if (e === "")
        return "";
    var n = e.trim();
    return n === "null" ? null : n === "true" || n !== "false" && (mp(n) ? t.parse(n) : e)
}
function mR(e) {
    return bR.test(e)
}
var bR = /^-?[0-9]+$/
  , xR = [];
function Gh(e, t) {
    if (e.length !== t.length)
        return !1;
    for (var n = 0; n < e.length; n++)
        if (e[n] !== t[n])
            return !1;
    return !0
}
function Tv(e) {
    var t = arguments.length > 1 && arguments[1] !== void 0 && arguments[1]
      , n = {};
    if (!Array.isArray(e))
        throw new TypeError("Array expected");
    function o(s, l) {
        (!Array.isArray(s) && !On(s) || t && l.length > 0) && (n[Tt(l)] = !0),
        On(s) && Object.keys(s).forEach(u => {
            o(s[u], l.concat(u))
        }
        )
    }
    for (var a = Math.min(e.length, 1e4), i = 0; i < a; i++)
        o(e[i], xR);
    return Object.keys(n).sort().map(Ao)
}
function Cw(e, t, n) {
    if (!(t <= e))
        for (var o = e; o < t; o++)
            n(o)
}
function mc(e, t) {
    return e.length > t ? e.slice(0, t) : e
}
function Jh(e) {
    return ke({}, e)
}
function Kh(e) {
    return Object.values(e)
}
function Yh(e, t, n, o) {
    var a = e.slice(0)
      , i = a.splice(t, n);
    return a.splice.apply(a, [t + o, 0, ...i]),
    a
}
function jR(e, t, n) {
    return e.slice(0, t).concat(n).concat(e.slice(t))
}
function yu(e, t) {
    try {
        return t.parse(e)
    } catch {
        return t.parse(ta(e))
    }
}
function Ow(e, t) {
    try {
        return yu(e, t)
    } catch {
        return
    }
}
function wu(e, t) {
    e = e.replace(Aw, "");
    try {
        return t(e)
    } catch {}
    try {
        return t("{" + e + "}")
    } catch {}
    try {
        return t("[" + e + "]")
    } catch {}
    throw new Error("Failed to parse partial JSON")
}
function Ew(e) {
    e = e.replace(Aw, "");
    try {
        return ta(e)
    } catch {}
    try {
        var t = ta("[" + e + "]");
        return t.substring(1, t.length - 1)
    } catch {}
    try {
        var n = ta("{" + e + "}");
        return n.substring(1, n.length - 1)
    } catch {}
    throw new Error("Failed to repair partial JSON")
}
var Aw = /,\s*$/;
function Vs(e, t) {
    var n = Qh.exec(t);
    if (n) {
        var o = Zr(n[2])
          , a = function(f, m) {
            for (var x = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 0, y = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : f.length, w = 0, S = x; S < y; S++)
                f.charAt(S) === m && w++;
            return w
        }(e, `
`, 0, o)
          , i = o - e.lastIndexOf(`
`, o) - 1;
        return {
            position: o,
            line: a,
            column: i,
            message: t.replace(Qh, () => "line ".concat(a + 1, " column ").concat(i + 1))
        }
    }
    var s = kR.exec(t)
      , l = s ? Zr(s[1]) : void 0
      , u = l !== void 0 ? l - 1 : void 0
      , d = _R.exec(t)
      , c = d ? Zr(d[1]) : void 0
      , v = c !== void 0 ? c - 1 : void 0
      , p = u !== void 0 && v !== void 0 ? function(f, m, x) {
        for (var y = f.indexOf(`
`), w = 1; w < m && y !== -1; )
            y = f.indexOf(`
`, y + 1),
            w++;
        return y !== -1 ? y + x + 1 : void 0
    }(e, u, v) : void 0;
    return {
        position: p,
        line: u,
        column: v,
        message: t.replace(/^JSON.parse: /, "").replace(/ of the JSON data$/, "")
    }
}
function Bd(e) {
    return On(e) ? e.json !== void 0 ? e.text !== void 0 ? 'Content must contain either a property "json" or a property "text" but not both' : void 0 : e.text === void 0 ? 'Content must contain either a property "json" or a property "text"' : typeof e.text != "string" ? 'Content "text" property must be a string containing a JSON document. Did you mean to use the "json" property instead?' : void 0 : "Content must be an object"
}
function Jl(e) {
    return On(e) && typeof e.text == "string"
}
function Kl(e) {
    return On(e) && e.json !== void 0
}
function Rw(e) {
    var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : void 0
      , n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : JSON;
    return Jl(e) ? e : {
        text: n.stringify(e.json, null, t)
    }
}
function Xh(e) {
    var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : JSON;
    return Kl(e) ? e : {
        json: t.parse(e.text)
    }
}
function Iv(e, t, n) {
    return Rw(e, t, n).text
}
function yR(e, t) {
    return wR(e, t) > t
}
function wR(e) {
    var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1 / 0;
    if (Jl(e))
        return e.text.length;
    var n = e.json
      , o = 0;
    return function a(i) {
        if (Array.isArray(i)) {
            if ((o += i.length - 1 + 2) > t)
                return;
            for (var s = 0; s < i.length; s++)
                if (a(i[s]),
                o > t)
                    return
        } else if (On(i)) {
            var l = Object.keys(i);
            o += 2 + l.length + (l.length - 1);
            for (var u = 0; u < l.length; u++) {
                var d = l[u]
                  , c = i[d];
                o += d.length + 2,
                a(c)
            }
        } else
            o += typeof i == "string" ? i.length + 2 : String(i).length
    }(n),
    o
}
var Qh = /(position|char) (\d+)/
  , kR = /line (\d+)/
  , _R = /column (\d+)/;
function Gs(e, t) {
    return e.parse === t.parse && e.stringify === t.stringify
}
function Zh(e) {
    var t = e.substring(0, 999).trim();
    return !t.includes(`
`) && SR.test(t)
}
var zr, Fn, Qo, zo, oa, Do, hi, SR = /[,:]\S/;
function xp(e) {
    var {escapeControlCharacters: t, escapeUnicodeCharacters: n} = e;
    return t ? n ? CR : OR : n ? ER : AR
}
(function(e) {
    e.text = "text",
    e.tree = "tree",
    e.table = "table"
}
)(zr || (zr = {})),
function(e) {
    e.after = "after",
    e.inside = "inside",
    e.key = "key",
    e.value = "value",
    e.multi = "multi",
    e.text = "text"
}(Fn || (Fn = {})),
function(e) {
    e.after = "after",
    e.key = "key",
    e.value = "value",
    e.inside = "inside"
}(Qo || (Qo = {})),
function(e) {
    e.info = "info",
    e.warning = "warning",
    e.error = "error"
}(zo || (zo = {})),
function(e) {
    e.key = "key",
    e.value = "value"
}(oa || (oa = {})),
function(e) {
    e.asc = "asc",
    e.desc = "desc"
}(Do || (Do = {})),
function(e) {
    e.no = "no",
    e.self = "self",
    e.nextInside = "nextInside"
}(hi || (hi = {}));
var CR = {
    escapeValue: e => Mw(Tw(String(e))),
    unescapeValue: e => Iw(Pw(e))
}
  , OR = {
    escapeValue: e => Tw(String(e)),
    unescapeValue: e => Iw(e)
}
  , ER = {
    escapeValue: e => Mw(String(e)),
    unescapeValue: e => Pw(e)
}
  , AR = {
    escapeValue: e => String(e),
    unescapeValue: e => e
};
function Mw(e) {
    return e.replace(/[^\x20-\x7F]/g, t => {
        var n;
        return t === "\b" || t === "\f" || t === `
` || t === "\r" || t === "	" ? t : "\\u" + ("000" + ((n = t.codePointAt(0)) === null || n === void 0 ? void 0 : n.toString(16))).slice(-4)
    }
    )
}
function Pw(e) {
    return e.replace(/\\u[a-fA-F0-9]{4}/g, t => {
        try {
            var n = JSON.parse('"' + t + '"');
            return zw[n] || n
        } catch {
            return t
        }
    }
    )
}
var zw = {
    '"': '\\"',
    "\\": "\\\\",
    "\b": "\\b",
    "\f": "\\f",
    "\n": "\\n",
    "\r": "\\r",
    "	": "\\t"
}
  , RR = {
    '\\"': '"',
    "\\\\": "\\",
    "\\/": "/",
    "\\b": "\b",
    "\\f": "\f",
    "\\n": `
`,
    "\\r": "\r",
    "\\t": "	"
};
function Tw(e) {
    return e.replace(/["\b\f\n\r\t\\]/g, t => zw[t] || t)
}
function Iw(e) {
    return e.replace(/\\["bfnrt\\]/g, t => RR[t] || t)
}
function Js(e) {
    return typeof e != "string" ? String(e) : e.endsWith(`
`) ? e + `
` : e
}
function Nw(e, t) {
    return ml(e, n => n.nodeName.toUpperCase() === t.toUpperCase())
}
function ui(e, t, n) {
    return ml(e, o => function(a, i, s) {
        return typeof a.getAttribute == "function" && a.getAttribute(i) === s
    }(o, t, n))
}
function ml(e, t) {
    return !!jp(e, t)
}
function jp(e, t) {
    for (var n = e; n && !t(n); )
        n = n.parentNode;
    return n
}
function ku(e) {
    var t, n;
    return (t = e == null || (n = e.ownerDocument) === null || n === void 0 ? void 0 : n.defaultView) !== null && t !== void 0 ? t : void 0
}
function yp(e) {
    var t = ku(e)
      , n = t?.document.activeElement;
    return !!n && ml(n, o => o === e)
}
function Lw(e, t) {
    return jp(e, n => n.nodeName === t)
}
function Wd(e) {
    return ui(e, "data-type", "selectable-key") ? Fn.key : ui(e, "data-type", "selectable-value") ? Fn.value : ui(e, "data-type", "insert-selection-area-inside") ? Fn.inside : ui(e, "data-type", "insert-selection-area-after") ? Fn.after : Fn.multi
}
function Gu(e) {
    return encodeURIComponent(Tt(e))
}
function Uw(e) {
    var t, n = jp(e, a => !(a == null || !a.hasAttribute) && a.hasAttribute("data-path")), o = (t = n?.getAttribute("data-path")) !== null && t !== void 0 ? t : void 0;
    return o ? Ao(decodeURIComponent(o)) : void 0
}
function MR(e) {
    var {allElements: t, currentElement: n, direction: o, hasPrio: a= () => !0, margin: i=10} = e
      , s = nl(t.filter(function(w) {
        var S = w.getBoundingClientRect();
        return S.width > 0 && S.height > 0
    }), u)
      , l = u(n);
    function u(w) {
        var S = w.getBoundingClientRect();
        return {
            x: S.left + S.width / 2,
            y: S.top + S.height / 2,
            rect: S,
            element: w
        }
    }
    function d(w, S) {
        var P = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 1
          , R = w.x - S.x
          , k = (w.y - S.y) * P;
        return Math.sqrt(R * R + k * k)
    }
    var c = w => d(w, l);
    if (o === "Left" || o === "Right") {
        var v = o === "Left" ? s.filter(w => {
            return S = l,
            w.rect.left + i < S.rect.left;
            var S
        }
        ) : s.filter(w => {
            return S = l,
            w.rect.right > S.rect.right + i;
            var S
        }
        )
          , p = v.filter(w => {
            return S = w,
            P = l,
            Math.abs(S.y - P.y) < i;
            var S, P
        }
        )
          , f = Os(p, c) || Os(v, w => d(w, l, 10));
        return f?.element
    }
    if (o === "Up" || o === "Down") {
        var m = o === "Up" ? s.filter(w => {
            return S = l,
            w.y + i < S.y;
            var S
        }
        ) : s.filter(w => {
            return S = l,
            w.y > S.y + i;
            var S
        }
        )
          , x = m.filter(w => a(w.element))
          , y = Os(x, c) || Os(m, c);
        return y?.element
    }
}
function wp() {
    var e, t, n, o;
    return typeof navigator < "u" && (e = (t = (n = navigator) === null || n === void 0 || (n = n.platform) === null || n === void 0 ? void 0 : n.toUpperCase().includes("MAC")) !== null && t !== void 0 ? t : (o = navigator) === null || o === void 0 || (o = o.userAgentData) === null || o === void 0 || (o = o.platform) === null || o === void 0 ? void 0 : o.toUpperCase().includes("MAC")) !== null && e !== void 0 && e
}
function Ja(e) {
    var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "+"
      , n = [];
    kp(e, arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : wp) && n.push("Ctrl"),
    e.altKey && n.push("Alt"),
    e.shiftKey && n.push("Shift");
    var o = e.key.length === 1 ? e.key.toUpperCase() : e.key;
    return o in PR || n.push(o),
    n.join(t)
}
function kp(e) {
    var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : wp;
    return e.ctrlKey || e.metaKey && t()
}
var PR = {
    Ctrl: !0,
    Command: !0,
    Control: !0,
    Alt: !0,
    Option: !0,
    Shift: !0
};
function kt(e, t) {
    t === void 0 && (t = {});
    var n = t.insertAt;
    if (e && typeof document < "u") {
        var o = document.head || document.getElementsByTagName("head")[0]
          , a = document.createElement("style");
        a.type = "text/css",
        n === "top" && o.firstChild ? o.insertBefore(a, o.firstChild) : o.appendChild(a),
        a.styleSheet ? a.styleSheet.cssText = e : a.appendChild(document.createTextNode(e))
    }
}
kt(`.jse-absolute-popup.svelte-1r8q3m8 {
  position: relative;
  left: 0;
  top: 0;
  width: 0;
  height: 0;
  z-index: 1001;
}
.jse-absolute-popup.svelte-1r8q3m8 .jse-hidden-input:where(.svelte-1r8q3m8) {
  position: fixed;
  left: 0;
  top: 0;
  width: 0;
  height: 0;
  padding: 0;
  margin: 0;
  border: none;
  outline: none;
  overflow: hidden;
}
.jse-absolute-popup.svelte-1r8q3m8 .jse-absolute-popup-content:where(.svelte-1r8q3m8) {
  position: absolute;
}`);
var zR = K('<div class="jse-absolute-popup-content svelte-1r8q3m8"><input type="text" readonly="" tabindex="-1" class="jse-hidden-input svelte-1r8q3m8"/> <!></div>')
  , TR = K('<div role="none" class="jse-absolute-popup svelte-1r8q3m8"><!></div>');
function IR(e, t) {
    it(t, !1);
    var n = g(t, "popup", 8)
      , o = g(t, "closeAbsolutePopup", 8)
      , a = T()
      , i = T();
    function s(v) {
        n().options && n().options.closeOnOuterClick && !ml(v.target, p => p === r(a)) && o()(n().id)
    }
    function l(v) {
        Ja(v) === "Escape" && (v.preventDefault(),
        v.stopPropagation(),
        o()(n().id))
    }
    ao(function() {
        r(i) && r(i).focus()
    }),
    Rt();
    var u = TR();
    me("mousedown", $a, function(v) {
        s(v)
    }, !0),
    me("keydown", $a, l, !0),
    me("wheel", $a, function(v) {
        s(v)
    }, !0);
    var d = z(u)
      , c = v => {
        var p = zR()
          , f = z(p);
        nr(f, m => h(i, m), () => r(i)),
        xw(B(f, 2), () => n().component, (m, x) => {
            x(m, pi( () => n().props))
        }
        ),
        Ee(m => ra(p, m), [ () => (r(a),
        b(n()),
        N( () => function(m, x) {
            var y = m.getBoundingClientRect()
              , {left: w, top: S, positionAbove: P, positionLeft: R} = function() {
                if (x.anchor) {
                    var {anchor: k, width: I=0, height: H=0, offsetTop: Y=0, offsetLeft: M=0, position: Z} = x
                      , {left: ae, top: ee, bottom: se, right: _e} = k.getBoundingClientRect()
                      , fe = Z === "top" || ee + H > window.innerHeight && ee > H
                      , Oe = Z === "left" || ae + I > window.innerWidth && ae > I;
                    return {
                        left: Oe ? _e - M : ae + M,
                        top: fe ? ee - Y : se + Y,
                        positionAbove: fe,
                        positionLeft: Oe
                    }
                }
                if (typeof x.left == "number" && typeof x.top == "number") {
                    var {left: De, top: Ne, width: je=0, height: Ae=0} = x;
                    return {
                        left: De,
                        top: Ne,
                        positionAbove: Ne + Ae > window.innerHeight && Ne > Ae,
                        positionLeft: De + je > window.innerWidth && De > je
                    }
                }
                throw new Error('Invalid config: pass either "left" and "top", or pass "anchor"')
            }();
            return (P ? "bottom: ".concat(y.top - S, "px;") : "top: ".concat(S - y.top, "px;")) + (R ? "right: ".concat(y.left - w, "px;") : "left: ".concat(w - y.left, "px;"))
        }(r(a), n().options)))], pe),
        L(v, p)
    }
    ;
    ie(d, v => {
        r(a) && v(c)
    }
    ),
    nr(u, v => h(a, v), () => r(a)),
    me("mousedown", u, function(v) {
        v.stopPropagation()
    }),
    me("keydown", u, l),
    L(e, u),
    st()
}
var NR = K("<!> <!>", 1);
function Nv(e, t) {
    it(t, !1);
    var n, o, a = Hr("jsoneditor:AbsolutePopup"), i = T([], !0);
    function s(d) {
        var c = r(i).findIndex(p => p.id === d);
        if (c !== -1) {
            var v = r(i)[c];
            v.options.onClose && v.options.onClose(),
            h(i, r(i).filter(p => p.id !== d))
        }
    }
    n = "absolute-popup",
    o = {
        openAbsolutePopup: function(d, c, v) {
            a("open...", c, v);
            var p = {
                id: Ms(),
                component: d,
                props: c || {},
                options: v || {}
            };
            return h(i, [...r(i), p]),
            p.id
        },
        closeAbsolutePopup: s
    },
    Fy().set(n, o),
    V( () => r(i), () => {
        a("popups", r(i))
    }
    ),
    An(),
    Rt(!0);
    var l = NR()
      , u = ht(l);
    wr(u, 1, () => r(i), Rr, (d, c) => {
        IR(d, {
            get popup() {
                return r(c)
            },
            closeAbsolutePopup: s
        })
    }
    ),
    _r(B(u, 2), t, "default", {}, null),
    L(e, l),
    st()
}
function _u(e, t) {
    for (var n = new Set(t), o = e.replace(/ \(copy( \d+)?\)$/, ""), a = e, i = 1; n.has(a); ) {
        var s = "copy" + (i > 1 ? " " + i : "");
        a = "".concat(o, " (").concat(s, ")"),
        i++
    }
    return a
}
function Na(e, t) {
    var n = t - 3;
    return e.length > t ? e.substring(0, n) + "..." : e
}
function hd(e) {
    if (e === "")
        return "";
    var t = e.toLowerCase();
    if (t === "null")
        return null;
    if (t === "true")
        return !0;
    if (t === "false")
        return !1;
    if (t !== "undefined") {
        var n = Number(e)
          , o = parseFloat(e);
        return isNaN(n) || isNaN(o) ? e : n
    }
}
var bc = {
    id: "jsonquery",
    name: "JSONQuery",
    description: `
<p>
  Enter a <a href="https://jsonquerylang.org" target="_blank" 
  rel="noopener noreferrer">JSON Query</a> function to filter, sort, or transform the data.
  You can use functions like <code>get</code>, <code>filter</code>,
  <code>sort</code>, <code>pick</code>, <code>groupBy</code>, <code>uniq</code>, etcetera. 
  Example query: <code>filter(.age >= 18)</code>
</p>
`,
    createQuery: function(e, t) {
        var {filter: n, sort: o, projection: a} = t
          , i = [];
        n && n.path && n.relation && n.value && i.push(["filter", [(s = n.relation,
        uk("1 ".concat(s, " 1"))[0]), zu(n.path), hd(n.value)]]);
        var s;
        return o && o.path && o.direction && i.push(["sort", zu(o.path), o.direction === "desc" ? "desc" : "asc"]),
        a && a.paths && (a.paths.length > 1 ? i.push(["pick", ...a.paths.map(zu)]) : i.push(["map", zu(a.paths[0])])),
        ck(["pipe", ...i])
    },
    executeQuery: function(e, t, n) {
        var o = Gs(n, JSON) ? e : function(a) {
            var i = n.stringify(a);
            return i !== void 0 ? JSON.parse(i) : void 0
        }(e);
        return t.trim() !== "" ? mf(o, t) : o
    }
};
function zu(e) {
    return ["get", ...e]
}
var LR = Ii("<g><!></g>");
function UR(e, t) {
    it(t, !1);
    var n = 870711
      , o = T("")
      , a = g(t, "data", 8);
    function i(l) {
        if (!l || !l.raw)
            return "";
        var u = l.raw
          , d = {};
        return u = u.replace(/\s(?:xml:)?id=["']?([^"')\s]+)/g, (c, v) => {
            var p = "fa-".concat((n += 1).toString(16));
            return d[v] = p,
            ' id="'.concat(p, '"')
        }
        ),
        u = u.replace(/#(?:([^'")\s]+)|xpointer\(id\((['"]?)([^')]+)\2\)\))/g, (c, v, p, f) => {
            var m = v || f;
            return m && d[m] ? "#".concat(d[m]) : c
        }
        ),
        u
    }
    V( () => b(a()), () => {
        h(o, i(a()))
    }
    ),
    An();
    var s = LR();
    bw(z(s), () => r(o), !0),
    L(e, s),
    st()
}
kt(`
  .fa-icon.svelte-1mc5hvj {
    display: inline-block;
    fill: currentColor;
  }
  .fa-flip-horizontal.svelte-1mc5hvj {
    transform: scale(-1, 1);
  }
  .fa-flip-vertical.svelte-1mc5hvj {
    transform: scale(1, -1);
  }
  .fa-spin.svelte-1mc5hvj {
    animation: svelte-1mc5hvj-fa-spin 1s 0s infinite linear;
  }
  .fa-inverse.svelte-1mc5hvj {
    color: #fff;
  }
  .fa-pulse.svelte-1mc5hvj {
    animation: svelte-1mc5hvj-fa-spin 1s infinite steps(8);
  }
  @keyframes svelte-1mc5hvj-fa-spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`);
var DR = Ii("<svg><!></svg>")
  , qR = Ii("<path></path>")
  , $R = Ii("<polygon></polygon>")
  , FR = Ii("<!><!><!>", 1);
function fn(e, t) {
    var n = Mu(t, ["children", "$$slots", "$$events", "$$legacy"])
      , o = Mu(n, ["class", "data", "scale", "spin", "inverse", "pulse", "flip", "label", "style"]);
    it(t, !1);
    var a = g(t, "class", 8, "")
      , i = g(t, "data", 8)
      , s = T()
      , l = g(t, "scale", 8, 1)
      , u = g(t, "spin", 8, !1)
      , d = g(t, "inverse", 8, !1)
      , c = g(t, "pulse", 8, !1)
      , v = g(t, "flip", 8, void 0)
      , p = g(t, "label", 8, "")
      , f = g(t, "style", 8, "")
      , m = T(10)
      , x = T(10)
      , y = T()
      , w = T();
    function S() {
        var R = 1;
        return l() !== void 0 && (R = Number(l())),
        isNaN(R) || R <= 0 ? (console.warn('Invalid prop: prop "scale" should be a number over 0.'),
        1) : 1 * R
    }
    function P() {
        return r(s) ? Math.max(r(s).width, r(s).height) / 16 : 1
    }
    V( () => (b(i()),
    b(f()),
    b(l())), () => {
        h(s, function(R) {
            var k;
            if (R) {
                if (!("definition"in R)) {
                    if ("iconName"in R && "icon"in R) {
                        R.iconName;
                        var [I,H,,,Y] = R.icon;
                        k = {
                            width: I,
                            height: H,
                            paths: (Array.isArray(Y) ? Y : [Y]).map(M => ({
                                d: M
                            }))
                        }
                    } else
                        k = R[Object.keys(R)[0]];
                    return k
                }
                console.error("`import faIconName from '@fortawesome/package-name/faIconName` not supported - Please use `import { faIconName } from '@fortawesome/package-name/faIconName'` instead")
            }
        }(i())),
        f(),
        l(),
        h(m, r(s) ? r(s).width / P() * S() : 0),
        h(x, r(s) ? r(s).height / P() * S() : 0),
        h(y, function() {
            var R = "";
            f() !== null && (R += f());
            var k = S();
            return k === 1 ? R.length === 0 ? "" : R : (R === "" || R.endsWith(";") || (R += "; "),
            "".concat(R, "font-size: ").concat(k, "em"))
        }()),
        h(w, r(s) ? "0 0 ".concat(r(s).width, " ").concat(r(s).height) : "0 0 ".concat(r(m), " ").concat(r(x)))
    }
    ),
    An(),
    Rt(),
    function(R, k) {
        var I = Mu(k, ["children", "$$slots", "$$events", "$$legacy"])
          , H = Mu(I, ["class", "width", "height", "box", "spin", "inverse", "pulse", "flip", "style", "label"])
          , Y = g(k, "class", 8, "")
          , M = g(k, "width", 8)
          , Z = g(k, "height", 8)
          , ae = g(k, "box", 8, "0 0 0 0")
          , ee = g(k, "spin", 8, !1)
          , se = g(k, "inverse", 8, !1)
          , _e = g(k, "pulse", 8, !1)
          , fe = g(k, "flip", 8, "none")
          , Oe = g(k, "style", 8, "")
          , De = g(k, "label", 8, "")
          , Ne = DR();
        Vu(Ne, je => {
            var Ae;
            return ke(ke({
                version: "1.1",
                class: "fa-icon ".concat((Ae = Y()) !== null && Ae !== void 0 ? Ae : ""),
                width: M(),
                height: Z(),
                "aria-label": De(),
                role: De() ? "img" : "presentation",
                viewBox: ae(),
                style: Oe()
            }, H), {}, {
                [_s]: je
            })
        }
        , [ () => ({
            "fa-spin": ee(),
            "fa-pulse": _e(),
            "fa-inverse": se(),
            "fa-flip-horizontal": fe() === "horizontal",
            "fa-flip-vertical": fe() === "vertical"
        })], "svelte-1mc5hvj"),
        _r(z(Ne), k, "default", {}, null),
        L(R, Ne)
    }(e, pi({
        get label() {
            return p()
        },
        get width() {
            return r(m)
        },
        get height() {
            return r(x)
        },
        get box() {
            return r(w)
        },
        get style() {
            return r(y)
        },
        get spin() {
            return u()
        },
        get flip() {
            return v()
        },
        get inverse() {
            return d()
        },
        get pulse() {
            return c()
        },
        get class() {
            return a()
        }
    }, () => o, {
        children: (R, k) => {
            var I = jr();
            _r(ht(I), t, "default", {}, H => {
                var Y = FR()
                  , M = ht(Y);
                wr(M, 1, () => (r(s),
                N( () => {
                    var se;
                    return ((se = r(s)) === null || se === void 0 ? void 0 : se.paths) || []
                }
                )), Rr, (se, _e) => {
                    var fe = qR();
                    Vu(fe, () => ke({}, r(_e))),
                    L(se, fe)
                }
                );
                var Z = B(M);
                wr(Z, 1, () => (r(s),
                N( () => {
                    var se;
                    return ((se = r(s)) === null || se === void 0 ? void 0 : se.polygons) || []
                }
                )), Rr, (se, _e) => {
                    var fe = $R();
                    Vu(fe, () => ke({}, r(_e))),
                    L(se, fe)
                }
                );
                var ae = B(Z)
                  , ee = se => {
                    UR(se, {
                        get data() {
                            return r(s)
                        },
                        set data(_e) {
                            h(s, _e)
                        },
                        $$legacy: !0
                    })
                }
                ;
                ie(ae, se => {
                    r(s),
                    N( () => {
                        var _e;
                        return (_e = r(s)) === null || _e === void 0 ? void 0 : _e.raw
                    }
                    ) && se(ee)
                }
                ),
                L(H, Y)
            }
            ),
            L(R, I)
        }
        ,
        $$slots: {
            default: !0
        }
    })),
    st()
}
kt(`/* over all fonts, sizes, and colors */
/* "consolas" for Windows, "menlo" for Mac with fallback to "monaco", 'Ubuntu Mono' for Ubuntu */
/* (at Mac this font looks too large at 14px, but 13px is too small for the font on Windows) */
/* main, menu, modal */
/* jsoneditor modal */
/* tooltip in text mode */
/* panels: navigation bar, gutter, search box */
/* navigation-bar */
/* context menu */
/* contents: json key and values */
/* contents: selected or hovered */
/* contents: section of collapsed items in an array */
/* contents: highlighting of search matches */
/* contents: inline tags inside the JSON document */
/* contents: table */
/* controls in modals: inputs, buttons, and \`a\` */
/* messages */
/* svelte-select */
/* color picker */
.jse-boolean-toggle.svelte-1ryp01u {
  padding: 0;
  margin: 1px 0 0;
  vertical-align: top;
  display: inline-flex;
  color: var(--jse-value-color-boolean, #ff8c00);
}

.jse-boolean-toggle.svelte-1ryp01u:not(.jse-readonly) {
  cursor: pointer;
}`);
var BR = K('<div role="checkbox" tabindex="-1"><!></div>');
function WR(e, t) {
    it(t, !1);
    var n = g(t, "path", 9)
      , o = g(t, "value", 9)
      , a = g(t, "readOnly", 9)
      , i = g(t, "onPatch", 9)
      , s = g(t, "focus", 9);
    Rt(!0);
    var l, u = BR(), d = z(u), c = pe( () => o() === !0 ? fm : pm);
    fn(d, {
        get data() {
            return r(c)
        }
    }),
    Ee(v => {
        zn(u, "aria-checked", o() === !0),
        l = At(u, 1, "jse-boolean-toggle svelte-1ryp01u", null, l, v),
        zn(u, "title", a() ? "Boolean value ".concat(o()) : "Click to toggle this boolean value")
    }
    , [ () => ({
        "jse-readonly": a()
    })], pe),
    me("mousedown", u, function(v) {
        v.stopPropagation(),
        a() || (i()([{
            op: "replace",
            path: Tt(n()),
            value: !o()
        }]),
        s()())
    }),
    L(e, u),
    st()
}
kt(`/* over all fonts, sizes, and colors */
/* "consolas" for Windows, "menlo" for Mac with fallback to "monaco", 'Ubuntu Mono' for Ubuntu */
/* (at Mac this font looks too large at 14px, but 13px is too small for the font on Windows) */
/* main, menu, modal */
/* jsoneditor modal */
/* tooltip in text mode */
/* panels: navigation bar, gutter, search box */
/* navigation-bar */
/* context menu */
/* contents: json key and values */
/* contents: selected or hovered */
/* contents: section of collapsed items in an array */
/* contents: highlighting of search matches */
/* contents: inline tags inside the JSON document */
/* contents: table */
/* controls in modals: inputs, buttons, and \`a\` */
/* messages */
/* svelte-select */
/* color picker */
.jse-color-picker-popup.svelte-s1wu8v .picker_wrapper.popup,
.jse-color-picker-popup.svelte-s1wu8v .picker_wrapper.popup .picker_arrow::before,
.jse-color-picker-popup.svelte-s1wu8v .picker_wrapper.popup .picker_arrow::after {
  background: var(--jse-color-picker-background, var(--jse-panel-background, #ebebeb));
  line-height: normal;
}
.jse-color-picker-popup.svelte-s1wu8v .picker_slider,
.jse-color-picker-popup.svelte-s1wu8v .picker_sl,
.jse-color-picker-popup.svelte-s1wu8v .picker_editor input,
.jse-color-picker-popup.svelte-s1wu8v .picker_sample,
.jse-color-picker-popup.svelte-s1wu8v .picker_done button {
  box-shadow: var(--jse-color-picker-border-box-shadow, #cbcbcb 0 0 0 1px);
}
.jse-color-picker-popup.svelte-s1wu8v .picker_editor input {
  background: var(--jse-background-color, #fff);
  color: var(--jse-text-color, #4d4d4d);
}
.jse-color-picker-popup.svelte-s1wu8v .picker_done button {
  background: var(--jse-button-background, #e0e0e0);
  color: var(--jse-button-color, var(--jse-text-color, #4d4d4d));
}
.jse-color-picker-popup.svelte-s1wu8v .picker_done button:hover {
  background: var(--jse-button-background-highlight, #e7e7e7);
}`);
var HR = K('<div class="jse-color-picker-popup svelte-s1wu8v"></div>');
function VR(e, t) {
    it(t, !1);
    var n = g(t, "color", 8)
      , o = g(t, "onChange", 8)
      , a = g(t, "showOnTop", 8)
      , i = T()
      , s = () => {}
    ;
    ao(wt(function*() {
        var u, d = new ((u = yield Tk( () => import("./vanilla-picker.B6E6ObS_.js"), [])) === null || u === void 0 ? void 0 : u.default)({
            parent: r(i),
            color: n(),
            popup: a() ? "top" : "bottom",
            onDone(c) {
                var v = c.rgba[3] === 1 ? c.hex.substring(0, 7) : c.hex;
                o()(v)
            }
        });
        d.show(),
        s = () => {
            d.destroy()
        }
    })),
    Vo( () => {
        s()
    }
    ),
    Rt();
    var l = HR();
    nr(l, u => h(i, u), () => r(i)),
    L(e, l),
    st()
}
kt(`/* over all fonts, sizes, and colors */
/* "consolas" for Windows, "menlo" for Mac with fallback to "monaco", 'Ubuntu Mono' for Ubuntu */
/* (at Mac this font looks too large at 14px, but 13px is too small for the font on Windows) */
/* main, menu, modal */
/* jsoneditor modal */
/* tooltip in text mode */
/* panels: navigation bar, gutter, search box */
/* navigation-bar */
/* context menu */
/* contents: json key and values */
/* contents: selected or hovered */
/* contents: section of collapsed items in an array */
/* contents: highlighting of search matches */
/* contents: inline tags inside the JSON document */
/* contents: table */
/* controls in modals: inputs, buttons, and \`a\` */
/* messages */
/* svelte-select */
/* color picker */
.jse-color-picker-button.svelte-xeg9n6 {
  font-size: var(--jse-font-size-mono, 14px);
  width: var(--jse-color-picker-button-size, 1em);
  height: var(--jse-color-picker-button-size, 1em);
  box-sizing: border-box;
  padding: 0;
  margin: 2px 0 0 calc(0.5 * var(--jse-padding, 10px));
  display: inline-flex;
  vertical-align: top;
  border: 1px solid var(--jse-text-color, #4d4d4d);
  border-radius: 2px;
  background: inherit;
  outline: none;
}

.jse-color-picker-button.svelte-xeg9n6:not(.jse-readonly) {
  cursor: pointer;
}`);
var GR = K('<button type="button"></button>');
function JR(e, t) {
    it(t, !1);
    var n = T(void 0, !0)
      , o = T(void 0, !0)
      , {openAbsolutePopup: a} = Pi("absolute-popup")
      , i = g(t, "path", 9)
      , s = g(t, "value", 9)
      , l = g(t, "readOnly", 9)
      , u = g(t, "onPatch", 9)
      , d = g(t, "focus", 9);
    function c(m) {
        u()([{
            op: "replace",
            path: Tt(i()),
            value: m
        }]),
        v()
    }
    function v() {
        d()()
    }
    V( () => b(s()), () => {
        h(n, Sw(s()))
    }
    ),
    V( () => (b(l()),
    b(s())), () => {
        h(o, l() ? "Color ".concat(s()) : "Click to open a color picker")
    }
    ),
    An(),
    Rt(!0);
    var p, f = GR();
    Ee(m => {
        var x;
        p = At(f, 1, "jse-color-picker-button svelte-xeg9n6", null, p, m),
        ra(f, "background: ".concat((x = r(n)) !== null && x !== void 0 ? x : "")),
        zn(f, "title", r(o)),
        zn(f, "aria-label", r(o))
    }
    , [ () => ({
        "jse-readonly": l()
    })], pe),
    me("click", f, function(m) {
        var x, y;
        if (!l()) {
            var w = m.target
              , S = w.getBoundingClientRect().top
              , P = ((x = (y = ku(w)) === null || y === void 0 ? void 0 : y.innerHeight) !== null && x !== void 0 ? x : 0) - S < 300 && S > 300
              , R = {
                color: s(),
                onChange: c,
                showOnTop: P
            };
            a(VR, R, {
                anchor: w,
                closeOnOuterClick: !0,
                onClose: v,
                offsetTop: 18,
                offsetLeft: -8,
                height: 300
            })
        }
    }),
    L(e, f),
    st()
}
var Hd = 1e3
  , Yl = 100
  , Tu = 100
  , xc = 2e4
  , Us = [{
    start: 0,
    end: Yl
}]
  , KR = 1048576
  , YR = 1048576
  , Vd = 10485760
  , Gd = "Insert or paste contents, enter [ insert a new array, enter { to insert a new object, or start typing to insert a new value"
  , _p = "Open context menu (Click here, right click on the selection, or use the context menu button or Ctrl+Q)"
  , Ui = "hover-insert-inside"
  , Iu = "hover-insert-after"
  , eg = "hover-collection"
  , Jd = "valid"
  , tg = "repairable"
  , La = 336
  , Ua = 260
  , Il = 100
  , ng = {
    [Do.asc]: "ascending",
    [Do.desc]: "descending"
};
function Dw(e) {
    for (var t = ff(e, l => l.start), n = [t[0]], o = 0; o < t.length; o++) {
        var a = n.length - 1
          , i = n[a]
          , s = t[o];
        s.start <= i.end ? n[a] = {
            start: Math.min(i.start, s.start),
            end: Math.max(i.end, s.end)
        } : n.push(s)
    }
    return n
}
function Lv(e) {
    return jc(e) + Yl
}
function jc(e) {
    return Math.floor(e / Yl) * Yl
}
function Uv(e) {
    return !!e && (e.type === "space" || e.space === !0)
}
function ai(e) {
    return !!e && (e.type === "separator" || e.separator === !0)
}
function rg(e) {
    return !!e && e.type === "label" && typeof e.text == "string"
}
function ma(e) {
    return !!e && typeof e.onClick == "function"
}
function ms(e) {
    return !!e && e.type === "dropdown-button" && ma(e.main) && Array.isArray(e.items)
}
function og(e) {
    return !!e && e.type === "row" && Array.isArray(e.items)
}
function ag(e) {
    return !!e && e.type === "column" && Array.isArray(e.items)
}
function ig(e) {
    return On(e) && On(e.parseError)
}
function XR(e) {
    return On(e) && Array.isArray(e.validationErrors)
}
function QR(e) {
    return On(e) && Array.isArray(e.path) && typeof e.message == "string" && "severity"in e
}
function ZR(e) {
    return On(e) && QR(e) && typeof e.isChildError == "boolean"
}
function eM(e) {
    return On(e) && typeof e.action == "function" && On(e.props)
}
function go(e) {
    return e !== void 0 && e.type === "object"
}
function Br(e) {
    return e !== void 0 && e.type === "array"
}
function Sp(e) {
    return e !== void 0 && e.type === "value"
}
function es(e) {
    return go(e) || Br(e)
}
function qw(e) {
    return e !== void 0 && Array.isArray(e.searchResults)
}
function yc(e) {
    return !!e && e.type === "tree"
}
function sg(e) {
    return !!e && e.type === "text"
}
function lg(e) {
    return !!e && e.type === "mode"
}
function Dv(e) {
    var {json: t, expand: n} = e
      , o = function(a) {
        var {json: i, factory: s} = a;
        return Array.isArray(i) ? s.createArrayDocumentState() : On(i) ? s.createObjectDocumentState() : i !== void 0 ? s.createValueDocumentState() : void 0
    }({
        json: t,
        factory: Ep
    });
    return n && o ? Xo(t, o, [], n) : o
}
function Cp() {
    var {expanded: e} = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {
        expanded: !1
    };
    return {
        type: "array",
        expanded: e,
        visibleSections: Us,
        items: []
    }
}
function Op() {
    var {expanded: e} = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {
        expanded: !1
    };
    return {
        type: "object",
        expanded: e,
        properties: {}
    }
}
var Ep = {
    createObjectDocumentState: Op,
    createArrayDocumentState: Cp,
    createValueDocumentState: function() {
        return {
            type: "value"
        }
    }
};
function $w(e, t, n, o) {
    var {createObjectDocumentState: a, createArrayDocumentState: i, createValueDocumentState: s} = o;
    return function l(u, d, c) {
        if (Array.isArray(u)) {
            var v = Br(d) ? d : i();
            if (c.length === 0)
                return v;
            var p = Zr(c[0])
              , f = l(u[p], v.items[p], c.slice(1));
            return ga(v, ["items", c[0]], f)
        }
        if (On(u)) {
            var m = go(d) ? d : a();
            if (c.length === 0)
                return m;
            var x = c[0]
              , y = l(u[x], m.properties[x], c.slice(1));
            return ga(m, ["properties", x], y)
        }
        return Sp(d) ? d : s()
    }(e, t, n)
}
function Co(e, t) {
    return Xl(e, t, arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : [], (n, o) => {
        if (n !== void 0 && o !== void 0)
            return Array.isArray(n) ? Br(o) ? o : Cp({
                expanded: !!es(o) && o.expanded
            }) : On(n) ? go(o) ? o : Op({
                expanded: !!es(o) && o.expanded
            }) : Sp(o) ? o : void 0
    }
    , () => !0)
}
function Xl(e, t, n, o, a) {
    var i = o(e, t, n);
    if (Array.isArray(e) && Br(i) && a(i)) {
        var s = [];
        return Ap(e, i.visibleSections, u => {
            var d = n.concat(String(u))
              , c = Xl(e[u], i.items[u], d, o, a);
            c !== void 0 && (s[u] = c)
        }
        ),
        Gh(s, i.items) ? i : ke(ke({}, i), {}, {
            items: s
        })
    }
    if (On(e) && go(i) && a(i)) {
        var l = {};
        return Object.keys(e).forEach(u => {
            var d = n.concat(u)
              , c = Xl(e[u], i.properties[u], d, o, a);
            c !== void 0 && (l[u] = c)
        }
        ),
        Gh(Object.values(l), Object.values(i.properties)) ? i : ke(ke({}, i), {}, {
            properties: l
        })
    }
    return i
}
function Ap(e, t, n) {
    t.forEach(o => {
        var {start: a, end: i} = o;
        Cw(a, Math.min(e.length, i), n)
    }
    )
}
function Ql(e, t) {
    for (var n = e, o = [], a = 0; a < t.length; ) {
        if (Array.isArray(n)) {
            var i = t[a];
            o.push("items", i),
            n = n[Zr(i)]
        } else {
            if (!On(n))
                throw new Error("Cannot convert path: Object or Array expected at index ".concat(a));
            var s = t[a];
            o.push("properties", s),
            n = n[s]
        }
        a++
    }
    return o
}
function Xo(e, t, n, o) {
    for (var a = t, i = function(l) {
        var u = n.slice(0, l);
        a = Ks(e, a, u, (d, c) => {
            var v = es(c) && !c.expanded ? ke(ke({}, c), {}, {
                expanded: !0
            }) : c;
            return Br(v) ? function(p, f) {
                if (function(y, w) {
                    return y.some(S => w >= S.start && w < S.end)
                }(p.visibleSections, f))
                    return p;
                var m = jc(f)
                  , x = {
                    start: m,
                    end: Lv(m)
                };
                return ke(ke({}, p), {}, {
                    visibleSections: Dw(p.visibleSections.concat(x))
                })
            }(v, Zr(n[l])) : v
        }
        )
    }, s = 0; s < n.length; s++)
        i(s);
    return Ks(e, a, n, (l, u) => function(d, c, v, p) {
        return Xl(d, c, v, (f, m, x) => Array.isArray(f) && p(x) ? Br(m) ? m.expanded ? m : ke(ke({}, m), {}, {
            expanded: !0
        }) : Cp({
            expanded: !0
        }) : On(f) && p(x) ? go(m) ? m.expanded ? m : ke(ke({}, m), {}, {
            expanded: !0
        }) : Op({
            expanded: !0
        }) : m, f => es(f) && f.expanded)
    }(l, u, [], o))
}
function ug(e, t, n, o) {
    return Ks(e, t, n, (a, i) => o ? function(s, l, u) {
        return Xl(s, l, u, (d, c) => cg(c), () => !0)
    }(a, i, n) : cg(i))
}
function cg(e) {
    return Br(e) && e.expanded ? ke(ke({}, e), {}, {
        expanded: !1,
        visibleSections: Us
    }) : go(e) && e.expanded ? ke(ke({}, e), {}, {
        expanded: !1
    }) : e
}
function Fw(e, t, n) {
    var o = {
        json: e,
        documentState: t
    }
      , a = n.reduce( (i, s) => ({
        json: Zo(i.json, [s]),
        documentState: tM(i.json, i.documentState, s)
    }), o);
    return {
        json: a.json,
        documentState: Co(a.json, a.documentState)
    }
}
function tM(e, t, n) {
    if (nf(n))
        return dg(e, t, n, void 0);
    if (rf(n))
        return vg(e, t, n);
    if (Tc(n)) {
        var o = ea(e, n.path)
          , a = ya(e, t, o);
        return a ? gd(e, t, o, {
            type: "value",
            enforceString: a
        }) : t
    }
    return Xu(n) || vi(n) ? function(i, s, l) {
        if (vi(l) && l.from === l.path)
            return s;
        var u = s
          , d = ea(i, l.from)
          , c = ba(i, u, d);
        return vi(l) && (u = vg(i, u, {
            path: l.from
        })),
        u = dg(i, u, {
            path: l.path
        }, c),
        u
    }(e, t, n) : t
}
function ba(e, t, n) {
    try {
        return Ke(t, Ql(e, n))
    } catch {
        return
    }
}
function Rp(e, t, n, o, a) {
    var i = $w(e, t, n, a);
    return Yg(i, Ql(e, n), s => {
        var l = Ke(e, n);
        return o(l, s)
    }
    )
}
function gd(e, t, n, o) {
    return function(a, i, s, l, u) {
        var d = $w(a, i, s, u);
        return ga(d, Ql(a, s), l)
    }(e, t, n, o, Ep)
}
function Ks(e, t, n, o) {
    return Rp(e, t, n, o, Ep)
}
function dg(e, t, n, o) {
    var a = ea(e, n.path)
      , i = t;
    return i = Ks(e, i, rn(a), (s, l) => {
        if (!Br(l))
            return l;
        var u = Zr(gt(a))
          , {items: d, visibleSections: c} = l;
        return ke(ke({}, l), {}, {
            items: u < d.length ? jR(d, u, o !== void 0 ? [o] : Array(1)) : d,
            visibleSections: Bw(c, u, 1)
        })
    }
    ),
    gd(e, i, a, o)
}
function vg(e, t, n) {
    var o = ea(e, n.path)
      , a = rn(o)
      , i = Ke(e, a);
    return Array.isArray(i) ? Ks(e, t, a, (s, l) => {
        if (!Br(l))
            return l;
        var u = Zr(gt(o))
          , {items: d, visibleSections: c} = l;
        return ke(ke({}, l), {}, {
            items: d.slice(0, u).concat(d.slice(u + 1)),
            visibleSections: Bw(c, u, -1)
        })
    }
    ) : function(s, l, u) {
        var d = Ql(s, u);
        return Ia(l, d) ? Kg(l, Ql(s, u)) : l
    }(e, t, o)
}
function Bw(e, t, n) {
    return function(o) {
        for (var a = o.slice(0), i = 1; i < a.length; )
            a[i - 1].end === a[i].start && (a[i - 1] = {
                start: a[i - 1].start,
                end: a[i].end
            },
            a.splice(i)),
            i++;
        return a
    }(e.map(o => ({
        start: o.start > t ? o.start + n : o.start,
        end: o.end > t ? o.end + n : o.end
    })))
}
function ya(e, t, n) {
    var o, a = Ke(e, n), i = ba(e, t, n), s = Sp(i) ? i.enforceString : void 0;
    return typeof s == "boolean" ? s : typeof (o = a) == "string" && typeof gl(o, JSON) != "string"
}
function Su(e, t) {
    var n = arguments.length > 2 && arguments[2] !== void 0 && arguments[2]
      , o = e.indexOf(t);
    return o !== -1 ? n ? e.slice(o) : e.slice(o + 1) : []
}
function Mp(e, t) {
    var n = [];
    return function o(a, i, s) {
        n.push(s),
        Lr(a) && Br(i) && i.expanded && Ap(a, i.visibleSections, l => {
            o(a[l], i.items[l], s.concat(String(l)))
        }
        ),
        $r(a) && go(i) && i.expanded && Object.keys(a).forEach(l => {
            o(a[l], i.properties[l], s.concat(l))
        }
        )
    }(e, t, []),
    n
}
function Ww(e, t) {
    var n = !(arguments.length > 2 && arguments[2] !== void 0) || arguments[2]
      , o = [];
    return function a(i, s) {
        o.push({
            path: s,
            type: Qo.value
        });
        var l = ba(e, t, s);
        if (i && es(l) && l.expanded) {
            if (n && o.push({
                path: s,
                type: Qo.inside
            }),
            Lr(i)) {
                var u = Br(l) ? l.visibleSections : Us;
                Ap(i, u, d => {
                    var c = s.concat(String(d));
                    a(i[d], c),
                    n && o.push({
                        path: c,
                        type: Qo.after
                    })
                }
                )
            }
            $r(i) && Object.keys(i).forEach(d => {
                var c = s.concat(d);
                o.push({
                    path: c,
                    type: Qo.key
                }),
                a(i[d], c),
                n && o.push({
                    path: c,
                    type: Qo.after
                })
            }
            )
        }
    }(e, []),
    o
}
function Kd(e, t, n) {
    var o = Mp(e, t)
      , a = o.map(Tt).indexOf(Tt(n));
    if (a !== -1 && a < o.length - 1)
        return o[a + 1]
}
function ts(e, t, n) {
    var o = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : 10240;
    return Xo(e, t, n, yR({
        json: Ke(e, n)
    }, o) ? Nl : Pp)
}
function Yd(e, t, n) {
    var o = ba(e, t, n);
    return es(o) && o.expanded ? t : ts(e, t, n)
}
function Nl(e) {
    return e.length === 0 || e.length === 1 && e[0] === "0"
}
function fg(e) {
    return e.length === 0
}
function Pp() {
    return !0
}
function Ju() {
    return !1
}
function bo(e) {
    return e && e.type === Fn.after || !1
}
function qr(e) {
    return e && e.type === Fn.inside || !1
}
function Wr(e) {
    return e && e.type === Fn.key || !1
}
function jn(e) {
    return e && e.type === Fn.value || !1
}
function Hn(e) {
    return e && e.type === Fn.multi || !1
}
function md(e) {
    return Hn(e) && Wt(e.focusPath, e.anchorPath)
}
function Zl(e) {
    return Hn(e) || bo(e) || qr(e) || Wr(e) || jn(e)
}
function Xd(e) {
    return e && e.type === Fn.text || !1
}
function Si(e, t) {
    var n = [];
    return function(o, a, i) {
        if (a) {
            var s = Hi(a)
              , l = Qe(a);
            if (Wt(s, l))
                return i(s);
            if (o !== void 0) {
                var u = Vw(s, l);
                if (s.length === u.length || l.length === u.length)
                    return i(u);
                var d = io(s, l)
                  , c = Da(o, d)
                  , v = gi(o, d)
                  , p = Wa(o, d, c)
                  , f = Wa(o, d, v);
                if (!(p === -1 || f === -1)) {
                    var m = Ke(o, u);
                    if ($r(m)) {
                        for (var x = Object.keys(m), y = p; y <= f; y++) {
                            var w = i(u.concat(x[y]));
                            if (w !== void 0)
                                return w
                        }
                        return
                    }
                    if (Lr(m)) {
                        for (var S = p; S <= f; S++) {
                            var P = i(u.concat(String(S)));
                            if (P !== void 0)
                                return P
                        }
                        return
                    }
                    throw new Error("Failed to create selection")
                }
            }
        }
    }(e, t, o => {
        n.push(o)
    }
    ),
    n
}
function Hw(e) {
    return qr(e) ? e.path : rn(Qe(e))
}
function Da(e, t) {
    if (!Hn(t))
        return t.path;
    var n = Wa(e, t, t.anchorPath);
    return Wa(e, t, t.focusPath) < n ? t.focusPath : t.anchorPath
}
function gi(e, t) {
    if (!Hn(t))
        return t.path;
    var n = Wa(e, t, t.anchorPath);
    return Wa(e, t, t.focusPath) > n ? t.focusPath : t.anchorPath
}
function pg(e, t, n) {
    var o = arguments.length > 3 && arguments[3] !== void 0 && arguments[3];
    if (n) {
        var a = o ? Qe(n) : Da(e, n)
          , i = function(u, d, c) {
            var v = Mp(u, d)
              , p = v.map(Tt)
              , f = Tt(c)
              , m = p.indexOf(f);
            if (m !== -1 && m > 0)
                return v[m - 1]
        }(e, t, a);
        if (o)
            return qr(n) || bo(n) ? i !== void 0 ? io(a, a) : void 0 : i !== void 0 ? io(Hi(n), i) : void 0;
        if (bo(n) || qr(n))
            return nn(a);
        if (Wr(n)) {
            if (i === void 0 || i.length === 0)
                return;
            var s = rn(i)
              , l = Ke(e, s);
            return Array.isArray(l) || vn(i) ? nn(i) : Ka(i)
        }
        return jn(n),
        i !== void 0 ? nn(i) : void 0
    }
}
function hg(e, t, n, o) {
    if (!n)
        return {
            caret: void 0,
            previous: void 0,
            next: void 0
        };
    var a = Ww(e, t, o)
      , i = a.findIndex(s => Wt(s.path, Qe(n)) && String(s.type) === String(n.type));
    return {
        caret: i !== -1 ? a[i] : void 0,
        previous: i !== -1 && i > 0 ? a[i - 1] : void 0,
        next: i !== -1 && i < a.length - 1 ? a[i + 1] : void 0
    }
}
function bs(e, t) {
    for (var n = Mp(e, t), o = 0; o < n.length - 1 && n[o + 1].length > n[o].length; )
        o++;
    var a = n[o];
    return a === void 0 || a.length === 0 || Array.isArray(Ke(e, rn(a))) ? nn(a) : Ka(a)
}
function Ys(e, t) {
    if (t.length === 1) {
        var n = qo(t);
        if (n.op === "replace")
            return nn(ea(e, n.path))
    }
    if (!vn(t) && t.every(s => s.op === "move")) {
        var o = qo(t)
          , a = t.slice(1);
        if ((Xu(o) || vi(o)) && o.from !== o.path && a.every(s => (Xu(s) || vi(s)) && s.from === s.path))
            return Ka(ea(e, o.path))
    }
    var i = t.filter(s => s.op !== "test" && s.op !== "remove" && (s.op !== "move" || s.from !== s.path) && typeof s.path == "string").map(s => ea(e, s.path));
    if (!vn(i))
        return {
            type: Fn.multi,
            anchorPath: qo(i),
            focusPath: gt(i)
        }
}
function Vw(e, t) {
    for (var n = 0; n < e.length && n < t.length && e[n] === t[n]; )
        n++;
    return e.slice(0, n)
}
function wc(e) {
    return Wr(e) || jn(e) || md(e)
}
function gg(e, t) {
    return wc(t) && xr(Ke(e, Qe(t))) ? Qe(t) : rn(Qe(t))
}
function _a(e, t) {
    if (e.length < t.length)
        return !1;
    for (var n = 0; n < t.length; n++)
        if (e[n] !== t[n])
            return !1;
    return !0
}
function ja(e) {
    if (Fr(e)) {
        var {type: t, path: n} = e;
        return {
            type: t,
            path: n
        }
    }
    return e
}
function Ka(e) {
    return {
        type: Fn.key,
        path: e
    }
}
function zp(e, t) {
    return {
        type: Fn.key,
        path: e,
        edit: !0,
        initialValue: t
    }
}
function nn(e) {
    return {
        type: Fn.value,
        path: e
    }
}
function kc(e, t) {
    return {
        type: Fn.value,
        path: e,
        edit: !0,
        initialValue: t
    }
}
function Ya(e) {
    return {
        type: Fn.inside,
        path: e
    }
}
function Ba(e) {
    return {
        type: Fn.after,
        path: e
    }
}
function io(e, t) {
    var n = Vw(e, t)
      , o = e.length > n.length && t.length > n.length;
    return {
        type: Fn.multi,
        anchorPath: o ? n.concat(e[n.length]) : n,
        focusPath: o ? n.concat(t[n.length]) : n
    }
}
function Gw(e, t, n, o) {
    if (Wr(t))
        return String(gt(t.path));
    if (jn(t)) {
        var a = Ke(e, t.path);
        return typeof a == "string" ? a : o.stringify(a, null, n)
    }
    if (Hn(t)) {
        if (vn(t.focusPath))
            return o.stringify(e, null, n);
        var i = Hw(t)
          , s = Ke(e, i);
        if (Array.isArray(s)) {
            if (md(t)) {
                var l = Ke(e, t.focusPath);
                return o.stringify(l, null, n)
            }
            return Si(e, t).map(u => {
                var d = Ke(e, u);
                return "".concat(o.stringify(d, null, n), ",")
            }
            ).join(`
`)
        }
        return Si(e, t).map(u => {
            var d = gt(u)
              , c = Ke(e, u);
            return "".concat(o.stringify(d), ": ").concat(o.stringify(c, null, n), ",")
        }
        ).join(`
`)
    }
}
function Fr(e) {
    return (Wr(e) || jn(e)) && e.edit === !0
}
function Ps(e) {
    return Wr(e) || jn(e) || Hn(e)
}
function Nu(e) {
    return Wr(e) || jn(e) || md(e)
}
function qv(e) {
    switch (e.type) {
    case Qo.key:
        return Ka(e.path);
    case Qo.value:
        return nn(e.path);
    case Qo.after:
        return Ba(e.path);
    case Qo.inside:
        return Ya(e.path)
    }
}
function mg(e, t) {
    switch (e) {
    case Fn.key:
        return Ka(t);
    case Fn.value:
        return nn(t);
    case Fn.after:
        return Ba(t);
    case Fn.inside:
        return Ya(t);
    case Fn.multi:
    case Fn.text:
        return io(t, t)
    }
}
function Lu(e, t, n) {
    if (t)
        return eu(e, t, n) || _a(Hn(t) ? rn(t.focusPath) : t.path, n) ? t : void 0
}
function eu(e, t, n) {
    if (e === void 0 || !t)
        return !1;
    if (Wr(t) || qr(t) || bo(t))
        return Wt(t.path, n);
    if (jn(t))
        return _a(n, t.path);
    if (Hn(t)) {
        var o = Da(e, t)
          , a = gi(e, t)
          , i = rn(t.focusPath);
        if (!_a(n, i) || n.length <= i.length)
            return !1;
        var s = Wa(e, t, o)
          , l = Wa(e, t, a)
          , u = Wa(e, t, n);
        return u !== -1 && u >= s && u <= l
    }
    return !1
}
function Wa(e, t, n) {
    var o = rn(t.focusPath);
    if (!_a(n, o) || n.length <= o.length)
        return -1;
    var a = n[o.length]
      , i = Ke(e, o);
    if ($r(i))
        return Object.keys(i).indexOf(a);
    if (Lr(i)) {
        var s = Zr(a);
        if (s < i.length)
            return s
    }
    return -1
}
function Qe(e) {
    return Hn(e) ? e.focusPath : e.path
}
function Hi(e) {
    return Hn(e) ? e.anchorPath : e.path
}
function da() {
    for (var e = [], t = arguments.length, n = new Array(t), o = 0; o < t; o++)
        n[o] = arguments[o];
    for (var a of n)
        if (typeof a == "string" && e.push(a),
        a && typeof a == "object")
            for (var i in a)
                Object.hasOwnProperty.call(a, i) && a[i] && e.push(i);
    return e.join(" ")
}
function _c(e, t, n) {
    return da("jse-value", "jse-" + bp(e, n), {
        "jse-url": pd(e),
        "jse-empty": typeof e == "string" && e.length === 0,
        "jse-table-cell": t === zr.table
    })
}
kt(`/* over all fonts, sizes, and colors */
/* "consolas" for Windows, "menlo" for Mac with fallback to "monaco", 'Ubuntu Mono' for Ubuntu */
/* (at Mac this font looks too large at 14px, but 13px is too small for the font on Windows) */
/* main, menu, modal */
/* jsoneditor modal */
/* tooltip in text mode */
/* panels: navigation bar, gutter, search box */
/* navigation-bar */
/* context menu */
/* contents: json key and values */
/* contents: selected or hovered */
/* contents: section of collapsed items in an array */
/* contents: highlighting of search matches */
/* contents: inline tags inside the JSON document */
/* contents: table */
/* controls in modals: inputs, buttons, and \`a\` */
/* messages */
/* svelte-select */
/* color picker */
.jse-value.jse-string.svelte-f9kmxj {
  color: var(--jse-value-color-string, #008000);
}
.jse-value.jse-object.svelte-f9kmxj, .jse-value.jse-array.svelte-f9kmxj {
  min-width: 16px;
  color: var(--jse-delimiter-color, rgba(0, 0, 0, 0.38));
}
.jse-value.jse-number.svelte-f9kmxj {
  color: var(--jse-value-color-number, #ee422e);
}
.jse-value.jse-boolean.svelte-f9kmxj {
  color: var(--jse-value-color-boolean, #ff8c00);
}
.jse-value.jse-null.svelte-f9kmxj {
  color: var(--jse-value-color-null, #004ed0);
}
.jse-value.jse-invalid.svelte-f9kmxj {
  color: var(--jse-text-color, #4d4d4d);
}
.jse-value.jse-url.svelte-f9kmxj {
  color: var(--jse-value-color-url, #008000);
  text-decoration: underline;
}

div.jse-editable-div.svelte-f9kmxj {
  min-width: 2em;
  padding: 0 5px;
  box-sizing: border-box;
  outline: none;
  border-radius: 1px;
  vertical-align: top;
  cursor: text !important;
  word-break: normal;
  white-space: pre-wrap;
  overflow-wrap: anywhere;
}
div.jse-editable-div.jse-short-text.svelte-f9kmxj {
  overflow-wrap: normal;
}
div.jse-editable-div.jse-table-cell.svelte-f9kmxj {
  overflow-wrap: normal;
  white-space: nowrap;
}
div.jse-editable-div[contenteditable=true].svelte-f9kmxj {
  outline: var(--jse-edit-outline, 2px solid #656565);
  background: var(--jse-background-color, #fff);
  position: relative;
  display: inline-block;
  border-radius: 0;
  z-index: 3;
}
div.jse-editable-div.jse-empty.svelte-f9kmxj:not(:focus) {
  outline: 1px dotted var(--jse-tag-background, rgba(0, 0, 0, 0.2));
  -moz-outline-radius: 2px;
}
div.jse-editable-div.jse-empty.svelte-f9kmxj::after {
  pointer-events: none;
  color: var(--jse-tag-background, rgba(0, 0, 0, 0.2));
}`);
var nM = K('<div role="textbox" tabindex="0" contenteditable="true" spellcheck="false"></div>');
function Jw(e, t) {
    it(t, !1);
    var n = Hr("jsoneditor:EditableDiv")
      , o = g(t, "value", 9)
      , a = g(t, "initialValue", 9)
      , i = g(t, "shortText", 9, !1)
      , s = g(t, "label", 9)
      , l = g(t, "onChange", 9)
      , u = g(t, "onCancel", 9)
      , d = g(t, "onFind", 9)
      , c = g(t, "onPaste", 9, br)
      , v = g(t, "onValueClass", 9, () => "")
      , p = T(void 0, !0)
      , f = T(void 0, !0)
      , m = !1;
    function x() {
        return r(p) ? function(S) {
            return S.replace(/\n$/, "")
        }(r(p).innerText) : ""
    }
    function y(S) {
        r(p) && Oo(p, r(p).innerText = Js(S))
    }
    ao( () => {
        n("onMount", {
            value: o(),
            initialValue: a()
        }),
        y(a() !== void 0 ? a() : o()),
        r(p) && function(S) {
            if (S.firstChild != null) {
                var P = document.createRange()
                  , R = window.getSelection();
                P.setStart(S, 1),
                P.collapse(!0),
                R?.removeAllRanges(),
                R?.addRange(P)
            } else
                S.focus()
        }(r(p))
    }
    ),
    Vo( () => {
        var S = x();
        n("onDestroy", {
            closed: m,
            value: o(),
            newValue: S
        }),
        m || S === o() || l()(S, hi.no)
    }
    ),
    V( () => (b(v()),
    b(o())), () => {
        h(f, v()(o()))
    }
    ),
    An(),
    Rt(!0);
    var w = nM();
    nr(w, S => h(p, S), () => r(p)),
    Ee(S => {
        zn(w, "aria-label", s()),
        At(w, 1, S, "svelte-f9kmxj")
    }
    , [ () => _i((b(da),
    r(f),
    b(i()),
    N( () => da("jse-editable-div", r(f), {
        "jse-short-text": i()
    }))))], pe),
    me("input", w, function() {
        var S = x();
        S === "" && y(""),
        h(f, v()(S))
    }),
    me("keydown", w, function(S) {
        S.stopPropagation();
        var P = Ja(S);
        if (P === "Escape" && (S.preventDefault(),
        m = !0,
        u()()),
        P === "Enter" || P === "Tab") {
            S.preventDefault(),
            m = !0;
            var R = x();
            l()(R, hi.nextInside)
        }
        P === "Ctrl+F" && (S.preventDefault(),
        d()(!1)),
        P === "Ctrl+H" && (S.preventDefault(),
        d()(!0))
    }),
    me("paste", w, function(S) {
        if (S.stopPropagation(),
        c() && S.clipboardData) {
            var P = S.clipboardData.getData("text/plain");
            c()(P)
        }
    }),
    me("blur", w, function() {
        var S = document.hasFocus()
          , P = x();
        n("handleBlur", {
            hasFocus: S,
            closed: m,
            value: o(),
            newValue: P
        }),
        document.hasFocus() && !m && (m = !0,
        P !== o() && l()(P, hi.self))
    }),
    L(e, w),
    st()
}
function rM(e, t) {
    it(t, !1);
    var n = g(t, "path", 9)
      , o = g(t, "value", 9)
      , a = g(t, "selection", 9)
      , i = g(t, "mode", 9)
      , s = g(t, "parser", 9)
      , l = g(t, "normalization", 9)
      , u = g(t, "enforceString", 9)
      , d = g(t, "onPatch", 9)
      , c = g(t, "onPasteJson", 9)
      , v = g(t, "onSelect", 9)
      , p = g(t, "onFind", 9)
      , f = g(t, "focus", 9)
      , m = g(t, "findNextInside", 9);
    function x(P) {
        return u() ? P : gl(P, s())
    }
    function y() {
        v()(nn(n())),
        f()()
    }
    Rt(!0);
    var w = pe( () => (b(l()),
    b(o()),
    N( () => l().escapeValue(o()))))
      , S = pe( () => (b(Fr),
    b(a()),
    N( () => Fr(a()) ? a().initialValue : void 0)));
    Jw(e, {
        get value() {
            return r(w)
        },
        get initialValue() {
            return r(S)
        },
        label: "Edit value",
        onChange: function(P, R) {
            d()([{
                op: "replace",
                path: Tt(n()),
                value: x(l().unescapeValue(P))
            }], (k, I, H) => {
                if (!H || Wt(n(), Qe(H)))
                    return {
                        state: I,
                        selection: R === hi.nextInside ? m()(n()) : nn(n())
                    }
            }
            ),
            f()()
        },
        onCancel: y,
        onPaste: function(P) {
            try {
                var R = s().parse(P);
                xr(R) && c()({
                    path: n(),
                    contents: R,
                    onPasteAsJson: () => {
                        y();
                        var k = [{
                            op: "replace",
                            path: Tt(n()),
                            value: R
                        }];
                        d()(k, (I, H) => ({
                            state: ts(I, H, n())
                        }))
                    }
                })
            } catch {}
        },
        get onFind() {
            return p()
        },
        onValueClass: function(P) {
            return _c(x(l().unescapeValue(P)), i(), s())
        }
    }),
    st()
}
function zs(e, t, n) {
    var o = rn(t)
      , a = Ke(e, o);
    if (Lr(a)) {
        var i = Zr(gt(t));
        return n.map( (d, c) => ({
            op: "add",
            path: Tt(o.concat(String(i + c))),
            value: d.value
        }))
    }
    if ($r(a)) {
        var s = gt(t)
          , l = Object.keys(a)
          , u = s !== void 0 ? Su(l, s, !0) : [];
        return [...n.map(d => {
            var c = _u(d.key, l);
            return {
                op: "add",
                path: Tt(o.concat(c)),
                value: d.value
            }
        }
        ), ...u.map(d => Ci(o, d))]
    }
    throw new Error("Cannot create insert operations: parent must be an Object or Array")
}
function $v(e, t, n) {
    var o = Ke(e, t);
    if (Array.isArray(o)) {
        var a = o.length;
        return n.map( (i, s) => ({
            op: "add",
            path: Tt(t.concat(String(a + s))),
            value: i.value
        }))
    }
    return n.map(i => {
        var s = _u(i.key, Object.keys(o));
        return {
            op: "add",
            path: Tt(t.concat(s)),
            value: i.value
        }
    }
    )
}
function Cu(e, t, n, o) {
    var a = _u(o, t.filter(s => s !== n))
      , i = Su(t, n, !1);
    return [{
        op: "move",
        from: Tt(e.concat(n)),
        path: Tt(e.concat(a))
    }, ...i.map(s => Ci(e, s))]
}
function Kw(e, t) {
    var n = gt(t);
    if (vn(n))
        throw new Error("Cannot duplicate root object");
    var o = rn(n)
      , a = gt(n)
      , i = Ke(e, o);
    if (Lr(i)) {
        var s = gt(t)
          , l = s ? Zr(gt(s)) + 1 : 0;
        return [...t.map( (c, v) => ({
            op: "copy",
            from: Tt(c),
            path: Tt(o.concat(String(v + l)))
        }))]
    }
    if ($r(i)) {
        var u = Object.keys(i)
          , d = a !== void 0 ? Su(u, a, !1) : [];
        return [...t.map(c => {
            var v = _u(gt(c), u);
            return {
                op: "copy",
                from: Tt(c),
                path: Tt(o.concat(v))
            }
        }
        ), ...d.map(c => Ci(o, c))]
    }
    throw new Error("Cannot create duplicate operations: parent must be an Object or Array")
}
function Yw(e, t) {
    if (jn(t))
        return [{
            op: "move",
            from: Tt(t.path),
            path: ""
        }];
    if (!Hn(t))
        throw new Error("Cannot create extract operations: parent must be an Object or Array");
    var n = rn(t.focusPath)
      , o = Ke(e, n);
    if (Lr(o)) {
        var a = Si(e, t).map(s => {
            var l = Zr(gt(s));
            return o[l]
        }
        );
        return [{
            op: "replace",
            path: "",
            value: a
        }]
    }
    if ($r(o)) {
        var i = {};
        return Si(e, t).forEach(s => {
            var l = String(gt(s));
            i[l] = o[l]
        }
        ),
        [{
            op: "replace",
            path: "",
            value: i
        }]
    }
    throw new Error("Cannot extract: unsupported type of selection " + JSON.stringify(t))
}
function Xw(e, t, n, o) {
    if (Wr(t)) {
        var a = Ow(n, o)
          , i = rn(t.path)
          , s = Ke(e, i);
        return Cu(i, Object.keys(s), gt(t.path), typeof a == "string" ? a : n)
    }
    if (jn(t) || Hn(t) && vn(t.focusPath))
        try {
            return [{
                op: "replace",
                path: Tt(Qe(t)),
                value: wu(n, I => yu(I, o))
            }]
        } catch {
            return [{
                op: "replace",
                path: Tt(Qe(t)),
                value: n
            }]
        }
    if (Hn(t)) {
        var l = Qd(n, o);
        return function(I, H, Y) {
            var M = qo(H)
              , Z = rn(M)
              , ae = Ke(I, Z);
            if (Lr(ae)) {
                var ee = qo(H)
                  , se = ee ? Zr(gt(ee)) : 0;
                return [...Sc(H), ...Y.map( (Pe, Ve) => ({
                    op: "add",
                    path: Tt(Z.concat(String(Ve + se))),
                    value: Pe.value
                }))]
            }
            if ($r(ae)) {
                var _e = gt(H)
                  , fe = rn(_e)
                  , Oe = gt(_e)
                  , De = Object.keys(ae)
                  , Ne = Oe !== void 0 ? Su(De, Oe, !1) : []
                  , je = new Set(H.map(Pe => gt(Pe)))
                  , Ae = De.filter(Pe => !je.has(Pe));
                return [...Sc(H), ...Y.map(Pe => {
                    var Ve = _u(Pe.key, Ae);
                    return {
                        op: "add",
                        path: Tt(fe.concat(Ve)),
                        value: Pe.value
                    }
                }
                ), ...Ne.map(Pe => Ci(fe, Pe))]
            }
            throw new Error("Cannot create replace operations: parent must be an Object or Array")
        }(e, Si(e, t), l)
    }
    if (bo(t)) {
        var u = Qd(n, o)
          , d = t.path
          , c = rn(d)
          , v = Ke(e, c);
        if (Lr(v)) {
            var p = Zr(gt(d));
            return zs(e, c.concat(String(p + 1)), u)
        }
        if ($r(v)) {
            var f = String(gt(d))
              , m = Object.keys(v);
            if (vn(m) || gt(m) === f)
                return $v(e, c, u);
            var x = m.indexOf(f)
              , y = m[x + 1];
            return zs(e, c.concat(y), u)
        }
        throw new Error("Cannot create insert operations: parent must be an Object or Array")
    }
    if (qr(t)) {
        var w = Qd(n, o)
          , S = t.path
          , P = Ke(e, S);
        if (Lr(P))
            return zs(e, S.concat("0"), w);
        if ($r(P)) {
            var R = Object.keys(P);
            if (vn(R))
                return $v(e, S, w);
            var k = qo(R);
            return zs(e, S.concat(k), w)
        }
        throw new Error("Cannot create insert operations: parent must be an Object or Array")
    }
    throw new Error("Cannot insert: unsupported type of selection " + JSON.stringify(t))
}
function Sc(e) {
    return e.map(t => ({
        op: "remove",
        path: Tt(t)
    })).reverse()
}
function Ci(e, t) {
    return {
        op: "move",
        from: Tt(e.concat(t)),
        path: Tt(e.concat(t))
    }
}
function Qd(e, t) {
    var n = /^\s*{/.test(e)
      , o = /^\s*\[/.test(e)
      , a = Ow(e, t)
      , i = a !== void 0 ? a : wu(e, s => yu(s, t));
    return n && On(i) || o && Array.isArray(i) ? [{
        key: "New item",
        value: i
    }] : Array.isArray(i) ? i.map( (s, l) => ({
        key: "New item " + l,
        value: s
    })) : On(i) ? Object.keys(i).map(s => ({
        key: s,
        value: i[s]
    })) : [{
        key: "New item",
        value: i
    }]
}
function Qw(e, t) {
    if (Wr(t)) {
        var n = rn(t.path)
          , o = Ke(e, n)
          , a = Cu(n, Object.keys(o), gt(t.path), "");
        return {
            operations: a,
            newSelection: Ys(e, a)
        }
    }
    if (jn(t))
        return {
            operations: [{
                op: "replace",
                path: Tt(t.path),
                value: ""
            }],
            newSelection: t
        };
    if (Hn(t)) {
        var i = Si(e, t)
          , s = Sc(i)
          , l = gt(i);
        if (vn(l))
            return {
                operations: [{
                    op: "replace",
                    path: "",
                    value: ""
                }],
                newSelection: nn([])
            };
        var u = rn(l)
          , d = Ke(e, u);
        if (Lr(d)) {
            var c = qo(i)
              , v = Zr(gt(c));
            return {
                operations: s,
                newSelection: v === 0 ? Ya(u) : Ba(u.concat(String(v - 1)))
            }
        }
        if ($r(d)) {
            var p = Object.keys(d)
              , f = qo(i)
              , m = gt(f)
              , x = p.indexOf(m)
              , y = p[x - 1];
            return {
                operations: s,
                newSelection: x === 0 ? Ya(u) : Ba(u.concat(y))
            }
        }
        throw new Error("Cannot create remove operations: parent must be an Object or Array")
    }
    throw new Error("Cannot remove: unsupported type of selection " + JSON.stringify(t))
}
function Zw(e, t) {
    var n = function(o, a) {
        if (vn(a) || !a.every(vi))
            return a;
        var i = [];
        for (var s of a) {
            var l = bg(Ao(s.from))
              , u = bg(Ao(s.path));
            if (!l || !u)
                return a;
            i.push({
                from: l,
                path: u,
                operation: s
            })
        }
        var d = i[0].path.parent
          , c = Ke(o, d);
        if (!$r(c) || !i.every(m => function(x, y) {
            return Wt(x.from.parent, y) && Wt(x.path.parent, y)
        }(m, d)))
            return a;
        var v = function(m, x) {
            var y = Object.keys(x)
              , w = y.slice();
            for (var S of m) {
                var P = w.indexOf(S.from.key);
                P !== -1 && (w.splice(P, 1),
                w.push(S.path.key))
            }
            for (var R = 0; R < y.length && y[R] === w[R]; )
                R++;
            return w[R]
        }(i, o)
          , p = m => m.operation
          , f = i.filter(m => m.operation.from !== m.operation.path);
        return f.some(m => m.path.key === v) ? f.map(p) : [Ci(d, v), ...f.map(p)]
    }(e, t);
    return of(e, n, {
        before: (o, a, i) => {
            if (rf(a)) {
                var s = Ao(a.path);
                return {
                    revertOperations: [...i, ...Zd(o, s)]
                }
            }
            if (vi(a)) {
                var l = Ao(a.from);
                return {
                    revertOperations: a.from === a.path ? [a, ...Zd(o, l)] : [...i, ...Zd(o, l)]
                }
            }
            return {
                document: o
            }
        }
    })
}
function bg(e) {
    return e.length > 0 ? {
        parent: rn(e),
        key: gt(e)
    } : void 0
}
function Zd(e, t) {
    var n = rn(t)
      , o = gt(t)
      , a = Ke(e, n);
    return $r(a) ? Su(Object.keys(a), o, !1).map(i => Ci(n, i)) : []
}
function xg(e) {
    var t = e.activeIndex < e.items.length - 1 ? e.activeIndex + 1 : e.items.length > 0 ? 0 : -1
      , n = e.items[t]
      , o = e.items.map( (a, i) => ke(ke({}, a), {}, {
        active: i === t
    }));
    return ke(ke({}, e), {}, {
        items: o,
        activeItem: n,
        activeIndex: t
    })
}
function jg(e, t) {
    var n, o = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, a = e.toLowerCase(), i = (n = o?.maxResults) !== null && n !== void 0 ? n : 1 / 0, s = o?.columns, l = [], u = [];
    function d(y) {
        l.length >= i || l.push(y)
    }
    function c(y, w) {
        if (Lr(w)) {
            var S = u.length;
            u.push("0");
            for (var P = 0; P < w.length; P++)
                if (u[S] = String(P),
                c(y, w[P]),
                l.length >= i)
                    return;
            u.pop()
        } else if ($r(w)) {
            var R = Object.keys(w)
              , k = u.length;
            for (var I of (u.push(""),
            R))
                if (u[k] = I,
                yg(I, y, u, oa.key, d),
                c(y, w[I]),
                l.length >= i)
                    return;
            u.pop()
        } else
            yg(String(w), y, u, oa.value, d)
    }
    if (e === "")
        return [];
    if (s) {
        if (!Array.isArray(t))
            throw new Error("json must be an Array when option columns is defined");
        for (var v = 0; v < t.length; v++) {
            u[0] = String(v);
            for (var p = t[v], f = 0; f < s.length; f++) {
                var m = s[f];
                if (m.length === 1)
                    u[1] = m[0];
                else
                    for (var x = 0; x < m.length; x++)
                        u[x + 1] = m[x];
                for (; u.length > m.length + 1; )
                    u.pop();
                c(a, Ke(p, m))
            }
            if (l.length >= i)
                break
        }
        return l
    }
    return c(a, t),
    l
}
function yg(e, t, n, o, a) {
    var i = e.toLowerCase()
      , s = 0
      , l = -1
      , u = -1;
    do
        (u = i.indexOf(t, l)) !== -1 && (l = u + t.length,
        a({
            path: n.slice(0),
            field: o,
            fieldIndex: s,
            start: u,
            end: l
        }),
        s++);
    while (u !== -1)
}
function Fv(e, t, n, o) {
    return e.substring(0, n) + t + e.substring(o)
}
function wg(e, t, n) {
    var o = e;
    return Qu(n, a => {
        o = Fv(o, t, a.start, a.end)
    }
    ),
    o
}
function oM(e, t, n, o, a) {
    var {field: i, path: s, start: l, end: u} = o;
    if (i === oa.key) {
        var d = rn(s)
          , c = Ke(e, d)
          , v = gt(s)
          , p = Cu(d, Object.keys(c), v, Fv(v, n, l, u));
        return {
            newSelection: Ys(e, p),
            operations: p
        }
    }
    if (i === oa.value) {
        var f = Ke(e, s);
        if (f === void 0)
            throw new Error("Cannot replace: path not found ".concat(Tt(s)));
        var m = typeof f == "string" ? f : String(f)
          , x = ya(e, t, s)
          , y = Fv(m, n, l, u)
          , w = [{
            op: "replace",
            path: Tt(s),
            value: x ? y : gl(y, a)
        }];
        return {
            newSelection: Ys(e, w),
            operations: w
        }
    }
    throw new Error("Cannot replace: unknown type of search result field ".concat(i))
}
function kg(e) {
    return e.path.concat(e.field, String(e.fieldIndex))
}
function _g(e) {
    var t = qw(e) ? e.searchResults.filter(n => n.field === oa.key) : void 0;
    return t && t.length > 0 ? t : void 0
}
function Sg(e) {
    var t = qw(e) ? e.searchResults.filter(n => n.field === oa.value) : void 0;
    return t && t.length > 0 ? t : void 0
}
var aM = {
    createObjectDocumentState: () => ({
        type: "object",
        properties: {}
    }),
    createArrayDocumentState: () => ({
        type: "array",
        items: []
    }),
    createValueDocumentState: () => ({
        type: "value"
    })
};
function e1(e, t) {
    return t.reduce( (n, o) => function(a, i, s, l) {
        return Rp(a, i, s, l, aM)
    }(e, n, o.path, (a, i) => ke(ke({}, i), {}, {
        searchResults: i.searchResults ? i.searchResults.concat(o) : [o]
    })), void 0)
}
function Cc(e) {
    var t, n = (t = e?.searchResults) !== null && t !== void 0 ? t : [], o = go(e) ? Object.values(e.properties).flatMap(Cc) : Br(e) ? e.items.flatMap(Cc) : [];
    return n.concat(o)
}
kt(`/* over all fonts, sizes, and colors */
/* "consolas" for Windows, "menlo" for Mac with fallback to "monaco", 'Ubuntu Mono' for Ubuntu */
/* (at Mac this font looks too large at 14px, but 13px is too small for the font on Windows) */
/* main, menu, modal */
/* jsoneditor modal */
/* tooltip in text mode */
/* panels: navigation bar, gutter, search box */
/* navigation-bar */
/* context menu */
/* contents: json key and values */
/* contents: selected or hovered */
/* contents: section of collapsed items in an array */
/* contents: highlighting of search matches */
/* contents: inline tags inside the JSON document */
/* contents: table */
/* controls in modals: inputs, buttons, and \`a\` */
/* messages */
/* svelte-select */
/* color picker */
.jse-highlight.svelte-5fb7bl {
  background-color: var(--jse-search-match-color, #ffe665);
  outline: var(--jse-search-match-outline, none);
}
.jse-highlight.jse-active.svelte-5fb7bl {
  background-color: var(--jse-search-match-active-color, var(--jse-search-match-color, #ffe665));
  outline: var(--jse-search-match-outline, 2px solid #e0be00);
}`);
var iM = K("<span> </span>");
function t1(e, t) {
    it(t, !1);
    var n = T()
      , o = g(t, "text", 8)
      , a = g(t, "searchResultItems", 8);
    V( () => (b(o()),
    b(a())), () => {
        h(n, function(s, l) {
            var u = []
              , d = 0;
            for (var c of l) {
                var v = s.slice(d, c.start);
                v !== "" && u.push({
                    resultIndex: void 0,
                    type: "normal",
                    text: v,
                    active: !1
                });
                var p = s.slice(c.start, c.end);
                u.push({
                    resultIndex: c.resultIndex,
                    type: "highlight",
                    text: p,
                    active: c.active
                }),
                d = c.end
            }
            var f = gt(l);
            return f && f.end < s.length && u.push({
                type: "normal",
                text: s.slice(f.end),
                resultIndex: void 0,
                active: !1
            }),
            u
        }(String(o()), a()))
    }
    ),
    An(),
    Rt();
    var i = jr();
    wr(ht(i), 1, () => r(n), Rr, (s, l) => {
        var u = jr()
          , d = ht(u)
          , c = p => {
            var f = Jr();
            Ee( () => lt(f, (r(l),
            N( () => r(l).text)))),
            L(p, f)
        }
          , v = p => {
            var f, m = iM(), x = z(m);
            Ee( (y, w, S) => {
                f = At(m, 1, "jse-highlight svelte-5fb7bl", null, f, y),
                zn(m, "data-search-result-index", w),
                lt(x, S)
            }
            , [ () => ({
                "jse-active": r(l).active
            }), () => (r(l),
            N( () => String(r(l).resultIndex))), () => (b(Js),
            r(l),
            N( () => Js(r(l).text)))], pe),
            L(p, m)
        }
        ;
        ie(d, p => {
            r(l),
            N( () => r(l).type === "normal") ? p(c) : p(v, !1)
        }
        ),
        L(s, u)
    }
    ),
    L(e, i),
    st()
}
function Ku(e) {
    var t = 1e3;
    if (e < 900)
        return e.toFixed() + " B";
    var n = e / t;
    if (n < 900)
        return n.toFixed(1) + " KB";
    var o = n / t;
    if (o < 900)
        return o.toFixed(1) + " MB";
    var a = o / t;
    return a < 900 ? a.toFixed(1) + " GB" : (a / t).toFixed(1) + " TB"
}
kt(`/* over all fonts, sizes, and colors */
/* "consolas" for Windows, "menlo" for Mac with fallback to "monaco", 'Ubuntu Mono' for Ubuntu */
/* (at Mac this font looks too large at 14px, but 13px is too small for the font on Windows) */
/* main, menu, modal */
/* jsoneditor modal */
/* tooltip in text mode */
/* panels: navigation bar, gutter, search box */
/* navigation-bar */
/* context menu */
/* contents: json key and values */
/* contents: selected or hovered */
/* contents: section of collapsed items in an array */
/* contents: highlighting of search matches */
/* contents: inline tags inside the JSON document */
/* contents: table */
/* controls in modals: inputs, buttons, and \`a\` */
/* messages */
/* svelte-select */
/* color picker */
.jse-tag.svelte-jlw0fj {
  border: none;
  font-size: 80%;
  font-family: var(--jse-font-family, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif);
  color: var(--jse-tag-color, var(--jse-text-color-inverse, #fff));
  background: var(--jse-tag-background, rgba(0, 0, 0, 0.2));
  border-radius: 2px;
  cursor: pointer;
  display: inline-block;
  padding: 0 4px;
  line-height: normal;
  margin: 1px 0;
}
.jse-tag.svelte-jlw0fj:hover {
  opacity: 0.8;
}
.jse-tag.disabled.svelte-jlw0fj {
  opacity: 0.7;
  cursor: inherit;
}`);
var sM = K('<button type="button"><!></button>');
function Yu(e, t) {
    it(t, !0);
    var n, o = mo( () => t.onclick ? i => {
        i.preventDefault(),
        i.stopPropagation(),
        t.onclick()
    }
    : void 0), a = sM();
    a.__click = function() {
        for (var i, s = arguments.length, l = new Array(s), u = 0; u < s; u++)
            l[u] = arguments[u];
        (i = r(o)) === null || i === void 0 || i.apply(this, l)
    }
    ,
    function(i, s) {
        for (var l = arguments.length, u = new Array(l > 2 ? l - 2 : 0), d = 2; d < l; d++)
            u[d - 2] = arguments[d];
        var c, v = i, p = zh;
        Ti( () => {
            p !== (p = s()) && (c && (Ho(c),
            c = null),
            c = Oa( () => p(v, ...u)))
        }
        , gu)
    }(z(a), () => {
        var i;
        return (i = t.children) !== null && i !== void 0 ? i : zh
    }
    ),
    Ee(i => n = At(a, 1, "jse-tag svelte-jlw0fj", null, n, i), [ () => ({
        disabled: !t.onclick
    })]),
    L(e, a),
    st()
}
ju(["click"]);
function lM(e, t, n) {
    typeof t.value == "string" && r(n) && kp(e) && (e.preventDefault(),
    e.stopPropagation(),
    window.open(t.value, "_blank"))
}
function uM(e, t) {
    t.readOnly || (e.preventDefault(),
    t.onSelect(kc(t.path)))
}
kt(`/* over all fonts, sizes, and colors */
/* "consolas" for Windows, "menlo" for Mac with fallback to "monaco", 'Ubuntu Mono' for Ubuntu */
/* (at Mac this font looks too large at 14px, but 13px is too small for the font on Windows) */
/* main, menu, modal */
/* jsoneditor modal */
/* tooltip in text mode */
/* panels: navigation bar, gutter, search box */
/* navigation-bar */
/* context menu */
/* contents: json key and values */
/* contents: selected or hovered */
/* contents: section of collapsed items in an array */
/* contents: highlighting of search matches */
/* contents: inline tags inside the JSON document */
/* contents: table */
/* controls in modals: inputs, buttons, and \`a\` */
/* messages */
/* svelte-select */
/* color picker */
.jse-value.jse-string.svelte-c0g9qz {
  color: var(--jse-value-color-string, #008000);
}
.jse-value.jse-object.svelte-c0g9qz, .jse-value.jse-array.svelte-c0g9qz {
  min-width: 16px;
  color: var(--jse-delimiter-color, rgba(0, 0, 0, 0.38));
}
.jse-value.jse-number.svelte-c0g9qz {
  color: var(--jse-value-color-number, #ee422e);
}
.jse-value.jse-boolean.svelte-c0g9qz {
  color: var(--jse-value-color-boolean, #ff8c00);
}
.jse-value.jse-null.svelte-c0g9qz {
  color: var(--jse-value-color-null, #004ed0);
}
.jse-value.jse-invalid.svelte-c0g9qz {
  color: var(--jse-text-color, #4d4d4d);
}
.jse-value.jse-url.svelte-c0g9qz {
  color: var(--jse-value-color-url, #008000);
  text-decoration: underline;
}

.jse-value.svelte-c0g9qz {
  display: inline-block;
  min-width: 2em;
  padding: 0 5px;
  box-sizing: border-box;
  outline: none;
  border-radius: 1px;
  vertical-align: top;
  word-break: normal;
  overflow-wrap: anywhere;
  white-space: pre-wrap;
}
.jse-value.jse-table-cell.svelte-c0g9qz {
  overflow-wrap: normal;
  white-space: nowrap;
}
.jse-value.jse-empty.svelte-c0g9qz {
  min-width: 4em;
  outline: 1px dotted var(--jse-tag-background, rgba(0, 0, 0, 0.2));
  -moz-outline-radius: 2px;
}
.jse-value.jse-empty.svelte-c0g9qz::after {
  pointer-events: none;
  color: var(--jse-tag-background, rgba(0, 0, 0, 0.2));
  content: "value";
}`);
var cM = K('<div role="button" tabindex="-1" data-type="selectable-value"><!> <!></div>');
function dM(e, t) {
    it(t, !0);
    var n = za(!0)
      , o = mo( () => r(n) && typeof t.value == "string" && t.value.length > t.truncateTextSize && (!t.searchResultItems || !t.searchResultItems.some(f => f.active && f.end > t.truncateTextSize)))
      , a = mo( () => r(o) && typeof t.value == "string" ? t.value.substring(0, t.truncateTextSize).trim() : t.value)
      , i = mo( () => pd(t.value));
    function s() {
        h(n, !1)
    }
    var l = cM();
    l.__click = [lM, t, i],
    l.__dblclick = [uM, t];
    var u = z(l)
      , d = f => {
        var m = mo( () => t.normalization.escapeValue(r(a)));
        t1(f, {
            get text() {
                return r(m)
            },
            get searchResultItems() {
                return t.searchResultItems
            }
        })
    }
      , c = f => {
        var m = Jr();
        Ee(x => lt(m, x), [ () => Js(t.normalization.escapeValue(r(a)))]),
        L(f, m)
    }
    ;
    ie(u, f => {
        t.searchResultItems ? f(d) : f(c, !1)
    }
    );
    var v = B(u, 2)
      , p = f => {
        Yu(f, {
            onclick: s,
            children: (m, x) => {
                var y = Jr();
                Ee(w => lt(y, "Show more (".concat(w ?? "", ")")), [ () => Ku(t.value.length)]),
                L(m, y)
            }
            ,
            $$slots: {
                default: !0
            }
        })
    }
    ;
    ie(v, f => {
        r(o) && typeof t.value == "string" && f(p)
    }
    ),
    Ee(f => {
        At(l, 1, f, "svelte-c0g9qz"),
        zn(l, "title", r(i) ? "Ctrl+Click or Ctrl+Enter to open url in new window" : void 0)
    }
    , [ () => _i(_c(t.value, t.mode, t.parser))]),
    L(e, l),
    st()
}
ju(["click", "dblclick"]);
kt(`/* over all fonts, sizes, and colors */
/* "consolas" for Windows, "menlo" for Mac with fallback to "monaco", 'Ubuntu Mono' for Ubuntu */
/* (at Mac this font looks too large at 14px, but 13px is too small for the font on Windows) */
/* main, menu, modal */
/* jsoneditor modal */
/* tooltip in text mode */
/* panels: navigation bar, gutter, search box */
/* navigation-bar */
/* context menu */
/* contents: json key and values */
/* contents: selected or hovered */
/* contents: section of collapsed items in an array */
/* contents: highlighting of search matches */
/* contents: inline tags inside the JSON document */
/* contents: table */
/* controls in modals: inputs, buttons, and \`a\` */
/* messages */
/* svelte-select */
/* color picker */
.jse-tooltip.svelte-14y3y8t {
  font-family: var(--jse-font-family, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif);
  font-size: var(--jse-font-size, 16px);
  line-height: normal;
  padding: calc(0.5 * var(--jse-padding, 10px)) var(--jse-padding, 10px);
  border-radius: 3px;
  background: var(--jse-context-menu-background, #656565);
  color: var(--jse-context-menu-color, var(--jse-text-color-inverse, #fff));
  white-space: nowrap;
  box-shadow: var(--jse-controls-box-shadow, 0 2px 6px 0 rgba(0, 0, 0, 0.24));
}`);
var vM = K('<div class="jse-tooltip svelte-14y3y8t"> </div>');
function fM(e, t) {
    var n = g(t, "text", 8)
      , o = vM()
      , a = z(o);
    Ee( () => lt(a, n())),
    L(e, o)
}
function Xs(e, t) {
    var n, {text: o, openAbsolutePopup: a, closeAbsolutePopup: i} = t;
    function s() {
        n = a(fM, {
            text: o
        }, {
            position: "top",
            width: 10 * o.length,
            offsetTop: 3,
            anchor: e,
            closeOnOuterClick: !0
        })
    }
    function l() {
        i(n)
    }
    return e.addEventListener("mouseenter", s),
    e.addEventListener("mouseleave", l),
    {
        destroy() {
            e.removeEventListener("mouseenter", s),
            e.removeEventListener("mouseleave", l)
        }
    }
}
kt(`/* over all fonts, sizes, and colors */
/* "consolas" for Windows, "menlo" for Mac with fallback to "monaco", 'Ubuntu Mono' for Ubuntu */
/* (at Mac this font looks too large at 14px, but 13px is too small for the font on Windows) */
/* main, menu, modal */
/* jsoneditor modal */
/* tooltip in text mode */
/* panels: navigation bar, gutter, search box */
/* navigation-bar */
/* context menu */
/* contents: json key and values */
/* contents: selected or hovered */
/* contents: section of collapsed items in an array */
/* contents: highlighting of search matches */
/* contents: inline tags inside the JSON document */
/* contents: table */
/* controls in modals: inputs, buttons, and \`a\` */
/* messages */
/* svelte-select */
/* color picker */
.jse-timestamp.svelte-1jla5ec {
  padding: 0;
  margin: 0;
  vertical-align: middle;
  display: inline-flex;
  color: var(--jse-value-color-number, #ee422e);
}`);
var pM = K('<div class="jse-timestamp svelte-1jla5ec"><!></div>');
function hM(e, t) {
    it(t, !1);
    var n = T(void 0, !0)
      , o = Pi("absolute-popup")
      , a = g(t, "value", 9);
    V( () => b(a()), () => {
        h(n, "Time: ".concat(new Date(a()).toString()))
    }
    ),
    An(),
    Rt(!0);
    var i = pM();
    fn(z(i), {
        get data() {
            return _k
        }
    }),
    lo(i, (s, l) => Xs?.(s, l), () => ke({
        text: r(n)
    }, o)),
    L(e, i),
    st()
}
function Bv(e) {
    var t = [];
    return !e.isEditing && pR(e.value) && t.push({
        component: WR,
        props: e
    }),
    !e.isEditing && hR(e.value) && t.push({
        component: JR,
        props: e
    }),
    e.isEditing && t.push({
        component: rM,
        props: e
    }),
    e.isEditing || t.push({
        component: dM,
        props: e
    }),
    !e.isEditing && zv(e.value) && t.push({
        component: hM,
        props: e
    }),
    t
}
function xo(e) {
    return e.map( (t, n) => bd.test(t) ? "[" + t + "]" : /[.[\]]/.test(t) || t === "" ? '["' + function(o) {
        return o.replace(/"/g, '\\"')
    }(t) + '"]' : (n > 0 ? "." : "") + t).join("")
}
function gM(e) {
    for (var t = [], n = 0; n < e.length; )
        e[n] === "." && n++,
        e[n] === "[" ? (n++,
        e[n] === '"' ? (n++,
        t.push(o(i => i === '"', !0)),
        a('"')) : t.push(o(i => i === "]")),
        a("]")) : t.push(o(i => i === "." || i === "["));
    function o(i) {
        for (var s = arguments.length > 1 && arguments[1] !== void 0 && arguments[1], l = ""; n < e.length && !i(e[n]); )
            s && e[n] === "\\" && e[n + 1] === '"' ? (l += '"',
            n += 2) : (l += e[n],
            n++);
        return l
    }
    function a(i) {
        if (e[n] !== i)
            throw new SyntaxError("Invalid JSON path: ".concat(i, " expected at position ").concat(n));
        n++
    }
    return t
}
function ii(e) {
    return {
        value: e,
        label: vn(e) ? "(item root)" : xo(e)
    }
}
function mM(e) {
    if (bd.test(e))
        return "[" + e + "]";
    if (Tp.test(e))
        return "." + e;
    var t = JSON.stringify(e);
    return "['" + t.substring(1, t.length - 1).replace(/\\"/g, '"') + "']"
}
function ev(e) {
    return e.map(t => bd.test(t) ? "?.[".concat(t, "]") : Tp.test(t) ? "?.".concat(t) : "?.[".concat(JSON.stringify(t), "]")).join("")
}
var Tp = /^[a-zA-Z$_][a-zA-Z$_\d]*$/
  , bd = /^\d+$/
  , bM = {}
  , xM = {
    showWizard: !0,
    showOriginal: !0
}
  , Oc = Math.min
  , Vi = Math.max
  , Ec = Math.round
  , Uu = Math.floor
  , Sa = e => ({
    x: e,
    y: e
})
  , jM = {
    left: "right",
    right: "left",
    bottom: "top",
    top: "bottom"
}
  , yM = {
    start: "end",
    end: "start"
};
function Cg(e, t, n) {
    return Vi(e, Oc(t, n))
}
function xd(e, t) {
    return typeof e == "function" ? e(t) : e
}
function ns(e) {
    return e.split("-")[0]
}
function jd(e) {
    return e.split("-")[1]
}
function n1(e) {
    return e === "x" ? "y" : "x"
}
function r1(e) {
    return e === "y" ? "height" : "width"
}
var wM = new Set(["top", "bottom"]);
function ci(e) {
    return wM.has(ns(e)) ? "y" : "x"
}
function o1(e) {
    return n1(ci(e))
}
function Wv(e) {
    return e.replace(/start|end/g, t => yM[t])
}
var Og = ["left", "right"]
  , Eg = ["right", "left"]
  , kM = ["top", "bottom"]
  , _M = ["bottom", "top"];
function SM(e, t, n, o) {
    var a = jd(e)
      , i = function(s, l, u) {
        switch (s) {
        case "top":
        case "bottom":
            return u ? l ? Eg : Og : l ? Og : Eg;
        case "left":
        case "right":
            return l ? kM : _M;
        default:
            return []
        }
    }(ns(e), n === "start", o);
    return a && (i = i.map(s => s + "-" + a),
    t && (i = i.concat(i.map(Wv)))),
    i
}
function Du(e) {
    return e.replace(/left|right|bottom|top/g, t => jM[t])
}
function CM(e) {
    return typeof e != "number" ? function(t) {
        return ke({
            top: 0,
            right: 0,
            bottom: 0,
            left: 0
        }, t)
    }(e) : {
        top: e,
        right: e,
        bottom: e,
        left: e
    }
}
function Ac(e) {
    var {x: t, y: n, width: o, height: a} = e;
    return {
        width: o,
        height: a,
        top: n,
        left: t,
        right: t + o,
        bottom: n + a,
        x: t,
        y: n
    }
}
function Ag(e, t, n) {
    var o, {reference: a, floating: i} = e, s = ci(t), l = o1(t), u = r1(l), d = ns(t), c = s === "y", v = a.x + a.width / 2 - i.width / 2, p = a.y + a.height / 2 - i.height / 2, f = a[u] / 2 - i[u] / 2;
    switch (d) {
    case "top":
        o = {
            x: v,
            y: a.y - i.height
        };
        break;
    case "bottom":
        o = {
            x: v,
            y: a.y + a.height
        };
        break;
    case "right":
        o = {
            x: a.x + a.width,
            y: p
        };
        break;
    case "left":
        o = {
            x: a.x - i.width,
            y: p
        };
        break;
    default:
        o = {
            x: a.x,
            y: a.y
        }
    }
    switch (jd(t)) {
    case "start":
        o[l] -= f * (n && c ? -1 : 1);
        break;
    case "end":
        o[l] += f * (n && c ? -1 : 1)
    }
    return o
}
var OM = function() {
    var e = wt(function*(t, n, o) {
        for (var {placement: a="bottom", strategy: i="absolute", middleware: s=[], platform: l} = o, u = s.filter(Boolean), d = yield l.isRTL == null ? void 0 : l.isRTL(n), c = yield l.getElementRects({
            reference: t,
            floating: n,
            strategy: i
        }), {x: v, y: p} = Ag(c, a, d), f = a, m = {}, x = 0, y = 0; y < u.length; y++) {
            var {name: w, fn: S} = u[y]
              , {x: P, y: R, data: k, reset: I} = yield S({
                x: v,
                y: p,
                initialPlacement: a,
                placement: f,
                strategy: i,
                middlewareData: m,
                rects: c,
                platform: l,
                elements: {
                    reference: t,
                    floating: n
                }
            });
            v = P ?? v,
            p = R ?? p,
            m = ke(ke({}, m), {}, {
                [w]: ke(ke({}, m[w]), k)
            }),
            I && x <= 50 && (x++,
            typeof I == "object" && (I.placement && (f = I.placement),
            I.rects && (c = I.rects === !0 ? yield l.getElementRects({
                reference: t,
                floating: n,
                strategy: i
            }) : I.rects),
            {x: v, y: p} = Ag(c, f, d)),
            y = -1)
        }
        return {
            x: v,
            y: p,
            placement: f,
            strategy: i,
            middlewareData: m
        }
    });
    return function(t, n, o) {
        return e.apply(this, arguments)
    }
}();
function a1(e, t) {
    return Hv.apply(this, arguments)
}
function Hv() {
    return Hv = wt(function*(e, t) {
        var n;
        t === void 0 && (t = {});
        var {x: o, y: a, platform: i, rects: s, elements: l, strategy: u} = e
          , {boundary: d="clippingAncestors", rootBoundary: c="viewport", elementContext: v="floating", altBoundary: p=!1, padding: f=0} = xd(t, e)
          , m = CM(f)
          , x = l[p ? v === "floating" ? "reference" : "floating" : v]
          , y = Ac(yield i.getClippingRect({
            element: (n = yield i.isElement == null ? void 0 : i.isElement(x)) == null || n ? x : x.contextElement || (yield i.getDocumentElement == null ? void 0 : i.getDocumentElement(l.floating)),
            boundary: d,
            rootBoundary: c,
            strategy: u
        }))
          , w = v === "floating" ? {
            x: o,
            y: a,
            width: s.floating.width,
            height: s.floating.height
        } : s.reference
          , S = yield i.getOffsetParent == null ? void 0 : i.getOffsetParent(l.floating)
          , P = (yield i.isElement == null ? void 0 : i.isElement(S)) && (yield i.getScale == null ? void 0 : i.getScale(S)) || {
            x: 1,
            y: 1
        }
          , R = Ac(i.convertOffsetParentRelativeRectToViewportRelativeRect ? yield i.convertOffsetParentRelativeRectToViewportRelativeRect({
            elements: l,
            rect: w,
            offsetParent: S,
            strategy: u
        }) : w);
        return {
            top: (y.top - R.top + m.top) / P.y,
            bottom: (R.bottom - y.bottom + m.bottom) / P.y,
            left: (y.left - R.left + m.left) / P.x,
            right: (R.right - y.right + m.right) / P.x
        }
    }),
    Hv.apply(this, arguments)
}
var EM = new Set(["left", "top"]);
function Vv() {
    return Vv = wt(function*(e, t) {
        var {placement: n, platform: o, elements: a} = e
          , i = yield o.isRTL == null ? void 0 : o.isRTL(a.floating)
          , s = ns(n)
          , l = jd(n)
          , u = ci(n) === "y"
          , d = EM.has(s) ? -1 : 1
          , c = i && u ? -1 : 1
          , v = xd(t, e)
          , {mainAxis: p, crossAxis: f, alignmentAxis: m} = typeof v == "number" ? {
            mainAxis: v,
            crossAxis: 0,
            alignmentAxis: null
        } : {
            mainAxis: v.mainAxis || 0,
            crossAxis: v.crossAxis || 0,
            alignmentAxis: v.alignmentAxis
        };
        return l && typeof m == "number" && (f = l === "end" ? -1 * m : m),
        u ? {
            x: f * c,
            y: p * d
        } : {
            x: p * d,
            y: f * c
        }
    }),
    Vv.apply(this, arguments)
}
function yd() {
    return typeof window < "u"
}
function Qs(e) {
    return i1(e) ? (e.nodeName || "").toLowerCase() : "#document"
}
function Ro(e) {
    var t;
    return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window
}
function Ca(e) {
    var t;
    return (t = (i1(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement
}
function i1(e) {
    return !!yd() && (e instanceof Node || e instanceof Ro(e).Node)
}
function aa(e) {
    return !!yd() && (e instanceof Element || e instanceof Ro(e).Element)
}
function Ea(e) {
    return !!yd() && (e instanceof HTMLElement || e instanceof Ro(e).HTMLElement)
}
function Rg(e) {
    return !(!yd() || typeof ShadowRoot > "u") && (e instanceof ShadowRoot || e instanceof Ro(e).ShadowRoot)
}
var AM = new Set(["inline", "contents"]);
function tu(e) {
    var {overflow: t, overflowX: n, overflowY: o, display: a} = ia(e);
    return /auto|scroll|overlay|hidden|clip/.test(t + o + n) && !AM.has(a)
}
var RM = new Set(["table", "td", "th"]);
function MM(e) {
    return RM.has(Qs(e))
}
var PM = [":popover-open", ":modal"];
function Rc(e) {
    return PM.some(t => {
        try {
            return e.matches(t)
        } catch {
            return !1
        }
    }
    )
}
var zM = ["transform", "translate", "scale", "rotate", "perspective"]
  , TM = ["transform", "translate", "scale", "rotate", "perspective", "filter"]
  , IM = ["paint", "layout", "strict", "content"];
function Gv(e) {
    var t = Ip()
      , n = aa(e) ? ia(e) : e;
    return zM.some(o => !!n[o] && n[o] !== "none") || !!n.containerType && n.containerType !== "normal" || !t && !!n.backdropFilter && n.backdropFilter !== "none" || !t && !!n.filter && n.filter !== "none" || TM.some(o => (n.willChange || "").includes(o)) || IM.some(o => (n.contain || "").includes(o))
}
function Ip() {
    return !(typeof CSS > "u" || !CSS.supports) && CSS.supports("-webkit-backdrop-filter", "none")
}
var NM = new Set(["html", "body", "#document"]);
function Ds(e) {
    return NM.has(Qs(e))
}
function ia(e) {
    return Ro(e).getComputedStyle(e)
}
function wd(e) {
    return aa(e) ? {
        scrollLeft: e.scrollLeft,
        scrollTop: e.scrollTop
    } : {
        scrollLeft: e.scrollX,
        scrollTop: e.scrollY
    }
}
function di(e) {
    if (Qs(e) === "html")
        return e;
    var t = e.assignedSlot || e.parentNode || Rg(e) && e.host || Ca(e);
    return Rg(t) ? t.host : t
}
function s1(e) {
    var t = di(e);
    return Ds(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : Ea(t) && tu(t) ? t : s1(t)
}
function nu(e, t, n) {
    var o;
    t === void 0 && (t = []),
    n === void 0 && (n = !0);
    var a = s1(e)
      , i = a === ((o = e.ownerDocument) == null ? void 0 : o.body)
      , s = Ro(a);
    if (i) {
        var l = Jv(s);
        return t.concat(s, s.visualViewport || [], tu(a) ? a : [], l && n ? nu(l) : [])
    }
    return t.concat(a, nu(a, [], n))
}
function Jv(e) {
    return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null
}
function l1(e) {
    var t = ia(e)
      , n = parseFloat(t.width) || 0
      , o = parseFloat(t.height) || 0
      , a = Ea(e)
      , i = a ? e.offsetWidth : n
      , s = a ? e.offsetHeight : o
      , l = Ec(n) !== i || Ec(o) !== s;
    return l && (n = i,
    o = s),
    {
        width: n,
        height: o,
        $: l
    }
}
function Np(e) {
    return aa(e) ? e : e.contextElement
}
function qs(e) {
    var t = Np(e);
    if (!Ea(t))
        return Sa(1);
    var n = t.getBoundingClientRect()
      , {width: o, height: a, $: i} = l1(t)
      , s = (i ? Ec(n.width) : n.width) / o
      , l = (i ? Ec(n.height) : n.height) / a;
    return s && Number.isFinite(s) || (s = 1),
    l && Number.isFinite(l) || (l = 1),
    {
        x: s,
        y: l
    }
}
var LM = Sa(0);
function u1(e) {
    var t = Ro(e);
    return Ip() && t.visualViewport ? {
        x: t.visualViewport.offsetLeft,
        y: t.visualViewport.offsetTop
    } : LM
}
function rs(e, t, n, o) {
    t === void 0 && (t = !1),
    n === void 0 && (n = !1);
    var a = e.getBoundingClientRect()
      , i = Np(e)
      , s = Sa(1);
    t && (o ? aa(o) && (s = qs(o)) : s = qs(e));
    var l = function(k, I, H) {
        return I === void 0 && (I = !1),
        !(!H || I && H !== Ro(k)) && I
    }(i, n, o) ? u1(i) : Sa(0)
      , u = (a.left + l.x) / s.x
      , d = (a.top + l.y) / s.y
      , c = a.width / s.x
      , v = a.height / s.y;
    if (i)
        for (var p = Ro(i), f = o && aa(o) ? Ro(o) : o, m = p, x = Jv(m); x && o && f !== m; ) {
            var y = qs(x)
              , w = x.getBoundingClientRect()
              , S = ia(x)
              , P = w.left + (x.clientLeft + parseFloat(S.paddingLeft)) * y.x
              , R = w.top + (x.clientTop + parseFloat(S.paddingTop)) * y.y;
            u *= y.x,
            d *= y.y,
            c *= y.x,
            v *= y.y,
            u += P,
            d += R,
            x = Jv(m = Ro(x))
        }
    return Ac({
        width: c,
        height: v,
        x: u,
        y: d
    })
}
function Lp(e, t) {
    var n = wd(e).scrollLeft;
    return t ? t.left + n : rs(Ca(e)).left + n
}
function c1(e, t, n) {
    n === void 0 && (n = !1);
    var o = e.getBoundingClientRect();
    return {
        x: o.left + t.scrollLeft - (n ? 0 : Lp(e, o)),
        y: o.top + t.scrollTop
    }
}
var UM = new Set(["absolute", "fixed"]);
function Mg(e, t, n) {
    var o;
    if (t === "viewport")
        o = function(i, s) {
            var l = Ro(i)
              , u = Ca(i)
              , d = l.visualViewport
              , c = u.clientWidth
              , v = u.clientHeight
              , p = 0
              , f = 0;
            if (d) {
                c = d.width,
                v = d.height;
                var m = Ip();
                (!m || m && s === "fixed") && (p = d.offsetLeft,
                f = d.offsetTop)
            }
            return {
                width: c,
                height: v,
                x: p,
                y: f
            }
        }(e, n);
    else if (t === "document")
        o = function(i) {
            var s = Ca(i)
              , l = wd(i)
              , u = i.ownerDocument.body
              , d = Vi(s.scrollWidth, s.clientWidth, u.scrollWidth, u.clientWidth)
              , c = Vi(s.scrollHeight, s.clientHeight, u.scrollHeight, u.clientHeight)
              , v = -l.scrollLeft + Lp(i)
              , p = -l.scrollTop;
            return ia(u).direction === "rtl" && (v += Vi(s.clientWidth, u.clientWidth) - d),
            {
                width: d,
                height: c,
                x: v,
                y: p
            }
        }(Ca(e));
    else if (aa(t))
        o = function(i, s) {
            var l = rs(i, !0, s === "fixed")
              , u = l.top + i.clientTop
              , d = l.left + i.clientLeft
              , c = Ea(i) ? qs(i) : Sa(1);
            return {
                width: i.clientWidth * c.x,
                height: i.clientHeight * c.y,
                x: d * c.x,
                y: u * c.y
            }
        }(t, n);
    else {
        var a = u1(e);
        o = {
            x: t.x - a.x,
            y: t.y - a.y,
            width: t.width,
            height: t.height
        }
    }
    return Ac(o)
}
function d1(e, t) {
    var n = di(e);
    return !(n === t || !aa(n) || Ds(n)) && (ia(n).position === "fixed" || d1(n, t))
}
function DM(e, t, n) {
    var o = Ea(t)
      , a = Ca(t)
      , i = n === "fixed"
      , s = rs(e, !0, i, t)
      , l = {
        scrollLeft: 0,
        scrollTop: 0
    }
      , u = Sa(0);
    function d() {
        u.x = Lp(a)
    }
    if (o || !o && !i)
        if ((Qs(t) !== "body" || tu(a)) && (l = wd(t)),
        o) {
            var c = rs(t, !0, i, t);
            u.x = c.x + t.clientLeft,
            u.y = c.y + t.clientTop
        } else
            a && d();
    i && !o && a && d();
    var v = !a || o || i ? Sa(0) : c1(a, l);
    return {
        x: s.left + l.scrollLeft - u.x - v.x,
        y: s.top + l.scrollTop - u.y - v.y,
        width: s.width,
        height: s.height
    }
}
function tv(e) {
    return ia(e).position === "static"
}
function Pg(e, t) {
    if (!Ea(e) || ia(e).position === "fixed")
        return null;
    if (t)
        return t(e);
    var n = e.offsetParent;
    return Ca(e) === n && (n = n.ownerDocument.body),
    n
}
function zg(e, t) {
    var n = Ro(e);
    if (Rc(e))
        return n;
    if (!Ea(e)) {
        for (var o = di(e); o && !Ds(o); ) {
            if (aa(o) && !tv(o))
                return o;
            o = di(o)
        }
        return n
    }
    for (var a = Pg(e, t); a && MM(a) && tv(a); )
        a = Pg(a, t);
    return a && Ds(a) && tv(a) && !Gv(a) ? n : a || function(i) {
        for (var s = di(i); Ea(s) && !Ds(s); ) {
            if (Gv(s))
                return s;
            if (Rc(s))
                return null;
            s = di(s)
        }
        return null
    }(e) || n
}
var qM = {
    convertOffsetParentRelativeRectToViewportRelativeRect: function(e) {
        var {elements: t, rect: n, offsetParent: o, strategy: a} = e
          , i = a === "fixed"
          , s = Ca(o)
          , l = !!t && Rc(t.floating);
        if (o === s || l && i)
            return n;
        var u = {
            scrollLeft: 0,
            scrollTop: 0
        }
          , d = Sa(1)
          , c = Sa(0)
          , v = Ea(o);
        if ((v || !v && !i) && ((Qs(o) !== "body" || tu(s)) && (u = wd(o)),
        Ea(o))) {
            var p = rs(o);
            d = qs(o),
            c.x = p.x + o.clientLeft,
            c.y = p.y + o.clientTop
        }
        var f = !s || v || i ? Sa(0) : c1(s, u, !0);
        return {
            width: n.width * d.x,
            height: n.height * d.y,
            x: n.x * d.x - u.scrollLeft * d.x + c.x + f.x,
            y: n.y * d.y - u.scrollTop * d.y + c.y + f.y
        }
    },
    getDocumentElement: Ca,
    getClippingRect: function(e) {
        var {element: t, boundary: n, rootBoundary: o, strategy: a} = e
          , i = [...n === "clippingAncestors" ? Rc(t) ? [] : function(u, d) {
            var c = d.get(u);
            if (c)
                return c;
            for (var v = nu(u, [], !1).filter(w => aa(w) && Qs(w) !== "body"), p = null, f = ia(u).position === "fixed", m = f ? di(u) : u; aa(m) && !Ds(m); ) {
                var x = ia(m)
                  , y = Gv(m);
                y || x.position !== "fixed" || (p = null),
                (f ? !y && !p : !y && x.position === "static" && p && UM.has(p.position) || tu(m) && !y && d1(u, m)) ? v = v.filter(w => w !== m) : p = x,
                m = di(m)
            }
            return d.set(u, v),
            v
        }(t, this._c) : [].concat(n), o]
          , s = i[0]
          , l = i.reduce( (u, d) => {
            var c = Mg(t, d, a);
            return u.top = Vi(c.top, u.top),
            u.right = Oc(c.right, u.right),
            u.bottom = Oc(c.bottom, u.bottom),
            u.left = Vi(c.left, u.left),
            u
        }
        , Mg(t, s, a));
        return {
            width: l.right - l.left,
            height: l.bottom - l.top,
            x: l.left,
            y: l.top
        }
    },
    getOffsetParent: zg,
    getElementRects: function() {
        var e = wt(function*(t) {
            var n = this.getOffsetParent || zg
              , o = this.getDimensions
              , a = yield o(t.floating);
            return {
                reference: DM(t.reference, yield n(t.floating), t.strategy),
                floating: {
                    x: 0,
                    y: 0,
                    width: a.width,
                    height: a.height
                }
            }
        });
        return function(t) {
            return e.apply(this, arguments)
        }
    }(),
    getClientRects: function(e) {
        return Array.from(e.getClientRects())
    },
    getDimensions: function(e) {
        var {width: t, height: n} = l1(e);
        return {
            width: t,
            height: n
        }
    },
    getScale: qs,
    isElement: aa,
    isRTL: function(e) {
        return ia(e).direction === "rtl"
    }
};
function Tg(e, t) {
    return e.x === t.x && e.y === t.y && e.width === t.width && e.height === t.height
}
function $M(e, t, n, o) {
    o === void 0 && (o = {});
    var {ancestorScroll: a=!0, ancestorResize: i=!0, elementResize: s=typeof ResizeObserver == "function", layoutShift: l=typeof IntersectionObserver == "function", animationFrame: u=!1} = o
      , d = Np(e)
      , c = a || i ? [...d ? nu(d) : [], ...nu(t)] : [];
    c.forEach(y => {
        a && y.addEventListener("scroll", n, {
            passive: !0
        }),
        i && y.addEventListener("resize", n)
    }
    );
    var v, p = d && l ? function(y, w) {
        var S, P = null, R = Ca(y);
        function k() {
            var I;
            clearTimeout(S),
            (I = P) == null || I.disconnect(),
            P = null
        }
        return function I(H, Y) {
            H === void 0 && (H = !1),
            Y === void 0 && (Y = 1),
            k();
            var M = y.getBoundingClientRect()
              , {left: Z, top: ae, width: ee, height: se} = M;
            if (H || w(),
            ee && se) {
                var _e = {
                    rootMargin: -Uu(ae) + "px " + -Uu(R.clientWidth - (Z + ee)) + "px " + -Uu(R.clientHeight - (ae + se)) + "px " + -Uu(Z) + "px",
                    threshold: Vi(0, Oc(1, Y)) || 1
                }
                  , fe = !0;
                try {
                    P = new IntersectionObserver(Oe,ke(ke({}, _e), {}, {
                        root: R.ownerDocument
                    }))
                } catch {
                    P = new IntersectionObserver(Oe,_e)
                }
                P.observe(y)
            }
            function Oe(De) {
                var Ne = De[0].intersectionRatio;
                if (Ne !== Y) {
                    if (!fe)
                        return I();
                    Ne ? I(!1, Ne) : S = setTimeout( () => {
                        I(!1, 1e-7)
                    }
                    , 1e3)
                }
                Ne !== 1 || Tg(M, y.getBoundingClientRect()) || I(),
                fe = !1
            }
        }(!0),
        k
    }(d, n) : null, f = -1, m = null;
    s && (m = new ResizeObserver(y => {
        var [w] = y;
        w && w.target === d && m && (m.unobserve(t),
        cancelAnimationFrame(f),
        f = requestAnimationFrame( () => {
            var S;
            (S = m) == null || S.observe(t)
        }
        )),
        n()
    }
    ),
    d && !u && m.observe(d),
    m.observe(t));
    var x = u ? rs(e) : null;
    return u && function y() {
        var w = rs(e);
        x && !Tg(x, w) && n(),
        x = w,
        v = requestAnimationFrame(y)
    }(),
    n(),
    () => {
        var y;
        c.forEach(w => {
            a && w.removeEventListener("scroll", n),
            i && w.removeEventListener("resize", n)
        }
        ),
        p?.(),
        (y = m) == null || y.disconnect(),
        m = null,
        u && cancelAnimationFrame(v)
    }
}
var FM = function(e) {
    return e === void 0 && (e = 0),
    {
        name: "offset",
        options: e,
        fn: t => wt(function*() {
            var n, o, {x: a, y: i, placement: s, middlewareData: l} = t, u = yield function(d, c) {
                return Vv.apply(this, arguments)
            }(t, e);
            return s === ((n = l.offset) == null ? void 0 : n.placement) && (o = l.arrow) != null && o.alignmentOffset ? {} : {
                x: a + u.x,
                y: i + u.y,
                data: ke(ke({}, u), {}, {
                    placement: s
                })
            }
        })()
    }
}
  , BM = function(e) {
    return e === void 0 && (e = {}),
    {
        name: "shift",
        options: e,
        fn: t => wt(function*() {
            var {x: n, y: o, placement: a} = t
              , i = xd(e, t)
              , {mainAxis: s=!0, crossAxis: l=!1, limiter: u={
                fn: P => {
                    var {x: R, y: k} = P;
                    return {
                        x: R,
                        y: k
                    }
                }
            }} = i
              , d = Iy(i, zA)
              , c = {
                x: n,
                y: o
            }
              , v = yield a1(t, d)
              , p = ci(ns(a))
              , f = n1(p)
              , m = c[f]
              , x = c[p];
            if (s) {
                var y = f === "y" ? "bottom" : "right";
                m = Cg(m + v[f === "y" ? "top" : "left"], m, m - v[y])
            }
            if (l) {
                var w = p === "y" ? "bottom" : "right";
                x = Cg(x + v[p === "y" ? "top" : "left"], x, x - v[w])
            }
            var S = u.fn(ke(ke({}, t), {}, {
                [f]: m,
                [p]: x
            }));
            return ke(ke({}, S), {}, {
                data: {
                    x: S.x - n,
                    y: S.y - o,
                    enabled: {
                        [f]: s,
                        [p]: l
                    }
                }
            })
        })()
    }
}
  , WM = function(e) {
    return e === void 0 && (e = {}),
    {
        name: "flip",
        options: e,
        fn: t => wt(function*() {
            var n, o, {placement: a, middlewareData: i, rects: s, initialPlacement: l, platform: u, elements: d} = t, c = xd(e, t), {mainAxis: v=!0, crossAxis: p=!0, fallbackPlacements: f, fallbackStrategy: m="bestFit", fallbackAxisSideDirection: x="none", flipAlignment: y=!0} = c, w = Iy(c, PA);
            if ((n = i.arrow) != null && n.alignmentOffset)
                return {};
            var S = ns(a)
              , P = ci(l)
              , R = ns(l) === l
              , k = yield u.isRTL == null ? void 0 : u.isRTL(d.floating)
              , I = f || (R || !y ? [Du(l)] : function(Ae) {
                var Pe = Du(Ae);
                return [Wv(Ae), Pe, Wv(Pe)]
            }(l))
              , H = x !== "none";
            !f && H && I.push(...SM(l, y, x, k));
            var Y = [l, ...I]
              , M = yield a1(t, w)
              , Z = []
              , ae = ((o = i.flip) == null ? void 0 : o.overflows) || [];
            if (v && Z.push(M[S]),
            p) {
                var ee = function(Ae, Pe, Ve) {
                    Ve === void 0 && (Ve = !1);
                    var ge = jd(Ae)
                      , de = o1(Ae)
                      , ye = r1(de)
                      , ct = de === "x" ? ge === (Ve ? "end" : "start") ? "right" : "left" : ge === "start" ? "bottom" : "top";
                    return Pe.reference[ye] > Pe.floating[ye] && (ct = Du(ct)),
                    [ct, Du(ct)]
                }(a, s, k);
                Z.push(M[ee[0]], M[ee[1]])
            }
            if (ae = [...ae, {
                placement: a,
                overflows: Z
            }],
            !Z.every(Ae => Ae <= 0)) {
                var se, _e, fe = (((se = i.flip) == null ? void 0 : se.index) || 0) + 1, Oe = Y[fe];
                if (Oe && (!(p === "alignment" && P !== ci(Oe)) || ae.every(Ae => Ae.overflows[0] > 0 && ci(Ae.placement) === P)))
                    return {
                        data: {
                            index: fe,
                            overflows: ae
                        },
                        reset: {
                            placement: Oe
                        }
                    };
                var De = (_e = ae.filter(Ae => Ae.overflows[0] <= 0).sort( (Ae, Pe) => Ae.overflows[1] - Pe.overflows[1])[0]) == null ? void 0 : _e.placement;
                if (!De)
                    switch (m) {
                    case "bestFit":
                        var Ne, je = (Ne = ae.filter(Ae => {
                            if (H) {
                                var Pe = ci(Ae.placement);
                                return Pe === P || Pe === "y"
                            }
                            return !0
                        }
                        ).map(Ae => [Ae.placement, Ae.overflows.filter(Pe => Pe > 0).reduce( (Pe, Ve) => Pe + Ve, 0)]).sort( (Ae, Pe) => Ae[1] - Pe[1])[0]) == null ? void 0 : Ne[0];
                        je && (De = je);
                        break;
                    case "initialPlacement":
                        De = l
                    }
                if (a !== De)
                    return {
                        reset: {
                            placement: De
                        }
                    }
            }
            return {}
        })()
    }
};
function HM(e) {
    var t, n, o = {
        autoUpdate: !0
    }, a = e, i = u => ke(ke(ke({}, o), e || {}), u || {}), s = u => {
        t && n && (a = i(u),
        ( (d, c, v) => {
            var p = new Map
              , f = ke({
                platform: qM
            }, v)
              , m = ke(ke({}, f.platform), {}, {
                _c: p
            });
            return OM(d, c, ke(ke({}, f), {}, {
                platform: m
            }))
        }
        )(t, n, a).then(d => {
            var c;
            Object.assign(n.style, {
                position: d.strategy,
                left: "".concat(d.x, "px"),
                top: "".concat(d.y, "px")
            }),
            !((c = a) === null || c === void 0) && c.onComputed && a.onComputed(d)
        }
        ))
    }
    , l = u => {
        Vo(u.subscribe(d => {
            t === void 0 ? (t = d,
            s()) : (Object.assign(t, d),
            s())
        }
        ))
    }
    ;
    return [u => {
        if ("subscribe"in u)
            return l(u),
            {};
        t = u,
        s()
    }
    , (u, d) => {
        var c;
        n = u,
        a = i(d),
        setTimeout( () => s(d), 0),
        s(d);
        var v = () => {
            c && (c(),
            c = void 0)
        }
          , p = function() {
            var {autoUpdate: f} = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : a || {};
            v(),
            f !== !1 && function() {
                return cw.apply(this, arguments)
            }().then( () => $M(t, n, () => s(a), f === !0 ? {} : f))
        };
        return c = p(),
        {
            update(f) {
                s(f),
                c = p(f)
            },
            destroy() {
                v()
            }
        }
    }
    , s]
}
function VM(e) {
    var {loadOptions: t, filterText: n, items: o, multiple: a, value: i, itemId: s, groupBy: l, filterSelectedItems: u, itemFilter: d, convertStringItemsToObjects: c, filterGroupedItems: v, label: p} = e;
    if (o && t)
        return o;
    if (!o)
        return [];
    o && o.length > 0 && typeof o[0] != "object" && (o = c(o));
    var f = o.filter(m => {
        var x = d(m[p], n, m);
        return x && a && i != null && i.length && (x = !i.some(y => !!u && y[s] === m[s])),
        x
    }
    );
    return l && (f = v(f)),
    f
}
function GM(e) {
    return v1.apply(this, arguments)
}
function v1() {
    return (v1 = wt(function*(e) {
        var {dispatch: t, loadOptions: n, convertStringItemsToObjects: o, filterText: a} = e
          , i = yield n(a).catch(s => {
            console.warn("svelte-select loadOptions error :>> ", s),
            t("error", {
                type: "loadOptions",
                details: s
            })
        }
        );
        if (i && !i.cancelled)
            return i ? (i && i.length > 0 && typeof i[0] != "object" && (i = o(i)),
            t("loaded", {
                items: i
            })) : i = [],
            {
                filteredItems: i,
                loading: !1,
                focused: !0,
                listOpen: !0
            }
    })).apply(this, arguments)
}
kt(`
  svg.svelte-qbd276 {
      width: var(--chevron-icon-width, 20px);
      height: var(--chevron-icon-width, 20px);
      color: var(--chevron-icon-colour, currentColor);
  }
`);
var JM = Ii(`<svg width="100%" height="100%" viewBox="0 0 20 20" focusable="false" aria-hidden="true" class="svelte-qbd276"><path fill="currentColor" d="M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747
          3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0
          1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502
          0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0
          0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z"></path></svg>`);
kt(`
    svg.svelte-whdbu1 {
        width: var(--clear-icon-width, 20px);
        height: var(--clear-icon-width, 20px);
        color: var(--clear-icon-color, currentColor);
    }
`);
var KM = Ii(`<svg width="100%" height="100%" viewBox="-2 -2 50 50" focusable="false" aria-hidden="true" role="presentation" class="svelte-whdbu1"><path fill="currentColor" d="M34.923,37.251L24,26.328L13.077,37.251L9.436,33.61l10.923-10.923L9.436,11.765l3.641-3.641L24,19.047L34.923,8.124
    l3.641,3.641L27.641,22.688L38.564,33.61L34.923,37.251z"></path></svg>`);
function nv(e) {
    L(e, KM())
}
kt(`
    .loading.svelte-1p3nqvd {
        width: var(--spinner-width, 20px);
        height: var(--spinner-height, 20px);
        color: var(--spinner-color, var(--icons-color));
        animation: svelte-1p3nqvd-rotate 0.75s linear infinite;
        transform-origin: center center;
        transform: none;
    }

    .circle_path.svelte-1p3nqvd {
        stroke-dasharray: 90;
        stroke-linecap: round;
    }

    @keyframes svelte-1p3nqvd-rotate {
        100% {
            transform: rotate(360deg);
        }
    }
`);
var YM = Ii('<svg class="loading svelte-1p3nqvd" viewBox="25 25 50 50"><circle class="circle_path svelte-1p3nqvd" cx="50" cy="50" r="20" fill="none" stroke="currentColor" stroke-width="5" stroke-miterlimit="10"></circle></svg>');
kt(`
    .svelte-select.svelte-82qwg8 {
        /* deprecating camelCase custom props in favour of kebab-case for v5 */
        --borderRadius: var(--border-radius);
        --clearSelectColor: var(--clear-select-color);
        --clearSelectWidth: var(--clear-select-width);
        --disabledBackground: var(--disabled-background);
        --disabledBorderColor: var(--disabled-border-color);
        --disabledColor: var(--disabled-color);
        --disabledPlaceholderColor: var(--disabled-placeholder-color);
        --disabledPlaceholderOpacity: var(--disabled-placeholder-opacity);
        --errorBackground: var(--error-background);
        --errorBorder: var(--error-border);
        --groupItemPaddingLeft: var(--group-item-padding-left);
        --groupTitleColor: var(--group-title-color);
        --groupTitleFontSize: var(--group-title-font-size);
        --groupTitleFontWeight: var(--group-title-font-weight);
        --groupTitlePadding: var(--group-title-padding);
        --groupTitleTextTransform: var(--group-title-text-transform);
        --groupTitleBorderColor: var(--group-title-border-color);
        --groupTitleBorderWidth: var(--group-title-border-width);
        --groupTitleBorderStyle: var(--group-title-border-style);
        --indicatorColor: var(--chevron-color);
        --indicatorHeight: var(--chevron-height);
        --indicatorWidth: var(--chevron-width);
        --inputColor: var(--input-color);
        --inputLeft: var(--input-left);
        --inputLetterSpacing: var(--input-letter-spacing);
        --inputMargin: var(--input-margin);
        --inputPadding: var(--input-padding);
        --itemActiveBackground: var(--item-active-background);
        --itemColor: var(--item-color);
        --itemFirstBorderRadius: var(--item-first-border-radius);
        --itemHoverBG: var(--item-hover-bg);
        --itemHoverColor: var(--item-hover-color);
        --itemIsActiveBG: var(--item-is-active-bg);
        --itemIsActiveColor: var(--item-is-active-color);
        --itemIsNotSelectableColor: var(--item-is-not-selectable-color);
        --itemPadding: var(--item-padding);
        --listBackground: var(--list-background);
        --listBorder: var(--list-border);
        --listBorderRadius: var(--list-border-radius);
        --listEmptyColor: var(--list-empty-color);
        --listEmptyPadding: var(--list-empty-padding);
        --listEmptyTextAlign: var(--list-empty-text-align);
        --listMaxHeight: var(--list-max-height);
        --listPosition: var(--list-position);
        --listShadow: var(--list-shadow);
        --listZIndex: var(--list-z-index);
        --multiItemBG: var(--multi-item-bg);
        --multiItemBorderRadius: var(--multi-item-border-radius);
        --multiItemDisabledHoverBg: var(--multi-item-disabled-hover-bg);
        --multiItemDisabledHoverColor: var(--multi-item-disabled-hover-color);
        --multiItemHeight: var(--multi-item-height);
        --multiItemMargin: var(--multi-item-margin);
        --multiItemPadding: var(--multi-item-padding);
        --multiSelectInputMargin: var(--multi-select-input-margin);
        --multiSelectInputPadding: var(--multi-select-input-padding);
        --multiSelectPadding: var(--multi-select-padding);
        --placeholderColor: var(--placeholder-color);
        --placeholderOpacity: var(--placeholder-opacity);
        --selectedItemPadding: var(--selected-item-padding);
        --spinnerColor: var(--spinner-color);
        --spinnerHeight: var(--spinner-height);
        --spinnerWidth: var(--spinner-width);

        --internal-padding: 0 0 0 16px;

        border: var(--border, 1px solid #d8dbdf);
        border-radius: var(--border-radius, 6px);
        min-height: var(--height, 42px);
        position: relative;
        display: flex;
        align-items: stretch;
        padding: var(--padding, var(--internal-padding));
        background: var(--background, #fff);
        margin: var(--margin, 0);
        width: var(--width, 100%);
        font-size: var(--font-size, 16px);
        max-height: var(--max-height);
    }

    .svelte-82qwg8 {
        box-sizing: var(--box-sizing, border-box);
    }

    .svelte-select.svelte-82qwg8:hover {
        border: var(--border-hover, 1px solid #b2b8bf);
    }

    .value-container.svelte-82qwg8 {
        display: flex;
        flex: 1 1 0%;
        flex-wrap: wrap;
        align-items: center;
        gap: 5px 10px;
        padding: var(--value-container-padding, 5px 0);
        position: relative;
        overflow: var(--value-container-overflow, hidden);
        align-self: stretch;
    }

    .prepend.svelte-82qwg8,
    .indicators.svelte-82qwg8 {
        display: flex;
        flex-shrink: 0;
        align-items: center;
    }

    .indicators.svelte-82qwg8 {
        position: var(--indicators-position);
        top: var(--indicators-top);
        right: var(--indicators-right);
        bottom: var(--indicators-bottom);
    }

    input.svelte-82qwg8 {
        position: absolute;
        cursor: default;
        border: none;
        color: var(--input-color, var(--item-color));
        padding: var(--input-padding, 0);
        letter-spacing: var(--input-letter-spacing, inherit);
        margin: var(--input-margin, 0);
        min-width: 10px;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        background: transparent;
        font-size: var(--font-size, 16px);
    }

    .svelte-82qwg8:not(.multi) > .value-container:where(.svelte-82qwg8) > input:where(.svelte-82qwg8) {
        width: 100%;
        height: 100%;
    }

    input.svelte-82qwg8::placeholder {
        color: var(--placeholder-color, #78848f);
        opacity: var(--placeholder-opacity, 1);
    }

    input.svelte-82qwg8:focus {
        outline: none;
    }

    .svelte-select.focused.svelte-82qwg8 {
        border: var(--border-focused, 1px solid #006fe8);
        border-radius: var(--border-radius-focused, var(--border-radius, 6px));
    }

    .disabled.svelte-82qwg8 {
        background: var(--disabled-background, #ebedef);
        border-color: var(--disabled-border-color, #ebedef);
        color: var(--disabled-color, #c1c6cc);
    }

    .disabled.svelte-82qwg8 input:where(.svelte-82qwg8)::placeholder {
        color: var(--disabled-placeholder-color, #c1c6cc);
        opacity: var(--disabled-placeholder-opacity, 1);
    }

    .selected-item.svelte-82qwg8 {
        position: relative;
        overflow: var(--selected-item-overflow, hidden);
        padding: var(--selected-item-padding, 0 20px 0 0);
        text-overflow: ellipsis;
        white-space: nowrap;
        color: var(--selected-item-color, inherit);
        font-size: var(--font-size, 16px);
    }

    .multi.svelte-82qwg8 .selected-item:where(.svelte-82qwg8) {
        position: absolute;
        line-height: var(--height, 42px);
        height: var(--height, 42px);
    }

    .selected-item.svelte-82qwg8:focus {
        outline: none;
    }

    .hide-selected-item.svelte-82qwg8 {
        opacity: 0;
    }

    .icon.svelte-82qwg8 {
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .clear-select.svelte-82qwg8 {
        all: unset;
        display: flex;
        align-items: center;
        justify-content: center;
        width: var(--clear-select-width, 40px);
        height: var(--clear-select-height, 100%);
        color: var(--clear-select-color, var(--icons-color));
        margin: var(--clear-select-margin, 0);
        pointer-events: all;
        flex-shrink: 0;
    }

    .clear-select.svelte-82qwg8:focus {
        outline: var(--clear-select-focus-outline, 1px solid #006fe8);
    }

    .loading.svelte-82qwg8 {
        width: var(--loading-width, 40px);
        height: var(--loading-height);
        color: var(--loading-color, var(--icons-color));
        margin: var(--loading--margin, 0);
        flex-shrink: 0;
    }

    .chevron.svelte-82qwg8 {
        width: var(--chevron-width, 40px);
        height: var(--chevron-height, 40px);
        background: var(--chevron-background, transparent);
        pointer-events: var(--chevron-pointer-events, none);
        color: var(--chevron-color, var(--icons-color));
        border: var(--chevron-border, 0 0 0 1px solid #d8dbdf);
        flex-shrink: 0;
    }

    .multi.svelte-82qwg8 {
        padding: var(--multi-select-padding, var(--internal-padding));
    }

    .multi.svelte-82qwg8 input:where(.svelte-82qwg8) {
        padding: var(--multi-select-input-padding, 0);
        position: relative;
        margin: var(--multi-select-input-margin, 5px 0);
        flex: 1 1 40px;
    }

    .svelte-select.error.svelte-82qwg8 {
        border: var(--error-border, 1px solid #ff2d55);
        background: var(--error-background, #fff);
    }

    .a11y-text.svelte-82qwg8 {
        z-index: 9999;
        border: 0px;
        clip: rect(1px, 1px, 1px, 1px);
        height: 1px;
        width: 1px;
        position: absolute;
        overflow: hidden;
        padding: 0px;
        white-space: nowrap;
    }

    .multi-item.svelte-82qwg8 {
        background: var(--multi-item-bg, #ebedef);
        margin: var(--multi-item-margin, 0);
        outline: var(--multi-item-outline, 1px solid #ddd);
        border-radius: var(--multi-item-border-radius, 4px);
        height: var(--multi-item-height, 25px);
        line-height: var(--multi-item-height, 25px);
        display: flex;
        cursor: default;
        padding: var(--multi-item-padding, 0 5px);
        overflow: hidden;
        gap: var(--multi-item-gap, 4px);
        outline-offset: -1px;
        max-width: var(--multi-max-width, none);
        color: var(--multi-item-color, var(--item-color));
    }

    .multi-item.disabled.svelte-82qwg8:hover {
        background: var(--multi-item-disabled-hover-bg, #ebedef);
        color: var(--multi-item-disabled-hover-color, #c1c6cc);
    }

    .multi-item-text.svelte-82qwg8 {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }

    .multi-item-clear.svelte-82qwg8 {
        display: flex;
        align-items: center;
        justify-content: center;
        --clear-icon-color: var(--multi-item-clear-icon-color, #000);
    }

    .multi-item.active.svelte-82qwg8 {
        outline: var(--multi-item-active-outline, 1px solid #006fe8);
    }

    .svelte-select-list.svelte-82qwg8 {
        box-shadow: var(--list-shadow, 0 2px 3px 0 rgba(44, 62, 80, 0.24));
        border-radius: var(--list-border-radius, 4px);
        max-height: var(--list-max-height, 252px);
        overflow-y: auto;
        background: var(--list-background, #fff);
        position: var(--list-position, absolute);
        z-index: var(--list-z-index, 2);
        border: var(--list-border);
    }

    .prefloat.svelte-82qwg8 {
        opacity: 0;
        pointer-events: none;
    }

    .list-group-title.svelte-82qwg8 {
        color: var(--group-title-color, #8f8f8f);
        cursor: default;
        font-size: var(--group-title-font-size, 16px);
        font-weight: var(--group-title-font-weight, 600);
        height: var(--height, 42px);
        line-height: var(--height, 42px);
        padding: var(--group-title-padding, 0 20px);
        text-overflow: ellipsis;
        overflow-x: hidden;
        white-space: nowrap;
        text-transform: var(--group-title-text-transform, uppercase);
        border-width: var(--group-title-border-width, medium);
        border-style: var(--group-title-border-style, none);
        border-color: var(--group-title-border-color, color);
    }

    .empty.svelte-82qwg8 {
        text-align: var(--list-empty-text-align, center);
        padding: var(--list-empty-padding, 20px 0);
        color: var(--list-empty-color, #78848f);
    }

    .item.svelte-82qwg8 {
        cursor: default;
        height: var(--item-height, var(--height, 42px));
        line-height: var(--item-line-height, var(--height, 42px));
        padding: var(--item-padding, 0 20px);
        color: var(--item-color, inherit);
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
        transition: var(--item-transition, all 0.2s);
        align-items: center;
        width: 100%;
    }

    .item.group-item.svelte-82qwg8 {
        padding-left: var(--group-item-padding-left, 40px);
    }

    .item.svelte-82qwg8:active {
        background: var(--item-active-background, #b9daff);
    }

    .item.active.svelte-82qwg8 {
        background: var(--item-is-active-bg, #007aff);
        color: var(--item-is-active-color, #fff);
    }

    .item.first.svelte-82qwg8 {
        border-radius: var(--item-first-border-radius, 4px 4px 0 0);
    }

    .item.hover.svelte-82qwg8:not(.active) {
        background: var(--item-hover-bg, #e7f2ff);
        color: var(--item-hover-color, inherit);
    }

    .item.not-selectable.svelte-82qwg8,
    .item.hover.item.not-selectable.svelte-82qwg8,
    .item.active.item.not-selectable.svelte-82qwg8,
    .item.not-selectable.svelte-82qwg8:active {
        color: var(--item-is-not-selectable-color, #999);
        background: transparent;
    }

    .required.svelte-82qwg8 {
        opacity: 0;
        z-index: -1;
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
    }
`);
var XM = K('<div class="list-item svelte-82qwg8" tabindex="-1" role="none"><div><!></div></div>')
  , QM = K('<div class="empty svelte-82qwg8">No options</div>')
  , ZM = K('<div role="none"><!> <!> <!></div>')
  , eP = K('<span id="aria-selection" class="svelte-82qwg8"> </span> <span id="aria-context" class="svelte-82qwg8"> </span>', 1)
  , tP = K('<div class="multi-item-clear svelte-82qwg8"><!></div>')
  , nP = K('<div role="none"><span class="multi-item-text svelte-82qwg8"><!></span> <!></div>')
  , rP = K("<div><!></div>")
  , oP = K('<div class="icon loading svelte-82qwg8" aria-hidden="true"><!></div>')
  , aP = K('<button type="button" class="icon clear-select svelte-82qwg8"><!></button>')
  , iP = K('<div class="icon chevron svelte-82qwg8" aria-hidden="true"><!></div>')
  , sP = K('<input type="hidden" class="svelte-82qwg8"/>')
  , lP = K('<select class="required svelte-82qwg8" required tabindex="-1" aria-hidden="true"></select>')
  , uP = K('<div role="none"><!> <span aria-live="polite" aria-atomic="false" aria-relevant="additions text" class="a11y-text svelte-82qwg8"><!></span> <div class="prepend svelte-82qwg8"><!></div> <div class="value-container svelte-82qwg8"><!> <input/></div> <div class="indicators svelte-82qwg8"><!> <!> <!></div> <!> <!></div>');
function $i(e, t) {
    var n = function(W) {
        var ce = {};
        for (var Te in W.children && (ce.default = !0),
        W.$$slots)
            ce[Te] = !0;
        return ce
    }(t);
    it(t, !1);
    var o, a = T(), i = T(), s = T(), l = T(), u = T(), d = T(), c = T(), v = T(), p = T(), f = rR(), m = g(t, "justValue", 12, null), x = g(t, "filter", 8, VM), y = g(t, "getItems", 8, GM), w = g(t, "id", 8, null), S = g(t, "name", 8, null), P = g(t, "container", 12, void 0), R = g(t, "input", 12, void 0), k = g(t, "multiple", 8, !1), I = g(t, "multiFullItemClearable", 8, !1), H = g(t, "disabled", 8, !1), Y = g(t, "focused", 12, !1), M = g(t, "value", 12, null), Z = g(t, "filterText", 12, ""), ae = g(t, "placeholder", 8, "Please select"), ee = g(t, "placeholderAlwaysShow", 8, !1), se = g(t, "items", 12, null), _e = g(t, "label", 8, "label"), fe = g(t, "itemFilter", 8, (W, ce, Te) => "".concat(W).toLowerCase().includes(ce.toLowerCase())), Oe = g(t, "groupBy", 8, void 0), De = g(t, "groupFilter", 8, W => W), Ne = g(t, "groupHeaderSelectable", 8, !1), je = g(t, "itemId", 8, "value"), Ae = g(t, "loadOptions", 8, void 0), Pe = g(t, "containerStyles", 8, ""), Ve = g(t, "hasError", 8, !1), ge = g(t, "filterSelectedItems", 8, !0), de = g(t, "required", 8, !1), ye = g(t, "closeListOnChange", 8, !0), ct = g(t, "clearFilterTextOnBlur", 8, !0), qt = g(t, "createGroupHeaderItem", 8, (W, ce) => ({
        value: W,
        [_e()]: W
    })), X = () => r(c), D = g(t, "searchable", 8, !0), le = g(t, "inputStyles", 8, ""), F = g(t, "clearable", 8, !0), we = g(t, "loading", 12, !1), ne = g(t, "listOpen", 12, !1), Be = g(t, "debounce", 8, function(W) {
        var ce = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1;
        clearTimeout(o),
        o = setTimeout(W, ce)
    }), J = g(t, "debounceWait", 8, 300), U = g(t, "hideEmptyState", 8, !1), _t = g(t, "inputAttributes", 24, () => ({})), nt = g(t, "listAutoWidth", 8, !0), Se = g(t, "showChevron", 8, !1), mt = g(t, "listOffset", 8, 5), Fe = g(t, "hoverItemIndex", 12, 0), $e = g(t, "floatingConfig", 24, () => ({})), Lt = g(t, "class", 8, ""), We = T(), $t = T(), j = T(), C = T(), A = T();
    function $(W) {
        return W.map( (ce, Te) => ({
            index: Te,
            value: ce,
            label: "".concat(ce)
        }))
    }
    function re(W) {
        var ce = []
          , Te = {};
        W.forEach(sn => {
            var Jt = Oe()(sn);
            ce.includes(Jt) || (ce.push(Jt),
            Te[Jt] = [],
            Jt && Te[Jt].push(Object.assign(qt()(Jt, sn), {
                id: Jt,
                groupHeader: !0,
                selectable: Ne()
            }))),
            Te[Jt].push(Object.assign({
                groupItem: !!Jt
            }, sn))
        }
        );
        var vt = [];
        return De()(ce).forEach(sn => {
            Te[sn] && vt.push(...Te[sn])
        }
        ),
        vt
    }
    function Ce() {
        var W = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0
          , ce = arguments.length > 1 ? arguments[1] : void 0;
        Fe(W < 0 ? 0 : W),
        !ce && Oe() && r(c)[Fe()] && !r(c)[Fe()].selectable && Vt(1)
    }
    function ze() {
        var W = !0;
        if (M()) {
            var ce = []
              , Te = [];
            M().forEach(vt => {
                ce.includes(vt[je()]) ? W = !1 : (ce.push(vt[je()]),
                Te.push(vt))
            }
            ),
            W || M(Te)
        }
        return W
    }
    function oe(W) {
        var ce = W ? W[je()] : M()[je()];
        return se().find(Te => Te[je()] === ce)
    }
    function Q(W) {
        return dt.apply(this, arguments)
    }
    function dt() {
        return (dt = wt(function*(W) {
            var ce = M()[W];
            M().length === 1 ? M(void 0) : M(M().filter(Te => Te !== ce)),
            f("clear", ce)
        })).apply(this, arguments)
    }
    function Ye(W) {
        if (Y())
            switch (W.stopPropagation(),
            W.key) {
            case "Escape":
                W.preventDefault(),
                Xt();
                break;
            case "Enter":
                if (W.preventDefault(),
                ne()) {
                    if (r(c).length === 0)
                        break;
                    var ce = r(c)[Fe()];
                    if (M() && !k() && M()[je()] === ce[je()]) {
                        Xt();
                        break
                    }
                    He(r(c)[Fe()])
                }
                break;
            case "ArrowDown":
                W.preventDefault(),
                ne() ? Vt(1) : (ne(!0),
                h(We, void 0));
                break;
            case "ArrowUp":
                W.preventDefault(),
                ne() ? Vt(-1) : (ne(!0),
                h(We, void 0));
                break;
            case "Tab":
                if (ne() && Y()) {
                    if (r(c).length === 0 || M() && M()[je()] === r(c)[Fe()][je()])
                        return Xt();
                    W.preventDefault(),
                    He(r(c)[Fe()]),
                    Xt()
                }
                break;
            case "Backspace":
                if (!k() || Z().length > 0)
                    return;
                if (k() && M() && M().length > 0) {
                    if (Q(r(We) !== void 0 ? r(We) : M().length - 1),
                    r(We) === 0 || r(We) === void 0)
                        break;
                    h(We, M().length > r(We) ? r(We) - 1 : void 0)
                }
                break;
            case "ArrowLeft":
                if (!M() || !k() || Z().length > 0)
                    return;
                r(We) === void 0 ? h(We, M().length - 1) : M().length > r(We) && r(We) !== 0 && h(We, r(We) - 1);
                break;
            case "ArrowRight":
                if (!M() || !k() || Z().length > 0 || r(We) === void 0)
                    return;
                r(We) === M().length - 1 ? h(We, void 0) : r(We) < M().length - 1 && h(We, r(We) + 1)
            }
    }
    function he(W) {
        var ce, Te;
        Y() && R() === ((ce = document) === null || ce === void 0 ? void 0 : ce.activeElement) || (W && f("focus", W),
        (Te = R()) === null || Te === void 0 || Te.focus(),
        Y(!0))
    }
    function ft(W) {
        return Zt.apply(this, arguments)
    }
    function Zt() {
        return (Zt = wt(function*(W) {
            var ce;
            Ut || (ne() || Y()) && (f("blur", W),
            Xt(),
            Y(!1),
            h(We, void 0),
            (ce = R()) === null || ce === void 0 || ce.blur())
        })).apply(this, arguments)
    }
    function Tn() {
        if (!H())
            return Z().length > 0 ? ne(!0) : void ne(!ne())
    }
    function _n() {
        f("clear", M()),
        M(void 0),
        Xt(),
        he()
    }
    function Xt() {
        ct() && Z(""),
        ne(!1)
    }
    oR(wt(function*() {
        h($t, M()),
        h(j, Z()),
        h(C, k())
    })),
    ao( () => {
        ne() && Y(!0),
        Y() && R() && R().focus()
    }
    );
    var Rn = g(t, "ariaValues", 8, W => "Option ".concat(W, ", selected.")), on = g(t, "ariaListOpen", 8, (W, ce) => "You are currently focused on option ".concat(W, ". There are ").concat(ce, " results available.")), It = g(t, "ariaFocused", 8, () => "Select is focused, type to refine list, press down to open the menu."), St, Ht = T(null);
    function hn() {
        clearTimeout(St),
        St = setTimeout( () => {
            Ut = !1
        }
        , 100)
    }
    Vo( () => {
        var W;
        (W = r(Ht)) === null || W === void 0 || W.remove()
    }
    );
    var Ut = !1;
    function He(W) {
        W && W.selectable !== !1 && function(ce) {
            if (ce) {
                Z("");
                var Te = Object.assign({}, ce);
                if (Te.groupHeader && !Te.selectable)
                    return;
                M(k() ? M() ? M().concat([Te]) : [Te] : M(Te)),
                setTimeout( () => {
                    ye() && Xt(),
                    h(We, void 0),
                    f("change", M()),
                    f("select", ce)
                }
                )
            }
        }(W)
    }
    function Yt(W) {
        Ut || Fe(W)
    }
    function Vt(W) {
        if (r(c).filter(Te => !Object.hasOwn(Te, "selectable") || Te.selectable === !0).length === 0)
            return Fe(0);
        W > 0 && Fe() === r(c).length - 1 ? Fe(0) : W < 0 && Fe() === 0 ? Fe(r(c).length - 1) : Fe(Fe() + W);
        var ce = r(c)[Fe()];
        ce && ce.selectable === !1 && (W !== 1 && W !== -1 || Vt(W))
    }
    function bn(W, ce, Te) {
        if (!k())
            return ce && ce[Te] === W[Te]
    }
    var or = Mr
      , Bn = Mr;
    function Mr(W) {
        return {
            update(ce) {
                ce.scroll && (hn(),
                W.scrollIntoView({
                    behavior: "auto",
                    block: "nearest"
                }))
            }
        }
    }
    var Gn = T({
        strategy: "absolute",
        placement: "bottom-start",
        middleware: [FM(mt()), WM(), BM()],
        autoUpdate: !1
    })
      , [fr,Tr,Sr] = HM(r(Gn))
      , Cr = T(!0);
    V( () => (b(se()),
    b(M())), () => {
        se(),
        M() && function() {
            if (typeof M() == "string") {
                var W = (se() || []).find(ce => ce[je()] === M());
                M(W || {
                    [je()]: M(),
                    label: M()
                })
            } else
                k() && Array.isArray(M()) && M().length > 0 && M(M().map(ce => typeof ce == "string" ? {
                    value: ce,
                    label: ce
                } : ce))
        }()
    }
    ),
    V( () => (b(_t()),
    b(D())), () => {
        !_t() && D() || (h(A, Object.assign({
            autocapitalize: "none",
            autocomplete: "off",
            autocorrect: "off",
            spellcheck: !1,
            tabindex: 0,
            type: "text",
            "aria-autocomplete": "list"
        }, _t())),
        w() && Oo(A, r(A).id = w()),
        D() || Oo(A, r(A).readonly = !0))
    }
    ),
    V( () => b(k()), () => {
        k() && M() && (Array.isArray(M()) ? M([...M()]) : M([M()]))
    }
    ),
    V( () => (r(C),
    b(k())), () => {
        r(C) && !k() && M() && M(null)
    }
    ),
    V( () => (b(k()),
    b(M())), () => {
        k() && M() && M().length > 1 && ze()
    }
    ),
    V( () => b(M()), () => {
        M() && (k() ? JSON.stringify(M()) !== JSON.stringify(r($t)) && ze() && f("input", M()) : r($t) && JSON.stringify(M()[je()]) === JSON.stringify(r($t)[je()]) || f("input", M()))
    }
    ),
    V( () => (b(M()),
    b(k()),
    r($t)), () => {
        !M() && k() && r($t) && f("input", M())
    }
    ),
    V( () => (b(Y()),
    b(R())), () => {
        !Y() && R() && Xt()
    }
    ),
    V( () => (b(Z()),
    r(j)), () => {
        Z() !== r(j) && (Ae() || Z().length !== 0) && (Ae() ? Be()(wt(function*() {
            we(!0);
            var W = yield y()({
                dispatch: f,
                loadOptions: Ae(),
                convertStringItemsToObjects: $,
                filterText: Z()
            });
            W ? (we(W.loading),
            ne(ne() ? W.listOpen : Z().length > 0),
            Y(ne() && W.focused),
            se(Oe() ? re(W.filteredItems) : W.filteredItems)) : (we(!1),
            Y(!0),
            ne(!0))
        }), J()) : (ne(!0),
        k() && h(We, void 0)))
    }
    ),
    V( () => (b(x()),
    b(Ae()),
    b(Z()),
    b(se()),
    b(k()),
    b(M()),
    b(je()),
    b(Oe()),
    b(_e()),
    b(ge()),
    b(fe())), () => {
        h(c, x()({
            loadOptions: Ae(),
            filterText: Z(),
            items: se(),
            multiple: k(),
            value: M(),
            itemId: je(),
            groupBy: Oe(),
            label: _e(),
            filterSelectedItems: ge(),
            itemFilter: fe(),
            convertStringItemsToObjects: $,
            filterGroupedItems: re
        }))
    }
    ),
    V( () => (b(k()),
    b(ne()),
    b(M()),
    r(c)), () => {
        !k() && ne() && M() && r(c) && Ce(r(c).findIndex(W => W[je()] === M()[je()]), !0)
    }
    ),
    V( () => (b(ne()),
    b(k())), () => {
        ne() && k() && Fe(0)
    }
    ),
    V( () => b(Z()), () => {
        Z() && Fe(0)
    }
    ),
    V( () => b(Fe()), () => {
        var W;
        W = Fe(),
        f("hoverItem", W)
    }
    ),
    V( () => (b(k()),
    b(M())), () => {
        h(a, k() ? M() && M().length > 0 : M())
    }
    ),
    V( () => (r(a),
    b(Z())), () => {
        h(i, r(a) && Z().length > 0)
    }
    ),
    V( () => (r(a),
    b(F()),
    b(H()),
    b(we())), () => {
        h(s, r(a) && F() && !H() && !we())
    }
    ),
    V( () => (b(ee()),
    b(k()),
    b(ae()),
    b(M())), () => {
        var W;
        h(l, ee() && k() || k() && ((W = M()) === null || W === void 0 ? void 0 : W.length) === 0 ? ae() : M() ? "" : ae())
    }
    ),
    V( () => (b(M()),
    b(k())), () => {
        var W, ce;
        h(u, M() ? (W = k(),
        ce = void 0,
        ce = W && M().length > 0 ? M().map(Te => Te[_e()]).join(", ") : M()[_e()],
        Rn()(ce)) : "")
    }
    ),
    V( () => (r(c),
    b(Fe()),
    b(Y()),
    b(ne())), () => {
        h(d, function() {
            if (!r(c) || r(c).length === 0)
                return "";
            var W = r(c)[Fe()];
            if (ne() && W) {
                var ce = r(c) ? r(c).length : 0;
                return on()(W[_e()], ce)
            }
            return It()()
        }((r(c),
        Fe(),
        Y(),
        ne())))
    }
    ),
    V( () => b(se()), () => {
        (function(W) {
            W && W.length !== 0 && !W.some(ce => typeof ce != "object") && M() && (k() ? !M().some(ce => !ce || !ce[je()]) : M()[je()]) && (Array.isArray(M()) ? M(M().map(ce => oe(ce) || ce)) : M(oe() || M()))
        }
        )(se())
    }
    ),
    V( () => (b(k()),
    b(M()),
    b(je())), () => {
        m((k(),
        M(),
        je(),
        k() ? M() ? M().map(W => W[je()]) : null : M() ? M()[je()] : M()))
    }
    ),
    V( () => (b(k()),
    r($t),
    b(M())), () => {
        k() || !r($t) || M() || f("input", M())
    }
    ),
    V( () => (b(ne()),
    r(c),
    b(k()),
    b(M())), () => {
        ne() && r(c) && !k() && !M() && Ce()
    }
    ),
    V( () => r(c), () => {
        (function(W) {
            ne() && f("filter", W)
        }
        )(r(c))
    }
    ),
    V( () => (b(P()),
    b($e()),
    r(Gn)), () => {
        P() && $e() && Sr(Object.assign(r(Gn), $e()))
    }
    ),
    V( () => r(Ht), () => {
        h(v, !!r(Ht))
    }
    ),
    V( () => (r(Ht),
    b(ne())), () => {
        (function(W, ce) {
            if (!W || !ce)
                return h(Cr, !0);
            setTimeout( () => {
                h(Cr, !1)
            }
            , 0)
        }
        )(r(Ht), ne())
    }
    ),
    V( () => (b(ne()),
    b(P()),
    r(Ht)), () => {
        ne() && P() && r(Ht) && function() {
            var {width: W} = P().getBoundingClientRect();
            Oo(Ht, r(Ht).style.width = nt() ? W + "px" : "auto")
        }()
    }
    ),
    V( () => b(Fe()), () => {
        h(p, Fe())
    }
    ),
    V( () => (b(R()),
    b(ne()),
    b(Y())), () => {
        R() && ne() && !Y() && he()
    }
    ),
    V( () => (b(P()),
    b($e())), () => {
        var W;
        P() && ((W = $e()) === null || W === void 0 ? void 0 : W.autoUpdate) === void 0 && Oo(Gn, r(Gn).autoUpdate = !0)
    }
    ),
    An(),
    Rt();
    var ar, Or = uP();
    me("click", $a, function(W) {
        var ce;
        ne() || Y() || !P() || P().contains(W.target) || (ce = r(Ht)) !== null && ce !== void 0 && ce.contains(W.target) || ft()
    }),
    me("keydown", $a, Ye);
    var be = z(Or)
      , an = W => {
        var ce, Te = ZM(), vt = z(Te), sn = Nt => {
            var Pn = jr();
            _r(ht(Pn), t, "list-prepend", {}, null),
            L(Nt, Pn)
        }
        ;
        ie(vt, Nt => {
            N( () => n["list-prepend"]) && Nt(sn)
        }
        );
        var Jt = B(vt, 2)
          , Wn = Nt => {
            var Pn = jr();
            _r(ht(Pn), t, "list", {
                get filteredItems() {
                    return r(c)
                }
            }, null),
            L(Nt, Pn)
        }
          , Zn = (Nt, Pn) => {
            var eo = pr => {
                var Ge = jr();
                wr(ht(Ge), 1, () => r(c), Rr, (un, wn, Ln) => {
                    var uo, kn = XM(), yo = z(kn);
                    _r(z(yo), t, "item", {
                        get item() {
                            return r(wn)
                        },
                        index: Ln
                    }, Er => {
                        var Ir = Jr();
                        Ee( () => lt(Ir, (r(wn),
                        b(_e()),
                        N( () => {
                            var Pr;
                            return (Pr = r(wn)) === null || Pr === void 0 ? void 0 : Pr[_e()]
                        }
                        )))),
                        L(Er, Ir)
                    }
                    ),
                    lo(yo, (Er, Ir) => or?.(Er), () => ({
                        scroll: bn(r(wn), M(), je()),
                        listDom: r(v)
                    })),
                    lo(yo, (Er, Ir) => Bn?.(Er), () => ({
                        scroll: r(p) === Ln,
                        listDom: r(v)
                    })),
                    Ee(Er => uo = At(yo, 1, "item svelte-82qwg8", null, uo, Er), [ () => {
                        var Er, Ir;
                        return {
                            "list-group-title": r(wn).groupHeader,
                            active: bn(r(wn), M(), je()),
                            first: (Ir = Ln,
                            Ir === 0),
                            hover: Fe() === Ln,
                            "group-item": r(wn).groupItem,
                            "not-selectable": ((Er = r(wn)) === null || Er === void 0 ? void 0 : Er.selectable) === !1
                        }
                    }
                    ], pe),
                    me("mouseover", kn, () => Yt(Ln)),
                    me("focus", kn, () => Yt(Ln)),
                    me("click", kn, Ta( () => function(Er) {
                        var {item: Ir, i: Pr} = Er;
                        if (Ir?.selectable !== !1)
                            return M() && !k() && M()[je()] === Ir[je()] ? Xt() : void (function(to) {
                                return to.groupHeader && to.selectable || to.selectable || !to.hasOwnProperty("selectable")
                            }(Ir) && (Fe(Pr),
                            He(Ir)))
                    }({
                        item: r(wn),
                        i: Ln
                    }))),
                    me("keydown", kn, ri(Ta(function(Er) {
                        Tl.call(this, t, Er)
                    }))),
                    L(un, kn)
                }
                ),
                L(pr, Ge)
            }
              , Ct = (pr, Ge) => {
                var un = wn => {
                    var Ln = jr();
                    _r(ht(Ln), t, "empty", {}, uo => {
                        L(uo, QM())
                    }
                    ),
                    L(wn, Ln)
                }
                ;
                ie(pr, wn => {
                    U() || wn(un)
                }
                , Ge)
            }
            ;
            ie(Nt, pr => {
                r(c),
                N( () => r(c).length > 0) ? pr(eo) : pr(Ct, !1)
            }
            , Pn)
        }
        ;
        ie(Jt, Nt => {
            N( () => n.list) ? Nt(Wn) : Nt(Zn, !1)
        }
        );
        var sr = B(Jt, 2)
          , Nn = Nt => {
            var Pn = jr();
            _r(ht(Pn), t, "list-append", {}, null),
            L(Nt, Pn)
        }
        ;
        ie(sr, Nt => {
            N( () => n["list-append"]) && Nt(Nn)
        }
        ),
        lo(Te, Nt => Tr?.(Nt)),
        nr(Te, Nt => h(Ht, Nt), () => r(Ht)),
        Gr( () => me("scroll", Te, hn)),
        Gr( () => me("pointerup", Te, ri(Ta(function(Nt) {
            Tl.call(this, t, Nt)
        })))),
        Gr( () => me("mousedown", Te, ri(Ta(function(Nt) {
            Tl.call(this, t, Nt)
        })))),
        Ee(Nt => ce = At(Te, 1, "svelte-select-list svelte-82qwg8", null, ce, Nt), [ () => ({
            prefloat: r(Cr)
        })], pe),
        L(W, Te)
    }
    ;
    ie(be, W => {
        ne() && W(an)
    }
    );
    var te = B(be, 2)
      , Re = z(te)
      , at = W => {
        var ce = eP()
          , Te = ht(ce)
          , vt = z(Te)
          , sn = z(B(Te, 2));
        Ee( () => {
            lt(vt, r(u)),
            lt(sn, r(d))
        }
        ),
        L(W, ce)
    }
    ;
    ie(Re, W => {
        Y() && W(at)
    }
    );
    var Dt = B(te, 2);
    _r(z(Dt), t, "prepend", {}, null);
    var Xe = B(Dt, 2)
      , Gt = z(Xe)
      , Sn = W => {
        var ce = jr()
          , Te = ht(ce)
          , vt = Jt => {
            var Wn = jr();
            wr(ht(Wn), 1, M, Rr, (Zn, sr, Nn) => {
                var Nt, Pn = nP(), eo = z(Pn);
                _r(z(eo), t, "selection", {
                    get selection() {
                        return r(sr)
                    },
                    index: Nn
                }, Ge => {
                    var un = Jr();
                    Ee( () => lt(un, (r(sr),
                    b(_e()),
                    N( () => r(sr)[_e()])))),
                    L(Ge, un)
                }
                );
                var Ct = B(eo, 2)
                  , pr = Ge => {
                    var un = tP();
                    _r(z(un), t, "multi-clear-icon", {}, wn => {
                        nv(wn)
                    }
                    ),
                    me("pointerup", un, ri(Ta( () => Q(Nn)))),
                    L(Ge, un)
                }
                ;
                ie(Ct, Ge => {
                    H() || I() || !nv || Ge(pr)
                }
                ),
                Ee(Ge => Nt = At(Pn, 1, "multi-item svelte-82qwg8", null, Nt, Ge), [ () => ({
                    active: r(We) === Nn,
                    disabled: H()
                })], pe),
                me("click", Pn, ri( () => I() ? Q(Nn) : {})),
                me("keydown", Pn, ri(Ta(function(Ge) {
                    Tl.call(this, t, Ge)
                }))),
                L(Zn, Pn)
            }
            ),
            L(Jt, Wn)
        }
          , sn = Jt => {
            var Wn, Zn = rP();
            _r(z(Zn), t, "selection", {
                get selection() {
                    return M()
                }
            }, sr => {
                var Nn = Jr();
                Ee( () => lt(Nn, (b(M()),
                b(_e()),
                N( () => M()[_e()])))),
                L(sr, Nn)
            }
            ),
            Ee(sr => Wn = At(Zn, 1, "selected-item svelte-82qwg8", null, Wn, sr), [ () => ({
                "hide-selected-item": r(i)
            })], pe),
            L(Jt, Zn)
        }
        ;
        ie(Te, Jt => {
            k() ? Jt(vt) : Jt(sn, !1)
        }
        ),
        L(W, ce)
    }
    ;
    ie(Gt, W => {
        r(a) && W(Sn)
    }
    );
    var Pt = B(Gt, 2);
    Vu(Pt, () => ke(ke({
        readOnly: !D()
    }, r(A)), {}, {
        placeholder: r(l),
        style: le(),
        disabled: H()
    }), void 0, "svelte-82qwg8"),
    nr(Pt, W => R(W), () => R());
    var In = B(Xe, 2)
      , pt = z(In)
      , en = W => {
        var ce = oP();
        _r(z(ce), t, "loading-icon", {}, Te => {
            (function(vt) {
                L(vt, YM())
            }
            )(Te)
        }
        ),
        L(W, ce)
    }
    ;
    ie(pt, W => {
        we() && W(en)
    }
    );
    var rt = B(pt, 2)
      , zt = W => {
        var ce = aP();
        _r(z(ce), t, "clear-icon", {}, Te => {
            nv(Te)
        }
        ),
        me("click", ce, _n),
        L(W, ce)
    }
    ;
    ie(rt, W => {
        r(s) && W(zt)
    }
    );
    var Mn = B(rt, 2)
      , ir = W => {
        var ce = iP();
        _r(z(ce), t, "chevron-icon", {
            get listOpen() {
                return ne()
            }
        }, Te => {
            (function(vt) {
                L(vt, JM())
            }
            )(Te)
        }
        ),
        L(W, ce)
    }
    ;
    ie(Mn, W => {
        Se() && W(ir)
    }
    );
    var Ft = B(In, 2);
    _r(Ft, t, "input-hidden", {
        get value() {
            return M()
        }
    }, W => {
        var ce = sP();
        Ee(Te => {
            zn(ce, "name", S()),
            Zi(ce, Te)
        }
        , [ () => (b(M()),
        N( () => M() ? JSON.stringify(M()) : null))], pe),
        L(W, ce)
    }
    );
    var xn = B(Ft, 2)
      , ut = W => {
        var ce = jr();
        _r(ht(ce), t, "required", {
            get value() {
                return M()
            }
        }, Te => {
            L(Te, lP())
        }
        ),
        L(W, ce)
    }
    ;
    return ie(xn, W => {
        b(de()),
        b(M()),
        N( () => de() && (!M() || M().length === 0)) && W(ut)
    }
    ),
    Gr( () => me("pointerup", Or, ri(Tn))),
    nr(Or, W => P(W), () => P()),
    lo(Or, W => fr?.(W)),
    Ee(W => {
        var ce;
        ar = At(Or, 1, "svelte-select ".concat((ce = Lt()) !== null && ce !== void 0 ? ce : ""), "svelte-82qwg8", ar, W),
        ra(Or, Pe())
    }
    , [ () => ({
        multi: k(),
        disabled: H(),
        focused: Y(),
        "list-open": ne(),
        "show-chevron": Se(),
        error: Ve()
    })], pe),
    me("keydown", Pt, Ye),
    me("blur", Pt, ft),
    me("focus", Pt, he),
    gc(Pt, Z),
    L(e, Or),
    Et(t, "getFilteredItems", X),
    Et(t, "handleClear", _n),
    st({
        getFilteredItems: X,
        handleClear: _n
    })
}
kt(`/* over all fonts, sizes, and colors */
/* "consolas" for Windows, "menlo" for Mac with fallback to "monaco", 'Ubuntu Mono' for Ubuntu */
/* (at Mac this font looks too large at 14px, but 13px is too small for the font on Windows) */
/* main, menu, modal */
/* jsoneditor modal */
/* tooltip in text mode */
/* panels: navigation bar, gutter, search box */
/* navigation-bar */
/* context menu */
/* contents: json key and values */
/* contents: selected or hovered */
/* contents: section of collapsed items in an array */
/* contents: highlighting of search matches */
/* contents: inline tags inside the JSON document */
/* contents: table */
/* controls in modals: inputs, buttons, and \`a\` */
/* messages */
/* svelte-select */
/* color picker */
table.jse-transform-wizard.svelte-qbze6z {
  border-collapse: collapse;
  border-spacing: 0;
  width: 100%;
}
table.jse-transform-wizard.svelte-qbze6z input:where(.svelte-qbze6z) {
  font-family: inherit;
  font-size: inherit;
}
table.jse-transform-wizard.svelte-qbze6z tr:where(.svelte-qbze6z) th:where(.svelte-qbze6z) {
  font-weight: normal;
  text-align: left;
  width: 60px;
}
table.jse-transform-wizard.svelte-qbze6z tr:where(.svelte-qbze6z) td:where(.svelte-qbze6z) .jse-horizontal:where(.svelte-qbze6z) {
  width: 100%;
  display: flex;
  flex-direction: row;
  margin-bottom: calc(0.5 * var(--jse-padding, 10px));
}
table.jse-transform-wizard.svelte-qbze6z tr:where(.svelte-qbze6z) td:where(.svelte-qbze6z) .jse-horizontal:where(.svelte-qbze6z) .svelte-select .multi-item {
  align-items: center;
}
table.jse-transform-wizard.svelte-qbze6z tr:where(.svelte-qbze6z) td:where(.svelte-qbze6z) .jse-horizontal:where(.svelte-qbze6z) .svelte-select .value-container {
  gap: 0 !important;
}
table.jse-transform-wizard.svelte-qbze6z tr:where(.svelte-qbze6z) td:where(.svelte-qbze6z) .jse-horizontal:where(.svelte-qbze6z) .svelte-select.jse-filter-path {
  flex: 4;
  margin-right: calc(0.5 * var(--jse-padding, 10px));
}
table.jse-transform-wizard.svelte-qbze6z tr:where(.svelte-qbze6z) td:where(.svelte-qbze6z) .jse-horizontal:where(.svelte-qbze6z) .svelte-select.jse-filter-relation {
  flex: 1.5;
  margin-right: calc(0.5 * var(--jse-padding, 10px));
}
table.jse-transform-wizard.svelte-qbze6z tr:where(.svelte-qbze6z) td:where(.svelte-qbze6z) .jse-horizontal:where(.svelte-qbze6z) .svelte-select.jse-sort-path {
  flex: 3;
  margin-right: calc(0.5 * var(--jse-padding, 10px));
}
table.jse-transform-wizard.svelte-qbze6z tr:where(.svelte-qbze6z) td:where(.svelte-qbze6z) .jse-horizontal:where(.svelte-qbze6z) .svelte-select.jse-sort-direction {
  flex: 1;
}
table.jse-transform-wizard.svelte-qbze6z tr:where(.svelte-qbze6z) td:where(.svelte-qbze6z) .jse-horizontal:where(.svelte-qbze6z) .svelte-select.jse-projection-paths {
  flex: 1;
}
table.jse-transform-wizard.svelte-qbze6z tr:where(.svelte-qbze6z) td:where(.svelte-qbze6z) .jse-horizontal:where(.svelte-qbze6z) .svelte-select input {
  box-sizing: border-box;
}
table.jse-transform-wizard.svelte-qbze6z tr:where(.svelte-qbze6z) td:where(.svelte-qbze6z) .jse-horizontal:where(.svelte-qbze6z) .jse-filter-value:where(.svelte-qbze6z) {
  flex: 4;
  padding: 4px 8px;
  border: var(--jse-input-border, 1px solid #d8dbdf);
  border-radius: var(--jse-input-radius, 3px);
  outline: none;
  background: var(--jse-input-background, var(--jse-background-color, #fff));
  color: inherit;
}
table.jse-transform-wizard.svelte-qbze6z tr:where(.svelte-qbze6z) td:where(.svelte-qbze6z) .jse-horizontal:where(.svelte-qbze6z) .jse-filter-value:where(.svelte-qbze6z):focus {
  border: var(--jse-input-border-focus, 1px solid var(--jse-input-border-focus, var(--jse-theme-color, #3883fa)));
}`);
var cP = K('<table class="jse-transform-wizard svelte-qbze6z"><tbody><tr class="svelte-qbze6z"><th class="svelte-qbze6z">Filter</th><td class="svelte-qbze6z"><div class="jse-horizontal svelte-qbze6z"><!> <!> <input class="jse-filter-value svelte-qbze6z"/></div></td></tr><tr class="svelte-qbze6z"><th class="svelte-qbze6z">Sort</th><td class="svelte-qbze6z"><div class="jse-horizontal svelte-qbze6z"><!> <!></div></td></tr><tr class="svelte-qbze6z"><th class="svelte-qbze6z">Pick</th><td class="svelte-qbze6z"><div class="jse-horizontal svelte-qbze6z"><!></div></td></tr></tbody></table>');
function dP(e, t) {
    var n, o, a, i, s;
    it(t, !1);
    var l = T(void 0, !0)
      , u = T(void 0, !0)
      , d = T(void 0, !0)
      , c = T(void 0, !0)
      , v = T(void 0, !0)
      , p = T(void 0, !0)
      , f = Hr("jsoneditor:TransformWizard")
      , m = g(t, "json", 9)
      , x = g(t, "queryOptions", 29, () => ({}))
      , y = g(t, "onChange", 9)
      , w = ["==", "!=", "<", "<=", ">", ">="].map(ge => ({
        value: ge,
        label: ge
    }))
      , S = [{
        value: "asc",
        label: "ascending"
    }, {
        value: "desc",
        label: "descending"
    }]
      , P = T((n = x()) !== null && n !== void 0 && (n = n.filter) !== null && n !== void 0 && n.path ? ii(x().filter.path) : void 0, !0)
      , R = T((o = w.find(ge => {
        var de;
        return ge.value === ((de = x().filter) === null || de === void 0 ? void 0 : de.relation)
    }
    )) !== null && o !== void 0 ? o : w[0], !0)
      , k = T(((a = x()) === null || a === void 0 || (a = a.filter) === null || a === void 0 ? void 0 : a.value) || "", !0)
      , I = T((i = x()) !== null && i !== void 0 && (i = i.sort) !== null && i !== void 0 && i.path ? ii(x().sort.path) : void 0, !0)
      , H = T((s = S.find(ge => {
        var de;
        return ge.value === ((de = x().sort) === null || de === void 0 ? void 0 : de.direction)
    }
    )) !== null && s !== void 0 ? s : S[0], !0);
    V( () => b(m()), () => {
        h(l, Array.isArray(m()))
    }
    ),
    V( () => (r(l),
    b(m())), () => {
        h(u, r(l) ? Tv(m()) : [])
    }
    ),
    V( () => (r(l),
    b(m())), () => {
        h(d, r(l) ? Tv(m(), !0) : [])
    }
    ),
    V( () => (r(u),
    ii), () => {
        h(c, r(u).map(ii))
    }
    ),
    V( () => (r(d),
    ii), () => {
        h(v, r(d) ? r(d).map(ii) : [])
    }
    ),
    V( () => (b(x()),
    r(v),
    Wt), () => {
        var ge;
        h(p, (ge = x()) !== null && ge !== void 0 && (ge = ge.projection) !== null && ge !== void 0 && ge.paths && r(v) ? x().projection.paths.map(de => r(v).find(ye => Wt(ye.value, de))).filter(de => !!de) : void 0)
    }
    ),
    V( () => r(P), () => {
        var ge, de, ye;
        de = (ge = r(P)) === null || ge === void 0 ? void 0 : ge.value,
        Wt((ye = x()) === null || ye === void 0 || (ye = ye.filter) === null || ye === void 0 ? void 0 : ye.path, de) || (f("changeFilterPath", de),
        x(ga(x(), ["filter", "path"], de, !0)),
        y()(x()))
    }
    ),
    V( () => r(R), () => {
        var ge, de, ye;
        de = (ge = r(R)) === null || ge === void 0 ? void 0 : ge.value,
        Wt((ye = x()) === null || ye === void 0 || (ye = ye.filter) === null || ye === void 0 ? void 0 : ye.relation, de) || (f("changeFilterRelation", de),
        x(ga(x(), ["filter", "relation"], de, !0)),
        y()(x()))
    }
    ),
    V( () => r(k), () => {
        var ge, de;
        ge = r(k),
        Wt((de = x()) === null || de === void 0 || (de = de.filter) === null || de === void 0 ? void 0 : de.value, ge) || (f("changeFilterValue", ge),
        x(ga(x(), ["filter", "value"], ge, !0)),
        y()(x()))
    }
    ),
    V( () => r(I), () => {
        var ge, de, ye;
        de = (ge = r(I)) === null || ge === void 0 ? void 0 : ge.value,
        Wt((ye = x()) === null || ye === void 0 || (ye = ye.sort) === null || ye === void 0 ? void 0 : ye.path, de) || (f("changeSortPath", de),
        x(ga(x(), ["sort", "path"], de, !0)),
        y()(x()))
    }
    ),
    V( () => r(H), () => {
        var ge, de, ye;
        de = (ge = r(H)) === null || ge === void 0 ? void 0 : ge.value,
        Wt((ye = x()) === null || ye === void 0 || (ye = ye.sort) === null || ye === void 0 ? void 0 : ye.direction, de) || (f("changeSortDirection", de),
        x(ga(x(), ["sort", "direction"], de, !0)),
        y()(x()))
    }
    ),
    V( () => r(p), () => {
        (function(ge) {
            var de;
            Wt((de = x()) === null || de === void 0 || (de = de.projection) === null || de === void 0 ? void 0 : de.paths, ge) || (f("changeProjectionPaths", ge),
            x(ga(x(), ["projection", "paths"], ge, !0)),
            y()(x()))
        }
        )(r(p) ? r(p).map(ge => ge.value) : void 0)
    }
    ),
    An(),
    Rt(!0);
    var Y = cP()
      , M = z(Y)
      , Z = z(M)
      , ae = B(z(Z))
      , ee = z(ae)
      , se = z(ee);
    $i(se, {
        class: "jse-filter-path",
        showChevron: !0,
        get items() {
            return r(c)
        },
        get value() {
            return r(P)
        },
        set value(ge) {
            h(P, ge)
        },
        $$legacy: !0
    });
    var _e = B(se, 2);
    $i(_e, {
        class: "jse-filter-relation",
        showChevron: !0,
        clearable: !1,
        get items() {
            return w
        },
        get value() {
            return r(R)
        },
        set value(ge) {
            h(R, ge)
        },
        $$legacy: !0
    });
    var fe = B(_e, 2)
      , Oe = B(Z)
      , De = B(z(Oe))
      , Ne = z(De)
      , je = z(Ne);
    $i(je, {
        class: "jse-sort-path",
        showChevron: !0,
        get items() {
            return r(c)
        },
        get value() {
            return r(I)
        },
        set value(ge) {
            h(I, ge)
        },
        $$legacy: !0
    }),
    $i(B(je, 2), {
        class: "jse-sort-direction",
        showChevron: !0,
        clearable: !1,
        get items() {
            return S
        },
        get value() {
            return r(H)
        },
        set value(ge) {
            h(H, ge)
        },
        $$legacy: !0
    });
    var Ae = B(Oe)
      , Pe = B(z(Ae))
      , Ve = z(Pe);
    $i(z(Ve), {
        class: "jse-projection-paths",
        multiple: !0,
        showChevron: !0,
        get items() {
            return r(v)
        },
        get value() {
            return r(p)
        },
        set value(ge) {
            h(p, ge)
        },
        $$legacy: !0
    }),
    gc(fe, () => r(k), ge => h(k, ge)),
    L(e, Y),
    st()
}
kt(`/* over all fonts, sizes, and colors */
/* "consolas" for Windows, "menlo" for Mac with fallback to "monaco", 'Ubuntu Mono' for Ubuntu */
/* (at Mac this font looks too large at 14px, but 13px is too small for the font on Windows) */
/* main, menu, modal */
/* jsoneditor modal */
/* tooltip in text mode */
/* panels: navigation bar, gutter, search box */
/* navigation-bar */
/* context menu */
/* contents: json key and values */
/* contents: selected or hovered */
/* contents: section of collapsed items in an array */
/* contents: highlighting of search matches */
/* contents: inline tags inside the JSON document */
/* contents: table */
/* controls in modals: inputs, buttons, and \`a\` */
/* messages */
/* svelte-select */
/* color picker */
.jse-select-query-language.svelte-atm4um {
  position: relative;
  width: 32px;
}
.jse-select-query-language.svelte-atm4um .jse-select-query-language-container:where(.svelte-atm4um) {
  position: absolute;
  top: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  box-shadow: var(--jse-controls-box-shadow, 0 2px 6px 0 rgba(0, 0, 0, 0.24));
}
.jse-select-query-language.svelte-atm4um .jse-select-query-language-container:where(.svelte-atm4um) .jse-query-language:where(.svelte-atm4um) {
  border: none;
  background: transparent;
  color: inherit;
  cursor: pointer;
  font-family: var(--jse-font-family, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif);
  font-size: var(--jse-font-size, 16px);
  padding: 5px;
  margin: 0;
  text-align: left;
  padding: var(--jse-padding, 10px) calc(2 * var(--jse-padding, 10px));
  white-space: nowrap;
  color: var(--jse-context-menu-color, var(--jse-text-color-inverse, #fff));
  background: var(--jse-context-menu-background, #656565);
}
.jse-select-query-language.svelte-atm4um .jse-select-query-language-container:where(.svelte-atm4um) .jse-query-language:where(.svelte-atm4um):hover {
  background: var(--jse-context-menu-background-highlight, #7a7a7a);
}`);
var vP = K('<button type="button"><!> </button>')
  , fP = K('<div class="jse-select-query-language svelte-atm4um"><div class="jse-select-query-language-container svelte-atm4um"></div></div>');
function pP(e, t) {
    it(t, !1);
    var n = g(t, "queryLanguages", 8)
      , o = g(t, "queryLanguageId", 12)
      , a = g(t, "onChangeQueryLanguage", 8);
    Rt();
    var i = fP();
    wr(z(i), 5, n, Rr, (s, l) => {
        var u, d = vP(), c = z(d), v = m => {
            fn(m, {
                get data() {
                    return fm
                }
            })
        }
        , p = m => {
            fn(m, {
                get data() {
                    return pm
                }
            })
        }
        ;
        ie(c, m => {
            r(l),
            b(o()),
            N( () => r(l).id === o()) ? m(v) : m(p, !1)
        }
        );
        var f = B(c);
        Ee(m => {
            var x;
            u = At(d, 1, "jse-query-language svelte-atm4um", null, u, m),
            zn(d, "title", (r(l),
            N( () => "Select ".concat(r(l).name, " as query language")))),
            lt(f, " ".concat((r(l),
            (x = N( () => r(l).name)) !== null && x !== void 0 ? x : "")))
        }
        , [ () => ({
            selected: r(l).id === o()
        })], pe),
        me("click", d, () => {
            return m = r(l).id,
            o(m),
            void a()(m);
            var m
        }
        ),
        L(s, d)
    }
    ),
    L(e, i),
    st()
}
kt(`/* over all fonts, sizes, and colors */
/* "consolas" for Windows, "menlo" for Mac with fallback to "monaco", 'Ubuntu Mono' for Ubuntu */
/* (at Mac this font looks too large at 14px, but 13px is too small for the font on Windows) */
/* main, menu, modal */
/* jsoneditor modal */
/* tooltip in text mode */
/* panels: navigation bar, gutter, search box */
/* navigation-bar */
/* context menu */
/* contents: json key and values */
/* contents: selected or hovered */
/* contents: section of collapsed items in an array */
/* contents: highlighting of search matches */
/* contents: inline tags inside the JSON document */
/* contents: table */
/* controls in modals: inputs, buttons, and \`a\` */
/* messages */
/* svelte-select */
/* color picker */
.jse-header.svelte-1y24war {
  display: flex;
  background: var(--jse-theme-color, #3883fa);
  color: var(--jse-menu-color, var(--jse-text-color-inverse, #fff));
}
.jse-header.svelte-1y24war .jse-title:where(.svelte-1y24war) {
  flex: 1;
  padding: 5px;
  vertical-align: middle;
}
.jse-header.svelte-1y24war button:where(.svelte-1y24war) {
  border: none;
  background: transparent;
  min-width: 32px;
  color: inherit;
  cursor: pointer;
}
.jse-header.svelte-1y24war button:where(.svelte-1y24war):hover {
  background: rgba(255, 255, 255, 0.1);
}`);
var hP = K('<button type="button" class="jse-fullscreen svelte-1y24war" title="Toggle full screen"><!></button>')
  , gP = K('<div class="jse-header svelte-1y24war"><div class="jse-title svelte-1y24war"> </div> <!> <!> <button type="button" class="jse-close svelte-1y24war"><!></button></div>');
function Mc(e, t) {
    it(t, !1);
    var n = g(t, "title", 9, "Modal")
      , o = g(t, "fullScreenButton", 9, !1)
      , a = g(t, "fullscreen", 13, !1)
      , i = g(t, "onClose", 9, void 0);
    Rt(!0);
    var s = gP()
      , l = z(s)
      , u = z(l)
      , d = B(l, 2);
    _r(d, t, "actions", {}, null);
    var c = B(d, 2)
      , v = f => {
        var m = hP()
          , x = z(m)
          , y = pe( () => a() ? Ik : Nk);
        fn(x, {
            get data() {
                return r(y)
            }
        }),
        me("click", m, () => a(!a())),
        L(f, m)
    }
    ;
    ie(c, f => {
        o() && f(v)
    }
    );
    var p = B(c, 2);
    fn(z(p), {
        get data() {
            return qc
        }
    }),
    Ee( () => lt(u, n())),
    me("click", p, () => {
        var f;
        return (f = i()) === null || f === void 0 ? void 0 : f()
    }
    ),
    L(e, s),
    st()
}
kt(`/* over all fonts, sizes, and colors */
/* "consolas" for Windows, "menlo" for Mac with fallback to "monaco", 'Ubuntu Mono' for Ubuntu */
/* (at Mac this font looks too large at 14px, but 13px is too small for the font on Windows) */
/* main, menu, modal */
/* jsoneditor modal */
/* tooltip in text mode */
/* panels: navigation bar, gutter, search box */
/* navigation-bar */
/* context menu */
/* contents: json key and values */
/* contents: selected or hovered */
/* contents: section of collapsed items in an array */
/* contents: highlighting of search matches */
/* contents: inline tags inside the JSON document */
/* contents: table */
/* controls in modals: inputs, buttons, and \`a\` */
/* messages */
/* svelte-select */
/* color picker */
.jse-config.svelte-1kpylsp {
  border: none;
  background: transparent;
  min-width: 32px;
  color: inherit;
  cursor: pointer;
}
.jse-config.svelte-1kpylsp:hover {
  background: rgba(255, 255, 255, 0.1);
}
.jse-config.hide.svelte-1kpylsp {
  display: none;
}`);
var mP = K('<button slot="actions" type="button" title="Select a query language"><!></button>')
  , rv = Hr("jsoneditor:AutoScrollHandler");
function Ig(e) {
    var t, n;
    function o(l) {
        return l < 20 ? 200 : l < 50 ? 400 : 1200
    }
    function a() {
        if (e) {
            var l = .05 * (t || 0);
            e.scrollTop += l
        }
    }
    function i(l) {
        n && l === t || (s(),
        rv("startAutoScroll", l),
        t = l,
        n = setInterval(a, 50))
    }
    function s() {
        n && (rv("stopAutoScroll"),
        clearInterval(n),
        n = void 0,
        t = void 0)
    }
    return rv("createAutoScrollHandler", e),
    {
        onDrag: function(l) {
            if (e) {
                var u = l.clientY
                  , {top: d, bottom: c} = e.getBoundingClientRect();
                u < d ? i(-o(d - u)) : u > c ? i(o(u - c)) : s()
            }
        },
        onDragEnd: function() {
            s()
        }
    }
}
var bP = (e, t, n, o) => (e /= o / 2) < 1 ? n / 2 * e * e + t : -n / 2 * (--e * (e - 2) - 1) + t
  , f1 = () => {
    var e, t, n, o, a, i, s, l, u, d, c, v, p;
    function f(y) {
        return y.getBoundingClientRect().top - (e.getBoundingClientRect ? e.getBoundingClientRect().top : 0) + n
    }
    function m(y) {
        e.scrollTo ? e.scrollTo(e.scrollLeft, y) : e.scrollTop = y
    }
    function x(y) {
        d || (d = y),
        m(i(c = y - d, n, l, u)),
        p = !0,
        c < u ? requestAnimationFrame(x) : function() {
            m(n + l),
            t && s && (t.setAttribute("tabindex", "-1"),
            t.focus()),
            typeof v == "function" && v(),
            d = 0,
            p = !1
        }()
    }
    return function(y) {
        var w = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        switch (u = 1e3,
        a = w.offset || 0,
        v = w.callback,
        i = w.easing || bP,
        s = w.a11y || !1,
        typeof w.container) {
        case "object":
            e = w.container;
            break;
        case "string":
            e = document.querySelector(w.container);
            break;
        default:
            e = window.document.documentElement
        }
        switch (n = e.scrollTop,
        typeof y) {
        case "number":
            t = void 0,
            s = !1,
            o = n + y;
            break;
        case "object":
            o = f(t = y);
            break;
        case "string":
            t = document.querySelector(y),
            o = f(t)
        }
        switch (l = o - n + a,
        typeof w.duration) {
        case "number":
            u = w.duration;
            break;
        case "function":
            u = w.duration(l)
        }
        p ? d = 0 : requestAnimationFrame(x)
    }
}
;
function Ts(e, t) {
    var n = Date.now()
      , o = e();
    return t(Date.now() - n),
    o
}
var Ss = Hr("validation")
  , xP = {
    createObjectDocumentState: () => ({
        type: "object",
        properties: {}
    }),
    createArrayDocumentState: () => ({
        type: "array",
        items: []
    }),
    createValueDocumentState: () => ({
        type: "value"
    })
};
function Ng(e, t, n, o) {
    return Rp(e, t, n, o, xP)
}
function p1(e, t, n, o) {
    if (Ss("validateJSON"),
    !t)
        return [];
    if (n !== o) {
        var a = n.stringify(e);
        return t(a !== void 0 ? o.parse(a) : void 0)
    }
    return t(e)
}
function jP(e, t, n, o) {
    if (Ss("validateText"),
    e.length > 104857600)
        return {
            validationErrors: [{
                path: [],
                message: "Validation turned off: the document is too large",
                severity: zo.info
            }]
        };
    if (e.length !== 0)
        try {
            var a = Ts( () => n.parse(e), u => Ss("validate: parsed json in ".concat(u, " ms")));
            if (!t)
                return;
            var i = n === o ? a : Ts( () => o.parse(e), u => Ss("validate: parsed json with the validationParser in ".concat(u, " ms")))
              , s = Ts( () => t(i), u => Ss("validate: validated json in ".concat(u, " ms")));
            return vn(s) ? void 0 : {
                validationErrors: s
            }
        } catch (u) {
            var l = Ts( () => function(d, c) {
                if (d.length > KR)
                    return !1;
                try {
                    return c.parse(ta(d)),
                    !0
                } catch {
                    return !1
                }
            }(e, n), d => Ss("validate: checked whether repairable in ".concat(d, " ms")));
            return {
                parseError: Vs(e, u.message || u.toString()),
                isRepairable: l
            }
        }
}
var qu = Hr("jsoneditor:FocusTracker");
function Up(e) {
    var t, {onMount: n, onDestroy: o, getWindow: a, hasFocus: i, onFocus: s, onBlur: l} = e, u = !1;
    function d() {
        var v = i();
        v && (clearTimeout(t),
        u || (qu("focus"),
        s(),
        u = v))
    }
    function c() {
        u && (clearTimeout(t),
        t = setTimeout( () => {
            i() || (qu("blur"),
            u = !1,
            l())
        }
        ))
    }
    n( () => {
        qu("mount FocusTracker");
        var v = a();
        v && (v.addEventListener("focusin", d, !0),
        v.addEventListener("focusout", c, !0))
    }
    ),
    o( () => {
        qu("destroy FocusTracker");
        var v = a();
        v && (v.removeEventListener("focusin", d, !0),
        v.removeEventListener("focusout", c, !0))
    }
    )
}
kt(`/* over all fonts, sizes, and colors */
/* "consolas" for Windows, "menlo" for Mac with fallback to "monaco", 'Ubuntu Mono' for Ubuntu */
/* (at Mac this font looks too large at 14px, but 13px is too small for the font on Windows) */
/* main, menu, modal */
/* jsoneditor modal */
/* tooltip in text mode */
/* panels: navigation bar, gutter, search box */
/* navigation-bar */
/* context menu */
/* contents: json key and values */
/* contents: selected or hovered */
/* contents: section of collapsed items in an array */
/* contents: highlighting of search matches */
/* contents: inline tags inside the JSON document */
/* contents: table */
/* controls in modals: inputs, buttons, and \`a\` */
/* messages */
/* svelte-select */
/* color picker */
.jse-message.svelte-czprfx {
  font-family: var(--jse-font-family-mono, consolas, menlo, monaco, "Ubuntu Mono", "source-code-pro", monospace);
  font-size: var(--jse-font-size-mono, 14px);
  padding: var(--jse-padding, 10px);
  display: flex;
  gap: var(--jse-padding, 10px);
  flex-wrap: wrap;
  align-items: stretch;
}
.jse-message.jse-success.svelte-czprfx {
  background: var(--message-success-background, #9ac45d);
  color: var(--jse-message-success-color, #fff);
}
.jse-message.svelte-czprfx .jse-text:where(.svelte-czprfx) {
  display: flex;
  flex: 1;
  min-width: 60%;
  align-items: center;
}
.jse-message.svelte-czprfx .jse-text.jse-clickable:where(.svelte-czprfx) {
  cursor: pointer;
}
.jse-message.svelte-czprfx .jse-text.jse-clickable:where(.svelte-czprfx):hover {
  background-color: rgba(255, 255, 255, 0.1);
}
.jse-message.jse-error.svelte-czprfx {
  background: var(--jse-message-error-background, var(--jse-error-color, #ee5341));
  color: var(--jse-message-error-color, #fff);
}
.jse-message.jse-warning.svelte-czprfx {
  background: var(--jse-message-warning-background, #ffde5c);
  color: var(--jse-message-warning-color, #4d4d4d);
}
.jse-message.jse-info.svelte-czprfx {
  background: var(--jse-message-info-background, #4f91ff);
  color: var(--jse-message-info-color, #fff);
}
.jse-message.svelte-czprfx .jse-actions:where(.svelte-czprfx) {
  display: flex;
  gap: var(--jse-padding, 10px);
}
.jse-message.svelte-czprfx .jse-actions:where(.svelte-czprfx) button.jse-action:where(.svelte-czprfx) {
  border: none;
  background: transparent;
  color: inherit;
  cursor: pointer;
  font-family: var(--jse-font-family, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif);
  font-size: var(--jse-font-size, 16px);
  padding: 5px;
  margin: 0;
  background: var(--jse-message-action-background, rgba(255, 255, 255, 0.2));
  color: inherit;
  padding: calc(0.5 * var(--jse-padding, 10px)) var(--jse-padding, 10px);
}
.jse-message.svelte-czprfx .jse-actions:where(.svelte-czprfx) button.jse-action:where(.svelte-czprfx):hover {
  background: var(--jse-message-action-background-highlight, rgba(255, 255, 255, 0.3));
}`);
var yP = K('<button type="button" class="jse-button jse-action jse-primary svelte-czprfx"><!> </button>')
  , wP = K('<div><div role="button" tabindex="-1"><div class="jse-text-centered"><!> </div></div> <div class="jse-actions svelte-czprfx"></div></div>');
function Mo(e, t) {
    it(t, !1);
    var n = g(t, "type", 9, "success")
      , o = g(t, "icon", 9, void 0)
      , a = g(t, "message", 9, void 0)
      , i = g(t, "actions", 25, () => [])
      , s = g(t, "onClick", 9, void 0)
      , l = g(t, "onClose", 9, void 0);
    l() && Vo(l()),
    Rt(!0);
    var u, d = wP(), c = z(d), v = z(c), p = z(v), f = x => {
        fn(x, {
            get data() {
                return o()
            }
        })
    }
    ;
    ie(p, x => {
        o() && x(f)
    }
    );
    var m = B(p);
    wr(B(c, 2), 5, i, Rr, (x, y) => {
        var w = yP()
          , S = z(w)
          , P = k => {
            fn(k, {
                get data() {
                    return r(y),
                    N( () => r(y).icon)
                }
            })
        }
        ;
        ie(S, k => {
            r(y),
            N( () => r(y).icon) && k(P)
        }
        );
        var R = B(S);
        Ee( () => {
            var k;
            zn(w, "title", (r(y),
            N( () => r(y).title))),
            w.disabled = (r(y),
            N( () => r(y).disabled)),
            lt(R, " ".concat((r(y),
            (k = N( () => r(y).text)) !== null && k !== void 0 ? k : "")))
        }
        ),
        me("click", w, () => {
            r(y).onClick && r(y).onClick()
        }
        ),
        me("mousedown", w, () => {
            r(y).onMouseDown && r(y).onMouseDown()
        }
        ),
        L(x, w)
    }
    ),
    Ee(x => {
        var y, w;
        At(d, 1, "jse-message jse-".concat((y = n()) !== null && y !== void 0 ? y : ""), "svelte-czprfx"),
        u = At(c, 1, "jse-text svelte-czprfx", null, u, x),
        lt(m, " ".concat((w = a()) !== null && w !== void 0 ? w : ""))
    }
    , [ () => ({
        "jse-clickable": !!s()
    })], pe),
    me("click", c, function() {
        s() && s()()
    }),
    L(e, d),
    st()
}
kt(`/* over all fonts, sizes, and colors */
/* "consolas" for Windows, "menlo" for Mac with fallback to "monaco", 'Ubuntu Mono' for Ubuntu */
/* (at Mac this font looks too large at 14px, but 13px is too small for the font on Windows) */
/* main, menu, modal */
/* jsoneditor modal */
/* tooltip in text mode */
/* panels: navigation bar, gutter, search box */
/* navigation-bar */
/* context menu */
/* contents: json key and values */
/* contents: selected or hovered */
/* contents: section of collapsed items in an array */
/* contents: highlighting of search matches */
/* contents: inline tags inside the JSON document */
/* contents: table */
/* controls in modals: inputs, buttons, and \`a\` */
/* messages */
/* svelte-select */
/* color picker */
.jse-validation-errors-overview.svelte-1uindol {
  font-family: var(--jse-font-family-mono, consolas, menlo, monaco, "Ubuntu Mono", "source-code-pro", monospace);
  font-size: var(--jse-font-size-mono, 14px);
  overflow: auto;
  max-height: 25%;
}
.jse-validation-errors-overview.svelte-1uindol table:where(.svelte-1uindol) {
  border-collapse: collapse;
  width: 100%;
}
.jse-validation-errors-overview.svelte-1uindol table:where(.svelte-1uindol) tr:where(.svelte-1uindol) {
  cursor: pointer;
}
.jse-validation-errors-overview.svelte-1uindol table:where(.svelte-1uindol) tr.jse-validation-error:where(.svelte-1uindol) {
  background: var(--jse-message-error-background, var(--jse-error-color, #ee5341));
  color: var(--jse-message-error-color, #fff);
}
.jse-validation-errors-overview.svelte-1uindol table:where(.svelte-1uindol) tr.jse-validation-warning:where(.svelte-1uindol) {
  background: var(--jse-message-warning-background, #ffde5c);
  color: var(--jse-message-warning-color, #4d4d4d);
}
.jse-validation-errors-overview.svelte-1uindol table:where(.svelte-1uindol) tr.jse-validation-warning:where(.svelte-1uindol):hover {
  filter: brightness(105%);
}
.jse-validation-errors-overview.svelte-1uindol table:where(.svelte-1uindol) tr.jse-validation-info:where(.svelte-1uindol) {
  background: var(--jse-message-info-background, #4f91ff);
  color: var(--jse-message-info-color, #fff);
}
.jse-validation-errors-overview.svelte-1uindol table:where(.svelte-1uindol) tr:where(.svelte-1uindol):hover {
  filter: brightness(110%);
}
.jse-validation-errors-overview.svelte-1uindol table:where(.svelte-1uindol) tr:where(.svelte-1uindol) td:where(.svelte-1uindol) {
  padding: 4px var(--jse-padding, 10px);
  vertical-align: middle;
}
.jse-validation-errors-overview.svelte-1uindol table:where(.svelte-1uindol) tr:where(.svelte-1uindol) td.jse-validation-error-icon:where(.svelte-1uindol) {
  width: 36px;
  box-sizing: border-box;
}
.jse-validation-errors-overview.svelte-1uindol table:where(.svelte-1uindol) tr:where(.svelte-1uindol) td.jse-validation-error-action:where(.svelte-1uindol) {
  width: 36px;
  box-sizing: border-box;
  padding: 0;
}
.jse-validation-errors-overview.svelte-1uindol table:where(.svelte-1uindol) tr:where(.svelte-1uindol) td.jse-validation-error-action:where(.svelte-1uindol) button.jse-validation-errors-collapse:where(.svelte-1uindol) {
  border: none;
  background: transparent;
  color: inherit;
  cursor: pointer;
  font-family: var(--jse-font-family, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif);
  font-size: var(--jse-font-size, 16px);
  padding: 5px;
  margin: 0;
  width: 36px;
  height: 26px;
  cursor: pointer;
}
.jse-validation-errors-overview.svelte-1uindol table:where(.svelte-1uindol) tr:where(.svelte-1uindol) td.jse-validation-error-action:where(.svelte-1uindol) button.jse-validation-errors-collapse:where(.svelte-1uindol):hover {
  background-color: rgba(255, 255, 255, 0.2);
}
.jse-validation-errors-overview.svelte-1uindol table:where(.svelte-1uindol) tr:where(.svelte-1uindol) td:where(.svelte-1uindol) div.jse-validation-errors-expand:where(.svelte-1uindol) {
  display: inline-block;
  position: relative;
  top: 3px;
}`);
var kP = K('<button type="button" class="jse-validation-errors-collapse svelte-1uindol" title="Collapse validation errors"><!></button>')
  , _P = K('<tr tabindex="0"><td class="jse-validation-error-icon svelte-1uindol"><!></td><td class="jse-validation-error-path svelte-1uindol"> </td><td class="jse-validation-error-message svelte-1uindol"> </td><td class="jse-validation-error-action svelte-1uindol"><!></td></tr>')
  , SP = K('<tr class="jse-validation-error svelte-1uindol"><td class="svelte-1uindol"></td><td class="svelte-1uindol"></td><td class="svelte-1uindol"> </td><td class="svelte-1uindol"></td></tr>')
  , CP = K('<table class="jse-validation-errors-overview-expanded svelte-1uindol"><tbody><!><!></tbody></table>')
  , OP = K('<table class="jse-validation-errors-overview-collapsed svelte-1uindol"><tbody><tr><td class="jse-validation-error-icon svelte-1uindol"><!></td><td class="jse-validation-error-count svelte-1uindol"> <div class="jse-validation-errors-expand svelte-1uindol"><!></div></td></tr></tbody></table>')
  , EP = K('<div class="jse-validation-errors-overview svelte-1uindol"><!></div>');
function Dp(e, t) {
    it(t, !1);
    var n = T(void 0, !0)
      , o = g(t, "validationErrors", 9)
      , a = g(t, "selectError", 9)
      , i = T(!0, !0);
    function s() {
        h(i, !1)
    }
    function l() {
        h(i, !0)
    }
    V( () => b(o()), () => {
        h(n, o().length)
    }
    ),
    An(),
    Rt(!0);
    var u = jr()
      , d = ht(u)
      , c = v => {
        var p = EP()
          , f = z(p)
          , m = y => {
            var w = CP()
              , S = z(w)
              , P = z(S);
            wr(P, 1, () => (b(mc),
            b(o()),
            b(Tu),
            N( () => mc(o(), Tu))), Rr, (I, H, Y) => {
                var M = _P()
                  , Z = z(M);
                fn(z(Z), {
                    get data() {
                        return Yi
                    }
                });
                var ae = B(Z)
                  , ee = z(ae)
                  , se = B(ae)
                  , _e = z(se)
                  , fe = z(B(se))
                  , Oe = De => {
                    var Ne = kP();
                    fn(z(Ne), {
                        get data() {
                            return Hk
                        }
                    }),
                    me("click", Ne, Ta(s)),
                    L(De, Ne)
                }
                ;
                ie(fe, De => {
                    b(o()),
                    N( () => Y === 0 && o().length > 1) && De(Oe)
                }
                ),
                Ee(De => {
                    var Ne;
                    At(M, 1, "jse-validation-".concat((r(H),
                    (Ne = N( () => r(H).severity)) !== null && Ne !== void 0 ? Ne : "")), "svelte-1uindol"),
                    lt(ee, De),
                    lt(_e, (r(H),
                    N( () => r(H).message)))
                }
                , [ () => (b(xo),
                r(H),
                N( () => xo(r(H).path)))], pe),
                me("click", M, () => {
                    setTimeout( () => a()(r(H)))
                }
                ),
                L(I, M)
            }
            );
            var R = B(P)
              , k = I => {
                var H = SP()
                  , Y = B(z(H), 2)
                  , M = z(Y);
                Ee( () => lt(M, "(and ".concat(r(n) - Tu, " more errors)"))),
                L(I, H)
            }
            ;
            ie(R, I => {
                r(n) > Tu && I(k)
            }
            ),
            L(y, w)
        }
          , x = y => {
            var w = OP()
              , S = z(w)
              , P = z(S)
              , R = z(P);
            fn(z(R), {
                get data() {
                    return Yi
                }
            });
            var k = z(B(R));
            fn(z(B(k)), {
                get data() {
                    return _m
                }
            }),
            Ee(I => {
                var H;
                At(P, 1, "jse-validation-".concat(I ?? ""), "svelte-1uindol"),
                lt(k, "".concat((H = r(n)) !== null && H !== void 0 ? H : "", " validation errors "))
            }
            , [ () => (b(o()),
            N( () => {
                return I = o(),
                [zo.error, zo.warning, zo.info].find(H => I.some(Y => Y.severity === H));
                var I
            }
            ))], pe),
            me("click", P, l),
            L(y, w)
        }
        ;
        ie(f, y => {
            r(i) || r(n) === 1 ? y(m) : y(x, !1)
        }
        ),
        L(v, p)
    }
    ;
    ie(d, v => {
        b(vn),
        b(o()),
        N( () => !vn(o())) && v(c)
    }
    ),
    L(e, u),
    st()
}
function Pc(e, t) {
    if (e)
        return e.addEventListener("keydown", n),
        {
            destroy() {
                e.removeEventListener("keydown", n)
            }
        };
    function n(o) {
        o.key === "Escape" && (o.preventDefault(),
        o.stopPropagation(),
        t())
    }
}
kt(`/* over all fonts, sizes, and colors */
/* "consolas" for Windows, "menlo" for Mac with fallback to "monaco", 'Ubuntu Mono' for Ubuntu */
/* (at Mac this font looks too large at 14px, but 13px is too small for the font on Windows) */
/* main, menu, modal */
/* jsoneditor modal */
/* tooltip in text mode */
/* panels: navigation bar, gutter, search box */
/* navigation-bar */
/* context menu */
/* contents: json key and values */
/* contents: selected or hovered */
/* contents: section of collapsed items in an array */
/* contents: highlighting of search matches */
/* contents: inline tags inside the JSON document */
/* contents: table */
/* controls in modals: inputs, buttons, and \`a\` */
/* messages */
/* svelte-select */
/* color picker */
dialog.jse-modal.svelte-1s9c2ql {
  border-radius: 3px;
  font-size: var(--jse-padding, 10px);
  border: none;
  padding: 0;
  display: flex;
  min-width: 0;
  margin: auto;
  overflow: visible;
  transition: width 0.1s ease-in-out, height 0.1s ease-in-out;
}
dialog.jse-modal.jse-sort-modal.svelte-1s9c2ql {
  width: 400px;
}
dialog.jse-modal.jse-repair-modal.svelte-1s9c2ql {
  width: 600px;
  height: 500px;
}
dialog.jse-modal.jse-jsoneditor-modal.svelte-1s9c2ql {
  width: 800px;
  height: 600px;
}
dialog.jse-modal.jse-transform-modal.svelte-1s9c2ql {
  width: 1200px;
  height: 800px;
}
dialog.jse-modal.jse-fullscreen.svelte-1s9c2ql {
  width: 100%;
  height: 100%;
}
dialog.jse-modal.svelte-1s9c2ql::backdrop {
  background: var(--jse-overlay-background, rgba(0, 0, 0, 0.3));
}
dialog.jse-modal[open].svelte-1s9c2ql {
  animation: svelte-1s9c2ql-zoom 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
}
dialog.jse-modal[open].svelte-1s9c2ql::backdrop {
  animation: svelte-1s9c2ql-fade 0.2s ease-out;
}
dialog.jse-modal.svelte-1s9c2ql .jse-modal-inner:where(.svelte-1s9c2ql) {
  flex: 1;
  display: flex;
  flex-direction: column;
  min-width: 0;
  min-height: 0;
  padding: 0;
  font-family: var(--jse-font-family, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif);
  font-size: var(--jse-font-size, 16px);
  line-height: normal;
  background: var(--jse-modal-background, #f5f5f5);
  color: var(--jse-text-color, #4d4d4d);
}
@keyframes svelte-1s9c2ql-zoom {
  from {
    transform: scale(0.95);
  }
  to {
    transform: scale(1);
  }
}
@keyframes svelte-1s9c2ql-fade {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
dialog.jse-modal.svelte-1s9c2ql .svelte-select {
  --border: var(--jse-svelte-select-border, 1px solid #d8dbdf);
  --item-is-active-bg: var(--jse-item-is-active-bg, #3883fa);
  --border-radius: var(--jse-svelte-select-border-radius, 3px);
  --background: var(--jse-svelte-select-background, #fff);
  --padding: var(--jse-svelte-select-padding, 0 10px);
  --multi-select-padding: var(--jse-svelte-select-multi-select-padding, 0 10px);
  --font-size: var(--jse-svelte-select-font-size, var(--jse-font-size, 16px));
  --height: 36px;
  --multi-item-height: 28px;
  --multi-item-margin: 2px;
  --multi-item-padding: 2px 8px;
  --multi-item-border-radius: 6px;
  --indicator-top: 8px;
}`);
var AP = K('<dialog><div class="jse-modal-inner svelte-1s9c2ql"><!></div></dialog>');
function ru(e, t) {
    it(t, !1);
    var n = g(t, "className", 8, void 0)
      , o = g(t, "fullscreen", 8, !1)
      , a = g(t, "onClose", 8)
      , i = T();
    function s() {
        a()()
    }
    ao( () => r(i).showModal()),
    Vo( () => r(i).close()),
    Rt();
    var l, u = AP(), d = z(u);
    _r(z(d), t, "default", {}, null),
    nr(u, c => h(i, c), () => r(i)),
    Gr( () => me("close", u, s)),
    Gr( () => {
        return me("pointerdown", u, (c = s,
        function() {
            for (var v = arguments.length, p = new Array(v), f = 0; f < v; f++)
                p[f] = arguments[f];
            p[0].target === this && c?.apply(this, p)
        }
        ));
        var c
    }
    ),
    Gr( () => me("cancel", u, ri(function(c) {
        Tl.call(this, t, c)
    }))),
    lo(u, (c, v) => Pc?.(c, v), () => s),
    Ee( (c, v) => l = At(u, 1, c, "svelte-1s9c2ql", l, v), [ () => _i((b(da),
    b(n()),
    N( () => da("jse-modal", n())))), () => ({
        "jse-fullscreen": o()
    })], pe),
    L(e, u),
    st()
}
kt(`/* over all fonts, sizes, and colors */
/* "consolas" for Windows, "menlo" for Mac with fallback to "monaco", 'Ubuntu Mono' for Ubuntu */
/* (at Mac this font looks too large at 14px, but 13px is too small for the font on Windows) */
/* main, menu, modal */
/* jsoneditor modal */
/* tooltip in text mode */
/* panels: navigation bar, gutter, search box */
/* navigation-bar */
/* context menu */
/* contents: json key and values */
/* contents: selected or hovered */
/* contents: section of collapsed items in an array */
/* contents: highlighting of search matches */
/* contents: inline tags inside the JSON document */
/* contents: table */
/* controls in modals: inputs, buttons, and \`a\` */
/* messages */
/* svelte-select */
/* color picker */
.jse-modal-contents.svelte-189qksl {
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
  overflow: auto;
  min-width: 0;
  min-height: 0;
}
.jse-modal-contents.svelte-189qksl .jse-actions:where(.svelte-189qksl) {
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  padding-top: var(--jse-padding, 10px);
}
.jse-modal-contents.svelte-189qksl .jse-actions:where(.svelte-189qksl) button.jse-primary:where(.svelte-189qksl) {
  border: none;
  background: transparent;
  color: inherit;
  cursor: pointer;
  font-family: var(--jse-font-family, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif);
  font-size: var(--jse-font-size, 16px);
  padding: 5px;
  margin: 0;
  background: var(--jse-button-primary-background, var(--jse-theme-color, #3883fa));
  color: var(--jse-button-primary-color, #fff);
  padding: var(--jse-padding, 10px) calc(2 * var(--jse-padding, 10px));
  border-radius: 3px;
}
.jse-modal-contents.svelte-189qksl .jse-actions:where(.svelte-189qksl) button.jse-primary:where(.svelte-189qksl):hover {
  background: var(--jse-button-primary-background-highlight, var(--jse-theme-color-highlight, #5f9dff));
}
.jse-modal-contents.svelte-189qksl .jse-actions:where(.svelte-189qksl) button.jse-primary:where(.svelte-189qksl):disabled {
  background: var(--jse-button-primary-background-disabled, #9d9d9d);
}

.jse-shortcuts.svelte-189qksl {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  margin: calc(2 * var(--jse-padding, 10px)) 0;
}
.jse-shortcuts.svelte-189qksl .jse-shortcut:where(.svelte-189qksl) .jse-key:where(.svelte-189qksl) {
  font-size: 200%;
  color: var(--jse-theme-color, #3883fa);
}`);
var RP = K('<!> <div class="jse-modal-contents svelte-189qksl"><div>Clipboard permission is disabled by your browser. You can use:</div> <div class="jse-shortcuts svelte-189qksl"><div class="jse-shortcut svelte-189qksl"><div class="jse-key svelte-189qksl"> </div> for copy</div> <div class="jse-shortcut svelte-189qksl"><div class="jse-key svelte-189qksl"> </div> for cut</div> <div class="jse-shortcut svelte-189qksl"><div class="jse-key svelte-189qksl"> </div> for paste</div></div> <div class="jse-actions svelte-189qksl"><button type="button" class="jse-primary svelte-189qksl">Close</button></div></div>', 1);
function h1(e, t) {
    it(t, !1);
    var n = g(t, "onClose", 9)
      , o = wp() ? "⌘" : "Ctrl";
    Rt(!0),
    ru(e, {
        get onClose() {
            return n()
        },
        className: "jse-copy-paste",
        children: (a, i) => {
            var s = RP()
              , l = ht(s);
            Mc(l, {
                title: "Copying and pasting",
                get onClose() {
                    return n()
                }
            });
            var u = B(l, 2)
              , d = B(z(u), 2)
              , c = z(d)
              , v = z(c)
              , p = z(v)
              , f = B(c, 2)
              , m = z(f)
              , x = z(m)
              , y = z(B(f, 2))
              , w = z(y)
              , S = z(B(d, 2));
            Ee( () => {
                lt(p, "".concat(o, "+C")),
                lt(x, "".concat(o, "+X")),
                lt(w, "".concat(o, "+V"))
            }
            ),
            me("click", S, function() {
                for (var P, R = arguments.length, k = new Array(R), I = 0; I < R; I++)
                    k[I] = arguments[I];
                (P = n()) === null || P === void 0 || P.apply(this, k)
            }),
            L(a, s)
        }
        ,
        $$slots: {
            default: !0
        }
    }),
    st()
}
kt(`/* over all fonts, sizes, and colors */
/* "consolas" for Windows, "menlo" for Mac with fallback to "monaco", 'Ubuntu Mono' for Ubuntu */
/* (at Mac this font looks too large at 14px, but 13px is too small for the font on Windows) */
/* main, menu, modal */
/* jsoneditor modal */
/* tooltip in text mode */
/* panels: navigation bar, gutter, search box */
/* navigation-bar */
/* context menu */
/* contents: json key and values */
/* contents: selected or hovered */
/* contents: section of collapsed items in an array */
/* contents: highlighting of search matches */
/* contents: inline tags inside the JSON document */
/* contents: table */
/* controls in modals: inputs, buttons, and \`a\` */
/* messages */
/* svelte-select */
/* color picker */
.jse-menu.svelte-pf7s2l {
  background: var(--jse-theme-color, #3883fa);
  font-family: var(--jse-font-family, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif);
  font-size: var(--jse-font-size-main-menu, 14px);
  color: var(--jse-menu-color, var(--jse-text-color-inverse, #fff));
  display: flex;
  flex-wrap: wrap;
  align-items: stretch;
  position: relative;
}
.jse-menu.svelte-pf7s2l .jse-button:where(.svelte-pf7s2l) {
  font-family: inherit;
  font-size: inherit;
  line-height: 1.5em;
  border: none;
  background: transparent;
  color: inherit;
  cursor: pointer;
  width: var(--jse-menu-button-size, 32px);
  height: var(--jse-menu-button-size, 32px);
  padding: calc(0.5 * var(--jse-padding, 10px));
  margin: 0;
  border-radius: 0;
  display: inline-flex;
  align-items: center;
  text-align: center;
  justify-content: center;
}
.jse-menu.svelte-pf7s2l .jse-button:where(.svelte-pf7s2l):hover, .jse-menu.svelte-pf7s2l .jse-button:where(.svelte-pf7s2l):focus {
  background: var(--jse-theme-color-highlight, #5f9dff);
}
.jse-menu.svelte-pf7s2l .jse-button:where(.svelte-pf7s2l):disabled {
  color: var(--jse-menu-color, var(--jse-text-color-inverse, #fff));
  opacity: 0.5;
  background: transparent;
}
.jse-menu.svelte-pf7s2l .jse-button.jse-group-button:where(.svelte-pf7s2l) {
  width: auto;
  height: calc(var(--jse-menu-button-size, 32px) - var(--jse-padding, 10px));
  margin: calc(0.5 * var(--jse-padding, 10px)) 0;
  padding: 0 calc(0.5 * var(--jse-padding, 10px)) 1px;
  border: 1px solid var(--jse-menu-color, var(--jse-text-color-inverse, #fff));
}
.jse-menu.svelte-pf7s2l .jse-button.jse-group-button:where(.svelte-pf7s2l):not(.jse-last) {
  border-right: none;
}
.jse-menu.svelte-pf7s2l .jse-button.jse-group-button.jse-first:where(.svelte-pf7s2l) {
  margin-left: calc(0.5 * var(--jse-padding, 10px));
}
.jse-menu.svelte-pf7s2l .jse-button.jse-group-button.jse-last:where(.svelte-pf7s2l) {
  margin-right: calc(0.5 * var(--jse-padding, 10px));
}
.jse-menu.svelte-pf7s2l .jse-button.jse-group-button:where(.svelte-pf7s2l):hover, .jse-menu.svelte-pf7s2l .jse-button.jse-group-button:where(.svelte-pf7s2l):focus {
  background: var(--jse-theme-color-highlight, #5f9dff);
}
.jse-menu.svelte-pf7s2l .jse-button.jse-group-button.jse-selected:where(.svelte-pf7s2l) {
  background: var(--jse-menu-color, var(--jse-text-color-inverse, #fff));
  color: var(--jse-theme-color, #3883fa);
}
.jse-menu.svelte-pf7s2l .jse-space:where(.svelte-pf7s2l) {
  flex: 1;
}
.jse-menu.svelte-pf7s2l .jse-separator:where(.svelte-pf7s2l) {
  background: var(--jse-menu-color, var(--jse-text-color-inverse, #fff));
  opacity: 0.3;
  width: 1px;
  margin: 3px;
}`);
var MP = K('<div class="jse-separator svelte-pf7s2l"></div>')
  , PP = K('<div class="jse-space svelte-pf7s2l"></div>')
  , zP = K('<button type="button"><!> <!></button>')
  , TP = K('<div class="jse-menu svelte-pf7s2l"><!> <!> <!></div>');
function kd(e, t) {
    it(t, !1);
    var n = g(t, "items", 25, () => []);
    Rt(!0);
    var o = TP()
      , a = z(o);
    _r(a, t, "left", {}, null);
    var i = B(a, 2);
    wr(i, 1, n, Rr, (s, l) => {
        var u = jr()
          , d = ht(u)
          , c = p => {
            L(p, MP())
        }
          , v = (p, f) => {
            var m = y => {
                L(y, PP())
            }
              , x = (y, w) => {
                var S = R => {
                    var k = zP()
                      , I = z(k)
                      , H = Z => {
                        fn(Z, {
                            get data() {
                                return r(l),
                                N( () => r(l).icon)
                            }
                        })
                    }
                    ;
                    ie(I, Z => {
                        r(l),
                        N( () => r(l).icon) && Z(H)
                    }
                    );
                    var Y = B(I, 2)
                      , M = Z => {
                        var ae = Jr();
                        Ee( () => lt(ae, (r(l),
                        N( () => r(l).text)))),
                        L(Z, ae)
                    }
                    ;
                    ie(Y, Z => {
                        r(l),
                        N( () => r(l).text) && Z(M)
                    }
                    ),
                    Ee( () => {
                        var Z;
                        At(k, 1, "jse-button ".concat((r(l),
                        (Z = N( () => r(l).className)) !== null && Z !== void 0 ? Z : "")), "svelte-pf7s2l"),
                        zn(k, "title", (r(l),
                        N( () => r(l).title))),
                        k.disabled = (r(l),
                        N( () => r(l).disabled || !1))
                    }
                    ),
                    me("click", k, function() {
                        for (var Z, ae = arguments.length, ee = new Array(ae), se = 0; se < ae; se++)
                            ee[se] = arguments[se];
                        (Z = r(l).onClick) === null || Z === void 0 || Z.apply(this, ee)
                    }),
                    L(R, k)
                }
                  , P = R => {
                    var k = Jr();
                    Ee(I => lt(k, I), [ () => (r(l),
                    N( () => function(I) {
                        return console.error("Unknown type of menu item", I),
                        "???"
                    }(r(l))))], pe),
                    L(R, k)
                }
                ;
                ie(y, R => {
                    b(ma),
                    r(l),
                    N( () => ma(r(l))) ? R(S) : R(P, !1)
                }
                , w)
            }
            ;
            ie(p, y => {
                b(Uv),
                r(l),
                N( () => Uv(r(l))) ? y(m) : y(x, !1)
            }
            , f)
        }
        ;
        ie(d, p => {
            b(ai),
            r(l),
            N( () => ai(r(l))) ? p(c) : p(v, !1)
        }
        ),
        L(s, u)
    }
    ),
    _r(B(i, 2), t, "right", {}, null),
    L(e, o),
    st()
}
kt(`/* over all fonts, sizes, and colors */
/* "consolas" for Windows, "menlo" for Mac with fallback to "monaco", 'Ubuntu Mono' for Ubuntu */
/* (at Mac this font looks too large at 14px, but 13px is too small for the font on Windows) */
/* main, menu, modal */
/* jsoneditor modal */
/* tooltip in text mode */
/* panels: navigation bar, gutter, search box */
/* navigation-bar */
/* context menu */
/* contents: json key and values */
/* contents: selected or hovered */
/* contents: section of collapsed items in an array */
/* contents: highlighting of search matches */
/* contents: inline tags inside the JSON document */
/* contents: table */
/* controls in modals: inputs, buttons, and \`a\` */
/* messages */
/* svelte-select */
/* color picker */
.jse-json-repair-component.svelte-3golau {
  flex: 1;
  display: flex;
  flex-direction: column;
  background: var(--jse-background-color, #fff);
  color: var(--jse-text-color, #4d4d4d);
}
.jse-json-repair-component.svelte-3golau .jse-info:where(.svelte-3golau) {
  padding: calc(0.5 * var(--jse-padding, 10px));
  font-family: var(--jse-font-family, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif);
  font-size: var(--jse-font-size, 16px);
  vertical-align: center;
}
.jse-json-repair-component.svelte-3golau .jse-json-text:where(.svelte-3golau) {
  flex: 1;
  border: none;
  padding: 2px;
  font-family: var(--jse-font-family-mono, consolas, menlo, monaco, "Ubuntu Mono", "source-code-pro", monospace);
  font-size: var(--jse-font-size-mono, 14px);
  background: var(--jse-input-background, var(--jse-background-color, #fff));
  color: var(--jse-text-color, #4d4d4d);
  resize: none;
  outline: none;
}`);
var IP = K('<div slot="left" class="jse-info svelte-3golau">Repair invalid JSON, then click apply</div>')
  , NP = K('<div class="jse-json-repair-component svelte-3golau"><!> <!> <textarea class="jse-json-text svelte-3golau" autocomplete="off" autocapitalize="off" spellcheck="false"></textarea></div>');
function LP(e, t) {
    it(t, !1);
    var n = T(void 0, !0)
      , o = T(void 0, !0)
      , a = T(void 0, !0)
      , i = T(void 0, !0)
      , s = T(void 0, !0)
      , l = T(void 0, !0)
      , u = g(t, "text", 13, "")
      , d = g(t, "readOnly", 9, !1)
      , c = g(t, "onParse", 9)
      , v = g(t, "onRepair", 9)
      , p = g(t, "onChange", 9, void 0)
      , f = g(t, "onApply", 9)
      , m = g(t, "onCancel", 9)
      , x = Hr("jsoneditor:JSONRepair")
      , y = T(void 0, !0);
    function w() {
        if (r(y) && r(n)) {
            var ae = r(n).position !== void 0 ? r(n).position : 0;
            r(y).setSelectionRange(ae, ae),
            r(y).focus()
        }
    }
    function S() {
        f()(u())
    }
    function P() {
        try {
            u(v()(u())),
            p() && p()(u())
        } catch {}
    }
    var R = T(void 0, !0);
    V( () => b(u()), () => {
        h(n, function(ae) {
            try {
                return void c()(ae)
            } catch (ee) {
                return Vs(ae, ee.message)
            }
        }(u()))
    }
    ),
    V( () => b(u()), () => {
        h(o, function(ae) {
            try {
                return v()(ae),
                !0
            } catch {
                return !1
            }
        }(u()))
    }
    ),
    V( () => r(n), () => {
        x("error", r(n))
    }
    ),
    V( () => b(m()), () => {
        h(R, [{
            type: "space"
        }, {
            type: "button",
            icon: qc,
            title: "Cancel repair",
            className: "jse-cancel",
            onClick: m()
        }])
    }
    ),
    V( () => Gp, () => {
        h(a, {
            icon: Gp,
            text: "Show me",
            title: "Scroll to the error location",
            onClick: w
        })
    }
    ),
    V( () => bi, () => {
        h(i, {
            icon: bi,
            text: "Auto repair",
            title: "Automatically repair JSON",
            onClick: P
        })
    }
    ),
    V( () => (r(o),
    r(a),
    r(i)), () => {
        h(s, r(o) ? [r(a), r(i)] : [r(a)])
    }
    ),
    V( () => b(d()), () => {
        h(l, [{
            icon: kf,
            text: "Apply",
            title: "Apply fixed JSON",
            disabled: d(),
            onClick: S
        }])
    }
    ),
    An(),
    Rt(!0);
    var k = NP()
      , I = z(k);
    kd(I, {
        get items() {
            return r(R)
        },
        $$slots: {
            left: (ae, ee) => {
                L(ae, IP())
            }
        }
    });
    var H = B(I, 2)
      , Y = ae => {
        var ee = pe( () => (r(n),
        N( () => "Cannot parse JSON: ".concat(r(n).message))));
        Mo(ae, {
            type: "error",
            get icon() {
                return Yi
            },
            get message() {
                return r(ee)
            },
            get actions() {
                return r(s)
            }
        })
    }
      , M = ae => {
        Mo(ae, {
            type: "success",
            message: "JSON is valid now and can be parsed.",
            get actions() {
                return r(l)
            }
        })
    }
    ;
    ie(H, ae => {
        r(n) ? ae(Y) : ae(M, !1)
    }
    );
    var Z = B(H, 2);
    nr(Z, ae => h(y, ae), () => r(y)),
    Ee( () => {
        Z.readOnly = d(),
        Zi(Z, u())
    }
    ),
    me("input", Z, function(ae) {
        x("handleChange");
        var ee = ae.target.value;
        u() !== ee && (u(ee),
        p() && p()(u()))
    }),
    L(e, k),
    st()
}
function g1(e, t) {
    it(t, !1);
    var n = g(t, "text", 13)
      , o = g(t, "onParse", 9)
      , a = g(t, "onRepair", 9)
      , i = g(t, "onApply", 9)
      , s = g(t, "onClose", 9);
    function l(d) {
        i()(d),
        s()()
    }
    function u() {
        s()()
    }
    Rt(!0),
    ru(e, {
        get onClose() {
            return s()
        },
        className: "jse-repair-modal",
        children: (d, c) => {
            LP(d, {
                get onParse() {
                    return o()
                },
                get onRepair() {
                    return a()
                },
                onApply: l,
                onCancel: u,
                get text() {
                    return n()
                },
                set text(v) {
                    n(v)
                },
                $$legacy: !0
            })
        }
        ,
        $$slots: {
            default: !0
        }
    }),
    st()
}
kt(`/* over all fonts, sizes, and colors */
/* "consolas" for Windows, "menlo" for Mac with fallback to "monaco", 'Ubuntu Mono' for Ubuntu */
/* (at Mac this font looks too large at 14px, but 13px is too small for the font on Windows) */
/* main, menu, modal */
/* jsoneditor modal */
/* tooltip in text mode */
/* panels: navigation bar, gutter, search box */
/* navigation-bar */
/* context menu */
/* contents: json key and values */
/* contents: selected or hovered */
/* contents: section of collapsed items in an array */
/* contents: highlighting of search matches */
/* contents: inline tags inside the JSON document */
/* contents: table */
/* controls in modals: inputs, buttons, and \`a\` */
/* messages */
/* svelte-select */
/* color picker */
div.jse-collapsed-items.svelte-1h6hzoq {
  margin-left: calc(var(--level) * var(--jse-indent-size, calc(1em + 4px)));
  font-family: var(--jse-font-family, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif);
  font-size: var(--jse-font-size, 16px);
  color: var(--jse-collapsed-items-link-color, rgba(0, 0, 0, 0.38));
  padding: calc(0.5 * var(--jse-padding, 10px));
  border: 8px solid transparent;
  border-width: 8px 0;
  background-color: var(--jse-contents-background-color, transparent);
  background-image: linear-gradient(var(--jse-collapsed-items-background-color, #f5f5f5), var(--jse-collapsed-items-background-color, #f5f5f5)), linear-gradient(to bottom right, transparent 50.5%, var(--jse-collapsed-items-background-color, #f5f5f5) 50.5%), linear-gradient(to bottom left, transparent 50.5%, var(--jse-collapsed-items-background-color, #f5f5f5) 50.5%), linear-gradient(to top right, transparent 50.5%, var(--jse-collapsed-items-background-color, #f5f5f5) 50.5%), linear-gradient(to top left, transparent 50.5%, var(--jse-collapsed-items-background-color, #f5f5f5) 50.5%);
  background-repeat: repeat, repeat-x, repeat-x, repeat-x, repeat-x;
  background-position: 0 0, 8px 0, 8px 0, 8px 100%, 8px 100%;
  background-size: auto auto, 16px 16px, 16px 16px, 16px 16px, 16px 16px;
  background-clip: padding-box, border-box, border-box, border-box, border-box;
  background-origin: padding-box, border-box, border-box, border-box, border-box;
  display: flex;
}
div.jse-collapsed-items.jse-selected.svelte-1h6hzoq {
  background-color: var(--jse-selection-background-color, #d3d3d3);
  --jse-collapsed-items-background-color: var(--jse-collapsed-items-selected-background-color, #c2c2c2);
}
div.jse-collapsed-items.svelte-1h6hzoq div.jse-text:where(.svelte-1h6hzoq),
div.jse-collapsed-items.svelte-1h6hzoq button.jse-expand-items:where(.svelte-1h6hzoq) {
  margin: 0 calc(0.5 * var(--jse-padding, 10px));
}
div.jse-collapsed-items.svelte-1h6hzoq div.jse-text:where(.svelte-1h6hzoq) {
  display: inline;
}
div.jse-collapsed-items.svelte-1h6hzoq button.jse-expand-items:where(.svelte-1h6hzoq) {
  font-family: inherit;
  font-size: inherit;
  color: var(--jse-collapsed-items-link-color, rgba(0, 0, 0, 0.38));
  background: none;
  border: none;
  padding: 0;
  text-decoration: underline;
  cursor: pointer;
}
div.jse-collapsed-items.svelte-1h6hzoq button.jse-expand-items:where(.svelte-1h6hzoq):hover, div.jse-collapsed-items.svelte-1h6hzoq button.jse-expand-items:where(.svelte-1h6hzoq):focus {
  color: var(--jse-collapsed-items-link-color-highlight, #ee5341);
}`);
var UP = K('<button type="button" class="jse-expand-items svelte-1h6hzoq"> </button>')
  , DP = K('<div role="none"><div><div class="jse-text svelte-1h6hzoq"> </div> <!></div></div>');
function qP(e, t) {
    it(t, !1);
    var n = T(void 0, !0)
      , o = T(void 0, !0)
      , a = T(void 0, !0)
      , i = T(void 0, !0)
      , s = T(void 0, !0)
      , l = g(t, "visibleSections", 9)
      , u = g(t, "sectionIndex", 9)
      , d = g(t, "total", 9)
      , c = g(t, "path", 9)
      , v = g(t, "selection", 9)
      , p = g(t, "onExpandSection", 9)
      , f = g(t, "context", 9);
    V( () => (b(l()),
    b(u())), () => {
        h(n, l()[u()])
    }
    ),
    V( () => r(n), () => {
        h(o, r(n).end)
    }
    ),
    V( () => (b(l()),
    b(u()),
    b(d())), () => {
        h(a, l()[u() + 1] ? l()[u() + 1].start : d())
    }
    ),
    V( () => (b(f()),
    b(v()),
    b(c()),
    r(o)), () => {
        h(i, eu(f().getJson(), v(), c().concat(String(r(o)))))
    }
    ),
    V( () => (r(o),
    r(a)), () => {
        h(s, function(R, k) {
            var I = {
                start: R,
                end: Math.min(Lv(R), k)
            }
              , H = Math.max(jc((R + k) / 2), R)
              , Y = {
                start: H,
                end: Math.min(Lv(H), k)
            }
              , M = jc(k)
              , Z = M === k ? M - Yl : M
              , ae = {
                start: Math.max(Z, R),
                end: k
            }
              , ee = [I]
              , se = Y.start >= I.end && Y.end <= ae.start;
            return se && ee.push(Y),
            ae.start >= (se ? Y.end : I.end) && ee.push(ae),
            ee
        }(r(o), r(a)))
    }
    ),
    An(),
    Rt(!0);
    var m, x, y = DP(), w = z(y), S = z(w), P = z(S);
    wr(B(S, 2), 1, () => r(s), Rr, (R, k) => {
        var I = UP()
          , H = z(I);
        Ee( () => {
            var Y, M;
            return lt(H, "show ".concat((r(k),
            (Y = N( () => r(k).start)) !== null && Y !== void 0 ? Y : ""), "-").concat((r(k),
            (M = N( () => r(k).end)) !== null && M !== void 0 ? M : "")))
        }
        ),
        me("click", I, () => p()(c(), r(k))),
        L(R, I)
    }
    ),
    Ee( (R, k) => {
        var I, H;
        m = At(y, 1, "jse-collapsed-items svelte-1h6hzoq", null, m, R),
        x = ra(y, "", x, k),
        lt(P, "Items ".concat((I = r(o)) !== null && I !== void 0 ? I : "", "-").concat((H = r(a)) !== null && H !== void 0 ? H : ""))
    }
    , [ () => ({
        "jse-selected": r(i)
    }), () => ({
        "--level": (b(c()),
        N( () => c().length + 2))
    })], pe),
    me("mousemove", y, function(R) {
        R.stopPropagation()
    }),
    L(e, y),
    st()
}
kt(`/* over all fonts, sizes, and colors */
/* "consolas" for Windows, "menlo" for Mac with fallback to "monaco", 'Ubuntu Mono' for Ubuntu */
/* (at Mac this font looks too large at 14px, but 13px is too small for the font on Windows) */
/* main, menu, modal */
/* jsoneditor modal */
/* tooltip in text mode */
/* panels: navigation bar, gutter, search box */
/* navigation-bar */
/* context menu */
/* contents: json key and values */
/* contents: selected or hovered */
/* contents: section of collapsed items in an array */
/* contents: highlighting of search matches */
/* contents: inline tags inside the JSON document */
/* contents: table */
/* controls in modals: inputs, buttons, and \`a\` */
/* messages */
/* svelte-select */
/* color picker */
.jse-context-menu-pointer.svelte-137iwnw {
  position: absolute;
  top: calc(-0.5 * var(--jse-context-menu-pointer-size, calc(1em + 4px)));
  right: calc(-0.5 * var(--jse-context-menu-pointer-size, calc(1em + 4px)));
  width: var(--jse-context-menu-pointer-size, calc(1em + 4px));
  height: var(--jse-context-menu-pointer-size, calc(1em + 4px));
  padding: 0;
  margin: 0;
  cursor: pointer;
  background: transparent;
  border-radius: 2px;
  background: var(--jse-context-menu-pointer-hover-background, #b2b2b2);
  color: var(--jse-context-menu-pointer-color, var(--jse-context-menu-color, var(--jse-text-color-inverse, #fff)));
  border: none;
  box-shadow: var(--jse-controls-box-shadow, 0 2px 6px 0 rgba(0, 0, 0, 0.24));
}
.jse-context-menu-pointer.jse-root.svelte-137iwnw {
  top: 0;
  right: calc(-2px - var(--jse-context-menu-pointer-size, calc(1em + 4px)));
}
.jse-context-menu-pointer.jse-insert.svelte-137iwnw {
  right: -1px;
}
.jse-context-menu-pointer.svelte-137iwnw:hover {
  background: var(--jse-context-menu-pointer-background-highlight, var(--jse-context-menu-background-highlight, #7a7a7a));
}
.jse-context-menu-pointer.jse-selected.svelte-137iwnw {
  background: var(--jse-context-menu-pointer-background, var(--jse-context-menu-background, #656565));
}
.jse-context-menu-pointer.jse-selected.svelte-137iwnw:hover {
  background: var(--jse-context-menu-pointer-background-highlight, var(--jse-context-menu-background-highlight, #7a7a7a));
}`);
var $P = K('<button type="button"><!></button>');
function oi(e, t) {
    it(t, !1);
    var n = g(t, "root", 9, !1)
      , o = g(t, "insert", 9, !1)
      , a = g(t, "selected", 9)
      , i = g(t, "onContextMenu", 9);
    Rt(!0);
    var s, l = $P();
    fn(z(l), {
        get data() {
            return Va
        }
    }),
    Ee(u => {
        s = At(l, 1, "jse-context-menu-pointer svelte-137iwnw", null, s, u),
        zn(l, "title", _p)
    }
    , [ () => ({
        "jse-root": n(),
        "jse-insert": o(),
        "jse-selected": a()
    })], pe),
    me("click", l, function(u) {
        for (var d = u.target; d && d.nodeName !== "BUTTON"; )
            d = d.parentNode;
        d && i()({
            anchor: d,
            left: 0,
            top: 0,
            width: Ua,
            height: La,
            offsetTop: 2,
            offsetLeft: 0,
            showTip: !0
        })
    }),
    L(e, l),
    st()
}
kt(`/* over all fonts, sizes, and colors */
/* "consolas" for Windows, "menlo" for Mac with fallback to "monaco", 'Ubuntu Mono' for Ubuntu */
/* (at Mac this font looks too large at 14px, but 13px is too small for the font on Windows) */
/* main, menu, modal */
/* jsoneditor modal */
/* tooltip in text mode */
/* panels: navigation bar, gutter, search box */
/* navigation-bar */
/* context menu */
/* contents: json key and values */
/* contents: selected or hovered */
/* contents: section of collapsed items in an array */
/* contents: highlighting of search matches */
/* contents: inline tags inside the JSON document */
/* contents: table */
/* controls in modals: inputs, buttons, and \`a\` */
/* messages */
/* svelte-select */
/* color picker */
.jse-key.svelte-2iqnqn {
  display: inline-block;
  min-width: 2em;
  padding: 0 5px;
  box-sizing: border-box;
  outline: none;
  border-radius: 1px;
  vertical-align: top;
  color: var(--jse-key-color, #1a1a1a);
  word-break: normal;
  overflow-wrap: normal;
  white-space: pre-wrap;
}
.jse-key.jse-empty.svelte-2iqnqn {
  min-width: 3em;
  outline: 1px dotted var(--jse-tag-background, rgba(0, 0, 0, 0.2));
  -moz-outline-radius: 2px;
}
.jse-key.jse-empty.svelte-2iqnqn::after {
  pointer-events: none;
  color: var(--jse-tag-background, rgba(0, 0, 0, 0.2));
  content: "key";
}`);
var FP = K('<div role="none" data-type="selectable-key"><!></div>')
  , BP = K("<!> <!>", 1)
  , WP = K('<div role="button" tabindex="-1" class="jse-value" data-type="selectable-value"></div>');
function m1(e, t) {
    it(t, !0);
    var n = mo( () => jn(t.selection) && Fr(t.selection))
      , o = mo( () => t.context.onRenderValue({
        path: t.path,
        value: t.value,
        mode: t.context.mode,
        truncateTextSize: t.context.truncateTextSize,
        readOnly: t.context.readOnly,
        enforceString: t.enforceString,
        isEditing: r(n),
        parser: t.context.parser,
        normalization: t.context.normalization,
        selection: t.selection,
        searchResultItems: t.searchResultItems,
        onPatch: t.context.onPatch,
        onPasteJson: t.context.onPasteJson,
        onSelect: t.context.onSelect,
        onFind: t.context.onFind,
        findNextInside: t.context.findNextInside,
        focus: t.context.focus
    }))
      , a = jr();
    wr(ht(a), 17, () => r(o), Rr, (i, s) => {
        var l = jr()
          , u = ht(l)
          , d = v => {
            var p = WP()
              , f = mo( () => r(s).action);
            lo(p, (m, x) => {
                var y;
                return (y = r(f)) === null || y === void 0 ? void 0 : y(m, x)
            }
            , () => r(s).props),
            L(v, p)
        }
          , c = v => {
            var p = jr()
              , f = mo( () => r(s).component);
            xw(ht(p), () => r(f), (m, x) => {
                x(m, pi( () => r(s).props))
            }
            ),
            L(v, p)
        }
        ;
        ie(u, v => {
            eM(r(s)) ? v(d) : v(c, !1)
        }
        ),
        L(i, l)
    }
    ),
    L(e, a),
    st()
}
var HP = {
    selecting: !1,
    selectionAnchor: void 0,
    selectionAnchorType: void 0,
    selectionFocus: void 0,
    dragging: !1
};
function ov(e) {
    var {json: t, selection: n, deltaY: o, items: a} = e;
    if (!n)
        return {
            operations: void 0,
            updatedSelection: void 0,
            offset: 0
        };
    var i = o < 0 ? function(c) {
        for (var {json: v, items: p, selection: f, deltaY: m} = c, x = Da(v, f), y = p.findIndex(I => Wt(I.path, x)), w = () => {
            var I;
            return (I = p[S - 1]) === null || I === void 0 ? void 0 : I.height
        }
        , S = y, P = 0; w() !== void 0 && Math.abs(m) > P + w() / 2; )
            P += w(),
            S -= 1;
        var R = p[S].path
          , k = S - y;
        return S !== y && p[S] !== void 0 ? {
            beforePath: R,
            offset: k
        } : void 0
    }({
        json: t,
        selection: n,
        deltaY: o,
        items: a
    }) : function(c) {
        for (var v, {json: p, items: f, selection: m, deltaY: x} = c, y = gi(p, m), w = f.findIndex(Z => Wt(Z.path, y)), S = 0, P = w, R = () => {
            var Z;
            return (Z = f[P + 1]) === null || Z === void 0 ? void 0 : Z.height
        }
        ; R() !== void 0 && Math.abs(x) > S + R() / 2; )
            S += R(),
            P += 1;
        var k = rn(y)
          , I = Ke(p, k)
          , H = Array.isArray(I) ? P : P + 1
          , Y = (v = f[H]) === null || v === void 0 ? void 0 : v.path
          , M = P - w;
        return Y ? {
            beforePath: Y,
            offset: M
        } : {
            append: !0,
            offset: M
        }
    }({
        json: t,
        selection: n,
        deltaY: o,
        items: a
    });
    if (!i || i.offset === 0)
        return {
            operations: void 0,
            updatedSelection: void 0,
            offset: 0
        };
    var s = function(c, v, p) {
        if (!v)
            return [];
        var f = "beforePath"in p ? p.beforePath : void 0
          , m = "append"in p ? p.append : void 0
          , x = rn(Qe(v))
          , y = Ke(c, x);
        if (!(m || f && _a(f, x) && f.length > x.length))
            return [];
        var w = Da(c, v)
          , S = gi(c, v)
          , P = gt(w)
          , R = gt(S)
          , k = f ? f[x.length] : void 0;
        if (!$r(y)) {
            if (Lr(y)) {
                var I = Zr(P)
                  , H = Zr(R)
                  , Y = k !== void 0 ? Zr(k) : y.length;
                return gf(H - I + 1, Y < I ? se => ({
                    op: "move",
                    from: Tt(x.concat(String(I + se))),
                    path: Tt(x.concat(String(Y + se)))
                }) : () => ({
                    op: "move",
                    from: Tt(x.concat(String(I))),
                    path: Tt(x.concat(String(Y)))
                }))
            }
            throw new Error("Cannot create move operations: parent must be an Object or Array")
        }
        var M = Object.keys(y)
          , Z = M.indexOf(P)
          , ae = M.indexOf(R)
          , ee = m ? M.length : k !== void 0 ? M.indexOf(k) : -1;
        return Z !== -1 && ae !== -1 && ee !== -1 ? ee > Z ? [...M.slice(Z, ae + 1), ...M.slice(ee, M.length)].map(se => Ci(x, se)) : [...M.slice(ee, Z), ...M.slice(ae + 1, M.length)].map(se => Ci(x, se)) : []
    }(t, n, i)
      , l = rn(Da(t, n))
      , u = Ke(t, l);
    if (Array.isArray(u)) {
        var d = function(c) {
            var v, p, {items: f, json: m, selection: x, offset: y} = c, w = Da(m, x), S = gi(m, x), P = f.findIndex(H => Wt(H.path, w)), R = f.findIndex(H => Wt(H.path, S)), k = (v = f[P + y]) === null || v === void 0 ? void 0 : v.path, I = (p = f[R + y]) === null || p === void 0 ? void 0 : p.path;
            return io(k, I)
        }({
            items: a,
            json: t,
            selection: n,
            offset: i.offset
        });
        return {
            operations: s,
            updatedSelection: d,
            offset: i.offset
        }
    }
    return {
        operations: s,
        updatedSelection: void 0,
        offset: i.offset
    }
}
kt(`/* over all fonts, sizes, and colors */
/* "consolas" for Windows, "menlo" for Mac with fallback to "monaco", 'Ubuntu Mono' for Ubuntu */
/* (at Mac this font looks too large at 14px, but 13px is too small for the font on Windows) */
/* main, menu, modal */
/* jsoneditor modal */
/* tooltip in text mode */
/* panels: navigation bar, gutter, search box */
/* navigation-bar */
/* context menu */
/* contents: json key and values */
/* contents: selected or hovered */
/* contents: section of collapsed items in an array */
/* contents: highlighting of search matches */
/* contents: inline tags inside the JSON document */
/* contents: table */
/* controls in modals: inputs, buttons, and \`a\` */
/* messages */
/* svelte-select */
/* color picker */
button.jse-validation-error.svelte-1a8aobl {
  border: none;
  background: transparent;
  color: inherit;
  cursor: pointer;
  font-family: var(--jse-font-family, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif);
  font-size: var(--jse-font-size, 16px);
  padding: 5px;
  margin: 0;
  padding: 0;
  margin: 0;
  vertical-align: top;
  display: inline-flex;
  color: var(--jse-error-color, #ee5341);
}

button.jse-validation-info.svelte-1a8aobl {
  border: none;
  background: transparent;
  color: inherit;
  cursor: pointer;
  font-family: var(--jse-font-family, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif);
  font-size: var(--jse-font-size, 16px);
  padding: 5px;
  margin: 0;
  padding: 0;
  margin: 0;
  vertical-align: top;
  display: inline-flex;
  color: var(--jse-info-color, #4f91ff);
}

button.jse-validation-warning.svelte-1a8aobl {
  border: none;
  background: transparent;
  color: inherit;
  cursor: pointer;
  font-family: var(--jse-font-family, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif);
  font-size: var(--jse-font-size, 16px);
  padding: 5px;
  margin: 0;
  padding: 0;
  margin: 0;
  vertical-align: top;
  display: inline-flex;
  color: var(--jse-warning-color, #fdc539);
}`);
var VP = K('<button type="button"><!></button>');
function $s(e, t) {
    it(t, !1);
    var n = T()
      , o = Pi("absolute-popup")
      , a = g(t, "validationError", 8)
      , i = g(t, "onExpand", 8);
    V( () => b(a()), () => {
        h(n, ZR(a()) && a().isChildError ? "Contains invalid data" : a().message)
    }
    ),
    An(),
    Rt();
    var s = VP();
    fn(z(s), {
        get data() {
            return Yi
        }
    }),
    Gr( () => me("click", s, function() {
        for (var l, u = arguments.length, d = new Array(u), c = 0; c < u; c++)
            d[c] = arguments[c];
        (l = i()) === null || l === void 0 || l.apply(this, d)
    })),
    lo(s, (l, u) => Xs?.(l, u), () => ke({
        text: r(n)
    }, o)),
    Ee( () => {
        var l;
        return At(s, 1, "jse-validation-".concat((b(a()),
        (l = N( () => a().severity)) !== null && l !== void 0 ? l : "")), "svelte-1a8aobl")
    }
    ),
    L(e, s),
    st()
}
kt(`/* over all fonts, sizes, and colors */
/* "consolas" for Windows, "menlo" for Mac with fallback to "monaco", 'Ubuntu Mono' for Ubuntu */
/* (at Mac this font looks too large at 14px, but 13px is too small for the font on Windows) */
/* main, menu, modal */
/* jsoneditor modal */
/* tooltip in text mode */
/* panels: navigation bar, gutter, search box */
/* navigation-bar */
/* context menu */
/* contents: json key and values */
/* contents: selected or hovered */
/* contents: section of collapsed items in an array */
/* contents: highlighting of search matches */
/* contents: inline tags inside the JSON document */
/* contents: table */
/* controls in modals: inputs, buttons, and \`a\` */
/* messages */
/* svelte-select */
/* color picker */
.jse-expand.svelte-oawf7x {
  width: var(--jse-indent-size, calc(1em + 4px));
  padding: 0;
  margin: 0;
  border: none;
  cursor: pointer;
  background: transparent;
  color: var(--jse-delimiter-color, rgba(0, 0, 0, 0.38));
  font-size: var(--jse-font-size-mono, 14px);
  height: var(--jse-line-height, calc(1em + 4px));
}
.jse-expand.svelte-oawf7x:hover {
  opacity: 0.8;
}

.jse-meta.svelte-oawf7x,
.jse-separator.svelte-oawf7x,
.jse-index.svelte-oawf7x,
.jse-bracket.svelte-oawf7x {
  vertical-align: top;
  color: var(--jse-delimiter-color, rgba(0, 0, 0, 0.38));
}

.jse-index.svelte-oawf7x {
  padding: 0 calc(0.5 * var(--jse-padding, 10px));
}

.jse-bracket.svelte-oawf7x {
  padding: 0 2px;
}
.jse-bracket.jse-expanded.svelte-oawf7x {
  padding-right: var(--jse-padding, 10px);
}

.jse-identifier.svelte-oawf7x {
  vertical-align: top;
  position: relative;
}

.jse-json-node.svelte-oawf7x {
  position: relative;
  color: var(--jse-text-color, #4d4d4d);
}
.jse-json-node.jse-root.svelte-oawf7x {
  min-height: 100%;
  padding-bottom: 2px;
  box-sizing: border-box;
}
.jse-json-node.jse-root.svelte-oawf7x > .jse-contents-outer:where(.svelte-oawf7x) > .jse-contents:where(.svelte-oawf7x) {
  padding-left: 0;
}
.jse-json-node.svelte-oawf7x .jse-props:where(.svelte-oawf7x),
.jse-json-node.svelte-oawf7x .jse-items:where(.svelte-oawf7x) {
  position: relative;
}
.jse-json-node.svelte-oawf7x .jse-header-outer:where(.svelte-oawf7x),
.jse-json-node.svelte-oawf7x .jse-footer-outer:where(.svelte-oawf7x) {
  display: flex;
  margin-left: calc(var(--level) * var(--jse-indent-size, calc(1em + 4px)));
}
.jse-json-node.svelte-oawf7x .jse-header:where(.svelte-oawf7x) {
  position: relative;
}
.jse-json-node.svelte-oawf7x .jse-header:where(.svelte-oawf7x) .jse-meta:where(.svelte-oawf7x) > .jse-meta-inner:where(.svelte-oawf7x) {
  display: flex;
  justify-content: center;
}
.jse-json-node.svelte-oawf7x .jse-contents-outer:where(.svelte-oawf7x) {
  display: flex;
  margin-left: calc(var(--level) * var(--jse-indent-size, calc(1em + 4px)));
}
.jse-json-node.svelte-oawf7x .jse-header:where(.svelte-oawf7x),
.jse-json-node.svelte-oawf7x .jse-contents:where(.svelte-oawf7x) {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
}
.jse-json-node.svelte-oawf7x .jse-contents:where(.svelte-oawf7x) {
  padding-left: var(--jse-indent-size, calc(1em + 4px));
  cursor: var(--jse-contents-cursor, pointer);
}
.jse-json-node.svelte-oawf7x .jse-contents:where(.svelte-oawf7x) .jse-value-outer:where(.svelte-oawf7x) {
  display: inline-flex;
}
.jse-json-node.svelte-oawf7x .jse-footer:where(.svelte-oawf7x) {
  display: inline-flex;
  padding-left: calc(var(--jse-indent-size, calc(1em + 4px)) + 5px);
}
.jse-json-node.svelte-oawf7x .jse-header:where(.svelte-oawf7x),
.jse-json-node.svelte-oawf7x .jse-contents:where(.svelte-oawf7x),
.jse-json-node.svelte-oawf7x .jse-footer:where(.svelte-oawf7x) {
  background: var(--jse-contents-background-color, transparent);
}
.jse-json-node.svelte-oawf7x .jse-insert-selection-area:where(.svelte-oawf7x) {
  padding: 0 calc(0.5 * var(--jse-padding, 10px));
  flex: 1;
}
.jse-json-node.svelte-oawf7x .jse-insert-selection-area.jse-inside:where(.svelte-oawf7x) {
  display: inline-flex;
  align-items: center;
}
.jse-json-node.svelte-oawf7x .jse-insert-selection-area.jse-after:where(.svelte-oawf7x) {
  display: flex;
  align-items: flex-end;
}
.jse-json-node.svelte-oawf7x .jse-context-menu-pointer-anchor:where(.svelte-oawf7x) {
  position: relative;
}
.jse-json-node.svelte-oawf7x .jse-insert-area:where(.svelte-oawf7x) {
  display: flex;
  position: relative;
  z-index: 1;
  margin-left: calc(var(--level) * var(--jse-indent-size, calc(1em + 4px)));
  max-width: 250px;
  min-width: 100px;
  height: 0;
  margin-right: calc(0.5 * var(--jse-padding, 10px));
  outline: 1px solid;
}
.jse-json-node.svelte-oawf7x .jse-insert-area.jse-hovered:where(.svelte-oawf7x) {
  outline-color: var(--jse-context-menu-pointer-hover-background, #b2b2b2);
}
.jse-json-node.svelte-oawf7x .jse-key-outer:where(.svelte-oawf7x) {
  position: relative;
}
.jse-json-node.svelte-oawf7x .jse-key-outer:where(.svelte-oawf7x):hover,
.jse-json-node.svelte-oawf7x .jse-value-outer:where(.svelte-oawf7x):hover,
.jse-json-node.svelte-oawf7x .jse-meta:where(.svelte-oawf7x):hover,
.jse-json-node.svelte-oawf7x .jse-footer:where(.svelte-oawf7x):hover {
  background: var(--jse-hover-background-color, rgba(0, 0, 0, 0.06));
  cursor: var(--jse-contents-cursor, pointer);
}
.jse-json-node.jse-hovered.svelte-oawf7x:not(.jse-selected):not(.jse-selected-value) .jse-value-outer,
.jse-json-node.jse-hovered.svelte-oawf7x:not(.jse-selected):not(.jse-selected-value) .jse-meta,
.jse-json-node.jse-hovered.svelte-oawf7x:not(.jse-selected):not(.jse-selected-value) .jse-items .jse-header,
.jse-json-node.jse-hovered.svelte-oawf7x:not(.jse-selected):not(.jse-selected-value) .jse-items .jse-contents,
.jse-json-node.jse-hovered.svelte-oawf7x:not(.jse-selected):not(.jse-selected-value) .jse-props .jse-header,
.jse-json-node.jse-hovered.svelte-oawf7x:not(.jse-selected):not(.jse-selected-value) .jse-props .jse-contents,
.jse-json-node.jse-hovered.svelte-oawf7x:not(.jse-selected):not(.jse-selected-value) .jse-footer {
  background: var(--jse-hover-background-color, rgba(0, 0, 0, 0.06));
  cursor: var(--jse-contents-cursor, pointer);
}
.jse-json-node.jse-hovered.svelte-oawf7x:not(.jse-selected):not(.jse-selected-value) .jse-value-outer .jse-value-outer,
.jse-json-node.jse-hovered.svelte-oawf7x:not(.jse-selected):not(.jse-selected-value) .jse-value-outer .jse-meta,
.jse-json-node.jse-hovered.svelte-oawf7x:not(.jse-selected):not(.jse-selected-value) .jse-meta .jse-value-outer,
.jse-json-node.jse-hovered.svelte-oawf7x:not(.jse-selected):not(.jse-selected-value) .jse-meta .jse-meta,
.jse-json-node.jse-hovered.svelte-oawf7x:not(.jse-selected):not(.jse-selected-value) .jse-items .jse-header .jse-value-outer,
.jse-json-node.jse-hovered.svelte-oawf7x:not(.jse-selected):not(.jse-selected-value) .jse-items .jse-header .jse-meta,
.jse-json-node.jse-hovered.svelte-oawf7x:not(.jse-selected):not(.jse-selected-value) .jse-items .jse-contents .jse-value-outer,
.jse-json-node.jse-hovered.svelte-oawf7x:not(.jse-selected):not(.jse-selected-value) .jse-items .jse-contents .jse-meta,
.jse-json-node.jse-hovered.svelte-oawf7x:not(.jse-selected):not(.jse-selected-value) .jse-props .jse-header .jse-value-outer,
.jse-json-node.jse-hovered.svelte-oawf7x:not(.jse-selected):not(.jse-selected-value) .jse-props .jse-header .jse-meta,
.jse-json-node.jse-hovered.svelte-oawf7x:not(.jse-selected):not(.jse-selected-value) .jse-props .jse-contents .jse-value-outer,
.jse-json-node.jse-hovered.svelte-oawf7x:not(.jse-selected):not(.jse-selected-value) .jse-props .jse-contents .jse-meta,
.jse-json-node.jse-hovered.svelte-oawf7x:not(.jse-selected):not(.jse-selected-value) .jse-footer .jse-value-outer,
.jse-json-node.jse-hovered.svelte-oawf7x:not(.jse-selected):not(.jse-selected-value) .jse-footer .jse-meta {
  background: none;
}
.jse-json-node.jse-selected.svelte-oawf7x .jse-header:where(.svelte-oawf7x),
.jse-json-node.jse-selected.svelte-oawf7x .jse-contents:where(.svelte-oawf7x),
.jse-json-node.jse-selected.svelte-oawf7x .jse-footer:where(.svelte-oawf7x) {
  background: var(--jse-selection-background-color, #d3d3d3);
  cursor: var(--jse-contents-selected-cursor, grab);
}
.jse-json-node.jse-selected.svelte-oawf7x .jse-key-outer:where(.svelte-oawf7x):hover,
.jse-json-node.jse-selected.svelte-oawf7x .jse-value-outer:where(.svelte-oawf7x):hover,
.jse-json-node.jse-selected.svelte-oawf7x .jse-meta:where(.svelte-oawf7x):hover,
.jse-json-node.jse-selected.svelte-oawf7x .jse-footer:where(.svelte-oawf7x):hover {
  background: inherit;
  cursor: inherit;
}
.jse-json-node.svelte-oawf7x .jse-key-outer.jse-selected-key:where(.svelte-oawf7x) {
  background: var(--jse-selection-background-color, #d3d3d3);
  cursor: var(--jse-contents-selected-cursor, grab);
}
.jse-json-node.jse-selected-value.svelte-oawf7x .jse-value-outer,
.jse-json-node.jse-selected-value.svelte-oawf7x .jse-meta,
.jse-json-node.jse-selected-value.svelte-oawf7x .jse-items .jse-header,
.jse-json-node.jse-selected-value.svelte-oawf7x .jse-items .jse-contents,
.jse-json-node.jse-selected-value.svelte-oawf7x .jse-props .jse-header,
.jse-json-node.jse-selected-value.svelte-oawf7x .jse-props .jse-contents,
.jse-json-node.jse-selected-value.svelte-oawf7x .jse-footer {
  background: var(--jse-selection-background-color, #d3d3d3);
  cursor: var(--jse-contents-selected-cursor, grab);
}
.jse-json-node.jse-selected-value.svelte-oawf7x .jse-value-outer .jse-key-outer:hover,
.jse-json-node.jse-selected-value.svelte-oawf7x .jse-meta .jse-key-outer:hover,
.jse-json-node.jse-selected-value.svelte-oawf7x .jse-items .jse-header .jse-key-outer:hover,
.jse-json-node.jse-selected-value.svelte-oawf7x .jse-items .jse-contents .jse-key-outer:hover,
.jse-json-node.jse-selected-value.svelte-oawf7x .jse-props .jse-header .jse-key-outer:hover,
.jse-json-node.jse-selected-value.svelte-oawf7x .jse-props .jse-contents .jse-key-outer:hover,
.jse-json-node.jse-selected-value.svelte-oawf7x .jse-footer .jse-key-outer:hover {
  background: inherit;
  cursor: inherit;
}
.jse-json-node.jse-readonly.svelte-oawf7x {
  --jse-contents-selected-cursor: pointer;
}
.jse-json-node.svelte-oawf7x .jse-insert-area.jse-selected:where(.svelte-oawf7x) {
  outline-color: var(--jse-context-menu-pointer-background, var(--jse-context-menu-background, #656565));
}`);
var ur = fd( () => HP)
  , GP = K('<div class="jse-separator svelte-oawf7x">:</div>')
  , JP = K('<div class="jse-bracket svelte-oawf7x">[</div> <!> &nbsp;', 1)
  , KP = K('<div class="jse-bracket svelte-oawf7x">[</div> <!> <div class="jse-bracket svelte-oawf7x">]</div>', 1)
  , YP = K('<div class="jse-context-menu-pointer-anchor svelte-oawf7x"><!></div>')
  , XP = K('<div role="none" class="jse-insert-selection-area jse-inside svelte-oawf7x" data-type="insert-selection-area-inside"></div>')
  , QP = K('<div role="none" class="jse-insert-selection-area jse-after svelte-oawf7x" data-type="insert-selection-area-after"></div>')
  , ZP = K('<div data-type="insert-selection-area-inside"><!></div>')
  , ez = K('<div slot="identifier" class="jse-identifier svelte-oawf7x"><div class="jse-index svelte-oawf7x"> </div></div>')
  , tz = K("<!> <!>", 1)
  , nz = K('<div role="none" class="jse-insert-selection-area jse-after svelte-oawf7x" data-type="insert-selection-area-after"></div>')
  , rz = K('<div class="jse-items svelte-oawf7x"><!> <!></div> <div class="jse-footer-outer svelte-oawf7x"><div data-type="selectable-value" class="jse-footer svelte-oawf7x"><span class="jse-bracket svelte-oawf7x">]</span></div> <!></div>', 1)
  , oz = K('<div class="jse-header-outer svelte-oawf7x"><div class="jse-header svelte-oawf7x"><button type="button" class="jse-expand svelte-oawf7x" title="Expand or collapse this array (Ctrl+Click to expand/collapse recursively)"><!></button> <!> <!> <div class="jse-meta svelte-oawf7x"><div class="jse-meta-inner svelte-oawf7x" data-type="selectable-value"><!></div></div> <!></div> <!> <!></div> <!>', 1)
  , az = K('<div class="jse-separator svelte-oawf7x">:</div>')
  , iz = K('<div class="jse-bracket jse-expanded svelte-oawf7x">&lbrace;</div>')
  , sz = K('<div class="jse-bracket svelte-oawf7x">&lbrace;</div> <!> <div class="jse-bracket svelte-oawf7x">&rbrace;</div>', 1)
  , lz = K('<div class="jse-context-menu-pointer-anchor svelte-oawf7x"><!></div>')
  , uz = K('<div role="none" class="jse-insert-selection-area jse-inside svelte-oawf7x" data-type="insert-selection-area-inside"></div>')
  , cz = K('<div role="none" class="jse-insert-selection-area jse-after svelte-oawf7x" data-type="insert-selection-area-after"></div>')
  , dz = K('<div data-type="insert-selection-area-inside"><!></div>')
  , vz = K('<div slot="identifier"><!></div>')
  , fz = K('<div role="none" class="jse-insert-selection-area jse-after svelte-oawf7x" data-type="insert-selection-area-after"></div>')
  , pz = K('<div class="jse-props svelte-oawf7x"><!> <!></div> <div class="jse-footer-outer svelte-oawf7x"><div data-type="selectable-value" class="jse-footer svelte-oawf7x"><div class="jse-bracket svelte-oawf7x">&rbrace;</div></div> <!></div>', 1)
  , hz = K('<div class="jse-header-outer svelte-oawf7x"><div class="jse-header svelte-oawf7x"><button type="button" class="jse-expand svelte-oawf7x" title="Expand or collapse this object (Ctrl+Click to expand/collapse recursively)"><!></button> <!> <!> <div class="jse-meta svelte-oawf7x" data-type="selectable-value"><div class="jse-meta-inner svelte-oawf7x"><!></div></div> <!></div> <!> <!></div> <!>', 1)
  , gz = K('<div class="jse-separator svelte-oawf7x">:</div>')
  , mz = K('<div class="jse-context-menu-pointer-anchor svelte-oawf7x"><!></div>')
  , bz = K('<div role="none" class="jse-insert-selection-area jse-after svelte-oawf7x" data-type="insert-selection-area-after"></div>')
  , xz = K('<div class="jse-contents-outer svelte-oawf7x"><div class="jse-contents svelte-oawf7x"><!> <!> <div class="jse-value-outer svelte-oawf7x"><!></div> <!></div> <!> <!></div>')
  , jz = K('<div data-type="insert-selection-area-after"><!></div>')
  , yz = K('<div role="treeitem" tabindex="-1"><!> <!></div>');
function Kv(e, t) {
    it(t, !1);
    var n = T(void 0, !0)
      , o = T(void 0, !0)
      , a = g(t, "pointer", 9)
      , i = g(t, "value", 9)
      , s = g(t, "state", 9)
      , l = g(t, "validationErrors", 9)
      , u = g(t, "searchResults", 9)
      , d = g(t, "selection", 9)
      , c = g(t, "context", 9)
      , v = g(t, "onDragSelectionStart", 9)
      , p = Hr("jsoneditor:JSONNode")
      , f = T(void 0, !0)
      , m = void 0
      , x = T(void 0, !0)
      , y = T(void 0, !0)
      , w = T(void 0, !0)
      , S = T(void 0, !0)
      , P = T(void 0, !0)
      , R = T(void 0, !0)
      , k = T(void 0, !0);
    function I(X) {
        X.stopPropagation();
        var D = kp(X);
        c().onExpand(r(y), !r(w), D)
    }
    function H() {
        c().onExpand(r(y), !0)
    }
    function Y(X, D) {
        var le = Cu(r(y), Object.keys(i()), X, D);
        return c().onPatch(le),
        gt(Ao(le[0].path))
    }
    function M(X) {
        c().onDrag(X)
    }
    function Z(X) {
        ur().selecting && (ur(ur().selecting = !1),
        X.stopPropagation()),
        c().onDragEnd(),
        document.removeEventListener("mousemove", M, !0),
        document.removeEventListener("mouseup", Z)
    }
    function ae() {
        var X;
        return ((X = c().findElement([])) === null || X === void 0 || (X = X.getBoundingClientRect()) === null || X === void 0 ? void 0 : X.top) || 0
    }
    function ee(X, D) {
        var le = ae() - X.initialContentTop;
        return D.clientY - X.initialClientY - le
    }
    function se(X) {
        if (!c().readOnly && d()) {
            var D = rn(Qe(d()));
            if (Wt(r(y), D)) {
                var le = function(J, U) {
                    var _t = [];
                    function nt(C) {
                        var A = r(y).concat(C)
                          , $ = c().findElement(A);
                        $ !== void 0 && _t.push({
                            path: A,
                            height: $.clientHeight
                        })
                    }
                    if (Array.isArray(i())) {
                        var Se = c().getJson();
                        if (Se === void 0)
                            return;
                        var mt = Da(Se, J)
                          , Fe = gi(Se, J)
                          , $e = parseInt(gt(mt), 10)
                          , Lt = parseInt(gt(Fe), 10)
                          , We = U.find(C => $e >= C.start && Lt <= C.end);
                        if (!We)
                            return;
                        var {start: $t, end: j} = We;
                        Cw($t, Math.min(i().length, j), C => nt(String(C)))
                    } else
                        Object.keys(i()).forEach(nt);
                    return _t
                }(d(), r(P) || Us);
                if (p("dragSelectionStart", {
                    selection: d(),
                    items: le
                }),
                le) {
                    var F = c().getJson();
                    if (F !== void 0) {
                        var we = Da(F, d())
                          , ne = le.findIndex(J => Wt(J.path, we))
                          , {offset: Be} = ov({
                            json: F,
                            selection: c().getSelection(),
                            deltaY: 0,
                            items: le
                        });
                        h(x, {
                            initialTarget: X.target,
                            initialClientY: X.clientY,
                            initialContentTop: ae(),
                            selectionStartIndex: ne,
                            selectionItemsCount: Si(F, d()).length,
                            items: le,
                            offset: Be,
                            didMoveItems: !1
                        }),
                        ur(ur().dragging = !0),
                        document.addEventListener("mousemove", _e, !0),
                        document.addEventListener("mouseup", fe)
                    }
                } else
                    p("Cannot drag the current selection (probably spread over multiple sections)")
            } else
                v()(X)
        }
    }
    function _e(X) {
        if (r(x)) {
            var D = c().getJson();
            if (D === void 0)
                return;
            var le = ee(r(x), X)
              , {offset: F} = ov({
                json: D,
                selection: c().getSelection(),
                deltaY: le,
                items: r(x).items
            });
            F !== r(x).offset && (p("drag selection", F, le),
            h(x, ke(ke({}, r(x)), {}, {
                offset: F,
                didMoveItems: !0
            })))
        }
    }
    function fe(X) {
        if (r(x)) {
            var D = c().getJson();
            if (D === void 0)
                return;
            var le = ee(r(x), X)
              , {operations: F, updatedSelection: we} = ov({
                json: D,
                selection: c().getSelection(),
                deltaY: le,
                items: r(x).items
            });
            if (F)
                c().onPatch(F, (J, U) => ({
                    state: U,
                    selection: we ?? d()
                }));
            else if (X.target === r(x).initialTarget && !r(x).didMoveItems) {
                var ne = Wd(X.target)
                  , Be = Uw(X.target);
                Be && c().onSelect(mg(ne, Be))
            }
            h(x, void 0),
            ur(ur().dragging = !1),
            document.removeEventListener("mousemove", _e, !0),
            document.removeEventListener("mouseup", fe)
        }
    }
    function Oe(X) {
        X.shiftKey || (X.stopPropagation(),
        X.preventDefault(),
        c().onSelect(Ya(r(y))))
    }
    function De(X) {
        X.shiftKey || (X.stopPropagation(),
        X.preventDefault(),
        c().onSelect(Ba(r(y))))
    }
    function Ne(X) {
        c().onSelect(Ya(r(y))),
        tr(),
        c().onContextMenu(X)
    }
    function je(X) {
        c().onSelect(Ba(r(y))),
        tr(),
        c().onContextMenu(X)
    }
    V( () => b(a()), () => {
        h(y, Ao(a()))
    }
    ),
    V( () => b(a()), () => {
        h(n, encodeURIComponent(a()))
    }
    ),
    V( () => b(s()), () => {
        h(w, !!es(s()) && s().expanded)
    }
    ),
    V( () => (b(i()),
    b(s())), () => {
        h(S, ya(i(), s(), []))
    }
    ),
    V( () => b(s()), () => {
        h(P, Br(s()) ? s().visibleSections : void 0)
    }
    ),
    V( () => b(l()), () => {
        var X;
        h(R, (X = l()) === null || X === void 0 ? void 0 : X.validationError)
    }
    ),
    V( () => (b(c()),
    b(d()),
    r(y)), () => {
        h(k, eu(c().getJson(), d(), r(y)))
    }
    ),
    V( () => r(y), () => {
        h(o, r(y).length === 0)
    }
    ),
    An(),
    Rt(!0);
    var Ae, Pe, Ve = yz(), ge = z(Ve), de = X => {
        var D = oz()
          , le = ht(D)
          , F = z(le)
          , we = z(F)
          , ne = z(we)
          , Be = oe => {
            fn(oe, {
                get data() {
                    return Va
                }
            })
        }
          , J = oe => {
            fn(oe, {
                get data() {
                    return $l
                }
            })
        }
        ;
        ie(ne, oe => {
            r(w) ? oe(Be) : oe(J, !1)
        }
        );
        var U = B(we, 2);
        _r(U, t, "identifier", {}, null);
        var _t = B(U, 2)
          , nt = oe => {
            L(oe, GP())
        }
        ;
        ie(_t, oe => {
            r(o) || oe(nt)
        }
        );
        var Se = B(_t, 2)
          , mt = z(Se)
          , Fe = z(mt)
          , $e = oe => {
            var Q = JP();
            Yu(B(ht(Q), 2), {
                children: (dt, Ye) => {
                    var he = Jr();
                    Ee( () => {
                        var ft, Zt;
                        return lt(he, "".concat((b(i()),
                        (ft = N( () => i().length)) !== null && ft !== void 0 ? ft : ""), `
                `).concat((b(i()),
                        (Zt = N( () => i().length === 1 ? "item" : "items")) !== null && Zt !== void 0 ? Zt : "")))
                    }
                    ),
                    L(dt, he)
                }
                ,
                $$slots: {
                    default: !0
                }
            }),
            L(oe, Q)
        }
          , Lt = oe => {
            var Q = KP();
            Yu(B(ht(Q), 2), {
                onclick: H,
                children: (dt, Ye) => {
                    var he = Jr();
                    Ee( () => {
                        var ft, Zt;
                        return lt(he, "".concat((b(i()),
                        (ft = N( () => i().length)) !== null && ft !== void 0 ? ft : ""), `
                `).concat((b(i()),
                        (Zt = N( () => i().length === 1 ? "item" : "items")) !== null && Zt !== void 0 ? Zt : "")))
                    }
                    ),
                    L(dt, he)
                }
                ,
                $$slots: {
                    default: !0
                }
            }),
            L(oe, Q)
        }
        ;
        ie(Fe, oe => {
            r(w) ? oe($e) : oe(Lt, !1)
        }
        );
        var We = B(Se, 2)
          , $t = oe => {
            var Q = YP();
            oi(z(Q), {
                get root() {
                    return r(o)
                },
                selected: !0,
                get onContextMenu() {
                    return b(c()),
                    N( () => c().onContextMenu)
                }
            }),
            L(oe, Q)
        }
        ;
        ie(We, oe => {
            b(c()),
            r(k),
            b(d()),
            b(jn),
            b(Hn),
            b(Fr),
            b(Wt),
            b(Qe),
            r(y),
            N( () => !c().readOnly && r(k) && d() && (jn(d()) || Hn(d())) && !Fr(d()) && Wt(Qe(d()), r(y))) && oe($t)
        }
        );
        var j = B(F, 2)
          , C = oe => {
            $s(oe, {
                get validationError() {
                    return r(R)
                },
                onExpand: H
            })
        }
        ;
        ie(j, oe => {
            r(R),
            r(w),
            N( () => r(R) && (!r(w) || !r(R).isChildError)) && oe(C)
        }
        );
        var A = B(j, 2)
          , $ = oe => {
            var Q = XP();
            me("click", Q, Oe),
            L(oe, Q)
        }
          , re = oe => {
            var Q = QP();
            me("click", Q, De),
            L(oe, Q)
        }
        ;
        ie(A, oe => {
            r(w) ? oe($) : oe(re, !1)
        }
        );
        var Ce = B(le, 2)
          , ze = oe => {
            var Q = rz()
              , dt = ht(Q)
              , Ye = z(dt)
              , he = _n => {
                var Xt, Rn, on = ZP(), It = z(on), St = pe( () => (r(k),
                b(qr),
                b(d()),
                N( () => r(k) && qr(d()))));
                oi(It, {
                    insert: !0,
                    get selected() {
                        return r(St)
                    },
                    onContextMenu: Ne
                }),
                Ee( (Ht, hn) => {
                    Xt = At(on, 1, "jse-insert-area jse-inside svelte-oawf7x", null, Xt, Ht),
                    zn(on, "title", Gd),
                    Rn = ra(on, "", Rn, hn)
                }
                , [ () => ({
                    "jse-hovered": r(f) === Ui,
                    "jse-selected": r(k) && qr(d())
                }), () => ({
                    "--level": (r(y),
                    N( () => r(y).length + 1))
                })], pe),
                L(_n, on)
            }
            ;
            ie(Ye, _n => {
                b(c()),
                r(f),
                b(Ui),
                r(k),
                b(qr),
                b(d()),
                N( () => !c().readOnly && (r(f) === Ui || r(k) && qr(d()))) && _n(he)
            }
            ),
            wr(B(Ye, 2), 1, () => r(P) || Us, Rr, (_n, Xt, Rn) => {
                var on = tz()
                  , It = ht(on);
                wr(It, 1, () => (b(i()),
                r(Xt),
                r(x),
                N( () => function(hn, Ut, He) {
                    var Yt = Ut.start
                      , Vt = Math.min(Ut.end, hn.length)
                      , bn = Nc(Yt, Vt);
                    return He && He.offset !== 0 ? Yh(bn, He.selectionStartIndex, He.selectionItemsCount, He.offset).map( (or, Bn) => ({
                        index: or,
                        gutterIndex: Bn
                    })) : bn.map(or => ({
                        index: or,
                        gutterIndex: or
                    }))
                }(i(), r(Xt), r(x)))), hn => hn.index, (hn, Ut) => {
                    var He = jr()
                      , Yt = pe( () => (b(Br),
                    b(l()),
                    r(Ut),
                    N( () => Br(l()) ? l().items[r(Ut).index] : void 0)))
                      , Vt = pe( () => (b(Lu),
                    b(c()),
                    b(d()),
                    r(y),
                    r(Ut),
                    N( () => Lu(c().getJson(), d(), r(y).concat(String(r(Ut).index))))))
                      , bn = ht(He)
                      , or = pe( () => (b(Ml),
                    b(a()),
                    r(Ut),
                    N( () => Ml(a(), r(Ut).index))))
                      , Bn = pe( () => (b(Br),
                    b(s()),
                    r(Ut),
                    N( () => Br(s()) ? s().items[r(Ut).index] : void 0)))
                      , Mr = pe( () => (b(Br),
                    b(u()),
                    r(Ut),
                    N( () => Br(u()) ? u().items[r(Ut).index] : void 0)));
                    Kv(bn, {
                        get value() {
                            return b(i()),
                            r(Ut),
                            N( () => i()[r(Ut).index])
                        },
                        get pointer() {
                            return r(or)
                        },
                        get state() {
                            return r(Bn)
                        },
                        get validationErrors() {
                            return r(Yt)
                        },
                        get searchResults() {
                            return r(Mr)
                        },
                        get selection() {
                            return r(Vt)
                        },
                        get context() {
                            return c()
                        },
                        onDragSelectionStart: se,
                        $$slots: {
                            identifier: (Gn, fr) => {
                                var Tr = ez()
                                  , Sr = z(Tr)
                                  , Cr = z(Sr);
                                Ee( () => lt(Cr, (r(Ut),
                                N( () => r(Ut).gutterIndex)))),
                                L(Gn, Tr)
                            }
                        }
                    }),
                    L(hn, He)
                }
                );
                var St = B(It, 2)
                  , Ht = hn => {
                    var Ut = pe( () => r(P) || Us);
                    qP(hn, {
                        get visibleSections() {
                            return r(Ut)
                        },
                        sectionIndex: Rn,
                        get total() {
                            return b(i()),
                            N( () => i().length)
                        },
                        get path() {
                            return r(y)
                        },
                        get onExpandSection() {
                            return b(c()),
                            N( () => c().onExpandSection)
                        },
                        get selection() {
                            return d()
                        },
                        get context() {
                            return c()
                        }
                    })
                }
                ;
                ie(St, hn => {
                    r(Xt),
                    b(i()),
                    N( () => r(Xt).end < i().length) && hn(Ht)
                }
                ),
                L(_n, on)
            }
            );
            var ft = B(dt, 2)
              , Zt = B(z(ft), 2)
              , Tn = _n => {
                var Xt = nz();
                me("click", Xt, De),
                L(_n, Xt)
            }
            ;
            ie(Zt, _n => {
                r(o) || _n(Tn)
            }
            ),
            L(oe, Q)
        }
        ;
        ie(Ce, oe => {
            r(w) && oe(ze)
        }
        ),
        me("click", we, I),
        L(X, D)
    }
    , ye = (X, D) => {
        var le = we => {
            var ne = hz()
              , Be = ht(ne)
              , J = z(Be)
              , U = z(J)
              , _t = z(U)
              , nt = he => {
                fn(he, {
                    get data() {
                        return Va
                    }
                })
            }
              , Se = he => {
                fn(he, {
                    get data() {
                        return $l
                    }
                })
            }
            ;
            ie(_t, he => {
                r(w) ? he(nt) : he(Se, !1)
            }
            );
            var mt = B(U, 2);
            _r(mt, t, "identifier", {}, null);
            var Fe = B(mt, 2)
              , $e = he => {
                L(he, az())
            }
            ;
            ie(Fe, he => {
                r(o) || he($e)
            }
            );
            var Lt = B(Fe, 2)
              , We = z(Lt)
              , $t = z(We)
              , j = he => {
                L(he, iz())
            }
              , C = he => {
                var ft = sz();
                Yu(B(ht(ft), 2), {
                    onclick: H,
                    children: (Zt, Tn) => {
                        var _n = Jr();
                        Ee( (Xt, Rn) => lt(_n, "".concat(Xt ?? "", `
                `).concat(Rn ?? "")), [ () => (b(i()),
                        N( () => Object.keys(i()).length)), () => (b(i()),
                        N( () => Object.keys(i()).length === 1 ? "prop" : "props"))], pe),
                        L(Zt, _n)
                    }
                    ,
                    $$slots: {
                        default: !0
                    }
                }),
                L(he, ft)
            }
            ;
            ie($t, he => {
                r(w) ? he(j) : he(C, !1)
            }
            );
            var A = B(Lt, 2)
              , $ = he => {
                var ft = lz();
                oi(z(ft), {
                    get root() {
                        return r(o)
                    },
                    selected: !0,
                    get onContextMenu() {
                        return b(c()),
                        N( () => c().onContextMenu)
                    }
                }),
                L(he, ft)
            }
            ;
            ie(A, he => {
                b(c()),
                r(k),
                b(d()),
                b(jn),
                b(Hn),
                b(Fr),
                b(Wt),
                b(Qe),
                r(y),
                N( () => !c().readOnly && r(k) && d() && (jn(d()) || Hn(d())) && !Fr(d()) && Wt(Qe(d()), r(y))) && he($)
            }
            );
            var re = B(J, 2)
              , Ce = he => {
                $s(he, {
                    get validationError() {
                        return r(R)
                    },
                    onExpand: H
                })
            }
            ;
            ie(re, he => {
                r(R),
                r(w),
                N( () => r(R) && (!r(w) || !r(R).isChildError)) && he(Ce)
            }
            );
            var ze = B(re, 2)
              , oe = he => {
                var ft = uz();
                me("click", ft, Oe),
                L(he, ft)
            }
              , Q = (he, ft) => {
                var Zt = Tn => {
                    var _n = cz();
                    me("click", _n, De),
                    L(Tn, _n)
                }
                ;
                ie(he, Tn => {
                    r(o) || Tn(Zt)
                }
                , ft)
            }
            ;
            ie(ze, he => {
                r(w) ? he(oe) : he(Q, !1)
            }
            );
            var dt = B(Be, 2)
              , Ye = he => {
                var ft = pz()
                  , Zt = ht(ft)
                  , Tn = z(Zt)
                  , _n = It => {
                    var St, Ht, hn = dz(), Ut = z(hn), He = pe( () => (r(k),
                    b(qr),
                    b(d()),
                    N( () => r(k) && qr(d()))));
                    oi(Ut, {
                        insert: !0,
                        get selected() {
                            return r(He)
                        },
                        onContextMenu: Ne
                    }),
                    Ee( (Yt, Vt) => {
                        St = At(hn, 1, "jse-insert-area jse-inside svelte-oawf7x", null, St, Yt),
                        zn(hn, "title", Gd),
                        Ht = ra(hn, "", Ht, Vt)
                    }
                    , [ () => ({
                        "jse-hovered": r(f) === Ui,
                        "jse-selected": r(k) && qr(d())
                    }), () => ({
                        "--level": (r(y),
                        N( () => r(y).length + 1))
                    })], pe),
                    L(It, hn)
                }
                ;
                ie(Tn, It => {
                    b(c()),
                    r(f),
                    b(Ui),
                    r(k),
                    b(qr),
                    b(d()),
                    N( () => !c().readOnly && (r(f) === Ui || r(k) && qr(d()))) && It(_n)
                }
                ),
                wr(B(Tn, 2), 1, () => (b(i()),
                r(x),
                N( () => function(It, St) {
                    var Ht = Object.keys(It);
                    return St && St.offset !== 0 ? Yh(Ht, St.selectionStartIndex, St.selectionItemsCount, St.offset) : Ht
                }(i(), r(x)))), Rr, (It, St) => {
                    var Ht = jr()
                      , hn = pe( () => (b(Ml),
                    b(a()),
                    r(St),
                    N( () => Ml(a(), r(St)))))
                      , Ut = pe( () => (b(go),
                    b(u()),
                    r(St),
                    N( () => go(u()) ? u().properties[r(St)] : void 0)))
                      , He = pe( () => (b(go),
                    b(l()),
                    r(St),
                    N( () => go(l()) ? l().properties[r(St)] : void 0)))
                      , Yt = pe( () => (r(y),
                    r(St),
                    N( () => r(y).concat(r(St)))))
                      , Vt = pe( () => (b(Lu),
                    b(c()),
                    b(d()),
                    b(r(Yt)),
                    N( () => Lu(c().getJson(), d(), r(Yt)))))
                      , bn = ht(Ht)
                      , or = pe( () => (b(go),
                    b(s()),
                    r(St),
                    N( () => go(s()) ? s().properties[r(St)] : void 0)));
                    Kv(bn, {
                        get value() {
                            return b(i()),
                            r(St),
                            N( () => i()[r(St)])
                        },
                        get pointer() {
                            return r(hn)
                        },
                        get state() {
                            return r(or)
                        },
                        get validationErrors() {
                            return r(He)
                        },
                        get searchResults() {
                            return r(Ut)
                        },
                        get selection() {
                            return r(Vt)
                        },
                        get context() {
                            return c()
                        },
                        onDragSelectionStart: se,
                        $$slots: {
                            identifier: (Bn, Mr) => {
                                var Gn, fr = vz(), Tr = z(fr), Sr = pe( () => (b(_g),
                                b(r(Ut)),
                                N( () => _g(r(Ut)))));
                                (function(Cr, ar) {
                                    it(ar, !1);
                                    var Or = T(void 0, !0)
                                      , be = T(void 0, !0)
                                      , an = g(ar, "pointer", 9)
                                      , te = g(ar, "key", 9)
                                      , Re = g(ar, "selection", 9)
                                      , at = g(ar, "searchResultItems", 9)
                                      , Dt = g(ar, "onUpdateKey", 9)
                                      , Xe = g(ar, "context", 9)
                                      , Gt = T(void 0, !0);
                                    function Sn(Ft) {
                                        r(be) || Xe().readOnly || (Ft.preventDefault(),
                                        Xe().onSelect(zp(r(Gt))))
                                    }
                                    function Pt(Ft, xn) {
                                        var ut = Dt()(te(), Xe().normalization.unescapeValue(Ft))
                                          , W = rn(r(Gt)).concat(ut);
                                        Xe().onSelect(xn === hi.nextInside ? nn(W) : Ka(W)),
                                        xn !== hi.self && Xe().focus()
                                    }
                                    function In() {
                                        Xe().onSelect(Ka(r(Gt))),
                                        Xe().focus()
                                    }
                                    V( () => b(an()), () => {
                                        h(Gt, Ao(an()))
                                    }
                                    ),
                                    V( () => (b(Re()),
                                    r(Gt)), () => {
                                        h(Or, Wr(Re()) && Wt(Re().path, r(Gt)))
                                    }
                                    ),
                                    V( () => (r(Or),
                                    b(Re())), () => {
                                        h(be, r(Or) && Fr(Re()))
                                    }
                                    ),
                                    An(),
                                    Rt(!0);
                                    var pt = BP()
                                      , en = ht(pt)
                                      , rt = Ft => {
                                        var xn = pe( () => (b(Xe()),
                                        b(te()),
                                        N( () => Xe().normalization.escapeValue(te()))))
                                          , ut = pe( () => (b(Fr),
                                        b(Re()),
                                        N( () => Fr(Re()) ? Re().initialValue : void 0)));
                                        Jw(Ft, {
                                            get value() {
                                                return r(xn)
                                            },
                                            get initialValue() {
                                                return r(ut)
                                            },
                                            label: "Edit key",
                                            shortText: !0,
                                            onChange: Pt,
                                            onCancel: In,
                                            get onFind() {
                                                return b(Xe()),
                                                N( () => Xe().onFind)
                                            }
                                        })
                                    }
                                      , zt = Ft => {
                                        var xn, ut = FP(), W = z(ut), ce = vt => {
                                            var sn = pe( () => (b(Xe()),
                                            b(te()),
                                            N( () => Xe().normalization.escapeValue(te()))));
                                            t1(vt, {
                                                get text() {
                                                    return r(sn)
                                                },
                                                get searchResultItems() {
                                                    return at()
                                                }
                                            })
                                        }
                                        , Te = vt => {
                                            var sn = Jr();
                                            Ee(Jt => lt(sn, Jt), [ () => (b(Js),
                                            b(Xe()),
                                            b(te()),
                                            N( () => Js(Xe().normalization.escapeValue(te()))))], pe),
                                            L(vt, sn)
                                        }
                                        ;
                                        ie(W, vt => {
                                            at() ? vt(ce) : vt(Te, !1)
                                        }
                                        ),
                                        Ee(vt => xn = At(ut, 1, "jse-key svelte-2iqnqn", null, xn, vt), [ () => ({
                                            "jse-empty": te() === ""
                                        })], pe),
                                        me("dblclick", ut, Sn),
                                        L(Ft, ut)
                                    }
                                    ;
                                    ie(en, Ft => {
                                        b(Xe()),
                                        r(be),
                                        N( () => !Xe().readOnly && r(be)) ? Ft(rt) : Ft(zt, !1)
                                    }
                                    );
                                    var Mn = B(en, 2)
                                      , ir = Ft => {
                                        oi(Ft, {
                                            selected: !0,
                                            get onContextMenu() {
                                                return b(Xe()),
                                                N( () => Xe().onContextMenu)
                                            }
                                        })
                                    }
                                    ;
                                    ie(Mn, Ft => {
                                        b(Xe()),
                                        r(Or),
                                        r(be),
                                        N( () => !Xe().readOnly && r(Or) && !r(be)) && Ft(ir)
                                    }
                                    ),
                                    L(Cr, pt),
                                    st()
                                }
                                )(Tr, {
                                    get pointer() {
                                        return r(hn)
                                    },
                                    get key() {
                                        return r(St)
                                    },
                                    get selection() {
                                        return r(Vt)
                                    },
                                    get searchResultItems() {
                                        return r(Sr)
                                    },
                                    get context() {
                                        return c()
                                    },
                                    onUpdateKey: Y
                                }),
                                Ee(Cr => Gn = At(fr, 1, "jse-key-outer svelte-oawf7x", null, Gn, Cr), [ () => ({
                                    "jse-selected-key": Wr(r(Vt)) && Wt(r(Vt).path, r(Yt))
                                })], pe),
                                L(Bn, fr)
                            }
                        }
                    }),
                    L(It, Ht)
                }
                );
                var Xt = B(Zt, 2)
                  , Rn = B(z(Xt), 2)
                  , on = It => {
                    var St = fz();
                    me("click", St, De),
                    L(It, St)
                }
                ;
                ie(Rn, It => {
                    r(o) || It(on)
                }
                ),
                L(he, ft)
            }
            ;
            ie(dt, he => {
                r(w) && he(Ye)
            }
            ),
            me("click", U, I),
            L(we, ne)
        }
          , F = we => {
            var ne = xz()
              , Be = z(ne)
              , J = z(Be);
            _r(J, t, "identifier", {}, null);
            var U = B(J, 2)
              , _t = A => {
                L(A, gz())
            }
            ;
            ie(U, A => {
                r(o) || A(_t)
            }
            );
            var nt = B(U, 2)
              , Se = z(nt)
              , mt = pe( () => r(k) ? d() : void 0)
              , Fe = pe( () => (b(Sg),
            b(u()),
            N( () => Sg(u()))));
            m1(Se, {
                get path() {
                    return r(y)
                },
                get value() {
                    return i()
                },
                get enforceString() {
                    return r(S)
                },
                get selection() {
                    return r(mt)
                },
                get searchResultItems() {
                    return r(Fe)
                },
                get context() {
                    return c()
                }
            });
            var $e = B(nt, 2)
              , Lt = A => {
                var $ = mz();
                oi(z($), {
                    get root() {
                        return r(o)
                    },
                    selected: !0,
                    get onContextMenu() {
                        return b(c()),
                        N( () => c().onContextMenu)
                    }
                }),
                L(A, $)
            }
            ;
            ie($e, A => {
                b(c()),
                r(k),
                b(d()),
                b(jn),
                b(Hn),
                b(Fr),
                b(Wt),
                b(Qe),
                r(y),
                N( () => !c().readOnly && r(k) && d() && (jn(d()) || Hn(d())) && !Fr(d()) && Wt(Qe(d()), r(y))) && A(Lt)
            }
            );
            var We = B(Be, 2)
              , $t = A => {
                $s(A, {
                    get validationError() {
                        return r(R)
                    },
                    onExpand: H
                })
            }
            ;
            ie(We, A => {
                r(R) && A($t)
            }
            );
            var j = B(We, 2)
              , C = A => {
                var $ = bz();
                me("click", $, De),
                L(A, $)
            }
            ;
            ie(j, A => {
                r(o) || A(C)
            }
            ),
            L(we, ne)
        }
        ;
        ie(X, we => {
            b(On),
            b(i()),
            N( () => On(i())) ? we(le) : we(F, !1)
        }
        , D)
    }
    ;
    ie(ge, X => {
        b(i()),
        N( () => Array.isArray(i())) ? X(de) : X(ye, !1)
    }
    );
    var ct = B(ge, 2)
      , qt = X => {
        var D, le = jz(), F = z(le), we = pe( () => (r(k),
        b(bo),
        b(d()),
        N( () => r(k) && bo(d()))));
        oi(F, {
            insert: !0,
            get selected() {
                return r(we)
            },
            onContextMenu: je
        }),
        Ee(ne => {
            D = At(le, 1, "jse-insert-area jse-after svelte-oawf7x", null, D, ne),
            zn(le, "title", Gd)
        }
        , [ () => ({
            "jse-hovered": r(f) === Iu,
            "jse-selected": r(k) && bo(d())
        })], pe),
        L(X, le)
    }
    ;
    ie(ct, X => {
        b(c()),
        r(f),
        b(Iu),
        r(k),
        b(bo),
        b(d()),
        N( () => !c().readOnly && (r(f) === Iu || r(k) && bo(d()))) && X(qt)
    }
    ),
    Ee( (X, D, le) => {
        Ae = At(Ve, 1, X, "svelte-oawf7x", Ae, D),
        zn(Ve, "data-path", r(n)),
        zn(Ve, "aria-selected", r(k)),
        Pe = ra(Ve, "", Pe, le)
    }
    , [ () => _i((b(da),
    r(w),
    b(c()),
    r(y),
    b(i()),
    N( () => da("jse-json-node", {
        "jse-expanded": r(w)
    }, c().onClassName(r(y), i()))))), () => ({
        "jse-root": r(o),
        "jse-selected": r(k) && Hn(d()),
        "jse-selected-value": r(k) && jn(d()),
        "jse-readonly": c().readOnly,
        "jse-hovered": r(f) === eg
    }), () => ({
        "--level": (r(y),
        N( () => r(y).length))
    })], pe),
    me("mousedown", Ve, function(X) {
        if ((X.buttons === 1 || X.buttons === 2) && !((D = X.target).nodeName === "DIV" && D.contentEditable === "true" || X.buttons === 1 && Nw(X.target, "BUTTON"))) {
            var D;
            X.stopPropagation(),
            X.preventDefault(),
            c().focus(),
            document.addEventListener("mousemove", M, !0),
            document.addEventListener("mouseup", Z);
            var le = Wd(X.target)
              , F = c().getJson()
              , we = c().getDocumentState();
            if (!d() || le === Fn.after || le === Fn.inside || d().type !== le && d().type !== Fn.multi || !eu(F, d(), r(y)))
                if (ur(ur().selecting = !0),
                ur(ur().selectionAnchor = r(y)),
                ur(ur().selectionAnchorType = le),
                ur(ur().selectionFocus = r(y)),
                X.shiftKey) {
                    var ne = c().getSelection();
                    ne && c().onSelect(io(Hi(ne), r(y)))
                } else if (le === Fn.multi)
                    if (r(o) && X.target.hasAttribute("data-path")) {
                        var Be = gt(Ww(i(), we));
                        c().onSelect(qv(Be))
                    } else
                        c().onSelect(io(r(y), r(y)));
                else
                    F !== void 0 && c().onSelect(mg(le, r(y)));
            else
                X.button === 0 && v()(X)
        }
    }),
    me("mousemove", Ve, function(X) {
        if (ur().selecting) {
            X.preventDefault(),
            X.stopPropagation(),
            ur().selectionFocus === void 0 && window.getSelection && window.getSelection().empty();
            var D = Wd(X.target);
            Wt(r(y), ur().selectionFocus) && D === ur().selectionAnchorType || (ur(ur().selectionFocus = r(y)),
            ur(ur().selectionAnchorType = D),
            c().onSelect(io(ur().selectionAnchor || ur().selectionFocus, ur().selectionFocus)))
        }
    }),
    me("mouseover", Ve, function(X) {
        ur().selecting || ur().dragging || (X.stopPropagation(),
        ui(X.target, "data-type", "selectable-value") ? h(f, eg) : ui(X.target, "data-type", "selectable-key") ? h(f, void 0) : ui(X.target, "data-type", "insert-selection-area-inside") ? h(f, Ui) : ui(X.target, "data-type", "insert-selection-area-after") && h(f, Iu),
        clearTimeout(m))
    }),
    me("mouseout", Ve, function(X) {
        X.stopPropagation(),
        m = window.setTimeout( () => h(f, void 0))
    }),
    L(e, Ve),
    st()
}
var wz = {
    prefix: "fas",
    iconName: "jsoneditor-expand",
    icon: [512, 512, [], "", "M 0,448 V 512 h 512 v -64 z M 0,0 V 64 H 512 V 0 Z M 256,96 128,224 h 256 z M 256,416 384,288 H 128 Z"]
}
  , kz = {
    prefix: "fas",
    iconName: "jsoneditor-collapse",
    icon: [512, 512, [], "", "m 0,224 v 64 h 512 v -64 z M 256,192 384,64 H 128 Z M 256,320 128,448 h 256 z"]
}
  , Lg = {
    prefix: "fas",
    iconName: "jsoneditor-format",
    icon: [512, 512, [], "", "M 0,32 v 64 h 416 v -64 z M 160,160 v 64 h 352 v -64 z M 160,288 v 64 h 288 v -64 z M 0,416 v 64 h 320 v -64 z"]
}
  , _z = {
    prefix: "fas",
    iconName: "jsoneditor-compact",
    icon: [512, 512, [], "", "M 0,32 v 64 h 512 v -64 z M 0,160 v 64 h 512 v -64 z M 0,288 v 64 h 352 v -64 z"]
};
function Sz(e, t) {
    e.stopPropagation(),
    t.onCreateObject()
}
function Cz(e, t) {
    e.stopPropagation(),
    t.onCreateArray()
}
kt(`/* over all fonts, sizes, and colors */
/* "consolas" for Windows, "menlo" for Mac with fallback to "monaco", 'Ubuntu Mono' for Ubuntu */
/* (at Mac this font looks too large at 14px, but 13px is too small for the font on Windows) */
/* main, menu, modal */
/* jsoneditor modal */
/* tooltip in text mode */
/* panels: navigation bar, gutter, search box */
/* navigation-bar */
/* context menu */
/* contents: json key and values */
/* contents: selected or hovered */
/* contents: section of collapsed items in an array */
/* contents: highlighting of search matches */
/* contents: inline tags inside the JSON document */
/* contents: table */
/* controls in modals: inputs, buttons, and \`a\` */
/* messages */
/* svelte-select */
/* color picker */
.jse-welcome.svelte-1eamlhk {
  flex: 1;
  overflow: auto;
  font-family: var(--jse-font-family, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif);
  font-size: var(--jse-font-size, 16px);
  display: flex;
  flex-direction: column;
  align-items: center;
  border-left: var(--jse-main-border, 1px solid #d7d7d7);
  border-right: var(--jse-main-border, 1px solid #d7d7d7);
}
.jse-welcome.svelte-1eamlhk:last-child {
  border-bottom: var(--jse-main-border, 1px solid #d7d7d7);
}
.jse-welcome.svelte-1eamlhk .jse-space.jse-before:where(.svelte-1eamlhk) {
  flex: 1;
}
.jse-welcome.svelte-1eamlhk .jse-space.jse-after:where(.svelte-1eamlhk) {
  flex: 2;
}
.jse-welcome.svelte-1eamlhk .jse-contents:where(.svelte-1eamlhk) {
  display: flex;
  flex-direction: column;
  max-width: 300px;
  margin: 2em var(--jse-padding, 10px);
  gap: var(--jse-padding, 10px);
}
.jse-welcome.svelte-1eamlhk .jse-contents:where(.svelte-1eamlhk) .jse-welcome-info:where(.svelte-1eamlhk) {
  color: var(--jse-panel-color-readonly, #b2b2b2);
}
.jse-welcome.svelte-1eamlhk .jse-contents:where(.svelte-1eamlhk) button:where(.svelte-1eamlhk) {
  border: none;
  background: transparent;
  color: inherit;
  cursor: pointer;
  font-family: var(--jse-font-family, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif);
  font-size: var(--jse-font-size, 16px);
  padding: 5px;
  margin: 0;
  background: var(--jse-button-primary-background, var(--jse-theme-color, #3883fa));
  color: var(--jse-button-primary-color, #fff);
  padding: var(--jse-padding, 10px) calc(2 * var(--jse-padding, 10px));
  border-radius: 3px;
}
.jse-welcome.svelte-1eamlhk .jse-contents:where(.svelte-1eamlhk) button:where(.svelte-1eamlhk):hover {
  background: var(--jse-button-primary-background-highlight, var(--jse-theme-color-highlight, #5f9dff));
}
.jse-welcome.svelte-1eamlhk .jse-contents:where(.svelte-1eamlhk) button:where(.svelte-1eamlhk):disabled {
  background: var(--jse-button-primary-background-disabled, #9d9d9d);
}`);
var Oz = (e, t) => t.onClick()
  , Ez = K('<div class="jse-welcome-info svelte-1eamlhk">You can paste clipboard data using <b>Ctrl+V</b>, or use the following options:</div> <button class="svelte-1eamlhk">Create object</button> <button class="svelte-1eamlhk">Create array</button>', 1)
  , Az = K('<div class="jse-welcome svelte-1eamlhk" role="none"><div class="jse-space jse-before svelte-1eamlhk"></div> <div class="jse-contents svelte-1eamlhk"><div class="jse-welcome-title">Empty document</div> <!></div> <div class="jse-space jse-after svelte-1eamlhk"></div></div>');
function Yv(e, t) {
    var n = typeof e == "string" ? e.toLowerCase() : e
      , o = typeof t == "string" ? t.toLowerCase() : t;
    return dk(n, o)
}
function b1(e) {
    var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : []
      , n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : []
      , o = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : 1
      , a = Ke(e, t);
    if (Lr(a)) {
        if (n === void 0)
            throw new Error("Cannot sort: no property selected by which to sort the array");
        return function(i) {
            var s = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : []
              , l = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : []
              , u = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : 1
              , d = function(v, p) {
                var f = {
                    boolean: 0,
                    number: 1,
                    string: 2,
                    undefined: 4
                }
                  , m = 3;
                return function(x, y) {
                    var w = Ke(x, v)
                      , S = Ke(y, v);
                    if (typeof w != typeof S) {
                        var P, R, k = (P = f[typeof w]) !== null && P !== void 0 ? P : m, I = (R = f[typeof S]) !== null && R !== void 0 ? R : m;
                        return k > I ? p : k < I ? -p : 0
                    }
                    return typeof w == "number" || typeof w == "boolean" ? w > S ? p : w < S ? -p : 0 : xr(w) ? 0 : p * Yv(w, S)
                }
            }(l, u)
              , c = Ke(i, s);
            return [{
                op: "replace",
                path: Tt(s),
                value: c.slice(0).sort(d)
            }]
        }(e, t, n, o)
    }
    if (On(a))
        return function(i) {
            var s = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : []
              , l = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 1
              , u = Ke(i, s)
              , d = Object.keys(u).slice();
            d.sort( (v, p) => l * Yv(v, p));
            var c = {};
            return d.forEach(v => c[v] = u[v]),
            [{
                op: "replace",
                path: Tt(s),
                value: c
            }]
        }(e, t, o);
    throw new Error("Cannot sort: no array or object")
}
ju(["click"]);
kt(`/* over all fonts, sizes, and colors */
/* "consolas" for Windows, "menlo" for Mac with fallback to "monaco", 'Ubuntu Mono' for Ubuntu */
/* (at Mac this font looks too large at 14px, but 13px is too small for the font on Windows) */
/* main, menu, modal */
/* jsoneditor modal */
/* tooltip in text mode */
/* panels: navigation bar, gutter, search box */
/* navigation-bar */
/* context menu */
/* contents: json key and values */
/* contents: selected or hovered */
/* contents: section of collapsed items in an array */
/* contents: highlighting of search matches */
/* contents: inline tags inside the JSON document */
/* contents: table */
/* controls in modals: inputs, buttons, and \`a\` */
/* messages */
/* svelte-select */
/* color picker */
.jse-navigation-bar-dropdown.svelte-2nnd2m {
  position: absolute;
  top: 100%;
  left: 0;
  z-index: 3;
  background: var(--jse-navigation-bar-background, var(--jse-background-color, #fff));
  color: var(--jse-navigation-bar-dropdown-color, #656565);
  box-shadow: var(--jse-controls-box-shadow, 0 2px 6px 0 rgba(0, 0, 0, 0.24));
  display: flex;
  flex-direction: column;
  max-height: 300px;
  overflow: auto;
  min-width: 80px;
}
.jse-navigation-bar-dropdown.svelte-2nnd2m button.jse-navigation-bar-dropdown-item:where(.svelte-2nnd2m) {
  font-family: var(--jse-font-family-mono, consolas, menlo, monaco, "Ubuntu Mono", "source-code-pro", monospace);
  font-size: var(--jse-font-size-mono, 14px);
  border: none;
  background: transparent;
  color: inherit;
  cursor: pointer;
  outline: none;
  text-align: left;
  white-space: nowrap;
  box-sizing: border-box;
  padding: calc(0.5 * var(--jse-padding, 10px)) 36px;
}
.jse-navigation-bar-dropdown.svelte-2nnd2m button.jse-navigation-bar-dropdown-item:where(.svelte-2nnd2m):focus, .jse-navigation-bar-dropdown.svelte-2nnd2m button.jse-navigation-bar-dropdown-item:where(.svelte-2nnd2m):hover {
  background: var(--jse-navigation-bar-background-highlight, #e5e5e5);
}
.jse-navigation-bar-dropdown.svelte-2nnd2m button.jse-navigation-bar-dropdown-item.jse-selected:where(.svelte-2nnd2m) {
  background: var(--jse-navigation-bar-dropdown-color, #656565);
  color: var(--jse-navigation-bar-background, var(--jse-background-color, #fff));
}`);
var Rz = K('<button type="button"> </button>')
  , Mz = K('<button type="button" class="jse-navigation-bar-dropdown-item svelte-2nnd2m">...</button>')
  , Pz = K('<div class="jse-navigation-bar-dropdown svelte-2nnd2m"><!> <!></div>');
function zz(e, t) {
    it(t, !1);
    var n = g(t, "items", 9)
      , o = g(t, "selectedItem", 9)
      , a = g(t, "onSelect", 9);
    Rt(!0);
    var i = Pz()
      , s = z(i);
    wr(s, 1, () => (b(mc),
    b(n()),
    N( () => mc(n(), 100))), d => d, (d, c) => {
        var v, p = Rz(), f = z(p);
        Ee( (m, x, y) => {
            v = At(p, 1, "jse-navigation-bar-dropdown-item svelte-2nnd2m", null, v, m),
            zn(p, "title", x),
            lt(f, y)
        }
        , [ () => ({
            "jse-selected": r(c) === o()
        }), () => (r(c),
        N( () => r(c).toString())), () => (b(Na),
        r(c),
        N( () => Na(r(c).toString(), 30)))], pe),
        me("click", p, Ta( () => a()(r(c)))),
        L(d, p)
    }
    );
    var l = B(s, 2)
      , u = d => {
        var c = Mz();
        zn(c, "title", "Limited to 100 items"),
        L(d, c)
    }
    ;
    ie(l, d => {
        b(n()),
        N( () => n().length > 100) && d(u)
    }
    ),
    L(e, i),
    st()
}
kt(`/* over all fonts, sizes, and colors */
/* "consolas" for Windows, "menlo" for Mac with fallback to "monaco", 'Ubuntu Mono' for Ubuntu */
/* (at Mac this font looks too large at 14px, but 13px is too small for the font on Windows) */
/* main, menu, modal */
/* jsoneditor modal */
/* tooltip in text mode */
/* panels: navigation bar, gutter, search box */
/* navigation-bar */
/* context menu */
/* contents: json key and values */
/* contents: selected or hovered */
/* contents: section of collapsed items in an array */
/* contents: highlighting of search matches */
/* contents: inline tags inside the JSON document */
/* contents: table */
/* controls in modals: inputs, buttons, and \`a\` */
/* messages */
/* svelte-select */
/* color picker */
.jse-navigation-bar-item.svelte-752ro1 {
  position: relative;
  display: flex;
}
.jse-navigation-bar-item.svelte-752ro1 button.jse-navigation-bar-button:where(.svelte-752ro1) {
  font-family: inherit;
  font-size: inherit;
  padding: calc(0.5 * var(--jse-padding, 10px)) 2px;
  border: none;
  background: transparent;
  color: inherit;
  cursor: pointer;
  outline: none;
  min-width: 2em;
  white-space: nowrap;
}
.jse-navigation-bar-item.svelte-752ro1 button.jse-navigation-bar-button:where(.svelte-752ro1):focus, .jse-navigation-bar-item.svelte-752ro1 button.jse-navigation-bar-button:where(.svelte-752ro1):hover {
  background: var(--jse-panel-button-background-highlight, #e0e0e0);
  color: var(--panel-button-color-highlight, var(--jse-text-color, #4d4d4d));
}
.jse-navigation-bar-item.svelte-752ro1 button.jse-navigation-bar-button.jse-navigation-bar-arrow:where(.svelte-752ro1) {
  padding: 2px var(--jse-padding, 10px) 0;
}
.jse-navigation-bar-item.svelte-752ro1 button.jse-navigation-bar-button.jse-navigation-bar-arrow.jse-open:where(.svelte-752ro1) {
  background: var(--jse-navigation-bar-background, var(--jse-background-color, #fff));
  color: var(--jse-navigation-bar-dropdown-color, #656565);
}
.jse-navigation-bar-item.svelte-752ro1:last-child {
  padding-right: var(--jse-padding, 10px);
}`);
var Tz = K('<button type="button" class="jse-navigation-bar-button svelte-752ro1"> </button>')
  , Iz = K('<div class="jse-navigation-bar-item svelte-752ro1"><button type="button"><!></button> <!></div>');
function Ug(e, t) {
    it(t, !1);
    var n, o = T(void 0, !0), a = T(void 0, !0), {openAbsolutePopup: i, closeAbsolutePopup: s} = Pi("absolute-popup"), l = g(t, "path", 9), u = g(t, "index", 9), d = g(t, "onSelect", 9), c = g(t, "getItems", 9), v = T(void 0, !0), p = T(!1, !0);
    function f(P) {
        s(n),
        d()(r(o).concat(P))
    }
    V( () => (b(l()),
    b(u())), () => {
        h(o, l().slice(0, u()))
    }
    ),
    V( () => (b(l()),
    b(u())), () => {
        h(a, l()[u()])
    }
    ),
    An(),
    Rt(!0);
    var m, x = Iz(), y = z(x);
    fn(z(y), {
        get data() {
            return _m
        }
    });
    var w = B(y, 2)
      , S = P => {
        var R = Tz()
          , k = z(R);
        Ee( () => lt(k, r(a))),
        me("click", R, () => f(r(a))),
        L(P, R)
    }
    ;
    ie(w, P => {
        r(a) !== void 0 && P(S)
    }
    ),
    nr(x, P => h(v, P), () => r(v)),
    Ee(P => m = At(y, 1, "jse-navigation-bar-button jse-navigation-bar-arrow svelte-752ro1", null, m, P), [ () => ({
        "jse-open": r(p)
    })], pe),
    me("click", y, function() {
        if (r(v)) {
            h(p, !0);
            var P = {
                items: c()(r(o)),
                selectedItem: r(a),
                onSelect: f
            };
            n = i(zz, P, {
                anchor: r(v),
                closeOnOuterClick: !0,
                onClose: () => {
                    h(p, !1)
                }
            })
        }
    }),
    L(e, x),
    st()
}
function qp(e) {
    var t, n;
    if (navigator.clipboard)
        return navigator.clipboard.writeText(e);
    if ((t = (n = document).queryCommandSupported) !== null && t !== void 0 && t.call(n, "copy")) {
        var o = document.createElement("textarea");
        o.value = e,
        o.style.position = "fixed",
        o.style.opacity = "0",
        document.body.appendChild(o),
        o.select();
        try {
            document.execCommand("copy")
        } catch (a) {
            console.error(a)
        } finally {
            document.body.removeChild(o)
        }
        return Promise.resolve()
    }
    return console.error("Copy failed."),
    Promise.resolve()
}
kt(`/* over all fonts, sizes, and colors */
/* "consolas" for Windows, "menlo" for Mac with fallback to "monaco", 'Ubuntu Mono' for Ubuntu */
/* (at Mac this font looks too large at 14px, but 13px is too small for the font on Windows) */
/* main, menu, modal */
/* jsoneditor modal */
/* tooltip in text mode */
/* panels: navigation bar, gutter, search box */
/* navigation-bar */
/* context menu */
/* contents: json key and values */
/* contents: selected or hovered */
/* contents: section of collapsed items in an array */
/* contents: highlighting of search matches */
/* contents: inline tags inside the JSON document */
/* contents: table */
/* controls in modals: inputs, buttons, and \`a\` */
/* messages */
/* svelte-select */
/* color picker */
.jse-navigation-bar-path-editor.svelte-zc2wx7 {
  flex: 1;
  display: flex;
  border: var(--jse-edit-outline, 2px solid #656565);
  background: var(--jse-background-color, #fff);
}
.jse-navigation-bar-path-editor.svelte-zc2wx7 input.jse-navigation-bar-text:where(.svelte-zc2wx7) {
  flex: 1;
  font-family: inherit;
  font-size: inherit;
  padding: 0 5px 1px;
  background: var(--jse-background-color, #fff);
  color: var(--jse-text-color, #4d4d4d);
  border: none;
  outline: none;
}
.jse-navigation-bar-path-editor.svelte-zc2wx7 button:where(.svelte-zc2wx7) {
  border: none;
  background: var(--jse-background-color, #fff);
  cursor: pointer;
  font-family: inherit;
  font-size: 80%;
  color: inherit;
}
.jse-navigation-bar-path-editor.svelte-zc2wx7 button.jse-navigation-bar-copy.copied:where(.svelte-zc2wx7) {
  color: var(--message-success-background, #9ac45d);
}
.jse-navigation-bar-path-editor.svelte-zc2wx7 button.jse-navigation-bar-validation-error:where(.svelte-zc2wx7) {
  color: var(--jse-error-color, #ee5341);
}
.jse-navigation-bar-path-editor.error.svelte-zc2wx7 {
  border-color: var(--jse-error-color, #ee5341);
}
.jse-navigation-bar-path-editor.error.svelte-zc2wx7 input.jse-navigation-bar-text:where(.svelte-zc2wx7) {
  color: var(--jse-error-color, #ee5341);
}
.jse-navigation-bar-path-editor.svelte-zc2wx7 .jse-copied-text:where(.svelte-zc2wx7) {
  background: var(--message-success-background, #9ac45d);
  color: var(--jse-message-success-color, #fff);
  position: relative;
  margin: 2px;
  padding: 0 5px;
  border-radius: 3px;
}`);
var Nz = K('<button type="button" class="jse-navigation-bar-validation-error svelte-zc2wx7"><!></button>')
  , Lz = K('<div class="jse-copied-text svelte-zc2wx7">Copied!</div>')
  , Uz = K('<div><input type="text" class="jse-navigation-bar-text svelte-zc2wx7"/> <!> <!> <button type="button" title="Copy selected path to the clipboard"><!></button></div>');
function Dz(e, t) {
    it(t, !1);
    var n = T()
      , o = Pi("absolute-popup")
      , a = g(t, "path", 8)
      , i = g(t, "pathParser", 8)
      , s = g(t, "onChange", 8)
      , l = g(t, "onClose", 8)
      , u = g(t, "onError", 8)
      , d = g(t, "pathExists", 8)
      , c = T()
      , v = T()
      , p = T(!1)
      , f = void 0
      , m = T(!1);
    function x() {
        r(c).focus()
    }
    function y(Z) {
        try {
            var ae = i().parse(Z);
            return function(ee) {
                if (!d()(ee))
                    throw new Error("Path does not exist in current document")
            }(ae),
            {
                path: ae,
                error: void 0
            }
        } catch (ee) {
            return {
                path: void 0,
                error: ee
            }
        }
    }
    ao( () => {
        x()
    }
    ),
    Vo( () => {
        clearTimeout(f)
    }
    ),
    V( () => (b(i()),
    b(a())), () => {
        h(v, i().stringify(a()))
    }
    ),
    V( () => (r(p),
    r(v)), () => {
        h(n, r(p) ? y(r(v)).error : void 0)
    }
    ),
    An(),
    Rt();
    var w, S = Uz(), P = z(S);
    nr(P, Z => h(c, Z), () => r(c));
    var R = B(P, 2)
      , k = Z => {
        var ae = Nz();
        fn(z(ae), {
            get data() {
                return Yi
            }
        }),
        lo(ae, (ee, se) => Xs?.(ee, se), () => ke({
            text: String(r(n) || "")
        }, o)),
        L(Z, ae)
    }
    ;
    ie(R, Z => {
        r(n) && Z(k)
    }
    );
    var I = B(R, 2)
      , H = Z => {
        L(Z, Lz())
    }
    ;
    ie(I, Z => {
        r(m) && Z(H)
    }
    );
    var Y, M = B(I, 2);
    fn(z(M), {
        get data() {
            return si
        }
    }),
    Ee( (Z, ae) => {
        w = At(S, 1, "jse-navigation-bar-path-editor svelte-zc2wx7", null, w, Z),
        Zi(P, r(v)),
        Y = At(M, 1, "jse-navigation-bar-copy svelte-zc2wx7", null, Y, ae)
    }
    , [ () => ({
        error: r(n)
    }), () => ({
        copied: r(m)
    })], pe),
    me("keydown", P, Ta(function(Z) {
        var ae = Ja(Z);
        if (ae === "Escape" && (Z.preventDefault(),
        l()()),
        ae === "Enter") {
            Z.preventDefault(),
            h(p, !0);
            var ee = y(r(v));
            ee.path !== void 0 ? s()(ee.path) : u()(ee.error)
        }
    })),
    me("input", P, function(Z) {
        h(v, Z.currentTarget.value)
    }),
    me("click", M, function() {
        qp(r(v)),
        h(m, !0),
        f = window.setTimeout( () => h(m, !1), 1e3),
        x()
    }),
    L(e, S),
    st()
}
kt(`/* over all fonts, sizes, and colors */
/* "consolas" for Windows, "menlo" for Mac with fallback to "monaco", 'Ubuntu Mono' for Ubuntu */
/* (at Mac this font looks too large at 14px, but 13px is too small for the font on Windows) */
/* main, menu, modal */
/* jsoneditor modal */
/* tooltip in text mode */
/* panels: navigation bar, gutter, search box */
/* navigation-bar */
/* context menu */
/* contents: json key and values */
/* contents: selected or hovered */
/* contents: section of collapsed items in an array */
/* contents: highlighting of search matches */
/* contents: inline tags inside the JSON document */
/* contents: table */
/* controls in modals: inputs, buttons, and \`a\` */
/* messages */
/* svelte-select */
/* color picker */
.jse-navigation-bar.svelte-xs03gj {
  font-family: var(--jse-font-family-mono, consolas, menlo, monaco, "Ubuntu Mono", "source-code-pro", monospace);
  font-size: var(--jse-font-size-mono, 14px);
  background: var(--jse-panel-background, #ebebeb);
  color: var(--jse-panel-button-color, inherit);
  padding: 0;
  margin: 0;
  display: flex;
  overflow: auto;
  border-left: var(--jse-main-border, 1px solid #d7d7d7);
  border-right: var(--jse-main-border, 1px solid #d7d7d7);
}
.jse-navigation-bar.svelte-xs03gj .jse-navigation-bar-edit:where(.svelte-xs03gj) {
  font-family: var(--jse-font-family-mono, consolas, menlo, monaco, "Ubuntu Mono", "source-code-pro", monospace);
  font-size: var(--jse-font-size-mono, 14px);
  padding: calc(0.5 * var(--jse-padding, 10px)) var(--jse-padding, 10px);
  color: var(--jse-panel-color-readonly, #b2b2b2);
  background: transparent;
  border: none;
  display: flex;
  cursor: pointer;
  outline: none;
  align-items: center;
}
.jse-navigation-bar.svelte-xs03gj .jse-navigation-bar-edit.flex:where(.svelte-xs03gj) {
  flex: 1;
}
.jse-navigation-bar.svelte-xs03gj .jse-navigation-bar-edit:where(.svelte-xs03gj):focus, .jse-navigation-bar.svelte-xs03gj .jse-navigation-bar-edit:where(.svelte-xs03gj):hover, .jse-navigation-bar.svelte-xs03gj .jse-navigation-bar-edit.editing:where(.svelte-xs03gj) {
  background: var(--jse-panel-button-background-highlight, #e0e0e0);
  color: var(--panel-button-color-highlight, var(--jse-text-color, #4d4d4d));
  transition: color 0.2s ease-in, background 0.2s ease-in;
}
.jse-navigation-bar.svelte-xs03gj .jse-navigation-bar-edit:where(.svelte-xs03gj) .jse-navigation-bar-space:where(.svelte-xs03gj) {
  flex: 1;
  text-align: left;
}`);
var qz = K("<!> <!>", 1)
  , $z = K('<div class="jse-navigation-bar svelte-xs03gj"><!> <button type="button"><span class="jse-navigation-bar-space svelte-xs03gj"> </span> <!></button></div>');
function Fz(e, t) {
    it(t, !1);
    var n = T(void 0, !0)
      , o = T(void 0, !0)
      , a = Hr("jsoneditor:NavigationBar")
      , i = g(t, "json", 9)
      , s = g(t, "selection", 9)
      , l = g(t, "onSelect", 9)
      , u = g(t, "onError", 9)
      , d = g(t, "pathParser", 9)
      , c = T(void 0, !0)
      , v = T(!1, !0);
    function p(ae) {
        a("get items for path", ae);
        var ee = Ke(i(), ae);
        if (Array.isArray(ee))
            return Nc(0, ee.length).map(String);
        if (On(ee)) {
            var se = Object.keys(ee).slice(0);
            return se.sort(Yv),
            se
        }
        return []
    }
    function f(ae) {
        return Ia(i(), ae)
    }
    function m(ae) {
        a("select path", JSON.stringify(ae)),
        l()(io(ae, ae))
    }
    function x() {
        h(v, !1)
    }
    function y(ae) {
        x(),
        m(ae)
    }
    V( () => (b(s()),
    Qe), () => {
        h(n, s() ? Qe(s()) : [])
    }
    ),
    V( () => (b(i()),
    r(n)), () => {
        h(o, xr(Ke(i(), r(n))))
    }
    ),
    V( () => r(n), () => {
        r(n),
        setTimeout( () => {
            if (r(c) && r(c).scrollTo) {
                var ae = r(c).scrollWidth - r(c).clientWidth;
                ae > 0 && (a("scrollTo ", ae),
                r(c).scrollTo({
                    left: ae,
                    behavior: "smooth"
                }))
            }
        }
        )
    }
    ),
    An(),
    Rt(!0);
    var w = $z()
      , S = z(w)
      , P = ae => {
        var ee = qz()
          , se = ht(ee);
        wr(se, 1, () => r(n), Rr, (Oe, De, Ne) => {
            Ug(Oe, {
                getItems: p,
                get path() {
                    return r(n)
                },
                index: Ne,
                onSelect: m
            })
        }
        );
        var _e = B(se, 2)
          , fe = Oe => {
            Ug(Oe, {
                getItems: p,
                get path() {
                    return r(n)
                },
                get index() {
                    return r(n),
                    N( () => r(n).length)
                },
                onSelect: m
            })
        }
        ;
        ie(_e, Oe => {
            r(o) && Oe(fe)
        }
        ),
        L(ae, ee)
    }
      , R = ae => {
        Dz(ae, {
            get path() {
                return r(n)
            },
            onClose: x,
            onChange: y,
            get onError() {
                return u()
            },
            pathExists: f,
            get pathParser() {
                return d()
            }
        })
    }
    ;
    ie(S, ae => {
        r(v) ? ae(R, !1) : ae(P)
    }
    );
    var k, I = B(S, 2), H = z(I), Y = z(H), M = B(H, 2), Z = pe( () => r(v) ? qk : $k);
    fn(M, {
        get data() {
            return r(Z)
        }
    }),
    nr(w, ae => h(c, ae), () => r(c)),
    Ee( (ae, ee) => {
        k = At(I, 1, "jse-navigation-bar-edit svelte-xs03gj", null, k, ae),
        zn(I, "title", r(v) ? "Cancel editing the selected path" : "Edit the selected path"),
        lt(Y, ee)
    }
    , [ () => ({
        flex: !r(v),
        editing: r(v)
    }), () => (b(xr),
    b(i()),
    r(v),
    N( () => xr(i()) || r(v) ? " " : "Navigation bar"))], pe),
    me("click", I, function() {
        h(v, !r(v))
    }),
    L(e, w),
    st()
}
kt(`/* over all fonts, sizes, and colors */
/* "consolas" for Windows, "menlo" for Mac with fallback to "monaco", 'Ubuntu Mono' for Ubuntu */
/* (at Mac this font looks too large at 14px, but 13px is too small for the font on Windows) */
/* main, menu, modal */
/* jsoneditor modal */
/* tooltip in text mode */
/* panels: navigation bar, gutter, search box */
/* navigation-bar */
/* context menu */
/* contents: json key and values */
/* contents: selected or hovered */
/* contents: section of collapsed items in an array */
/* contents: highlighting of search matches */
/* contents: inline tags inside the JSON document */
/* contents: table */
/* controls in modals: inputs, buttons, and \`a\` */
/* messages */
/* svelte-select */
/* color picker */
.jse-search-box.svelte-1mxl2uo {
  border: var(--jse-panel-border, var(--jse-main-border, 1px solid #d7d7d7));
  border-radius: 3px;
  font-family: var(--jse-font-family, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif);
  font-size: var(--jse-font-size, 16px);
  background: var(--jse-panel-background, #ebebeb);
  color: var(--jse-panel-color-readonly, #b2b2b2);
  box-shadow: var(--jse-controls-box-shadow, 0 2px 6px 0 rgba(0, 0, 0, 0.24));
  display: inline-block;
  width: 400px;
  max-width: 100%;
  overflow: auto;
}
.jse-search-box.svelte-1mxl2uo .jse-search-form:where(.svelte-1mxl2uo) {
  display: flex;
  align-items: stretch;
}
.jse-search-box.svelte-1mxl2uo .jse-search-form:where(.svelte-1mxl2uo) button:where(.svelte-1mxl2uo),
.jse-search-box.svelte-1mxl2uo .jse-search-form:where(.svelte-1mxl2uo) input:where(.svelte-1mxl2uo) {
  font-family: inherit;
  font-size: inherit;
}
.jse-search-box.svelte-1mxl2uo .jse-search-form:where(.svelte-1mxl2uo) button:where(.svelte-1mxl2uo) {
  display: block;
  text-align: center;
  border: none;
  padding: 0 5px;
  margin: 0;
  cursor: pointer;
  color: var(--jse-panel-button-color, inherit);
  background: var(--jse-panel-button-background, transparent);
}
.jse-search-box.svelte-1mxl2uo .jse-search-form:where(.svelte-1mxl2uo) button:where(.svelte-1mxl2uo):hover {
  color: var(--panel-button-color-highlight, var(--jse-text-color, #4d4d4d));
  background: var(--jse-panel-button-background-highlight, #e0e0e0);
}
.jse-search-box.svelte-1mxl2uo .jse-search-form:where(.svelte-1mxl2uo) input:where(.svelte-1mxl2uo) {
  color: var(--jse-panel-color, var(--jse-text-color, #4d4d4d));
  border: var(--jse-input-border, 1px solid #d8dbdf);
  border-radius: 3px;
  background: var(--jse-input-background, var(--jse-background-color, #fff));
  height: 28px;
  padding: 0 5px;
  margin: 0;
  flex: 1;
  width: 0;
  min-width: 50px;
  outline: none;
}
.jse-search-box.svelte-1mxl2uo .jse-search-form:where(.svelte-1mxl2uo) .jse-replace-toggle:where(.svelte-1mxl2uo) {
  padding: var(--jse-padding, 10px) calc(0.5 * var(--jse-padding, 10px));
  min-width: 20px;
  background: var(--jse-panel-button-background-highlight, #e0e0e0);
}
.jse-search-box.svelte-1mxl2uo .jse-search-form:where(.svelte-1mxl2uo) .jse-search-contents:where(.svelte-1mxl2uo) {
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: calc(0.5 * var(--jse-padding, 10px));
  gap: calc(0.5 * var(--jse-padding, 10px));
}
.jse-search-box.svelte-1mxl2uo .jse-search-form:where(.svelte-1mxl2uo) .jse-search-contents:where(.svelte-1mxl2uo) .jse-search-section:where(.svelte-1mxl2uo) {
  flex: 1;
  display: flex;
  align-items: center;
  position: relative;
}
.jse-search-box.svelte-1mxl2uo .jse-search-form:where(.svelte-1mxl2uo) .jse-search-contents:where(.svelte-1mxl2uo) .jse-search-section:where(.svelte-1mxl2uo) .jse-search-icon:where(.svelte-1mxl2uo) {
  color: inherit;
  cursor: inherit;
  background: inherit;
  width: 32px;
  text-align: center;
}
.jse-search-box.svelte-1mxl2uo .jse-search-form:where(.svelte-1mxl2uo) .jse-search-contents:where(.svelte-1mxl2uo) .jse-search-section:where(.svelte-1mxl2uo) label.jse-search-input-label:where(.svelte-1mxl2uo) {
  flex: 1;
  display: flex;
}
.jse-search-box.svelte-1mxl2uo .jse-search-form:where(.svelte-1mxl2uo) .jse-search-contents:where(.svelte-1mxl2uo) .jse-search-section:where(.svelte-1mxl2uo) .jse-search-count:where(.svelte-1mxl2uo) {
  color: inherit;
  font-size: 80%;
  visibility: hidden;
  padding: 0 5px;
  min-width: 36px;
  text-align: center;
}
.jse-search-box.svelte-1mxl2uo .jse-search-form:where(.svelte-1mxl2uo) .jse-search-contents:where(.svelte-1mxl2uo) .jse-search-section:where(.svelte-1mxl2uo) .jse-search-count.jse-visible:where(.svelte-1mxl2uo) {
  visibility: visible;
}
.jse-search-box.svelte-1mxl2uo .jse-search-form:where(.svelte-1mxl2uo) .jse-search-contents:where(.svelte-1mxl2uo) .jse-replace-section:where(.svelte-1mxl2uo) {
  flex: 1;
  display: flex;
  padding-left: 32px;
}
.jse-search-box.svelte-1mxl2uo .jse-search-form:where(.svelte-1mxl2uo) .jse-search-contents:where(.svelte-1mxl2uo) .jse-replace-section:where(.svelte-1mxl2uo) button:where(.svelte-1mxl2uo) {
  width: auto;
}`);
var Bz = K('<button type="button" class="jse-replace-toggle svelte-1mxl2uo" title="Toggle visibility of replace options (Ctrl+H)"><!></button>')
  , Wz = K('<div class="jse-replace-section svelte-1mxl2uo"><input class="jse-replace-input svelte-1mxl2uo" title="Enter replacement text" type="text" placeholder="Replace"/> <button type="button" title="Replace current occurrence (Ctrl+Enter)" class="svelte-1mxl2uo">Replace</button> <button type="button" title="Replace all occurrences" class="svelte-1mxl2uo">All</button></div>')
  , Hz = K('<div class="jse-search-box svelte-1mxl2uo"><form class="jse-search-form svelte-1mxl2uo"><!> <div class="jse-search-contents svelte-1mxl2uo"><div class="jse-search-section svelte-1mxl2uo"><div class="jse-search-icon svelte-1mxl2uo"><!></div> <label class="jse-search-input-label svelte-1mxl2uo" about="jse-search input"><input class="jse-search-input svelte-1mxl2uo" title="Enter text to search" type="text" placeholder="Find"/></label> <div> </div> <button type="button" class="jse-search-next svelte-1mxl2uo" title="Go to next search result (Enter)"><!></button> <button type="button" class="jse-search-previous svelte-1mxl2uo" title="Go to previous search result (Shift+Enter)"><!></button> <button type="button" class="jse-search-clear svelte-1mxl2uo" title="Close search box (Esc)"><!></button></div> <!></div></form></div>');
function x1(e, t) {
    it(t, !1);
    var n = T(void 0, !0)
      , o = T(void 0, !0)
      , a = T(void 0, !0)
      , i = Hr("jsoneditor:SearchBox")
      , s = g(t, "json", 9)
      , l = g(t, "documentState", 9)
      , u = g(t, "parser", 9)
      , d = g(t, "showSearch", 9)
      , c = g(t, "showReplace", 13)
      , v = g(t, "readOnly", 9)
      , p = g(t, "columns", 9)
      , f = g(t, "onSearch", 9)
      , m = g(t, "onFocus", 9)
      , x = g(t, "onPatch", 9)
      , y = g(t, "onClose", 9)
      , w = T("", !0)
      , S = ""
      , P = T("", !0)
      , R = T(!1, !0)
      , k = T(void 0, !0)
      , I = Gi(function(ne) {
        return ye.apply(this, arguments)
    }, 300)
      , H = Gi(function(ne) {
        return ct.apply(this, arguments)
    }, 300);
    function Y() {
        c(!c() && !v())
    }
    function M(ne) {
        ne.stopPropagation();
        var Be = Ja(ne);
        Be === "Enter" && (ne.preventDefault(),
        r(w) !== S ? I.flush() : Ne()),
        Be === "Shift+Enter" && (ne.preventDefault(),
        Ae()),
        Be === "Ctrl+Enter" && (ne.preventDefault(),
        c() ? se() : Ne()),
        Be === "Ctrl+H" && (ne.preventDefault(),
        Y()),
        Be === "Escape" && (ne.preventDefault(),
        D())
    }
    function Z(ne) {
        Ja(ne) === "Enter" && (ne.preventDefault(),
        ne.stopPropagation(),
        se())
    }
    function ae() {
        return ee.apply(this, arguments)
    }
    function ee() {
        return (ee = wt(function*() {
            tr(),
            yield I.flush()
        })).apply(this, arguments)
    }
    function se() {
        return _e.apply(this, arguments)
    }
    function _e() {
        return (_e = wt(function*() {
            var ne;
            if (!v()) {
                var Be = (ne = r(k)) === null || ne === void 0 ? void 0 : ne.activeItem;
                if (i("handleReplace", {
                    replaceText: r(P),
                    activeItem: Be
                }),
                r(k) && Be && s() !== void 0) {
                    h(k, ke(ke({}, xg(r(k))), {}, {
                        activeIndex: r(o)
                    }));
                    var {operations: J, newSelection: U} = oM(s(), l(), r(P), Be, u());
                    x()(J, (_t, nt) => ({
                        state: nt,
                        selection: U
                    })),
                    tr(),
                    yield H.flush(),
                    yield Ve()
                }
            }
        })).apply(this, arguments)
    }
    function fe() {
        return Oe.apply(this, arguments)
    }
    function Oe() {
        return (Oe = wt(function*() {
            if (!v()) {
                i("handleReplaceAll", {
                    text: r(w),
                    replaceText: r(P)
                });
                var {operations: ne, newSelection: Be} = function(J, U, _t, nt, Se) {
                    for (var mt = jg(_t, J, {
                        maxResults: 1 / 0
                    }), Fe = [], $e = 0; $e < mt.length; $e++) {
                        var Lt = mt[$e - 1]
                          , We = mt[$e];
                        $e !== 0 && We.field === Lt.field && Wt(We.path, Lt.path) ? gt(Fe).items.push(We) : Fe.push({
                            path: We.path,
                            field: We.field,
                            items: [We]
                        })
                    }
                    Fe.sort( (C, A) => C.field !== A.field ? C.field === oa.key ? 1 : -1 : A.path.length - C.path.length);
                    var $t, j = [];
                    return Fe.forEach(C => {
                        var {field: A, path: $, items: re} = C;
                        if (A === oa.key) {
                            var Ce = rn($)
                              , ze = Ke(J, Ce)
                              , oe = gt($)
                              , Q = Cu(Ce, Object.keys(ze), oe, wg(oe, nt, re));
                            j = j.concat(Q),
                            $t = Ys(J, Q)
                        } else {
                            if (A !== oa.value)
                                throw new Error("Cannot replace: unknown type of search result field ".concat(A));
                            var dt = Ke(J, $);
                            if (dt === void 0)
                                throw new Error("Cannot replace: path not found ".concat(Tt($)));
                            var Ye = typeof dt == "string" ? dt : String(dt)
                              , he = ya(J, U, $)
                              , ft = wg(Ye, nt, re)
                              , Zt = [{
                                op: "replace",
                                path: Tt($),
                                value: he ? ft : gl(ft, Se)
                            }];
                            j = j.concat(Zt),
                            $t = Ys(J, Zt)
                        }
                    }
                    ),
                    {
                        operations: j,
                        newSelection: $t
                    }
                }(s(), l(), r(w), r(P), u());
                x()(ne, (J, U) => ({
                    state: U,
                    selection: Be
                })),
                yield Ve()
            }
        })).apply(this, arguments)
    }
    function De(ne) {
        ne.select()
    }
    function Ne() {
        return je.apply(this, arguments)
    }
    function je() {
        return (je = wt(function*() {
            h(k, r(k) ? xg(r(k)) : void 0),
            yield Ve()
        })).apply(this, arguments)
    }
    function Ae() {
        return Pe.apply(this, arguments)
    }
    function Pe() {
        return Pe = wt(function*() {
            h(k, r(k) ? function(ne) {
                var Be = ne.activeIndex > 0 ? ne.activeIndex - 1 : ne.items.length - 1
                  , J = ne.items[Be]
                  , U = ne.items.map( (_t, nt) => ke(ke({}, _t), {}, {
                    active: nt === Be
                }));
                return ke(ke({}, ne), {}, {
                    items: U,
                    activeItem: J,
                    activeIndex: Be
                })
            }(r(k)) : void 0),
            yield Ve()
        }),
        Pe.apply(this, arguments)
    }
    function Ve() {
        return ge.apply(this, arguments)
    }
    function ge() {
        return (ge = wt(function*() {
            var ne;
            i("handleFocus", r(k));
            var Be = (ne = r(k)) === null || ne === void 0 ? void 0 : ne.activeItem;
            Be && s() !== void 0 && (yield m()(Be.path, Be.resultIndex))
        })).apply(this, arguments)
    }
    function de() {
        return de = wt(function*(ne) {
            yield qt(ne, r(w), s())
        }),
        de.apply(this, arguments)
    }
    function ye() {
        return ye = wt(function*(ne) {
            yield qt(d(), ne, s()),
            yield Ve()
        }),
        ye.apply(this, arguments)
    }
    function ct() {
        return ct = wt(function*(ne) {
            yield qt(d(), r(w), ne)
        }),
        ct.apply(this, arguments)
    }
    function qt(ne, Be, J) {
        return X.apply(this, arguments)
    }
    function X() {
        return X = wt(function*(ne, Be, J) {
            return ne ? (i("applySearch", {
                showSearch: ne,
                text: Be
            }),
            Be === "" ? (i("clearing search result"),
            r(k) !== void 0 && h(k, void 0),
            Promise.resolve()) : (S = Be,
            h(R, !0),
            new Promise(U => {
                setTimeout( () => {
                    var _t = jg(Be, J, {
                        maxResults: Hd,
                        columns: p()
                    });
                    h(k, function(nt, Se) {
                        var mt = Se != null && Se.activeItem ? kg(Se.activeItem) : void 0
                          , Fe = nt.findIndex(We => Wt(mt, kg(We)))
                          , $e = Fe !== -1 ? Fe : Se?.activeIndex !== void 0 && Se?.activeIndex < nt.length ? Se?.activeIndex : nt.length > 0 ? 0 : -1
                          , Lt = nt.map( (We, $t) => ke(ke({
                            resultIndex: $t
                        }, We), {}, {
                            active: $t === $e
                        }));
                        return {
                            items: Lt,
                            activeItem: Lt[$e],
                            activeIndex: $e
                        }
                    }(_t, r(k))),
                    h(R, !1),
                    U()
                }
                )
            }
            ))) : (r(k) && h(k, void 0),
            Promise.resolve())
        }),
        X.apply(this, arguments)
    }
    function D() {
        i("handleClose"),
        I.cancel(),
        H.cancel(),
        qt(!1, r(w), s()),
        y()()
    }
    V( () => r(k), () => {
        var ne;
        h(n, ((ne = r(k)) === null || ne === void 0 || (ne = ne.items) === null || ne === void 0 ? void 0 : ne.length) || 0)
    }
    ),
    V( () => r(k), () => {
        var ne;
        h(o, ((ne = r(k)) === null || ne === void 0 ? void 0 : ne.activeIndex) || 0)
    }
    ),
    V( () => (r(n),
    Hd), () => {
        h(a, r(n) >= Hd ? "".concat(999, "+") : String(r(n)))
    }
    ),
    V( () => (b(f()),
    r(k)), () => {
        f()(r(k))
    }
    ),
    V( () => b(d()), () => {
        (function(ne) {
            de.apply(this, arguments)
        }
        )(d())
    }
    ),
    V( () => r(w), () => {
        I(r(w))
    }
    ),
    V( () => b(s()), () => {
        H(s())
    }
    ),
    An(),
    Rt(!0);
    var le = jr()
      , F = ht(le)
      , we = ne => {
        var Be = Hz()
          , J = z(Be)
          , U = z(J)
          , _t = oe => {
            var Q = Bz()
              , dt = z(Q)
              , Ye = pe( () => c() ? Va : $l);
            fn(dt, {
                get data() {
                    return r(Ye)
                }
            }),
            me("click", Q, Y),
            L(oe, Q)
        }
        ;
        ie(U, oe => {
            v() || oe(_t)
        }
        );
        var nt = z(B(U, 2))
          , Se = z(nt)
          , mt = z(Se)
          , Fe = oe => {
            fn(oe, {
                get data() {
                    return Wk
                },
                spin: !0
            })
        }
          , $e = oe => {
            fn(oe, {
                get data() {
                    return $c
                }
            })
        }
        ;
        ie(mt, oe => {
            r(R) ? oe(Fe) : oe($e, !1)
        }
        );
        var Lt = B(Se, 2)
          , We = z(Lt);
        Gr( () => gc(We, () => r(w), oe => h(w, oe))),
        lo(We, oe => De?.(oe)),
        Gr( () => me("paste", We, ae));
        var $t, j = B(Lt, 2), C = z(j), A = B(j, 2);
        fn(z(A), {
            get data() {
                return Fk
            }
        });
        var $ = B(A, 2);
        fn(z($), {
            get data() {
                return Bk
            }
        });
        var re = B($, 2);
        fn(z(re), {
            get data() {
                return qc
            }
        });
        var Ce = B(nt, 2)
          , ze = oe => {
            var Q = Wz()
              , dt = z(Q)
              , Ye = B(dt, 2)
              , he = B(Ye, 2);
            gc(dt, () => r(P), ft => h(P, ft)),
            me("keydown", dt, Z),
            me("click", Ye, se),
            me("click", he, fe),
            L(oe, Q)
        }
        ;
        ie(Ce, oe => {
            c() && !v() && oe(ze)
        }
        ),
        Ee(oe => {
            var Q;
            $t = At(j, 1, "jse-search-count svelte-1mxl2uo", null, $t, oe),
            lt(C, "".concat(r(o) !== -1 && r(o) < r(n) ? "".concat(r(o) + 1, "/") : "").concat((Q = r(a)) !== null && Q !== void 0 ? Q : ""))
        }
        , [ () => ({
            "jse-visible": r(w) !== ""
        })], pe),
        me("click", A, Ne),
        me("click", $, Ae),
        me("click", re, D),
        me("keydown", J, M),
        L(ne, Be)
    }
    ;
    ie(F, ne => {
        d() && ne(we)
    }
    ),
    L(e, le),
    st()
}
var ou = Symbol("path");
function Vz(e, t) {
    var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 1 / 0
      , o = {};
    Array.isArray(e) && function(i, s, l) {
        if (i.length < s)
            i.forEach(l);
        else
            for (var u = s > 1 ? (i.length - 1) / (s - 1) : i.length, d = 0; d < s; d++) {
                var c = Math.floor(d * u);
                l(i[c], c, i)
            }
    }(e, n, i => {
        On(i) ? j1(i, o, t) : o[ou] = !0
    }
    );
    var a = [];
    return ou in o && a.push([]),
    y1(o, [], a, t),
    a
}
function j1(e, t, n) {
    for (var o in e) {
        var a = e[o]
          , i = t[o] || (t[o] = {});
        On(a) && n ? j1(a, i, n) : i[ou] === void 0 && (i[ou] = !0)
    }
}
function y1(e, t, n, o) {
    for (var a in e) {
        var i = t.concat(a)
          , s = e[a];
        s && s[ou] === !0 && n.push(i),
        $r(s) && o && y1(s, i, n, o)
    }
}
function Gz(e, t, n, o, a, i) {
    for (var s = arguments.length > 6 && arguments[6] !== void 0 ? arguments[6] : 80, l = Lr(n) ? n.length : 0, u = function(S, P) {
        var R = Object.values(S);
        if (vn(R))
            return P;
        var k = (I, H) => I + H;
        return R.reduce(k) / R.length
    }(o, a), d = e - s, c = t + 2 * s, v = S => o[S] || a, p = 0, f = i; f < d && p < l; )
        f += v(p),
        p++;
    p > 0 && (f -= v(--p));
    for (var m = p, x = 0; x < c && m < l; )
        x += v(m),
        m++;
    for (var y = 0, w = m; w < l; w++)
        y += v(w);
    return {
        startIndex: p,
        endIndex: m,
        startHeight: f,
        endHeight: y,
        averageItemHeight: u,
        visibleHeight: x,
        visibleItems: Lr(n) ? n.slice(p, m) : []
    }
}
function Dg(e, t, n, o) {
    for (var {rowIndex: a} = Lo(e, t), i = 0, s = 0; s < a; s++)
        i += n[s] || o;
    return i
}
function Lo(e, t) {
    var [n,...o] = e
      , a = parseInt(n, 10);
    return {
        rowIndex: isNaN(a) ? -1 : a,
        columnIndex: t.findIndex(i => _a(o, i))
    }
}
function Di(e, t) {
    var {rowIndex: n, columnIndex: o} = e;
    return [String(n), ...t[o]]
}
function Jz(e, t) {
    var [n,o] = vf(e, s => mp(s.path[0]))
      , a = df(n, Kz)
      , i = hf(a, s => {
        var l = {
            row: [],
            columns: {}
        };
        return s.forEach(u => {
            var d = function(c, v) {
                var p = Lo(c.path, v);
                return p.columnIndex !== -1 ? p.columnIndex : -1
            }(u, t);
            d !== -1 ? (l.columns[d] === void 0 && (l.columns[d] = []),
            l.columns[d].push(u)) : l.row.push(u)
        }
        ),
        l
    }
    );
    return {
        root: o,
        rows: i
    }
}
function xs(e, t) {
    if (t && t.length !== 0)
        return t.length === 1 ? t[0] : {
            path: e,
            message: "Multiple validation issues: " + t.map(n => xo(n.path) + " " + n.message).join(", "),
            severity: zo.warning
        }
}
function Kz(e) {
    return parseInt(e.path[0], 10)
}
function Yz(e, t, n) {
    var o = t.some(a => function(i, s, l) {
        if (!i)
            return !1;
        if (s.op === "replace") {
            var u = Ao(s.path)
              , {rowIndex: d, columnIndex: c} = Lo(u, l)
              , v = l.findIndex(p => Wt(p, i.path));
            if (d !== -1 && c !== -1 && c !== v)
                return !1
        }
        return !0
    }(e, a, n));
    return o ? void 0 : e
}
var so = Hr("jsoneditor:actions");
function w1(e) {
    return Xv.apply(this, arguments)
}
function Xv() {
    return Xv = wt(function*(e) {
        var {json: t, selection: n, indentation: o, readOnly: a, parser: i, onPatch: s} = e;
        if (!a && t !== void 0 && n && Ps(n)) {
            var l = Gw(t, n, o, i);
            if (l !== void 0) {
                so("cut", {
                    selection: n,
                    clipboard: l,
                    indentation: o
                }),
                yield qp(l);
                var {operations: u, newSelection: d} = Qw(t, n);
                s(u, (c, v) => ({
                    state: v,
                    selection: d
                }))
            }
        }
    }),
    Xv.apply(this, arguments)
}
function k1(e) {
    return Qv.apply(this, arguments)
}
function Qv() {
    return Qv = wt(function*(e) {
        var {json: t, selection: n, indentation: o, parser: a} = e
          , i = Gw(t, n, o, a);
        i !== void 0 && (so("copy", {
            clipboard: i,
            indentation: o
        }),
        yield qp(i))
    }),
    Qv.apply(this, arguments)
}
function _1(e) {
    var {clipboardText: t, json: n, selection: o, readOnly: a, parser: i, onPatch: s, onChangeText: l, onPasteMultilineText: u, openRepairModal: d} = e;
    if (!a)
        try {
            c(t)
        } catch {
            d(t, p => {
                so("repaired pasted text: ", p),
                c(p)
            }
            )
        }
    function c(v) {
        if (n !== void 0) {
            var p = o || nn([])
              , f = Xw(n, p, v, i)
              , m = function(x, y, w) {
                var S = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : YR;
                if (x.length > S)
                    return !1;
                var P = /\n/.test(x);
                if (!P)
                    return !1;
                var R = y.some(I => I.op === "replace" && Array.isArray(I.value))
                  , k = y.filter(I => I.op === "add").length > 1;
                if (!R && !k)
                    return !1;
                try {
                    return wu(x, w.parse),
                    !1
                } catch {
                    return !0
                }
            }(t, f, i);
            so("paste", {
                pastedText: v,
                operations: f,
                ensureSelection: p,
                pasteMultilineText: m
            }),
            s(f, (x, y) => {
                var w = y;
                return f.filter(S => (nf(S) || Tc(S)) && xr(S.value)).forEach(S => {
                    var P = ea(n, S.path);
                    w = ts(x, w, P)
                }
                ),
                {
                    state: w
                }
            }
            ),
            m && u(v)
        } else
            so("paste text", {
                pastedText: v
            }),
            l(t, (x, y) => {
                if (x)
                    return {
                        state: ts(x, y, [])
                    }
            }
            )
    }
}
function S1(e) {
    var {json: t, text: n, selection: o, keepSelection: a, readOnly: i, onChange: s, onPatch: l} = e;
    if (!i && o) {
        var u = t !== void 0 && (Wr(o) || jn(o)) ? io(o.path, o.path) : o;
        if (vn(Qe(o)))
            so("remove root", {
                selection: o
            }),
            s && s({
                text: "",
                json: void 0
            }, t !== void 0 ? {
                text: void 0,
                json: t
            } : {
                text: n || "",
                json: t
            }, {
                contentErrors: void 0,
                patchResult: void 0
            });
        else if (t !== void 0) {
            var {operations: d, newSelection: c} = Qw(t, u);
            so("remove", {
                operations: d,
                selection: o,
                newSelection: c
            }),
            l(d, (v, p) => ({
                state: p,
                selection: a ? o : c
            }))
        }
    }
}
function zc(e) {
    var {insertType: t, selectInside: n, initialValue: o, json: a, selection: i, readOnly: s, parser: l, onPatch: u, onReplaceJson: d} = e;
    if (!s) {
        var c = function(x, y, w) {
            if (w === "object")
                return {};
            if (w === "array")
                return [];
            if (w === "structure" && x !== void 0) {
                var S = y ? Hw(y) : []
                  , P = Ke(x, S);
                if (Array.isArray(P) && !vn(P)) {
                    var R = qo(P);
                    return xr(R) ? pf(R, k => Array.isArray(k) ? [] : On(k) ? void 0 : "") : ""
                }
            }
            return ""
        }(a, i, t);
        if (a !== void 0) {
            var v = l.stringify(c)
              , p = Xw(a, i, v, l);
            so("onInsert", {
                insertType: t,
                operations: p,
                newValue: c,
                data: v
            });
            var f = gt(p.filter(x => x.op === "add" || x.op === "replace"));
            u(p, (x, y, w) => {
                if (f) {
                    var S = ea(x, f.path);
                    if (xr(c))
                        return {
                            state: Xo(x, y, S, Pp),
                            selection: n ? Ya(S) : w
                        };
                    if (c === "") {
                        var P = vn(S) ? void 0 : Ke(x, rn(S));
                        return {
                            state: Xo(x, y, S, Ju),
                            selection: On(P) ? zp(S, o) : kc(S, o)
                        }
                    }
                }
            }
            ),
            so("after patch")
        } else {
            so("onInsert", {
                insertType: t,
                newValue: c
            });
            var m = [];
            d(c, (x, y) => ({
                state: ts(x, y, m),
                selection: xr(c) ? Ya(m) : kc(m)
            }))
        }
    }
}
function C1(e) {
    return Zv.apply(this, arguments)
}
function Zv() {
    return Zv = wt(function*(e) {
        var {char: t, selectInside: n, json: o, selection: a, readOnly: i, parser: s, onPatch: l, onReplaceJson: u, onSelect: d} = e;
        i || (Wr(a) ? d(ke(ke({}, a), {}, {
            edit: !0,
            initialValue: t
        })) : t === "{" ? zc({
            insertType: "object",
            selectInside: n,
            initialValue: void 0,
            json: o,
            selection: a,
            readOnly: i,
            parser: s,
            onPatch: l,
            onReplaceJson: u
        }) : t === "[" ? zc({
            insertType: "array",
            selectInside: n,
            initialValue: void 0,
            json: o,
            selection: a,
            readOnly: i,
            parser: s,
            onPatch: l,
            onReplaceJson: u
        }) : jn(a) && o !== void 0 ? xr(Ke(o, a.path)) || d(ke(ke({}, a), {}, {
            edit: !0,
            initialValue: t
        })) : (so("onInsertValueWithCharacter", {
            char: t
        }),
        yield function(c) {
            return ef.apply(this, arguments)
        }({
            char: t,
            json: o,
            selection: a,
            readOnly: i,
            parser: s,
            onPatch: l,
            onReplaceJson: u
        })))
    }),
    Zv.apply(this, arguments)
}
function ef() {
    return ef = wt(function*(e) {
        var {char: t, json: n, selection: o, readOnly: a, parser: i, onPatch: s, onReplaceJson: l} = e;
        a || zc({
            insertType: "value",
            selectInside: !1,
            initialValue: t,
            json: n,
            selection: o,
            readOnly: a,
            parser: i,
            onPatch: s,
            onReplaceJson: l
        })
    }),
    ef.apply(this, arguments)
}
kt(`/* over all fonts, sizes, and colors */
/* "consolas" for Windows, "menlo" for Mac with fallback to "monaco", 'Ubuntu Mono' for Ubuntu */
/* (at Mac this font looks too large at 14px, but 13px is too small for the font on Windows) */
/* main, menu, modal */
/* jsoneditor modal */
/* tooltip in text mode */
/* panels: navigation bar, gutter, search box */
/* navigation-bar */
/* context menu */
/* contents: json key and values */
/* contents: selected or hovered */
/* contents: section of collapsed items in an array */
/* contents: highlighting of search matches */
/* contents: inline tags inside the JSON document */
/* contents: table */
/* controls in modals: inputs, buttons, and \`a\` */
/* messages */
/* svelte-select */
/* color picker */
.jse-json-preview.svelte-1vjn89h {
  flex: 1;
  font-family: var(--jse-font-family-mono, consolas, menlo, monaco, "Ubuntu Mono", "source-code-pro", monospace);
  font-size: var(--jse-font-size-mono, 14px);
  color: var(--jse-panel-color-readonly, #b2b2b2);
  overflow: auto;
  white-space: pre-wrap;
  padding: 2px;
  border-left: var(--jse-main-border, 1px solid #d7d7d7);
  border-right: var(--jse-main-border, 1px solid #d7d7d7);
  border-bottom: var(--jse-main-border, 1px solid #d7d7d7);
}`);
var Xz = K('<div class="jse-json-preview svelte-1vjn89h"> </div>');
function O1(e, t) {
    it(t, !1);
    var n = T()
      , o = T()
      , a = g(t, "text", 8)
      , i = g(t, "json", 8)
      , s = g(t, "indentation", 8)
      , l = g(t, "parser", 8);
    V( () => (b(i()),
    b(a())), () => {
        h(n, i() !== void 0 ? {
            json: i()
        } : {
            text: a() || ""
        })
    }
    ),
    V( () => (r(n),
    b(s()),
    b(l()),
    xc), () => {
        h(o, Na(Iv(r(n), s(), l()), xc))
    }
    ),
    An(),
    Rt();
    var u = Xz()
      , d = z(u);
    Ee( () => lt(d, r(o))),
    L(e, u),
    st()
}
kt(`/* over all fonts, sizes, and colors */
/* "consolas" for Windows, "menlo" for Mac with fallback to "monaco", 'Ubuntu Mono' for Ubuntu */
/* (at Mac this font looks too large at 14px, but 13px is too small for the font on Windows) */
/* main, menu, modal */
/* jsoneditor modal */
/* tooltip in text mode */
/* panels: navigation bar, gutter, search box */
/* navigation-bar */
/* context menu */
/* contents: json key and values */
/* contents: selected or hovered */
/* contents: section of collapsed items in an array */
/* contents: highlighting of search matches */
/* contents: inline tags inside the JSON document */
/* contents: table */
/* controls in modals: inputs, buttons, and \`a\` */
/* messages */
/* svelte-select */
/* color picker */
button.jse-context-menu-button.svelte-1idfykj {
  border: none;
  background: transparent;
  color: inherit;
  cursor: pointer;
  font-family: var(--jse-font-family, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif);
  font-size: var(--jse-font-size, 16px);
  padding: 5px;
  margin: 0;
  flex: 1;
  white-space: nowrap;
  padding: var(--jse-padding, 10px);
  color: inherit;
}
button.jse-context-menu-button.svelte-1idfykj:hover {
  background: var(--jse-context-menu-background-highlight, #7a7a7a);
}
button.jse-context-menu-button.svelte-1idfykj:focus {
  background: var(--jse-context-menu-background-highlight, #7a7a7a);
  z-index: 1;
}
button.jse-context-menu-button.svelte-1idfykj:disabled {
  color: var(--jse-context-menu-color-disabled, #9d9d9d);
  background: unset;
}
button.jse-context-menu-button.left.svelte-1idfykj {
  text-align: left;
}
button.jse-context-menu-button.svelte-1idfykj svg {
  width: 16px;
}`);
var Qz = K('<button type="button"><!> <!></button>');
function av(e, t) {
    it(t, !1);
    var n = g(t, "item", 8)
      , o = g(t, "className", 8, void 0)
      , a = g(t, "onRequestClose", 8);
    Rt();
    var i = Qz()
      , s = z(i)
      , l = c => {
        fn(c, {
            get data() {
                return b(n()),
                N( () => n().icon)
            }
        })
    }
    ;
    ie(s, c => {
        b(n()),
        N( () => n().icon) && c(l)
    }
    );
    var u = B(s, 2)
      , d = c => {
        var v = Jr();
        Ee( () => lt(v, (b(n()),
        N( () => n().text)))),
        L(c, v)
    }
    ;
    ie(u, c => {
        b(n()),
        N( () => n().text) && c(d)
    }
    ),
    Ee(c => {
        At(i, 1, c, "svelte-1idfykj"),
        zn(i, "title", (b(n()),
        N( () => n().title))),
        i.disabled = (b(n()),
        N( () => n().disabled || !1))
    }
    , [ () => _i((b(da),
    b(o()),
    b(n()),
    N( () => da("jse-context-menu-button", o(), n().className))))], pe),
    me("click", i, c => {
        a()(),
        n().onClick(c)
    }
    ),
    L(e, i),
    st()
}
kt(`/* over all fonts, sizes, and colors */
/* "consolas" for Windows, "menlo" for Mac with fallback to "monaco", 'Ubuntu Mono' for Ubuntu */
/* (at Mac this font looks too large at 14px, but 13px is too small for the font on Windows) */
/* main, menu, modal */
/* jsoneditor modal */
/* tooltip in text mode */
/* panels: navigation bar, gutter, search box */
/* navigation-bar */
/* context menu */
/* contents: json key and values */
/* contents: selected or hovered */
/* contents: section of collapsed items in an array */
/* contents: highlighting of search matches */
/* contents: inline tags inside the JSON document */
/* contents: table */
/* controls in modals: inputs, buttons, and \`a\` */
/* messages */
/* svelte-select */
/* color picker */
.jse-dropdown-button.svelte-11rxb2m {
  flex: 1;
  line-height: normal;
  border: none;
  background: transparent;
  color: inherit;
  cursor: pointer;
  font-family: var(--jse-font-family, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif);
  font-size: var(--jse-font-size, 16px);
  padding: 5px;
  margin: 0;
  position: relative;
  padding: 0;
  display: flex;
}
.jse-dropdown-button.svelte-11rxb2m ul:where(.svelte-11rxb2m) {
  margin: 0;
  padding: 0;
}
.jse-dropdown-button.svelte-11rxb2m ul:where(.svelte-11rxb2m) li:where(.svelte-11rxb2m) {
  margin: 0;
  padding: 0;
  list-style-type: none;
}
.jse-dropdown-button.svelte-11rxb2m button.jse-open-dropdown:where(.svelte-11rxb2m) {
  border: none;
  background: transparent;
  color: inherit;
  cursor: pointer;
  font-family: var(--jse-font-family, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif);
  font-size: var(--jse-font-size, 16px);
  padding: 5px;
  margin: 0;
  width: 2em;
  background: var(--jse-context-menu-background, #656565);
  color: var(--jse-context-menu-color, var(--jse-text-color-inverse, #fff));
  border-radius: 0;
}
.jse-dropdown-button.svelte-11rxb2m button.jse-open-dropdown.jse-visible:where(.svelte-11rxb2m) {
  background: var(--jse-context-menu-background, #656565);
}
.jse-dropdown-button.svelte-11rxb2m button.jse-open-dropdown:where(.svelte-11rxb2m):hover {
  background: var(--jse-context-menu-background-highlight, #7a7a7a);
}
.jse-dropdown-button.svelte-11rxb2m button.jse-open-dropdown:where(.svelte-11rxb2m):focus {
  z-index: 1;
}
.jse-dropdown-button.svelte-11rxb2m button.jse-open-dropdown:where(.svelte-11rxb2m):disabled {
  color: var(--jse-context-menu-color-disabled, #9d9d9d);
  background: unset;
}
.jse-dropdown-button.svelte-11rxb2m .jse-dropdown-items:where(.svelte-11rxb2m) {
  display: none;
  position: absolute;
  top: 100%;
  left: 0;
  z-index: 1;
  background: var(--jse-context-menu-background, #656565);
  color: var(--jse-context-menu-color, var(--jse-text-color-inverse, #fff));
  box-shadow: var(--jse-controls-box-shadow, 0 2px 6px 0 rgba(0, 0, 0, 0.24));
}
.jse-dropdown-button.svelte-11rxb2m .jse-dropdown-items.jse-visible:where(.svelte-11rxb2m) {
  display: block;
}
.jse-dropdown-button.svelte-11rxb2m .jse-dropdown-items:where(.svelte-11rxb2m) button:where(.svelte-11rxb2m) {
  border: none;
  background: transparent;
  color: inherit;
  cursor: pointer;
  font-family: var(--jse-font-family, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif);
  font-size: var(--jse-font-size, 16px);
  padding: 5px;
  margin: 0;
  width: 100%;
  text-align: left;
  padding: var(--jse-padding, 10px);
  margin: 0;
}
.jse-dropdown-button.svelte-11rxb2m .jse-dropdown-items:where(.svelte-11rxb2m) button:where(.svelte-11rxb2m):hover {
  background: var(--jse-context-menu-background-highlight, #7a7a7a);
}
.jse-dropdown-button.svelte-11rxb2m .jse-dropdown-items:where(.svelte-11rxb2m) button:where(.svelte-11rxb2m):disabled {
  color: var(--jse-context-menu-color-disabled, #9d9d9d);
  background: unset;
}`);
var Zz = K('<li class="svelte-11rxb2m"><button type="button"><!> </button></li>')
  , eT = K('<div role="button" tabindex="0" class="jse-dropdown-button svelte-11rxb2m"><!> <button type="button" data-type="jse-open-dropdown"><!></button> <div><ul class="svelte-11rxb2m"></ul></div></div>');
kt(`/* over all fonts, sizes, and colors */
/* "consolas" for Windows, "menlo" for Mac with fallback to "monaco", 'Ubuntu Mono' for Ubuntu */
/* (at Mac this font looks too large at 14px, but 13px is too small for the font on Windows) */
/* main, menu, modal */
/* jsoneditor modal */
/* tooltip in text mode */
/* panels: navigation bar, gutter, search box */
/* navigation-bar */
/* context menu */
/* contents: json key and values */
/* contents: selected or hovered */
/* contents: section of collapsed items in an array */
/* contents: highlighting of search matches */
/* contents: inline tags inside the JSON document */
/* contents: table */
/* controls in modals: inputs, buttons, and \`a\` */
/* messages */
/* svelte-select */
/* color picker */
button.jse-context-menu-button.svelte-1idfykj {
  border: none;
  background: transparent;
  color: inherit;
  cursor: pointer;
  font-family: var(--jse-font-family, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif);
  font-size: var(--jse-font-size, 16px);
  padding: 5px;
  margin: 0;
  flex: 1;
  white-space: nowrap;
  padding: var(--jse-padding, 10px);
  color: inherit;
}
button.jse-context-menu-button.svelte-1idfykj:hover {
  background: var(--jse-context-menu-background-highlight, #7a7a7a);
}
button.jse-context-menu-button.svelte-1idfykj:focus {
  background: var(--jse-context-menu-background-highlight, #7a7a7a);
  z-index: 1;
}
button.jse-context-menu-button.svelte-1idfykj:disabled {
  color: var(--jse-context-menu-color-disabled, #9d9d9d);
  background: unset;
}
button.jse-context-menu-button.left.svelte-1idfykj {
  text-align: left;
}
button.jse-context-menu-button.svelte-1idfykj svg {
  width: 16px;
}`);
var tT = K('<button type="button" slot="defaultItem"><!> </button>');
function iv(e, t) {
    it(t, !1);
    var n = T()
      , o = g(t, "item", 8)
      , a = g(t, "className", 8, void 0)
      , i = g(t, "onRequestClose", 8);
    V( () => (b(o()),
    b(i())), () => {
        h(n, o().items.map(s => ke(ke({}, s), {}, {
            onClick: l => {
                i()(),
                s.onClick(l)
            }
        })))
    }
    ),
    An(),
    Rt(),
    function(s, l) {
        it(l, !1);
        var u = T(void 0, !0)
          , d = g(l, "items", 25, () => [])
          , c = g(l, "title", 9, void 0)
          , v = g(l, "width", 9, "120px")
          , p = T(!1, !0);
        function f() {
            h(p, !1)
        }
        function m(k) {
            Ja(k) === "Escape" && (k.preventDefault(),
            h(p, !1))
        }
        ao( () => {
            document.addEventListener("click", f),
            document.addEventListener("keydown", m)
        }
        ),
        Vo( () => {
            document.removeEventListener("click", f),
            document.removeEventListener("keydown", m)
        }
        ),
        V( () => b(d()), () => {
            h(u, d().every(k => k.disabled === !0))
        }
        ),
        An(),
        Rt(!0);
        var x = eT()
          , y = z(x);
        _r(y, l, "defaultItem", {}, null);
        var w, S = B(y, 2);
        fn(z(S), {
            get data() {
                return Va
            }
        });
        var P, R = B(S, 2);
        wr(z(R), 5, d, Rr, (k, I) => {
            var H = Zz()
              , Y = z(H)
              , M = z(Y)
              , Z = ee => {
                fn(ee, {
                    get data() {
                        return r(I),
                        N( () => r(I).icon)
                    }
                })
            }
            ;
            ie(M, ee => {
                r(I),
                N( () => r(I).icon) && ee(Z)
            }
            );
            var ae = B(M);
            Ee( () => {
                var ee;
                zn(Y, "title", (r(I),
                N( () => r(I).title))),
                Y.disabled = (r(I),
                N( () => r(I).disabled)),
                At(Y, 1, _i((r(I),
                N( () => r(I).className))), "svelte-11rxb2m"),
                lt(ae, " ".concat((r(I),
                (ee = N( () => r(I).text)) !== null && ee !== void 0 ? ee : "")))
            }
            ),
            me("click", Y, ee => r(I).onClick(ee)),
            L(k, H)
        }
        ),
        Ee( (k, I) => {
            var H;
            zn(x, "title", c()),
            w = At(S, 1, "jse-open-dropdown svelte-11rxb2m", null, w, k),
            S.disabled = r(u),
            P = At(R, 1, "jse-dropdown-items svelte-11rxb2m", null, P, I),
            ra(R, "width: ".concat((H = v()) !== null && H !== void 0 ? H : "", ";"))
        }
        , [ () => ({
            "jse-visible": r(p)
        }), () => ({
            "jse-visible": r(p)
        })], pe),
        me("click", S, function() {
            var k = r(p);
            setTimeout( () => h(p, !k))
        }),
        me("click", x, f),
        L(s, x),
        st()
    }(e, {
        get width() {
            return b(o()),
            N( () => o().width)
        },
        get items() {
            return r(n)
        },
        $$slots: {
            defaultItem: (s, l) => {
                var u = tT()
                  , d = z(u)
                  , c = p => {
                    fn(p, {
                        get data() {
                            return b(o()),
                            N( () => o().main.icon)
                        }
                    })
                }
                ;
                ie(d, p => {
                    b(o()),
                    N( () => o().main.icon) && p(c)
                }
                );
                var v = B(d);
                Ee(p => {
                    var f;
                    At(u, 1, p, "svelte-1idfykj"),
                    zn(u, "title", (b(o()),
                    N( () => o().main.title))),
                    u.disabled = (b(o()),
                    N( () => o().main.disabled || !1)),
                    lt(v, " ".concat((b(o()),
                    (f = N( () => o().main.text)) !== null && f !== void 0 ? f : "")))
                }
                , [ () => _i((b(da),
                b(a()),
                b(o()),
                N( () => da("jse-context-menu-button", a(), o().main.className))))], pe),
                me("click", u, p => {
                    i()(),
                    o().main.onClick(p)
                }
                ),
                L(s, u)
            }
        }
    }),
    st()
}
kt(`/* over all fonts, sizes, and colors */
/* "consolas" for Windows, "menlo" for Mac with fallback to "monaco", 'Ubuntu Mono' for Ubuntu */
/* (at Mac this font looks too large at 14px, but 13px is too small for the font on Windows) */
/* main, menu, modal */
/* jsoneditor modal */
/* tooltip in text mode */
/* panels: navigation bar, gutter, search box */
/* navigation-bar */
/* context menu */
/* contents: json key and values */
/* contents: selected or hovered */
/* contents: section of collapsed items in an array */
/* contents: highlighting of search matches */
/* contents: inline tags inside the JSON document */
/* contents: table */
/* controls in modals: inputs, buttons, and \`a\` */
/* messages */
/* svelte-select */
/* color picker */
.jse-contextmenu.svelte-12z7bz1 {
  box-shadow: var(--jse-controls-box-shadow, 0 2px 6px 0 rgba(0, 0, 0, 0.24));
  font-family: var(--jse-font-family, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif);
  font-size: var(--jse-font-size, 16px);
  background: var(--jse-context-menu-background, #656565);
  color: var(--jse-context-menu-color, var(--jse-text-color-inverse, #fff));
}
.jse-contextmenu.svelte-12z7bz1 .jse-row:where(.svelte-12z7bz1) {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: stretch;
}
.jse-contextmenu.svelte-12z7bz1 .jse-row:where(.svelte-12z7bz1) div.jse-label:where(.svelte-12z7bz1) {
  flex: 1;
  white-space: nowrap;
  padding: var(--jse-padding, 10px);
  color: var(--jse-context-menu-color-disabled, #9d9d9d);
  line-height: normal;
}
.jse-contextmenu.svelte-12z7bz1 .jse-row:where(.svelte-12z7bz1) div.jse-tip:where(.svelte-12z7bz1) {
  flex: 1;
  background: var(--jse-context-menu-tip-background, rgba(255, 255, 255, 0.2));
  color: var(--context-menu-tip-color, inherit);
  margin: calc(0.5 * var(--jse-padding, 10px));
  padding: calc(0.5 * var(--jse-padding, 10px)) var(--jse-padding, 10px);
  font-size: 80%;
  line-height: 1.3em;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  gap: var(--jse-padding, 10px);
  border-radius: 3px;
}
.jse-contextmenu.svelte-12z7bz1 .jse-row:where(.svelte-12z7bz1) div.jse-tip:where(.svelte-12z7bz1) div.jse-tip-icon:where(.svelte-12z7bz1) {
  padding-top: calc(0.5 * var(--jse-padding, 10px));
}
.jse-contextmenu.svelte-12z7bz1 .jse-column:where(.svelte-12z7bz1) {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: stretch;
}
.jse-contextmenu.svelte-12z7bz1 .jse-column:where(.svelte-12z7bz1):not(:last-child) {
  border-right: 1px solid var(--jse-context-menu-separator-color, #7a7a7a);
}
.jse-contextmenu.svelte-12z7bz1 .jse-separator:where(.svelte-12z7bz1) {
  width: 100%;
  height: 1px;
  background: var(--jse-context-menu-separator-color, #7a7a7a);
}`);
var nT = K('<div class="jse-separator svelte-12z7bz1"></div>')
  , rT = K('<div class="jse-label svelte-12z7bz1"> </div>')
  , oT = K('<div class="jse-column svelte-12z7bz1"></div>')
  , aT = K('<div class="jse-separator svelte-12z7bz1"></div>')
  , iT = K('<div class="jse-row svelte-12z7bz1"></div>')
  , sT = K('<div class="jse-separator svelte-12z7bz1"></div>')
  , lT = K('<div class="jse-row svelte-12z7bz1"><div class="jse-tip svelte-12z7bz1"><div class="jse-tip-icon svelte-12z7bz1"><!></div> <div class="jse-tip-text"> </div></div></div>')
  , uT = K('<div role="menu" tabindex="-1" class="jse-contextmenu svelte-12z7bz1"><!> <!></div>');
function E1(e, t) {
    it(t, !1);
    var n = g(t, "items", 9)
      , o = g(t, "onRequestClose", 9)
      , a = g(t, "tip", 9)
      , i = T(void 0, !0);
    ao( () => {
        var p = Array.from(r(i).querySelectorAll("button")).find(f => !f.disabled);
        p && p.focus()
    }
    );
    var s = {
        ArrowUp: "Up",
        ArrowDown: "Down",
        ArrowLeft: "Left",
        ArrowRight: "Right"
    };
    function l(p) {
        return console.error("Unknown type of context menu item", p),
        "???"
    }
    Rt(!0);
    var u = uT()
      , d = z(u);
    wr(d, 1, n, Rr, (p, f) => {
        var m = jr()
          , x = ht(m)
          , y = S => {
            av(S, {
                get item() {
                    return r(f)
                },
                get onRequestClose() {
                    return o()
                }
            })
        }
          , w = (S, P) => {
            var R = I => {
                iv(I, {
                    get item() {
                        return r(f)
                    },
                    get onRequestClose() {
                        return o()
                    }
                })
            }
              , k = (I, H) => {
                var Y = Z => {
                    var ae = iT();
                    wr(ae, 5, () => (r(f),
                    N( () => r(f).items)), Rr, (ee, se) => {
                        var _e = jr()
                          , fe = ht(_e)
                          , Oe = Ne => {
                            av(Ne, {
                                get item() {
                                    return r(se)
                                },
                                get onRequestClose() {
                                    return o()
                                }
                            })
                        }
                          , De = (Ne, je) => {
                            var Ae = Ve => {
                                iv(Ve, {
                                    get item() {
                                        return r(se)
                                    },
                                    get onRequestClose() {
                                        return o()
                                    }
                                })
                            }
                              , Pe = (Ve, ge) => {
                                var de = ct => {
                                    var qt = oT();
                                    wr(qt, 5, () => (r(se),
                                    N( () => r(se).items)), Rr, (X, D) => {
                                        var le = jr()
                                          , F = ht(le)
                                          , we = Be => {
                                            av(Be, {
                                                className: "left",
                                                get item() {
                                                    return r(D)
                                                },
                                                get onRequestClose() {
                                                    return o()
                                                }
                                            })
                                        }
                                          , ne = (Be, J) => {
                                            var U = nt => {
                                                iv(nt, {
                                                    className: "left",
                                                    get item() {
                                                        return r(D)
                                                    },
                                                    get onRequestClose() {
                                                        return o()
                                                    }
                                                })
                                            }
                                              , _t = (nt, Se) => {
                                                var mt = $e => {
                                                    L($e, nT())
                                                }
                                                  , Fe = ($e, Lt) => {
                                                    var We = j => {
                                                        var C = rT()
                                                          , A = z(C);
                                                        Ee( () => lt(A, (r(D),
                                                        N( () => r(D).text)))),
                                                        L(j, C)
                                                    }
                                                      , $t = j => {
                                                        var C = Jr();
                                                        Ee(A => lt(C, A), [ () => (r(D),
                                                        N( () => l(r(D))))], pe),
                                                        L(j, C)
                                                    }
                                                    ;
                                                    ie($e, j => {
                                                        b(rg),
                                                        r(D),
                                                        N( () => rg(r(D))) ? j(We) : j($t, !1)
                                                    }
                                                    , Lt)
                                                }
                                                ;
                                                ie(nt, $e => {
                                                    b(ai),
                                                    r(D),
                                                    N( () => ai(r(D))) ? $e(mt) : $e(Fe, !1)
                                                }
                                                , Se)
                                            }
                                            ;
                                            ie(Be, nt => {
                                                b(ms),
                                                r(D),
                                                N( () => ms(r(D))) ? nt(U) : nt(_t, !1)
                                            }
                                            , J)
                                        }
                                        ;
                                        ie(F, Be => {
                                            b(ma),
                                            r(D),
                                            N( () => ma(r(D))) ? Be(we) : Be(ne, !1)
                                        }
                                        ),
                                        L(X, le)
                                    }
                                    ),
                                    L(ct, qt)
                                }
                                  , ye = (ct, qt) => {
                                    var X = le => {
                                        L(le, aT())
                                    }
                                      , D = le => {
                                        var F = Jr();
                                        Ee(we => lt(F, we), [ () => (r(se),
                                        N( () => l(r(se))))], pe),
                                        L(le, F)
                                    }
                                    ;
                                    ie(ct, le => {
                                        b(ai),
                                        r(se),
                                        N( () => ai(r(se))) ? le(X) : le(D, !1)
                                    }
                                    , qt)
                                }
                                ;
                                ie(Ve, ct => {
                                    b(ag),
                                    r(se),
                                    N( () => ag(r(se))) ? ct(de) : ct(ye, !1)
                                }
                                , ge)
                            }
                            ;
                            ie(Ne, Ve => {
                                b(ms),
                                r(se),
                                N( () => ms(r(se))) ? Ve(Ae) : Ve(Pe, !1)
                            }
                            , je)
                        }
                        ;
                        ie(fe, Ne => {
                            b(ma),
                            r(se),
                            N( () => ma(r(se))) ? Ne(Oe) : Ne(De, !1)
                        }
                        ),
                        L(ee, _e)
                    }
                    ),
                    L(Z, ae)
                }
                  , M = (Z, ae) => {
                    var ee = _e => {
                        L(_e, sT())
                    }
                      , se = _e => {
                        var fe = Jr();
                        Ee(Oe => lt(fe, Oe), [ () => (r(f),
                        N( () => l(r(f))))], pe),
                        L(_e, fe)
                    }
                    ;
                    ie(Z, _e => {
                        b(ai),
                        r(f),
                        N( () => ai(r(f))) ? _e(ee) : _e(se, !1)
                    }
                    , ae)
                }
                ;
                ie(I, Z => {
                    b(og),
                    r(f),
                    N( () => og(r(f))) ? Z(Y) : Z(M, !1)
                }
                , H)
            }
            ;
            ie(S, I => {
                b(ms),
                r(f),
                N( () => ms(r(f))) ? I(R) : I(k, !1)
            }
            , P)
        }
        ;
        ie(x, S => {
            b(ma),
            r(f),
            N( () => ma(r(f))) ? S(y) : S(w, !1)
        }
        ),
        L(p, m)
    }
    );
    var c = B(d, 2)
      , v = p => {
        var f = lT()
          , m = z(f)
          , x = z(m);
        fn(z(x), {
            get data() {
                return Sk
            }
        });
        var y = z(B(x, 2));
        Ee( () => lt(y, a())),
        L(p, f)
    }
    ;
    ie(c, p => {
        a() && p(v)
    }
    ),
    nr(u, p => h(i, p), () => r(i)),
    me("keydown", u, function(p) {
        var f = Ja(p)
          , m = s[f];
        if (m && p.target) {
            p.preventDefault();
            var x = MR({
                allElements: Array.from(r(i).querySelectorAll("button:not([disabled])")),
                currentElement: p.target,
                direction: m,
                hasPrio: y => y.getAttribute("data-type") !== "jse-open-dropdown"
            });
            x && x.focus()
        }
    }),
    L(e, u),
    st()
}
kt(`/* over all fonts, sizes, and colors */
/* "consolas" for Windows, "menlo" for Mac with fallback to "monaco", 'Ubuntu Mono' for Ubuntu */
/* (at Mac this font looks too large at 14px, but 13px is too small for the font on Windows) */
/* main, menu, modal */
/* jsoneditor modal */
/* tooltip in text mode */
/* panels: navigation bar, gutter, search box */
/* navigation-bar */
/* context menu */
/* contents: json key and values */
/* contents: selected or hovered */
/* contents: section of collapsed items in an array */
/* contents: highlighting of search matches */
/* contents: inline tags inside the JSON document */
/* contents: table */
/* controls in modals: inputs, buttons, and \`a\` */
/* messages */
/* svelte-select */
/* color picker */
.jse-value.jse-string.svelte-6ttr41 {
  color: var(--jse-value-color-string, #008000);
}
.jse-value.jse-object.svelte-6ttr41, .jse-value.jse-array.svelte-6ttr41 {
  min-width: 16px;
  color: var(--jse-delimiter-color, rgba(0, 0, 0, 0.38));
}
.jse-value.jse-number.svelte-6ttr41 {
  color: var(--jse-value-color-number, #ee422e);
}
.jse-value.jse-boolean.svelte-6ttr41 {
  color: var(--jse-value-color-boolean, #ff8c00);
}
.jse-value.jse-null.svelte-6ttr41 {
  color: var(--jse-value-color-null, #004ed0);
}
.jse-value.jse-invalid.svelte-6ttr41 {
  color: var(--jse-text-color, #4d4d4d);
}
.jse-value.jse-url.svelte-6ttr41 {
  color: var(--jse-value-color-url, #008000);
  text-decoration: underline;
}

.jse-enum-value.svelte-6ttr41 {
  background: var(--jse-hover-background-color, rgba(0, 0, 0, 0.06));
  border: none;
  padding: 0;
  font-family: inherit;
  font-size: inherit;
  cursor: pointer;
  outline: none;
}
.jse-enum-value.jse-selected.svelte-6ttr41 {
  background: var(--jse-selection-background-color, #d3d3d3);
  color: inherit;
}
.jse-enum-value.jse-value.svelte-6ttr41:focus {
  color: var(--jse-text-color, #4d4d4d);
}`);
var cT = K("<option> </option>")
  , dT = K("<select></select>");
function vT(e, t) {
    it(t, !1);
    var n = g(t, "path", 9)
      , o = g(t, "value", 9)
      , a = g(t, "mode", 9)
      , i = g(t, "parser", 9)
      , s = g(t, "readOnly", 9)
      , l = g(t, "selection", 9)
      , u = g(t, "onPatch", 9)
      , d = g(t, "options", 9)
      , c = T(void 0, !0)
      , v = T(o(), !0);
    V( () => b(o()), () => {
        h(v, o())
    }
    ),
    V( () => b(l()), () => {
        (function(m) {
            m && r(c) && r(c).focus()
        }
        )(l())
    }
    ),
    An(),
    Rt(!0);
    var p, f = dT();
    Ee( () => {
        r(v),
        YA( () => {
            a(),
            i(),
            l(),
            r(c),
            d()
        }
        )
    }
    ),
    wr(f, 5, d, Rr, (m, x) => {
        var y = cT()
          , w = z(y)
          , S = {};
        Ee( () => {
            var P;
            lt(w, (r(x),
            N( () => r(x).text))),
            S !== (r(x),
            S = N( () => r(x).value)) && (y.value = (P = y.__value = (r(x),
            N( () => r(x).value))) !== null && P !== void 0 ? P : "")
        }
        ),
        L(m, y)
    }
    ),
    nr(f, m => h(c, m), () => r(c)),
    Ee( (m, x) => p = At(f, 1, m, "svelte-6ttr41", p, x), [ () => (b(_c),
    r(v),
    b(a()),
    b(i()),
    N( () => "jse-enum-value ".concat(_c(r(v), a(), i())))), () => ({
        "jse-selected": jn(l())
    })], pe),
    function(m, x) {
        var y = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : x
          , w = !0;
        fw(m, "change", S => {
            var P, R = S ? "[selected]" : ":checked";
            if (m.multiple)
                P = [].map.call(m.querySelectorAll(R), Ul);
            else {
                var k, I = (k = m.querySelector(R)) !== null && k !== void 0 ? k : m.querySelector("option:not([disabled])");
                P = I && Ul(I)
            }
            y(P)
        }
        ),
        Gr( () => {
            var S = x();
            if (hc(m, S, w),
            w && S === void 0) {
                var P = m.querySelector(":checked");
                P !== null && (S = Ul(P),
                y(S))
            }
            m.__value = S,
            w = !1
        }
        ),
        yw(m)
    }(f, () => r(v), m => h(v, m)),
    me("change", f, function(m) {
        m.stopPropagation(),
        s() || u()([{
            op: "replace",
            path: Tt(n()),
            value: r(v)
        }])
    }),
    me("mousedown", f, function(m) {
        m.stopPropagation()
    }),
    L(e, f),
    st()
}
function fT(e, t, n) {
    var o = Cs(e, {}, n);
    return o ? function(a) {
        if (Array.isArray(a.enum))
            return a.enum;
        var i = a.oneOf || a.anyOf || a.allOf;
        if (Array.isArray(i)) {
            var s = i.filter(l => l.enum);
            if (s.length > 0)
                return s[0].enum
        }
    }(o) : void 0
}
function Cs(e, t, n) {
    var o = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : e
      , a = n.slice(1, n.length)
      , i = n[0]
      , s = [o];
    for (var l of [o.oneOf, o.anyOf, o.allOf])
        Array.isArray(l) && (s = s.concat(l));
    for (var u of s) {
        if ("$ref"in (o = u) && typeof o.$ref == "string") {
            var d, c = o.$ref;
            if (c in t)
                o = t[c];
            else {
                if (!c.startsWith("#/")) {
                    if (((d = c.match(/#\//g)) === null || d === void 0 ? void 0 : d.length) === 1) {
                        var [v,p] = c.split("#/");
                        if (v in t) {
                            var f = t[v]
                              , m = {
                                $ref: "#/".concat(p)
                            }
                              , x = [];
                            return x.push(i),
                            a.length > 0 && x.push(...a),
                            Cs(f, t, x, m)
                        }
                        throw Error("Unable to resolve reference ".concat(c))
                    }
                    throw Error("Unable to resolve reference ".concat(c))
                }
                var y = c.substring(2).split("/");
                for (var w of (o = e,
                y)) {
                    if (!(w in o))
                        throw Error("Unable to resolve reference ".concat(c));
                    o = o[w]
                }
            }
        }
        if (i === void 0)
            return o;
        if (typeof o.properties == "object" && o.properties && i in o.properties)
            return Cs(e, t, a, o = o.properties[i]);
        if (typeof o.patternProperties == "object" && o.patternProperties) {
            for (var S in o.patternProperties)
                if (i.match(S))
                    return Cs(e, t, a, o = o.patternProperties[S])
        }
        if (typeof o.additionalProperties == "object")
            return Cs(e, t, a, o = o.additionalProperties);
        if (typeof o.items == "object" && o.items)
            return Cs(e, t, a, o = o.items)
    }
}
function pT(e, t, n) {
    var o = fT(t, n, e.path);
    if (o) {
        var a = o.map(s => ({
            value: s,
            text: s
        }))
          , i = o.includes(e.value) ? a : [{
            value: e.value,
            text: e.value
        }].concat(a);
        return [{
            component: vT,
            props: ke(ke({}, e), {}, {
                options: i
            })
        }]
    }
}
function hT(e) {
    return mT(gT(e).compile(e.schema), e)
}
function gT(e) {
    var t, n, {schemaDefinitions: o, ajvOptions: a} = e, i = new fk(ke({
        allErrors: !0,
        verbose: !0,
        $data: !0
    }, a));
    if (o && Object.keys(o).forEach(s => {
        i.addSchema(o[s], s)
    }
    ),
    (i = (t = (n = e.onCreateAjv) === null || n === void 0 ? void 0 : n.call(e, i)) !== null && t !== void 0 ? t : i).opts.verbose === !1)
        throw new Error("Ajv must be configured with the option verbose=true");
    return i
}
function mT(e, t) {
    if (e.errors)
        throw e.errors[0];
    return function(n) {
        var o;
        return e(n),
        ((o = e.errors) !== null && o !== void 0 ? o : []).map(bT).map(a => function(i, s, l) {
            var u, d;
            return {
                path: ea(i, s.instancePath),
                message: (u = s.message) !== null && u !== void 0 ? u : "Unknown error",
                severity: (d = l.errorSeverity) !== null && d !== void 0 ? d : zo.warning
            }
        }(n, a, t))
    }
}
function bT(e) {
    var t = void 0;
    if (e.keyword === "enum" && Array.isArray(e.schema)) {
        var n = e.schema;
        if (n) {
            if ((n = n.map(a => JSON.stringify(a))).length > 5) {
                var o = ["(" + (n.length - 5) + " more...)"];
                (n = n.slice(0, 5)).push(o)
            }
            t = "should be equal to one of: " + n.join(", ")
        }
    }
    return e.keyword === "additionalProperties" && (t = "should NOT have additional property: " + e.params.additionalProperty),
    t ? ke(ke({}, e), {}, {
        message: t
    }) : e
}
var xT = {
    id: "jmespath",
    name: "JMESPath",
    description: `
<p>
  Enter a <a href="https://jmespath.org" target="_blank" rel="noopener noreferrer">JMESPath</a> query 
  to filter, sort, or transform the JSON data.
 To learn JMESPath, go to <a href="https://jmespath.org/tutorial.html" target="_blank" rel="noopener noreferrer">the interactive tutorial</a>.
</p>
`,
    createQuery: function(e, t) {
        var {sort: n, filter: o, projection: a} = t
          , i = "";
        if (o && o.path && o.relation && o.value) {
            var s = ["0"].concat(o.path)
              , l = Ke(e, s)
              , u = hd(o.value)
              , d = typeof l == "string" && u != null ? '"'.concat(o.value, '"') : u;
            i += "[? " + Al(o.path) + " " + o.relation + " `" + d + "`]"
        } else
            i += Array.isArray(e) ? "[*]" : "@";
        if (n && n.path && n.direction && (n.direction === "desc" ? i += " | reverse(sort_by(@, &" + Al(n.path) + "))" : i += " | sort_by(@, &" + Al(n.path) + ")"),
        a && a.paths)
            if (i[i.length - 1] !== "]" && (i += " | [*]"),
            a.paths.length === 1) {
                var c = a.paths[0];
                i += c.length === 0 ? "" : "." + Al(c)
            } else
                a.paths.length > 1 && (i += ".{" + a.paths.map(v => A1(v[v.length - 1]) + ": " + Al(v)).join(", ") + "}");
        return i
    },
    executeQuery: function(e, t, n) {
        var o = Gs(n, JSON) ? e : function(a) {
            var i = n.stringify(a);
            return i !== void 0 ? JSON.parse(i) : void 0
        }(e);
        return Ty.search(o, t)
    }
};
function Al(e) {
    if (e.length === 0)
        return "@";
    var t = e.map(n => typeof n == "number" ? "[" + n + "]" : "." + A1(String(n))).join("");
    return t[0] === "." ? t.slice(1) : t
}
function A1(e) {
    return e.match(/^[A-Za-z\d_$]+$/) ? e : JSON.stringify(e)
}
var jT = {
    id: "jsonpath",
    name: "JSONPath",
    description: `
<p>
  Enter a <a href="https://github.com/JSONPath-Plus/JSONPath" target="_blank" 
  rel="noopener noreferrer"><code>JSONPath</code></a> expression to filter, sort, or transform the data.
</p>`,
    createQuery: function(e, t) {
        var {filter: n, sort: o, projection: a} = t
          , i = "$";
        if (n && n.path && n.relation && n.value) {
            var s = hd(n.value)
              , l = JSON.stringify(s);
            i += "[?(@".concat(qg(n.path), " ").concat(n.relation, " ").concat(l, ")]")
        }
        if (o && o.path && o.direction)
            throw new Error("Sorting is not supported by JSONPath. Please clear the sorting fields");
        if (a && a.paths) {
            if (a.paths.length > 1)
                throw new Error("Picking multiple fields is not supported by JSONPath. Please select only one field");
            i.endsWith("]") || (i += "[*]"),
            i += "".concat(qg(a.paths[0])).replace(/^\.\.\./, "..")
        }
        return i
    },
    executeQuery: function(e, t) {
        var n = qn({
            json: e,
            path: t
        });
        return n !== void 0 ? n : null
    }
};
function qg(e) {
    var t = /^[A-z]+$/;
    return e.map(n => t.test(n) ? ".".concat(n) : JSON.stringify([n])).join("")
}
var yT = {
    id: "lodash",
    name: "Lodash",
    description: `
<p>
  Enter a JavaScript function to filter, sort, or transform the data.
  You can use <a href="https://lodash.com" target="_blank" rel="noopener noreferrer">Lodash</a>
  functions like <code>_.map</code>, <code>_.filter</code>,
  <code>_.orderBy</code>, <code>_.sortBy</code>, <code>_.groupBy</code>,
  <code>_.pick</code>, <code>_.uniq</code>, <code>_.get</code>, etcetera.
</p>
`,
    createQuery: function(e, t) {
        var {filter: n, sort: o, projection: a} = t
          , i = [`  return _.chain(data)
`];
        if (n && n.path && n.relation && n.value) {
            var s = "item => item".concat(ev(n.path))
              , l = hd(n.value)
              , u = typeof l == "string" ? "'".concat(n.value, "'") : mR(n.value) && !Number.isSafeInteger(l) ? "".concat(n.value, "n") : n.value;
            i.push("    .filter(".concat(s, " ").concat(n.relation, " ").concat(u, `)
`))
        }
        if (o && o.path && o.direction && i.push("    .orderBy([".concat(function(v) {
            return v.length === 0 ? "" : v.every(p => bd.test(p) || Tp.test(p)) ? "'" + v.map(mM).join("").replace(/^\./, "") + "'" : JSON.stringify(v)
        }(o.path), "], ['").concat(o.direction, `'])
`)),
        a && a.paths)
            if (a.paths.length > 1) {
                var d = a.paths.map(v => {
                    var p = gt(v) || "item";
                    return "      ".concat(JSON.stringify(p), ": item").concat(ev(v))
                }
                );
                i.push(`    .map(item => ({
`.concat(d.join(`,
`), `
    }))
`))
            } else {
                var c = a.paths[0];
                i.push("    .map(item => item".concat(ev(c), `)
`))
            }
        return i.push(`    .value()
`),
        `function query (data) {
`.concat(i.join(""), "}")
    },
    executeQuery: function(e, t) {
        (function(o) {
            var a, i, s = (a = o.match(/_\.chain\(/g)) === null || a === void 0 ? void 0 : a.length, l = (i = o.match(/\.value\(\)/g)) === null || i === void 0 ? void 0 : i.length;
            if (s !== l)
                throw new Error("Cannot execute query: Lodash _.chain(...) must end with .value()")
        }
        )(t);
        var n = new Function("_",`"use strict";

` + t + `

if (typeof query !== "function") {
  throw new Error("Cannot execute query: expecting a function named 'query' but is undefined")
}

return query;
`)(Py)(e);
        return n !== void 0 ? n : null
    }
}, $u, Fu;
function Bu(e, t) {
    return $u || (Fu = new WeakMap,
    $u = new ResizeObserver(n => {
        for (var o of n) {
            var a = Fu.get(o.target);
            a && a(o.target)
        }
    }
    )),
    Fu.set(e, t),
    $u.observe(e),
    {
        destroy: () => {
            Fu.delete(e),
            $u.unobserve(e)
        }
    }
}
kt(`/* over all fonts, sizes, and colors */
/* "consolas" for Windows, "menlo" for Mac with fallback to "monaco", 'Ubuntu Mono' for Ubuntu */
/* (at Mac this font looks too large at 14px, but 13px is too small for the font on Windows) */
/* main, menu, modal */
/* jsoneditor modal */
/* tooltip in text mode */
/* panels: navigation bar, gutter, search box */
/* navigation-bar */
/* context menu */
/* contents: json key and values */
/* contents: selected or hovered */
/* contents: section of collapsed items in an array */
/* contents: highlighting of search matches */
/* contents: inline tags inside the JSON document */
/* contents: table */
/* controls in modals: inputs, buttons, and \`a\` */
/* messages */
/* svelte-select */
/* color picker */
.jse-tree-mode.svelte-vrx1dr {
  flex: 1;
  display: flex;
  flex-direction: column;
  position: relative;
  background: var(--jse-background-color, #fff);
  min-width: 0;
  min-height: 0;
  font-family: var(--jse-font-family-mono, consolas, menlo, monaco, "Ubuntu Mono", "source-code-pro", monospace);
  font-size: var(--jse-font-size-mono, 14px);
  color: var(--jse-text-color, #4d4d4d);
  line-height: var(--jse-line-height, calc(1em + 4px));
}
.jse-tree-mode.svelte-vrx1dr .jse-hidden-input-label:where(.svelte-vrx1dr) .jse-hidden-input:where(.svelte-vrx1dr) {
  position: fixed;
  top: -10px;
  left: -10px;
  width: 1px;
  height: 1px;
  padding: 0;
  border: 0;
  outline: none;
}
.jse-tree-mode.no-main-menu.svelte-vrx1dr {
  border-top: var(--jse-main-border, 1px solid #d7d7d7);
}
.jse-tree-mode.svelte-vrx1dr .jse-search-box-container:where(.svelte-vrx1dr) {
  position: relative;
  height: 0;
  top: var(--jse-padding, 10px);
  margin-right: calc(var(--jse-padding, 10px) + 20px);
  margin-left: var(--jse-padding, 10px);
  text-align: right;
  z-index: 3;
}
.jse-tree-mode.svelte-vrx1dr .jse-contents:where(.svelte-vrx1dr) {
  flex: 1;
  overflow: auto;
  position: relative;
  padding: 2px;
  display: flex;
  flex-direction: column;
  border-left: var(--jse-main-border, 1px solid #d7d7d7);
  border-right: var(--jse-main-border, 1px solid #d7d7d7);
}
.jse-tree-mode.svelte-vrx1dr .jse-contents:where(.svelte-vrx1dr):last-child {
  border-bottom: var(--jse-main-border, 1px solid #d7d7d7);
}
.jse-tree-mode.svelte-vrx1dr .jse-contents:where(.svelte-vrx1dr) .jse-loading-space:where(.svelte-vrx1dr) {
  flex: 1;
}
.jse-tree-mode.svelte-vrx1dr .jse-contents:where(.svelte-vrx1dr) .jse-loading:where(.svelte-vrx1dr) {
  flex: 2;
  text-align: center;
  color: var(--jse-panel-color-readonly, #b2b2b2);
  box-sizing: border-box;
  font-family: var(--jse-font-family, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif);
  font-size: var(--jse-font-size, 16px);
}
.jse-tree-mode.svelte-vrx1dr .jse-contents:where(.svelte-vrx1dr) .jse-search-box-background:where(.svelte-vrx1dr) {
  border: 50px solid var(--jse-modal-background, #f5f5f5);
  margin: -2px;
  margin-bottom: 2px;
  display: inline-block;
}`);
var wT = K("<!> <!>", 1)
  , kT = K('<div class="jse-search-box-background svelte-vrx1dr"></div>')
  , _T = K('<div class="jse-search-box-container svelte-vrx1dr"><!></div> <div class="jse-contents svelte-vrx1dr"><!> <!></div> <!> <!> <!> <!>', 1)
  , ST = K('<label class="jse-hidden-input-label svelte-vrx1dr"><input type="text" tabindex="-1" class="jse-hidden-input svelte-vrx1dr"/></label> <!>', 1)
  , CT = K('<div class="jse-contents svelte-vrx1dr"><div class="jse-loading-space svelte-vrx1dr"></div> <div class="jse-loading svelte-vrx1dr">loading...</div></div>')
  , OT = K('<div role="tree" tabindex="-1"><!> <!> <!></div> <!> <!>', 1);
function tf(e, t) {
    it(t, !1);
    var n = T(void 0, !0)
      , o = Hr("jsoneditor:TreeMode")
      , a = typeof window > "u";
    o("isSSR:", a);
    var i = mi()
      , s = mi()
      , {openAbsolutePopup: l, closeAbsolutePopup: u} = Pi("absolute-popup")
      , d = T(void 0, !0)
      , c = T(void 0, !0)
      , v = T(void 0, !0)
      , p = !1
      , f = f1()
      , m = g(t, "readOnly", 9)
      , x = g(t, "externalContent", 9)
      , y = g(t, "externalSelection", 9)
      , w = g(t, "history", 9)
      , S = g(t, "truncateTextSize", 9)
      , P = g(t, "mainMenuBar", 9)
      , R = g(t, "navigationBar", 9)
      , k = g(t, "escapeControlCharacters", 9)
      , I = g(t, "escapeUnicodeCharacters", 9)
      , H = g(t, "parser", 9)
      , Y = g(t, "parseMemoizeOne", 9)
      , M = g(t, "validator", 9)
      , Z = g(t, "validationParser", 9)
      , ae = g(t, "pathParser", 9)
      , ee = g(t, "indentation", 9)
      , se = g(t, "onError", 9)
      , _e = g(t, "onChange", 9)
      , fe = g(t, "onChangeMode", 9)
      , Oe = g(t, "onSelect", 9)
      , De = g(t, "onUndo", 9)
      , Ne = g(t, "onRedo", 9)
      , je = g(t, "onRenderValue", 9)
      , Ae = g(t, "onRenderMenu", 9)
      , Pe = g(t, "onRenderContextMenu", 9)
      , Ve = g(t, "onClassName", 9)
      , ge = g(t, "onFocus", 9)
      , de = g(t, "onBlur", 9)
      , ye = g(t, "onSortModal", 9)
      , ct = g(t, "onTransformModal", 9)
      , qt = g(t, "onJSONEditorModal", 9)
      , X = !1
      , D = T(!1, !0)
      , le = T(void 0, !0);
    Up({
        onMount: ao,
        onDestroy: Vo,
        getWindow: () => ku(r(v)),
        hasFocus: () => X && document.hasFocus() || yp(r(v)),
        onFocus: () => {
            p = !0,
            ge() && ge()()
        }
        ,
        onBlur: () => {
            p = !1,
            de() && de()()
        }
    });
    var F = T(void 0, !0)
      , we = T(void 0, !0)
      , ne = void 0
      , Be = !1
      , J = T(Dv({
        json: r(F)
    }), !0)
      , U = T(Zl(y()) ? y() : void 0, !0);
    function _t(O) {
        h(U, O)
    }
    ao( () => {
        if (r(U)) {
            var O = Qe(r(U));
            h(J, Xo(r(F), r(J), O, Ju)),
            setTimeout( () => Ft(O))
        }
    }
    );
    var nt, Se = T(void 0, !0), mt = T(void 0, !0), Fe = T(void 0, !0), $e = T(void 0, !0), Lt = T(!1, !0), We = T(!1, !0);
    function $t(O) {
        h($e, (nt = O) ? e1(r(F), nt.items) : void 0)
    }
    function j(O, q) {
        return C.apply(this, arguments)
    }
    function C() {
        return (C = wt(function*(O, q) {
            h(J, Xo(r(F), r(J), O, Ju));
            var ve = ir(q);
            yield rt(O, {
                element: ve
            })
        })).apply(this, arguments)
    }
    function A() {
        h(Lt, !1),
        h(We, !1),
        kn()
    }
    function $(O) {
        o("select validation error", O),
        h(U, nn(O.path)),
        rt(O.path)
    }
    function re(O) {
        var q = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : fg;
        o("expand"),
        h(J, Xo(r(F), r(J), O, q))
    }
    function Ce(O, q) {
        h(J, ug(r(F), r(J), O, q)),
        r(U) && function(ve, qe) {
            return _a(Qe(ve), qe) && (Qe(ve).length > qe.length || qr(ve))
        }(r(U), O) && h(U, void 0)
    }
    var ze = T(!1, !0)
      , oe = T([], !0)
      , Q = T(void 0, !0)
      , dt = Ji(p1);
    function Ye(O, q, ve, qe) {
        Ts( () => {
            var Ie;
            try {
                Ie = dt(O, q, ve, qe)
            } catch (Me) {
                Ie = [{
                    path: [],
                    message: "Failed to validate: " + Me.message,
                    severity: zo.warning
                }]
            }
            Wt(Ie, r(oe)) || (o("validationErrors changed:", Ie),
            h(oe, Ie),
            h(Q, function(Me, jt) {
                var yt;
                return jt.forEach(tn => {
                    yt = Ng(Me, yt, tn.path, (Un, dn) => ke(ke({}, dn), {}, {
                        validationError: tn
                    }))
                }
                ),
                jt.forEach(tn => {
                    for (var Un = tn.path; Un.length > 0; )
                        Un = rn(Un),
                        yt = Ng(Me, yt, Un, (dn, Jn) => Jn.validationError ? Jn : ke(ke({}, Jn), {}, {
                            validationError: {
                                isChildError: !0,
                                path: Un,
                                message: "Contains invalid data",
                                severity: zo.warning
                            }
                        }))
                }
                ),
                yt
            }(O, r(oe))))
        }
        , Ie => o("validationErrors updated in ".concat(Ie, " ms")))
    }
    function he() {
        return o("validate"),
        ne ? {
            parseError: ne,
            isRepairable: !1
        } : (Ye(r(F), M(), H(), Z()),
        vn(r(oe)) ? void 0 : {
            validationErrors: r(oe)
        })
    }
    function ft() {
        return r(F)
    }
    function Zt() {
        return r(J)
    }
    function Tn() {
        return r(U)
    }
    function _n(O) {
        o("applyExternalContent", {
            updatedContent: O
        }),
        Kl(O) ? function(q) {
            if (q !== void 0) {
                var ve = !Wt(r(F), q);
                if (o("update external json", {
                    isChanged: ve,
                    currentlyText: r(F) === void 0
                }),
                !!ve) {
                    var qe = {
                        documentState: r(J),
                        selection: r(U),
                        json: r(F),
                        text: r(we),
                        textIsRepaired: r(ze)
                    };
                    h(F, q),
                    h(J, Co(q, r(J))),
                    Xt(r(F)),
                    h(we, void 0),
                    h(ze, !1),
                    ne = void 0,
                    Rn(r(F)),
                    on(qe)
                }
            }
        }(O.json) : Jl(O) && function(q) {
            if (!(q === void 0 || Kl(x()))) {
                var ve = q !== r(we);
                if (o("update external text", {
                    isChanged: ve
                }),
                !!ve) {
                    var qe = {
                        documentState: r(J),
                        selection: r(U),
                        json: r(F),
                        text: r(we),
                        textIsRepaired: r(ze)
                    };
                    try {
                        h(F, Y()(q)),
                        h(J, Co(r(F), r(J))),
                        Xt(r(F)),
                        h(we, q),
                        h(ze, !1),
                        ne = void 0
                    } catch (Ie) {
                        try {
                            h(F, Y()(ta(q))),
                            h(J, Co(r(F), r(J))),
                            Xt(r(F)),
                            h(we, q),
                            h(ze, !0),
                            ne = void 0,
                            Rn(r(F))
                        } catch {
                            h(F, void 0),
                            h(J, void 0),
                            h(we, x().text),
                            h(ze, !1),
                            ne = r(we) !== void 0 && r(we) !== "" ? Vs(r(we), Ie.message || String(Ie)) : void 0
                        }
                    }
                    Rn(r(F)),
                    on(qe)
                }
            }
        }(O.text)
    }
    function Xt(O) {
        Be || (Be = !0,
        h(J, ts(O, r(J), [])))
    }
    function Rn(O) {
        r(U) && (Ia(O, Hi(r(U))) && Ia(O, Qe(r(U))) || (o("clearing selection: path does not exist anymore", r(U)),
        h(U, bs(O, r(J)))))
    }
    function on(O) {
        if (O.json !== void 0 || O.text !== void 0) {
            var q = r(F) !== void 0 && O.json !== void 0;
            w().add({
                type: "tree",
                undo: {
                    patch: q ? [{
                        op: "replace",
                        path: "",
                        value: O.json
                    }] : void 0,
                    json: O.json,
                    text: O.text,
                    documentState: O.documentState,
                    textIsRepaired: O.textIsRepaired,
                    selection: ja(O.selection),
                    sortedColumn: void 0
                },
                redo: {
                    patch: q ? [{
                        op: "replace",
                        path: "",
                        value: r(F)
                    }] : void 0,
                    json: r(F),
                    text: r(we),
                    documentState: r(J),
                    textIsRepaired: r(ze),
                    selection: ja(r(U)),
                    sortedColumn: void 0
                }
            })
        }
    }
    function It(O, q) {
        var ve;
        if (o("patch", O, q),
        r(F) === void 0)
            throw new Error("Cannot apply patch: no JSON");
        var qe = r(F)
          , Ie = {
            json: void 0,
            text: r(we),
            documentState: r(J),
            selection: ja(r(U)),
            textIsRepaired: r(ze),
            sortedColumn: void 0
        }
          , Me = Zw(r(F), O)
          , jt = Fw(r(F), r(J), O)
          , yt = (ve = Ys(r(F), O)) !== null && ve !== void 0 ? ve : r(U)
          , tn = typeof q == "function" ? q(jt.json, jt.documentState, yt) : void 0;
        return h(F, tn?.json !== void 0 ? tn.json : jt.json),
        h(J, tn?.state !== void 0 ? tn.state : jt.documentState),
        h(U, tn?.selection !== void 0 ? tn.selection : yt),
        h(we, void 0),
        h(ze, !1),
        h(mt, void 0),
        h(Fe, void 0),
        ne = void 0,
        Rn(r(F)),
        w().add({
            type: "tree",
            undo: ke({
                patch: Me
            }, Ie),
            redo: {
                patch: O,
                json: void 0,
                text: r(we),
                documentState: r(J),
                selection: ja(r(U)),
                sortedColumn: void 0,
                textIsRepaired: r(ze)
            }
        }),
        {
            json: r(F),
            previousJson: qe,
            undo: Me,
            redo: O
        }
    }
    function St() {
        !m() && r(U) && h(U, zp(Qe(r(U))))
    }
    function Ht() {
        if (!m() && r(U)) {
            var O = Qe(r(U))
              , q = Ke(r(F), O);
            xr(q) ? function(ve, qe) {
                o("openJSONEditorModal", {
                    path: ve,
                    value: qe
                }),
                X = !0,
                qt()({
                    content: {
                        json: qe
                    },
                    path: ve,
                    onPatch: r(Pr).onPatch,
                    onClose: () => {
                        X = !1,
                        setTimeout(kn)
                    }
                })
            }(O, q) : h(U, kc(O))
        }
    }
    function hn() {
        if (!m() && jn(r(U))) {
            var O = Qe(r(U))
              , q = Tt(O)
              , ve = Ke(r(F), O)
              , qe = !ya(r(F), r(J), O)
              , Ie = qe ? String(ve) : gl(String(ve), H());
            o("handleToggleEnforceString", {
                enforceString: qe,
                value: ve,
                updatedValue: Ie
            }),
            ut([{
                op: "replace",
                path: q,
                value: Ie
            }], (Me, jt) => ({
                state: gd(r(F), jt, O, {
                    type: "value",
                    enforceString: qe
                })
            }))
        }
    }
    function Ut() {
        return r(ze) && r(F) !== void 0 && W(r(F)),
        r(F) !== void 0 ? {
            json: r(F)
        } : {
            text: r(we) || ""
        }
    }
    function He() {
        return Yt.apply(this, arguments)
    }
    function Yt() {
        return Yt = wt(function*() {
            var O = !(arguments.length > 0 && arguments[0] !== void 0) || arguments[0];
            yield w1({
                json: r(F),
                selection: r(U),
                indentation: O ? ee() : void 0,
                readOnly: m(),
                parser: H(),
                onPatch: ut
            })
        }),
        Yt.apply(this, arguments)
    }
    function Vt() {
        return bn.apply(this, arguments)
    }
    function bn() {
        return bn = wt(function*() {
            var O = !(arguments.length > 0 && arguments[0] !== void 0) || arguments[0];
            r(F) !== void 0 && (yield k1({
                json: r(F),
                selection: r(U),
                indentation: O ? ee() : void 0,
                parser: H()
            }))
        }),
        bn.apply(this, arguments)
    }
    function or(O) {
        var q;
        O.preventDefault(),
        Gn((q = O.clipboardData) === null || q === void 0 ? void 0 : q.getData("text/plain"))
    }
    function Bn() {
        return Mr.apply(this, arguments)
    }
    function Mr() {
        return (Mr = wt(function*() {
            try {
                Gn(yield navigator.clipboard.readText())
            } catch (O) {
                console.error(O),
                h(D, !0)
            }
        })).apply(this, arguments)
    }
    function Gn(O) {
        O !== void 0 && _1({
            clipboardText: O,
            json: r(F),
            selection: r(U),
            readOnly: m(),
            parser: H(),
            onPatch: ut,
            onChangeText: ce,
            onPasteMultilineText: sr,
            openRepairModal: fr
        })
    }
    function fr(O, q) {
        h(le, {
            text: O,
            onParse: ve => wu(ve, qe => yu(qe, H())),
            onRepair: Ew,
            onApply: q,
            onClose: kn
        })
    }
    function Tr() {
        S1({
            json: r(F),
            text: r(we),
            selection: r(U),
            keepSelection: !1,
            readOnly: m(),
            onChange: _e(),
            onPatch: ut
        })
    }
    function Sr() {
        !m() && r(F) !== void 0 && r(U) && Ps && !vn(Qe(r(U))) && (o("duplicate", {
            selection: r(U)
        }),
        ut(Kw(r(F), Si(r(F), r(U)))))
    }
    function Cr() {
        m() || !r(U) || !Hn(r(U)) && !jn(r(U)) || vn(Qe(r(U))) || (o("extract", {
            selection: r(U)
        }),
        ut(Yw(r(F), r(U)), (O, q) => {
            if (xr(O))
                return {
                    state: Yd(O, q, [])
                }
        }
        ))
    }
    function ar(O) {
        zc({
            insertType: O,
            selectInside: !0,
            initialValue: void 0,
            json: r(F),
            selection: r(U),
            readOnly: m(),
            parser: H(),
            onPatch: ut,
            onReplaceJson: W
        })
    }
    function Or(O) {
        Wr(r(U)) && h(U, nn(r(U).path)),
        r(U) || h(U, bs(r(F), r(J))),
        ar(O)
    }
    function be(O) {
        if (!m() && r(U))
            if (Nu(r(U)))
                try {
                    var q = Hi(r(U))
                      , ve = Ke(r(F), q)
                      , qe = function(Me, jt, yt) {
                        if (jt === "array") {
                            if (Array.isArray(Me))
                                return Me;
                            if (On(Me))
                                return Kh(Me);
                            if (typeof Me == "string")
                                try {
                                    var tn = yt.parse(Me);
                                    if (Array.isArray(tn))
                                        return tn;
                                    if (On(tn))
                                        return Kh(tn)
                                } catch {
                                    return [Me]
                                }
                            return [Me]
                        }
                        if (jt === "object") {
                            if (Array.isArray(Me))
                                return Jh(Me);
                            if (On(Me))
                                return Me;
                            if (typeof Me == "string")
                                try {
                                    var Un = yt.parse(Me);
                                    if (On(Un))
                                        return Un;
                                    if (Array.isArray(Un))
                                        return Jh(Un)
                                } catch {
                                    return {
                                        value: Me
                                    }
                                }
                            return {
                                value: Me
                            }
                        }
                        if (jt === "value")
                            return xr(Me) ? yt.stringify(Me) : Me;
                        throw new Error("Cannot convert ".concat(bp(Me, yt), " to ").concat(jt))
                    }(ve, O, H());
                    if (qe === ve)
                        return;
                    var Ie = [{
                        op: "replace",
                        path: Tt(q),
                        value: qe
                    }];
                    o("handleConvert", {
                        selection: r(U),
                        path: q,
                        type: O,
                        operations: Ie
                    }),
                    ut(Ie, (Me, jt) => ({
                        state: r(U) ? ts(Me, jt, Qe(r(U))) : r(J)
                    }))
                } catch (Me) {
                    se()(Me)
                }
            else
                se()(new Error("Cannot convert current selection to ".concat(O)))
    }
    function an() {
        if (r(U)) {
            var O = pg(r(F), r(J), r(U), !1)
              , q = rn(Qe(r(U)));
            O && !vn(Qe(O)) && Wt(q, rn(Qe(O))) ? h(U, Ba(Qe(O))) : h(U, Ya(q)),
            o("insert before", {
                selection: r(U),
                selectionBefore: O,
                parentPath: q
            }),
            tr(),
            Nt()
        }
    }
    function te() {
        if (r(U)) {
            var O = gi(r(F), r(U));
            o("insert after", O),
            h(U, Ba(O)),
            tr(),
            Nt()
        }
    }
    function Re(O) {
        return at.apply(this, arguments)
    }
    function at() {
        return (at = wt(function*(O) {
            yield C1({
                char: O,
                selectInside: !0,
                json: r(F),
                selection: r(U),
                readOnly: m(),
                parser: H(),
                onPatch: ut,
                onReplaceJson: W,
                onSelect: _t
            })
        })).apply(this, arguments)
    }
    function Dt() {
        if (!m() && w().canUndo) {
            var O = w().undo();
            if (yc(O)) {
                var q = {
                    json: r(F),
                    text: r(we)
                };
                h(F, O.undo.patch ? Zo(r(F), O.undo.patch) : O.undo.json),
                h(J, O.undo.documentState),
                h(U, O.undo.selection),
                h(we, O.undo.text),
                h(ze, O.undo.textIsRepaired),
                ne = void 0,
                o("undo", {
                    item: O,
                    json: r(F),
                    documentState: r(J),
                    selection: r(U)
                }),
                xn(q, O.undo.patch && O.redo.patch ? {
                    json: r(F),
                    previousJson: q.json,
                    redo: O.undo.patch,
                    undo: O.redo.patch
                } : void 0),
                kn(),
                r(U) && rt(Qe(r(U)), {
                    scrollToWhenVisible: !1
                })
            } else
                De()(O)
        }
    }
    function Xe() {
        if (!m() && w().canRedo) {
            var O = w().redo();
            if (yc(O)) {
                var q = {
                    json: r(F),
                    text: r(we)
                };
                h(F, O.redo.patch ? Zo(r(F), O.redo.patch) : O.redo.json),
                h(J, O.redo.documentState),
                h(U, O.redo.selection),
                h(we, O.redo.text),
                h(ze, O.redo.textIsRepaired),
                ne = void 0,
                o("redo", {
                    item: O,
                    json: r(F),
                    documentState: r(J),
                    selection: r(U)
                }),
                xn(q, O.undo.patch && O.redo.patch ? {
                    json: r(F),
                    previousJson: q.json,
                    redo: O.redo.patch,
                    undo: O.undo.patch
                } : void 0),
                kn(),
                r(U) && rt(Qe(r(U)), {
                    scrollToWhenVisible: !1
                })
            } else
                Ne()(O)
        }
    }
    function Gt(O) {
        var q;
        m() || r(F) === void 0 || (X = !0,
        ye()({
            id: i,
            json: r(F),
            rootPath: O,
            onSort: (q = wt(function*(ve) {
                var {operations: qe} = ve;
                o("onSort", O, qe),
                ut(qe, (Ie, Me) => ({
                    state: Yd(Ie, Me, O),
                    selection: nn(O)
                }))
            }),
            function(ve) {
                return q.apply(this, arguments)
            }
            ),
            onClose: () => {
                X = !1,
                setTimeout(kn)
            }
        }))
    }
    function Sn() {
        r(U) && Gt(gg(r(F), r(U)))
    }
    function Pt() {
        Gt([])
    }
    function In(O) {
        if (r(F) !== void 0) {
            var {id: q, onTransform: ve, onClose: qe} = O
              , Ie = O.rootPath || [];
            X = !0,
            ct()({
                id: q || s,
                json: r(F),
                rootPath: Ie,
                onTransform: Me => {
                    ve ? ve({
                        operations: Me,
                        json: r(F),
                        transformedJson: Zo(r(F), Me)
                    }) : (o("onTransform", Ie, Me),
                    ut(Me, (jt, yt) => ({
                        state: Yd(jt, yt, Ie),
                        selection: nn(Ie)
                    })))
                }
                ,
                onClose: () => {
                    X = !1,
                    setTimeout(kn),
                    qe && qe()
                }
            })
        }
    }
    function pt() {
        r(U) && In({
            rootPath: gg(r(F), r(U))
        })
    }
    function en() {
        In({
            rootPath: []
        })
    }
    function rt(O) {
        return zt.apply(this, arguments)
    }
    function zt() {
        return zt = wt(function*(O) {
            var {scrollToWhenVisible: q=!0, element: ve} = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
            h(J, Xo(r(F), r(J), O, Ju));
            var qe = ve ?? Mn(O);
            if (o("scrollTo", {
                path: O,
                elem: qe,
                refContents: r(d)
            }),
            !qe || !r(d))
                return Promise.resolve();
            var Ie = r(d).getBoundingClientRect()
              , Me = qe.getBoundingClientRect();
            if (!q && Me.bottom > Ie.top && Me.top < Ie.bottom)
                return Promise.resolve();
            var jt = -Ie.height / 4;
            return new Promise(yt => {
                f(qe, {
                    container: r(d),
                    offset: jt,
                    duration: 300,
                    callback: () => yt()
                })
            }
            )
        }),
        zt.apply(this, arguments)
    }
    function Mn(O) {
        var q, ve;
        return tr(),
        (q = (ve = r(d)) === null || ve === void 0 ? void 0 : ve.querySelector('div[data-path="'.concat(Gu(O), '"]'))) !== null && q !== void 0 ? q : void 0
    }
    function ir(O) {
        var q, ve;
        return tr(),
        (q = (ve = r(d)) === null || ve === void 0 ? void 0 : ve.querySelector('span[data-search-result-index="'.concat(O, '"]'))) !== null && q !== void 0 ? q : void 0
    }
    function Ft(O) {
        var q = Mn(O);
        if (q && r(d)) {
            var ve = r(d).getBoundingClientRect()
              , qe = q.getBoundingClientRect()
              , Ie = xr(Ke(r(F), O)) ? 20 : qe.height;
            qe.top < ve.top + 20 ? f(q, {
                container: r(d),
                offset: -20,
                duration: 0
            }) : qe.top + Ie > ve.bottom - 20 && f(q, {
                container: r(d),
                offset: -(ve.height - Ie - 20),
                duration: 0
            })
        }
    }
    function xn(O, q) {
        if (O.json !== void 0 || O?.text !== void 0) {
            if (r(we) !== void 0) {
                var ve, qe = {
                    text: r(we),
                    json: void 0
                };
                (ve = _e()) === null || ve === void 0 || ve(qe, O, {
                    contentErrors: he(),
                    patchResult: q
                })
            } else if (r(F) !== void 0) {
                var Ie, Me = {
                    text: void 0,
                    json: r(F)
                };
                (Ie = _e()) === null || Ie === void 0 || Ie(Me, O, {
                    contentErrors: he(),
                    patchResult: q
                })
            }
        }
    }
    function ut(O, q) {
        o("handlePatch", O, q);
        var ve = {
            json: r(F),
            text: r(we)
        }
          , qe = It(O, q);
        return xn(ve, qe),
        qe
    }
    function W(O, q) {
        var ve = {
            json: r(F),
            text: r(we)
        }
          , qe = {
            documentState: r(J),
            selection: r(U),
            json: r(F),
            text: r(we),
            textIsRepaired: r(ze)
        }
          , Ie = Xo(r(F), Co(O, r(J)), [], Nl)
          , Me = typeof q == "function" ? q(O, Ie, r(U)) : void 0;
        h(F, Me?.json !== void 0 ? Me.json : O),
        h(J, Me?.state !== void 0 ? Me.state : Ie),
        h(U, Me?.selection !== void 0 ? Me.selection : r(U)),
        h(we, void 0),
        h(ze, !1),
        ne = void 0,
        Rn(r(F)),
        on(qe),
        xn(ve, void 0)
    }
    function ce(O, q) {
        o("handleChangeText");
        var ve = {
            json: r(F),
            text: r(we)
        }
          , qe = {
            documentState: r(J),
            selection: r(U),
            json: r(F),
            text: r(we),
            textIsRepaired: r(ze)
        };
        try {
            h(F, Y()(O)),
            h(J, Xo(r(F), Co(r(F), r(J)), [], Nl)),
            h(we, void 0),
            h(ze, !1),
            ne = void 0
        } catch (Me) {
            try {
                h(F, Y()(ta(O))),
                h(J, Xo(r(F), Co(r(F), r(J)), [], Nl)),
                h(we, O),
                h(ze, !0),
                ne = void 0
            } catch {
                h(F, void 0),
                h(J, Dv({
                    json: r(F),
                    expand: Nl
                })),
                h(we, O),
                h(ze, !1),
                ne = r(we) !== "" ? Vs(r(we), Me.message || String(Me)) : void 0
            }
        }
        if (typeof q == "function") {
            var Ie = q(r(F), r(J), r(U));
            h(F, Ie?.json !== void 0 ? Ie.json : r(F)),
            h(J, Ie?.state !== void 0 ? Ie.state : r(J)),
            h(U, Ie?.selection !== void 0 ? Ie.selection : r(U))
        }
        Rn(r(F)),
        on(qe),
        xn(ve, void 0)
    }
    function Te(O, q) {
        var ve = arguments.length > 2 && arguments[2] !== void 0 && arguments[2];
        o("handleExpand", {
            path: O,
            expanded: q,
            recursive: ve
        }),
        q ? re(O, ve ? Pp : fg) : Ce(O, ve),
        kn()
    }
    function vt() {
        Te([], !0, !0)
    }
    function sn() {
        Te([], !1, !0)
    }
    function Jt(O) {
        o("openFind", {
            findAndReplace: O
        }),
        h(Lt, !1),
        h(We, !1),
        tr(),
        h(Lt, !0),
        h(We, O)
    }
    function Wn(O, q) {
        o("handleExpandSection", O, q),
        h(J, function(ve, qe, Ie, Me) {
            return Ks(ve, qe, Ie, (jt, yt) => {
                if (!Br(yt))
                    return yt;
                var tn = Dw(yt.visibleSections.concat(Me));
                return ke(ke({}, yt), {}, {
                    visibleSections: tn
                })
            }
            )
        }(r(F), r(J), O, q))
    }
    function Zn(O) {
        o("pasted json as text", O),
        h(mt, O)
    }
    function sr(O) {
        o("pasted multiline text", {
            pastedText: O
        }),
        h(Fe, O)
    }
    function Nn(O) {
        var q, {anchor: ve, left: qe, top: Ie, width: Me, height: jt, offsetTop: yt, offsetLeft: tn, showTip: Un} = O, dn = function($n) {
            var {json: lr, documentState: Cn, selection: bt, readOnly: mn, onEditKey: xt, onEditValue: tt, onToggleEnforceString: Bt, onCut: hr, onCopy: Vr, onPaste: Kn, onRemove: mr, onDuplicate: Yr, onExtract: Ma, onInsertBefore: wo, onInsert: Ko, onConvert: fa, onInsertAfter: Yo, onSort: Xr, onTransform: Qr} = $n
              , ko = lr !== void 0
              , Pa = !!bt
              , _o = !!bt && vn(Qe(bt))
              , kr = bt ? Ke(lr, Qe(bt)) : void 0
              , er = Array.isArray(kr) ? "Edit array" : On(kr) ? "Edit object" : "Edit value"
              , Ar = ko && (Hn(bt) || Wr(bt) || jn(bt))
              , pa = bt && !_o ? Ke(lr, rn(Qe(bt))) : void 0
              , cs = !mn && ko && wc(bt) && !_o && !Array.isArray(pa)
              , ds = !mn && ko && bt !== void 0 && wc(bt)
              , bl = ds && !xr(kr)
              , vs = !mn && Ar
              , xl = Ar
              , _d = !mn && Pa
              , Sd = !mn && ko && Ar && !_o
              , Cd = !mn && ko && bt !== void 0 && (Hn(bt) || jn(bt)) && !_o
              , ha = Ar
              , Ni = ha ? "Convert to:" : "Insert:"
              , Nr = !mn && (qr(bt) && Array.isArray(kr) || bo(bt) && Array.isArray(pa))
              , ho = !mn && (ha ? Nu(bt) && !On(kr) : Pa)
              , jl = !mn && (ha ? Nu(bt) && !Array.isArray(kr) : Pa)
              , yl = !mn && (ha ? Nu(bt) && xr(kr) : Pa)
              , Li = bt !== void 0 && ya(lr, Cn, Qe(bt));
            function ro(wl) {
                Ar ? wl !== "structure" && fa(wl) : Ko(wl)
            }
            return [{
                type: "row",
                items: [{
                    type: "button",
                    onClick: () => xt(),
                    icon: Is,
                    text: "Edit key",
                    title: "Edit the key (Double-click on the key)",
                    disabled: !cs
                }, {
                    type: "dropdown-button",
                    main: {
                        type: "button",
                        onClick: () => tt(),
                        icon: Is,
                        text: er,
                        title: "Edit the value (Double-click on the value)",
                        disabled: !ds
                    },
                    width: "11em",
                    items: [{
                        type: "button",
                        icon: Is,
                        text: er,
                        title: "Edit the value (Double-click on the value)",
                        onClick: () => tt(),
                        disabled: !ds
                    }, {
                        type: "button",
                        icon: Li ? xm : jm,
                        text: "Enforce string",
                        title: "Enforce keeping the value as string when it contains a numeric value",
                        onClick: () => Bt(),
                        disabled: !bl
                    }]
                }]
            }, {
                type: "separator"
            }, {
                type: "row",
                items: [{
                    type: "dropdown-button",
                    main: {
                        type: "button",
                        onClick: () => hr(!0),
                        icon: Ns,
                        text: "Cut",
                        title: "Cut selected contents, formatted with indentation (Ctrl+X)",
                        disabled: !vs
                    },
                    width: "10em",
                    items: [{
                        type: "button",
                        icon: Ns,
                        text: "Cut formatted",
                        title: "Cut selected contents, formatted with indentation (Ctrl+X)",
                        onClick: () => hr(!0),
                        disabled: !vs
                    }, {
                        type: "button",
                        icon: Ns,
                        text: "Cut compacted",
                        title: "Cut selected contents, without indentation (Ctrl+Shift+X)",
                        onClick: () => hr(!1),
                        disabled: !vs
                    }]
                }, {
                    type: "dropdown-button",
                    main: {
                        type: "button",
                        onClick: () => Vr(!0),
                        icon: si,
                        text: "Copy",
                        title: "Copy selected contents, formatted with indentation (Ctrl+C)",
                        disabled: !xl
                    },
                    width: "12em",
                    items: [{
                        type: "button",
                        icon: si,
                        text: "Copy formatted",
                        title: "Copy selected contents, formatted with indentation (Ctrl+C)",
                        onClick: () => Vr(!0),
                        disabled: !xl
                    }, {
                        type: "button",
                        icon: si,
                        text: "Copy compacted",
                        title: "Copy selected contents, without indentation (Ctrl+Shift+C)",
                        onClick: () => Vr(!1),
                        disabled: !xl
                    }]
                }, {
                    type: "button",
                    onClick: () => Kn(),
                    icon: ym,
                    text: "Paste",
                    title: "Paste clipboard contents (Ctrl+V)",
                    disabled: !_d
                }]
            }, {
                type: "separator"
            }, {
                type: "row",
                items: [{
                    type: "column",
                    items: [{
                        type: "button",
                        onClick: () => Yr(),
                        icon: wm,
                        text: "Duplicate",
                        title: "Duplicate selected contents (Ctrl+D)",
                        disabled: !Sd
                    }, {
                        type: "button",
                        onClick: () => Ma(),
                        icon: Lk,
                        text: "Extract",
                        title: "Extract selected contents",
                        disabled: !Cd
                    }, {
                        type: "button",
                        onClick: () => Xr(),
                        icon: nc,
                        text: "Sort",
                        title: "Sort array or object contents",
                        disabled: mn || !Ar
                    }, {
                        type: "button",
                        onClick: () => Qr(),
                        icon: rc,
                        text: "Transform",
                        title: "Transform array or object contents (filter, sort, project)",
                        disabled: mn || !Ar
                    }, {
                        type: "button",
                        onClick: () => mr(),
                        icon: sv,
                        text: "Remove",
                        title: "Remove selected contents (Delete)",
                        disabled: mn || !Ar
                    }]
                }, {
                    type: "column",
                    items: [{
                        type: "label",
                        text: Ni
                    }, {
                        type: "button",
                        onClick: () => ro("structure"),
                        icon: ha ? Eu : Es,
                        text: "Structure",
                        title: Ni + " structure like the first item in the array",
                        disabled: !Nr
                    }, {
                        type: "button",
                        onClick: () => ro("object"),
                        icon: ha ? Eu : Es,
                        text: "Object",
                        title: Ni + " object",
                        disabled: !ho
                    }, {
                        type: "button",
                        onClick: () => ro("array"),
                        icon: ha ? Eu : Es,
                        text: "Array",
                        title: Ni + " array",
                        disabled: !jl
                    }, {
                        type: "button",
                        onClick: () => ro("value"),
                        icon: ha ? Eu : Es,
                        text: "Value",
                        title: Ni + " value",
                        disabled: !yl
                    }]
                }]
            }, {
                type: "separator"
            }, {
                type: "row",
                items: [{
                    type: "button",
                    onClick: () => wo(),
                    icon: Uk,
                    text: "Insert before",
                    title: "Select area before current entry to insert or paste contents",
                    disabled: mn || !Ar || _o
                }, {
                    type: "button",
                    onClick: () => Yo(),
                    icon: Dk,
                    text: "Insert after",
                    title: "Select area after current entry to insert or paste contents",
                    disabled: mn || !Ar || _o
                }]
            }]
        }({
            json: r(F),
            documentState: r(J),
            selection: r(U),
            readOnly: m(),
            onEditKey: St,
            onEditValue: Ht,
            onToggleEnforceString: hn,
            onCut: He,
            onCopy: Vt,
            onPaste: Bn,
            onRemove: Tr,
            onDuplicate: Sr,
            onExtract: Cr,
            onInsertBefore: an,
            onInsert: Or,
            onInsertAfter: te,
            onConvert: be,
            onSort: Sn,
            onTransform: pt
        }), Jn = (q = Pe()(dn)) !== null && q !== void 0 ? q : dn;
        if (Jn !== !1) {
            var Ot = {
                left: qe,
                top: Ie,
                offsetTop: yt,
                offsetLeft: tn,
                width: Me,
                height: jt,
                anchor: ve,
                closeOnOuterClick: !0,
                onClose: () => {
                    X = !1,
                    kn()
                }
            };
            X = !0;
            var gr = l(E1, {
                tip: Un ? "Tip: you can open this context menu via right-click or with Ctrl+Q" : void 0,
                items: Jn,
                onRequestClose: () => u(gr)
            }, Ot)
        }
    }
    function Nt(O) {
        if (!Fr(r(U)))
            if (O && (O.stopPropagation(),
            O.preventDefault()),
            O && O.type === "contextmenu" && O.target !== r(c))
                Nn({
                    left: O.clientX,
                    top: O.clientY,
                    width: Ua,
                    height: La,
                    showTip: !1
                });
            else {
                var q, ve = (q = r(d)) === null || q === void 0 ? void 0 : q.querySelector(".jse-context-menu-pointer.jse-selected");
                if (ve)
                    Nn({
                        anchor: ve,
                        offsetTop: 2,
                        width: Ua,
                        height: La,
                        showTip: !1
                    });
                else {
                    var qe, Ie = (qe = r(d)) === null || qe === void 0 ? void 0 : qe.getBoundingClientRect();
                    Ie && Nn({
                        top: Ie.top + 2,
                        left: Ie.left + 2,
                        width: Ua,
                        height: La,
                        showTip: !1
                    })
                }
            }
    }
    function Pn(O) {
        Nn({
            anchor: Lw(O.target, "BUTTON"),
            offsetTop: 0,
            width: Ua,
            height: La,
            showTip: !0
        })
    }
    function eo() {
        return Ct.apply(this, arguments)
    }
    function Ct() {
        return (Ct = wt(function*() {
            if (o("apply pasted json", r(mt)),
            r(mt)) {
                var {onPasteAsJson: O} = r(mt);
                h(mt, void 0),
                O(),
                setTimeout(kn)
            }
        })).apply(this, arguments)
    }
    function pr() {
        return Ge.apply(this, arguments)
    }
    function Ge() {
        return (Ge = wt(function*() {
            o("apply pasted multiline text", r(Fe)),
            r(Fe) && (Gn(JSON.stringify(r(Fe))),
            setTimeout(kn))
        })).apply(this, arguments)
    }
    function un() {
        o("clear pasted json"),
        h(mt, void 0),
        kn()
    }
    function wn() {
        o("clear pasted multiline text"),
        h(Fe, void 0),
        kn()
    }
    function Ln() {
        fe()(zr.text)
    }
    function uo(O) {
        h(U, O),
        kn(),
        rt(Qe(O))
    }
    function kn() {
        o("focus"),
        r(c) && (r(c).focus(),
        r(c).select())
    }
    function yo(O) {
        return function(q, ve, qe) {
            var Ie = rn(qe)
              , Me = [gt(qe)]
              , jt = Ke(q, Ie)
              , yt = jt ? Kd(jt, ve, Me) : void 0;
            return yt ? nn(Ie.concat(yt)) : Ba(qe)
        }(r(F), r(J), O)
    }
    function Er(O) {
        r(n) && r(n).onDrag(O)
    }
    function Ir() {
        r(n) && r(n).onDragEnd()
    }
    var Pr = T(void 0, !0);
    V( () => r(U), () => {
        var O;
        O = r(U),
        Wt(O, y()) || (o("onSelect", O),
        Oe()(O))
    }
    ),
    V( () => (b(k()),
    b(I())), () => {
        h(Se, xp({
            escapeControlCharacters: k(),
            escapeUnicodeCharacters: I()
        }))
    }
    ),
    V( () => r(Lt), () => {
        (function(O) {
            r(d) && O && r(d).scrollTop === 0 && (Oo(d, r(d).style.overflowAnchor = "none"),
            Oo(d, r(d).scrollTop += Il),
            setTimeout( () => {
                r(d) && Oo(d, r(d).style.overflowAnchor = "")
            }
            ))
        }
        )(r(Lt))
    }
    ),
    V( () => b(x()), () => {
        _n(x())
    }
    ),
    V( () => b(y()), () => {
        (function(O) {
            Wt(r(U), O) || (o("applyExternalSelection", {
                selection: r(U),
                externalSelection: O
            }),
            Zl(O) && h(U, O))
        }
        )(y())
    }
    ),
    V( () => (r(F),
    b(M()),
    b(H()),
    b(Z())), () => {
        Ye(r(F), M(), H(), Z())
    }
    ),
    V( () => (r(d),
    Ig), () => {
        h(n, r(d) ? Ig(r(d)) : void 0)
    }
    ),
    V( () => (b(m()),
    b(S()),
    b(H()),
    r(Se),
    b(je()),
    b(Ve())), () => {
        h(Pr, {
            mode: zr.tree,
            readOnly: m(),
            truncateTextSize: S(),
            parser: H(),
            normalization: r(Se),
            getJson: ft,
            getDocumentState: Zt,
            getSelection: Tn,
            findElement: Mn,
            findNextInside: yo,
            focus: kn,
            onPatch: ut,
            onInsert: ar,
            onExpand: Te,
            onSelect: _t,
            onFind: Jt,
            onExpandSection: Wn,
            onPasteJson: Zn,
            onRenderValue: je(),
            onContextMenu: Nn,
            onClassName: Ve() || ( () => {}
            ),
            onDrag: Er,
            onDragEnd: Ir
        })
    }
    ),
    V( () => r(Pr), () => {
        o("context changed", r(Pr))
    }
    ),
    An(),
    Rt(!0);
    var to = OT();
    me("mousedown", $a, function(O) {
        !ml(O.target, q => q === r(v)) && Fr(r(U)) && (o("click outside the editor, exit edit mode"),
        h(U, ja(r(U))),
        p && r(c) && (r(c).focus(),
        r(c).blur()),
        o("blur (outside editor)"),
        r(c) && r(c).blur())
    });
    var E, G = ht(to), xe = z(G), Le = O => {
        (function(q, ve) {
            it(ve, !1);
            var qe = T(void 0, !0)
              , Ie = T(void 0, !0)
              , Me = T(void 0, !0)
              , jt = g(ve, "json", 9)
              , yt = g(ve, "selection", 9)
              , tn = g(ve, "readOnly", 9)
              , Un = g(ve, "showSearch", 13, !1)
              , dn = g(ve, "history", 9)
              , Jn = g(ve, "onExpandAll", 9)
              , Ot = g(ve, "onCollapseAll", 9)
              , gr = g(ve, "onUndo", 9)
              , $n = g(ve, "onRedo", 9)
              , lr = g(ve, "onSort", 9)
              , Cn = g(ve, "onTransform", 9)
              , bt = g(ve, "onContextMenu", 9)
              , mn = g(ve, "onCopy", 9)
              , xt = g(ve, "onRenderMenu", 9);
            function tt() {
                Un(!Un())
            }
            var Bt = T(void 0, !0)
              , hr = T(void 0, !0)
              , Vr = T(void 0, !0)
              , Kn = T(void 0, !0);
            V( () => b(jt()), () => {
                h(qe, jt() !== void 0)
            }
            ),
            V( () => (r(qe),
            b(yt()),
            jn), () => {
                h(Ie, r(qe) && (Hn(yt()) || Wr(yt()) || jn(yt())))
            }
            ),
            V( () => (b(Jn()),
            b(jt())), () => {
                h(Bt, {
                    type: "button",
                    icon: wz,
                    title: "Expand all",
                    className: "jse-expand-all",
                    onClick: Jn(),
                    disabled: !xr(jt())
                })
            }
            ),
            V( () => (b(Ot()),
            b(jt())), () => {
                h(hr, {
                    type: "button",
                    icon: kz,
                    title: "Collapse all",
                    className: "jse-collapse-all",
                    onClick: Ot(),
                    disabled: !xr(jt())
                })
            }
            ),
            V( () => b(jt()), () => {
                h(Vr, {
                    type: "button",
                    icon: $c,
                    title: "Search (Ctrl+F)",
                    className: "jse-search",
                    onClick: tt,
                    disabled: jt() === void 0
                })
            }
            ),
            V( () => (b(tn()),
            r(Bt),
            r(hr),
            b(lr()),
            b(jt()),
            b(Cn()),
            r(Vr),
            b(bt()),
            b(gr()),
            b(dn()),
            b($n()),
            b(mn()),
            r(Ie)), () => {
                h(Kn, tn() ? [r(Bt), r(hr), {
                    type: "separator"
                }, {
                    type: "button",
                    icon: si,
                    title: "Copy (Ctrl+C)",
                    className: "jse-copy",
                    onClick: mn(),
                    disabled: !r(Ie)
                }, {
                    type: "separator"
                }, r(Vr), {
                    type: "space"
                }] : [r(Bt), r(hr), {
                    type: "separator"
                }, {
                    type: "button",
                    icon: nc,
                    title: "Sort",
                    className: "jse-sort",
                    onClick: lr(),
                    disabled: tn() || jt() === void 0
                }, {
                    type: "button",
                    icon: rc,
                    title: "Transform contents (filter, sort, project)",
                    className: "jse-transform",
                    onClick: Cn(),
                    disabled: tn() || jt() === void 0
                }, r(Vr), {
                    type: "button",
                    icon: km,
                    title: _p,
                    className: "jse-contextmenu",
                    onClick: bt()
                }, {
                    type: "separator"
                }, {
                    type: "button",
                    icon: yf,
                    title: "Undo (Ctrl+Z)",
                    className: "jse-undo",
                    onClick: gr(),
                    disabled: !dn().canUndo
                }, {
                    type: "button",
                    icon: wf,
                    title: "Redo (Ctrl+Shift+Z)",
                    className: "jse-redo",
                    onClick: $n(),
                    disabled: !dn().canRedo
                }, {
                    type: "space"
                }])
            }
            ),
            V( () => (b(xt()),
            r(Kn)), () => {
                h(Me, xt()(r(Kn)) || r(Kn))
            }
            ),
            An(),
            Rt(!0),
            kd(q, {
                get items() {
                    return r(Me)
                }
            }),
            st()
        }
        )(O, {
            get json() {
                return r(F)
            },
            get selection() {
                return r(U)
            },
            get readOnly() {
                return m()
            },
            get history() {
                return w()
            },
            onExpandAll: vt,
            onCollapseAll: sn,
            onUndo: Dt,
            onRedo: Xe,
            onSort: Pt,
            onTransform: en,
            onContextMenu: Pn,
            onCopy: Vt,
            get onRenderMenu() {
                return Ae()
            },
            get showSearch() {
                return r(Lt)
            },
            set showSearch(q) {
                h(Lt, q)
            },
            $$legacy: !0
        })
    }
    ;
    ie(xe, O => {
        P() && O(Le)
    }
    );
    var Ue = B(xe, 2)
      , Je = O => {
        Fz(O, {
            get json() {
                return r(F)
            },
            get selection() {
                return r(U)
            },
            onSelect: uo,
            get onError() {
                return se()
            },
            get pathParser() {
                return ae()
            }
        })
    }
    ;
    ie(Ue, O => {
        R() && O(Je)
    }
    );
    var Ze = B(Ue, 2)
      , et = O => {
        var q = ST()
          , ve = ht(q)
          , qe = z(ve);
        qe.readOnly = !0,
        nr(qe, yt => h(c, yt), () => r(c));
        var Ie = B(ve, 2)
          , Me = yt => {
            var tn = jr()
              , Un = ht(tn)
              , dn = Ot => {
                (function(gr, $n) {
                    it($n, !0);
                    var lr = Az();
                    lr.__click = [Oz, $n];
                    var Cn = B(z(lr), 2)
                      , bt = B(z(Cn), 2)
                      , mn = xt => {
                        var tt = Ez()
                          , Bt = B(ht(tt), 2);
                        zn(Bt, "title", "Create an empty JSON object (press '{')"),
                        Bt.__click = [Sz, $n];
                        var hr = B(Bt, 2);
                        zn(hr, "title", "Create an empty JSON array (press '[')"),
                        hr.__click = [Cz, $n],
                        L(xt, tt)
                    }
                    ;
                    ie(bt, xt => {
                        $n.readOnly || xt(mn)
                    }
                    ),
                    L(gr, lr),
                    st()
                }
                )(Ot, {
                    get readOnly() {
                        return m()
                    },
                    onCreateObject: () => {
                        kn(),
                        Re("{")
                    }
                    ,
                    onCreateArray: () => {
                        kn(),
                        Re("[")
                    }
                    ,
                    onClick: () => {
                        kn()
                    }
                })
            }
              , Jn = Ot => {
                var gr = wT()
                  , $n = ht(gr)
                  , lr = pe( () => m() ? [] : [{
                    icon: oc,
                    text: "Repair manually",
                    title: 'Open the document in "code" mode and repair it manually',
                    onClick: Ln
                }]);
                Mo($n, {
                    type: "error",
                    message: "The loaded JSON document is invalid and could not be repaired automatically.",
                    get actions() {
                        return r(lr)
                    }
                }),
                O1(B($n, 2), {
                    get text() {
                        return r(we)
                    },
                    get json() {
                        return r(F)
                    },
                    get indentation() {
                        return ee()
                    },
                    get parser() {
                        return H()
                    }
                }),
                L(Ot, gr)
            }
            ;
            ie(Un, Ot => {
                r(we) === "" || r(we) === void 0 ? Ot(dn) : Ot(Jn, !1)
            }
            ),
            L(yt, tn)
        }
          , jt = yt => {
            var tn = _T()
              , Un = ht(tn);
            x1(z(Un), {
                get json() {
                    return r(F)
                },
                get documentState() {
                    return r(J)
                },
                get parser() {
                    return H()
                },
                get showSearch() {
                    return r(Lt)
                },
                get showReplace() {
                    return r(We)
                },
                get readOnly() {
                    return m()
                },
                columns: void 0,
                onSearch: $t,
                onFocus: j,
                onPatch: ut,
                onClose: A
            });
            var dn = B(Un, 2);
            zn(dn, "data-jsoneditor-scrollable-contents", !0);
            var Jn = z(dn)
              , Ot = xt => {
                L(xt, kT())
            }
            ;
            ie(Jn, xt => {
                r(Lt) && xt(Ot)
            }
            ),
            Kv(B(Jn, 2), {
                get value() {
                    return r(F)
                },
                pointer: "",
                get state() {
                    return r(J)
                },
                get validationErrors() {
                    return r(Q)
                },
                get searchResults() {
                    return r($e)
                },
                get selection() {
                    return r(U)
                },
                get context() {
                    return r(Pr)
                },
                get onDragSelectionStart() {
                    return br
                }
            }),
            nr(dn, xt => h(d, xt), () => r(d));
            var gr = B(dn, 2)
              , $n = xt => {
                var tt = pe( () => (r(mt),
                N( () => "You pasted a JSON ".concat(Array.isArray(r(mt).contents) ? "array" : "object", " as text"))))
                  , Bt = pe( () => [{
                    icon: bi,
                    text: "Paste as JSON instead",
                    title: "Replace the value with the pasted JSON",
                    onMouseDown: eo
                }, {
                    text: "Leave as is",
                    title: "Keep the JSON embedded in the value",
                    onClick: un
                }]);
                Mo(xt, {
                    type: "info",
                    get message() {
                        return r(tt)
                    },
                    get actions() {
                        return r(Bt)
                    }
                })
            }
            ;
            ie(gr, xt => {
                r(mt) && xt($n)
            }
            );
            var lr = B(gr, 2)
              , Cn = xt => {
                var tt = pe( () => [{
                    icon: bi,
                    text: "Paste as string instead",
                    title: "Paste the clipboard data as a single string value instead of an array",
                    onClick: pr
                }, {
                    text: "Leave as is",
                    title: "Keep the pasted array",
                    onClick: wn
                }]);
                Mo(xt, {
                    type: "info",
                    message: "Multiline text was pasted as array",
                    get actions() {
                        return r(tt)
                    }
                })
            }
            ;
            ie(lr, xt => {
                r(Fe) && xt(Cn)
            }
            );
            var bt = B(lr, 2)
              , mn = xt => {
                var tt = pe( () => m() ? [] : [{
                    icon: kf,
                    text: "Ok",
                    title: "Accept the repaired document",
                    onClick: Ut
                }, {
                    icon: oc,
                    text: "Repair manually instead",
                    title: "Leave the document unchanged and repair it manually instead",
                    onClick: Ln
                }]);
                Mo(xt, {
                    type: "success",
                    message: "The loaded JSON document was invalid but is successfully repaired.",
                    get actions() {
                        return r(tt)
                    },
                    onClose: kn
                })
            }
            ;
            ie(bt, xt => {
                r(ze) && xt(mn)
            }
            ),
            Dp(B(bt, 2), {
                get validationErrors() {
                    return r(oe)
                },
                selectError: $
            }),
            L(yt, tn)
        }
        ;
        ie(Ie, yt => {
            r(F) === void 0 ? yt(Me) : yt(jt, !1)
        }
        ),
        me("paste", qe, or),
        L(O, q)
    }
      , Qt = O => {
        L(O, CT())
    }
    ;
    ie(Ze, O => {
        a ? O(Qt, !1) : O(et)
    }
    ),
    nr(G, O => h(v, O), () => r(v));
    var gn = B(G, 2)
      , cn = O => {
        h1(O, {
            onClose: () => h(D, !1)
        })
    }
    ;
    ie(gn, O => {
        r(D) && O(cn)
    }
    );
    var Dn = B(gn, 2)
      , no = O => {
        g1(O, pi( () => r(le), {
            onClose: () => {
                var q;
                (q = r(le)) === null || q === void 0 || q.onClose(),
                h(le, void 0)
            }
        }))
    }
    ;
    return ie(Dn, O => {
        r(le) && O(no)
    }
    ),
    Ee(O => E = At(G, 1, "jse-tree-mode svelte-vrx1dr", null, E, O), [ () => ({
        "no-main-menu": !P()
    })], pe),
    me("keydown", G, function(O) {
        var q = Ja(O)
          , ve = O.shiftKey;
        if (o("keydown", {
            combo: q,
            key: O.key
        }),
        q === "Ctrl+X" && (O.preventDefault(),
        He(!0)),
        q === "Ctrl+Shift+X" && (O.preventDefault(),
        He(!1)),
        q === "Ctrl+C" && (O.preventDefault(),
        Vt(!0)),
        q === "Ctrl+Shift+C" && (O.preventDefault(),
        Vt(!1)),
        q === "Ctrl+D" && (O.preventDefault(),
        Sr()),
        q !== "Delete" && q !== "Backspace" || (O.preventDefault(),
        Tr()),
        q === "Insert" && (O.preventDefault(),
        ar("structure")),
        q === "Ctrl+A" && (O.preventDefault(),
        h(U, nn([]))),
        q === "Ctrl+Q" && Nt(O),
        q === "ArrowUp" || q === "Shift+ArrowUp") {
            O.preventDefault();
            var qe = r(U) ? pg(r(F), r(J), r(U), ve) || r(U) : bs(r(F), r(J));
            h(U, qe),
            Ft(Qe(qe))
        }
        if (q === "ArrowDown" || q === "Shift+ArrowDown") {
            O.preventDefault();
            var Ie = r(U) ? function(dn, Jn, Ot) {
                var gr = arguments.length > 3 && arguments[3] !== void 0 && arguments[3];
                if (Ot) {
                    var $n = gr ? Qe(Ot) : gi(dn, Ot)
                      , lr = xr(Ke(dn, $n)) ? ug(dn, Jn, $n, !0) : Jn
                      , Cn = Kd(dn, Jn, $n)
                      , bt = Kd(dn, lr, $n);
                    if (gr)
                        return qr(Ot) ? Cn !== void 0 ? io(Cn, Cn) : void 0 : bo(Ot) ? bt !== void 0 ? io(bt, bt) : void 0 : bt !== void 0 ? io(Hi(Ot), bt) : void 0;
                    if (bo(Ot))
                        return bt !== void 0 ? nn(bt) : void 0;
                    if (qr(Ot) || jn(Ot))
                        return Cn !== void 0 ? nn(Cn) : void 0;
                    if (Wr(Ot)) {
                        if (Cn === void 0 || Cn.length === 0)
                            return;
                        var mn = rn(Cn)
                          , xt = Ke(dn, mn);
                        return Array.isArray(xt) ? nn(Cn) : Ka(Cn)
                    }
                    return Hn(Ot) ? bt !== void 0 ? nn(bt) : Cn !== void 0 ? nn(Cn) : void 0 : void 0
                }
            }(r(F), r(J), r(U), ve) || r(U) : bs(r(F), r(J));
            h(U, Ie),
            Ft(Qe(Ie))
        }
        if (q === "ArrowLeft" || q === "Shift+ArrowLeft") {
            O.preventDefault();
            var Me = r(U) ? function(dn, Jn, Ot) {
                var gr = arguments.length > 3 && arguments[3] !== void 0 && arguments[3]
                  , $n = !(arguments.length > 4 && arguments[4] !== void 0) || arguments[4];
                if (Ot) {
                    var {caret: lr, previous: Cn} = hg(dn, Jn, Ot, $n);
                    if (gr)
                        return Hn(Ot) ? void 0 : io(Ot.path, Ot.path);
                    if (lr && Cn)
                        return qv(Cn);
                    var bt = rn(Qe(Ot))
                      , mn = Ke(dn, bt);
                    return jn(Ot) && Array.isArray(mn) ? io(Ot.path, Ot.path) : Hn(Ot) && !Array.isArray(mn) ? Ka(Ot.focusPath) : void 0
                }
            }(r(F), r(J), r(U), ve, !m()) || r(U) : bs(r(F), r(J));
            h(U, Me),
            Ft(Qe(Me))
        }
        if (q === "ArrowRight" || q === "Shift+ArrowRight") {
            O.preventDefault();
            var jt = r(U) && r(F) !== void 0 ? function(dn, Jn, Ot) {
                var gr = arguments.length > 3 && arguments[3] !== void 0 && arguments[3]
                  , $n = !(arguments.length > 4 && arguments[4] !== void 0) || arguments[4];
                if (Ot) {
                    var {caret: lr, next: Cn} = hg(dn, Jn, Ot, $n);
                    return gr ? Hn(Ot) ? void 0 : io(Ot.path, Ot.path) : lr && Cn ? qv(Cn) : Hn(Ot) ? nn(Ot.focusPath) : void 0
                }
            }(r(F), r(J), r(U), ve, !m()) || r(U) : bs(r(F), r(J));
            h(U, jt),
            Ft(Qe(jt))
        }
        if (q === "Enter" && r(U)) {
            if (md(r(U))) {
                var yt = r(U).focusPath
                  , tn = Ke(r(F), rn(yt));
                Array.isArray(tn) && (O.preventDefault(),
                h(U, nn(yt)))
            }
            Wr(r(U)) && (O.preventDefault(),
            h(U, ke(ke({}, r(U)), {}, {
                edit: !0
            }))),
            jn(r(U)) && (O.preventDefault(),
            xr(Ke(r(F), r(U).path)) ? Te(r(U).path, !0) : h(U, ke(ke({}, r(U)), {}, {
                edit: !0
            })))
        }
        if (q.replace(/^Shift\+/, "").length === 1 && r(U))
            return O.preventDefault(),
            void Re(O.key);
        if (q === "Enter" && (bo(r(U)) || qr(r(U))))
            return O.preventDefault(),
            void Re("");
        if (q === "Ctrl+Enter" && jn(r(U))) {
            var Un = Ke(r(F), r(U).path);
            pd(Un) && window.open(String(Un), "_blank")
        }
        q === "Escape" && r(U) && (O.preventDefault(),
        h(U, void 0)),
        q === "Ctrl+F" && (O.preventDefault(),
        Jt(!1)),
        q === "Ctrl+H" && (O.preventDefault(),
        Jt(!0)),
        q === "Ctrl+Z" && (O.preventDefault(),
        Dt()),
        q === "Ctrl+Shift+Z" && (O.preventDefault(),
        Xe())
    }),
    me("mousedown", G, function(O) {
        o("handleMouseDown", O);
        var q = O.target;
        Nw(q, "BUTTON") || q.isContentEditable || (kn(),
        r(U) || r(F) !== void 0 || r(we) !== "" && r(we) !== void 0 || (o("createDefaultSelection"),
        h(U, nn([]))))
    }),
    me("contextmenu", G, Nt),
    L(e, to),
    Et(t, "expand", re),
    Et(t, "collapse", Ce),
    Et(t, "validate", he),
    Et(t, "getJson", ft),
    Et(t, "patch", It),
    Et(t, "acceptAutoRepair", Ut),
    Et(t, "openTransformModal", In),
    Et(t, "scrollTo", rt),
    Et(t, "findElement", Mn),
    Et(t, "findSearchResult", ir),
    Et(t, "focus", kn),
    st({
        expand: re,
        collapse: Ce,
        validate: he,
        getJson: ft,
        patch: It,
        acceptAutoRepair: Ut,
        openTransformModal: In,
        scrollTo: rt,
        findElement: Mn,
        findSearchResult: ir,
        focus: kn
    })
}
function R1(e) {
    return typeof (t = e) != "object" || t === null ? e : new Proxy(e,{
        get: (n, o, a) => R1(Reflect.get(n, o, a)),
        set: () => !1,
        deleteProperty: () => !1
    });
    var t
}
var Wu = Hr("jsoneditor:History");
function M1() {
    var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}
      , t = e.maxItems || 1e3
      , n = []
      , o = 0;
    function a() {
        return o < n.length
    }
    function i() {
        return o > 0
    }
    function s() {
        return {
            canUndo: a(),
            canRedo: i(),
            items: () => n.slice().reverse(),
            add: u,
            undo: c,
            redo: v,
            clear: d
        }
    }
    function l() {
        e.onChange && e.onChange(s())
    }
    function u(p) {
        Wu("add", p),
        n = [p].concat(n.slice(o)).slice(0, t),
        o = 0,
        l()
    }
    function d() {
        Wu("clear"),
        n = [],
        o = 0,
        l()
    }
    function c() {
        if (a()) {
            var p = n[o];
            return o += 1,
            Wu("undo", p),
            l(),
            p
        }
    }
    function v() {
        if (i())
            return Wu("redo", n[o -= 1]),
            l(),
            n[o]
    }
    return {
        get: s
    }
}
kt(`/* over all fonts, sizes, and colors */
/* "consolas" for Windows, "menlo" for Mac with fallback to "monaco", 'Ubuntu Mono' for Ubuntu */
/* (at Mac this font looks too large at 14px, but 13px is too small for the font on Windows) */
/* main, menu, modal */
/* jsoneditor modal */
/* tooltip in text mode */
/* panels: navigation bar, gutter, search box */
/* navigation-bar */
/* context menu */
/* contents: json key and values */
/* contents: selected or hovered */
/* contents: section of collapsed items in an array */
/* contents: highlighting of search matches */
/* contents: inline tags inside the JSON document */
/* contents: table */
/* controls in modals: inputs, buttons, and \`a\` */
/* messages */
/* svelte-select */
/* color picker */
.jse-transform-modal-inner.svelte-rrrjnb {
  flex: 1;
  display: flex;
  flex-direction: column;
  min-width: 0;
  min-height: 0;
}
.jse-transform-modal-inner.svelte-rrrjnb .jse-modal-contents:where(.svelte-rrrjnb) {
  color: inherit;
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 0;
  overflow: auto;
  min-width: 0;
  min-height: 0;
}
.jse-transform-modal-inner.svelte-rrrjnb .jse-modal-contents:where(.svelte-rrrjnb) .jse-actions:where(.svelte-rrrjnb) {
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  padding-top: var(--jse-padding, 10px);
}
.jse-transform-modal-inner.svelte-rrrjnb .jse-modal-contents:where(.svelte-rrrjnb) .jse-actions:where(.svelte-rrrjnb) button.jse-primary:where(.svelte-rrrjnb) {
  border: none;
  background: transparent;
  color: inherit;
  cursor: pointer;
  font-family: var(--jse-font-family, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif);
  font-size: var(--jse-font-size, 16px);
  padding: 5px;
  margin: 0;
  background: var(--jse-button-primary-background, var(--jse-theme-color, #3883fa));
  color: var(--jse-button-primary-color, #fff);
  padding: var(--jse-padding, 10px) calc(2 * var(--jse-padding, 10px));
  border-radius: 3px;
}
.jse-transform-modal-inner.svelte-rrrjnb .jse-modal-contents:where(.svelte-rrrjnb) .jse-actions:where(.svelte-rrrjnb) button.jse-primary:where(.svelte-rrrjnb):hover {
  background: var(--jse-button-primary-background-highlight, var(--jse-theme-color-highlight, #5f9dff));
}
.jse-transform-modal-inner.svelte-rrrjnb .jse-modal-contents:where(.svelte-rrrjnb) .jse-actions:where(.svelte-rrrjnb) button.jse-primary:where(.svelte-rrrjnb):disabled {
  background: var(--jse-button-primary-background-disabled, #9d9d9d);
}
.jse-transform-modal-inner.svelte-rrrjnb .jse-modal-contents:where(.svelte-rrrjnb) .jse-main-contents:where(.svelte-rrrjnb) {
  flex: 1;
  display: flex;
  gap: calc(2 * var(--jse-padding, 10px));
  min-height: 0;
  box-sizing: border-box;
  padding: 0 calc(2 * var(--jse-padding, 10px)) var(--jse-padding, 10px);
}
.jse-transform-modal-inner.svelte-rrrjnb .jse-modal-contents:where(.svelte-rrrjnb) .jse-main-contents:where(.svelte-rrrjnb) .jse-query-contents:where(.svelte-rrrjnb) {
  flex: 1;
  display: flex;
  flex-direction: column;
}
.jse-transform-modal-inner.svelte-rrrjnb .jse-modal-contents:where(.svelte-rrrjnb) .jse-main-contents:where(.svelte-rrrjnb) .jse-query-contents:where(.svelte-rrrjnb) .jse-description:where(.svelte-rrrjnb) p {
  margin: var(--jse-padding, 10px) 0;
}
.jse-transform-modal-inner.svelte-rrrjnb .jse-modal-contents:where(.svelte-rrrjnb) .jse-main-contents:where(.svelte-rrrjnb) .jse-query-contents:where(.svelte-rrrjnb) .jse-description:where(.svelte-rrrjnb) p:first-child {
  margin-top: 0;
}
.jse-transform-modal-inner.svelte-rrrjnb .jse-modal-contents:where(.svelte-rrrjnb) .jse-main-contents:where(.svelte-rrrjnb) .jse-query-contents:where(.svelte-rrrjnb) .jse-description:where(.svelte-rrrjnb) p:last-child {
  margin-bottom: 0;
}
.jse-transform-modal-inner.svelte-rrrjnb .jse-modal-contents:where(.svelte-rrrjnb) .jse-main-contents:where(.svelte-rrrjnb) .jse-query-contents:where(.svelte-rrrjnb) .jse-description:where(.svelte-rrrjnb) code {
  background: var(--jse-modal-code-background, rgba(0, 0, 0, 0.05));
  font-family: var(--jse-font-family-mono, consolas, menlo, monaco, "Ubuntu Mono", "source-code-pro", monospace);
  font-size: var(--jse-font-size-mono, 14px);
}
.jse-transform-modal-inner.svelte-rrrjnb .jse-modal-contents:where(.svelte-rrrjnb) .jse-main-contents:where(.svelte-rrrjnb) .jse-query-contents:where(.svelte-rrrjnb) .query-error:where(.svelte-rrrjnb) {
  color: var(--jse-error-color, #ee5341);
}
.jse-transform-modal-inner.svelte-rrrjnb .jse-modal-contents:where(.svelte-rrrjnb) .jse-main-contents:where(.svelte-rrrjnb) .jse-query-contents:where(.svelte-rrrjnb) textarea.jse-query:where(.svelte-rrrjnb) {
  flex: 1;
  outline: none;
  resize: vertical;
}
.jse-transform-modal-inner.svelte-rrrjnb .jse-modal-contents:where(.svelte-rrrjnb) .jse-main-contents:where(.svelte-rrrjnb) .jse-data-contents:where(.svelte-rrrjnb) {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: calc(2 * var(--jse-padding, 10px));
}
.jse-transform-modal-inner.svelte-rrrjnb .jse-modal-contents:where(.svelte-rrrjnb) .jse-main-contents:where(.svelte-rrrjnb) .jse-data-contents:where(.svelte-rrrjnb) .jse-original-data:where(.svelte-rrrjnb) {
  flex: 1;
  display: flex;
  flex-direction: column;
  min-height: 0;
  box-sizing: border-box;
}
.jse-transform-modal-inner.svelte-rrrjnb .jse-modal-contents:where(.svelte-rrrjnb) .jse-main-contents:where(.svelte-rrrjnb) .jse-data-contents:where(.svelte-rrrjnb) .jse-original-data.jse-hide:where(.svelte-rrrjnb) {
  flex: none;
}
.jse-transform-modal-inner.svelte-rrrjnb .jse-modal-contents:where(.svelte-rrrjnb) .jse-main-contents:where(.svelte-rrrjnb) .jse-data-contents:where(.svelte-rrrjnb) .jse-preview-data:where(.svelte-rrrjnb) {
  flex: 1;
  display: flex;
  flex-direction: column;
  min-height: 0;
  box-sizing: border-box;
}
.jse-transform-modal-inner.svelte-rrrjnb .jse-modal-contents:where(.svelte-rrrjnb) .jse-main-contents:where(.svelte-rrrjnb) .jse-data-contents.jse-hide-original-data:where(.svelte-rrrjnb) {
  flex-direction: column;
  gap: 0;
  margin-bottom: 0;
}
.jse-transform-modal-inner.svelte-rrrjnb .jse-modal-contents:where(.svelte-rrrjnb) .jse-actions:where(.svelte-rrrjnb) {
  padding: var(--jse-padding, 10px) calc(2 * var(--jse-padding, 10px)) calc(2 * var(--jse-padding, 10px));
}
@media screen and (max-width: 1200px) {
  .jse-transform-modal-inner.svelte-rrrjnb .jse-modal-contents:where(.svelte-rrrjnb) .jse-main-contents:where(.svelte-rrrjnb) {
    flex-direction: column;
    overflow: auto;
  }
  .jse-transform-modal-inner.svelte-rrrjnb .jse-modal-contents:where(.svelte-rrrjnb) .jse-main-contents:where(.svelte-rrrjnb) .jse-query-contents:where(.svelte-rrrjnb) textarea.jse-query:where(.svelte-rrrjnb) {
    min-height: 150px;
    flex: none;
  }
  .jse-transform-modal-inner.svelte-rrrjnb .jse-modal-contents:where(.svelte-rrrjnb) .jse-main-contents:where(.svelte-rrrjnb) .jse-data-contents:where(.svelte-rrrjnb) .jse-tree-mode {
    height: 300px;
    flex: none;
  }
}
.jse-transform-modal-inner.svelte-rrrjnb .jse-label:where(.svelte-rrrjnb) {
  font-weight: bold;
  display: block;
  box-sizing: border-box;
}
.jse-transform-modal-inner.svelte-rrrjnb .jse-label:where(.svelte-rrrjnb) .jse-label-inner:where(.svelte-rrrjnb) {
  margin-top: calc(2 * var(--jse-padding, 10px));
  margin-bottom: calc(0.5 * var(--jse-padding, 10px));
  box-sizing: border-box;
}
.jse-transform-modal-inner.svelte-rrrjnb .jse-label:where(.svelte-rrrjnb) .jse-label-inner:where(.svelte-rrrjnb) button:where(.svelte-rrrjnb) {
  border: none;
  background: transparent;
  color: inherit;
  cursor: pointer;
  font-family: var(--jse-font-family, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif);
  font-size: var(--jse-font-size, 16px);
  padding: 5px;
  margin: 0;
  font-weight: bold;
  padding: 0;
}
.jse-transform-modal-inner.svelte-rrrjnb .jse-tree-mode {
  flex: 1;
  background: var(--jse-input-background-readonly, transparent);
  box-shadow: none;
  box-sizing: border-box;
  --jse-main-border: var(--jse-input-border, 1px solid #d8dbdf);
}
.jse-transform-modal-inner.svelte-rrrjnb input:where(.svelte-rrrjnb),
.jse-transform-modal-inner.svelte-rrrjnb textarea:where(.svelte-rrrjnb) {
  border: var(--jse-input-border, 1px solid #d8dbdf);
  outline: none;
  box-sizing: border-box;
  padding: calc(0.5 * var(--jse-padding, 10px));
  font-family: var(--jse-font-family-mono, consolas, menlo, monaco, "Ubuntu Mono", "source-code-pro", monospace);
  font-size: var(--jse-font-size-mono, 14px);
  color: inherit;
  background: var(--jse-input-background, var(--jse-background-color, #fff));
}
.jse-transform-modal-inner.svelte-rrrjnb input:where(.svelte-rrrjnb):focus,
.jse-transform-modal-inner.svelte-rrrjnb textarea:where(.svelte-rrrjnb):focus {
  border: var(--jse-input-border-focus, 1px solid var(--jse-input-border-focus, var(--jse-theme-color, #3883fa)));
}
.jse-transform-modal-inner.svelte-rrrjnb input:where(.svelte-rrrjnb):read-only,
.jse-transform-modal-inner.svelte-rrrjnb textarea:where(.svelte-rrrjnb):read-only {
  background: var(--jse-input-background-readonly, transparent);
}
.jse-transform-modal-inner.svelte-rrrjnb .jse-preview.jse-error:where(.svelte-rrrjnb) {
  flex: 1;
  background: var(--jse-input-background-readonly, transparent);
  border: var(--jse-input-border, 1px solid #d8dbdf);
  color: var(--jse-error-color, #ee5341);
  padding: calc(0.5 * var(--jse-padding, 10px));
}
.jse-transform-modal-inner.svelte-rrrjnb a {
  color: var(--jse-a-color, #156fc5);
}
.jse-transform-modal-inner.svelte-rrrjnb a:hover {
  color: var(--jse-a-color-highlight, #0f508d);
}`);
var Rl = fd( () => bM)
  , js = fd( () => xM)
  , ET = K('<div class="query-error svelte-rrrjnb"> </div>')
  , AT = K("<!> <!>", 1)
  , RT = K('<div class="jse-preview jse-error svelte-rrrjnb"> </div>')
  , MT = K('<!> <div class="jse-modal-contents svelte-rrrjnb"><div class="jse-main-contents svelte-rrrjnb"><div class="jse-query-contents svelte-rrrjnb"><div class="jse-label svelte-rrrjnb"><div class="jse-label-inner svelte-rrrjnb">Language</div></div> <div class="jse-description svelte-rrrjnb"><!></div> <div class="jse-label svelte-rrrjnb"><div class="jse-label-inner svelte-rrrjnb">Path</div></div> <input class="jse-path svelte-rrrjnb" type="text" readonly="" title="Selected path"/> <div class="jse-label svelte-rrrjnb"><div class="jse-label-inner svelte-rrrjnb"><button type="button" class="svelte-rrrjnb"><!> Wizard</button></div></div> <!> <div class="jse-label svelte-rrrjnb"><div class="jse-label-inner svelte-rrrjnb">Query</div></div> <textarea class="jse-query svelte-rrrjnb" spellcheck="false"></textarea></div> <div><div><div class="jse-label svelte-rrrjnb"><div class="jse-label-inner svelte-rrrjnb"><button type="button" class="svelte-rrrjnb"><!> Original</button></div></div> <!></div> <div class="jse-preview-data svelte-rrrjnb"><div class="jse-label svelte-rrrjnb"><div class="jse-label-inner svelte-rrrjnb">Preview</div></div> <!></div></div></div> <div class="jse-actions svelte-rrrjnb"><button type="button" class="jse-primary svelte-rrrjnb">Transform</button></div></div>', 1)
  , PT = K('<div class="jse-transform-modal-inner svelte-rrrjnb"><!></div>');
function zT(e, t) {
    var n, o, a;
    it(t, !1);
    var i = Hr("jsoneditor:TransformModal")
      , s = g(t, "id", 25, () => "transform-modal-" + Ms())
      , l = g(t, "json", 9)
      , u = g(t, "rootPath", 25, () => [])
      , d = g(t, "indentation", 9)
      , c = g(t, "truncateTextSize", 9)
      , v = g(t, "escapeControlCharacters", 9)
      , p = g(t, "escapeUnicodeCharacters", 9)
      , f = g(t, "parser", 9)
      , m = g(t, "parseMemoizeOne", 9)
      , x = g(t, "validationParser", 9)
      , y = g(t, "pathParser", 9)
      , w = g(t, "queryLanguages", 9)
      , S = g(t, "queryLanguageId", 13)
      , P = g(t, "onChangeQueryLanguage", 9)
      , R = g(t, "onRenderValue", 9)
      , k = g(t, "onRenderMenu", 9)
      , I = g(t, "onRenderContextMenu", 9)
      , H = g(t, "onClassName", 9)
      , Y = g(t, "onTransform", 9)
      , M = g(t, "onClose", 9)
      , Z = T(void 0, !0)
      , ae = T(M1({
        onChange: J => h(ae, J)
    }).get(), !0)
      , ee = T(void 0, !0)
      , se = T(void 0, !0)
      , _e = T(!1, !0)
      , fe = "".concat(s(), ":").concat(Tt(u()))
      , Oe = (n = Rl()[fe]) !== null && n !== void 0 ? n : {}
      , De = T(js().showWizard !== !1, !0)
      , Ne = T(js().showOriginal !== !1, !0)
      , je = T((o = Oe.queryOptions) !== null && o !== void 0 ? o : {}, !0)
      , Ae = T(S() === Oe.queryLanguageId && Oe.query ? Oe.query : "", !0)
      , Pe = T((a = Oe.isManual) !== null && a !== void 0 && a, !0)
      , Ve = T(void 0, !0)
      , ge = T(void 0, !0)
      , de = T({
        text: ""
    }, !0);
    function ye(J) {
        var U;
        return (U = w().find(_t => _t.id === J)) !== null && U !== void 0 ? U : w()[0]
    }
    function ct(J) {
        try {
            h(je, J),
            h(Ae, ye(S()).createQuery(r(ee), J)),
            h(Ve, void 0),
            h(Pe, !1),
            i("updateQueryByWizard", {
                queryOptions: r(je),
                query: r(Ae),
                isManual: r(Pe)
            })
        } catch (U) {
            h(Ve, String(U))
        }
    }
    function qt(J) {
        h(Ae, J.target.value),
        h(Pe, !0),
        i("handleChangeQuery", {
            query: r(Ae),
            isManual: r(Pe)
        })
    }
    r(Pe) || ct(r(je)),
    ao( () => {
        var J;
        (J = r(Z)) === null || J === void 0 || J.focus()
    }
    );
    var X = Gi(function(J, U) {
        if (J === void 0)
            return h(de, {
                text: ""
            }),
            void h(ge, "Error: No JSON");
        if (U.trim() !== "")
            try {
                i("previewTransform", {
                    query: U
                });
                var _t = ye(S()).executeQuery(J, U, f());
                h(de, {
                    json: _t
                }),
                h(ge, void 0)
            } catch (nt) {
                h(de, {
                    text: ""
                }),
                h(ge, String(nt))
            }
        else
            h(de, {
                json: J
            })
    }, 300);
    function D() {
        if (r(ee) === void 0)
            return h(de, {
                text: ""
            }),
            void h(ge, "Error: No JSON");
        try {
            i("handleTransform", {
                query: r(Ae)
            });
            var J = ye(S()).executeQuery(r(ee), r(Ae), f());
            Y()([{
                op: "replace",
                path: Tt(u()),
                value: J
            }]),
            M()()
        } catch (U) {
            console.error(U),
            h(de, {
                text: ""
            }),
            h(ge, String(U))
        }
    }
    function le() {
        h(De, !r(De)),
        js(js().showWizard = r(De))
    }
    function F() {
        h(Ne, !r(Ne)),
        js(js().showOriginal = r(Ne))
    }
    function we(J) {
        J.focus()
    }
    function ne(J) {
        i("handleChangeQueryLanguage", J),
        S(J),
        P()(J),
        ct(r(je))
    }
    function Be() {
        r(_e) ? h(_e, !r(_e)) : M()()
    }
    V( () => (b(l()),
    b(u())), () => {
        h(ee, R1(Ke(l(), u())))
    }
    ),
    V( () => r(ee), () => {
        h(se, r(ee) ? {
            json: r(ee)
        } : {
            text: ""
        })
    }
    ),
    V( () => (r(ee),
    r(Ae)), () => {
        X(r(ee), r(Ae))
    }
    ),
    V( () => (Rl(),
    r(je),
    r(Ae),
    b(S()),
    r(Pe)), () => {
        Rl(Rl()[fe] = {
            queryOptions: r(je),
            query: r(Ae),
            queryLanguageId: S(),
            isManual: r(Pe)
        }),
        i("store state in memory", fe, Rl()[fe])
    }
    ),
    An(),
    Rt(!0),
    ru(e, {
        get onClose() {
            return M()
        },
        className: "jse-transform-modal",
        get fullscreen() {
            return r(_e)
        },
        children: (J, U) => {
            var _t = PT();
            Nv(z(_t), {
                children: (nt, Se) => {
                    var mt = MT()
                      , Fe = ht(mt);
                    (function(He, Yt) {
                        it(Yt, !1);
                        var Vt, bn = g(Yt, "queryLanguages", 9), or = g(Yt, "queryLanguageId", 9), Bn = g(Yt, "fullscreen", 13), Mr = g(Yt, "onChangeQueryLanguage", 9), Gn = g(Yt, "onClose", 9), fr = T(void 0, !0), {openAbsolutePopup: Tr, closeAbsolutePopup: Sr} = Pi("absolute-popup");
                        function Cr() {
                            var ar = {
                                queryLanguages: bn(),
                                queryLanguageId: or(),
                                onChangeQueryLanguage: Or => {
                                    Sr(Vt),
                                    Mr()(Or)
                                }
                            };
                            Vt = Tr(pP, ar, {
                                offsetTop: -2,
                                offsetLeft: 0,
                                anchor: r(fr),
                                closeOnOuterClick: !0
                            })
                        }
                        Rt(!0),
                        Mc(He, {
                            title: "Transform",
                            fullScreenButton: !0,
                            get onClose() {
                                return Gn()
                            },
                            get fullscreen() {
                                return Bn()
                            },
                            set fullscreen(ar) {
                                Bn(ar)
                            },
                            $$slots: {
                                actions: (ar, Or) => {
                                    var be, an = mP();
                                    fn(z(an), {
                                        get data() {
                                            return Vk
                                        }
                                    }),
                                    nr(an, te => h(fr, te), () => r(fr)),
                                    Ee(te => be = At(an, 1, "jse-config svelte-1kpylsp", null, be, te), [ () => ({
                                        hide: bn().length <= 1
                                    })], pe),
                                    me("click", an, Cr),
                                    L(ar, an)
                                }
                            },
                            $$legacy: !0
                        }),
                        st()
                    }
                    )(Fe, {
                        get queryLanguages() {
                            return w()
                        },
                        get queryLanguageId() {
                            return S()
                        },
                        onChangeQueryLanguage: ne,
                        get onClose() {
                            return M()
                        },
                        get fullscreen() {
                            return r(_e)
                        },
                        set fullscreen(He) {
                            h(_e, He)
                        },
                        $$legacy: !0
                    });
                    var $e = z(B(Fe, 2))
                      , Lt = z($e)
                      , We = B(z(Lt), 2);
                    bw(z(We), () => (b(S()),
                    N( () => ye(S()).description)));
                    var $t = B(We, 4)
                      , j = B($t, 2)
                      , C = z(j)
                      , A = z(C)
                      , $ = z(A)
                      , re = pe( () => r(De) ? Va : $l);
                    fn($, {
                        get data() {
                            return r(re)
                        }
                    });
                    var Ce = B(j, 2)
                      , ze = He => {
                        var Yt = jr()
                          , Vt = ht(Yt)
                          , bn = Bn => {
                            var Mr = AT()
                              , Gn = ht(Mr);
                            dP(Gn, {
                                get queryOptions() {
                                    return r(je)
                                },
                                get json() {
                                    return r(ee)
                                },
                                onChange: ct
                            });
                            var fr = B(Gn, 2)
                              , Tr = Sr => {
                                var Cr = ET()
                                  , ar = z(Cr);
                                Ee( () => lt(ar, r(Ve))),
                                L(Sr, Cr)
                            }
                            ;
                            ie(fr, Sr => {
                                r(Ve) && Sr(Tr)
                            }
                            ),
                            L(Bn, Mr)
                        }
                          , or = Bn => {
                            L(Bn, Jr("(Only available for arrays, not for objects)"))
                        }
                        ;
                        ie(Vt, Bn => {
                            r(ee),
                            N( () => Array.isArray(r(ee))) ? Bn(bn) : Bn(or, !1)
                        }
                        ),
                        L(He, Yt)
                    }
                    ;
                    ie(Ce, He => {
                        r(De) && He(ze)
                    }
                    );
                    var oe = B(Ce, 4);
                    nr(oe, He => h(Z, He), () => r(Z));
                    var Q, dt, Ye = B(Lt, 2), he = z(Ye), ft = z(he), Zt = z(ft), Tn = z(Zt), _n = z(Tn), Xt = pe( () => r(Ne) ? Va : $l);
                    fn(_n, {
                        get data() {
                            return r(Xt)
                        }
                    });
                    var Rn = B(ft, 2)
                      , on = He => {
                        tf(He, {
                            get externalContent() {
                                return r(se)
                            },
                            externalSelection: void 0,
                            get history() {
                                return r(ae)
                            },
                            readOnly: !0,
                            get truncateTextSize() {
                                return c()
                            },
                            mainMenuBar: !1,
                            navigationBar: !1,
                            get indentation() {
                                return d()
                            },
                            get escapeControlCharacters() {
                                return v()
                            },
                            get escapeUnicodeCharacters() {
                                return p()
                            },
                            get parser() {
                                return f()
                            },
                            get parseMemoizeOne() {
                                return m()
                            },
                            get onRenderValue() {
                                return R()
                            },
                            get onRenderMenu() {
                                return k()
                            },
                            get onRenderContextMenu() {
                                return I()
                            },
                            onError: N( () => console.error),
                            get onChange() {
                                return br
                            },
                            get onChangeMode() {
                                return br
                            },
                            get onSelect() {
                                return br
                            },
                            get onUndo() {
                                return br
                            },
                            get onRedo() {
                                return br
                            },
                            get onFocus() {
                                return br
                            },
                            get onBlur() {
                                return br
                            },
                            get onSortModal() {
                                return br
                            },
                            get onTransformModal() {
                                return br
                            },
                            get onJSONEditorModal() {
                                return br
                            },
                            get onClassName() {
                                return H()
                            },
                            validator: void 0,
                            get validationParser() {
                                return x()
                            },
                            get pathParser() {
                                return y()
                            }
                        })
                    }
                    ;
                    ie(Rn, He => {
                        r(Ne) && He(on)
                    }
                    );
                    var It = B(he, 2)
                      , St = B(z(It), 2)
                      , Ht = He => {
                        tf(He, {
                            get externalContent() {
                                return r(de)
                            },
                            externalSelection: void 0,
                            get history() {
                                return r(ae)
                            },
                            readOnly: !0,
                            get truncateTextSize() {
                                return c()
                            },
                            mainMenuBar: !1,
                            navigationBar: !1,
                            get indentation() {
                                return d()
                            },
                            get escapeControlCharacters() {
                                return v()
                            },
                            get escapeUnicodeCharacters() {
                                return p()
                            },
                            get parser() {
                                return f()
                            },
                            get parseMemoizeOne() {
                                return m()
                            },
                            get onRenderValue() {
                                return R()
                            },
                            get onRenderMenu() {
                                return k()
                            },
                            get onRenderContextMenu() {
                                return I()
                            },
                            onError: N( () => console.error),
                            get onChange() {
                                return br
                            },
                            get onChangeMode() {
                                return br
                            },
                            get onSelect() {
                                return br
                            },
                            get onUndo() {
                                return br
                            },
                            get onRedo() {
                                return br
                            },
                            get onFocus() {
                                return br
                            },
                            get onBlur() {
                                return br
                            },
                            get onSortModal() {
                                return br
                            },
                            get onTransformModal() {
                                return br
                            },
                            get onJSONEditorModal() {
                                return br
                            },
                            get onClassName() {
                                return H()
                            },
                            validator: void 0,
                            get validationParser() {
                                return x()
                            },
                            get pathParser() {
                                return y()
                            }
                        })
                    }
                      , hn = He => {
                        var Yt = RT()
                          , Vt = z(Yt);
                        Ee( () => lt(Vt, r(ge))),
                        L(He, Yt)
                    }
                    ;
                    ie(St, He => {
                        r(ge) ? He(hn, !1) : He(Ht)
                    }
                    );
                    var Ut = z(B($e, 2));
                    Gr( () => me("click", Ut, D)),
                    lo(Ut, He => we?.(He)),
                    Ee( (He, Yt, Vt) => {
                        Zi($t, He),
                        Zi(oe, r(Ae)),
                        Q = At(Ye, 1, "jse-data-contents svelte-rrrjnb", null, Q, Yt),
                        dt = At(he, 1, "jse-original-data svelte-rrrjnb", null, dt, Vt),
                        Ut.disabled = !!r(ge)
                    }
                    , [ () => (b(vn),
                    b(u()),
                    b(xo),
                    N( () => vn(u()) ? "(document root)" : xo(u()))), () => ({
                        "jse-hide-original-data": !r(Ne)
                    }), () => ({
                        "jse-hide": !r(Ne)
                    })], pe),
                    me("click", A, le),
                    me("input", oe, qt),
                    me("click", Tn, F),
                    L(nt, mt)
                }
                ,
                $$slots: {
                    default: !0
                }
            }),
            lo(_t, (nt, Se) => Pc?.(nt, Se), () => Be),
            L(J, _t)
        }
        ,
        $$slots: {
            default: !0
        }
    }),
    st()
}
function Uo() {}
kt(`/* over all fonts, sizes, and colors */
/* "consolas" for Windows, "menlo" for Mac with fallback to "monaco", 'Ubuntu Mono' for Ubuntu */
/* (at Mac this font looks too large at 14px, but 13px is too small for the font on Windows) */
/* main, menu, modal */
/* jsoneditor modal */
/* tooltip in text mode */
/* panels: navigation bar, gutter, search box */
/* navigation-bar */
/* context menu */
/* contents: json key and values */
/* contents: selected or hovered */
/* contents: section of collapsed items in an array */
/* contents: highlighting of search matches */
/* contents: inline tags inside the JSON document */
/* contents: table */
/* controls in modals: inputs, buttons, and \`a\` */
/* messages */
/* svelte-select */
/* color picker */
.jse-status-bar.svelte-1ulj7zd {
  background: var(--jse-panel-background, #ebebeb);
  color: var(--jse-panel-color-readonly, #b2b2b2);
  font-family: var(--jse-font-family-mono, consolas, menlo, monaco, "Ubuntu Mono", "source-code-pro", monospace);
  font-size: var(--jse-font-size-mono, 14px);
  margin: 0;
  border-top: var(--jse-panel-border, var(--jse-main-border, 1px solid #d7d7d7));
  border-left: var(--jse-main-border, 1px solid #d7d7d7);
  border-right: var(--jse-main-border, 1px solid #d7d7d7);
  display: flex;
  gap: var(--jse-padding, 10px);
}
.jse-status-bar.svelte-1ulj7zd:last-child {
  border-bottom: var(--jse-main-border, 1px solid #d7d7d7);
}
.jse-status-bar.svelte-1ulj7zd .jse-status-bar-info:where(.svelte-1ulj7zd) {
  padding: 2px;
}`);
var TT = K('<div class="jse-status-bar-info svelte-1ulj7zd"> </div>')
  , IT = K('<div class="jse-status-bar-info svelte-1ulj7zd"> </div>')
  , NT = K('<div class="jse-status-bar-info svelte-1ulj7zd"> </div>')
  , LT = K('<div class="jse-status-bar svelte-1ulj7zd"><!> <!> <!></div>')
  , $p = Yk.define([{
    tag: _l.propertyName,
    color: "var(--internal-key-color)"
}, {
    tag: _l.number,
    color: "var(--internal-value-color-number)"
}, {
    tag: _l.bool,
    color: "var(--internal-value-color-boolean)"
}, {
    tag: _l.string,
    color: "var(--internal-value-color-string)"
}, {
    tag: _l.keyword,
    color: "var(--internal-value-color-null)"
}])
  , UT = Sm($p)
  , DT = $p.style;
$p.style = e => DT(e || []);
var qT = [Xk.fromClass(class {
    constructor(e) {
        this.view = e,
        this.indentUnit = Kp(e.state),
        this.initialPaddingLeft = null,
        this.isChrome = window?.navigator.userAgent.includes("Chrome"),
        this.generate(e.state)
    }
    update(e) {
        var t = Kp(e.state);
        (t !== this.indentUnit || e.docChanged || e.viewportChanged) && (this.indentUnit = t,
        this.generate(e.state))
    }
    generate(e) {
        var t = new Qk;
        this.initialPaddingLeft ? this.addStyleToBuilder(t, e, this.initialPaddingLeft) : this.view.requestMeasure({
            read: n => {
                var o = n.contentDOM.querySelector(".cm-line");
                o && (this.initialPaddingLeft = window.getComputedStyle(o).getPropertyValue("padding-left"),
                this.addStyleToBuilder(t, n.state, this.initialPaddingLeft)),
                this.decorations = t.finish()
            }
        }),
        this.decorations = t.finish()
    }
    addStyleToBuilder(e, t, n) {
        var o = this.getVisibleLines(t);
        for (var a of o) {
            var {numColumns: i, containsTab: s} = this.numColumns(a.text, t.tabSize)
              , l = "calc(".concat(i + this.indentUnit, "ch + ").concat(n, ")")
              , u = this.isChrome ? "calc(-".concat(i + this.indentUnit, "ch - ").concat(s ? 1 : 0, "px)") : "-".concat(i + this.indentUnit, "ch");
            e.add(a.from, a.from, Zk.line({
                attributes: {
                    style: "padding-left: ".concat(l, "; text-indent: ").concat(u, ";")
                }
            }))
        }
    }
    getVisibleLines(e) {
        var t = new Set
          , n = null;
        for (var {from: o, to: a} of this.view.visibleRanges)
            for (var i = o; i <= a; ) {
                var s = e.doc.lineAt(i);
                n !== s && (t.add(s),
                n = s),
                i = s.to + 1
            }
        return t
    }
    numColumns(e, t) {
        var n = 0
          , o = !1;
        e: for (var a = 0; a < e.length; a++)
            switch (e[a]) {
            case " ":
                n += 1;
                continue e;
            case "	":
                n += t - n % t,
                o = !0;
                continue e;
            case "\r":
                continue e;
            default:
                break e
            }
        return {
            numColumns: n,
            containsTab: o
        }
    }
}
, {
    decorations: e => e.decorations
})];
kt(`/* over all fonts, sizes, and colors */
/* "consolas" for Windows, "menlo" for Mac with fallback to "monaco", 'Ubuntu Mono' for Ubuntu */
/* (at Mac this font looks too large at 14px, but 13px is too small for the font on Windows) */
/* main, menu, modal */
/* jsoneditor modal */
/* tooltip in text mode */
/* panels: navigation bar, gutter, search box */
/* navigation-bar */
/* context menu */
/* contents: json key and values */
/* contents: selected or hovered */
/* contents: section of collapsed items in an array */
/* contents: highlighting of search matches */
/* contents: inline tags inside the JSON document */
/* contents: table */
/* controls in modals: inputs, buttons, and \`a\` */
/* messages */
/* svelte-select */
/* color picker */
.jse-text-mode.svelte-xt61xw {
  --internal-key-color: var(--jse-key-color, #1a1a1a);
  --internal-value-color-number: var(--jse-value-color-number, #ee422e);
  --internal-value-color-boolean: var(--jse-value-color-boolean, #ff8c00);
  --internal-value-color-string: var(--jse-value-color-string, #008000);
  --internal-value-color-null: var(--jse-value-color-null, #004ed0);
  flex: 1;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  background: var(--jse-background-color, #fff);
}
.jse-text-mode.no-main-menu.svelte-xt61xw {
  border-top: var(--jse-main-border, 1px solid #d7d7d7);
}
.jse-text-mode.svelte-xt61xw .jse-contents:where(.svelte-xt61xw) {
  flex: 1;
  display: flex;
  position: relative;
  flex-direction: column;
  overflow: hidden;
  min-width: 0;
  min-height: 0;
  border-left: var(--jse-main-border, 1px solid #d7d7d7);
  border-right: var(--jse-main-border, 1px solid #d7d7d7);
}
.jse-text-mode.svelte-xt61xw .jse-contents:where(.svelte-xt61xw):last-child {
  border-bottom: var(--jse-main-border, 1px solid #d7d7d7);
}
.jse-text-mode.svelte-xt61xw .jse-contents.jse-hidden:where(.svelte-xt61xw) {
  visibility: hidden;
  position: absolute;
  top: 0;
  left: 0;
}
.jse-text-mode.svelte-xt61xw .jse-contents:where(.svelte-xt61xw) .cm-editor {
  flex: 1;
  overflow: hidden;
}
.jse-text-mode.svelte-xt61xw .jse-contents:where(.svelte-xt61xw) .cm-editor .cm-scroller {
  font-family: var(--jse-font-family-mono, consolas, menlo, monaco, "Ubuntu Mono", "source-code-pro", monospace);
  font-size: var(--jse-font-size-mono, 14px);
  line-height: var(--jse-line-height, calc(1em + 4px));
  color: var(--jse-delimiter-color, rgba(0, 0, 0, 0.38));
}
.jse-text-mode.svelte-xt61xw .jse-contents:where(.svelte-xt61xw) .cm-editor .cm-gutters {
  background: var(--jse-panel-background, #ebebeb);
  color: var(--jse-panel-color-readonly, #b2b2b2);
  border-right: var(--jse-panel-border, var(--jse-main-border, 1px solid #d7d7d7));
}
.jse-text-mode.svelte-xt61xw .jse-contents:where(.svelte-xt61xw) .cm-editor .cm-activeLine,
.jse-text-mode.svelte-xt61xw .jse-contents:where(.svelte-xt61xw) .cm-editor .cm-activeLineGutter {
  background: var(--jse-active-line-background-color, rgba(0, 0, 0, 0.06));
}
.jse-text-mode.svelte-xt61xw .jse-contents:where(.svelte-xt61xw) .cm-editor .cm-selectionBackground {
  background: var(--jse-selection-background-color, #d3d3d3);
}
.jse-text-mode.svelte-xt61xw .jse-contents:where(.svelte-xt61xw) .cm-editor .cm-searchMatch {
  background-color: var(--jse-search-match-color, #ffe665);
  outline: var(--jse-search-match-outline, none);
}
.jse-text-mode.svelte-xt61xw .jse-contents:where(.svelte-xt61xw) .cm-editor .cm-searchMatch.cm-searchMatch-selected {
  background-color: var(--jse-search-match-active-color, var(--jse-search-match-color, #ffe665));
  outline: var(--jse-search-match-outline, 2px solid #e0be00);
}
.jse-text-mode.svelte-xt61xw .jse-contents:where(.svelte-xt61xw) .cm-editor .cm-selectionMatch {
  background-color: var(--jse-search-match-background-color, rgba(153, 255, 119, 0.5019607843));
}
.jse-text-mode.svelte-xt61xw .jse-contents:where(.svelte-xt61xw) .cm-editor .cm-foldPlaceholder {
  background: var(--jse-tag-background, rgba(0, 0, 0, 0.2));
  color: var(--jse-tag-color, var(--jse-text-color-inverse, #fff));
  border: none;
  padding: 0 var(--jse-padding, 10px);
}
.jse-text-mode.svelte-xt61xw .jse-contents:where(.svelte-xt61xw) .cm-editor .cm-tooltip {
  font-size: var(--jse-font-size, 16px);
  font-family: var(--jse-font-family, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif);
  color: var(--jse-tooltip-color, var(--jse-text-color, #4d4d4d));
  background: var(--jse-tooltip-background, var(--jse-modal-background, #f5f5f5));
  border: var(--jse-tooltip-border, var(--jse-main-border, 1px solid #d7d7d7));
}
.jse-text-mode.svelte-xt61xw .jse-contents:where(.svelte-xt61xw) .cm-editor .cm-diagnosticAction {
  background: var(--jse-tooltip-action-button-color, var(--jse-text-color-inverse, #fff));
  background: var(--jse-tooltip-action-button-background, #4d4d4d);
}
.jse-text-mode.svelte-xt61xw .jse-contents:where(.svelte-xt61xw) .cm-editor .cm-panels {
  border-bottom: var(--jse-panel-border, var(--jse-main-border, 1px solid #d7d7d7));
}
.jse-text-mode.svelte-xt61xw .jse-contents:where(.svelte-xt61xw) .cm-editor .cm-search {
  background: var(--jse-panel-background, #ebebeb);
  color: var(--jse-panel-color, var(--jse-text-color, #4d4d4d));
  font-family: var(--jse-font-family, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif);
  font-size: var(--jse-font-size, 16px);
}
.jse-text-mode.svelte-xt61xw .jse-contents:where(.svelte-xt61xw) .cm-editor .cm-search input {
  font-family: var(--jse-font-family, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif);
  font-size: var(--jse-font-size-text-mode-search, 80%);
  color: var(--jse-input-color, var(--jse-text-color, #4d4d4d));
  border: var(--jse-input-border, 1px solid #d8dbdf);
  background: var(--jse-input-background, var(--jse-background-color, #fff));
  margin-right: 2px;
}
.jse-text-mode.svelte-xt61xw .jse-contents:where(.svelte-xt61xw) .cm-editor .cm-search button {
  font-family: var(--jse-font-family, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif);
  font-size: var(--jse-font-size-text-mode-search, 80%);
  color: var(--jse-panel-button-color, inherit);
  background: var(--jse-panel-button-background, transparent);
  border: none;
  cursor: pointer;
  text-transform: capitalize;
  padding: calc(0.5 * var(--jse-padding, 10px)) var(--jse-padding, 10px);
  margin: 0;
}
.jse-text-mode.svelte-xt61xw .jse-contents:where(.svelte-xt61xw) .cm-editor .cm-search button:hover {
  color: var(--panel-button-color-highlight, var(--jse-text-color, #4d4d4d));
  background: var(--jse-panel-button-background-highlight, #e0e0e0);
}
.jse-text-mode.svelte-xt61xw .jse-contents:where(.svelte-xt61xw) .cm-editor .cm-search label {
  font-family: var(--jse-font-family, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif);
  font-size: var(--jse-font-size-text-mode-search, 80%);
  padding-left: var(--jse-padding, 10px);
}
.jse-text-mode.svelte-xt61xw .jse-contents:where(.svelte-xt61xw) .cm-editor .cm-search label input {
  margin-right: 2px;
}
.jse-text-mode.svelte-xt61xw .jse-contents:where(.svelte-xt61xw) .cm-editor .cm-search button[name="close"] {
  width: 32px;
  height: 32px;
  font-size: 24px;
  line-height: 24px;
  padding: 0;
  right: 0;
  top: -4px;
}
.jse-text-mode.svelte-xt61xw .jse-contents:where(.svelte-xt61xw) .cm-editor .cm-cursor-primary {
  border-color: var(--jse-text-color, #4d4d4d);
}
.jse-text-mode.svelte-xt61xw .jse-contents:where(.svelte-xt61xw) .jse-loading-space:where(.svelte-xt61xw) {
  flex: 1;
}
.jse-text-mode.svelte-xt61xw .jse-contents:where(.svelte-xt61xw) .jse-loading:where(.svelte-xt61xw) {
  flex: 2;
  text-align: center;
  color: var(--jse-panel-color-readonly, #b2b2b2);
  box-sizing: border-box;
  font-family: var(--jse-font-family, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif);
  font-size: var(--jse-font-size, 16px);
}
.jse-text-mode.svelte-xt61xw .jse-contents.jse-preview:where(.svelte-xt61xw) {
  flex: 1;
  font-family: var(--jse-font-family-mono, consolas, menlo, monaco, "Ubuntu Mono", "source-code-pro", monospace);
  font-size: var(--jse-font-size-mono, 14px);
  color: var(--jse-panel-color-readonly, #b2b2b2);
  overflow: auto;
  white-space: pre-wrap;
  word-break: break-word;
  padding: 2px;
}`);
var $T = K('<!> <div class="jse-contents jse-preview svelte-xt61xw"> </div>', 1)
  , FT = K("<!> <!> <!> <!>", 1)
  , BT = K("<div></div> <!> <!>", 1)
  , WT = K('<div class="jse-contents svelte-xt61xw"><div class="jse-loading-space svelte-xt61xw"></div> <div class="jse-loading svelte-xt61xw">loading...</div></div>')
  , HT = K("<div><!> <!></div>");
function VT(e, t) {
    it(t, !1);
    var n = T(void 0, !0)
      , o = T(void 0, !0)
      , a = g(t, "readOnly", 9)
      , i = g(t, "mainMenuBar", 9)
      , s = g(t, "statusBar", 9)
      , l = g(t, "askToFormat", 9)
      , u = g(t, "externalContent", 9)
      , d = g(t, "externalSelection", 9)
      , c = g(t, "history", 9)
      , v = g(t, "indentation", 9)
      , p = g(t, "tabSize", 9)
      , f = g(t, "escapeUnicodeCharacters", 9)
      , m = g(t, "parser", 9)
      , x = g(t, "validator", 9)
      , y = g(t, "validationParser", 9)
      , w = g(t, "onChange", 9)
      , S = g(t, "onChangeMode", 9)
      , P = g(t, "onSelect", 9)
      , R = g(t, "onUndo", 9)
      , k = g(t, "onRedo", 9)
      , I = g(t, "onError", 9)
      , H = g(t, "onFocus", 9)
      , Y = g(t, "onBlur", 9)
      , M = g(t, "onRenderMenu", 9)
      , Z = g(t, "onSortModal", 9)
      , ae = g(t, "onTransformModal", 9)
      , ee = Hr("jsoneditor:TextMode")
      , se = {
        key: "Mod-i",
        run: Se,
        shift: mt,
        preventDefault: !0
    }
      , _e = typeof window > "u";
    ee("isSSR:", _e);
    var fe, Oe = T(void 0, !0), De = T(void 0, !0), Ne = T(void 0, !0), je = T(!1, !0), Ae = T(l(), !0), Pe = T([], !0), Ve = new Sl, ge = new Sl, de = new Sl, ye = new Sl, ct = new Sl, qt = u(), X = T(Iv(qt, v(), m()), !0), D = S_.define(), le = null;
    function F() {
        if (!le || le.length === 0)
            return !1;
        var te = le[0].startState
          , Re = le[le.length - 1].state
          , at = le.map(Xe => Xe.changes).reduce( (Xe, Gt) => Xe.compose(Gt))
          , Dt = {
            type: "text",
            undo: {
                changes: at.invert(te.doc).toJSON(),
                selection: He(te.selection)
            },
            redo: {
                changes: at.toJSON(),
                selection: He(Re.selection)
            }
        };
        return ee("add history item", Dt),
        c().add(Dt),
        le = null,
        !0
    }
    var we = T(f(), !0);
    ao(wt(function*() {
        if (!_e)
            try {
                fe = function(te) {
                    var {target: Re, initialText: at, readOnly: Dt, indentation: Xe} = te;
                    ee("Create CodeMirror editor", {
                        readOnly: Dt,
                        indentation: Xe
                    });
                    var Gt = function(Pt, In) {
                        return Xd(Pt) ? Pt.ranges.every(pt => pt.anchor < In.length && pt.head < In.length) : !1
                    }(d(), at) ? Tn(d()) : void 0
                      , Sn = ps.create({
                        doc: at,
                        selection: Gt,
                        extensions: [Yp.of([m_, se]), Ve.of(Q()), e_(), t_(), n_(), r_(), o_(), a_(), i_(), ps.allowMultipleSelections.of(!0), s_(), Sm(b_, {
                            fallback: !0
                        }), l_(), u_(), c_(), d_(), v_(), f_(), p_(), Yp.of([...x_, ...j_, ...y_, {
                            key: "Mod-z",
                            run: j,
                            preventDefault: !0
                        }, {
                            key: "Mod-y",
                            mac: "Mod-Shift-z",
                            run: C,
                            preventDefault: !0
                        }, {
                            key: "Ctrl-Shift-z",
                            run: C,
                            preventDefault: !0
                        }, ...w_, ...k_, ...__]), UT, vk({
                            hideFirstIndent: !0
                        }), hs.domEventHandlers({
                            dblclick: oe
                        }), hs.updateListener.of(Pt => {
                            h(Ne, Pt.state),
                            Pt.docChanged && (Pt.transactions.some(In => !!In.annotation(D)) || (le = [...le ?? [], Pt]),
                            St()),
                            Pt.selectionSet && Ut()
                        }
                        ), h_(), g_({
                            top: !0
                        }), hs.lineWrapping, ge.of(ps.readOnly.of(Dt)), ye.of(ps.tabSize.of(p())), de.of(It(Xe)), ct.of(hs.theme({}, {
                            dark: dt()
                        }))]
                    });
                    return fe = new hs({
                        state: Sn,
                        parent: Re
                    }),
                    Gt && fe.dispatch(fe.state.update({
                        selection: Gt.main,
                        scrollIntoView: !0
                    })),
                    fe
                }({
                    target: r(Oe),
                    initialText: Yt(r(X), r(je)) ? "" : r(n).escapeValue(r(X)),
                    readOnly: a(),
                    indentation: v()
                })
            } catch (te) {
                console.error(te)
            }
    })),
    Vo( () => {
        Ht(),
        fe && (ee("Destroy CodeMirror editor"),
        fe.destroy())
    }
    );
    var ne = mi()
      , Be = mi();
    function J() {
        fe && (ee("focus"),
        fe.focus())
    }
    var U = !1;
    function _t(te) {
        return nt(te, !1)
    }
    function nt(te, Re) {
        ee("handlePatch", te, Re);
        var at = m().parse(r(X))
          , Dt = Zo(at, te)
          , Xe = of(at, te);
        return Zt({
            text: m().stringify(Dt, null, v())
        }, Re, !1),
        {
            json: Dt,
            previousJson: at,
            undo: Xe,
            redo: te
        }
    }
    function Se() {
        if (ee("format"),
        a())
            return !1;
        try {
            var te = m().parse(r(X));
            return Zt({
                text: m().stringify(te, null, v())
            }, !0, !1),
            h(Ae, l()),
            !0
        } catch (Re) {
            I()(Re)
        }
        return !1
    }
    function mt() {
        if (ee("compact"),
        a())
            return !1;
        try {
            var te = m().parse(r(X));
            return Zt({
                text: m().stringify(te)
            }, !0, !1),
            h(Ae, !1),
            !0
        } catch (Re) {
            I()(Re)
        }
        return !1
    }
    function Fe() {
        if (ee("repair"),
        !a())
            try {
                Zt({
                    text: ta(r(X))
                }, !0, !1),
                h(Vt, Jd),
                h(bn, void 0)
            } catch (te) {
                I()(te)
            }
    }
    function $e() {
        var te;
        if (!a())
            try {
                var Re = m().parse(r(X));
                U = !0,
                Z()({
                    id: ne,
                    json: Re,
                    rootPath: [],
                    onSort: (te = wt(function*(at) {
                        var {operations: Dt} = at;
                        ee("onSort", Dt),
                        nt(Dt, !0)
                    }),
                    function(at) {
                        return te.apply(this, arguments)
                    }
                    ),
                    onClose: () => {
                        U = !1,
                        J()
                    }
                })
            } catch (at) {
                I()(at)
            }
    }
    function Lt(te) {
        var {id: Re, rootPath: at, onTransform: Dt, onClose: Xe} = te;
        try {
            var Gt = m().parse(r(X));
            U = !0,
            ae()({
                id: Re || Be,
                json: Gt,
                rootPath: at || [],
                onTransform: Sn => {
                    Dt ? Dt({
                        operations: Sn,
                        json: Gt,
                        transformedJson: Zo(Gt, Sn)
                    }) : (ee("onTransform", Sn),
                    nt(Sn, !0))
                }
                ,
                onClose: () => {
                    U = !1,
                    J(),
                    Xe && Xe()
                }
            })
        } catch (Sn) {
            I()(Sn)
        }
    }
    function We() {
        a() || Lt({
            rootPath: []
        })
    }
    function $t() {
        fe && (r(Oe) && r(Oe).querySelector(".cm-search") ? E_(fe) : A_(fe))
    }
    function j() {
        if (a())
            return !1;
        Ht();
        var te = c().undo();
        return ee("undo", te),
        sg(te) ? (fe.dispatch({
            annotations: D.of("undo"),
            changes: Xp.fromJSON(te.undo.changes),
            selection: Rd.fromJSON(te.undo.selection),
            scrollIntoView: !0
        }),
        !0) : (R()(te),
        !1)
    }
    function C() {
        if (a())
            return !1;
        Ht();
        var te = c().redo();
        return ee("redo", te),
        sg(te) ? (fe.dispatch({
            annotations: D.of("redo"),
            changes: Xp.fromJSON(te.redo.changes),
            selection: Rd.fromJSON(te.redo.selection),
            scrollIntoView: !0
        }),
        !0) : (k()(te),
        !1)
    }
    function A() {
        h(je, !0),
        Zt(u(), !0, !0)
    }
    function $() {
        S()(zr.tree)
    }
    function re() {
        Rn()
    }
    function Ce(te) {
        ee("select validation error", te);
        var {from: Re, to: at} = Ye(te);
        Re !== void 0 && at !== void 0 && (ze(Re, at),
        J())
    }
    function ze(te, Re) {
        ee("setSelection", {
            anchor: te,
            head: Re
        }),
        fe && fe.dispatch(fe.state.update({
            selection: {
                anchor: te,
                head: Re
            },
            scrollIntoView: !0
        }))
    }
    function oe(te, Re) {
        if (Re.state.selection.ranges.length === 1) {
            var at = Re.state.selection.ranges[0]
              , Dt = r(X).slice(at.from, at.to);
            if (Dt === "{" || Dt === "[") {
                var Xe = Hp.parse(r(X))
                  , Gt = Object.keys(Xe.pointers).find(Pt => {
                    var In;
                    return ((In = Xe.pointers[Pt].value) === null || In === void 0 ? void 0 : In.pos) === at.from
                }
                )
                  , Sn = Xe.pointers[Gt];
                Gt && Sn && Sn.value && Sn.valueEnd && (ee("pointer found, selecting inner contents of path:", Gt, Sn),
                ze(Sn.value.pos + 1, Sn.valueEnd.pos - 1))
            }
        }
    }
    function Q() {
        return C_(or, {
            delay: 300
        })
    }
    function dt() {
        return !!r(Oe) && getComputedStyle(r(Oe)).getPropertyValue("--jse-theme").includes("dark")
    }
    function Ye(te) {
        var {path: Re, message: at, severity: Dt} = te
          , {line: Xe, column: Gt, from: Sn, to: Pt} = function(In, pt) {
            try {
                var en = Hp.parse(In)
                  , rt = Tt(pt)
                  , zt = en.pointers[rt];
                if (zt)
                    return {
                        path: pt,
                        line: zt.key ? zt.key.line : zt.value ? zt.value.line : 0,
                        column: zt.key ? zt.key.column : zt.value ? zt.value.column : 0,
                        from: zt.key ? zt.key.pos : zt.value ? zt.value.pos : 0,
                        to: zt.keyEnd ? zt.keyEnd.pos : zt.valueEnd ? zt.valueEnd.pos : 0
                    }
            } catch (Mn) {
                console.error(Mn)
            }
            return {
                path: pt,
                line: 0,
                column: 0,
                from: 0,
                to: 0
            }
        }(r(n).escapeValue(r(X)), Re);
        return {
            path: Re,
            line: Xe,
            column: Gt,
            from: Sn,
            to: Pt,
            message: at,
            severity: Dt,
            actions: []
        }
    }
    function he(te, Re) {
        var {line: at, column: Dt, position: Xe, message: Gt} = te;
        return {
            path: [],
            line: at,
            column: Dt,
            from: Xe,
            to: Xe,
            severity: zo.error,
            message: Gt,
            actions: Re && !a() ? [{
                name: "Auto repair",
                apply: () => Fe()
            }] : void 0
        }
    }
    function ft(te) {
        return {
            from: te.from || 0,
            to: te.to || 0,
            message: te.message || "",
            actions: te.actions,
            severity: te.severity
        }
    }
    function Zt(te, Re, at) {
        var Dt = Iv(te, v(), m())
          , Xe = !Wt(te, qt)
          , Gt = qt;
        ee("setCodeMirrorContent", {
            isChanged: Xe,
            emitChange: Re,
            forceUpdate: at
        }),
        fe && (Xe || at) && (qt = te,
        h(X, Dt),
        Yt(r(X), r(je)) || fe.dispatch({
            changes: {
                from: 0,
                to: fe.state.doc.length,
                insert: r(n).escapeValue(r(X))
            }
        }),
        F(),
        Xe && Re && hn(qt, Gt))
    }
    function Tn(te) {
        return Xd(te) ? Rd.fromJSON(te) : void 0
    }
    function _n() {
        return Xt.apply(this, arguments)
    }
    function Xt() {
        return Xt = wt(function*() {
            ee("refresh"),
            yield function() {
                return on.apply(this, arguments)
            }()
        }),
        Xt.apply(this, arguments)
    }
    function Rn() {
        if (fe) {
            var te = fe ? r(n).unescapeValue(fe.state.doc.toString()) : ""
              , Re = te !== r(X);
            if (ee("onChangeCodeMirrorValue", {
                isChanged: Re
            }),
            Re) {
                var at = qt;
                h(X, te),
                qt = {
                    text: r(X)
                },
                F(),
                hn(qt, at),
                tr(),
                Ut()
            }
        }
    }
    function on() {
        return (on = wt(function*() {
            if (tr(),
            fe) {
                var te = dt();
                return ee("updateTheme", {
                    dark: te
                }),
                fe.dispatch({
                    effects: [ct.reconfigure(hs.theme({}, {
                        dark: te
                    }))]
                }),
                new Promise(Re => setTimeout(Re))
            }
            return Promise.resolve()
        })).apply(this, arguments)
    }
    function It(te) {
        var Re = O_.of(typeof te == "number" ? " ".repeat(te) : te);
        return te === "	" ? [Re] : [Re, qT]
    }
    Up({
        onMount: ao,
        onDestroy: Vo,
        getWindow: () => ku(r(De)),
        hasFocus: () => U && document.hasFocus() || yp(r(De)),
        onFocus: H(),
        onBlur: () => {
            Ht(),
            Y()()
        }
    });
    var St = Gi(Rn, 300);
    function Ht() {
        St.flush()
    }
    function hn(te, Re) {
        w() && w()(te, Re, {
            contentErrors: Bn(),
            patchResult: void 0
        })
    }
    function Ut() {
        P()(He(r(Ne).selection))
    }
    function He(te) {
        return ke({
            type: Fn.text
        }, te.toJSON())
    }
    function Yt(te, Re) {
        return !!te && te.length > Vd && !Re
    }
    var Vt = T(Jd, !0)
      , bn = T(void 0, !0);
    function or() {
        if (Yt(r(X), r(je)))
            return [];
        var te = Bn();
        if (ig(te)) {
            var {parseError: Re, isRepairable: at} = te;
            return [ft(he(Re, at))]
        }
        return XR(te) ? te.validationErrors.map(Ye).map(ft) : []
    }
    function Bn() {
        ee("validate:start"),
        Ht();
        var te = Mr(r(n).escapeValue(r(X)), x(), m(), y());
        return ig(te) ? (h(Vt, te.isRepairable ? tg : "invalid"),
        h(bn, te.parseError),
        h(Pe, [])) : (h(Vt, Jd),
        h(bn, void 0),
        h(Pe, te?.validationErrors || [])),
        ee("validate:end"),
        te
    }
    var Mr = Ji(jP);
    function Gn() {
        r(bn) && function(te) {
            ee("select parse error", te);
            var Re = he(te, !1);
            ze(Re.from != null ? Re.from : 0, Re.to != null ? Re.to : 0),
            J()
        }(r(bn))
    }
    var fr = {
        icon: Jk,
        text: "Show me",
        title: "Move to the parse error location",
        onClick: Gn
    };
    V( () => b(f()), () => {
        h(n, xp({
            escapeControlCharacters: !1,
            escapeUnicodeCharacters: f()
        }))
    }
    ),
    V( () => b(u()), () => {
        Zt(u(), !1, !1)
    }
    ),
    V( () => b(d()), () => {
        (function(te) {
            if (Xd(te)) {
                var Re = Tn(te);
                !fe || !Re || r(Ne) && r(Ne).selection.eq(Re) || (ee("applyExternalSelection", Re),
                fe.dispatch({
                    selection: Re
                }))
            }
        }
        )(d())
    }
    ),
    V( () => b(x()), () => {
        (function(te) {
            ee("updateLinter", te),
            fe && fe.dispatch({
                effects: Ve.reconfigure(Q())
            })
        }
        )(x())
    }
    ),
    V( () => b(v()), () => {
        (function(te) {
            fe && (ee("updateIndentation", te),
            fe.dispatch({
                effects: de.reconfigure(It(te))
            }))
        }
        )(v())
    }
    ),
    V( () => b(p()), () => {
        (function(te) {
            fe && (ee("updateTabSize", te),
            fe.dispatch({
                effects: ye.reconfigure(ps.tabSize.of(te))
            }))
        }
        )(p())
    }
    ),
    V( () => b(a()), () => {
        (function(te) {
            fe && (ee("updateReadOnly", te),
            fe.dispatch({
                effects: [ge.reconfigure(ps.readOnly.of(te))]
            }))
        }
        )(a())
    }
    ),
    V( () => (r(we),
    b(f())), () => {
        r(we) !== f() && (h(we, f()),
        ee("forceUpdateText", {
            escapeUnicodeCharacters: f()
        }),
        fe && fe.dispatch({
            changes: {
                from: 0,
                to: fe.state.doc.length,
                insert: r(n).escapeValue(r(X))
            }
        }))
    }
    ),
    V( () => (r(Vt),
    b(a()),
    bi), () => {
        h(o, r(Vt) !== tg || a() ? [fr] : [{
            icon: bi,
            text: "Auto repair",
            title: "Automatically repair JSON",
            onClick: Fe
        }, fr])
    }
    ),
    An(),
    Rt(!0);
    var Tr, Sr = HT(), Cr = z(Sr), ar = te => {
        var Re = pe( () => (r(X),
        N( () => r(X).length === 0)))
          , at = pe( () => !r(Re))
          , Dt = pe( () => !r(Re))
          , Xe = pe( () => !r(Re))
          , Gt = pe( () => !r(Re));
        (function(Sn, Pt) {
            it(Pt, !1);
            var In = T(void 0, !0)
              , pt = g(Pt, "readOnly", 9, !1)
              , en = g(Pt, "onFormat", 9)
              , rt = g(Pt, "onCompact", 9)
              , zt = g(Pt, "onSort", 9)
              , Mn = g(Pt, "onTransform", 9)
              , ir = g(Pt, "onToggleSearch", 9)
              , Ft = g(Pt, "onUndo", 9)
              , xn = g(Pt, "onRedo", 9)
              , ut = g(Pt, "canUndo", 9)
              , W = g(Pt, "canRedo", 9)
              , ce = g(Pt, "canFormat", 9)
              , Te = g(Pt, "canCompact", 9)
              , vt = g(Pt, "canSort", 9)
              , sn = g(Pt, "canTransform", 9)
              , Jt = g(Pt, "onRenderMenu", 9)
              , Wn = {
                type: "button",
                icon: $c,
                title: "Search (Ctrl+F)",
                className: "jse-search",
                onClick: ir()
            }
              , Zn = T(void 0, !0);
            V( () => (b(pt()),
            b(en()),
            b(ce()),
            b(rt()),
            b(Te()),
            b(zt()),
            b(vt()),
            b(Mn()),
            b(sn()),
            b(Ft()),
            b(ut()),
            b(xn()),
            b(W())), () => {
                h(Zn, pt() ? [Wn, {
                    type: "space"
                }] : [{
                    type: "button",
                    icon: Lg,
                    title: "Format JSON: add proper indentation and new lines (Ctrl+I)",
                    className: "jse-format",
                    onClick: en(),
                    disabled: pt() || !ce()
                }, {
                    type: "button",
                    icon: _z,
                    title: "Compact JSON: remove all white spacing and new lines (Ctrl+Shift+I)",
                    className: "jse-compact",
                    onClick: rt(),
                    disabled: pt() || !Te()
                }, {
                    type: "separator"
                }, {
                    type: "button",
                    icon: nc,
                    title: "Sort",
                    className: "jse-sort",
                    onClick: zt(),
                    disabled: pt() || !vt()
                }, {
                    type: "button",
                    icon: rc,
                    title: "Transform contents (filter, sort, project)",
                    className: "jse-transform",
                    onClick: Mn(),
                    disabled: pt() || !sn()
                }, Wn, {
                    type: "separator"
                }, {
                    type: "button",
                    icon: yf,
                    title: "Undo (Ctrl+Z)",
                    className: "jse-undo",
                    onClick: Ft(),
                    disabled: !ut()
                }, {
                    type: "button",
                    icon: wf,
                    title: "Redo (Ctrl+Shift+Z)",
                    className: "jse-redo",
                    onClick: xn(),
                    disabled: !W()
                }, {
                    type: "space"
                }])
            }
            ),
            V( () => (b(Jt()),
            r(Zn)), () => {
                h(In, Jt()(r(Zn)) || r(Zn))
            }
            ),
            An(),
            Rt(!0),
            kd(Sn, {
                get items() {
                    return r(In)
                }
            }),
            st()
        }
        )(te, {
            get readOnly() {
                return a()
            },
            onFormat: Se,
            onCompact: mt,
            onSort: $e,
            onTransform: We,
            onToggleSearch: $t,
            onUndo: j,
            onRedo: C,
            get canFormat() {
                return r(at)
            },
            get canCompact() {
                return r(Dt)
            },
            get canSort() {
                return r(Xe)
            },
            get canTransform() {
                return r(Gt)
            },
            get canUndo() {
                return b(c()),
                N( () => c().canUndo)
            },
            get canRedo() {
                return b(c()),
                N( () => c().canRedo)
            },
            get onRenderMenu() {
                return M()
            }
        })
    }
    ;
    ie(Cr, te => {
        i() && te(ar)
    }
    );
    var Or = B(Cr, 2)
      , be = te => {
        var Re, at = BT(), Dt = pe( () => (r(X),
        r(je),
        N( () => Yt(r(X), r(je))))), Xe = ht(at);
        nr(Xe, pt => h(Oe, pt), () => r(Oe));
        var Gt = B(Xe, 2)
          , Sn = pt => {
            var en = $T()
              , rt = ht(en)
              , zt = pe( () => (b(Ku),
            b(Vd),
            r(X),
            N( () => "The JSON document is larger than ".concat(Ku(Vd), ", ") + "and may crash your browser when loading it in text mode. Actual size: ".concat(Ku(r(X).length), "."))));
            Mo(rt, {
                get icon() {
                    return Yi
                },
                type: "error",
                get message() {
                    return r(zt)
                },
                actions: [{
                    text: "Open anyway",
                    title: "Open the document in text mode. This may freeze or crash your browser.",
                    onClick: A
                }, {
                    text: "Open in tree mode",
                    title: "Open the document in tree mode. Tree mode can handle large documents.",
                    onClick: $
                }, {
                    text: "Cancel",
                    title: "Cancel opening this large document.",
                    onClick: re
                }],
                onClose: J
            });
            var Mn = z(B(rt, 2));
            Ee(ir => lt(Mn, ir), [ () => (b(Na),
            r(X),
            b(xc),
            N( () => Na(r(X) || "", xc)))], pe),
            L(pt, en)
        }
        ;
        ie(Gt, pt => {
            r(Dt) && pt(Sn)
        }
        );
        var Pt = B(Gt, 2)
          , In = pt => {
            var en = FT()
              , rt = ht(en)
              , zt = ut => {
                (function(W, ce) {
                    it(ce, !1);
                    var Te = g(ce, "editorState", 8)
                      , vt = T()
                      , sn = T()
                      , Jt = T()
                      , Wn = T()
                      , Zn = T();
                    V( () => b(Te()), () => {
                        var Ge;
                        h(vt, (Ge = Te()) === null || Ge === void 0 || (Ge = Ge.selection) === null || Ge === void 0 || (Ge = Ge.main) === null || Ge === void 0 ? void 0 : Ge.head)
                    }
                    ),
                    V( () => (r(vt),
                    b(Te())), () => {
                        var Ge;
                        h(sn, r(vt) !== void 0 ? (Ge = Te()) === null || Ge === void 0 || (Ge = Ge.doc) === null || Ge === void 0 ? void 0 : Ge.lineAt(r(vt)) : void 0)
                    }
                    ),
                    V( () => r(sn), () => {
                        h(Jt, r(sn) !== void 0 ? r(sn).number : void 0)
                    }
                    ),
                    V( () => (r(sn),
                    r(vt)), () => {
                        h(Wn, r(sn) !== void 0 && r(vt) !== void 0 ? r(vt) - r(sn).from + 1 : void 0)
                    }
                    ),
                    V( () => b(Te()), () => {
                        var Ge;
                        h(Zn, (Ge = Te()) === null || Ge === void 0 || (Ge = Ge.selection) === null || Ge === void 0 || (Ge = Ge.ranges) === null || Ge === void 0 ? void 0 : Ge.reduce( (un, wn) => un + wn.to - wn.from, 0))
                    }
                    ),
                    An(),
                    Rt();
                    var sr = LT()
                      , Nn = z(sr)
                      , Nt = Ge => {
                        var un = TT()
                          , wn = z(un);
                        Ee( () => {
                            var Ln;
                            return lt(wn, "Line: ".concat((Ln = r(Jt)) !== null && Ln !== void 0 ? Ln : ""))
                        }
                        ),
                        L(Ge, un)
                    }
                    ;
                    ie(Nn, Ge => {
                        r(Jt) !== void 0 && Ge(Nt)
                    }
                    );
                    var Pn = B(Nn, 2)
                      , eo = Ge => {
                        var un = IT()
                          , wn = z(un);
                        Ee( () => {
                            var Ln;
                            return lt(wn, "Column: ".concat((Ln = r(Wn)) !== null && Ln !== void 0 ? Ln : ""))
                        }
                        ),
                        L(Ge, un)
                    }
                    ;
                    ie(Pn, Ge => {
                        r(Wn) !== void 0 && Ge(eo)
                    }
                    );
                    var Ct = B(Pn, 2)
                      , pr = Ge => {
                        var un = NT()
                          , wn = z(un);
                        Ee( () => {
                            var Ln;
                            return lt(wn, "Selection: ".concat((Ln = r(Zn)) !== null && Ln !== void 0 ? Ln : "", " characters"))
                        }
                        ),
                        L(Ge, un)
                    }
                    ;
                    ie(Ct, Ge => {
                        r(Zn) !== void 0 && r(Zn) > 0 && Ge(pr)
                    }
                    ),
                    L(W, sr),
                    st()
                }
                )(ut, {
                    get editorState() {
                        return r(Ne)
                    }
                })
            }
            ;
            ie(rt, ut => {
                s() && ut(zt)
            }
            );
            var Mn = B(rt, 2)
              , ir = ut => {
                Mo(ut, {
                    type: "error",
                    get icon() {
                        return Yi
                    },
                    get message() {
                        return r(bn),
                        N( () => r(bn).message)
                    },
                    get actions() {
                        return r(o)
                    },
                    onClick: Gn,
                    onClose: J
                })
            }
            ;
            ie(Mn, ut => {
                r(bn) && ut(ir)
            }
            );
            var Ft = B(Mn, 2)
              , xn = ut => {
                var W = pe( () => [{
                    icon: Lg,
                    text: "Format",
                    title: "Format JSON: add proper indentation and new lines (Ctrl+I)",
                    onClick: Se
                }, {
                    icon: qc,
                    text: "No thanks",
                    title: "Close this message",
                    onClick: () => h(Ae, !1)
                }]);
                Mo(ut, {
                    type: "success",
                    message: "Do you want to format the JSON?",
                    get actions() {
                        return r(W)
                    },
                    onClose: J
                })
            }
            ;
            ie(Ft, ut => {
                r(bn),
                r(Ae),
                b(Zh),
                r(X),
                N( () => !r(bn) && r(Ae) && Zh(r(X))) && ut(xn)
            }
            ),
            Dp(B(Ft, 2), {
                get validationErrors() {
                    return r(Pe)
                },
                selectError: Ce
            }),
            L(pt, en)
        }
        ;
        ie(Pt, pt => {
            r(Dt) || pt(In)
        }
        ),
        Ee(pt => Re = At(Xe, 1, "jse-contents svelte-xt61xw", null, Re, pt), [ () => ({
            "jse-hidden": r(Dt)
        })], pe),
        L(te, at)
    }
      , an = te => {
        L(te, WT())
    }
    ;
    return ie(Or, te => {
        _e ? te(an, !1) : te(be)
    }
    ),
    nr(Sr, te => h(De, te), () => r(De)),
    Ee(te => Tr = At(Sr, 1, "jse-text-mode svelte-xt61xw", null, Tr, te), [ () => ({
        "no-main-menu": !i()
    })], pe),
    L(e, Sr),
    Et(t, "focus", J),
    Et(t, "patch", _t),
    Et(t, "handlePatch", nt),
    Et(t, "openTransformModal", Lt),
    Et(t, "refresh", _n),
    Et(t, "flush", Ht),
    Et(t, "validate", Bn),
    st({
        focus: J,
        patch: _t,
        handlePatch: nt,
        openTransformModal: Lt,
        refresh: _n,
        flush: Ht,
        validate: Bn
    })
}
kt(`/* over all fonts, sizes, and colors */
/* "consolas" for Windows, "menlo" for Mac with fallback to "monaco", 'Ubuntu Mono' for Ubuntu */
/* (at Mac this font looks too large at 14px, but 13px is too small for the font on Windows) */
/* main, menu, modal */
/* jsoneditor modal */
/* tooltip in text mode */
/* panels: navigation bar, gutter, search box */
/* navigation-bar */
/* context menu */
/* contents: json key and values */
/* contents: selected or hovered */
/* contents: section of collapsed items in an array */
/* contents: highlighting of search matches */
/* contents: inline tags inside the JSON document */
/* contents: table */
/* controls in modals: inputs, buttons, and \`a\` */
/* messages */
/* svelte-select */
/* color picker */
.jse-inline-value.svelte-h57m0p {
  font-family: var(--jse-font-family-mono, consolas, menlo, monaco, "Ubuntu Mono", "source-code-pro", monospace);
  font-size: var(--jse-font-size-mono, 14px);
  line-height: var(--jse-line-height, calc(1em + 4px));
  border: none;
  padding: 0 calc(0.5 * var(--jse-padding, 10px));
  background: transparent;
  color: inherit;
  cursor: inherit;
}
.jse-inline-value.jse-highlight.svelte-h57m0p {
  background-color: var(--jse-search-match-color, #ffe665);
  outline: var(--jse-search-match-outline, none);
}
.jse-inline-value.jse-highlight.jse-active.svelte-h57m0p {
  background-color: var(--jse-search-match-active-color, var(--jse-search-match-color, #ffe665));
  outline: var(--jse-search-match-outline, 2px solid #e0be00);
}`);
var GT = K('<button type="button"> </button>');
kt(`/* over all fonts, sizes, and colors */
/* "consolas" for Windows, "menlo" for Mac with fallback to "monaco", 'Ubuntu Mono' for Ubuntu */
/* (at Mac this font looks too large at 14px, but 13px is too small for the font on Windows) */
/* main, menu, modal */
/* jsoneditor modal */
/* tooltip in text mode */
/* panels: navigation bar, gutter, search box */
/* navigation-bar */
/* context menu */
/* contents: json key and values */
/* contents: selected or hovered */
/* contents: section of collapsed items in an array */
/* contents: highlighting of search matches */
/* contents: inline tags inside the JSON document */
/* contents: table */
/* controls in modals: inputs, buttons, and \`a\` */
/* messages */
/* svelte-select */
/* color picker */
.jse-column-header.svelte-2i3vdx {
  background: none;
  border: none;
  font-family: inherit;
  font-size: inherit;
  color: inherit;
  display: flex;
  gap: var(--jse-padding, 10px);
  padding: calc(0.5 * var(--jse-padding, 10px)) var(--jse-padding, 10px) calc(0.5 * var(--jse-padding, 10px)) calc(0.5 * var(--jse-padding, 10px));
  width: 100%;
}
.jse-column-header.svelte-2i3vdx:hover {
  background: var(--jse-table-header-background-highlight, #e8e8e8);
}
.jse-column-header.svelte-2i3vdx:not(.jse-column-header.jse-readonly) {
  cursor: pointer;
}
.jse-column-header.svelte-2i3vdx span.jse-column-sort-icon:where(.svelte-2i3vdx) {
  height: 1em;
}`);
var JT = K('<span class="jse-column-sort-icon svelte-2i3vdx"><!></span>')
  , KT = K('<button type="button"><span class="jse-column-name"> </span> <!></button>');
kt(`/* over all fonts, sizes, and colors */
/* "consolas" for Windows, "menlo" for Mac with fallback to "monaco", 'Ubuntu Mono' for Ubuntu */
/* (at Mac this font looks too large at 14px, but 13px is too small for the font on Windows) */
/* main, menu, modal */
/* jsoneditor modal */
/* tooltip in text mode */
/* panels: navigation bar, gutter, search box */
/* navigation-bar */
/* context menu */
/* contents: json key and values */
/* contents: selected or hovered */
/* contents: section of collapsed items in an array */
/* contents: highlighting of search matches */
/* contents: inline tags inside the JSON document */
/* contents: table */
/* controls in modals: inputs, buttons, and \`a\` */
/* messages */
/* svelte-select */
/* color picker */
.jse-table-mode-welcome.svelte-17xl1jx {
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow: auto;
  align-items: center;
  border-left: var(--jse-main-border, 1px solid #d7d7d7);
  border-right: var(--jse-main-border, 1px solid #d7d7d7);
}
.jse-table-mode-welcome.svelte-17xl1jx:last-child {
  border-bottom: var(--jse-main-border, 1px solid #d7d7d7);
}
.jse-table-mode-welcome.svelte-17xl1jx .jse-space.jse-before:where(.svelte-17xl1jx) {
  flex: 1;
}
.jse-table-mode-welcome.svelte-17xl1jx .jse-nested-arrays:where(.svelte-17xl1jx) {
  display: flex;
  flex-direction: column;
  gap: var(--jse-padding, 10px);
  max-width: 400px;
  margin: 2em var(--jse-padding, 10px);
  font-family: var(--jse-font-family, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif);
  font-size: var(--jse-font-size, 16px);
}
.jse-table-mode-welcome.svelte-17xl1jx .jse-nested-arrays:where(.svelte-17xl1jx) .jse-nested-arrays-info:where(.svelte-17xl1jx) {
  color: var(--jse-panel-color-readonly, #b2b2b2);
}
.jse-table-mode-welcome.svelte-17xl1jx .jse-nested-arrays:where(.svelte-17xl1jx) .jse-nested-property:where(.svelte-17xl1jx) {
  display: flex;
  align-items: center;
  gap: var(--jse-padding, 10px);
}
.jse-table-mode-welcome.svelte-17xl1jx .jse-nested-arrays:where(.svelte-17xl1jx) .jse-nested-property:where(.svelte-17xl1jx) .jse-nested-property-path:where(.svelte-17xl1jx) {
  flex: 1;
}
.jse-table-mode-welcome.svelte-17xl1jx .jse-nested-arrays:where(.svelte-17xl1jx) .jse-nested-property:where(.svelte-17xl1jx) .jse-nested-property-path:where(.svelte-17xl1jx) .jse-nested-property-count:where(.svelte-17xl1jx) {
  opacity: 0.5;
  white-space: nowrap;
}
.jse-table-mode-welcome.svelte-17xl1jx .jse-nested-arrays:where(.svelte-17xl1jx) button.jse-nested-array-action:where(.svelte-17xl1jx) {
  text-align: left;
  border: none;
  background: transparent;
  color: inherit;
  cursor: pointer;
  font-family: var(--jse-font-family, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif);
  font-size: var(--jse-font-size, 16px);
  padding: 5px;
  margin: 0;
  background: var(--jse-button-primary-background, var(--jse-theme-color, #3883fa));
  color: var(--jse-button-primary-color, #fff);
  padding: var(--jse-padding, 10px) calc(2 * var(--jse-padding, 10px));
  border-radius: 3px;
}
.jse-table-mode-welcome.svelte-17xl1jx .jse-nested-arrays:where(.svelte-17xl1jx) button.jse-nested-array-action:where(.svelte-17xl1jx):hover {
  background: var(--jse-button-primary-background-highlight, var(--jse-theme-color-highlight, #5f9dff));
}
.jse-table-mode-welcome.svelte-17xl1jx .jse-nested-arrays:where(.svelte-17xl1jx) button.jse-nested-array-action:where(.svelte-17xl1jx):disabled {
  background: var(--jse-button-primary-background-disabled, #9d9d9d);
}
.jse-table-mode-welcome.svelte-17xl1jx .jse-space.jse-after:where(.svelte-17xl1jx) {
  flex: 2;
}`);
var YT = (e, t) => t.onClick()
  , XT = K(`An empty document cannot be opened in table mode. You can go to tree mode instead, or paste
        a JSON Array using <b>Ctrl+V</b>.`, 1)
  , QT = (e, t, n) => t.openJSONEditorModal(r(n))
  , ZT = (e, t, n) => t.extractPath(r(n))
  , e4 = K('<button type="button" class="jse-nested-array-action svelte-17xl1jx">Extract</button>')
  , t4 = K('<div class="jse-nested-property svelte-17xl1jx"><div class="jse-nested-property-path svelte-17xl1jx"> <span class="jse-nested-property-count svelte-17xl1jx"> </span></div> <button type="button" class="jse-nested-array-action svelte-17xl1jx"> </button> <!></div>')
  , n4 = (e, t) => t.onChangeMode(zr.tree)
  , r4 = K('<div class="jse-table-mode-welcome svelte-17xl1jx" role="none"><div class="jse-space jse-before svelte-17xl1jx"></div> <div class="jse-nested-arrays svelte-17xl1jx"><div class="jse-nested-arrays-title"> </div> <div class="jse-nested-arrays-info svelte-17xl1jx"><!></div> <!> <button type="button" class="jse-nested-array-action svelte-17xl1jx">Switch to tree mode</button></div> <div class="jse-space jse-after svelte-17xl1jx"></div></div>');
function o4(e, t) {
    it(t, !0);
    var n = mo( () => t.json ? function(x) {
        var y = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 2
          , w = [];
        return function S(P, R) {
            $r(P) && R.length < y && Object.keys(P).forEach(k => {
                S(P[k], R.concat(k))
            }
            ),
            Lr(P) && w.push(R)
        }(x, []),
        w
    }(t.json).slice(0, 99).filter(x => x.length > 0) : [])
      , o = mo( () => !vn(r(n)))
      , a = mo( () => t.json === void 0 && (t.text === "" || t.text === void 0))
      , i = mo( () => r(o) ? "Object with nested arrays" : r(a) ? "An empty document" : $r(t.json) ? "An object" : Lr(t.json) ? "An empty array" : "A ".concat(bp(t.json, t.parser)))
      , s = r4();
    s.__click = [YT, t];
    var l = B(z(s), 2)
      , u = z(l)
      , d = z(u)
      , c = B(u, 2)
      , v = z(c)
      , p = x => {
        L(x, Jr(`An object cannot be opened in table mode. You can open a nested array instead, or open the
        document in tree mode.`))
    }
      , f = (x, y) => {
        var w = P => {
            L(P, XT())
        }
          , S = P => {
            var R = Jr();
            Ee( () => {
                var k;
                return lt(R, "".concat((k = r(i)) !== null && k !== void 0 ? k : "", " cannot be opened in table mode. You can open the document in tree mode instead."))
            }
            ),
            L(P, R)
        }
        ;
        ie(x, P => {
            r(a) && !t.readOnly ? P(w) : P(S, !1)
        }
        , y)
    }
    ;
    ie(v, x => {
        r(o) ? x(p) : x(f, !1)
    }
    );
    var m = B(c, 2);
    wr(m, 17, () => r(n), Rr, (x, y) => {
        var w = t4()
          , S = mo( () => function(Z) {
            return Ke(t.json, Z).length
        }(r(y)))
          , P = z(w)
          , R = z(P)
          , k = z(B(R))
          , I = B(P, 2);
        I.__click = [QT, t, y];
        var H = z(I)
          , Y = B(I, 2)
          , M = Z => {
            var ae = e4();
            ae.__click = [ZT, t, y],
            L(Z, ae)
        }
        ;
        ie(Y, Z => {
            t.readOnly || Z(M)
        }
        ),
        Ee(Z => {
            var ae;
            lt(R, '"'.concat(Z ?? "", '" ')),
            lt(k, "(".concat((ae = r(S)) !== null && ae !== void 0 ? ae : "", " ").concat(r(S) !== 1 ? "items" : "item", ")")),
            lt(H, t.readOnly ? "View" : "Edit")
        }
        , [ () => xo(r(y))]),
        L(x, w)
    }
    ),
    B(m, 2).__click = [n4, t],
    Ee( () => lt(d, r(i))),
    L(e, s),
    st()
}
ju(["click"]);
kt(`/* over all fonts, sizes, and colors */
/* "consolas" for Windows, "menlo" for Mac with fallback to "monaco", 'Ubuntu Mono' for Ubuntu */
/* (at Mac this font looks too large at 14px, but 13px is too small for the font on Windows) */
/* main, menu, modal */
/* jsoneditor modal */
/* tooltip in text mode */
/* panels: navigation bar, gutter, search box */
/* navigation-bar */
/* context menu */
/* contents: json key and values */
/* contents: selected or hovered */
/* contents: section of collapsed items in an array */
/* contents: highlighting of search matches */
/* contents: inline tags inside the JSON document */
/* contents: table */
/* controls in modals: inputs, buttons, and \`a\` */
/* messages */
/* svelte-select */
/* color picker */
.jse-column-header.svelte-fzj761 {
  background: none;
  border: none;
  font-family: inherit;
  font-size: inherit;
  color: inherit;
  display: flex;
  gap: var(--jse-padding, 10px);
  padding: calc(0.5 * var(--jse-padding, 10px)) var(--jse-padding, 10px) calc(0.5 * var(--jse-padding, 10px)) calc(0.5 * var(--jse-padding, 10px));
  width: 100%;
}
.jse-column-header.svelte-fzj761:hover {
  background: var(--jse-table-header-background-highlight, #e8e8e8);
}
.jse-column-header.svelte-fzj761:not(.jse-column-header.jse-readonly) {
  cursor: pointer;
}`);
var a4 = K('<button type="button"><!></button>');
kt(`/* over all fonts, sizes, and colors */
/* "consolas" for Windows, "menlo" for Mac with fallback to "monaco", 'Ubuntu Mono' for Ubuntu */
/* (at Mac this font looks too large at 14px, but 13px is too small for the font on Windows) */
/* main, menu, modal */
/* jsoneditor modal */
/* tooltip in text mode */
/* panels: navigation bar, gutter, search box */
/* navigation-bar */
/* context menu */
/* contents: json key and values */
/* contents: selected or hovered */
/* contents: section of collapsed items in an array */
/* contents: highlighting of search matches */
/* contents: inline tags inside the JSON document */
/* contents: table */
/* controls in modals: inputs, buttons, and \`a\` */
/* messages */
/* svelte-select */
/* color picker */
.jse-table-mode.svelte-u14cgx {
  flex: 1;
  display: flex;
  flex-direction: column;
  position: relative;
  background: var(--jse-background-color, #fff);
  min-width: 0;
  min-height: 0;
  font-family: var(--jse-font-family-mono, consolas, menlo, monaco, "Ubuntu Mono", "source-code-pro", monospace);
  font-size: var(--jse-font-size-mono, 14px);
  color: var(--jse-text-color, #4d4d4d);
  line-height: var(--jse-line-height, calc(1em + 4px));
}
.jse-table-mode.no-main-menu.svelte-u14cgx {
  border-top: var(--jse-main-border, 1px solid #d7d7d7);
}
.jse-table-mode.svelte-u14cgx .jse-search-box-container:where(.svelte-u14cgx) {
  position: relative;
  height: 0;
  top: calc(var(--jse-line-height, calc(1em + 4px)) + 2 * var(--jse-padding, 10px));
  margin-right: calc(var(--jse-padding, 10px) + 20px);
  margin-left: var(--jse-padding, 10px);
  text-align: right;
  z-index: 3;
}
.jse-table-mode.svelte-u14cgx .jse-hidden-input-label:where(.svelte-u14cgx) {
  position: fixed;
  right: 0;
  top: 0;
  width: 0;
  height: 0;
}
.jse-table-mode.svelte-u14cgx .jse-hidden-input-label:where(.svelte-u14cgx) .jse-hidden-input:where(.svelte-u14cgx) {
  width: 0;
  height: 0;
  padding: 0;
  border: 0;
  outline: none;
}
.jse-table-mode.svelte-u14cgx .jse-contents:where(.svelte-u14cgx) {
  flex: 1;
  align-items: flex-start;
  flex-direction: column;
  display: flex;
  overflow: auto;
  overflow-anchor: none;
  scrollbar-gutter: stable;
  border-left: var(--jse-main-border, 1px solid #d7d7d7);
  border-right: var(--jse-main-border, 1px solid #d7d7d7);
}
.jse-table-mode.svelte-u14cgx .jse-contents:where(.svelte-u14cgx):last-child {
  border-bottom: var(--jse-main-border, 1px solid #d7d7d7);
}
.jse-table-mode.svelte-u14cgx .jse-contents:where(.svelte-u14cgx) table.jse-table-main:where(.svelte-u14cgx) {
  border-collapse: collapse;
  border-spacing: 0;
}
.jse-table-mode.svelte-u14cgx .jse-contents:where(.svelte-u14cgx) table.jse-table-main:where(.svelte-u14cgx) .jse-table-invisible-start-section:where(.svelte-u14cgx) td:where(.svelte-u14cgx),
.jse-table-mode.svelte-u14cgx .jse-contents:where(.svelte-u14cgx) table.jse-table-main:where(.svelte-u14cgx) .jse-table-invisible-end-section:where(.svelte-u14cgx) td:where(.svelte-u14cgx) {
  margin: 0;
  padding: 0;
}
.jse-table-mode.svelte-u14cgx .jse-contents:where(.svelte-u14cgx) table.jse-table-main:where(.svelte-u14cgx) .jse-search-box-background:where(.svelte-u14cgx) {
  background: var(--jse-table-header-background, #f5f5f5);
}
.jse-table-mode.svelte-u14cgx .jse-contents:where(.svelte-u14cgx) table.jse-table-main:where(.svelte-u14cgx) .jse-table-invisible-end-section:where(.svelte-u14cgx) td:where(.svelte-u14cgx) {
  padding-bottom: var(--jse-padding, 10px);
}
.jse-table-mode.svelte-u14cgx .jse-contents:where(.svelte-u14cgx) table.jse-table-main:where(.svelte-u14cgx) .jse-table-row:where(.svelte-u14cgx):hover {
  background-color: var(--jse-table-row-odd-background, rgba(0, 0, 0, 0.05));
}
.jse-table-mode.svelte-u14cgx .jse-contents:where(.svelte-u14cgx) table.jse-table-main:where(.svelte-u14cgx) .jse-table-row:where(.svelte-u14cgx) .jse-table-cell:where(.svelte-u14cgx) {
  padding: 0 var(--jse-padding, 10px) 0 0;
  vertical-align: top;
  white-space: nowrap;
  height: var(--jse-line-height, calc(1em + 4px));
}
.jse-table-mode.svelte-u14cgx .jse-contents:where(.svelte-u14cgx) table.jse-table-main:where(.svelte-u14cgx) .jse-table-row:where(.svelte-u14cgx) .jse-table-cell.jse-table-cell-header:where(.svelte-u14cgx), .jse-table-mode.svelte-u14cgx .jse-contents:where(.svelte-u14cgx) table.jse-table-main:where(.svelte-u14cgx) .jse-table-row:where(.svelte-u14cgx) .jse-table-cell.jse-table-cell-gutter:where(.svelte-u14cgx) {
  font-weight: normal;
  text-align: left;
  color: var(--jse-text-readonly, #8d8d8d);
  background: var(--jse-table-header-background, #f5f5f5);
}
.jse-table-mode.svelte-u14cgx .jse-contents:where(.svelte-u14cgx) table.jse-table-main:where(.svelte-u14cgx) .jse-table-row:where(.svelte-u14cgx) .jse-table-cell.jse-table-cell-header:where(.svelte-u14cgx) {
  padding: 0;
  position: sticky;
  top: 0;
}
.jse-table-mode.svelte-u14cgx .jse-contents:where(.svelte-u14cgx) table.jse-table-main:where(.svelte-u14cgx) .jse-table-row:where(.svelte-u14cgx) .jse-table-cell.jse-table-cell-header:where(.svelte-u14cgx) .jse-table-root-error:where(.svelte-u14cgx) {
  padding: calc(0.5 * var(--jse-padding, 10px)) var(--jse-padding, 10px) calc(0.5 * var(--jse-padding, 10px)) calc(0.5 * var(--jse-padding, 10px));
}
.jse-table-mode.svelte-u14cgx .jse-contents:where(.svelte-u14cgx) table.jse-table-main:where(.svelte-u14cgx) .jse-table-row:where(.svelte-u14cgx) .jse-table-cell.jse-table-cell-gutter:where(.svelte-u14cgx) {
  padding: 0 var(--jse-padding, 10px) 0 calc(0.5 * var(--jse-padding, 10px));
}
.jse-table-mode.svelte-u14cgx .jse-contents:where(.svelte-u14cgx) table.jse-table-main:where(.svelte-u14cgx) .jse-table-row:where(.svelte-u14cgx) .jse-table-cell:where(.svelte-u14cgx) .jse-value-outer:where(.svelte-u14cgx) {
  display: inline-block;
  cursor: var(--jse-contents-cursor, pointer);
}
.jse-table-mode.svelte-u14cgx .jse-contents:where(.svelte-u14cgx) table.jse-table-main:where(.svelte-u14cgx) .jse-table-row:where(.svelte-u14cgx) .jse-table-cell:where(.svelte-u14cgx) .jse-value-outer:where(.svelte-u14cgx):hover {
  background: var(--jse-hover-background-color, rgba(0, 0, 0, 0.06));
}
.jse-table-mode.svelte-u14cgx .jse-contents:where(.svelte-u14cgx) table.jse-table-main:where(.svelte-u14cgx) .jse-table-row:where(.svelte-u14cgx) .jse-table-cell:where(.svelte-u14cgx) .jse-value-outer.jse-selected-value:where(.svelte-u14cgx) {
  background: var(--jse-selection-background-color, #d3d3d3);
}
.jse-table-mode.svelte-u14cgx .jse-contents:where(.svelte-u14cgx) table.jse-table-main:where(.svelte-u14cgx) .jse-table-row:where(.svelte-u14cgx) .jse-table-cell:where(.svelte-u14cgx) .jse-context-menu-anchor:where(.svelte-u14cgx) {
  display: inline-flex;
  position: relative;
  vertical-align: top;
}
.jse-table-mode.svelte-u14cgx .jse-contents.jse-contents-loading:where(.svelte-u14cgx) {
  align-items: unset;
}
.jse-table-mode.svelte-u14cgx .jse-contents.jse-contents-loading:where(.svelte-u14cgx) .jse-loading-space:where(.svelte-u14cgx) {
  flex: 1;
}
.jse-table-mode.svelte-u14cgx .jse-contents.jse-contents-loading:where(.svelte-u14cgx) .jse-loading:where(.svelte-u14cgx) {
  flex: 2;
  text-align: center;
  color: var(--jse-panel-color-readonly, #b2b2b2);
  box-sizing: border-box;
  font-family: var(--jse-font-family, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif);
  font-size: var(--jse-font-size, 16px);
}`);
var i4 = K('<div class="jse-table-root-error svelte-u14cgx"><!></div>')
  , s4 = K('<th class="jse-table-cell jse-table-cell-header svelte-u14cgx"><!></th>')
  , l4 = K('<th class="jse-table-cell jse-table-cell-header svelte-u14cgx"><!></th>')
  , u4 = K('<th class="jse-table-cell jse-table-cell-gutter svelte-u14cgx"> <!></th>')
  , c4 = K('<div class="jse-context-menu-anchor svelte-u14cgx"><!></div>')
  , d4 = K('<td class="jse-table-cell svelte-u14cgx"><div><!><!></div> <!></td>')
  , v4 = K('<td class="jse-table-cell svelte-u14cgx"></td>')
  , f4 = K('<tr class="jse-table-row svelte-u14cgx"><!><!><!></tr>')
  , p4 = K('<div class="jse-search-box-container svelte-u14cgx"><!></div> <div class="jse-contents svelte-u14cgx"><table class="jse-table-main svelte-u14cgx"><tbody><tr class="jse-table-row jse-table-row-header svelte-u14cgx"><th class="jse-table-cell jse-table-cell-header svelte-u14cgx"><!></th><!><!></tr><tr><td class="svelte-u14cgx"></td></tr><!><tr class="jse-table-invisible-end-section svelte-u14cgx"><td class="svelte-u14cgx"></td></tr></tbody></table></div> <!> <!> <!> <!>', 1)
  , h4 = K("<!> <!>", 1)
  , g4 = K('<label class="jse-hidden-input-label svelte-u14cgx"><input type="text" tabindex="-1" class="jse-hidden-input svelte-u14cgx"/></label> <!>', 1)
  , m4 = K('<div class="jse-contents jse-contents-loading svelte-u14cgx"><div class="jse-loading-space svelte-u14cgx"></div> <div class="jse-loading svelte-u14cgx">loading...</div></div>')
  , b4 = K('<div role="table"><!> <!></div> <!> <!>', 1);
function x4(e, t) {
    it(t, !1);
    var n = T(void 0, !0)
      , o = T(void 0, !0)
      , a = T(void 0, !0)
      , i = Hr("jsoneditor:TableMode")
      , {openAbsolutePopup: s, closeAbsolutePopup: l} = Pi("absolute-popup")
      , u = f1()
      , d = mi()
      , c = mi()
      , v = typeof window > "u";
    i("isSSR:", v);
    var p = g(t, "readOnly", 9)
      , f = g(t, "externalContent", 9)
      , m = g(t, "externalSelection", 9)
      , x = g(t, "history", 9)
      , y = g(t, "truncateTextSize", 9)
      , w = g(t, "mainMenuBar", 9)
      , S = g(t, "escapeControlCharacters", 9)
      , P = g(t, "escapeUnicodeCharacters", 9)
      , R = g(t, "flattenColumns", 9)
      , k = g(t, "parser", 9)
      , I = g(t, "parseMemoizeOne", 9)
      , H = g(t, "validator", 9)
      , Y = g(t, "validationParser", 9)
      , M = g(t, "indentation", 9)
      , Z = g(t, "onChange", 9)
      , ae = g(t, "onChangeMode", 9)
      , ee = g(t, "onSelect", 9)
      , se = g(t, "onUndo", 9)
      , _e = g(t, "onRedo", 9)
      , fe = g(t, "onRenderValue", 9)
      , Oe = g(t, "onRenderMenu", 9)
      , De = g(t, "onRenderContextMenu", 9)
      , Ne = g(t, "onFocus", 9)
      , je = g(t, "onBlur", 9)
      , Ae = g(t, "onSortModal", 9)
      , Pe = g(t, "onTransformModal", 9)
      , Ve = g(t, "onJSONEditorModal", 9)
      , ge = T(void 0, !0)
      , de = T(void 0, !0)
      , ye = T(void 0, !0)
      , ct = T(void 0, !0)
      , qt = T(void 0, !0);
    Up({
        onMount: ao,
        onDestroy: Vo,
        getWindow: () => ku(r(de)),
        hasFocus: () => We && document.hasFocus() || yp(r(de)),
        onFocus: () => {
            $t = !0,
            Ne() && Ne()()
        }
        ,
        onBlur: () => {
            $t = !1,
            je() && je()()
        }
    });
    var X, D = T(void 0, !0), le = T(void 0, !0), F = T(void 0, !0), we = T(void 0, !0), ne = T(void 0, !0), Be = T(void 0, !0), J = T(!1, !0), U = T(!1, !0);
    function _t(E) {
        h(Be, (X = E) ? e1(r(D), X.items) : void 0)
    }
    function nt(E) {
        return Se.apply(this, arguments)
    }
    function Se() {
        return (Se = wt(function*(E) {
            h(Q, void 0),
            yield or(E)
        })).apply(this, arguments)
    }
    function mt() {
        h(J, !1),
        h(U, !1),
        He()
    }
    var Fe = T(1e4, !0)
      , $e = T([], !0)
      , Lt = T(void 0, !0)
      , We = !1
      , $t = !1
      , j = T(!1, !0)
      , C = T({}, !0)
      , A = T(600, !0)
      , $ = T(0, !0)
      , re = 18;
    function Ce(E) {
        h(Q, E)
    }
    function ze(E) {
        r(Q) && E !== void 0 && (Ia(E, Hi(r(Q))) && Ia(E, Qe(r(Q))) || (i("clearing selection: path does not exist anymore", r(Q)),
        h(Q, void 0)))
    }
    var oe = T(r(D) !== void 0 ? Dv({
        json: r(D)
    }) : void 0, !0)
      , Q = T(Zl(m()) ? m() : void 0, !0)
      , dt = T(void 0, !0)
      , Ye = T(!1, !0);
    function he(E) {
        if (!p()) {
            i("onSortByHeader", E);
            var G = E.sortDirection === Do.desc ? -1 : 1;
            It(b1(r(D), [], E.path, G), (xe, Le) => ({
                state: Le,
                sortedColumn: E
            }))
        }
    }
    ao( () => {
        r(Q) && Mr(Qe(r(Q)))
    }
    );
    var ft = T(void 0, !0);
    function Zt(E) {
        if (E.json !== void 0 || E.text !== void 0) {
            var G = r(D) !== void 0 && E.json !== void 0;
            x().add({
                type: "tree",
                undo: {
                    patch: G ? [{
                        op: "replace",
                        path: "",
                        value: E.json
                    }] : void 0,
                    json: E.json,
                    text: E.text,
                    documentState: E.documentState,
                    textIsRepaired: E.textIsRepaired,
                    selection: ja(E.selection),
                    sortedColumn: E.sortedColumn
                },
                redo: {
                    patch: G ? [{
                        op: "replace",
                        path: "",
                        value: r(D)
                    }] : void 0,
                    json: r(D),
                    text: r(le),
                    documentState: r(oe),
                    textIsRepaired: r(Ye),
                    selection: ja(r(Q)),
                    sortedColumn: r(dt)
                }
            })
        }
    }
    var Tn = T([], !0)
      , _n = Ji(p1);
    function Xt(E, G, xe, Le) {
        Ts( () => {
            var Ue;
            try {
                Ue = _n(E, G, xe, Le)
            } catch (Je) {
                Ue = [{
                    path: [],
                    message: "Failed to validate: " + Je.message,
                    severity: zo.warning
                }]
            }
            Wt(Ue, r(Tn)) || (i("validationErrors changed:", Ue),
            h(Tn, Ue))
        }
        , Ue => i("validationErrors updated in ".concat(Ue, " ms")))
    }
    function Rn() {
        return i("validate"),
        r(F) ? {
            parseError: r(F),
            isRepairable: !1
        } : (Xt(r(D), H(), k(), Y()),
        vn(r(Tn)) ? void 0 : {
            validationErrors: r(Tn)
        })
    }
    function on(E, G) {
        if (i("patch", E, G),
        r(D) === void 0)
            throw new Error("Cannot apply patch: no JSON");
        var xe = r(D)
          , Le = {
            json: void 0,
            text: r(le),
            documentState: r(oe),
            selection: ja(r(Q)),
            sortedColumn: r(dt),
            textIsRepaired: r(Ye)
        }
          , Ue = Zw(r(D), E)
          , Je = Fw(r(D), r(oe), E)
          , Ze = Yz(r(dt), E, r($e))
          , et = typeof G == "function" ? G(Je.json, Je.documentState, r(Q)) : void 0;
        return h(D, et?.json !== void 0 ? et.json : Je.json),
        h(oe, et?.state !== void 0 ? et.state : Je.documentState),
        h(Q, et?.selection !== void 0 ? et.selection : r(Q)),
        h(dt, et?.sortedColumn !== void 0 ? et.sortedColumn : Ze),
        h(le, void 0),
        h(Ye, !1),
        h(we, void 0),
        h(ne, void 0),
        h(F, void 0),
        x().add({
            type: "tree",
            undo: ke({
                patch: Ue
            }, Le),
            redo: {
                patch: E,
                json: void 0,
                text: void 0,
                documentState: r(oe),
                selection: ja(r(Q)),
                sortedColumn: r(dt),
                textIsRepaired: r(Ye)
            }
        }),
        {
            json: r(D),
            previousJson: xe,
            undo: Ue,
            redo: E
        }
    }
    function It(E, G) {
        i("handlePatch", E, G);
        var xe = {
            json: r(D),
            text: r(le)
        }
          , Le = on(E, G);
        return St(xe, Le),
        Le
    }
    function St(E, G) {
        if ((E.json !== void 0 || E?.text !== void 0) && Z()) {
            if (r(le) !== void 0) {
                var xe = {
                    text: r(le),
                    json: void 0
                };
                Z()(xe, E, {
                    contentErrors: Rn(),
                    patchResult: G
                })
            } else if (r(D) !== void 0) {
                var Le = {
                    text: void 0,
                    json: r(D)
                };
                Z()(Le, E, {
                    contentErrors: Rn(),
                    patchResult: G
                })
            }
        }
    }
    function Ht(E) {
        i("pasted json as text", E),
        h(we, E)
    }
    function hn(E) {
        i("pasted multiline text", {
            pastedText: E
        }),
        h(ne, E)
    }
    function Ut(E) {
        var G = parseInt(E[0], 10)
          , xe = [String(G + 1), ...E.slice(1)];
        return Ia(r(D), xe) ? nn(xe) : nn(E)
    }
    function He() {
        i("focus"),
        r(ct) && (r(ct).focus(),
        r(ct).select())
    }
    function Yt(E) {
        h($, E.target.scrollTop)
    }
    function Vt() {
        r(Q) || h(Q, function() {
            if (Lr(r(D)) && !vn(r(D)) && !vn(r($e)))
                return nn(["0", ...r($e)[0]])
        }())
    }
    function bn() {
        if (r(Ye) && r(D) !== void 0) {
            var E = {
                json: r(D),
                text: r(le)
            }
              , G = {
                json: r(D),
                documentState: r(oe),
                selection: r(Q),
                sortedColumn: r(dt),
                text: r(le),
                textIsRepaired: r(Ye)
            };
            h(le, void 0),
            h(Ye, !1),
            ze(r(D)),
            Zt(G),
            St(E, void 0)
        }
        return {
            json: r(D),
            text: r(le)
        }
    }
    function or(E) {
        var {scrollToWhenVisible: G=!0} = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}
          , xe = r(J) ? Il : 0
          , Le = Dg(E, r($e), C, re)
          , Ue = Le - r($) + xe + re
          , Je = Gn(E);
        if (i("scrollTo", {
            path: E,
            top: Le,
            scrollTop: r($),
            elem: Je
        }),
        !r(ye))
            return Promise.resolve();
        var Ze = r(ye).getBoundingClientRect();
        if (Je && !G) {
            var et = Je.getBoundingClientRect();
            if (et.bottom > Ze.top && et.top < Ze.bottom)
                return Promise.resolve()
        }
        var Qt = -Math.max(xe + 2 * re, Ze.height / 4);
        return new Promise(Je ? gn => {
            u(Je, {
                container: r(ye),
                offset: Qt,
                duration: 300,
                callback: () => {
                    Bn(E),
                    gn()
                }
            })
        }
        : gn => {
            u(Ue, {
                container: r(ye),
                offset: Qt,
                duration: 300,
                callback: () => {
                    tr(),
                    Bn(E),
                    gn()
                }
            })
        }
        )
    }
    function Bn(E) {
        var G = Gn(E);
        if (G && r(ye)) {
            var xe = r(ye).getBoundingClientRect()
              , Le = G.getBoundingClientRect();
            if (Le.right > xe.right) {
                var Ue = Le.right - xe.right;
                Oo(ye, r(ye).scrollLeft += Ue)
            }
            if (Le.left < xe.left) {
                var Je = xe.left - Le.left;
                Oo(ye, r(ye).scrollLeft -= Je)
            }
        }
    }
    function Mr(E) {
        (function(G) {
            if (r(ye)) {
                var {rowIndex: xe} = Lo(G, r($e))
                  , Le = Dg(G, r($e), C, re)
                  , Ue = Le + (C[xe] || re)
                  , Je = re
                  , Ze = r(ye).getBoundingClientRect()
                  , et = r($)
                  , Qt = r($) + Ze.height - Je;
                if (Ue > Qt) {
                    var gn = Ue - Qt;
                    Oo(ye, r(ye).scrollTop += gn)
                }
                if (Le < et) {
                    var cn = et - Le;
                    Oo(ye, r(ye).scrollTop -= cn)
                }
            }
        }
        )(E),
        Bn(E)
    }
    function Gn(E) {
        var G, xe, Le = r($e).find(Je => _a(E.slice(1), Je)), Ue = Le ? E.slice(0, 1).concat(Le) : E;
        return (G = (xe = r(ye)) === null || xe === void 0 ? void 0 : xe.querySelector('td[data-path="'.concat(Gu(Ue), '"]'))) !== null && G !== void 0 ? G : void 0
    }
    function fr(E) {
        var G, {anchor: xe, left: Le, top: Ue, width: Je, height: Ze, offsetTop: et, offsetLeft: Qt, showTip: gn} = E, cn = function(q) {
            var {json: ve, documentState: qe, selection: Ie, readOnly: Me, onEditValue: jt, onEditRow: yt, onToggleEnforceString: tn, onCut: Un, onCopy: dn, onPaste: Jn, onRemove: Ot, onDuplicateRow: gr, onInsertBeforeRow: $n, onInsertAfterRow: lr, onRemoveRow: Cn} = q
              , bt = ve !== void 0
              , mn = !!Ie
              , xt = ve !== void 0 && Ie ? Ke(ve, Qe(Ie)) : void 0
              , tt = bt && (Hn(Ie) || Wr(Ie) || jn(Ie))
              , Bt = !Me && bt && Ie !== void 0 && wc(Ie)
              , hr = Bt && !xr(xt)
              , Vr = !Me && tt
              , Kn = Ie !== void 0 && ya(ve, qe, Qe(Ie));
            return [{
                type: "separator"
            }, {
                type: "row",
                items: [{
                    type: "column",
                    items: [{
                        type: "label",
                        text: "Table cell:"
                    }, {
                        type: "dropdown-button",
                        main: {
                            type: "button",
                            onClick: () => jt(),
                            icon: Is,
                            text: "Edit",
                            title: "Edit the value (Double-click on the value)",
                            disabled: !Bt
                        },
                        width: "11em",
                        items: [{
                            type: "button",
                            icon: Is,
                            text: "Edit",
                            title: "Edit the value (Double-click on the value)",
                            onClick: () => jt(),
                            disabled: !Bt
                        }, {
                            type: "button",
                            icon: Kn ? xm : jm,
                            text: "Enforce string",
                            title: "Enforce keeping the value as string when it contains a numeric value",
                            onClick: () => tn(),
                            disabled: !hr
                        }]
                    }, {
                        type: "dropdown-button",
                        main: {
                            type: "button",
                            onClick: () => Un(!0),
                            icon: Ns,
                            text: "Cut",
                            title: "Cut selected contents, formatted with indentation (Ctrl+X)",
                            disabled: !Vr
                        },
                        width: "10em",
                        items: [{
                            type: "button",
                            icon: Ns,
                            text: "Cut formatted",
                            title: "Cut selected contents, formatted with indentation (Ctrl+X)",
                            onClick: () => Un(!0),
                            disabled: Me || !tt
                        }, {
                            type: "button",
                            icon: Ns,
                            text: "Cut compacted",
                            title: "Cut selected contents, without indentation (Ctrl+Shift+X)",
                            onClick: () => Un(!1),
                            disabled: Me || !tt
                        }]
                    }, {
                        type: "dropdown-button",
                        main: {
                            type: "button",
                            onClick: () => dn(!0),
                            icon: si,
                            text: "Copy",
                            title: "Copy selected contents, formatted with indentation (Ctrl+C)",
                            disabled: !tt
                        },
                        width: "12em",
                        items: [{
                            type: "button",
                            icon: si,
                            text: "Copy formatted",
                            title: "Copy selected contents, formatted with indentation (Ctrl+C)",
                            onClick: () => dn(!1),
                            disabled: !tt
                        }, {
                            type: "button",
                            icon: si,
                            text: "Copy compacted",
                            title: "Copy selected contents, without indentation (Ctrl+Shift+C)",
                            onClick: () => dn(!1),
                            disabled: !tt
                        }]
                    }, {
                        type: "button",
                        onClick: () => Jn(),
                        icon: ym,
                        text: "Paste",
                        title: "Paste clipboard contents (Ctrl+V)",
                        disabled: Me || !mn
                    }, {
                        type: "button",
                        onClick: () => Ot(),
                        icon: sv,
                        text: "Remove",
                        title: "Remove selected contents (Delete)",
                        disabled: Me || !tt
                    }]
                }, {
                    type: "column",
                    items: [{
                        type: "label",
                        text: "Table row:"
                    }, {
                        type: "button",
                        onClick: () => yt(),
                        icon: Is,
                        text: "Edit row",
                        title: "Edit the current row",
                        disabled: Me || !mn || !bt
                    }, {
                        type: "button",
                        onClick: () => gr(),
                        icon: wm,
                        text: "Duplicate row",
                        title: "Duplicate the current row (Ctrl+D)",
                        disabled: Me || !mn || !bt
                    }, {
                        type: "button",
                        onClick: () => $n(),
                        icon: Es,
                        text: "Insert before",
                        title: "Insert a row before the current row",
                        disabled: Me || !mn || !bt
                    }, {
                        type: "button",
                        onClick: () => lr(),
                        icon: Es,
                        text: "Insert after",
                        title: "Insert a row after the current row",
                        disabled: Me || !mn || !bt
                    }, {
                        type: "button",
                        onClick: () => Cn(),
                        icon: sv,
                        text: "Remove row",
                        title: "Remove current row",
                        disabled: Me || !mn || !bt
                    }]
                }]
            }]
        }({
            json: r(D),
            documentState: r(oe),
            selection: r(Q),
            readOnly: p(),
            onEditValue: Cr,
            onEditRow: ar,
            onToggleEnforceString: Or,
            onCut: Pt,
            onCopy: pt,
            onPaste: te,
            onRemove: rt,
            onDuplicateRow: Mn,
            onInsertBeforeRow: ir,
            onInsertAfterRow: Ft,
            onRemoveRow: xn
        }), Dn = (G = De()(cn)) !== null && G !== void 0 ? G : cn;
        if (Dn !== !1) {
            var no = {
                left: Le,
                top: Ue,
                offsetTop: et,
                offsetLeft: Qt,
                width: Je,
                height: Ze,
                anchor: xe,
                closeOnOuterClick: !0,
                onClose: () => {
                    We = !1,
                    He()
                }
            };
            We = !0;
            var O = s(E1, {
                tip: gn ? "Tip: you can open this context menu via right-click or with Ctrl+Q" : void 0,
                items: Dn,
                onRequestClose() {
                    l(O),
                    He()
                }
            }, no)
        }
    }
    function Tr(E) {
        if (!Fr(r(Q)))
            if (E && (E.stopPropagation(),
            E.preventDefault()),
            E && E.type === "contextmenu" && E.target !== r(ct))
                fr({
                    left: E.clientX,
                    top: E.clientY,
                    width: Ua,
                    height: La,
                    showTip: !1
                });
            else {
                var G, xe = (G = r(ye)) === null || G === void 0 ? void 0 : G.querySelector(".jse-table-cell.jse-selected-value");
                if (xe)
                    fr({
                        anchor: xe,
                        offsetTop: 2,
                        width: Ua,
                        height: La,
                        showTip: !1
                    });
                else {
                    var Le, Ue = (Le = r(ye)) === null || Le === void 0 ? void 0 : Le.getBoundingClientRect();
                    Ue && fr({
                        top: Ue.top + 2,
                        left: Ue.left + 2,
                        width: Ua,
                        height: La,
                        showTip: !1
                    })
                }
            }
    }
    function Sr(E) {
        fr({
            anchor: Lw(E.target, "BUTTON"),
            offsetTop: 0,
            width: Ua,
            height: La,
            showTip: !0
        })
    }
    function Cr() {
        if (!p() && r(Q)) {
            var E = Qe(r(Q));
            xr(Ke(r(D), E)) ? Wn(E) : h(Q, nn(E))
        }
    }
    function ar() {
        !p() && r(Q) && Wn(Qe(r(Q)).slice(0, 1))
    }
    function Or() {
        if (!p() && jn(r(Q))) {
            var E = r(Q).path
              , G = Tt(E)
              , xe = Ke(r(D), E)
              , Le = !ya(r(D), r(oe), E)
              , Ue = Le ? String(xe) : gl(String(xe), k());
            i("handleToggleEnforceString", {
                enforceString: Le,
                value: xe,
                updatedValue: Ue
            }),
            It([{
                op: "replace",
                path: G,
                value: Ue
            }], (Je, Ze) => ({
                state: gd(r(D), Ze, E, {
                    type: "value",
                    enforceString: Le
                })
            }))
        }
    }
    function be() {
        return an.apply(this, arguments)
    }
    function an() {
        return (an = wt(function*() {
            if (i("apply pasted json", r(we)),
            r(we)) {
                var {onPasteAsJson: E} = r(we);
                E(),
                setTimeout(He)
            }
        })).apply(this, arguments)
    }
    function te() {
        return Re.apply(this, arguments)
    }
    function Re() {
        return (Re = wt(function*() {
            try {
                ce(yield navigator.clipboard.readText())
            } catch (E) {
                console.error(E),
                h(j, !0)
            }
        })).apply(this, arguments)
    }
    function at() {
        return Dt.apply(this, arguments)
    }
    function Dt() {
        return (Dt = wt(function*() {
            i("apply pasted multiline text", r(ne)),
            r(ne) && (ce(JSON.stringify(r(ne))),
            setTimeout(He))
        })).apply(this, arguments)
    }
    function Xe() {
        i("clear pasted json"),
        h(we, void 0),
        He()
    }
    function Gt() {
        i("clear pasted multiline text"),
        h(ne, void 0),
        He()
    }
    function Sn() {
        ae()(zr.text)
    }
    function Pt(E) {
        return In.apply(this, arguments)
    }
    function In() {
        return (In = wt(function*(E) {
            yield w1({
                json: r(D),
                selection: r(Q),
                indentation: E ? M() : void 0,
                readOnly: p(),
                parser: k(),
                onPatch: It
            })
        })).apply(this, arguments)
    }
    function pt() {
        return en.apply(this, arguments)
    }
    function en() {
        return en = wt(function*() {
            var E = !(arguments.length > 0 && arguments[0] !== void 0) || arguments[0];
            r(D) !== void 0 && (yield k1({
                json: r(D),
                selection: r(Q),
                indentation: E ? M() : void 0,
                parser: k()
            }))
        }),
        en.apply(this, arguments)
    }
    function rt() {
        S1({
            json: r(D),
            text: r(le),
            selection: r(Q),
            keepSelection: !0,
            readOnly: p(),
            onChange: Z(),
            onPatch: It
        })
    }
    function zt(E) {
        p() || (i("extract", {
            path: E
        }),
        It(Yw(r(D), nn(E))))
    }
    function Mn() {
        (function(E) {
            var {json: G, selection: xe, columns: Le, readOnly: Ue, onPatch: Je} = E;
            if (!Ue && G !== void 0 && xe && Ps(xe)) {
                var {rowIndex: Ze, columnIndex: et} = Lo(Qe(xe), Le);
                so("duplicate row", {
                    rowIndex: Ze
                });
                var Qt = [String(Ze)];
                Je(Kw(G, [Qt]), (gn, cn) => ({
                    state: cn,
                    selection: nn(Di({
                        rowIndex: Ze < G.length ? Ze + 1 : Ze,
                        columnIndex: et
                    }, Le))
                }))
            }
        }
        )({
            json: r(D),
            selection: r(Q),
            columns: r($e),
            readOnly: p(),
            onPatch: It
        })
    }
    function ir() {
        (function(E) {
            var {json: G, selection: xe, columns: Le, readOnly: Ue, onPatch: Je} = E;
            if (!Ue && G !== void 0 && xe && Ps(xe)) {
                var {rowIndex: Ze} = Lo(Qe(xe), Le);
                so("insert before row", {
                    rowIndex: Ze
                }),
                Je(zs(G, [String(Ze)], [{
                    key: "",
                    value: $r(G[0]) ? {} : ""
                }]))
            }
        }
        )({
            json: r(D),
            selection: r(Q),
            columns: r($e),
            readOnly: p(),
            onPatch: It
        })
    }
    function Ft() {
        (function(E) {
            var {json: G, selection: xe, columns: Le, readOnly: Ue, onPatch: Je} = E;
            if (!Ue && G !== void 0 && xe && Ps(xe)) {
                var {rowIndex: Ze, columnIndex: et} = Lo(Qe(xe), Le);
                so("insert after row", {
                    rowIndex: Ze
                });
                var Qt = Ze + 1
                  , gn = [String(Qt)]
                  , cn = [{
                    key: "",
                    value: $r(G[0]) ? {} : ""
                }];
                Je(Qt < G.length ? zs(G, gn, cn) : $v(G, [], cn), (Dn, no) => ({
                    state: no,
                    selection: nn(Di({
                        rowIndex: Qt,
                        columnIndex: et
                    }, Le))
                }))
            }
        }
        )({
            json: r(D),
            selection: r(Q),
            columns: r($e),
            readOnly: p(),
            onPatch: It
        })
    }
    function xn() {
        (function(E) {
            var {json: G, selection: xe, columns: Le, readOnly: Ue, onPatch: Je} = E;
            if (!Ue && G !== void 0 && xe && Ps(xe)) {
                var {rowIndex: Ze, columnIndex: et} = Lo(Qe(xe), Le);
                so("remove row", {
                    rowIndex: Ze
                }),
                Je(Sc([[String(Ze)]]), (Qt, gn) => {
                    var cn = Ze < Qt.length ? Ze : Ze > 0 ? Ze - 1 : void 0
                      , Dn = cn !== void 0 ? nn(Di({
                        rowIndex: cn,
                        columnIndex: et
                    }, Le)) : void 0;
                    return so("remove row new selection", {
                        rowIndex: Ze,
                        newRowIndex: cn,
                        newSelection: Dn
                    }),
                    {
                        state: gn,
                        selection: Dn
                    }
                }
                )
            }
        }
        )({
            json: r(D),
            selection: r(Q),
            columns: r($e),
            readOnly: p(),
            onPatch: It
        })
    }
    function ut() {
        return (ut = wt(function*(E) {
            yield C1({
                char: E,
                selectInside: !1,
                json: r(D),
                selection: r(Q),
                readOnly: p(),
                parser: k(),
                onPatch: It,
                onReplaceJson: Te,
                onSelect: Ce
            })
        })).apply(this, arguments)
    }
    function W(E) {
        var G;
        E.preventDefault(),
        ce((G = E.clipboardData) === null || G === void 0 ? void 0 : G.getData("text/plain"))
    }
    function ce(E) {
        E !== void 0 && _1({
            clipboardText: E,
            json: r(D),
            selection: r(Q),
            readOnly: p(),
            parser: k(),
            onPatch: It,
            onChangeText: vt,
            onPasteMultilineText: hn,
            openRepairModal: Zn
        })
    }
    function Te(E, G) {
        var xe = {
            json: r(D),
            text: r(le)
        }
          , Le = {
            json: r(D),
            documentState: r(oe),
            selection: r(Q),
            sortedColumn: r(dt),
            text: r(le),
            textIsRepaired: r(Ye)
        }
          , Ue = Co(E, r(oe))
          , Je = typeof G == "function" ? G(E, Ue, r(Q)) : void 0;
        h(D, Je?.json !== void 0 ? Je.json : E),
        h(oe, Je?.state !== void 0 ? Je.state : Ue),
        h(Q, Je?.selection !== void 0 ? Je.selection : r(Q)),
        h(dt, void 0),
        h(le, void 0),
        h(Ye, !1),
        h(F, void 0),
        ze(r(D)),
        Zt(Le),
        St(xe, void 0)
    }
    function vt(E, G) {
        i("handleChangeText");
        var xe = {
            json: r(D),
            text: r(le)
        }
          , Le = {
            json: r(D),
            documentState: r(oe),
            selection: r(Q),
            sortedColumn: r(dt),
            text: r(le),
            textIsRepaired: r(Ye)
        };
        try {
            h(D, I()(E)),
            h(oe, Co(r(D), r(oe))),
            h(le, void 0),
            h(Ye, !1),
            h(F, void 0)
        } catch (Je) {
            try {
                h(D, I()(ta(E))),
                h(oe, Co(r(D), r(oe))),
                h(le, E),
                h(Ye, !0),
                h(F, void 0)
            } catch {
                h(D, void 0),
                h(oe, void 0),
                h(le, E),
                h(Ye, !1),
                h(F, r(le) !== "" ? Vs(r(le), Je.message || String(Je)) : void 0)
            }
        }
        if (typeof G == "function") {
            var Ue = G(r(D), r(oe), r(Q));
            h(D, Ue?.json !== void 0 ? Ue.json : r(D)),
            h(oe, Ue?.state !== void 0 ? Ue.state : r(oe)),
            h(Q, Ue?.selection !== void 0 ? Ue.selection : r(Q))
        }
        ze(r(D)),
        Zt(Le),
        St(xe, void 0)
    }
    function sn(E) {
        i("select validation error", E),
        h(Q, nn(E.path)),
        or(E.path)
    }
    function Jt(E) {
        if (r(D) !== void 0) {
            var {id: G, onTransform: xe, onClose: Le} = E
              , Ue = E.rootPath || [];
            We = !0,
            Pe()({
                id: G || c,
                json: r(D),
                rootPath: Ue || [],
                onTransform: Je => {
                    xe ? xe({
                        operations: Je,
                        json: r(D),
                        transformedJson: Zo(r(D), Je)
                    }) : (i("onTransform", Ue, Je),
                    It(Je))
                }
                ,
                onClose: () => {
                    We = !1,
                    setTimeout(He),
                    Le && Le()
                }
            })
        }
    }
    function Wn(E) {
        i("openJSONEditorModal", {
            path: E
        }),
        We = !0,
        Ve()({
            content: {
                json: Ke(r(D), E)
            },
            path: E,
            onPatch: It,
            onClose: () => {
                We = !1,
                setTimeout(He)
            }
        })
    }
    function Zn(E, G) {
        h(qt, {
            text: E,
            onParse: xe => wu(xe, Le => yu(Le, k())),
            onRepair: Ew,
            onApply: G,
            onClose: He
        })
    }
    function sr() {
        (function(E) {
            p() || r(D) === void 0 || (We = !0,
            Ae()({
                id: d,
                json: r(D),
                rootPath: E,
                onSort: G => {
                    var {operations: xe, itemPath: Le, direction: Ue} = G;
                    i("onSort", xe, E, Le, Ue),
                    It(xe, (Je, Ze) => ({
                        state: Ze,
                        sortedColumn: {
                            path: Le,
                            sortDirection: Ue === -1 ? Do.desc : Do.asc
                        }
                    }))
                }
                ,
                onClose: () => {
                    We = !1,
                    setTimeout(He)
                }
            }))
        }
        )([])
    }
    function Nn() {
        Jt({
            rootPath: []
        })
    }
    function Nt(E) {
        i("openFind", {
            findAndReplace: E
        }),
        h(J, !1),
        h(U, !1),
        tr(),
        h(J, !0),
        h(U, E)
    }
    function Pn() {
        if (!p() && x().canUndo) {
            var E = x().undo();
            if (yc(E)) {
                var G = {
                    json: r(D),
                    text: r(le)
                };
                h(D, E.undo.patch ? Zo(r(D), E.undo.patch) : E.undo.json),
                h(oe, E.undo.documentState),
                h(Q, E.undo.selection),
                h(dt, E.undo.sortedColumn),
                h(le, E.undo.text),
                h(Ye, E.undo.textIsRepaired),
                h(F, void 0),
                i("undo", {
                    item: E,
                    json: r(D)
                }),
                St(G, E.undo.patch && E.redo.patch ? {
                    json: r(D),
                    previousJson: G.json,
                    redo: E.undo.patch,
                    undo: E.redo.patch
                } : void 0),
                He(),
                r(Q) && or(Qe(r(Q)), {
                    scrollToWhenVisible: !1
                })
            } else
                se()(E)
        }
    }
    function eo() {
        if (!p() && x().canRedo) {
            var E = x().redo();
            if (yc(E)) {
                var G = {
                    json: r(D),
                    text: r(le)
                };
                h(D, E.redo.patch ? Zo(r(D), E.redo.patch) : E.redo.json),
                h(oe, E.redo.documentState),
                h(Q, E.redo.selection),
                h(dt, E.redo.sortedColumn),
                h(le, E.redo.text),
                h(Ye, E.redo.textIsRepaired),
                h(F, void 0),
                i("redo", {
                    item: E,
                    json: r(D)
                }),
                St(G, E.undo.patch && E.redo.patch ? {
                    json: r(D),
                    previousJson: G.json,
                    redo: E.redo.patch,
                    undo: E.undo.patch
                } : void 0),
                He(),
                r(Q) && or(Qe(r(Q)), {
                    scrollToWhenVisible: !1
                })
            } else
                _e()(E)
        }
    }
    function Ct(E) {
        h(A, E.getBoundingClientRect().height)
    }
    V( () => (b(S()),
    b(P())), () => {
        h(ge, xp({
            escapeControlCharacters: S(),
            escapeUnicodeCharacters: P()
        }))
    }
    ),
    V( () => r(J), () => {
        (function(E) {
            if (r(ye)) {
                var G = E ? Il : -100;
                r(ye).scrollTo({
                    top: Oo(ye, r(ye).scrollTop += G),
                    left: r(ye).scrollLeft
                })
            }
        }
        )(r(J))
    }
    ),
    V( () => b(f()), () => {
        (function(E) {
            var G = {
                json: r(D)
            }
              , xe = Jl(E) ? E.text !== r(le) : !Wt(G.json, E.json);
            if (i("update external content", {
                isChanged: xe
            }),
            xe) {
                var Le = {
                    json: r(D),
                    documentState: r(oe),
                    selection: r(Q),
                    sortedColumn: r(dt),
                    text: r(le),
                    textIsRepaired: r(Ye)
                };
                if (Jl(E))
                    try {
                        h(D, I()(E.text)),
                        h(oe, Co(r(D), r(oe))),
                        h(le, E.text),
                        h(Ye, !1),
                        h(F, void 0)
                    } catch (Ue) {
                        try {
                            h(D, I()(ta(E.text))),
                            h(oe, Co(r(D), r(oe))),
                            h(le, E.text),
                            h(Ye, !0),
                            h(F, void 0)
                        } catch {
                            h(D, void 0),
                            h(oe, void 0),
                            h(le, E.text),
                            h(Ye, !1),
                            h(F, r(le) !== "" ? Vs(r(le), Ue.message || String(Ue)) : void 0)
                        }
                    }
                else
                    h(D, E.json),
                    h(oe, Co(r(D), r(oe))),
                    h(le, void 0),
                    h(Ye, !1),
                    h(F, void 0);
                ze(r(D)),
                h(dt, void 0),
                Zt(Le)
            }
        }
        )(f())
    }
    ),
    V( () => b(m()), () => {
        (function(E) {
            Wt(r(Q), E) || (i("applyExternalSelection", {
                selection: r(Q),
                externalSelection: E
            }),
            Zl(E) && h(Q, E))
        }
        )(m())
    }
    ),
    V( () => (r($e),
    r(D),
    b(R()),
    r(Fe)), () => {
        h($e, Lr(r(D)) ? function(E, G) {
            var xe = new Set(G.map(Tt))
              , Le = new Set(E.map(Tt));
            for (var Ue of xe)
                Le.has(Ue) || xe.delete(Ue);
            for (var Je of Le)
                xe.has(Je) || xe.add(Je);
            return [...xe].map(Ao)
        }(Vz(r(D), R(), r(Fe)), r($e)) : [])
    }
    ),
    V( () => (r(D),
    r($e)), () => {
        h(Lt, !(!r(D) || vn(r($e))))
    }
    ),
    V( () => (r(D),
    r(Fe)), () => {
        h(n, Array.isArray(r(D)) && r(D).length > r(Fe))
    }
    ),
    V( () => (r($),
    r(A),
    r(D),
    r(J),
    Il), () => {
        h(o, Gz(r($), r(A), r(D), C, re, r(J) ? Il : 0))
    }
    ),
    V( () => r(D), () => {
        r(D),
        r(ye) && r(ye).scrollTo({
            top: r(ye).scrollTop,
            left: r(ye).scrollLeft
        })
    }
    ),
    V( () => r(Q), () => {
        var E;
        E = r(Q),
        Wt(E, m()) || (i("onSelect", E),
        ee()(E))
    }
    ),
    V( () => (b(p()),
    b(y()),
    b(k()),
    r(ge),
    r(D),
    r(oe),
    b(fe())), () => {
        h(ft, {
            mode: zr.table,
            readOnly: p(),
            truncateTextSize: y(),
            parser: k(),
            normalization: r(ge),
            getJson: () => r(D),
            getDocumentState: () => r(oe),
            findElement: Gn,
            findNextInside: Ut,
            focus: He,
            onPatch: (E, G) => It(function(xe, Le) {
                return xe.flatMap(Ue => {
                    if (Tc(Ue)) {
                        var Je = Ao(Ue.path);
                        if (Je.length > 0) {
                            for (var Ze = [Ue], et = rn(Je); et.length > 0 && !Ia(Le, et); )
                                Ze.unshift({
                                    op: "add",
                                    path: Tt(et),
                                    value: {}
                                }),
                                et = rn(et);
                            return Ze
                        }
                    }
                    return Ue
                }
                )
            }(E, r(D)), G),
            onSelect: Ce,
            onFind: Nt,
            onPasteJson: Ht,
            onRenderValue: fe()
        })
    }
    ),
    V( () => (r(D),
    b(H()),
    b(k()),
    b(Y())), () => {
        Xt(r(D), H(), k(), Y())
    }
    ),
    V( () => (r(Tn),
    r($e)), () => {
        h(a, Jz(r(Tn), r($e)))
    }
    ),
    An(),
    Rt(!0);
    var pr = b4();
    me("mousedown", $a, function(E) {
        !ml(E.target, G => G === r(de)) && Fr(r(Q)) && (i("click outside the editor, exit edit mode"),
        h(Q, ja(r(Q))),
        $t && r(ct) && (r(ct).focus(),
        r(ct).blur()),
        i("blur (outside editor)"),
        r(ct) && r(ct).blur())
    });
    var Ge, un = ht(pr), wn = z(un), Ln = E => {
        (function(G, xe) {
            it(xe, !1);
            var Le = g(xe, "containsValidArray", 9)
              , Ue = g(xe, "readOnly", 9)
              , Je = g(xe, "showSearch", 13, !1)
              , Ze = g(xe, "history", 9)
              , et = g(xe, "onSort", 9)
              , Qt = g(xe, "onTransform", 9)
              , gn = g(xe, "onContextMenu", 9)
              , cn = g(xe, "onUndo", 9)
              , Dn = g(xe, "onRedo", 9)
              , no = g(xe, "onRenderMenu", 9);
            function O() {
                Je(!Je())
            }
            var q = T(void 0, !0)
              , ve = T(void 0, !0);
            V( () => (b(Ue()),
            b(et()),
            b(Le()),
            b(Qt()),
            b(gn()),
            b(cn()),
            b(Ze()),
            b(Dn())), () => {
                h(q, Ue() ? [{
                    type: "space"
                }] : [{
                    type: "button",
                    icon: nc,
                    title: "Sort",
                    className: "jse-sort",
                    onClick: et(),
                    disabled: Ue() || !Le()
                }, {
                    type: "button",
                    icon: rc,
                    title: "Transform contents (filter, sort, project)",
                    className: "jse-transform",
                    onClick: Qt(),
                    disabled: Ue() || !Le()
                }, {
                    type: "button",
                    icon: $c,
                    title: "Search (Ctrl+F)",
                    className: "jse-search",
                    onClick: O,
                    disabled: !Le()
                }, {
                    type: "button",
                    icon: km,
                    title: _p,
                    className: "jse-contextmenu",
                    onClick: gn()
                }, {
                    type: "separator"
                }, {
                    type: "button",
                    icon: yf,
                    title: "Undo (Ctrl+Z)",
                    className: "jse-undo",
                    onClick: cn(),
                    disabled: !Ze().canUndo
                }, {
                    type: "button",
                    icon: wf,
                    title: "Redo (Ctrl+Shift+Z)",
                    className: "jse-redo",
                    onClick: Dn(),
                    disabled: !Ze().canRedo
                }, {
                    type: "space"
                }])
            }
            ),
            V( () => (b(no()),
            r(q)), () => {
                h(ve, no()(r(q)) || r(q))
            }
            ),
            An(),
            Rt(!0),
            kd(G, {
                get items() {
                    return r(ve)
                }
            }),
            st()
        }
        )(E, {
            get containsValidArray() {
                return r(Lt)
            },
            get readOnly() {
                return p()
            },
            get history() {
                return x()
            },
            onSort: sr,
            onTransform: Nn,
            onUndo: Pn,
            onRedo: eo,
            onContextMenu: Sr,
            get onRenderMenu() {
                return Oe()
            },
            get showSearch() {
                return r(J)
            },
            set showSearch(G) {
                h(J, G)
            },
            $$legacy: !0
        })
    }
    ;
    ie(wn, E => {
        w() && E(Ln)
    }
    );
    var uo = B(wn, 2)
      , kn = E => {
        var G = g4()
          , xe = ht(G)
          , Le = z(xe);
        Le.readOnly = !0,
        nr(Le, et => h(ct, et), () => r(ct));
        var Ue = B(xe, 2)
          , Je = et => {
            var Qt = p4()
              , gn = ht(Qt);
            x1(z(gn), {
                get json() {
                    return r(D)
                },
                get documentState() {
                    return r(oe)
                },
                get parser() {
                    return k()
                },
                get showSearch() {
                    return r(J)
                },
                get showReplace() {
                    return r(U)
                },
                get readOnly() {
                    return p()
                },
                get columns() {
                    return r($e)
                },
                onSearch: _t,
                onFocus: nt,
                onPatch: It,
                onClose: mt
            });
            var cn = B(gn, 2)
              , Dn = z(cn)
              , no = z(Dn)
              , O = z(no)
              , q = z(O)
              , ve = z(q)
              , qe = tt => {
                var Bt = jr()
                  , hr = pe( () => (b(xs),
                r(a),
                N( () => {
                    var mr;
                    return xs([], (mr = r(a)) === null || mr === void 0 ? void 0 : mr.root)
                }
                )))
                  , Vr = ht(Bt)
                  , Kn = mr => {
                    var Yr = i4();
                    $s(z(Yr), {
                        get validationError() {
                            return r(hr)
                        },
                        get onExpand() {
                            return Uo
                        }
                    }),
                    L(mr, Yr)
                }
                ;
                ie(Vr, mr => {
                    r(hr) && mr(Kn)
                }
                ),
                L(tt, Bt)
            }
            ;
            ie(ve, tt => {
                b(vn),
                r(a),
                N( () => {
                    var Bt;
                    return !vn((Bt = r(a)) === null || Bt === void 0 ? void 0 : Bt.root)
                }
                ) && tt(qe)
            }
            );
            var Ie = B(q);
            wr(Ie, 1, () => r($e), Rr, (tt, Bt) => {
                var hr = s4();
                (function(Vr, Kn) {
                    it(Kn, !1);
                    var mr = T(void 0, !0)
                      , Yr = T(void 0, !0)
                      , Ma = T(void 0, !0)
                      , wo = g(Kn, "path", 9)
                      , Ko = g(Kn, "sortedColumn", 9)
                      , fa = g(Kn, "readOnly", 9)
                      , Yo = g(Kn, "onSort", 9);
                    V( () => (b(wo()),
                    xo), () => {
                        h(mr, vn(wo()) ? "values" : xo(wo()))
                    }
                    ),
                    V( () => (b(Ko()),
                    b(wo())), () => {
                        var er;
                        h(Yr, Ko() && Wt(wo(), (er = Ko()) === null || er === void 0 ? void 0 : er.path) ? Ko().sortDirection : void 0)
                    }
                    ),
                    V( () => (r(Yr),
                    ng), () => {
                        h(Ma, r(Yr) ? ng[r(Yr)] : void 0)
                    }
                    ),
                    An(),
                    Rt(!0);
                    var Xr, Qr = KT(), ko = z(Qr), Pa = z(ko), _o = B(ko, 2), kr = er => {
                        var Ar = JT()
                          , pa = z(Ar)
                          , cs = pe( () => (r(Yr),
                        b(Do),
                        b(Va),
                        b(Jp),
                        N( () => r(Yr) === Do.asc ? Va : Jp)));
                        fn(pa, {
                            get data() {
                                return r(cs)
                            }
                        }),
                        Ee( () => zn(Ar, "title", "Currently sorted in ".concat(r(Ma), " order"))),
                        L(er, Ar)
                    }
                    ;
                    ie(_o, er => {
                        r(Yr) !== void 0 && er(kr)
                    }
                    ),
                    Ee( (er, Ar) => {
                        Xr = At(Qr, 1, "jse-column-header svelte-2i3vdx", null, Xr, er),
                        zn(Qr, "title", fa() ? r(mr) : r(mr) + " (Click to sort the data by this column)"),
                        lt(Pa, Ar)
                    }
                    , [ () => ({
                        "jse-readonly": fa()
                    }), () => (b(Na),
                    r(mr),
                    b(50),
                    N( () => Na(r(mr), 50)))], pe),
                    me("click", Qr, function() {
                        fa() || Yo()({
                            path: wo(),
                            sortDirection: r(Yr) === Do.asc ? Do.desc : Do.asc
                        })
                    }),
                    L(Vr, Qr),
                    st()
                }
                )(z(hr), {
                    get path() {
                        return r(Bt)
                    },
                    get sortedColumn() {
                        return r(dt)
                    },
                    get readOnly() {
                        return p()
                    },
                    onSort: he
                }),
                L(tt, hr)
            }
            );
            var Me = B(Ie)
              , jt = tt => {
                var Bt = l4()
                  , hr = z(Bt)
                  , Vr = pe( () => (r(D),
                N( () => Array.isArray(r(D)) ? r(D).length : 0)));
                (function(Kn, mr) {
                    it(mr, !1);
                    var Yr = g(mr, "count", 9)
                      , Ma = g(mr, "maxSampleCount", 9)
                      , wo = g(mr, "readOnly", 9)
                      , Ko = g(mr, "onRefresh", 9);
                    Rt(!0);
                    var fa, Yo = a4();
                    fn(z(Yo), {
                        get data() {
                            return Kk
                        }
                    }),
                    Ee(Xr => {
                        fa = At(Yo, 1, "jse-column-header svelte-fzj761", null, fa, Xr),
                        zn(Yo, "title", "The Columns are created by sampling ".concat(Ma(), " items out of ").concat(Yr(), ". ") + "If you're missing a column, click here to sample all of the items instead of a subset. This is slower.")
                    }
                    , [ () => ({
                        "jse-readonly": wo()
                    })], pe),
                    me("click", Yo, () => Ko()()),
                    L(Kn, Yo),
                    st()
                }
                )(hr, {
                    get count() {
                        return r(Vr)
                    },
                    get maxSampleCount() {
                        return r(Fe)
                    },
                    get readOnly() {
                        return p()
                    },
                    onRefresh: () => h(Fe, 1 / 0)
                }),
                L(tt, Bt)
            }
            ;
            ie(Me, tt => {
                r(n) && tt(jt)
            }
            );
            var yt, tn, Un = B(O), dn = z(Un), Jn = B(Un);
            wr(Jn, 1, () => (r(o),
            N( () => r(o).visibleItems)), Rr, (tt, Bt, hr) => {
                var Vr = f4()
                  , Kn = pe( () => (r(o),
                N( () => r(o).startIndex + hr)))
                  , mr = pe( () => (r(a),
                b(r(Kn)),
                N( () => r(a).rows[r(Kn)])))
                  , Yr = pe( () => (b(xs),
                b(r(Kn)),
                b(r(mr)),
                N( () => {
                    var Xr;
                    return xs([String(r(Kn))], (Xr = r(mr)) === null || Xr === void 0 ? void 0 : Xr.row)
                }
                )))
                  , Ma = pe( () => (b(ba),
                r(D),
                r(Be),
                b(r(Kn)),
                N( () => ba(r(D), r(Be), [String(r(Kn))]))))
                  , wo = z(Vr);
                mw(wo, () => r(Kn), Xr => {
                    var Qr = u4()
                      , ko = z(Qr)
                      , Pa = B(ko)
                      , _o = kr => {
                        $s(kr, {
                            get validationError() {
                                return r(Yr)
                            },
                            get onExpand() {
                                return Uo
                            }
                        })
                    }
                    ;
                    ie(Pa, kr => {
                        r(Yr) && kr(_o)
                    }
                    ),
                    lo(Qr, (kr, er) => Bu?.(kr, er), () => kr => function(er, Ar) {
                        C[Ar] = er.getBoundingClientRect().height
                    }(kr, r(Kn))),
                    Ee( () => {
                        var kr;
                        return lt(ko, "".concat((kr = r(Kn)) !== null && kr !== void 0 ? kr : "", " "))
                    }
                    ),
                    L(Xr, Qr)
                }
                );
                var Ko = B(wo);
                wr(Ko, 1, () => r($e), Rr, (Xr, Qr, ko, Pa) => {
                    var _o, kr = d4(), er = pe( () => (b(r(Kn)),
                    r(Qr),
                    N( () => [String(r(Kn))].concat(r(Qr))))), Ar = pe( () => (b(Ke),
                    r(Bt),
                    r(Qr),
                    N( () => Ke(r(Bt), r(Qr))))), pa = pe( () => (b(jn),
                    r(Q),
                    b(_a),
                    b(r(er)),
                    N( () => jn(r(Q)) && _a(r(Q).path, r(er))))), cs = pe( () => (b(r(mr)),
                    N( () => {
                        var Nr;
                        return (Nr = r(mr)) === null || Nr === void 0 ? void 0 : Nr.columns[ko]
                    }
                    ))), ds = pe( () => (b(xs),
                    b(r(er)),
                    b(r(cs)),
                    N( () => xs(r(er), r(cs))))), bl = z(kr), vs = z(bl), xl = Nr => {
                        var ho = pe( () => (b(Cc),
                        b(ba),
                        r(Bt),
                        b(r(Ma)),
                        r(Qr),
                        N( () => Cc(ba(r(Bt), r(Ma), r(Qr))))))
                          , jl = pe( () => (b(r(ho)),
                        N( () => !!r(ho) && r(ho).some(Li => Li.active))))
                          , yl = pe( () => (b(vn),
                        b(r(ho)),
                        N( () => !vn(r(ho)))));
                        (function(Li, ro) {
                            it(ro, !1);
                            var wl = g(ro, "path", 9)
                              , Fp = g(ro, "value", 9)
                              , Bp = g(ro, "parser", 9)
                              , z1 = g(ro, "isSelected", 9)
                              , T1 = g(ro, "containsSearchResult", 9)
                              , I1 = g(ro, "containsActiveSearchResult", 9)
                              , N1 = g(ro, "onEdit", 9);
                            Rt(!0);
                            var Wp, Ou = GT(), L1 = z(Ou);
                            Ee( (kl, U1) => {
                                Wp = At(Ou, 1, "jse-inline-value svelte-h57m0p", null, Wp, kl),
                                lt(L1, U1)
                            }
                            , [ () => ({
                                "jse-selected": z1(),
                                "jse-highlight": T1(),
                                "jse-active": I1()
                            }), () => (b(Na),
                            b(Bp()),
                            b(Fp()),
                            b(50),
                            N( () => {
                                var kl;
                                return Na((kl = Bp().stringify(Fp())) !== null && kl !== void 0 ? kl : "", 50)
                            }
                            ))], pe),
                            me("dblclick", Ou, () => N1()(wl())),
                            L(Li, Ou),
                            st()
                        }
                        )(Nr, {
                            get path() {
                                return r(er)
                            },
                            get value() {
                                return r(Ar)
                            },
                            get parser() {
                                return k()
                            },
                            get isSelected() {
                                return r(pa)
                            },
                            get containsSearchResult() {
                                return r(yl)
                            },
                            get containsActiveSearchResult() {
                                return r(jl)
                            },
                            onEdit: Wn
                        })
                    }
                    , _d = Nr => {
                        var ho = pe( () => (b(ba),
                        r(D),
                        r(Be),
                        b(r(er)),
                        N( () => {
                            var ro;
                            return (ro = ba(r(D), r(Be), r(er))) === null || ro === void 0 ? void 0 : ro.searchResults
                        }
                        )))
                          , jl = pe( () => r(Ar) !== void 0 ? r(Ar) : "")
                          , yl = pe( () => (b(ya),
                        r(D),
                        r(oe),
                        b(r(er)),
                        N( () => ya(r(D), r(oe), r(er)))))
                          , Li = pe( () => r(pa) ? r(Q) : void 0);
                        m1(Nr, {
                            get path() {
                                return r(er)
                            },
                            get value() {
                                return r(jl)
                            },
                            get enforceString() {
                                return r(yl)
                            },
                            get selection() {
                                return r(Li)
                            },
                            get searchResultItems() {
                                return r(ho)
                            },
                            get context() {
                                return r(ft)
                            }
                        })
                    }
                    ;
                    ie(vs, Nr => {
                        b(xr),
                        b(r(Ar)),
                        N( () => xr(r(Ar))) ? Nr(xl) : Nr(_d, !1)
                    }
                    );
                    var Sd = B(vs)
                      , Cd = Nr => {
                        var ho = c4();
                        oi(z(ho), {
                            selected: !0,
                            onContextMenu: fr
                        }),
                        L(Nr, ho)
                    }
                    ;
                    ie(Sd, Nr => {
                        b(p()),
                        b(r(pa)),
                        b(Fr),
                        r(Q),
                        N( () => !p() && r(pa) && !Fr(r(Q))) && Nr(Cd)
                    }
                    );
                    var ha = B(bl, 2)
                      , Ni = Nr => {
                        $s(Nr, {
                            get validationError() {
                                return r(ds)
                            },
                            get onExpand() {
                                return Uo
                            }
                        })
                    }
                    ;
                    ie(ha, Nr => {
                        r(ds) && Nr(Ni)
                    }
                    ),
                    Ee( (Nr, ho) => {
                        zn(kr, "data-path", Nr),
                        _o = At(bl, 1, "jse-value-outer svelte-u14cgx", null, _o, ho)
                    }
                    , [ () => (b(Gu),
                    b(r(er)),
                    N( () => Gu(r(er)))), () => ({
                        "jse-selected-value": r(pa)
                    })], pe),
                    L(Xr, kr)
                }
                );
                var fa = B(Ko)
                  , Yo = Xr => {
                    L(Xr, v4())
                }
                ;
                ie(fa, Xr => {
                    r(n) && Xr(Yo)
                }
                ),
                L(tt, Vr)
            }
            );
            var Ot, gr = z(B(Jn));
            nr(cn, tt => h(ye, tt), () => r(ye)),
            lo(cn, (tt, Bt) => Bu?.(tt, Bt), () => Ct),
            Gr( () => me("scroll", cn, Yt));
            var $n = B(cn, 2)
              , lr = tt => {
                var Bt = pe( () => (r(we),
                N( () => "You pasted a JSON ".concat(Array.isArray(r(we).contents) ? "array" : "object", " as text"))))
                  , hr = pe( () => [{
                    icon: bi,
                    text: "Paste as JSON instead",
                    title: "Paste the text as JSON instead of a single value",
                    onMouseDown: be
                }, {
                    text: "Leave as is",
                    title: "Keep the pasted content as a single value",
                    onClick: Xe
                }]);
                Mo(tt, {
                    type: "info",
                    get message() {
                        return r(Bt)
                    },
                    get actions() {
                        return r(hr)
                    }
                })
            }
            ;
            ie($n, tt => {
                r(we) && tt(lr)
            }
            );
            var Cn = B($n, 2)
              , bt = tt => {
                var Bt = pe( () => [{
                    icon: bi,
                    text: "Paste as string instead",
                    title: "Paste the clipboard data as a single string value instead of an array",
                    onClick: at
                }, {
                    text: "Leave as is",
                    title: "Keep the pasted array",
                    onClick: Gt
                }]);
                Mo(tt, {
                    type: "info",
                    message: "Multiline text was pasted as array",
                    get actions() {
                        return r(Bt)
                    }
                })
            }
            ;
            ie(Cn, tt => {
                r(ne) && tt(bt)
            }
            );
            var mn = B(Cn, 2)
              , xt = tt => {
                var Bt = pe( () => p() ? [] : [{
                    icon: kf,
                    text: "Ok",
                    title: "Accept the repaired document",
                    onClick: bn
                }, {
                    icon: oc,
                    text: "Repair manually instead",
                    title: "Leave the document unchanged and repair it manually instead",
                    onClick: Sn
                }]);
                Mo(tt, {
                    type: "success",
                    message: "The loaded JSON document was invalid but is successfully repaired.",
                    get actions() {
                        return r(Bt)
                    },
                    onClose: He
                })
            }
            ;
            ie(mn, tt => {
                r(Ye) && tt(xt)
            }
            ),
            Dp(B(mn, 2), {
                get validationErrors() {
                    return r(Tn)
                },
                selectError: sn
            }),
            Ee( (tt, Bt, hr) => {
                yt = At(Un, 1, "jse-table-invisible-start-section svelte-u14cgx", null, yt, tt),
                zn(dn, "colspan", (r($e),
                N( () => r($e).length))),
                tn = ra(dn, "", tn, Bt),
                zn(gr, "colspan", (r($e),
                N( () => r($e).length))),
                Ot = ra(gr, "", Ot, hr)
            }
            , [ () => ({
                "jse-search-box-background": r(J)
            }), () => ({
                height: (r(o),
                N( () => r(o).startHeight + "px"))
            }), () => ({
                height: (r(o),
                N( () => r(o).endHeight + "px"))
            })], pe),
            L(et, Qt)
        }
          , Ze = (et, Qt) => {
            var gn = Dn => {
                var no = h4()
                  , O = ht(no)
                  , q = pe( () => p() ? [] : [{
                    icon: oc,
                    text: "Repair manually",
                    title: 'Open the document in "code" mode and repair it manually',
                    onClick: Sn
                }]);
                Mo(O, {
                    type: "error",
                    message: "The loaded JSON document is invalid and could not be repaired automatically.",
                    get actions() {
                        return r(q)
                    }
                }),
                O1(B(O, 2), {
                    get text() {
                        return r(le)
                    },
                    get json() {
                        return r(D)
                    },
                    get indentation() {
                        return M()
                    },
                    get parser() {
                        return k()
                    }
                }),
                L(Dn, no)
            }
              , cn = Dn => {
                o4(Dn, {
                    get text() {
                        return r(le)
                    },
                    get json() {
                        return r(D)
                    },
                    get readOnly() {
                        return p()
                    },
                    get parser() {
                        return k()
                    },
                    openJSONEditorModal: Wn,
                    extractPath: zt,
                    get onChangeMode() {
                        return ae()
                    },
                    onClick: () => {
                        He()
                    }
                })
            }
            ;
            ie(et, Dn => {
                r(F) && r(le) !== void 0 && r(le) !== "" ? Dn(gn) : Dn(cn, !1)
            }
            , Qt)
        }
        ;
        ie(Ue, et => {
            r(Lt) ? et(Je) : et(Ze, !1)
        }
        ),
        me("paste", Le, W),
        L(E, G)
    }
      , yo = E => {
        L(E, m4())
    }
    ;
    ie(uo, E => {
        v ? E(yo, !1) : E(kn)
    }
    ),
    nr(un, E => h(de, E), () => r(de));
    var Er = B(un, 2)
      , Ir = E => {
        h1(E, {
            onClose: () => h(j, !1)
        })
    }
    ;
    ie(Er, E => {
        r(j) && E(Ir)
    }
    );
    var Pr = B(Er, 2)
      , to = E => {
        g1(E, pi( () => r(qt), {
            onClose: () => {
                var G;
                (G = r(qt)) === null || G === void 0 || G.onClose(),
                h(qt, void 0)
            }
        }))
    }
    ;
    return ie(Pr, E => {
        r(qt) && E(to)
    }
    ),
    Ee(E => Ge = At(un, 1, "jse-table-mode svelte-u14cgx", null, Ge, E), [ () => ({
        "no-main-menu": !w()
    })], pe),
    me("mousedown", un, function(E) {
        if (E.buttons === 1 || E.buttons === 2) {
            var G = E.target;
            G.isContentEditable || He();
            var xe = Uw(G);
            if (xe) {
                if (Fr(r(Q)) && eu(r(D), r(Q), xe))
                    return;
                h(Q, nn(xe)),
                E.preventDefault()
            }
        }
    }),
    me("keydown", un, function(E) {
        var G = Ja(E);
        if (i("keydown", {
            combo: G,
            key: E.key
        }),
        G === "Ctrl+X" && (E.preventDefault(),
        Pt(!0)),
        G === "Ctrl+Shift+X" && (E.preventDefault(),
        Pt(!1)),
        G === "Ctrl+C" && (E.preventDefault(),
        pt(!0)),
        G === "Ctrl+Shift+C" && (E.preventDefault(),
        pt(!1)),
        G === "Ctrl+D" && (E.preventDefault(),
        Mn()),
        G !== "Delete" && G !== "Backspace" || (E.preventDefault(),
        rt()),
        G === "Insert" && E.preventDefault(),
        G === "Ctrl+A" && E.preventDefault(),
        G === "Ctrl+Q" && Tr(E),
        G === "ArrowLeft" && (E.preventDefault(),
        Vt(),
        r(Q))) {
            var xe = function(Qt, gn) {
                var {rowIndex: cn, columnIndex: Dn} = Lo(Qe(gn), Qt);
                return Dn > 0 ? nn(Di({
                    rowIndex: cn,
                    columnIndex: Dn - 1
                }, Qt)) : gn
            }(r($e), r(Q));
            h(Q, xe),
            Mr(Qe(xe))
        }
        if (G === "ArrowRight" && (E.preventDefault(),
        Vt(),
        r(Q))) {
            var Le = function(Qt, gn) {
                var {rowIndex: cn, columnIndex: Dn} = Lo(Qe(gn), Qt);
                return Dn < Qt.length - 1 ? nn(Di({
                    rowIndex: cn,
                    columnIndex: Dn + 1
                }, Qt)) : gn
            }(r($e), r(Q));
            h(Q, Le),
            Mr(Qe(Le))
        }
        if (G === "ArrowUp" && (E.preventDefault(),
        Vt(),
        r(Q))) {
            var Ue = function(Qt, gn) {
                var {rowIndex: cn, columnIndex: Dn} = Lo(Qe(gn), Qt);
                return cn > 0 ? nn(Di({
                    rowIndex: cn - 1,
                    columnIndex: Dn
                }, Qt)) : gn
            }(r($e), r(Q));
            h(Q, Ue),
            Mr(Qe(Ue))
        }
        if (G === "ArrowDown" && (E.preventDefault(),
        Vt(),
        r(Q))) {
            var Je = function(Qt, gn, cn) {
                var {rowIndex: Dn, columnIndex: no} = Lo(Qe(cn), gn);
                return Dn < Qt.length - 1 ? nn(Di({
                    rowIndex: Dn + 1,
                    columnIndex: no
                }, gn)) : cn
            }(r(D), r($e), r(Q));
            h(Q, Je),
            Mr(Qe(Je))
        }
        if (G === "Enter" && r(Q) && jn(r(Q))) {
            E.preventDefault();
            var Ze = r(Q).path;
            xr(Ke(r(D), Ze)) ? Wn(Ze) : p() || h(Q, ke(ke({}, r(Q)), {}, {
                edit: !0
            }))
        }
        if (G.replace(/^Shift\+/, "").length === 1 && r(Q))
            return E.preventDefault(),
            void function(Qt) {
                ut.apply(this, arguments)
            }(E.key);
        if (G === "Ctrl+Enter" && jn(r(Q))) {
            E.preventDefault();
            var et = Ke(r(D), r(Q).path);
            pd(et) && window.open(String(et), "_blank")
        }
        G === "Escape" && r(Q) && (E.preventDefault(),
        h(Q, void 0)),
        G === "Ctrl+F" && (E.preventDefault(),
        Nt(!1)),
        G === "Ctrl+H" && (E.preventDefault(),
        Nt(!0)),
        G === "Ctrl+Z" && (E.preventDefault(),
        Pn()),
        G === "Ctrl+Shift+Z" && (E.preventDefault(),
        eo())
    }),
    me("contextmenu", un, Tr),
    L(e, pr),
    Et(t, "validate", Rn),
    Et(t, "patch", on),
    Et(t, "focus", He),
    Et(t, "acceptAutoRepair", bn),
    Et(t, "scrollTo", or),
    Et(t, "findElement", Gn),
    Et(t, "openTransformModal", Jt),
    st({
        validate: Rn,
        patch: on,
        focus: He,
        acceptAutoRepair: bn,
        scrollTo: or,
        findElement: Gn,
        openTransformModal: Jt
    })
}
function $g(e, t) {
    it(t, !1);
    var n = g(t, "content", 8)
      , o = g(t, "selection", 12)
      , a = g(t, "readOnly", 8)
      , i = g(t, "indentation", 8)
      , s = g(t, "tabSize", 8)
      , l = g(t, "truncateTextSize", 8)
      , u = g(t, "externalMode", 8)
      , d = g(t, "mainMenuBar", 8)
      , c = g(t, "navigationBar", 8)
      , v = g(t, "statusBar", 8)
      , p = g(t, "askToFormat", 8)
      , f = g(t, "escapeControlCharacters", 8)
      , m = g(t, "escapeUnicodeCharacters", 8)
      , x = g(t, "flattenColumns", 8)
      , y = g(t, "parser", 8)
      , w = g(t, "parseMemoizeOne", 8)
      , S = g(t, "validator", 8)
      , P = g(t, "validationParser", 8)
      , R = g(t, "pathParser", 8)
      , k = g(t, "insideModal", 8)
      , I = g(t, "onChange", 8)
      , H = g(t, "onChangeMode", 8)
      , Y = g(t, "onSelect", 8)
      , M = g(t, "onRenderValue", 8)
      , Z = g(t, "onClassName", 8)
      , ae = g(t, "onRenderMenu", 8)
      , ee = g(t, "onRenderContextMenu", 8)
      , se = g(t, "onError", 8)
      , _e = g(t, "onFocus", 8)
      , fe = g(t, "onBlur", 8)
      , Oe = g(t, "onSortModal", 8)
      , De = g(t, "onTransformModal", 8)
      , Ne = g(t, "onJSONEditorModal", 8)
      , je = T()
      , Ae = T()
      , Pe = T()
      , Ve = Hr("jsoneditor:JSONEditorRoot")
      , ge = T(M1({
        onChange: j => h(ge, j)
    }).get())
      , de = T(u());
    function ye(j) {
        if (lg(j)) {
            h(de, j.undo.mode);
            var C = r(ge).items()
              , A = C.findIndex(re => re === j)
              , $ = A !== -1 ? C[A - 1] : void 0;
            Ve("handleUndo", {
                index: A,
                item: j,
                items: C,
                prevItem: $
            }),
            $ && o($.redo.selection),
            H()(r(de))
        }
    }
    function ct(j) {
        if (lg(j)) {
            h(de, j.redo.mode);
            var C = r(ge).items()
              , A = C.findIndex(re => re === j)
              , $ = A !== -1 ? C[A + 1] : void 0;
            Ve("handleRedo", {
                index: A,
                item: j,
                items: C,
                nextItem: $
            }),
            $ && o($.undo.selection),
            H()(r(de))
        }
    }
    var qt = T()
      , X = {
        type: "separator"
    }
      , D = T()
      , le = T();
    function F(j) {
        if (r(je))
            return r(je).patch(j);
        if (r(Ae))
            return r(Ae).patch(j);
        if (r(Pe))
            return r(Pe).patch(j);
        throw new Error('Method patch is not available in mode "'.concat(r(de), '"'))
    }
    function we(j, C) {
        if (r(je))
            return r(je).expand(j, C);
        throw new Error('Method expand is not available in mode "'.concat(r(de), '"'))
    }
    function ne(j, C) {
        if (r(je))
            return r(je).collapse(j, C);
        throw new Error('Method collapse is not available in mode "'.concat(r(de), '"'))
    }
    function Be(j) {
        if (r(Pe))
            r(Pe).openTransformModal(j);
        else if (r(je))
            r(je).openTransformModal(j);
        else {
            if (!r(Ae))
                throw new Error('Method transform is not available in mode "'.concat(r(de), '"'));
            r(Ae).openTransformModal(j)
        }
    }
    function J() {
        if (r(Pe))
            return r(Pe).validate();
        if (r(je))
            return r(je).validate();
        if (r(Ae))
            return r(Ae).validate();
        throw new Error('Method validate is not available in mode "'.concat(r(de), '"'))
    }
    function U() {
        return r(je) ? r(je).acceptAutoRepair() : n()
    }
    function _t(j) {
        if (r(je))
            return r(je).scrollTo(j);
        if (r(Ae))
            return r(Ae).scrollTo(j);
        throw new Error('Method scrollTo is not available in mode "'.concat(r(de), '"'))
    }
    function nt(j) {
        if (r(je))
            return r(je).findElement(j);
        if (r(Ae))
            return r(Ae).findElement(j);
        throw new Error('Method findElement is not available in mode "'.concat(r(de), '"'))
    }
    function Se() {
        r(Pe) ? r(Pe).focus() : r(je) ? r(je).focus() : r(Ae) && r(Ae).focus()
    }
    function mt() {
        return Fe.apply(this, arguments)
    }
    function Fe() {
        return (Fe = wt(function*() {
            r(Pe) && (yield r(Pe).refresh())
        })).apply(this, arguments)
    }
    V( () => b(u()), () => {
        (function(j) {
            if (j !== r(de)) {
                var C = {
                    type: "mode",
                    undo: {
                        mode: r(de),
                        selection: void 0
                    },
                    redo: {
                        mode: j,
                        selection: void 0
                    }
                };
                r(de) === "text" && r(Pe) && r(Pe).flush(),
                Ve("add history item", C),
                r(ge).add(C),
                h(de, j)
            }
        }
        )(u())
    }
    ),
    V( () => (r(de),
    b(H())), () => {
        h(qt, [{
            type: "button",
            text: "text",
            title: "Switch to text mode (current mode: ".concat(r(de), ")"),
            className: "jse-group-button jse-first" + (r(de) === zr.text ? " jse-selected" : ""),
            onClick: () => H()(zr.text)
        }, {
            type: "button",
            text: "tree",
            title: "Switch to tree mode (current mode: ".concat(r(de), ")"),
            className: "jse-group-button " + (r(de) === zr.tree ? " jse-selected" : ""),
            onClick: () => H()(zr.tree)
        }, {
            type: "button",
            text: "table",
            title: "Switch to table mode (current mode: ".concat(r(de), ")"),
            className: "jse-group-button jse-last" + (r(de) === zr.table ? " jse-selected" : ""),
            onClick: () => H()(zr.table)
        }])
    }
    ),
    V( () => (r(qt),
    b(ae()),
    r(de),
    b(k()),
    b(a())), () => {
        h(D, j => {
            var C = Uv(j[0]) ? r(qt).concat(j) : r(qt).concat(X, j)
              , A = ql(C);
            return ae()(C, {
                mode: r(de),
                modal: k(),
                readOnly: a()
            }) || A
        }
        )
    }
    ),
    V( () => (b(ee()),
    r(de),
    b(k()),
    b(a()),
    b(o())), () => {
        h(le, j => {
            var C, A = ql(j);
            return (C = ee()(j, {
                mode: r(de),
                modal: k(),
                readOnly: a(),
                selection: o()
            })) !== null && C !== void 0 ? C : !a() && A
        }
        )
    }
    ),
    An(),
    Rt();
    var $e = jr()
      , Lt = ht($e)
      , We = j => {
        nr(VT(j, {
            get externalContent() {
                return n()
            },
            get externalSelection() {
                return o()
            },
            get history() {
                return r(ge)
            },
            get readOnly() {
                return a()
            },
            get indentation() {
                return i()
            },
            get tabSize() {
                return s()
            },
            get mainMenuBar() {
                return d()
            },
            get statusBar() {
                return v()
            },
            get askToFormat() {
                return p()
            },
            get escapeUnicodeCharacters() {
                return m()
            },
            get parser() {
                return y()
            },
            get validator() {
                return S()
            },
            get validationParser() {
                return P()
            },
            get onChange() {
                return I()
            },
            get onChangeMode() {
                return H()
            },
            get onSelect() {
                return Y()
            },
            onUndo: ye,
            onRedo: ct,
            get onError() {
                return se()
            },
            get onFocus() {
                return _e()
            },
            get onBlur() {
                return fe()
            },
            get onRenderMenu() {
                return r(D)
            },
            get onSortModal() {
                return Oe()
            },
            get onTransformModal() {
                return De()
            },
            $$legacy: !0
        }), C => h(Pe, C), () => r(Pe))
    }
      , $t = (j, C) => {
        var A = re => {
            nr(x4(re, {
                get externalContent() {
                    return n()
                },
                get externalSelection() {
                    return o()
                },
                get history() {
                    return r(ge)
                },
                get readOnly() {
                    return a()
                },
                get truncateTextSize() {
                    return l()
                },
                get mainMenuBar() {
                    return d()
                },
                get escapeControlCharacters() {
                    return f()
                },
                get escapeUnicodeCharacters() {
                    return m()
                },
                get flattenColumns() {
                    return x()
                },
                get parser() {
                    return y()
                },
                get parseMemoizeOne() {
                    return w()
                },
                get validator() {
                    return S()
                },
                get validationParser() {
                    return P()
                },
                get indentation() {
                    return i()
                },
                get onChange() {
                    return I()
                },
                get onChangeMode() {
                    return H()
                },
                get onSelect() {
                    return Y()
                },
                onUndo: ye,
                onRedo: ct,
                get onRenderValue() {
                    return M()
                },
                get onFocus() {
                    return _e()
                },
                get onBlur() {
                    return fe()
                },
                get onRenderMenu() {
                    return r(D)
                },
                get onRenderContextMenu() {
                    return r(le)
                },
                get onSortModal() {
                    return Oe()
                },
                get onTransformModal() {
                    return De()
                },
                get onJSONEditorModal() {
                    return Ne()
                },
                $$legacy: !0
            }), Ce => h(Ae, Ce), () => r(Ae))
        }
          , $ = re => {
            nr(tf(re, {
                get externalContent() {
                    return n()
                },
                get externalSelection() {
                    return o()
                },
                get history() {
                    return r(ge)
                },
                get readOnly() {
                    return a()
                },
                get indentation() {
                    return i()
                },
                get truncateTextSize() {
                    return l()
                },
                get mainMenuBar() {
                    return d()
                },
                get navigationBar() {
                    return c()
                },
                get escapeControlCharacters() {
                    return f()
                },
                get escapeUnicodeCharacters() {
                    return m()
                },
                get parser() {
                    return y()
                },
                get parseMemoizeOne() {
                    return w()
                },
                get validator() {
                    return S()
                },
                get validationParser() {
                    return P()
                },
                get pathParser() {
                    return R()
                },
                get onError() {
                    return se()
                },
                get onChange() {
                    return I()
                },
                get onChangeMode() {
                    return H()
                },
                get onSelect() {
                    return Y()
                },
                onUndo: ye,
                onRedo: ct,
                get onRenderValue() {
                    return M()
                },
                get onClassName() {
                    return Z()
                },
                get onFocus() {
                    return _e()
                },
                get onBlur() {
                    return fe()
                },
                get onRenderMenu() {
                    return r(D)
                },
                get onRenderContextMenu() {
                    return r(le)
                },
                get onSortModal() {
                    return Oe()
                },
                get onTransformModal() {
                    return De()
                },
                get onJSONEditorModal() {
                    return Ne()
                },
                $$legacy: !0
            }), Ce => h(je, Ce), () => r(je))
        }
        ;
        ie(j, re => {
            r(de),
            b(zr),
            N( () => r(de) === zr.table) ? re(A) : re($, !1)
        }
        , C)
    }
    ;
    return ie(Lt, j => {
        r(de),
        b(zr),
        N( () => r(de) === zr.text || String(r(de)) === "code") ? j(We) : j($t, !1)
    }
    ),
    L(e, $e),
    Et(t, "patch", F),
    Et(t, "expand", we),
    Et(t, "collapse", ne),
    Et(t, "transform", Be),
    Et(t, "validate", J),
    Et(t, "acceptAutoRepair", U),
    Et(t, "scrollTo", _t),
    Et(t, "findElement", nt),
    Et(t, "focus", Se),
    Et(t, "refresh", mt),
    st({
        patch: F,
        expand: we,
        collapse: ne,
        transform: Be,
        validate: J,
        acceptAutoRepair: U,
        scrollTo: _t,
        findElement: nt,
        focus: Se,
        refresh: mt
    })
}
kt(`/* over all fonts, sizes, and colors */
/* "consolas" for Windows, "menlo" for Mac with fallback to "monaco", 'Ubuntu Mono' for Ubuntu */
/* (at Mac this font looks too large at 14px, but 13px is too small for the font on Windows) */
/* main, menu, modal */
/* jsoneditor modal */
/* tooltip in text mode */
/* panels: navigation bar, gutter, search box */
/* navigation-bar */
/* context menu */
/* contents: json key and values */
/* contents: selected or hovered */
/* contents: section of collapsed items in an array */
/* contents: highlighting of search matches */
/* contents: inline tags inside the JSON document */
/* contents: table */
/* controls in modals: inputs, buttons, and \`a\` */
/* messages */
/* svelte-select */
/* color picker */
.jse-modal-wrapper.svelte-v0el4e {
  flex: 1;
  display: flex;
  min-width: 0;
  min-height: 0;
  flex-direction: column;
}
.jse-modal-wrapper.svelte-v0el4e .jse-modal-contents:where(.svelte-v0el4e) {
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
  overflow: auto;
  min-width: 0;
  min-height: 0;
}
.jse-modal-wrapper.svelte-v0el4e .jse-modal-contents:where(.svelte-v0el4e) .jse-actions:where(.svelte-v0el4e) {
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  padding-top: var(--jse-padding, 10px);
}
.jse-modal-wrapper.svelte-v0el4e .jse-modal-contents:where(.svelte-v0el4e) .jse-actions:where(.svelte-v0el4e) button.jse-primary:where(.svelte-v0el4e) {
  border: none;
  background: transparent;
  color: inherit;
  cursor: pointer;
  font-family: var(--jse-font-family, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif);
  font-size: var(--jse-font-size, 16px);
  padding: 5px;
  margin: 0;
  background: var(--jse-button-primary-background, var(--jse-theme-color, #3883fa));
  color: var(--jse-button-primary-color, #fff);
  padding: var(--jse-padding, 10px) calc(2 * var(--jse-padding, 10px));
  border-radius: 3px;
}
.jse-modal-wrapper.svelte-v0el4e .jse-modal-contents:where(.svelte-v0el4e) .jse-actions:where(.svelte-v0el4e) button.jse-primary:where(.svelte-v0el4e):hover {
  background: var(--jse-button-primary-background-highlight, var(--jse-theme-color-highlight, #5f9dff));
}
.jse-modal-wrapper.svelte-v0el4e .jse-modal-contents:where(.svelte-v0el4e) .jse-actions:where(.svelte-v0el4e) button.jse-primary:where(.svelte-v0el4e):disabled {
  background: var(--jse-button-primary-background-disabled, #9d9d9d);
}
.jse-modal-wrapper.svelte-v0el4e .jse-modal-contents:where(.svelte-v0el4e) .jse-label:where(.svelte-v0el4e) {
  font-weight: bold;
  display: block;
  box-sizing: border-box;
}
.jse-modal-wrapper.svelte-v0el4e .jse-modal-contents:where(.svelte-v0el4e) .jse-label:where(.svelte-v0el4e) .jse-label-inner:where(.svelte-v0el4e) {
  margin-top: calc(2 * var(--jse-padding, 10px));
  margin-bottom: calc(0.5 * var(--jse-padding, 10px));
  box-sizing: border-box;
}
.jse-modal-wrapper.svelte-v0el4e .jse-modal-contents:where(.svelte-v0el4e) .jse-modal-inline-editor:where(.svelte-v0el4e) {
  flex: 1;
  min-height: 150px;
  min-width: 0;
  max-width: 100%;
  display: flex;
  --jse-theme-color: var(--jse-modal-editor-theme-color, #707070);
  --jse-theme-color-highlight: var(--jse-modal-editor-theme-color-highlight, #646464);
}
.jse-modal-wrapper.svelte-v0el4e .jse-actions:where(.svelte-v0el4e) {
  gap: var(--jse-padding, 10px);
  align-items: center;
}
.jse-modal-wrapper.svelte-v0el4e .jse-actions:where(.svelte-v0el4e) .jse-error:where(.svelte-v0el4e) {
  flex: 1;
  color: var(--jse-error-color, #ee5341);
}
.jse-modal-wrapper.svelte-v0el4e .jse-actions:where(.svelte-v0el4e) button.jse-secondary:where(.svelte-v0el4e) {
  border: none;
  background: transparent;
  color: inherit;
  cursor: pointer;
  font-family: var(--jse-font-family, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif);
  font-size: var(--jse-font-size, 16px);
  padding: 5px;
  margin: 0;
  background: var(--jse-button-secondary-background, #d3d3d3);
  color: var(--jse-button-secondary-color, var(--jse-text-color, #4d4d4d));
  padding: var(--jse-padding, 10px) calc(2 * var(--jse-padding, 10px));
  border-radius: 3px;
}
.jse-modal-wrapper.svelte-v0el4e .jse-actions:where(.svelte-v0el4e) button.jse-secondary:where(.svelte-v0el4e):hover {
  background: var(--jse-button-secondary-background-highlight, #e1e1e1);
}
.jse-modal-wrapper.svelte-v0el4e .jse-actions:where(.svelte-v0el4e) button.jse-secondary:where(.svelte-v0el4e):disabled {
  background: var(--jse-button-secondary-background-disabled, #9d9d9d);
}
.jse-modal-wrapper.svelte-v0el4e input:where(.svelte-v0el4e) {
  border: var(--jse-input-border, 1px solid #d8dbdf);
  outline: none;
  box-sizing: border-box;
  padding: calc(0.5 * var(--jse-padding, 10px));
  font-family: var(--jse-font-family-mono, consolas, menlo, monaco, "Ubuntu Mono", "source-code-pro", monospace);
  font-size: var(--jse-font-size-mono, 14px);
  color: inherit;
  background: var(--jse-input-background, var(--jse-background-color, #fff));
}
.jse-modal-wrapper.svelte-v0el4e input:where(.svelte-v0el4e):focus {
  border: var(--jse-input-border-focus, 1px solid var(--jse-input-border-focus, var(--jse-theme-color, #3883fa)));
}
.jse-modal-wrapper.svelte-v0el4e input:where(.svelte-v0el4e):read-only {
  background: var(--jse-input-background-readonly, transparent);
}`);
var j4 = K('<div class="jse-error svelte-v0el4e"> </div>')
  , y4 = K('<button type="button" class="jse-secondary svelte-v0el4e"><!> Back</button>')
  , w4 = K('<button type="button" class="jse-primary svelte-v0el4e">Apply</button>')
  , k4 = K('<button type="button" class="jse-primary svelte-v0el4e">Close</button>')
  , _4 = K('<!> <div class="jse-modal-contents svelte-v0el4e"><div class="jse-label svelte-v0el4e"><div class="jse-label-inner svelte-v0el4e">Path</div></div> <input class="jse-path svelte-v0el4e" type="text" readonly="" title="Selected path"/> <div class="jse-label svelte-v0el4e"><div class="jse-label-inner svelte-v0el4e">Contents</div></div> <div class="jse-modal-inline-editor svelte-v0el4e"><!></div> <div class="jse-actions svelte-v0el4e"><!> <!> <!></div></div>', 1)
  , S4 = K('<div class="jse-modal-wrapper svelte-v0el4e"><!></div>')
  , C4 = {};
kt(`/* over all fonts, sizes, and colors */
/* "consolas" for Windows, "menlo" for Mac with fallback to "monaco", 'Ubuntu Mono' for Ubuntu */
/* (at Mac this font looks too large at 14px, but 13px is too small for the font on Windows) */
/* main, menu, modal */
/* jsoneditor modal */
/* tooltip in text mode */
/* panels: navigation bar, gutter, search box */
/* navigation-bar */
/* context menu */
/* contents: json key and values */
/* contents: selected or hovered */
/* contents: section of collapsed items in an array */
/* contents: highlighting of search matches */
/* contents: inline tags inside the JSON document */
/* contents: table */
/* controls in modals: inputs, buttons, and \`a\` */
/* messages */
/* svelte-select */
/* color picker */
.jse-modal-contents.svelte-1v9c92j {
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
  overflow: auto;
  min-width: 0;
  min-height: 0;
}
.jse-modal-contents.svelte-1v9c92j .jse-actions:where(.svelte-1v9c92j) {
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  padding-top: var(--jse-padding, 10px);
}
.jse-modal-contents.svelte-1v9c92j .jse-actions:where(.svelte-1v9c92j) button.jse-primary:where(.svelte-1v9c92j) {
  border: none;
  background: transparent;
  color: inherit;
  cursor: pointer;
  font-family: var(--jse-font-family, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif);
  font-size: var(--jse-font-size, 16px);
  padding: 5px;
  margin: 0;
  background: var(--jse-button-primary-background, var(--jse-theme-color, #3883fa));
  color: var(--jse-button-primary-color, #fff);
  padding: var(--jse-padding, 10px) calc(2 * var(--jse-padding, 10px));
  border-radius: 3px;
}
.jse-modal-contents.svelte-1v9c92j .jse-actions:where(.svelte-1v9c92j) button.jse-primary:where(.svelte-1v9c92j):hover {
  background: var(--jse-button-primary-background-highlight, var(--jse-theme-color-highlight, #5f9dff));
}
.jse-modal-contents.svelte-1v9c92j .jse-actions:where(.svelte-1v9c92j) button.jse-primary:where(.svelte-1v9c92j):disabled {
  background: var(--jse-button-primary-background-disabled, #9d9d9d);
}
.jse-modal-contents.svelte-1v9c92j table:where(.svelte-1v9c92j) {
  width: 100%;
  border-collapse: collapse;
  border-spacing: 0;
}
.jse-modal-contents.svelte-1v9c92j table:where(.svelte-1v9c92j) th:where(.svelte-1v9c92j),
.jse-modal-contents.svelte-1v9c92j table:where(.svelte-1v9c92j) td:where(.svelte-1v9c92j) {
  text-align: left;
  vertical-align: middle;
  font-weight: normal;
  padding-bottom: var(--jse-padding, 10px);
}
.jse-modal-contents.svelte-1v9c92j input.jse-path:where(.svelte-1v9c92j) {
  width: 100%;
  box-sizing: border-box;
  padding: 5px 10px;
  border: var(--jse-input-border, 1px solid #d8dbdf);
  border-radius: var(--jse-input-radius, 3px);
  font-family: inherit;
  font-size: inherit;
  background: inherit;
  background: var(--jse-input-background-readonly, transparent);
  color: inherit;
  outline: none;
}
.jse-modal-contents.svelte-1v9c92j .svelte-select input {
  box-sizing: border-box;
}
.jse-modal-contents.svelte-1v9c92j .jse-space:where(.svelte-1v9c92j) {
  height: 200px;
}
.jse-modal-contents.svelte-1v9c92j .jse-space:where(.svelte-1v9c92j) .jse-error:where(.svelte-1v9c92j) {
  color: var(--jse-error-color, #ee5341);
}`);
var ys = fd( () => C4)
  , O4 = K('<tr><th class="svelte-1v9c92j">Property</th><td class="svelte-1v9c92j"><!></td></tr>')
  , E4 = K('<div class="jse-error svelte-1v9c92j"> </div>')
  , A4 = K('<!> <div class="jse-modal-contents svelte-1v9c92j"><table class="svelte-1v9c92j"><colgroup><col width="25%"/><col width="75%"/></colgroup><tbody><tr><th class="svelte-1v9c92j">Path</th><td class="svelte-1v9c92j"><input class="jse-path svelte-1v9c92j" type="text" readonly="" title="Selected path"/></td></tr><!><tr><th class="svelte-1v9c92j">Direction</th><td class="svelte-1v9c92j"><!></td></tr></tbody></table> <div class="jse-space svelte-1v9c92j"><!></div> <div class="jse-actions svelte-1v9c92j"><button type="button" class="jse-primary svelte-1v9c92j">Sort</button></div></div>', 1);
kt(`/* over all fonts, sizes, and colors */
/* "consolas" for Windows, "menlo" for Mac with fallback to "monaco", 'Ubuntu Mono' for Ubuntu */
/* (at Mac this font looks too large at 14px, but 13px is too small for the font on Windows) */
/* main, menu, modal */
/* jsoneditor modal */
/* tooltip in text mode */
/* panels: navigation bar, gutter, search box */
/* navigation-bar */
/* context menu */
/* contents: json key and values */
/* contents: selected or hovered */
/* contents: section of collapsed items in an array */
/* contents: highlighting of search matches */
/* contents: inline tags inside the JSON document */
/* contents: table */
/* controls in modals: inputs, buttons, and \`a\` */
/* messages */
/* svelte-select */
/* color picker */
.jse-main.svelte-57bmz4 {
  width: 100%;
  height: 100%;
  min-width: 0;
  min-height: 150px;
  font-family: var(--jse-font-family, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif);
  font-size: var(--jse-font-size, 16px);
  line-height: normal;
  position: relative;
  display: flex;
  flex-direction: row;
}
.jse-main.svelte-57bmz4:not(.jse-focus) {
  --jse-selection-background-color: var(--jse-selection-background-inactive-color, #e8e8e8);
  --jse-context-menu-pointer-background: var(--jse-context-menu-pointer-hover-background, #b2b2b2);
}`);
var R4 = K('<div role="none"><!></div> <!> <!> <!>', 1);
function M4(e, t) {
    it(t, !1);
    var n = T(void 0, !0)
      , o = Hr("jsoneditor:JSONEditor")
      , a = {
        text: ""
    }
      , i = void 0
      , s = !1
      , l = zr.tree
      , u = !0
      , d = !0
      , c = !0
      , v = !0
      , p = !1
      , f = !1
      , m = !0
      , x = JSON
      , y = void 0
      , w = JSON
      , S = {
        parse: gM,
        stringify: xo
    }
      , P = [bc]
      , R = P[0].id
      , k = Uo
      , I = void 0
      , H = void 0
      , Y = Bv
      , M = Uo
      , Z = Uo
      , ae = Uo
      , ee = Uo
      , se = be => {
        console.error(be),
        alert(be.toString())
    }
      , _e = Uo
      , fe = Uo
      , Oe = g(t, "content", 13, a)
      , De = g(t, "selection", 13, i)
      , Ne = g(t, "readOnly", 13, s)
      , je = g(t, "indentation", 13, 2)
      , Ae = g(t, "tabSize", 13, 4)
      , Pe = g(t, "truncateTextSize", 13, 1e3)
      , Ve = g(t, "mode", 13, l)
      , ge = g(t, "mainMenuBar", 13, u)
      , de = g(t, "navigationBar", 13, d)
      , ye = g(t, "statusBar", 13, c)
      , ct = g(t, "askToFormat", 13, v)
      , qt = g(t, "escapeControlCharacters", 13, p)
      , X = g(t, "escapeUnicodeCharacters", 13, f)
      , D = g(t, "flattenColumns", 13, m)
      , le = g(t, "parser", 13, x)
      , F = g(t, "validator", 13, y)
      , we = g(t, "validationParser", 13, w)
      , ne = g(t, "pathParser", 13, S)
      , Be = g(t, "queryLanguages", 13, P)
      , J = g(t, "queryLanguageId", 13, R)
      , U = g(t, "onChangeQueryLanguage", 13, k)
      , _t = g(t, "onChange", 13, I)
      , nt = g(t, "onSelect", 13, H)
      , Se = g(t, "onRenderValue", 13, Y)
      , mt = g(t, "onClassName", 13, M)
      , Fe = g(t, "onRenderMenu", 13, Z)
      , $e = g(t, "onRenderContextMenu", 13, ae)
      , Lt = g(t, "onChangeMode", 13, ee)
      , We = g(t, "onError", 13, se)
      , $t = g(t, "onFocus", 13, _e)
      , j = g(t, "onBlur", 13, fe)
      , C = T(Ms(), !0)
      , A = T(!1, !0)
      , $ = T(void 0, !0)
      , re = T(void 0, !0)
      , Ce = T(void 0, !0)
      , ze = T(void 0, !0)
      , oe = T(le(), !0);
    function Q() {
        return Oe()
    }
    function dt(be) {
        o("set");
        var an = Bd(be);
        if (an)
            throw new Error(an);
        h(C, Ms()),
        Oe(be),
        tr()
    }
    function Ye(be) {
        o("update");
        var an = Bd(be);
        if (an)
            throw new Error(an);
        Oe(be),
        tr()
    }
    function he(be) {
        var an = r($).patch(be);
        return tr(),
        an
    }
    function ft(be) {
        De(be),
        tr()
    }
    function Zt(be, an) {
        r($).expand(be, an),
        tr()
    }
    function Tn(be) {
        var an = arguments.length > 1 && arguments[1] !== void 0 && arguments[1];
        r($).collapse(be, an),
        tr()
    }
    function _n() {
        var be = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
        r($).transform(be),
        tr()
    }
    function Xt() {
        return r($).validate()
    }
    function Rn() {
        var be = r($).acceptAutoRepair();
        return tr(),
        be
    }
    function on(be) {
        return It.apply(this, arguments)
    }
    function It() {
        return (It = wt(function*(be) {
            yield r($).scrollTo(be)
        })).apply(this, arguments)
    }
    function St(be) {
        return r($).findElement(be)
    }
    function Ht() {
        r($).focus(),
        tr()
    }
    function hn() {
        return Ut.apply(this, arguments)
    }
    function Ut() {
        return (Ut = wt(function*() {
            yield r($).refresh()
        })).apply(this, arguments)
    }
    function He(be) {
        var an, te, Re, at, Dt, Xe, Gt, Sn, Pt, In, pt, en, rt, zt, Mn, ir, Ft, xn, ut, W, ce, Te, vt, sn, Jt, Wn, Zn, sr, Nn, Nt, Pn, eo = Object.keys(be);
        for (var Ct of eo)
            switch (Ct) {
            case "content":
                Oe((an = be[Ct]) !== null && an !== void 0 ? an : a);
                break;
            case "selection":
                De((te = be[Ct]) !== null && te !== void 0 ? te : i);
                break;
            case "readOnly":
                Ne((Re = be[Ct]) !== null && Re !== void 0 ? Re : s);
                break;
            case "indentation":
                je((at = be[Ct]) !== null && at !== void 0 ? at : 2);
                break;
            case "tabSize":
                Ae((Dt = be[Ct]) !== null && Dt !== void 0 ? Dt : 4);
                break;
            case "truncateTextSize":
                Pe((Xe = be[Ct]) !== null && Xe !== void 0 ? Xe : 1e3);
                break;
            case "mode":
                Ve((Gt = be[Ct]) !== null && Gt !== void 0 ? Gt : l);
                break;
            case "mainMenuBar":
                ge((Sn = be[Ct]) !== null && Sn !== void 0 ? Sn : u);
                break;
            case "navigationBar":
                de((Pt = be[Ct]) !== null && Pt !== void 0 ? Pt : d);
                break;
            case "statusBar":
                ye((In = be[Ct]) !== null && In !== void 0 ? In : c);
                break;
            case "askToFormat":
                ct((pt = be[Ct]) !== null && pt !== void 0 ? pt : v);
                break;
            case "escapeControlCharacters":
                qt((en = be[Ct]) !== null && en !== void 0 ? en : p);
                break;
            case "escapeUnicodeCharacters":
                X((rt = be[Ct]) !== null && rt !== void 0 ? rt : f);
                break;
            case "flattenColumns":
                D((zt = be[Ct]) !== null && zt !== void 0 ? zt : m);
                break;
            case "parser":
                le((Mn = be[Ct]) !== null && Mn !== void 0 ? Mn : x);
                break;
            case "validator":
                F((ir = be[Ct]) !== null && ir !== void 0 ? ir : y);
                break;
            case "validationParser":
                we((Ft = be[Ct]) !== null && Ft !== void 0 ? Ft : w);
                break;
            case "pathParser":
                ne((xn = be[Ct]) !== null && xn !== void 0 ? xn : S);
                break;
            case "queryLanguages":
                Be((ut = be[Ct]) !== null && ut !== void 0 ? ut : P);
                break;
            case "queryLanguageId":
                J((W = be[Ct]) !== null && W !== void 0 ? W : R);
                break;
            case "onChangeQueryLanguage":
                U((ce = be[Ct]) !== null && ce !== void 0 ? ce : k);
                break;
            case "onChange":
                _t((Te = be[Ct]) !== null && Te !== void 0 ? Te : I);
                break;
            case "onRenderValue":
                Se((vt = be[Ct]) !== null && vt !== void 0 ? vt : Y);
                break;
            case "onClassName":
                mt((sn = be[Ct]) !== null && sn !== void 0 ? sn : M);
                break;
            case "onRenderMenu":
                Fe((Jt = be[Ct]) !== null && Jt !== void 0 ? Jt : Z);
                break;
            case "onRenderContextMenu":
                $e((Wn = be[Ct]) !== null && Wn !== void 0 ? Wn : ae);
                break;
            case "onChangeMode":
                Lt((Zn = be[Ct]) !== null && Zn !== void 0 ? Zn : ee);
                break;
            case "onSelect":
                nt((sr = be[Ct]) !== null && sr !== void 0 ? sr : H);
                break;
            case "onError":
                We((Nn = be[Ct]) !== null && Nn !== void 0 ? Nn : se);
                break;
            case "onFocus":
                $t((Nt = be[Ct]) !== null && Nt !== void 0 ? Nt : _e);
                break;
            case "onBlur":
                j((Pn = be[Ct]) !== null && Pn !== void 0 ? Pn : fe);
                break;
            default:
                pr(Ct)
            }
        function pr(Ge) {
            o('Unknown property "'.concat(Ge, '"'))
        }
        Be().some(Ge => Ge.id === J()) || J(Be()[0].id),
        tr()
    }
    function Yt() {
        return Vt.apply(this, arguments)
    }
    function Vt() {
        return (Vt = wt(function*() {
            throw new Error("class method destroy() is deprecated. It is replaced with a method destroy() in the vanilla library.")
        })).apply(this, arguments)
    }
    function bn(be, an, te) {
        Oe(be),
        _t() && _t()(be, an, te)
    }
    function or(be) {
        De(be),
        nt() && nt()(ql(be))
    }
    function Bn() {
        h(A, !0),
        $t() && $t()()
    }
    function Mr() {
        h(A, !1),
        j() && j()()
    }
    function Gn(be) {
        return fr.apply(this, arguments)
    }
    function fr() {
        return (fr = wt(function*(be) {
            Ve() !== be && (Ve(be),
            tr(),
            Ht(),
            Lt()(be))
        })).apply(this, arguments)
    }
    function Tr(be) {
        o("handleChangeQueryLanguage", be),
        J(be),
        U()(be)
    }
    function Sr(be) {
        var {id: an, json: te, rootPath: Re, onTransform: at, onClose: Dt} = be;
        Ne() || h(ze, {
            id: an,
            json: te,
            rootPath: Re,
            indentation: je(),
            truncateTextSize: Pe(),
            escapeControlCharacters: qt(),
            escapeUnicodeCharacters: X(),
            parser: le(),
            parseMemoizeOne: r(n),
            validationParser: we(),
            pathParser: ne(),
            queryLanguages: Be(),
            queryLanguageId: J(),
            onChangeQueryLanguage: Tr,
            onRenderValue: Se(),
            onRenderMenu: Xe => Fe()(Xe, {
                mode: Ve(),
                modal: !0,
                readOnly: Ne()
            }),
            onRenderContextMenu: Xe => $e()(Xe, {
                mode: Ve(),
                modal: !0,
                readOnly: Ne(),
                selection: De()
            }),
            onClassName: mt(),
            onTransform: at,
            onClose: Dt
        })
    }
    function Cr(be) {
        Ne() || h(Ce, be)
    }
    function ar(be) {
        var {content: an, path: te, onPatch: Re, onClose: at} = be;
        o("onJSONEditorModal", {
            content: an,
            path: te
        }),
        h(re, {
            content: an,
            path: te,
            onPatch: Re,
            readOnly: Ne(),
            indentation: je(),
            tabSize: Ae(),
            truncateTextSize: Pe(),
            mainMenuBar: ge(),
            navigationBar: de(),
            statusBar: ye(),
            askToFormat: ct(),
            escapeControlCharacters: qt(),
            escapeUnicodeCharacters: X(),
            flattenColumns: D(),
            parser: le(),
            validator: void 0,
            validationParser: we(),
            pathParser: ne(),
            onRenderValue: Se(),
            onClassName: mt(),
            onRenderMenu: Fe(),
            onRenderContextMenu: $e(),
            onSortModal: Cr,
            onTransformModal: Sr,
            onClose: at
        })
    }
    function Or(be) {
        be.stopPropagation()
    }
    return V( () => (b(le()),
    r(oe),
    b(Oe()),
    Ms), () => {
        if (!Gs(le(), r(oe))) {
            if (o("parser changed, recreate editor"),
            Kl(Oe())) {
                var be = r(oe).stringify(Oe().json);
                Oe({
                    json: be !== void 0 ? le().parse(be) : void 0
                })
            }
            h(oe, le()),
            h(C, Ms())
        }
    }
    ),
    V( () => b(Oe()), () => {
        var be = Bd(Oe());
        be && console.error("Error: " + be)
    }
    ),
    V( () => b(De()), () => {
        De() === null && console.warn("selection is invalid: it is null but should be undefined")
    }
    ),
    V( () => b(le()), () => {
        h(n, Ji(le().parse))
    }
    ),
    V( () => b(Ve()), () => {
        o("mode changed to", Ve())
    }
    ),
    An(),
    Rt(!0),
    Nv(e, {
        children: (be, an) => {
            var te, Re = R4(), at = ht(Re);
            mw(z(at), () => r(C), pt => {
                nr($g(pt, {
                    get externalMode() {
                        return Ve()
                    },
                    get content() {
                        return Oe()
                    },
                    get selection() {
                        return De()
                    },
                    get readOnly() {
                        return Ne()
                    },
                    get indentation() {
                        return je()
                    },
                    get tabSize() {
                        return Ae()
                    },
                    get truncateTextSize() {
                        return Pe()
                    },
                    get statusBar() {
                        return ye()
                    },
                    get askToFormat() {
                        return ct()
                    },
                    get mainMenuBar() {
                        return ge()
                    },
                    get navigationBar() {
                        return de()
                    },
                    get escapeControlCharacters() {
                        return qt()
                    },
                    get escapeUnicodeCharacters() {
                        return X()
                    },
                    get flattenColumns() {
                        return D()
                    },
                    get parser() {
                        return le()
                    },
                    get parseMemoizeOne() {
                        return r(n)
                    },
                    get validator() {
                        return F()
                    },
                    get validationParser() {
                        return we()
                    },
                    get pathParser() {
                        return ne()
                    },
                    insideModal: !1,
                    get onError() {
                        return We()
                    },
                    onChange: bn,
                    onChangeMode: Gn,
                    onSelect: or,
                    get onRenderValue() {
                        return Se()
                    },
                    get onClassName() {
                        return mt()
                    },
                    onFocus: Bn,
                    onBlur: Mr,
                    get onRenderMenu() {
                        return Fe()
                    },
                    get onRenderContextMenu() {
                        return $e()
                    },
                    onSortModal: Cr,
                    onTransformModal: Sr,
                    onJSONEditorModal: ar,
                    $$legacy: !0
                }), en => h($, en), () => r($))
            }
            );
            var Dt = B(at, 2)
              , Xe = pt => {
                (function(en, rt) {
                    var zt, Mn;
                    it(rt, !1);
                    var ir = T(void 0, !0)
                      , Ft = T(void 0, !0)
                      , xn = T(void 0, !0)
                      , ut = T(void 0, !0)
                      , W = Hr("jsoneditor:SortModal")
                      , ce = g(rt, "id", 9)
                      , Te = g(rt, "json", 9)
                      , vt = g(rt, "rootPath", 9)
                      , sn = g(rt, "onSort", 9)
                      , Jt = g(rt, "onClose", 9)
                      , Wn = {
                        value: 1,
                        label: "ascending"
                    }
                      , Zn = [Wn, {
                        value: -1,
                        label: "descending"
                    }]
                      , sr = "".concat(ce(), ":").concat(Tt(vt()))
                      , Nn = T((zt = ys()[sr]) === null || zt === void 0 ? void 0 : zt.selectedProperty, !0)
                      , Nt = T(((Mn = ys()[sr]) === null || Mn === void 0 ? void 0 : Mn.selectedDirection) || Wn, !0)
                      , Pn = T(void 0, !0);
                    function eo() {
                        try {
                            var pr, Ge, un;
                            h(Pn, void 0);
                            var wn = ((pr = r(Nn)) === null || pr === void 0 ? void 0 : pr.value) || ((Ge = r(ut)) === null || Ge === void 0 || (Ge = Ge[0]) === null || Ge === void 0 ? void 0 : Ge.value) || []
                              , Ln = (un = r(Nt)) === null || un === void 0 ? void 0 : un.value
                              , uo = b1(Te(), vt(), wn, Ln);
                            sn() !== void 0 && vt() !== void 0 && sn()({
                                operations: uo,
                                rootPath: vt(),
                                itemPath: wn,
                                direction: Ln
                            }),
                            Jt()()
                        } catch (kn) {
                            h(Pn, String(kn))
                        }
                    }
                    function Ct(pr) {
                        pr.focus()
                    }
                    V( () => (b(Te()),
                    b(vt())), () => {
                        h(ir, Ke(Te(), vt()))
                    }
                    ),
                    V( () => r(ir), () => {
                        h(Ft, Array.isArray(r(ir)))
                    }
                    ),
                    V( () => (r(Ft),
                    r(ir)), () => {
                        h(xn, r(Ft) ? Tv(r(ir)) : void 0)
                    }
                    ),
                    V( () => (r(xn),
                    ii), () => {
                        h(ut, r(xn) ? r(xn).map(ii) : void 0)
                    }
                    ),
                    V( () => (ys(),
                    r(Nn),
                    r(Nt)), () => {
                        ys(ys()[sr] = {
                            selectedProperty: r(Nn),
                            selectedDirection: r(Nt)
                        }),
                        W("store state in memory", sr, ys()[sr])
                    }
                    ),
                    An(),
                    Rt(!0),
                    ru(en, {
                        get onClose() {
                            return Jt()
                        },
                        className: "jse-sort-modal",
                        children: (pr, Ge) => {
                            var un = A4()
                              , wn = ht(un)
                              , Ln = pe( () => r(Ft) ? "Sort array items" : "Sort object keys");
                            Mc(wn, {
                                get title() {
                                    return r(Ln)
                                },
                                get onClose() {
                                    return Jt()
                                }
                            });
                            var uo = z(B(wn, 2))
                              , kn = B(z(uo))
                              , yo = z(kn)
                              , Er = B(z(yo))
                              , Ir = z(Er)
                              , Pr = B(yo)
                              , to = Ze => {
                                var et = O4()
                                  , Qt = B(z(et));
                                $i(z(Qt), {
                                    showChevron: !0,
                                    get items() {
                                        return r(ut)
                                    },
                                    get value() {
                                        return r(Nn)
                                    },
                                    set value(gn) {
                                        h(Nn, gn)
                                    },
                                    $$legacy: !0
                                }),
                                L(Ze, et)
                            }
                            ;
                            ie(Pr, Ze => {
                                r(Ft),
                                r(ut),
                                N( () => {
                                    var et;
                                    return r(Ft) && r(ut) && ((et = r(ut)) === null || et === void 0 ? void 0 : et.length) > 1
                                }
                                ) && Ze(to)
                            }
                            );
                            var E = B(Pr)
                              , G = B(z(E));
                            $i(z(G), {
                                showChevron: !0,
                                clearable: !1,
                                get items() {
                                    return Zn
                                },
                                get value() {
                                    return r(Nt)
                                },
                                set value(Ze) {
                                    h(Nt, Ze)
                                },
                                $$legacy: !0
                            });
                            var xe = B(uo, 2)
                              , Le = z(xe)
                              , Ue = Ze => {
                                var et = E4()
                                  , Qt = z(et);
                                Ee( () => lt(Qt, r(Pn))),
                                L(Ze, et)
                            }
                            ;
                            ie(Le, Ze => {
                                r(Pn) && Ze(Ue)
                            }
                            );
                            var Je = z(B(xe, 2));
                            Gr( () => me("click", Je, eo)),
                            lo(Je, Ze => Ct?.(Ze)),
                            Ee(Ze => {
                                Zi(Ir, Ze),
                                Je.disabled = (r(Ft),
                                r(ut),
                                r(Nn),
                                N( () => {
                                    var et;
                                    return !!(r(Ft) && r(ut) && ((et = r(ut)) === null || et === void 0 ? void 0 : et.length) > 1) && !r(Nn)
                                }
                                ))
                            }
                            , [ () => (b(vt()),
                            b(vn),
                            b(xo),
                            N( () => vt() && !vn(vt()) ? xo(vt()) : "(document root)"))], pe),
                            L(pr, un)
                        }
                        ,
                        $$slots: {
                            default: !0
                        }
                    }),
                    st()
                }
                )(pt, pi( () => r(Ce), {
                    onClose: () => {
                        var en;
                        (en = r(Ce)) === null || en === void 0 || en.onClose(),
                        h(Ce, void 0)
                    }
                }))
            }
            ;
            ie(Dt, pt => {
                r(Ce) && pt(Xe)
            }
            );
            var Gt = B(Dt, 2)
              , Sn = pt => {
                zT(pt, pi( () => r(ze), {
                    onClose: () => {
                        var en;
                        (en = r(ze)) === null || en === void 0 || en.onClose(),
                        h(ze, void 0)
                    }
                }))
            }
            ;
            ie(Gt, pt => {
                r(ze) && pt(Sn)
            }
            );
            var Pt = B(Gt, 2)
              , In = pt => {
                (function(en, rt) {
                    it(rt, !1);
                    var zt = T(void 0, !0)
                      , Mn = T(void 0, !0)
                      , ir = T(void 0, !0)
                      , Ft = T(void 0, !0)
                      , xn = Hr("jsoneditor:JSONEditorModal")
                      , ut = g(rt, "content", 9)
                      , W = g(rt, "path", 9)
                      , ce = g(rt, "onPatch", 9)
                      , Te = g(rt, "readOnly", 9)
                      , vt = g(rt, "indentation", 9)
                      , sn = g(rt, "tabSize", 9)
                      , Jt = g(rt, "truncateTextSize", 9)
                      , Wn = g(rt, "mainMenuBar", 9)
                      , Zn = g(rt, "navigationBar", 9)
                      , sr = g(rt, "statusBar", 9)
                      , Nn = g(rt, "askToFormat", 9)
                      , Nt = g(rt, "escapeControlCharacters", 9)
                      , Pn = g(rt, "escapeUnicodeCharacters", 9)
                      , eo = g(rt, "flattenColumns", 9)
                      , Ct = g(rt, "parser", 9)
                      , pr = g(rt, "validator", 9)
                      , Ge = g(rt, "validationParser", 9)
                      , un = g(rt, "pathParser", 9)
                      , wn = g(rt, "onRenderValue", 9)
                      , Ln = g(rt, "onClassName", 9)
                      , uo = g(rt, "onRenderMenu", 9)
                      , kn = g(rt, "onRenderContextMenu", 9)
                      , yo = g(rt, "onSortModal", 9)
                      , Er = g(rt, "onTransformModal", 9)
                      , Ir = g(rt, "onClose", 9)
                      , Pr = T(void 0, !0)
                      , to = T(void 0, !0)
                      , E = {
                        mode: Le(ut()),
                        content: ut(),
                        selection: void 0,
                        relativePath: W()
                    }
                      , G = T([E], !0)
                      , xe = T(void 0, !0);
                    function Le(q) {
                        return Kl(q) && Lr(q.json) ? zr.table : zr.tree
                    }
                    function Ue() {
                        var q, ve = (q = gt(r(G))) === null || q === void 0 ? void 0 : q.selection;
                        Zl(ve) && r(Pr).scrollTo(Qe(ve))
                    }
                    function Je() {
                        if (xn("handleApply"),
                        !Te())
                            try {
                                h(xe, void 0);
                                var q = r(zt).relativePath
                                  , ve = r(zt).content
                                  , qe = [{
                                    op: "replace",
                                    path: Tt(q),
                                    value: Xh(ve, Ct()).json
                                }];
                                if (r(G).length > 1) {
                                    var Ie = Xh(r(G)[r(G).length - 2].content, Ct()).json
                                      , Me = {
                                        json: Zo(Ie, qe)
                                    }
                                      , jt = ke(ke({}, r(G)[r(G).length - 2] || E), {}, {
                                        content: Me
                                    });
                                    h(G, [...r(G).slice(0, r(G).length - 2), jt]),
                                    tr(),
                                    Ue()
                                } else
                                    ce()(qe),
                                    Ir()()
                            } catch (yt) {
                                h(xe, String(yt))
                            }
                    }
                    function Ze() {
                        if (xn("handleClose"),
                        r(to))
                            h(to, !1);
                        else if (r(G).length > 1) {
                            var q;
                            h(G, rn(r(G))),
                            tr(),
                            (q = r(Pr)) === null || q === void 0 || q.focus(),
                            Ue(),
                            h(xe, void 0)
                        } else
                            Ir()()
                    }
                    function et(q) {
                        xn("handleChange", q),
                        cn(ve => ke(ke({}, ve), {}, {
                            content: q
                        }))
                    }
                    function Qt(q) {
                        xn("handleChangeSelection", q),
                        cn(ve => ke(ke({}, ve), {}, {
                            selection: q
                        }))
                    }
                    function gn(q) {
                        xn("handleChangeMode", q),
                        cn(ve => ke(ke({}, ve), {}, {
                            mode: q
                        }))
                    }
                    function cn(q) {
                        var ve = q(gt(r(G)));
                        h(G, [...rn(r(G)), ve])
                    }
                    function Dn(q) {
                        h(xe, q.toString()),
                        console.error(q)
                    }
                    function no(q) {
                        var ve, {content: qe, path: Ie} = q;
                        xn("handleJSONEditorModal", {
                            content: qe,
                            path: Ie
                        });
                        var Me = {
                            mode: Le(qe),
                            content: qe,
                            selection: void 0,
                            relativePath: Ie
                        };
                        h(G, [...r(G), Me]),
                        tr(),
                        (ve = r(Pr)) === null || ve === void 0 || ve.focus()
                    }
                    function O(q) {
                        q.focus()
                    }
                    ao( () => {
                        var q;
                        (q = r(Pr)) === null || q === void 0 || q.focus()
                    }
                    ),
                    V( () => r(G), () => {
                        h(zt, gt(r(G)) || E)
                    }
                    ),
                    V( () => r(G), () => {
                        h(Mn, r(G).flatMap(q => q.relativePath))
                    }
                    ),
                    V( () => (r(Mn),
                    xo), () => {
                        h(ir, vn(r(Mn)) ? "(document root)" : xo(r(Mn)))
                    }
                    ),
                    V( () => b(Ct()), () => {
                        h(Ft, Ji(Ct().parse))
                    }
                    ),
                    An(),
                    Rt(!0),
                    ru(en, {
                        onClose: Ze,
                        className: "jse-jsoneditor-modal",
                        get fullscreen() {
                            return r(to)
                        },
                        children: (q, ve) => {
                            var qe = S4();
                            Nv(z(qe), {
                                children: (Ie, Me) => {
                                    var jt = _4()
                                      , yt = ht(jt)
                                      , tn = pe( () => (r(G),
                                    N( () => r(G).length > 1 ? " (".concat(r(G).length, ")") : "")));
                                    Mc(yt, {
                                        get title() {
                                            var xt;
                                            return "Edit nested content ".concat((xt = r(tn)) !== null && xt !== void 0 ? xt : "")
                                        },
                                        fullScreenButton: !0,
                                        onClose: Ze,
                                        get fullscreen() {
                                            return r(to)
                                        },
                                        set fullscreen(xt) {
                                            h(to, xt)
                                        },
                                        $$legacy: !0
                                    });
                                    var Un = B(yt, 2)
                                      , dn = B(z(Un), 2)
                                      , Jn = B(dn, 4);
                                    nr($g(z(Jn), {
                                        get externalMode() {
                                            return r(zt),
                                            N( () => r(zt).mode)
                                        },
                                        get content() {
                                            return r(zt),
                                            N( () => r(zt).content)
                                        },
                                        get selection() {
                                            return r(zt),
                                            N( () => r(zt).selection)
                                        },
                                        get readOnly() {
                                            return Te()
                                        },
                                        get indentation() {
                                            return vt()
                                        },
                                        get tabSize() {
                                            return sn()
                                        },
                                        get truncateTextSize() {
                                            return Jt()
                                        },
                                        get statusBar() {
                                            return sr()
                                        },
                                        get askToFormat() {
                                            return Nn()
                                        },
                                        get mainMenuBar() {
                                            return Wn()
                                        },
                                        get navigationBar() {
                                            return Zn()
                                        },
                                        get escapeControlCharacters() {
                                            return Nt()
                                        },
                                        get escapeUnicodeCharacters() {
                                            return Pn()
                                        },
                                        get flattenColumns() {
                                            return eo()
                                        },
                                        get parser() {
                                            return Ct()
                                        },
                                        get parseMemoizeOne() {
                                            return r(Ft)
                                        },
                                        get validator() {
                                            return pr()
                                        },
                                        get validationParser() {
                                            return Ge()
                                        },
                                        get pathParser() {
                                            return un()
                                        },
                                        insideModal: !0,
                                        onError: Dn,
                                        onChange: et,
                                        onChangeMode: gn,
                                        onSelect: Qt,
                                        get onRenderValue() {
                                            return wn()
                                        },
                                        get onClassName() {
                                            return Ln()
                                        },
                                        get onFocus() {
                                            return Uo
                                        },
                                        get onBlur() {
                                            return Uo
                                        },
                                        get onRenderMenu() {
                                            return uo()
                                        },
                                        get onRenderContextMenu() {
                                            return kn()
                                        },
                                        get onSortModal() {
                                            return yo()
                                        },
                                        get onTransformModal() {
                                            return Er()
                                        },
                                        onJSONEditorModal: no,
                                        $$legacy: !0
                                    }), xt => h(Pr, xt), () => r(Pr));
                                    var Ot = z(B(Jn, 2))
                                      , gr = xt => {
                                        var tt = j4()
                                          , Bt = z(tt);
                                        Ee( () => lt(Bt, r(xe))),
                                        L(xt, tt)
                                    }
                                    ;
                                    ie(Ot, xt => {
                                        r(xe) && xt(gr)
                                    }
                                    );
                                    var $n = B(Ot, 2)
                                      , lr = xt => {
                                        var tt = y4();
                                        fn(z(tt), {
                                            get data() {
                                                return Gk
                                            }
                                        }),
                                        me("click", tt, Ze),
                                        L(xt, tt)
                                    }
                                    ;
                                    ie($n, xt => {
                                        r(G),
                                        N( () => r(G).length > 1) && xt(lr)
                                    }
                                    );
                                    var Cn = B($n, 2)
                                      , bt = xt => {
                                        var tt = w4();
                                        Gr( () => me("click", tt, Je)),
                                        lo(tt, Bt => O?.(Bt)),
                                        L(xt, tt)
                                    }
                                      , mn = xt => {
                                        var tt = k4();
                                        me("click", tt, Ze),
                                        L(xt, tt)
                                    }
                                    ;
                                    ie(Cn, xt => {
                                        Te() ? xt(mn, !1) : xt(bt)
                                    }
                                    ),
                                    Ee( () => Zi(dn, r(ir))),
                                    L(Ie, jt)
                                }
                                ,
                                $$slots: {
                                    default: !0
                                }
                            }),
                            L(q, qe)
                        }
                        ,
                        $$slots: {
                            default: !0
                        }
                    }),
                    st()
                }
                )(pt, pi( () => r(re), {
                    onClose: () => {
                        var en;
                        (en = r(re)) === null || en === void 0 || en.onClose(),
                        h(re, void 0)
                    }
                }))
            }
            ;
            ie(Pt, pt => {
                r(re) && pt(In)
            }
            ),
            Ee(pt => te = At(at, 1, "jse-main svelte-57bmz4", null, te, pt), [ () => ({
                "jse-focus": r(A)
            })], pe),
            me("keydown", at, Or),
            L(be, Re)
        }
        ,
        $$slots: {
            default: !0
        }
    }),
    Et(t, "get", Q),
    Et(t, "set", dt),
    Et(t, "update", Ye),
    Et(t, "patch", he),
    Et(t, "select", ft),
    Et(t, "expand", Zt),
    Et(t, "collapse", Tn),
    Et(t, "transform", _n),
    Et(t, "validate", Xt),
    Et(t, "acceptAutoRepair", Rn),
    Et(t, "scrollTo", on),
    Et(t, "findElement", St),
    Et(t, "focus", Ht),
    Et(t, "refresh", hn),
    Et(t, "updateProps", He),
    Et(t, "destroy", Yt),
    st({
        get: Q,
        set: dt,
        update: Ye,
        patch: he,
        select: ft,
        expand: Zt,
        collapse: Tn,
        transform: _n,
        validate: Xt,
        acceptAutoRepair: Rn,
        scrollTo: on,
        findElement: St,
        focus: Ht,
        refresh: hn,
        updateProps: He,
        destroy: Yt
    })
}
function P4(e) {
    var {target: t, props: n} = e
      , o = nR(M4, {
        target: t,
        props: n
    });
    return o.destroy = wt(function*() {
        return function(a, i) {
            var s = Pv.get(a);
            return s ? (Pv.delete(a),
            s(i)) : Promise.resolve()
        }(o)
    }),
    tr(),
    o
}
const z4 = {
    $schema: "http://json-schema.org/draft-07/schema#",
    $id: "http://json-schema.org/draft-07/schema#",
    title: "Core schema meta-schema",
    definitions: {
        schemaArray: {
            type: "array",
            minItems: 1,
            items: {
                $ref: "#"
            }
        },
        nonNegativeInteger: {
            type: "integer",
            minimum: 0
        },
        nonNegativeIntegerDefault0: {
            allOf: [{
                $ref: "#/definitions/nonNegativeInteger"
            }, {
                default: 0
            }]
        },
        simpleTypes: {
            enum: ["array", "boolean", "integer", "null", "number", "object", "string"]
        },
        stringArray: {
            type: "array",
            items: {
                type: "string"
            },
            uniqueItems: !0,
            default: []
        }
    },
    type: ["object", "boolean"],
    properties: {
        $id: {
            type: "string",
            format: "uri-reference"
        },
        $schema: {
            type: "string",
            format: "uri"
        },
        $ref: {
            type: "string",
            format: "uri-reference"
        },
        $comment: {
            type: "string"
        },
        title: {
            type: "string"
        },
        description: {
            type: "string"
        },
        default: !0,
        readOnly: {
            type: "boolean",
            default: !1
        },
        examples: {
            type: "array",
            items: !0
        },
        multipleOf: {
            type: "number",
            exclusiveMinimum: 0
        },
        maximum: {
            type: "number"
        },
        exclusiveMaximum: {
            type: "number"
        },
        minimum: {
            type: "number"
        },
        exclusiveMinimum: {
            type: "number"
        },
        maxLength: {
            $ref: "#/definitions/nonNegativeInteger"
        },
        minLength: {
            $ref: "#/definitions/nonNegativeIntegerDefault0"
        },
        pattern: {
            type: "string",
            format: "regex"
        },
        additionalItems: {
            $ref: "#"
        },
        items: {
            anyOf: [{
                $ref: "#"
            }, {
                $ref: "#/definitions/schemaArray"
            }],
            default: !0
        },
        maxItems: {
            $ref: "#/definitions/nonNegativeInteger"
        },
        minItems: {
            $ref: "#/definitions/nonNegativeIntegerDefault0"
        },
        uniqueItems: {
            type: "boolean",
            default: !1
        },
        contains: {
            $ref: "#"
        },
        maxProperties: {
            $ref: "#/definitions/nonNegativeInteger"
        },
        minProperties: {
            $ref: "#/definitions/nonNegativeIntegerDefault0"
        },
        required: {
            $ref: "#/definitions/stringArray"
        },
        additionalProperties: {
            $ref: "#"
        },
        definitions: {
            type: "object",
            additionalProperties: {
                $ref: "#"
            },
            default: {}
        },
        properties: {
            type: "object",
            additionalProperties: {
                $ref: "#"
            },
            default: {}
        },
        patternProperties: {
            type: "object",
            additionalProperties: {
                $ref: "#"
            },
            propertyNames: {
                format: "regex"
            },
            default: {}
        },
        dependencies: {
            type: "object",
            additionalProperties: {
                anyOf: [{
                    $ref: "#"
                }, {
                    $ref: "#/definitions/stringArray"
                }]
            }
        },
        propertyNames: {
            $ref: "#"
        },
        const: !0,
        enum: {
            type: "array",
            items: !0,
            minItems: 1,
            uniqueItems: !0
        },
        type: {
            anyOf: [{
                $ref: "#/definitions/simpleTypes"
            }, {
                type: "array",
                items: {
                    $ref: "#/definitions/simpleTypes"
                },
                minItems: 1,
                uniqueItems: !0
            }]
        },
        format: {
            type: "string"
        },
        contentMediaType: {
            type: "string"
        },
        contentEncoding: {
            type: "string"
        },
        if: {
            $ref: "#"
        },
        then: {
            $ref: "#"
        },
        else: {
            $ref: "#"
        },
        allOf: {
            $ref: "#/definitions/schemaArray"
        },
        anyOf: {
            $ref: "#/definitions/schemaArray"
        },
        oneOf: {
            $ref: "#/definitions/schemaArray"
        },
        not: {
            $ref: "#"
        }
    },
    default: !0
}
  , Fg = vm("jsoneditoronline:createValidator");
function T4({schema: e, schemaDefinitions: t, parser: n}) {
    if (e)
        try {
            Fg("createAjvValidator", {
                schema: e,
                schemaDefinitions: t
            });
            const o = Gs(n, JSON) ? e : Bg(e, n)
              , a = t ? Gs(n, JSON) ? t : Bg(t, n) : void 0;
            return hT({
                schema: o,
                schemaDefinitions: a,
                onCreateAjv: () => {
                    const i = e.$schema === "https://json-schema.org/draft/2020-12/schema" ? pk : hk
                      , s = new i({
                        allErrors: !0,
                        verbose: !0,
                        strict: !1,
                        $data: !0
                    });
                    return s.addMetaSchema(gk),
                    s.addMetaSchema(z4),
                    mk(s),
                    s
                }
            })
        } catch (o) {
            return Fg("failed to compile validator:", String(o)),
            () => [{
                path: [],
                message: String(o),
                severity: zo.error
            }]
        }
    else
        return
}
function Bg(e, t) {
    const n = t.stringify(e);
    return n !== void 0 ? JSON.parse(n) : void 0
}
const I4 = {
    prefix: "fas",
    iconName: "jsoneditor-smart-format",
    icon: [512, 512, [], "", "m 448,512 -15,-49 -49,-15 49,-15 15,-49 15,49 49,15 -45,15 zM 335,512 294,376 156,335 292,294 333,156 374,292 512,333 376,374 Z M 0,32 V 96 H 512 V 32 Z M 0,288 v 64 h 128 v -64 Z M 0,160 v 64 h 256 v -64 Z "]
}
  , N4 = {
    id: "lossless-jsonquery",
    name: "Lossless JSONQuery",
    description: bc.description,
    createQuery: bc.createQuery,
    executeQuery: L4
};
function L4(e, t, n) {
    if (Gs(n, JSON))
        return bc.executeQuery(e, t, n);
    const o = {
        functions: P1
    };
    return t.trim() !== "" ? mf(e, t, o) : e
}
const P1 = {
    eq: fs(qi),
    ne: fs( (e, t) => !qi(e, t)),
    gt: fs(Hg),
    gte: fs( (e, t) => qi(e, t) || Hg(e, t)),
    lt: fs(Vg),
    lte: fs( (e, t) => qi(e, t) || Vg(e, t)),
    sort: (e=["get"], t) => {
        const n = Ed(e)
          , o = t === "desc" ? -1 : 1;
        function a(i, s) {
            const l = n(i)
              , u = n(s);
            if (typeof l != typeof u) {
                const d = Dl[typeof l] ?? Wg
                  , c = Dl[typeof u] ?? Wg;
                return d > c ? o : d < c ? -o : 0
            }
            if (typeof l in Dl)
                return l > u ? o : l < u ? -o : 0;
            if ($o(l)) {
                if ($o(u))
                    return Fo(l.value, u.value) * o;
                if (typeof u == "number")
                    return Fo(l.value, String(u)) * o
            }
            return typeof l == "number" && $o(u) ? Fo(String(l), u.value) * o : 0
        }
        return i => i.slice().sort(a)
    }
    ,
    uniq: () => e => {
        const t = [];
        for (const n of e)
            t.find(o => qi(o, n)) || t.push(n);
        return t
    }
    ,
    in: (e, t) => {
        const n = Ed(e)
          , o = Ed(t);
        return a => {
            const i = n(a);
            return !!o(a).find(l => qi(l, i))
        }
    }
    ,
    "not in": (e, t) => {
        const n = P1.in(e, t);
        return o => !n(o)
    }
}
  , Dl = {
    boolean: 0,
    number: 1,
    string: 2
}
  , Wg = 3;
function qi(e, t) {
    if (e === t)
        return !0;
    if ($o(e)) {
        if ($o(t))
            return Fo(e.value, t.value) === 0;
        if (typeof t == "number")
            return Fo(e.value, String(t)) === 0
    }
    return $o(t) && typeof e == "number" ? Fo(String(e), t.value) === 0 : e !== null && t !== null && typeof e == "object" && typeof t == "object" && Object.keys(e).length === Object.keys(t).length && Object.entries(e).every( ([o,a]) => qi(a, t[o]))
}
function Hg(e, t) {
    if ($o(e)) {
        if ($o(t))
            return Fo(e.value, t.value) === 1;
        if (typeof t == "number")
            return Fo(e.value, String(t)) === 1
    }
    return $o(t) && typeof e == "number" ? Fo(String(e), t.value) === 1 : typeof e == typeof t && typeof e in Dl ? e > t : !1
}
function Vg(e, t) {
    if ($o(e)) {
        if ($o(t))
            return Fo(e.value, t.value) === -1;
        if (typeof t == "number")
            return Fo(e.value, String(t)) === -1
    }
    return $o(t) && typeof e == "number" ? Fo(String(e), t.value) === -1 : typeof e == typeof t && typeof e in Dl ? e < t : !1
}
window._ = Py;
window.jsonrepair = ta;
window.Ajv = bk;
window.jsonquery = mf;
window.jmespath = mA;
window.JSONPathPlus = qn;
window.patch = P_;
const Gg = vm("jsoneditoronline:JSONEditorComponent")
  , Jg = ["id", "onJsonEditorRef", "maxLineLength", "schema"]
  , U4 = [{
    ...N4,
    name: "JSON Query"
}, xT, jT, {
    ...yT,
    name: "JavaScript"
}];
class Z4 extends zk.PureComponent {
    jsoneditor;
    schema;
    container;
    constructor(t) {
        super(t),
        this.jsoneditor = null,
        this.schema = null,
        this.container = null
    }
    memoizeValidator = Ji(T4, Wt);
    memoizeOnRenderValue = Ji(function(t) {
        return t ? function(o) {
            return pT(o, t) || Bv(o)
        }
        : Bv
    });
    onRenderMenu(t, n) {
        let o = t;
        if (n.mode === zr.text && !n.modal && !this.props.readOnly) {
            const a = t.findIndex(s => ma(s) && s.className === "jse-compact");
            if (a === -1) {
                console.error("Cannot find button Compact");
                return
            }
            const i = t[a].disabled;
            o = [...o],
            o.splice(a, 0, {
                type: "button",
                icon: I4,
                title: "Smart format JSON: " + xk + " (Ctrl+J)",
                className: "jse-format-smart",
                onClick: this.handleSmartFormat.bind(this),
                disabled: i
            })
        }
        return this.props.onRenderMenu?.(o, n) || o
    }
    componentDidMount() {
        if (Gg("componentDidMount"),
        !this.container)
            throw new Error("container not found");
        this.jsoneditor = P4({
            target: this.container,
            props: {
                onError: t => {
                    console.error(t),
                    Qp(Od.jsx("div", {
                        className: "parse-error",
                        children: Od.jsx("code", {
                            children: t.toString()
                        })
                    }))
                }
                ,
                validator: this.memoizeValidator({
                    schema: this.props.schema ?? null,
                    parser: this.props.parser
                }),
                onRenderValue: this.memoizeOnRenderValue(this.props.schema),
                queryLanguages: U4,
                ...ic(this.props, Jg),
                onRenderMenu: this.onRenderMenu.bind(this)
            }
        }),
        this.props.onJsonEditorRef && this.jsoneditor && this.props.onJsonEditorRef(this.jsoneditor),
        this.props.id && (window.jsoneditors || (window.jsoneditors = {}),
        this.jsoneditor && (window.jsoneditors[this.props.id] = this.jsoneditor))
    }
    componentDidUpdate(t) {
        if (!this.jsoneditor)
            return;
        const n = D4(ic(this.props, Jg), t);
        this.props.schema !== t.schema && (n.validator = this.memoizeValidator({
            schema: this.props.schema ?? null,
            parser: n.parser ?? JSON
        }),
        n.onRenderValue = this.memoizeOnRenderValue(this.props.schema)),
        n.onRenderMenu = this.onRenderMenu.bind(this),
        this.jsoneditor.updateProps(n)
    }
    componentWillUnmount() {
        Gg("componentWillUnmount"),
        this.jsoneditor && (this.jsoneditor.destroy().catch(console.error),
        this.jsoneditor = null,
        this.schema = null)
    }
    async handleKeyDown(t) {
        const n = t;
        n.ctrlKey && n.key === "j" && (n.preventDefault(),
        n.stopPropagation(),
        await this.handleSmartFormat())
    }
    async handleSmartFormat() {
        if (!this.jsoneditor)
            return;
        const {onChange: t, indentation: n, parser: o, maxLineLength: a} = this.props
          , i = this.jsoneditor.get()
          , s = Rw(i, n, o).text;
        if (s.length > jk) {
            Qp(wk);
            return
        }
        const l = await R_(s, n || 2, a);
        t ? t({
            text: l
        }) : this.jsoneditor.update({
            text: l
        })
    }
    render() {
        return Od.jsx("div", {
            onKeyDown: this.handleKeyDown.bind(this),
            className: yk("jsoneditor-react-container", this.props.className, {
                "read-only": this.props.readOnly
            }),
            ref: t => {
                this.container = t
            }
        })
    }
}
function D4(e, t) {
    return Object.fromEntries(Object.entries(e).filter( ([n,o]) => o !== t[n]))
}
export {Z4 as J, zr as X, Rf as a, T4 as c, _0 as o, ty as t, uy as u};
