 (cd "$(git rev-parse --show-toplevel)" && git apply --3way <<'EOF' 
diff --git a//dev/null b/web/app/[locale]/[region]/about/page.js
index 0000000000000000000000000000000000000000..43829e6e02bb9e4f42698aba290131499d39c00a 100644
--- a//dev/null
+++ b/web/app/[locale]/[region]/about/page.js
@@ -0,0 +1,14 @@
+export default function AboutPage({ params }) {
+  const { locale, region } = params;
+  return (
+    <section className="content-section">
+      <div className="container">
+        <h1>Sobre a Auto Experts</h1>
+        <p>
+          Esta é uma página placeholder para {locale.toUpperCase()} / {region.toUpperCase()}. Aqui você poderá incluir a história
+          da marca, diferenciais e tudo o que desejar apresentar para os visitantes da região.
+        </p>
+      </div>
+    </section>
+  );
+}
 
EOF
)
