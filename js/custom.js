"use strict";

function fullsiteAnimation() {
    var e = $(window).height(),
        a = $(window).width(),
        s = $("#wraper").offset().top;
    s > 19 && $("#wraper").css({
        "margin-top": "-20px"
    }), $(".mobilemenu", "#top-bar").off("click.click").on("click.click", function() {
        $("#menumobile").toggleClass("act")
    }), $("#menumobile ul li").on("click.click", function() {
        $("#menumobile").removeClass("act")
    }), $("#smallimg", "#wraper").offset({
        top: 80
    });
    var t = $("#thumbnails"),
        o = $("figure", "#scalediv"),
        m = $("figure.big", "#scalediv"),
        l = $("figure.anim", "#scalediv"),
        n = $("#hiddenscroll", "#scalediv"),
        i = $(".row"),
        g = $('[data-id="one"]'),
        c = $('[data-id="two"]'),
        d = $('[data-id="three"]'),
        r = $('[data-id="four"]'),
        u = ($('[data-id="one"] > .innerrow', "#scalediv"), $('[data-id="two"] > .innerrow', "#scalediv")),
        p = $('[data-id="three"] > .innerrow', "#scalediv"),
        v = $('[data-id="four"] > .innerrow', "#scalediv"),
        C = $(".row > .innerrow", "#scalediv"),
        f = $('[data-id="one"] figure.big .explr', "#scalediv"),
        h = $('[data-id="two"] figure.big .explr', "#scalediv"),
        b = $('[data-id="three"] figure.big .explr', "#scalediv"),
        I = $('[data-id="four"] figure.big .explr', "#scalediv"),
        q = $('[data-id="one"] figure.big', "#scalediv"),
        y = $('[data-id="two"] figure.big', "#scalediv"),
        w = $('[data-id="three"] figure.big', "#scalediv"),
        B = $('[data-id="four"] figure.big', "#scalediv");
    if (a > 810) {
        var E = (e - 50) / 2;
        t.width(a), t.height(e - 50), n.height(e - 50), o.height(E), i.height(E), $(".innerrow", "#scalediv").height(E), $(".mainImage").height(e - 50), $("figure .explr", "#scalediv").height(E), $(".explrht").height(E), l.parents(".row").addClass("bigerImage"), l.parents(".innerrow ").addClass("bigerImage"), l.addClass("clickImage"), $("figure.mainImage", "#scalediv").parents(".bigerImage").scrollTo({
            top: 0,
            left: 0
        }, 500)
    } else if (810 > a && a > e) {
        var E = e - 50;
        t.width(a), t.height(e - 50), n.height("auto"), o.height(E), $("figure .explr", "#scalediv").height(E), i.height("auto"), $(".innerrow", "#scalediv").height("auto"), $(".mainImage").height(E), $(".explrht").height(E), l.parents(".row").addClass("bigerImage"), l.parents(".innerrow ").addClass("bigerImage"), m.removeClass("clickImage")
    } else if (810 > a && e > a) {
        var E = (e - 50) / 2;
        t.width(a), t.height(e - 50), n.height("auto"), o.height(E), $("figure .explr", "#scalediv").height(E), i.height("auto"), $(".innerrow", "#scalediv").height("auto"), $(".mainImage").height(E), $(".explrht").height(E), l.parents(".row").addClass("bigerImage"), l.parents(".innerrow ").addClass("bigerImage"), m.removeClass("clickImage")
    }
    q.off("click", ".content").on("click", ".content", function() {
        if (810 > a) q.addClass("anim").delay(500).queue(function() {
            q.addClass("animque").dequeue()
        }), setTimeout(addanimquehtone, 1e3), y.removeClass("anim"), w.removeClass("anim"), B.removeClass("anim"), y.removeClass("animqueht"), w.removeClass("animqueht"), B.removeClass("animqueht"), y.removeClass("animque"), w.removeClass("animque"), B.removeClass("animque"), y.removeClass("animq"), w.removeClass("animq"), B.removeClass("animq"), f.addClass("explrht"), q.removeClass("clickImage"), t.addClass("bigpost"), $("#smallimg").addClass("leftpos"), q.parents(".row").removeClass("bigerImage"), q.closest("div").removeClass("bigerImage");
        else {
            q.addClass("anim").delay(500).queue(function() {
                q.addClass("animque").dequeue()
            }), setTimeout(addanimquehtone, 1e3);
            var e = 1 * E - E,
                s = $(this).offset().left;
            p.removeClass("bottomRow"), p.removeClass("bigerImage"), d.removeClass("bigerImage"), w.removeClass("mainImage"), $(this).removeClass("makebig"), q.parents(".row").addClass("bigerImage"), q.closest("div").addClass("bigerImage"), f.addClass("explrht"), q.addClass("mainImage"), q.addClass("clickImage"), u.addClass("bottomRow").delay(1e3).queue(function() {
                C.removeClass("bottomRow").dequeue()
            }), y.removeClass("anim"), w.removeClass("anim"), B.removeClass("anim"), y.removeClass("animqueht"), w.removeClass("animqueht"), B.removeClass("animqueht"), y.removeClass("animque"), w.removeClass("animque"), B.removeClass("animque"), y.removeClass("animq"), w.removeClass("animq"), B.removeClass("animq"), y.removeClass("clickImage"), w.removeClass("clickImage"), B.removeClass("clickImage"), y.removeClass("mainImage"), w.removeClass("mainImage"), B.removeClass("mainImage"), y.parents(".row").removeClass("bigerImage"), y.closest("div").removeClass("bigerImage"), w.parents(".row").removeClass("bigerImage"), w.closest("div").removeClass("bigerImage"), B.parents(".row").removeClass("bigerImage"), B.closest("div").removeClass("bigerImage"), t.addClass("bigpost"), $("#smallimg").addClass("leftpos"), n.scrollTo({
                top: e,
                left: 0
            }, 500), g.scrollTo({
                top: 0,
                left: s
            }, 500), c.scrollTo({
                top: 0,
                left: 0
            }, 500), d.scrollTo({
                top: 0,
                left: 0
            }, 500), r.scrollTo({
                top: 0,
                left: 0
            }, 500)
        }
    }), q.off("click", "img").on("click", "img", function() {
        if (810 > a) q.addClass("anim").delay(500).queue(function() {
            q.addClass("animque").dequeue()
        }), setTimeout(addanimquehtone, 1e3), y.removeClass("anim"), w.removeClass("anim"), B.removeClass("anim"), y.removeClass("animqueht"), w.removeClass("animqueht"), B.removeClass("animqueht"), y.removeClass("animque"), w.removeClass("animque"), B.removeClass("animque"), y.removeClass("animq"), w.removeClass("animq"), B.removeClass("animq"), f.addClass("explrht"), q.removeClass("clickImage"), t.addClass("bigpost"), $("#smallimg").addClass("leftpos"), q.parents(".row").removeClass("bigerImage"), q.closest("div").removeClass("bigerImage");
        else {
            q.addClass("anim").delay(500).queue(function() {
                q.addClass("animque").dequeue()
            }), setTimeout(addanimquehtone, 1e3);
            var e = 1 * E - E,
                s = $(this).offset().left;
            p.removeClass("bottomRow"), p.removeClass("bigerImage"), d.removeClass("bigerImage"), w.removeClass("mainImage"), $(this).removeClass("makebig"), q.parents(".row").addClass("bigerImage"), q.closest("div").addClass("bigerImage"), f.addClass("explrht"), q.addClass("mainImage"), q.addClass("clickImage"), u.addClass("bottomRow").delay(1e3).queue(function() {
                C.removeClass("bottomRow").dequeue()
            }), y.removeClass("anim"), w.removeClass("anim"), B.removeClass("anim"), y.removeClass("animqueht"), w.removeClass("animqueht"), B.removeClass("animqueht"), y.removeClass("animque"), w.removeClass("animque"), B.removeClass("animque"), y.removeClass("animq"), w.removeClass("animq"), B.removeClass("animq"), y.removeClass("clickImage"), w.removeClass("clickImage"), B.removeClass("clickImage"), y.removeClass("mainImage"), w.removeClass("mainImage"), B.removeClass("mainImage"), y.parents(".row").removeClass("bigerImage"), y.closest("div").removeClass("bigerImage"), w.parents(".row").removeClass("bigerImage"), w.closest("div").removeClass("bigerImage"), B.parents(".row").removeClass("bigerImage"), B.closest("div").removeClass("bigerImage"), t.addClass("bigpost"), $("#smallimg").addClass("leftpos"), n.scrollTo({
                top: e,
                left: 0
            }, 500), g.scrollTo({
                top: 0,
                left: s
            }, 500), c.scrollTo({
                top: 0,
                left: 0
            }, 500), d.scrollTo({
                top: 0,
                left: 0
            }, 500), r.scrollTo({
                top: 0,
                left: 0
            }, 500)
        }
    }), y.off("click", ".content").on("click", ".content", function() {
        if (810 > a) y.addClass("anim").delay(500).queue(function() {
            y.addClass("animque").dequeue()
        }), setTimeout(addanimquehttwo, 1e3), q.removeClass("anim"), w.removeClass("anim"), B.removeClass("anim"), q.removeClass("animqueht"), w.removeClass("animqueht"), B.removeClass("animqueht"), q.removeClass("animque"), w.removeClass("animque"), B.removeClass("animque"), q.removeClass("animq"), w.removeClass("animq"), B.removeClass("animq"), h.addClass("explrht"), y.removeClass("clickImage"), t.addClass("bigpost"), $("#smallimg").addClass("leftpos"), y.parents(".row").removeClass("bigerImage"), y.closest("div").removeClass("bigerImage");
        else {
            y.addClass("anim").delay(500).queue(function() {
                y.addClass("animque").dequeue()
            }), setTimeout(addanimquehttwo, 1e3); {
                var e = 2 * E - E;
                $(this).offset().left
            }
            p.removeClass("bottomRow"), p.removeClass("bigerImage"), d.removeClass("bigerImage"), w.removeClass("mainImage"), y.removeClass("makebig"), y.parents(".row").addClass("bigerImage"), y.closest("div").addClass("bigerImage"), h.addClass("explrht"), y.addClass("mainImage"), y.addClass("clickImage"), p.addClass("bottomRow").delay(1e3).queue(function() {
                C.removeClass("bottomRow").dequeue()
            }), t.addClass("bigpost"), $("#smallimg").addClass("leftpos"), q.removeClass("anim"), w.removeClass("anim"), B.removeClass("anim"), q.removeClass("animqueht"), w.removeClass("animqueht"), B.removeClass("animqueht"), q.removeClass("animque"), w.removeClass("animque"), B.removeClass("animque"), q.removeClass("animq"), w.removeClass("animq"), B.removeClass("animq"), q.removeClass("clickImage"), w.removeClass("clickImage"), B.removeClass("clickImage"), q.removeClass("mainImage"), w.removeClass("mainImage"), B.removeClass("mainImage"), q.parents(".row").removeClass("bigerImage"), q.closest("div").removeClass("bigerImage"), w.parents(".row").removeClass("bigerImage"), w.closest("div").removeClass("bigerImage"), B.parents(".row").removeClass("bigerImage"), B.closest("div").removeClass("bigerImage"), n.scrollTo({
                top: e,
                left: 0
            }, 500), c.scrollTo({
                top: 0,
                left: 0
            }, 500), d.scrollTo({
                top: 0,
                left: 0
            }, 500), g.scrollTo({
                top: 0,
                left: 0
            }, 500), r.scrollTo({
                top: 0,
                left: 0
            }, 500)
        }
    }), y.off("click", "img").on("click", "img", function() {
        if (810 > a) y.addClass("anim").delay(500).queue(function() {
            y.addClass("animque").dequeue()
        }), setTimeout(addanimquehttwo, 1e3), q.removeClass("anim"), w.removeClass("anim"), B.removeClass("anim"), q.removeClass("animqueht"), w.removeClass("animqueht"), B.removeClass("animqueht"), q.removeClass("animque"), w.removeClass("animque"), B.removeClass("animque"), q.removeClass("animq"), w.removeClass("animq"), B.removeClass("animq"), h.addClass("explrht"), y.removeClass("clickImage"), t.addClass("bigpost"), $("#smallimg").addClass("leftpos"), y.parents(".row").removeClass("bigerImage"), y.closest("div").removeClass("bigerImage");
        else {
            y.addClass("anim").delay(500).queue(function() {
                y.addClass("animque").dequeue()
            }), setTimeout(addanimquehttwo, 1e3); {
                var e = 2 * E - E;
                $(this).offset().left
            }
            p.removeClass("bottomRow"), p.removeClass("bigerImage"), d.removeClass("bigerImage"), w.removeClass("mainImage"), y.removeClass("makebig"), y.parents(".row").addClass("bigerImage"), y.closest("div").addClass("bigerImage"), h.addClass("explrht"), y.addClass("mainImage"), y.addClass("clickImage"), p.addClass("bottomRow").delay(1e3).queue(function() {
                C.removeClass("bottomRow").dequeue()
            }), t.addClass("bigpost"), $("#smallimg").addClass("leftpos"), q.removeClass("anim"), w.removeClass("anim"), B.removeClass("anim"), q.removeClass("animqueht"), w.removeClass("animqueht"), B.removeClass("animqueht"), q.removeClass("animque"), w.removeClass("animque"), B.removeClass("animque"), q.removeClass("animq"), w.removeClass("animq"), B.removeClass("animq"), q.removeClass("clickImage"), w.removeClass("clickImage"), B.removeClass("clickImage"), q.removeClass("mainImage"), w.removeClass("mainImage"), B.removeClass("mainImage"), q.parents(".row").removeClass("bigerImage"), q.closest("div").removeClass("bigerImage"), w.parents(".row").removeClass("bigerImage"), w.closest("div").removeClass("bigerImage"), B.parents(".row").removeClass("bigerImage"), B.closest("div").removeClass("bigerImage"), n.scrollTo({
                top: e,
                left: 0
            }, 500), c.scrollTo({
                top: 0,
                left: 0
            }, 500), d.scrollTo({
                top: 0,
                left: 0
            }, 500), g.scrollTo({
                top: 0,
                left: 0
            }, 500), r.scrollTo({
                top: 0,
                left: 0
            }, 500)
        }
    }), w.off("click", ".content").on("click", ".content", function() {
        if (810 > a) w.addClass("anim").delay(500).queue(function() {
            w.addClass("animque").dequeue()
        }), setTimeout(addanimquehtthree, 1e3), q.removeClass("anim"), y.removeClass("anim"), B.removeClass("anim"), q.removeClass("animqueht"), y.removeClass("animqueht"), B.removeClass("animqueht"), q.removeClass("animque"), y.removeClass("animque"), B.removeClass("animque"), q.removeClass("animq"), y.removeClass("animq"), B.removeClass("animq"), b.addClass("explrht"), w.removeClass("clickImage"), t.addClass("bigpost"), $("#smallimg").addClass("leftpos"), w.parents(".row").removeClass("bigerImage"), w.closest("div").removeClass("bigerImage");
        else {
            w.addClass("anim").delay(500).queue(function() {
                w.addClass("animque").dequeue()
            }), setTimeout(addanimquehtthree, 1e3), v.addClass("bottomRow").delay(1e3).queue(function() {
                C.removeClass("bottomRow").dequeue()
            });
            var e = 3 * E - E,
                s = $(this).position().left;
            v.removeClass("bottomRow"), v.removeClass("bigerImage"), r.removeClass("bigerImage"), B.removeClass("mainImage"), $(this).removeClass("makebig"), w.parents(".row").addClass("bigerImage"), w.closest("div").addClass("bigerImage"), b.addClass("explrht"), w.addClass("mainImage"), w.addClass("clickImage"), t.addClass("bigpost"), $("#smallimg").addClass("leftpos"), q.removeClass("anim"), y.removeClass("anim"), B.removeClass("anim"), q.removeClass("animqueht"), y.removeClass("animqueht"), B.removeClass("animqueht"), q.removeClass("animque"), y.removeClass("animque"), B.removeClass("animque"), q.removeClass("animq"), y.removeClass("animq"), B.removeClass("animq"), q.removeClass("clickImage"), y.removeClass("clickImage"), B.removeClass("clickImage"), q.removeClass("mainImage"), y.removeClass("mainImage"), B.removeClass("mainImage"), q.parents(".row").removeClass("bigerImage"), q.closest("div").removeClass("bigerImage"), y.parents(".row").removeClass("bigerImage"), y.closest("div").removeClass("bigerImage"), B.parents(".row").removeClass("bigerImage"), B.closest("div").removeClass("bigerImage"), n.scrollTo({
                top: e,
                left: s
            }, 500, function() {
                d.scrollTo({
                    top: 0,
                    left: s
                }, 500), r.scrollTo({
                    top: 0,
                    left: 0
                }, 500), g.scrollTo({
                    top: 0,
                    left: 0
                }, 500), c.scrollTo({
                    top: 0,
                    left: 0
                }, 500)
            })
        }
    }), w.off("click", "img").on("click", "img", function() {
        if (810 > a) w.addClass("anim").delay(500).queue(function() {
            w.addClass("animque").dequeue()
        }), setTimeout(addanimquehtthree, 1e3), q.removeClass("anim"), y.removeClass("anim"), B.removeClass("anim"), q.removeClass("animqueht"), y.removeClass("animqueht"), B.removeClass("animqueht"), q.removeClass("animque"), y.removeClass("animque"), B.removeClass("animque"), q.removeClass("animq"), y.removeClass("animq"), B.removeClass("animq"), b.addClass("explrht"), w.removeClass("clickImage"), t.addClass("bigpost"), $("#smallimg").addClass("leftpos"), w.parents(".row").removeClass("bigerImage"), w.closest("div").removeClass("bigerImage");
        else {
            w.addClass("anim").delay(500).queue(function() {
                w.addClass("animque").dequeue()
            }), setTimeout(addanimquehtthree, 1e3), v.addClass("bottomRow").delay(1e3).queue(function() {
                C.removeClass("bottomRow").dequeue()
            });
            var e = 3 * E - E,
                s = $(this).position().left;
            v.removeClass("bottomRow"), v.removeClass("bigerImage"), r.removeClass("bigerImage"), B.removeClass("mainImage"), $(this).removeClass("makebig"), w.parents(".row").addClass("bigerImage"), w.closest("div").addClass("bigerImage"), b.addClass("explrht"), w.addClass("mainImage"), w.addClass("clickImage"), t.addClass("bigpost"), $("#smallimg").addClass("leftpos"), q.removeClass("anim"), y.removeClass("anim"), B.removeClass("anim"), q.removeClass("animqueht"), y.removeClass("animqueht"), B.removeClass("animqueht"), q.removeClass("animque"), y.removeClass("animque"), B.removeClass("animque"), q.removeClass("animq"), y.removeClass("animq"), B.removeClass("animq"), q.removeClass("clickImage"), y.removeClass("clickImage"), B.removeClass("clickImage"), q.removeClass("mainImage"), y.removeClass("mainImage"), B.removeClass("mainImage"), q.parents(".row").removeClass("bigerImage"), q.closest("div").removeClass("bigerImage"), y.parents(".row").removeClass("bigerImage"), y.closest("div").removeClass("bigerImage"), B.parents(".row").removeClass("bigerImage"), B.closest("div").removeClass("bigerImage"), n.scrollTo({
                top: e,
                left: s
            }, 500, function() {
                d.scrollTo({
                    top: 0,
                    left: s
                }, 500), r.scrollTo({
                    top: 0,
                    left: 0
                }, 500), g.scrollTo({
                    top: 0,
                    left: 0
                }, 500), c.scrollTo({
                    top: 0,
                    left: 0
                }, 500)
            })
        }
    }), B.off("click", ".content").on("click", ".content", function() {
        if (810 > a) B.addClass("anim").delay(500).queue(function() {
            B.addClass("animque").dequeue()
        }), setTimeout(addanimquehtfour, 1e3), q.removeClass("anim"), w.removeClass("anim"), y.removeClass("anim"), q.removeClass("animqueht"), y.removeClass("animqueht"), w.removeClass("animqueht"), q.removeClass("animque"), y.removeClass("animque"), w.removeClass("animque"), q.removeClass("animq"), y.removeClass("animq"), w.removeClass("animq"), I.addClass("explrht"), B.removeClass("clickImage"), t.addClass("bigpost"), $("#smallimg").addClass("leftpos"), B.parents(".row").removeClass("bigerImage"), B.closest("div").removeClass("bigerImage");
        else {
            {
                $(this).offset().left
            }
            B.addClass("anim").delay(500).queue(function() {
                B.addClass("animque").dequeue()
            }), setTimeout(addanimquehtfour, 1e3);
            var e = 4 * E - E;
            p.removeClass("bottomRow"), p.removeClass("bigerImage"), d.removeClass("bigerImage"), w.removeClass("mainImage"), B.removeClass("makebig"), B.addClass("mainImage"), B.addClass("clickImage"), B.parents(".row").addClass("bigerImage"), B.closest("div").addClass("bigerImage").delay(1e3).queue(function() {
                n.scrollTo({
                    top: e,
                    left: 0
                }, 500).dequeue()
            }), I.addClass("explrht"), $('[data-id="five"] > .innerrow', "#scalediv").addClass("bottomRow").delay(1e3).queue(function() {
                C.removeClass("bottomRow").dequeue()
            }), t.addClass("bigpost"), $("#smallimg").addClass("leftpos"), $(this).removeClass("makebig"), q.removeClass("anim"), y.removeClass("anim"), w.removeClass("anim"), q.removeClass("animqueht"), y.removeClass("animqueht"), w.removeClass("animqueht"), q.removeClass("animque"), y.removeClass("animque"), w.removeClass("animque"), q.removeClass("animq"), y.removeClass("animq"), w.removeClass("animq"), q.removeClass("clickImage"), y.removeClass("clickImage"), w.removeClass("clickImage"), q.removeClass("mainImage"), y.removeClass("mainImage"), w.removeClass("mainImage"), q.parents(".row").removeClass("bigerImage"), q.closest("div").removeClass("bigerImage"), y.parents(".row").removeClass("bigerImage"), y.closest("div").removeClass("bigerImage"), w.parents(".row").removeClass("bigerImage"), w.closest("div").removeClass("bigerImage"), r.scrollTo({
                top: 0,
                left: 0
            }, 500), d.scrollTo({
                top: 0,
                left: 0
            }, 500), g.scrollTo({
                top: 0,
                left: 0
            }, 500), c.scrollTo({
                top: 0,
                left: 0
            }, 500)
        }
    }), B.off("click", "img").on("click", "img", function() {
        if (810 > a) B.addClass("anim").delay(500).queue(function() {
            B.addClass("animque").dequeue()
        }), setTimeout(addanimquehtfour, 1e3), q.removeClass("anim"), w.removeClass("anim"), y.removeClass("anim"), q.removeClass("animqueht"), y.removeClass("animqueht"), w.removeClass("animqueht"), q.removeClass("animque"), y.removeClass("animque"), w.removeClass("animque"), q.removeClass("animq"), y.removeClass("animq"), w.removeClass("animq"), I.addClass("explrht"), B.removeClass("clickImage"), t.addClass("bigpost"), $("#smallimg").addClass("leftpos"), B.parents(".row").removeClass("bigerImage"), B.closest("div").removeClass("bigerImage");
        else {
            {
                $(this).offset().left
            }
            B.addClass("anim").delay(500).queue(function() {
                B.addClass("animque").dequeue()
            }), setTimeout(addanimquehtfour, 1e3);
            var e = 4 * E - E;
            p.removeClass("bottomRow"), p.removeClass("bigerImage"), d.removeClass("bigerImage"), w.removeClass("mainImage"), B.removeClass("makebig"), B.addClass("mainImage"), B.addClass("clickImage"), B.parents(".row").addClass("bigerImage"), B.closest("div").addClass("bigerImage").delay(1e3).queue(function() {
                n.scrollTo({
                    top: e,
                    left: 0
                }, 500).dequeue()
            }), I.addClass("explrht"), $('[data-id="five"] > .innerrow', "#scalediv").addClass("bottomRow").delay(1e3).queue(function() {
                C.removeClass("bottomRow").dequeue()
            }), t.addClass("bigpost"), $("#smallimg").addClass("leftpos"), $(this).removeClass("makebig"), q.removeClass("anim"), y.removeClass("anim"), w.removeClass("anim"), q.removeClass("animqueht"), y.removeClass("animqueht"), w.removeClass("animqueht"), q.removeClass("animque"), y.removeClass("animque"), w.removeClass("animque"), q.removeClass("animq"), y.removeClass("animq"), w.removeClass("animq"), q.removeClass("clickImage"), y.removeClass("clickImage"), w.removeClass("clickImage"), q.removeClass("mainImage"), y.removeClass("mainImage"), w.removeClass("mainImage"), q.parents(".row").removeClass("bigerImage"), q.closest("div").removeClass("bigerImage"), y.parents(".row").removeClass("bigerImage"), y.closest("div").removeClass("bigerImage"), w.parents(".row").removeClass("bigerImage"), w.closest("div").removeClass("bigerImage"), r.scrollTo({
                top: 0,
                left: 0
            }, 500), d.scrollTo({
                top: 0,
                left: 0
            }, 500), g.scrollTo({
                top: 0,
                left: 0
            }, 500), c.scrollTo({
                top: 0,
                left: 0
            }, 500)
        }
    }), $(document).on("click", "figure.animque .explr img", function() {
        $(this).parents(".animque").addClass("animq"), $("figure.big .contentRight .post", "#scalediv").height(e - 50)
    }), $(document).on("click", "#smallimg", function() {
        m.removeClass("animqueht").delay(500).queue(function() {
            m.removeClass("animque").dequeue()
        }), setTimeout(removeanim, 1e3), lessimageview(), C.removeClass("bottomRow"), C.removeClass("bigerImage"), i.removeClass("bigerImage"), t.removeClass("bigpost"), m.removeClass("mainImage"), m.removeClass("clickImage"), m.removeClass("animq"), $(this).removeClass("leftpos"), m.addClass("makebig"), $("figure.big .explr", "#scalediv").removeClass("explrht"), i.scrollTo({
            top: 0,
            left: 0
        }, 800)
    });
    var N = e - 50,
        k = a,
        T = $("#blog .postimagearea > .postimage"),
        F = $("#blog .postcontentarea > .post"),
        L = $("#blog .postimagearea"),
        R = $("#blog .postcontentarea"),
        T = $("#blog .postimagearea .postimage"),
        x = $("#blog .postcontentarea .post"),
        P = $("#blog .previous"),
        U = $("#blog .next"),
        A = T.length;
    if (810 > a) {
        $("#aboutus aside").height(N / 2), $("#contactus aside").height(N / 2), T.height(N / 2), F.height("auto"), $("#blog aside").height(N / 2), $("#blog section").height("auto");
        var W = A * a;
        L.width(W), R.width(W), L.height(N / 2), R.height("auto"), T.width(a), x.width(a), blog = 1 * blog;
        var M = -1 * noblog * a,
            z = -1 * (noblogimag - 1) * k;
        L.css({
            left: z
        }), R.css({
            left: M
        }), L.css({
            top: 0
        }), R.css({
            top: 0
        }), U.off("click.click").on("click.click", function() {
            A - 1 > blog && (blog++, z += a, M -= a, noblog += 1, noblogimag -= 1, L.stop().animate({
                left: z
            }, 400), R.stop().animate({
                left: M
            }, 400), L.css({
                top: 0
            }), R.css({
                top: 0
            }))
        }), P.off("click.click").on("click.click", function() {
            blog > 0 && (blog--, z -= a, M += a, noblog -= 1, noblogimag += 1, L.stop().animate({
                left: z
            }, 400), R.stop().animate({
                left: M
            }, 400), L.css({
                top: 0
            }), R.css({
                top: 0
            }))
        })
    } else {
        $("#aboutus aside").height(N), $("#contactus aside").height(N), T.height(N), F.height(N), $("#blog aside").height(N), $("#blog section").height(N);
        var z = -1 * (noblogimag - 1) * N,
            M = -1 * noblog * N,
            V = (e - 50) * A;
        L.css({
            top: z
        }), R.css({
            top: M
        }), L.css({
            left: 0
        }), R.css({
            left: 0
        }), L.width("100%"), R.width("auto"), L.height(V), R.height(V), T.width("100%"), x.width("100%"), U.off("click.click").on("click.click", function() {
            A - 1 > blog && (blog++, z += N, M -= N, noblog += 1, noblogimag -= 1, L.stop().animate({
                top: z
            }, 400), R.stop().animate({
                top: M
            }, 400), L.css({
                left: 0
            }), R.css({
                left: 0
            }))
        }), P.off("click.click").on("click.click", function() {
            blog > 0 && (blog--, z -= N, M += N, L.stop().animate({
                top: z
            }, 400), R.stop().animate({
                top: M
            }, 400), L.css({
                left: 0
            }), R.css({
                left: 0
            }), noblog -= 1, noblogimag += 1)
        })
    }
    var jj = $("#posts .postimagearea > .postimage"),
		j = $("#posts .postimagearea > .postimage"),
        D = $("#posts .postcontentarea > .post"),
        G = $("#posts .postimagearea > .postimage").length,
        H = $("#posts .postimagearea"),
        J = $("#posts .postcontentarea"),
        K = $("#posts .postcontentarea .post"),
        O = $("#posts .postimagearea .post"),
        Q = $("#posts aside"),
        S = $("#posts section"),
        X = $("#posts .previous"),
        Y = $("#posts .next"),
        Z = $("#scalediv"),
        _ = $(".explr", "#scalediv"),
        ea = $("#posts");
    if (810 > a) {
        jj.height(N / 2), D.height("auto"), Q.height(N / 2), S.height("auto");
        var aa = G * a;
        H.width(aa), J.width(aa), H.height(N / 2), jj.width(a), J.height("auto"), O.width(a), K.width(a), posts = 1 * posts;
        var sa = -1 * posts * a,
            ta = -1 * (G - posts - 1) * k;
        H.css({
            left: ta
        }), J.css({
            left: sa
        }), H.css({
            top: 0
        }), J.css({
            top: 0
        }), Y.off("click.click").on("click.click", function() {
            G - 1 > posts && (posts++, ta += a, sa -= a, noposts += 1, nopostsimag -= 1, H.stop().animate({
                left: ta
            }, 400), J.stop().animate({
                left: sa
            }, 400), H.css({
                top: 0
            }), J.css({
                top: 0
            }))
        }), X.off("click.click").on("click.click", function() {
            posts > 0 && (posts--, ta -= a, sa += a, noposts -= 1, nopostsimag += 1, H.stop().animate({
                left: ta
            }, 400), J.stop().animate({
                left: sa
            }, 400), H.css({
                top: 0
            }), J.css({
                top: 0
            }))
        })
    } else {
        j.height(N), D.height(N), Q.height(N), S.height(N), posts = 1 * posts;
        var sa = -1 * posts * N,
            ta = -1 * (G - posts - 1) * N,
            oa = (e - 50) * G;
        H.css({
            top: ta
        }), J.css({
            top: sa
        }), H.css({
            left: 0
        }), J.css({
            left: 0
        }), H.width("100%"), J.width("auto"), H.height(oa), J.height(oa), O.width("100%"), K.width("100%"), Y.off("click.click").on("click.click", function() {
            G - 1 > posts && (posts++, ta += N, sa -= N, noposts += 1, nopostsimag -= 1, H.stop().animate({
                top: ta
            }, 400), J.stop().animate({
                top: sa
            }, 400), H.css({
                left: 0
            }), J.css({
                left: 0
            }))
        }), X.off("click.click").on("click.click", function() {
            post > 0 && (post--, ta -= N, sa += N, noposts -= 1, nopostsimag += 1, H.stop().animate({
                top: ta
            }, 400), J.stop().animate({
                top: sa
            }, 400), H.css({
                left: 0
            }), J.css({
                left: 0
            }))
        })
    }
    $(".callpost", "#scalediv").off("click.click").on("click.click", function() {
        var s = $(this).attr("data-num");
        posts = s - 1, ea.show(function() {
            $(this).addClass("showposts"), $("html, body").animate({
                scrollTop: $("#wraper").offset().top
            }, 600), $(this).removeClass("noposts"), Z.removeClass("upscaleshow"), Z.addClass("scaleshow").delay(1e3).queue(function() {
                Z.addClass("scaleshowhide").dequeue()
            })
        });
        var t = j.length;
        if (810 > a) {
            j.height(N / 2), D.height("auto"), Q.height(N / 2), S.height("auto");
            var o = t * a;
            H.width(o), J.width(o), H.height(N / 2), J.height("auto"), O.width(a), K.width(a), posts = 1 * posts;
            var m = -1 * posts * a,
                l = -1 * (t - posts - 1) * k;
            H.css({
                left: l
            }), J.css({
                left: m
            }), H.css({
                top: 0
            }), J.css({
                top: 0
            }), Y.off("click.click").on("click.click", function() {
                t - 1 > posts && (posts++, l += a, m -= a, noposts += 1, nopostsimag -= 1, H.stop().animate({
                    left: l
                }, 400), J.stop().animate({
                    left: m
                }, 400), H.css({
                    top: 0
                }), J.css({
                    top: 0
                }))
            }), X.off("click.click").on("click.click", function() {
                posts > 0 && (posts--, l -= a, m += a, noposts -= 1, nopostsimag += 1, H.stop().animate({
                    left: l
                }, 400), J.stop().animate({
                    left: m
                }, 400), H.css({
                    top: 0
                }), J.css({
                    top: 0
                }))
            })
        } else {
            j.height(N), D.height(N), Q.height(N), S.height(N), posts = 1 * posts;
            var m = -1 * posts * N,
                l = -1 * (t - posts - 1) * N;
            H.css({
                top: l
            }), J.css({
                top: m
            }), H.css({
                left: 0
            }), J.css({
                left: 0
            });
            var n = (e - 50) * t;
            H.width("100%"), J.width("auto"), H.height(n), J.height(n), O.width("100%"), K.width("100%"), Y.off("click.click").on("click.click", function() {
                t - 1 > posts && (posts++, l += N, m -= N, noposts += 1, nopostsimag -= 1, H.stop().animate({
                    top: l
                }, 400), J.stop().animate({
                    top: m
                }, 400), H.css({
                    left: 0
                }), J.css({
                    left: 0
                }))
            }), X.off("click.click").on("click.click", function() {
                posts > 0 && (posts--, l -= N, m += N, noposts -= 1, nopostsimag += 1, H.stop().animate({
                    top: l
                }, 400), J.stop().animate({
                    top: m
                }, 400), H.css({
                    left: 0
                }), J.css({
                    left: 0
                }))
            })
        }
    }), $("#back", "#posts").off("click.click").on("click.click", function() {
        Z.removeClass("scaleshowhide").delay().queue(function() {
            Z.removeClass("scaleshow").dequeue(), Z.addClass("upscaleshow")
        }), lessimageview(), ea.removeClass("showposts"), ea.addClass("noposts").delay(1e3).queue(function() {
            $(this).hide().dequeue()
        }), 500 > a && t.height("auto")
    }), $(document).on("click", ".close", function() {
        lessimageview(), m.removeClass("mainImage"), m.removeClass("animqueht").delay(500).queue(function() {
            m.removeClass("animque").dequeue()
        }), setTimeout(removeanim, 1e3), C.removeClass("bigerImage"), i.removeClass("bigerImage"), m.removeClass("animq"), $("#smallimg").removeClass("leftpos"), m.addClass("makebig"), 810 > a && $("#smallimg").removeClass("leftpos")
    }), $(".moreImages").toggle(function() {
        moreimageview()
    }, function() {
        lessimageview()
    }), a > 810 ? _.height(E) : (_.height(E), m.removeClass("clickImage"))
}

