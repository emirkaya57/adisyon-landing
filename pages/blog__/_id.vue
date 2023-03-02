<template>
  <!-- PAGE CONTENT
		============================================= -->
  <div id="page" class="page">
    <Header></Header>

    <!-- SINGLE POST
  ============================================= -->
    <section
      id="single-post"
      class="bg_whitesmoke hero-offset-nav pb-80 single-post-section division"
    >
      <div class="container">
        <div class="row">
          <div class="col-md-8 col-lg-9">
            <div class="single-post-wrapper">
              <div>
                <h2 class="text-center">
                  {{ data.title }}
                </h2>
              </div>

              <!-- BLOG POST INNER IMAGE -->
              <div class="post-inner-img">
                <img
                  class="img-fluid"
                  :title="data.title"
                  :src="getImage(data.image)"
                  :alt="data.title"
                />
              </div>

              <!-- BLOG POST TEXT -->
              <div class="single-post-txt">
                <!-- Text -->
                <p class="p-lg">{{ data.content }}</p>
              </div>
              <!-- END BLOG POST TEXT -->

              <div class="d-flex justify-content-around icons" v-if="false">
                <div
                  class="icon heart text-center"
                  @click="clickIcon"
                  :class="{ aktif: isActive }"
                >
                  <i class="bi bi-heart-fill" style="font-size: 1.5rem"></i>
                </div>

                <div class="icon comment text-center">
                  <i class="bi bi-chat-dots" style="font-size: 1.5rem"></i>
                </div>

                <div class="icon share text-center">
                  <i class="bi bi-send font" style="font-size: 1.5rem"></i>
                </div>
              </div>

              <!--Son Bloglar-->
            </div>
          </div>
          <div class="col-md-4 col-lg-3 position-relative">
            <div class="d-flex flex-column w-100">
              <el-card class="w-100">
                <div v-for="ktg in kategori" :key="ktg" class="h5">
                  <i :class="ktg.icon" class="h4"></i>
                  <label for="" style="cursor: pointer">{{ ktg.title }}</label>
                </div>
              </el-card>

              <hr />

              <div class="posts-wrapper p-0">
                <!-- BLOG POSTS CATEGORY -->

                <div class="row">
                  <!-- BLOG POST #1 -->
                  <div class="col-12" v-for="b in blog.records" :key="b">
                    <div
                      class="blog-post mb-40 wow fadeInUp"
                      data-wow-delay="0.4s"
                    >
                      <!-- BLOG POST IMAGE -->
                      <div class="blog-post-img">
                        <img
                          class="img-fluid w-100 images-blog"
                          :title="b.title"
                          :src="getImage(b.image)"
                          :alt="b.title"
                        />
                      </div>

                      <!-- BLOG POST TEXT -->
                      <div class="blog-post-txt">
                        <!-- Post Tag -->
                        <p class="p-md post-tag">İşHesap Blog</p>

                        <!-- Post Link -->
                        <h5 class="h5-xs">
                          <a
                            :href="
                              '/blog/' + b.id + '-' + b.title.replace(' ', '-')
                            "
                            class="ellipsis-1"
                            >{{ b.title }}</a
                          >
                        </h5>

                        <!-- Text -->
                        <p class="p-md ellipsis-3">
                          {{ b.content }}
                        </p>

                        <!-- Post Meta -->

                        <div class="d-flex justify-content-between">
                          <a
                            :href="
                              '/blog/' + b.id + '-' + b.title.replace(' ', '-')
                            "
                            >Detay</a
                          >
                          <p>{{ b.updated_at }}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <!-- END  BLOG POST #1 -->
                </div>
                <!-- End row -->
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- END SINGLE POST -->
    <!-- FOOTER-1
  ============================================= -->
    <Footer></Footer>
  </div>
  <!-- END PAGE CONTENT -->
</template>

<script>
export default {
  head: {
    title: "Blog - İş Hesap",
    meta: [
      {
        hid: "description",
        name: "description",
        content: "",
      },
    ],
  },
  data() {
    return {
      data: {},
      blog: {},
      blogImgUrl: "https://blog.siberhesap.com/uploads/",
      params: {
        limit: 3,
        page: 1,
        sorts: {},
        filters: {},
        column_set_id: 0,
        column_array_id: 0,
        column_array_id_query: 0,
      },
      kategori: [],
    };
  },

  mounted() {
    this.getData();
    this.getKategori();
    this.getblogs();
  },
  methods: {
    getImage(img) {
      if (img != undefined) {
        return (
          this.blogImgUrl +
          JSON.parse(img)[0].destination_path +
          "m_" +
          JSON.parse(img)[0].file_name
        );
      }
    },

    getData() {
      const id = this.$route.params.id.split("-")[0];
      this.$axios
        .$post("https://blog.siberhesap.com/api/v1/public/tables/blog/" + id, {
          params: JSON.stringify(this.params),
        })
        .then((res) => {
          this.data = res.data.record;
          document.title = this.data.title;
          document
            .querySelector('meta[name="description"]')
            .setAttribute("content", this.data.content);
          //document.getElementById("loader-wrapper").style.display = none;

          for (let index = 100; index > 0; index--) {
            setTimeout(() => {
              document.getElementById("loader-wrapper").style["opacity"] =
                index / 100;
            }, 1000);
          }
        });
    },
    getblogs() {
      this.$axios
        .$post("https://blog.siberhesap.com/api/v1/public/tables/blog", {
          params: JSON.stringify(this.params),
        })
        .then((res) => {
          this.blog = res.data;
        });
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
  },
};
</script>

<style></style>
