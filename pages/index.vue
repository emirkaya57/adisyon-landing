<template>
  <div id="page" class="page">
    <!-- HEADER
			============================================= -->
    <Header :loading="loading"></Header>
    <!-- END HEADER -->

    <!-- HERO-12
			============================================= -->

    <section id="hero-3" class="bg_scroll hero-section division h-100">
      <div class="container">
        <div class="row d-flex align-items-center">


          <!-- HERO TEXT -->
          <div class="col-md-7 col-lg-6">
            <div class="hero-3-txt pc-10 mb-40 wow fadeInRight" data-wow-delay="0.4s">

              <!-- Small Tittle -->
              <h5 class="h5-xs grey-color">MasaHesap</h5>

              <!-- Title -->
              <h2 class="h2-xl">Kurulum Gerektirmeyen Adisyon</h2>

              <!-- Text -->
              <p class="p-xl grey-color">İşletmenizi ve Siparişlerinizi kolaylıkla yönetmek istiyorsanız bu çözüm
                tam size göre.
              </p>

              <!-- HERO REQUEST FORM -->
              <form name="requestform" class="request-form">

                <!-- Form Inputs -->
                <div class="input-group">

                  <input type="email" v-model="email" name="email" class="form-control email"
                    placeholder="Email Adresiniz" required>
                  <span class="input-group-btn form-btn">
                    <a :href="'https://adsiyon.masahesap.com/register?email=' + this.email"
                      class="btn btn-md btn-skyblue black-hover submit">Kayıt Ol</a>
                  </span>
                </div>
                <p class="mt-10 text-right" style="color:#757575; font-weight: 500;">İlk 3 Ay Ücretsiz!</p>


                <!-- Form Message -->
                <div class="request-form-msg"><span class="loading"></span></div>

              </form>

            </div>
          </div> <!-- END HERO TEXT -->


          <!-- HERO IMAGE -->
          <div class="col-md-5 col-lg-6">
            <div class="hero-3-img text-center mb-40 wow fadeInLeft" data-wow-delay="0.6s">
              <img class="img-fluid" src="/images/bannerFoto.png" alt="hero-image">
            </div>
          </div>


        </div> <!-- End row -->
      </div> <!-- End container -->


      <!-- SECTION OVERLAY -->
      <div class="bg_fixed wave_overlay"></div>


    </section>
    <!-- END HERO-12 -->

    <section id="features-5" class="wide-50 features-section division">
      <div class="container">

        <div class="row">
          <div class="col-lg-10 offset-lg-1">
            <div class="section-title text-center mt-35 mb-5">

              <h3 class="h3-md">Özelliklerimiz</h3>
              <hr class="mb-35" style="color: #D8D9CF;">
            </div>
          </div>
        </div>


        <div class="fbox-5-wrapper pc-30">
          <div class="row">

            <div id="fb-5-1" class="col-md-4">

              <el-card class="fbox-5 pc-25 mb-40 wow card-kutu fadeInUp text-center" data-wow-delay="0.4s">
                <div>
                  <div class="mb-2">
                    <img src="/ozellik/discount.png" alt="düşük maliyet">
                  </div>
                  <div class="fbox-txt">
                    <h6 style="color:#000" class="h6-sm">Düşük Maliyet
                    </h6>
                    <p class="p-sm" style="color:#7F8487">
                      Fiyat ve müşteri politikamız ile her zaman yanınızdayız! MasaHesap ile lisanslama ya da yıllık bakım
                      maliyetlerinizden kurtulun. Abonelik sistemi sayesinde ödediğiniz kadar düşük maliyetlerle kullanın.
                    </p>
                  </div>
                </div>
              </el-card>
            </div>

            <div id="fb-5-1" class="col-md-4">

              <el-card class="fbox-5 pc-25 mb-40 wow fadeInUp card-kutu text-center" data-wow-delay="0.4s">

                <div class="mb-2">
                  <img src="/ozellik/easy.png" alt="kolay kullanım">
                </div>
                <div class="fbox-txt">

                  <h6 style="color:#000" class="h6-sm">Kolay Kullanım
                  </h6>


                  <p class="p-sm" style="color:#7F8487">
                    Anlaşılır ve basit arayüzleri sayesinde firmanızla tanımlamaları yaptıktan sonra kullanmaya
                    başlayın. İster sizin için hazırladığımız şablonlardan dilediğinizi seçin isterseniz işletmenizi
                    sıfırdan oluşturun.
                  </p>
                </div>
              </el-card>
            </div>

            <div id="fb-5-1" class="col-md-4">

              <el-card class="fbox-5 pc-25 mb-40 wow fadeInUp card-kutu text-center" data-wow-delay="0.4s">

                <div class="mb-2">
                  <img src="/ozellik/devices.png" alt="çoklu cihaz">
                </div>
                <div class="fbox-txt">

                  <h6 style="color:#000" class="h6-sm">Cihaz Özgürlüğü
                  </h6>


                  <p class="p-sm" style="color:#7F8487">
                    İnternet erişimi olan her cihaz ile özgürsünüz. Basit ve anlaşılır Web ve Mobil arayüzlerimiz
                    sayesinde tüm cihazlarınızdan işletmenize ait operasyonlarınızı kolaylıkla yönetin.
                  </p>
                </div>
              </el-card>

            </div>

            <div id="fb-5-1" class="col-md-4">

              <el-card class="fbox-5 pc-25 mb-40 wow fadeInUp card-kutu text-center" data-wow-delay="0.4s">

                <div class="mb-2">
                  <img src="/ozellik/monitor.png" alt="gelişmiş raporlama">
                </div>
                <div class="fbox-txt">

                  <h6 style="color:#000" class="h6-sm">Raporlama Sistemi
                  </h6>


                  <p class="p-sm" style="color:#7F8487">
                    İşletmenize ait masa yoğunluğundan, cirolarınıza, favori ürünlerden en çok sipariş edilen ürünlerinize
                    kadar detaylı raporlama alın. Personel mesailerinizi raporlama ile puanlayın.
                  </p>
                </div>
              </el-card>

            </div>


            <div id="fb-5-1" class="col-md-4">

              <el-card class="fbox-5 pc-25 mb-40 wow fadeInUp card-kutu text-center" data-wow-delay="0.4s">

                <div class="mb-2">
                  <img src="/ozellik/qr-menu.png" alt="kolay kullanım">
                </div>
                <div class="fbox-txt">

                  <h6 style="color:#000" class="h6-sm">Yedekleme ve Güvenlik
                  </h6>


                  <p class="p-sm" style="color:#7F8487">
                    Verileriniz kendi sunucu merkezlerimizde bizim güvencemiz altında. Yedekleme, güncelleme ya da
                    güvenlik sorunlarını, erişim sıkıntılarını sizin yerinize biz düşünüyoruz.
                  </p>
                </div>
              </el-card>

            </div>
            <div id="fb-5-1" class="col-md-4">

              <el-card class="fbox-5 pc-25 mb-40 wow fadeInUp card-kutu text-center" data-wow-delay="0.4s">
                <div class="mb-2">
                  <img src="/ozellik/backup.png" alt="gelişmiş yedekleme">
                </div>
                <div class="fbox-txt">

                  <h6 style="color:#000" class="h6-sm"> Yetkilendirme Sistemi
                  </h6>


                  <p class="p-sm" style="color:#7F8487">
                    Tüm işletme operasyonunu personellerinize özel, bölge ve birimlere özel yetkilendirebilirsiniz. Bu
                    sayede personel yönetimini ve raporlamasını daha kullanışlı ve kolay hale getirebilirsiniz.
                  </p>
                </div>
              </el-card>

            </div>

          </div>
          <!-- End row -->
        </div>
        <!-- END FEATURES-5 HOLDER -->
      </div>
      <!-- End container -->
    </section>
    <!-- FEATURES-7
			============================================= -->

    <!-- END FEATURES-7 -->

    <!-- CONTENT-5
			============================================= -->
    <section id="content-5" class="pb-80 content-section">
      <div class="bg-inner bg_whitesmoke pt-100 division">
        <div class="container">
          <div class="row d-flex align-items-center">
            <!-- IMAGE BLOCK -->
            <div class="col-md-5 col-lg-6">
              <div class="content-5-img right-column pc-20 text-center wow fadeInRight" data-wow-delay="0.6s">
                <img class="img-fluid" src="/anasayfa/1.png" alt="İş Hesap Kobi" />
              </div>
            </div>

            <!-- TEXT BLOCK -->
            <div class="col-md-7 col-lg-6">
              <div class="txt-block left-column mb-40 wow fadeInLeft" data-wow-delay="0.6s">
                <!-- Section ID -->
                <span class="section-id grey-color">Güvenli ve hızlı bir şekilde tüm verilerinize ulaşın!</span>

                <!-- Title -->
                <h2 class="h2-md">
                  Hızlı, Güvenli, Kolay
                </h2>

                <!-- Text -->
                <p class="p-lg">
                  Günümüz teknoloji çağında verilerin hızı, erişebilirliği ve güvenliği çok önemli hale gelmektedir.
                  MasaHesap olarak bu hizmetlerin tamamını düşük maliyet ve yüksek performans ile sizin kullanımınıza
                  sunmaktayız. Firmanızın ihtiyaç duyduğu adisyon, ödeme sistemi, cari hesaplama, kurye, mutfak ekranları
                  gibi tüm özellikleri kurulum, yedekleme ya da lisanslama ihtiyacı duymadan internet erişimi olan tüm
                  cihazlarınızdan kolaylıkla kontrol edebilirsiniz.
                </p>
              </div>
            </div>
            <!-- END CONTENT TXT -->
          </div>
          <!-- End row -->
        </div>
        <!-- End container -->
      </div>
      <!-- End Inner Background -->
    </section>
    <!-- END CONTENT-5 -->

    <!-- CONTENT-3
			============================================= -->
    <section id="content-3" class="wide-60 mt-inverse-40 content-section division">
      <div class="container">
        <!-- CONTENT BOX-1 -->
        <div id="cb-1-1" class="cbox-1 pb-25">
          <div class="row d-flex align-items-center m-row">
            <!-- TEXT BLOCK -->
            <div class="col-md-7 col-lg-6 m-bottom">
              <div class="txt-block left-column mb-40 wow fadeInRight" data-wow-delay="0.6s">
                <!-- Section ID -->
                <span class="section-id grey-color">
                  Hızlı bir şekilde yazılımlarımızı temin edebilirsiniz.
                </span>

                <!-- Title -->
                <h2 class="h2-md">Termal yazıcılar ile tam uyum!</h2>

                <!-- Text -->
                <p class="p-lg">
                  Siparişlerinizi, adisyonlarınızı, kurye detaylarını ya da müşteri hesaplarınızı termal yazıcılar ile
                  kağıda aktarabilir, detaylı yönetimini kontrol altına alabilirsiniz.Mutfak ekranlarımız ile
                  mutfağınızdaki trafiği kontrol edebilir ve yönetebilirsiniz.
                </p>
              </div>
            </div>
            <!-- END TEXT BLOCK -->

            <!-- IMAGE BLOCK -->
            <div class="col-md-5 col-lg-6 m-top">
              <div class="img-block right-column pc-15 mb-60 wow fadeInLeft" data-wow-delay="0.6s">
                <img class="img-fluid" src="/anasayfa/2.png" alt="İş Hesap Kobi" />
              </div>
            </div>
          </div>
          <!-- End row -->
        </div>
        <!-- END CONTENT BOX-1 -->

        <!-- CONTENT BOX-2 -->
        <div id="cb-1-2" class="cbox-1 rel">
          <div class="row d-flex align-items-center">
            <!-- IMAGE BLOCK -->
            <div class="col-md-5 col-lg-6">
              <div class="img-block left-column pc-25 mb-40 wow fadeInRight" data-wow-delay="0.6s">
                <img class="img-fluid" src="/anasayfa/3.png" alt="İş Hesap Kobi" />
              </div>
            </div>

            <!-- TEXT BLOCK -->
            <div class="col-md-7 col-lg-6">
              <div class="txt-block right-column pc-30 mb-40 wow fadeInLeft" data-wow-delay="0.6s">
                <!-- Section ID -->
                <span class="section-id grey-color">Mükemmel Entegrasyon</span>

                <!-- Title -->
                <h2 class="h2-md">

                  Paket sipariş ve kurye yönetimi
                </h2>

                <!-- List -->
                <div class="simple-list">

                  <p class="p-lg">

                    İlgili siparişinizi istediğiniz kuryeye atayabilir, siparişinizin durumunu, konumunu kolaylıkla
                    kontrol edebilirsiniz. Paket siparişine ait müşteri bilgilerini kayıt altına alabilir, termal
                    yazıcılar sayesinde yazdırabilir ya da ilgili kuryenizi mobil telefonu üzerinden kolaylıkla
                    yönlendirebilirsiniz..
                  </p>



                </div>
              </div>
            </div>
            <!-- END TEXT BLOCK -->
          </div>
          <!-- End row -->

          <!-- Transparent Background Elements -->
          <div class="tra-bkg-wrapper">
            <div class="bg_el_03 wow fadeInDown" data-wow-delay="1s"></div>
          </div>
        </div>
        <!-- END CONTENT BOX-2 -->
      </div>
      <!-- End container -->
    </section>
    <!-- END CONTENT-3 -->

    <!-- FEATURES-5
			============================================= -->
    <hazir></hazir>
    <!-- END FEATURES-5 -->

    <!-- CONTENT-12
			============================================= -->
    <section id="content-12" class="mb-60 content-section division">
      <div class="container">
        <div class="lavender_gradient content-12-wrapper">
          <div class="row d-flex align-items-center">
            <!-- TEXT BLOCK -->
            <div class="col-lg-5">
              <div class="txt-block left-column mb-40 wow fadeInRight" data-wow-delay="0.6s">
                <!-- Title -->
                <h2 class="h2-xs text-nowrap">
                  Müşteri Yönetimi
                </h2>

                <!-- Text -->
                <p class="p-lg">
                  MasaHesap ile müşteri yönetimi oldukça kolaydır. İşletmenize gelen müşterileri kolayca kayıt edebilir,
                  onlara bakiye tanımlayabilirsiniz.CallerID özelliği ile arayan müşterilerinizin tüm bilgilerini
                  görebilirsiniz böylece siparişinizi çok daha hızlı şekilde alabilirsiniz.
                </p>
              </div>
            </div>
            <!-- END TEXT BLOCK -->

            <!-- IMAGE BLOCK -->
            <div class="col-lg-7">
              <div class="content-12-img right-column wow fadeInLeft" data-wow-delay="0.6s">
                <img class="img-fluid" src="/anasayfa/4.png" alt="İş Hesap Kobi" />
              </div>
            </div>
          </div>
        </div>
        <!-- End row -->
      </div>
      <!-- End container -->
    </section>
    <!-- END CONTENT-12 -->

    <!-- CONTENT-2
			============================================= -->
    <section id="content-2" class="wide-50 content-section division">
      <div class="container">
        <div class="row d-flex align-items-center">
          <!-- IMAGE BLOCK -->

          <!-- END TEXT BLOCK -->

          <div class="col-md-5 col-lg-6">
            <div class="img-block left-column pc-20 mb-40 wow fadeInRight" data-wow-delay="0.6s">
              <img class="img-fluid" src="/anasayfa/5.png" alt="İş Hesap Kobi" />
            </div>
          </div>

          <!-- TEXT BLOCK -->
          <div class="col-md-7 col-lg-6">
            <div class="txt-block right-column mb-40 wow fadeInLeft" data-wow-delay="0.6s">
              <!-- Section ID -->
              <span class="section-id grey-color">Sadeliğin Güzelliği</span>

              <!-- Title -->
              <h2 class="h2-md">Çoklu Şube Yönetimi</h2>

              <!-- List -->
              <div class="simple-list">

                <p class="p-lg">
                  MasaHesap çoklu şube yönetimi ile işletmenizin bütün şubelerini,tek bir noktadan
                  yönetmenizi sağlar. Şubelerinizin genel durumları, masa doluluk oranları, günlük sipariş sayısı ve daha
                  birçok veriyi anlık takip etmenizi sağlar. Üstelik tüm bunlar için ek ücret ödemezsiniz.
                </p>

              </div>
            </div>
          </div>

        </div>
        <!-- End row -->
      </div>
      <!-- End container -->
    </section>
    <!-- END CONTENT-2 -->

    <!-- FEATURES-4
			============================================= -->
    <section id="features-4" class="pb-100 features-section division">
      <div class="container">
        <!-- SECTION TITLE -->
        <div class="row">
          <div class="col-lg-10 offset-lg-1">
            <div class="section-title text-center mb-70">
              <!-- Title -->
              <h2 class="h2-md">Sürprizlerimize hazır olun!</h2>

              <!-- Text -->
              <p class="p-xl">
                Adisyon yazılımımızı satın aldığınızda yıllık fiyat garantisi de
                almış olursunuz. Fiyatlarımızı yıllık olarak belirlemekte ve yıl
                içinde kesinlikle değişmemektedir.
              </p>
            </div>
          </div>
        </div>

        <!-- FEATURES-4 WRAPPER -->
        <div class="fbox-4-wrapper">
          <div class="row">
            <!-- FEATURE BOX #1 -->
            <div id="fb-4-1" class="col-md-6">
              <div class="fbox-4 bg_whitesmoke mb-30 wow fadeInUp" data-wow-delay="0.4s">
                <div class="row d-flex align-items-center m-row">
                  <!-- TEXT -->
                  <div class="col-lg-8 m-bottom">
                    <div class="fbox-4-txt">
                      <!-- Title -->
                      <h5 class="h5-sm">Karanlık/Aydınlık Mod Özelliği</h5>

                      <!-- Text -->
                      <p class="p-md grey-color">
                        Bu özellikle yoğun olarak kullandığınız zamanlarda
                        ekranların ve menülerin gözlerinizi yormaması
                        sağlanmaktadır. Ayrıca alışık olduğunuz şekilde Adisyon
                        yazılımını kullanmanız mümkün olmaktadır.
                      </p>
                    </div>
                  </div>

                  <!-- ICON -->
                  <div class="col-lg-4 m-top">
                    <div class="fbox-4-ico ico-100 grey-color text-center">
                      <span class="flaticon-paint-brush"></span>
                    </div>
                  </div>
                </div>
                <!-- End row -->
              </div>
              <!-- End fbox-4 -->
            </div>
            <!-- END FEATURE BOX #1 -->

            <!-- FEATURE BOX #2 -->
            <div id="fb-4-2" class="col-md-6">
              <div class="fbox-4 bg_whitesmoke mb-30 wow fadeInUp" data-wow-delay="0.6s">
                <div class="row d-flex align-items-center m-row">
                  <!-- TEXT -->
                  <div class="col-lg-8 m-bottom">
                    <div class="fbox-4-txt">
                      <!-- Title -->
                      <h5 class="h5-sm">Otomatik Yedekleme Özelliği</h5>

                      <!-- Text -->
                      <p class="p-md grey-color">
                        Adisyon yazılımı içerisinde yer alan bütün verileriniz
                        bulut sistemi içerisinde otomatik olarak
                        yedeklenmektedir. Ayrıca verileriniz virüslere, zararlı
                        yazılımlara ve siber saldırılara karşı korunmaktadır.
                      </p>
                    </div>
                  </div>

                  <!-- ICON -->
                  <div class="col-lg-4 m-top">
                    <div class="fbox-4-ico ico-100 grey-color text-center">
                      <span class="flaticon-roundabout"></span>
                    </div>
                  </div>
                </div>
                <!-- End row -->
              </div>
              <!-- End fbox-4 -->
            </div>
            <!-- END FEATURE BOX #2 -->

            <!-- FEATURE BOX #3 -->
            <div id="fb-4-3" class="col-md-6">
              <div class="fbox-4 bg_whitesmoke wow fadeInUp" data-wow-delay="0.8s">
                <div class="row d-flex align-items-center m-row">
                  <!-- TEXT -->
                  <div class="col-lg-8 m-bottom">
                    <div class="fbox-4-txt">
                      <!-- Title -->
                      <h5 class="h5-sm">
                        Cep/Tablet/Masaüstü/Dizüstü Cihaz Uyumu
                      </h5>

                      <!-- Text -->
                      <p class="p-md grey-color">
                        İnternete erişebilen her cihazdan erişebilir,
                        Adisyon yazılımını etkin bir şekilde kullanabilirsiniz.

                      </p>
                    </div>
                  </div>

                  <!-- ICON -->
                  <div class="col-lg-4 m-top">
                    <div class="fbox-4-ico ico-100 grey-color text-center">
                      <span class="flaticon-voice-message-1"></span>
                    </div>
                  </div>
                </div>
                <!-- End row -->
              </div>
              <!-- End fbox-4 -->
            </div>
            <!-- END FEATURE BOX #3 -->

            <!-- FEATURE BOX #4 -->
            <div id="fb-4-4" class="col-md-6">
              <div class="fbox-4 bg_whitesmoke wow fadeInUp" data-wow-delay="1s">
                <div class="row d-flex align-items-center m-row">
                  <!-- TEXT -->
                  <div class="col-lg-8 m-bottom">
                    <div class="fbox-4-txt">
                      <!-- Title -->
                      <h5 class="h5-sm">Detaylı Yardım Videoları</h5>

                      <!-- Text -->
                      <p class="p-md grey-color">
                        Programın herhangi bir bölümünde yaptığınız işlemde
                        aklınıza gelebilecek her sorunun yanıtını yardım videosu
                        olarak izleyebilirsiniz.
                      </p>
                    </div>
                  </div>

                  <!-- ICON -->
                  <div class="col-lg-4 m-top">
                    <div class="fbox-4-ico ico-100 grey-color text-center">
                      <span class="flaticon-tasks"></span>
                    </div>
                  </div>
                </div>
                <!-- End row -->
              </div>
              <!-- End fbox-4 -->
            </div>
            <!-- END FEATURE BOX #4 -->
          </div>
          <!-- End row -->
        </div>
        <!-- END FEATURES-4 WRAPPER -->
      </div>
      <!-- End container -->
    </section>
    <!-- END FEATURES-4 -->

    <!-- DOWNLOAD-6
			============================================= -->
    <section id="download-6" class="bg_mobile wide-100 download-section division">
      <div class="container white-color">
        <div class="row">
          <!-- DOWNLOAD TXT -->
          <div class="col-lg-6">
            <div class="download-6-txt pl-20 wow fadeInUp" data-wow-delay="0.6s">
              <!-- Section ID -->
              <span class="section-id">Kaliteli Yazılım</span>

              <!-- Title 	-->
              <h2 class="h2-md">
                Gelişmiş Özelliklerinden Tam Olarak Yararlanın
              </h2>

              <!-- Text -->
              <p class="p-xl">
                Yeni nesil yazılım teknolojilerini kullanıldığı web tabanlı ve
                mobil uygulama destekli Adisyon
                yazılımları ile işletmenizin ihtiyaç duyacağı tüm sipariş çözümleri MASAHESAP'ta yer almaktadır. Bu
                gelişmiş full
                entegre çalışan yazılımdan sizde faydalanın.
              </p>

              <!-- END STORE BADGES -->
            </div>
          </div>
          <!-- END DOWNLOAD TXT -->
        </div>
        <!-- End row -->
      </div>
      <!-- End container -->
    </section>
    <!-- END  DOWNLOAD-6 -->

    <!-- CONTENT-11
			============================================= -->



    <!-- DOWNLOAD-1
			============================================= -->
    <paketler></paketler>
    <!-- END DOWNLOAD-1 -->
    <div class="dividers">
      <el-divider></el-divider>
    </div>
    <iletisim></iletisim>

    <!-- FOOTER-4
			============================================= -->
    <Footer></Footer>
    <!-- END FOOTER-4 -->
  </div>