function aboutcube() {
    "about" == presentPageforcube || (document.getElementById("aboutus").className += " pt-page-ontop pt-page-current pt-page-rotateUnfoldRight", document.getElementById("thumbnails").className += " pt-page-moveToLeftFade", document.getElementById("contactus").className += " pt-page-moveToLeftFade", document.getElementById("team").className += " pt-page-moveToLeftFade", document.getElementById("landingpage").className += " pt-page-moveToLeftFade", document.getElementById("blog").className += " pt-page-moveToLeftFade", $("#smallimg").removeClass("leftpos"), presentPageforcube = "about", setTimeout(aboutalertFunc, 1e3))
}

function aboutalertFunc() {
    document.getElementById("aboutus").className = "pt-page pt-page-current", document.getElementById("contactus").className = "pt-page", document.getElementById("thumbnails").className = "pt-page", document.getElementById("landingpage").className = "pt-page", document.getElementById("team").className = "pt-page", document.getElementById("blog").className = "pt-page"
}

function aboutcubeone() {
    document.getElementById("thumbnails").className += "pt-page-ontop pt-page-current pt-page-rotateUnfoldRight", document.getElementById("aboutus").className += " pt-page-moveToLeftFade", document.getElementById("contactus").className += " pt-page-moveToLeftFade", document.getElementById("landingpage").className += " pt-page-moveToLeftFade", document.getElementById("team").className += " pt-page-moveToLeftFade", document.getElementById("blog").className += " pt-page-moveToLeftFade", presentPageforcube = "thumb", setTimeout(aboutalertFuncone, 1e3)
}

