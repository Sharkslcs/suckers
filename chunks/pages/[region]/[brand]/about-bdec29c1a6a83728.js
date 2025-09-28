(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [5934], {
        93035: function(e, t, r) {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/[region]/[brand]/about", function() {
                return r(6119)
            }])
        },
        11351: function(e, t, r) {
            "use strict";
            r.d(t, {
                a: function() {
                    return l
                }
            });
            var s = r(85893),
                n = r(28276),
                a = r(11163),
                c = r(50788),
                i = r(66047),
                u = r(25753),
                d = r.n(u);

            function l(e) {
                let {
                    current: t
                } = e, {
                    t: r
                } = (0, n.$G)(), u = (0, a.useRouter)(), {
                    query: l
                } = (0, a.useRouter)(), o = !!l.origin;
                return (0, s.jsx)("div", {
                    className: d().container,
                    children: (0, s.jsxs)("div", {
                        className: d().breadcrumb,
                        "data-testid": "breadcrumb",
                        children: [(0, s.jsxs)("div", {
                            className: d().back,
                            onClick: () => u.back(),
                            children: [(0, s.jsx)(c.KYK, {
                                size: 24
                            }), (0, s.jsx)("span", {
                                "data-testid": "backBreadcrumb",
                                children: r("return")
                            })]
                        }), (0, s.jsx)("div", {
                            className: d().home,
                            children: (0, s.jsx)(i.h, {
                                href: "/",
                                "data-testid": "homeBreadcrumb",
                                children: r("home")
                            })
                        }), (0, s.jsx)(c.km, {
                            size: 24
                        }), o && (0, s.jsxs)("div", {
                            className: d().resultSearch,
                            children: [(0, s.jsx)("span", {
                                "data-testid": "searchBreadcrumb",
                                onClick: () => u.back(),
                                children: r("resultSearch")
                            }), (0, s.jsx)(c.km, {
                                size: 24
                            })]
                        }), (0, s.jsx)("span", {
                            className: d().current,
                            "data-testid": "currentBreadcrumb",
                            children: t
                        })]
                    })
                })
            }
        },
        6119: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                __N_SSG: function() {
                    return o
                },
                default: function() {
                    return _
                }
            });
            var s = r(85893),
                n = r(28276),
                a = r(33406),
                c = r.n(a);

            function i() {
                let {
                    t: e
                } = (0, n.$G)("about");
                return (0, s.jsxs)("div", {
                    className: c().pageContent,
                    children: [(0, s.jsx)("h2", {
                        children: e("title")
                    }), (0, s.jsxs)("div", {
                        className: c().text,
                        "data-testid": "text-about",
                        children: [(0, s.jsx)("p", {
                            children: e("firstParagraph")
                        }), (0, s.jsx)("p", {
                            children: e("secondParagraph")
                        }), (0, s.jsx)("p", {
                            children: e("thirdParagraph")
                        }), (0, s.jsx)("p", {
                            children: e("fourthParagraph")
                        }), (0, s.jsx)("p", {
                            children: e("fifithParagraph")
                        })]
                    })]
                })
            }
            var u = r(11351),
                d = r(9008),
                l = r.n(d),
                o = !0;

            function _() {
                let {
                    t: e
                } = (0, n.$G)("about");
                return (0, s.jsxs)(s.Fragment, {
                    children: [(0, s.jsx)(l(), {
                        children: (0, s.jsx)("title", {
                            children: "Auto Experts | ".concat(e("title"))
                        })
                    }), (0, s.jsxs)("main", {
                        "data-testid": "aboutPage",
                        children: [(0, s.jsx)(u.a, {
                            current: e("title")
                        }), (0, s.jsx)(i, {})]
                    })]
                })
            }
        },
        25753: function(e) {
            e.exports = {
                container: "styles_container__YSlsS",
                breadcrumb: "styles_breadcrumb__vhhly",
                formWrapperAccount: "styles_formWrapperAccount__iqwoU",
                current: "styles_current___LECT",
                home: "styles_home__5JCo1",
                resultSearch: "styles_resultSearch__aA6ML",
                back: "styles_back__gUj7D"
            }
        },
        33406: function(e) {
            e.exports = {
                pageContent: "styles_pageContent__yp3md",
                formWrapperAccount: "styles_formWrapperAccount__NEr0l",
                text: "styles_text__nhcOL",
                img: "styles_img__TUufG",
                undecoratedLink: "styles_undecoratedLink__w5eI_",
                link: "styles_link__d0Mi2"
            }
        }
    },
    function(e) {
        e.O(0, [2888, 9774, 179], function() {
            return e(e.s = 93035)
        }), _N_E = e.O()
    }
]);