(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [6197], {
        21529: function(e, t, a) {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/[region]/[brand]/download-pdf", function() {
                return a(65814)
            }])
        },
        11351: function(e, t, a) {
            "use strict";
            a.d(t, {
                a: function() {
                    return c
                }
            });
            var n = a(85893),
                s = a(28276),
                r = a(11163),
                o = a(50788),
                l = a(66047),
                d = a(25753),
                i = a.n(d);

            function c(e) {
                let {
                    current: t
                } = e, {
                    t: a
                } = (0, s.$G)(), d = (0, r.useRouter)(), {
                    query: c
                } = (0, r.useRouter)(), u = !!c.origin;
                return (0, n.jsx)("div", {
                    className: i().container,
                    children: (0, n.jsxs)("div", {
                        className: i().breadcrumb,
                        "data-testid": "breadcrumb",
                        children: [(0, n.jsxs)("div", {
                            className: i().back,
                            onClick: () => d.back(),
                            children: [(0, n.jsx)(o.KYK, {
                                size: 24
                            }), (0, n.jsx)("span", {
                                "data-testid": "backBreadcrumb",
                                children: a("return")
                            })]
                        }), (0, n.jsx)("div", {
                            className: i().home,
                            children: (0, n.jsx)(l.h, {
                                href: "/",
                                "data-testid": "homeBreadcrumb",
                                children: a("home")
                            })
                        }), (0, n.jsx)(o.km, {
                            size: 24
                        }), u && (0, n.jsxs)("div", {
                            className: i().resultSearch,
                            children: [(0, n.jsx)("span", {
                                "data-testid": "searchBreadcrumb",
                                onClick: () => d.back(),
                                children: a("resultSearch")
                            }), (0, n.jsx)(o.km, {
                                size: 24
                            })]
                        }), (0, n.jsx)("span", {
                            className: i().current,
                            "data-testid": "currentBreadcrumb",
                            children: t
                        })]
                    })
                })
            }
        },
        37281: function(e, t, a) {
            "use strict";
            a.d(t, {
                P: function() {
                    return i
                }
            });
            var n = a(85893),
                s = a(50788),
                r = a(70430),
                o = a.n(r),
                l = a(67294),
                d = a(28276);
            let i = l.forwardRef(function(e, t) {
                var a;
                let {
                    disabled: r,
                    options: i,
                    placeholder: c,
                    label: u,
                    error: m,
                    id: h,
                    showEmptyValue: p,
                    defaultValue: _,
                    value: f,
                    onChangeOption: x,
                    className: b,
                    onChange: j,
                    ...v
                } = e, {
                    t: g
                } = (0, d.$G)(), y = null == i ? void 0 : i.find(e => e.value === _), [w, P] = (0, l.useState)(y), k = e => {
                    x && (e ? (x(e.value), P(e)) : (x(void 0), P(void 0)))
                };
                return (0, l.useEffect)(() => {
                    P(null == i ? void 0 : i.find(e => e.value === f))
                }, [f, i]), (0, n.jsxs)("div", {
                    className: o().selectContainer,
                    children: [u && (0, n.jsx)("label", {
                        htmlFor: h,
                        "data-testid": "label-for-".concat(h),
                        children: u
                    }), (0, n.jsxs)("div", {
                        className: "".concat(o().select, " ").concat(r && o().disabled),
                        children: [(0, n.jsxs)("select", {
                            id: h,
                            disabled: r,
                            className: [o().select, b].join(" "),
                            ref: t,
                            "data-testid": h,
                            ...v,
                            onChange: e => {
                                j ? j(e) : k(null == i ? void 0 : i.find(t => t.id === e.target.value))
                            },
                            value: null !== (a = null == w ? void 0 : w.id) && void 0 !== a ? a : void 0,
                            defaultValue: void 0,
                            children: [(0, n.jsx)("option", {
                                value: "",
                                hidden: !p,
                                children: null != c ? c : g("placeSelect")
                            }), null == i ? void 0 : i.map(e => (0, n.jsx)("option", {
                                value: e.id,
                                children: e.name
                            }, e.id))]
                        }), (0, n.jsx)(s.Ix0, {})]
                    }), (0, n.jsx)("span", {
                        role: "alert",
                        "data-testid": "error-for-".concat(h),
                        children: m
                    })]
                })
            })
        },
        98675: function(e, t, a) {
            "use strict";
            a.d(t, {
                o: function() {
                    return l
                }
            });
            var n = a(85893),
                s = a(48682),
                r = a(4660),
                o = a.n(r);
            let l = a(67294).forwardRef(function(e, t) {
                let {
                    label: a,
                    error: r,
                    id: l,
                    isLoading: d,
                    ...i
                } = e;
                return (0, n.jsxs)("div", {
                    className: o().inputContainer,
                    children: [a && (0, n.jsx)("label", {
                        htmlFor: l,
                        "data-testid": "label-for-".concat(l),
                        children: a
                    }), (0, n.jsxs)("div", {
                        className: o().input,
                        children: [(0, n.jsx)("input", {
                            id: l,
                            ref: t,
                            ...i,
                            "data-testid": l
                        }), d && (0, n.jsx)("div", {
                            className: o().loader,
                            children: (0, n.jsx)(s.G, {
                                size: "24px"
                            })
                        })]
                    }), (0, n.jsx)("span", {
                        role: "alert",
                        "data-testid": "error-for-".concat(l),
                        children: r
                    })]
                })
            })
        },
        65814: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                __N_SSG: function() {
                    return K
                },
                default: function() {
                    return R
                }
            });
            var n = a(85893),
                s = a(11351),
                r = a(9008),
                o = a.n(r),
                l = a(28276),
                d = a(69661),
                i = a(46244),
                c = a(23786),
                u = a(25675),
                m = a.n(u);

            function h(e) {
                let {
                    onClick: t
                } = e, {
                    brand: a
                } = (0, c.DY)(), {
                    region: s
                } = (0, c.En)(), r = Object.keys(d.p).filter(e => a ? e === a : Object.keys(d.p[e].files).includes(s));
                return (0, n.jsx)("ul", {
                    "data-testid": "brands",
                    children: r.map(e => (0, n.jsx)("li", {
                        onClick: () => t(e),
                        "data-testid": "brand-".concat(e),
                        children: (0, n.jsx)("div", {
                            children: (0, n.jsx)(m(), {
                                fill: !0,
                                src: "/images/".concat(e, ".svg"),
                                alt: e,
                                sizes: i.eM
                            })
                        })
                    }, e))
                })
            }
            var p = a(67294),
                _ = a(44349),
                f = a.n(_),
                x = a(52610),
                b = a(38140),
                j = a(1604),
                v = a(3691),
                g = a(56312),
                y = a(87536),
                w = a(53900),
                P = a.n(w),
                k = a(8979),
                F = a(41664),
                N = a.n(F),
                C = a(98675),
                D = a(37281),
                S = a(50788),
                z = a(74016),
                E = a(26963),
                A = a(71930),
                W = a(77807),
                B = a(95643);

            function G(e) {
                var t, a, s, r, o, d;
                let {
                    brand: i,
                    closeModal: u
                } = e, [m, h] = (0, p.useState)(!1), [_, f] = (0, p.useState)(!1), {
                    t: w
                } = (0, l.$G)(), {
                    region: F
                } = (0, c.En)(), G = j.z.object({
                    name: j.z.string().min(1, w("validations:name")),
                    email: j.z.string().email(w("validations:email")),
                    phone: j.z.string().min(1, w("validations:phoneNumberRequired")).refine(e => (0, b.a$)(e), {
                        message: w("validations:phoneNumberInvalid")
                    }),
                    segment: j.z.nativeEnum(x.SegmentEnum, {
                        errorMap: () => ({
                            message: w("validations:segment")
                        })
                    }),
                    productCategory: j.z.nativeEnum(x.ProductCategoryEnum, {
                        errorMap: () => ({
                            message: w("validations:productCategory")
                        })
                    }),
                    checkbox: j.z.boolean().refine(e => !0 === e, {
                        message: w("validations:communication")
                    })
                }), {
                    register: q,
                    handleSubmit: K,
                    reset: R,
                    trigger: Y,
                    setValue: $,
                    formState: {
                        errors: M,
                        isSubmitted: O
                    }
                } = (0, y.cI)({
                    resolver: (0, g.F)(G)
                }), {
                    fetch: T
                } = (0, c.Ny)(B.h), I = async e => {
                    if (i) {
                        if (h(!0), f(!1), (await T({ ...e,
                                brand: i
                            })).success) {
                            let e = E.pB[i].catalog,
                                t = E.pB[i].files[F];
                            (0, z.s)(e, t), h(!1), R(), u()
                        } else h(!1), f(!0)
                    }
                }, L = e => {
                    e.length <= 14 && ($("phone", (0, b.rG)(e)), Y("phone"))
                }, U = () => {
                    R(), u()
                };
                return (0, n.jsxs)(A.Z, {
                    enabled: !!i,
                    children: [(0, n.jsxs)("dialog", {
                        className: P().modal,
                        open: !!i,
                        children: [(0, n.jsxs)("div", {
                            className: P().header,
                            "data-testid": "modal-header",
                            children: [(0, n.jsx)("h2", {
                                children: w("downloadPDF.form.title")
                            }), (0, n.jsx)(v.z, {
                                id: "close-modal-button",
                                onClick: U,
                                children: (0, n.jsx)(S.FU5, {})
                            })]
                        }), (0, n.jsxs)("form", {
                            onSubmit: K(I),
                            "data-testid": "form",
                            children: [(0, n.jsx)(C.o, {
                                id: "fullName",
                                "data-testid": "fullName",
                                ...q("name"),
                                placeholder: w("downloadPDF.form.name.placeholder"),
                                label: w("downloadPDF.form.name.label") + "*",
                                error: null === (t = M.name) || void 0 === t ? void 0 : t.message
                            }), (0, n.jsx)(C.o, {
                                id: "phone",
                                "data-testid": "phone",
                                type: "tel",
                                ...q("phone", {
                                    onChange: e => {
                                        L(e.target.value)
                                    }
                                }),
                                placeholder: "(__)_____-____",
                                label: w("downloadPDF.form.phone.label") + "*",
                                error: null === (a = M.phone) || void 0 === a ? void 0 : a.message
                            }), (0, n.jsx)(C.o, {
                                id: "email",
                                "data-testid": "email",
                                type: "email",
                                ...q("email"),
                                label: w("downloadPDF.form.email.label") + "*",
                                error: null === (s = M.email) || void 0 === s ? void 0 : s.message
                            }), (0, n.jsx)(D.P, {
                                id: "segment",
                                "data-testid": "segment",
                                title: w("downloadPDF.form.segment"),
                                ...q("segment"),
                                options: (0, W.DH)(w),
                                label: w("downloadPDF.form.segment") + "*",
                                error: null === (r = M.segment) || void 0 === r ? void 0 : r.message
                            }), (0, n.jsx)(D.P, {
                                "data-testid": "product-category",
                                id: "productCategory",
                                label: w("downloadPDF.form.productCategory") + "*",
                                options: (0, W.de)(w),
                                title: w("downloadPDF.form.productCategory"),
                                error: null === (o = M.productCategory) || void 0 === o ? void 0 : o.message,
                                ...q("productCategory")
                            }), (0, n.jsx)("div", {
                                children: (0, n.jsx)(k.X, {
                                    id: "checkbox-communication",
                                    ...q("checkbox"),
                                    label: w("downloadPDF.form.communication"),
                                    "data-testid": "checkbox",
                                    error: null === (d = M.checkbox) || void 0 === d ? void 0 : d.message
                                })
                            }), (0, n.jsxs)("p", {
                                "data-testid": "policy",
                                children: [w("downloadPDF.form.policy.text"), (0, n.jsx)(N(), {
                                    href: w("downloadPDF.form.policy.url"),
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                    children: w("downloadPDF.form.policy.link")
                                })]
                            }), O && _ ? (0, n.jsx)("span", {
                                "data-testid": "form-error",
                                children: w("downloadPDF.form.error")
                            }) : null, (0, n.jsxs)("div", {
                                className: P().actions,
                                "data-testid": "modal-actions",
                                children: [(0, n.jsx)(v.z, {
                                    id: "cancel-button",
                                    variant: "primary",
                                    onClick: U,
                                    outlined: !0,
                                    children: w("cancel")
                                }), (0, n.jsxs)(v.z, {
                                    id: "submit-button",
                                    variant: "primary",
                                    isLoading: m,
                                    className: P().submitButton,
                                    type: "submit",
                                    "data-testid": "submit-button",
                                    children: [(0, n.jsx)(S.uKn, {}), "Download PDF"]
                                })]
                            })]
                        })]
                    }), !!i && (0, n.jsx)("div", {
                        className: P().background,
                        "data-testid": "modal-background"
                    })]
                })
            }

            function q() {
                let {
                    t: e
                } = (0, l.$G)(), [t, a] = (0, p.useState)(null);
                return (0, n.jsxs)("div", {
                    className: f().content,
                    "data-testid": "download-pdf",
                    children: [(0, n.jsx)("h1", {
                        "data-testid": "download-pdf-title",
                        children: e("downloadPDF.title")
                    }), (0, n.jsxs)("div", {
                        "data-testid": "download-pdf-content",
                        children: [(0, n.jsx)("p", {
                            children: e("downloadPDF.body.firstParagraph")
                        }), (0, n.jsx)("p", {
                            children: e("downloadPDF.body.secondParagraph")
                        }), (0, n.jsx)("p", {
                            children: e("downloadPDF.body.thirdParagraph")
                        }), (0, n.jsx)("p", {
                            children: e("downloadPDF.body.fourthParagraph")
                        })]
                    }), (0, n.jsx)(h, {
                        onClick: a
                    }), (0, n.jsx)(G, {
                        brand: t,
                        closeModal: () => {
                            a(null)
                        }
                    })]
                })
            }
            var K = !0;

            function R() {
                let {
                    t: e
                } = (0, l.$G)("common");
                return (0, n.jsxs)(n.Fragment, {
                    children: [(0, n.jsx)(o(), {
                        children: (0, n.jsx)("title", {
                            children: "Auto Experts | ".concat(e("downloadPDF.title"))
                        })
                    }), (0, n.jsxs)("main", {
                        children: [(0, n.jsx)(s.a, {
                            current: e("downloadPDF.title")
                        }), (0, n.jsx)(q, {})]
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
        53900: function(e) {
            e.exports = {
                formWrapperAccount: "styles_formWrapperAccount__sCYKz",
                modal: "styles_modal__UXsg1",
                header: "styles_header__hPWRa",
                actions: "styles_actions__TtFy9",
                submitButton: "styles_submitButton__Expe6",
                background: "styles_background__vqmf6"
            }
        },
        44349: function(e) {
            e.exports = {
                content: "styles_content__6YzOQ",
                formWrapperAccount: "styles_formWrapperAccount__S3C5h"
            }
        },
        70430: function(e) {
            e.exports = {
                formWrapperAccount: "styles_formWrapperAccount__KgIZS",
                selectContainer: "styles_selectContainer__nfsrT",
                select: "styles_select__qVbjY",
                disabled: "styles_disabled__xsku2"
            }
        },
        4660: function(e) {
            e.exports = {
                formWrapperAccount: "styles_formWrapperAccount__Bxon_",
                inputContainer: "styles_inputContainer__LuuSn",
                input: "styles_input__KF5n9",
                disabled: "styles_disabled__5qcHn",
                loader: "styles_loader__8qf_F"
            }
        }
    },
    function(e) {
        e.O(0, [2888, 9774, 179], function() {
            return e(e.s = 21529)
        }), _N_E = e.O()
    }
]);