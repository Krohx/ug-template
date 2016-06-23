(jQuery),
function(t, e) {
    function n(t, e) {
        var n = t.createElement("p"),
            i = t.getElementsByTagName("head")[0] || t.documentElement;
        return n.innerHTML = "x<style>" + e + "</style>", i.insertBefore(n.lastChild, i.firstChild)
    }

    function i() {
        var t = y.elements;
        return "string" == typeof t ? t.split(" ") : t
    }

    function o(t) {
        var e = v[t[m]];
        return e || (e = {}, g++, t[m] = g, v[g] = e), e
    }

    function r(t, n, i) {
        if (n || (n = e), u) return n.createElement(t);
        i || (i = o(n));
        var r;
        return r = i.cache[t] ? i.cache[t].cloneNode() : h.test(t) ? (i.cache[t] = i.createElem(t)).cloneNode() : i.createElem(t), !r.canHaveChildren || p.test(t) || r.tagUrn ? r : i.frag.appendChild(r)
    }

    function a(t, n) {
        if (t || (t = e), u) return t.createDocumentFragment();
        n = n || o(t);
        for (var r = n.frag.cloneNode(),
                a = 0, s = i(), l = s.length; l > a; a++) r.createElement(s[a]);
        return r
    }

    function s(t, e) {
        e.cache || (e.cache = {}, e.createElem = t.createElement, e.createFrag = t.createDocumentFragment, e.frag = e.createFrag()), t.createElement = function(n) {
                return y.shivMethods ? r(n, t, e) : e.createElem(n)
            }, t.createDocumentFragment = Function("h,f", "return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&(" + i().join().replace(/[\w\-]+/g, function(t) {
                return e.createElem(t), e.frag.createElement(t), 'c("' + t + '")'
            }) + ");return n}")
            (y, e.frag)
    }

    function l(t) {
        t || (t = e);
        var i = o(t);
        return !y.shivCSS || c || i.hasCSS || (i.hasCSS = !!n(t, "article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")), u || s(t, i), t
    }
    var c, u, f = "3.7.0",
        d = t.html5 || {},
        p = /^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,
        h = /^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,
        m = "_html5shiv",
        g = 0,
        v = {};
    ! function() {
        try {
            var t = e.createElement("a");
            t.innerHTML = "<xyz></xyz>",
                c = "hidden" in t, u = 1 == t.childNodes.length || function() {
                    e.createElement("a");
                    var t = e.createDocumentFragment();
                    return "undefined" == typeof t.cloneNode || "undefined" == typeof t.createDocumentFragment || "undefined" == typeof t.createElement
                }()
        } catch (n) {
            c = !0, u = !0
        }
    }();
    var y = {
        elements: d.elements || "abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output progress section summary template time video",
        version: f,
        shivCSS: d.shivCSS !== !1,
        supportsUnknownElements: u,
        shivMethods: d.shivMethods !== !1,
        type: "default",
        shivDocument: l,
        createElement: r,
        createDocumentFragment: a
    };
    t.html5 = y, l(e)
}(this, document), eval(function(t, e, n, i, o, r) {
        if (o = function(t) {
                return (e > t ? "" : o(parseInt(t / e))) + ((t %= e) > 35 ? String.fromCharCode(t + 29) : t.toString(36))
            }, !"".replace(/^/, String)) {
            for (; n--;) r[o(n)] = i[n] || o(n);
            i = [function(t) {
                return r[t]
            }], o = function() {
                return "\\w+"
            }, n = 1
        }
        for (; n--;) i[n] && (t = t.replace(new RegExp("\\b" + o(n) + "\\b", "g"), i[n]));
        return t
    }("h.i['1a']=h.i['z'];h.O(h.i,{y:'D',z:9(x,t,b,c,d){6 h.i[h.i.y](x,t,b,c,d)},17:9(x,t,b,c,d){6 c*(t/=d)*t+b},D:9(x,t,b,c,d){6-c*(t/=d)*(t-2)+b},13:9(x,t,b,c,d){e((t/=d/2)<1)6 c/2*t*t+b;6-c/2*((--t)*(t-2)-1)+b},X:9(x,t,b,c,d){6 c*(t/=d)*t*t+b},U:9(x,t,b,c,d){6 c*((t=t/d-1)*t*t+1)+b},R:9(x,t,b,c,d){e((t/=d/2)<1)6 c/2*t*t*t+b;6 c/2*((t-=2)*t*t+2)+b},N:9(x,t,b,c,d){6 c*(t/=d)*t*t*t+b},M:9(x,t,b,c,d){6-c*((t=t/d-1)*t*t*t-1)+b},L:9(x,t,b,c,d){e((t/=d/2)<1)6 c/2*t*t*t*t+b;6-c/2*((t-=2)*t*t*t-2)+b},K:9(x,t,b,c,d){6 c*(t/=d)*t*t*t*t+b},J:9(x,t,b,c,d){6 c*((t=t/d-1)*t*t*t*t+1)+b},I:9(x,t,b,c,d){e((t/=d/2)<1)6 c/2*t*t*t*t*t+b;6 c/2*((t-=2)*t*t*t*t+2)+b},G:9(x,t,b,c,d){6-c*8.C(t/d*(8.g/2))+c+b},15:9(x,t,b,c,d){6 c*8.n(t/d*(8.g/2))+b},12:9(x,t,b,c,d){6-c/2*(8.C(8.g*t/d)-1)+b},Z:9(x,t,b,c,d){6(t==0)?b:c*8.j(2,10*(t/d-1))+b},Y:9(x,t,b,c,d){6(t==d)?b+c:c*(-8.j(2,-10*t/d)+1)+b},W:9(x,t,b,c,d){e(t==0)6 b;e(t==d)6 b+c;e((t/=d/2)<1)6 c/2*8.j(2,10*(t-1))+b;6 c/2*(-8.j(2,-10*--t)+2)+b},V:9(x,t,b,c,d){6-c*(8.o(1-(t/=d)*t)-1)+b},S:9(x,t,b,c,d){6 c*8.o(1-(t=t/d-1)*t)+b},Q:9(x,t,b,c,d){e((t/=d/2)<1)6-c/2*(8.o(1-t*t)-1)+b;6 c/2*(8.o(1-(t-=2)*t)+1)+b},P:9(x,t,b,c,d){f s=1.l;f p=0;f a=c;e(t==0)6 b;e((t/=d)==1)6 b+c;e(!p)p=d*.3;e(a<8.w(c)){a=c;f s=p/4}m f s=p/(2*8.g)*8.r(c/a);6-(a*8.j(2,10*(t-=1))*8.n((t*d-s)*(2*8.g)/p))+b},H:9(x,t,b,c,d){f s=1.l;f p=0;f a=c;e(t==0)6 b;e((t/=d)==1)6 b+c;e(!p)p=d*.3;e(a<8.w(c)){a=c;f s=p/4}m f s=p/(2*8.g)*8.r(c/a);6 a*8.j(2,-10*t)*8.n((t*d-s)*(2*8.g)/p)+c+b},T:9(x,t,b,c,d){f s=1.l;f p=0;f a=c;e(t==0)6 b;e((t/=d/2)==2)6 b+c;e(!p)p=d*(.3*1.5);e(a<8.w(c)){a=c;f s=p/4}m f s=p/(2*8.g)*8.r(c/a);e(t<1)6-.5*(a*8.j(2,10*(t-=1))*8.n((t*d-s)*(2*8.g)/p))+b;6 a*8.j(2,-10*(t-=1))*8.n((t*d-s)*(2*8.g)/p)*.5+c+b},F:9(x,t,b,c,d,s){e(s==u)s=1.l;6 c*(t/=d)*t*((s+1)*t-s)+b},E:9(x,t,b,c,d,s){e(s==u)s=1.l;6 c*((t=t/d-1)*t*((s+1)*t+s)+1)+b},16:9(x,t,b,c,d,s){e(s==u)s=1.l;e((t/=d/2)<1)6 c/2*(t*t*(((s*=(1.B))+1)*t-s))+b;6 c/2*((t-=2)*t*(((s*=(1.B))+1)*t+s)+2)+b},A:9(x,t,b,c,d){6 c-h.i.v(x,d-t,0,c,d)+b},v:9(x,t,b,c,d){e((t/=d)<(1/2.k)){6 c*(7.q*t*t)+b}m e(t<(2/2.k)){6 c*(7.q*(t-=(1.5/2.k))*t+.k)+b}m e(t<(2.5/2.k)){6 c*(7.q*(t-=(2.14/2.k))*t+.11)+b}m{6 c*(7.q*(t-=(2.18/2.k))*t+.19)+b}},1b:9(x,t,b,c,d){e(t<d/2)6 h.i.A(x,t*2,0,c,d)*.5+b;6 h.i.v(x,t*2-d,0,c,d)*.5+c*.5+b}});", 62, 74, "||||||return||Math|function|||||if|var|PI|jQuery|easing|pow|75|70158|else|sin|sqrt||5625|asin|||undefined|easeOutBounce|abs||def|swing|easeInBounce|525|cos|easeOutQuad|easeOutBack|easeInBack|easeInSine|easeOutElastic|easeInOutQuint|easeOutQuint|easeInQuint|easeInOutQuart|easeOutQuart|easeInQuart|extend|easeInElastic|easeInOutCirc|easeInOutCubic|easeOutCirc|easeInOutElastic|easeOutCubic|easeInCirc|easeInOutExpo|easeInCubic|easeOutExpo|easeInExpo||9375|easeInOutSine|easeInOutQuad|25|easeOutSine|easeInOutBack|easeInQuad|625|984375|jswing|easeInOutBounce".split("|"), 0, {})),
    function(t) {
        function e(e, n, i, o) {
            var r = e.text().split(n),
                a = "";
            r.length && (t(r).each(function(t, e) {
                a += '<span class="' + i + (t + 1) + '">' + e + "</span>" + o
            }), e.empty().append(a))
        }
        var n = {
            init: function() {
                return this.each(function() {
                    e(t(this), "", "char", "")
                })
            },
            words: function() {
                return this.each(function() {
                    e(t(this), " ", "word", " ")
                })
            },
            lines: function() {
                return this.each(function() {
                    var n = "eefec303079ad17405c889e092e105b0";
                    e(t(this).children("br").replaceWith(n).end(), n, "line", "")
                })
            }
        };
        t.fn.lettering = function(e) {
            return e && n[e] ? n[e].apply(this, [].slice.call(arguments, 1)) : "letters" !== e && e ? (t.error("Method " + e + " does not exist on jQuery.lettering"), this) : n.init.apply(this, [].slice.call(arguments, 0))
        }
    }(jQuery),
    function(t) {
        "use strict";

        function e(e) {
            return /In/.test(e) || t.inArray(e, t.fn.textillate.defaults.inEffects) >= 0
        }

        function n(e) {
            return /Out/.test(e) || t.inArray(e, t.fn.textillate.defaults.outEffects) >= 0
        }

        function i(t) {
            return "true" !== t && "false" !== t ? t : "true" === t
        }

        function o(e) {
            var n = e.attributes || [],
                o = {};
            return n.length ? (t.each(n, function(t, e) {
                var n = e.nodeName.replace(/delayscale/, "delayScale");
                /^data-in-*/.test(n) ? (o["in"] = o["in"] || {}, o["in"][n.replace(/data-in-/, "")] = i(e.nodeValue)) : /^data-out-*/.test(n) ? (o.out = o.out || {}, o.out[n.replace(/data-out-/, "")] = i(e.nodeValue)) : /^data-*/.test(n) && (o[n.replace(/data-/, "")] = i(e.nodeValue))
            }), o) : o
        }

        function r(t) {
            for (var e, n, i = t.length; i; e = parseInt(Math.random() * i), n = t[--i], t[i] = t[e], t[e] = n);
            return t
        }

        function a(t, e, n) {
            t.addClass("animated " + e).css("visibility", "visible").show(),
                t.one("animationend webkitAnimationEnd oAnimationEnd", function() {
                    t.removeClass("animated " + e), n && n()
                })
        }

        function s(i, o, s) {
            var l = i.length;
            return l ? (o.shuffle && (i = r(i)), o.reverse && (i = i.toArray().reverse()), void t.each(i, function(i, r) {
                function c() {
                    e(o.effect) ? u.css("visibility", "visible") : n(o.effect) && u.css("visibility", "hidden"),
                        l -= 1, !l && s && s()
                }
                var u = t(r),
                    f = o.sync ? o.delay : o.delay * i * o.delayScale;
                u.text() ? setTimeout(function() {
                    a(u, o.effect, c)
                }, f) : c()
            })) : void(s && s())
        }
        var l = function(i, r) {
            var a = this,
                l = t(i);
            a.init = function() {
                a.$texts = l.find(r.selector), a.$texts.length || (a.$texts = t('<ul class="texts"><li>' + l.html() + "</li></ul>"), l.html(a.$texts)), a.$texts.hide(), a.$current = t("<span>").html(a.$texts.find(":first-child").html()).prependTo(l), e(r["in"].effect) ? a.$current.css("visibility", "hidden") : n(r.out.effect) && a.$current.css("visibility", "visible"), a.setOptions(r), a.timeoutRun = null,
                    setTimeout(function() {
                        a.options.autoStart && a.start()
                    }, a.options.initialDelay)
            }, a.setOptions = function(t) {
                a.options = t
            }, a.triggerEvent = function(e) {
                var n = t.Event(e + ".tlt");
                return l.trigger(n, a),
                    n
            }, a["in"] = function(i, r) {
                i = i || 0;
                var l, c = a.$texts.find(":nth-child(" + ((i || 0) + 1) + ")"),
                    u = t.extend(!0, {}, a.options, c.length ? o(c[0]) : {});
                c.addClass("current"), a.triggerEvent("inAnimationBegin"), a.$current.html(c.html()).lettering("words"), "char" == a.options.type && a.$current.find('[class^="word"]').css({
                    display: "inline-block",
                    "-webkit-transform": "translate3d(0,0,0)",
                    "-moz-transform": "translate3d(0,0,0)",
                    "-o-transform": "translate3d(0,0,0)",
                    transform: "translate3d(0,0,0)"
                }).each(function() {
                    t(this).lettering()
                }), l = a.$current.find('[class^="' + a.options.type + '"]').css("display", "inline-block"), e(u["in"].effect) ? l.css("visibility", "hidden") : n(u["in"].effect) && l.css("visibility", "visible"), a.currentIndex = i, s(l, u["in"], function() {
                    a.triggerEvent("inAnimationEnd"),
                        u["in"].callback && u["in"].callback(),
                        r && r(a)
                })
            }, a.out = function(e) {
                var n = a.$texts.find(":nth-child(" + ((a.currentIndex || 0) + 1) + ")"),
                    i = a.$current.find('[class^="' + a.options.type + '"]'),
                    r = t.extend(!0, {}, a.options, n.length ? o(n[0]) : {});
                a.triggerEvent("outAnimationBegin"), s(i, r.out, function() {
                    n.removeClass("current"),
                        a.triggerEvent("outAnimationEnd"),
                        r.out.callback && r.out.callback(),
                        e && e(a)
                })
            }, a.start = function(t) {
                setTimeout(function() {
                    a.triggerEvent("start"),
                        function e(t) {
                            a["in"]
                                (t, function() {
                                    var n = a.$texts.children().length;
                                    t += 1, !a.options.loop && t >= n ? (a.options.callback && a.options.callback(), a.triggerEvent("end")) : (t %= n, a.timeoutRun = setTimeout(function() {
                                        a.out(function() {
                                            e(t)
                                        })
                                    }, a.options.minDisplayTime))
                                })
                        }
                        (t || 0)
                }, a.options.initialDelay)
            }, a.stop = function() {
                a.timeoutRun && (clearInterval(a.timeoutRun), a.timeoutRun = null)
            }, a.init()
        };
        t.fn.textillate = function(e, n) {
            return this.each(function() {
                var i = t(this),
                    r = i.data("textillate"),
                    a = t.extend(!0, {}, t.fn.textillate.defaults, o(this), "object" == typeof e && e);
                r ? "string" == typeof e ? r[e].apply(r, [].concat(n)) : r.setOptions.call(r, a) : i.data("textillate", r = new l(this, a))
            })
        }, t.fn.textillate.defaults = {
            selector: ".texts",
            loop: !1,
            minDisplayTime: 2e3,
            initialDelay: 0,
            "in": {
                effect: "fadeInLeftBig",
                delayScale: 1.5,
                delay: 50,
                sync: !1,
                reverse: !1,
                shuffle: !1,
                callback: function() {}
            },
            out: {
                effect: "hinge",
                delayScale: 1.5,
                delay: 50,
                sync: !1,
                reverse: !1,
                shuffle: !1,
                callback: function() {}
            },
            autoStart: !0,
            inEffects: [],
            outEffects: ["hinge"],
            callback: function() {},
            type: "char"
        }
    }(jQuery), window.Modernizr = function(t, e, n) {
        function i(t) {
            b.cssText = t
        }

        function o(t, e) {
            return i(C.join(t + ";") + (e || ""))
        }

        function r(t, e) {
            return typeof t === e
        }

        function a(t, e) {
            return !!~("" + t).indexOf(e)
        }

        function s(t, e) {
            for (var i in t) {
                var o = t[i];
                if (!a(o, "-") && b[o] !== n) return "pfx" == e ? o : !0
            }
            return !1
        }

        function l(t, e, i) {
            for (var o in t) {
                var a = e[t[o]];
                if (a !== n) return i === !1 ? t[o] : r(a, "function") ? a.bind(i || e) : a
            }
            return !1
        }

        function c(t, e, n) {
            var i = t.charAt(0).toUpperCase() + t.slice(1),
                o = (t + " " + E.join(i + " ") + i).split(" ");
            return r(e, "string") || r(e, "undefined") ? s(o, e) : (o = (t + " " + k.join(i + " ") + i).split(" "), l(o, e, n))
        }

        function u() {
            h.input = function(n) {
                for (var i = 0, o = n.length; o > i; i++) j[n[i]] = !!(n[i] in w);
                return j.list && (j.list = !(!e.createElement("datalist") || !t.HTMLDataListElement)), j
            }("autocomplete autofocus list placeholder max min multiple pattern required step".split(" ")), h.inputtypes = function(t) {
                for (var i, o, r, a = 0, s = t.length; s > a; a++) w.setAttribute("type", o = t[a]), i = "text" !== w.type,
                    i && (w.value = x, w.style.cssText = "position:absolute;visibility:hidden;", /^range$/.test(o) && w.style.WebkitAppearance !== n ? (g.appendChild(w), r = e.defaultView, i = r.getComputedStyle && "textfield" !== r.getComputedStyle(w, null).WebkitAppearance && 0 !== w.offsetHeight, g.removeChild(w)) : /^(search|tel)$/.test(o) || (i = /^(url|email)$/.test(o) ? w.checkValidity && w.checkValidity() === !1 : w.value != x)), A[t[a]] = !!i;
                return A
            }("search tel url email datetime date month week time datetime-local number range color".split(" "))
        }
        var f, d, p = "2.6.2",
            h = {},
            m = !0,
            g = e.documentElement,
            v = "modernizr",
            y = e.createElement(v),
            b = y.style,
            w = e.createElement("input"),
            x = ":)",
            $ = {}.toString,
            C = " -webkit- -moz- -o- -ms- ".split(" "),
            T = "Webkit Moz O ms",
            E = T.split(" "),
            k = T.toLowerCase().split(" "),
            S = {
                svg: "http://www.w3.org/2000/svg"
            },
            D = {},
            A = {},
            j = {},
            F = [],
            I = F.slice,
            P = function(t, n, i, o) {
                var r, a, s, l, c = e.createElement("div"),
                    u = e.body,
                    f = u || e.createElement("body");
                if (parseInt(i, 10))
                    for (; i--;) s = e.createElement("div"), s.id = o ? o[i] : v + (i + 1), c.appendChild(s);
                return r = ["&#173;", '<style id="s',
                        v, '">', t, "</style>"
                    ].join(""), c.id = v, (u ? c : f).innerHTML += r, f.appendChild(c),
                    u || (f.style.background = "", f.style.overflow = "hidden", l = g.style.overflow, g.style.overflow = "hidden", g.appendChild(f)), a = n(c, t), u ? c.parentNode.removeChild(c) : (f.parentNode.removeChild(f), g.style.overflow = l), !!a
            },
            O = function(e) {
                var n = t.matchMedia || t.msMatchMedia;
                if (n) return n(e).matches;
                var i;
                return P("@media " + e + " { #" + v + " { position: absolute; } }", function(e) {
                    i = "absolute" == (t.getComputedStyle ? getComputedStyle(e, null) : e.currentStyle).position
                }), i
            },
            _ = function() {
                function t(t, o) {
                    o = o || e.createElement(i[t] || "div"), t = "on" + t;
                    var a = t in o;
                    return a || (o.setAttribute || (o = e.createElement("div")), o.setAttribute && o.removeAttribute && (o.setAttribute(t, ""), a = r(o[t], "function"), r(o[t], "undefined") || (o[t] = n), o.removeAttribute(t))), o = null, a
                }
                var i = {
                    select: "input",
                    change: "input",
                    submit: "form",
                    reset: "form",
                    error: "img",
                    load: "img",
                    abort: "img"
                };
                return t
            }(),
            L = {}.hasOwnProperty;
        d = r(L, "undefined") || r(L.call, "undefined") ? function(t, e) {
            return e in t && r(t.constructor.prototype[e], "undefined")
        } : function(t, e) {
            return L.call(t, e)
        }, Function.prototype.bind || (Function.prototype.bind = function(t) {
            var e = this;
            if ("function" != typeof e) throw new TypeError;
            var n = I.call(arguments, 1),
                i = function() {
                    if (this instanceof i) {
                        var o = function() {};
                        o.prototype = e.prototype;
                        var r = new o,
                            a = e.apply(r, n.concat(I.call(arguments)));
                        return
                        Object(a) === a ? a : r
                    }
                    return e.apply(t, n.concat(I.call(arguments)))
                };
            return i
        }), D.flexbox = function() {
            return c("flexWrap")
        }, D.flexboxlegacy = function() {
            return c("boxDirection")
        }, D.canvas = function() {
            var t = e.createElement("canvas");
            return !(!t.getContext || !t.getContext("2d"))
        }, D.canvastext = function() {
            return !(!h.canvas || !r(e.createElement("canvas").getContext("2d").fillText, "function"))
        }, D.webgl = function() {
            return !!t.WebGLRenderingContext
        }, D.touch = function() {
            var n;
            return "ontouchstart" in t || t.DocumentTouch && e instanceof DocumentTouch ? n = !0 : P(["@media (",
                C.join("touch-enabled),("), v, ")", "{#modernizr{top:9px;position:absolute}}"
            ].join(""), function(t) {
                n = 9 === t.offsetTop
            }), n
        }, D.geolocation = function() {
            return "geolocation" in navigator
        }, D.postmessage = function() {
            return !!t.postMessage
        }, D.websqldatabase = function() {
            return !!t.openDatabase
        }, D.indexedDB = function() {
            return !!c("indexedDB", t)
        }, D.hashchange = function() {
            return _("hashchange", t) && (e.documentMode === n || e.documentMode > 7)
        }, D.history = function() {
            return !(!t.history || !history.pushState)
        }, D.draganddrop = function() {
            var t = e.createElement("div");
            return "draggable" in t || "ondragstart" in t && "ondrop" in t
        }, D.websockets = function() {
            return "WebSocket" in t || "MozWebSocket" in t
        }, D.rgba = function() {
            return i("background-color:rgba(150,255,150,.5)"), a(b.backgroundColor, "rgba")
        }, D.hsla = function() {
            return i("background-color:hsla(120,40%,100%,.5)"), a(b.backgroundColor, "rgba") || a(b.backgroundColor, "hsla")
        }, D.multiplebgs = function() {
            return i("background:url(https://),url(https://),red url(https://)"), /(url\s*\(.*?){3}/.test(b.background)
        }, D.backgroundsize = function() {
            return c("backgroundSize")
        }, D.borderimage = function() {
            return c("borderImage")
        }, D.borderradius = function() {
            return c("borderRadius")
        }, D.boxshadow = function() {
            return c("boxShadow")
        }, D.textshadow = function() {
            return "" === e.createElement("div").style.textShadow
        }, D.opacity = function() {
            return o("opacity:.55"), /^0.55$/.test(b.opacity)
        }, D.cssanimations = function() {
            return c("animationName")
        }, D.csscolumns = function() {
            return c("columnCount")
        }, D.cssgradients = function() {
            var t = "background-image:",
                e = "gradient(linear,left top,right bottom,from(#9f9),to(white));",
                n = "linear-gradient(left top,#9f9, white);";
            return i((t + "-webkit- ".split(" ").join(e + t) + C.join(n + t)).slice(0, -t.length)), a(b.backgroundImage, "gradient")
        }, D.cssreflections = function() {
            return c("boxReflect")
        }, D.csstransforms = function() {
            return !!c("transform")
        }, D.csstransforms3d = function() {
            var t = !!c("perspective");
            return t && "webkitPerspective" in g.style && P("@media (transform-3d),(-webkit-transform-3d){#modernizr{left:9px;position:absolute;height:3px;}}", function(e) {
                t = 9 === e.offsetLeft && 3 === e.offsetHeight
            }), t
        }, D.csstransitions = function() {
            return c("transition")
        }, D.fontface = function() {
            var t;
            return P('@font-face {font-family:"font";src:url("https://")}', function(n, i) {
                var o = e.getElementById("smodernizr"),
                    r = o.sheet || o.styleSheet,
                    a = r ? r.cssRules && r.cssRules[0] ? r.cssRules[0].cssText : r.cssText || "" : "";
                t = /src/i.test(a) && 0 === a.indexOf(i.split(" ")[0])
            }), t
        }, D.generatedcontent = function() {
            var t;
            return P(["#", v, "{font:0/0 a}#",
                v, ':after{content:"',
                x, '";visibility:hidden;font:3px/1 a}'
            ].join(""), function(e) {
                t = e.offsetHeight >= 3
            }), t
        }, D.video = function() {
            var t = e.createElement("video"),
                n = !1;
            try {
                (n = !!t.canPlayType) && (n = new Boolean(n), n.ogg = t.canPlayType('video/ogg; codecs="theora"').replace(/^no$/, ""), n.h264 = t.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/, ""), n.webm = t.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/, ""))
            } catch (i) {}
            return n
        }, D.audio = function() {
            var t = e.createElement("audio"),
                n = !1;
            try {
                (n = !!t.canPlayType) && (n = new Boolean(n), n.ogg = t.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, ""), n.mp3 = t.canPlayType("audio/mpeg;").replace(/^no$/, ""), n.wav = t.canPlayType('audio/wav; codecs="1"').replace(/^no$/, ""), n.m4a = (t.canPlayType("audio/x-m4a;") || t.canPlayType("audio/aac;")).replace(/^no$/, ""))
            } catch (i) {}
            return n
        }, D.localstorage = function() {
            try {
                return localStorage.setItem(v, v),
                    localStorage.removeItem(v), !0
            } catch (t) {
                return !1
            }
        }, D.sessionstorage = function() {
            try {
                return
                sessionStorage.setItem(v, v),
                    sessionStorage.removeItem(v), !0
            } catch (t) {
                return !1
            }
        }, D.webworkers = function() {
            return !!t.Worker
        }, D.applicationcache = function() {
            return !!t.applicationCache
        }, D.svg = function() {
            return !!e.createElementNS && !!e.createElementNS(S.svg, "svg").createSVGRect
        }, D.inlinesvg = function() {
            var t = e.createElement("div");
            return t.innerHTML = "<svg/>", (t.firstChild && t.firstChild.namespaceURI) == S.svg
        }, D.smil = function() {
            return !!e.createElementNS && /SVGAnimate/.test($.call(e.createElementNS(S.svg, "animate")))
        }, D.svgclippaths = function() {
            return !!e.createElementNS && /SVGClipPath/.test($.call(e.createElementNS(S.svg, "clipPath")))
        };
        for (var M in D) d(D, M) && (f = M.toLowerCase(), h[f] = D[M](), F.push((h[f] ? "" : "no-") + f));
        return h.input || u(), h.addTest = function(t, e) {
                if ("object" == typeof t)
                    for (var i in t) d(t, i) && h.addTest(i, t[i]);
                else {
                    if (t = t.toLowerCase(), h[t] !== n) return h;
                    e = "function" == typeof e ? e() : e, "undefined" != typeof m && m && (g.className += " " + (e ? "" : "no-") + t), h[t] = e
                }
                return h
            }, i(""), y = w = null,
            function(t, e) {
                function n(t, e) {
                    var n = t.createElement("p"),
                        i = t.getElementsByTagName("head")[0] || t.documentElement;
                    return n.innerHTML = "x<style>" + e + "</style>", i.insertBefore(n.lastChild, i.firstChild)
                }

                function i() {
                    var t = v.elements;
                    return "string" == typeof t ? t.split(" ") : t
                }

                function o(t) {
                    var e = g[t[h]];
                    return e || (e = {}, m++, t[h] = m, g[m] = e), e
                }

                function r(t, n, i) {
                    if (n || (n = e), u) return n.createElement(t);
                    i || (i = o(n));
                    var r;
                    return r = i.cache[t] ? i.cache[t].cloneNode() : p.test(t) ? (i.cache[t] = i.createElem(t)).cloneNode() : i.createElem(t),
                        r.canHaveChildren && !d.test(t) ? i.frag.appendChild(r) : r
                }

                function a(t, n) {
                    if (t || (t = e), u) return t.createDocumentFragment();
                    n = n || o(t);
                    for (var r = n.frag.cloneNode(),
                            a = 0, s = i(), l = s.length; l > a; a++) r.createElement(s[a]);
                    return r
                }

                function s(t, e) {
                    e.cache || (e.cache = {}, e.createElem = t.createElement, e.createFrag = t.createDocumentFragment, e.frag = e.createFrag()), t.createElement = function(n) {
                        return v.shivMethods ? r(n, t, e) : e.createElem(n)
                    }, t.createDocumentFragment = Function("h,f", "return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&(" + i().join().replace(/\w+/g, function(t) {
                        return
                        e.createElem(t),
                            e.frag.createElement(t), 'c("' + t + '")'
                    }) + ");return n}")(v, e.frag)
                }

                function l(t) {
                    t || (t = e);
                    var i = o(t);
                    return !v.shivCSS || c || i.hasCSS || (i.hasCSS = !!n(t, "article,aside,figcaption,figure,footer,header,hgroup,nav,section{display:block}mark{background:#FF0;color:#000}")), u || s(t, i),
                        t
                }
                var c, u, f = t.html5 || {},
                    d = /^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,
                    p = /^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,
                    h = "_html5shiv",
                    m = 0,
                    g = {};
                ! function() {
                    try {
                        var t = e.createElement("a");
                        t.innerHTML = "<xyz></xyz>",
                            c = "hidden" in t, u = 1 == t.childNodes.length || function() {
                                e.createElement("a");
                                var t = e.createDocumentFragment();
                                return "undefined" == typeof t.cloneNode || "undefined" == typeof t.createDocumentFragment || "undefined" == typeof t.createElement
                            }()
                    } catch (n) {
                        c = !0, u = !0
                    }
                }();
                var v = {
                    elements: f.elements || "abbr article aside audio bdi canvas data datalist details figcaption figure footer header hgroup mark meter nav output progress section summary time video",
                    shivCSS: f.shivCSS !== !1,
                    supportsUnknownElements: u,
                    shivMethods: f.shivMethods !== !1,
                    type: "default",
                    shivDocument: l,
                    createElement: r,
                    createDocumentFragment: a
                };
                t.html5 = v, l(e)
            }(this, e), h._version = p,
            h._prefixes = C, h._domPrefixes = k, h._cssomPrefixes = E, h.mq = O, h.hasEvent = _, h.testProp = function(t) {
                return s([t])
            }, h.testAllProps = c, h.testStyles = P, h.prefixed = function(t, e, n) {
                return e ? c(t, e, n) : c(t, "pfx")
            }, g.className = g.className.replace(/(^|\s)no-js(\s|$)/, "$1$2") + (m ? " js " + F.join(" ") : ""), h
    }(this, this.document),
    function(t) {
        "use strict";

        function e() {
            w(!0)
        }
        var n = {};
        t.respond = n, n.update = function() {};
        var i = [],
            o = function() {
                var e = !1;
                try {
                    e = new t.XMLHttpRequest
                } catch (n) {
                    e = new t.ActiveXObject("Microsoft.XMLHTTP")
                }
                return function() {
                    return e
                }
            }(),
            r = function(t, e) {
                var n = o();
                n && (n.open("GET", t, !0), n.onreadystatechange = function() {
                    4 !== n.readyState || 200 !== n.status && 304 !== n.status || e(n.responseText)
                }, 4 !== n.readyState && n.send(null))
            };
        if (n.ajax = r, n.queue = i, n.regex = {
                media: /@media[^\{]+\{([^\{\}]*\{[^\}\{]*\})+/gi,
                keyframes: /@.*keyframes[^\{]+\{(?:[^\{\}]*\{[^\}\{]*\})+[^\}]+\}/gi,
                urls: /(url\()['"]?([^\/\)'"][^:\)'"]+)['"]?(\))/g,
                findStyles: /@media *([^\{]+)\{([\S\s]+?)$/,
                only: /(only\s+)?([a-zA-Z]+)\s?/,
                minw: /\([\s]*min\-width\s*:[\s]*([\s]*[0-9\.]+)(px|em)[\s]*\)/,
                maxw: /\([\s]*max\-width\s*:[\s]*([\s]*[0-9\.]+)(px|em)[\s]*\)/
            }, n.mediaQueriesSupported = t.matchMedia && null !== t.matchMedia("only all") && t.matchMedia("only all").matches, !n.mediaQueriesSupported) {
            var a, s, l, c = t.document,
                u = c.documentElement,
                f = [],
                d = [],
                p = [],
                h = {},
                m = 30,
                g = c.getElementsByTagName("head")[0] || u,
                v = c.getElementsByTagName("base")[0],
                y = g.getElementsByTagName("link"),
                b = function() {
                    var t, e = c.createElement("div"),
                        n = c.body,
                        i = u.style.fontSize,
                        o = n && n.style.fontSize,
                        r = !1;
                    return e.style.cssText = "position:absolute;font-size:1em;width:1em",
                        n || (n = r = c.createElement("body"), n.style.background = "none"), u.style.fontSize = "100%", n.style.fontSize = "100%", n.appendChild(e), u.insertBefore(n, u.firstChild), t = e.offsetWidth,
                        r ? u.removeChild(n) : n.removeChild(e), u.style.fontSize = i,
                        o && (n.style.fontSize = o), t = l = parseFloat(t)
                },
                w = function(e) {
                    var n = "clientWidth",
                        i = u[n],
                        o = "CSS1Compat" === c.compatMode && i || c.body[n] || i,
                        r = {},
                        h = y[y.length - 1],
                        v = (new Date).getTime();
                    if (e && a && m > v - a) return t.clearTimeout(s),
                        void(s = t.setTimeout(w, m));
                    a = v;
                    for (var x in f)
                        if (f.hasOwnProperty(x)) {
                            var $ = f[x],
                                C = $.minw,
                                T = $.maxw,
                                E = null === C,
                                k = null === T,
                                S = "em";
                            C && (C = parseFloat(C) * (C.indexOf(S) > -1 ? l || b() : 1)),
                                T && (T = parseFloat(T) * (T.indexOf(S) > -1 ? l || b() : 1)),
                                $.hasquery && (E && k || !(E || o >= C) || !(k || T >= o)) || (r[$.media] || (r[$.media] = []), r[$.media].push(d[$.rules]))
                        }
                    for (var D in p) p.hasOwnProperty(D) && p[D] && p[D].parentNode === g && g.removeChild(p[D]);
                    for (var A in r)
                        if (r.hasOwnProperty(A)) {
                            var j = c.createElement("style"),
                                F = r[A].join("\n");
                            j.type = "text/css",
                                j.media = A, g.insertBefore(j, h.nextSibling), j.styleSheet ? j.styleSheet.cssText = F : j.appendChild(c.createTextNode(F)),
                                p.push(j)
                        }
                },
                x = function(t, e, i) {
                    var o = t.replace(n.regex.keyframes, "").match(n.regex.media),
                        r = o && o.length || 0;
                    e = e.substring(0, e.lastIndexOf("/"));
                    var a = function(t) {
                            return t.replace(n.regex.urls, "$1" + e + "$2$3")
                        },
                        s = !r && i;
                    e.length && (e += "/"), s && (r = 1);
                    for (var l = 0; r > l; l++) {
                        var c, u, p, h;
                        s ? (c = i, d.push(a(t))) : (c = o[l].match(n.regex.findStyles) && RegExp.$1, d.push(RegExp.$2 && a(RegExp.$2))),
                            p = c.split(","), h = p.length;
                        for (var m = 0; h > m; m++) u = p[m], f.push({
                            media: u.split("(")[0].match(n.regex.only) && RegExp.$2 || "all",
                            rules: d.length - 1,
                            hasquery: u.indexOf("(") > -1,
                            minw: u.match(n.regex.minw) && parseFloat(RegExp.$1) + (RegExp.$2 || ""),
                            maxw: u.match(n.regex.maxw) && parseFloat(RegExp.$1) + (RegExp.$2 || "")
                        })
                    }
                    w()
                },
                $ = function() {
                    if (i.length) {
                        var e = i.shift();
                        r(e.href, function(n) {
                            x(n, e.href, e.media),
                                h[e.href] = !0,
                                t.setTimeout(function() {
                                    $()
                                }, 0)
                        })
                    }
                },
                C = function() {
                    for (var e = 0; e < y.length; e++) {
                        var n = y[e],
                            o = n.href,
                            r = n.media,
                            a = n.rel && "stylesheet" === n.rel.toLowerCase();
                        o && a && !h[o] && (n.styleSheet && n.styleSheet.rawCssText ? (x(n.styleSheet.rawCssText, o, r), h[o] = !0) : (!/^([a-zA-Z:]*\/\/)/.test(o) && !v || o.replace(RegExp.$1, "").split("/")[0] === t.location.host) && ("//" === o.substring(0, 2) && (o = t.location.protocol + o), i.push({
                            href: o,
                            media: r
                        })))
                    }
                    $()
                };
            C(), n.update = C, n.getEmValue = b, t.addEventListener ? t.addEventListener("resize", e, !1) : t.attachEvent && t.attachEvent("onresize", e)
        }
    }(this),
    function() {
        function t(t) {
            this.path = t;
            var e = this.path.split("."),
                n = e.slice(0, e.length - 1).join("."),
                i = e[e.length - 1];
            this.at_2x_path = n + "@2x." + i
        }

        function e(e) {
            this.el = e, this.path = new t(this.el.getAttribute("src"));
            var n = this;
            this.path.check_2x_variant(function(t) {
                t && n.swap()
            })
        }
        var n = "undefined" == typeof exports ? window : exports;
        n.RetinaImagePath = t, t.confirmed_paths = [],
            t.prototype.is_external = function() {
                return !!this.path.match(/^https?\:/i) && !this.path.match("//" + document.domain)
            }, t.prototype.check_2x_variant = function(e) {
                var n, i = this;
                return this.is_external() ? e(!1) : this.at_2x_path in t.confirmed_paths ? e(!0) : (n = new XMLHttpRequest, n.open("HEAD", this.at_2x_path), n.onreadystatechange = function() {
                    return 4 != n.readyState ? e(!1) : n.status >= 200 && n.status <= 399 ? (t.confirmed_paths.push(i.at_2x_path), e(!0)) : e(!1)
                }, n.send(), void 0)
            }, n.RetinaImage = e, e.prototype.swap = function(t) {
                function e() {
                    n.el.complete ? (n.el.setAttribute("width", n.el.offsetWidth), n.el.setAttribute("height", n.el.offsetHeight), n.el.setAttribute("src", t)) : setTimeout(e, 5)
                }
                "undefined" == typeof t && (t = this.path.at_2x_path);
                var n = this;
                e()
            }, n.devicePixelRatio > 1 && (window.onload = function() {
                var t, n, i = document.getElementsByTagName("img"),
                    o = [];
                for (t = 0; t < i.length; t++) n = i[t], o.push(new e(n))
            })
    }(),
    function(t, e, n) {
        "use strict";

        function i(n) {
            if (o = e.documentElement, r = e.body, q(), ae = this, n = n || {}, fe = n.constants || {}, n.easing)
                for (var i in n.easing) V[i] = n.easing[i];
            ye = n.edgeStrategy || "set", ce = {
                    beforerender: n.beforerender,
                    render: n.render
                }, ue = n.forceHeight !== !1, ue && (Pe = n.scale || 1), de = n.mobileDeceleration || T, he = n.smoothScrolling !== !1, me = n.smoothScrollingDuration || E, ge = {
                    targetTop: ae.getScrollTop()
                }, ze = (n.mobileCheck || function() {
                    return /Android|iPhone|iPad|iPod|BlackBerry|Windows Phone/i.test(navigator.userAgent || navigator.vendor || t.opera)
                })(), ze ? (le = e.getElementById("skrollr-body"), le && re(), X(), Se(o, [y, x], [b])) : Se(o, [y, w], [b]),
                ae.refresh(), xe(t, "resize orientationchange", function() {
                    var t = o.clientWidth,
                        e = o.clientHeight;
                    (e !== Ne || t !== Me) && (Ne = e, Me = t, He = !0)
                });
            var a = Q();
            return function s() {
                Z(), we = a(s)
            }(), ae
        }
        var o, r, a = t.skrollr = {
                get: function() {
                    return ae
                },
                init: function(t) {
                    return ae || new i(t)
                },
                VERSION: "0.6.17"
            },
            s = Object.prototype.hasOwnProperty,
            l = t.Math,
            c = t.getComputedStyle,
            u = "touchstart",
            f = "touchmove",
            d = "touchcancel",
            p = "touchend",
            h = "skrollable",
            m = h + "-before",
            g = h + "-between",
            v = h + "-after",
            y = "skrollr",
            b = "no-" + y,
            w = y + "-desktop",
            x = y + "-mobile",
            $ = "linear",
            C = 1e3,
            T = .004,
            E = 200,
            k = "start",
            S = "end",
            D = "center",
            A = "bottom",
            j = "___skrollable_id",
            F = /^(?:input|textarea|button|select)$/i,
            I = /^\s+|\s+$/g,
            P = /^data(?:-(_\w+))?(?:-?(-?\d*\.?\d+p?))?(?:-?(start|end|top|center|bottom))?(?:-?(top|center|bottom))?$/,
            O = /\s*([\w\-\[\]]+)\s*:\s*(.+?)\s*(?:;|$)/gi,
            _ = /^([a-z\-]+)\[(\w+)\]$/,
            L = /-([a-z])/g,
            M = function(t, e) {
                return e.toUpperCase()
            },
            N = /[\-+]?[\d]*\.?[\d]+/g,
            H = /\{\?\}/g,
            B = /rgba?\(\s*-?\d+\s*,\s*-?\d+\s*,\s*-?\d+/g,
            z = /[a-z\-]+-gradient/g,
            R = "",
            W = "",
            q = function() {
                var t = /^(?:O|Moz|webkit|ms)|(?:-(?:o|moz|webkit|ms)-)/;
                if (c) {
                    var e = c(r, null);
                    for (var n in e)
                        if (R = n.match(t) || +n == n && e[n].match(t)) break;
                    if (!R) return void(R = W = "");
                    R = R[0], "-" === R.slice(0, 1) ? (W = R, R = {
                        "-webkit-": "webkit",
                        "-moz-": "Moz",
                        "-ms-": "ms",
                        "-o-": "O"
                    }[R]) : W = "-" + R.toLowerCase() + "-"
                }
            },
            Q = function() {
                var e = t.requestAnimationFrame || t[R.toLowerCase() + "RequestAnimationFrame"],
                    n = je();
                return (ze || !e) && (e = function(e) {
                    var i = je() - n,
                        o = l.max(0, 1e3 / 60 - i);
                    return t.setTimeout(function() {
                        n = je(),
                            e()
                    }, o)
                }), e
            },
            U = function() {
                var e = t.cancelAnimationFrame || t[R.toLowerCase() + "CancelAnimationFrame"];
                return (ze || !e) && (e = function(e) {
                    return t.clearTimeout(e)
                }), e
            },
            V = {
                begin: function() {
                    return 0
                },
                end: function() {
                    return 1
                },
                linear: function(t) {
                    return t
                },
                quadratic: function(t) {
                    return t * t
                },
                cubic: function(t) {
                    return t * t * t
                },
                swing: function(t) {
                    return -l.cos(t * l.PI) / 2 + .5
                },
                sqrt: function(t) {
                    return l.sqrt(t)
                },
                outCubic: function(t) {
                    return l.pow(t - 1, 3) + 1
                },
                bounce: function(t) {
                    var e;
                    if (.5083 >= t) e = 3;
                    else if (.8489 >= t) e = 9;
                    else if (.96208 >= t) e = 27;
                    else {
                        if (!(.99981 >= t)) return 1;
                        e = 91
                    }
                    return 1 - l.abs(3 * l.cos(t * e * 1.028) / e)
                }
            };
        i.prototype.refresh = function(t) {
            var i, o, r = !1;
            for (t === n ? (r = !0, se = [], Be = 0, t = e.getElementsByTagName("*")) : t = [].concat(t), i = 0, o = t.length; o > i; i++) {
                var a = t[i],
                    s = a,
                    l = [],
                    c = he,
                    u = ye;
                if (a.attributes) {
                    for (var f = 0,
                            d = a.attributes.length; d > f; f++) {
                        var p = a.attributes[f];
                        if ("data-anchor-target" !== p.name)
                            if ("data-smooth-scrolling" !== p.name)
                                if ("data-edge-strategy" !== p.name) {
                                    var m = p.name.match(P);
                                    if (null !== m) {
                                        var g = {
                                            props: p.value,
                                            element: a
                                        };
                                        l.push(g);
                                        var v = m[1];
                                        v = v && fe[v.substr(1)] || 0;
                                        var y = m[2];
                                        /p$/.test(y) ? (g.isPercentage = !0, g.offset = (
                                            (0 | y.slice(0, -1)) + v) / 100) : g.offset = (0 | y) + v;
                                        var b = m[3],
                                            w = m[4] || b;
                                        b && b !== k && b !== S ? (g.mode = "relative", g.anchors = [
                                            b,
                                            w
                                        ]) : (g.mode = "absolute", b === S ? g.isEnd = !0 : g.isPercentage || (g.frame = g.offset * Pe, delete g.offset))
                                    }
                                } else u = p.value;
                        else c = "off" !== p.value;
                        else if (s = e.querySelector(p.value), null === s) throw 'Unable to find anchor target "' + p.value + '"'
                    }
                    if (l.length) {
                        var x, $, C;
                        !r && j in a ? (C = a[j], x = se[C].styleAttr, $ = se[C].classAttr) : (C = a[j] = Be++, x = a.style.cssText, $ = ke(a)),
                            se[C] = {
                                element: a,
                                styleAttr: x,
                                classAttr: $,
                                anchorTarget: s,
                                keyFrames: l,
                                smoothScrolling: c,
                                edgeStrategy: u
                            }, Se(a, [
                                h
                            ], [])
                    }
                }
            }
            for (Te(), i = 0, o = t.length; o > i; i++) {
                var T = se[t[i][j]];
                T !== n && (K(T), te(T))
            }
            return ae
        }, i.prototype.relativeToAbsolute = function(t, e, n) {
            var i = o.clientHeight,
                r = t.getBoundingClientRect(),
                a = r.top,
                s = r.bottom - r.top;
            return e === A ? a -= i : e === D && (a -= i / 2), n === A ? a += s : n === D && (a += s / 2), a += ae.getScrollTop(), a + .5 | 0
        }, i.prototype.animateTo = function(t, e) {
            e = e || {};
            var i = je(),
                o = ae.getScrollTop();
            return pe = {
                startTop: o,
                topDiff: t - o,
                targetTop: t,
                duration: e.duration || C,
                startTime: i,
                endTime: i + (e.duration || C),
                easing: V[e.easing || $],
                done: e.done
            }, pe.topDiff || (pe.done && pe.done.call(ae, !1), pe = n), ae
        }, i.prototype.stopAnimateTo = function() {
            pe && pe.done && pe.done.call(ae, !0), pe = n
        }, i.prototype.isAnimatingTo = function() {
            return !!pe
        }, i.prototype.setScrollTop = function(e, n) {
            return ve = n === !0,
                ze ? Re = l.min(l.max(e, 0), Ie) : t.scrollTo(0, e), ae
        }, i.prototype.getScrollTop = function() {
            return ze ? Re : t.pageYOffset || o.scrollTop || r.scrollTop || 0
        }, i.prototype.getMaxScrollTop = function() {
            return Ie
        }, i.prototype.on = function(t, e) {
            return ce[t] = e, ae
        }, i.prototype.off = function(t) {
            return delete ce[t], ae
        }, i.prototype.destroy = function() {
            var t = U();
            t(we), Ce(), Se(o, [b], [
                y, w, x
            ]);
            for (var e = 0, i = se.length; i > e; e++) oe(se[e].element);
            o.style.overflow = r.style.overflow = "auto",
                o.style.height = r.style.height = "auto",
                le && a.setStyle(le, "transform", "none"), ae = n,
                le = n, ce = n, ue = n, Ie = 0, Pe = 1,
                fe = n, de = n, Oe = "down", _e = -1, Me = 0, Ne = 0, He = !1,
                pe = n, he = n, me = n, ge = n, ve = n,
                Be = 0, ye = n, ze = !1, Re = 0, be = n
        };
        var X = function() {
                var i, a, s, c, h, m, g,
                    v, y, b, w, x;
                xe(o, [u, f, d, p].join(" "), function(t) {
                    var o = t.changedTouches[0];
                    for (c = t.target; 3 === c.nodeType;) c = c.parentNode;
                    switch (h = o.clientY, m = o.clientX, b = t.timeStamp, F.test(c.tagName) || t.preventDefault(), t.type) {
                        case u:
                            i && i.blur(),
                                ae.stopAnimateTo(),
                                i = c,
                                a = g = h,
                                s = m,
                                y = b;
                            break;
                        case f:
                            v = h - g,
                                x = b - w,
                                ae.setScrollTop(Re - v, !0),
                                g = h,
                                w = b;
                            break;
                        default:
                        case d:
                        case p:
                            var r = a - h,
                                $ = s - m,
                                C = $ * $ + r * r;
                            if (49 > C) {
                                if (!F.test(i.tagName)) {
                                    i.focus();
                                    var T = e.createEvent("MouseEvents");
                                    T.initMouseEvent("click", !0, !0, t.view, 1, o.screenX, o.screenY, o.clientX, o.clientY, t.ctrlKey, t.altKey, t.shiftKey, t.metaKey, 0, null),
                                        i.dispatchEvent(T)
                                }
                                return
                            }
                            i = n;
                            var E = v / x;
                            E = l.max(l.min(E, 3), -3);
                            var k = l.abs(E / de),
                                S = E * k + .5 * de * k * k,
                                D = ae.getScrollTop() - S,
                                A = 0;
                            D > Ie ? (A = (Ie - D) / S, D = Ie) : 0 > D && (A = -D / S, D = 0),
                                k *= 1 - A,
                                ae.animateTo(D + .5 | 0, {
                                    easing: "outCubic",
                                    duration: k
                                })
                    }
                }), t.scrollTo(0, 0), o.style.overflow = r.style.overflow = "hidden"
            },
            G = function() {
                var t, e, n, i, r, a, s,
                    c, u;
                for (c = 0, u = se.length; u > c; c++)
                    for (t = se[c], e = t.element, n = t.anchorTarget, i = t.keyFrames, r = 0, a = i.length; a > r; r++) {
                        s = i[r];
                        var f = s.offset;
                        s.isPercentage && (f *= o.clientHeight, s.frame = f), "relative" === s.mode && (oe(e), s.frame = ae.relativeToAbsolute(n, s.anchors[0], s.anchors[1]) - f, oe(e, !0)),
                            ue && !s.isEnd && s.frame > Ie && (Ie = s.frame)
                    }
                for (Ie = l.max(Ie, Ee()), c = 0, u = se.length; u > c; c++) {
                    for (t = se[c], i = t.keyFrames, r = 0, a = i.length; a > r; r++) s = i[r],
                        s.isEnd && (s.frame = Ie - s.offset);
                    t.keyFrames.sort(Fe)
                }
            },
            Y = function(t, e) {
                for (var n = 0, i = se.length; i > n; n++) {
                    var o, r, l = se[n],
                        c = l.element,
                        u = l.smoothScrolling ? t : e,
                        f = l.keyFrames,
                        d = f[0].frame,
                        p = f[f.length - 1].frame,
                        y = d > u,
                        b = u > p,
                        w = f[y ? 0 : f.length - 1];
                    if (y || b) {
                        if (y && -1 === l.edge || b && 1 === l.edge) continue;
                        switch (Se(c, [
                            y ? m : v
                        ], [m,
                            g,
                            v
                        ]), l.edge = y ? -1 : 1, l.edgeStrategy) {
                            case "reset":
                                oe(c);
                                continue;
                            case "ease":
                                u = w.frame;
                                break;
                            default:
                            case "set":
                                var x = w.props;
                                for (o in x) s.call(x, o) && (r = ie(x[o].value), a.setStyle(c, o, r));
                                continue
                        }
                    } else 0 !== l.edge && (Se(c, [h, g], [
                        m,
                        v
                    ]), l.edge = 0);
                    for (var $ = 0, C = f.length - 1; C > $; $++)
                        if (u >= f[$].frame && u <= f[$ + 1].frame) {
                            var T = f[$],
                                E = f[$ + 1];
                            for (o in T.props)
                                if (s.call(T.props, o)) {
                                    var k = (u - T.frame) / (E.frame - T.frame);
                                    k = T.props[o].easing(k),
                                        r = ne(T.props[o].value, E.props[o].value, k),
                                        r = ie(r),
                                        a.setStyle(c, o, r)
                                }
                            break
                        }
                }
            },
            Z = function() {
                He && (He = !1, Te());
                var t, e, i = ae.getScrollTop(),
                    o = je();
                if (pe) o >= pe.endTime ? (i = pe.targetTop, t = pe.done, pe = n) : (e = pe.easing(
                    (o - pe.startTime) / pe.duration), i = pe.startTop + e * pe.topDiff | 0), ae.setScrollTop(i, !0);
                else if (!ve) {
                    var r = ge.targetTop - i;
                    r && (ge = {
                        startTop: _e,
                        topDiff: i - _e,
                        targetTop: i,
                        startTime: Le,
                        endTime: Le + me
                    }), o <= ge.endTime && (e = V.sqrt((o - ge.startTime) / me), i = ge.startTop + e * ge.topDiff | 0)
                }
                if (ze && le && a.setStyle(le, "transform", "translate(0, " + -Re + "px) " + be), ve || _e !== i) {
                    Oe = i > _e ? "down" : _e > i ? "up" : Oe, ve = !1;
                    var s = {
                            curTop: i,
                            lastTop: _e,
                            maxTop: Ie,
                            direction: Oe
                        },
                        l = ce.beforerender && ce.beforerender.call(ae, s);
                    l !== !1 && (Y(i, ae.getScrollTop()), _e = i, ce.render && ce.render.call(ae, s)),
                        t && t.call(ae, !1)
                }
                Le = o
            },
            K = function(t) {
                for (var e = 0, n = t.keyFrames.length; n > e; e++) {
                    for (var i, o, r, a,
                            s = t.keyFrames[e], l = {}; null !== (a = O.exec(s.props));) r = a[1], o = a[2],
                        i = r.match(_),
                        null !== i ? (r = i[1], i = i[2]) : i = $, o = o.indexOf("!") ? J(o) : [
                            o.slice(1)
                        ], l[r] = {
                            value: o,
                            easing: V[i]
                        };
                    s.props = l
                }
            },
            J = function(t) {
                var e = [];
                return B.lastIndex = 0,
                    t = t.replace(B, function(t) {
                        return t.replace(N, function(t) {
                            return
                            t / 255 * 100 + "%"
                        })
                    }), W && (z.lastIndex = 0, t = t.replace(z, function(t) {
                        return W + t
                    })), t = t.replace(N, function(t) {
                        return e.push(+t), "{?}"
                    }), e.unshift(t),
                    e
            },
            te = function(t) {
                var e, n, i = {};
                for (e = 0, n = t.keyFrames.length; n > e; e++) ee(t.keyFrames[e], i);
                for (i = {}, e = t.keyFrames.length - 1; e >= 0; e--) ee(t.keyFrames[e], i)
            },
            ee = function(t, e) {
                var n;
                for (n in e) s.call(t.props, n) || (t.props[n] = e[n]);
                for (n in t.props) e[n] = t.props[n]
            },
            ne = function(t, e, n) {
                var i, o = t.length;
                if (o !== e.length) throw "Can't interpolate between \"" + t[0] + '" and "' + e[0] + '"';
                var r = [t[0]];
                for (i = 1; o > i; i++) r[i] = t[i] + (e[i] - t[i]) * n;
                return r
            },
            ie = function(t) {
                var e = 1;
                return H.lastIndex = 0,
                    t[0].replace(H, function() {
                        return t[e++]
                    })
            },
            oe = function(t, e) {
                t = [].concat(t);
                for (var n, i, o = 0, r = t.length; r > o; o++) i = t[o], n = se[i[j]], n && (e ? (i.style.cssText = n.dirtyStyleAttr, Se(i, n.dirtyClassAttr)) : (n.dirtyStyleAttr = i.style.cssText, n.dirtyClassAttr = ke(i), i.style.cssText = n.styleAttr, Se(i, n.classAttr)))
            },
            re = function() {
                be = "translateZ(0)", a.setStyle(le, "transform", be);
                var t = c(le),
                    e = t.getPropertyValue("transform"),
                    n = t.getPropertyValue(W + "transform"),
                    i = e && "none" !== e || n && "none" !== n;
                i || (be = "")
            };
        a.setStyle = function(t, e, n) {
            var i = t.style;
            if (e = e.replace(L, M).replace("-", ""), "zIndex" === e) i[e] = isNaN(n) ? n : "" + (0 | n);
            else if ("float" === e) i.styleFloat = i.cssFloat = n;
            else try {
                R && (i[R + e.slice(0, 1).toUpperCase() + e.slice(1)] = n), i[e] = n
            } catch (o) {}
        };
        var ae, se, le, ce, ue, fe, de,
            pe, he, me, ge, ve, ye, be,
            we, xe = a.addEvent = function(e, n, i) {
                var o = function(e) {
                    return e = e || t.event, e.target || (e.target = e.srcElement), e.preventDefault || (e.preventDefault = function() {
                        e.returnValue = !1
                    }), i.call(this, e)
                };
                n = n.split(" ");
                for (var r, a = 0, s = n.length; s > a; a++) r = n[a], e.addEventListener ? e.addEventListener(r, i, !1) : e.attachEvent("on" + r, o),
                    We.push({
                        element: e,
                        name: r,
                        listener: i
                    })
            },
            $e = a.removeEvent = function(t, e, n) {
                e = e.split(" ");
                for (var i = 0, o = e.length; o > i; i++) t.removeEventListener ? t.removeEventListener(e[i], n, !1) : t.detachEvent("on" + e[i], n)
            },
            Ce = function() {
                for (var t, e = 0, n = We.length; n > e; e++) t = We[e],
                    $e(t.element, t.name, t.listener);
                We = []
            },
            Te = function() {
                var t = ae.getScrollTop();
                Ie = 0, ue && !ze && (r.style.height = "auto"), G(),
                    ue && !ze && (r.style.height = Ie + o.clientHeight + "px"), ze ? ae.setScrollTop(l.min(ae.getScrollTop(), Ie)) : ae.setScrollTop(t, !0), ve = !0
            },
            Ee = function() {
                var t = le && le.offsetHeight || 0,
                    e = l.max(t, r.scrollHeight, r.offsetHeight, o.scrollHeight, o.offsetHeight, o.clientHeight);
                return e - o.clientHeight
            },
            ke = function(e) {
                var n = "className";
                return t.SVGElement && e instanceof t.SVGElement && (e = e[n], n = "baseVal"), e[n]
            },
            Se = function(e, i, o) {
                var r = "className";
                if (t.SVGElement && e instanceof t.SVGElement && (e = e[r], r = "baseVal"), o === n) return void(e[r] = i);
                for (var a = e[r], s = 0, l = o.length; l > s; s++) a = Ae(a).replace(Ae(o[s]), " ");
                a = De(a);
                for (var c = 0, u = i.length; u > c; c++) - 1 === Ae(a).indexOf(Ae(i[c])) && (a += " " + i[c]);
                e[r] = De(a)
            },
            De = function(t) {
                return t.replace(I, "")
            },
            Ae = function(t) {
                return " " + t + " "
            },
            je = Date.now || function() {
                return +new Date
            },
            Fe = function(t, e) {
                return t.frame - e.frame
            },
            Ie = 0,
            Pe = 1,
            Oe = "down",
            _e = -1,
            Le = je(),
            Me = 0,
            Ne = 0,
            He = !1,
            Be = 0,
            ze = !1,
            Re = 0,
            We = []
    }(window, document), $(document).ready(function() {
        "use strict";
        $(".no-touch").length && setTimeout(function() {
            skrollr.init({
                easing: "sqrt",
                smoothScrolling: !0,
                forceHeight: !1
            })
        }, 1e3), $(".intro").textillate({
            loop: !0,
            initialDelay: 1e3,
            "in": {
                effect: "flipInX"
            },
            out: {
                effect: "fadeOutDown"
            }
        }),  $('a[href="#"]').click(function() {
            return !1
        })
    }), $(window).load(function() {
        $("#integrations_gif").attr("src", "img/integrations.gif"), $.ajax({
            type: "GET",
            url: "http://fedsonslack.com/scripts/slack_api.php?method=users.count"
        }).done(function(t) {
            var e = $("#member-count-part");
            e.find("mark").text(t.count + " FEDs"), e.show()
        }).fail(function(t, e, n) {
            console.log(t, e, n)
        })
    }), jQuery(document).ready(function(t) {
        t("#inner").on("mouseenter mouseleave", function(e) {
            var n = t("#face_cont"),
                i = t("#mouth"),
                o = t("#face"),
                r = 0,
                a = o.offset(),
                s = i.position();
            switch (e.type) {
                case "mouseenter":
                    pageX = e.pageX,
                        pageY = e.pageY,
                        hap = {
                            left: e.pageX - a.left - s.left - i.width() - 7,
                            top: e.pageY - a.top - s.top - i.height() + 40
                        },
                        e.pageX - a.left - 16 <= o.width() / 2 ? (n.addClass("flip"), hap.left = -1 * (hap.left + 46), hap.top = -1 * (hap.top + 5)) : (n.css({
                            left: 0
                        }), n.removeClass("flip")),
                        t("#face_inner").css({
                            top: hap.top,
                            left: hap.left
                        }),
                        setTimeout(function() {
                            t("#face_inner").css({
                                    top: 0,
                                    left: -16
                                }),
                                t("#inner").on("mousemove", function(e) {
                                    window.clearTimeout(r),
                                        t("#face_cont").addClass("shake"),
                                        pageY = e.pageY,
                                        pageX = e.pageX,
                                        r = window.setTimeout(function() {
                                            t("#face_cont").removeClass("shake")
                                        }, 100)
                                })
                        }, 250);
                    break;
                case "mouseleave":
                    n.removeClass("shake"),
                        t("#inner").off("mousemove")
            }
        })
    });
var map, renderMemberTemplate = function(t) {
    var e = "",
        n = "",
        i = "";
    (t.is_owner || t.is_admin) && (t.is_owner ? n = "Owner" : t.is_admin && (n = "Admin"), e += "<div " + (t.is_owner ? 'class="mark_alt"' : "") + '><i class="fa fa-trophy"></i> Community ' + n + "</div>"), t.twitter && "" != t.twitter && (i = '<div class="team-member-social"><a href="https://twitter.com/' + t.twitter + '"><i class="fa fa-twitter"></i> @' + t.twitter + "</a></div>");
    var o = '<figure class="team-image-wrapper"><img src="' + t.image_192 + '" class="team-image" alt="' + t.real_name + '"><figcaption><mark>' + (t.real_name || "&nbsp;") + "</mark><br />" + e + '<div class="team-member-title"></div>' + i + "</figcaption></figure>";
    return $html = $(o), $html.find(".team-member-title").text(t.title || "&nbsp;"),
        $html
};
