export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: "static",

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "MasaHesap",
    htmlAttrs: {
      lang: "tr",
    },

    meta: [
      { charset: "utf-8" },
      {
        name: "viewport",
        content:
          "width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no, shrink-to-fit=no",
      },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" },

      {
        name: "robots",
        content:
          "follow, index, max-snippet:-1, max-video-preview:-1, max-image-preview:large",
      },
      {
        property: "og:locale",
        content: "tr_TR",
      },
      {
        property: "og:type",
        content: "article",
      },
      {
        property: "og:type",
        content: "article",
      },
      {
        property: "article:author",
        content: "Kuvarssoft",
      },
      {
        property: "og:title",
        content: "İş Hesap",
      },
      {
        name: "keywords",
        content: "Ön Muhasebe, E-dönüşüm, Kobi, Resmi Muhasebe, Cari",
      },
      {
        name: "author",
        content: "Kuvarssoft",
      },
    ],
    link: [
      { rel: "canonical", href: "https://masahesap.com" },
      { rel: "shortcut icon", type: "image/x-icon", href: "/images/ico.png" },
      { rel: "apple-touch-icon", sizes: "152x152", href: "/images/ico.png" },
      { rel: "apple-touch-icon", sizes: "120x120", href: "/images/ico.png" },
      { rel: "apple-touch-icon", sizes: "76x76", href: "/images/ico.png" },
      { rel: "apple-touch-icon", href: "/images/ico.png" },
      { rel: "icon", type: "image/x-icon", href: "/images/ico.png" },

      {
        rel: "stylesheet",
        href: "https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.2/font/bootstrap-icons.css",
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700;900&display=swap",
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap",
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Google+Sans:wght@300;400;500;700;900&display=swap",
      },
      {
        rel: "stylesheet",
        href: "/css/bootstrap.min.css",
      },
      {
        rel: "stylesheet",
        href: "/css/flaticon.css",
      },
      {
        rel: "stylesheet",
        href: "/css/menu.css",
      },
      {
        id: "effect",
        href: "/css/dropdown-effects/fade-down.css",
        media: "all",
        rel: "stylesheet",
      },
      {
        href: "/css/owl.carousel.min.css",
        rel: "stylesheet",
      },
      {
        href: "/css/flexslider.css",
        rel: "stylesheet",
      },
      {
        href: "/css/owl.theme.default.min.css",
        rel: "stylesheet",
      },
      {
        href: "/css/style.css",
        rel: "stylesheet",
      },
      {
        href: "/css/animate.css",
        rel: "stylesheet",
      },
      {
        href: "/css/responsive.css",
        rel: "stylesheet",
      },
      {
        href: "/css/slider.css",
        rel: "stylesheet",
      },
    ],
    script: [
      {
        src: "/js/jquery-3.5.1.min.js",
      },
      {
        src: "/js/smartbanner.js",
      },
      {
        src: "/js/bootstrap.min.js",
      },
      {
        src: "/js/modernizr.custom.js",
      },
      {
        src: "/js/jquery.easing.js",
      },
      {
        src: "/js/jquery.appear.js",
      },
      {
        src: "/js/jquery.scrollto.js",
      },
      {
        src: "/js/menu.js",
      },
      {
        src: "/js/jquery.flexslider.js",
      },
      {
        src: "/js/owl.carousel.min.js",
      },
      {
        src: "/js/jquery.magnific-popup.min.js",
      },
      {
        src: "/js/jquery.validate.min.js",
      },
      {
        src: "/js/jquery.ajaxchimp.min.js",
      },
      {
        src: "/js/wow.js",
      },
      {
        src: "/js/custom.js",
      },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ["element-ui/lib/theme-chalk/index.css"],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: ["@/plugins/element-ui"],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    "@nuxtjs/axios",
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: "/",
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    transpile: [/^element-ui/],
  },
};
