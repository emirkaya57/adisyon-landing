<template>
  <section
    id="download-1"
    class="bg_sblue bg_pattern_01 pt-100 download-section division"
  >
    <div class="container white-color">
      <div class="row d-flex align-items-center  m-row">
        <!-- IMAGE BLOCK -->
        <div class="col-md-5 col-lg-6 m-bottom">
          <div
            class="img-block right-column pc-25 wow fadeInUp"
            :data-wow-delay="this.delay"
          >
            <img
              class="img-fluid"
              src="/images/uygulamamızı-deneyimleyin.png"
              alt="İş Hesap"
            />
          </div>
        </div>
        <!-- TEXT BLOCK -->
        <div class="col-md-7 col-lg-6 m-top">
          <div
            class="txt-block left-column pc-20 wow fadeInLeft"
            :data-wow-delay="this.delay"
          >
            <!-- Title -->
            <h2 class="h2-md">Mobil Uygulamamızı Deneyimleyin</h2>

            <!-- Text -->
            <p class="p-xl">
              Tüm Android veya IOS tabanlı cep telefonlarında KOBİ mobil
              uygulamamızı indirip kullanabilirsiniz. Cep telefonunuzdan
              internete bağlı olduğu her an e-fatura düzenleyebilirsiniz. Cari
              ekleyebilir, sipariş takibi yapabilir, kasa ve banka işlemlerinizi
              gerçekleştirebilirsiniz
            </p>

            <!-- STORE BADGES -->
            <div class="stores-badge d-flex justify-content-around ">
              <!-- AppStore -->
              <a
                href="https://apps.apple.com/tr/app/i-%C5%9F-hesap/id6443794945?l=tr"
                class="store"
              >
                <img
                  class="appstore"
                  src="/images/as-beyaz.png"
                  alt="İş Hesap App Store"
                />
              </a>

              <!-- Google Play -->
              <a
                href="https://play.google.com/store/apps/details?id=com.kuvarssoft.ishesap&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1"
                class="store"
              >
                <img src="/images/ps-beyaz.png" alt="İş Hesap Google Play Store"
              /></a>

             
            </div>
          <!--   <div class=" d-flex justify-content-around " >
              <img src="/images/home/appleCode.png" class=" p-2" width="150px" height="150px"  alt="İsHesap">
              <img src="/images/home/googleCode.png" class="p-2" width="150px" height="150px"   alt="İsHesap">
             </div> -->
          </div>
        </div>
        <!-- END TEXT BLOCK -->
      </div>
      <!-- End row -->
    </div>
    <!-- End container -->
  </section>
</template>

<script>
export default {
  data() {
    return {
      delay: "0.1s",
    }
  }
};
</script>

<style></style>