function aboutalertFuncone() {
    document.getElementById("thumbnails").className = "pt-page pt-page-current", document.getElementById("aboutus").className = "pt-page", document.getElementById("contactus").className = "pt-page", document.getElementById("landingpage").className = "pt-page", document.getElementById("team").className = "pt-page", document.getElementById("blog").className = "pt-page"
}

function thumbnailscube() {
    "thumbnails" == presentPageforcube || (document.getElementById("thumbnails").className += " pt-page-ontop pt-page-current pt-page-rotateUnfoldRight", document.getElementById("aboutus").className += " pt-page-moveToLeftFade", document.getElementById("contactus").className += " pt-page-moveToLeftFade", document.getElementById("team").className += " pt-page-moveToLeftFade", document.getElementById("landingpage").className += " pt-page-moveToLeftFade", document.getElementById("blog").className += " pt-page-moveToLeftFade", $("#smallimg").removeClass("leftpos"), presentPageforcube = "thumbnails", setTimeout(thumbnailsalertFunc, 1e3))
}

function thumbnailsalertFunc() {
    document.getElementById("thumbnails").className = "pt-page pt-page-current", document.getElementById("contactus").className = "pt-page", document.getElementById("aboutus").className = "pt-page", document.getElementById("landingpage").className = "pt-page", document.getElementById("team").className = "pt-page", document.getElementById("blog").className = "pt-page"
}

