<template>
  <!-- PAGE CONTENT
		============================================= -->
  <div id="page" class="page">
    <Header></Header>

    <!-- BLOG POSTS LISTING
============================================= -->
    <section
      id="blog-page"
      class="bg_whitesmoke hero-offset-nav pb-60 blog-page-section division"
    >
      <div class="container">
        <!-- SECTION TITLE -->
        <div class="row">
          <div class="col-md-10 offset-md-1">
            <div class="section-title text-center pc-50 mb-70">
              <!-- Title -->
              <h3 class="h3-lg">
                Sizin için alakalı haberler, teknik şeyler ve daha
                fazlası.Bloğumuza hoş geldiniz
              </h3>
            </div>
          </div>
          <div class="col-md-10 offset-md-1">
            <el-tabs v-model="activeKategori" @tab-click="handleClick">
              <el-tab-pane label="Tümü" name="tumu"></el-tab-pane>
              <el-tab-pane v-for="k in kategori" :key="k.id" :name="k.id">
                <span slot="label"
                  ><i :class="k.icon" class="mr-2"></i>{{ k.title }}</span
                >
              </el-tab-pane>
            </el-tabs>
          </div>
        </div>

        <!-- FEATURED POST -->
        <div class="rel blog-post featured-post wide-post">
          <div
            class="row d-flex align-items-center cursor-pointer"
            @click="
              $router.push(
                '/blog/' +
                  blogsData.records?.[0].id +
                  '-' +
                  blogsData.records?.[0].title.replace(' ', '-')
              )
            "
          >
            <div
              class="featured-badge text-center ico-30 bg_whitesmoke yellow-color"
            >
              <span class="flaticon-star"></span>
            </div>

            <!-- BLOG POST IMAGE -->
            <div class="col-lg-7 blog-post-img">
              <img
                class="img-fluid"
                :src="getBlogImage(blogsData.records?.[0].image)"
                :alt="blogsData.records?.[0].title"
              />
            </div>

            <!-- BLOG POST TEXT -->
            <div class="col-lg-5 blog-post-txt">
              <!-- Post Tag -->
              <p class="p-md post-tag">İş Hesap Blog</p>

              <!-- Post Link -->
              <h5 class="h5-xl">
                <a class="ellipsis-1">{{ blogsData.records?.[0].title }}</a>
              </h5>

              <!-- Text -->
              <p class="p-md ellipsis-3">
                {{ blogsData.records?.[0].content }}
              </p>

              <!-- Post Meta -->
              <div class="post-meta">
                <div class="post-author-avatar">
                  <img src="/images/is1.png" alt="İş Hesap" />
                </div>
                <p>{{ dateParser(blogsData.records?.[0].updated_at) }}</p>
              </div>
            </div>
            <!-- END BLOG POST TEXT -->
          </div>
          <!-- End row -->
        </div>
        <!-- END FEATURED POST -->

        <!-- POSTS WRAPPER -->
        <div class="posts-wrapper">
          <!-- BLOG POSTS CATEGORY -->
          <div class="row">
            <div class="col-md-12">
              <h5 class="h5-lg posts-category">En son bloglar</h5>
            </div>
          </div>

          <div class="row">
            <!-- BLOG POST #1 -->
            <div
              class="col-md-6 col-lg-4 cursor-pointer"
              @click="
                $router.push(
                  '/blog/' + blogs.id + '-' + blogs.title.replace(' ', '-')
                )
              "
              v-for="(blogs, key) in blogsData.records"
              :key="blogs"
              v-show="key != 0"
            >
              <div class="blog-post mb-40 wow fadeInUp" data-wow-delay="0.4s">
                <!-- BLOG POST IMAGE -->
                <div class="blog-post-img">
                  <img
                    class="img-fluid"
                    :src="getBlogImage(blogs.image)"
                    :alt="blogs.title"
                  />
                </div>

                <!-- BLOG POST TEXT -->
                <div class="blog-post-txt">
                  <!-- Post Tag -->
                  <p class="p-md post-tag">işhesap Blog</p>

                  <!-- Post Link -->
                  <h5 class="h5-xs">
                    <a class="ellipsis-1">{{ blogs.title }}</a>
                  </h5>

                  <!-- Text -->
                  <p class="p-md ellipsis-3">{{ blogs.content }}</p>

                  <!-- Post Meta -->
                  <div class="post-meta">
                    <div class="post-author-avatar">
                      <img src="/images/is1.png" alt="İş Hesap" />
                    </div>
                    <p>{{ dateParser(blogs.updated_at) }}</p>
                  </div>
                </div>
              </div>
            </div>
            <!-- END  BLOG POST #1 -->
          </div>
          <!-- End row -->
        </div>
        <!-- END POSTS WRAPPER -->
      </div>
      <!-- End container -->

      <!-- GEOMETRIC OVERLAY -->
      <div class="bg_fixed geometric_overlay"></div>
    </section>
    <!-- END BLOG POSTS LISTING -->

    <!-- PAGE PAGINATION