</template>

<script>
import Iletisim from '../components/iletisim.vue';
import paketler from '../components/paketler.vue';
export default {
  components: { paketler, Iletisim },
  head: {
    title: "MasaHesap",
    meta: [
      {
        hid: "description",
        name: "description",
        content:
          "Günümüzde işletmeler hızlı ve sağlıklı karar almak zorundadırlar. Artan rekabet baskısı ve ekonomik dalgalanmalar nedeniyle işletmesinin bilgilerine hakim olan KOBİ’ler ayakta kalabilmektedirler. Eğer KOBİ çözümünü kullanıyorsanız internetin olduğu herhangi bir cihazdan ve cep telefonundan e-fatura düzenleyebilir, siparişlerinizi takip edebilir, kasa ve banka işlemlerini gerçekleştirebilirsiniz. Veri, bilgi günümüzün en önemli ticari değeri olarak kabul edilmektedir. Verileriniz, bilgileriniz KOBİ yazılımı ile istediğiniz anda, istediğiniz bilgiye erişim sağlamanızı kolaylaştıracak şekilde dizayn edilmiştir.",
      },
    ],
  },
  data() {
    return {
      delay: "0.1s",
      email: '',
      data: {},
      loading: true,
      params: {
        limit: 3,
        page: 1,
        sorts: {},
        filters: {},
        column_array_id: 0,
        column_array_id_query: 0,
      },
    };
  },

  mounted() {
    /* this.getData(); */
  },

  methods: {
    getData() {
      this.$axios
        .$post("https://blog.siberhesap.com/api/v1/public/tables/sssorular", {
          params: JSON.stringify(this.params),
        })
        .then((res) => {
          console.log(res);
          this.data = res.data;
          this.loading = false
        });
    },
  },
};
</script>

<style>
@media only screen and (max-width: 992px) {
  .feature-box {
    height: 255px !important;
  }
}

.card-kutu {
  box-shadow: 2px 2px 28px 3px rgba(0, 0, 0, 0.07);
  border-radius: 15px;
  transition: all 300ms ease-in-out;
}


.card-kutu:hover {
  transform: scale(1.08);
  transition: all 300ms ease-in-out;

}

.resim-2 {
  display: none;
}

.resim-div:hover .resim-2 {
  display: block;
}

.resim-div:hover .resim-1 {
  display: none;
}

.dividers .el-divider {
  background-color: #fff;
}
</style>