function thumbnailscubeone() {
    document.getElementById("thumbnails").className += "pt-page-ontop pt-page-current pt-page-rotateUnfoldRight", document.getElementById("aboutus").className += " pt-page-moveToLeftFade", document.getElementById("contactus").className += " pt-page-moveToLeftFade", document.getElementById("landingpage").className += " pt-page-moveToLeftFade", document.getElementById("team").className += " pt-page-moveToLeftFade", document.getElementById("blog").className += " pt-page-moveToLeftFade", presentPageforcube = "thumb", setTimeout(thumbnailsalertFuncone, 1e3)
}

function thumbnailsalertFuncone() {
    document.getElementById("thumbnails").className = "pt-page pt-page-current", document.getElementById("aboutus").className = "pt-page", document.getElementById("contactus").className = "pt-page", document.getElementById("landingpage").className = "pt-page", document.getElementById("team").className = "pt-page", document.getElementById("blog").className = "pt-page"
}

function contactcube() {
    "contact" == presentPageforcube || (document.getElementById("contactus").className += " pt-page-ontop pt-page-current pt-page-rotateUnfoldRight", document.getElementById("thumbnails").className += " pt-page-moveToLeftFade", document.getElementById("aboutus").className += " pt-page-moveToLeftFade", document.getElementById("team").className += " pt-page-moveToLeftFade", document.getElementById("landingpage").className += " pt-page-moveToLeftFade", document.getElementById("blog").className += " pt-page-moveToLeftFade", $("#smallimg").removeClass("leftpos"), presentPageforcube = "contact", setTimeout(contactalertFunc, 1e3))
}

