(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [3556], {
        21297: function(e, s, t) {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/[region]/[brand]", function() {
                return t(39632)
            }])
        },
        24957: function(e, s) {
            "use strict";
            s.Z = {
                src: "/_next/static/media/loyalty-know-cars.4770c2ec.png",
                height: 960,
                width: 1440,
                blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAMAAABPT11nAAAATlBMVEX13cj75M78+/u/sZ2ih2nnz7jvsXj68uza19NiVEOtjHjk2tWbe13x39HQspqlknZ1a2G/qo767t97ZE3Bh0/307v4w5Kdb1W9lnnVybGh90BIAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAMElEQVR4nAXBhQEAIAwDsKIb7vb/oyQwSIGZFUgSsn8XJIXVTnmsbeeo7qALmKZL/B9yAYyp7KCeAAAAAElFTkSuQmCC",
                blurWidth: 8,
                blurHeight: 5
            }
        },
        95850: function(e, s, t) {
            "use strict";
            t.d(s, {
                i: function() {
                    return _
                }
            });
            var a = t(85893);
            t(64172), t(16303), t(96936);
            var i = t(25675),
                l = t.n(i),
                n = t(67294),
                r = t(94135),
                c = t(2261),
                o = t(46244),
                d = t(41664),
                u = t.n(d),
                m = t(11201),
                h = t.n(m);

            function _(e) {
                let {
                    slides: s,
                    isRounded: t
                } = e;
                return (0, a.jsx)("div", {
                    className: h().carouselWrapper,
                    children: (0, a.jsx)(c.tq, {
                        role: "list",
                        pagination: {
                            clickable: !0
                        },
                        effect: "fade",
                        autoplay: {
                            delay: 5e3,
                            disableOnInteraction: !1
                        },
                        modules: [r.xW, r.tl, r.pt],
                        className: "".concat(h().carousel, " ").concat(0 === s.length ? h().hidden : "", " ").concat(t ? h().rounded : ""),
                        children: s.map((e, t) => (0, a.jsx)(c.o5, {
                            className: h().slide,
                            children: e.redirectLink ? (0, a.jsx)(u(), {
                                href: e.redirectLink,
                                target: e.externalLink ? "_blank" : "_self",
                                children: (0, a.jsx)(p, {
                                    images: s,
                                    src: e.image,
                                    index: t
                                })
                            }) : (0, a.jsx)(p, {
                                images: s,
                                src: e.image,
                                index: t
                            })
                        }, e.image))
                    })
                })
            }

            function p(e) {
                let {
                    images: s,
                    src: t,
                    index: i
                } = e, r = (0, c.oc)();
                return (0, n.useEffect)(() => {
                    r.update(), r.autoplay && r.autoplay.start()
                }, [s]), (0, a.jsx)(l(), {
                    fill: !0,
                    src: t,
                    alt: "Banner ".concat(i),
                    sizes: o.S0
                })
            }
        },
        10474: function(e, s, t) {
            "use strict";
            t.d(s, {
                I: function() {
                    return p
                }
            });
            var a = t(85893),
                i = t(28276),
                l = t(25675),
                n = t.n(l),
                r = t(55143),
                c = t(46244),
                o = t(3691),
                d = t(8979),
                u = t(66047),
                m = t(22588),
                h = t(30873),
                _ = t.n(h);

            function p(e) {
                var s, t;
                let {
                    additionalLinkParams: l,
                    hasCompare: h,
                    hideBrand: p,
                    product: f,
                    selectedProducts: v,
                    updateSelectedProducts: x
                } = e, {
                    t: b
                } = (0, i.$G)(), y = (0, r.lL)(f.brand.id), g = null != v ? v : [], j = g.length <= 4, A = g.some(e => e.id === f.id), N = e => {
                    x && (A ? x(g.filter(s => s.id !== e.id)) : x([...g, e]))
                };
                return (0, a.jsxs)("div", {
                    className: _().card,
                    children: [(0, a.jsxs)(u.h, {
                        passHref: !0,
                        href: {
                            pathname: "/product/".concat(f.id),
                            query: l
                        },
                        as: "/product/".concat(f.id),
                        className: _().content,
                        children: [f.release && (0, a.jsx)(m._, {
                            id: f.partNumber
                        }), (0, a.jsx)("div", {
                            className: _().image,
                            children: (0, a.jsx)(n(), {
                                src: null !== (t = null === (s = f.mainImage) || void 0 === s ? void 0 : s.thumbnailUrl) && void 0 !== t ? t : "/images/not_found.png",
                                alt: f.applicationDescription,
                                fill: !0,
                                sizes: c.eM
                            })
                        }), (0, a.jsxs)("div", {
                            className: _().body,
                            children: [(0, a.jsx)("div", {
                                className: _().headerLogos,
                                children: !p && y && (0, a.jsx)("div", {
                                    className: _().brandIcon,
                                    children: (0, a.jsx)(n(), {
                                        src: y.logo,
                                        alt: f.brand.name,
                                        fill: !0,
                                        sizes: c.eM
                                    })
                                })
                            }), (0, a.jsxs)("p", {
                                className: _().title,
                                children: [f.brand.name, " - ", f.partNumber]
                            }), (0, a.jsx)("p", {
                                className: _().description,
                                children: f.applicationDescription
                            })]
                        })]
                    }), (0, a.jsxs)("div", {
                        className: _().detailsLink,
                        children: [h && (0, a.jsx)("div", {
                            className: _().compare,
                            children: (0, a.jsx)(d.X, {
                                disabled: !A && !j,
                                checked: A,
                                id: "compare-product",
                                label: b("compare"),
                                onChange: () => N(f)
                            })
                        }), (0, a.jsx)(u.h, {
                            passHref: !0,
                            href: {
                                pathname: "/product/".concat(f.id),
                                query: l
                            },
                            as: "/product/".concat(f.id),
                            children: (0, a.jsx)(o.z, {
                                id: "view-details-button",
                                type: "button",
                                children: b("viewDetails")
                            })
                        })]
                    })]
                })
            }
        },
        63222: function(e, s, t) {
            "use strict";
            t.d(s, {
                G: function() {
                    return u
                }
            });
            var a = t(85893),
                i = t(94135),
                l = t(2261),
                n = t(10474),
                r = t(48682),
                c = t(3691),
                o = t(59047),
                d = t.n(o);

            function u(e) {
                let {
                    buttonText: s,
                    data: t,
                    isLoading: o,
                    infinite: u,
                    onClick: m,
                    title: h,
                    releases: _
                } = e, p = t.length >= 6, f = t;
                return _ && (f = f.slice(0, 5)), (0, a.jsxs)("div", {
                    "data-testid": "container-productCarousel",
                    className: "".concat(d().container, " ").concat(t.length ? "" : d().hidden),
                    children: [o && (0, a.jsx)("div", {
                        className: d().loader,
                        children: (0, a.jsx)(r.G, {
                            size: "50px"
                        })
                    }), t.length >= 1 && (0, a.jsxs)(a.Fragment, {
                        children: [(0, a.jsxs)("div", {
                            className: d().header,
                            children: [(0, a.jsx)("h3", {
                                "data-testid": _ ? "title-carousel-releases" : "title-carousel-relateds",
                                children: h
                            }), s && p && (0, a.jsx)(c.z, {
                                id: "button-carousel",
                                outlined: !0,
                                variant: "secondary",
                                className: d().seeAllButton,
                                onClick: m,
                                children: s
                            })]
                        }), (0, a.jsx)(l.tq, {
                            role: "list",
                            loop: u,
                            className: u ? d().infinite : "",
                            navigation: !0,
                            pagination: {
                                clickable: !0
                            },
                            modules: [i.tl, i.W_],
                            slidesPerView: 2,
                            slidesPerGroup: 2,
                            spaceBetween: 12,
                            breakpoints: {
                                640: {
                                    slidesPerView: 2,
                                    spaceBetween: 12
                                },
                                768: {
                                    slidesPerView: 4,
                                    slidesPerGroup: 4,
                                    spaceBetween: 20
                                },
                                1080: {
                                    slidesPerView: 5,
                                    slidesPerGroup: 1,
                                    spaceBetween: 20
                                }
                            },
                            children: f.map(e => (0, a.jsx)(l.o5, {
                                children: (0, a.jsx)(n.I, {
                                    product: e,
                                    hideBrand: !0
                                })
                            }, e.id))
                        })]
                    })]
                })
            }
            t(64172), t(57638), t(96936)
        },
        22588: function(e, s, t) {
            "use strict";
            t.d(s, {
                _: function() {
                    return c
                }
            });
            var a = t(85893),
                i = t(28276),
                l = t(50788),
                n = t(19793),
                r = t.n(n);

            function c(e) {
                let {
                    id: s,
                    compact: t
                } = e, {
                    t: n
                } = (0, i.$G)();
                return (0, a.jsxs)("div", {
                    role: "status",
                    className: r().releaseChip,
                    "data-testid": "release-chip-".concat(s),
                    children: [(0, a.jsx)(l.su0, {}), !t && (0, a.jsx)("span", {
                        children: n("release")
                    })]
                })
            }
        },
        37281: function(e, s, t) {
            "use strict";
            t.d(s, {
                P: function() {
                    return o
                }
            });
            var a = t(85893),
                i = t(50788),
                l = t(70430),
                n = t.n(l),
                r = t(67294),
                c = t(28276);
            let o = r.forwardRef(function(e, s) {
                var t;
                let {
                    disabled: l,
                    options: o,
                    placeholder: d,
                    label: u,
                    error: m,
                    id: h,
                    showEmptyValue: _,
                    defaultValue: p,
                    value: f,
                    onChangeOption: v,
                    className: x,
                    onChange: b,
                    ...y
                } = e, {
                    t: g
                } = (0, c.$G)(), j = null == o ? void 0 : o.find(e => e.value === p), [A, N] = (0, r.useState)(j), w = e => {
                    v && (e ? (v(e.value), N(e)) : (v(void 0), N(void 0)))
                };
                return (0, r.useEffect)(() => {
                    N(null == o ? void 0 : o.find(e => e.value === f))
                }, [f, o]), (0, a.jsxs)("div", {
                    className: n().selectContainer,
                    children: [u && (0, a.jsx)("label", {
                        htmlFor: h,
                        "data-testid": "label-for-".concat(h),
                        children: u
                    }), (0, a.jsxs)("div", {
                        className: "".concat(n().select, " ").concat(l && n().disabled),
                        children: [(0, a.jsxs)("select", {
                            id: h,
                            disabled: l,
                            className: [n().select, x].join(" "),
                            ref: s,
                            "data-testid": h,
                            ...y,
                            onChange: e => {
                                b ? b(e) : w(null == o ? void 0 : o.find(s => s.id === e.target.value))
                            },
                            value: null !== (t = null == A ? void 0 : A.id) && void 0 !== t ? t : void 0,
                            defaultValue: void 0,
                            children: [(0, a.jsx)("option", {
                                value: "",
                                hidden: !_,
                                children: null != d ? d : g("placeSelect")
                            }), null == o ? void 0 : o.map(e => (0, a.jsx)("option", {
                                value: e.id,
                                children: e.name
                            }, e.id))]
                        }), (0, a.jsx)(i.Ix0, {})]
                    }), (0, a.jsx)("span", {
                        role: "alert",
                        "data-testid": "error-for-".concat(h),
                        children: m
                    })]
                })
            })
        },
        98675: function(e, s, t) {
            "use strict";
            t.d(s, {
                o: function() {
                    return r
                }
            });
            var a = t(85893),
                i = t(48682),
                l = t(4660),
                n = t.n(l);
            let r = t(67294).forwardRef(function(e, s) {
                let {
                    label: t,
                    error: l,
                    id: r,
                    isLoading: c,
                    ...o
                } = e;
                return (0, a.jsxs)("div", {
                    className: n().inputContainer,
                    children: [t && (0, a.jsx)("label", {
                        htmlFor: r,
                        "data-testid": "label-for-".concat(r),
                        children: t
                    }), (0, a.jsxs)("div", {
                        className: n().input,
                        children: [(0, a.jsx)("input", {
                            id: r,
                            ref: s,
                            ...o,
                            "data-testid": r
                        }), c && (0, a.jsx)("div", {
                            className: n().loader,
                            children: (0, a.jsx)(i.G, {
                                size: "24px"
                            })
                        })]
                    }), (0, a.jsx)("span", {
                        role: "alert",
                        "data-testid": "error-for-".concat(r),
                        children: l
                    })]
                })
            })
        },
        39632: function(e, s, t) {
            "use strict";
            t.r(s), t.d(s, {
                __N_SSG: function() {
                    return eA
                },
                default: function() {
                    return eN
                }
            });
            var a = t(85893),
                i = t(9008),
                l = t.n(i),
                n = t(61535),
                r = t(55143),
                c = t(46244),
                o = t(23786),
                d = t(28276),
                u = t(79440),
                m = t.n(u),
                h = t(41664),
                _ = t.n(h),
                p = t(67294),
                f = t(25675),
                v = t.n(f);

            function x(e) {
                return (0, a.jsx)("li", {
                    "data-testid": "brand-".concat(e.alt),
                    children: (0, a.jsx)(_(), {
                        className: m().brandLink,
                        href: e.href,
                        children: (0, a.jsx)(v(), {
                            fill: !0,
                            src: e.src,
                            alt: e.alt,
                            className: "".concat(m().brandImg, " ").concat(e.active ? m().active : ""),
                            sizes: c.eM
                        })
                    })
                })
            }
            var b = t(26963);

            function y() {
                let {
                    t: e
                } = (0, d.$G)(), {
                    region: s
                } = (0, o.En)(), t = (0, o.DY)().brand, i = b.ux[s];
                return (0, a.jsxs)("div", {
                    className: m().formGroup,
                    children: [(0, a.jsx)("h3", {
                        "data-testid": "title-search-by-brand",
                        children: e("searchByBrand")
                    }), (0, a.jsx)("ul", {
                        children: i.map(e => (0, a.jsx)(x, {
                            href: "/".concat(s, "/").concat(e),
                            src: b.C3[e].logo,
                            alt: e,
                            active: t === e || void 0 === t
                        }, e))
                    })]
                })
            }
            var g = t(95850),
                j = t(52610),
                A = t(87536),
                N = t(50788),
                w = t(71930),
                C = t(77807),
                k = t(3691),
                E = t(8979),
                G = t(37281),
                W = t(98675),
                M = t(56312),
                V = t(1604);
            let L = e => V.z.object({
                name: V.z.string({
                    required_error: e("validations:name")
                }).min(1, e("validations:name")),
                email: V.z.string().email(e("validations:email")),
                state: V.z.string().optional(),
                city: V.z.string().optional(),
                segment: V.z.nativeEnum(j.SegmentEnum, {
                    errorMap: () => ({
                        message: e("validations:segment")
                    })
                }),
                productCategory: V.z.nativeEnum(j.ProductCategoryEnum, {
                    errorMap: () => ({
                        message: e("validations:productCategory")
                    })
                }),
                interest: V.z.array(V.z.nativeEnum(b.oQ)).optional(),
                brand: V.z.array(V.z.string()).optional(),
                checkbox: V.z.boolean().refine(e => !0 === e, {
                    message: e("validations:communication")
                })
            });
            var B = t(89658),
                P = t.n(B),
                S = t(95643);
            let I = Object.values(j.NewsletterBrandEnum);

            function z(e) {
                var s, t, i, l, n;
                let {
                    closeModal: c,
                    open: u
                } = e, [m, h] = (0, p.useState)(!1), {
                    t: f
                } = (0, d.$G)(), {
                    showSuccessToast: v
                } = (0, o.kK)(), x = L(f), {
                    formState: {
                        errors: y,
                        isSubmitted: g
                    },
                    handleSubmit: V,
                    register: B,
                    reset: z,
                    resetField: F,
                    watch: R
                } = (0, A.cI)({
                    resolver: (0, M.F)(x),
                    defaultValues: {
                        brand: [],
                        interest: []
                    }
                }), {
                    fetch: U,
                    loading: T
                } = (0, o.Ny)(S.Vd), {
                    data: q
                } = (0, o.nr)("BR"), X = R("state"), K = R("brand"), {
                    data: O
                } = (0, o.Sf)("BR", X), Y = async e => {
                    h(!1), (await U({
                        name: e.name,
                        email: e.email,
                        segment: e.segment,
                        productCategory: e.productCategory,
                        state: e.state || void 0,
                        city: e.city || void 0,
                        interest: e.interest,
                        brand: e.brand
                    })).success ? (z(), c(), v(f("formNewsletter.successMessage"))) : h(!0)
                }, D = () => {
                    z(), c()
                };
                return (0, p.useEffect)(() => {
                    F("city")
                }, [X]), (0, a.jsxs)(w.Z, {
                    enabled: u,
                    children: [(0, a.jsxs)("dialog", {
                        className: P().modal,
                        open: u,
                        children: [(0, a.jsxs)("div", {
                            className: P().header,
                            "data-testid": "modal-header",
                            children: [(0, a.jsx)("h2", {
                                children: f("formNewsletter.title")
                            }), (0, a.jsx)(k.z, {
                                id: "close-modal-button",
                                onClick: D,
                                children: (0, a.jsx)(N.FU5, {})
                            })]
                        }), (0, a.jsxs)("form", {
                            "data-testid": "form",
                            onSubmit: V(Y),
                            children: [(0, a.jsx)(W.o, {
                                "data-testid": "fullName",
                                error: null === (s = y.name) || void 0 === s ? void 0 : s.message,
                                id: "fullName",
                                label: f("formNewsletter.name.label") + "*",
                                placeholder: f("formNewsletter.name.placeholder"),
                                ...B("name")
                            }), (0, a.jsx)(W.o, {
                                "data-testid": "email",
                                error: null === (t = y.email) || void 0 === t ? void 0 : t.message,
                                id: "email",
                                label: f("formNewsletter.email.label") + "*",
                                placeholder: f("formNewsletter.email.placeholder"),
                                type: "email",
                                ...B("email")
                            }), (0, a.jsx)(G.P, {
                                "data-testid": "segment",
                                id: "segment",
                                label: f("formNewsletter.segment.label") + "*",
                                options: (0, C.DH)(f),
                                placeholder: f("formNewsletter.placeholder"),
                                error: null === (i = y.segment) || void 0 === i ? void 0 : i.message,
                                title: f("formNewsletter.segment.label"),
                                ...B("segment")
                            }), (0, a.jsx)(G.P, {
                                "data-testid": "product-category",
                                id: "productCategory",
                                label: f("formNewsletter.productCategory.label") + "*",
                                options: (0, C.de)(f),
                                placeholder: f("formNewsletter.placeholder"),
                                title: f("formNewsletter.productCategory.label"),
                                error: null === (l = y.productCategory) || void 0 === l ? void 0 : l.message,
                                ...B("productCategory")
                            }), (0, a.jsx)(G.P, {
                                disabled: !q || 0 === q.length,
                                id: "state",
                                label: f("formNewsletter.state.label"),
                                options: (0, b.s7)(q),
                                placeholder: f("formNewsletter.placeholder"),
                                ...B("state")
                            }), (0, a.jsx)(G.P, {
                                disabled: !O || 0 === O.length,
                                id: "city",
                                label: f("formNewsletter.city.label"),
                                options: (0, b.Z6)(O),
                                placeholder: f("formNewsletter.placeholder"),
                                ...B("city")
                            }), (0, a.jsxs)("div", {
                                className: P().checkbox,
                                children: [(0, a.jsx)("p", {
                                    children: f("formNewsletter.interest.label")
                                }), (0, a.jsx)(E.X, {
                                    "data-testid": "checkbox-newsletter",
                                    id: "checkbox-newsletter",
                                    label: f("formNewsletter.interest.newsletter"),
                                    value: b.oQ.NewsletterAndProductLaunches,
                                    ...B("interest")
                                }), (0, a.jsx)(E.X, {
                                    "data-testid": "checkbox-notices",
                                    id: "checkbox-notices",
                                    label: f("formNewsletter.interest.notices"),
                                    value: b.oQ.NewsCoursesEventsAndTechnicalTips,
                                    ...B("interest")
                                })]
                            }), (0, a.jsxs)("div", {
                                className: P().checkbox,
                                children: [(0, a.jsx)("p", {
                                    children: f("formNewsletter.brands.label")
                                }), I.map(e => {
                                    let s = e === j.NewsletterBrandEnum.None,
                                        t = null == K ? void 0 : K.includes(j.NewsletterBrandEnum.None);
                                    return (0, a.jsx)(E.X, { ...B("brand"),
                                        "data-testid": "checkbox-brand-".concat(e),
                                        id: "checkbox-".concat(e),
                                        label: s ? f("formNewsletter.brands.doNotBuy") : r.C3[e].name,
                                        value: e,
                                        disabled: s ? !t && !!(null == K ? void 0 : K.length) : t
                                    }, e)
                                })]
                            }), (0, a.jsxs)("p", {
                                "data-testid": "policy",
                                children: [f("formNewsletter.policy.text"), (0, a.jsx)(_(), {
                                    href: f("formNewsletter.policy.url"),
                                    rel: "noopener noreferrer",
                                    target: "_blank",
                                    children: f("formNewsletter.policy.link")
                                })]
                            }), (0, a.jsx)("div", {
                                children: (0, a.jsx)(E.X, {
                                    "data-testid": "checkbox",
                                    id: "checkbox-communication",
                                    label: f("formNewsletter.communication"),
                                    ...B("checkbox"),
                                    error: null === (n = y.checkbox) || void 0 === n ? void 0 : n.message
                                })
                            }), (0, a.jsx)("p", {
                                "data-testid": "info",
                                children: f("formNewsletter.info")
                            }), g && m && (0, a.jsx)("span", {
                                "data-testid": "form-error",
                                children: f("formNewsletter.error")
                            }), (0, a.jsxs)("div", {
                                className: P().actions,
                                "data-testid": "modal-actions",
                                children: [(0, a.jsx)(k.z, {
                                    id: "cancel-button",
                                    variant: "primary",
                                    onClick: D,
                                    outlined: !0,
                                    children: f("cancel")
                                }), (0, a.jsx)(k.z, {
                                    id: "submit-button",
                                    variant: "primary",
                                    type: "submit",
                                    "data-testid": "submit-button",
                                    isLoading: T,
                                    children: f("inscribe")
                                })]
                            })]
                        })]
                    }), u && (0, a.jsx)("div", {
                        className: P().background,
                        "data-testid": "modal-background"
                    })]
                })
            }
            var F = t(24331),
                R = t.n(F);

            function U() {
                let {
                    t: e
                } = (0, d.$G)(), {
                    region: s
                } = (0, o.En)(), [t, i] = (0, p.useState)(!1), l = () => {
                    i(!t)
                };
                return (0, a.jsx)(a.Fragment, {
                    children: s === j.RegionsEnum.Brazil && (0, a.jsxs)(a.Fragment, {
                        children: [(0, a.jsxs)("div", {
                            className: R().container,
                            onClick: l,
                            "data-testid": "newsletter",
                            children: [(0, a.jsx)("h3", {
                                children: "Newsletter"
                            }), (0, a.jsxs)("div", {
                                className: R().link,
                                children: [e("newsletter"), (0, a.jsx)("br", {}), e("newsletterLink")]
                            })]
                        }), t && (0, a.jsx)(z, {
                            open: t,
                            closeModal: l
                        })]
                    })
                })
            }
            var T = t(91981),
                q = t(11163),
                X = t(63222);

            function K() {
                let {
                    t: e
                } = (0, d.$G)(), s = (0, q.useRouter)(), t = (0, o.s3)(), {
                    data: i,
                    isLoading: l
                } = (0, o.iu)(T.k);
                return (0, a.jsx)(X.G, {
                    releases: !0,
                    data: (null == i ? void 0 : i.data) || [],
                    onClick: () => {
                        s.push({
                            pathname: "".concat(t, "/search"),
                            query: {
                                onlyRelease: !0
                            }
                        })
                    },
                    isLoading: l,
                    buttonText: e("releasesSection.seeAll"),
                    title: e("releasesSection.title")
                })
            }
            var O = t(78962),
                Y = t(94135),
                D = t(2261),
                H = t(66047),
                Z = t(85080),
                J = t.n(Z);

            function Q(e) {
                let {
                    data: s,
                    href: t,
                    src: i,
                    alt: l,
                    text: n
                } = e, r = (0, D.oc)();
                return (0, p.useEffect)(() => {
                    r.update(), r.slideTo(0, 0)
                }, [s]), (0, a.jsx)("div", {
                    className: J().groupBox,
                    "data-testid": "category-".concat(n),
                    children: (0, a.jsxs)(H.h, {
                        href: t,
                        children: [(0, a.jsx)("div", {
                            className: J().circle,
                            children: (0, a.jsx)(v(), {
                                alt: l,
                                src: i,
                                width: 160,
                                height: 160
                            })
                        }), (0, a.jsx)("p", {
                            children: n
                        })]
                    })
                })
            }

            function $() {
                let {
                    t: e
                } = (0, d.$G)(), {
                    region: s
                } = (0, o.En)(), {
                    brand: t
                } = (0, o.DY)(), i = (0, O.R)(e, s, null != t ? t : r.rG), l = null == i ? void 0 : i.length;
                return (0, a.jsxs)("div", {
                    "data-testid": "container-searchByCategories",
                    className: "".concat(J().container, " ").concat(l ? "" : J().hidden),
                    children: [!!l && (0, a.jsx)("h3", {
                        children: e("searchByCategories.title")
                    }), (0, a.jsx)("div", {
                        className: J().carousel,
                        "data-testid": "carousel-category",
                        children: (0, a.jsx)(D.tq, {
                            navigation: !0,
                            pagination: {
                                clickable: !0
                            },
                            modules: [Y.tl, Y.W_],
                            slidesPerView: 2,
                            slidesPerGroup: 2,
                            breakpoints: {
                                640: {
                                    slidesPerView: 2
                                },
                                768: {
                                    slidesPerView: 3,
                                    slidesPerGroup: 3
                                },
                                980: {
                                    slidesPerView: 5,
                                    slidesPerGroup: 5
                                },
                                1085: {
                                    slidesPerView: 6,
                                    slidesPerGroup: 1
                                }
                            },
                            children: i.map(e => (0, a.jsx)(D.o5, {
                                children: (0, a.jsx)(Q, {
                                    data: i,
                                    alt: e.label,
                                    src: "/images/categories/" + e.image,
                                    href: "/search?productGroups=".concat(e.id),
                                    text: e.label
                                })
                            }, e.id))
                        })
                    })]
                })
            }
            t(64172), t(57638), t(96936);
            var ee = t(48682);
            let es = e => {
                    let s = {
                        "Autom\xf3veis e Utilit\xe1rios Leves": {
                            className: "car",
                            name: e("classifications.cars")
                        },
                        Caminhões: {
                            className: "truck",
                            name: e("classifications.trucks")
                        },
                        Implemento: {
                            className: "implement",
                            name: e("classifications.implements")
                        },
                        "M\xe1quinas Agricola": {
                            className: "agriculturalmachinery",
                            name: e("classifications.agriculturalMachinery")
                        },
                        Motos: {
                            className: "motorcycle",
                            name: e("classifications.motorcycles")
                        },
                        Ônibus: {
                            className: "bus",
                            name: e("classifications.bus")
                        }
                    };
                    return { ...s,
                        "Autom\xf3viles y Comerciales livianos": s["Autom\xf3veis e Utilit\xe1rios Leves"],
                        Camiones: s["Caminh\xf5es"],
                        "Maquina Vial": s["M\xe1quinas Agricola"],
                        Acoplado: s.Implemento,
                        Motocicletas: s.Motos,
                        Omnibus: s["\xd4nibus"]
                    }
                },
                et = function() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
                    return e.map(e => ({
                        value: e,
                        name: e,
                        id: e
                    }))
                };
            var ea = t(45850),
                ei = t.n(ea);

            function el(e) {
                let {
                    data: s,
                    onClick: t,
                    selectedClassification: i
                } = e, {
                    t: l,
                    i18n: {
                        language: n
                    }
                } = (0, d.$G)(), r = (0, p.useMemo)(() => es(l), [n]);
                return (0, a.jsx)("div", {
                    className: ei().tabs,
                    "data-testid": "classificationsTabs",
                    children: (0, a.jsx)(D.tq, {
                        centerInsufficientSlides: !0,
                        pagination: {
                            clickable: !0
                        },
                        modules: [Y.tl],
                        slidesPerView: 2,
                        slidesPerGroup: 2,
                        breakpoints: {
                            640: {
                                slidesPerView: 2
                            },
                            768: {
                                slidesPerView: 4
                            },
                            1024: {
                                slidesPerView: 6
                            }
                        },
                        children: s.reduce((e, s) => r[s] ? e.concat((0, a.jsx)(D.o5, {
                            children: (0, a.jsx)(en, {
                                onClick: t,
                                value: s,
                                classification: r[s],
                                selectedClassification: i
                            })
                        }, r[s].className)) : e, [])
                    })
                })
            }
            let en = e => {
                let {
                    classification: s,
                    selectedClassification: t,
                    value: i,
                    onClick: l
                } = e, n = (0, D.oc)();
                return (0, p.useEffect)(() => {
                    n.slideTo(0, 0)
                }, [s]), (0, a.jsxs)("div", {
                    onClick: () => l(i),
                    "data-testid": "".concat(s.className, "Tab"),
                    className: "".concat(ei().item, " ").concat(ei()[s.className], " ").concat(t === i ? ei().active : ""),
                    children: [(0, a.jsx)("div", {
                        className: ei()[s.className]
                    }), (0, a.jsx)("span", {
                        children: s.name
                    })]
                })
            };
            var er = t(44884),
                ec = t.n(er);

            function eo(e) {
                let {
                    manufacturer: s,
                    onChange: t,
                    value: i,
                    vehicle: l,
                    version: n,
                    year: r
                } = e, {
                    t: c
                } = (0, d.$G)(), {
                    data: u,
                    isLoading: m
                } = (0, o.Fd)(), h = (e, s) => null != e ? e : s, _ = null == u ? void 0 : u.map(e => ({
                    id: e.id,
                    value: e.id,
                    name: e.name
                }));
                return (0, a.jsx)("div", {
                    className: ec().actions,
                    "data-testid": "segmentFilters",
                    children: (0, a.jsxs)("div", {
                        className: ec().filters,
                        children: [(0, a.jsx)(G.P, {
                            disabled: !(null == s ? void 0 : s.length),
                            id: "selectManufacturer",
                            label: c("classifications.manufacturer"),
                            placeholder: c("classifications.manufacturerAll"),
                            onChange: e => t("vehicleManufacturer")(e.target.value),
                            options: et(s),
                            value: h(i.vehicleManufacturer, c("classifications.manufacturerAll")),
                            showEmptyValue: !0
                        }), (0, a.jsx)(G.P, {
                            disabled: !(null == l ? void 0 : l.length),
                            id: "selectVehicle",
                            label: c("classifications.vehicle"),
                            placeholder: c("classifications.vehicleAll"),
                            onChange: e => t("vehicleModel")(e.target.value),
                            options: et(l),
                            value: h(i.vehicleModel, c("classifications.vehicleAll")),
                            showEmptyValue: !0
                        }), (0, a.jsx)(G.P, {
                            disabled: !(null == r ? void 0 : r.length),
                            id: "selectYear",
                            label: c("classifications.year"),
                            placeholder: c("classifications.yearAll"),
                            onChange: e => t("vehicleYear")(e.target.value),
                            options: et(r),
                            value: h(i.vehicleYear, c("classifications.yearAll")),
                            showEmptyValue: !0
                        }), (0, a.jsx)(G.P, {
                            disabled: !(null == n ? void 0 : n.length),
                            id: "selectVersion",
                            label: c("classifications.version"),
                            placeholder: c("classifications.versionAll"),
                            onChange: e => t("vehicleVersion")(e.target.value),
                            options: et(n),
                            value: h(i.vehicleVersion, c("classifications.versionAll")),
                            showEmptyValue: !0
                        }), (0, a.jsx)(G.P, {
                            disabled: m,
                            id: "selectProductGroup",
                            label: c("classifications.productLine"),
                            placeholder: c("classifications.productLineAll"),
                            onChange: e => t("productGroupId")(e.target.value),
                            options: _,
                            showEmptyValue: !0,
                            value: h(i.productGroupId, c("classifications.productLineAll"))
                        })]
                    })
                })
            }
            var ed = t(94047),
                eu = t.n(ed);

            function em() {
                var e, s, t, i, l, n, r, c, u, m;
                let {
                    brand: h
                } = (0, o.DY)(), {
                    region: _
                } = (0, o.En)(), {
                    t: f
                } = (0, d.$G)(), v = (0, q.useRouter)(), x = (0, o.s3)(), [b, y] = (0, p.useState)(!1), [g, j] = (0, p.useState)({}), A = {
                    segments: (0, o.yb)({}),
                    manufacturers: (0, o.yb)({
                        lines: null !== (e = g.vehicleClassification) && void 0 !== e ? e : ""
                    }),
                    vehicles: (0, o.yb)({
                        lines: null !== (s = g.vehicleClassification) && void 0 !== s ? s : "",
                        brands: null !== (t = g.vehicleManufacturer) && void 0 !== t ? t : ""
                    }),
                    years: (0, o.yb)({
                        lines: null !== (i = g.vehicleClassification) && void 0 !== i ? i : "",
                        brands: null !== (l = g.vehicleManufacturer) && void 0 !== l ? l : "",
                        names: null !== (n = g.vehicleModel) && void 0 !== n ? n : ""
                    }),
                    versions: (0, o.yb)({
                        lines: null !== (r = g.vehicleClassification) && void 0 !== r ? r : "",
                        brands: null !== (c = g.vehicleManufacturer) && void 0 !== c ? c : "",
                        names: null !== (u = g.vehicleModel) && void 0 !== u ? u : "",
                        years: null !== (m = g.vehicleYear) && void 0 !== m ? m : ""
                    })
                }, N = A.segments.isLoading, w = A.segments.data || [], C = e => s => {
                    if (void 0 !== s) {
                        let t = { ...g
                        };
                        switch (e) {
                            case "vehicleClassification":
                                y(!0), t.vehicleManufacturer = void 0, t.productGroupId = void 0;
                            case "vehicleManufacturer":
                                t.vehicleModel = void 0;
                            case "vehicleModel":
                                t.vehicleYear = void 0;
                            case "vehicleYear":
                                t.vehicleVersion = void 0
                        }
                        t[e] = s, j(t)
                    }
                }, E = () => {
                    j({
                        productGroupId: void 0
                    }), y(!1)
                };
                (0, p.useEffect)(E, [h, _]);
                let G = () => v.push({
                    pathname: "".concat(x, "/search"),
                    query: Object.fromEntries(Object.entries({
                        vehicleClassification: g.vehicleClassification,
                        vehicleManufacturer: g.vehicleManufacturer,
                        vehicleModel: g.vehicleModel,
                        vehicleYear: g.vehicleYear,
                        vehicleVersion: g.vehicleVersion,
                        productGroups: g.productGroupId
                    }).filter(e => {
                        let [, s] = e;
                        return !!s
                    }))
                });
                return (0, a.jsx)("div", {
                    "data-testid": "segmentComponent",
                    className: "".concat(eu().container, " ").concat(N && eu().loading),
                    children: !N && w ? (0, a.jsxs)(a.Fragment, {
                        children: [(0, a.jsx)("h3", {
                            children: f("searchByClassifications.title")
                        }), (0, a.jsx)(el, {
                            data: w,
                            selectedClassification: g.vehicleClassification,
                            onClick: C("vehicleClassification")
                        }), (0, a.jsxs)("div", {
                            "data-testid": "searchContainer",
                            className: "".concat(eu().searchContainer, " ").concat(b ? eu().open : ""),
                            children: [(0, a.jsx)(eo, {
                                manufacturer: A.manufacturers.data,
                                vehicle: A.vehicles.data,
                                version: A.versions.data,
                                year: A.years.data,
                                value: g,
                                onChange: C
                            }), (0, a.jsxs)("div", {
                                className: eu().buttons,
                                children: [(0, a.jsx)(k.z, {
                                    id: "clearFilters",
                                    outlined: !0,
                                    onClick: () => E(),
                                    children: f("clear")
                                }), (0, a.jsx)(k.z, {
                                    id: "submitFilters",
                                    onClick: () => G(),
                                    children: f("search")
                                })]
                            })]
                        })]
                    }) : (0, a.jsx)(ee.G, {
                        size: "64px"
                    })
                })
            }
            var eh = {
                    src: "/_next/static/media/where-to-find-banner.477dcb3a.png",
                    height: 1031,
                    width: 1440,
                    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAGCAMAAADJ2y/JAAAAV1BMVEVOR1MlIEFuanJSLz63qJ5FSG0yLFBDNEMrIThhW2Wag3t8aGfMuKVgU1MVHUs8PVBqY2uekI7r4tdZUlZsS0q6taCrnoelmJSXdGPa0MGcRjxtN0H38ekAxzSKAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAOUlEQVR4nAXBCQLAEAwAwVUhgpbe5//f2Rm6LN99FsVmqTLgoee62/ugLdhRro3kY8isiaRTHHHuBz42Ag85Bo2DAAAAAElFTkSuQmCC",
                    blurWidth: 8,
                    blurHeight: 6
                },
                e_ = t(24957),
                ep = {
                    src: "/_next/static/media/loyalty-logo-icon.89b2aadd.svg",
                    height: 115,
                    width: 121,
                    blurWidth: 0,
                    blurHeight: 0
                },
                ef = t(34526),
                ev = t(94637),
                ex = t.n(ev);

            function eb(e) {
                let {
                    title: s,
                    icon: t,
                    actionLabel: i,
                    actionHref: l,
                    description: n,
                    backgroundImage: r,
                    isCatalogPage: c = !0
                } = e, o = c ? H.h : _();
                return (0, a.jsx)("div", {
                    className: ex().card,
                    children: (0, a.jsxs)("div", {
                        className: ex().background,
                        children: [(0, a.jsx)(v(), {
                            className: ex().backgroundImage,
                            src: r,
                            alt: s,
                            fill: !0
                        }), (0, a.jsxs)("div", {
                            className: ex().cardContent,
                            children: [t, (0, a.jsx)("h2", {
                                children: s
                            }), (0, a.jsx)("p", {
                                children: n
                            }), (0, a.jsx)(o, {
                                href: l,
                                "data-testid": c ? "internal-link" : "link",
                                children: (0, a.jsx)(k.z, {
                                    variant: "secondary",
                                    id: "service-button-".concat(s),
                                    children: i
                                })
                            })]
                        })]
                    })
                })
            }
            var ey = t(65933),
                eg = t.n(ey);

            function ej() {
                let {
                    region: e
                } = (0, o.En)(), {
                    brand: s
                } = (0, o.DY)(), {
                    t
                } = (0, d.$G)(), {
                    userHasRole: i
                } = (0, o.U3)(), l = (0, r.A4)(e, s), n = (0, r._v)(e, s), c = n || l, u = i(j.UserRoleModuleEnum.Loyalty, j.UserRoleFeatureLoyaltyEnum.All) ? {
                    actionLabel: t("servicesSection.loyalty.buttonLabelLoyalty"),
                    actionHref: "/loyalty"
                } : {
                    actionLabel: t("servicesSection.loyalty.buttonLabelKnow"),
                    actionHref: "/loyalty/know"
                };
                return c && (0, a.jsxs)("div", {
                    className: eg().container,
                    children: [(0, a.jsx)("h3", {
                        children: t("servicesSection.title")
                    }), (0, a.jsxs)("div", {
                        className: eg().content,
                        children: [n && (0, a.jsx)(eb, {
                            title: t("servicesSection.whereToFind.title"),
                            icon: (0, a.jsx)(ef.WP$, {}),
                            actionLabel: t("servicesSection.whereToFind.title"),
                            actionHref: "/find",
                            description: t("servicesSection.whereToFind.description"),
                            backgroundImage: eh
                        }), l && (0, a.jsx)(eb, {
                            title: t("servicesSection.loyalty.title"),
                            icon: (0, a.jsx)(v(), {
                                src: ep,
                                alt: "Clube experts logo",
                                width: 40
                            }),
                            ...u,
                            backgroundImage: e_.Z,
                            isCatalogPage: !1
                        })]
                    })]
                })
            }
            var eA = !0;

            function eN(e) {
                let {
                    fallback: s
                } = e, {
                    brand: t
                } = (0, o.DY)(), {
                    region: i
                } = (0, o.En)(), {
                    i18n: {
                        language: u
                    }
                } = (0, d.$G)(), m = t ? r.C3[t].name : null, h = (0, p.useMemo)(() => (t ? c.Wm[t] : c.Wm[r.rG]).filter(e => {
                    var s, t, a, l;
                    return (null === (a = null === (s = e.languages) || void 0 === s ? void 0 : s.includes(u)) || void 0 === a || a) && (null === (l = null === (t = e.regions) || void 0 === t ? void 0 : t.includes(i)) || void 0 === l || l)
                }), [t, i, u]);
                return (0, a.jsxs)(n.J$, {
                    value: {
                        fallback: s
                    },
                    children: [(0, a.jsx)(l(), {
                        children: (0, a.jsx)("title", {
                            children: m ? "Auto Experts | ".concat(m) : "Auto Experts"
                        })
                    }), (0, a.jsxs)("main", {
                        children: [i !== j.RegionsEnum.Latam && i !== j.RegionsEnum.USA && (0, a.jsx)(em, {}), (0, a.jsx)(y, {}), (0, a.jsx)(g.i, {
                            slides: h
                        }), (0, a.jsx)($, {}), (0, a.jsx)(ej, {}), (0, a.jsx)(K, {}), (0, a.jsx)(U, {})]
                    })]
                })
            }
        },
        79440: function(e) {
            e.exports = {
                formGroup: "styles_formGroup__53ir_",
                formWrapperAccount: "styles_formWrapperAccount__yUlMO",
                brandImg: "styles_brandImg__tW1Un",
                active: "styles_active__ccEhv"
            }
        },
        11201: function(e) {
            e.exports = {
                formWrapperAccount: "styles_formWrapperAccount__ZRu78",
                carouselWrapper: "styles_carouselWrapper__hpH1E",
                carousel: "styles_carousel__ebLB2",
                rounded: "styles_rounded__5bzjy",
                slide: "styles_slide___Jfn5",
                hidden: "styles_hidden__djMWN"
            }
        },
        89658: function(e) {
            e.exports = {
                formWrapperAccount: "styles_formWrapperAccount__nOg0t",
                modal: "styles_modal__cEnie",
                header: "styles_header__rUur1",
                checkbox: "styles_checkbox__31FqI",
                actions: "styles_actions__kyrnA",
                background: "styles_background__2Obez"
            }
        },
        24331: function(e) {
            e.exports = {
                container: "styles_container__i_qjD",
                formWrapperAccount: "styles_formWrapperAccount____Kzx",
                link: "styles_link__4NA1j"
            }
        },
        30873: function(e) {
            e.exports = {
                formWrapperAccount: "styles_formWrapperAccount__S2lIg",
                card: "styles_card__2VxKl",
                body: "styles_body__OF_01",
                title: "styles_title__i9Sm6",
                description: "styles_description__RAK0E",
                content: "styles_content__e_xX6",
                image: "styles_image__fywgC",
                headerLogos: "styles_headerLogos__Jt6J5",
                brandIcon: "styles_brandIcon__be_cr",
                specifications: "styles_specifications__OSUK9",
                compare: "styles_compare__wo11M",
                detailsLink: "styles_detailsLink__tBJbm"
            }
        },
        59047: function(e) {
            e.exports = {
                container: "styles_container__s9uh6",
                formWrapperAccount: "styles_formWrapperAccount__FSIwb",
                hidden: "styles_hidden__9cqtD",
                infinite: "styles_infinite__f5KiH",
                header: "styles_header__Roi9X",
                seeAllButton: "styles_seeAllButton__kj7t6",
                productCarousel: "styles_productCarousel__F7rjg",
                loader: "styles_loader__4y0j3"
            }
        },
        19793: function(e) {
            e.exports = {
                formWrapperAccount: "styles_formWrapperAccount__whnxi",
                releaseChip: "styles_releaseChip__kGfM3"
            }
        },
        85080: function(e) {
            e.exports = {
                container: "styles_container__QxDm6",
                formWrapperAccount: "styles_formWrapperAccount___OBov",
                groupBox: "styles_groupBox__L5BOJ",
                hidden: "styles_hidden__wZfWU",
                slider: "styles_slider__JRwbV",
                itemSlide: "styles_itemSlide__modtN",
                carousel: "styles_carousel__oqFZ_",
                circle: "styles_circle__c74bp"
            }
        },
        45850: function(e) {
            e.exports = {
                tabs: "styles_tabs__neDdX",
                formWrapperAccount: "styles_formWrapperAccount__6FKkU",
                item: "styles_item__nm1eP",
                active: "styles_active__Ws6rK",
                car: "styles_car__m3UrZ",
                truck: "styles_truck__nj1LQ",
                implement: "styles_implement__Cfrmk",
                agriculturalmachinery: "styles_agriculturalmachinery__83JIp",
                motorcycle: "styles_motorcycle__s4wRf",
                bus: "styles_bus__SKX8l",
                embla: "styles_embla__JpCoi",
                container: "styles_container__C2Rlt",
                slide: "styles_slide__pUlGl"
            }
        },
        44884: function(e) {
            e.exports = {
                actions: "styles_actions__QepPk",
                formWrapperAccount: "styles_formWrapperAccount__hmuzt",
                filters: "styles_filters__iETrc"
            }
        },
        94047: function(e) {
            e.exports = {
                container: "styles_container__KzlVC",
                formWrapperAccount: "styles_formWrapperAccount__vUFxY",
                searchContainer: "styles_searchContainer__CQTTu",
                open: "styles_open__xLjOr",
                loading: "styles_loading__le_T7",
                buttons: "styles_buttons__ffGFX"
            }
        },
        94637: function(e) {
            e.exports = {
                card: "styles_card__LUp8i",
                background: "styles_background__7dfWk",
                cardContent: "styles_cardContent__5jOnq",
                formWrapperAccount: "styles_formWrapperAccount__R4YC7"
            }
        },
        65933: function(e) {
            e.exports = {
                container: "styles_container__GI1RP",
                formWrapperAccount: "styles_formWrapperAccount__nTUgb",
                content: "styles_content__Pj5cl"
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
        },
        16303: function() {},
        57638: function() {}
    },
    function(e) {
        e.O(0, [5970, 5046, 2888, 9774, 179], function() {
            return e(e.s = 21297)
        }), _N_E = e.O()
    }
]);