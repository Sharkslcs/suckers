self.__BUILD_MANIFEST = function(a, s, t, c, e, n, o, r, l, i) {
    return {
        __rewrites: {
            afterFiles: [],
            beforeFiles: [{
                has: a,
                source: "/:nextInternalLocale(unknown|pt|en|es)/br/:base((?!frasle|lonaflex|controil|fremax|nakata|castertech|jost|master|suspensys).*)/:path*",
                destination: "/:nextInternalLocale/br/_/:base/:path*"
            }, {
                has: a,
                source: "/:nextInternalLocale(unknown|pt|en|es)/ar/:base((?!frasle|lonaflex|controil|fremax|nakata|castertech|jost|master|suspensys).*)/:path*",
                destination: "/:nextInternalLocale/ar/_/:base/:path*"
            }, {
                has: a,
                source: "/:nextInternalLocale(unknown|pt|en|es)/co/:base((?!frasle|lonaflex|controil|fremax|nakata|castertech|jost|master|suspensys).*)/:path*",
                destination: "/:nextInternalLocale/co/_/:base/:path*"
            }, {
                has: a,
                source: "/:nextInternalLocale(unknown|pt|en|es)/mx/:base((?!frasle|lonaflex|controil|fremax|nakata|castertech|jost|master|suspensys).*)/:path*",
                destination: "/:nextInternalLocale/mx/_/:base/:path*"
            }, {
                has: a,
                source: "/:nextInternalLocale(unknown|pt|en|es)/us/:base((?!frasle|lonaflex|controil|fremax|nakata|castertech|jost|master|suspensys).*)/:path*",
                destination: "/:nextInternalLocale/us/_/:base/:path*"
            }, {
                has: a,
                source: "/:nextInternalLocale(unknown|pt|en|es)/latam/:base((?!frasle|lonaflex|controil|fremax|nakata|castertech|jost|master|suspensys).*)/:path*",
                destination: "/:nextInternalLocale/latam/_/:base/:path*"
            }],
            fallback: [{
                has: a,
                source: "/:nextInternalLocale(unknown|pt|en|es)/br",
                destination: "/:nextInternalLocale/br/_"
            }, {
                has: a,
                source: "/:nextInternalLocale(unknown|pt|en|es)/ar",
                destination: "/:nextInternalLocale/ar/_"
            }, {
                has: a,
                source: "/:nextInternalLocale(unknown|pt|en|es)/co",
                destination: "/:nextInternalLocale/co/_"
            }, {
                has: a,
                source: "/:nextInternalLocale(unknown|pt|en|es)/mx",
                destination: "/:nextInternalLocale/mx/_"
            }, {
                has: a,
                source: "/:nextInternalLocale(unknown|pt|en|es)/us",
                destination: "/:nextInternalLocale/us/_"
            }, {
                has: a,
                source: "/:nextInternalLocale(unknown|pt|en|es)/latam",
                destination: "/:nextInternalLocale/latam/_"
            }]
        },
        "/404": ["static/css/b63b3ea6f6959a4f.css", "static/chunks/pages/404-a692a8199bddcd2d.js"],
        "/_error": ["static/chunks/pages/_error-6ddff449d199572c.js"],
        "/academy": ["static/css/d1e82b618c49ece7.css", "static/chunks/pages/academy-2a5db4acd0e4012e.js"],
        "/academy/know": [l, "static/css/a31625138ac63446.css", "static/chunks/pages/academy/know-8fbe9900488990ad.js"],
        "/academy/register": ["static/css/6392b5044fca6129.css", "static/chunks/pages/academy/register-3919cb8ac401b12d.js"],
        "/account/change-password": [t, "static/css/e7e4028ae34a41fa.css", "static/chunks/pages/account/change-password-5822d74f2853b26f.js"],
        "/account/email-confirmation": ["static/css/7d189f658b109255.css", "static/chunks/pages/account/email-confirmation-4aa905a1464b69fc.js"],
        "/account/email-verification": ["static/css/98feb38ad7f78aa0.css", "static/chunks/pages/account/email-verification-e047c4a788cd3c9b.js"],
        "/account/login": [t, "static/css/2f79bf34b4af5339.css", "static/chunks/pages/account/login-285a17e012ff3a04.js"],
        "/account/profile": ["static/css/3228dd2583b48581.css", "static/chunks/pages/account/profile-18483a89dccef560.js"],
        "/account/recover-password": ["static/css/331f06c324a8628a.css", "static/chunks/pages/account/recover-password-aa6992c7fc5fbd36.js"],
        "/account/register": [t, "static/css/4b86fdceb388f86e.css", "static/chunks/pages/account/register-7c5804c76742d6b8.js"],
        "/account/reset-password": [t, "static/css/f319ddd484b0fede.css", "static/chunks/pages/account/reset-password-b004c495f7ac107a.js"],
        "/loyalty": [n, "static/css/8d1030ab6714ba86.css", "static/chunks/pages/loyalty-09011951b3d28ddf.js"],
        "/loyalty/benefits": [s, c, "static/css/e6c611fbb233d6a1.css", "static/chunks/pages/loyalty/benefits-26a47d5b79166c38.js"],
        "/loyalty/faq": ["static/css/d714143a25ed6c70.css", "static/chunks/pages/loyalty/faq-9f5f7d6d3fbfdba9.js"],
        "/loyalty/invoice-upload": ["static/css/50a975713518f419.css", "static/chunks/pages/loyalty/invoice-upload-f76effbc8b6a71fa.js"],
        "/loyalty/invoices": [s, c, "static/css/bc847ec81754c46b.css", "static/chunks/pages/loyalty/invoices-fc1ebacf5804c56d.js"],
        "/loyalty/know": [l, "static/css/d4e5aa2da046f6f6.css", "static/chunks/pages/loyalty/know-9b8d2afc5ce2eea4.js"],
        "/loyalty/payment-data": [s, o, i, "static/css/8857b63f86feb7db.css", "static/chunks/pages/loyalty/payment-data-56f9954701e9eb71.js"],
        "/loyalty/points-expiring": [s, c, "static/css/5da3ffeab671cf1f.css", "static/chunks/pages/loyalty/points-expiring-8a87f3816b5ef0b0.js"],
        "/loyalty/points-extract": [s, c, "static/css/73135eb0b86af18a.css", "static/chunks/pages/loyalty/points-extract-599a2af3a2946c30.js"],
        "/loyalty/profile": [s, "static/css/58434fdbdb7caa09.css", "static/chunks/pages/loyalty/profile-a69bd5ab13f63af1.js"],
        "/loyalty/rebate": [s, o, i, "static/css/71a309118713f3fb.css", "static/chunks/pages/loyalty/rebate-6534fcdd407d0cdd.js"],
        "/loyalty/recycle-max": [s, o, c, "static/css/78c17338dd1681c5.css", "static/chunks/pages/loyalty/recycle-max-fae452fb935b7268.js"],
        "/loyalty/recycle-max/[id]": ["static/css/3dc9645bb0121094.css", "static/chunks/pages/loyalty/recycle-max/[id]-5625464f69748959.js"],
        "/loyalty/register": [s, "static/css/21d6d1471478dd05.css", "static/chunks/pages/loyalty/register-2d793661b22f0441.js"],
        "/loyalty/rules": [r, "static/chunks/pages/loyalty/rules-e4c9a00726e9c184.js"],
        "/loyalty/rules-summary": ["static/css/53e8deab8e60dbd8.css", "static/chunks/pages/loyalty/rules-summary-d957a12917e92381.js"],
        "/loyalty/status/blocked": [e, "static/chunks/pages/loyalty/status/blocked-3bf7b6d5c245de02.js"],
        "/loyalty/status/disapprove": [e, "static/chunks/pages/loyalty/status/disapprove-5b00ce52135eb6e8.js"],
        "/loyalty/status/pending": [e, "static/chunks/pages/loyalty/status/pending-12925644b6789284.js"],
        "/loyalty/status/segment-unauthorized": [e, "static/chunks/pages/loyalty/status/segment-unauthorized-888a862e73e5a9aa.js"],
        "/loyalty/users": ["static/css/e671c4a850a56439.css", "static/chunks/pages/loyalty/users-11eea1738b9ab037.js"],
        "/loyalty/users/[email]": ["static/css/80d0e1b619579fec.css", "static/chunks/pages/loyalty/users/[email]-2df6db984814aaca.js"],
        "/[region]/[brand]": [t, n, "static/css/b284a61c2da0f970.css", "static/chunks/pages/[region]/[brand]-588bdf055ccfa20d.js"],
        "/[region]/[brand]/about": ["static/css/6e6302357fbed9f6.css", "static/chunks/pages/[region]/[brand]/about-bdec29c1a6a83728.js"],
        "/[region]/[brand]/compare-products": ["static/css/306bb51517b4a424.css", "static/chunks/pages/[region]/[brand]/compare-products-58709d14212d281c.js"],
        "/[region]/[brand]/contact": ["static/css/b1b2e7a073fbb6c0.css", "static/chunks/pages/[region]/[brand]/contact-bb14a36bbc234fd4.js"],
        "/[region]/[brand]/download-pdf": ["static/css/ccfc0cedd1725174.css", "static/chunks/pages/[region]/[brand]/download-pdf-ee710f22bad922fc.js"],
        "/[region]/[brand]/find": ["static/css/7d81708594cc029c.css", "static/chunks/pages/[region]/[brand]/find-b2f88279ec032646.js"],
        "/[region]/[brand]/healthz": ["static/chunks/pages/[region]/[brand]/healthz-9d574a70538e812c.js"],
        "/[region]/[brand]/privacy": [r, "static/chunks/pages/[region]/[brand]/privacy-82f34c1d43868a42.js"],
        "/[region]/[brand]/product/[id]": [n, "static/css/9a560e9caedf4857.css", "static/chunks/9421-adb863fc77451e4f.js", "static/css/c6928802ec645431.css", "static/chunks/pages/[region]/[brand]/product/[id]-940988f341702eb0.js"],
        "/[region]/[brand]/search": ["static/css/ef0e82997ccddbcd.css", "static/chunks/pages/[region]/[brand]/search-77950e3a9352bd8a.js"],
        "/[region]/[brand]/warranty": [r, "static/chunks/pages/[region]/[brand]/warranty-b96b4d12d92bf2b8.js"],
        sortedPages: ["/404", "/_app", "/_error", "/academy", "/academy/know", "/academy/register", "/account/change-password", "/account/email-confirmation", "/account/email-verification", "/account/login", "/account/profile", "/account/recover-password", "/account/register", "/account/reset-password", "/loyalty", "/loyalty/benefits", "/loyalty/faq", "/loyalty/invoice-upload", "/loyalty/invoices", "/loyalty/know", "/loyalty/payment-data", "/loyalty/points-expiring", "/loyalty/points-extract", "/loyalty/profile", "/loyalty/rebate", "/loyalty/recycle-max", "/loyalty/recycle-max/[id]", "/loyalty/register", "/loyalty/rules", "/loyalty/rules-summary", "/loyalty/status/blocked", "/loyalty/status/disapprove", "/loyalty/status/pending", "/loyalty/status/segment-unauthorized", "/loyalty/users", "/loyalty/users/[email]", "/[region]/[brand]", "/[region]/[brand]/about", "/[region]/[brand]/compare-products", "/[region]/[brand]/contact", "/[region]/[brand]/download-pdf", "/[region]/[brand]/find", "/[region]/[brand]/healthz", "/[region]/[brand]/privacy", "/[region]/[brand]/product/[id]", "/[region]/[brand]/search", "/[region]/[brand]/warranty"]
    }
}(void 0, "static/chunks/7333-e3f191b038f0c5a3.js", "static/chunks/019d026b-707a331873baddf8.js", "static/chunks/1535-bd23c4ae56d57456.js", "static/css/a86916a9079116c0.css", "static/chunks/5046-5031a4df8ad06e92.js", "static/chunks/7976-b03f3444fad11577.js", "static/css/f0673f085febaf09.css", "static/chunks/41155975-22f5f3d5db2de8e2.js", "static/chunks/4786-63fdfcffd26524d0.js"), self.__BUILD_MANIFEST_CB && self.__BUILD_MANIFEST_CB();