function contactalertFunc() {
    document.getElementById("contactus").className = "pt-page pt-page-current", document.getElementById("thumbnails").className = "pt-page", document.getElementById("aboutus").className = "pt-page", document.getElementById("landingpage").className = "pt-page", document.getElementById("team").className = "pt-page", document.getElementById("blog").className = "pt-page"
}

function contactcubeone() {
    document.getElementById("thumbnails").className += "pt-page-ontop pt-page-current pt-page-rotateUnfoldRight", document.getElementById("contactus").className += " pt-page-moveToLeftFade", document.getElementById("aboutus").className += " pt-page-moveToLeftFade", document.getElementById("landingpage").className += " pt-page-moveToLeftFade", document.getElementById("team").className += " pt-page-moveToLeftFade", document.getElementById("blog").className += " pt-page-moveToLeftFade", presentPageforcube = "thumb", setTimeout(contactalertFuncone, 1e3)
}

function contactalertFuncone() {
    document.getElementById("thumbnails").className = "pt-page pt-page-current", document.getElementById("contactus").className = "pt-page", document.getElementById("landingpage").className = "pt-page", document.getElementById("aboutus").className = "pt-page", document.getElementById("team").className = "pt-page", document.getElementById("blog").className = "pt-page"
}

function landingpagecube() {
    "landingpage" == presentPageforcube || (document.getElementById("landingpage").className += " pt-page-ontop pt-page-current pt-page-rotateUnfoldRight", document.getElementById("contactus").className += " pt-page-moveToLeftFade", document.getElementById("thumbnails").className += " pt-page-moveToLeftFade", document.getElementById("aboutus").className += " pt-page-moveToLeftFade", document.getElementById("team").className += " pt-page-moveToLeftFade", document.getElementById("blog").className += " pt-page-moveToLeftFade", $("#smallimg").removeClass("leftpos"), presentPageforcube = "landingpage", setTimeout(landingpagealertFunc, 1e3))
}

