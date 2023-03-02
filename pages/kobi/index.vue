<template>
  <div id="page" class="page">
    <!-- HEADER
			============================================= -->
    <Header :loading="loading"></Header>
    <!-- END HEADER -->

    <!-- HERO-12
			============================================= -->
    <section id="hero-12" class="bg_scroll hero-section division">
      <div class="container white-color">
        <div class="row d-flex align-items-center">
          <!-- HERO TEXT -->
          <div class="col-md-6 col-lg-5">
            <div class="hero-12-txt pc-20 text-center wow fadeInRight" data-wow-delay="0.6s">
              <!-- Title  -->
              <h2 class="h2-title-xl">İş Hesap&reg;</h2>

              <!-- Text -->
              <h4 class="h4-md">KOBİ’ler İçin Eşsiz Mali Çözümler</h4>

              <!-- OS Prerequisite -->
            </div>
          </div>
          <!-- END HERO TEXT -->

          <!-- HERO IMAGE -->
          <div class="col-md-6 col-lg-7">
            <div class="hero-12-img pc-25 text-center wow fadeInLeft" data-wow-delay="0.6s">
              <img class="img-fluid" style="max-width: 110%" src="/images/bannerFoto.png" alt="İş Hesap Kobi" />
            </div>
          </div>
        </div>
        <!-- End row -->
      </div>
      <!-- End container -->
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
              <a href="/kobi/cari-hesap-yonetimi">
                <div class="fbox-5 pc-25 mb-40 wow fadeInUp feature-box p-4 text-center" data-wow-delay="0.4s">

                  <div class="fbox-ico ico-70 skyblue-color">
                    <img style="height:80px !important; width:80px !important" src="/tasarim/home/cari-hesap-yonetimi.png"
                      alt="iş hesap" />
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
                    <img style="height:80px !important; width:80px !important" src="/tasarim/home/uygun-fiyatlandirma.png"
                      alt="iş hesap" />
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
                <img class="img-fluid" src="/images/caba.png" alt="İş Hesap Kobi" />
              </div>
            </div>

            <!-- TEXT BLOCK -->
            <div class="col-md-7 col-lg-6">
              <div class="txt-block left-column mb-40 wow fadeInLeft" data-wow-delay="0.6s">
                <!-- Section ID -->
                <span class="section-id grey-color">Yüksek Performans</span>

                <!-- Title -->
                <h2 class="h2-md">
                  Verimli ve Sağlıklı Bir Şekilde Hesaplarınıza
                  Ulaşın!
                </h2>

                <!-- Text -->
                <p class="p-lg">
                  Günümüzde işletmeler hızlı ve sağlıklı karar almak
                  zorundadırlar. Artan rekabet baskısı ve ekonomik dalgalanmalar
                  nedeniyle işletmesinin bilgilerine hakim olan KOBİ’ler ayakta
                  kalabilmektedirler. Eğer KOBİ çözümünü kullanıyorsanız
                  internetin olduğu herhangi bir cihazdan ve cep telefonundan
                  e-fatura düzenleyebilir, siparişlerinizi takip edebilir, kasa
                  ve banka işlemlerini gerçekleştirebilirsiniz. Veri, bilgi
                  günümüzün en önemli ticari değeri olarak kabul edilmektedir.
                  Verileriniz, bilgileriniz KOBİ yazılımı ile istediğiniz anda,
                  istediğiniz bilgiye erişim sağlamanızı kolaylaştıracak şekilde
                  dizayn edilmiştir.
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
                <h2 class="h2-md">Etkin, Hızlı, Pratik Yazılım Çözümleri</h2>

                <!-- Text -->
                <p class="p-lg">
                  KOBİ, Ön Muhasebe ve Resmi Muhasebe yazılım çözümlerimiz ile
                  müşterilerimize hizmet sunmaktayız. En küçüğünden en büyüğüne
                  kadar bir işletmenin bütün muhasebe ihtiyaçlarını
                  karşılayabilecek yazılım alternatiflerimiz bulunmaktadır.
                  Paketler bölümünden mevcut ürünlerimize ve fiyatlarına
                  kolaylıkla ulaşabilirsiniz. Sizlere değer katmak amacıyla
                  yazılım çözümleri üretmekte ve ihtiyaçlarınız doğrultusunda
                  geliştirmekteyiz.
                </p>
              </div>
            </div>
            <!-- END TEXT BLOCK -->

            <!-- IMAGE BLOCK -->
            <div class="col-md-5 col-lg-6 m-top">
              <div class="img-block right-column pc-15 mb-60 wow fadeInLeft" data-wow-delay="0.6s">
                <img class="img-fluid" src="/images/etkin.png" alt="İş Hesap Kobi" />
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
                <img class="img-fluid" src="/tasarim/kobi/1.png" alt="İş Hesap Kobi" />
              </div>
            </div>

            <!-- TEXT BLOCK -->
            <div class="col-md-7 col-lg-6">
              <div class="txt-block right-column pc-30 mb-40 wow fadeInLeft" data-wow-delay="0.6s">
                <!-- Section ID -->
                <span class="section-id grey-color">Mükemmel Entegrasyon</span>

                <!-- Title -->
                <h2 class="h2-md">
                  Tüm Favori İçeriğinize Hızlı ve Güvenli Erişim
                </h2>

                <!-- List -->
                <ul class="simple-list">
                  <li class="list-item">
                    <p class="p-lg">
                      Full entegre çözümler sunmaktayız. KOBİ yazılımı ile aynı
                      bilgiyi tekrar tekrar yazmak yerine bir defa giriş
                      yapacaksınız. Sistem ilgili yerlere gereken bilgileri
                      otomatik aktaracaktır. Sizleri sürekli aynı bilgileri
                      yazma zahmetinden kurtaracak, esnek bir yapıdadır.
                    </p>
                  </li>

                  <li class="list-item">
                    <p class="p-lg">
                      Ön Muhasebe ve Resmi Muhasebe yazılımları ile de entegre
                      çalışabilmektedir. Excell veri aktarımları ile APİ,
                      konnektör gibi ilave yazılımlara ihtiyaç duymayacaksınız.
                    </p>
                  </li>
                </ul>
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
    <section id="features-7" class="wide-100 features-section division">
      <div class="container">
        <!-- SECTION TITLE -->
        <div class="row">
          <div class="col-md-10 col-lg-8 offset-md-1 offset-lg-2">
            <div class="section-title text-center mb-70">
              <!-- Title -->
              <h2 class="h2-md">
                Nerede olursanız olun hesaplarınıza en hızlı şekilde ulaşın
              </h2>

              <!-- Text -->
            </div>
          </div>
        </div>

        <!-- FEATURES-7 WRAPPER -->
        <div class="fbox-7-wrapper">
          <div class="row">
            <!-- FEATURE BOX #1 -->
            <div id="fb-7-1" class="col-sm-6 col-md-3">
              <div class="fbox-7 text-center wow fadeInUp" data-wow-delay="0.4s">
                <!-- Icon -->
                <div class="fbox-7-ico ico-75 grey-color">
                  <span class="flaticon-ads"></span>
                </div>

                <!-- Title -->
                <h5 class="h5-xs">Kullanıcı Dostu Tasarım</h5>
              </div>
            </div>

            <!-- FEATURE BOX #2 -->
            <div id="fb-7-2" class="col-sm-6 col-md-3">
              <div class="fbox-7 text-center wow fadeInUp" data-wow-delay="0.6s">
                <!-- Icon -->
                <div class="fbox-7-ico ico-75 grey-color">
                  <span class="flaticon-manufacturing"></span>
                </div>

                <!-- Title -->
                <h5 class="h5-xs">Alternatif Çözümler</h5>
              </div>
            </div>

            <!-- FEATURE BOX #3 -->
            <div id="fb-7-3" class="col-sm-6 col-md-3">
              <div class="fbox-7 text-center wow fadeInUp" data-wow-delay="0.8s">
                <!-- Icon -->
                <div class="fbox-7-ico ico-75 grey-color">
                  <span class="flaticon-user-1"></span>
                </div>

                <!-- Title -->
                <h5 class="h5-xs">Çok Kullanıcılı</h5>
              </div>
            </div>

            <!-- FEATURE BOX #4 -->
            <div id="fb-7-4" class="col-sm-6 col-md-3">
              <div class="fbox-7 text-center wow fadeInUp" data-wow-delay="1s">
                <!-- Icon -->
                <div class="fbox-7-ico ico-75 grey-color">
                  <span class="flaticon-folder-2"></span>
                </div>

                <!-- Title -->
                <h5 class="h5-xs">Otomatik Yedekleme</h5>
              </div>
            </div>
          </div>
          <!-- End row -->
        </div>
        <!-- END FEATURES-7 WRAPPER -->
      </div>
      <!-- End container -->
    </section>
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
                <h2 class="h2-xs">
                  Hızlı ve Hatasız Muhasebe Ortamı
                </h2>

                <!-- Text -->
                <p class="p-lg">
                  Mobil desteği ile KOBİ yazılımımız cep telefonlarından
                  e-fatura düzenlenmesine olanak sağlamaktadır. Böylece cep
                  telefonunuzun yanında olduğu her yerde e-fatura
                  düzenleyebilecek, cari ekleyebilecek, sipariş, kasa ve banka
                  takibi yapabileceksiniz. Android, IOS, gibi cep telefonu
                  işletim sistemlerinde KOBİ yazılımını istediğiniz gibi
                  kullanabileceksiniz.
                </p>
              </div>
            </div>
            <!-- END TEXT BLOCK -->

            <!-- IMAGE BLOCK -->
            <div class="col-lg-7">
              <div class="content-12-img right-column wow fadeInLeft" data-wow-delay="0.6s">
                <img class="img-fluid" src="/tasarim/kobi/2.png" alt="İş Hesap Kobi" />
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
              <img class="img-fluid" src="/tasarim/kobi/3.png" alt="İş Hesap Kobi" />
            </div>
          </div>

          <!-- TEXT BLOCK -->
          <div class="col-md-7 col-lg-6">
            <div class="txt-block right-column mb-40 wow fadeInLeft" data-wow-delay="0.6s">
              <!-- Section ID -->
              <span class="section-id grey-color">Sadeliğin Güzelliği</span>

              <!-- Title -->
              <h2 class="h2-md">Güzel,Sade Tasarım</h2>

              <!-- List -->
              <ul class="simple-list">
                <li class="list-item">
                  <p class="p-lg">
                    KOBİ çözümümüz her işletmenin ihtiyaç duyacağı temel
                    bilgilere hızlı ve basit bir şekilde erişim sağlaması
                    esasına göre hazırlanmıştır
                  </p>
                </li>

                <li class="list-item">
                  <p class="p-lg">
                    KOBİ yazılımı ile menüler arasında kaybolmadan, bir ekrandan
                    diğerine geçmeden aradığınız bilgiye rahatça
                    ulaşabilirsiniz.
                  </p>
                </li>

                <li class="list-item">
                  <p class="p-lg">
                    KOBİ yazılımı ile yazılımı kullanan personellere
                    yetkilendirme yapabilirsiniz. Böylece herkes kendi yetkisi
                    ve görevi dahilinde yazılımı kullanabilir
                  </p>
                </li>
              </ul>
            </div>
          </div>

          <!-- TEXT BLOCK -->
          <div class="col-md-7 col-lg-6">
            <div class="txt-block right-column mb-40 wow fadeInLeft" data-wow-delay="0.6s">
              <!-- Section ID -->
              <span class="section-id grey-color">Fatura Kolaylığı</span>

              <!-- Title -->
              <h2 class="h2-md">Fatura Modülü</h2>

              <!-- List -->

              <p class="p-lg">
                KOBİ’ler için hem mobil hem de web üzerinden hızlı e-fatura,
                e-arşiv fatura düzenleme imkanı sunmaktayız. KOBİ’lere yönelik
                hem esnek hem pratik tüm uygulamalara hızla erişebileceğiniz
                pratik bir sistem sizleri beklemektedir. Elektronik fatura
                düzenlemek hiç bu kadar kolay olmamıştı. Faturalarınızın
                takibini KOBİ sistemi ile gerçekleştirebilirsiniz
              </p>
            </div>
          </div>

          <div class="col-md-5 col-lg-6">
            <div class="img-block left-column pc-20 mb-40 wow fadeInRight" data-wow-delay="0.6s">
              <img class="img-fluid" style="margin-top: 80px" src="/tasarim/kobi/4.png" alt="İş Hesap Kobi" />
            </div>
          </div>

          <div class="col-md-5 col-lg-6">
            <div class="img-block left-column pc-20 mt-60 wow fadeInRight" data-wow-delay="0.6s">
              <img class="img-fluid" style="margin-top: 80px" src="/tasarim/kobi/5.png" alt="İş Hesap Kobi" />
            </div>
          </div>
          <!-- TEXT BLOCK -->
          <div class="col-md-7 col-lg-6">
            <div class="txt-block right-column mb-40 wow fadeInLeft" data-wow-delay="0.6s">
              <!-- Section ID -->
              <span class="section-id grey-color">Sipariş,Kasa,Banka</span>

              <!-- Title -->
              <h2 class="h2-md">Sipariş,Kasa,Banka</h2>

              <p class="p-lg">
                KOBİ yazılımını kullanarak siparişlerinizin takibini
                yapabilirsiniz. Ayrıca kasa, banka işlemlerinizi
                gerçekleştirebilirsiniz. Cari ekleyebilir, fatura düzenlerken
                carilerinizi seçebilir ve pek çok fatura şablonu
                oluşturabilirsiniz.
              </p>
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
                KOBİ yazılımımızı satın aldığınızda yıllık fiyat garantisi de
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
                        sağlanmaktadır. Ayrıca alışık olduğunuz şekilde KOBİ
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
                        KOBİ yazılımı içerisinde yer alan bütün verileriniz
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
                        İnternete erişebilen her cihazdan programa giriş yapıp,
                        KOBİ yazılımını etkin bir şekilde kullanabilirsiniz.

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
                mobil uygulama destekli KOBİ, Ön Muhasebe ve Resmi Muhasebe
                yazılımları ile işletmenizin ihtiyaç duyacağı tüm e-fatura ve
                muhasebe çözümleri İŞHESAP’ta yer almaktadır. Bu gelişmiş full
                entegre çalışan yazılımlardan sizde faydalanın.
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
    <mobile-landing></mobile-landing>
    <!-- END DOWNLOAD-1 -->

    <!-- FOOTER-4
			============================================= -->
    <Footer></Footer>
    <!-- END FOOTER-4 -->
  </div>
</template>

<script>
export default {
  head: {
    title: "Kobi - İş Hesap",
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
