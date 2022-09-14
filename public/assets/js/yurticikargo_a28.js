function css_browser_selector(n) {
    var i = n.toLowerCase(),
        t = function(n) {
            return i.indexOf(n) > -1
        },
        r = "gecko",
        f = "webkit",
        o = "safari",
        e = "opera",
        u = "mobile",
        s = document.documentElement,
        h = [!/opera|webtv/i.test(i) && /msie\s(\d)/.test(i) ? "ie ie" + RegExp.$1 : t("firefox/2") ? r + " ff2" : t("firefox/3.5") ? r + " ff3 ff3_5" : t("firefox/3.6") ? r + " ff3 ff3_6" : t("firefox/3") ? r + " ff3" : t("gecko/") ? r : t("opera") ? e + (/version\/(\d+)/.test(i) ? " " + e + RegExp.$1 : /opera(\s|\/)(\d+)/.test(i) ? " " + e + RegExp.$2 : "") : t("konqueror") ? "konqueror" : t("blackberry") ? u + " blackberry" : t("android") ? u + " android" : t("chrome") ? f + " chrome" : t("iron") ? f + " iron" : t("applewebkit/") ? f + " " + o + (/version\/(\d+)/.test(i) ? " " + o + RegExp.$1 : "") : t("mozilla/") ? r : "", t("j2me") ? u + " j2me" : t("iphone") ? u + " iphone" : t("ipod") ? u + " ipod" : t("ipad") ? u + " ipad" : t("mac") ? "mac" : t("darwin") ? "mac" : t("webtv") ? "webtv" : t("win") ? "win" + (t("windows nt 6.0") ? " vista" : "") : t("freebsd") ? "freebsd" : t("x11") || t("linux") ? "linux" : "", "js"];
    return c = h.join(" "), s.className += " " + c, c
}
css_browser_selector(navigator.userAgent);;
var _serviceProvider = {
    shipmentsTracking: {
        getDetail: function(n, t) {
            return $.get("/service/shipmentstracking?id=" + n + "&language=" + t)
        }
    },
    shipmentsTrackingSearch: {
        getDetail: function(n, t) {
            return $.get("/service/shipmentstrackingsearch?id=" + n + "&language=" + t)
        }
    },
    shipmentsTrackingMovement: {
        getDetail: function(n, t) {
            return $.get("/service/shipmenttrackingmovement?id=" + n + "&language=" + t)
        }
    },
    shipmentsTrackingAwb: {
        getDetail: function(n, t) {
            return $.get("/service/shipmentstrackingawb?id=" + n + "&language=" + t)
        }
    },
    getCountry: {
        getDetail: function(n) {
            return $.get("/service/getcountry?language=" + n)
        }
    },
    postPricing: {
        post: function(n, t) {
            return $.post("/service/postpricing?language=" + t, n)
        }
    },
    awbPostPricing: {
        post: function(n, t) {
            return $.post("/service/awbpostpricing?language=" + t, n)
        }
    },
    geoDistricts: {
        getDetail: function(n, t, i, r) {
            return $.get("/service/geodistricts", {
                address: n,
                count: t,
                excludeCyprus: i,
                language: r
            })
        }
    },
    getBranchesByCityTown: {
        getDetail: function(n, t, i, r) {
            return $.get("/service/getbranchesbycitytown", {
                cityId: n,
                countyId: t,
                districtId: i,
                language: r
            })
        }
    },
    getBranches: {
        getDetail: function(n, t) {
            return $.get("/service/branches", {
                branchId: n,
                language: t
            })
        }
    },
    getCupboards: {
        getList: function(n, t, i, r) {
            return $.get("/service/cupboards", {
                cityId: n,
                townId: t,
                districtId: i,
                language: r
            })
        }
    },
    qac: {
        search: function(n, t) {
            $.post("/api/globalapi", {
                searchModel: n
            }, t)
        }
    },
    postPickupsms: {
        post: function(n, t) {
            return $.post("/service/postpickupsms?language=" + t, n)
        }
    },
    postPickupSmsVerify: {
        post: function(n, t) {
            return $.post("/service/postpickupsmsverify?language=" + t, n)
        }
    },
    getPickupOrders: {
        getDetail: function(n, t, i) {
            return $.get("/service/getpickuporders?language=" + n + "&callerGsm=" + i + "&callerUnique=" + t)
        }
    },
    getPickupPackage: {
        getDetail: function(n) {
            return $.get("/service/getpickuppackage?language=" + n)
        }
    },
    getGeoSearch: {
        getDetail: function(n, t, i) {
            return $.get("/service/getgeosearch", {
                language: i,
                address: n,
                maxResultCount: t
            })
        }
    },
    getGeoFindWorkArea: {
        getDetail: function(n, t, i) {
            return $.get("/service/getgeofindworkarea", {
                language: i,
                address: n,
                prodGroupType: t
            })
        }
    },
    getPickupWorkingDays: {
        getDetail: function(n, t) {
            return $.get("/service/getpickupworkingdays?language=" + t + "&workAreaId=" + n)
        }
    },
    getGib: {
        getDetail: function(n, t) {
            return $.get("/service/getgib?language=" + t + "&uniqueId=" + n)
        }
    },
    postPickupCreate: {
        post: function(n, t) {
            return $.post("/service/postpickupcreate?language=" + t, n)
        }
    },
    getCallTypes: {
        getDetail: function(n) {
            return $.get("/service/getcalltype?language=" + n)
        }
    },
    getContractTypes: {
        getDetail: function(n) {
            return $.get("/service/getcontracttype?language=" + n)
        }
    },
    postCallCreate: {
        postCall: function(n, t) {
            return $.post("/service/postcallcreate?language=" + t, n)
        }
    },
    postContractCreate: {
        postCall: function(n, t) {
            return $.post("/service/postcontractcreate?language=" + t, n)
        }
    },
    getGtipSearch: {
        getCall: function(n, t, i) {
            return $.get("/service/getgtipsearch", {
                language: i,
                hs_search: n,
                hs_param_type: t
            })
        }
    },
    postInvoiceInfo: {
        postInvoice: function(n, t) {
            return $.post("/service/invoiceinfo?language=" + t, n)
        }
    },
    postEArchiveInvoiceInfo: {
        postEArchiveInvoice: function(n, t) {
            return $.post("/service/archiveinvoiceinfo?language=" + t, n)
        }
    },
    sendValidationCode: {
        sendValidationCode: function(n, t) {
            return $.post("/service/sendvalidationcode?language=" + t, n)
        }
    },
    validateSmsCode: {
        validateSmsCode: function(n, t) {
            return $.post("/service/validatesmscode?language=" + t, n)
        }
    },
    forwardRequest: {
        forwardRequest: function(n, t) {
            return $.post("/service/forwardrequest?language=" + t, n)
        }
    },
    getDeliveryInfo: {
        getDelivery: function(n, t, i) {
            return $.get("/service/getdeliveryawbinfo?language=" + i + "&departureCityId=" + n + "&arrivalCountryId=" + t)
        }
    },
    getBranchProduct: {
        getDetail: function(n, t) {
            return $.get("/service/branchproduct?language=" + t + "&branchId=" + n)
        }
    },
    getBranchProductWorkingTimes: {
        getDetail: function(n, t, i, r) {
            return $.get("/service/branchproductworkingtimes?language=" + r + "&branchId=" + n + "&productId=" + t + "&dateTime=" + i)
        }
    },
    postDeliveryInfo: {
        postDelivery: function(n, t) {
            return $.post("/service/postdeliveryinfo?language=" + t, n)
        }
    },
    getBranchesRegion: {
        getDetail: function(n, t, i) {
            return $.get("/service/getbranchesregion?language=" + i + "&cityId=" + n + "&countyId=" + t)
        }
    },
    getRegionalDirectorates: {
        getDetail: function(n) {
            return $.get("/service/getregionaldirectorates?language=" + n)
        }
    }
};;
! function(n, t) {
    "use strict";
    "object" == typeof module && "object" == typeof module.exports ? module.exports = n.document ? t(n, !0) : function(n) {
        if (!n.document) throw new Error("jQuery requires a window with a document");
        return t(n)
    } : t(n)
}("undefined" != typeof window ? window : this, function(n, t) {
    "use strict";
    var k = [],
        f = n.document,
        af = Object.getPrototypeOf,
        b = k.slice,
        sr = k.concat,
        ai = k.push,
        ni = k.indexOf,
        ti = {},
        hr = ti.toString,
        ii = ti.hasOwnProperty,
        cr = ii.toString,
        vf = cr.call(Object),
        e = {},
        u = function(n) {
            return "function" == typeof n && "number" != typeof n.nodeType
        },
        tt = function(n) {
            return null != n && n === n.window
        },
        yf = {
            type: !0,
            src: !0,
            nonce: !0,
            noModule: !0
        };

    function lr(n, t, i) {
        var r, e, u = (i = i || f).createElement("script");
        if (u.text = n, t)
            for (r in yf)(e = t[r] || t.getAttribute && t.getAttribute(r)) && u.setAttribute(r, e);
        i.head.appendChild(u).parentNode.removeChild(u)
    }

    function it(n) {
        return null == n ? n + "" : "object" == typeof n || "function" == typeof n ? ti[hr.call(n)] || "object" : typeof n
    }
    var ar = "3.4.1",
        i = function(n, t) {
            return new i.fn.init(n, t)
        },
        pf = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;

    function vi(n) {
        var t = !!n && "length" in n && n.length,
            i = it(n);
        return !u(n) && !tt(n) && ("array" === i || 0 === t || "number" == typeof t && 0 < t && t - 1 in n)
    }
    i.fn = i.prototype = {
        jquery: ar,
        constructor: i,
        length: 0,
        toArray: function() {
            return b.call(this)
        },
        get: function(n) {
            return null == n ? b.call(this) : n < 0 ? this[n + this.length] : this[n]
        },
        pushStack: function(n) {
            var t = i.merge(this.constructor(), n);
            return t.prevObject = this, t
        },
        each: function(n) {
            return i.each(this, n)
        },
        map: function(n) {
            return this.pushStack(i.map(this, function(t, i) {
                return n.call(t, i, t)
            }))
        },
        slice: function() {
            return this.pushStack(b.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        eq: function(n) {
            var i = this.length,
                t = +n + (n < 0 ? i : 0);
            return this.pushStack(0 <= t && t < i ? [this[t]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor()
        },
        push: ai,
        sort: k.sort,
        splice: k.splice
    };
    i.extend = i.fn.extend = function() {
        var s, f, e, t, o, c, n = arguments[0] || {},
            r = 1,
            l = arguments.length,
            h = !1;
        for ("boolean" == typeof n && (h = n, n = arguments[r] || {}, r++), "object" == typeof n || u(n) || (n = {}), r === l && (n = this, r--); r < l; r++)
            if (null != (s = arguments[r]))
                for (f in s) t = s[f], "__proto__" !== f && n !== t && (h && t && (i.isPlainObject(t) || (o = Array.isArray(t))) ? (e = n[f], c = o && !Array.isArray(e) ? [] : o || i.isPlainObject(e) ? e : {}, o = !1, n[f] = i.extend(h, c, t)) : void 0 !== t && (n[f] = t));
        return n
    };
    i.extend({
        expando: "jQuery" + (ar + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(n) {
            throw new Error(n);
        },
        noop: function() {},
        isPlainObject: function(n) {
            var t, i;
            return !(!n || "[object Object]" !== hr.call(n)) && (!(t = af(n)) || "function" == typeof(i = ii.call(t, "constructor") && t.constructor) && cr.call(i) === vf)
        },
        isEmptyObject: function(n) {
            for (var t in n) return !1;
            return !0
        },
        globalEval: function(n, t) {
            lr(n, {
                nonce: t && t.nonce
            })
        },
        each: function(n, t) {
            var r, i = 0;
            if (vi(n)) {
                for (r = n.length; i < r; i++)
                    if (!1 === t.call(n[i], i, n[i])) break
            } else
                for (i in n)
                    if (!1 === t.call(n[i], i, n[i])) break;
            return n
        },
        trim: function(n) {
            return null == n ? "" : (n + "").replace(pf, "")
        },
        makeArray: function(n, t) {
            var r = t || [];
            return null != n && (vi(Object(n)) ? i.merge(r, "string" == typeof n ? [n] : n) : ai.call(r, n)), r
        },
        inArray: function(n, t, i) {
            return null == t ? -1 : ni.call(t, n, i)
        },
        merge: function(n, t) {
            for (var u = +t.length, i = 0, r = n.length; i < u; i++) n[r++] = t[i];
            return n.length = r, n
        },
        grep: function(n, t, i) {
            for (var u = [], r = 0, f = n.length, e = !i; r < f; r++) !t(n[r], r) !== e && u.push(n[r]);
            return u
        },
        map: function(n, t, i) {
            var e, u, r = 0,
                f = [];
            if (vi(n))
                for (e = n.length; r < e; r++) null != (u = t(n[r], r, i)) && f.push(u);
            else
                for (r in n) null != (u = t(n[r], r, i)) && f.push(u);
            return sr.apply([], f)
        },
        guid: 1,
        support: e
    });
    "function" == typeof Symbol && (i.fn[Symbol.iterator] = k[Symbol.iterator]);
    i.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(n, t) {
        ti["[object " + t + "]"] = t.toLowerCase()
    });
    var d = function(n) {
        var rt, e, t, st, oi, ft, kt, si, ht, w, ut, b, i, s, h, o, d, ct, et, f = "sizzle" + 1 * new Date,
            c = n.document,
            v = 0,
            gi = 0,
            hi = yt(),
            ci = yt(),
            li = yt(),
            lt = yt(),
            dt = function(n, t) {
                return n === t && (ut = !0), 0
            },
            nr = {}.hasOwnProperty,
            g = [],
            tr = g.pop,
            ir = g.push,
            k = g.push,
            ai = g.slice,
            nt = function(n, t) {
                for (var i = 0, r = n.length; i < r; i++)
                    if (n[i] === t) return i;
                return -1
            },
            gt = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            r = "[\\x20\\t\\r\\n\\f]",
            tt = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
            vi = "\\[" + r + "*(" + tt + ")(?:" + r + "*([*^$|!~]?=)" + r + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + tt + "))|)" + r + "*\\]",
            ni = ":(" + tt + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + vi + ")*)|.*)\\)|)",
            rr = new RegExp(r + "+", "g"),
            at = new RegExp("^" + r + "+|((?:^|[^\\\\])(?:\\\\.)*)" + r + "+$", "g"),
            ur = new RegExp("^" + r + "*," + r + "*"),
            fr = new RegExp("^" + r + "*([>+~]|" + r + ")" + r + "*"),
            er = new RegExp(r + "|>"),
            or = new RegExp(ni),
            sr = new RegExp("^" + tt + "$"),
            vt = {
                ID: new RegExp("^#(" + tt + ")"),
                CLASS: new RegExp("^\\.(" + tt + ")"),
                TAG: new RegExp("^(" + tt + "|[*])"),
                ATTR: new RegExp("^" + vi),
                PSEUDO: new RegExp("^" + ni),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + r + "*(even|odd|(([+-]|)(\\d*)n|)" + r + "*(?:([+-]|)" + r + "*(\\d+)|))" + r + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + gt + ")$", "i"),
                needsContext: new RegExp("^" + r + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + r + "*((?:-\\d)?\\d*)" + r + "*\\)|)(?=[^-]|$)", "i")
            },
            hr = /HTML$/i,
            cr = /^(?:input|select|textarea|button)$/i,
            lr = /^h\d$/i,
            ot = /^[^{]+\{\s*\[native \w/,
            ar = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            ti = /[+~]/,
            y = new RegExp("\\\\([\\da-f]{1,6}" + r + "?|(" + r + ")|.)", "ig"),
            p = function(n, t, i) {
                var r = "0x" + t - 65536;
                return r != r || i ? t : r < 0 ? String.fromCharCode(r + 65536) : String.fromCharCode(r >> 10 | 55296, 1023 & r | 56320)
            },
            yi = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
            pi = function(n, t) {
                return t ? "\0" === n ? "�" : n.slice(0, -1) + "\\" + n.charCodeAt(n.length - 1).toString(16) + " " : "\\" + n
            },
            wi = function() {
                b()
            },
            vr = wt(function(n) {
                return !0 === n.disabled && "fieldset" === n.nodeName.toLowerCase()
            }, {
                dir: "parentNode",
                next: "legend"
            });
        try {
            k.apply(g = ai.call(c.childNodes), c.childNodes);
            g[c.childNodes.length].nodeType
        } catch (rt) {
            k = {
                apply: g.length ? function(n, t) {
                    ir.apply(n, ai.call(t))
                } : function(n, t) {
                    for (var i = n.length, r = 0; n[i++] = t[r++];);
                    n.length = i - 1
                }
            }
        }

        function u(n, t, r, u) {
            var s, p, l, v, w, d, g, y = t && t.ownerDocument,
                a = t ? t.nodeType : 9;
            if (r = r || [], "string" != typeof n || !n || 1 !== a && 9 !== a && 11 !== a) return r;
            if (!u && ((t ? t.ownerDocument || t : c) !== i && b(t), t = t || i, h)) {
                if (11 !== a && (w = ar.exec(n)))
                    if (s = w[1]) {
                        if (9 === a) {
                            if (!(l = t.getElementById(s))) return r;
                            if (l.id === s) return r.push(l), r
                        } else if (y && (l = y.getElementById(s)) && et(t, l) && l.id === s) return r.push(l), r
                    } else {
                        if (w[2]) return k.apply(r, t.getElementsByTagName(n)), r;
                        if ((s = w[3]) && e.getElementsByClassName && t.getElementsByClassName) return k.apply(r, t.getElementsByClassName(s)), r
                    } if (e.qsa && !lt[n + " "] && (!o || !o.test(n)) && (1 !== a || "object" !== t.nodeName.toLowerCase())) {
                    if (g = n, y = t, 1 === a && er.test(n)) {
                        for ((v = t.getAttribute("id")) ? v = v.replace(yi, pi) : t.setAttribute("id", v = f), p = (d = ft(n)).length; p--;) d[p] = "#" + v + " " + pt(d[p]);
                        g = d.join(",");
                        y = ti.test(n) && ri(t.parentNode) || t
                    }
                    try {
                        return k.apply(r, y.querySelectorAll(g)), r
                    } catch (t) {
                        lt(n, !0)
                    } finally {
                        v === f && t.removeAttribute("id")
                    }
                }
            }
            return si(n.replace(at, "$1"), t, r, u)
        }

        function yt() {
            var n = [];
            return function i(r, u) {
                return n.push(r + " ") > t.cacheLength && delete i[n.shift()], i[r + " "] = u
            }
        }

        function l(n) {
            return n[f] = !0, n
        }

        function a(n) {
            var t = i.createElement("fieldset");
            try {
                return !!n(t)
            } catch (n) {
                return !1
            } finally {
                t.parentNode && t.parentNode.removeChild(t);
                t = null
            }
        }

        function ii(n, i) {
            for (var r = n.split("|"), u = r.length; u--;) t.attrHandle[r[u]] = i
        }

        function bi(n, t) {
            var i = t && n,
                r = i && 1 === n.nodeType && 1 === t.nodeType && n.sourceIndex - t.sourceIndex;
            if (r) return r;
            if (i)
                while (i = i.nextSibling)
                    if (i === t) return -1;
            return n ? 1 : -1
        }

        function yr(n) {
            return function(t) {
                return "input" === t.nodeName.toLowerCase() && t.type === n
            }
        }

        function pr(n) {
            return function(t) {
                var i = t.nodeName.toLowerCase();
                return ("input" === i || "button" === i) && t.type === n
            }
        }

        function ki(n) {
            return function(t) {
                return "form" in t ? t.parentNode && !1 === t.disabled ? "label" in t ? "label" in t.parentNode ? t.parentNode.disabled === n : t.disabled === n : t.isDisabled === n || t.isDisabled !== !n && vr(t) === n : t.disabled === n : "label" in t && t.disabled === n
            }
        }

        function it(n) {
            return l(function(t) {
                return t = +t, l(function(i, r) {
                    for (var u, f = n([], i.length, t), e = f.length; e--;) i[u = f[e]] && (i[u] = !(r[u] = i[u]))
                })
            })
        }

        function ri(n) {
            return n && "undefined" != typeof n.getElementsByTagName && n
        }
        for (rt in e = u.support = {}, oi = u.isXML = function(n) {
                var i = n.namespaceURI,
                    t = (n.ownerDocument || n).documentElement;
                return !hr.test(i || t && t.nodeName || "HTML")
            }, b = u.setDocument = function(n) {
                var v, u, l = n ? n.ownerDocument || n : c;
                return l !== i && 9 === l.nodeType && l.documentElement && (s = (i = l).documentElement, h = !oi(i), c !== i && (u = i.defaultView) && u.top !== u && (u.addEventListener ? u.addEventListener("unload", wi, !1) : u.attachEvent && u.attachEvent("onunload", wi)), e.attributes = a(function(n) {
                    return n.className = "i", !n.getAttribute("className")
                }), e.getElementsByTagName = a(function(n) {
                    return n.appendChild(i.createComment("")), !n.getElementsByTagName("*").length
                }), e.getElementsByClassName = ot.test(i.getElementsByClassName), e.getById = a(function(n) {
                    return s.appendChild(n).id = f, !i.getElementsByName || !i.getElementsByName(f).length
                }), e.getById ? (t.filter.ID = function(n) {
                    var t = n.replace(y, p);
                    return function(n) {
                        return n.getAttribute("id") === t
                    }
                }, t.find.ID = function(n, t) {
                    if ("undefined" != typeof t.getElementById && h) {
                        var i = t.getElementById(n);
                        return i ? [i] : []
                    }
                }) : (t.filter.ID = function(n) {
                    var t = n.replace(y, p);
                    return function(n) {
                        var i = "undefined" != typeof n.getAttributeNode && n.getAttributeNode("id");
                        return i && i.value === t
                    }
                }, t.find.ID = function(n, t) {
                    if ("undefined" != typeof t.getElementById && h) {
                        var r, u, f, i = t.getElementById(n);
                        if (i) {
                            if ((r = i.getAttributeNode("id")) && r.value === n) return [i];
                            for (f = t.getElementsByName(n), u = 0; i = f[u++];)
                                if ((r = i.getAttributeNode("id")) && r.value === n) return [i]
                        }
                        return []
                    }
                }), t.find.TAG = e.getElementsByTagName ? function(n, t) {
                    return "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(n) : e.qsa ? t.querySelectorAll(n) : void 0
                } : function(n, t) {
                    var i, r = [],
                        f = 0,
                        u = t.getElementsByTagName(n);
                    if ("*" === n) {
                        while (i = u[f++]) 1 === i.nodeType && r.push(i);
                        return r
                    }
                    return u
                }, t.find.CLASS = e.getElementsByClassName && function(n, t) {
                    if ("undefined" != typeof t.getElementsByClassName && h) return t.getElementsByClassName(n)
                }, d = [], o = [], (e.qsa = ot.test(i.querySelectorAll)) && (a(function(n) {
                    s.appendChild(n).innerHTML = "<a id='" + f + "'><\/a><select id='" + f + "-\r\\' msallowcapture=''><option selected=''><\/option><\/select>";
                    n.querySelectorAll("[msallowcapture^='']").length && o.push("[*^$]=" + r + "*(?:''|\"\")");
                    n.querySelectorAll("[selected]").length || o.push("\\[" + r + "*(?:value|" + gt + ")");
                    n.querySelectorAll("[id~=" + f + "-]").length || o.push("~=");
                    n.querySelectorAll(":checked").length || o.push(":checked");
                    n.querySelectorAll("a#" + f + "+*").length || o.push(".#.+[+~]")
                }), a(function(n) {
                    n.innerHTML = "<a href='' disabled='disabled'><\/a><select disabled='disabled'><option/><\/select>";
                    var t = i.createElement("input");
                    t.setAttribute("type", "hidden");
                    n.appendChild(t).setAttribute("name", "D");
                    n.querySelectorAll("[name=d]").length && o.push("name" + r + "*[*^$|!~]?=");
                    2 !== n.querySelectorAll(":enabled").length && o.push(":enabled", ":disabled");
                    s.appendChild(n).disabled = !0;
                    2 !== n.querySelectorAll(":disabled").length && o.push(":enabled", ":disabled");
                    n.querySelectorAll("*,:x");
                    o.push(",.*:")
                })), (e.matchesSelector = ot.test(ct = s.matches || s.webkitMatchesSelector || s.mozMatchesSelector || s.oMatchesSelector || s.msMatchesSelector)) && a(function(n) {
                    e.disconnectedMatch = ct.call(n, "*");
                    ct.call(n, "[s!='']:x");
                    d.push("!=", ni)
                }), o = o.length && new RegExp(o.join("|")), d = d.length && new RegExp(d.join("|")), v = ot.test(s.compareDocumentPosition), et = v || ot.test(s.contains) ? function(n, t) {
                    var r = 9 === n.nodeType ? n.documentElement : n,
                        i = t && t.parentNode;
                    return n === i || !(!i || 1 !== i.nodeType || !(r.contains ? r.contains(i) : n.compareDocumentPosition && 16 & n.compareDocumentPosition(i)))
                } : function(n, t) {
                    if (t)
                        while (t = t.parentNode)
                            if (t === n) return !0;
                    return !1
                }, dt = v ? function(n, t) {
                    if (n === t) return ut = !0, 0;
                    var r = !n.compareDocumentPosition - !t.compareDocumentPosition;
                    return r || (1 & (r = (n.ownerDocument || n) === (t.ownerDocument || t) ? n.compareDocumentPosition(t) : 1) || !e.sortDetached && t.compareDocumentPosition(n) === r ? n === i || n.ownerDocument === c && et(c, n) ? -1 : t === i || t.ownerDocument === c && et(c, t) ? 1 : w ? nt(w, n) - nt(w, t) : 0 : 4 & r ? -1 : 1)
                } : function(n, t) {
                    if (n === t) return ut = !0, 0;
                    var r, u = 0,
                        o = n.parentNode,
                        s = t.parentNode,
                        f = [n],
                        e = [t];
                    if (!o || !s) return n === i ? -1 : t === i ? 1 : o ? -1 : s ? 1 : w ? nt(w, n) - nt(w, t) : 0;
                    if (o === s) return bi(n, t);
                    for (r = n; r = r.parentNode;) f.unshift(r);
                    for (r = t; r = r.parentNode;) e.unshift(r);
                    while (f[u] === e[u]) u++;
                    return u ? bi(f[u], e[u]) : f[u] === c ? -1 : e[u] === c ? 1 : 0
                }), i
            }, u.matches = function(n, t) {
                return u(n, null, null, t)
            }, u.matchesSelector = function(n, t) {
                if ((n.ownerDocument || n) !== i && b(n), e.matchesSelector && h && !lt[t + " "] && (!d || !d.test(t)) && (!o || !o.test(t))) try {
                    var r = ct.call(n, t);
                    if (r || e.disconnectedMatch || n.document && 11 !== n.document.nodeType) return r
                } catch (n) {
                    lt(t, !0)
                }
                return 0 < u(t, i, null, [n]).length
            }, u.contains = function(n, t) {
                return (n.ownerDocument || n) !== i && b(n), et(n, t)
            }, u.attr = function(n, r) {
                (n.ownerDocument || n) !== i && b(n);
                var f = t.attrHandle[r.toLowerCase()],
                    u = f && nr.call(t.attrHandle, r.toLowerCase()) ? f(n, r, !h) : void 0;
                return void 0 !== u ? u : e.attributes || !h ? n.getAttribute(r) : (u = n.getAttributeNode(r)) && u.specified ? u.value : null
            }, u.escape = function(n) {
                return (n + "").replace(yi, pi)
            }, u.error = function(n) {
                throw new Error("Syntax error, unrecognized expression: " + n);
            }, u.uniqueSort = function(n) {
                var r, u = [],
                    t = 0,
                    i = 0;
                if (ut = !e.detectDuplicates, w = !e.sortStable && n.slice(0), n.sort(dt), ut) {
                    while (r = n[i++]) r === n[i] && (t = u.push(i));
                    while (t--) n.splice(u[t], 1)
                }
                return w = null, n
            }, st = u.getText = function(n) {
                var r, i = "",
                    u = 0,
                    t = n.nodeType;
                if (t) {
                    if (1 === t || 9 === t || 11 === t) {
                        if ("string" == typeof n.textContent) return n.textContent;
                        for (n = n.firstChild; n; n = n.nextSibling) i += st(n)
                    } else if (3 === t || 4 === t) return n.nodeValue
                } else
                    while (r = n[u++]) i += st(r);
                return i
            }, (t = u.selectors = {
                cacheLength: 50,
                createPseudo: l,
                match: vt,
                attrHandle: {},
                find: {},
                relative: {
                    ">": {
                        dir: "parentNode",
                        first: !0
                    },
                    " ": {
                        dir: "parentNode"
                    },
                    "+": {
                        dir: "previousSibling",
                        first: !0
                    },
                    "~": {
                        dir: "previousSibling"
                    }
                },
                preFilter: {
                    ATTR: function(n) {
                        return n[1] = n[1].replace(y, p), n[3] = (n[3] || n[4] || n[5] || "").replace(y, p), "~=" === n[2] && (n[3] = " " + n[3] + " "), n.slice(0, 4)
                    },
                    CHILD: function(n) {
                        return n[1] = n[1].toLowerCase(), "nth" === n[1].slice(0, 3) ? (n[3] || u.error(n[0]), n[4] = +(n[4] ? n[5] + (n[6] || 1) : 2 * ("even" === n[3] || "odd" === n[3])), n[5] = +(n[7] + n[8] || "odd" === n[3])) : n[3] && u.error(n[0]), n
                    },
                    PSEUDO: function(n) {
                        var i, t = !n[6] && n[2];
                        return vt.CHILD.test(n[0]) ? null : (n[3] ? n[2] = n[4] || n[5] || "" : t && or.test(t) && (i = ft(t, !0)) && (i = t.indexOf(")", t.length - i) - t.length) && (n[0] = n[0].slice(0, i), n[2] = t.slice(0, i)), n.slice(0, 3))
                    }
                },
                filter: {
                    TAG: function(n) {
                        var t = n.replace(y, p).toLowerCase();
                        return "*" === n ? function() {
                            return !0
                        } : function(n) {
                            return n.nodeName && n.nodeName.toLowerCase() === t
                        }
                    },
                    CLASS: function(n) {
                        var t = hi[n + " "];
                        return t || (t = new RegExp("(^|" + r + ")" + n + "(" + r + "|$)")) && hi(n, function(n) {
                            return t.test("string" == typeof n.className && n.className || "undefined" != typeof n.getAttribute && n.getAttribute("class") || "")
                        })
                    },
                    ATTR: function(n, t, i) {
                        return function(r) {
                            var f = u.attr(r, n);
                            return null == f ? "!=" === t : !t || (f += "", "=" === t ? f === i : "!=" === t ? f !== i : "^=" === t ? i && 0 === f.indexOf(i) : "*=" === t ? i && -1 < f.indexOf(i) : "$=" === t ? i && f.slice(-i.length) === i : "~=" === t ? -1 < (" " + f.replace(rr, " ") + " ").indexOf(i) : "|=" === t && (f === i || f.slice(0, i.length + 1) === i + "-"))
                        }
                    },
                    CHILD: function(n, t, i, r, u) {
                        var s = "nth" !== n.slice(0, 3),
                            o = "last" !== n.slice(-4),
                            e = "of-type" === t;
                        return 1 === r && 0 === u ? function(n) {
                            return !!n.parentNode
                        } : function(t, i, h) {
                            var p, d, y, c, a, w, b = s !== o ? "nextSibling" : "previousSibling",
                                k = t.parentNode,
                                nt = e && t.nodeName.toLowerCase(),
                                g = !h && !e,
                                l = !1;
                            if (k) {
                                if (s) {
                                    while (b) {
                                        for (c = t; c = c[b];)
                                            if (e ? c.nodeName.toLowerCase() === nt : 1 === c.nodeType) return !1;
                                        w = b = "only" === n && !w && "nextSibling"
                                    }
                                    return !0
                                }
                                if (w = [o ? k.firstChild : k.lastChild], o && g) {
                                    for (l = (a = (p = (d = (y = (c = k)[f] || (c[f] = {}))[c.uniqueID] || (y[c.uniqueID] = {}))[n] || [])[0] === v && p[1]) && p[2], c = a && k.childNodes[a]; c = ++a && c && c[b] || (l = a = 0) || w.pop();)
                                        if (1 === c.nodeType && ++l && c === t) {
                                            d[n] = [v, a, l];
                                            break
                                        }
                                } else if (g && (l = a = (p = (d = (y = (c = t)[f] || (c[f] = {}))[c.uniqueID] || (y[c.uniqueID] = {}))[n] || [])[0] === v && p[1]), !1 === l)
                                    while (c = ++a && c && c[b] || (l = a = 0) || w.pop())
                                        if ((e ? c.nodeName.toLowerCase() === nt : 1 === c.nodeType) && ++l && (g && ((d = (y = c[f] || (c[f] = {}))[c.uniqueID] || (y[c.uniqueID] = {}))[n] = [v, l]), c === t)) break;
                                return (l -= u) === r || l % r == 0 && 0 <= l / r
                            }
                        }
                    },
                    PSEUDO: function(n, i) {
                        var e, r = t.pseudos[n] || t.setFilters[n.toLowerCase()] || u.error("unsupported pseudo: " + n);
                        return r[f] ? r(i) : 1 < r.length ? (e = [n, n, "", i], t.setFilters.hasOwnProperty(n.toLowerCase()) ? l(function(n, t) {
                            for (var e, u = r(n, i), f = u.length; f--;) n[e = nt(n, u[f])] = !(t[e] = u[f])
                        }) : function(n) {
                            return r(n, 0, e)
                        }) : r
                    }
                },
                pseudos: {
                    not: l(function(n) {
                        var t = [],
                            r = [],
                            i = kt(n.replace(at, "$1"));
                        return i[f] ? l(function(n, t, r, u) {
                            for (var e, o = i(n, null, u, []), f = n.length; f--;)(e = o[f]) && (n[f] = !(t[f] = e))
                        }) : function(n, u, f) {
                            return t[0] = n, i(t, null, f, r), t[0] = null, !r.pop()
                        }
                    }),
                    has: l(function(n) {
                        return function(t) {
                            return 0 < u(n, t).length
                        }
                    }),
                    contains: l(function(n) {
                        return n = n.replace(y, p),
                            function(t) {
                                return -1 < (t.textContent || st(t)).indexOf(n)
                            }
                    }),
                    lang: l(function(n) {
                        return sr.test(n || "") || u.error("unsupported lang: " + n), n = n.replace(y, p).toLowerCase(),
                            function(t) {
                                var i;
                                do
                                    if (i = h ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return (i = i.toLowerCase()) === n || 0 === i.indexOf(n + "-"); while ((t = t.parentNode) && 1 === t.nodeType);
                                return !1
                            }
                    }),
                    target: function(t) {
                        var i = n.location && n.location.hash;
                        return i && i.slice(1) === t.id
                    },
                    root: function(n) {
                        return n === s
                    },
                    focus: function(n) {
                        return n === i.activeElement && (!i.hasFocus || i.hasFocus()) && !!(n.type || n.href || ~n.tabIndex)
                    },
                    enabled: ki(!1),
                    disabled: ki(!0),
                    checked: function(n) {
                        var t = n.nodeName.toLowerCase();
                        return "input" === t && !!n.checked || "option" === t && !!n.selected
                    },
                    selected: function(n) {
                        return n.parentNode && n.parentNode.selectedIndex, !0 === n.selected
                    },
                    empty: function(n) {
                        for (n = n.firstChild; n; n = n.nextSibling)
                            if (n.nodeType < 6) return !1;
                        return !0
                    },
                    parent: function(n) {
                        return !t.pseudos.empty(n)
                    },
                    header: function(n) {
                        return lr.test(n.nodeName)
                    },
                    input: function(n) {
                        return cr.test(n.nodeName)
                    },
                    button: function(n) {
                        var t = n.nodeName.toLowerCase();
                        return "input" === t && "button" === n.type || "button" === t
                    },
                    text: function(n) {
                        var t;
                        return "input" === n.nodeName.toLowerCase() && "text" === n.type && (null == (t = n.getAttribute("type")) || "text" === t.toLowerCase())
                    },
                    first: it(function() {
                        return [0]
                    }),
                    last: it(function(n, t) {
                        return [t - 1]
                    }),
                    eq: it(function(n, t, i) {
                        return [i < 0 ? i + t : i]
                    }),
                    even: it(function(n, t) {
                        for (var i = 0; i < t; i += 2) n.push(i);
                        return n
                    }),
                    odd: it(function(n, t) {
                        for (var i = 1; i < t; i += 2) n.push(i);
                        return n
                    }),
                    lt: it(function(n, t, i) {
                        for (var r = i < 0 ? i + t : t < i ? t : i; 0 <= --r;) n.push(r);
                        return n
                    }),
                    gt: it(function(n, t, i) {
                        for (var r = i < 0 ? i + t : i; ++r < t;) n.push(r);
                        return n
                    })
                }
            }).pseudos.nth = t.pseudos.eq, {
                radio: !0,
                checkbox: !0,
                file: !0,
                password: !0,
                image: !0
            }) t.pseudos[rt] = yr(rt);
        for (rt in {
                submit: !0,
                reset: !0
            }) t.pseudos[rt] = pr(rt);

        function di() {}

        function pt(n) {
            for (var t = 0, r = n.length, i = ""; t < r; t++) i += n[t].value;
            return i
        }

        function wt(n, t, i) {
            var r = t.dir,
                u = t.next,
                e = u || r,
                o = i && "parentNode" === e,
                s = gi++;
            return t.first ? function(t, i, u) {
                while (t = t[r])
                    if (1 === t.nodeType || o) return n(t, i, u);
                return !1
            } : function(t, i, h) {
                var c, l, a, y = [v, s];
                if (h) {
                    while (t = t[r])
                        if ((1 === t.nodeType || o) && n(t, i, h)) return !0
                } else
                    while (t = t[r])
                        if (1 === t.nodeType || o)
                            if (l = (a = t[f] || (t[f] = {}))[t.uniqueID] || (a[t.uniqueID] = {}), u && u === t.nodeName.toLowerCase()) t = t[r] || t;
                            else {
                                if ((c = l[e]) && c[0] === v && c[1] === s) return y[2] = c[2];
                                if ((l[e] = y)[2] = n(t, i, h)) return !0
                            } return !1
            }
        }

        function ui(n) {
            return 1 < n.length ? function(t, i, r) {
                for (var u = n.length; u--;)
                    if (!n[u](t, i, r)) return !1;
                return !0
            } : n[0]
        }

        function bt(n, t, i, r, u) {
            for (var e, o = [], f = 0, s = n.length, h = null != t; f < s; f++)(e = n[f]) && (i && !i(e, r, u) || (o.push(e), h && t.push(f)));
            return o
        }

        function fi(n, t, i, r, e, o) {
            return r && !r[f] && (r = fi(r)), e && !e[f] && (e = fi(e, o)), l(function(f, o, s, h) {
                var a, l, v, w = [],
                    p = [],
                    b = o.length,
                    d = f || function(n, t, i) {
                        for (var r = 0, f = t.length; r < f; r++) u(n, t[r], i);
                        return i
                    }(t || "*", s.nodeType ? [s] : s, []),
                    y = !n || !f && t ? d : bt(d, w, n, s, h),
                    c = i ? e || (f ? n : b || r) ? [] : o : y;
                if (i && i(y, c, s, h), r)
                    for (a = bt(c, p), r(a, [], s, h), l = a.length; l--;)(v = a[l]) && (c[p[l]] = !(y[p[l]] = v));
                if (f) {
                    if (e || n) {
                        if (e) {
                            for (a = [], l = c.length; l--;)(v = c[l]) && a.push(y[l] = v);
                            e(null, c = [], a, h)
                        }
                        for (l = c.length; l--;)(v = c[l]) && -1 < (a = e ? nt(f, v) : w[l]) && (f[a] = !(o[a] = v))
                    }
                } else c = bt(c === o ? c.splice(b, c.length) : c), e ? e(null, o, c, h) : k.apply(o, c)
            })
        }

        function ei(n) {
            for (var o, u, r, s = n.length, h = t.relative[n[0].type], c = h || t.relative[" "], i = h ? 1 : 0, l = wt(function(n) {
                    return n === o
                }, c, !0), a = wt(function(n) {
                    return -1 < nt(o, n)
                }, c, !0), e = [function(n, t, i) {
                    var r = !h && (i || t !== ht) || ((o = t).nodeType ? l(n, t, i) : a(n, t, i));
                    return o = null, r
                }]; i < s; i++)
                if (u = t.relative[n[i].type]) e = [wt(ui(e), u)];
                else {
                    if ((u = t.filter[n[i].type].apply(null, n[i].matches))[f]) {
                        for (r = ++i; r < s; r++)
                            if (t.relative[n[r].type]) break;
                        return fi(1 < i && ui(e), 1 < i && pt(n.slice(0, i - 1).concat({
                            value: " " === n[i - 2].type ? "*" : ""
                        })).replace(at, "$1"), u, i < r && ei(n.slice(i, r)), r < s && ei(n = n.slice(r)), r < s && pt(n))
                    }
                    e.push(u)
                } return ui(e)
        }
        return di.prototype = t.filters = t.pseudos, t.setFilters = new di, ft = u.tokenize = function(n, i) {
            var e, f, s, o, r, h, c, l = ci[n + " "];
            if (l) return i ? 0 : l.slice(0);
            for (r = n, h = [], c = t.preFilter; r;) {
                for (o in e && !(f = ur.exec(r)) || (f && (r = r.slice(f[0].length) || r), h.push(s = [])), e = !1, (f = fr.exec(r)) && (e = f.shift(), s.push({
                        value: e,
                        type: f[0].replace(at, " ")
                    }), r = r.slice(e.length)), t.filter)(f = vt[o].exec(r)) && (!c[o] || (f = c[o](f))) && (e = f.shift(), s.push({
                    value: e,
                    type: o,
                    matches: f
                }), r = r.slice(e.length));
                if (!e) break
            }
            return i ? r.length : r ? u.error(n) : ci(n, h).slice(0)
        }, kt = u.compile = function(n, r) {
            var s, c, a, o, y, p, w = [],
                d = [],
                e = li[n + " "];
            if (!e) {
                for (r || (r = ft(n)), s = r.length; s--;)(e = ei(r[s]))[f] ? w.push(e) : d.push(e);
                (e = li(n, (c = d, o = 0 < (a = w).length, y = 0 < c.length, p = function(n, r, f, e, s) {
                    var l, nt, d, g = 0,
                        p = "0",
                        tt = n && [],
                        w = [],
                        it = ht,
                        rt = n || y && t.find.TAG("*", s),
                        ut = v += null == it ? 1 : Math.random() || .1,
                        ft = rt.length;
                    for (s && (ht = r === i || r || s); p !== ft && null != (l = rt[p]); p++) {
                        if (y && l) {
                            for (nt = 0, r || l.ownerDocument === i || (b(l), f = !h); d = c[nt++];)
                                if (d(l, r || i, f)) {
                                    e.push(l);
                                    break
                                } s && (v = ut)
                        }
                        o && ((l = !d && l) && g--, n && tt.push(l))
                    }
                    if (g += p, o && p !== g) {
                        for (nt = 0; d = a[nt++];) d(tt, w, r, f);
                        if (n) {
                            if (0 < g)
                                while (p--) tt[p] || w[p] || (w[p] = tr.call(e));
                            w = bt(w)
                        }
                        k.apply(e, w);
                        s && !n && 0 < w.length && 1 < g + a.length && u.uniqueSort(e)
                    }
                    return s && (v = ut, ht = it), tt
                }, o ? l(p) : p))).selector = n
            }
            return e
        }, si = u.select = function(n, i, r, u) {
            var o, f, e, l, a, c = "function" == typeof n && n,
                s = !u && ft(n = c.selector || n);
            if (r = r || [], 1 === s.length) {
                if (2 < (f = s[0] = s[0].slice(0)).length && "ID" === (e = f[0]).type && 9 === i.nodeType && h && t.relative[f[1].type]) {
                    if (!(i = (t.find.ID(e.matches[0].replace(y, p), i) || [])[0])) return r;
                    c && (i = i.parentNode);
                    n = n.slice(f.shift().value.length)
                }
                for (o = vt.needsContext.test(n) ? 0 : f.length; o--;) {
                    if (e = f[o], t.relative[l = e.type]) break;
                    if ((a = t.find[l]) && (u = a(e.matches[0].replace(y, p), ti.test(f[0].type) && ri(i.parentNode) || i))) {
                        if (f.splice(o, 1), !(n = u.length && pt(f))) return k.apply(r, u), r;
                        break
                    }
                }
            }
            return (c || kt(n, s))(u, i, !h, r, !i || ti.test(n) && ri(i.parentNode) || i), r
        }, e.sortStable = f.split("").sort(dt).join("") === f, e.detectDuplicates = !!ut, b(), e.sortDetached = a(function(n) {
            return 1 & n.compareDocumentPosition(i.createElement("fieldset"))
        }), a(function(n) {
            return n.innerHTML = "<a href='#'><\/a>", "#" === n.firstChild.getAttribute("href")
        }) || ii("type|href|height|width", function(n, t, i) {
            if (!i) return n.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
        }), e.attributes && a(function(n) {
            return n.innerHTML = "<input/>", n.firstChild.setAttribute("value", ""), "" === n.firstChild.getAttribute("value")
        }) || ii("value", function(n, t, i) {
            if (!i && "input" === n.nodeName.toLowerCase()) return n.defaultValue
        }), a(function(n) {
            return null == n.getAttribute("disabled")
        }) || ii(gt, function(n, t, i) {
            var r;
            if (!i) return !0 === n[t] ? t.toLowerCase() : (r = n.getAttributeNode(t)) && r.specified ? r.value : null
        }), u
    }(n);
    i.find = d;
    i.expr = d.selectors;
    i.expr[":"] = i.expr.pseudos;
    i.uniqueSort = i.unique = d.uniqueSort;
    i.text = d.getText;
    i.isXMLDoc = d.isXML;
    i.contains = d.contains;
    i.escapeSelector = d.escape;
    var rt = function(n, t, r) {
            for (var u = [], f = void 0 !== r;
                (n = n[t]) && 9 !== n.nodeType;)
                if (1 === n.nodeType) {
                    if (f && i(n).is(r)) break;
                    u.push(n)
                } return u
        },
        vr = function(n, t) {
            for (var i = []; n; n = n.nextSibling) 1 === n.nodeType && n !== t && i.push(n);
            return i
        },
        yr = i.expr.match.needsContext;

    function c(n, t) {
        return n.nodeName && n.nodeName.toLowerCase() === t.toLowerCase()
    }
    var pr = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;

    function yi(n, t, r) {
        return u(t) ? i.grep(n, function(n, i) {
            return !!t.call(n, i, n) !== r
        }) : t.nodeType ? i.grep(n, function(n) {
            return n === t !== r
        }) : "string" != typeof t ? i.grep(n, function(n) {
            return -1 < ni.call(t, n) !== r
        }) : i.filter(t, n, r)
    }
    i.filter = function(n, t, r) {
        var u = t[0];
        return r && (n = ":not(" + n + ")"), 1 === t.length && 1 === u.nodeType ? i.find.matchesSelector(u, n) ? [u] : [] : i.find.matches(n, i.grep(t, function(n) {
            return 1 === n.nodeType
        }))
    };
    i.fn.extend({
        find: function(n) {
            var t, r, u = this.length,
                f = this;
            if ("string" != typeof n) return this.pushStack(i(n).filter(function() {
                for (t = 0; t < u; t++)
                    if (i.contains(f[t], this)) return !0
            }));
            for (r = this.pushStack([]), t = 0; t < u; t++) i.find(n, f[t], r);
            return 1 < u ? i.uniqueSort(r) : r
        },
        filter: function(n) {
            return this.pushStack(yi(this, n || [], !1))
        },
        not: function(n) {
            return this.pushStack(yi(this, n || [], !0))
        },
        is: function(n) {
            return !!yi(this, "string" == typeof n && yr.test(n) ? i(n) : n || [], !1).length
        }
    });
    var wr, wf = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
    (i.fn.init = function(n, t, r) {
        var e, o;
        if (!n) return this;
        if (r = r || wr, "string" == typeof n) {
            if (!(e = "<" === n[0] && ">" === n[n.length - 1] && 3 <= n.length ? [null, n, null] : wf.exec(n)) || !e[1] && t) return !t || t.jquery ? (t || r).find(n) : this.constructor(t).find(n);
            if (e[1]) {
                if (t = t instanceof i ? t[0] : t, i.merge(this, i.parseHTML(e[1], t && t.nodeType ? t.ownerDocument || t : f, !0)), pr.test(e[1]) && i.isPlainObject(t))
                    for (e in t) u(this[e]) ? this[e](t[e]) : this.attr(e, t[e]);
                return this
            }
            return (o = f.getElementById(e[2])) && (this[0] = o, this.length = 1), this
        }
        return n.nodeType ? (this[0] = n, this.length = 1, this) : u(n) ? void 0 !== r.ready ? r.ready(n) : n(i) : i.makeArray(n, this)
    }).prototype = i.fn;
    wr = i(f);
    var bf = /^(?:parents|prev(?:Until|All))/,
        kf = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };

    function br(n, t) {
        while ((n = n[t]) && 1 !== n.nodeType);
        return n
    }
    i.fn.extend({
        has: function(n) {
            var t = i(n, this),
                r = t.length;
            return this.filter(function() {
                for (var n = 0; n < r; n++)
                    if (i.contains(this, t[n])) return !0
            })
        },
        closest: function(n, t) {
            var r, f = 0,
                o = this.length,
                u = [],
                e = "string" != typeof n && i(n);
            if (!yr.test(n))
                for (; f < o; f++)
                    for (r = this[f]; r && r !== t; r = r.parentNode)
                        if (r.nodeType < 11 && (e ? -1 < e.index(r) : 1 === r.nodeType && i.find.matchesSelector(r, n))) {
                            u.push(r);
                            break
                        } return this.pushStack(1 < u.length ? i.uniqueSort(u) : u)
        },
        index: function(n) {
            return n ? "string" == typeof n ? ni.call(i(n), this[0]) : ni.call(this, n.jquery ? n[0] : n) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(n, t) {
            return this.pushStack(i.uniqueSort(i.merge(this.get(), i(n, t))))
        },
        addBack: function(n) {
            return this.add(null == n ? this.prevObject : this.prevObject.filter(n))
        }
    });
    i.each({
        parent: function(n) {
            var t = n.parentNode;
            return t && 11 !== t.nodeType ? t : null
        },
        parents: function(n) {
            return rt(n, "parentNode")
        },
        parentsUntil: function(n, t, i) {
            return rt(n, "parentNode", i)
        },
        next: function(n) {
            return br(n, "nextSibling")
        },
        prev: function(n) {
            return br(n, "previousSibling")
        },
        nextAll: function(n) {
            return rt(n, "nextSibling")
        },
        prevAll: function(n) {
            return rt(n, "previousSibling")
        },
        nextUntil: function(n, t, i) {
            return rt(n, "nextSibling", i)
        },
        prevUntil: function(n, t, i) {
            return rt(n, "previousSibling", i)
        },
        siblings: function(n) {
            return vr((n.parentNode || {}).firstChild, n)
        },
        children: function(n) {
            return vr(n.firstChild)
        },
        contents: function(n) {
            return "undefined" != typeof n.contentDocument ? n.contentDocument : (c(n, "template") && (n = n.content || n), i.merge([], n.childNodes))
        }
    }, function(n, t) {
        i.fn[n] = function(r, u) {
            var f = i.map(this, t, r);
            return "Until" !== n.slice(-5) && (u = r), u && "string" == typeof u && (f = i.filter(u, f)), 1 < this.length && (kf[n] || i.uniqueSort(f), bf.test(n) && f.reverse()), this.pushStack(f)
        }
    });
    var v = /[^\x20\t\r\n\f]+/g;

    function ut(n) {
        return n
    }

    function ri(n) {
        throw n;
    }

    function kr(n, t, i, r) {
        var f;
        try {
            n && u(f = n.promise) ? f.call(n).done(t).fail(i) : n && u(f = n.then) ? f.call(n, t, i) : t.apply(void 0, [n].slice(r))
        } catch (n) {
            i.apply(void 0, [n])
        }
    }
    i.Callbacks = function(n) {
        var l, h;
        n = "string" == typeof n ? (l = n, h = {}, i.each(l.match(v) || [], function(n, t) {
            h[t] = !0
        }), h) : i.extend({}, n);
        var o, r, a, f, t = [],
            s = [],
            e = -1,
            y = function() {
                for (f = f || n.once, a = o = !0; s.length; e = -1)
                    for (r = s.shift(); ++e < t.length;) !1 === t[e].apply(r[0], r[1]) && n.stopOnFalse && (e = t.length, r = !1);
                n.memory || (r = !1);
                o = !1;
                f && (t = r ? [] : "")
            },
            c = {
                add: function() {
                    return t && (r && !o && (e = t.length - 1, s.push(r)), function f(r) {
                        i.each(r, function(i, r) {
                            u(r) ? n.unique && c.has(r) || t.push(r) : r && r.length && "string" !== it(r) && f(r)
                        })
                    }(arguments), r && !o && y()), this
                },
                remove: function() {
                    return i.each(arguments, function(n, r) {
                        for (var u; - 1 < (u = i.inArray(r, t, u));) t.splice(u, 1), u <= e && e--
                    }), this
                },
                has: function(n) {
                    return n ? -1 < i.inArray(n, t) : 0 < t.length
                },
                empty: function() {
                    return t && (t = []), this
                },
                disable: function() {
                    return f = s = [], t = r = "", this
                },
                disabled: function() {
                    return !t
                },
                lock: function() {
                    return f = s = [], r || o || (t = r = ""), this
                },
                locked: function() {
                    return !!f
                },
                fireWith: function(n, t) {
                    return f || (t = [n, (t = t || []).slice ? t.slice() : t], s.push(t), o || y()), this
                },
                fire: function() {
                    return c.fireWith(this, arguments), this
                },
                fired: function() {
                    return !!a
                }
            };
        return c
    };
    i.extend({
        Deferred: function(t) {
            var f = [
                    ["notify", "progress", i.Callbacks("memory"), i.Callbacks("memory"), 2],
                    ["resolve", "done", i.Callbacks("once memory"), i.Callbacks("once memory"), 0, "resolved"],
                    ["reject", "fail", i.Callbacks("once memory"), i.Callbacks("once memory"), 1, "rejected"]
                ],
                o = "pending",
                e = {
                    state: function() {
                        return o
                    },
                    always: function() {
                        return r.done(arguments).fail(arguments), this
                    },
                    "catch": function(n) {
                        return e.then(null, n)
                    },
                    pipe: function() {
                        var n = arguments;
                        return i.Deferred(function(t) {
                            i.each(f, function(i, f) {
                                var e = u(n[f[4]]) && n[f[4]];
                                r[f[1]](function() {
                                    var n = e && e.apply(this, arguments);
                                    n && u(n.promise) ? n.promise().progress(t.notify).done(t.resolve).fail(t.reject) : t[f[0] + "With"](this, e ? [n] : arguments)
                                })
                            });
                            n = null
                        }).promise()
                    },
                    then: function(t, r, e) {
                        var o = 0;

                        function s(t, r, f, e) {
                            return function() {
                                var h = this,
                                    c = arguments,
                                    l = function() {
                                        var n, i;
                                        if (!(t < o)) {
                                            if ((n = f.apply(h, c)) === r.promise()) throw new TypeError("Thenable self-resolution");
                                            i = n && ("object" == typeof n || "function" == typeof n) && n.then;
                                            u(i) ? e ? i.call(n, s(o, r, ut, e), s(o, r, ri, e)) : (o++, i.call(n, s(o, r, ut, e), s(o, r, ri, e), s(o, r, ut, r.notifyWith))) : (f !== ut && (h = void 0, c = [n]), (e || r.resolveWith)(h, c))
                                        }
                                    },
                                    a = e ? l : function() {
                                        try {
                                            l()
                                        } catch (l) {
                                            i.Deferred.exceptionHook && i.Deferred.exceptionHook(l, a.stackTrace);
                                            o <= t + 1 && (f !== ri && (h = void 0, c = [l]), r.rejectWith(h, c))
                                        }
                                    };
                                t ? a() : (i.Deferred.getStackHook && (a.stackTrace = i.Deferred.getStackHook()), n.setTimeout(a))
                            }
                        }
                        return i.Deferred(function(n) {
                            f[0][3].add(s(0, n, u(e) ? e : ut, n.notifyWith));
                            f[1][3].add(s(0, n, u(t) ? t : ut));
                            f[2][3].add(s(0, n, u(r) ? r : ri))
                        }).promise()
                    },
                    promise: function(n) {
                        return null != n ? i.extend(n, e) : e
                    }
                },
                r = {};
            return i.each(f, function(n, t) {
                var i = t[2],
                    u = t[5];
                e[t[1]] = i.add;
                u && i.add(function() {
                    o = u
                }, f[3 - n][2].disable, f[3 - n][3].disable, f[0][2].lock, f[0][3].lock);
                i.add(t[3].fire);
                r[t[0]] = function() {
                    return r[t[0] + "With"](this === r ? void 0 : this, arguments), this
                };
                r[t[0] + "With"] = i.fireWith
            }), e.promise(r), t && t.call(r, r), r
        },
        when: function(n) {
            var e = arguments.length,
                t = e,
                o = Array(t),
                f = b.call(arguments),
                r = i.Deferred(),
                s = function(n) {
                    return function(t) {
                        o[n] = this;
                        f[n] = 1 < arguments.length ? b.call(arguments) : t;
                        --e || r.resolveWith(o, f)
                    }
                };
            if (e <= 1 && (kr(n, r.done(s(t)).resolve, r.reject, !e), "pending" === r.state() || u(f[t] && f[t].then))) return r.then();
            while (t--) kr(f[t], s(t), r.reject);
            return r.promise()
        }
    });
    var df = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
    i.Deferred.exceptionHook = function(t, i) {
        n.console && n.console.warn && t && df.test(t.name) && n.console.warn("jQuery.Deferred exception: " + t.message, t.stack, i)
    };
    i.readyException = function(t) {
        n.setTimeout(function() {
            throw t;
        })
    };
    var pi = i.Deferred();

    function ui() {
        f.removeEventListener("DOMContentLoaded", ui);
        n.removeEventListener("load", ui);
        i.ready()
    }
    i.fn.ready = function(n) {
        return pi.then(n)["catch"](function(n) {
            i.readyException(n)
        }), this
    };
    i.extend({
        isReady: !1,
        readyWait: 1,
        ready: function(n) {
            (!0 === n ? --i.readyWait : i.isReady) || (i.isReady = !0) !== n && 0 < --i.readyWait || pi.resolveWith(f, [i])
        }
    });
    i.ready.then = pi.then;
    "complete" === f.readyState || "loading" !== f.readyState && !f.documentElement.doScroll ? n.setTimeout(i.ready) : (f.addEventListener("DOMContentLoaded", ui), n.addEventListener("load", ui));
    var p = function(n, t, r, f, e, o, s) {
            var h = 0,
                l = n.length,
                c = null == r;
            if ("object" === it(r))
                for (h in e = !0, r) p(n, t, h, r[h], !0, o, s);
            else if (void 0 !== f && (e = !0, u(f) || (s = !0), c && (s ? (t.call(n, f), t = null) : (c = t, t = function(n, t, r) {
                    return c.call(i(n), r)
                })), t))
                for (; h < l; h++) t(n[h], r, s ? f : f.call(n[h], h, t(n[h], r)));
            return e ? n : c ? t.call(n) : l ? t(n[0], r) : o
        },
        gf = /^-ms-/,
        ne = /-([a-z])/g;

    function te(n, t) {
        return t.toUpperCase()
    }

    function y(n) {
        return n.replace(gf, "ms-").replace(ne, te)
    }
    var fi = function(n) {
        return 1 === n.nodeType || 9 === n.nodeType || !+n.nodeType
    };

    function at() {
        this.expando = i.expando + at.uid++
    }
    at.uid = 1;
    at.prototype = {
        cache: function(n) {
            var t = n[this.expando];
            return t || (t = {}, fi(n) && (n.nodeType ? n[this.expando] = t : Object.defineProperty(n, this.expando, {
                value: t,
                configurable: !0
            }))), t
        },
        set: function(n, t, i) {
            var r, u = this.cache(n);
            if ("string" == typeof t) u[y(t)] = i;
            else
                for (r in t) u[y(r)] = t[r];
            return u
        },
        get: function(n, t) {
            return void 0 === t ? this.cache(n) : n[this.expando] && n[this.expando][y(t)]
        },
        access: function(n, t, i) {
            return void 0 === t || t && "string" == typeof t && void 0 === i ? this.get(n, t) : (this.set(n, t, i), void 0 !== i ? i : t)
        },
        remove: function(n, t) {
            var u, r = n[this.expando];
            if (void 0 !== r) {
                if (void 0 !== t)
                    for (u = (t = Array.isArray(t) ? t.map(y) : (t = y(t)) in r ? [t] : t.match(v) || []).length; u--;) delete r[t[u]];
                (void 0 === t || i.isEmptyObject(r)) && (n.nodeType ? n[this.expando] = void 0 : delete n[this.expando])
            }
        },
        hasData: function(n) {
            var t = n[this.expando];
            return void 0 !== t && !i.isEmptyObject(t)
        }
    };
    var r = new at,
        o = new at,
        ie = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        re = /[A-Z]/g;

    function dr(n, t, i) {
        var u, r;
        if (void 0 === i && 1 === n.nodeType)
            if (u = "data-" + t.replace(re, "-$&").toLowerCase(), "string" == typeof(i = n.getAttribute(u))) {
                try {
                    i = "true" === (r = i) || "false" !== r && ("null" === r ? null : r === +r + "" ? +r : ie.test(r) ? JSON.parse(r) : r)
                } catch (n) {}
                o.set(n, t, i)
            } else i = void 0;
        return i
    }
    i.extend({
        hasData: function(n) {
            return o.hasData(n) || r.hasData(n)
        },
        data: function(n, t, i) {
            return o.access(n, t, i)
        },
        removeData: function(n, t) {
            o.remove(n, t)
        },
        _data: function(n, t, i) {
            return r.access(n, t, i)
        },
        _removeData: function(n, t) {
            r.remove(n, t)
        }
    });
    i.fn.extend({
        data: function(n, t) {
            var f, u, e, i = this[0],
                s = i && i.attributes;
            if (void 0 === n) {
                if (this.length && (e = o.get(i), 1 === i.nodeType && !r.get(i, "hasDataAttrs"))) {
                    for (f = s.length; f--;) s[f] && 0 === (u = s[f].name).indexOf("data-") && (u = y(u.slice(5)), dr(i, u, e[u]));
                    r.set(i, "hasDataAttrs", !0)
                }
                return e
            }
            return "object" == typeof n ? this.each(function() {
                o.set(this, n)
            }) : p(this, function(t) {
                var r;
                if (i && void 0 === t) return void 0 !== (r = o.get(i, n)) ? r : void 0 !== (r = dr(i, n)) ? r : void 0;
                this.each(function() {
                    o.set(this, n, t)
                })
            }, null, t, 1 < arguments.length, null, !0)
        },
        removeData: function(n) {
            return this.each(function() {
                o.remove(this, n)
            })
        }
    });
    i.extend({
        queue: function(n, t, u) {
            var f;
            if (n) return t = (t || "fx") + "queue", f = r.get(n, t), u && (!f || Array.isArray(u) ? f = r.access(n, t, i.makeArray(u)) : f.push(u)), f || []
        },
        dequeue: function(n, t) {
            t = t || "fx";
            var r = i.queue(n, t),
                e = r.length,
                u = r.shift(),
                f = i._queueHooks(n, t);
            "inprogress" === u && (u = r.shift(), e--);
            u && ("fx" === t && r.unshift("inprogress"), delete f.stop, u.call(n, function() {
                i.dequeue(n, t)
            }, f));
            !e && f && f.empty.fire()
        },
        _queueHooks: function(n, t) {
            var u = t + "queueHooks";
            return r.get(n, u) || r.access(n, u, {
                empty: i.Callbacks("once memory").add(function() {
                    r.remove(n, [t + "queue", u])
                })
            })
        }
    });
    i.fn.extend({
        queue: function(n, t) {
            var r = 2;
            return "string" != typeof n && (t = n, n = "fx", r--), arguments.length < r ? i.queue(this[0], n) : void 0 === t ? this : this.each(function() {
                var r = i.queue(this, n, t);
                i._queueHooks(this, n);
                "fx" === n && "inprogress" !== r[0] && i.dequeue(this, n)
            })
        },
        dequeue: function(n) {
            return this.each(function() {
                i.dequeue(this, n)
            })
        },
        clearQueue: function(n) {
            return this.queue(n || "fx", [])
        },
        promise: function(n, t) {
            var u, e = 1,
                o = i.Deferred(),
                f = this,
                s = this.length,
                h = function() {
                    --e || o.resolveWith(f, [f])
                };
            for ("string" != typeof n && (t = n, n = void 0), n = n || "fx"; s--;)(u = r.get(f[s], n + "queueHooks")) && u.empty && (e++, u.empty.add(h));
            return h(), o.promise(t)
        }
    });
    var gr = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        vt = new RegExp("^(?:([+-])=|)(" + gr + ")([a-z%]*)$", "i"),
        w = ["Top", "Right", "Bottom", "Left"],
        yt = f.documentElement,
        ft = function(n) {
            return i.contains(n.ownerDocument, n)
        },
        ue = {
            composed: !0
        };
    yt.getRootNode && (ft = function(n) {
        return i.contains(n.ownerDocument, n) || n.getRootNode(ue) === n.ownerDocument
    });
    var ei = function(n, t) {
            return "none" === (n = t || n).style.display || "" === n.style.display && ft(n) && "none" === i.css(n, "display")
        },
        nu = function(n, t, i, r) {
            var f, u, e = {};
            for (u in t) e[u] = n.style[u], n.style[u] = t[u];
            for (u in f = i.apply(n, r || []), t) n.style[u] = e[u];
            return f
        };

    function tu(n, t, r, u) {
        var s, h, c = 20,
            l = u ? function() {
                return u.cur()
            } : function() {
                return i.css(n, t, "")
            },
            o = l(),
            e = r && r[3] || (i.cssNumber[t] ? "" : "px"),
            f = n.nodeType && (i.cssNumber[t] || "px" !== e && +o) && vt.exec(i.css(n, t));
        if (f && f[3] !== e) {
            for (o /= 2, e = e || f[3], f = +o || 1; c--;) i.style(n, t, f + e), (1 - h) * (1 - (h = l() / o || .5)) <= 0 && (c = 0), f /= h;
            f *= 2;
            i.style(n, t, f + e);
            r = r || []
        }
        return r && (f = +f || +o || 0, s = r[1] ? f + (r[1] + 1) * r[2] : +r[2], u && (u.unit = e, u.start = f, u.end = s)), s
    }
    var iu = {};

    function et(n, t) {
        for (var h, f, a, s, c, l, e, o = [], u = 0, v = n.length; u < v; u++)(f = n[u]).style && (h = f.style.display, t ? ("none" === h && (o[u] = r.get(f, "display") || null, o[u] || (f.style.display = "")), "" === f.style.display && ei(f) && (o[u] = (e = c = s = void 0, c = (a = f).ownerDocument, l = a.nodeName, (e = iu[l]) || (s = c.body.appendChild(c.createElement(l)), e = i.css(s, "display"), s.parentNode.removeChild(s), "none" === e && (e = "block"), iu[l] = e)))) : "none" !== h && (o[u] = "none", r.set(f, "display", h)));
        for (u = 0; u < v; u++) null != o[u] && (n[u].style.display = o[u]);
        return n
    }
    i.fn.extend({
        show: function() {
            return et(this, !0)
        },
        hide: function() {
            return et(this)
        },
        toggle: function(n) {
            return "boolean" == typeof n ? n ? this.show() : this.hide() : this.each(function() {
                ei(this) ? i(this).show() : i(this).hide()
            })
        }
    });
    var pt = /^(?:checkbox|radio)$/i,
        ru = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
        uu = /^$|^module$|\/(?:java|ecma)script/i,
        h = {
            option: [1, "<select multiple='multiple'>", "<\/select>"],
            thead: [1, "<table>", "<\/table>"],
            col: [2, "<table><colgroup>", "<\/colgroup><\/table>"],
            tr: [2, "<table><tbody>", "<\/tbody><\/table>"],
            td: [3, "<table><tbody><tr>", "<\/tr><\/tbody><\/table>"],
            _default: [0, "", ""]
        };

    function s(n, t) {
        var r;
        return r = "undefined" != typeof n.getElementsByTagName ? n.getElementsByTagName(t || "*") : "undefined" != typeof n.querySelectorAll ? n.querySelectorAll(t || "*") : [], void 0 === t || t && c(n, t) ? i.merge([n], r) : r
    }

    function wi(n, t) {
        for (var i = 0, u = n.length; i < u; i++) r.set(n[i], "globalEval", !t || r.get(t[i], "globalEval"))
    }
    h.optgroup = h.option;
    h.tbody = h.tfoot = h.colgroup = h.caption = h.thead;
    h.th = h.td;
    var wt, oi, fe = /<|&#?\w+;/;

    function fu(n, t, r, u, f) {
        for (var e, o, p, a, w, v, c = t.createDocumentFragment(), y = [], l = 0, b = n.length; l < b; l++)
            if ((e = n[l]) || 0 === e)
                if ("object" === it(e)) i.merge(y, e.nodeType ? [e] : e);
                else if (fe.test(e)) {
            for (o = o || c.appendChild(t.createElement("div")), p = (ru.exec(e) || ["", ""])[1].toLowerCase(), a = h[p] || h._default, o.innerHTML = a[1] + i.htmlPrefilter(e) + a[2], v = a[0]; v--;) o = o.lastChild;
            i.merge(y, o.childNodes);
            (o = c.firstChild).textContent = ""
        } else y.push(t.createTextNode(e));
        for (c.textContent = "", l = 0; e = y[l++];)
            if (u && -1 < i.inArray(e, u)) f && f.push(e);
            else if (w = ft(e), o = s(c.appendChild(e), "script"), w && wi(o), r)
            for (v = 0; e = o[v++];) uu.test(e.type || "") && r.push(e);
        return c
    }
    wt = f.createDocumentFragment().appendChild(f.createElement("div"));
    (oi = f.createElement("input")).setAttribute("type", "radio");
    oi.setAttribute("checked", "checked");
    oi.setAttribute("name", "t");
    wt.appendChild(oi);
    e.checkClone = wt.cloneNode(!0).cloneNode(!0).lastChild.checked;
    wt.innerHTML = "<textarea>x<\/textarea>";
    e.noCloneChecked = !!wt.cloneNode(!0).lastChild.defaultValue;
    var ee = /^key/,
        oe = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
        eu = /^([^.]*)(?:\.(.+)|)/;

    function ot() {
        return !0
    }

    function st() {
        return !1
    }

    function se(n, t) {
        return n === function() {
            try {
                return f.activeElement
            } catch (n) {}
        }() == ("focus" === t)
    }

    function bi(n, t, r, u, f, e) {
        var o, s;
        if ("object" == typeof t) {
            for (s in "string" != typeof r && (u = u || r, r = void 0), t) bi(n, s, r, u, t[s], e);
            return n
        }
        if (null == u && null == f ? (f = r, u = r = void 0) : null == f && ("string" == typeof r ? (f = u, u = void 0) : (f = u, u = r, r = void 0)), !1 === f) f = st;
        else if (!f) return n;
        return 1 === e && (o = f, (f = function(n) {
            return i().off(n), o.apply(this, arguments)
        }).guid = o.guid || (o.guid = i.guid++)), n.each(function() {
            i.event.add(this, t, f, u, r)
        })
    }

    function si(n, t, u) {
        u ? (r.set(n, t, !1), i.event.add(n, t, {
            namespace: !1,
            handler: function(n) {
                var o, e, f = r.get(this, t);
                if (1 & n.isTrigger && this[t]) {
                    if (f.length)(i.event.special[t] || {}).delegateType && n.stopPropagation();
                    else if (f = b.call(arguments), r.set(this, t, f), o = u(this, t), this[t](), f !== (e = r.get(this, t)) || o ? r.set(this, t, !1) : e = {}, f !== e) return n.stopImmediatePropagation(), n.preventDefault(), e.value
                } else f.length && (r.set(this, t, {
                    value: i.event.trigger(i.extend(f[0], i.Event.prototype), f.slice(1), this)
                }), n.stopImmediatePropagation())
            }
        })) : void 0 === r.get(n, t) && i.event.add(n, t, ot)
    }
    i.event = {
        global: {},
        add: function(n, t, u, f, e) {
            var p, a, k, y, w, h, s, c, o, b, d, l = r.get(n);
            if (l)
                for (u.handler && (u = (p = u).handler, e = p.selector), e && i.find.matchesSelector(yt, e), u.guid || (u.guid = i.guid++), (y = l.events) || (y = l.events = {}), (a = l.handle) || (a = l.handle = function(t) {
                        if ("undefined" != typeof i && i.event.triggered !== t.type) return i.event.dispatch.apply(n, arguments)
                    }), w = (t = (t || "").match(v) || [""]).length; w--;) o = d = (k = eu.exec(t[w]) || [])[1], b = (k[2] || "").split(".").sort(), o && (s = i.event.special[o] || {}, o = (e ? s.delegateType : s.bindType) || o, s = i.event.special[o] || {}, h = i.extend({
                    type: o,
                    origType: d,
                    data: f,
                    handler: u,
                    guid: u.guid,
                    selector: e,
                    needsContext: e && i.expr.match.needsContext.test(e),
                    namespace: b.join(".")
                }, p), (c = y[o]) || ((c = y[o] = []).delegateCount = 0, s.setup && !1 !== s.setup.call(n, f, b, a) || n.addEventListener && n.addEventListener(o, a)), s.add && (s.add.call(n, h), h.handler.guid || (h.handler.guid = u.guid)), e ? c.splice(c.delegateCount++, 0, h) : c.push(h), i.event.global[o] = !0)
        },
        remove: function(n, t, u, f, e) {
            var y, k, c, a, p, s, h, l, o, b, d, w = r.hasData(n) && r.get(n);
            if (w && (a = w.events)) {
                for (p = (t = (t || "").match(v) || [""]).length; p--;)
                    if (o = d = (c = eu.exec(t[p]) || [])[1], b = (c[2] || "").split(".").sort(), o) {
                        for (h = i.event.special[o] || {}, l = a[o = (f ? h.delegateType : h.bindType) || o] || [], c = c[2] && new RegExp("(^|\\.)" + b.join("\\.(?:.*\\.|)") + "(\\.|$)"), k = y = l.length; y--;) s = l[y], !e && d !== s.origType || u && u.guid !== s.guid || c && !c.test(s.namespace) || f && f !== s.selector && ("**" !== f || !s.selector) || (l.splice(y, 1), s.selector && l.delegateCount--, h.remove && h.remove.call(n, s));
                        k && !l.length && (h.teardown && !1 !== h.teardown.call(n, b, w.handle) || i.removeEvent(n, o, w.handle), delete a[o])
                    } else
                        for (o in a) i.event.remove(n, o + t[p], u, f, !0);
                i.isEmptyObject(a) && r.remove(n, "handle events")
            }
        },
        dispatch: function(n) {
            var u, h, c, e, f, l, t = i.event.fix(n),
                s = new Array(arguments.length),
                a = (r.get(this, "events") || {})[t.type] || [],
                o = i.event.special[t.type] || {};
            for (s[0] = t, u = 1; u < arguments.length; u++) s[u] = arguments[u];
            if (t.delegateTarget = this, !o.preDispatch || !1 !== o.preDispatch.call(this, t)) {
                for (l = i.event.handlers.call(this, t, a), u = 0;
                    (e = l[u++]) && !t.isPropagationStopped();)
                    for (t.currentTarget = e.elem, h = 0;
                        (f = e.handlers[h++]) && !t.isImmediatePropagationStopped();) t.rnamespace && !1 !== f.namespace && !t.rnamespace.test(f.namespace) || (t.handleObj = f, t.data = f.data, void 0 !== (c = ((i.event.special[f.origType] || {}).handle || f.handler).apply(e.elem, s)) && !1 === (t.result = c) && (t.preventDefault(), t.stopPropagation()));
                return o.postDispatch && o.postDispatch.call(this, t), t.result
            }
        },
        handlers: function(n, t) {
            var f, h, u, e, o, c = [],
                s = t.delegateCount,
                r = n.target;
            if (s && r.nodeType && !("click" === n.type && 1 <= n.button))
                for (; r !== this; r = r.parentNode || this)
                    if (1 === r.nodeType && ("click" !== n.type || !0 !== r.disabled)) {
                        for (e = [], o = {}, f = 0; f < s; f++) void 0 === o[u = (h = t[f]).selector + " "] && (o[u] = h.needsContext ? -1 < i(u, this).index(r) : i.find(u, this, null, [r]).length), o[u] && e.push(h);
                        e.length && c.push({
                            elem: r,
                            handlers: e
                        })
                    } return r = this, s < t.length && c.push({
                elem: r,
                handlers: t.slice(s)
            }), c
        },
        addProp: function(n, t) {
            Object.defineProperty(i.Event.prototype, n, {
                enumerable: !0,
                configurable: !0,
                get: u(t) ? function() {
                    if (this.originalEvent) return t(this.originalEvent)
                } : function() {
                    if (this.originalEvent) return this.originalEvent[n]
                },
                set: function(t) {
                    Object.defineProperty(this, n, {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: t
                    })
                }
            })
        },
        fix: function(n) {
            return n[i.expando] ? n : new i.Event(n)
        },
        special: {
            load: {
                noBubble: !0
            },
            click: {
                setup: function(n) {
                    var t = this || n;
                    return pt.test(t.type) && t.click && c(t, "input") && si(t, "click", ot), !1
                },
                trigger: function(n) {
                    var t = this || n;
                    return pt.test(t.type) && t.click && c(t, "input") && si(t, "click"), !0
                },
                _default: function(n) {
                    var t = n.target;
                    return pt.test(t.type) && t.click && c(t, "input") && r.get(t, "click") || c(t, "a")
                }
            },
            beforeunload: {
                postDispatch: function(n) {
                    void 0 !== n.result && n.originalEvent && (n.originalEvent.returnValue = n.result)
                }
            }
        }
    };
    i.removeEvent = function(n, t, i) {
        n.removeEventListener && n.removeEventListener(t, i)
    };
    i.Event = function(n, t) {
        if (!(this instanceof i.Event)) return new i.Event(n, t);
        n && n.type ? (this.originalEvent = n, this.type = n.type, this.isDefaultPrevented = n.defaultPrevented || void 0 === n.defaultPrevented && !1 === n.returnValue ? ot : st, this.target = n.target && 3 === n.target.nodeType ? n.target.parentNode : n.target, this.currentTarget = n.currentTarget, this.relatedTarget = n.relatedTarget) : this.type = n;
        t && i.extend(this, t);
        this.timeStamp = n && n.timeStamp || Date.now();
        this[i.expando] = !0
    };
    i.Event.prototype = {
        constructor: i.Event,
        isDefaultPrevented: st,
        isPropagationStopped: st,
        isImmediatePropagationStopped: st,
        isSimulated: !1,
        preventDefault: function() {
            var n = this.originalEvent;
            this.isDefaultPrevented = ot;
            n && !this.isSimulated && n.preventDefault()
        },
        stopPropagation: function() {
            var n = this.originalEvent;
            this.isPropagationStopped = ot;
            n && !this.isSimulated && n.stopPropagation()
        },
        stopImmediatePropagation: function() {
            var n = this.originalEvent;
            this.isImmediatePropagationStopped = ot;
            n && !this.isSimulated && n.stopImmediatePropagation();
            this.stopPropagation()
        }
    };
    i.each({
        altKey: !0,
        bubbles: !0,
        cancelable: !0,
        changedTouches: !0,
        ctrlKey: !0,
        detail: !0,
        eventPhase: !0,
        metaKey: !0,
        pageX: !0,
        pageY: !0,
        shiftKey: !0,
        view: !0,
        char: !0,
        code: !0,
        charCode: !0,
        key: !0,
        keyCode: !0,
        button: !0,
        buttons: !0,
        clientX: !0,
        clientY: !0,
        offsetX: !0,
        offsetY: !0,
        pointerId: !0,
        pointerType: !0,
        screenX: !0,
        screenY: !0,
        targetTouches: !0,
        toElement: !0,
        touches: !0,
        which: function(n) {
            var t = n.button;
            return null == n.which && ee.test(n.type) ? null != n.charCode ? n.charCode : n.keyCode : !n.which && void 0 !== t && oe.test(n.type) ? 1 & t ? 1 : 2 & t ? 3 : 4 & t ? 2 : 0 : n.which
        }
    }, i.event.addProp);
    i.each({
        focus: "focusin",
        blur: "focusout"
    }, function(n, t) {
        i.event.special[n] = {
            setup: function() {
                return si(this, n, se), !1
            },
            trigger: function() {
                return si(this, n), !0
            },
            delegateType: t
        }
    });
    i.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function(n, t) {
        i.event.special[n] = {
            delegateType: t,
            bindType: t,
            handle: function(n) {
                var u, r = n.relatedTarget,
                    f = n.handleObj;
                return r && (r === this || i.contains(this, r)) || (n.type = f.origType, u = f.handler.apply(this, arguments), n.type = t), u
            }
        }
    });
    i.fn.extend({
        on: function(n, t, i, r) {
            return bi(this, n, t, i, r)
        },
        one: function(n, t, i, r) {
            return bi(this, n, t, i, r, 1)
        },
        off: function(n, t, r) {
            var u, f;
            if (n && n.preventDefault && n.handleObj) return u = n.handleObj, i(n.delegateTarget).off(u.namespace ? u.origType + "." + u.namespace : u.origType, u.selector, u.handler), this;
            if ("object" == typeof n) {
                for (f in n) this.off(f, t, n[f]);
                return this
            }
            return !1 !== t && "function" != typeof t || (r = t, t = void 0), !1 === r && (r = st), this.each(function() {
                i.event.remove(this, n, r, t)
            })
        }
    });
    var he = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
        ce = /<script|<style|<link/i,
        le = /checked\s*(?:[^=]|=\s*.checked.)/i,
        ae = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

    function ou(n, t) {
        return c(n, "table") && c(11 !== t.nodeType ? t : t.firstChild, "tr") && i(n).children("tbody")[0] || n
    }

    function ve(n) {
        return n.type = (null !== n.getAttribute("type")) + "/" + n.type, n
    }

    function ye(n) {
        return "true/" === (n.type || "").slice(0, 5) ? n.type = n.type.slice(5) : n.removeAttribute("type"), n
    }

    function su(n, t) {
        var u, c, f, s, h, l, a, e;
        if (1 === t.nodeType) {
            if (r.hasData(n) && (s = r.access(n), h = r.set(t, s), e = s.events))
                for (f in delete h.handle, h.events = {}, e)
                    for (u = 0, c = e[f].length; u < c; u++) i.event.add(t, f, e[f][u]);
            o.hasData(n) && (l = o.access(n), a = i.extend({}, l), o.set(t, a))
        }
    }

    function ht(n, t, f, o) {
        t = sr.apply([], t);
        var a, w, l, v, h, b, c = 0,
            y = n.length,
            d = y - 1,
            p = t[0],
            k = u(p);
        if (k || 1 < y && "string" == typeof p && !e.checkClone && le.test(p)) return n.each(function(i) {
            var r = n.eq(i);
            k && (t[0] = p.call(this, i, r.html()));
            ht(r, t, f, o)
        });
        if (y && (w = (a = fu(t, n[0].ownerDocument, !1, n, o)).firstChild, 1 === a.childNodes.length && (a = w), w || o)) {
            for (v = (l = i.map(s(a, "script"), ve)).length; c < y; c++) h = a, c !== d && (h = i.clone(h, !0, !0), v && i.merge(l, s(h, "script"))), f.call(n[c], h, c);
            if (v)
                for (b = l[l.length - 1].ownerDocument, i.map(l, ye), c = 0; c < v; c++) h = l[c], uu.test(h.type || "") && !r.access(h, "globalEval") && i.contains(b, h) && (h.src && "module" !== (h.type || "").toLowerCase() ? i._evalUrl && !h.noModule && i._evalUrl(h.src, {
                    nonce: h.nonce || h.getAttribute("nonce")
                }) : lr(h.textContent.replace(ae, ""), h, b))
        }
        return n
    }

    function hu(n, t, r) {
        for (var u, e = t ? i.filter(t, n) : n, f = 0; null != (u = e[f]); f++) r || 1 !== u.nodeType || i.cleanData(s(u)), u.parentNode && (r && ft(u) && wi(s(u, "script")), u.parentNode.removeChild(u));
        return n
    }
    i.extend({
        htmlPrefilter: function(n) {
            return n.replace(he, "<$1><\/$2>")
        },
        clone: function(n, t, r) {
            var u, c, o, f, l, a, v, h = n.cloneNode(!0),
                y = ft(n);
            if (!(e.noCloneChecked || 1 !== n.nodeType && 11 !== n.nodeType || i.isXMLDoc(n)))
                for (f = s(h), u = 0, c = (o = s(n)).length; u < c; u++) l = o[u], a = f[u], void 0, "input" === (v = a.nodeName.toLowerCase()) && pt.test(l.type) ? a.checked = l.checked : "input" !== v && "textarea" !== v || (a.defaultValue = l.defaultValue);
            if (t)
                if (r)
                    for (o = o || s(n), f = f || s(h), u = 0, c = o.length; u < c; u++) su(o[u], f[u]);
                else su(n, h);
            return 0 < (f = s(h, "script")).length && wi(f, !y && s(n, "script")), h
        },
        cleanData: function(n) {
            for (var u, t, f, s = i.event.special, e = 0; void 0 !== (t = n[e]); e++)
                if (fi(t)) {
                    if (u = t[r.expando]) {
                        if (u.events)
                            for (f in u.events) s[f] ? i.event.remove(t, f) : i.removeEvent(t, f, u.handle);
                        t[r.expando] = void 0
                    }
                    t[o.expando] && (t[o.expando] = void 0)
                }
        }
    });
    i.fn.extend({
        detach: function(n) {
            return hu(this, n, !0)
        },
        remove: function(n) {
            return hu(this, n)
        },
        text: function(n) {
            return p(this, function(n) {
                return void 0 === n ? i.text(this) : this.empty().each(function() {
                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = n)
                })
            }, null, n, arguments.length)
        },
        append: function() {
            return ht(this, arguments, function(n) {
                1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || ou(this, n).appendChild(n)
            })
        },
        prepend: function() {
            return ht(this, arguments, function(n) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = ou(this, n);
                    t.insertBefore(n, t.firstChild)
                }
            })
        },
        before: function() {
            return ht(this, arguments, function(n) {
                this.parentNode && this.parentNode.insertBefore(n, this)
            })
        },
        after: function() {
            return ht(this, arguments, function(n) {
                this.parentNode && this.parentNode.insertBefore(n, this.nextSibling)
            })
        },
        empty: function() {
            for (var n, t = 0; null != (n = this[t]); t++) 1 === n.nodeType && (i.cleanData(s(n, !1)), n.textContent = "");
            return this
        },
        clone: function(n, t) {
            return n = null != n && n, t = null == t ? n : t, this.map(function() {
                return i.clone(this, n, t)
            })
        },
        html: function(n) {
            return p(this, function(n) {
                var t = this[0] || {},
                    r = 0,
                    u = this.length;
                if (void 0 === n && 1 === t.nodeType) return t.innerHTML;
                if ("string" == typeof n && !ce.test(n) && !h[(ru.exec(n) || ["", ""])[1].toLowerCase()]) {
                    n = i.htmlPrefilter(n);
                    try {
                        for (; r < u; r++) 1 === (t = this[r] || {}).nodeType && (i.cleanData(s(t, !1)), t.innerHTML = n);
                        t = 0
                    } catch (n) {}
                }
                t && this.empty().append(n)
            }, null, n, arguments.length)
        },
        replaceWith: function() {
            var n = [];
            return ht(this, arguments, function(t) {
                var r = this.parentNode;
                i.inArray(this, n) < 0 && (i.cleanData(s(this)), r && r.replaceChild(t, this))
            }, n)
        }
    });
    i.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(n, t) {
        i.fn[n] = function(n) {
            for (var u, f = [], e = i(n), o = e.length - 1, r = 0; r <= o; r++) u = r === o ? this : this.clone(!0), i(e[r])[t](u), ai.apply(f, u.get());
            return this.pushStack(f)
        }
    });
    var ki = new RegExp("^(" + gr + ")(?!px)[a-z%]+$", "i"),
        hi = function(t) {
            var i = t.ownerDocument.defaultView;
            return i && i.opener || (i = n), i.getComputedStyle(t)
        },
        pe = new RegExp(w.join("|"), "i");

    function bt(n, t, r) {
        var o, s, h, f, u = n.style;
        return (r = r || hi(n)) && ("" !== (f = r.getPropertyValue(t) || r[t]) || ft(n) || (f = i.style(n, t)), !e.pixelBoxStyles() && ki.test(f) && pe.test(t) && (o = u.width, s = u.minWidth, h = u.maxWidth, u.minWidth = u.maxWidth = u.width = f, f = r.width, u.width = o, u.minWidth = s, u.maxWidth = h)), void 0 !== f ? f + "" : f
    }

    function cu(n, t) {
        return {
            get: function() {
                if (!n()) return (this.get = t).apply(this, arguments);
                delete this.get
            }
        }
    }! function() {
        function r() {
            if (t) {
                o.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0";
                t.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%";
                yt.appendChild(o).appendChild(t);
                var i = n.getComputedStyle(t);
                s = "1%" !== i.top;
                a = 12 === u(i.marginLeft);
                t.style.right = "60%";
                l = 36 === u(i.right);
                h = 36 === u(i.width);
                t.style.position = "absolute";
                c = 12 === u(t.offsetWidth / 3);
                yt.removeChild(o);
                t = null
            }
        }

        function u(n) {
            return Math.round(parseFloat(n))
        }
        var s, h, c, l, a, o = f.createElement("div"),
            t = f.createElement("div");
        t.style && (t.style.backgroundClip = "content-box", t.cloneNode(!0).style.backgroundClip = "", e.clearCloneStyle = "content-box" === t.style.backgroundClip, i.extend(e, {
            boxSizingReliable: function() {
                return r(), h
            },
            pixelBoxStyles: function() {
                return r(), l
            },
            pixelPosition: function() {
                return r(), s
            },
            reliableMarginLeft: function() {
                return r(), a
            },
            scrollboxSize: function() {
                return r(), c
            }
        }))
    }();
    var lu = ["Webkit", "Moz", "ms"],
        au = f.createElement("div").style,
        vu = {};

    function di(n) {
        var t = i.cssProps[n] || vu[n];
        return t || (n in au ? n : vu[n] = function(n) {
            for (var i = n[0].toUpperCase() + n.slice(1), t = lu.length; t--;)
                if ((n = lu[t] + i) in au) return n
        }(n) || n)
    }
    var we = /^(none|table(?!-c[ea]).+)/,
        yu = /^--/,
        be = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        pu = {
            letterSpacing: "0",
            fontWeight: "400"
        };

    function wu(n, t, i) {
        var r = vt.exec(t);
        return r ? Math.max(0, r[2] - (i || 0)) + (r[3] || "px") : t
    }

    function gi(n, t, r, u, f, e) {
        var o = "width" === t ? 1 : 0,
            h = 0,
            s = 0;
        if (r === (u ? "border" : "content")) return 0;
        for (; o < 4; o += 2) "margin" === r && (s += i.css(n, r + w[o], !0, f)), u ? ("content" === r && (s -= i.css(n, "padding" + w[o], !0, f)), "margin" !== r && (s -= i.css(n, "border" + w[o] + "Width", !0, f))) : (s += i.css(n, "padding" + w[o], !0, f), "padding" !== r ? s += i.css(n, "border" + w[o] + "Width", !0, f) : h += i.css(n, "border" + w[o] + "Width", !0, f));
        return !u && 0 <= e && (s += Math.max(0, Math.ceil(n["offset" + t[0].toUpperCase() + t.slice(1)] - e - s - h - .5)) || 0), s
    }

    function bu(n, t, r) {
        var f = hi(n),
            o = (!e.boxSizingReliable() || r) && "border-box" === i.css(n, "boxSizing", !1, f),
            s = o,
            u = bt(n, t, f),
            h = "offset" + t[0].toUpperCase() + t.slice(1);
        if (ki.test(u)) {
            if (!r) return u;
            u = "auto"
        }
        return (!e.boxSizingReliable() && o || "auto" === u || !parseFloat(u) && "inline" === i.css(n, "display", !1, f)) && n.getClientRects().length && (o = "border-box" === i.css(n, "boxSizing", !1, f), (s = h in n) && (u = n[h])), (u = parseFloat(u) || 0) + gi(n, t, r || (o ? "border" : "content"), s, f, u) + "px"
    }

    function l(n, t, i, r, u) {
        return new l.prototype.init(n, t, i, r, u)
    }
    i.extend({
        cssHooks: {
            opacity: {
                get: function(n, t) {
                    if (t) {
                        var i = bt(n, "opacity");
                        return "" === i ? "1" : i
                    }
                }
            }
        },
        cssNumber: {
            animationIterationCount: !0,
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            gridArea: !0,
            gridColumn: !0,
            gridColumnEnd: !0,
            gridColumnStart: !0,
            gridRow: !0,
            gridRowEnd: !0,
            gridRowStart: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {},
        style: function(n, t, r, u) {
            if (n && 3 !== n.nodeType && 8 !== n.nodeType && n.style) {
                var f, h, o, c = y(t),
                    l = yu.test(t),
                    s = n.style;
                if (l || (t = di(c)), o = i.cssHooks[t] || i.cssHooks[c], void 0 === r) return o && "get" in o && void 0 !== (f = o.get(n, !1, u)) ? f : s[t];
                "string" == (h = typeof r) && (f = vt.exec(r)) && f[1] && (r = tu(n, t, f), h = "number");
                null != r && r == r && ("number" !== h || l || (r += f && f[3] || (i.cssNumber[c] ? "" : "px")), e.clearCloneStyle || "" !== r || 0 !== t.indexOf("background") || (s[t] = "inherit"), o && "set" in o && void 0 === (r = o.set(n, r, u)) || (l ? s.setProperty(t, r) : s[t] = r))
            }
        },
        css: function(n, t, r, u) {
            var f, e, o, s = y(t);
            return yu.test(t) || (t = di(s)), (o = i.cssHooks[t] || i.cssHooks[s]) && "get" in o && (f = o.get(n, !0, r)), void 0 === f && (f = bt(n, t, u)), "normal" === f && t in pu && (f = pu[t]), "" === r || r ? (e = parseFloat(f), !0 === r || isFinite(e) ? e || 0 : f) : f
        }
    });
    i.each(["height", "width"], function(n, t) {
        i.cssHooks[t] = {
            get: function(n, r, u) {
                if (r) return !we.test(i.css(n, "display")) || n.getClientRects().length && n.getBoundingClientRect().width ? bu(n, t, u) : nu(n, be, function() {
                    return bu(n, t, u)
                })
            },
            set: function(n, r, u) {
                var s, f = hi(n),
                    h = !e.scrollboxSize() && "absolute" === f.position,
                    c = (h || u) && "border-box" === i.css(n, "boxSizing", !1, f),
                    o = u ? gi(n, t, u, c, f) : 0;
                return c && h && (o -= Math.ceil(n["offset" + t[0].toUpperCase() + t.slice(1)] - parseFloat(f[t]) - gi(n, t, "border", !1, f) - .5)), o && (s = vt.exec(r)) && "px" !== (s[3] || "px") && (n.style[t] = r, r = i.css(n, t)), wu(0, r, o)
            }
        }
    });
    i.cssHooks.marginLeft = cu(e.reliableMarginLeft, function(n, t) {
        if (t) return (parseFloat(bt(n, "marginLeft")) || n.getBoundingClientRect().left - nu(n, {
            marginLeft: 0
        }, function() {
            return n.getBoundingClientRect().left
        })) + "px"
    });
    i.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(n, t) {
        i.cssHooks[n + t] = {
            expand: function(i) {
                for (var r = 0, f = {}, u = "string" == typeof i ? i.split(" ") : [i]; r < 4; r++) f[n + w[r] + t] = u[r] || u[r - 2] || u[0];
                return f
            }
        };
        "margin" !== n && (i.cssHooks[n + t].set = wu)
    });
    i.fn.extend({
        css: function(n, t) {
            return p(this, function(n, t, r) {
                var f, e, o = {},
                    u = 0;
                if (Array.isArray(t)) {
                    for (f = hi(n), e = t.length; u < e; u++) o[t[u]] = i.css(n, t[u], !1, f);
                    return o
                }
                return void 0 !== r ? i.style(n, t, r) : i.css(n, t)
            }, n, t, 1 < arguments.length)
        }
    });
    ((i.Tween = l).prototype = {
        constructor: l,
        init: function(n, t, r, u, f, e) {
            this.elem = n;
            this.prop = r;
            this.easing = f || i.easing._default;
            this.options = t;
            this.start = this.now = this.cur();
            this.end = u;
            this.unit = e || (i.cssNumber[r] ? "" : "px")
        },
        cur: function() {
            var n = l.propHooks[this.prop];
            return n && n.get ? n.get(this) : l.propHooks._default.get(this)
        },
        run: function(n) {
            var t, r = l.propHooks[this.prop];
            return this.pos = this.options.duration ? t = i.easing[this.easing](n, this.options.duration * n, 0, 1, this.options.duration) : t = n, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), r && r.set ? r.set(this) : l.propHooks._default.set(this), this
        }
    }).init.prototype = l.prototype;
    (l.propHooks = {
        _default: {
            get: function(n) {
                var t;
                return 1 !== n.elem.nodeType || null != n.elem[n.prop] && null == n.elem.style[n.prop] ? n.elem[n.prop] : (t = i.css(n.elem, n.prop, "")) && "auto" !== t ? t : 0
            },
            set: function(n) {
                i.fx.step[n.prop] ? i.fx.step[n.prop](n) : 1 !== n.elem.nodeType || !i.cssHooks[n.prop] && null == n.elem.style[di(n.prop)] ? n.elem[n.prop] = n.now : i.style(n.elem, n.prop, n.now + n.unit)
            }
        }
    }).scrollTop = l.propHooks.scrollLeft = {
        set: function(n) {
            n.elem.nodeType && n.elem.parentNode && (n.elem[n.prop] = n.now)
        }
    };
    i.easing = {
        linear: function(n) {
            return n
        },
        swing: function(n) {
            return .5 - Math.cos(n * Math.PI) / 2
        },
        _default: "swing"
    };
    i.fx = l.prototype.init;
    i.fx.step = {};
    var ct, ci, lt, ku, ke = /^(?:toggle|show|hide)$/,
        de = /queueHooks$/;

    function nr() {
        ci && (!1 === f.hidden && n.requestAnimationFrame ? n.requestAnimationFrame(nr) : n.setTimeout(nr, i.fx.interval), i.fx.tick())
    }

    function du() {
        return n.setTimeout(function() {
            ct = void 0
        }), ct = Date.now()
    }

    function li(n, t) {
        var u, r = 0,
            i = {
                height: n
            };
        for (t = t ? 1 : 0; r < 4; r += 2 - t) i["margin" + (u = w[r])] = i["padding" + u] = n;
        return t && (i.opacity = i.width = n), i
    }

    function gu(n, t, i) {
        for (var u, f = (a.tweeners[t] || []).concat(a.tweeners["*"]), r = 0, e = f.length; r < e; r++)
            if (u = f[r].call(i, t, n)) return u
    }

    function a(n, t, r) {
        var o, s, h = 0,
            v = a.prefilters.length,
            e = i.Deferred().always(function() {
                delete l.elem
            }),
            l = function() {
                if (s) return !1;
                for (var o = ct || du(), t = Math.max(0, f.startTime + f.duration - o), i = 1 - (t / f.duration || 0), r = 0, u = f.tweens.length; r < u; r++) f.tweens[r].run(i);
                return e.notifyWith(n, [f, i, t]), i < 1 && u ? t : (u || e.notifyWith(n, [f, 1, 0]), e.resolveWith(n, [f]), !1)
            },
            f = e.promise({
                elem: n,
                props: i.extend({}, t),
                opts: i.extend(!0, {
                    specialEasing: {},
                    easing: i.easing._default
                }, r),
                originalProperties: t,
                originalOptions: r,
                startTime: ct || du(),
                duration: r.duration,
                tweens: [],
                createTween: function(t, r) {
                    var u = i.Tween(n, f.opts, t, r, f.opts.specialEasing[t] || f.opts.easing);
                    return f.tweens.push(u), u
                },
                stop: function(t) {
                    var i = 0,
                        r = t ? f.tweens.length : 0;
                    if (s) return this;
                    for (s = !0; i < r; i++) f.tweens[i].run(1);
                    return t ? (e.notifyWith(n, [f, 1, 0]), e.resolveWith(n, [f, t])) : e.rejectWith(n, [f, t]), this
                }
            }),
            c = f.props;
        for (! function(n, t) {
                var r, f, e, u, o;
                for (r in n)
                    if (e = t[f = y(r)], u = n[r], Array.isArray(u) && (e = u[1], u = n[r] = u[0]), r !== f && (n[f] = u, delete n[r]), (o = i.cssHooks[f]) && "expand" in o)
                        for (r in u = o.expand(u), delete n[f], u) r in n || (n[r] = u[r], t[r] = e);
                    else t[f] = e
            }(c, f.opts.specialEasing); h < v; h++)
            if (o = a.prefilters[h].call(f, n, c, f.opts)) return u(o.stop) && (i._queueHooks(f.elem, f.opts.queue).stop = o.stop.bind(o)), o;
        return i.map(c, gu, f), u(f.opts.start) && f.opts.start.call(n, f), f.progress(f.opts.progress).done(f.opts.done, f.opts.complete).fail(f.opts.fail).always(f.opts.always), i.fx.timer(i.extend(l, {
            elem: n,
            anim: f,
            queue: f.opts.queue
        })), f
    }
    i.Animation = i.extend(a, {
        tweeners: {
            "*": [function(n, t) {
                var i = this.createTween(n, t);
                return tu(i.elem, n, vt.exec(t), i), i
            }]
        },
        tweener: function(n, t) {
            u(n) ? (t = n, n = ["*"]) : n = n.match(v);
            for (var i, r = 0, f = n.length; r < f; r++) i = n[r], a.tweeners[i] = a.tweeners[i] || [], a.tweeners[i].unshift(t)
        },
        prefilters: [function(n, t, u) {
            var f, y, w, c, b, h, o, l, k = "width" in t || "height" in t,
                v = this,
                p = {},
                s = n.style,
                a = n.nodeType && ei(n),
                e = r.get(n, "fxshow");
            for (f in u.queue || (null == (c = i._queueHooks(n, "fx")).unqueued && (c.unqueued = 0, b = c.empty.fire, c.empty.fire = function() {
                    c.unqueued || b()
                }), c.unqueued++, v.always(function() {
                    v.always(function() {
                        c.unqueued--;
                        i.queue(n, "fx").length || c.empty.fire()
                    })
                })), t)
                if (y = t[f], ke.test(y)) {
                    if (delete t[f], w = w || "toggle" === y, y === (a ? "hide" : "show")) {
                        if ("show" !== y || !e || void 0 === e[f]) continue;
                        a = !0
                    }
                    p[f] = e && e[f] || i.style(n, f)
                } if ((h = !i.isEmptyObject(t)) || !i.isEmptyObject(p))
                for (f in k && 1 === n.nodeType && (u.overflow = [s.overflow, s.overflowX, s.overflowY], null == (o = e && e.display) && (o = r.get(n, "display")), "none" === (l = i.css(n, "display")) && (o ? l = o : (et([n], !0), o = n.style.display || o, l = i.css(n, "display"), et([n]))), ("inline" === l || "inline-block" === l && null != o) && "none" === i.css(n, "float") && (h || (v.done(function() {
                        s.display = o
                    }), null == o && (l = s.display, o = "none" === l ? "" : l)), s.display = "inline-block")), u.overflow && (s.overflow = "hidden", v.always(function() {
                        s.overflow = u.overflow[0];
                        s.overflowX = u.overflow[1];
                        s.overflowY = u.overflow[2]
                    })), h = !1, p) h || (e ? "hidden" in e && (a = e.hidden) : e = r.access(n, "fxshow", {
                    display: o
                }), w && (e.hidden = !a), a && et([n], !0), v.done(function() {
                    for (f in a || et([n]), r.remove(n, "fxshow"), p) i.style(n, f, p[f])
                })), h = gu(a ? e[f] : 0, f, v), f in e || (e[f] = h.start, a && (h.end = h.start, h.start = 0))
        }],
        prefilter: function(n, t) {
            t ? a.prefilters.unshift(n) : a.prefilters.push(n)
        }
    });
    i.speed = function(n, t, r) {
        var f = n && "object" == typeof n ? i.extend({}, n) : {
            complete: r || !r && t || u(n) && n,
            duration: n,
            easing: r && t || t && !u(t) && t
        };
        return i.fx.off ? f.duration = 0 : "number" != typeof f.duration && (f.duration = f.duration in i.fx.speeds ? i.fx.speeds[f.duration] : i.fx.speeds._default), null != f.queue && !0 !== f.queue || (f.queue = "fx"), f.old = f.complete, f.complete = function() {
            u(f.old) && f.old.call(this);
            f.queue && i.dequeue(this, f.queue)
        }, f
    };
    i.fn.extend({
        fadeTo: function(n, t, i, r) {
            return this.filter(ei).css("opacity", 0).show().end().animate({
                opacity: t
            }, n, i, r)
        },
        animate: function(n, t, u, f) {
            var s = i.isEmptyObject(n),
                o = i.speed(t, u, f),
                e = function() {
                    var t = a(this, i.extend({}, n), o);
                    (s || r.get(this, "finish")) && t.stop(!0)
                };
            return e.finish = e, s || !1 === o.queue ? this.each(e) : this.queue(o.queue, e)
        },
        stop: function(n, t, u) {
            var f = function(n) {
                var t = n.stop;
                delete n.stop;
                t(u)
            };
            return "string" != typeof n && (u = t, t = n, n = void 0), t && !1 !== n && this.queue(n || "fx", []), this.each(function() {
                var s = !0,
                    t = null != n && n + "queueHooks",
                    o = i.timers,
                    e = r.get(this);
                if (t) e[t] && e[t].stop && f(e[t]);
                else
                    for (t in e) e[t] && e[t].stop && de.test(t) && f(e[t]);
                for (t = o.length; t--;) o[t].elem !== this || null != n && o[t].queue !== n || (o[t].anim.stop(u), s = !1, o.splice(t, 1));
                !s && u || i.dequeue(this, n)
            })
        },
        finish: function(n) {
            return !1 !== n && (n = n || "fx"), this.each(function() {
                var t, e = r.get(this),
                    u = e[n + "queue"],
                    o = e[n + "queueHooks"],
                    f = i.timers,
                    s = u ? u.length : 0;
                for (e.finish = !0, i.queue(this, n, []), o && o.stop && o.stop.call(this, !0), t = f.length; t--;) f[t].elem === this && f[t].queue === n && (f[t].anim.stop(!0), f.splice(t, 1));
                for (t = 0; t < s; t++) u[t] && u[t].finish && u[t].finish.call(this);
                delete e.finish
            })
        }
    });
    i.each(["toggle", "show", "hide"], function(n, t) {
        var r = i.fn[t];
        i.fn[t] = function(n, i, u) {
            return null == n || "boolean" == typeof n ? r.apply(this, arguments) : this.animate(li(t, !0), n, i, u)
        }
    });
    i.each({
        slideDown: li("show"),
        slideUp: li("hide"),
        slideToggle: li("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function(n, t) {
        i.fn[n] = function(n, i, r) {
            return this.animate(t, n, i, r)
        }
    });
    i.timers = [];
    i.fx.tick = function() {
        var r, n = 0,
            t = i.timers;
        for (ct = Date.now(); n < t.length; n++)(r = t[n])() || t[n] !== r || t.splice(n--, 1);
        t.length || i.fx.stop();
        ct = void 0
    };
    i.fx.timer = function(n) {
        i.timers.push(n);
        i.fx.start()
    };
    i.fx.interval = 13;
    i.fx.start = function() {
        ci || (ci = !0, nr())
    };
    i.fx.stop = function() {
        ci = null
    };
    i.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    };
    i.fn.delay = function(t, r) {
        return t = i.fx && i.fx.speeds[t] || t, r = r || "fx", this.queue(r, function(i, r) {
            var u = n.setTimeout(i, t);
            r.stop = function() {
                n.clearTimeout(u)
            }
        })
    };
    lt = f.createElement("input");
    ku = f.createElement("select").appendChild(f.createElement("option"));
    lt.type = "checkbox";
    e.checkOn = "" !== lt.value;
    e.optSelected = ku.selected;
    (lt = f.createElement("input")).value = "t";
    lt.type = "radio";
    e.radioValue = "t" === lt.value;
    var nf, kt = i.expr.attrHandle;
    i.fn.extend({
        attr: function(n, t) {
            return p(this, i.attr, n, t, 1 < arguments.length)
        },
        removeAttr: function(n) {
            return this.each(function() {
                i.removeAttr(this, n)
            })
        }
    });
    i.extend({
        attr: function(n, t, r) {
            var f, u, e = n.nodeType;
            if (3 !== e && 8 !== e && 2 !== e) return "undefined" == typeof n.getAttribute ? i.prop(n, t, r) : (1 === e && i.isXMLDoc(n) || (u = i.attrHooks[t.toLowerCase()] || (i.expr.match.bool.test(t) ? nf : void 0)), void 0 !== r ? null === r ? void i.removeAttr(n, t) : u && "set" in u && void 0 !== (f = u.set(n, r, t)) ? f : (n.setAttribute(t, r + ""), r) : u && "get" in u && null !== (f = u.get(n, t)) ? f : null == (f = i.find.attr(n, t)) ? void 0 : f)
        },
        attrHooks: {
            type: {
                set: function(n, t) {
                    if (!e.radioValue && "radio" === t && c(n, "input")) {
                        var i = n.value;
                        return n.setAttribute("type", t), i && (n.value = i), t
                    }
                }
            }
        },
        removeAttr: function(n, t) {
            var i, u = 0,
                r = t && t.match(v);
            if (r && 1 === n.nodeType)
                while (i = r[u++]) n.removeAttribute(i)
        }
    });
    nf = {
        set: function(n, t, r) {
            return !1 === t ? i.removeAttr(n, r) : n.setAttribute(r, r), r
        }
    };
    i.each(i.expr.match.bool.source.match(/\w+/g), function(n, t) {
        var r = kt[t] || i.find.attr;
        kt[t] = function(n, t, i) {
            var f, e, u = t.toLowerCase();
            return i || (e = kt[u], kt[u] = f, f = null != r(n, t, i) ? u : null, kt[u] = e), f
        }
    });
    var ge = /^(?:input|select|textarea|button)$/i,
        no = /^(?:a|area)$/i;

    function g(n) {
        return (n.match(v) || []).join(" ")
    }

    function nt(n) {
        return n.getAttribute && n.getAttribute("class") || ""
    }

    function tr(n) {
        return Array.isArray(n) ? n : "string" == typeof n && n.match(v) || []
    }
    i.fn.extend({
        prop: function(n, t) {
            return p(this, i.prop, n, t, 1 < arguments.length)
        },
        removeProp: function(n) {
            return this.each(function() {
                delete this[i.propFix[n] || n]
            })
        }
    });
    i.extend({
        prop: function(n, t, r) {
            var f, u, e = n.nodeType;
            if (3 !== e && 8 !== e && 2 !== e) return 1 === e && i.isXMLDoc(n) || (t = i.propFix[t] || t, u = i.propHooks[t]), void 0 !== r ? u && "set" in u && void 0 !== (f = u.set(n, r, t)) ? f : n[t] = r : u && "get" in u && null !== (f = u.get(n, t)) ? f : n[t]
        },
        propHooks: {
            tabIndex: {
                get: function(n) {
                    var t = i.find.attr(n, "tabindex");
                    return t ? parseInt(t, 10) : ge.test(n.nodeName) || no.test(n.nodeName) && n.href ? 0 : -1
                }
            }
        },
        propFix: {
            "for": "htmlFor",
            "class": "className"
        }
    });
    e.optSelected || (i.propHooks.selected = {
        get: function(n) {
            var t = n.parentNode;
            return t && t.parentNode && t.parentNode.selectedIndex, null
        },
        set: function(n) {
            var t = n.parentNode;
            t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex)
        }
    });
    i.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
        i.propFix[this.toLowerCase()] = this
    });
    i.fn.extend({
        addClass: function(n) {
            var o, t, r, f, e, s, h, c = 0;
            if (u(n)) return this.each(function(t) {
                i(this).addClass(n.call(this, t, nt(this)))
            });
            if ((o = tr(n)).length)
                while (t = this[c++])
                    if (f = nt(t), r = 1 === t.nodeType && " " + g(f) + " ") {
                        for (s = 0; e = o[s++];) r.indexOf(" " + e + " ") < 0 && (r += e + " ");
                        f !== (h = g(r)) && t.setAttribute("class", h)
                    } return this
        },
        removeClass: function(n) {
            var o, r, t, f, e, s, h, c = 0;
            if (u(n)) return this.each(function(t) {
                i(this).removeClass(n.call(this, t, nt(this)))
            });
            if (!arguments.length) return this.attr("class", "");
            if ((o = tr(n)).length)
                while (r = this[c++])
                    if (f = nt(r), t = 1 === r.nodeType && " " + g(f) + " ") {
                        for (s = 0; e = o[s++];)
                            while (-1 < t.indexOf(" " + e + " ")) t = t.replace(" " + e + " ", " ");
                        f !== (h = g(t)) && r.setAttribute("class", h)
                    } return this
        },
        toggleClass: function(n, t) {
            var f = typeof n,
                e = "string" === f || Array.isArray(n);
            return "boolean" == typeof t && e ? t ? this.addClass(n) : this.removeClass(n) : u(n) ? this.each(function(r) {
                i(this).toggleClass(n.call(this, r, nt(this), t), t)
            }) : this.each(function() {
                var t, o, u, s;
                if (e)
                    for (o = 0, u = i(this), s = tr(n); t = s[o++];) u.hasClass(t) ? u.removeClass(t) : u.addClass(t);
                else void 0 !== n && "boolean" !== f || ((t = nt(this)) && r.set(this, "__className__", t), this.setAttribute && this.setAttribute("class", t || !1 === n ? "" : r.get(this, "__className__") || ""))
            })
        },
        hasClass: function(n) {
            for (var t, r = 0, i = " " + n + " "; t = this[r++];)
                if (1 === t.nodeType && -1 < (" " + g(nt(t)) + " ").indexOf(i)) return !0;
            return !1
        }
    });
    var to = /\r/g;
    i.fn.extend({
        val: function(n) {
            var t, r, e, f = this[0];
            return arguments.length ? (e = u(n), this.each(function(r) {
                var u;
                1 === this.nodeType && (null == (u = e ? n.call(this, r, i(this).val()) : n) ? u = "" : "number" == typeof u ? u += "" : Array.isArray(u) && (u = i.map(u, function(n) {
                    return null == n ? "" : n + ""
                })), (t = i.valHooks[this.type] || i.valHooks[this.nodeName.toLowerCase()]) && "set" in t && void 0 !== t.set(this, u, "value") || (this.value = u))
            })) : f ? (t = i.valHooks[f.type] || i.valHooks[f.nodeName.toLowerCase()]) && "get" in t && void 0 !== (r = t.get(f, "value")) ? r : "string" == typeof(r = f.value) ? r.replace(to, "") : null == r ? "" : r : void 0
        }
    });
    i.extend({
        valHooks: {
            option: {
                get: function(n) {
                    var t = i.find.attr(n, "value");
                    return null != t ? t : g(i.text(n))
                }
            },
            select: {
                get: function(n) {
                    for (var e, t, o = n.options, u = n.selectedIndex, f = "select-one" === n.type, s = f ? null : [], h = f ? u + 1 : o.length, r = u < 0 ? h : f ? u : 0; r < h; r++)
                        if (((t = o[r]).selected || r === u) && !t.disabled && (!t.parentNode.disabled || !c(t.parentNode, "optgroup"))) {
                            if (e = i(t).val(), f) return e;
                            s.push(e)
                        } return s
                },
                set: function(n, t) {
                    for (var r, u, f = n.options, e = i.makeArray(t), o = f.length; o--;)((u = f[o]).selected = -1 < i.inArray(i.valHooks.option.get(u), e)) && (r = !0);
                    return r || (n.selectedIndex = -1), e
                }
            }
        }
    });
    i.each(["radio", "checkbox"], function() {
        i.valHooks[this] = {
            set: function(n, t) {
                if (Array.isArray(t)) return n.checked = -1 < i.inArray(i(n).val(), t)
            }
        };
        e.checkOn || (i.valHooks[this].get = function(n) {
            return null === n.getAttribute("value") ? "on" : n.value
        })
    });
    e.focusin = "onfocusin" in n;
    var tf = /^(?:focusinfocus|focusoutblur)$/,
        rf = function(n) {
            n.stopPropagation()
        };
    i.extend(i.event, {
        trigger: function(t, e, o, s) {
            var k, c, l, d, v, y, a, p, w = [o || f],
                h = ii.call(t, "type") ? t.type : t,
                b = ii.call(t, "namespace") ? t.namespace.split(".") : [];
            if (c = p = l = o = o || f, 3 !== o.nodeType && 8 !== o.nodeType && !tf.test(h + i.event.triggered) && (-1 < h.indexOf(".") && (h = (b = h.split(".")).shift(), b.sort()), v = h.indexOf(":") < 0 && "on" + h, (t = t[i.expando] ? t : new i.Event(h, "object" == typeof t && t)).isTrigger = s ? 2 : 3, t.namespace = b.join("."), t.rnamespace = t.namespace ? new RegExp("(^|\\.)" + b.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = void 0, t.target || (t.target = o), e = null == e ? [t] : i.makeArray(e, [t]), a = i.event.special[h] || {}, s || !a.trigger || !1 !== a.trigger.apply(o, e))) {
                if (!s && !a.noBubble && !tt(o)) {
                    for (d = a.delegateType || h, tf.test(d + h) || (c = c.parentNode); c; c = c.parentNode) w.push(c), l = c;
                    l === (o.ownerDocument || f) && w.push(l.defaultView || l.parentWindow || n)
                }
                for (k = 0;
                    (c = w[k++]) && !t.isPropagationStopped();) p = c, t.type = 1 < k ? d : a.bindType || h, (y = (r.get(c, "events") || {})[t.type] && r.get(c, "handle")) && y.apply(c, e), (y = v && c[v]) && y.apply && fi(c) && (t.result = y.apply(c, e), !1 === t.result && t.preventDefault());
                return t.type = h, s || t.isDefaultPrevented() || a._default && !1 !== a._default.apply(w.pop(), e) || !fi(o) || v && u(o[h]) && !tt(o) && ((l = o[v]) && (o[v] = null), i.event.triggered = h, t.isPropagationStopped() && p.addEventListener(h, rf), o[h](), t.isPropagationStopped() && p.removeEventListener(h, rf), i.event.triggered = void 0, l && (o[v] = l)), t.result
            }
        },
        simulate: function(n, t, r) {
            var u = i.extend(new i.Event, r, {
                type: n,
                isSimulated: !0
            });
            i.event.trigger(u, null, t)
        }
    });
    i.fn.extend({
        trigger: function(n, t) {
            return this.each(function() {
                i.event.trigger(n, t, this)
            })
        },
        triggerHandler: function(n, t) {
            var r = this[0];
            if (r) return i.event.trigger(n, t, r, !0)
        }
    });
    e.focusin || i.each({
        focus: "focusin",
        blur: "focusout"
    }, function(n, t) {
        var u = function(n) {
            i.event.simulate(t, n.target, i.event.fix(n))
        };
        i.event.special[t] = {
            setup: function() {
                var i = this.ownerDocument || this,
                    f = r.access(i, t);
                f || i.addEventListener(n, u, !0);
                r.access(i, t, (f || 0) + 1)
            },
            teardown: function() {
                var i = this.ownerDocument || this,
                    f = r.access(i, t) - 1;
                f ? r.access(i, t, f) : (i.removeEventListener(n, u, !0), r.remove(i, t))
            }
        }
    });
    var dt = n.location,
        uf = Date.now(),
        ir = /\?/;
    i.parseXML = function(t) {
        var r;
        if (!t || "string" != typeof t) return null;
        try {
            r = (new n.DOMParser).parseFromString(t, "text/xml")
        } catch (t) {
            r = void 0
        }
        return r && !r.getElementsByTagName("parsererror").length || i.error("Invalid XML: " + t), r
    };
    var io = /\[\]$/,
        ff = /\r?\n/g,
        ro = /^(?:submit|button|image|reset|file)$/i,
        uo = /^(?:input|select|textarea|keygen)/i;

    function rr(n, t, r, u) {
        var f;
        if (Array.isArray(t)) i.each(t, function(t, i) {
            r || io.test(n) ? u(n, i) : rr(n + "[" + ("object" == typeof i && null != i ? t : "") + "]", i, r, u)
        });
        else if (r || "object" !== it(t)) u(n, t);
        else
            for (f in t) rr(n + "[" + f + "]", t[f], r, u)
    }
    i.param = function(n, t) {
        var r, f = [],
            e = function(n, t) {
                var i = u(t) ? t() : t;
                f[f.length] = encodeURIComponent(n) + "=" + encodeURIComponent(null == i ? "" : i)
            };
        if (null == n) return "";
        if (Array.isArray(n) || n.jquery && !i.isPlainObject(n)) i.each(n, function() {
            e(this.name, this.value)
        });
        else
            for (r in n) rr(r, n[r], t, e);
        return f.join("&")
    };
    i.fn.extend({
        serialize: function() {
            return i.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var n = i.prop(this, "elements");
                return n ? i.makeArray(n) : this
            }).filter(function() {
                var n = this.type;
                return this.name && !i(this).is(":disabled") && uo.test(this.nodeName) && !ro.test(n) && (this.checked || !pt.test(n))
            }).map(function(n, t) {
                var r = i(this).val();
                return null == r ? null : Array.isArray(r) ? i.map(r, function(n) {
                    return {
                        name: t.name,
                        value: n.replace(ff, "\r\n")
                    }
                }) : {
                    name: t.name,
                    value: r.replace(ff, "\r\n")
                }
            }).get()
        }
    });
    var fo = /%20/g,
        eo = /#.*$/,
        oo = /([?&])_=[^&]*/,
        so = /^(.*?):[ \t]*([^\r\n]*)$/gm,
        ho = /^(?:GET|HEAD)$/,
        co = /^\/\//,
        ef = {},
        ur = {},
        of = "*/".concat("*"),
        fr = f.createElement("a");

    function sf(n) {
        return function(t, i) {
            "string" != typeof t && (i = t, t = "*");
            var r, f = 0,
                e = t.toLowerCase().match(v) || [];
            if (u(i))
                while (r = e[f++]) "+" === r[0] ? (r = r.slice(1) || "*", (n[r] = n[r] || []).unshift(i)) : (n[r] = n[r] || []).push(i)
        }
    }

    function hf(n, t, r, u) {
        var f = {},
            o = n === ur;

        function e(s) {
            var h;
            return f[s] = !0, i.each(n[s] || [], function(n, i) {
                var s = i(t, r, u);
                return "string" != typeof s || o || f[s] ? o ? !(h = s) : void 0 : (t.dataTypes.unshift(s), e(s), !1)
            }), h
        }
        return e(t.dataTypes[0]) || !f["*"] && e("*")
    }

    function er(n, t) {
        var r, u, f = i.ajaxSettings.flatOptions || {};
        for (r in t) void 0 !== t[r] && ((f[r] ? n : u || (u = {}))[r] = t[r]);
        return u && i.extend(!0, n, u), n
    }
    fr.href = dt.href;
    i.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: dt.href,
            type: "GET",
            isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(dt.protocol),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": of ,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /\bxml\b/,
                html: /\bhtml/,
                json: /\bjson\b/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": JSON.parse,
                "text xml": i.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(n, t) {
            return t ? er(er(n, i.ajaxSettings), t) : er(i.ajaxSettings, n)
        },
        ajaxPrefilter: sf(ef),
        ajaxTransport: sf(ur),
        ajax: function(t, r) {
            "object" == typeof t && (r = t, t = void 0);
            r = r || {};
            var l, o, k, a, d, c, s, y, g, p, u = i.ajaxSetup({}, r),
                h = u.context || u,
                nt = u.context && (h.nodeType || h.jquery) ? i(h) : i.event,
                tt = i.Deferred(),
                it = i.Callbacks("once memory"),
                w = u.statusCode || {},
                rt = {},
                ut = {},
                ft = "canceled",
                e = {
                    readyState: 0,
                    getResponseHeader: function(n) {
                        var t;
                        if (s) {
                            if (!a)
                                for (a = {}; t = so.exec(k);) a[t[1].toLowerCase() + " "] = (a[t[1].toLowerCase() + " "] || []).concat(t[2]);
                            t = a[n.toLowerCase() + " "]
                        }
                        return null == t ? null : t.join(", ")
                    },
                    getAllResponseHeaders: function() {
                        return s ? k : null
                    },
                    setRequestHeader: function(n, t) {
                        return null == s && (n = ut[n.toLowerCase()] = ut[n.toLowerCase()] || n, rt[n] = t), this
                    },
                    overrideMimeType: function(n) {
                        return null == s && (u.mimeType = n), this
                    },
                    statusCode: function(n) {
                        var t;
                        if (n)
                            if (s) e.always(n[e.status]);
                            else
                                for (t in n) w[t] = [w[t], n[t]];
                        return this
                    },
                    abort: function(n) {
                        var t = n || ft;
                        return l && l.abort(t), b(0, t), this
                    }
                };
            if (tt.promise(e), u.url = ((t || u.url || dt.href) + "").replace(co, dt.protocol + "//"), u.type = r.method || r.type || u.method || u.type, u.dataTypes = (u.dataType || "*").toLowerCase().match(v) || [""], null == u.crossDomain) {
                c = f.createElement("a");
                try {
                    c.href = u.url;
                    c.href = c.href;
                    u.crossDomain = fr.protocol + "//" + fr.host != c.protocol + "//" + c.host
                } catch (t) {
                    u.crossDomain = !0
                }
            }
            if (u.data && u.processData && "string" != typeof u.data && (u.data = i.param(u.data, u.traditional)), hf(ef, u, r, e), s) return e;
            for (g in (y = i.event && u.global) && 0 == i.active++ && i.event.trigger("ajaxStart"), u.type = u.type.toUpperCase(), u.hasContent = !ho.test(u.type), o = u.url.replace(eo, ""), u.hasContent ? u.data && u.processData && 0 === (u.contentType || "").indexOf("application/x-www-form-urlencoded") && (u.data = u.data.replace(fo, "+")) : (p = u.url.slice(o.length), u.data && (u.processData || "string" == typeof u.data) && (o += (ir.test(o) ? "&" : "?") + u.data, delete u.data), !1 === u.cache && (o = o.replace(oo, "$1"), p = (ir.test(o) ? "&" : "?") + "_=" + uf++ + p), u.url = o + p), u.ifModified && (i.lastModified[o] && e.setRequestHeader("If-Modified-Since", i.lastModified[o]), i.etag[o] && e.setRequestHeader("If-None-Match", i.etag[o])), (u.data && u.hasContent && !1 !== u.contentType || r.contentType) && e.setRequestHeader("Content-Type", u.contentType), e.setRequestHeader("Accept", u.dataTypes[0] && u.accepts[u.dataTypes[0]] ? u.accepts[u.dataTypes[0]] + ("*" !== u.dataTypes[0] ? ", " + of +"; q=0.01" : "") : u.accepts["*"]), u.headers) e.setRequestHeader(g, u.headers[g]);
            if (u.beforeSend && (!1 === u.beforeSend.call(h, e, u) || s)) return e.abort();
            if (ft = "abort", it.add(u.complete), e.done(u.success), e.fail(u.error), l = hf(ur, u, r, e)) {
                if (e.readyState = 1, y && nt.trigger("ajaxSend", [e, u]), s) return e;
                u.async && 0 < u.timeout && (d = n.setTimeout(function() {
                    e.abort("timeout")
                }, u.timeout));
                try {
                    s = !1;
                    l.send(rt, b)
                } catch (t) {
                    if (s) throw t;
                    b(-1, t)
                }
            } else b(-1, "No Transport");

            function b(t, r, f, c) {
                var v, rt, b, p, g, a = r;
                s || (s = !0, d && n.clearTimeout(d), l = void 0, k = c || "", e.readyState = 0 < t ? 4 : 0, v = 200 <= t && t < 300 || 304 === t, f && (p = function(n, t, i) {
                    for (var e, u, f, o, s = n.contents, r = n.dataTypes;
                        "*" === r[0];) r.shift(), void 0 === e && (e = n.mimeType || t.getResponseHeader("Content-Type"));
                    if (e)
                        for (u in s)
                            if (s[u] && s[u].test(e)) {
                                r.unshift(u);
                                break
                            } if (r[0] in i) f = r[0];
                    else {
                        for (u in i) {
                            if (!r[0] || n.converters[u + " " + r[0]]) {
                                f = u;
                                break
                            }
                            o || (o = u)
                        }
                        f = f || o
                    }
                    if (f) return f !== r[0] && r.unshift(f), i[f]
                }(u, e, f)), p = function(n, t, i, r) {
                    var h, u, f, s, e, o = {},
                        c = n.dataTypes.slice();
                    if (c[1])
                        for (f in n.converters) o[f.toLowerCase()] = n.converters[f];
                    for (u = c.shift(); u;)
                        if (n.responseFields[u] && (i[n.responseFields[u]] = t), !e && r && n.dataFilter && (t = n.dataFilter(t, n.dataType)), e = u, u = c.shift())
                            if ("*" === u) u = e;
                            else if ("*" !== e && e !== u) {
                        if (!(f = o[e + " " + u] || o["* " + u]))
                            for (h in o)
                                if ((s = h.split(" "))[1] === u && (f = o[e + " " + s[0]] || o["* " + s[0]])) {
                                    !0 === f ? f = o[h] : !0 !== o[h] && (u = s[0], c.unshift(s[1]));
                                    break
                                } if (!0 !== f)
                            if (f && n.throws) t = f(t);
                            else try {
                                t = f(t)
                            } catch (n) {
                                return {
                                    state: "parsererror",
                                    error: f ? n : "No conversion from " + e + " to " + u
                                }
                            }
                    }
                    return {
                        state: "success",
                        data: t
                    }
                }(u, p, e, v), v ? (u.ifModified && ((g = e.getResponseHeader("Last-Modified")) && (i.lastModified[o] = g), (g = e.getResponseHeader("etag")) && (i.etag[o] = g)), 204 === t || "HEAD" === u.type ? a = "nocontent" : 304 === t ? a = "notmodified" : (a = p.state, rt = p.data, v = !(b = p.error))) : (b = a, !t && a || (a = "error", t < 0 && (t = 0))), e.status = t, e.statusText = (r || a) + "", v ? tt.resolveWith(h, [rt, a, e]) : tt.rejectWith(h, [e, a, b]), e.statusCode(w), w = void 0, y && nt.trigger(v ? "ajaxSuccess" : "ajaxError", [e, u, v ? rt : b]), it.fireWith(h, [e, a]), y && (nt.trigger("ajaxComplete", [e, u]), --i.active || i.event.trigger("ajaxStop")))
            }
            return e
        },
        getJSON: function(n, t, r) {
            return i.get(n, t, r, "json")
        },
        getScript: function(n, t) {
            return i.get(n, void 0, t, "script")
        }
    });
    i.each(["get", "post"], function(n, t) {
        i[t] = function(n, r, f, e) {
            return u(r) && (e = e || f, f = r, r = void 0), i.ajax(i.extend({
                url: n,
                type: t,
                dataType: e,
                data: r,
                success: f
            }, i.isPlainObject(n) && n))
        }
    });
    i._evalUrl = function(n, t) {
        return i.ajax({
            url: n,
            type: "GET",
            dataType: "script",
            cache: !0,
            async: !1,
            global: !1,
            converters: {
                "text script": function() {}
            },
            dataFilter: function(n) {
                i.globalEval(n, t)
            }
        })
    };
    i.fn.extend({
        wrapAll: function(n) {
            var t;
            return this[0] && (u(n) && (n = n.call(this[0])), t = i(n, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function() {
                for (var n = this; n.firstElementChild;) n = n.firstElementChild;
                return n
            }).append(this)), this
        },
        wrapInner: function(n) {
            return u(n) ? this.each(function(t) {
                i(this).wrapInner(n.call(this, t))
            }) : this.each(function() {
                var t = i(this),
                    r = t.contents();
                r.length ? r.wrapAll(n) : t.append(n)
            })
        },
        wrap: function(n) {
            var t = u(n);
            return this.each(function(r) {
                i(this).wrapAll(t ? n.call(this, r) : n)
            })
        },
        unwrap: function(n) {
            return this.parent(n).not("body").each(function() {
                i(this).replaceWith(this.childNodes)
            }), this
        }
    });
    i.expr.pseudos.hidden = function(n) {
        return !i.expr.pseudos.visible(n)
    };
    i.expr.pseudos.visible = function(n) {
        return !!(n.offsetWidth || n.offsetHeight || n.getClientRects().length)
    };
    i.ajaxSettings.xhr = function() {
        try {
            return new n.XMLHttpRequest
        } catch (t) {}
    };
    var lo = {
            0: 200,
            1223: 204
        },
        gt = i.ajaxSettings.xhr();
    e.cors = !!gt && "withCredentials" in gt;
    e.ajax = gt = !!gt;
    i.ajaxTransport(function(t) {
        var i, r;
        if (e.cors || gt && !t.crossDomain) return {
            send: function(u, f) {
                var o, e = t.xhr();
                if (e.open(t.type, t.url, t.async, t.username, t.password), t.xhrFields)
                    for (o in t.xhrFields) e[o] = t.xhrFields[o];
                for (o in t.mimeType && e.overrideMimeType && e.overrideMimeType(t.mimeType), t.crossDomain || u["X-Requested-With"] || (u["X-Requested-With"] = "XMLHttpRequest"), u) e.setRequestHeader(o, u[o]);
                i = function(n) {
                    return function() {
                        i && (i = r = e.onload = e.onerror = e.onabort = e.ontimeout = e.onreadystatechange = null, "abort" === n ? e.abort() : "error" === n ? "number" != typeof e.status ? f(0, "error") : f(e.status, e.statusText) : f(lo[e.status] || e.status, e.statusText, "text" !== (e.responseType || "text") || "string" != typeof e.responseText ? {
                            binary: e.response
                        } : {
                            text: e.responseText
                        }, e.getAllResponseHeaders()))
                    }
                };
                e.onload = i();
                r = e.onerror = e.ontimeout = i("error");
                void 0 !== e.onabort ? e.onabort = r : e.onreadystatechange = function() {
                    4 === e.readyState && n.setTimeout(function() {
                        i && r()
                    })
                };
                i = i("abort");
                try {
                    e.send(t.hasContent && t.data || null)
                } catch (u) {
                    if (i) throw u;
                }
            },
            abort: function() {
                i && i()
            }
        }
    });
    i.ajaxPrefilter(function(n) {
        n.crossDomain && (n.contents.script = !1)
    });
    i.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /\b(?:java|ecma)script\b/
        },
        converters: {
            "text script": function(n) {
                return i.globalEval(n), n
            }
        }
    });
    i.ajaxPrefilter("script", function(n) {
        void 0 === n.cache && (n.cache = !1);
        n.crossDomain && (n.type = "GET")
    });
    i.ajaxTransport("script", function(n) {
        var r, t;
        if (n.crossDomain || n.scriptAttrs) return {
            send: function(u, e) {
                r = i("<script>").attr(n.scriptAttrs || {}).prop({
                    charset: n.scriptCharset,
                    src: n.url
                }).on("load error", t = function(n) {
                    r.remove();
                    t = null;
                    n && e("error" === n.type ? 404 : 200, n.type)
                });
                f.head.appendChild(r[0])
            },
            abort: function() {
                t && t()
            }
        }
    });
    var cf, lf = [],
        or = /(=)\?(?=&|$)|\?\?/;
    i.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var n = lf.pop() || i.expando + "_" + uf++;
            return this[n] = !0, n
        }
    });
    i.ajaxPrefilter("json jsonp", function(t, r, f) {
        var e, o, s, h = !1 !== t.jsonp && (or.test(t.url) ? "url" : "string" == typeof t.data && 0 === (t.contentType || "").indexOf("application/x-www-form-urlencoded") && or.test(t.data) && "data");
        if (h || "jsonp" === t.dataTypes[0]) return e = t.jsonpCallback = u(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, h ? t[h] = t[h].replace(or, "$1" + e) : !1 !== t.jsonp && (t.url += (ir.test(t.url) ? "&" : "?") + t.jsonp + "=" + e), t.converters["script json"] = function() {
            return s || i.error(e + " was not called"), s[0]
        }, t.dataTypes[0] = "json", o = n[e], n[e] = function() {
            s = arguments
        }, f.always(function() {
            void 0 === o ? i(n).removeProp(e) : n[e] = o;
            t[e] && (t.jsonpCallback = r.jsonpCallback, lf.push(e));
            s && u(o) && o(s[0]);
            s = o = void 0
        }), "script"
    });
    e.createHTMLDocument = ((cf = f.implementation.createHTMLDocument("").body).innerHTML = "<form><\/form><form><\/form>", 2 === cf.childNodes.length);
    i.parseHTML = function(n, t, r) {
        return "string" != typeof n ? [] : ("boolean" == typeof t && (r = t, t = !1), t || (e.createHTMLDocument ? ((s = (t = f.implementation.createHTMLDocument("")).createElement("base")).href = f.location.href, t.head.appendChild(s)) : t = f), u = !r && [], (o = pr.exec(n)) ? [t.createElement(o[1])] : (o = fu([n], t, u), u && u.length && i(u).remove(), i.merge([], o.childNodes)));
        var s, o, u
    };
    i.fn.load = function(n, t, r) {
        var f, s, h, e = this,
            o = n.indexOf(" ");
        return -1 < o && (f = g(n.slice(o)), n = n.slice(0, o)), u(t) ? (r = t, t = void 0) : t && "object" == typeof t && (s = "POST"), 0 < e.length && i.ajax({
            url: n,
            type: s || "GET",
            dataType: "html",
            data: t
        }).done(function(n) {
            h = arguments;
            e.html(f ? i("<div>").append(i.parseHTML(n)).find(f) : n)
        }).always(r && function(n, t) {
            e.each(function() {
                r.apply(this, h || [n.responseText, t, n])
            })
        }), this
    };
    i.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(n, t) {
        i.fn[t] = function(n) {
            return this.on(t, n)
        }
    });
    i.expr.pseudos.animated = function(n) {
        return i.grep(i.timers, function(t) {
            return n === t.elem
        }).length
    };
    i.offset = {
        setOffset: function(n, t, r) {
            var v, o, s, h, f, c, l = i.css(n, "position"),
                a = i(n),
                e = {};
            "static" === l && (n.style.position = "relative");
            f = a.offset();
            s = i.css(n, "top");
            c = i.css(n, "left");
            ("absolute" === l || "fixed" === l) && -1 < (s + c).indexOf("auto") ? (h = (v = a.position()).top, o = v.left) : (h = parseFloat(s) || 0, o = parseFloat(c) || 0);
            u(t) && (t = t.call(n, r, i.extend({}, f)));
            null != t.top && (e.top = t.top - f.top + h);
            null != t.left && (e.left = t.left - f.left + o);
            "using" in t ? t.using.call(n, e) : a.css(e)
        }
    };
    i.fn.extend({
        offset: function(n) {
            if (arguments.length) return void 0 === n ? this : this.each(function(t) {
                i.offset.setOffset(this, n, t)
            });
            var r, u, t = this[0];
            if (t) return t.getClientRects().length ? (r = t.getBoundingClientRect(), u = t.ownerDocument.defaultView, {
                top: r.top + u.pageYOffset,
                left: r.left + u.pageXOffset
            }) : {
                top: 0,
                left: 0
            }
        },
        position: function() {
            if (this[0]) {
                var n, r, u, t = this[0],
                    f = {
                        top: 0,
                        left: 0
                    };
                if ("fixed" === i.css(t, "position")) r = t.getBoundingClientRect();
                else {
                    for (r = this.offset(), u = t.ownerDocument, n = t.offsetParent || u.documentElement; n && (n === u.body || n === u.documentElement) && "static" === i.css(n, "position");) n = n.parentNode;
                    n && n !== t && 1 === n.nodeType && ((f = i(n).offset()).top += i.css(n, "borderTopWidth", !0), f.left += i.css(n, "borderLeftWidth", !0))
                }
                return {
                    top: r.top - f.top - i.css(t, "marginTop", !0),
                    left: r.left - f.left - i.css(t, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                for (var n = this.offsetParent; n && "static" === i.css(n, "position");) n = n.offsetParent;
                return n || yt
            })
        }
    });
    i.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(n, t) {
        var r = "pageYOffset" === t;
        i.fn[n] = function(i) {
            return p(this, function(n, i, u) {
                var f;
                if (tt(n) ? f = n : 9 === n.nodeType && (f = n.defaultView), void 0 === u) return f ? f[t] : n[i];
                f ? f.scrollTo(r ? f.pageXOffset : u, r ? u : f.pageYOffset) : n[i] = u
            }, n, i, arguments.length)
        }
    });
    i.each(["top", "left"], function(n, t) {
        i.cssHooks[t] = cu(e.pixelPosition, function(n, r) {
            if (r) return r = bt(n, t), ki.test(r) ? i(n).position()[t] + "px" : r
        })
    });
    i.each({
        Height: "height",
        Width: "width"
    }, function(n, t) {
        i.each({
            padding: "inner" + n,
            content: t,
            "": "outer" + n
        }, function(r, u) {
            i.fn[u] = function(f, e) {
                var o = arguments.length && (r || "boolean" != typeof f),
                    s = r || (!0 === f || !0 === e ? "margin" : "border");
                return p(this, function(t, r, f) {
                    var e;
                    return tt(t) ? 0 === u.indexOf("outer") ? t["inner" + n] : t.document.documentElement["client" + n] : 9 === t.nodeType ? (e = t.documentElement, Math.max(t.body["scroll" + n], e["scroll" + n], t.body["offset" + n], e["offset" + n], e["client" + n])) : void 0 === f ? i.css(t, r, s) : i.style(t, r, f, s)
                }, t, o ? f : void 0, o)
            }
        })
    });
    i.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function(n, t) {
        i.fn[t] = function(n, i) {
            return 0 < arguments.length ? this.on(t, null, n, i) : this.trigger(t)
        }
    });
    i.fn.extend({
        hover: function(n, t) {
            return this.mouseenter(n).mouseleave(t || n)
        }
    });
    i.fn.extend({
        bind: function(n, t, i) {
            return this.on(n, null, t, i)
        },
        unbind: function(n, t) {
            return this.off(n, null, t)
        },
        delegate: function(n, t, i, r) {
            return this.on(t, n, i, r)
        },
        undelegate: function(n, t, i) {
            return 1 === arguments.length ? this.off(n, "**") : this.off(t, n || "**", i)
        }
    });
    i.proxy = function(n, t) {
        var r, f, e;
        if ("string" == typeof t && (r = n[t], t = n, n = r), u(n)) return f = b.call(arguments, 2), (e = function() {
            return n.apply(t || this, f.concat(b.call(arguments)))
        }).guid = n.guid = n.guid || i.guid++, e
    };
    i.holdReady = function(n) {
        n ? i.readyWait++ : i.ready(!0)
    };
    i.isArray = Array.isArray;
    i.parseJSON = JSON.parse;
    i.nodeName = c;
    i.isFunction = u;
    i.isWindow = tt;
    i.camelCase = y;
    i.type = it;
    i.now = Date.now;
    i.isNumeric = function(n) {
        var t = i.type(n);
        return ("number" === t || "string" === t) && !isNaN(n - parseFloat(n))
    };
    "function" == typeof define && define.amd && define("jquery", [], function() {
        return i
    });
    var ao = n.jQuery,
        vo = n.$;
    return i.noConflict = function(t) {
        return n.$ === i && (n.$ = vo), t && n.jQuery === i && (n.jQuery = ao), i
    }, t || (n.jQuery = n.$ = i), i
});;
if ("undefined" == typeof jQuery) throw new Error("Bootstrap's JavaScript requires jQuery");
! function() {
    "use strict";
    var n = jQuery.fn.jquery.split(" ")[0].split(".");
    if (n[0] < 2 && n[1] < 9 || 1 == n[0] && 9 == n[1] && n[2] < 1 || 3 < n[0]) throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher, but lower than version 4");
}(),
function(n) {
    "use strict";
    n.fn.emulateTransitionEnd = function(t) {
        var i = !1,
            r = this;
        n(this).one("bsTransitionEnd", function() {
            i = !0
        });
        return setTimeout(function() {
            i || n(r).trigger(n.support.transition.end)
        }, t), this
    };
    n(function() {
        n.support.transition = function() {
            var i = document.createElement("bootstrap"),
                n = {
                    WebkitTransition: "webkitTransitionEnd",
                    MozTransition: "transitionend",
                    OTransition: "oTransitionEnd otransitionend",
                    transition: "transitionend"
                };
            for (var t in n)
                if (i.style[t] !== undefined) return {
                    end: n[t]
                };
            return !1
        }();
        n.support.transition && (n.event.special.bsTransitionEnd = {
            bindType: n.support.transition.end,
            delegateType: n.support.transition.end,
            handle: function(t) {
                if (n(t.target).is(this)) return t.handleObj.handler.apply(this, arguments)
            }
        })
    })
}(jQuery),
function(n) {
    "use strict";
    var i = '[data-dismiss="alert"]',
        t = function(t) {
            n(t).on("click", i, this.close)
        };
    t.VERSION = "3.4.1";
    t.TRANSITION_DURATION = 150;
    t.prototype.close = function(i) {
        var f = n(this),
            r = f.attr("data-target");
        r || (r = (r = f.attr("href")) && r.replace(/.*(?=#[^\s]*$)/, ""));
        r = "#" === r ? [] : r;
        var u = n(document).find(r);

        function e() {
            u.detach().trigger("closed.bs.alert").remove()
        }
        i && i.preventDefault();
        u.length || (u = f.closest(".alert"));
        u.trigger(i = n.Event("close.bs.alert"));
        i.isDefaultPrevented() || (u.removeClass("in"), n.support.transition && u.hasClass("fade") ? u.one("bsTransitionEnd", e).emulateTransitionEnd(t.TRANSITION_DURATION) : e())
    };
    var r = n.fn.alert;
    n.fn.alert = function(i) {
        return this.each(function() {
            var r = n(this),
                u = r.data("bs.alert");
            u || r.data("bs.alert", u = new t(this));
            "string" == typeof i && u[i].call(r)
        })
    };
    n.fn.alert.Constructor = t;
    n.fn.alert.noConflict = function() {
        return n.fn.alert = r, this
    };
    n(document).on("click.bs.alert.data-api", i, t.prototype.close)
}(jQuery),
function(n) {
    "use strict";
    var t = function(i, r) {
        this.$element = n(i);
        this.options = n.extend({}, t.DEFAULTS, r);
        this.isLoading = !1
    };

    function i(i) {
        return this.each(function() {
            var u = n(this),
                r = u.data("bs.button"),
                f = "object" == typeof i && i;
            r || u.data("bs.button", r = new t(this, f));
            "toggle" == i ? r.toggle() : i && r.setState(i)
        })
    }
    t.VERSION = "3.4.1";
    t.DEFAULTS = {
        loadingText: "loading..."
    };
    t.prototype.setState = function(t) {
        var i = "disabled",
            r = this.$element,
            f = r.is("input") ? "val" : "html",
            u = r.data();
        t += "Text";
        null == u.resetText && r.data("resetText", r[f]());
        setTimeout(n.proxy(function() {
            r[f](null == u[t] ? this.options[t] : u[t]);
            "loadingText" == t ? (this.isLoading = !0, r.addClass(i).attr(i, i).prop(i, !0)) : this.isLoading && (this.isLoading = !1, r.removeClass(i).removeAttr(i).prop(i, !1))
        }, this), 0)
    };
    t.prototype.toggle = function() {
        var t = !0,
            i = this.$element.closest('[data-toggle="buttons"]');
        if (i.length) {
            var n = this.$element.find("input");
            "radio" == n.prop("type") ? (n.prop("checked") && (t = !1), i.find(".active").removeClass("active"), this.$element.addClass("active")) : "checkbox" == n.prop("type") && (n.prop("checked") !== this.$element.hasClass("active") && (t = !1), this.$element.toggleClass("active"));
            n.prop("checked", this.$element.hasClass("active"));
            t && n.trigger("change")
        } else this.$element.attr("aria-pressed", !this.$element.hasClass("active")), this.$element.toggleClass("active")
    };
    var r = n.fn.button;
    n.fn.button = i;
    n.fn.button.Constructor = t;
    n.fn.button.noConflict = function() {
        return n.fn.button = r, this
    };
    n(document).on("click.bs.button.data-api", '[data-toggle^="button"]', function(t) {
        var r = n(t.target).closest(".btn");
        i.call(r, "toggle");
        n(t.target).is('input[type="radio"], input[type="checkbox"]') || (t.preventDefault(), r.is("input,button") ? r.trigger("focus") : r.find("input:visible,button:visible").first().trigger("focus"))
    }).on("focus.bs.button.data-api blur.bs.button.data-api", '[data-toggle^="button"]', function(t) {
        n(t.target).closest(".btn").toggleClass("focus", /^focus(in)?$/.test(t.type))
    })
}(jQuery),
function(n) {
    "use strict";
    var t = function(t, i) {
        this.$element = n(t);
        this.$indicators = this.$element.find(".carousel-indicators");
        this.options = i;
        this.paused = null;
        this.sliding = null;
        this.interval = null;
        this.$active = null;
        this.$items = null;
        this.options.keyboard && this.$element.on("keydown.bs.carousel", n.proxy(this.keydown, this));
        "hover" == this.options.pause && !("ontouchstart" in document.documentElement) && this.$element.on("mouseenter.bs.carousel", n.proxy(this.pause, this)).on("mouseleave.bs.carousel", n.proxy(this.cycle, this))
    };

    function i(i) {
        return this.each(function() {
            var u = n(this),
                r = u.data("bs.carousel"),
                f = n.extend({}, t.DEFAULTS, u.data(), "object" == typeof i && i),
                e = "string" == typeof i ? i : f.slide;
            r || u.data("bs.carousel", r = new t(this, f));
            "number" == typeof i ? r.to(i) : e ? r[e]() : f.interval && r.pause().cycle()
        })
    }
    t.VERSION = "3.4.1";
    t.TRANSITION_DURATION = 600;
    t.DEFAULTS = {
        interval: 5e3,
        pause: "hover",
        wrap: !0,
        keyboard: !0
    };
    t.prototype.keydown = function(n) {
        if (!/input|textarea/i.test(n.target.tagName)) {
            switch (n.which) {
                case 37:
                    this.prev();
                    break;
                case 39:
                    this.next();
                    break;
                default:
                    return
            }
            n.preventDefault()
        }
    };
    t.prototype.cycle = function(t) {
        return t || (this.paused = !1), this.interval && clearInterval(this.interval), this.options.interval && !this.paused && (this.interval = setInterval(n.proxy(this.next, this), this.options.interval)), this
    };
    t.prototype.getItemIndex = function(n) {
        return this.$items = n.parent().children(".item"), this.$items.index(n || this.$active)
    };
    t.prototype.getItemForDirection = function(n, t) {
        var i = this.getItemIndex(t);
        if (("prev" == n && 0 === i || "next" == n && i == this.$items.length - 1) && !this.options.wrap) return t;
        var r = (i + ("prev" == n ? -1 : 1)) % this.$items.length;
        return this.$items.eq(r)
    };
    t.prototype.to = function(n) {
        var i = this,
            t = this.getItemIndex(this.$active = this.$element.find(".item.active"));
        if (!(n > this.$items.length - 1 || n < 0)) return this.sliding ? this.$element.one("slid.bs.carousel", function() {
            i.to(n)
        }) : t == n ? this.pause().cycle() : this.slide(t < n ? "next" : "prev", this.$items.eq(n))
    };
    t.prototype.pause = function(t) {
        return t || (this.paused = !0), this.$element.find(".next, .prev").length && n.support.transition && (this.$element.trigger(n.support.transition.end), this.cycle(!0)), this.interval = clearInterval(this.interval), this
    };
    t.prototype.next = function() {
        if (!this.sliding) return this.slide("next")
    };
    t.prototype.prev = function() {
        if (!this.sliding) return this.slide("prev")
    };
    t.prototype.slide = function(i, r) {
        var e = this.$element.find(".item.active"),
            u = r || this.getItemForDirection(i, e),
            o = this.interval,
            f = "next" == i ? "left" : "right",
            s = this;
        if (u.hasClass("active")) return this.sliding = !1;
        var h = u[0],
            c = n.Event("slide.bs.carousel", {
                relatedTarget: h,
                direction: f
            });
        if (this.$element.trigger(c), !c.isDefaultPrevented()) {
            if (this.sliding = !0, o && this.pause(), this.$indicators.length) {
                this.$indicators.find(".active").removeClass("active");
                var l = n(this.$indicators.children()[this.getItemIndex(u)]);
                l && l.addClass("active")
            }
            var a = n.Event("slid.bs.carousel", {
                relatedTarget: h,
                direction: f
            });
            return n.support.transition && this.$element.hasClass("slide") ? (u.addClass(i), "object" == typeof u && u.length && u[0].offsetWidth, e.addClass(f), u.addClass(f), e.one("bsTransitionEnd", function() {
                u.removeClass([i, f].join(" ")).addClass("active");
                e.removeClass(["active", f].join(" "));
                s.sliding = !1;
                setTimeout(function() {
                    s.$element.trigger(a)
                }, 0)
            }).emulateTransitionEnd(t.TRANSITION_DURATION)) : (e.removeClass("active"), u.addClass("active"), this.sliding = !1, this.$element.trigger(a)), o && this.cycle(), this
        }
    };
    var u = n.fn.carousel;
    n.fn.carousel = i;
    n.fn.carousel.Constructor = t;
    n.fn.carousel.noConflict = function() {
        return n.fn.carousel = u, this
    };
    var r = function(t) {
        var r = n(this),
            u = r.attr("href");
        u && (u = u.replace(/.*(?=#[^\s]+$)/, ""));
        var s = r.attr("data-target") || u,
            f = n(document).find(s);
        if (f.hasClass("carousel")) {
            var o = n.extend({}, f.data(), r.data()),
                e = r.attr("data-slide-to");
            e && (o.interval = !1);
            i.call(f, o);
            e && f.data("bs.carousel").to(e);
            t.preventDefault()
        }
    };
    n(document).on("click.bs.carousel.data-api", "[data-slide]", r).on("click.bs.carousel.data-api", "[data-slide-to]", r);
    n(window).on("load", function() {
        n('[data-ride="carousel"]').each(function() {
            var t = n(this);
            i.call(t, t.data())
        })
    })
}(jQuery),
function(n) {
    "use strict";
    var t = function(i, r) {
        this.$element = n(i);
        this.options = n.extend({}, t.DEFAULTS, r);
        this.$trigger = n('[data-toggle="collapse"][href="#' + i.id + '"],[data-toggle="collapse"][data-target="#' + i.id + '"]');
        this.transitioning = null;
        this.options.parent ? this.$parent = this.getParent() : this.addAriaAndCollapsedClass(this.$element, this.$trigger);
        this.options.toggle && this.toggle()
    };

    function r(t) {
        var i, r = t.attr("data-target") || (i = t.attr("href")) && i.replace(/.*(?=#[^\s]+$)/, "");
        return n(document).find(r)
    }

    function i(i) {
        return this.each(function() {
            var u = n(this),
                r = u.data("bs.collapse"),
                f = n.extend({}, t.DEFAULTS, u.data(), "object" == typeof i && i);
            !r && f.toggle && /show|hide/.test(i) && (f.toggle = !1);
            r || u.data("bs.collapse", r = new t(this, f));
            "string" == typeof i && r[i]()
        })
    }
    t.VERSION = "3.4.1";
    t.TRANSITION_DURATION = 350;
    t.DEFAULTS = {
        toggle: !0
    };
    t.prototype.dimension = function() {
        return this.$element.hasClass("width") ? "width" : "height"
    };
    t.prototype.show = function() {
        if (!this.transitioning && !this.$element.hasClass("in")) {
            var f, r = this.$parent && this.$parent.children(".panel").children(".in, .collapsing");
            if (!(r && r.length && (f = r.data("bs.collapse")) && f.transitioning)) {
                var e = n.Event("show.bs.collapse");
                if (this.$element.trigger(e), !e.isDefaultPrevented()) {
                    r && r.length && (i.call(r, "hide"), f || r.data("bs.collapse", null));
                    var u = this.dimension();
                    this.$element.removeClass("collapse").addClass("collapsing")[u](0).attr("aria-expanded", !0);
                    this.$trigger.removeClass("collapsed").attr("aria-expanded", !0);
                    this.transitioning = 1;
                    var o = function() {
                        this.$element.removeClass("collapsing").addClass("collapse in")[u]("");
                        this.transitioning = 0;
                        this.$element.trigger("shown.bs.collapse")
                    };
                    if (!n.support.transition) return o.call(this);
                    var s = n.camelCase(["scroll", u].join("-"));
                    this.$element.one("bsTransitionEnd", n.proxy(o, this)).emulateTransitionEnd(t.TRANSITION_DURATION)[u](this.$element[0][s])
                }
            }
        }
    };
    t.prototype.hide = function() {
        if (!this.transitioning && this.$element.hasClass("in")) {
            var r = n.Event("hide.bs.collapse");
            if (this.$element.trigger(r), !r.isDefaultPrevented()) {
                var i = this.dimension();
                this.$element[i](this.$element[i]())[0].offsetHeight;
                this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded", !1);
                this.$trigger.addClass("collapsed").attr("aria-expanded", !1);
                this.transitioning = 1;
                var u = function() {
                    this.transitioning = 0;
                    this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")
                };
                if (!n.support.transition) return u.call(this);
                this.$element[i](0).one("bsTransitionEnd", n.proxy(u, this)).emulateTransitionEnd(t.TRANSITION_DURATION)
            }
        }
    };
    t.prototype.toggle = function() {
        this[this.$element.hasClass("in") ? "hide" : "show"]()
    };
    t.prototype.getParent = function() {
        return n(document).find(this.options.parent).find('[data-toggle="collapse"][data-parent="' + this.options.parent + '"]').each(n.proxy(function(t, i) {
            var u = n(i);
            this.addAriaAndCollapsedClass(r(u), u)
        }, this)).end()
    };
    t.prototype.addAriaAndCollapsedClass = function(n, t) {
        var i = n.hasClass("in");
        n.attr("aria-expanded", i);
        t.toggleClass("collapsed", !i).attr("aria-expanded", i)
    };
    var u = n.fn.collapse;
    n.fn.collapse = i;
    n.fn.collapse.Constructor = t;
    n.fn.collapse.noConflict = function() {
        return n.fn.collapse = u, this
    };
    n(document).on("click.bs.collapse.data-api", '[data-toggle="collapse"]', function(t) {
        var u = n(this);
        u.attr("data-target") || t.preventDefault();
        var f = r(u),
            e = f.data("bs.collapse") ? "toggle" : u.data();
        i.call(f, e)
    })
}(jQuery),
function(n) {
    "use strict";
    var i = '[data-toggle="dropdown"]',
        t = function(t) {
            n(t).on("click.bs.dropdown", this.toggle)
        };

    function r(t) {
        var i = t.attr("data-target");
        i || (i = (i = t.attr("href")) && /#[A-Za-z]/.test(i) && i.replace(/.*(?=#[^\s]*$)/, ""));
        var r = "#" !== i ? n(document).find(i) : null;
        return r && r.length ? r : t.parent()
    }

    function u(t) {
        t && 3 === t.which || (n(".dropdown-backdrop").remove(), n(i).each(function() {
            var u = n(this),
                i = r(u),
                f = {
                    relatedTarget: this
                };
            i.hasClass("open") && (t && "click" == t.type && /input|textarea/i.test(t.target.tagName) && n.contains(i[0], t.target) || (i.trigger(t = n.Event("hide.bs.dropdown", f)), t.isDefaultPrevented() || (u.attr("aria-expanded", "false"), i.removeClass("open").trigger(n.Event("hidden.bs.dropdown", f)))))
        }))
    }
    t.VERSION = "3.4.1";
    t.prototype.toggle = function(t) {
        var f = n(this);
        if (!f.is(".disabled, :disabled")) {
            var i = r(f),
                o = i.hasClass("open");
            if (u(), !o) {
                "ontouchstart" in document.documentElement && !i.closest(".navbar-nav").length && n(document.createElement("div")).addClass("dropdown-backdrop").insertAfter(n(this)).on("click", u);
                var e = {
                    relatedTarget: this
                };
                if (i.trigger(t = n.Event("show.bs.dropdown", e)), t.isDefaultPrevented()) return;
                f.trigger("focus").attr("aria-expanded", "true");
                i.toggleClass("open").trigger(n.Event("shown.bs.dropdown", e))
            }
            return !1
        }
    };
    t.prototype.keydown = function(t) {
        if (/(38|40|27|32)/.test(t.which) && !/input|textarea/i.test(t.target.tagName)) {
            var e = n(this);
            if (t.preventDefault(), t.stopPropagation(), !e.is(".disabled, :disabled")) {
                var o = r(e),
                    s = o.hasClass("open");
                if (!s && 27 != t.which || s && 27 == t.which) return 27 == t.which && o.find(i).trigger("focus"), e.trigger("click");
                var f = o.find(".dropdown-menu li:not(.disabled):visible a");
                if (f.length) {
                    var u = f.index(t.target);
                    38 == t.which && 0 < u && u--;
                    40 == t.which && u < f.length - 1 && u++;
                    ~u || (u = 0);
                    f.eq(u).trigger("focus")
                }
            }
        }
    };
    var f = n.fn.dropdown;
    n.fn.dropdown = function(i) {
        return this.each(function() {
            var r = n(this),
                u = r.data("bs.dropdown");
            u || r.data("bs.dropdown", u = new t(this));
            "string" == typeof i && u[i].call(r)
        })
    };
    n.fn.dropdown.Constructor = t;
    n.fn.dropdown.noConflict = function() {
        return n.fn.dropdown = f, this
    };
    n(document).on("click.bs.dropdown.data-api", u).on("click.bs.dropdown.data-api", ".dropdown form", function(n) {
        n.stopPropagation()
    }).on("click.bs.dropdown.data-api", i, t.prototype.toggle).on("keydown.bs.dropdown.data-api", i, t.prototype.keydown).on("keydown.bs.dropdown.data-api", ".dropdown-menu", t.prototype.keydown)
}(jQuery),
function(n) {
    "use strict";
    var t = function(t, i) {
        this.options = i;
        this.$body = n(document.body);
        this.$element = n(t);
        this.$dialog = this.$element.find(".modal-dialog");
        this.$backdrop = null;
        this.isShown = null;
        this.originalBodyPad = null;
        this.scrollbarWidth = 0;
        this.ignoreBackdropClick = !1;
        this.fixedContent = ".navbar-fixed-top, .navbar-fixed-bottom";
        this.options.remote && this.$element.find(".modal-content").load(this.options.remote, n.proxy(function() {
            this.$element.trigger("loaded.bs.modal")
        }, this))
    };

    function i(i, r) {
        return this.each(function() {
            var f = n(this),
                u = f.data("bs.modal"),
                e = n.extend({}, t.DEFAULTS, f.data(), "object" == typeof i && i);
            u || f.data("bs.modal", u = new t(this, e));
            "string" == typeof i ? u[i](r) : e.show && u.show(r)
        })
    }
    t.VERSION = "3.4.1";
    t.TRANSITION_DURATION = 300;
    t.BACKDROP_TRANSITION_DURATION = 150;
    t.DEFAULTS = {
        backdrop: !0,
        keyboard: !0,
        show: !0
    };
    t.prototype.toggle = function(n) {
        return this.isShown ? this.hide() : this.show(n)
    };
    t.prototype.show = function(i) {
        var r = this,
            u = n.Event("show.bs.modal", {
                relatedTarget: i
            });
        this.$element.trigger(u);
        this.isShown || u.isDefaultPrevented() || (this.isShown = !0, this.checkScrollbar(), this.setScrollbar(), this.$body.addClass("modal-open"), this.escape(), this.resize(), this.$element.on("click.dismiss.bs.modal", '[data-dismiss="modal"]', n.proxy(this.hide, this)), this.$dialog.on("mousedown.dismiss.bs.modal", function() {
            r.$element.one("mouseup.dismiss.bs.modal", function(t) {
                n(t.target).is(r.$element) && (r.ignoreBackdropClick = !0)
            })
        }), this.backdrop(function() {
            var u = n.support.transition && r.$element.hasClass("fade");
            r.$element.parent().length || r.$element.appendTo(r.$body);
            r.$element.show().scrollTop(0);
            r.adjustDialog();
            u && r.$element[0].offsetWidth;
            r.$element.addClass("in");
            r.enforceFocus();
            var f = n.Event("shown.bs.modal", {
                relatedTarget: i
            });
            u ? r.$dialog.one("bsTransitionEnd", function() {
                r.$element.trigger("focus").trigger(f)
            }).emulateTransitionEnd(t.TRANSITION_DURATION) : r.$element.trigger("focus").trigger(f)
        }))
    };
    t.prototype.hide = function(i) {
        i && i.preventDefault();
        i = n.Event("hide.bs.modal");
        this.$element.trigger(i);
        this.isShown && !i.isDefaultPrevented() && (this.isShown = !1, this.escape(), this.resize(), n(document).off("focusin.bs.modal"), this.$element.removeClass("in").off("click.dismiss.bs.modal").off("mouseup.dismiss.bs.modal"), this.$dialog.off("mousedown.dismiss.bs.modal"), n.support.transition && this.$element.hasClass("fade") ? this.$element.one("bsTransitionEnd", n.proxy(this.hideModal, this)).emulateTransitionEnd(t.TRANSITION_DURATION) : this.hideModal())
    };
    t.prototype.enforceFocus = function() {
        n(document).off("focusin.bs.modal").on("focusin.bs.modal", n.proxy(function(n) {
            document === n.target || this.$element[0] === n.target || this.$element.has(n.target).length || this.$element.trigger("focus")
        }, this))
    };
    t.prototype.escape = function() {
        this.isShown && this.options.keyboard ? this.$element.on("keydown.dismiss.bs.modal", n.proxy(function(n) {
            27 == n.which && this.hide()
        }, this)) : this.isShown || this.$element.off("keydown.dismiss.bs.modal")
    };
    t.prototype.resize = function() {
        this.isShown ? n(window).on("resize.bs.modal", n.proxy(this.handleUpdate, this)) : n(window).off("resize.bs.modal")
    };
    t.prototype.hideModal = function() {
        var n = this;
        this.$element.hide();
        this.backdrop(function() {
            n.$body.removeClass("modal-open");
            n.resetAdjustments();
            n.resetScrollbar();
            n.$element.trigger("hidden.bs.modal")
        })
    };
    t.prototype.removeBackdrop = function() {
        this.$backdrop && this.$backdrop.remove();
        this.$backdrop = null
    };
    t.prototype.backdrop = function(i) {
        var e = this,
            r = this.$element.hasClass("fade") ? "fade" : "";
        if (this.isShown && this.options.backdrop) {
            var u = n.support.transition && r;
            if (this.$backdrop = n(document.createElement("div")).addClass("modal-backdrop " + r).appendTo(this.$body), this.$element.on("click.dismiss.bs.modal", n.proxy(function(n) {
                    this.ignoreBackdropClick ? this.ignoreBackdropClick = !1 : n.target === n.currentTarget && ("static" == this.options.backdrop ? this.$element[0].focus() : this.hide())
                }, this)), u && this.$backdrop[0].offsetWidth, this.$backdrop.addClass("in"), !i) return;
            u ? this.$backdrop.one("bsTransitionEnd", i).emulateTransitionEnd(t.BACKDROP_TRANSITION_DURATION) : i()
        } else if (!this.isShown && this.$backdrop) {
            this.$backdrop.removeClass("in");
            var f = function() {
                e.removeBackdrop();
                i && i()
            };
            n.support.transition && this.$element.hasClass("fade") ? this.$backdrop.one("bsTransitionEnd", f).emulateTransitionEnd(t.BACKDROP_TRANSITION_DURATION) : f()
        } else i && i()
    };
    t.prototype.handleUpdate = function() {
        this.adjustDialog()
    };
    t.prototype.adjustDialog = function() {
        var n = this.$element[0].scrollHeight > document.documentElement.clientHeight;
        this.$element.css({
            paddingLeft: !this.bodyIsOverflowing && n ? this.scrollbarWidth : "",
            paddingRight: this.bodyIsOverflowing && !n ? this.scrollbarWidth : ""
        })
    };
    t.prototype.resetAdjustments = function() {
        this.$element.css({
            paddingLeft: "",
            paddingRight: ""
        })
    };
    t.prototype.checkScrollbar = function() {
        var n = window.innerWidth;
        if (!n) {
            var t = document.documentElement.getBoundingClientRect();
            n = t.right - Math.abs(t.left)
        }
        this.bodyIsOverflowing = document.body.clientWidth < n;
        this.scrollbarWidth = this.measureScrollbar()
    };
    t.prototype.setScrollbar = function() {
        var i = parseInt(this.$body.css("padding-right") || 0, 10);
        this.originalBodyPad = document.body.style.paddingRight || "";
        var t = this.scrollbarWidth;
        this.bodyIsOverflowing && (this.$body.css("padding-right", i + t), n(this.fixedContent).each(function(i, r) {
            var u = r.style.paddingRight,
                f = n(r).css("padding-right");
            n(r).data("padding-right", u).css("padding-right", parseFloat(f) + t + "px")
        }))
    };
    t.prototype.resetScrollbar = function() {
        this.$body.css("padding-right", this.originalBodyPad);
        n(this.fixedContent).each(function(t, i) {
            var r = n(i).data("padding-right");
            n(i).removeData("padding-right");
            i.style.paddingRight = r || ""
        })
    };
    t.prototype.measureScrollbar = function() {
        var n = document.createElement("div");
        n.className = "modal-scrollbar-measure";
        this.$body.append(n);
        var t = n.offsetWidth - n.clientWidth;
        return this.$body[0].removeChild(n), t
    };
    var r = n.fn.modal;
    n.fn.modal = i;
    n.fn.modal.Constructor = t;
    n.fn.modal.noConflict = function() {
        return n.fn.modal = r, this
    };
    n(document).on("click.bs.modal.data-api", '[data-toggle="modal"]', function(t) {
        var r = n(this),
            f = r.attr("href"),
            e = r.attr("data-target") || f && f.replace(/.*(?=#[^\s]+$)/, ""),
            u = n(document).find(e),
            o = u.data("bs.modal") ? "toggle" : n.extend({
                remote: !/#/.test(f) && f
            }, u.data(), r.data());
        r.is("a") && t.preventDefault();
        u.one("show.bs.modal", function(n) {
            n.isDefaultPrevented() || u.one("hidden.bs.modal", function() {
                r.is(":visible") && r.trigger("focus")
            })
        });
        i.call(u, o, this)
    })
}(jQuery),
function(n) {
    "use strict";
    var r = ["sanitize", "whiteList", "sanitizeFn"],
        u = ["background", "cite", "href", "itemtype", "longdesc", "poster", "src", "xlink:href"],
        f = /^(?:(?:https?|mailto|ftp|tel|file):|[^&:/?#]*(?:[/?#]|$))/gi,
        e = /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[a-z0-9+/]+=*$/i;

    function o(t, i) {
        var r = t.nodeName.toLowerCase();
        if (-1 !== n.inArray(r, i)) return -1 === n.inArray(r, u) || Boolean(t.nodeValue.match(f) || t.nodeValue.match(e));
        for (var s = n(i).filter(function(n, t) {
                return t instanceof RegExp
            }), o = 0, h = s.length; o < h; o++)
            if (r.match(s[o])) return !0;
        return !1
    }

    function i(t, i, r) {
        if (0 === t.length) return t;
        if (r && "function" == typeof r) return r(t);
        if (!document.implementation || !document.implementation.createHTMLDocument) return t;
        var e = document.implementation.createHTMLDocument("sanitization");
        e.body.innerHTML = t;
        for (var a = n.map(i, function(n, t) {
                return t
            }), c = n(e.body).find("*"), s = 0, v = c.length; s < v; s++) {
            var u = c[s],
                l = u.nodeName.toLowerCase();
            if (-1 !== n.inArray(l, a))
                for (var h = n.map(u.attributes, function(n) {
                        return n
                    }), y = [].concat(i["*"] || [], i[l] || []), f = 0, p = h.length; f < p; f++) o(h[f], y) || u.removeAttribute(h[f].nodeName);
            else u.parentNode.removeChild(u)
        }
        return e.body.innerHTML
    }
    var t = function(n, t) {
        this.type = null;
        this.options = null;
        this.enabled = null;
        this.timeout = null;
        this.hoverState = null;
        this.$element = null;
        this.inState = null;
        this.init("tooltip", n, t)
    };
    t.VERSION = "3.4.1";
    t.TRANSITION_DURATION = 150;
    t.DEFAULTS = {
        animation: !0,
        placement: "top",
        selector: !1,
        template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"><\/div><div class="tooltip-inner"><\/div><\/div>',
        trigger: "hover focus",
        title: "",
        delay: 0,
        html: !1,
        container: !1,
        viewport: {
            selector: "body",
            padding: 0
        },
        sanitize: !0,
        sanitizeFn: null,
        whiteList: {
            "*": ["class", "dir", "id", "lang", "role", /^aria-[\w-]*$/i],
            a: ["target", "href", "title", "rel"],
            area: [],
            b: [],
            br: [],
            col: [],
            code: [],
            div: [],
            em: [],
            hr: [],
            h1: [],
            h2: [],
            h3: [],
            h4: [],
            h5: [],
            h6: [],
            i: [],
            img: ["src", "alt", "title", "width", "height"],
            li: [],
            ol: [],
            p: [],
            pre: [],
            s: [],
            small: [],
            span: [],
            sub: [],
            sup: [],
            strong: [],
            u: [],
            ul: []
        }
    };
    t.prototype.init = function(t, i, r) {
        if (this.enabled = !0, this.type = t, this.$element = n(i), this.options = this.getOptions(r), this.$viewport = this.options.viewport && n(document).find(n.isFunction(this.options.viewport) ? this.options.viewport.call(this, this.$element) : this.options.viewport.selector || this.options.viewport), this.inState = {
                click: !1,
                hover: !1,
                focus: !1
            }, this.$element[0] instanceof document.constructor && !this.options.selector) throw new Error("`selector` option must be specified when initializing " + this.type + " on the window.document object!");
        for (var f = this.options.trigger.split(" "), e = f.length; e--;) {
            var u = f[e];
            if ("click" == u) this.$element.on("click." + this.type, this.options.selector, n.proxy(this.toggle, this));
            else if ("manual" != u) {
                var o = "hover" == u ? "mouseenter" : "focusin",
                    s = "hover" == u ? "mouseleave" : "focusout";
                this.$element.on(o + "." + this.type, this.options.selector, n.proxy(this.enter, this));
                this.$element.on(s + "." + this.type, this.options.selector, n.proxy(this.leave, this))
            }
        }
        this.options.selector ? this._options = n.extend({}, this.options, {
            trigger: "manual",
            selector: ""
        }) : this.fixTitle()
    };
    t.prototype.getDefaults = function() {
        return t.DEFAULTS
    };
    t.prototype.getOptions = function(t) {
        var u = this.$element.data();
        for (var f in u) u.hasOwnProperty(f) && -1 !== n.inArray(f, r) && delete u[f];
        return (t = n.extend({}, this.getDefaults(), u, t)).delay && "number" == typeof t.delay && (t.delay = {
            show: t.delay,
            hide: t.delay
        }), t.sanitize && (t.template = i(t.template, t.whiteList, t.sanitizeFn)), t
    };
    t.prototype.getDelegateOptions = function() {
        var t = {},
            i = this.getDefaults();
        return this._options && n.each(this._options, function(n, r) {
            i[n] != r && (t[n] = r)
        }), t
    };
    t.prototype.enter = function(t) {
        var i = t instanceof this.constructor ? t : n(t.currentTarget).data("bs." + this.type);
        if (i || (i = new this.constructor(t.currentTarget, this.getDelegateOptions()), n(t.currentTarget).data("bs." + this.type, i)), t instanceof n.Event && (i.inState["focusin" == t.type ? "focus" : "hover"] = !0), i.tip().hasClass("in") || "in" == i.hoverState) i.hoverState = "in";
        else {
            if (clearTimeout(i.timeout), i.hoverState = "in", !i.options.delay || !i.options.delay.show) return i.show();
            i.timeout = setTimeout(function() {
                "in" == i.hoverState && i.show()
            }, i.options.delay.show)
        }
    };
    t.prototype.isInStateTrue = function() {
        for (var n in this.inState)
            if (this.inState[n]) return !0;
        return !1
    };
    t.prototype.leave = function(t) {
        var i = t instanceof this.constructor ? t : n(t.currentTarget).data("bs." + this.type);
        if (i || (i = new this.constructor(t.currentTarget, this.getDelegateOptions()), n(t.currentTarget).data("bs." + this.type, i)), t instanceof n.Event && (i.inState["focusout" == t.type ? "focus" : "hover"] = !1), !i.isInStateTrue()) {
            if (clearTimeout(i.timeout), i.hoverState = "out", !i.options.delay || !i.options.delay.hide) return i.hide();
            i.timeout = setTimeout(function() {
                "out" == i.hoverState && i.hide()
            }, i.options.delay.hide)
        }
    };
    t.prototype.show = function() {
        var h = n.Event("show.bs." + this.type);
        if (this.hasContent() && this.enabled) {
            this.$element.trigger(h);
            var y = n.contains(this.$element[0].ownerDocument.documentElement, this.$element[0]);
            if (h.isDefaultPrevented() || !y) return;
            var u = this,
                r = this.tip(),
                c = this.getUID(this.type);
            this.setContent();
            r.attr("id", c);
            this.$element.attr("aria-describedby", c);
            this.options.animation && r.addClass("fade");
            var i = "function" == typeof this.options.placement ? this.options.placement.call(this, r[0], this.$element[0]) : this.options.placement,
                l = /\s?auto?\s?/i,
                a = l.test(i);
            a && (i = i.replace(l, "") || "top");
            r.detach().css({
                top: 0,
                left: 0,
                display: "block"
            }).addClass(i).data("bs." + this.type, this);
            this.options.container ? r.appendTo(n(document).find(this.options.container)) : r.insertAfter(this.$element);
            this.$element.trigger("inserted.bs." + this.type);
            var f = this.getPosition(),
                o = r[0].offsetWidth,
                s = r[0].offsetHeight;
            if (a) {
                var p = i,
                    e = this.getPosition(this.$viewport);
                i = "bottom" == i && f.bottom + s > e.bottom ? "top" : "top" == i && f.top - s < e.top ? "bottom" : "right" == i && f.right + o > e.width ? "left" : "left" == i && f.left - o < e.left ? "right" : i;
                r.removeClass(p).addClass(i)
            }
            var w = this.getCalculatedOffset(i, f, o, s);
            this.applyPlacement(w, i);
            var v = function() {
                var n = u.hoverState;
                u.$element.trigger("shown.bs." + u.type);
                u.hoverState = null;
                "out" == n && u.leave(u)
            };
            n.support.transition && this.$tip.hasClass("fade") ? r.one("bsTransitionEnd", v).emulateTransitionEnd(t.TRANSITION_DURATION) : v()
        }
    };
    t.prototype.applyPlacement = function(t, i) {
        var r = this.tip(),
            l = r[0].offsetWidth,
            e = r[0].offsetHeight,
            o = parseInt(r.css("margin-top"), 10),
            s = parseInt(r.css("margin-left"), 10);
        isNaN(o) && (o = 0);
        isNaN(s) && (s = 0);
        t.top += o;
        t.left += s;
        n.offset.setOffset(r[0], n.extend({
            using: function(n) {
                r.css({
                    top: Math.round(n.top),
                    left: Math.round(n.left)
                })
            }
        }, t), 0);
        r.addClass("in");
        var c = r[0].offsetWidth,
            f = r[0].offsetHeight;
        "top" == i && f != e && (t.top = t.top + e - f);
        var u = this.getViewportAdjustedDelta(i, t, c, f);
        u.left ? t.left += u.left : t.top += u.top;
        var h = /top|bottom/.test(i),
            a = h ? 2 * u.left - l + c : 2 * u.top - e + f,
            v = h ? "offsetWidth" : "offsetHeight";
        r.offset(t);
        this.replaceArrow(a, r[0][v], h)
    };
    t.prototype.replaceArrow = function(n, t, i) {
        this.arrow().css(i ? "left" : "top", 50 * (1 - n / t) + "%").css(i ? "top" : "left", "")
    };
    t.prototype.setContent = function() {
        var t = this.tip(),
            n = this.getTitle();
        this.options.html ? (this.options.sanitize && (n = i(n, this.options.whiteList, this.options.sanitizeFn)), t.find(".tooltip-inner").html(n)) : t.find(".tooltip-inner").text(n);
        t.removeClass("fade in top bottom left right")
    };
    t.prototype.hide = function(i) {
        var r = this,
            u = n(this.$tip),
            f = n.Event("hide.bs." + this.type);

        function e() {
            "in" != r.hoverState && u.detach();
            r.$element && r.$element.removeAttr("aria-describedby").trigger("hidden.bs." + r.type);
            i && i()
        }
        if (this.$element.trigger(f), !f.isDefaultPrevented()) return u.removeClass("in"), n.support.transition && u.hasClass("fade") ? u.one("bsTransitionEnd", e).emulateTransitionEnd(t.TRANSITION_DURATION) : e(), this.hoverState = null, this
    };
    t.prototype.fixTitle = function() {
        var n = this.$element;
        (n.attr("title") || "string" != typeof n.attr("data-original-title")) && n.attr("data-original-title", n.attr("title") || "").attr("title", "")
    };
    t.prototype.hasContent = function() {
        return this.getTitle()
    };
    t.prototype.getPosition = function(t) {
        var r = (t = t || this.$element)[0],
            u = "BODY" == r.tagName,
            i = r.getBoundingClientRect();
        null == i.width && (i = n.extend({}, i, {
            width: i.right - i.left,
            height: i.bottom - i.top
        }));
        var f = window.SVGElement && r instanceof window.SVGElement,
            e = u ? {
                top: 0,
                left: 0
            } : f ? null : t.offset(),
            o = {
                scroll: u ? document.documentElement.scrollTop || document.body.scrollTop : t.scrollTop()
            },
            s = u ? {
                width: n(window).width(),
                height: n(window).height()
            } : null;
        return n.extend({}, i, o, s, e)
    };
    t.prototype.getCalculatedOffset = function(n, t, i, r) {
        return "bottom" == n ? {
            top: t.top + t.height,
            left: t.left + t.width / 2 - i / 2
        } : "top" == n ? {
            top: t.top - r,
            left: t.left + t.width / 2 - i / 2
        } : "left" == n ? {
            top: t.top + t.height / 2 - r / 2,
            left: t.left - i
        } : {
            top: t.top + t.height / 2 - r / 2,
            left: t.left + t.width
        }
    };
    t.prototype.getViewportAdjustedDelta = function(n, t, i, r) {
        var f = {
            top: 0,
            left: 0
        };
        if (!this.$viewport) return f;
        var e = this.options.viewport && this.options.viewport.padding || 0,
            u = this.getPosition(this.$viewport);
        if (/right|left/.test(n)) {
            var o = t.top - e - u.scroll,
                s = t.top + e - u.scroll + r;
            o < u.top ? f.top = u.top - o : s > u.top + u.height && (f.top = u.top + u.height - s)
        } else {
            var h = t.left - e,
                c = t.left + e + i;
            h < u.left ? f.left = u.left - h : c > u.right && (f.left = u.left + u.width - c)
        }
        return f
    };
    t.prototype.getTitle = function() {
        var t = this.$element,
            n = this.options;
        return t.attr("data-original-title") || ("function" == typeof n.title ? n.title.call(t[0]) : n.title)
    };
    t.prototype.getUID = function(n) {
        for (; n += ~~(1e6 * Math.random()), document.getElementById(n););
        return n
    };
    t.prototype.tip = function() {
        if (!this.$tip && (this.$tip = n(this.options.template), 1 != this.$tip.length)) throw new Error(this.type + " `template` option must consist of exactly 1 top-level element!");
        return this.$tip
    };
    t.prototype.arrow = function() {
        return this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow")
    };
    t.prototype.enable = function() {
        this.enabled = !0
    };
    t.prototype.disable = function() {
        this.enabled = !1
    };
    t.prototype.toggleEnabled = function() {
        this.enabled = !this.enabled
    };
    t.prototype.toggle = function(t) {
        var i = this;
        t && ((i = n(t.currentTarget).data("bs." + this.type)) || (i = new this.constructor(t.currentTarget, this.getDelegateOptions()), n(t.currentTarget).data("bs." + this.type, i)));
        t ? (i.inState.click = !i.inState.click, i.isInStateTrue() ? i.enter(i) : i.leave(i)) : i.tip().hasClass("in") ? i.leave(i) : i.enter(i)
    };
    t.prototype.destroy = function() {
        var n = this;
        clearTimeout(this.timeout);
        this.hide(function() {
            n.$element.off("." + n.type).removeData("bs." + n.type);
            n.$tip && n.$tip.detach();
            n.$tip = null;
            n.$arrow = null;
            n.$viewport = null;
            n.$element = null
        })
    };
    t.prototype.sanitizeHtml = function(n) {
        return i(n, this.options.whiteList, this.options.sanitizeFn)
    };
    var s = n.fn.tooltip;
    n.fn.tooltip = function(i) {
        return this.each(function() {
            var u = n(this),
                r = u.data("bs.tooltip"),
                f = "object" == typeof i && i;
            !r && /destroy|hide/.test(i) || (r || u.data("bs.tooltip", r = new t(this, f)), "string" == typeof i && r[i]())
        })
    };
    n.fn.tooltip.Constructor = t;
    n.fn.tooltip.noConflict = function() {
        return n.fn.tooltip = s, this
    }
}(jQuery),
function(n) {
    "use strict";
    var t = function(n, t) {
        this.init("popover", n, t)
    };
    if (!n.fn.tooltip) throw new Error("Popover requires tooltip.js");
    t.VERSION = "3.4.1";
    t.DEFAULTS = n.extend({}, n.fn.tooltip.Constructor.DEFAULTS, {
        placement: "right",
        trigger: "click",
        content: "",
        template: '<div class="popover" role="tooltip"><div class="arrow"><\/div><h3 class="popover-title"><\/h3><div class="popover-content"><\/div><\/div>'
    });
    ((t.prototype = n.extend({}, n.fn.tooltip.Constructor.prototype)).constructor = t).prototype.getDefaults = function() {
        return t.DEFAULTS
    };
    t.prototype.setContent = function() {
        var n = this.tip(),
            i = this.getTitle(),
            t = this.getContent();
        if (this.options.html) {
            var r = typeof t;
            this.options.sanitize && (i = this.sanitizeHtml(i), "string" === r && (t = this.sanitizeHtml(t)));
            n.find(".popover-title").html(i);
            n.find(".popover-content").children().detach().end()["string" === r ? "html" : "append"](t)
        } else n.find(".popover-title").text(i), n.find(".popover-content").children().detach().end().text(t);
        n.removeClass("fade top bottom left right in");
        n.find(".popover-title").html() || n.find(".popover-title").hide()
    };
    t.prototype.hasContent = function() {
        return this.getTitle() || this.getContent()
    };
    t.prototype.getContent = function() {
        var t = this.$element,
            n = this.options;
        return t.attr("data-content") || ("function" == typeof n.content ? n.content.call(t[0]) : n.content)
    };
    t.prototype.arrow = function() {
        return this.$arrow = this.$arrow || this.tip().find(".arrow")
    };
    var i = n.fn.popover;
    n.fn.popover = function(i) {
        return this.each(function() {
            var u = n(this),
                r = u.data("bs.popover"),
                f = "object" == typeof i && i;
            !r && /destroy|hide/.test(i) || (r || u.data("bs.popover", r = new t(this, f)), "string" == typeof i && r[i]())
        })
    };
    n.fn.popover.Constructor = t;
    n.fn.popover.noConflict = function() {
        return n.fn.popover = i, this
    }
}(jQuery),
function(n) {
    "use strict";

    function t(i, r) {
        this.$body = n(document.body);
        this.$scrollElement = n(i).is(document.body) ? n(window) : n(i);
        this.options = n.extend({}, t.DEFAULTS, r);
        this.selector = (this.options.target || "") + " .nav li > a";
        this.offsets = [];
        this.targets = [];
        this.activeTarget = null;
        this.scrollHeight = 0;
        this.$scrollElement.on("scroll.bs.scrollspy", n.proxy(this.process, this));
        this.refresh();
        this.process()
    }

    function i(i) {
        return this.each(function() {
            var u = n(this),
                r = u.data("bs.scrollspy"),
                f = "object" == typeof i && i;
            r || u.data("bs.scrollspy", r = new t(this, f));
            "string" == typeof i && r[i]()
        })
    }
    t.VERSION = "3.4.1";
    t.DEFAULTS = {
        offset: 10
    };
    t.prototype.getScrollHeight = function() {
        return this.$scrollElement[0].scrollHeight || Math.max(this.$body[0].scrollHeight, document.documentElement.scrollHeight)
    };
    t.prototype.refresh = function() {
        var t = this,
            i = "offset",
            r = 0;
        this.offsets = [];
        this.targets = [];
        this.scrollHeight = this.getScrollHeight();
        n.isWindow(this.$scrollElement[0]) || (i = "position", r = this.$scrollElement.scrollTop());
        this.$body.find(this.selector).map(function() {
            var f = n(this),
                u = f.data("target") || f.attr("href"),
                t = /^#./.test(u) && n(u);
            return t && t.length && t.is(":visible") && [
                [t[i]().top + r, u]
            ] || null
        }).sort(function(n, t) {
            return n[0] - t[0]
        }).each(function() {
            t.offsets.push(this[0]);
            t.targets.push(this[1])
        })
    };
    t.prototype.process = function() {
        var n, i = this.$scrollElement.scrollTop() + this.options.offset,
            f = this.getScrollHeight(),
            e = this.options.offset + f - this.$scrollElement.height(),
            t = this.offsets,
            r = this.targets,
            u = this.activeTarget;
        if (this.scrollHeight != f && this.refresh(), e <= i) return u != (n = r[r.length - 1]) && this.activate(n);
        if (u && i < t[0]) return this.activeTarget = null, this.clear();
        for (n = t.length; n--;) u != r[n] && i >= t[n] && (t[n + 1] === undefined || i < t[n + 1]) && this.activate(r[n])
    };
    t.prototype.activate = function(t) {
        this.activeTarget = t;
        this.clear();
        var r = this.selector + '[data-target="' + t + '"],' + this.selector + '[href="' + t + '"]',
            i = n(r).parents("li").addClass("active");
        i.parent(".dropdown-menu").length && (i = i.closest("li.dropdown").addClass("active"));
        i.trigger("activate.bs.scrollspy")
    };
    t.prototype.clear = function() {
        n(this.selector).parentsUntil(this.options.target, ".active").removeClass("active")
    };
    var r = n.fn.scrollspy;
    n.fn.scrollspy = i;
    n.fn.scrollspy.Constructor = t;
    n.fn.scrollspy.noConflict = function() {
        return n.fn.scrollspy = r, this
    };
    n(window).on("load.bs.scrollspy.data-api", function() {
        n('[data-spy="scroll"]').each(function() {
            var t = n(this);
            i.call(t, t.data())
        })
    })
}(jQuery),
function(n) {
    "use strict";
    var t = function(t) {
        this.element = n(t)
    };

    function i(i) {
        return this.each(function() {
            var u = n(this),
                r = u.data("bs.tab");
            r || u.data("bs.tab", r = new t(this));
            "string" == typeof i && r[i]()
        })
    }
    t.VERSION = "3.4.1";
    t.TRANSITION_DURATION = 150;
    t.prototype.show = function() {
        var t = this.element,
            u = t.closest("ul:not(.dropdown-menu)"),
            i = t.data("target");
        if (i || (i = (i = t.attr("href")) && i.replace(/.*(?=#[^\s]*$)/, "")), !t.parent("li").hasClass("active")) {
            var r = u.find(".active:last a"),
                f = n.Event("hide.bs.tab", {
                    relatedTarget: t[0]
                }),
                e = n.Event("show.bs.tab", {
                    relatedTarget: r[0]
                });
            if (r.trigger(f), t.trigger(e), !e.isDefaultPrevented() && !f.isDefaultPrevented()) {
                var o = n(document).find(i);
                this.activate(t.closest("li"), u);
                this.activate(o, o.parent(), function() {
                    r.trigger({
                        type: "hidden.bs.tab",
                        relatedTarget: t[0]
                    });
                    t.trigger({
                        type: "shown.bs.tab",
                        relatedTarget: r[0]
                    })
                })
            }
        }
    };
    t.prototype.activate = function(i, r, u) {
        var f = r.find("> .active"),
            e = u && n.support.transition && (f.length && f.hasClass("fade") || !!r.find("> .fade").length);

        function o() {
            f.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !1);
            i.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded", !0);
            e ? (i[0].offsetWidth, i.addClass("in")) : i.removeClass("fade");
            i.parent(".dropdown-menu").length && i.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !0);
            u && u()
        }
        f.length && e ? f.one("bsTransitionEnd", o).emulateTransitionEnd(t.TRANSITION_DURATION) : o();
        f.removeClass("in")
    };
    var u = n.fn.tab;
    n.fn.tab = i;
    n.fn.tab.Constructor = t;
    n.fn.tab.noConflict = function() {
        return n.fn.tab = u, this
    };
    var r = function(t) {
        t.preventDefault();
        i.call(n(this), "show")
    };
    n(document).on("click.bs.tab.data-api", '[data-toggle="tab"]', r).on("click.bs.tab.data-api", '[data-toggle="pill"]', r)
}(jQuery),
function(n) {
    "use strict";
    var t = function(i, r) {
        this.options = n.extend({}, t.DEFAULTS, r);
        var u = this.options.target === t.DEFAULTS.target ? n(this.options.target) : n(document).find(this.options.target);
        this.$target = u.on("scroll.bs.affix.data-api", n.proxy(this.checkPosition, this)).on("click.bs.affix.data-api", n.proxy(this.checkPositionWithEventLoop, this));
        this.$element = n(i);
        this.affixed = null;
        this.unpin = null;
        this.pinnedOffset = null;
        this.checkPosition()
    };

    function i(i) {
        return this.each(function() {
            var u = n(this),
                r = u.data("bs.affix"),
                f = "object" == typeof i && i;
            r || u.data("bs.affix", r = new t(this, f));
            "string" == typeof i && r[i]()
        })
    }
    t.VERSION = "3.4.1";
    t.RESET = "affix affix-top affix-bottom";
    t.DEFAULTS = {
        offset: 0,
        target: window
    };
    t.prototype.getState = function(n, t, i, r) {
        var u = this.$target.scrollTop(),
            f = this.$element.offset(),
            e = this.$target.height();
        if (null != i && "top" == this.affixed) return u < i && "top";
        if ("bottom" == this.affixed) return null != i ? !(u + this.unpin <= f.top) && "bottom" : !(u + e <= n - r) && "bottom";
        var o = null == this.affixed,
            s = o ? u : f.top;
        return null != i && u <= i ? "top" : null != r && n - r <= s + (o ? e : t) && "bottom"
    };
    t.prototype.getPinnedOffset = function() {
        if (this.pinnedOffset) return this.pinnedOffset;
        this.$element.removeClass(t.RESET).addClass("affix");
        var n = this.$target.scrollTop(),
            i = this.$element.offset();
        return this.pinnedOffset = i.top - n
    };
    t.prototype.checkPositionWithEventLoop = function() {
        setTimeout(n.proxy(this.checkPosition, this), 1)
    };
    t.prototype.checkPosition = function() {
        if (this.$element.is(":visible")) {
            var o = this.$element.height(),
                i = this.options.offset,
                f = i.top,
                u = i.bottom,
                s = Math.max(n(document).height(), n(document.body).height());
            "object" != typeof i && (u = f = i);
            "function" == typeof f && (f = i.top(this.$element));
            "function" == typeof u && (u = i.bottom(this.$element));
            var r = this.getState(s, o, f, u);
            if (this.affixed != r) {
                null != this.unpin && this.$element.css("top", "");
                var e = "affix" + (r ? "-" + r : ""),
                    h = n.Event(e + ".bs.affix");
                if (this.$element.trigger(h), h.isDefaultPrevented()) return;
                this.affixed = r;
                this.unpin = "bottom" == r ? this.getPinnedOffset() : null;
                this.$element.removeClass(t.RESET).addClass(e).trigger(e.replace("affix", "affixed") + ".bs.affix")
            }
            "bottom" == r && this.$element.offset({
                top: s - o - u
            })
        }
    };
    var r = n.fn.affix;
    n.fn.affix = i;
    n.fn.affix.Constructor = t;
    n.fn.affix.noConflict = function() {
        return n.fn.affix = r, this
    };
    n(window).on("load", function() {
        n('[data-spy="affix"]').each(function() {
            var r = n(this),
                t = r.data();
            t.offset = t.offset || {};
            null != t.offsetBottom && (t.offset.bottom = t.offsetBottom);
            null != t.offsetTop && (t.offset.top = t.offsetTop);
            i.call(r, t)
        })
    })
}(jQuery);;
(function(n, t, i, r) {
    function u(t, i) {
        this.settings = null;
        this.options = n.extend({}, u.Defaults, i);
        this.$element = n(t);
        this._handlers = {};
        this._plugins = {};
        this._supress = {};
        this._current = null;
        this._speed = null;
        this._coordinates = [];
        this._breakpoint = null;
        this._width = null;
        this._items = [];
        this._clones = [];
        this._mergers = [];
        this._widths = [];
        this._invalidated = {};
        this._pipe = [];
        this._drag = {
            time: null,
            target: null,
            pointer: null,
            stage: {
                start: null,
                current: null
            },
            direction: null
        };
        this._states = {
            current: {},
            tags: {
                initializing: ["busy"],
                animating: ["busy"],
                dragging: ["interacting"]
            }
        };
        n.each(["onResize", "onThrottledResize"], n.proxy(function(t, i) {
            this._handlers[i] = n.proxy(this[i], this)
        }, this));
        n.each(u.Plugins, n.proxy(function(n, t) {
            this._plugins[n.charAt(0).toLowerCase() + n.slice(1)] = new t(this)
        }, this));
        n.each(u.Workers, n.proxy(function(t, i) {
            this._pipe.push({
                filter: i.filter,
                run: n.proxy(i.run, this)
            })
        }, this));
        this.setup();
        this.initialize()
    }
    u.Defaults = {
        items: 3,
        loop: !1,
        center: !1,
        rewind: !1,
        mouseDrag: !0,
        touchDrag: !0,
        pullDrag: !0,
        freeDrag: !1,
        margin: 0,
        stagePadding: 0,
        merge: !1,
        mergeFit: !0,
        autoWidth: !1,
        startPosition: 0,
        rtl: !1,
        smartSpeed: 250,
        fluidSpeed: !1,
        dragEndSpeed: !1,
        responsive: {},
        responsiveRefreshRate: 200,
        responsiveBaseElement: t,
        fallbackEasing: "swing",
        info: !1,
        nestedItemSelector: !1,
        itemElement: "div",
        stageElement: "div",
        refreshClass: "owl-refresh",
        loadedClass: "owl-loaded",
        loadingClass: "owl-loading",
        rtlClass: "owl-rtl",
        responsiveClass: "owl-responsive",
        dragClass: "owl-drag",
        itemClass: "owl-item",
        stageClass: "owl-stage",
        stageOuterClass: "owl-stage-outer",
        grabClass: "owl-grab"
    };
    u.Width = {
        Default: "default",
        Inner: "inner",
        Outer: "outer"
    };
    u.Type = {
        Event: "event",
        State: "state"
    };
    u.Plugins = {};
    u.Workers = [{
        filter: ["width", "settings"],
        run: function() {
            this._width = this.$element.width()
        }
    }, {
        filter: ["width", "items", "settings"],
        run: function(n) {
            n.current = this._items && this._items[this.relative(this._current)]
        }
    }, {
        filter: ["items", "settings"],
        run: function() {
            this.$stage.children(".cloned").remove()
        }
    }, {
        filter: ["width", "items", "settings"],
        run: function(n) {
            var t = this.settings.margin || "",
                u = !this.settings.autoWidth,
                i = this.settings.rtl,
                r = {
                    width: "auto",
                    "margin-left": i ? t : "",
                    "margin-right": i ? "" : t
                };
            u || this.$stage.children().css(r);
            n.css = r
        }
    }, {
        filter: ["width", "items", "settings"],
        run: function(n) {
            var r = (this.width() / this.settings.items).toFixed(3) - this.settings.margin,
                t = null,
                i = this._items.length,
                f = !this.settings.autoWidth,
                u = [];
            for (n.items = {
                    merge: !1,
                    width: r
                }; i--;) t = this._mergers[i], t = this.settings.mergeFit && Math.min(t, this.settings.items) || t, n.items.merge = t > 1 || n.items.merge, u[i] = f ? r * t : this._items[i].width();
            this._widths = u
        }
    }, {
        filter: ["items", "settings"],
        run: function() {
            var t = [],
                i = this._items,
                r = this.settings,
                e = Math.max(r.items * 2, 4),
                s = Math.ceil(i.length / 2) * 2,
                o = r.loop && i.length ? r.rewind ? e : Math.max(e, s) : 0,
                u = "",
                f = "";
            for (o /= 2; o--;) t.push(this.normalize(t.length / 2, !0)), u = u + i[t[t.length - 1]][0].outerHTML, t.push(this.normalize(i.length - 1 - (t.length - 1) / 2, !0)), f = i[t[t.length - 1]][0].outerHTML + f;
            this._clones = t;
            n(u).addClass("cloned").appendTo(this.$stage);
            n(f).addClass("cloned").prependTo(this.$stage)
        }
    }, {
        filter: ["width", "items", "settings"],
        run: function() {
            for (var u = this.settings.rtl ? 1 : -1, f = this._clones.length + this._items.length, n = -1, i = 0, r = 0, t = []; ++n < f;) i = t[n - 1] || 0, r = this._widths[this.relative(n)] + this.settings.margin, t.push(i + r * u);
            this._coordinates = t
        }
    }, {
        filter: ["width", "items", "settings"],
        run: function() {
            var n = this.settings.stagePadding,
                t = this._coordinates,
                i = {
                    width: Math.ceil(Math.abs(t[t.length - 1])) + n * 2,
                    "padding-left": n || "",
                    "padding-right": n || ""
                };
            this.$stage.css(i)
        }
    }, {
        filter: ["width", "items", "settings"],
        run: function(n) {
            var t = this._coordinates.length,
                i = !this.settings.autoWidth,
                r = this.$stage.children();
            if (i && n.items.merge)
                while (t--) n.css.width = this._widths[this.relative(t)], r.eq(t).css(n.css);
            else i && (n.css.width = n.items.width, r.css(n.css))
        }
    }, {
        filter: ["items"],
        run: function() {
            this._coordinates.length < 1 && this.$stage.removeAttr("style")
        }
    }, {
        filter: ["width", "items", "settings"],
        run: function(n) {
            n.current = n.current ? this.$stage.children().index(n.current) : 0;
            n.current = Math.max(this.minimum(), Math.min(this.maximum(), n.current));
            this.reset(n.current)
        }
    }, {
        filter: ["position"],
        run: function() {
            this.animate(this.coordinates(this._current))
        }
    }, {
        filter: ["width", "position", "items", "settings"],
        run: function() {
            for (var u = this.settings.rtl ? 1 : -1, f = this.settings.stagePadding * 2, t = this.coordinates(this.current()) + f, e = t + this.width() * u, i, r, o = [], n = 0, s = this._coordinates.length; n < s; n++) i = this._coordinates[n - 1] || 0, r = Math.abs(this._coordinates[n]) + f * u, (this.op(i, "<=", t) && this.op(i, ">", e) || this.op(r, "<", t) && this.op(r, ">", e)) && o.push(n);
            this.$stage.children(".active").removeClass("active");
            this.$stage.children(":eq(" + o.join("), :eq(") + ")").addClass("active");
            this.settings.center && (this.$stage.children(".center").removeClass("center"), this.$stage.children().eq(this.current()).addClass("center"))
        }
    }];
    u.prototype.initialize = function() {
        if (this.enter("initializing"), this.trigger("initialize"), this.$element.toggleClass(this.settings.rtlClass, this.settings.rtl), this.settings.autoWidth && !this.is("pre-loading")) {
            var t, i, u;
            t = this.$element.find("img");
            i = this.settings.nestedItemSelector ? "." + this.settings.nestedItemSelector : r;
            u = this.$element.children(i).width();
            t.length && u <= 0 && this.preloadAutoWidthImages(t)
        }
        this.$element.addClass(this.options.loadingClass);
        this.$stage = n("<" + this.settings.stageElement + ' class="' + this.settings.stageClass + '"/>').wrap('<div class="' + this.settings.stageOuterClass + '"/>');
        this.$element.append(this.$stage.parent());
        this.replace(this.$element.children().not(this.$stage.parent()));
        this.$element.is(":visible") ? this.refresh() : this.invalidate("width");
        this.$element.removeClass(this.options.loadingClass).addClass(this.options.loadedClass);
        this.registerEventHandlers();
        this.leave("initializing");
        this.trigger("initialized")
    };
    u.prototype.setup = function() {
        var u = this.viewport(),
            r = this.options.responsive,
            i = -1,
            t = null;
        r ? (n.each(r, function(n) {
            n <= u && n > i && (i = Number(n))
        }), t = n.extend({}, this.options, r[i]), typeof t.stagePadding == "function" && (t.stagePadding = t.stagePadding()), delete t.responsive, t.responsiveClass && this.$element.attr("class", this.$element.attr("class").replace(new RegExp("(" + this.options.responsiveClass + "-)\\S+\\s", "g"), "$1" + i))) : t = n.extend({}, this.options);
        this.trigger("change", {
            property: {
                name: "settings",
                value: t
            }
        });
        this._breakpoint = i;
        this.settings = t;
        this.invalidate("settings");
        this.trigger("changed", {
            property: {
                name: "settings",
                value: this.settings
            }
        })
    };
    u.prototype.optionsLogic = function() {
        this.settings.autoWidth && (this.settings.stagePadding = !1, this.settings.merge = !1)
    };
    u.prototype.prepare = function(t) {
        var i = this.trigger("prepare", {
            content: t
        });
        return i.data || (i.data = n("<" + this.settings.itemElement + "/>").addClass(this.options.itemClass).append(t)), this.trigger("prepared", {
            content: i.data
        }), i.data
    };
    u.prototype.update = function() {
        for (var t = 0, i = this._pipe.length, r = n.proxy(function(n) {
                return this[n]
            }, this._invalidated), u = {}; t < i;)(this._invalidated.all || n.grep(this._pipe[t].filter, r).length > 0) && this._pipe[t].run(u), t++;
        this._invalidated = {};
        this.is("valid") || this.enter("valid")
    };
    u.prototype.width = function(n) {
        n = n || u.Width.Default;
        switch (n) {
            case u.Width.Inner:
            case u.Width.Outer:
                return this._width;
            default:
                return this._width - this.settings.stagePadding * 2 + this.settings.margin
        }
    };
    u.prototype.refresh = function() {
        this.enter("refreshing");
        this.trigger("refresh");
        this.setup();
        this.optionsLogic();
        this.$element.addClass(this.options.refreshClass);
        this.update();
        this.$element.removeClass(this.options.refreshClass);
        this.leave("refreshing");
        this.trigger("refreshed")
    };
    u.prototype.onThrottledResize = function() {
        t.clearTimeout(this.resizeTimer);
        this.resizeTimer = t.setTimeout(this._handlers.onResize, this.settings.responsiveRefreshRate)
    };
    u.prototype.onResize = function() {
        if (!this._items.length || this._width === this.$element.width() || !this.$element.is(":visible")) return !1;
        if (this.enter("resizing"), this.trigger("resize").isDefaultPrevented()) return this.leave("resizing"), !1;
        this.invalidate("width");
        this.refresh();
        this.leave("resizing");
        this.trigger("resized")
    };
    u.prototype.registerEventHandlers = function() {
        if (n.support.transition) this.$stage.on(n.support.transition.end + ".owl.core", n.proxy(this.onTransitionEnd, this));
        if (this.settings.responsive !== !1) this.on(t, "resize", this._handlers.onThrottledResize);
        if (this.settings.mouseDrag) {
            this.$element.addClass(this.options.dragClass);
            this.$stage.on("mousedown.owl.core", n.proxy(this.onDragStart, this));
            this.$stage.on("dragstart.owl.core selectstart.owl.core", function() {
                return !1
            })
        }
        if (this.settings.touchDrag) {
            this.$stage.on("touchstart.owl.core", n.proxy(this.onDragStart, this));
            this.$stage.on("touchcancel.owl.core", n.proxy(this.onDragEnd, this))
        }
    };
    u.prototype.onDragStart = function(t) {
        var r = null;
        if (t.which !== 3) {
            n.support.transform ? (r = this.$stage.css("transform").replace(/.*\(|\)| /g, "").split(","), r = {
                x: r[r.length === 16 ? 12 : 4],
                y: r[r.length === 16 ? 13 : 5]
            }) : (r = this.$stage.position(), r = {
                x: this.settings.rtl ? r.left + this.$stage.width() - this.width() + this.settings.margin : r.left,
                y: r.top
            });
            this.is("animating") && (n.support.transform ? this.animate(r.x) : this.$stage.stop(), this.invalidate("position"));
            this.$element.toggleClass(this.options.grabClass, t.type === "mousedown");
            this.speed(0);
            this._drag.time = (new Date).getTime();
            this._drag.target = n(t.target);
            this._drag.stage.start = r;
            this._drag.stage.current = r;
            this._drag.pointer = this.pointer(t);
            n(i).on("mouseup.owl.core touchend.owl.core", n.proxy(this.onDragEnd, this));
            n(i).one("mousemove.owl.core touchmove.owl.core", n.proxy(function(t) {
                var r = this.difference(this._drag.pointer, this.pointer(t));
                n(i).on("mousemove.owl.core touchmove.owl.core", n.proxy(this.onDragMove, this));
                Math.abs(r.x) < Math.abs(r.y) && this.is("valid") || (t.preventDefault(), this.enter("dragging"), this.trigger("drag"))
            }, this))
        }
    };
    u.prototype.onDragMove = function(n) {
        var t = null,
            i = null,
            u = null,
            f = this.difference(this._drag.pointer, this.pointer(n)),
            r = this.difference(this._drag.stage.start, f);
        this.is("dragging") && (n.preventDefault(), this.settings.loop ? (t = this.coordinates(this.minimum()), i = this.coordinates(this.maximum() + 1) - t, r.x = ((r.x - t) % i + i) % i + t) : (t = this.settings.rtl ? this.coordinates(this.maximum()) : this.coordinates(this.minimum()), i = this.settings.rtl ? this.coordinates(this.minimum()) : this.coordinates(this.maximum()), u = this.settings.pullDrag ? f.x / -5 : 0, r.x = Math.max(Math.min(r.x, t + u), i + u)), this._drag.stage.current = r, this.animate(r.x))
    };
    u.prototype.onDragEnd = function(t) {
        var r = this.difference(this._drag.pointer, this.pointer(t)),
            f = this._drag.stage.current,
            u = r.x > 0 ^ this.settings.rtl ? "left" : "right";
        if (n(i).off(".owl.core"), this.$element.removeClass(this.options.grabClass), (r.x !== 0 && this.is("dragging") || !this.is("valid")) && (this.speed(this.settings.dragEndSpeed || this.settings.smartSpeed), this.current(this.closest(f.x, r.x !== 0 ? u : this._drag.direction)), this.invalidate("position"), this.update(), this._drag.direction = u, Math.abs(r.x) > 3 || (new Date).getTime() - this._drag.time > 300)) this._drag.target.one("click.owl.core", function() {
            return !1
        });
        this.is("dragging") && (this.leave("dragging"), this.trigger("dragged"))
    };
    u.prototype.closest = function(t, i) {
        var r = -1,
            u = 30,
            e = this.width(),
            f = this.coordinates();
        return this.settings.freeDrag || n.each(f, n.proxy(function(n, o) {
            return i === "left" && t > o - u && t < o + u ? r = n : i === "right" && t > o - e - u && t < o - e + u ? r = n + 1 : this.op(t, "<", o) && this.op(t, ">", f[n + 1] || o - e) && (r = i === "left" ? n + 1 : n), r === -1
        }, this)), this.settings.loop || (this.op(t, ">", f[this.minimum()]) ? r = t = this.minimum() : this.op(t, "<", f[this.maximum()]) && (r = t = this.maximum())), r
    };
    u.prototype.animate = function(t) {
        var i = this.speed() > 0;
        this.is("animating") && this.onTransitionEnd();
        i && (this.enter("animating"), this.trigger("translate"));
        n.support.transform3d && n.support.transition ? this.$stage.css({
            transform: "translate3d(" + t + "px,0px,0px)",
            transition: this.speed() / 1e3 + "s"
        }) : i ? this.$stage.animate({
            left: t + "px"
        }, this.speed(), this.settings.fallbackEasing, n.proxy(this.onTransitionEnd, this)) : this.$stage.css({
            left: t + "px"
        })
    };
    u.prototype.is = function(n) {
        return this._states.current[n] && this._states.current[n] > 0
    };
    u.prototype.current = function(n) {
        if (n === r) return this._current;
        if (this._items.length === 0) return r;
        if (n = this.normalize(n), this._current !== n) {
            var t = this.trigger("change", {
                property: {
                    name: "position",
                    value: n
                }
            });
            t.data !== r && (n = this.normalize(t.data));
            this._current = n;
            this.invalidate("position");
            this.trigger("changed", {
                property: {
                    name: "position",
                    value: this._current
                }
            })
        }
        return this._current
    };
    u.prototype.invalidate = function(t) {
        return n.type(t) === "string" && (this._invalidated[t] = !0, this.is("valid") && this.leave("valid")), n.map(this._invalidated, function(n, t) {
            return t
        })
    };
    u.prototype.reset = function(n) {
        (n = this.normalize(n), n !== r) && (this._speed = 0, this._current = n, this.suppress(["translate", "translated"]), this.animate(this.coordinates(n)), this.release(["translate", "translated"]))
    };
    u.prototype.normalize = function(n, t) {
        var i = this._items.length,
            u = t ? 0 : this._clones.length;
        return !this.isNumeric(n) || i < 1 ? n = r : (n < 0 || n >= i + u) && (n = ((n - u / 2) % i + i) % i + u / 2), n
    };
    u.prototype.relative = function(n) {
        return n -= this._clones.length / 2, this.normalize(n, !0)
    };
    u.prototype.maximum = function(n) {
        var t = this.settings,
            i = this._coordinates.length,
            r, u, f;
        if (t.loop) i = this._clones.length / 2 + this._items.length - 1;
        else if (t.autoWidth || t.merge) {
            for (r = this._items.length, u = this._items[--r].width(), f = this.$element.width(); r--;)
                if (u += this._items[r].width() + this.settings.margin, u > f) break;
            i = r + 1
        } else i = t.center ? this._items.length - 1 : this._items.length - t.items;
        return n && (i -= this._clones.length / 2), Math.max(i, 0)
    };
    u.prototype.minimum = function(n) {
        return n ? 0 : this._clones.length / 2
    };
    u.prototype.items = function(n) {
        return n === r ? this._items.slice() : (n = this.normalize(n, !0), this._items[n])
    };
    u.prototype.mergers = function(n) {
        return n === r ? this._mergers.slice() : (n = this.normalize(n, !0), this._mergers[n])
    };
    u.prototype.clones = function(t) {
        var i = this._clones.length / 2,
            f = i + this._items.length,
            u = function(n) {
                return n % 2 == 0 ? f + n / 2 : i - (n + 1) / 2
            };
        return t === r ? n.map(this._clones, function(n, t) {
            return u(t)
        }) : n.map(this._clones, function(n, i) {
            return n === t ? u(i) : null
        })
    };
    u.prototype.speed = function(n) {
        return n !== r && (this._speed = n), this._speed
    };
    u.prototype.coordinates = function(t) {
        var f = 1,
            u = t - 1,
            i;
        return t === r ? n.map(this._coordinates, n.proxy(function(n, t) {
            return this.coordinates(t)
        }, this)) : (this.settings.center ? (this.settings.rtl && (f = -1, u = t + 1), i = this._coordinates[t], i += (this.width() - i + (this._coordinates[u] || 0)) / 2 * f) : i = this._coordinates[u] || 0, Math.ceil(i))
    };
    u.prototype.duration = function(n, t, i) {
        return i === 0 ? 0 : Math.min(Math.max(Math.abs(t - n), 1), 6) * Math.abs(i || this.settings.smartSpeed)
    };
    u.prototype.to = function(n, t) {
        var f = this.current(),
            r = null,
            i = n - this.relative(f),
            s = (i > 0) - (i < 0),
            e = this._items.length,
            o = this.minimum(),
            u = this.maximum();
        this.settings.loop ? (!this.settings.rewind && Math.abs(i) > e / 2 && (i += s * -1 * e), n = f + i, r = ((n - o) % e + e) % e + o, r !== n && r - i <= u && r - i > 0 && (f = r - i, n = r, this.reset(f))) : this.settings.rewind ? (u += 1, n = (n % u + u) % u) : n = Math.max(o, Math.min(u, n));
        this.speed(this.duration(f, n, t));
        this.current(n);
        this.$element.is(":visible") && this.update()
    };
    u.prototype.next = function(n) {
        n = n || !1;
        this.to(this.relative(this.current()) + 1, n)
    };
    u.prototype.prev = function(n) {
        n = n || !1;
        this.to(this.relative(this.current()) - 1, n)
    };
    u.prototype.onTransitionEnd = function(n) {
        if (n !== r && (n.stopPropagation(), (n.target || n.srcElement || n.originalTarget) !== this.$stage.get(0))) return !1;
        this.leave("animating");
        this.trigger("translated")
    };
    u.prototype.viewport = function() {
        var r;
        return this.options.responsiveBaseElement !== t ? r = n(this.options.responsiveBaseElement).width() : t.innerWidth ? r = t.innerWidth : i.documentElement && i.documentElement.clientWidth ? r = i.documentElement.clientWidth : console.warn("Can not detect viewport width."), r
    };
    u.prototype.replace = function(t) {
        this.$stage.empty();
        this._items = [];
        t && (t = t instanceof jQuery ? t : n(t));
        this.settings.nestedItemSelector && (t = t.find("." + this.settings.nestedItemSelector));
        t.filter(function() {
            return this.nodeType === 1
        }).each(n.proxy(function(n, t) {
            t = this.prepare(t);
            this.$stage.append(t);
            this._items.push(t);
            this._mergers.push(t.find("[data-merge]").addBack("[data-merge]").attr("data-merge") * 1 || 1)
        }, this));
        this.reset(this.isNumeric(this.settings.startPosition) ? this.settings.startPosition : 0);
        this.invalidate("items")
    };
    u.prototype.add = function(t, i) {
        var u = this.relative(this._current);
        i = i === r ? this._items.length : this.normalize(i, !0);
        t = t instanceof jQuery ? t : n(t);
        this.trigger("add", {
            content: t,
            position: i
        });
        t = this.prepare(t);
        this._items.length === 0 || i === this._items.length ? (this._items.length === 0 && this.$stage.append(t), this._items.length !== 0 && this._items[i - 1].after(t), this._items.push(t), this._mergers.push(t.find("[data-merge]").addBack("[data-merge]").attr("data-merge") * 1 || 1)) : (this._items[i].before(t), this._items.splice(i, 0, t), this._mergers.splice(i, 0, t.find("[data-merge]").addBack("[data-merge]").attr("data-merge") * 1 || 1));
        this._items[u] && this.reset(this._items[u].index());
        this.invalidate("items");
        this.trigger("added", {
            content: t,
            position: i
        })
    };
    u.prototype.remove = function(n) {
        (n = this.normalize(n, !0), n !== r) && (this.trigger("remove", {
            content: this._items[n],
            position: n
        }), this._items[n].remove(), this._items.splice(n, 1), this._mergers.splice(n, 1), this.invalidate("items"), this.trigger("removed", {
            content: null,
            position: n
        }))
    };
    u.prototype.preloadAutoWidthImages = function(t) {
        t.each(n.proxy(function(t, i) {
            this.enter("pre-loading");
            i = n(i);
            n(new Image).one("load", n.proxy(function(n) {
                i.attr("src", n.target.src);
                i.css("opacity", 1);
                this.leave("pre-loading");
                this.is("pre-loading") || this.is("initializing") || this.refresh()
            }, this)).attr("src", i.attr("src") || i.attr("data-src") || i.attr("data-src-retina"))
        }, this))
    };
    u.prototype.destroy = function() {
        this.$element.off(".owl.core");
        this.$stage.off(".owl.core");
        n(i).off(".owl.core");
        this.settings.responsive !== !1 && (t.clearTimeout(this.resizeTimer), this.off(t, "resize", this._handlers.onThrottledResize));
        for (var r in this._plugins) this._plugins[r].destroy();
        this.$stage.children(".cloned").remove();
        this.$stage.unwrap();
        this.$stage.children().contents().unwrap();
        this.$stage.children().unwrap();
        this.$element.removeClass(this.options.refreshClass).removeClass(this.options.loadingClass).removeClass(this.options.loadedClass).removeClass(this.options.rtlClass).removeClass(this.options.dragClass).removeClass(this.options.grabClass).attr("class", this.$element.attr("class").replace(new RegExp(this.options.responsiveClass + "-\\S+\\s", "g"), "")).removeData("owl.carousel")
    };
    u.prototype.op = function(n, t, i) {
        var r = this.settings.rtl;
        switch (t) {
            case "<":
                return r ? n > i : n < i;
            case ">":
                return r ? n < i : n > i;
            case ">=":
                return r ? n <= i : n >= i;
            case "<=":
                return r ? n >= i : n <= i
        }
    };
    u.prototype.on = function(n, t, i, r) {
        n.addEventListener ? n.addEventListener(t, i, r) : n.attachEvent && n.attachEvent("on" + t, i)
    };
    u.prototype.off = function(n, t, i, r) {
        n.removeEventListener ? n.removeEventListener(t, i, r) : n.detachEvent && n.detachEvent("on" + t, i)
    };
    u.prototype.trigger = function(t, i, r) {
        var o = {
                item: {
                    count: this._items.length,
                    index: this.current()
                }
            },
            e = n.camelCase(n.grep(["on", t, r], function(n) {
                return n
            }).join("-").toLowerCase()),
            f = n.Event([t, "owl", r || "carousel"].join(".").toLowerCase(), n.extend({
                relatedTarget: this
            }, o, i));
        return this._supress[t] || (n.each(this._plugins, function(n, t) {
            if (t.onTrigger) t.onTrigger(f)
        }), this.register({
            type: u.Type.Event,
            name: t
        }), this.$element.trigger(f), this.settings && typeof this.settings[e] == "function" && this.settings[e].call(this, f)), f
    };
    u.prototype.enter = function(t) {
        n.each([t].concat(this._states.tags[t] || []), n.proxy(function(n, t) {
            this._states.current[t] === r && (this._states.current[t] = 0);
            this._states.current[t]++
        }, this))
    };
    u.prototype.leave = function(t) {
        n.each([t].concat(this._states.tags[t] || []), n.proxy(function(n, t) {
            this._states.current[t]--
        }, this))
    };
    u.prototype.register = function(t) {
        if (t.type === u.Type.Event) {
            if (n.event.special[t.name] || (n.event.special[t.name] = {}), !n.event.special[t.name].owl) {
                var i = n.event.special[t.name]._default;
                n.event.special[t.name]._default = function(n) {
                    return i && i.apply && (!n.namespace || n.namespace.indexOf("owl") === -1) ? i.apply(this, arguments) : n.namespace && n.namespace.indexOf("owl") > -1
                };
                n.event.special[t.name].owl = !0
            }
        } else t.type === u.Type.State && (this._states.tags[t.name] = this._states.tags[t.name] ? this._states.tags[t.name].concat(t.tags) : t.tags, this._states.tags[t.name] = n.grep(this._states.tags[t.name], n.proxy(function(i, r) {
            return n.inArray(i, this._states.tags[t.name]) === r
        }, this)))
    };
    u.prototype.suppress = function(t) {
        n.each(t, n.proxy(function(n, t) {
            this._supress[t] = !0
        }, this))
    };
    u.prototype.release = function(t) {
        n.each(t, n.proxy(function(n, t) {
            delete this._supress[t]
        }, this))
    };
    u.prototype.pointer = function(n) {
        var i = {
            x: null,
            y: null
        };
        return n = n.originalEvent || n || t.event, n = n.touches && n.touches.length ? n.touches[0] : n.changedTouches && n.changedTouches.length ? n.changedTouches[0] : n, n.pageX ? (i.x = n.pageX, i.y = n.pageY) : (i.x = n.clientX, i.y = n.clientY), i
    };
    u.prototype.isNumeric = function(n) {
        return !isNaN(parseFloat(n))
    };
    u.prototype.difference = function(n, t) {
        return {
            x: n.x - t.x,
            y: n.y - t.y
        }
    };
    n.fn.owlCarousel = function(t) {
        var i = Array.prototype.slice.call(arguments, 1);
        return this.each(function() {
            var f = n(this),
                r = f.data("owl.carousel");
            r || (r = new u(this, typeof t == "object" && t), f.data("owl.carousel", r), n.each(["next", "prev", "to", "destroy", "refresh", "replace", "add", "remove"], function(t, i) {
                r.register({
                    type: u.Type.Event,
                    name: i
                });
                r.$element.on(i + ".owl.carousel.core", n.proxy(function(n) {
                    n.namespace && n.relatedTarget !== this && (this.suppress([i]), r[i].apply(this, [].slice.call(arguments, 1)), this.release([i]))
                }, r))
            }));
            typeof t == "string" && t.charAt(0) !== "_" && r[t].apply(r, i)
        })
    };
    n.fn.owlCarousel.Constructor = u
})(window.Zepto || window.jQuery, window, document),
function(n, t) {
    var i = function(t) {
        this._core = t;
        this._interval = null;
        this._visible = null;
        this._handlers = {
            "initialized.owl.carousel": n.proxy(function(n) {
                n.namespace && this._core.settings.autoRefresh && this.watch()
            }, this)
        };
        this._core.options = n.extend({}, i.Defaults, this._core.options);
        this._core.$element.on(this._handlers)
    };
    i.Defaults = {
        autoRefresh: !0,
        autoRefreshInterval: 500
    };
    i.prototype.watch = function() {
        this._interval || (this._visible = this._core.$element.is(":visible"), this._interval = t.setInterval(n.proxy(this.refresh, this), this._core.settings.autoRefreshInterval))
    };
    i.prototype.refresh = function() {
        this._core.$element.is(":visible") !== this._visible && (this._visible = !this._visible, this._core.$element.toggleClass("owl-hidden", !this._visible), this._visible && this._core.invalidate("width") && this._core.refresh())
    };
    i.prototype.destroy = function() {
        var n, i;
        t.clearInterval(this._interval);
        for (n in this._handlers) this._core.$element.off(n, this._handlers[n]);
        for (i in Object.getOwnPropertyNames(this)) typeof this[i] != "function" && (this[i] = null)
    };
    n.fn.owlCarousel.Constructor.Plugins.AutoRefresh = i
}(window.Zepto || window.jQuery, window, document),
function(n, t, i, r) {
    var u = function(t) {
        this._core = t;
        this._loaded = [];
        this._handlers = {
            "initialized.owl.carousel change.owl.carousel resized.owl.carousel": n.proxy(function(t) {
                if (t.namespace && this._core.settings && this._core.settings.lazyLoad && (t.property && t.property.name == "position" || t.type == "initialized"))
                    for (var i = this._core.settings, f = i.center && Math.ceil(i.items / 2) || i.items, e = i.center && f * -1 || 0, u = (t.property && t.property.value !== r ? t.property.value : this._core.current()) + e, o = this._core.clones().length, s = n.proxy(function(n, t) {
                            this.load(t)
                        }, this); e++ < f;) this.load(o / 2 + this._core.relative(u)), o && n.each(this._core.clones(this._core.relative(u)), s), u++
            }, this)
        };
        this._core.options = n.extend({}, u.Defaults, this._core.options);
        this._core.$element.on(this._handlers)
    };
    u.Defaults = {
        lazyLoad: !1
    };
    u.prototype.load = function(i) {
        var r = this._core.$stage.children().eq(i),
            u = r && r.find(".owl-lazy");
        !u || n.inArray(r.get(0), this._loaded) > -1 || (u.each(n.proxy(function(i, r) {
            var u = n(r),
                e, f = t.devicePixelRatio > 1 && u.attr("data-src-retina") || u.attr("data-src");
            this._core.trigger("load", {
                element: u,
                url: f
            }, "lazy");
            u.is("img") ? u.one("load.owl.lazy", n.proxy(function() {
                u.css("opacity", 1);
                this._core.trigger("loaded", {
                    element: u,
                    url: f
                }, "lazy")
            }, this)).attr("src", f) : (e = new Image, e.onload = n.proxy(function() {
                u.css({
                    "background-image": 'url("' + f + '")',
                    opacity: "1"
                });
                this._core.trigger("loaded", {
                    element: u,
                    url: f
                }, "lazy")
            }, this), e.src = f)
        }, this)), this._loaded.push(r.get(0)))
    };
    u.prototype.destroy = function() {
        var n, t;
        for (n in this.handlers) this._core.$element.off(n, this.handlers[n]);
        for (t in Object.getOwnPropertyNames(this)) typeof this[t] != "function" && (this[t] = null)
    };
    n.fn.owlCarousel.Constructor.Plugins.Lazy = u
}(window.Zepto || window.jQuery, window, document),
function(n) {
    var t = function(i) {
        this._core = i;
        this._handlers = {
            "initialized.owl.carousel refreshed.owl.carousel": n.proxy(function(n) {
                n.namespace && this._core.settings.autoHeight && this.update()
            }, this),
            "changed.owl.carousel": n.proxy(function(n) {
                n.namespace && this._core.settings.autoHeight && n.property.name == "position" && this.update()
            }, this),
            "loaded.owl.lazy": n.proxy(function(n) {
                n.namespace && this._core.settings.autoHeight && n.element.closest("." + this._core.settings.itemClass).index() === this._core.current() && this.update()
            }, this)
        };
        this._core.options = n.extend({}, t.Defaults, this._core.options);
        this._core.$element.on(this._handlers)
    };
    t.Defaults = {
        autoHeight: !1,
        autoHeightClass: "owl-height"
    };
    t.prototype.update = function() {
        var t = this._core._current,
            u = t + this._core.settings.items,
            f = this._core.$stage.children().toArray().slice(t, u),
            i = [],
            r = 0;
        n.each(f, function(t, r) {
            i.push(n(r).height())
        });
        r = Math.max.apply(null, i);
        this._core.$stage.parent().height(r).addClass(this._core.settings.autoHeightClass)
    };
    t.prototype.destroy = function() {
        var n, t;
        for (n in this._handlers) this._core.$element.off(n, this._handlers[n]);
        for (t in Object.getOwnPropertyNames(this)) typeof this[t] != "function" && (this[t] = null)
    };
    n.fn.owlCarousel.Constructor.Plugins.AutoHeight = t
}(window.Zepto || window.jQuery, window, document),
function(n, t, i) {
    var r = function(t) {
        this._core = t;
        this._videos = {};
        this._playing = null;
        this._handlers = {
            "initialized.owl.carousel": n.proxy(function(n) {
                n.namespace && this._core.register({
                    type: "state",
                    name: "playing",
                    tags: ["interacting"]
                })
            }, this),
            "resize.owl.carousel": n.proxy(function(n) {
                n.namespace && this._core.settings.video && this.isInFullScreen() && n.preventDefault()
            }, this),
            "refreshed.owl.carousel": n.proxy(function(n) {
                n.namespace && this._core.is("resizing") && this._core.$stage.find(".cloned .owl-video-frame").remove()
            }, this),
            "changed.owl.carousel": n.proxy(function(n) {
                n.namespace && n.property.name === "position" && this._playing && this.stop()
            }, this),
            "prepared.owl.carousel": n.proxy(function(t) {
                if (t.namespace) {
                    var i = n(t.content).find(".owl-video");
                    i.length && (i.css("display", "none"), this.fetch(i, n(t.content)))
                }
            }, this)
        };
        this._core.options = n.extend({}, r.Defaults, this._core.options);
        this._core.$element.on(this._handlers);
        this._core.$element.on("click.owl.video", ".owl-video-play-icon", n.proxy(function(n) {
            this.play(n)
        }, this))
    };
    r.Defaults = {
        video: !1,
        videoHeight: !1,
        videoWidth: !1
    };
    r.prototype.fetch = function(n, t) {
        var u = function() {
                return n.attr("data-vimeo-id") ? "vimeo" : n.attr("data-vzaar-id") ? "vzaar" : "youtube"
            }(),
            i = n.attr("data-vimeo-id") || n.attr("data-youtube-id") || n.attr("data-vzaar-id"),
            f = n.attr("data-width") || this._core.settings.videoWidth,
            e = n.attr("data-height") || this._core.settings.videoHeight,
            r = n.attr("href");
        if (r) {
            if (i = r.match(/(http:|https:|)\/\/(player.|www.|app.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com)|vzaar\.com)\/(video\/|videos\/|embed\/|channels\/.+\/|groups\/.+\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(\&\S+)?/), i[3].indexOf("youtu") > -1) u = "youtube";
            else if (i[3].indexOf("vimeo") > -1) u = "vimeo";
            else if (i[3].indexOf("vzaar") > -1) u = "vzaar";
            else throw new Error("Video URL not supported.");
            i = i[6]
        } else throw new Error("Missing video URL.");
        this._videos[r] = {
            type: u,
            id: i,
            width: f,
            height: e
        };
        t.attr("data-video", r);
        this.thumbnail(n, this._videos[r])
    };
    r.prototype.thumbnail = function(t, i) {
        var f, s, r, c = i.width && i.height ? 'style="width:' + i.width + "px;height:" + i.height + 'px;"' : "",
            e = t.find("img"),
            o = "src",
            h = "",
            l = this._core.settings,
            u = function(n) {
                s = '<div class="owl-video-play-icon"><\/div>';
                f = l.lazyLoad ? '<div class="owl-video-tn ' + h + '" ' + o + '="' + n + '"><\/div>' : '<div class="owl-video-tn" style="opacity:1;background-image:url(' + n + ')"><\/div>';
                t.after(f);
                t.after(s)
            };
        if (t.wrap('<div class="owl-video-wrapper"' + c + "><\/div>"), this._core.settings.lazyLoad && (o = "data-src", h = "owl-lazy"), e.length) return u(e.attr(o)), e.remove(), !1;
        i.type === "youtube" ? (r = "//img.youtube.com/vi/" + i.id + "/hqdefault.jpg", u(r)) : i.type === "vimeo" ? n.ajax({
            type: "GET",
            url: "//vimeo.com/api/v2/video/" + i.id + ".json",
            jsonp: "callback",
            dataType: "jsonp",
            success: function(n) {
                r = n[0].thumbnail_large;
                u(r)
            }
        }) : i.type === "vzaar" && n.ajax({
            type: "GET",
            url: "//vzaar.com/api/videos/" + i.id + ".json",
            jsonp: "callback",
            dataType: "jsonp",
            success: function(n) {
                r = n.framegrab_url;
                u(r)
            }
        })
    };
    r.prototype.stop = function() {
        this._core.trigger("stop", null, "video");
        this._playing.find(".owl-video-frame").remove();
        this._playing.removeClass("owl-video-playing");
        this._playing = null;
        this._core.leave("playing");
        this._core.trigger("stopped", null, "video")
    };
    r.prototype.play = function(t) {
        var o = n(t.target),
            r = o.closest("." + this._core.settings.itemClass),
            i = this._videos[r.attr("data-video")],
            f = i.width || "100%",
            e = i.height || this._core.$stage.height(),
            u;
        this._playing || (this._core.enter("playing"), this._core.trigger("play", null, "video"), r = this._core.items(this._core.relative(r.index())), this._core.reset(r.index()), i.type === "youtube" ? u = '<iframe width="' + f + '" height="' + e + '" src="//www.youtube.com/embed/' + i.id + "?autoplay=1&rel=0&v=" + i.id + '" frameborder="0" allowfullscreen><\/iframe>' : i.type === "vimeo" ? u = '<iframe src="//player.vimeo.com/video/' + i.id + '?autoplay=1" width="' + f + '" height="' + e + '" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen><\/iframe>' : i.type === "vzaar" && (u = '<iframe frameborder="0"height="' + e + '"width="' + f + '" allowfullscreen mozallowfullscreen webkitAllowFullScreen src="//view.vzaar.com/' + i.id + '/player?autoplay=true"><\/iframe>'), n('<div class="owl-video-frame">' + u + "<\/div>").insertAfter(r.find(".owl-video")), this._playing = r.addClass("owl-video-playing"))
    };
    r.prototype.isInFullScreen = function() {
        var t = i.fullscreenElement || i.mozFullScreenElement || i.webkitFullscreenElement;
        return t && n(t).parent().hasClass("owl-video-frame")
    };
    r.prototype.destroy = function() {
        var n, t;
        this._core.$element.off("click.owl.video");
        for (n in this._handlers) this._core.$element.off(n, this._handlers[n]);
        for (t in Object.getOwnPropertyNames(this)) typeof this[t] != "function" && (this[t] = null)
    };
    n.fn.owlCarousel.Constructor.Plugins.Video = r
}(window.Zepto || window.jQuery, window, document),
function(n, t, i, r) {
    var u = function(t) {
        this.core = t;
        this.core.options = n.extend({}, u.Defaults, this.core.options);
        this.swapping = !0;
        this.previous = r;
        this.next = r;
        this.handlers = {
            "change.owl.carousel": n.proxy(function(n) {
                n.namespace && n.property.name == "position" && (this.previous = this.core.current(), this.next = n.property.value)
            }, this),
            "drag.owl.carousel dragged.owl.carousel translated.owl.carousel": n.proxy(function(n) {
                n.namespace && (this.swapping = n.type == "translated")
            }, this),
            "translate.owl.carousel": n.proxy(function(n) {
                n.namespace && this.swapping && (this.core.options.animateOut || this.core.options.animateIn) && this.swap()
            }, this)
        };
        this.core.$element.on(this.handlers)
    };
    u.Defaults = {
        animateOut: !1,
        animateIn: !1
    };
    u.prototype.swap = function() {
        if (this.core.settings.items === 1 && n.support.animation && n.support.transition) {
            this.core.speed(0);
            var t, i = n.proxy(this.clear, this),
                f = this.core.$stage.children().eq(this.previous),
                e = this.core.$stage.children().eq(this.next),
                r = this.core.settings.animateIn,
                u = this.core.settings.animateOut;
            this.core.current() !== this.previous && (u && (t = this.core.coordinates(this.previous) - this.core.coordinates(this.next), f.one(n.support.animation.end, i).css({
                left: t + "px"
            }).addClass("animated owl-animated-out").addClass(u)), r && e.one(n.support.animation.end, i).addClass("animated owl-animated-in").addClass(r))
        }
    };
    u.prototype.clear = function(t) {
        n(t.target).css({
            left: ""
        }).removeClass("animated owl-animated-out owl-animated-in").removeClass(this.core.settings.animateIn).removeClass(this.core.settings.animateOut);
        this.core.onTransitionEnd()
    };
    u.prototype.destroy = function() {
        var n, t;
        for (n in this.handlers) this.core.$element.off(n, this.handlers[n]);
        for (t in Object.getOwnPropertyNames(this)) typeof this[t] != "function" && (this[t] = null)
    };
    n.fn.owlCarousel.Constructor.Plugins.Animate = u
}(window.Zepto || window.jQuery, window, document),
function(n, t, i) {
    var r = function(t) {
        this._core = t;
        this._timeout = null;
        this._paused = !1;
        this._handlers = {
            "changed.owl.carousel": n.proxy(function(n) {
                n.namespace && n.property.name === "settings" ? this._core.settings.autoplay ? this.play() : this.stop() : n.namespace && n.property.name === "position" && this._core.settings.autoplay && this._setAutoPlayInterval()
            }, this),
            "initialized.owl.carousel": n.proxy(function(n) {
                n.namespace && this._core.settings.autoplay && this.play()
            }, this),
            "play.owl.autoplay": n.proxy(function(n, t, i) {
                n.namespace && this.play(t, i)
            }, this),
            "stop.owl.autoplay": n.proxy(function(n) {
                n.namespace && this.stop()
            }, this),
            "mouseover.owl.autoplay": n.proxy(function() {
                this._core.settings.autoplayHoverPause && this._core.is("rotating") && this.pause()
            }, this),
            "mouseleave.owl.autoplay": n.proxy(function() {
                this._core.settings.autoplayHoverPause && this._core.is("rotating") && this.play()
            }, this),
            "touchstart.owl.core": n.proxy(function() {
                this._core.settings.autoplayHoverPause && this._core.is("rotating") && this.pause()
            }, this),
            "touchend.owl.core": n.proxy(function() {
                this._core.settings.autoplayHoverPause && this.play()
            }, this)
        };
        this._core.$element.on(this._handlers);
        this._core.options = n.extend({}, r.Defaults, this._core.options)
    };
    r.Defaults = {
        autoplay: !1,
        autoplayTimeout: 5e3,
        autoplayHoverPause: !0,
        autoplaySpeed: !1
    };
    r.prototype.play = function() {
        if (this._paused = !1, this._core.is("rotating")) {
            this._setAutoPlayInterval();
            return
        }
        this._core.enter("rotating");
        this._setAutoPlayInterval()
    };
    r.prototype._getNextTimeout = function(r, u) {
        return this._timeout && t.clearTimeout(this._timeout), t.setTimeout(n.proxy(function() {
            this._paused || this._core.is("busy") || this._core.is("interacting") || i.hidden || this._core.next(u || this._core.settings.autoplaySpeed)
        }, this), r || this._core.settings.autoplayTimeout)
    };
    r.prototype._setAutoPlayInterval = function() {
        this._timeout = this._getNextTimeout()
    };
    r.prototype.stop = function() {
        this._core.is("rotating") && (t.clearTimeout(this._timeout), this._core.leave("rotating"))
    };
    r.prototype.pause = function() {
        this._core.is("rotating") && (this._paused = !0)
    };
    r.prototype.destroy = function() {
        var n, t;
        this.stop();
        for (n in this._handlers) this._core.$element.off(n, this._handlers[n]);
        for (t in Object.getOwnPropertyNames(this)) typeof this[t] != "function" && (this[t] = null)
    };
    n.fn.owlCarousel.Constructor.Plugins.autoplay = r
}(window.Zepto || window.jQuery, window, document),
function(n) {
    "use strict";
    var t = function(i) {
        this._core = i;
        this._initialized = !1;
        this._pages = [];
        this._controls = {};
        this._templates = [];
        this.$element = this._core.$element;
        this._overrides = {
            next: this._core.next,
            prev: this._core.prev,
            to: this._core.to
        };
        this._handlers = {
            "prepared.owl.carousel": n.proxy(function(t) {
                t.namespace && this._core.settings.dotsData && this._templates.push('<div class="' + this._core.settings.dotClass + '">' + n(t.content).find("[data-dot]").addBack("[data-dot]").attr("data-dot") + "<\/div>")
            }, this),
            "added.owl.carousel": n.proxy(function(n) {
                n.namespace && this._core.settings.dotsData && this._templates.splice(n.position, 0, this._templates.pop())
            }, this),
            "remove.owl.carousel": n.proxy(function(n) {
                n.namespace && this._core.settings.dotsData && this._templates.splice(n.position, 1)
            }, this),
            "changed.owl.carousel": n.proxy(function(n) {
                n.namespace && n.property.name == "position" && this.draw()
            }, this),
            "initialized.owl.carousel": n.proxy(function(n) {
                n.namespace && !this._initialized && (this._core.trigger("initialize", null, "navigation"), this.initialize(), this.update(), this.draw(), this._initialized = !0, this._core.trigger("initialized", null, "navigation"))
            }, this),
            "refreshed.owl.carousel": n.proxy(function(n) {
                n.namespace && this._initialized && (this._core.trigger("refresh", null, "navigation"), this.update(), this.draw(), this._core.trigger("refreshed", null, "navigation"))
            }, this)
        };
        this._core.options = n.extend({}, t.Defaults, this._core.options);
        this.$element.on(this._handlers)
    };
    t.Defaults = {
        nav: !1,
        navText: ["prev", "next"],
        navSpeed: !1,
        navElement: "div",
        navContainer: !1,
        navContainerClass: "owl-nav",
        navClass: ["owl-prev", "owl-next"],
        slideBy: 1,
        dotClass: "owl-dot",
        dotsClass: "owl-dots",
        dots: !0,
        dotsEach: !1,
        dotsData: !1,
        dotsSpeed: !1,
        dotsContainer: !1
    };
    t.prototype.initialize = function() {
        var i, t = this._core.settings;
        this._controls.$relative = (t.navContainer ? n(t.navContainer) : n("<div>").addClass(t.navContainerClass).appendTo(this.$element)).addClass("disabled");
        this._controls.$previous = n("<" + t.navElement + ">").addClass(t.navClass[0]).html(t.navText[0]).prependTo(this._controls.$relative).on("click", n.proxy(function() {
            this.prev(t.navSpeed)
        }, this));
        this._controls.$next = n("<" + t.navElement + ">").addClass(t.navClass[1]).html(t.navText[1]).appendTo(this._controls.$relative).on("click", n.proxy(function() {
            this.next(t.navSpeed)
        }, this));
        t.dotsData || (this._templates = [n("<div>").addClass(t.dotClass).append(n("<span>")).prop("outerHTML")]);
        this._controls.$absolute = (t.dotsContainer ? n(t.dotsContainer) : n("<div>").addClass(t.dotsClass).appendTo(this.$element)).addClass("disabled");
        this._controls.$absolute.on("click", "div", n.proxy(function(i) {
            var r = n(i.target).parent().is(this._controls.$absolute) ? n(i.target).index() : n(i.target).parent().index();
            i.preventDefault();
            this.to(r, t.dotsSpeed)
        }, this));
        for (i in this._overrides) this._core[i] = n.proxy(this[i], this)
    };
    t.prototype.destroy = function() {
        var n, r, t, i;
        for (n in this._handlers) this.$element.off(n, this._handlers[n]);
        for (r in this._controls) this._controls[r].remove();
        for (i in this.overides) this._core[i] = this._overrides[i];
        for (t in Object.getOwnPropertyNames(this)) typeof this[t] != "function" && (this[t] = null)
    };
    t.prototype.update = function() {
        var t, i, f, r = this._core.clones().length / 2,
            o = r + this._core.items().length,
            u = this._core.maximum(!0),
            n = this._core.settings,
            e = n.center || n.autoWidth || n.dotsData ? 1 : n.dotsEach || n.items;
        if (n.slideBy !== "page" && (n.slideBy = Math.min(n.slideBy, n.items)), n.dots || n.slideBy == "page")
            for (this._pages = [], t = r, i = 0, f = 0; t < o; t++) {
                if (i >= e || i === 0) {
                    if (this._pages.push({
                            start: Math.min(u, t - r),
                            end: t - r + e - 1
                        }), Math.min(u, t - r) === u) break;
                    i = 0;
                    ++f
                }
                i += this._core.mergers(this._core.relative(t))
            }
    };
    t.prototype.draw = function() {
        var i, t = this._core.settings,
            r = this._core.items().length <= t.items,
            u = this._core.relative(this._core.current()),
            f = t.loop || t.rewind;
        this._controls.$relative.toggleClass("disabled", !t.nav || r);
        t.nav && (this._controls.$previous.toggleClass("disabled", !f && u <= this._core.minimum(!0)), this._controls.$next.toggleClass("disabled", !f && u >= this._core.maximum(!0)));
        this._controls.$absolute.toggleClass("disabled", !t.dots || r);
        t.dots && (i = this._pages.length - this._controls.$absolute.children().length, t.dotsData && i !== 0 ? this._controls.$absolute.html(this._templates.join("")) : i > 0 ? this._controls.$absolute.append(new Array(i + 1).join(this._templates[0])) : i < 0 && this._controls.$absolute.children().slice(i).remove(), this._controls.$absolute.find(".active").removeClass("active"), this._controls.$absolute.children().eq(n.inArray(this.current(), this._pages)).addClass("active"))
    };
    t.prototype.onTrigger = function(t) {
        var i = this._core.settings;
        t.page = {
            index: n.inArray(this.current(), this._pages),
            count: this._pages.length,
            size: i && (i.center || i.autoWidth || i.dotsData ? 1 : i.dotsEach || i.items)
        }
    };
    t.prototype.current = function() {
        var t = this._core.relative(this._core.current());
        return n.grep(this._pages, n.proxy(function(n) {
            return n.start <= t && n.end >= t
        }, this)).pop()
    };
    t.prototype.getPosition = function(t) {
        var i, r, u = this._core.settings;
        return u.slideBy == "page" ? (i = n.inArray(this.current(), this._pages), r = this._pages.length, t ? ++i : --i, i = this._pages[(i % r + r) % r].start) : (i = this._core.relative(this._core.current()), r = this._core.items().length, t ? i += u.slideBy : i -= u.slideBy), i
    };
    t.prototype.next = function(t) {
        n.proxy(this._overrides.to, this._core)(this.getPosition(!0), t)
    };
    t.prototype.prev = function(t) {
        n.proxy(this._overrides.to, this._core)(this.getPosition(!1), t)
    };
    t.prototype.to = function(t, i, r) {
        var u;
        !r && this._pages.length ? (u = this._pages.length, n.proxy(this._overrides.to, this._core)(this._pages[(t % u + u) % u].start, i)) : n.proxy(this._overrides.to, this._core)(t, i)
    };
    n.fn.owlCarousel.Constructor.Plugins.Navigation = t
}(window.Zepto || window.jQuery, window, document),
function(n, t, i, r) {
    "use strict";
    var u = function(i) {
        this._core = i;
        this._hashes = {};
        this.$element = this._core.$element;
        this._handlers = {
            "initialized.owl.carousel": n.proxy(function(i) {
                i.namespace && this._core.settings.startPosition === "URLHash" && n(t).trigger("hashchange.owl.navigation")
            }, this),
            "prepared.owl.carousel": n.proxy(function(t) {
                if (t.namespace) {
                    var i = n(t.content).find("[data-hash]").addBack("[data-hash]").attr("data-hash");
                    if (!i) return;
                    this._hashes[i] = t.content
                }
            }, this),
            "changed.owl.carousel": n.proxy(function(i) {
                if (i.namespace && i.property.name === "position") {
                    var u = this._core.items(this._core.relative(this._core.current())),
                        r = n.map(this._hashes, function(n, t) {
                            return n === u ? t : null
                        }).join();
                    if (!r || t.location.hash.slice(1) === r) return;
                    t.location.hash = r
                }
            }, this)
        };
        this._core.options = n.extend({}, u.Defaults, this._core.options);
        this.$element.on(this._handlers);
        n(t).on("hashchange.owl.navigation", n.proxy(function() {
            var i = t.location.hash.substring(1),
                u = this._core.$stage.children(),
                n = this._hashes[i] && u.index(this._hashes[i]);
            n !== r && n !== this._core.current() && this._core.to(this._core.relative(n), !1, !0)
        }, this))
    };
    u.Defaults = {
        URLhashListener: !1
    };
    u.prototype.destroy = function() {
        var i, r;
        n(t).off("hashchange.owl.navigation");
        for (i in this._handlers) this._core.$element.off(i, this._handlers[i]);
        for (r in Object.getOwnPropertyNames(this)) typeof this[r] != "function" && (this[r] = null)
    };
    n.fn.owlCarousel.Constructor.Plugins.Hash = u
}(window.Zepto || window.jQuery, window, document),
function(n, t, i, r) {
    var s = n("<support>").get(0).style,
        h = "Webkit Moz O ms".split(" "),
        o = {
            transition: {
                end: {
                    WebkitTransition: "webkitTransitionEnd",
                    MozTransition: "transitionend",
                    OTransition: "oTransitionEnd",
                    transition: "transitionend"
                }
            },
            animation: {
                end: {
                    WebkitAnimation: "webkitAnimationEnd",
                    MozAnimation: "animationend",
                    OAnimation: "oAnimationEnd",
                    animation: "animationend"
                }
            }
        },
        f = {
            csstransforms: function() {
                return !!u("transform")
            },
            csstransforms3d: function() {
                return !!u("perspective")
            },
            csstransitions: function() {
                return !!u("transition")
            },
            cssanimations: function() {
                return !!u("animation")
            }
        };

    function u(t, i) {
        var u = !1,
            f = t.charAt(0).toUpperCase() + t.slice(1);
        return n.each((t + " " + h.join(f + " ") + f).split(" "), function(n, t) {
            if (s[t] !== r) return u = i ? t : !0, !1
        }), u
    }

    function e(n) {
        return u(n, !0)
    }
    f.csstransitions() && (n.support.transition = new String(e("transition")), n.support.transition.end = o.transition.end[n.support.transition]);
    f.cssanimations() && (n.support.animation = new String(e("animation")), n.support.animation.end = o.animation.end[n.support.animation]);
    f.csstransforms() && (n.support.transform = new String(e("transform")), n.support.transform3d = f.csstransforms3d())
}(window.Zepto || window.jQuery, window, document);;
var isMobile = !1;
(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0, 4))) && (isMobile = !0);
var main = {
    enums: {
        popupPeriodEnum: {
            Empty: 0,
            Day: 1,
            Week: 7,
            Month: 30,
            Year: 365
        },
        loaderEnum: {
            Loader: 1,
            Success: 2,
            Error: 3,
            RemoveLoader: 4
        },
        shipmentTypeEnum: {
            Document: 0,
            Package: 2
        },
        contactEnum: {
            Complaint: 1,
            Info: 3,
            Suggestion: 4,
            Thank: 5
        }
    },
    variables: {
        language: $("#language").val(),
        addressCount: isMobile ? 10 : 50,
        excludeCyprus: !1
    },
    priceTempModel: {
        sourceInput: null,
        destinationInput: null,
        sourceCityId: null,
        sourceCountyId: null,
        destinationCityId: null,
        destinationCountyId: null
    },
    checkTcNum: function(n) {
        if (n == "00000000000") return !1;
        n = n.toString();
        for (var f = /^[0-9]{11}$/.test(n), i = 0, t = 0; t < 10; t++) i += Number(n.substr(t, 1));
        for (var e = i % 10 == n.substr(10, 1), r = 0, u = 0, t = 0; t < 10; t += 2) r += Number(n.substr(t, 1));
        for (var t = 1; t < 10; t += 2) u += Number(n.substr(t, 1));
        var o = (r * 7 - u) % 10 == n.substr(9, 0);
        return f && e && o
    },
    loader: function(n, t, i, r) {
           },
    tabOwlCarousel: function() {
        $(".tab-title-middle.owl-carousel").data("owl.carousel") !== undefined && $(".tab-title-middle.owl-carousel").data("owl.carousel").destroy();
        $(".tab-title-middle.owl-carousel").owlCarousel({
            margin: 10,
            loop: !1,
            navText: ['<img src="/assets/img/left-right/left.svg" alt="" width="9" height="15" />', '<img src="/assets/img/left-right/right.svg" alt="" width="9" height="15" />'],
            nav: !0,
            dots: !1,
            mouseDrag: !1,
            responsiveClass: !0,
            responsive: {
                0: {
                    items: 1
                },
                480: {
                    items: 2
                },
                767: {
                    items: 3
                }
            }
        })
    },
    moveView: function(n) {
        var t = n,
            i = t.offset().top,
            r = t.height(),
            u = $(window).height(),
            f = r < u ? i - (u / 2 - r / 2) : i;
        $("html, body").animate({
            scrollTop: f
        }, 700)
    },
    deleteCookie: function(n) {
        document.cookie = n + "=;expires=Thu, 01 Jan 1970 00:00:01 GMT;"
    },
    createCookie: function(n, t, i) {
        var r;
        if (i) {
            var u = new Date;
            u.setTime(u.getTime() + i * 864e5);
            r = "; expires=" + u.toGMTString()
        } else r = "";
        document.cookie = encodeURIComponent(n) + "=" + encodeURIComponent(t) + r + "; path=/"
    },
    readCookie: function(n) {
        for (var r = encodeURIComponent(n) + "=", u = document.cookie.split(";"), i = 0; i < u.length; i++) {
            for (var t = u[i]; t.charAt(0) === " ";) t = t.substring(1, t.length);
            if (t.indexOf(r) === 0) return decodeURIComponent(t.substring(r.length, t.length))
        }
        return null
    },
    getQueryString: function(n) {
        var i = new RegExp("[\\?&]" + n + "=([^&#]*)"),
            t = i.exec(location.search);
        return t === null ? "" : decodeURIComponent(t[1].replace(/\+/g, " "))
    },
    getPathQueryString: function(n) {
        var t = window.location.pathname.split("/");
        return t[n]
    },
    addLoader: function() {
        $("#spinner").css("display", "block");
        $("body").delay(350).css({
            overflow: "visible"
        })
    },
    removeLoader: function() {
        $("#spinner").css("display", "none");
        $("body").delay(350).css({
            overflow: "visible"
        })
    },
    checkCookiePolicyShowHide: function() {
        var n = main.readCookie("cookiePolicyYurticiKargo");
        n != null && n == "closed" ? $(".cookie-policy-wrapper").hide() : $(".cookie-policy-wrapper").show()
    },
    packageTabOwlCarousel: function() {
        $(".package-date .owl-carousel").owlCarousel({
            margin: 10,
            loop: !1,
            navText: ['<img src="/assets/img/left-right/left.svg" alt="" width="9" height="15" />', '<img src="/assets/img/left-right/right.svg" alt="" width="9" height="15" />'],
            nav: !0,
            dots: !1,
            pullDrag: !1,
            mouseDrag: !1,
            responsive: {
                0: {
                    items: 1
                },
                767: {
                    items: 2
                }
            }
        })
    },
    openPagePopups: function() {
        $(".page-popup").each(function() {
            var u = $(this).attr("data-showing-count"),
                t = 0,
                n = {
                    PopupId: $(this).attr("data-popupId"),
                    ShowingCount: 1
                };
            t = n.ShowingCount;
            var r = main.readCookie("popup_" + n.PopupId);
            if (r !== null) {
                var i = JSON.parse(r);
                i.ShowingCount++;
                t = i.ShowingCount;
                main.deleteCookie("popup_" + n.PopupId);
                main.createCookie("popup_" + n.PopupId, JSON.stringify(i), main.enums.popupPeriodEnum[$(this).attr("data-period")])
            } else main.createCookie("popup_" + n.PopupId, JSON.stringify(n), main.enums.popupPeriodEnum[$(this).attr("data-period")]);
            t <= u && (showPopup = !0, $(this).modal("show"))
        })
    },
    getGeoDistricts: function(n, t, i) {
        var r = t.split(" ").length - 1;
        t && (t.length > 4 && r == 0 || r > 0 && t.length - r > 2) ? delay(function() {
            _serviceProvider.geoDistricts.getDetail(t, main.variables.addressCount, i, main.variables.language).done(function(t) {
                t && t.ErrorMessage === undefined ? ($(n).empty(), $(t).each(function() {
                    $(n).append($("<li>", {
                        html: this.HighlightAddressText,
                        "data-cityid": this.CityId,
                        "data-countyid": this.CountyId,
                        "data-districtid": this.DistrictId,
                        "data-text": this.DistrictName + " " + this.CountyName + " " + this.CityName
                    }))
                })) : (t.ErrorMessage !== undefined && main.loader(main.enums.loaderEnum.Error, t.ErrorMessage), $(n).empty())
            }).fail(function() {
                main.loader(main.enums.loaderEnum.Error, Resource.AutoCompleteUnexpectedError[main.variables.language]);
                $(n).empty()
            })
        }, isMobile ? 500 : 300) : $(n).empty()
    },
    setSelectedSlideMenuItem: function(n) {
        var t = $("#slidemenu ul li a[href='" + n + "']");
        t.length > 0 ? (t.closest("li").addClass("active-menu"), $("#slidemenu .depth-1 .active-menu").parentsUntil(".depth-1").parent("li").first().addClass("active-menu")) : $("#slidemenu > ul > li:first-child").addClass("active-menu")
    },
    setSelectedSidebarMenuItem: function(n) {
        var t = $("#sidebar .sub-menu-wrap #sub-menu-wrap .menu-content ul li a[href='" + n + "']");
        if (t.length > 0) {
            var i = t.parents("ul");
            i.show();
            t.closest("li").addClass("selected");
            $("#sidebar .depth-1 .selected").parentsUntil(".depth-1").parent("li").addClass("active")
        }
    },
    redirectBranchArea: function() {
        window.location.href = main.variables.language == "tr" ? "/tr/online-servisler/sube-sorgula" : "/en/online-services/branch-locator"
    },
    accordionFunction: function() {
        $(".accordion").find(".accordion-toggle").click(function() {
            $(this).next().slideToggle("600");
            $(".accordion-content").not($(this).next()).slideUp("600")
        });
        $(".accordion-toggle").on("click", function() {
            var n = $(this);
            n.hasClass("active") ? n.removeClass("active") : ($(".accordion-toggle").removeClass("active"), $(this).addClass("active"))
        })
    },
    goQuickAccessLink: function() {
        var n = $("#ul-quick-access li[selected]");
        if (n) {
            var t = n.find("a").attr("href");
            t && (location.href = t)
        }
    },
    quickAccessSearch: function(n) {
        var t = document.getElementById("ul-quick-access"),
            i = n.split(" ").length - 1;
        if (n && (n.length > 4 && i == 0 || i > 0 && n.length - i > 2)) {
            var r = {
                q: n,
                type: "qa",
                lang: main.variables.language
            };
            delay(function() {
                $(".quick-access-wrap form button svg").hide();
                _serviceProvider.qac.search(r, function(n) {
                    n && ($(t).empty(), n.result == 200 && n.data && (n.data.length > 0 ? $(n.data).each(function() {
                        var u = this.Code && this.DestinationUrlType == 1 ? this.Code.split("-")[0] : null,
                            f = this.DestinationCustomPage,
                            e = this.DestinationCustomUrl,
                            o = this.DestinationUrlType,
                            h = this.DestinationWindow,
                            r = this.UrlSlugKey,
                            n = "_self";
                        switch (this.DestinationWindow) {
                            case 2:
                                n = "_blank";
                                break;
                            case 3:
                                n = "_parent";
                                break;
                            case 4:
                                n = "_top"
                        }
                        u && (r = "/" + u + "/" + r);
                        var i = r;
                        switch (o) {
                            case 2:
                                i = "http://" + e;
                                break;
                            case 3:
                                i = f;
                                break;
                            case 4:
                                i = "#"
                        }
                        var s = "<li><a target='" + n + "' href='" + i + "'>" + this.Name + "<\/a><\/li>";
                        $(t).append(s)
                    }) : $(t).empty()), $(".quick-access-wrap form button svg").show())
                })
            }, isMobile ? 500 : 300)
        } else $(t).empty()
    },
    keyDownQuickAccessField: function(n) {
        var i = n.keyCode,
            t = $("#ul-quick-access li[selected]");
        i == 40 ? t ? main.moveSelectedQuickAccessItem(t, "next") : main.moveSelectedQuickAccessItem(null, "next") : i == 38 ? t ? main.moveSelectedQuickAccessItem(t, "prev") : main.moveSelectedQuickAccessItem(null, "prev") : i == 13 && (n.preventDefault(), t && main.goQuickAccessLink())
    },
    moveSelectedQuickAccessItem: function(n, t) {
        if ($("#ul-quick-access li").removeAttr("selected"), $("#ul-quick-access li").removeClass("selected-light-gray"), n && n.length > 0) {
            var i = n[0];
            t == "next" ? ($(i).next().first().attr("selected", !0), $(i).next().first().addClass("selected-light-gray")) : ($(i).prev().first().attr("selected", !0), $(i).prev().first().addClass("selected-light-gray"))
        } else if (t == "next") {
            var r = $("#ul-quick-access li");
            r.not(".disabled").first().attr("selected", !0);
            r.not(".disabled").first().addClass("selected-light-gray")
        }
    },
    keyDownBranchSearchField: function(n) {
        var i = n.keyCode,
            t = $("#ul-geodistricts-home li[selected]");
        i == 40 ? t ? main.moveSelectedBranchSearchItem(t, "next") : main.moveSelectedBranchSearchItem(null, "next") : i == 38 ? t ? main.moveSelectedBranchSearchItem(t, "prev") : main.moveSelectedBranchSearchItem(null, "prev") : i == 13 && (n.preventDefault(), t && main.redirectRequest(t))
    },
    moveSelectedBranchSearchItem: function(n, t) {
        if ($("#ul-geodistricts-home li").removeAttr("selected"), $("#ul-geodistricts-home li").removeClass("selected-light-gray"), n && n.length > 0) {
            var i = n[0];
            t == "next" ? ($(i).next().first().attr("selected", !0), $(i).next().first().addClass("selected-light-gray")) : ($(i).prev().first().attr("selected", !0), $(i).prev().first().addClass("selected-light-gray"))
        } else if (t == "next") {
            var r = $("#ul-geodistricts-home li");
            r.first().attr("selected", !0);
            r.first().addClass("selected-light-gray")
        }
    },
    redirectRequest: function(n) {
        var t = n.attr("data-cityid"),
            i = n.attr("data-countyid"),
            r = n.attr("data-districtId"),
            u = n.attr("data-text"),
            f = {
                cityid: t,
                countyid: i,
                districtId: r,
                branch: u
            };
        if (t && i) {
            main.loader(main.enums.loaderEnum.Success, Resource.YouAreDirectedToTheBranchLocatorPage[main.variables.language]);
            $("#geodistricts-home").val(n.attr("data-text"));
            var e = JSON.stringify(f);
            main.localStorageRemoveItem("Branch-Search");
            main.localStorageSetItem("Branch-Search", e);
            main.redirectBranchArea()
        } else main.localStorageRemoveItem("Branch-Search"), main.loader(main.enums.loaderEnum.Error, Resource.PleaseSelectaValidAddress[main.variables.language])
    },
    cargoFormOne: function() {
        var n = 0;
        return $(".cargo-form-one .form-group").each(function() {
            var t = $(this).find("select,input"),
                i = $(this).find("select,input").prop("disabled");
            if (i == !1) {
                if (t.val() == "") {
                    t.closest(".form-group").addClass("error");
                    n++;
                    t.on("change", function() {
                        main.cargoFormOne()
                    });
                    t.on("keyup", function() {
                        main.cargoFormOne()
                    })
                } else t.closest(".form-group").removeClass("error");
                $("#SourceCityAndCounty").attr("data-cityid") && $("#SourceCityAndCounty").attr("data-cityid") != "0" ? $("#SourceCityAndCounty").closest(".form-group").removeClass("error") : ($("#SourceCityAndCounty").closest(".form-group").addClass("error"), n++);
                $("#DestinationCityAndCounty").attr("data-cityid") && $("#DestinationCityAndCounty").attr("data-cityid") != "0" ? $("#DestinationCityAndCounty").closest(".form-group").removeClass("error") : ($("#DestinationCityAndCounty").closest(".form-group").addClass("error"), n++)
            } else t.closest(".form-group").removeClass("error")
        }), n == 0
    },
    getShipmentTrackingCode: function() {
        var n = $(".shipment-tracking-code").val();
        n ? (main.loader(main.enums.loaderEnum.Loader, "Loading"), _serviceProvider.shipmentsTrackingSearch.getDetail(n, main.variables.language).done(function(t) {
            t && t.ErrorMessage === undefined ? (delay(function() {
                main.loader(main.enums.loaderEnum.Success, Resource.RedirectedToTheSubPage[main.variables.language])
            }, isMobile ? 500 : 300), main.redirectShipmentTrackingArea(n)) : t.ErrorMessage !== undefined ? main.loader(main.enums.loaderEnum.Error, t.ErrorMessage) : main.loader(main.enums.loaderEnum.Error, Resource.ShipmentsUnexpectedError[main.variables.language])
        }).fail(function() {
            main.loader(main.enums.loaderEnum.Error, Resource.ShipmentsUnexpectedError[main.variables.language])
        })) : main.loader(main.enums.loaderEnum.Error, Resource.PleaseEnterTheItemNumber[main.variables.language])
    },
    redirectShipmentTrackingArea: function(n) {
        window.location.href = main.variables.language == "tr" ? "/tr/online-servisler/gonderi-sorgula?code=" + n + "" : "/en/online-services/tracking?code=" + n + ""
    },
    slidesTheme: function(n, t) {
        var i = $(".owl-item:not('.cloned')").eq(t).find("li.item").hasClass("light-theme"),
            r = $(".owl-item:not('.cloned')").eq(t).find("li.item").hasClass("dark-theme");
        i ? ($(n).closest(".slider").removeClass("light-theme dark-theme"), $(n).closest(".slider").addClass("light-theme")) : r ? ($(n).closest(".slider").removeClass("light-theme dark-theme"), $(n).closest(".slider").addClass("dark-theme")) : $(n).closest(".slider").removeClass("light-theme dark-theme")
    },
    localStorageSetItem: function(n, t) {
        localStorage.setItem(n, t)
    },
    localStorageGetItem: function(n) {
        return localStorage.getItem(n)
    },
    localStorageRemoveItem: function(n) {
        localStorage.removeItem(n)
    },
    validateInput: function(n) {
        var t, i;
        if (n == !1)
            for (var u = $("[data-validate-type]"), r = 0; r < u.length; r++) t = u[r], i = main.startValidateInput(t), i ? $(t).closest(".form-group").removeClass("error") : $(t).closest(".form-group").addClass("error");
        else t = n, i = main.startValidateInput(t), i ? $(t).closest(".form-group").removeClass("error") : $(t).closest(".form-group").addClass("error")
    },
    dotdotAdd: function(n, t) {
        if (n.length > t) {
            var i = n.substr(0, t);
            return i + "..."
        }
        return n
    },
    startValidateInput: function(n) {
        var t = n,
            u = $(t).attr("data-validate-type");
        if (u) switch (u) {
            case "required":
                return main.checkEmpty(t) ? !1 : !0;
            case "phone":
                if (!main.checkEmpty(t)) {
                    var i = $(t).val();
                    return i.match("^5") && i.length == 10 || i.match("^05") && i.length == 11 ? !0 : !1
                }
                return !1;
            case "number":
                return main.checkEmpty(t) ? !1 : main.checkNumber(t);
            case "stringonly":
                return main.checkEmpty(t) ? !1 : main.checkOnlyString(t);
            case "email":
                return main.checkEmpty(t) ? !1 : main.checkIsEmail($(t));
            case "shipmenttracking":
                if (!main.checkEmpty(t)) {
                    var r = main.checkNumber(t);
                    return r != !1 && r.length === 19 || r.length === 19 ? !0 : !1
                }
                return !1;
            case "name-surname":
                return main.checkName(t) ? !1 : main.checkOnlyString(t)
        }
    },
    checkEmpty: function(n) {
        return !n || !n.value || n.value.length < 1 ? !0 : !1
    },
    checkName: function(n) {
        return !n || !n.value || n.value.length < 5 ? !0 : !1
    },
    checkNumber: function(n) {
        if (n || n.value || n.value.length > 0) {
            var t = n.value;
            return !isNaN(parseFloat(t)) && isFinite(t)
        }
        return !1
    },
    checkOnlyString: function(n) {
        var t = n.value;
        return /[^a-zA-ZğüşöçıİĞÜŞÖÇ' ']/.test(t) ? !1 : !0
    },
    checkIsEmail: function(n) {
        var t = n.val();
        return /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/.test(t)
    },
    dictionary: function(n) {
        $(".dictionary .item").removeClass("active");
        $(n).addClass("active");
        var t = $(n).find("a").data("target");
        $(".dictionary-content-wrap > div").each(function() {
            $(this).attr("id") == t && ($(".dictionary-content-wrap > div").css("display", "none"), $(this).css("display", "block"))
        })
    },
    keyDownSourceBranchSearchField: function(n) {
        var i = n.keyCode,
            t = $("#ul-geodistricts-home-source li[selected]");
        i == 40 ? t ? main.moveSelectedSourceBranchSearchItem(t, "next") : main.moveSelectedSourceBranchSearchItem(null, "next") : i == 38 ? t ? main.moveSelectedSourceBranchSearchItem(t, "prev") : main.moveSelectedSourceBranchSearchItem(null, "prev") : i === 13 && (n.preventDefault(), t && (main.selectHomeSource(t), $("#ul-geodistricts-home-source").empty()))
    },
    moveSelectedSourceBranchSearchItem: function(n, t) {
        if ($("#ul-geodistricts-home-source li").removeAttr("selected"), $("#ul-geodistricts-home-source li").removeClass("selected-light-gray"), n && n.length > 0) {
            var i = n[0];
            t == "next" ? ($(i).next().first().attr("selected", !0), $(i).next().first().addClass("selected-light-gray")) : ($(i).prev().first().attr("selected", !0), $(i).prev().first().addClass("selected-light-gray"))
        } else if (t == "next") {
            var r = $("#ul-geodistricts-home-source li");
            r.first().attr("selected", !0);
            r.first().addClass("selected-light-gray")
        }
    },
    keyDownDestinationBranchSearchField: function(n) {
        var i = n.keyCode,
            t = $("#ul-geodistricts-home-destination li[selected]");
        i == 40 ? t ? main.moveSelectedDestinationBranchSearchItem(t, "next") : main.moveSelectedDestinationBranchSearchItem(null, "next") : i == 38 ? t ? main.moveSelectedDestinationBranchSearchItem(t, "prev") : main.moveSelectedDestinationBranchSearchItem(null, "prev") : i == 13 && (n.preventDefault(), t && (main.selectHomeDestination(t), $("#ul-geodistricts-home-destination").empty()))
    },
    moveSelectedDestinationBranchSearchItem: function(n, t) {
        if ($("#ul-geodistricts-home-destination li").removeAttr("selected"), $("#ul-geodistricts-home-destination li").removeClass("selected-light-gray"), n && n.length > 0) {
            var i = n[0];
            t == "next" ? ($(i).next().first().attr("selected", !0), $(i).next().first().addClass("selected-light-gray")) : ($(i).prev().first().attr("selected", !0), $(i).prev().first().addClass("selected-light-gray"))
        } else if (t == "next") {
            var r = $("#ul-geodistricts-home-destination li");
            r.first().attr("selected", !0);
            r.first().addClass("selected-light-gray")
        }
    },
    selectHomeSource: function(n) {
        if (n && n.length > 0) {
            var t = n.attr("data-cityid"),
                i = n.attr("data-countyid");
            $("#home-source-input").val(n.attr("data-text"));
            main.priceTempModel.sourceCityId = t;
            main.priceTempModel.sourceCountyId = i;
            main.priceTempModel.sourceInput = n.attr("data-text")
        }
    },
    selectHomeDestination: function(n) {
        if (n && n.length > 0) {
            var t = n.attr("data-cityid"),
                i = n.attr("data-countyid");
            $("#home-destination-input").val(n.attr("data-text"));
            main.priceTempModel.destinationCityId = t;
            main.priceTempModel.destinationCountyId = i;
            main.priceTempModel.destinationInput = n.attr("data-text")
        }
    },
    lastVersion: function() {
        var n = 3,
            t = setInterval(function() {
                i()
            }, 1e3);

        function i() {
            n > 1 ? n-- : ($(".last-version-wrap").slideToggle("slow"), $(".quick-access-wrap input").addClass("active"), n == 1 && clearInterval(t))
        }
    },
    priceCalculateClick: function() {
        var n = JSON.stringify(main.priceTempModel);
        main.localStorageRemoveItem("Price-Calculation");
        main.localStorageSetItem("Price-Calculation", n);
        window.location.href = main.variables.language == "tr" ? "tr/online-servisler/fiyat-hesapla" : "en/online-services/price-calculation"
    },
    addButtonLoader: function(n, t) {
        t == !0 ? $(n).addClass("input-loading").attr("disabled", "disabled") : $(n).addClass("spinner-wrap").attr("disabled", "disabled").append("<i class='spinner'><\/i>")
    },
    deleteButtonLoader: function(n, t) {
        t == !0 ? $(n).removeClass("input-loading").removeAttr("disabled") : $(n).removeClass("spinner-wrap").removeAttr("disabled").find(".spinner").remove()
    },
    InputIsEmptyControl: function() {
        $(".form-group input,select,textarea").each(function() {
            $(this).closest(".form-group").removeClass("is-empty");
            var n = $(this).val();
            (n == "" || n == null) && $(this).closest(".form-group").addClass("is-empty")
        })
    },
    isMobile: isMobile
};
$(".last-version-wrap .close").click(function() {
    $(this).closest(".last-version-wrap").slideToggle("slow");
    $(".quick-access-wrap input").removeClass("active")
});
$(function() {
    if ($("input[type=number]")) $("body").on("focus", "input[type=number]", function() {
        $(this).on("wheel", function(n) {
            n.preventDefault()
        })
    });
    $('*[data-LangCode="' + main.variables.language + '"]').addClass("active");
    main.InputIsEmptyControl();
    var n = main.readCookie("cookieOldVersion");
    if (n == null && n != "closed" && $(".last-version-wrap").length > 0 && main.lastVersion(), $('a[href="/#"]').click(function(n) {
            n.preventDefault()
        }), $("[data-href]").click(function() {
            var n = $(this).attr("data-href"),
                t = $(n).hasClass("active-list");
            t || ($(".all-radius.item.active").removeClass("active"), $(this).closest("li.all-radius.item").addClass("active"), $(".module-type-listing.active-list").removeClass("active-list"), $(n).addClass("active-list"))
        }), $(".slides")) {
        $(".slides").owlCarousel({
            items: 1,
            autoHeight: !0,
            animateOut: "fadeOut",
            loop: !0,
            autoplay: !0,
            mouseDrag: !0
        });
        $(".slides").on("changed.owl.carousel", function() {
            var n = $(".slides").find(".owl-dots .owl-dot.active").index();
            main.slidesTheme(this, n)
        })
    }
    main.slidesTheme($(".slides"), 0);
    $(".tab-title-wrap .owl-carousel").owlCarousel({
        margin: 10,
        loop: !1,
        autoWidth: !0,
        nav: !0,
        navText: ['<img src="/assets/img/left-right/left.svg" alt="" width="9" height="15" />', '<img src="/assets/img/left-right/right.svg" alt="" width="9" height="15" />'],
        dots: !1,
        mouseDrag: !1,
        responsive: {
            0: {
                items: 1
            },
            480: {
                items: 2
            }
        }
    });
    $(".module .owl-carousel:has(img)").owlCarousel({
        autoWidth: !0,
        items: 1,
        mouseDrag: !1,
        navText: ['<img src="/assets/img/left-right/left.svg" alt="" width="12" height="20" />', '<img src="/assets/img/left-right/right.svg" alt="" width="12" height="20" />'],
        responsive: {
            0: {
                dots: !0,
                nav: !1,
                loop: !0
            },
            480: {
                dots: !1,
                nav: !0,
                loop: !1
            }
        }
    });
    $(".module-slider .tab-content h4").each(function() {
        var n = $(this).text();
        $(this).text(main.dotdotAdd(n, 35))
    });
    $(".dictionary-title .owl-carousel").owlCarousel({
        loop: !1,
        items: 20,
        mouseDrag: !1,
        navText: ['<img src="/assets/img/left-right/left.svg" alt="" width="9" height="15" />', '<img src="/assets/img/left-right/right.svg" alt="" width="9" height="15" />'],
        nav: !0,
        dots: !1,
        responsive: {
            0: {
                items: 3
            },
            480: {
                items: 4
            },
            768: {
                items: 6
            },
            1024: {
                items: 20
            }
        }
    });
    main.packageTabOwlCarousel();
    $("#slide-nav").on("click", ".navbar-toggle", function() {
        var n = $(this).hasClass("slide-active");
        $(this).toggleClass("slide-active", !n);
        $("#slidemenu").toggleClass("slide-active");
        $(".navbar, body, .navbar-header").toggleClass("slide-active");
        $(".slide-active .overlay").on("click", function() {
            $(".navbar-toggle,body,.navbar,.navbar-header,#slidemenu").removeClass("slide-active")
        })
    });
    $(window).on("resize", _.debounce(function() {
        $(window).width() > 767 && $(".navbar-toggle").is(":hidden") && $("#slidemenu, body, .navbar, .navbar-header").removeClass("slide-active")
    }, 200));
    $(".member-info").on("click", function() {
        $(".header-bottom,body").toggleClass("active")
    });
    $(".tab-menu-icon-wrap").on("click", function() {
        $("body").toggleClass("active-tab");
        $(".active-tab .overlay").on("click", function() {
            $("body").removeClass("active-tab")
        })
    });
    $("html").click(function(n) {
        $(n.target).is(".header-bottom") || $(n.target).is(".header-bottom *") || $(".header-bottom,body").removeClass("active");
        $(n.target).is(".navbar-nav li *") || ($(".navbar-nav .title").removeClass("open"), $(".navbar-nav .menu-toggle").removeClass("rotate"), $(".navbar-nav .depth-2").removeClass("active").slideUp(400));
        $(n.target).is(".form-group") || $(n.target).is(".form-group *") || $(".form-group").removeClass("is-focused")
    });
    $("#slidemenu .menu-toggle").click(function(n) {
        n.preventDefault();
        var t = $(this);
        t.closest("li").hasClass("active") ? ($(this).closest("li").removeClass("active"), $(this).closest("ul").find("li").removeClass("active")) : ($(this).closest("ul").find("li").removeClass("active"), t.closest("li").addClass("active"))
    });
    $("#sidebar .menu-toggle").click(function() {
        return !1
    });
    $("#sidebar .title,#sidebar .menu-toggle,#slidemenu a").hover(function() {
        $(this).closest("li").addClass("hover")
    }, function() {
        $(this).closest("li").removeClass("hover")
    });
    $("#selectpicker").hover(function() {
        $(this).addClass("active")
    }, function() {
        $(this).removeClass("active")
    });
    $(".form-group").click(function() {
        var n = $(this);
        n.hasClass("is-focused") || ($(".form-group").removeClass("is-focused"), $(this).addClass("is-focused"))
    });
    $(".form-group input").keyup(function() {
        $(this).closest(".form-group").removeClass("is-empty");
        var n = $(this).val();
        n == "" && $(this).closest(".form-group").addClass("is-empty")
    });
    $(".form-group select").on("change", function() {
        $(this).closest(".form-group").removeClass("is-empty");
        var n = $(this).val();
        n == "" && $(this).closest(".form-group").addClass("is-empty")
    });
    if ($(".form-group textarea").keyup(function() {
            $(this).closest(".form-group").removeClass("is-empty");
            var n = $(this).val();
            n == "" ? $(this).closest(".form-group").addClass("is-empty error") : $(this).closest(".form-group").removeClass("is-empty error")
        }), $("#sidebar").length > 0) {
        var t = $("#sidebar").offset(),
            i = 10;
        $(window).on("scroll", _.debounce(function() {
            $(window).scrollTop() > t.top ? $("#sidebar").stop().animate({
                marginTop: $(window).scrollTop() - t.top + i
            }) : $("#sidebar").stop().animate({
                marginTop: 0
            })
        }, 200));
        main.setSelectedSidebarMenuItem(window.location.pathname)
    }
    $(".package-add-module-button").on("click", function() {
        $(".package-clone-item").clone().insertBefore($(".package-add-module-button")).addClass("active").removeClass("package-clone-item").slideDown(400);
        $(".form-group").click(function() {
            var n = $(this);
            n.hasClass("is-focused") || ($(".form-group").removeClass("is-focused"), $(this).addClass("is-focused"))
        });
        $(".form-group input").keyup(function() {
            $(this).closest(".form-group").removeClass("is-empty");
            var n = $(this).val();
            n == "" ? $(this).closest(".form-group").addClass("is-empty error") : $(this).closest(".form-group").removeClass("error")
        });
        $(".form-group input").keypress(function() {
            if (isNaN(this.value + String.fromCharCode(event.keyCode))) return !1
        });
        $('[data-toggle="popover"]').popover({
            trigger: "hover",
            placement: "top"
        });
        $(".price-title").removeClass("active").css("display", "none");
        $(".price-detail").removeClass("active").css("display", "none");
        $(".complementary-products-tab").hide().closest(".container-exp").css("display", "none")
    });
    $(".package-price button").on("click", function() {
        var n = !1;
        $(".package-add-module.active input").each(function() {
            var t = $(this).val();
            t == "" ? ($(this).closest(".form-group").addClass("error"), n = !1) : ($(this).closest(".form-group").removeClass("error"), n = !0)
        });
        n && $(".price-title,.cargo-form-three,.price-detail").addClass("active").slideDown(400)
    });
    $('[data-toggle="popover"]').popover({
        trigger: "hover",
        placement: "top"
    });
    $.fn.isInViewport = function() {
        var i = $(".info-graphic-top");
        if (i.length > 0) {
            var n = $(".info-graphic-top").offset().top,
                r = n + $(".info-graphic-top").height(),
                t = $(window).scrollTop(),
                u = t + $(window).height();
            return r > t && n < u
        }
    };
    $(window).on("scroll load", _.debounce(function() {
        $(".info-graphic-top").isInViewport() ? $(".info-graphic-top").addClass("view") : $(".info-graphic-top").removeClass("view")
    }, 200));
    main.accordionFunction();
    main.setSelectedSlideMenuItem(window.location.pathname);
    $(".cargo-form-one form").on("submit", function(n) {
        n.preventDefault();
        var t = main.cargoFormOne();
        t && $(".typeChoice,.typeChoiceTitle").slideDown(400)
    });
    main.openPagePopups();
    main.checkCookiePolicyShowHide();
    $(".search-query a:first-child").addClass("active");
    $(".search-query a").on("click", function() {
        $(".search-query a").removeClass("active");
        $(this).addClass("active");
        var n = $(this).attr("href");
        $(".cargo-wrap li.title").each(function() {
            var t = $(this).find("a").attr("href");
            n == t ? ($(".cargo-wrap li").removeClass("active"), $(this).closest("li").addClass("active")) : $(this).removeClass("active")
        });
        $("body").removeClass("active-tab")
    });
    $("#loadingErrorSuccessPopup").on("hidden.bs.modal", function() {
        $(this).find("div.modal-dialog").removeClass("error")
    });
    $(".shipment-search").on("keypress keydown keyup", function() {
        $(this).val().length != 0 ? $(this).closest(".input-group").addClass("search-active") : $(this).closest(".input-group").removeClass("search-active")
    });
    var r = main.readCookie("menu_collapsed");
    r == 1 ? $("#menu-collapsed").prop("checked", !0) : $("#menu-collapsed").prop("checked", !1);
    $(".owl-carousel .owl-dot").hover(function() {
        $(this).click()
    }, function() {})
});
$(window).on("load", function() {
    $("#spinner").css("display", "none");
    $("body").css({
        overflow: "visible"
    })
});
var delay = function() {
    var n = 0;
    return function(t, i) {
        clearTimeout(n);
        n = setTimeout(t, i)
    }
}();
$(".remove-cookie-policy").click(function() {
    main.createCookie("cookiePolicyYurticiKargo", "closed", 365);
    $(".cookie-policy-wrapper").hide()
});
$("#geodistricts-home").on("input", function() {
    main.getGeoDistricts($("#ul-geodistricts-home"), $(this).val(), main.variables.excludeCyprus);
    $(this).val().length < 3 && $("#ul-geodistricts-home").empty()
});
$("body").on("click", "#ul-geodistricts-home li", function() {
    main.redirectRequest($(this))
});
$("input[name='q']").on("keyup", function(n) {
    var t = n.keyCode;
    t != 38 && t != 40 && main.quickAccessSearch(this.value)
});
$(".quick-access-wrap input").on("focus", function() {
    $(this).closest(".quick-access-wrap").find(".quick-access-result-area").show();
    document.addEventListener("keydown", main.keyDownQuickAccessField, !1)
});
$(".quick-access-wrap input").on("focusout", function() {
    var n = $(this);
    setTimeout(function() {
        n.closest(".quick-access-wrap").find(".quick-access-result-area").slideUp(400)
    }, 200);
    document.removeEventListener("keydown", main.keyDownQuickAccessField, !1);
    $("#ul-quick-access li").removeAttr("selected")
});
$("#geodistricts-home").on("focus", function() {
    $(this).closest("div#search").find(".searchContent .dropdown").show();
    document.addEventListener("keydown", main.keyDownBranchSearchField, !1)
});
$("#geodistricts-home").on("focusout", function() {
    var n = $(this);
    setTimeout(function() {
        n.closest("div#search").find(".searchContent .dropdown").slideUp(400)
    }, 200);
    document.removeEventListener("keydown", main.keyDownBranchSearchField, !1);
    $("#ul-geodistricts-home li").removeAttr("selected")
});
$(".quick-access-wrap button").click(function() {
    main.goQuickAccessLink()
});
$("#ul-quick-access li").hover(function() {
    $("#ul-quick-access li").removeAttr("selected");
    $("#ul-quick-access li").removeClass("selected-light-gray");
    $(this).hasClass("disabled") || ($(this).attr("selected", !0), $(this).addClass("selected-light-gray"))
}, function() {
    $("#ul-quick-access li").removeAttr("selected");
    $("#ul-quick-access li").removeClass("selected-light-gray")
});
$("#ul-geodistricts-home li").hover(function() {
    $("#ul-geodistricts-home li").removeAttr("selected");
    $("#ul-geodistricts-home li").removeClass("selected-light-gray");
    $(this).attr("selected", !0);
    $(this).addClass("selected-light-gray")
}, function() {
    $("#ul-geodistricts-home li").removeAttr("selected");
    $("#ul-geodistricts-home li").removeClass("selected-light-gray")
});
$("body").on("click", ".amountPlus", function() {
    var t = $(this).closest("div.amount").find('input[type="number"]'),
        n = parseInt(t.val()),
        i = t.attr("max");
    Number.isNaN(n) && (n = 0);
    n < i && t.val(n + 1)
});
$("body").on("click", ".amountMinus", function() {
    var t = $(this).closest("div.amount").find('input[type="number"]'),
        n = parseInt(t.val());
    Number.isNaN(n) && (n = 1);
    n > 0 && t.val(n - 1)
});
$("#amount").keypress(function() {
    return isNaN(this.value + String.fromCharCode(event.keyCode)) ? !1 : !0
});
$(".shipment-tracking-code").keyup(function(n) {
    this.value = this.value.replace(/[^0-9\.]/g, "");
    $(this).val().length === 19 || $(this).val().length === 19 ? ($(this).closest("div.form-group").removeClass("error"), $(this).closest(".form-group").find(".control-label").text(Resource.EnterYourShippingCode[main.variables.language])) : ($(this).closest("div.form-group").addClass("error"), $(this).closest(".form-group").find(".control-label").text(Resource.ShippingCodeIsInvalid[main.variables.language]));
    n.keyCode === 13 && (this.value.length === 12 || this.value.length === 16 ? (main.getShipmentTrackingCode(), $(this).closest("div.form-group").removeClass("error")) : $(this).closest("div.form-group").addClass("error"))
});
$(".check-tracking-code").click(function() {
    var n = $(".shipment-tracking-code").val();
    n.length === 12 || n.length === 16 ? (main.getShipmentTrackingCode(), $(this).closest("div.input-group").removeClass("error")) : $(this).closest("div.input-group").addClass("error")
});
$("input[data-validate-type]").on("keydown keyup keypress", function() {
    main.validateInput(this)
});
$("#home-source-input").keyup(function(n) {
    (n.which != 13 && (main.priceTempModel.sourceCityId = 0, main.priceTempModel.sourceCountyId = 0, main.priceTempModel.sourceInput = ""), n.keyCode >= 37 && n.keyCode <= 40 || n.keyCode == 13) || (main.getGeoDistricts($("#ul-geodistricts-home-source"), $(this).val(), !0), $(this).val().length < 3 && $("#ul-geodistricts-home-source").empty())
});
$("#home-destination-input").keyup(function(n) {
    (n.which != 13 && (main.priceTempModel.destinationCityId = 0, main.priceTempModel.destinationCountyId = 0, main.priceTempModel.destinationInput = ""), n.keyCode >= 37 && n.keyCode <= 40 || n.keyCode == 13) || (main.getGeoDistricts($("#ul-geodistricts-home-destination"), $(this).val(), !0), $(this).val().length < 3 && $("#ul-geodistricts-home-destination").empty())
});
$("#home-source-input").on("focus", function() {
    $(this).closest("div.search-content").find(".searchContent .dropdown").show();
    document.addEventListener("keydown", main.keyDownSourceBranchSearchField, !1)
});
$("#home-source-input").on("focusout", function() {
    var n = $(this);
    setTimeout(function() {
        n.closest("div.search-content").find(".searchContent .dropdown").slideUp(400)
    }, 200);
    document.removeEventListener("keydown", main.keyDownSourceBranchSearchField, !1);
    $("#ul-geodistricts-home-source li").removeAttr("selected")
});
$("#home-destination-input").on("focus", function() {
    $(this).closest("div.search-content").find(".searchContent .dropdown").show();
    document.addEventListener("keydown", main.keyDownDestinationBranchSearchField, !1)
});
$("#home-destination-input").on("focusout", function() {
    var n = $(this);
    setTimeout(function() {
        n.closest("div.search-content").find(".searchContent .dropdown").slideUp(400)
    }, 200);
    document.removeEventListener("keydown", main.keyDownDestinationBranchSearchField, !1);
    $("#ul-geodistricts-home-destination li").removeAttr("selected")
});
$("body").on("click", "#ul-geodistricts-home-source li", function() {
    main.selectHomeSource($(this));
    $("#ul-geodistricts-home-source").empty()
});
$("body").on("click", "#ul-geodistricts-home-destination li", function() {
    main.selectHomeDestination($(this));
    $("#ul-geodistricts-home-destination").empty()
});
$("body").on("click", "#home-price-calculation-button", function() {
    var n = JSON.stringify(main.priceTempModel);
    main.localStorageRemoveItem("Price-Calculation");
    main.localStorageSetItem("Price-Calculation", n);
    window.location.href = main.variables.language == "tr" ? "tr/online-servisler/fiyat-hesapla" : "en/online-services/price-calculation"
});
$("#menu-collapsed").change(function() {
    var n = $(this).prop("checked");
    n ? main.createCookie("menu_collapsed", 1, 180) : main.createCookie("menu_collapsed", 0, 180)
});
$(".modal-picture").click(function(n) {
    n.preventDefault();
    var t = $(this).attr("href");
    t && $(".modal-picture-window").modal("show")
});
$(".dictionary .item").click(function() {
    main.dictionary($(this))
});
$("body").bind("paste", "input[type=number]", function(n) {
    if (n.target != null && (n.target.type == "number" || n.target.id == "input-tax-number")) {
        if (n.originalEvent.clipboardData && n.originalEvent.clipboardData.getData) {
            var t = n.originalEvent.clipboardData.getData("text");
            (!$.isNumeric(t) || t < 0) && n.preventDefault()
        }
        delay(function() {
            main.InputIsEmptyControl()
        }, 0)
    }
});
$("body").on("keyup keydown", "input[type=number]", function(n) {
    this.value = this.value.replace(/[^0-9\.]/g, "");
    $.inArray(n.which, [48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 8, 46, 17, 86, 88, 67, 9, 37, 39]) < 0 && n.preventDefault()
});
$("#close-old-version").click(function() {
    main.createCookie("cookieOldVersion", "closed", 365)
});
$("input[type=email]").on("focusout", function() {
    var n = main.checkIsEmail($(this));
    n ? $(this).closest("div").removeClass("error") : $(this).closest("div").addClass("error")
});
$("body").on("change keydown keyup keypress", "input,select,textarea", function() {
    main.InputIsEmptyControl()
});
$("body").on("click", "#ul-source-city-county li, #ul-destination-city-county li", function() {
    var t = $(this),
        n = t[0].parentElement.id == "ul-source-city-county" ? ".cargo-form-one #DestinationCityAndCounty" : ".cargo-form-one #SourceCityAndCounty";
    $(n).val() || parseInt($(n).attr("data-cityid")) > 0 || parseInt($(n).attr("data-countyid")) > 0 || $(".cargo-form-one #DestinationCityAndCounty").prop("disabled") ? $(".cargo-form-one #btn-continue").removeClass("disabled") : $(".cargo-form-one #btn-continue").addClass("disabled")
});;
var Resource = {
    Warning: {
        en: "Warning",
        tr: "Uyarı"
    },
    Success: {
        en: "Success",
        tr: "Başarılı"
    },
    Accepted: {
        en: "Accepted",
        tr: "Kabul Edildi"
    },
    Access: {
        en: "Access",
        tr: "Erişim"
    },
    Time: {
        en: "Time",
        tr: "Zaman"
    },
    Error: {
        en: "Error",
        tr: "Hata"
    },
    SometingWentWrong: {
        en: "Someting went wrong",
        tr: "Birşeyler ters gitti"
    },
    PleaseEnterTheItemNumber: {
        en: "Please enter the shipment number.",
        tr: "Lütfen gönderi numarası giriniz."
    },
    ThereWasAnErrorRetrievingTheInformation: {
        en: "There was an error retrieving the information",
        tr: "Bilgileri çekerken hata oluştu."
    },
    DocumentDate: {
        en: "Document Date",
        tr: "Doküman Tarihi"
    },
    ReleaseDate: {
        en: "Release Date",
        tr: "Çıkış Tarihi"
    },
    Open: {
        en: "Open",
        tr: "Açık"
    },
    Closed: {
        en: "Closed",
        tr: "Kapalı"
    },
    Address: {
        en: "Address",
        tr: "Adres"
    },
    Phone: {
        en: "Phone",
        tr: "Telefon"
    },
    Status: {
        en: "Status",
        tr: "Durum"
    },
    NoRecordsFound: {
        en: "No Records Found",
        tr: "Kayıt Bulunamadı"
    },
    RedirectedToTheSubPage: {
        en: "You are redirected to the sub-page related to the shipment",
        tr: "Gönderi ile ilgili alt sayfaya yönlendiriliyorsunuz"
    },
    WeHaveReceivedYourNotification: {
        en: "We have received your notification",
        tr: "Bildiriminiz bize ulaşmıştır"
    },
    ThereWasAnErrorSendingYourNotification: {
        en: "There was an error sending your notification",
        tr: "Bildiriminiz gönderilirken bir hata oluştu"
    },
    NoBranchesNearTheSelectedAdreseWereFound: {
        en: "No branches near the selected adrese were found",
        tr: "Seçilen adrese yakın şube bulunamadı"
    },
    ThereWasAnErrorFillingTheCountries: {
        en: "There was an error filling the countries",
        tr: "Ülkeler doldurulurken bir hata oluştu"
    },
    TheDeliveryTimeCouldNotBeCalculated: {
        en: "The delivery time could not be calculated. Please try again",
        tr: "Teslimat süresi hesaplanamadı.Lütfen tekrar deneyiniz."
    },
    TaxNumberNotFound: {
        en: "Tax number not found",
        tr: "Vergi numarası bulunamadı."
    },
    YourRequestHasBeenForwardedToYourEmailAddress: {
        en: "Your request has been forwarded to your e-mail address",
        tr: "Talebiniz e-posta adresinize iletilmiştir"
    },
    YourRequestHasBeenForwardedToYourPhone: {
        en: "Your request has been forwarded to your e-mail address or phone number as SMS",
        tr: "Talebiniz e-posta adresinize veya telefon numaranıza SMS olarak iletilmiştir"
    },
    ThereWasAnUnexpectedErrorWhileSubmittingYourRequest: {
        en: "There was an unexpected error while submitting your request",
        tr: "Talebiniz gönderilirken beklenmedik bir hata oluştu"
    },
    DeliveryServices: {
        en: "Delivery Services",
        tr: "Teslim Hizmetleri"
    },
    OtherServices: {
        en: "Other Services",
        tr: "Diğer Hizmetler"
    },
    PurchaseServices: {
        en: "Purchase Services",
        tr: "Alım Hizmetleri"
    },
    SmsServices: {
        en: "Sms Services",
        tr: "Kısa Mesaj Hizmetleri"
    },
    PriceCouldNotBeCalculated: {
        en: "Price could not be calculated. Please try again",
        tr: "Fiyat hesaplanamadı. Lütfen tekrar deneyiniz"
    },
    Price: {
        en: "Price",
        tr: "Ücret"
    },
    LocalPrice: {
        en: "Local Price",
        tr: "Lokal Ücret"
    },
    ThereWasAnErrorSendingSms: {
        en: "There was an error sending sms",
        tr: "Sms gönderirken bir hata oluştu"
    },
    SmsVerificationFailed: {
        en: "Sms verification failed",
        tr: "Sms doğrulaması yapılamadı"
    },
    AddNewAddress: {
        en: "ADD NEW ADDRESS",
        tr: "YENİ ADRES EKLE"
    },
    ThereWasAnErrorDuringAddressSearch: {
        en: "There was an error during address search",
        tr: "Adres sorgulama işlemi sırasında hata oluştu"
    },
    TaxNumberChecking: {
        en: "Tax number checking",
        tr: "Vergi numarası kontrol ediliyor"
    },
    TcNumberChecking: {
        en: "TC number checking",
        tr: "T.C numarası kontrol ediliyor"
    },
    SmsVerificationHasExpired: {
        en: "Your sms verification has expired. Please try again",
        tr: "Sms doğrulama süreniz dolmuştur. Lütfen tekrar deneyiniz"
    },
    MaximumWeight: {
        en: "Maximum weight",
        tr: "En fazla ağırlık"
    },
    LongestSide: {
        en: "Longest side",
        tr: "En uzun kenar"
    },
    Maximum: {
        en: "Maximum",
        tr: "En Fazla"
    },
    PackageDimension: {
        en: "Package Dimension",
        tr: "Kutu Ölçüsü"
    },
    UnableToRetrievePackageInformation: {
        en: "Unable to retrieve package information",
        tr: "Paket bilgisi çekilemedi"
    },
    CourierRequestNotReceived: {
        en: "Courier request not received",
        tr: "Kurye talebi alınamadı"
    },
    PleaseSelect: {
        en: "Please select",
        tr: "Lütfen seçim yapınız"
    },
    RequesterTaxNumber: {
        en: "Requester Tax Number",
        tr: "Talep İleten Vergi Numarası"
    },
    RequesterTck: {
        en: "Requester TCKN",
        tr: "Talep İleten TCKN"
    },
    PleaseSelectaValidAddress: {
        en: "Please select a valid address",
        tr: "Lütfen geçerli bir adres seçiniz"
    },
    YouAreDirectedToTheBranchLocatorPage: {
        en: "You are directed to the Branch Locator page",
        tr: "Şube Sorgulama sayfasına yönlendiriliyorsunuz"
    },
    ThereWasAnErrorCallingCargoMovements: {
        en: "There was an error calling cargo movements",
        tr: "Kargo Hareketleri çağrılırken bir hata oluştu"
    },
    Holiday: {
        en: "No service on holidays.",
        tr: "Tatil günü alım yapılamaz."
    },
    ObtainingSpecificDays: {
        en: "Service available to the selected address only on limited days.",
        tr: "Bu adrese sadece belirli günlerde hizmet verilebilmektedir."
    },
    ReceptionTimeExceeded: {
        en: "No service available on selected date. Current time is past request hours.",
        tr: "Seçmiş olduğunuz günde alım işlemi yapamıyoruz. Alım saati geçmiştir."
    },
    BadWeatherConditions: {
        en: "No service available to the selected address due to weather conditions.",
        tr: "Bu adrese kötü hava koşulları sebebiyle hizmet verilememektedir."
    },
    SocialEvents: {
        en: "No service available to the selected address due to social conditions.",
        tr: "Bu adrese toplumsal olaylar nedeniyle hizmet verilememektedir."
    },
    BranchOutOfService: {
        en: "Unit for the address is out of service at the moment.",
        tr: "Bu adrese hizmet veren birim hizmete kapalıdır."
    },
    PleaseSelectADate: {
        en: "Please select a date",
        tr: "Lütfen tarih seçiniz"
    },
    PleaseEnterValidInformation: {
        en: "Please enter valid information",
        tr: "Lütfen geçerli bilgiler giriniz"
    },
    NoRecordFoundPleaseTryWithAdifferentTrackingCode: {
        en: "No record found. Please try with a different tracking code.",
        tr: "Sorguladığınız gönderi koduyla bir kargo bulunamadı. Lütfen gönderi kodunu kontrol ederek tekrar deneyiniz."
    },
    PickUpIsAllowedForTheSelectedDay: {
        en: "Pick up is allowed for the selected day.",
        tr: "Seçmiş olduğunuz günde alım işlemi gerçekleştirebiliyoruz."
    },
    BranchDetail: {
        en: "Branch Detail",
        tr: "Şube Detay"
    },
    TimeToDeliverByShipment: {
        en: "From branch",
        tr: "Şubeye teslim ederek gönderi yapma saatleri"
    },
    PickupRequestTimes: {
        en: "Pickup",
        tr: "Adrese kurye talep etme saatleri"
    },
    DeliveryDate: {
        en: "Delivery Date",
        tr: "Teslim Tarihi"
    },
    DeliveryTo: {
        en: "Delivery To",
        tr: "Teslim Alan"
    },
    Receiver: {
        en: "Receiver",
        tr: "Alıcı"
    },
    EstimatedDeliveryDate: {
        en: "Estimated Delivery Date",
        tr: "Tahmini Teslim"
    },
    Other: {
        en: "Other",
        tr: "Diğer"
    },
    NameSurname: {
        en: "Name Surname",
        tr: "Adı Soyadı"
    },
    CompanyTitle: {
        en: "Company Title",
        tr: "Şirket Ünvanı"
    },
    BackToHome: {
        en: "Back to Home",
        tr: "Anasayfaya Dön"
    },
    ShippingCodeIsInvalid: {
        en: "Shipping code is invalid",
        tr: "İzləmə kodu düzgün deyil"
    },
    EnterYourShippingCode: {
        en: "Enter your shipping code",
        tr: "İzləmə kodunuz"
    },
    TheRecordOfTheEnteredInformationCouldNotBeFound: {
        en: "The record of the entered information could not be found",
        tr: "Girilen bilgilere ait kayıt bulunamadı"
    },
    ShipmentsUnexpectedError: {
        en: "Unexpected error occured. Please try again later.",
        tr: "Sorgulama işleminde beklenmedik hata oluştu. Lütfen daha sonra tekrar deneyiniz."
    },
    AutoCompleteUnexpectedError: {
        en: "Unexpected error occured. Please try again later",
        tr: "Arama işleminde beklenmedik hata oluştu. Lütfen daha sonra tekrar deneyiniz."
    },
    BranchesByCityTownUnexpectedError: {
        en: "Unexpected error occured. Please try again later",
        tr: "Sorgulama işleminde beklenmedik hata oluştu. Lütfen daha sonra tekrar deneyiniz."
    },
    CupboardUnexpectedError: {
        en: "Unexpected error occured. Please try again later",
        tr: "Sorgulama işleminde beklenmedik hata oluştu. Lütfen daha sonra tekrar deneyiniz."
    },
    BranchDetailUnexpectedError: {
        en: "Unexpected error occured. Please try again later",
        tr: "Seçilen şubenin bilgilerine ulaşırken beklenmedik hata oluştu. Lütfen daha sonra tekrar deneyiniz."
    },
    BranchProductsUnexpectedError: {
        en: "Unexpected error occured. Please try again later",
        tr: "Seçilen şubenin sunduğu hizmet bilgilerine ulaşırken beklenmedik hata oluştu. Lütfen daha sonra tekrar deneyiniz."
    },
    CalculatePriceUnexpectedError: {
        en: "Unexpected error occured. Please try again later",
        tr: "Fiyat hesaplama işleminde beklenmedik hata oluştu. Lütfen daha sonra tekrar deneyiniz."
    },
    GenericUnexpectedError: {
        en: "Unexpected error occured. Please try again later",
        tr: "Beklenmedik hata oluştu. Lütfen daha sonra tekrar denyiniz."
    },
    SendValidationSmsUnexpectedError: {
        en: "Unexpected error occured. Please try again later",
        tr: "SMS gönderme işleminde beklenmedik hata alındı. Lütfen daha sonra tekrar deneyiniz."
    },
    GsmNoValidateUnexpectedError: {
        en: "Unexpected error occured. Please try again later",
        tr: "SMS doğrulama işleminde beklenmedik hata alındı. Lütfen daha sonra tekrar deneyiniz."
    },
    TaxPayerDetailUnexpectedError: {
        en: "Unexpected error occured. Please try again later",
        tr: "Vergi mükellfi sorgularken beklenmedik hata alındı. Lütfen daha sonra tekrar deneyiniz."
    },
    VerifyAddressUnexpectedError: {
        en: "Unexpected error occured. Please try again later",
        tr: "Adres doğrulaması yaparken beklenmedik hata oluştu. Lütfen daha sonra tekrar deneyiniz."
    },
    PickupDaysByWorkAreaUnexpectedError: {
        en: "Unexpected error occured. Please try again later",
        tr: "Adresiniz için alım günleri bulunurken beklenmedik hata oluştu. Lütfen daha sonra tekrar deneyiniz."
    },
    EstimatedDeliveryDateUnexpectedError: {
        en: "Unexpected error occured. Please try again later",
        tr: "Teslimat süresi hesaplanırken beklenmedik hata oluştu. Lütffen daha sonra tekrar deneyiniz."
    },
    EinvoiceReportUnexpectedError: {
        en: "Unexpected error occured. Please try again later",
        tr: "E-Fatura rapor talebi oluşturuluken beklenmedik hata oluştu. Lütfen daha sonra tekrar deneyiniz."
    },
    EArchiveinvoiceReportUnexpectedError: {
        en: "Unexpected error occured. Please try again later",
        tr: "E-Arşiv Fatura rapor talebi oluşturuluken beklenmedik hata oluştu. Lütfen daha sonra tekrar deneyiniz."
    },
    PickupOrderCreateUnexpectedError: {
        en: "Unexpected error occured. Please try again later",
        tr: "Adres alım talebiniz oluşturulurken beklenmedik hata oluştu. Lütfen daha sonra tekrar deneyiniz."
    },
    PaidByReceiver: {
        en: "Paid By Receiver",
        tr: "Alıcı Ödemeli"
    },
    PaidBySender: {
        en: "Paid By Sender",
        tr: "Gönderici Ödemeli"
    },
    HsCode: {
        en: "HS Code",
        tr: "HS Kodu"
    },
    HsCodeDescription: {
        en: "Description (Turkish)",
        tr: "Açıklama"
    },
    HsCodeDescriptionEng: {
        en: "Description",
        tr: "Açıklama (İngilizce)"
    }
};;
(function() {
    function ct(n, t) {
        if (n !== t) {
            var i = n === n,
                r = t === t;
            if (n > t || !i || typeof n == "undefined" && r) return 1;
            if (n < t || !r || typeof t == "undefined" && i) return -1
        }
        return 0
    }

    function v(n, t, i) {
        if (t !== t) return oi(n, i);
        i -= 1;
        for (var r = n.length; ++i < r;)
            if (n[i] === t) return i;
        return -1
    }

    function lt(n) {
        return typeof n == "function" || !1
    }

    function r(n) {
        return typeof n == "string" ? n : null == n ? "" : n + ""
    }

    function gi(n) {
        return n.charCodeAt(0)
    }

    function fi(n, t) {
        for (var i = -1, r = n.length; ++i < r && -1 < t.indexOf(n.charAt(i)););
        return i
    }

    function ei(n, t) {
        for (var i = n.length; i-- && -1 < t.indexOf(n.charAt(i)););
        return i
    }

    function nr(n, t) {
        return ct(n.a, t.a) || n.b - t.b
    }

    function tr(n) {
        return ou[n]
    }

    function ir(n) {
        return su[n]
    }

    function rr(n) {
        return "\\" + cu[n]
    }

    function oi(n, t, i) {
        var u = n.length;
        for (t += i ? 0 : -1; i ? t-- : ++t < u;) {
            var r = n[t];
            if (r !== r) return t
        }
        return -1
    }

    function u(n) {
        return n && typeof n == "object" || !1
    }

    function si(n) {
        return 160 >= n && 9 <= n && 13 >= n || 32 == n || 160 == n || 5760 == n || 6158 == n || 8192 <= n && (8202 >= n || 8232 == n || 8233 == n || 8239 == n || 8287 == n || 12288 == n || 65279 == n)
    }

    function l(n, t) {
        for (var i = -1, u = n.length, f = -1, r = []; ++i < u;) n[i] === t && (n[i] = pt, r[++f] = i);
        return r
    }

    function hi(n) {
        for (var t = -1, i = n.length; ++t < i && si(n.charCodeAt(t)););
        return t
    }

    function ci(n) {
        for (var t = n.length; t-- && si(n.charCodeAt(t)););
        return t
    }

    function ur(n) {
        return hu[n]
    }

    function at(ut) {
        function ft(n) {
            if (u(n) && !(et(n) || n instanceof su)) {
                if (n instanceof of ) return n;
                if (lu.call(n, "__chain__") && lu.call(n, "__wrapped__")) return nl(n)
            }
            return new of (n)
        }

        function we() {}

        function of (n, t, i) {
            this.__wrapped__ = n;
            this.__actions__ = i || [];
            this.__chain__ = !!t
        }

        function su(n) {
            this.__wrapped__ = n;
            this.__actions__ = null;
            this.__dir__ = 1;
            this.__filtered__ = !1;
            this.__iteratees__ = null;
            this.__takeCount__ = lh;
            this.__views__ = null
        }

        function oe() {
            this.__data__ = {}
        }

        function wh(n) {
            var t = n ? n.length : 0;
            for (this.data = {
                    hash: vo(null),
                    set: new co
                }; t--;) this.push(n[t])
        }

        function be(n, t) {
            var i = n.data;
            return (typeof t == "string" || au(t) ? i.set.has(t) : i.hash[t]) ? 0 : -1
        }

        function wu(n, t) {
            var i = -1,
                r = n.length;
            for (t || (t = ou(r)); ++i < r;) t[i] = n[i];
            return t
        }

        function rf(n, t) {
            for (var i = -1, r = n.length; ++i < r && !1 !== t(n[i], i, n););
            return n
        }

        function uv(n, t) {
            for (var i = -1, r = n.length; ++i < r;)
                if (!t(n[i], i, n)) return !1;
            return !0
        }

        function bh(n, t) {
            for (var i = -1, f = n.length, e = -1, r = []; ++i < f;) {
                var u = n[i];
                t(u, i, n) && (r[++e] = u)
            }
            return r
        }

        function ke(n, t) {
            for (var i = -1, r = n.length, u = ou(r); ++i < r;) u[i] = t(n[i], i, n);
            return u
        }

        function kh(n) {
            for (var i = -1, u = n.length, t = tv; ++i < u;) {
                var r = n[i];
                r > t && (t = r)
            }
            return t
        }

        function fv(n, t, i, r) {
            var u = -1,
                f = n.length;
            for (r && f && (i = n[++u]); ++u < f;) i = t(i, n[u], u, n);
            return i
        }

        function ev(n, t, i, r) {
            var u = n.length;
            for (r && u && (i = n[--u]); u--;) i = t(i, n[u], u, n);
            return i
        }

        function ov(n, t) {
            for (var i = -1, r = n.length; ++i < r;)
                if (t(n[i], i, n)) return !0;
            return !1
        }

        function sv(n, t) {
            return typeof n == "undefined" ? t : n
        }

        function dh(n, t, i, r) {
            return typeof n != "undefined" && lu.call(r, i) ? n : t
        }

        function se(n, t, i) {
            var e = vu(t);
            if (!i) return de(t, n, e);
            for (var o = -1, s = e.length; ++o < s;) {
                var r = e[o],
                    u = n[r],
                    f = i(u, t[r], r, n, t);
                (f === f ? f === u : u !== u) && (typeof u != "undefined" || r in n) || (n[r] = f)
            }
            return n
        }

        function gh(t, i) {
            for (var u = -1, e = t.length, s = cu(e), o = i.length, f = ou(o); ++u < o;) {
                var r = i[u];
                s ? (r = parseFloat(r), f[u] = gf(r, e) ? t[r] : n) : f[u] = t[r]
            }
            return f
        }

        function de(n, t, i) {
            i || (i = t, t = {});
            for (var r = -1, f = i.length; ++r < f;) {
                var u = i[r];
                t[u] = n[u]
            }
            return t
        }

        function bf(n, t, i) {
            var r = typeof n;
            if ("function" == r) {
                if (r = typeof t != "undefined") {
                    var r = ft.support,
                        u = !(r.funcNames ? n.name : r.funcDecomp);
                    if (!u) {
                        var f = ga.call(n);
                        r.funcNames || (u = !dr.test(f));
                        u || (u = di.test(f) || bu(n), ah(n, u))
                    }
                    r = u
                }
                n = r ? ku(n, t, i) : n
            } else n = null == n ? vf : "object" == r ? le(n) : typeof t == "undefined" ? kf(n + "") : fc(n + "", t);
            return n
        }

        function he(n, t, r, u, f, o, s) {
            var h;
            if (r && (h = f ? r(n, u, f) : r(n)), typeof h != "undefined") return h;
            if (!au(n)) return n;
            if (u = et(n)) {
                if (h = dv(n), !t) return wu(n, h)
            } else {
                var c = yu.call(n),
                    l = c == nt;
                if (c != e && c != p && (!l || f)) return i[c] ? ny(n, c, t) : f ? n : {};
                if (h = gv(l ? {} : n), !t) return de(n, h, vu(n))
            }
            for (o || (o = []), s || (s = []), f = o.length; f--;)
                if (o[f] == n) return s[f];
            return o.push(n), s.push(h), (u ? rf : sf)(n, function(i, u) {
                h[u] = he(i, t, r, u, n, o, s)
            }), h
        }

        function nc(t, i, r, u) {
            if (typeof t != "function") throw new ef(o);
            return lo(function() {
                t.apply(n, pu(r, u))
            }, i)
        }

        function ce(n, t) {
            var e = n ? n.length : 0,
                r = [];
            if (!e) return r;
            var o = -1,
                u = df(),
                f = u == v,
                i = f && 200 <= t.length ? vh(t) : null,
                h = t.length;
            i && (u = be, f = !1, t = i);
            n: for (; ++o < e;)
                if (i = n[o], f && i === i) {
                    for (var s = h; s--;)
                        if (t[s] === i) continue n;
                    r.push(i)
                } else 0 > u(t, i, 0) && r.push(i);
            return r
        }

        function gu(n, t) {
            var r = n ? n.length : 0;
            if (!cu(r)) return sf(n, t);
            for (var i = -1, u = ve(n); ++i < r && !1 !== t(u[i], i, u););
            return n
        }

        function ko(n, t) {
            var i = n ? n.length : 0;
            if (!cu(i)) return rc(n, t);
            for (var r = ve(n); i-- && !1 !== t(r[i], i, r););
            return n
        }

        function hv(n, t) {
            var i = !0;
            return gu(n, function(n, r, u) {
                return i = !!t(n, r, u)
            }), i
        }

        function tc(n, t) {
            var i = [];
            return gu(n, function(n, r, u) {
                t(n, r, u) && i.push(n)
            }), i
        }

        function ge(n, t, i, r) {
            var u;
            return i(n, function(n, i, f) {
                if (t(n, i, f)) return (u = r ? i : n, !1)
            }), u
        }

        function nf(n, t, i, r) {
            r -= 1;
            for (var c = n.length, o = -1, e = []; ++r < c;) {
                var f = n[r];
                if (u(f) && cu(f.length) && (et(f) || ff(f))) {
                    t && (f = nf(f, t, i, 0));
                    var s = -1,
                        h = f.length;
                    for (e.length += h; ++s < h;) e[++o] = f[s]
                } else i || (e[++o] = f)
            }
            return e
        }

        function go(n, t, i) {
            var r = -1,
                u = ve(n);
            i = i(n);
            for (var e = i.length; ++r < e;) {
                var f = i[r];
                if (!1 === t(u[f], f, u)) break
            }
            return n
        }

        function ns(n, t, i) {
            var r = ve(n);
            i = i(n);
            for (var u = i.length; u--;) {
                var f = i[u];
                if (!1 === t(r[f], f, r)) break
            }
            return n
        }

        function ic(n, t) {
            go(n, t, hf)
        }

        function sf(n, t) {
            return go(n, t, vu)
        }

        function rc(n, t) {
            return ns(n, t, vu)
        }

        function ts(n, t) {
            for (var i = -1, f = t.length, e = -1, r = []; ++i < f;) {
                var u = t[i];
                ee(n[u]) && (r[++e] = u)
            }
            return r
        }

        function cv(t, i, r) {
            var e = -1,
                o = typeof i == "function",
                u = t ? t.length : 0,
                f = cu(u) ? ou(u) : [];
            return gu(t, function(t) {
                var u = o ? i : null != t && t[i];
                f[++e] = u ? u.apply(t, r) : n
            }), f
        }

        function no(n, t, i, r, u, f) {
            if (n === t) return 0 !== n || 1 / n == 1 / t;
            var l = typeof n,
                h = typeof t;
            if ("function" != l && "object" != l && "function" != h && "object" != h || null == n || null == t) n = n !== n && t !== t;
            else n: {
                var l = no,
                    h = et(n),
                    c = et(t),
                    o = k,
                    s = k;h || (o = yu.call(n), o == p ? o = e : o != e && (h = ne(n)));c || (s = yu.call(t), s == p ? s = e : s != e && ne(t));
                var a = o == e,
                    c = s == e,
                    s = o == s;
                if (!s || h || a)
                    if (o = a && lu.call(n, "__wrapped__"), c = c && lu.call(t, "__wrapped__"), o || c) n = l(o ? n.value() : n, c ? t.value() : t, i, r, u, f);
                    else if (s) {
                    for (u || (u = []), f || (f = []), o = u.length; o--;)
                        if (u[o] == n) {
                            n = f[o] == t;
                            break n
                        } u.push(n);
                    f.push(t);
                    n = (h ? pv : bv)(n, t, l, i, r, u, f);
                    u.pop();
                    f.pop()
                } else n = !1;
                else n = wv(n, t, o)
            }
            return n
        }

        function uc(t, i, r, u, f) {
            var s = i.length;
            if (null == t) return !s;
            for (var e = -1, h = !f; ++e < s;)
                if (h && u[e] ? r[e] !== t[i[e]] : !lu.call(t, i[e])) return !1;
            for (e = -1; ++e < s;) {
                var o = i[e];
                if (h && u[e]) o = lu.call(t, o);
                else {
                    var c = t[o],
                        l = r[e],
                        o = f ? f(c, l, o) : n;
                    typeof o == "undefined" && (o = no(l, c, f, !0))
                }
                if (!o) return !1
            }
            return !0
        }

        function lv(n, t) {
            var i = [];
            return gu(n, function(n, r, u) {
                i.push(t(n, r, u))
            }), i
        }

        function le(n) {
            var r = vu(n),
                t = r.length;
            if (1 == t) {
                var u = r[0],
                    i = n[u];
                if (af(i)) return function(n) {
                    return null != n && n[u] === i && lu.call(n, u)
                }
            }
            for (var f = ou(t), e = ou(t); t--;) i = n[r[t]], f[t] = i, e[t] = af(i);
            return function(n) {
                return uc(n, r, f, e)
            }
        }

        function fc(n, t) {
            return af(t) ? function(i) {
                return null != i && i[n] === t
            } : function(i) {
                return null != i && no(t, i[n], null, !0)
            }
        }

        function ec(t, i, r, f, e) {
            if (!au(t)) return t;
            var o = cu(i.length) && (et(i) || ne(i));
            return (o ? rf : sf)(i, function(i, s, h) {
                if (u(i)) {
                    f || (f = []);
                    e || (e = []);
                    n: {
                        i = f;
                        for (var a = e, c = i.length, l = h[s]; c--;)
                            if (i[c] == l) {
                                t[s] = a[c];
                                s = void 0;
                                break n
                            } c = t[s];h = r ? r(c, l, s, t, h) : n;
                        var v = typeof h == "undefined";v && (h = l, cu(l.length) && (et(l) || ne(l)) ? h = et(c) ? c : c ? wu(c) : [] : bo(l) || ff(l) ? h = ff(c) ? sa(c) : bo(c) ? c : {} : v = !1);i.push(l);a.push(h);v ? t[s] = ec(h, l, r, i, a) : (h === h ? h !== c : c === c) && (t[s] = h);s = void 0
                    }
                    return s
                }
                a = t[s];
                h = r ? r(a, i, s, t, h) : n;
                (l = typeof h == "undefined") && (h = i);
                !o && typeof h == "undefined" || !l && (h === h ? h === a : a !== a) || (t[s] = h)
            }), t
        }

        function kf(t) {
            return function(i) {
                return null == i ? n : i[t]
            }
        }

        function is(n, t) {
            return n + ie(nv() * (t - n + 1))
        }

        function oc(n, t, i, r, u) {
            return u(n, function(n, u, f) {
                i = r ? (r = !1, n) : t(i, n, u, f)
            }), i
        }

        function pu(n, t, i) {
            var u = -1,
                r = n.length;
            for (t = null == t ? 0 : +t || 0, 0 > t && (t = -t > r ? 0 : r + t), i = typeof i == "undefined" || i > r ? r : +i || 0, 0 > i && (i += r), r = t > i ? 0 : i - t >>> 0, t >>>= 0, i = ou(r); ++u < r;) i[u] = n[u + t];
            return i
        }

        function av(n, t) {
            var i;
            return gu(n, function(n, r, u) {
                return i = t(n, r, u), !i
            }), !!i
        }

        function sc(n, t) {
            var i = n.length;
            for (n.sort(t); i--;) n[i] = n[i].c;
            return n
        }

        function hc(t, i, r) {
            var u = -1,
                f = t.length,
                e = cu(f) ? ou(f) : [];
            return gu(t, function(t) {
                for (var r = i.length, f = ou(r); r--;) f[r] = null == t ? n : t[i[r]];
                e[++u] = {
                    a: f,
                    b: u,
                    c: t
                }
            }), sc(e, function(n, t) {
                var i;
                n: {
                    i = -1;
                    for (var f = n.a, e = t.a, o = f.length, s = r.length; ++i < o;) {
                        var u = ct(f[i], e[i]);
                        if (u) {
                            i = i < s ? u * (r[i] ? 1 : -1) : u;
                            break n
                        }
                    }
                    i = n.b - t.b
                }
                return i
            })
        }

        function rs(n, t) {
            var e = -1,
                o = df(),
                c = n.length,
                s = o == v,
                h = s && 200 <= c,
                i = h ? vh() : null,
                u = [];
            i ? (o = be, s = !1) : (h = !1, i = t ? [] : u);
            n: for (; ++e < c;) {
                var r = n[e],
                    f = t ? t(r, e, n) : r;
                if (s && r === r) {
                    for (var l = i.length; l--;)
                        if (i[l] === f) continue n;
                    t && i.push(f);
                    u.push(r)
                } else 0 > o(i, f, 0) && ((t || h) && i.push(f), u.push(r))
            }
            return u
        }

        function us(n, t) {
            for (var i = -1, r = t.length, u = ou(r); ++i < r;) u[i] = n[t[i]];
            return u
        }

        function cc(n, t) {
            var i = n;
            i instanceof su && (i = i.value());
            for (var u = -1, f = t.length; ++u < f;) {
                var i = [i],
                    r = t[u];
                fh.apply(i, r.args);
                i = r.func.apply(r.thisArg, i)
            }
            return i
        }

        function to(n, t, i) {
            var u = 0,
                r = n ? n.length : u;
            if (typeof t == "number" && t === t && r <= hy) {
                for (; u < r;) {
                    var f = u + r >>> 1,
                        e = n[f];
                    (i ? e <= t : e < t) ? u = f + 1: r = f
                }
                return r
            }
            return fs(n, t, vf, i)
        }

        function fs(n, t, i, r) {
            t = i(t);
            for (var e = 0, f = n ? n.length : 0, h = t !== t, c = typeof t == "undefined"; e < f;) {
                var o = ie((e + f) / 2),
                    u = i(n[o]),
                    s = u === u;
                (h ? s || r : c ? s && (r || typeof u != "undefined") : r ? u <= t : u < t) ? e = o + 1: f = o
            }
            return tf(f, sy)
        }

        function ku(n, t, i) {
            if (typeof n != "function") return vf;
            if (typeof t == "undefined") return n;
            switch (i) {
                case 1:
                    return function(i) {
                        return n.call(t, i)
                    };
                case 3:
                    return function(i, r, u) {
                        return n.call(t, i, r, u)
                    };
                case 4:
                    return function(i, r, u, f) {
                        return n.call(t, i, r, u, f)
                    };
                case 5:
                    return function(i, r, u, f, e) {
                        return n.call(t, i, r, u, f, e)
                    }
            }
            return function() {
                return n.apply(t, arguments)
            }
        }

        function es(n) {
            return so.call(n, 0)
        }

        function lc(n, t, i) {
            for (var e = i.length, r = -1, o = du(n.length - e, 0), u = -1, s = t.length, f = ou(o + s); ++u < s;) f[u] = t[u];
            for (; ++r < e;) f[i[r]] = n[r];
            for (; o--;) f[u++] = n[r++];
            return f
        }

        function ac(n, t, i) {
            for (var o = -1, s = i.length, r = -1, u = du(n.length - s, 0), e = -1, h = t.length, f = ou(u + h); ++r < u;) f[r] = n[r];
            for (u = r; ++e < h;) f[u + e] = t[e];
            for (; ++o < s;) f[u + i[o]] = n[r++];
            return f
        }

        function io(n, t) {
            return function(i, r, u) {
                var f = t ? t() : {};
                if (r = hu(r, u, 3), et(i)) {
                    u = -1;
                    for (var o = i.length; ++u < o;) {
                        var e = i[u];
                        n(f, e, r(e, u, i), i)
                    }
                } else gu(i, function(t, i, u) {
                    n(f, t, r(t, i, u), u)
                });
                return f
            }
        }

        function vc(n) {
            return function() {
                var i = arguments,
                    t = i.length,
                    f = i[0];
                if (2 > t || null == f) return f;
                var r = i[t - 2],
                    u = i[t - 1],
                    e = i[3];
                for (3 < t && typeof r == "function" ? (r = ku(r, u, 5), t -= 2) : (r = 2 < t && typeof u == "function" ? u : null, t -= r ? 1 : 0), e && si(i[1], i[2], e) && (r = 3 == t ? null : r, t = 2), u = 0; ++u < t;)(e = i[u]) && n(f, e, r);
                return f
            }
        }

        function vv(n, t) {
            function i() {
                return (this && this !== h && this instanceof i ? r : n).apply(t, arguments)
            }
            var r = uo(n);
            return i
        }

        function yc(n) {
            return function() {
                var t = arguments.length,
                    i = t,
                    u = n ? t - 1 : 0;
                if (!t) return function(n) {
                    return n
                };
                for (var r = ou(t); i--;)
                    if (r[i] = arguments[i], "function" != typeof r[i]) throw new ef(o);
                return function() {
                    for (var i = u, f = r[i].apply(this, arguments); n ? i-- : ++i < t;) f = r[i].call(this, f);
                    return f
                }
            }
        }

        function ro(n) {
            return function(t) {
                var i = -1;
                t = ya(ha(t));
                for (var u = t.length, r = ""; ++i < u;) r = n(r, t[i], i);
                return r
            }
        }

        function uo(n) {
            return function() {
                var t = pe(n.prototype),
                    i = n.apply(t, arguments);
                return au(i) ? i : t
            }
        }

        function pc(n, t) {
            return function(i, r, u) {
                u && si(i, r, u) && (r = null);
                var e = hu(),
                    f = null == r;
                if (e === bf && f || (f = !1, r = e(r, u, 3)), f) {
                    if (r = et(i), r || !fo(i)) return n(r ? i : ae(i));
                    r = gi
                }
                return kv(i, r, t)
            }
        }

        function wc(t, i, r, u, e, o, c, a, v, p) {
            function d() {
                for (var et = arguments.length, ot = et, y = ou(et); ot--;) y[ot] = arguments[ot];
                if (u && (y = lc(y, u, e)), o && (y = ac(y, o, c)), k || rt) {
                    var ot = d.placeholder,
                        st = l(y, ot),
                        et = et - st.length;
                    if (et < p) {
                        var ht = a ? wu(a) : null,
                            et = du(p - et, 0),
                            ct = k ? st : null,
                            st = k ? null : st,
                            lt = k ? y : null,
                            y = k ? null : y;
                        return i |= k ? s : b, i &= ~(k ? b : s), it || (i &= ~(f | w)), y = wc(t, i, r, lt, ct, y, st, ht, v, et), y.placeholder = ot, y
                    }
                }
                if (ot = tt ? r : this, g && (t = ot[ft]), a)
                    for (ht = y.length, et = tf(a.length, ht), ct = wu(y); et--;) st = a[et], y[et] = gf(st, ht) ? ct[st] : n;
                return nt && v < y.length && (y.length = v), (this && this !== h && this instanceof d ? ut || uo(t) : t).apply(ot, y)
            }
            var nt = i & y,
                tt = i & f,
                g = i & w,
                k = i & li,
                it = i & vt,
                rt = i & yt,
                ut = !g && uo(t),
                ft = t;
            return d
        }

        function os(n, t, i) {
            return n = n.length, t = +t, n < t && ue(t) ? (t -= n, i = null == i ? " " : i + "", aa(i, ho(t / i.length)).slice(0, t)) : ""
        }

        function yv(n, t, i, r) {
            function u() {
                for (var l = -1, s = arguments.length, t = -1, c = r.length, f = ou(s + c); ++t < c;) f[t] = r[t];
                for (; s--;) f[t++] = arguments[++l];
                return (this && this !== h && this instanceof u ? o : n).apply(e ? i : this, f)
            }
            var e = t & f,
                o = uo(n);
            return u
        }

        function uf(t, i, r, u, e, h, c, v) {
            var k = i & w;
            if (!k && typeof t != "function") throw new ef(o);
            var d = u ? u.length : 0;
            if (d || (i &= ~(s | b), u = e = null), d -= e ? e.length : 0, i & b) {
                var g = u,
                    nt = e;
                u = e = null
            }
            var p = !k && cy(t);
            if (r = [t, i, r, u, e, g, nt, h, c, v], p && !0 !== p) {
                u = r[1];
                i = p[1];
                v = u | i;
                h = y | a;
                e = f | w;
                c = h | e | vt | yt;
                var g = u & y && !(i & y),
                    nt = u & a && !(i & a),
                    tt = (nt ? r : p)[7],
                    it = (g ? r : p)[8];
                h = v >= h && v <= c && (u < a || (nt || g) && tt.length <= it);
                (!(u >= a && i > e || u > e && i >= a) || h) && (i & f && (r[2] = p[2], v |= u & f ? 0 : vt), (u = p[3]) && (e = r[3], r[3] = e ? lc(e, u, p[4]) : wu(u), r[4] = e ? l(r[3], pt) : wu(p[4])), (u = p[5]) && (e = r[5], r[5] = e ? ac(e, u, p[6]) : wu(u), r[6] = e ? l(r[5], pt) : wu(p[6])), (u = p[7]) && (r[7] = wu(u)), i & y && (r[8] = null == r[8] ? p[8] : tf(r[8], p[8])), null == r[9] && (r[9] = p[9]), r[0] = p[0], r[1] = v);
                i = r[1];
                v = r[9]
            }
            return r[9] = null == v ? k ? 0 : t.length : du(v - d, 0) || 0, (p ? ah : ly)(i == f ? vv(r[0], r[2]) : i != s && i != (f | s) || r[4].length ? wc.apply(n, r) : yv.apply(n, r), r)
        }

        function pv(t, i, r, u, f, e, o) {
            var l = -1,
                a = t.length,
                v = i.length,
                c = !0;
            if (a != v && (!f || v <= a)) return !1;
            for (; c && ++l < a;) {
                var s = t[l],
                    h = i[l],
                    c = n;
                if (u && (c = f ? u(h, s, l) : u(s, h, l)), typeof c == "undefined")
                    if (f)
                        for (var y = v; y-- && (h = i[y], !(c = s && s === h || r(s, h, u, f, e, o))););
                    else c = s && s === h || r(s, h, u, f, e, o)
            }
            return !!c
        }

        function wv(n, t, i) {
            switch (i) {
                case d:
                case g:
                    return +n == +t;
                case ot:
                    return n.name == t.name && n.message == t.message;
                case tt:
                    return n != +n ? t != +t : 0 == n ? 1 / n == 1 / t : n == +t;
                case it:
                case rt:
                    return n == t + ""
            }
            return !1
        }

        function bv(t, i, r, u, f, e, o) {
            var y = vu(t),
                p = y.length,
                a = vu(i).length;
            if (p != a && !f) return !1;
            for (var v, a = -1; ++a < p;) {
                var s = y[a],
                    h = lu.call(i, s);
                if (h) {
                    var c = t[s],
                        l = i[s],
                        h = n;
                    u && (h = f ? u(l, c, s) : u(c, l, s));
                    typeof h == "undefined" && (h = c && c === l || r(c, l, u, f, e, o))
                }
                if (!h) return !1;
                v || (v = "constructor" == s)
            }
            return v || (r = t.constructor, u = i.constructor, !(r != u && "constructor" in t && "constructor" in i) || typeof r == "function" && r instanceof r && typeof u == "function" && u instanceof u) ? !0 : !1
        }

        function kv(n, t, i) {
            var f = i ? lh : tv,
                r = f,
                u = r;
            return gu(n, function(n, e, o) {
                e = t(n, e, o);
                ((i ? e < r : e > r) || e === f && e === u) && (r = e, u = n)
            }), u
        }

        function hu(n, t, i) {
            var r = ft.callback || oo,
                r = r === oo ? bf : r;
            return i ? r(n, t, i) : r
        }

        function df(n, t, i) {
            var r = ft.indexOf || ss,
                r = r === ss ? v : r;
            return n ? r(n, t, i) : r
        }

        function dv(n) {
            var i = n.length,
                t = new n.constructor(i);
            return i && "string" == typeof n[0] && lu.call(n, "index") && (t.index = n.index, t.input = n.input), t
        }

        function gv(n) {
            return n = n.constructor, typeof n == "function" && n instanceof n || (n = cf), new n
        }

        function ny(n, t, i) {
            var r = n.constructor;
            switch (t) {
                case wt:
                    return es(n);
                case d:
                case g:
                    return new r(+n);
                case bt:
                case kt:
                case dt:
                case gt:
                case ni:
                case ti:
                case ii:
                case ri:
                case ui:
                    return t = n.buffer, new r(i ? es(t) : t, n.byteOffset, n.length);
                case tt:
                case rt:
                    return new r(n);
                case it:
                    var u = new r(n.source, bi.exec(n));
                    u.lastIndex = n.lastIndex
            }
            return u
        }

        function gf(n, t) {
            return n = +n, t = null == t ? rv : t, -1 < n && 0 == n % 1 && n < t
        }

        function si(n, t, i) {
            if (!au(i)) return !1;
            var r = typeof t;
            return "number" == r ? (r = i.length, r = cu(r) && gf(t, r)) : r = "string" == r && t in i, r ? (t = i[t], n === n ? n === t : t !== t) : !1
        }

        function cu(n) {
            return typeof n == "number" && -1 < n && 0 == n % 1 && n <= rv
        }

        function af(n) {
            return n === n && (0 === n ? 0 < 1 / n : !au(n))
        }

        function bc(n, t) {
            n = ve(n);
            for (var r = -1, f = t.length, u = {}; ++r < f;) {
                var i = t[r];
                i in n && (u[i] = n[i])
            }
            return u
        }

        function kc(n, t) {
            var i = {};
            return ic(n, function(n, r, u) {
                t(n, r, u) && (i[r] = n)
            }), i
        }

        function dc(n) {
            var t;
            if (!u(n) || yu.call(n) != e || !(lu.call(n, "constructor") || (t = n.constructor, typeof t != "function" || t instanceof t))) return !1;
            var i;
            return ic(n, function(n, t) {
                i = t
            }), typeof i == "undefined" || lu.call(n, i)
        }

        function gc(n) {
            for (var r = hf(n), u = r.length, t = u && n.length, f = ft.support, f = t && cu(t) && (et(n) || f.nonEnumArgs && ff(n)), e = -1, o = []; ++e < u;) {
                var i = r[e];
                (f && gf(i, t) || lu.call(n, i)) && o.push(i)
            }
            return o
        }

        function ae(n) {
            return null == n ? [] : cu(n.length) ? au(n) ? n : cf(n) : eo(n)
        }

        function ve(n) {
            return au(n) ? n : cf(n)
        }

        function nl(n) {
            return n instanceof su ? n.clone() : new of (n.__wrapped__, n.__chain__, wu(n.__actions__))
        }

        function tl(n, t, i) {
            return n && n.length ? ((i ? si(n, t, i) : null == t) && (t = 1), pu(n, 0 > t ? 0 : t)) : []
        }

        function il(n, t, i) {
            var r = n ? n.length : 0;
            return r ? ((i ? si(n, t, i) : null == t) && (t = 1), t = r - (+t || 0), pu(n, 0, 0 > t ? 0 : t)) : []
        }

        function rl(n, t, i) {
            var r = -1,
                u = n ? n.length : 0;
            for (t = hu(t, i, 3); ++r < u;)
                if (t(n[r], r, n)) return r;
            return -1
        }

        function ul(t) {
            return t ? t[0] : n
        }

        function ss(n, t, i) {
            var r = n ? n.length : 0;
            if (!r) return -1;
            if (typeof i == "number") i = 0 > i ? du(r + i, 0) : i;
            else if (i) return i = to(n, t), n = n[i], (t === t ? t === n : n !== n) ? i : -1;
            return v(n, t, i || 0)
        }

        function fl(t) {
            var i = t ? t.length : 0;
            return i ? t[i - 1] : n
        }

        function el(n) {
            return tl(n, 1)
        }

        function ol(n, t, i, r) {
            if (!n || !n.length) return [];
            null != t && typeof t != "boolean" && (r = i, i = si(n, t, r) ? null : t, t = !1);
            var u = hu();
            if ((u !== bf || null != i) && (i = u(i, r, 3)), t && df() == v) {
                t = i;
                var e;
                i = -1;
                r = n.length;
                for (var u = -1, o = []; ++i < r;) {
                    var f = n[i],
                        s = t ? t(f, i, n) : f;
                    i && e === s || (e = s, o[++u] = f)
                }
                n = o
            } else n = rs(n, i);
            return n
        }

        function sl(n) {
            for (var t = -1, i = (n && n.length && kh(ke(n, ry))) >>> 0, r = ou(i); ++t < i;) r[t] = ke(n, kf(t));
            return r
        }

        function hl(n, t) {
            var r = -1,
                f = n ? n.length : 0,
                u = {};
            for (!f || t || et(n[0]) || (t = []); ++r < f;) {
                var i = n[r];
                t ? u[i] = t[r] : i && (u[i[0]] = i[1])
            }
            return u
        }

        function cl(n) {
            return n = ft(n), n.__chain__ = !0, n
        }

        function ll(n, t, i) {
            return t.call(i, n)
        }

        function al(n, t, i) {
            var r = et(n) ? uv : hv;
            return (typeof t != "function" || typeof i != "undefined") && (t = hu(t, i, 3)), r(n, t)
        }

        function hs(n, t, i) {
            var r = et(n) ? bh : tc;
            return t = hu(t, i, 3), r(n, t)
        }

        function cs(t, i, r) {
            return et(t) ? (i = rl(t, i, r), -1 < i ? t[i] : n) : (i = hu(i, r, 3), ge(t, i, gu))
        }

        function vl(n, t, i) {
            return typeof t == "function" && typeof i == "undefined" && et(n) ? rf(n, t) : gu(n, ku(t, i, 3))
        }

        function yl(n, t, i) {
            if (typeof t == "function" && typeof i == "undefined" && et(n))
                for (i = n.length; i-- && !1 !== t(n[i], i, n););
            else n = ko(n, ku(t, i, 3));
            return n
        }

        function ls(n, t, i) {
            var r = n ? n.length : 0;
            return cu(r) || (n = eo(n), r = n.length), r ? (i = typeof i == "number" ? 0 > i ? du(r + i, 0) : i || 0 : 0, typeof n == "string" || !et(n) && fo(n) ? i < r && -1 < n.indexOf(t, i) : -1 < df(n, t, i)) : !1
        }

        function as(n, t, i) {
            var r = et(n) ? ke : lv;
            return t = hu(t, i, 3), r(n, t)
        }

        function vs(n, t, i, r) {
            return (et(n) ? fv : oc)(n, hu(t, r, 4), i, 3 > arguments.length, gu)
        }

        function pl(n, t, i, r) {
            return (et(n) ? ev : oc)(n, hu(t, r, 4), i, 3 > arguments.length, ko)
        }

        function ys(t, i, r) {
            return (r ? si(t, i, r) : null == i) ? (t = ae(t), i = t.length, 0 < i ? t[is(0, i - 1)] : n) : (t = wl(t), t.length = tf(0 > i ? 0 : +i || 0, t.length), t)
        }

        function wl(n) {
            n = ae(n);
            for (var t = -1, u = n.length, i = ou(u); ++t < u;) {
                var r = is(0, t);
                t != r && (i[t] = i[r]);
                i[r] = n[t]
            }
            return i
        }

        function bl(n, t, i) {
            var r = et(n) ? ov : av;
            return (typeof t != "function" || typeof i != "undefined") && (t = hu(t, i, 3)), r(n, t)
        }

        function kl(n, t) {
            var i;
            if (typeof t != "function") {
                if (typeof n != "function") throw new ef(o);
                var r = n;
                n = t;
                t = r
            }
            return function() {
                return 0 < --n ? i = t.apply(this, arguments) : t = null, i
            }
        }

        function dl(n, t) {
            var i = f;
            if (2 < arguments.length) var r = pu(arguments, 2),
                u = l(r, dl.placeholder),
                i = i | s;
            return uf(n, i, t, r, u)
        }

        function gl(n, t) {
            var i = f | w;
            if (2 < arguments.length) var r = pu(arguments, 2),
                u = l(r, gl.placeholder),
                i = i | s;
            return uf(t, i, n, r, u)
        }

        function na(n, t, i) {
            return i && si(n, t, i) && (t = null), n = uf(n, li, null, null, null, null, null, t), n.placeholder = na.placeholder, n
        }

        function ta(n, t, i) {
            return i && si(n, t, i) && (t = null), n = uf(n, yt, null, null, null, null, null, t), n.placeholder = ta.placeholder, n
        }

        function ia(t, i, r) {
            function w() {
                var r = i - (fe() - l);
                0 >= r || r > i ? (f && te(f), r = a, f = u = a = n, r && (v = fe(), c = t.apply(s, e), u || f || (e = s = null))) : u = lo(w, r)
            }

            function k() {
                u && te(u);
                f = u = a = n;
                (y || h !== i) && (v = fe(), c = t.apply(s, e), u || f || (e = s = null))
            }

            function b() {
                if (e = arguments, l = fe(), s = this, a = y && (u || !p), !1 === h) var o = p && !u;
                else {
                    f || p || (v = l);
                    var r = h - (l - v),
                        n = 0 >= r || r > h;
                    n ? (f && (f = te(f)), v = l, c = t.apply(s, e)) : f || (f = lo(k, r))
                }
                return n && u ? u = te(u) : u || i === h || (u = lo(w, i)), o && (n = !0, c = t.apply(s, e)), !n || u || f || (e = s = null), c
            }
            var e, f, c, l, s, u, a, v = 0,
                h = !1,
                y = !0;
            if (typeof t != "function") throw new ef(o);
            if (i = 0 > i ? 0 : +i || 0, !0 === r) var p = !0,
                y = !1;
            else au(r) && (p = r.leading, h = "maxWait" in r && du(+r.maxWait || 0, i), y = "trailing" in r ? r.trailing : y);
            return b.cancel = function() {
                u && te(u);
                f && te(f);
                f = u = a = n
            }, b
        }

        function ps(n, t) {
            function i() {
                var r = arguments,
                    u = i.cache,
                    f = t ? t.apply(this, r) : r[0];
                return u.has(f) ? u.get(f) : (r = n.apply(this, r), u.set(f, r), r)
            }
            if (typeof n != "function" || t && typeof t != "function") throw new ef(o);
            return i.cache = new ps.Cache, i
        }

        function ra(n) {
            var t = pu(arguments, 1),
                i = l(t, ra.placeholder);
            return uf(n, s, null, t, i)
        }

        function ua(n) {
            var t = pu(arguments, 1),
                i = l(t, ua.placeholder);
            return uf(n, b, null, t, i)
        }

        function ff(t) {
            return cu(u(t) ? t.length : n) && yu.call(t) == p || !1
        }

        function fa(n) {
            return n && 1 === n.nodeType && u(n) && -1 < yu.call(n).indexOf("Element") || !1
        }

        function ws(n) {
            return u(n) && typeof n.message == "string" && yu.call(n) == ot || !1
        }

        function au(n) {
            var t = typeof n;
            return "function" == t || n && "object" == t || !1
        }

        function bu(n) {
            return null == n ? !1 : yu.call(n) == nt ? ey.test(ga.call(n)) : u(n) && nu.test(n) || !1
        }

        function ea(n) {
            return typeof n == "number" || u(n) && yu.call(n) == tt || !1
        }

        function oa(n) {
            return u(n) && yu.call(n) == it || !1
        }

        function fo(n) {
            return typeof n == "string" || u(n) && yu.call(n) == rt || !1
        }

        function ne(n) {
            return u(n) && cu(n.length) && t[yu.call(n)] || !1
        }

        function sa(n) {
            return de(n, hf(n))
        }

        function bs(n) {
            return ts(n, hf(n))
        }

        function hf(n) {
            if (null == n) return [];
            au(n) || (n = cf(n));
            for (var t = n.length, t = t && cu(t) && (et(n) || lf.nonEnumArgs && ff(n)) && t || 0, r = n.constructor, u = -1, r = typeof r == "function" && r.prototype === n, f = ou(t), e = 0 < t; ++u < t;) f[u] = u + "";
            for (var i in n) e && gf(i, t) || "constructor" == i && (r || !lu.call(n, i)) || f.push(i);
            return f
        }

        function eo(n) {
            return us(n, vu(n))
        }

        function ha(n) {
            return (n = r(n)) && n.replace(tu, tr)
        }

        function ca(n) {
            return (n = r(n)) && iu.test(n) ? n.replace(ki, "\\$&") : n
        }

        function la(n, t, i) {
            return i && si(n, t, i) && (t = 0), ch(n, t)
        }

        function aa(n, t) {
            var i = "";
            if (n = r(n), t = +t, 1 > t || !n || !ue(t)) return i;
            do t % 2 && (i += n), t = ie(t / 2), n += n; while (t);
            return i
        }

        function va(n, t, i) {
            var u = n;
            return (n = r(n)) ? (i ? si(u, t, i) : null == t) ? n.slice(hi(n), ci(n) + 1) : (t += "", n.slice(fi(n, t), ei(n, t) + 1)) : n
        }

        function ya(n, t, i) {
            return i && si(n, t, i) && (t = null), n = r(n), n.match(t || uu) || []
        }

        function pa() {
            for (var u = arguments[0], t = arguments.length, r = ou(t ? t - 1 : 0); 0 < --t;) r[t - 1] = arguments[t];
            try {
                return u.apply(n, r)
            } catch (i) {
                return ws(i) ? i : new ty(i)
            }
        }

        function oo(n, t, i) {
            return i && si(n, t, i) && (t = null), u(n) ? wa(n) : bf(n, t)
        }

        function ks(n) {
            return function() {
                return n
            }
        }

        function vf(n) {
            return n
        }

        function wa(n) {
            return le(he(n, !0))
        }

        function ds(n, t, i) {
            if (null == i) {
                var u = au(t),
                    r = u && vu(t);
                ((r = r && r.length && ts(t, r)) ? r.length : u) || (r = !1, i = t, t = n, n = this)
            }
            r || (r = ts(t, vu(t)));
            var f = !0,
                u = -1,
                o = ee(n),
                s = r.length;
            for (!1 === i ? f = !1 : au(i) && ("chain" in i) && (f = i.chain); ++u < s;) {
                i = r[u];
                var e = t[i];
                n[i] = e;
                o && (n.prototype[i] = function(t) {
                    return function() {
                        var i = this.__chain__;
                        if (f || i) {
                            var r = n(this.__wrapped__);
                            return (r.__actions__ = wu(this.__actions__)).push({
                                func: t,
                                args: arguments,
                                thisArg: n
                            }), r.__chain__ = i, r
                        }
                        return i = [this.value()], fh.apply(i, arguments), t.apply(n, i)
                    }
                }(e))
            }
            return n
        }

        function ba() {}
        ut = ut ? c.defaults(h.Object(), ut, c.pick(h, eu)) : h;
        var ou = ut.Array,
            ka = ut.Date,
            ty = ut.Error,
            gs = ut.Function,
            yf = ut.Math,
            nh = ut.Number,
            cf = ut.Object,
            th = ut.RegExp,
            da = ut.String,
            ef = ut.TypeError,
            ih = ou.prototype,
            rh = cf.prototype,
            iy = da.prototype,
            uh = (uh = ut.window) && uh.document,
            ga = gs.prototype.toString,
            ry = kf("length"),
            lu = rh.hasOwnProperty,
            uy = 0,
            yu = rh.toString,
            fy = ut._,
            ey = th("^" + ca(yu).replace(/toString|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"),
            pf = bu(pf = ut.ArrayBuffer) && pf,
            so = bu(so = pf && new pf(0).slice) && so,
            ho = yf.ceil,
            te = ut.clearTimeout,
            ie = yf.floor,
            re = bu(re = cf.getPrototypeOf) && re,
            fh = ih.push,
            oy = rh.propertyIsEnumerable,
            co = bu(co = ut.Set) && co,
            lo = ut.setTimeout,
            eh = ih.splice,
            wf = bu(wf = ut.Uint8Array) && wf,
            ao = bu(ao = ut.WeakMap) && ao,
            ye = function() {
                try {
                    var n = bu(n = ut.Float64Array) && n,
                        t = new n(new pf(10), 0, 1) && n
                } catch (i) {}
                return t
            }(),
            oh = bu(oh = ou.isArray) && oh,
            vo = bu(vo = cf.create) && vo,
            ue = ut.isFinite,
            yo = bu(yo = cf.keys) && yo,
            du = yf.max,
            tf = yf.min,
            sh = bu(sh = ka.now) && sh,
            hh = bu(hh = nh.isFinite) && hh,
            ch = ut.parseInt,
            nv = yf.random,
            tv = nh.NEGATIVE_INFINITY,
            lh = nh.POSITIVE_INFINITY,
            po = yf.pow(2, 32) - 1,
            sy = po - 1,
            hy = po >>> 1,
            iv = ye ? ye.BYTES_PER_ELEMENT : 0,
            rv = yf.pow(2, 53) - 1,
            wo = ao && new ao,
            lf = ft.support = {};
        ! function() {
            lf.funcDecomp = !bu(ut.WinRTError) && di.test(at);
            lf.funcNames = typeof gs.name == "string";
            try {
                lf.dom = 11 === uh.createDocumentFragment().nodeType
            } catch (n) {
                lf.dom = !1
            }
            try {
                lf.nonEnumArgs = !oy.call(arguments, 1)
            } catch (t) {
                lf.nonEnumArgs = !0
            }
        }(0, 0);
        ft.templateSettings = {
            escape: wr,
            evaluate: br,
            interpolate: wi,
            variable: "",
            imports: {
                _: ft
            }
        };
        var pe = function() {
                function n() {}
                return function(t) {
                    if (au(t)) {
                        n.prototype = t;
                        var i = new n;
                        n.prototype = null
                    }
                    return i || ut.Object()
                }
            }(),
            ah = wo ? function(n, t) {
                return wo.set(n, t), n
            } : vf;
        so || (es = pf && wf ? function(n) {
            var i = n.byteLength,
                t = ye ? ie(i / iv) : 0,
                r = t * iv,
                u = new pf(i);
            if (t) {
                var f = new ye(u, 0, t);
                f.set(new ye(n, 0, t))
            }
            return i != r && (f = new wf(u, r), f.set(new wf(n, r))), u
        } : ks(null));
        var vh = vo && co ? function(n) {
                return new wh(n)
            } : ks(null),
            cy = wo ? function(n) {
                return wo.get(n)
            } : ba,
            ly = function() {
                var n = 0,
                    t = 0;
                return function(i, r) {
                    var u = fe(),
                        f = hr - (u - t);
                    if (t = u, 0 < f) {
                        if (++n >= sr) return i
                    } else n = 0;
                    return ah(i, r)
                }
            }(),
            ay = io(function(n, t, i) {
                lu.call(n, i) ? ++n[i] : n[i] = 1
            }),
            vy = io(function(n, t, i) {
                lu.call(n, i) ? n[i].push(t) : n[i] = [t]
            }),
            yy = io(function(n, t, i) {
                n[i] = t
            }),
            py = io(function(n, t, i) {
                n[i ? 0 : 1].push(t)
            }, function() {
                return [
                    [],
                    []
                ]
            }),
            fe = sh || function() {
                return (new ka).getTime()
            },
            wy = yc(),
            yh = yc(!0),
            et = oh || function(n) {
                return u(n) && cu(n.length) && yu.call(n) == k || !1
            };
        lf.dom || (fa = function(n) {
            return n && 1 === n.nodeType && u(n) && !bo(n) || !1
        });
        var by = hh || function(n) {
                return typeof n == "number" && ue(n)
            },
            ee = lt(/x/) || wf && !lt(wf) ? function(n) {
                return yu.call(n) == nt
            } : lt,
            bo = re ? function(n) {
                if (!n || yu.call(n) != e) return !1;
                var i = n.valueOf,
                    t = bu(i) && (t = re(i)) && re(t);
                return t ? n == t || re(n) == t : dc(n)
            } : dc,
            ph = vc(se),
            vu = yo ? function(n) {
                if (n) var t = n.constructor,
                    i = n.length;
                return typeof t == "function" && t.prototype === n || typeof n != "function" && i && cu(i) ? gc(n) : au(n) ? yo(n) : []
            } : gc,
            ky = vc(ec),
            dy = ro(function(n, t, i) {
                return t = t.toLowerCase(), n + (i ? t.charAt(0).toUpperCase() + t.slice(1) : t)
            }),
            gy = ro(function(n, t, i) {
                return n + (i ? "-" : "") + t.toLowerCase()
            });
        8 != ch(fu + "08") && (la = function(n, t, i) {
            return (i ? si(n, t, i) : null == t) ? t = 0 : t && (t = +t), n = va(n), ch(n, t || (gr.test(n) ? 16 : 10))
        });
        var np = ro(function(n, t, i) {
                return n + (i ? "_" : "") + t.toLowerCase()
            }),
            tp = ro(function(n, t, i) {
                return n + (i ? " " : "") + (t.charAt(0).toUpperCase() + t.slice(1))
            }),
            ip = pc(kh),
            rp = pc(function(n) {
                for (var i = -1, u = n.length, t = lh; ++i < u;) {
                    var r = n[i];
                    r < t && (t = r)
                }
                return t
            }, !0);
        return ft.prototype = we.prototype, of .prototype = pe(we.prototype), of .prototype.constructor = of , su.prototype = pe(we.prototype), su.prototype.constructor = su, oe.prototype["delete"] = function(n) {
            return this.has(n) && delete this.__data__[n]
        }, oe.prototype.get = function(t) {
            return "__proto__" == t ? n : this.__data__[t]
        }, oe.prototype.has = function(n) {
            return "__proto__" != n && lu.call(this.__data__, n)
        }, oe.prototype.set = function(n, t) {
            return "__proto__" != n && (this.__data__[n] = t), this
        }, wh.prototype.push = function(n) {
            var t = this.data;
            typeof n == "string" || au(n) ? t.set.add(n) : t.hash[n] = !0
        }, ps.Cache = oe, ft.after = function(n, t) {
            if (typeof t != "function") {
                if (typeof n != "function") throw new ef(o);
                var i = n;
                n = t;
                t = i
            }
            return n = ue(n = +n) ? n : 0,
                function() {
                    if (1 > --n) return t.apply(this, arguments)
                }
        }, ft.ary = function(n, t, i) {
            return i && si(n, t, i) && (t = null), t = n && null == t ? n.length : du(+t || 0, 0), uf(n, y, null, null, null, null, t)
        }, ft.assign = ph, ft.at = function(n) {
            return cu(n ? n.length : 0) && (n = ae(n)), gh(n, nf(arguments, !1, !1, 1))
        }, ft.before = kl, ft.bind = dl, ft.bindAll = function(n) {
            for (var t = n, i = 1 < arguments.length ? nf(arguments, !1, !1, 1) : bs(n), r = -1, e = i.length; ++r < e;) {
                var u = i[r];
                t[u] = uf(t[u], f, t)
            }
            return t
        }, ft.bindKey = gl, ft.callback = oo, ft.chain = cl, ft.chunk = function(n, t, i) {
            t = (i ? si(n, t, i) : null == t) ? 1 : du(+t || 1, 1);
            i = 0;
            for (var r = n ? n.length : 0, f = -1, u = ou(ho(r / t)); i < r;) u[++f] = pu(n, i, i += t);
            return u
        }, ft.compact = function(n) {
            for (var t = -1, u = n ? n.length : 0, f = -1, i = []; ++t < u;) {
                var r = n[t];
                r && (i[++f] = r)
            }
            return i
        }, ft.constant = ks, ft.countBy = ay, ft.create = function(n, t, i) {
            var r = pe(n);
            return i && si(n, t, i) && (t = null), t ? de(t, r, vu(t)) : r
        }, ft.curry = na, ft.curryRight = ta, ft.debounce = ia, ft.defaults = function(t) {
            if (null == t) return t;
            var i = wu(arguments);
            return i.push(sv), ph.apply(n, i)
        }, ft.defer = function(n) {
            return nc(n, 1, arguments, 1)
        }, ft.delay = function(n, t) {
            return nc(n, t, arguments, 2)
        }, ft.difference = function() {
            for (var n = arguments, t = -1, r = n.length; ++t < r;) {
                var i = n[t];
                if (et(i) || ff(i)) break
            }
            return ce(i, nf(n, !1, !0, ++t))
        }, ft.drop = tl, ft.dropRight = il, ft.dropRightWhile = function(n, t, i) {
            var r = n ? n.length : 0;
            if (!r) return [];
            for (t = hu(t, i, 3); r-- && t(n[r], r, n););
            return pu(n, 0, r + 1)
        }, ft.dropWhile = function(n, t, i) {
            var u = n ? n.length : 0;
            if (!u) return [];
            var r = -1;
            for (t = hu(t, i, 3); ++r < u && t(n[r], r, n););
            return pu(n, r)
        }, ft.fill = function(n, t, i, r) {
            var u = n ? n.length : 0;
            if (!u) return [];
            for (i && typeof i != "number" && si(n, t, i) && (i = 0, r = u), u = n.length, i = null == i ? 0 : +i || 0, 0 > i && (i = -i > u ? 0 : u + i), r = typeof r == "undefined" || r > u ? u : +r || 0, 0 > r && (r += u), u = i > r ? 0 : r >>> 0, i >>>= 0; i < u;) n[i++] = t;
            return n
        }, ft.filter = hs, ft.flatten = function(n, t, i) {
            var r = n ? n.length : 0;
            return i && si(n, t, i) && (t = !1), r ? nf(n, t, !1, 0) : []
        }, ft.flattenDeep = function(n) {
            return n && n.length ? nf(n, !0, !1, 0) : []
        }, ft.flow = wy, ft.flowRight = yh, ft.forEach = vl, ft.forEachRight = yl, ft.forIn = function(n, t, i) {
            return (typeof t != "function" || typeof i != "undefined") && (t = ku(t, i, 3)), go(n, t, hf)
        }, ft.forInRight = function(n, t, i) {
            return t = ku(t, i, 3), ns(n, t, hf)
        }, ft.forOwn = function(n, t, i) {
            return (typeof t != "function" || typeof i != "undefined") && (t = ku(t, i, 3)), sf(n, t)
        }, ft.forOwnRight = function(n, t, i) {
            return t = ku(t, i, 3), ns(n, t, vu)
        }, ft.functions = bs, ft.groupBy = vy, ft.indexBy = yy, ft.initial = function(n) {
            return il(n, 1)
        }, ft.intersection = function() {
            for (var i = [], t = -1, s = arguments.length, f = [], e = df(), r = e == v; ++t < s;) {
                var n = arguments[t];
                (et(n) || ff(n)) && (i.push(n), f.push(r && 120 <= n.length ? vh(t && n) : null))
            }
            var s = i.length,
                r = i[0],
                h = -1,
                l = r ? r.length : 0,
                o = [],
                u = f[0];
            n: for (; ++h < l;)
                if (n = r[h], 0 > (u ? be(u, n) : e(o, n, 0))) {
                    for (t = s; --t;) {
                        var c = f[t];
                        if (0 > (c ? be(c, n) : e(i[t], n, 0))) continue n
                    }
                    u && u.push(n);
                    o.push(n)
                }
            return o
        }, ft.invert = function(n, t, i) {
            i && si(n, t, i) && (t = null);
            i = -1;
            for (var e = vu(n), o = e.length, r = {}; ++i < o;) {
                var u = e[i],
                    f = n[u];
                t ? lu.call(r, f) ? r[f].push(u) : r[f] = [u] : r[f] = u
            }
            return r
        }, ft.invoke = function(n, t) {
            return cv(n, t, pu(arguments, 2))
        }, ft.keys = vu, ft.keysIn = hf, ft.map = as, ft.mapValues = function(n, t, i) {
            var r = {};
            return t = hu(t, i, 3), sf(n, function(n, i, u) {
                r[i] = t(n, i, u)
            }), r
        }, ft.matches = wa, ft.matchesProperty = function(n, t) {
            return fc(n + "", he(t, !0))
        }, ft.memoize = ps, ft.merge = ky, ft.mixin = ds, ft.negate = function(n) {
            if (typeof n != "function") throw new ef(o);
            return function() {
                return !n.apply(this, arguments)
            }
        }, ft.omit = function(n, t, i) {
            if (null == n) return {};
            if (typeof t != "function") {
                var r = ke(nf(arguments, !1, !1, 1), da);
                return bc(n, ce(hf(n), r))
            }
            return t = ku(t, i, 3), kc(n, function(n, i, r) {
                return !t(n, i, r)
            })
        }, ft.once = function(n) {
            return kl(n, 2)
        }, ft.pairs = function(n) {
            for (var t = -1, i = vu(n), r = i.length, u = ou(r); ++t < r;) {
                var f = i[t];
                u[t] = [f, n[f]]
            }
            return u
        }, ft.partial = ra, ft.partialRight = ua, ft.partition = py, ft.pick = function(n, t, i) {
            return null == n ? {} : typeof t == "function" ? kc(n, ku(t, i, 3)) : bc(n, nf(arguments, !1, !1, 1))
        }, ft.pluck = function(n, t) {
            return as(n, kf(t))
        }, ft.property = function(n) {
            return kf(n + "")
        }, ft.propertyOf = function(t) {
            return function(i) {
                return null == t ? n : t[i]
            }
        }, ft.pull = function() {
            var t = arguments,
                n = t[0];
            if (!n || !n.length) return n;
            for (var r = 0, u = df(), f = t.length; ++r < f;)
                for (var i = 0, e = t[r]; - 1 < (i = u(n, e, i));) eh.call(n, i, 1);
            return n
        }, ft.pullAt = function(n) {
            var r = n || [],
                t = nf(arguments, !1, !1, 1),
                u = t.length,
                f = gh(r, t);
            for (t.sort(ct); u--;) {
                var i = parseFloat(t[u]);
                if (i != e && gf(i)) {
                    var e = i;
                    eh.call(r, i, 1)
                }
            }
            return f
        }, ft.range = function(n, t, i) {
            i && si(n, t, i) && (t = i = null);
            n = +n || 0;
            i = null == i ? 1 : +i || 0;
            null == t ? (t = n, n = 0) : t = +t || 0;
            var r = -1;
            t = du(ho((t - n) / (i || 1)), 0);
            for (var u = ou(t); ++r < t;) u[r] = n, n += i;
            return u
        }, ft.rearg = function(n) {
            var t = nf(arguments, !1, !1, 1);
            return uf(n, a, null, null, null, t)
        }, ft.reject = function(n, t, i) {
            var r = et(n) ? bh : tc;
            return t = hu(t, i, 3), r(n, function(n, i, r) {
                return !t(n, i, r)
            })
        }, ft.remove = function(n, t, i) {
            var r = -1,
                u = n ? n.length : 0,
                f = [];
            for (t = hu(t, i, 3); ++r < u;) i = n[r], t(i, r, n) && (f.push(i), eh.call(n, r--, 1), u--);
            return f
        }, ft.rest = el, ft.shuffle = wl, ft.slice = function(n, t, i) {
            var r = n ? n.length : 0;
            return r ? (i && typeof i != "number" && si(n, t, i) && (t = 0, i = r), pu(n, t, i)) : []
        }, ft.sortBy = function(n, t, i) {
            if (null == n) return [];
            var r = -1,
                u = n.length,
                f = cu(u) ? ou(u) : [];
            return i && si(n, t, i) && (t = null), t = hu(t, i, 3), gu(n, function(n, i, u) {
                f[++r] = {
                    a: t(n, i, u),
                    b: r,
                    c: n
                }
            }), sc(f, nr)
        }, ft.sortByAll = function(n) {
            if (null == n) return [];
            var t = arguments,
                i = t[3];
            return i && si(t[1], t[2], i) && (t = [n, t[1]]), hc(n, nf(t, !1, !1, 1), [])
        }, ft.sortByOrder = function(n, t, i, r) {
            return null == n ? [] : (r && si(t, i, r) && (i = null), et(t) || (t = null == t ? [] : [t]), et(i) || (i = null == i ? [] : [i]), hc(n, t, i))
        }, ft.spread = function(n) {
            if (typeof n != "function") throw new ef(o);
            return function(t) {
                return n.apply(this, t)
            }
        }, ft.take = function(n, t, i) {
            return n && n.length ? ((i ? si(n, t, i) : null == t) && (t = 1), pu(n, 0, 0 > t ? 0 : t)) : []
        }, ft.takeRight = function(n, t, i) {
            var r = n ? n.length : 0;
            return r ? ((i ? si(n, t, i) : null == t) && (t = 1), t = r - (+t || 0), pu(n, 0 > t ? 0 : t)) : []
        }, ft.takeRightWhile = function(n, t, i) {
            var r = n ? n.length : 0;
            if (!r) return [];
            for (t = hu(t, i, 3); r-- && t(n[r], r, n););
            return pu(n, r + 1)
        }, ft.takeWhile = function(n, t, i) {
            var u = n ? n.length : 0;
            if (!u) return [];
            var r = -1;
            for (t = hu(t, i, 3); ++r < u && t(n[r], r, n););
            return pu(n, 0, r)
        }, ft.tap = function(n, t, i) {
            return t.call(i, n), n
        }, ft.throttle = function(n, t, i) {
            var r = !0,
                u = !0;
            if (typeof n != "function") throw new ef(o);
            return !1 === i ? r = !1 : au(i) && (r = "leading" in i ? !!i.leading : r, u = "trailing" in i ? !!i.trailing : u), ht.leading = r, ht.maxWait = +t, ht.trailing = u, ia(n, t, ht)
        }, ft.thru = ll, ft.times = function(n, t, i) {
            if (n = +n, 1 > n || !ue(n)) return [];
            var r = -1,
                u = ou(tf(n, po));
            for (t = ku(t, i, 1); ++r < n;) r < po ? u[r] = t(r) : t(r);
            return u
        }, ft.toArray = function(n) {
            var t = n ? n.length : 0;
            return cu(t) ? t ? wu(n) : [] : eo(n)
        }, ft.toPlainObject = sa, ft.transform = function(n, t, i, r) {
            var u = et(n) || ne(n);
            return t = hu(t, r, 4), null == i && (u || au(n) ? (r = n.constructor, i = u ? et(n) ? new r : [] : pe(ee(r) && r.prototype)) : i = {}), (u ? rf : sf)(n, function(n, r, u) {
                return t(i, n, r, u)
            }), i
        }, ft.union = function() {
            return rs(nf(arguments, !1, !0, 0))
        }, ft.uniq = ol, ft.unzip = sl, ft.values = eo, ft.valuesIn = function(n) {
            return us(n, hf(n))
        }, ft.where = function(n, t) {
            return hs(n, le(t))
        }, ft.without = function(n) {
            return ce(n, pu(arguments, 1))
        }, ft.wrap = function(n, t) {
            return t = null == t ? vf : t, uf(t, s, null, [n], [])
        }, ft.xor = function() {
            for (var i = -1, r = arguments.length; ++i < r;) {
                var n = arguments[i];
                if (et(n) || ff(n)) var t = t ? ce(t, n).concat(ce(n, t)) : n
            }
            return t ? rs(t) : []
        }, ft.zip = function() {
            for (var n = arguments.length, t = ou(n); n--;) t[n] = arguments[n];
            return sl(t)
        }, ft.zipObject = hl, ft.backflow = yh, ft.collect = as, ft.compose = yh, ft.each = vl, ft.eachRight = yl, ft.extend = ph, ft.iteratee = oo, ft.methods = bs, ft.object = hl, ft.select = hs, ft.tail = el, ft.unique = ol, ds(ft, ft), ft.add = function(n, t) {
            return n + t
        }, ft.attempt = pa, ft.camelCase = dy, ft.capitalize = function(n) {
            return (n = r(n)) && n.charAt(0).toUpperCase() + n.slice(1)
        }, ft.clone = function(n, t, i, r) {
            return t && typeof t != "boolean" && si(n, t, i) ? t = !1 : typeof t == "function" && (r = i, i = t, t = !1), i = typeof i == "function" && ku(i, r, 1), he(n, t, i)
        }, ft.cloneDeep = function(n, t, i) {
            return t = typeof t == "function" && ku(t, i, 1), he(n, !0, t)
        }, ft.deburr = ha, ft.endsWith = function(n, t, i) {
            n = r(n);
            t += "";
            var u = n.length;
            return i = typeof i == "undefined" ? u : tf(0 > i ? 0 : +i || 0, u), i -= t.length, 0 <= i && n.indexOf(t, i) == i
        }, ft.escape = function(n) {
            return (n = r(n)) && pr.test(n) ? n.replace(pi, ir) : n
        }, ft.escapeRegExp = ca, ft.every = al, ft.find = cs, ft.findIndex = rl, ft.findKey = function(n, t, i) {
            return t = hu(t, i, 3), ge(n, t, sf, !0)
        }, ft.findLast = function(n, t, i) {
            return t = hu(t, i, 3), ge(n, t, ko)
        }, ft.findLastIndex = function(n, t, i) {
            var r = n ? n.length : 0;
            for (t = hu(t, i, 3); r--;)
                if (t(n[r], r, n)) return r;
            return -1
        }, ft.findLastKey = function(n, t, i) {
            return t = hu(t, i, 3), ge(n, t, rc, !0)
        }, ft.findWhere = function(n, t) {
            return cs(n, le(t))
        }, ft.first = ul, ft.has = function(n, t) {
            return n ? lu.call(n, t) : !1
        }, ft.identity = vf, ft.includes = ls, ft.indexOf = ss, ft.inRange = function(n, t, i) {
            return t = +t || 0, "undefined" == typeof i ? (i = t, t = 0) : i = +i || 0, n >= t && n < i
        }, ft.isArguments = ff, ft.isArray = et, ft.isBoolean = function(n) {
            return !0 === n || !1 === n || u(n) && yu.call(n) == d || !1
        }, ft.isDate = function(n) {
            return u(n) && yu.call(n) == g || !1
        }, ft.isElement = fa, ft.isEmpty = function(n) {
            if (null == n) return !0;
            var t = n.length;
            return cu(t) && (et(n) || fo(n) || ff(n) || u(n) && ee(n.splice)) ? !t : !vu(n).length
        }, ft.isEqual = function(t, i, r, u) {
            return r = typeof r == "function" && ku(r, u, 3), !r && af(t) && af(i) ? t === i : (u = r ? r(t, i) : n, typeof u == "undefined" ? no(t, i, r) : !!u)
        }, ft.isError = ws, ft.isFinite = by, ft.isFunction = ee, ft.isMatch = function(n, t, i, r) {
            var e = vu(t),
                u = e.length;
            if (i = typeof i == "function" && ku(i, r, 3), !i && 1 == u) {
                var f = e[0];
                if (r = t[f], af(r)) return null != n && r === n[f] && lu.call(n, f)
            }
            for (var f = ou(u), o = ou(u); u--;) r = f[u] = t[e[u]], o[u] = af(r);
            return uc(n, e, f, o, i)
        }, ft.isNaN = function(n) {
            return ea(n) && n != +n
        }, ft.isNative = bu, ft.isNull = function(n) {
            return null === n
        }, ft.isNumber = ea, ft.isObject = au, ft.isPlainObject = bo, ft.isRegExp = oa, ft.isString = fo, ft.isTypedArray = ne, ft.isUndefined = function(n) {
            return typeof n == "undefined"
        }, ft.kebabCase = gy, ft.last = fl, ft.lastIndexOf = function(n, t, i) {
            var u = n ? n.length : 0;
            if (!u) return -1;
            var r = u;
            if (typeof i == "number") r = (0 > i ? du(u + i, 0) : tf(i || 0, u - 1)) + 1;
            else if (i) return r = to(n, t, !0) - 1, n = n[r], (t === t ? t === n : n !== n) ? r : -1;
            if (t !== t) return oi(n, r, !0);
            for (; r--;)
                if (n[r] === t) return r;
            return -1
        }, ft.max = ip, ft.min = rp, ft.noConflict = function() {
            return ut._ = fy, this
        }, ft.noop = ba, ft.now = fe, ft.pad = function(n, t, i) {
            n = r(n);
            t = +t;
            var u = n.length;
            return u < t && ue(t) ? (u = (t - u) / 2, t = ie(u), u = ho(u), i = os("", u, i), i.slice(0, t) + n + i) : n
        }, ft.padLeft = function(n, t, i) {
            return (n = r(n)) && os(n, t, i) + n
        }, ft.padRight = function(n, t, i) {
            return (n = r(n)) && n + os(n, t, i)
        }, ft.parseInt = la, ft.random = function(n, t, i) {
            i && si(n, t, i) && (t = i = null);
            var u = null == n,
                r = null == t;
            return null == i && (r && typeof n == "boolean" ? (i = n, n = 1) : typeof t == "boolean" && (i = t, r = !0)), u && r && (t = 1, r = !1), n = +n || 0, r ? (t = n, n = 0) : t = +t || 0, i || n % 1 || t % 1 ? (i = nv(), tf(n + i * (t - n + parseFloat("1e-" + ((i + "").length - 1))), t)) : is(n, t)
        }, ft.reduce = vs, ft.reduceRight = pl, ft.repeat = aa, ft.result = function(t, i, r) {
            return i = null == t ? n : t[i], typeof i == "undefined" && (i = r), ee(i) ? i.call(t) : i
        }, ft.runInContext = at, ft.size = function(n) {
            var t = n ? n.length : 0;
            return cu(t) ? t : vu(n).length
        }, ft.snakeCase = np, ft.some = bl, ft.sortedIndex = function(n, t, i, r) {
            var u = hu(i);
            return u === bf && null == i ? to(n, t) : fs(n, t, u(i, r, 1))
        }, ft.sortedLastIndex = function(n, t, i, r) {
            var u = hu(i);
            return u === bf && null == i ? to(n, t, !0) : fs(n, t, u(i, r, 1), !0)
        }, ft.startCase = tp, ft.startsWith = function(n, t, i) {
            return n = r(n), i = null == i ? 0 : tf(0 > i ? 0 : +i || 0, n.length), n.lastIndexOf(t, i) == i
        }, ft.sum = function(n) {
            et(n) || (n = ae(n));
            for (var t = n.length, i = 0; t--;) i += +n[t] || 0;
            return i
        }, ft.template = function(t, i, u) {
            var o = ft.templateSettings;
            u && si(t, i, u) && (i = u = null);
            t = r(t);
            i = se(se({}, u || i), o, dh);
            u = se(se({}, i.imports), o.imports, dh);
            var s, e, h = vu(u),
                l = us(u, h),
                c = 0;
            u = i.interpolate || st;
            var f = "__p+='";
            u = th((i.escape || st).source + "|" + u.source + "|" + (u === wi ? kr : st).source + "|" + (i.evaluate || st).source + "|$", "g");
            var a = "sourceURL" in i ? "//# sourceURL=" + i.sourceURL + "\n" : "";
            if (t.replace(u, function(n, i, r, u, o, h) {
                    return r || (r = u), f += t.slice(c, h).replace(ru, rr), i && (s = !0, f += "'+__e(" + i + ")+'"), o && (e = !0, f += "';" + o + ";\n__p+='"), r && (f += "'+((__t=(" + r + "))==null?'':__t)+'"), c = h + n.length, n
                }), f += "';", (i = i.variable) || (f = "with(obj){" + f + "}"), f = (e ? f.replace(lr, "") : f).replace(ar, "$1").replace(vr, "$1;"), f = "function(" + (i || "obj") + "){" + (i ? "" : "obj||(obj={});") + "var __t,__p=''" + (s ? ",__e=_.escape" : "") + (e ? ",__j=Array.prototype.join;function print(){__p+=__j.call(arguments,'')}" : ";") + f + "return __p}", i = pa(function() {
                    return gs(h, a + "return " + f).apply(n, l)
                }), i.source = f, ws(i)) throw i;
            return i
        }, ft.trim = va, ft.trimLeft = function(n, t, i) {
            var u = n;
            return (n = r(n)) ? n.slice((i ? si(u, t, i) : null == t) ? hi(n) : fi(n, t + "")) : n
        }, ft.trimRight = function(n, t, i) {
            var u = n;
            return (n = r(n)) ? (i ? si(u, t, i) : null == t) ? n.slice(0, ci(n) + 1) : n.slice(0, ei(n, t + "") + 1) : n
        }, ft.trunc = function(n, t, i) {
            i && si(n, t, i) && (t = null);
            var f = er;
            if (i = or, null != t)
                if (au(t)) {
                    var u = "separator" in t ? t.separator : u,
                        f = "length" in t ? +t.length || 0 : f;
                    i = "omission" in t ? r(t.omission) : i
                } else f = +t || 0;
            if (n = r(n), f >= n.length) return n;
            if (f -= i.length, 1 > f) return i;
            if (t = n.slice(0, f), null == u) return t + i;
            if (oa(u)) {
                if (n.slice(f).search(u)) {
                    var e, o = n.slice(0, f);
                    for (u.global || (u = th(u.source, (bi.exec(u) || "") + "g")), u.lastIndex = 0; n = u.exec(o);) e = n.index;
                    t = t.slice(0, null == e ? f : e)
                }
            } else n.indexOf(u, f) != f && (u = t.lastIndexOf(u), -1 < u && (t = t.slice(0, u)));
            return t + i
        }, ft.unescape = function(n) {
            return (n = r(n)) && yr.test(n) ? n.replace(yi, ur) : n
        }, ft.uniqueId = function(n) {
            var t = ++uy;
            return r(n) + t
        }, ft.words = ya, ft.all = al, ft.any = bl, ft.contains = ls, ft.detect = cs, ft.foldl = vs, ft.foldr = pl, ft.head = ul, ft.include = ls, ft.inject = vs, ds(ft, function() {
            var n = {};
            return sf(ft, function(t, i) {
                ft.prototype[i] || (n[i] = t)
            }), n
        }(), !1), ft.sample = ys, ft.prototype.sample = function(n) {
            return this.__chain__ || null != n ? this.thru(function(t) {
                return ys(t, n)
            }) : ys(this.value())
        }, ft.VERSION = fr, rf("bind bindKey curry curryRight partial partialRight".split(" "), function(n) {
            ft[n].placeholder = ft
        }), rf(["dropWhile", "filter", "map", "takeWhile"], function(n, t) {
            var i = t != vi,
                r = t == ai;
            su.prototype[n] = function(n, u) {
                var e = this.__filtered__,
                    f = e && r ? new su(this) : this.clone();
                return (f.__iteratees__ || (f.__iteratees__ = [])).push({
                    done: !1,
                    count: 0,
                    index: 0,
                    iteratee: hu(n, u, 1),
                    limit: -1,
                    type: t
                }), f.__filtered__ = e || i, f
            }
        }), rf(["drop", "take"], function(n, t) {
            var i = n + "While";
            su.prototype[n] = function(i) {
                var u = this.__filtered__,
                    r = u && !t ? this.dropWhile() : this.clone();
                return i = null == i ? 1 : du(ie(i) || 0, 0), u ? t ? r.__takeCount__ = tf(r.__takeCount__, i) : fl(r.__iteratees__).limit = i : (r.__views__ || (r.__views__ = [])).push({
                    size: i,
                    type: n + (0 > r.__dir__ ? "Right" : "")
                }), r
            };
            su.prototype[n + "Right"] = function(t) {
                return this.reverse()[n](t).reverse()
            };
            su.prototype[n + "RightWhile"] = function(n, t) {
                return this.reverse()[i](n, t).reverse()
            }
        }), rf(["first", "last"], function(n, t) {
            var i = "take" + (t ? "Right" : "");
            su.prototype[n] = function() {
                return this[i](1).value()[0]
            }
        }), rf(["initial", "rest"], function(n, t) {
            var i = "drop" + (t ? "" : "Right");
            su.prototype[n] = function() {
                return this[i](1)
            }
        }), rf(["pluck", "where"], function(n, t) {
            var i = t ? "filter" : "map",
                r = t ? le : kf;
            su.prototype[n] = function(n) {
                return this[i](r(n))
            }
        }), su.prototype.compact = function() {
            return this.filter(vf)
        }, su.prototype.reject = function(n, t) {
            return n = hu(n, t, 1), this.filter(function(t) {
                return !n(t)
            })
        }, su.prototype.slice = function(n, t) {
            n = null == n ? 0 : +n || 0;
            var i = 0 > n ? this.takeRight(-n) : this.drop(n);
            return typeof t != "undefined" && (t = +t || 0, i = 0 > t ? i.dropRight(-t) : i.take(t - n)), i
        }, su.prototype.toArray = function() {
            return this.drop(0)
        }, sf(su.prototype, function(n, t) {
            var i = ft[t],
                u = /^(?:filter|map|reject)|While$/.test(t),
                r = /^(?:first|last)$/.test(t);
            ft.prototype[t] = function() {
                function s(n) {
                    return n = [n], fh.apply(n, e), i.apply(ft, n)
                }
                var e = arguments,
                    h = this.__chain__,
                    t = this.__wrapped__,
                    c = !!this.__actions__.length,
                    f = t instanceof su,
                    l = e[0],
                    o = f || et(t);
                return o && u && typeof l == "function" && 1 != l.length && (f = o = !1), f = f && !c, r && !h ? f ? n.call(t) : i.call(ft, this.value()) : o ? (t = n.apply(f ? t : new su(this), e), r || !c && !t.__actions__ || (t.__actions__ || (t.__actions__ = [])).push({
                    func: ll,
                    args: [s],
                    thisArg: ft
                }), new of (t, h)) : this.thru(s)
            }
        }), rf("concat join pop push replace shift sort splice split unshift".split(" "), function(n) {
            var t = (/^(?:replace|split)$/.test(n) ? iy : ih)[n],
                i = /^(?:push|sort|unshift)$/.test(n) ? "tap" : "thru",
                r = /^(?:join|pop|replace|shift)$/.test(n);
            ft.prototype[n] = function() {
                var n = arguments;
                return r && !this.__chain__ ? t.apply(this.value(), n) : this[i](function(i) {
                    return t.apply(i, n)
                })
            }
        }), su.prototype.clone = function() {
            var t = this.__actions__,
                i = this.__iteratees__,
                r = this.__views__,
                n = new su(this.__wrapped__);
            return n.__actions__ = t ? wu(t) : null, n.__dir__ = this.__dir__, n.__filtered__ = this.__filtered__, n.__iteratees__ = i ? wu(i) : null, n.__takeCount__ = this.__takeCount__, n.__views__ = r ? wu(r) : null, n
        }, su.prototype.reverse = function() {
            if (this.__filtered__) {
                var n = new su(this);
                n.__dir__ = -1;
                n.__filtered__ = !0
            } else n = this.clone(), n.__dir__ *= -1;
            return n
        }, su.prototype.value = function() {
            var s = this.__wrapped__.value();
            if (!et(s)) return cc(s, this.__actions__);
            var t, l = this.__dir__,
                a = 0 > l;
            t = s.length;
            for (var i = this.__views__, r = 0, e = -1, c = i ? i.length : 0; ++e < c;) {
                var o = i[e],
                    u = o.size;
                switch (o.type) {
                    case "drop":
                        r += u;
                        break;
                    case "dropRight":
                        t -= u;
                        break;
                    case "take":
                        t = tf(t, r + u);
                        break;
                    case "takeRight":
                        r = du(r, t - u)
                }
            }
            t = {
                start: r,
                end: t
            };
            i = t.start;
            r = t.end;
            t = r - i;
            i = a ? r : i - 1;
            r = tf(t, this.__takeCount__);
            c = (e = this.__iteratees__) ? e.length : 0;
            o = 0;
            u = [];
            n: for (; t-- && o < r;) {
                for (var i = i + l, v = -1, h = s[i]; ++v < c;) {
                    var n = e[v],
                        y = n.iteratee,
                        f = n.type;
                    if (f == ai) {
                        if (n.done && (a ? i > n.index : i < n.index) && (n.count = 0, n.done = !1), n.index = i, !(n.done || (f = n.limit, n.done = -1 < f ? n.count++ >= f : !y(h)))) continue n
                    } else if (n = y(h), f == vi) h = n;
                    else if (!n) {
                        if (f == cr) continue n;
                        break n
                    }
                }
                u[o++] = h
            }
            return u
        }, ft.prototype.chain = function() {
            return cl(this)
        }, ft.prototype.commit = function() {
            return new of (this.value(), this.__chain__)
        }, ft.prototype.plant = function(n) {
            for (var t, i = this; i instanceof we;) {
                var r = nl(i);
                t ? u.__wrapped__ = r : t = r;
                var u = r,
                    i = i.__wrapped__
            }
            return u.__wrapped__ = n, t
        }, ft.prototype.reverse = function() {
            var n = this.__wrapped__;
            return n instanceof su ? (this.__actions__.length && (n = new su(this)), new of (n.reverse(), this.__chain__)) : this.thru(function(n) {
                return n.reverse()
            })
        }, ft.prototype.toString = function() {
            return this.value() + ""
        }, ft.prototype.run = ft.prototype.toJSON = ft.prototype.valueOf = ft.prototype.value = function() {
            return cc(this.__wrapped__, this.__actions__)
        }, ft.prototype.collect = ft.prototype.map, ft.prototype.head = ft.prototype.first, ft.prototype.select = ft.prototype.filter, ft.prototype.tail = ft.prototype.rest, ft
    }
    var n, fr = "3.5.0",
        f = 1,
        w = 2,
        vt = 4,
        li = 8,
        yt = 16,
        s = 32,
        b = 64,
        a = 128,
        y = 256,
        er = 30,
        or = "...",
        sr = 150,
        hr = 16,
        ai = 0,
        cr = 1,
        vi = 2,
        o = "Expected a function",
        pt = "__lodash_placeholder__",
        p = "[object Arguments]",
        k = "[object Array]",
        d = "[object Boolean]",
        g = "[object Date]",
        ot = "[object Error]",
        nt = "[object Function]",
        tt = "[object Number]",
        e = "[object Object]",
        it = "[object RegExp]",
        rt = "[object String]",
        wt = "[object ArrayBuffer]",
        bt = "[object Float32Array]",
        kt = "[object Float64Array]",
        dt = "[object Int8Array]",
        gt = "[object Int16Array]",
        ni = "[object Int32Array]",
        ti = "[object Uint8Array]",
        ii = "[object Uint8ClampedArray]",
        ri = "[object Uint16Array]",
        ui = "[object Uint32Array]",
        lr = /\b__p\+='';/g,
        ar = /\b(__p\+=)''\+/g,
        vr = /(__e\(.*?\)|\b__t\))\+'';/g,
        yi = /&(?:amp|lt|gt|quot|#39|#96);/g,
        pi = /[&<>"'`]/g,
        yr = RegExp(yi.source),
        pr = RegExp(pi.source),
        wr = /<%-([\s\S]+?)%>/g,
        br = /<%([\s\S]+?)%>/g,
        wi = /<%=([\s\S]+?)%>/g,
        kr = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,
        bi = /\w*$/,
        dr = /^\s*function[ \n\r\t]+\w/,
        gr = /^0[xX]/,
        nu = /^\[object .+?Constructor\]$/,
        tu = /[\xc0-\xd6\xd8-\xde\xdf-\xf6\xf8-\xff]/g,
        st = /($^)/,
        ki = /[.*+?^${}()|[\]\/\\]/g,
        iu = RegExp(ki.source),
        di = /\bthis\b/,
        ru = /['\n\r\u2028\u2029\\]/g,
        uu = RegExp("[A-Z\\xc0-\\xd6\\xd8-\\xde]+(?=[A-Z\\xc0-\\xd6\\xd8-\\xde][a-z\\xdf-\\xf6\\xf8-\\xff]+)|[A-Z\\xc0-\\xd6\\xd8-\\xde]?[a-z\\xdf-\\xf6\\xf8-\\xff]+|[A-Z\\xc0-\\xd6\\xd8-\\xde]+|[0-9]+", "g"),
        fu = " \t\x0b\f ﻿\n\r\u2028\u2029 ᠎             　",
        eu = "Array ArrayBuffer Date Error Float32Array Float64Array Function Int8Array Int16Array Int32Array Math Number Object RegExp Set String _ clearTimeout document isFinite parseInt setTimeout TypeError Uint8Array Uint8ClampedArray Uint16Array Uint32Array WeakMap window WinRTError".split(" "),
        t = {};
    t[bt] = t[kt] = t[dt] = t[gt] = t[ni] = t[ti] = t[ii] = t[ri] = t[ui] = !0;
    t[p] = t[k] = t[wt] = t[d] = t[g] = t[ot] = t[nt] = t["[object Map]"] = t[tt] = t[e] = t[it] = t["[object Set]"] = t[rt] = t["[object WeakMap]"] = !1;
    var i = {};
    i[p] = i[k] = i[wt] = i[d] = i[g] = i[bt] = i[kt] = i[dt] = i[gt] = i[ni] = i[tt] = i[e] = i[it] = i[rt] = i[ti] = i[ii] = i[ri] = i[ui] = !0;
    i[ot] = i[nt] = i["[object Map]"] = i["[object Set]"] = i["[object WeakMap]"] = !1;
    var ht = {
            leading: !1,
            maxWait: 0,
            trailing: !1
        },
        ou = {
            "À": "A",
            "Á": "A",
            "Â": "A",
            "Ã": "A",
            "Ä": "A",
            "Å": "A",
            "à": "a",
            "á": "a",
            "â": "a",
            "ã": "a",
            "ä": "a",
            "å": "a",
            "Ç": "C",
            "ç": "c",
            "Ð": "D",
            "ð": "d",
            "È": "E",
            "É": "E",
            "Ê": "E",
            "Ë": "E",
            "è": "e",
            "é": "e",
            "ê": "e",
            "ë": "e",
            "Ì": "I",
            "Í": "I",
            "Î": "I",
            "Ï": "I",
            "ì": "i",
            "í": "i",
            "î": "i",
            "ï": "i",
            "Ñ": "N",
            "ñ": "n",
            "Ò": "O",
            "Ó": "O",
            "Ô": "O",
            "Õ": "O",
            "Ö": "O",
            "Ø": "O",
            "ò": "o",
            "ó": "o",
            "ô": "o",
            "õ": "o",
            "ö": "o",
            "ø": "o",
            "Ù": "U",
            "Ú": "U",
            "Û": "U",
            "Ü": "U",
            "ù": "u",
            "ú": "u",
            "û": "u",
            "ü": "u",
            "Ý": "Y",
            "ý": "y",
            "ÿ": "y",
            "Æ": "Ae",
            "æ": "ae",
            "Þ": "Th",
            "þ": "th",
            "ß": "ss"
        },
        su = {
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&#39;",
            "`": "&#96;"
        },
        hu = {
            "&amp;": "&",
            "&lt;": "<",
            "&gt;": ">",
            "&quot;": '"',
            "&#39;": "'",
            "&#96;": "`"
        },
        ut = {
            "function": !0,
            object: !0
        },
        cu = {
            "\\": "\\",
            "'": "'",
            "\n": "n",
            "\r": "r",
            "\u2028": "u2028",
            "\u2029": "u2029"
        },
        ft = ut[typeof exports] && exports && !exports.nodeType && exports,
        et = ut[typeof module] && module && !module.nodeType && module,
        ut = ut[typeof window] && window,
        lu = et && et.exports === ft && ft,
        h = ft && et && typeof global == "object" && global || ut !== (this && this.window) && ut || this,
        c = at();
    typeof define == "function" && typeof define.amd == "object" && define.amd ? (h._ = c, define(function() {
        return c
    })) : ft && et ? lu ? (et.exports = c)._ = c : ft._ = c : h._ = c
}).call(this);;
// This is just a sample script. Paste your real code (javascript or HTML) here.

if ('this_is' == /an_example/) {
    of_beautifier();
} else {
    var a = b ? (c % d) : e[f];
}