function landingpagealertFunc() {
    document.getElementById("landingpage").className = "pt-page pt-page-current", document.getElementById("contactus").className = "pt-page", document.getElementById("thumbnails").className = "pt-page", document.getElementById("aboutus").className = "pt-page", document.getElementById("team").className = "pt-page", document.getElementById("blog").className = "pt-page"
}

function landingpagecubeone() {
    document.getElementById("thumbnails").className += "pt-page-ontop pt-page-current pt-page-rotateUnfoldRight", document.getElementById("contactus").className += " pt-page-moveToLeftFade", document.getElementById("aboutus").className += " pt-page-moveToLeftFade", document.getElementById("landingpage").className += " pt-page-moveToLeftFade", document.getElementById("team").className += " pt-page-moveToLeftFade", document.getElementById("blog").className += " pt-page-moveToLeftFade", presentPageforcube = "thumb", setTimeout(contactalertFuncone, 1e3)
}

function landingpagealertFuncone() {
    document.getElementById("thumbnails").className = "pt-page pt-page-current", document.getElementById("contactus").className = "pt-page", document.getElementById("landingpage").className = "pt-page", document.getElementById("aboutus").className = "pt-page", document.getElementById("team").className = "pt-page", document.getElementById("blog").className = "pt-page"
}

function teamcube() {
    "team" == presentPageforcube || (document.getElementById("team").className += " pt-page-ontop pt-page-current pt-page-rotateUnfoldRight", document.getElementById("thumbnails").className += " pt-page-moveToLeftFade", document.getElementById("aboutus").className += " pt-page-moveToLeftFade", document.getElementById("contactus").className += " pt-page-moveToLeftFade", document.getElementById("landingpage").className += " pt-page-moveToLeftFade", document.getElementById("blog").className += " pt-page-moveToLeftFade", $("#smallimg").removeClass("leftpos"), presentPageforcube = "team", setTimeout(teamalertFunc, 1e3))
}

