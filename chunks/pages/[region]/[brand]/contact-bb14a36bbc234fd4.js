(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [3845], {
        93581: function(e, n, t) {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/[region]/[brand]/contact", function() {
                return t(24136)
            }])
        },
        11351: function(e, n, t) {
            "use strict";
            t.d(n, {
                a: function() {
                    return d
                }
            });
            var a = t(85893),
                s = t(28276),
                r = t(11163),
                c = t(50788),
                i = t(66047),
                o = t(25753),
                l = t.n(o);

            function d(e) {
                let {
                    current: n
                } = e, {
                    t
                } = (0, s.$G)(), o = (0, r.useRouter)(), {
                    query: d
                } = (0, r.useRouter)(), u = !!d.origin;
                return (0, a.jsx)("div", {
                    className: l().container,
                    children: (0, a.jsxs)("div", {
                        className: l().breadcrumb,
                        "data-testid": "breadcrumb",
                        children: [(0, a.jsxs)("div", {
                            className: l().back,
                            onClick: () => o.back(),
                            children: [(0, a.jsx)(c.KYK, {
                                size: 24
                            }), (0, a.jsx)("span", {
                                "data-testid": "backBreadcrumb",
                                children: t("return")
                            })]
                        }), (0, a.jsx)("div", {
                            className: l().home,
                            children: (0, a.jsx)(i.h, {
                                href: "/",
                                "data-testid": "homeBreadcrumb",
                                children: t("home")
                            })
                        }), (0, a.jsx)(c.km, {
                            size: 24
                        }), u && (0, a.jsxs)("div", {
                            className: l().resultSearch,
                            children: [(0, a.jsx)("span", {
                                "data-testid": "searchBreadcrumb",
                                onClick: () => o.back(),
                                children: t("resultSearch")
                            }), (0, a.jsx)(c.km, {
                                size: 24
                            })]
                        }), (0, a.jsx)("span", {
                            className: l().current,
                            "data-testid": "currentBreadcrumb",
                            children: n
                        })]
                    })
                })
            }
        },
        37281: function(e, n, t) {
            "use strict";
            t.d(n, {
                P: function() {
                    return l
                }
            });
            var a = t(85893),
                s = t(50788),
                r = t(70430),
                c = t.n(r),
                i = t(67294),
                o = t(28276);
            let l = i.forwardRef(function(e, n) {
                var t;
                let {
                    disabled: r,
                    options: l,
                    placeholder: d,
                    label: u,
                    error: m,
                    id: h,
                    showEmptyValue: _,
                    defaultValue: p,
                    value: f,
                    onChangeOption: v,
                    className: b,
                    onChange: x,
                    ...j
                } = e, {
                    t: y
                } = (0, o.$G)(), g = null == l ? void 0 : l.find(e => e.value === p), [k, N] = (0, i.useState)(g), C = e => {
                    v && (e ? (v(e.value), N(e)) : (v(void 0), N(void 0)))
                };
                return (0, i.useEffect)(() => {
                    N(null == l ? void 0 : l.find(e => e.value === f))
                }, [f, l]), (0, a.jsxs)("div", {
                    className: c().selectContainer,
                    children: [u && (0, a.jsx)("label", {
                        htmlFor: h,
                        "data-testid": "label-for-".concat(h),
                        children: u
                    }), (0, a.jsxs)("div", {
                        className: "".concat(c().select, " ").concat(r && c().disabled),
                        children: [(0, a.jsxs)("select", {
                            id: h,
                            disabled: r,
                            className: [c().select, b].join(" "),
                            ref: n,
                            "data-testid": h,
                            ...j,
                            onChange: e => {
                                x ? x(e) : C(null == l ? void 0 : l.find(n => n.id === e.target.value))
                            },
                            value: null !== (t = null == k ? void 0 : k.id) && void 0 !== t ? t : void 0,
                            defaultValue: void 0,
                            children: [(0, a.jsx)("option", {
                                value: "",
                                hidden: !_,
                                children: null != d ? d : y("placeSelect")
                            }), null == l ? void 0 : l.map(e => (0, a.jsx)("option", {
                                value: e.id,
                                children: e.name
                            }, e.id))]
                        }), (0, a.jsx)(s.Ix0, {})]
                    }), (0, a.jsx)("span", {
                        role: "alert",
                        "data-testid": "error-for-".concat(h),
                        children: m
                    })]
                })
            })
        },
        98675: function(e, n, t) {
            "use strict";
            t.d(n, {
                o: function() {
                    return i
                }
            });
            var a = t(85893),
                s = t(48682),
                r = t(4660),
                c = t.n(r);
            let i = t(67294).forwardRef(function(e, n) {
                let {
                    label: t,
                    error: r,
                    id: i,
                    isLoading: o,
                    ...l
                } = e;
                return (0, a.jsxs)("div", {
                    className: c().inputContainer,
                    children: [t && (0, a.jsx)("label", {
                        htmlFor: i,
                        "data-testid": "label-for-".concat(i),
                        children: t
                    }), (0, a.jsxs)("div", {
                        className: c().input,
                        children: [(0, a.jsx)("input", {
                            id: i,
                            ref: n,
                            ...l,
                            "data-testid": i
                        }), o && (0, a.jsx)("div", {
                            className: c().loader,
                            children: (0, a.jsx)(s.G, {
                                size: "24px"
                            })
                        })]
                    }), (0, a.jsx)("span", {
                        role: "alert",
                        "data-testid": "error-for-".concat(i),
                        children: r
                    })]
                })
            })
        },
        24136: function(e, n, t) {
            "use strict";
            t.r(n), t.d(n, {
                __N_SSG: function() {
                    return T
                },
                default: function() {
                    return $
                }
            });
            var a = t(85893),
                s = t(28276),
                r = t(9008),
                c = t.n(r),
                i = t(26963),
                o = t(60503),
                l = t.n(o),
                d = t(23786),
                u = t(11163),
                m = t(67294),
                h = t(87536),
                _ = t(55143),
                p = t(38140),
                f = t(52610),
                v = t(56312),
                b = t(3691),
                x = t(8979),
                j = t(37281),
                y = t(22675),
                g = t(98675),
                k = t(66047),
                N = t(1604),
                C = t(45838),
                E = t.n(C),
                B = t(50788);

            function z(e) {
                var n, t, r, c, i, o, l, C;
                let {
                    brand: z
                } = e, {
                    t: R
                } = (0, s.$G)(), L = N.z.object({
                    name: N.z.string().min(1, R("validations:name")),
                    email: N.z.string().email(R("validations:email")),
                    city: N.z.string({
                        required_error: R("validations:cityId")
                    }).refine(e => !!e, {
                        message: R("validations:cityId")
                    }),
                    phoneNumber: N.z.string().min(1, R("validations:phoneNumberRequired")).refine(e => (0, p.a$)(e), {
                        message: R("validations:phoneNumberInvalid")
                    }),
                    message: N.z.string().min(1, R("validations:message")),
                    country: N.z.string({
                        required_error: R("validations:country")
                    }),
                    state: N.z.string({
                        required_error: R("validations:state")
                    }),
                    checkbox: N.z.boolean().refine(e => !0 === e, {
                        message: R("validations:privacyPolicies")
                    })
                }), {
                    locale: M,
                    push: G
                } = (0, u.useRouter)(), P = (0, d.s3)(), {
                    region: q
                } = (0, d.En)(), {
                    register: F,
                    handleSubmit: W,
                    watch: I,
                    reset: K,
                    setValue: T,
                    trigger: $,
                    resetField: J,
                    formState: {
                        errors: O,
                        isSubmitted: U
                    }
                } = (0, h.cI)({
                    resolver: (0, v.F)(L)
                }), {
                    fetch: Y,
                    completed: X,
                    error: H,
                    loading: Q
                } = (0, d.zJ)(), {
                    data: V
                } = (0, d.Rp)(), D = I("country"), Z = I("state"), {
                    data: ee
                } = (0, d.nr)(D), {
                    data: en
                } = (0, d.Sf)(D, Z);
                (0, m.useEffect)(() => {
                    X && (K(), er())
                }, [X]), (0, m.useEffect)(() => {
                    U && setTimeout(() => {
                        $()
                    }, 500)
                }, [M]), (0, m.useEffect)(() => {
                    er()
                }, [q, V]), (0, m.useEffect)(() => {
                    J("state"), J("city")
                }, [D]), (0, m.useEffect)(() => {
                    J("city")
                }, [Z]);
                let et = e => {
                        e.length <= 14 && (T("phoneNumber", (0, p.rG)(e)), $("phoneNumber"))
                    },
                    ea = e => {
                        var n;
                        let t = null == V ? void 0 : V.find(n => n.name === e);
                        return null !== (n = null == t ? void 0 : t.iso2) && void 0 !== n ? n : ""
                    },
                    es = (e, n) => {
                        var t;
                        let a = null == n ? void 0 : n.find(n => n.iso2 === e);
                        return null !== (t = null == a ? void 0 : a.name) && void 0 !== t ? t : ""
                    },
                    er = () => {
                        switch (q) {
                            case f.RegionsEnum.Brazil:
                                T("country", ea("Brazil"));
                                break;
                            case f.RegionsEnum.Argentina:
                                T("country", ea("Argentina"));
                                break;
                            case f.RegionsEnum.Mexico:
                                T("country", ea("Mexico"));
                                break;
                            case f.RegionsEnum.Colombia:
                                T("country", ea("Colombia"))
                        }
                    };
                return (0, a.jsxs)("form", {
                    onSubmit: W(e => {
                        Y({
                            brand: z === _.rG ? void 0 : z,
                            name: e.name,
                            email: e.email,
                            country: es(e.country, V),
                            state: es(e.state, ee),
                            city: e.city,
                            phone: e.phoneNumber,
                            message: e.message
                        })
                    }),
                    className: E().contactContainer,
                    children: [(0, a.jsxs)("div", {
                        className: E().inputs,
                        children: [(0, a.jsx)("div", {
                            className: E().inputSingle,
                            children: (0, a.jsx)(j.P, {
                                id: "brandContact",
                                title: R("contact.brand"),
                                "data-testid": "brandSelector",
                                disabled: !0,
                                value: z,
                                options: S(),
                                label: R("contact.brand")
                            })
                        }), (0, a.jsxs)("div", {
                            className: E().formRow,
                            children: [(0, a.jsx)(g.o, {
                                id: "nameContact",
                                ...F("name"),
                                placeholder: R("contact.placeName"),
                                label: R("contact.name"),
                                error: null === (n = O.name) || void 0 === n ? void 0 : n.message
                            }), (0, a.jsx)(g.o, {
                                id: "emailContact",
                                ...F("email"),
                                placeholder: R("contact.placeEmail"),
                                label: R("contact.email"),
                                error: null === (t = O.email) || void 0 === t ? void 0 : t.message
                            })]
                        }), (0, a.jsxs)("div", {
                            className: E().formRow,
                            children: [(0, a.jsx)(j.P, {
                                id: "countryContact",
                                title: "country",
                                ...F("country"),
                                options: V && w(V),
                                label: R("contact.country"),
                                error: null === (r = O.country) || void 0 === r ? void 0 : r.message
                            }), (0, a.jsx)(j.P, {
                                id: "stateContact",
                                "data-testid": "state-select",
                                ...F("state"),
                                options: ee && w(ee),
                                label: R("contact.state"),
                                error: null === (c = O.state) || void 0 === c ? void 0 : c.message,
                                disabled: !ee
                            })]
                        }), (0, a.jsxs)("div", {
                            className: E().formRow,
                            children: [(0, a.jsx)(j.P, {
                                id: "cityContact",
                                "data-testid": "city-select",
                                ...F("city", {
                                    valueAsNumber: !1
                                }),
                                options: en && A(en),
                                label: R("contact.city"),
                                error: null === (i = O.city) || void 0 === i ? void 0 : i.message,
                                disabled: !en
                            }), (0, a.jsx)(g.o, {
                                id: "phoneContact",
                                title: "phone",
                                ...F("phoneNumber", {
                                    onChange: e => {
                                        et(e.target.value)
                                    }
                                }),
                                placeholder: "(__)_____-____",
                                label: R("contact.telephone"),
                                error: null === (o = O.phoneNumber) || void 0 === o ? void 0 : o.message
                            })]
                        }), (0, a.jsxs)("div", {
                            className: E().inputSingle,
                            children: [(0, a.jsx)(y.K, {
                                id: "messageContact",
                                ...F("message"),
                                placeholder: R("contact.placeMessage"),
                                label: R("contact.message"),
                                error: null === (l = O.message) || void 0 === l ? void 0 : l.message
                            }), X && (0, a.jsx)("p", {
                                children: R("contact.successMessage")
                            }), void 0 !== H ? (0, a.jsx)("span", {
                                children: R("contact.errorMessage")
                            }) : null]
                        }), (0, a.jsx)("div", {
                            className: E().inputSingle,
                            children: (0, a.jsx)(x.X, {
                                id: "contact-policy-checkbox",
                                ...F("checkbox"),
                                label: (0, a.jsxs)(a.Fragment, {
                                    children: [R("contact.privacyPolicyFirstMessage"), (0, a.jsx)("span", {
                                        className: E().checkboxClass,
                                        children: (0, a.jsx)(k.h, {
                                            href: "/privacy",
                                            target: "_blank",
                                            children: R("contact.privacyPolicySecondMessage")
                                        })
                                    }), R("contact.privacyPolicyThirdMessage")]
                                }),
                                error: null === (C = O.checkbox) || void 0 === C ? void 0 : C.message
                            })
                        })]
                    }), (0, a.jsxs)("div", {
                        className: E().actions,
                        children: [(0, a.jsxs)(b.z, {
                            outlined: !0,
                            id: "back-button",
                            onClick: () => G("".concat(P, "/contact")),
                            children: [(0, a.jsx)(B.sG8, {
                                size: 24
                            }), R("return")]
                        }), (0, a.jsx)(b.z, {
                            type: "submit",
                            variant: "secondary",
                            id: "sendButton",
                            "data-testid": "submit-button",
                            isLoading: Q,
                            children: R("contact.sendButton")
                        })]
                    })]
                })
            }
            let S = () => Object.values(f.BrandsEnum).map(e => ({
                    id: e,
                    value: e,
                    name: e.charAt(0).toUpperCase() + e.slice(1)
                })).concat({
                    id: _.rG,
                    value: _.rG,
                    name: _.lb
                }).sort((e, n) => e.name.localeCompare(n.name)),
                w = e => e.map(e => ({
                    id: e.iso2,
                    name: e.name,
                    value: e.iso2
                })).sort((e, n) => e.name.localeCompare(n.name)),
                A = e => e.map(e => ({
                    id: e.name,
                    name: e.name,
                    value: e.name
                })).sort((e, n) => e.name.localeCompare(n.name));
            var R = t(41664),
                L = t.n(R),
                M = t(64782),
                G = t.n(M),
                P = t(25675),
                q = t.n(P);
            let F = {
                [i.rG]: {
                    href: "/contact?contactBrand=".concat(i.rG),
                    internalLink: !0
                },
                [f.BrandsEnum.Master]: {
                    href: "/contact?contactBrand=".concat(f.BrandsEnum.Master),
                    internalLink: !0
                },
                [f.BrandsEnum.Suspensys]: {
                    href: "/contact?contactBrand=".concat(f.BrandsEnum.Suspensys),
                    internalLink: !0
                },
                [f.BrandsEnum.Castertech]: {
                    href: "/contact?contactBrand=".concat(f.BrandsEnum.Castertech),
                    internalLink: !0
                },
                [f.BrandsEnum.Jost]: {
                    href: "/contact?contactBrand=".concat(f.BrandsEnum.Jost),
                    internalLink: !0
                },
                [f.BrandsEnum.Frasle]: {
                    href: "https://frasle.zendesk.com/hc/pt-br/requests/new"
                },
                [f.BrandsEnum.Lonaflex]: {
                    href: "https://lonaflex.zendesk.com/hc/pt-br/requests/new"
                },
                [f.BrandsEnum.Controil]: {
                    href: "https://controil.zendesk.com/hc/pt-br/requests/new"
                },
                [f.BrandsEnum.Fremax]: {
                    href: "https://fremax.zendesk.com/hc/pt-br/requests/new"
                },
                [f.BrandsEnum.Nakata]: {
                    href: "https://nakataautomotivaltda.zendesk.com/hc/pt-br/requests/new"
                }
            };

            function W(e) {
                let {
                    brand: n
                } = e, t = F[n].internalLink, s = t ? k.h : L();
                return (0, a.jsx)(s, {
                    className: G().brandLink,
                    href: F[n].href,
                    target: t ? "_self" : "_blank",
                    "data-testid": "link-".concat(n),
                    children: (0, a.jsx)("li", {
                        children: (0, a.jsx)(q(), {
                            fill: !0,
                            src: (0, i.ns)(n),
                            alt: n,
                            className: G().brandImg,
                            sizes: i.eM
                        })
                    })
                }, n)
            }

            function I() {
                let {
                    t: e
                } = (0, s.$G)(), {
                    region: n
                } = (0, d.En)(), t = (0, d.aM)(), [r, c] = (0, m.useState)(), o = [i.rG, ...i.ux[n]], u = e => o.includes(e) && !!F[e].internalLink;
                return (0, m.useEffect)(() => {
                    let e = t.contactBrand;
                    c(u(e) ? e : void 0)
                }, [t]), (0, a.jsxs)("div", {
                    className: l().container,
                    children: [(0, a.jsx)("h2", {
                        children: e("contact.title")
                    }), r ? (0, a.jsx)(z, {
                        brand: r
                    }) : (0, a.jsxs)("div", {
                        children: [(0, a.jsx)("p", {
                            children: e("contact.subtitle")
                        }), (0, a.jsxs)("div", {
                            className: l().brands,
                            children: [(0, a.jsx)("p", {
                                children: e("contact.selectTheBrand")
                            }), (0, a.jsx)("ul", {
                                children: o.map(e => (0, a.jsx)(W, {
                                    brand: e
                                }, e))
                            })]
                        })]
                    })]
                })
            }
            var K = t(11351),
                T = !0;

            function $() {
                let {
                    t: e
                } = (0, s.$G)();
                return (0, a.jsxs)(a.Fragment, {
                    children: [(0, a.jsx)(c(), {
                        children: (0, a.jsx)("title", {
                            children: "Auto Experts | ".concat(e("contact.title"))
                        })
                    }), (0, a.jsxs)("main", {
                        "data-testid": "contactPage",
                        children: [(0, a.jsx)(K.a, {
                            current: e("contact.title")
                        }), (0, a.jsx)(I, {})]
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
        64782: function(e) {
            e.exports = {
                formWrapperAccount: "styles_formWrapperAccount__bwMQ_",
                brandLink: "styles_brandLink__nOz2y",
                brandImg: "styles_brandImg___OGSN"
            }
        },
        45838: function(e) {
            e.exports = {
                formWrapperAccount: "styles_formWrapperAccount__nkMhc",
                contactContainer: "styles_contactContainer__BKSMA",
                inputs: "styles_inputs__B2enI",
                checkboxClass: "styles_checkboxClass__aIJBl",
                inputSingle: "styles_inputSingle__RuLQK",
                formRow: "styles_formRow__YRo7l",
                actions: "styles_actions__LceNo"
            }
        },
        60503: function(e) {
            e.exports = {
                container: "styles_container__PsrFa",
                formWrapperAccount: "styles_formWrapperAccount__ssHFU",
                brands: "styles_brands__MmNzP"
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
            return e(e.s = 93581)
        }), _N_E = e.O()
    }
]);