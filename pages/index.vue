<template>
  <div>
    <!-- PAGE CONTENT
		============================================= -->
    <div id="page" class="page">

      <!-- HEADER
			============================================= -->
      <Header :loading="loading"></Header>
      <!-- END HEADER -->

      <section id="hero-3" class="bg_scroll hero-section division">
        <div class="container">
          <div class="row d-flex align-items-center">


            <!-- HERO TEXT -->
            <div class="col-md-7 col-lg-6">
              <div class="hero-3-txt pc-10 mb-40 wow fadeInRight" data-wow-delay="0.4s">

                <!-- Small Tittle -->
                <h5 class="h5-xs grey-color">İşHesap</h5>

                <!-- Title -->
                <h2 class="h2-xl">Tüm Muhasebe Tek Platformda</h2>

                <!-- Text -->
                <p class="p-xl grey-color">Hesap takibi ve fatura işlemlerinizi kolaylıkla yönetmek istiyorsanız bu çözüm
                  tam size göre.
                </p>

                <!-- HERO REQUEST FORM -->
                <form name="requestform" class="request-form">

                  <!-- Form Inputs -->
                  <div class="input-group">

                    <input type="email" v-model="email" name="email" class="form-control email"
                      placeholder="Email Adresiniz" required>
                    <span class="input-group-btn form-btn">
                      <a :href="'https://muhasebe.ishesap.com/register?email=' + this.email"
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
                <img class="img-fluid" src="/images/home/4-1.png" alt="hero-image">
              </div>
            </div>


          </div> <!-- End row -->
        </div> <!-- End container -->


        <!-- SECTION OVERLAY -->
        <div class="bg_fixed wave_overlay"></div>


      </section>

      <!-- FEATURES-5
			============================================= -->
      <section id="features-5" class="wide-50 features-section division">
        <div class="container">

          <div class="row">
            <div class="col-lg-10 offset-lg-1">
              <div class="section-title text-center mt-35 mb-5">

                <h3 class="h3-md">KOBİ</h3>
                <hr class="mb-35" style="color: #D8D9CF;">
              </div>
            </div>
          </div>


          <div class="fbox-5-wrapper pc-30">
            <div class="row">

              <div id="fb-5-1" class="col-md-4">
                <a href="/kobi/cari-hesap-yonetimi">
                  <div class="fbox-5 pc-25 mb-40 wow fadeInUp feature-box p-4 text-center" data-wow-delay="0.4s">

                    <div class="fbox-ico ico-70 skyblue-color">
                      <img style="height:80px !important; width:80px !important"
                        src="/tasarim/home/cari-hesap-yonetimi.png" alt="iş hesap" />
                    </div>


                    <div class="fbox-txt">

                      <h6 class="h6-sm"><a style="color:#000000" href="/kobi/cari-hesap-yonetimi">CARİ HESAP YÖNETİMİ</a>
                      </h6>


                      <p class="p-sm">
                        Cari Hesaplarınızı kolaylıkla yönetin.
                      </p>
                    </div>
                  </div>
                </a>
              </div>


              <div id="fb-5-2" class="col-md-4">
                <a href="/kobi/finans-yonetimi">
                  <div class="fbox-5 pc-25 mb-40 wow fadeInUp feature-box p-4 text-center" data-wow-delay="0.4s">

                    <div class="fbox-ico ico-70 skyblue-color">
                      <img style="height:80px !important; width:80px !important" src="/tasarim/home/finans-yonetimi.png"
                        alt="iş hesap" />
                    </div>


                    <div class="fbox-txt">
                      <!-- Title -->
                      <h6 class="h6-sm">
                        <a style="color:#000000" href="/kobi/finans-yonetimi"> FİNANS YÖNETİMİ (KASA - BANKA)</a>
                      </h6>


                      <p class="p-sm">
                        Tanımlı kasa ve banka hesaplarınız elinizin altında.
                      </p>
                    </div>
                  </div>
                </a>
              </div>


              <div id="fb-5-3" class="col-md-4">
                <a href="/kobi/siparis-yonetimi">
                  <div class="fbox-5 pc-25 mb-40 wow fadeInUp feature-box p-4 text-center" :data-wow-delay="this.delay">

                    <div class="fbox-ico ico-70 skyblue-color">
                      <img style="height:80px !important; width:80px !important" src="/tasarim/home/siparis-yonetimi.png"
                        alt="iş hesap" />
                    </div>


                    <div class="fbox-txt">

                      <h6 class="h6-sm"><a style="color:#000000" href="/kobi/siparis-yonetimi">SİPARİŞ YÖNETİMİ</a> </h6>


                      <p class="p-sm">
                        Cari hesaplarınızın <br> alış - satış işlemleri tek ekranda.
                      </p>
                    </div>
                  </div>
                </a>
              </div>


              <div id="fb-5-4" class="col-md-4">
                <a href="/kobi/mobil-uygulama">
                  <div class="fbox-5 pc-25 mb-40 wow fadeInUp feature-box p-4 text-center" :data-wow-delay="this.delay">

                    <div class="fbox-ico ico-70 skyblue-color">
                      <img style="height:80px !important; width:80px !important" src="/tasarim/home/mobil-uygulama.png"
                        alt="iş hesap" />
                    </div>


                    <div class="fbox-txt">

                      <h6 class="h6-sm"><a style="color:#000000" href="/kobi/mobil-uygulama">MOBİL UYGULAMA</a> </h6>


                      <p class="p-sm">
                        Mobil uygulama ile tüm muhasebe işlemlerinizi cepten de yönetin.
                      </p>
                    </div>
                  </div>
                </a>
              </div>



              <div id="fb-5-5" class="col-md-4">
                <a href="/kobi/e-donusum">
                  <div class="fbox-5 pc-25 mb-40 wow fadeInUp feature-box p-4 text-center" data-wow-delay="0.8s">

                    <div class="fbox-ico ico-70 skyblue-color">
                      <img style="height:80px !important; width:80px !important" src="/tasarim/home/e-fatura-e-arsiv.png"
                        alt="iş hesap" />
                    </div>


                    <div class="fbox-txt">

                      <h6 class="h6-sm">
                        <a style="color:#000000" href="/kobi/e-donusum">E-FATURA / E-ARŞİV</a>

                      </h6>


                      <p class="p-sm">
                        Tek tıkla faturalandırın, tahsilatlarınızı kontrol altına alın.
                      </p>
                    </div>
                  </div>
                </a>
              </div>
              <div id="fb-5-5" class="col-md-4">

                <a href="/paketler">
                  <div class="fbox-5 pc-25 mb-40 wow fadeInUp feature-box p-4 text-center " data-wow-delay="0.8s">

                    <div class="fbox-ico ico-70 skyblue-color">
                      <img style="height:80px !important; width:80px !important"
                        src="/tasarim/home/uygun-fiyatlandirma.png" alt="iş hesap" />
                    </div>


                    <div class="fbox-txt">

                      <h6 class="h6-sm">
                        <a style="color:#000000">UYGUN FİYAT</a>

                      </h6>


                      <p class="p-sm">
                        Mâkul ücret politikamızla tanışın.
                      </p>
                    </div>
                  </div>
                </a>

              </div>
            </div>
            <!-- End row -->
          </div>
          <!-- END FEATURES-5 HOLDER -->
        </div>
        <!-- End container -->
      </section>
      <!-- END FEATURES-5 -->

      <section id="features-5" class="wide-50 features-section division">
        <div class="container">

          <div class="row">
            <div class="col-lg-10 offset-lg-1">
              <div class="section-title text-center mt-35 mb-5">

                <h3 class="h3-md">Ön Muhasebe</h3>
                <hr class="mb-35" style="color: #D8D9CF;">
              </div>
            </div>
          </div>


          <div class="fbox-5-wrapper pc-30">
            <div class="row">

              <div id="fb-5-1" class="col-md-4">
                <a href="/onmuhasebe/cari-hesap-yonetimi">
                  <div class="fbox-5 pc-25 mb-40 wow fadeInUp feature-box  p-4 text-center" data-wow-delay="0.4s">

                    <div class="fbox-ico ico-70 skyblue-color">
                      <img style="height:80px !important; width:80px !important"
                        src="/tasarim/home/cari-hesap-yonetimi.png" alt="iş hesap" />
                    </div>


                    <div class="fbox-txt">

                      <h6 class="h6-sm"><a style="color:#000000" href="/onmuhasebe/cari-hesap-yonetimi">CARİ HESAP
                          YÖNETİMİ</a></h6>



                      <p class="p-sm">
                        Cari Hesaplarınızı kolaylıkla yönetin.
                      </p>
                    </div>
                  </div>
                </a>
              </div>


              <div id="fb-5-2" class="col-md-4">
                <a href="/onmuhasebe/finans-yonetimi">
                  <div class="fbox-5 pc-25 mb-40 wow fadeInUp feature-box p-3 text-center" data-wow-delay="0.4s">

                    <div class="fbox-ico ico-70 skyblue-color">
                      <img style="height:80px !important; width:80px !important" src="/tasarim/home/finans-yonetimi.png"
                        alt="iş hesap" />
                    </div>


                    <div class="fbox-txt">
                      <!-- Title -->
                      <h6 class="h6-sm">
                        <a style="color:#000000" href="/onmuhasebe/finans-yonetimi"> FİNANS YÖNETİMİ <br> (ÇEK -
                          SENET)</a>
                      </h6>


                      <p class="p-sm p-2">
                        Tanımlı Kasa, Banka, Çek, Senet hesaplarınız elinizin altında.
                      </p>
                    </div>
                  </div>
                </a>
              </div>


              <div id="fb-5-3" class="col-md-4">
                <a href="/onmuhasebe/raporlama">
                  <div class="fbox-5 pc-25 mb-40 wow fadeInUp feature-box p-4   text-center" :data-wow-delay="this.delay">

                    <div class="fbox-ico ico-70 skyblue-color">
                      <img style="height:80px !important; width:80px !important" src="/tasarim/home/raporlama.png"
                        alt="iş hesap" />
                    </div>


                    <div class="fbox-txt">

                      <h6 class="h6-sm">
                        <a style="color:#000000" href="/onmuhasebe/raporlama"> RAPORLAMA</a>
                      </h6>


                      <p class="p-sm">
                        Geçmiş verilerinizi tek tıkla filtreleyin ve hızlıca dışa aktarın.
                      </p>
                    </div>
                  </div>
                </a>
              </div>


              <div id="fb-5-4" class="col-md-4">
                <a href="/onmuhasebe/alis-satis-yonetimi">
                  <div class="fbox-5 pc-25 mb-40 wow fadeInUp feature-box p-3 text-center" :data-wow-delay="this.delay">

                    <div class="fbox-ico ico-70 skyblue-color">
                      <img style="height:80px !important; width:80px !important"
                        src="/tasarim/home/alis-satis-yonetimi.png" alt="iş hesap" />
                    </div>


                    <div class="fbox-txt">

                      <h6 class="h6-sm">
                        <a style="color:#000000" href="/onmuhasebe/alis-satis-yonetimi"> ALIŞ - SATIŞ YÖNETİMİ</a>
                      </h6>


                      <p class="p-sm">
                        Alım ve satım işlemlerinizi yönetin, tek tıkla teklife dönüştürün!
                      </p>
                    </div>
                  </div>
                </a>
              </div>

              <div id="fb-5-5" class="col-md-4">
                <a href="/onmuhasebe/stok-hizmet-yonetimi">
                  <div class="fbox-5 pc-25 mb-40 wow fadeInUp feature-box p-3 text-center" data-wow-delay="0.8s">

                    <div class="fbox-ico ico-70 skyblue-color">
                      <img style="height:80px !important; width:80px !important"
                        src="/tasarim/home/stok-hizmet-yonetimi.png" alt="iş hesap" />
                    </div>


                    <div class="fbox-txt">

                      <h6 class="h6-sm">
                        <a style="color:#000000" href="/onmuhasebe/stok-hizmet-yonetimi">STOK - HİZMET YÖNETİMİ</a>

                      </h6>

                      <p class="p-sm">
                        Stoklarınızı kontrol altında tutun, siparişlerinizi zamanında ulaştırın.
                      </p>
                    </div>
                  </div>
                </a>
              </div>

              <div id="fb-5-5" class="col-md-4">
                <a href="/onmuhasebe/personel-yonetimi">
                  <div class="fbox-5 pc-25 mb-40 wow fadeInUp feature-box p-4 text-center" data-wow-delay="0.8s">

                    <div class="fbox-ico ico-70 skyblue-color">
                      <img style="height:80px !important; width:80px !important" src="/tasarim/home/personel-yonetimi.png"
                        alt="iş hesap" />
                    </div>


                    <div class="fbox-txt">

                      <h6 class="h6-sm">
                        <a style="color:#000000" href="/onmuhasebe/personel-yonetimi">PERSONEL YÖNETİMİ</a>

                      </h6>


                      <p class="p-sm">
                        Çalışanlarınızın maaş ve izinlerini yönetin.
                      </p>
                    </div>
                  </div>
                </a>
              </div>

              <div id="fb-5-5" class="col-md-4">
                <a href="/onmuhasebe/buro-yonetimi">
                  <div class="fbox-5 pc-25 mb-40 wow fadeInUp feature-box p-4 text-center" data-wow-delay="0.8s">

                    <div class="fbox-ico ico-70 skyblue-color">
                      <img style="height:80px !important; width:80px !important" src="/tasarim/home/buro-yonetimi.png"
                        alt="iş hesap" />
                    </div>


                    <div class="fbox-txt">

                      <h6 class="h6-sm">
                        <a style="color:#000000" href="/onmuhasebe/buro-yonetimi">BÜRO YÖNETİMİ</a>

                      </h6>


                      <p class="p-sm">
                        Sabit giderlerinizi takip etmek artık çok kolay.
                      </p>
                    </div>
                  </div>
                </a>
              </div>

              <div id="fb-5-5" class="col-md-4">
                <a href="/onmuhasebe/e-donusum">
                  <div class="fbox-5 pc-25 mb-40 wow fadeInUp feature-box p-3 text-center" data-wow-delay="0.8s">

                    <div class="fbox-ico ico-70 skyblue-color">
                      <img style="height:80px !important; width:80px !important" src="/tasarim/home/e-fatura-e-arsiv.png"
                        alt="iş hesap" />
                    </div>


                    <div class="fbox-txt">

                      <h6 class="h6-sm">
                        <a style="color:#000000" href="/onmuhasebe/e-donusum">E-FATURA / E-ARŞİV</a>

                      </h6>


                      <p class="p-sm">
                        Tek tıkla faturalandırın, tahsilatlarınızı kontrol altına alın.
                      </p>
                    </div>
                  </div>
                </a>
              </div>
              <div id="fb-5-5" class="col-md-4">

                <a href="/paketler">
                  <div class="fbox-5 pc-25 mb-40 wow fadeInUp feature-box p-4 text-center" data-wow-delay="0.8s">

                    <div class="fbox-ico ico-70 skyblue-color">
                      <img style="height:80px !important; width:80px !important"
                        src="/tasarim/home/uygun-fiyatlandirma.png" alt="iş hesap" />
                    </div>


                    <div class="fbox-txt">

                      <h6 class="h6-sm">
                        <a style="color:#000000">UYGUN FİYAT</a>

                      </h6>


                      <p class="p-sm">
                        Mâkul ücret politikamızla tanışın.
                      </p>
                    </div>
                  </div>
                </a>

              </div>

            </div>
            <!-- End row -->
          </div>
          <!-- END FEATURES-5 HOLDER -->
        </div>
        <!-- End container -->
      </section>

      <!-- CONTENT-3
			============================================= -->
      <section id="content-3" class="pb-60 content-section division">
        <div class="container">
          <!-- CONTENT BOX-1 -->
          <div id="cb-1-1" class="cbox-1 pb-25">
            <div class="row d-flex align-items-center m-row">
              <!-- TEXT BLOCK -->
              <div class="col-md-6 col-lg-6 m-bottom">
                <div class="txt-block left-column wow fadeInRight" :data-wow-delay="this.delay">
                  <!-- Section ID -->
                  <span class="section-id grey-color">Her Yerden Erişim Kolaylığı</span>

                  <!-- Title -->
                  <h2 class="h2-md">Kullanıcı Arayüzü</h2>

                  <!-- List -->
                  <ul class="simple-list">
                    <li class="list-item">
                      <p class="p-lg">Birden çok bilgisayardan erişim.</p>
                    </li>

                    <li class="list-item">
                      <p class="p-lg">
                        Her kullanıcıyı yetkilendirme (Ekleme, Düzenleme, Silme
                        Raporlama işlemlerine göre).
                      </p>
                    </li>

                    <li class="list-item">
                      <p class="p-lg">Firma bilgi tanıma.</p>
                    </li>
                    <li class="list-item">
                      <p class="p-lg">Şube Tanıma.</p>
                    </li>
                    <li class="list-item">
                      <p class="p-lg">
                        İnternetin olduğu her yerde, mekandan bağımsız erişim
                        imkanı.
                      </p>
                    </li>
                    <li class="list-item">
                      <p class="p-lg">
                        Kullanıcılar tarafından yapılan her işlemin kaydı(Log
                        işlemleri).
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
              <!-- END TEXT BLOCK -->

              <!-- IMAGE BLOCK -->
              <div class="col-md-5 col-lg-6 m-top">
                <div class="img-block right-column pc-15 wow fadeInLeft" :data-wow-delay="this.delay">
                  <img class="img-fluid cards-images" src="/tasarim/home/1.png" alt="İş Hesap" />
                </div>
              </div>
            </div>
            <!-- End row -->
          </div>
          <!-- END CONTENT BOX-1 -->

          <!-- CONTENT BOX-2 -->
          <div id="cb-1-2" class="cbox-1">
            <div class="row d-flex align-items-center">
              <!-- IMAGE BLOCK -->
              <div class="col-md-5 col-lg-6">
                <div class="img-block left-column pc-15 wow fadeInRight" :data-wow-delay="this.delay">
                  <img class="img-fluid cards-images" src="/tasarim/home/2.png" alt="İş Hesap" />
                </div>
              </div>

              <!-- TEXT BLOCK -->
              <div class="col-md-7 col-lg-6">
                <div class="txt-block right-column pc-30 wow fadeInLeft" :data-wow-delay="this.delay">
                  <!-- Section ID -->
                  <span class="section-id grey-color">İster Web'den, İster Cep'ten</span>

                  <!-- Title -->
                  <h2 class="h2-md">
                    İnternete bağlı olan bir cihaz ile yapabildikleriniz.
                  </h2>

                  <!-- Text -->
                  <ul class="simple-list">
                    <li class="list-item">
                      <p class="p-lg">Hızlı Fiyat sorgulama Ekranı.</p>
                    </li>

                    <li class="list-item">
                      <p class="p-lg">Hızlı günlük satış analizi.</p>
                    </li>

                    <li class="list-item">
                      <p class="p-lg">
                        Vadesi gelen veya geçen taksit hatırlatma.
                      </p>
                    </li>

                    <li class="list-item">
                      <p class="p-lg">Otomatik Güncelleme.</p>
                    </li>

                    <li class="list-item">
                      <p class="p-lg">
                        Fatura ve rapor dizaynını kullanıcının kendi
                        yapabilmesi.
                      </p>
                    </li>

                    <li class="list-item">
                      <p class="p-lg">
                        Fiyatlandırmaya yeni ek modüller dahil değildir.
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
              <!-- END TEXT BLOCK -->
            </div>
            <!-- End row -->
          </div>
          <!-- END CONTENT BOX-2 -->
        </div>
        <!-- End container -->
      </section>
      <!-- END CONTENT-3 -->

      <!-- CONTENT-8
			============================================= -->
      <section id="content-8" class="pb-60 content-section division">
        <div class="container">
          <div class="row d-flex align-items-center m-row mt-25">
            <!-- TEXT BLOCK -->
            <div class="col-md-7 col-lg-6">
              <div class="txt-block left-column pc-30 wow fadeInLeft" data-wow-delay="0.4s">
                <!-- Section ID -->

                <!-- Title -->
                <h2 class="h2-md">Cari Kart Modülü</h2>

                <!-- Text -->
                <ul class="simple-list">
                  <li class="list-item">
                    <p class="p-lg">Sınırsız Cari Hesap kartı tanımlama.</p>
                  </li>
                  <li class="list-item">
                    <p class="p-lg">Sınırsız grup tanımlama.</p>
                  </li>
                  <li class="list-item">
                    <p class="p-lg">Cariye Stoklu-Stoksuz Satış.</p>
                  </li>
                  <li class="list-item">
                    <p class="p-lg">
                      Cariye kasa'dan ödeme ve tahsilat yapabilme.
                    </p>
                  </li>
                  <li class="list-item">
                    <p class="p-lg">
                      Cariyi borçlandırma ve alacaklandırma işlemleri.
                    </p>
                  </li>
                  <li class="list-item">
                    <p class="p-lg">Tahsilat ve ödeme makbuzu kesme.</p>
                  </li>
                  <li class="list-item">
                    <p class="p-lg">
                      Cari hesap ekstresi, Toplu Cari raporu ve cari işlem
                      raporu alabilme
                    </p>
                  </li>

                  <li class="list-item">
                    <p class="p-lg">Mahsup fişi(Cariden Cariye Virman).</p>
                  </li>
                  <li class="list-item">
                    <p class="p-lg">
                      Cari kartlarına kartvizit profil fotoğraf yükleme.
                    </p>
                  </li>
                  <li class="list-item">
                    <p class="p-lg">
                      Cari kart işlemlerine resim veya evrak yükleme.
                    </p>
                  </li>
                  <li class="list-item">
                    <p class="p-lg">
                      Cari kart işlemlerden kısayol ile direk fatura düzeltme.
                    </p>
                  </li>
                </ul>
              </div>
            </div>
            <!-- END TEXT BLOCK -->

            <div class="col-md-5 col-lg-6">
              <div class="img-block right-column pc-15 wow fadeInRight" data-wow-delay="0.4s">
                <img class="img-fluid cards-images" src="/tasarim/home/3.png" alt="İş Hesap" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="features-13" class="rel aliceblue_shape mt-inverse-40 features-section division mb-40">
        <div class="container">
          <div class="row d-flex align-items-center">
            <!-- TEXT BLOCK -->
            <div class="col-md-10 col-lg-5">
              <div class="txt-block pc-15 wow fadeInUp" data-wow-delay="0.4s">
                <!-- Section ID -->
                <span class="section-id grey-color">Yenilikçi Özelliklerimiz</span>
                <!-- Title -->
                <h2 class="h2-md">Stok Takip Modülü</h2>

                <p class="p-lg">
                  Büyükten küçüğe tüm işletmelere hitap edebilen esnek yapılı,
                  kullanıcı taleplerine göre şekillendirilmiş, esnek bir yapıda
                  stok takip modülümüz mevcuttur. Bu modül ile tüm stok
                  takibinizi ve sınırsız depo kartı tanımlama, sınırsız stok
                  tanımlama, stok grubu ve birimi tanımlama gibi birçok
                  kolaylıkları tek bir platform üzerinden eş güdümlü olarak
                  yapabilirsiniz. Ofisinizde, işyerinizde, fabrikanızda,
                  mağazanızda veya yolda,araçta stok yönetiminize
                  erişebilirsiniz.
                </p>
              </div>
            </div>
            <!-- END TEXT BLOCK -->
            <!-- FEATURES-13 WRAPPER -->
            <div class="col-lg-7">
              <div class="fbox-13-wrapper pl-35">
                <div class="row">
                  <div class="col-md-6">
                    <!-- FEATURE BOX #1 -->
                    <div id="fb-13-1" class="fbox-13 mt-50 mb-30 wow fadeInUp" data-wow-delay="0.4s">
                      <!-- Icon -->
                      <div class="fbox-13-ico ico-75 mr-5">
                        <img src="/images/raporlama-icon.png" width="16px" height="16px" alt="İş Hesap" />
                      </div>
                      <!-- Title -->
                      <h5 class="h5-sm">Raporlama Sistemi</h5>

                      <!-- Text -->
                      <p class="p-lg">
                        Raporlama sistemi sayesinde anlık durumunuzu
                        görüntüleyebilirsiniz.Satış raporu ve satış grafiğinize
                        kolayca ulaşabilirsiniz.
                      </p>
                    </div>

                    <!-- FEATURE BOX #2 -->
                    <div id="fb-13-2" class="fbox-13 wow fadeInUp" :data-wow-delay="this.delay">
                      <!-- Icon -->
                      <div class="fbox-13-ico ico-75">
                        <img src="/images/kasa-icon.png" width="16px" height="16px" alt="İş Hesap" />
                      </div>
                      <!-- Title -->
                      <h5 class="h5-sm">Kasa Takip Modülü</h5>

                      <!-- Text -->
                      <p class="p-lg">
                        Kasadan ödeme ve tahsilat işlemleri,kalan bakiyeyi
                        görme, Kasa'dan banka’ya virman yapabilme, İki tarih
                        arası detaylı raporlama yapabilirsiniz.
                      </p>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <!-- FEATURE BOX #3 -->
                    <div id="fb-13-3" class="fbox-13 mb-30 wow fadeInUp" data-wow-delay="0.4s">
                      <!-- Icon -->
                      <div class="fbox-13-ico ico-75">
                        <img src="/images/taksit-icon.png" width="16px" height="16px" alt="İş Hesap" />
                      </div>
                      <!-- Title -->
                      <h5 class="h5-sm">Taksit Takip Modülü</h5>

                      <!-- Text -->
                      <p class="p-lg">
                        Otomatik taksitlendirme Modülü,Vadesi gelen taksitleri
                        ana ekranda uyarma, Taksitlerin tahsilat ve ödeme
                        işlemleri,Detaylı taksit raporu alabilme gibi özellikler
                        sayesinde taksitlerinizin takibini yapabilirsiniz.
                      </p>
                    </div>
                    <!-- FEATURE BOX #4 -->
                    <div id="fb-13-4" class="fbox-13 wow fadeInUp" :data-wow-delay="this.delay">
                      <!-- Icon -->
                      <div class="fbox-13-ico ico-75">
                        <img src="/images/banka-icon.png" width="16px" height="16px" alt="İş Hesap" />
                      </div>
                      <!-- Title -->
                      <h5 class="h5-sm">Banka Takip Modülü</h5>

                      <!-- Text -->
                      <p class="p-lg">
                        Sınırsız banka hesabı tanımlama,Banka hareket girişi
                        yapabilme, Banka hareketlerini detaylı raporlama,
                        Banka'dan Bankaya veya Banka'dan Kasaya kolaylıkla
                        virman yapabilirsiniz
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <!-- End row -->
            </div>
            <!-- END FEATURES-13 WRAPPER -->
          </div>
          <!-- End row -->
        </div>
        <!-- End container -->
      </section>

      <section id="content-12" class="mb-90 content-section division">
        <div class="container">
          <div class="lavender_gradient content-12-wrapper">
            <div class="row d-flex align-items-center">
              <!-- TEXT BLOCK -->
              <div class="col-lg-5">
                <div class="txt-block left-column mb-40 wow fadeInRight" :data-wow-delay="this.delay">
                  <!-- Title -->
                  <h2 class="h2-xs">Kolay Fatura Modülü</h2>

                  <!-- Text -->
                  <p class="p-lg">
                    Alış,Satış ve İade faturası düzenleme,Kişiselleştirilebilen
                    2 adet özel alan İrsaliyeyi faturaya dönüştürme, Hızlı
                    perakende satışı yapabilme,Detaylı alış, satış ve iade
                    faturası raporlama gibi özellikler sayesinde zahmetsiz
                    fatura kesimi yapabilirsiniz.
                  </p>
                </div>
              </div>
              <!-- END TEXT BLOCK -->

              <!-- IMAGE BLOCK -->
              <div class="col-lg-7">
                <div class="content-12-img right-column wow fadeInLeft" :data-wow-delay="this.delay">
                  <img class="img-fluid" src="/tasarim/home/4.png" style="width: 90%" alt="İş Hesap" />
                </div>
              </div>
            </div>
          </div>
          <!-- End row -->
        </div>
        <!-- End container -->
      </section>

      <!-- DOWNLOAD-1
			============================================= -->
      <mobile-landing></mobile-landing>
      <!-- END DOWNLOAD-1 -->
      ============================================= -->
      <Footer></Footer>
      <!-- END FOOTER-1 -->
    </div>
    <!-- END PAGE CONTENT -->
  </div>
</template>

<script>
export default {
  name: "IndexPage",
  data() {
    return {
      email: '',
      delay: "0.1s",
      data1: {},
      loading: true,
      params: {
        limit: 5,
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

          this.data = res.data;
          this.loading = false
        });
    },
  },


};
</script>
<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');

.slider-titles h4 {
  color: #757575 !important;
  font-family: 'Roboto', sans-serif !important;
  font-size: 20px !important;
  margin: 0 !important
}

.slider-titles .h5 {
  color: #463853;
  font-size: 50px;
  font-family: 'Roboto', sans-serif !important;
}

.slider-titles {
  top: 50px;
}

@media only screen and (max-width: 992px) {
  .feature-box {
    height: 255px !important;
  }
}

.slider-back {
  position: absolute;
  width: 100%;
  opacity: 0.2;
  z-index: -1;
}

.el-carousel__indicator .el-carousel__button {
  background: black !important;
}

.feature-box {
  box-shadow: 2px 2px 28px 3px rgba(0, 0, 0, 0.07);
  border-radius: 15px;
  height: 170px;
  transition: all 300ms ease-in-out;
}

.feature-box:hover {
  transform: scale(1.08);
  transition: all 300ms ease-in-out;
}
</style>