function teamalertFunc() {
    document.getElementById("team").className = "pt-page pt-page-current", document.getElementById("thumbnails").className = "pt-page", document.getElementById("aboutus").className = "pt-page", document.getElementById("contactus").className = "pt-page", document.getElementById("landingpage").className = "pt-page", document.getElementById("blog").className = "pt-page"
}

function teamcubeone() {
    document.getElementById("thumbnails").className += "pt-page-ontop pt-page-current pt-page-rotateUnfoldRight", document.getElementById("team").className += " pt-page-moveToLeftFade", document.getElementById("aboutus").className += " pt-page-moveToLeftFade", document.getElementById("contactus").className += " pt-page-moveToLeftFade", document.getElementById("landingpage").className += " pt-page-moveToLeftFade", document.getElementById("blog").className += " pt-page-moveToLeftFade", presentPageforcube = "thumb", setTimeout(teamalertFuncone, 1e3)
}

function teamalertFuncone() {
    document.getElementById("thumbnails").className = "pt-page pt-page-current", document.getElementById("team").className = "pt-page", document.getElementById("aboutus").className = "pt-page", document.getElementById("landingpage").className = "pt-page", document.getElementById("contactus").className = "pt-page", document.getElementById("blog").className = "pt-page"
}

function blogcube() {
    "blog" == presentPageforcube || (document.getElementById("blog").className += " pt-page-ontop pt-page-current pt-page-rotateUnfoldRight", document.getElementById("thumbnails").className += " pt-page-moveToLeftFade", document.getElementById("aboutus").className += " pt-page-moveToLeftFade", document.getElementById("contactus").className += " pt-page-moveToLeftFade", document.getElementById("landingpage").className += " pt-page-moveToLeftFade", document.getElementById("team").className += " pt-page-moveToLeftFade", $("#smallimg").removeClass("leftpos"), presentPageforcube = "blog", setTimeout(blogalertFunc, 1e3))
}

