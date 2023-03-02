<template>
  <div id="page" class="page">
    <!-- HEADER
			============================================= -->
    <Header :loading="loading"></Header>
    <!-- END HEADER -->

    <section id="faqs-1" class="bg_whitesmoke faqs-section division">
      <div class="container">
        <div class="row">


          <!-- FAQs TITLE -->
          <div class="col-lg-12 mb-50 ">
            <div class="faqs-1-title pc-10 text-center">

              <!-- Section ID -->
              <!--  <span class="section-id grey-color">Sıkça Sorulan Sorular</span> -->

              <!-- Title -->
              <h2 class="h2-md mb-20">Sıkça Sorulan Sorular</h2>

              <!-- Text -->
              <p class="p-lg ">Siz sormadan biz sizin için cevaplayalım.
              </p>

            </div>
          </div>


          <div class="col-lg-12">
            <div id="accordion" role="tablist" class="pc-20">
              <div class="card grey-color" v-for="soru in data1" :key="soru">

                <!-- Question -->
                <div class="card-header" role="tab" id="headingFour">
                  <h5 class="h5-sm">
                    <a class="collapsed" data-toggle="collapse" :href="'#collapseFour' + soru.id" role="button"
                      aria-expanded="false" aria-controls="collapseFour">
                      {{ soru.content }}
                    </a>
                  </h5>
                </div>

                <!-- Answer -->
                <div :id="'collapseFour' + soru.id" class="collapse" role="tabpanel" aria-labelledby="headingFour"
                  data-parent="#accordion">
                  <div class="card-body">

                    <!-- Text -->
                    <p class="p-lg">{{ soru.cevaplar_id }}
                    </p>

                  </div>
                </div>

              </div>

            </div>
          </div>
        </div> <!-- End row -->
      </div> <!-- End container -->
    </section> <!-- END FAQs-1 -->



    <div class="bg_whitesmoke pb-100 page-pagination division">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <nav aria-label="Page navigation">
              <ul class="pagination ico-20 justify-content-center">
                <li class="page-item" :class="params.page == 1 ? 'disabled' : ''">
                  <button class="page-link" @click="change(params.page - 1)" tabindex="-1">
                    <span class="flaticon-chevron-pointing-to-the-left"></span>
                  </button>
                </li>

                <li class="page-item" :class="params.page == page ? 'active' : ''" v-for="page in pagesData.pages"
                  :key="page">
                  <button class="page-link" @click="change(page)">
                    {{ page }}<span class="sr-only">(current)</span>
                  </button>
                </li>

                <li class="page-item" :class="params.page == pagesData.pages ? 'disabled' : ''">
                  <button class="page-link" @click="change(params.page + 1)">
                    <span class="flaticon-right-chevron"></span>
                  </button>
                </li>
              </ul>
            </nav>
          </div>
        </div>

      </div>

    </div>

    <div class="more-questions pc-20 text-center ">
      <h5 class="h5-sm"><span class="flaticon-check"></span>
        Başka her türlü sorunuz için <a href="/iletisim" class="skyblue-color">iletişime geçebilirsiniz!</a>
      </h5>
    </div>


    <!--Footer-->
    <Footer></Footer>
    <!-- END FOOTER-2 -->
  </div>
</template>

<script>
export default {
  head: {
    title: "SSS - MasaHesap",
    meta: [
      {
        hid: "description",
        name: "description",
        content:
          "Ön Muhasebe nasıl kullanılır? Kobi paketinde neler yapabilirim? Resmi Muhasebede fişlerim otomatik mi eklenecek? Carilerimi nasıl yönetebilirim? Cevaplarınız burada.",
      },
    ],
  },
  data() {
    return {
      data1: [],
      pagesData: [],
      loading: true,
      params: {
        limit: 10,
        page: 1,
        sorts: {},
        filters: {},
        column_array_id: 0,
        column_array_id_query: 0,
      },
    };
  },
  methods: {
    change(e) {
      this.params.page = e;
      this.getData();
    },
    getData() {
      this.$axios
        .$post("https://blog.siberhesap.com/api/v1/public/tables/sssorular", {
          params: JSON.stringify(this.params),
        })
        .then((res) => {
          this.data1 = res.data.records
          this.pagesData = res.data
          this.loading = false
        });
    },
  },
  mounted() {
    this.getData();
  },
};
</script>

<style></style>
