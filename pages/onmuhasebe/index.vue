<template>
  <div id="page" class="page">
    <!-- HEADER
			============================================= -->
    <Header :loading="loading"></Header>
    <!-- END HEADER -->

    <section id="hero-9" class="rel bg_shape_01 hero-section division">
      <div class="container h-100">
        <div class="row d-flex align-items-center h-100">
          <div class="col-md-6 col-lg-7">
            <div class="hero-9-img text-center wow fadeInRight" data-wow-delay="0.2s">
              <img class="img-fluid" src="/tasarim/onmuhasebe/1.png" alt="İş Hesap Ön Muhasebe" />
            </div>
          </div>
          <!-- HERO TEXT -->
          <div class="col-md-6 col-lg-5">
            <div class="hero-9-txt wow fadeInLeft" data-wow-delay="0.4s">
              <h4 class="h4-xs">İşHesap</h4>
              <!-- Title -->
              <h2 class="h2-md" style="color: #fff">
                Ön Muhasebe Tek Bir Yazılımda
              </h2>
              <!-- Text -->
              <p class="p-lg white-color">
                Ön Muhasebe, şirketler için kritik öneme sahip bilgilerin
                üretildiği, kayıtlandığı ve raporlandığı bölümdür. Bir şirketin
                karar alması için gerekli olan en sağlıklı en doğru ve en hızlı
                bilgiler daima ön muhasebe tarafından sağlanır. Şirketlerin
                günlük operasyonlarının gerçek zamanlı bilgi ihtiyacı ön
                muhasebe yazılımları tarafından karşılanmaktadır. İnternetin
                olduğu her cihazdan erişebileceğiniz yeni nesil ön muhasebe
                yazılımı tedarik etmek için bize ulaşabilirsiniz.
              </p>
              <!-- HERO REQUEST FORM -->
              <form name="requestform" class="request-form">
                <div class="request-form-msg">
                  <span class="loading"></span>
                </div>
              </form>
            </div>
          </div>
          <!-- END HERO TEXT -->
        </div>
        <!-- End row -->
      </div>
      <!-- End container -->
    </section>
    <!-- END HERO-9 -->

    <section id="features-5" class="wide-50 features-section division">
      <div class="container">

        <div class="row">
          <div class="col-lg-10 offset-lg-1">
            <div class="section-title text-center mt-35 mb-5">

              <h3 class="h3-md">Özelliklerimiz</h3>
              <p class="p-lg">Yeni nesil, son teknoloji, hem web hem de mobil platformlarda çalışan, kullanıcı dostu,
                kolay, pratik, esnek ön muhasebe yazılımıdır.</p>
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
                    <img style="height:80px !important; width:80px !important" src="/tasarim/home/cari-hesap-yonetimi.png"
                      alt="iş hesap" />
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
                      <a style="color:#000000" href="/onmuhasebe/finans-yonetimi"> FİNANS YÖNETİMİ <br> ÇEK - SENET)</a>
                    </h6>


                    <p class="p-sm">
                      Tanımlı Kasa, Banka, Çek, Senet hesaplarınız elinizin altında.
                    </p>
                  </div>
                </div>
              </a>
            </div>


            <div id="fb-5-3" class="col-md-4">
              <a href="/onmuhasebe/raporlama">
                <div class="fbox-5 pc-25 mb-40 wow fadeInUp feature-box p-4   text-center" :data-wow-delay="delay">

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
                <div class="fbox-5 pc-25 mb-40 wow fadeInUp feature-box p-3 text-center" :data-wow-delay="delay">

                  <div class="fbox-ico ico-70 skyblue-color">
                    <img style="height:80px !important; width:80px !important" src="/tasarim/home/alis-satis-yonetimi.png"
                      alt="iş hesap" />
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

    <!-- END FEATURES-7 -->

    <section id="content-3" class="wide-60 content-section division">
      <div class="container">
        <!-- CONTENT BOX-1 -->
        <div id="cb-1-1" class="cbox-1 pb-25">
          <div class="row d-flex align-items-center m-row">
            <!-- TEXT BLOCK -->
            <div class="col-md-7 col-lg-6 m-bottom">
              <div class="txt-block left-column mb-40 wow fadeInRight" data-wow-delay="0.2s">
                <!-- Section ID -->
                <span class="section-id grey-color">Pratik Kullanım</span>

                <!-- Title -->
                <h2 class="h2-md">Ön Muhasebe Bilgilerinizi Güvende</h2>

                <!-- Text -->
                <p class="p-lg">
                  Ön muhasebe verileri işletmenizin güncel bilgilerini
                  içerdiğinden güvenlik çok önemlidir. Yazılımımız ile otomatik
                  yedekleme, siber saldırılardan, virüs gibi zararlı
                  yazılımlardan korunma imkanına sahip olacaksınız.
                </p>

                <!-- Text -->
                <p class="p-lg">
                  İnternetin olduğu her cihazdan (tablet, cep telefonu, masa
                  üstü bilgisayar, dizüstü bilgisayar gibi) ön muhasebe
                  yazılımında yer alan bilgilerinize erişim sağlayabilirsiniz.
                </p>
              </div>
            </div>
            <!-- END TEXT BLOCK -->
            <!-- IMAGE BLOCK -->
            <div class="col-md-5 col-lg-6 m-top">
              <div class="img-block right-column pc-15 mb-40 wow fadeInLeft" data-wow-delay="0.2s">
                <img class="img-fluid" src="/tasarim/onmuhasebe/2.png" alt="İş Hesap Ön Muhasebe" />
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
              <div class="img-block left-column pc-25 mb-40 wow fadeInRight" data-wow-delay="0.2s">
                <img class="img-fluid" src="/tasarim/onmuhasebe/3.png" alt="İş Hesap Ön Muhasebe" />
              </div>
            </div>
            <!-- TEXT BLOCK -->
            <div class="col-md-7 col-lg-6">
              <div class="txt-block right-column pc-30 mb-40 wow fadeInLeft" data-wow-delay="0.2s">
                <!-- Section ID -->
                <span class="section-id grey-color">Tam Entegre</span>

                <!-- Title -->
                <h2 class="h2-md">İşletmenizi Yönetmekte Hız Kazanacaksınız</h2>

                <!-- List -->
                <ul class="simple-list">
                  <li class="list-item">
                    <p class="p-lg">
                      Saniyeler içinde fatura keserek, cari kayıtlarınızı
                      oluşturabileceksiniz. Stoklarınız, üretim süreciniz anında
                      karşınızda…
                    </p>
                  </li>

                  <li class="list-item">
                    <p class="p-lg">
                      Kasa, banka, çek-senet işlemleriniz, tahsilat ve
                      ödemeleriniz tek tuşla karşınızda…
                    </p>
                  </li>

                  <li class="list-item">
                    <p class="p-lg">
                      Personel avansları, izin takibi, kıdem ve ihbar tazminatı
                      hesaplamaları anında karşınızda…
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

    <section id="features-13" class="rel aliceblue_shape mt-inverse-40 features-section division">
      <div class="container">
        <div class="row d-flex align-items-center">
          <!-- TEXT BLOCK -->
          <div class="col-md-10 col-lg-5">
            <div class="txt-block pc-15 wow fadeInUp" data-wow-delay="0.4s">
              <!-- Section ID -->
              <span class="section-id grey-color">Yenilikçi Özelliklerimiz</span>
              <!-- Title -->
              <h2 class="h2-md">Daha Karlı, Daha Güvenli İşletmeler İçin</h2>
              <!-- Text -->
              <p class="p-lg">
                İşletmelerin gelişip, büyümesi, gelirlerini arttırması ve daha
                karlı hale gelmesi, finansal bilgilerini kontrol etmesine
                bağlıdır. Planlama, programlama ve bütçeleme işletmelerin ön
                muhasebe bilgilerini zamanında, ihtiyaca uygun ve sağlıklı bir
                şekilde elde etmelerini gerektirir.
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
                    <div class="fbox-13-ico ico-75">
                      <img src="/images/business.png" width="16px" height="16px" alt="İş Hesap Ön Muhasebe" />
                    </div>
                    <!-- Title -->
                    <h5 class="h5-sm">Vizyon, Öngörü</h5>

                    <!-- Text -->
                    <p class="p-lg">
                      Ön muhasebe yazılımından alacağınız raporlar ile anlık
                      durumunuzu görüntüleyebilirsiniz. Anlık ödeme ve
                      tahsilatlarınızı takip edebilirsiniz.
                    </p>
                  </div>

                  <!-- FEATURE BOX #2 -->
                  <div id="fb-13-2" class="fbox-13 wow fadeInUp" data-wow-delay="0.2s">
                    <!-- Icon -->
                    <div class="fbox-13-ico ico-75">
                      <img src="/images/weakness.png" width="16px" height="16px" alt="İş Hesap Ön Muhasebe" />
                    </div>
                    <!-- Title -->
                    <h5 class="h5-sm">Özgürlük</h5>

                    <!-- Text -->
                    <p class="p-lg">
                      Sınırsız depo tanımlayabilir, sınırsız stok kartı
                      açabilir, sınırsız cari ekleyebilir, sınırsız şube takip
                      edebilirsiniz.
                    </p>
                  </div>
                </div>
                <div class="col-md-6">
                  <!-- FEATURE BOX #3 -->
                  <div id="fb-13-3" class="fbox-13 mb-30 wow fadeInUp" data-wow-delay="0.4s">
                    <!-- Icon -->
                    <div class="fbox-13-ico ico-75">
                      <img src="/images/clean-code.png" width="16px" height="16px" alt="İş Hesap Ön Muhasebe" />
                    </div>
                    <!-- Title -->
                    <h5 class="h5-sm">Kaliteli Yazılım</h5>

                    <!-- Text -->
                    <p class="p-lg">
                      En son yazılım teknolojilerine göre üretildiğinden,
                      kullanım süreniz içerisindeki tüm güncellemelerden
                      ücretsiz olarak yararlanabilirsiniz. Yeni versiyon,
                      güncelleme bedeli gibi ekstra paralar ödemezsiniz.
                    </p>
                  </div>
                  <!-- FEATURE BOX #4 -->
                  <div id="fb-13-4" class="fbox-13 wow fadeInUp" data-wow-delay="0.2s">
                    <!-- Icon -->
                    <div class="fbox-13-ico ico-75">
                      <img src="/images/accessible.png" width="16px" height="16px" alt="İş Hesap Ön Muhasebe" />
                    </div>
                    <!-- Title -->
                    <h5 class="h5-sm">Erişim Kolaylığı</h5>

                    <!-- Text -->
                    <p class="p-lg">
                      Hem mobil uygulamalardan hem de web üzerinden yazılımı
                      kullanabilirsiniz. Ön muhasebe yazılımını tüm cihazlardan
                      pratik olarak kullanabilirsiniz.
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
    <!-- END FEATURES-13 -->
    <!-- CONTENT-2
			============================================= -->
    <section id="content-2" class="wide-50 content-section division">
      <div class="container">
        <div class="row d-flex align-items-center">
          <!-- IMAGE BLOCK -->
          <div class="col-md-5 col-lg-6">
            <div class="img-block left-column pc-20 mb-40 wow fadeInRight" data-wow-delay="0.2s">
              <img class="img-fluid" src="/tasarim/onmuhasebe/4.png" alt="İş Hesap Ön Muhasebe" />
            </div>
          </div>
          <!-- TEXT BLOCK -->
          <div class="col-md-7 col-lg-6">
            <div class="txt-block right-column mb-40 wow fadeInLeft" data-wow-delay="0.2s">
              <!-- Section ID -->
              <span class="section-id grey-color">Bulut Tabanlı</span>

              <!-- Title -->
              <h2 class="h2-md">
                Modüler Esnek Yapısı İle Ön Muhasebe Yazılımı
              </h2>

              <!-- Text -->
              <p class="p-lg">
                Büyükten küçüğe tüm işletmelere hitap edebilen esnek yapılı,
                kullanıcı taleplerine göre şekillendirilmiş, esnek bir yapıda ön
                muhasebe yazılımıdır. Bu yazılım ile tüm ön muhasebe
                işlemlerinizi ve e-fatura çözümlerini tek bir platform üzerinden
                eş güdümlü olarak yönetebilirsiniz. Ofisinizde, işyerinizde,
                fabrikanızda, mağazanızda veya yolda, araçta ön muhasebe
                yazılımınıza erişebilirsiniz. Böylece firmanızı etkin bir
                şekilde yönetebilir ve hızlı, sağlıklı, bilgiye dayalı kararlar
                alabilirsiniz.
              </p>
            </div>
          </div>
          <!-- END TEXT BLOCK -->
        </div>
        <!-- End row -->
      </div>
      <!-- End container -->
    </section>
    <!-- END CONTENT-2 -->

    <!-- FEATURES-6
			============================================= -->

    <section id="features-7" class="wide-100 features-section division">
      <div class="container">
        <!-- SECTION TITLE -->
        <div class="row">
          <div class="col-md-10 col-lg-8 offset-md-1 offset-lg-2">
            <div class="section-title text-center mb-70">
              <!-- Title -->
              <h2 class="h2-md">Ön Muhasebe Süreçlerinin Kusursuz Takibi</h2>

              <!-- Text -->
              <p class="p-xl">
                E-Fatura sistemine entegrasyonumuz ile kasa, banka, stok, cari,
                üretim, personel, çek-senet ve diğer modülleri ile en geniş
                kapsamlı ön muhasebe yazılımı… Tüm ön muhasebe ihtiyaçlarınız
                tek bir platformda. Üstelik cep telefonlarından da erişim
                sağlayabilirsiniz.
              </p>
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
                  <img src="/images/accounting.png" width="16px" height="16px" alt="İş Hesap Ön Muhasebe" />
                </div>

                <!-- Title -->
                <h5 class="h5-xs">
                  Tüm Gelirleriniz ve Satışlarınız Tek Platformda
                </h5>
              </div>
            </div>

            <!-- FEATURE BOX #2 -->
            <div id="fb-7-2" class="col-sm-6 col-md-3">
              <div class="fbox-7 text-center wow fadeInUp" data-wow-delay="0.2s">
                <!-- Icon -->
                <div class="fbox-7-ico ico-75 grey-color">
                  <img src="/images/budget.png" width="16px" height="16px" alt="İş Hesap Ön Muhasebe" />
                </div>

                <!-- Title -->
                <h5 class="h5-xs">
                  Stoklarınız ve Üretim Hesaplarınızın Takibi
                </h5>
              </div>
            </div>

            <!-- FEATURE BOX #3 -->
            <div id="fb-7-3" class="col-sm-6 col-md-3">
              <div class="fbox-7 text-center wow fadeInUp" data-wow-delay="0.8s">
                <!-- Icon -->
                <div class="fbox-7-ico ico-75 grey-color">
                  <img src="/images/team-leader.png" width="16px" height="16px" alt="İş Hesap Ön Muhasebe" />
                </div>

                <!-- Title -->
                <h5 class="h5-xs">Cari Hesaplarınızın Takibi</h5>
              </div>
            </div>

            <!-- FEATURE BOX #4 -->
            <div id="fb-7-4" class="col-sm-6 col-md-3">
              <div class="fbox-7 text-center wow fadeInUp" data-wow-delay="1s">
                <!-- Icon -->
                <div class="fbox-7-ico ico-75 grey-color">
                  <img src="/images/private-access.png" width="16px" height="16px" alt="İş Hesap Ön Muhasebe" />
                </div>

                <!-- Title -->
                <h5 class="h5-xs">7/24 Hesaplarınıza Erişim Sağlayın</h5>
              </div>
            </div>
          </div>
          <!-- End row -->
        </div>
        <!-- END FEATURES-7 WRAPPER -->
      </div>
      <!-- End container -->
    </section>

    <!-- END FEATURES-6 -->

    <!-- TESTIMONIALS-4
			============================================= -->

    <!-- CONTENT-13
			============================================= -->
    <section id="content-13" class="wide-60 content-section division">
      <div class="container">
        <div class="row d-flex align-items-center">
          <!-- TEXT BLOCK -->
          <div class="col-md-6 col-xl-6">
            <div class="txt-block left-column mb-40 wow fadeInLeft" data-wow-delay="0.2s">
              <!-- Section ID -->
              <span class="section-id">Hızlı Ön Muhasebe </span>

              <!-- Title -->
              <h2 class="h2-md">Ön Muhasebe İşlemlerinizi Kolaylaştırır</h2>

              <!-- List -->
              <ul class="simple-list">
                <li class="list-item">
                  <p class="p-lg">
                    Entegre ön muhasebe yazılımı, web tabanlı, mobil destekli
                    esnek yapısıyla hızlı işlem yapmanızı, pratik olarak
                    kayıtlarınızı oluşturmanızı sağlar.
                  </p>
                </li>

                <li class="list-item">
                  <p class="p-lg">
                    Bütünleşik ön muhasebe platformu, e-fatura işlemleriniz ile
                    entegre olduğundan aynı bilgileri tekrar yazmanızı
                    gerektirmez.
                  </p>
                </li>

                <li class="list-item">
                  <p class="p-lg">
                    Yapacağınız işlemlerde depo açma, stok kartı tanımlama, cari
                    hesap açma gibi işlemlerin hiç birisinde herhangi bir sayı
                    sınırı bulunmamaktadır.
                  </p>
                </li>
              </ul>
            </div>
          </div>
          <!-- END TEXT BLOCK -->

          <!-- IMAGE BLOCK -->
          <div class="col-md-6 col-xl-6">
            <div class="content-13-img wow fadeInRight" data-wow-delay="0.2s">
              <img class="img-fluid" src="/tasarim/onmuhasebe/5.png" alt="İş Hesap Ön Muhasebe" />
            </div>
          </div>
        </div>
        <!-- End row -->
      </div>
      <!-- End container -->
    </section>
    <!-- END CONTENT-13 -->

    <!-- CONTENT-11
			============================================= -->
    <section id="content-11" class="wide-100 content-section division">
      <div class="container">
        <!-- SECTION TITLE -->
        <div class="row">
          <div class="col-lg-10 offset-lg-1">
            <div class="section-title text-center mb-60">
              <!-- Title -->
              <h2 class="h2-md">
                Tüm Platformlardan Anında Erişim Sağlayabilirsiniz…
              </h2>

              <!-- Text -->
              <p class="p-xl">
                Cep telefonu, tablet, masaüstü ve dizüstü bilgisayarlardan ön
                muhasebe yazılımına erişim sağlayabilir ve kayıt
                ekleyebilirsiniz.
              </p>
            </div>
          </div>
        </div>

        <!-- IMAGE BLOCK -->
        <div class="row">
          <div class="col-md-12">
            <div class="img-block pc-30 text-center wow fadeInUp" data-wow-delay="0.2s">
              <img class="img-fluid" src="/images/platforms.png" alt="İş Hesap Ön Muhasebe" />
            </div>
          </div>
        </div>

        <!-- DOWNLOAD BUTTON -->
        <!-- <div class="row">
					<div class="col-md-12">
						<div class="content-11-btn mt-60 wow fadeInUp" data-wow-delay="0.2s">
						
							<a href="https://www.youtube.com/watch?v=7e90gBu4pas"
								class="video-popup2 btn btn-md btn-grey skyblue-hover mb-10">
								See NordEx in Action
							</a>

							
						</div>
					</div>
				</div> -->
        <!-- END DOWNLOAD BUTTON -->
      </div>
      <!-- End container -->
    </section>
    <!-- END CONTENT-11 -->

    <!-- DOWNLOAD-6
			============================================= -->

    <!-- END  DOWNLOAD-6 -->

    <!-- PRICING-2
			============================================= -->

    <!-- END PRICING-2 -->

    <!-- CONTENT-1
			============================================= -->
    <section id="content-1" class="bg_whitesmoke wide-60 content-section division">
      <div class="container">
        <div class="row d-flex align-items-center m-row">
          <!-- TEXT BLOCK -->
          <div class="col-md-7 col-lg-6 m-bottom">
            <div class="txt-block left-column mb-40 wow fadeInRight" data-wow-delay="0.2s">
              <!-- Section ID -->
              <span class="section-id grey-color">Personel Takibi</span>

              <!-- Title -->
              <h2 class="h2-md">
                Personel modülü ile Maaş, Avans, İzin Takibi Çok Pratik
              </h2>

              <!-- Text -->
              <p class="p-lg">
                Personellerinizin maaş ve avans takibini kolaylıkla
                yapabilirsiniz. Ayrıca izinlerini takip edebilir, kıdem ve ihbar
                tazminatlarını hesaplayabilirsiniz. Üretimde çalışan personeli
                görevlendirebilir, mesai takibini gerçekleştirebilirsiniz.
              </p>
              <!-- STORE BADGES -->

              <!-- END STORE BADGES -->
            </div>
          </div>
          <!-- END TEXT BLOCK -->

          <!-- IMAGE BLOCK -->
          <div class="col-md-5 col-lg-6 m-top">
            <div class="img-block right-column pc-20 mb-40 wow fadeInLeft" data-wow-delay="0.2s">
              <img class="img-fluid" src="/images/personel-takibi.png" alt="İş Hesap Ön Muhasebe" />
            </div>
          </div>
        </div>
        <!-- End row -->
      </div>
      <!-- End container -->
    </section>

    <!-- END CONTENT-1 -->
    <mobile-landing></mobile-landing>


    <!-- FOOTER-1
			============================================= -->
    <Footer></Footer>
    <!-- END FOOTER-1 -->
  </div>
</template>

<script>
export default {
  head: {
    title: "Ön Muhasebe - İş Hesap",
    meta: [
      {
        hid: "description",
        name: "description",
        content:
          "Ön Muhasebe, şirketler için kritik öneme sahip bilgilerin üretildiği, kayıtlandığı ve raporlandığı bölümdür. Bir şirketin karar alması için gerekli olan en sağlıklı en doğru ve en hızlı bilgiler daima ön muhasebe tarafından sağlanır. Şirketlerin günlük operasyonlarının gerçek zamanlı bilgi ihtiyacı ön muhasebe yazılımları tarafından karşılanmaktadır. İnternetin olduğu her cihazdan erişebileceğiniz yeni nesil ön muhasebe yazılımı tedarik etmek için bize ulaşabilirsiniz.",
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
    }
  },

  mounted() {
    this.getData();
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