function blogalertFunc() {
    document.getElementById("blog").className = "pt-page pt-page-current", document.getElementById("thumbnails").className = "pt-page", document.getElementById("aboutus").className = "pt-page", document.getElementById("contactus").className = "pt-page", document.getElementById("landingpage").className = "pt-page", document.getElementById("team").className = "pt-page"
}

function blogcubeone() {
    document.getElementById("thumbnails").className += "pt-page-ontop pt-page-current pt-page-rotateUnfoldRight", document.getElementById("team").className += " pt-page-moveToLeftFade", document.getElementById("aboutus").className += " pt-page-moveToLeftFade", document.getElementById("contactus").className += " pt-page-moveToLeftFade", document.getElementById("landingpage").className += " pt-page-moveToLeftFade", document.getElementById("blog").className += " pt-page-moveToLeftFade", presentPageforcube = "thumb", setTimeout(blogalertFuncone, 1e3)
}

function blogalertFuncone() {
    document.getElementById("thumbnails").className = "pt-page pt-page-current", document.getElementById("team").className = "pt-page", document.getElementById("aboutus").className = "pt-page", document.getElementById("contactus").className = "pt-page", document.getElementById("landingpage").className = "pt-page", document.getElementById("blog").className = "pt-page"
}

function firstLoad() {
    $("#loader").css("display", "none")
}

function moreimageview() {
    var e = $(".moreImageContainer");
    e.css({
        left: "0px"
    }), e.load("moreImage/gallery1.html"), $(".moreImages").text("Close More Images"), $("figure.big .contentRight", "#scalediv").css({
        position: "fixed"
    }), $("#hiddenscroll", "#scalediv").scrollTo({
        top: 0,
        left: 0
    }, 800)
}

function lessimageview() {
    $(".moreImageContainer").css({
        left: "1200%"
    }), $(".moreImages").text("View More Images"), $("figure.big .contentRight", "#scalediv").css({
        position: "absolute"
    })
}

function addanimquehtone() {
    $('[data-id="one"] figure.big', "#scalediv").addClass("animqueht")
}

function addanimquehttwo() {
    $('[data-id="two"] figure.big', "#scalediv").addClass("animqueht")
}

function addanimquehtthree() {
    $('[data-id="three"] figure.big', "#scalediv").addClass("animqueht")
}

function addanimquehtfour() {
    $('[data-id="four"] figure.big', "#scalediv").addClass("animqueht")
}

function scrolltofour() {}

function removeanim() {
    $("figure.big", "#scalediv").removeClass("anim")
}
var presentPageforcube = "thumb";
$(window).load(function() {
    $("#wraper").addClass("animate"), $("#loader").addClass("loaderhide"), $("#row1").removeClass("initialheight"), setTimeout(firstLoad, 900)
});
var team = 0,
    noteam = 0,
    noteamimag = 3,
    blog = 0,
    noblog = 0,
    noblogimag = 8,
    posts = 0,
    noposts = 0,
    nopostsimag = 8;
$(document).ready(function() {
    fullsiteAnimation()
});
var lastWidth = $(window).width();
$(window).on("resize", function() {
    $(window).width() != lastWidth && (fullsiteAnimation(), lastWidth = $(window).width())
});