============================================= -->
    <div class="bg_whitesmoke pb-100 page-pagination division">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <nav aria-label="Page navigation">
              <ul class="pagination ico-20 justify-content-center">
                <li
                  class="page-item"
                  :class="params.page == 1 ? 'disabled' : ''"
                >
                  <button
                    class="page-link"
                    @click="change(params.page - 1)"
                    tabindex="-1"
                  >
                    <span class="flaticon-chevron-pointing-to-the-left"></span>
                  </button>
                </li>

                <li
                  class="page-item"
                  :class="params.page == page ? 'active' : ''"
                  v-for="page in blogsData.pages"
                  :key="page"
                >
                  <button class="page-link" @click="change(page)">
                    {{ page }}<span class="sr-only">(current)</span>
                  </button>
                </li>

                <li
                  class="page-item"
                  :class="params.page == blogsData.pages ? 'disabled' : ''"
                >
                  <button class="page-link" @click="change(params.page + 1)">
                    <span class="flaticon-right-chevron"></span>
                  </button>
                </li>
              </ul>
            </nav>
          </div>
        </div>
        <!-- End row -->
      </div>
      <!-- End container -->
    </div>
    <!-- END PAGE PAGINATION -->

    <!-- NEWSLETTER-1
============================================= -->
    <section
      id="newsletter-1"
      class="bg_whitesmoke pb-20 newsletter-section division"
    >
      <div class="container">
        <div class="newsletter-wrapper bg-white">
          <div class="row d-flex align-items-center">
            <!-- SECTION TITLE -->
            <div class="col-lg-6">
              <div class="newsletter-txt">
                <!-- Section ID -->
                <span class="section-id">Subscribe to Our Newsletter</span>

                <!-- Title -->
                <h4 class="h4-xl">
                  Stay up to date with our news, ideas and updates
                </h4>
              </div>
            </div>

            <!-- NEWSLETTER FORM -->
            <div class="col-lg-6">
              <form class="newsletter-form">
                <div class="input-group">
                  <input
                    type="email"
                    autocomplete="off"
                    class="form-control"
                    placeholder="Your email address"
                    required
                    id="s-email"
                  />
                  <span class="input-group-btn">
                    <button
                      type="submit"
                      class="btn btn-md btn-skyblue tra-skyblue-hover"
                    >
                      Subscribe Now
                    </button>
                  </span>
                </div>

                <!-- Newsletter Form Notification -->
                <label for="s-email" class="form-notification"></label>
              </form>
            </div>
            <!-- END NEWSLETTER FORM -->
          </div>
          <!-- End row -->
        </div>
        <!-- End newsletter-holder -->
      </div>
      <!-- End container -->
    </section>
    <!-- END NEWSLETTER-1 -->

    <Footer></Footer>
  </div>
  <!-- END PAGE CONTENT -->
</template>

<script>
export default {
  head: {
    title: "Blog - İş Hesap",
  },

  modules: ["@nuxtjs/axios"],
  data() {
    return {
      activeKategori: "tumu",
      data: {},
      blogsData: {},
      blogImgUrl: "https://blog.siberhesap.com/uploads/",
      params: {
        limit: 7,
        page: 1,
        sorts: {},
        filters: {},
        column_array_id: 0,
        column_array_id_query: 0,
      },
      kategori: {},
    };
  },
  mounted() {
    this.getKategori();
    this.getdata();
  },
  methods: {
    change(e) {
      this.params.page = e;
      this.getdata();
    },
    handleClick() {
      this.params.filters = {
        kategori_ids: {
          type: 1,
          guiType: "multiselect",
          filter: [this.activeKategori],
        },
      };
      this.getdata();
    },
    getdata() {
      this.$axios
        .$post("https://blog.siberhesap.com/api/v1/public/tables/blog", {
          params: JSON.stringify(this.params),
        })
        .then((res) => {
          this.blogsData = res.data;
        });
    },
    getBlogImage(img) {
      if (img == null) return;
      return (
        this.blogImgUrl +
        JSON.parse(img)?.[0].destination_path +
        "m_" +
        JSON.parse(img)?.[0].file_name
      );
    },
    getKategori() {
      const prm = {
        limit: 10,
        page: 1,
        sorts: {},
        filters: {},
        column_set_id: 0,
        column_array_id: 0,
        column_array_id_query: 0,
      };
      this.$axios
        .$post("https://blog.siberhesap.com/api/v1/public/tables/kategori", {
          params: JSON.stringify(prm),
        })
        .then((res) => {
          this.kategori = res.data.records;
        });
    },
    dateParser(date) {
      return new Date(date).toLocaleDateString("tr-TR", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
      });
    },
  },
};
</script>
<style>
.blog-page-section a {
  cursor: pointer;
}
</style>
