<template>
  <div id="page" class="page">
    <!-- HEADER
			============================================= -->
    <Header :loading="loading"></Header>
    <!-- END HEADER -->
    <!-- PAGE HERO
			============================================= -->
    <div id="about-page" class="rel purple_gradient bg_shape_01 page-hero-section division">
      <div class="container">
        <div class="row">
          <div class="col-lg-8 offset-lg-2">
            <div class="hero-txt text-center white-color">
              <!-- Title -->
              <h2 class="h2-md">Hakkımızda</h2>

              <!-- Text -->
              <p class="p-xl">
                Küçük, orta ve büyük ölçekli işletmelerin tüm muhasebe süreçlerini daha verimli ve işlevsel
                yönetebilmesi için varız.
              </p>
            </div>
          </div>
        </div>
        <!-- End row -->
      </div>
      <!-- End container -->
    </div>
    <!-- END PAGE HERO -->

    <!-- ABOUT-2
			============================================= -->
    <div id="about-2" class="wide-90 about-section division">
      <div class="container">
        <!-- TEXT BLOCK -->
        <div class="about-2-txt pc-50">
          <!-- SMALL TITLE -->
          <div class="row">
            <div class="col-md-12">
              <div class="txt-block mb-35 text-center">
                <h4 class="h4-xl ">Biz Kimiz?</h4>
              </div>
            </div>
          </div>

          <div class="row">
            <!-- LEFT COLUMN -->
            <div class="col-md-12">
              <div class="txt-block top-box">
                <!-- Text -->
                <p class="p-xl">
                  İşHesap Her 2022 yılında her ölçekte işletmelerin ihtiyaç duyduğu tüm muhasebe operasyonlarını daha
                  verimli ve daha işlevsel yönetebilmesi amacı ile kurulan web tabanlı bir muhasebe programıdır.
                  İşletmelerin zamandan tasarruf ederek tüm ekip ve operasyonlarını tek bir panelden kolaylıkla kontrol
                  etmesini sağlayan işhesap, kullanıcılarına rahat ve kolay çalışma imkanı sağlamaktadır.
                </p>

                <!-- Text -->
                <p class="p-xl">
                  Cari hesap takibi, gelir gider takibi, elektronik fatura, stok hizmet yönetimi ve raporlama gibi
                  işletmelerin ihtiyaç duyduğu bu ve bunun gibi birçok olmazsa olmaz tüm ihtiyaçlarını bünyesinde
                  barındıran yerli bir ön muhasebe programıdır. İşhesap’ı geliştirirken mutlu müşterilerimizden
                  aldığımız motivasyon ile işletmelerin yükünü hafifletecek çözümler buluyoruz.
                </p>
              </div>
            </div>
            <!-- END LEFT COLUMN -->


          </div>
        </div>
        <!-- END TEXT BLOCK -->

        <!-- IMAGE BLOCK -->
        <div class="row">
          <div class="col-md-12">
            <div class="img-block mt-50 mb-70">
              <img class="img-fluid" src="/images/hakkimizda/ishesap-hakkimizda.png" alt="İş Hesap" />
            </div>
          </div>
        </div>



        <!-- END BUTTON -->
      </div>
      <!-- End container -->
    </div>
    <!-- END ABOUT-2 -->




    <!-- SECTION DIVIDER
			============================================= -->
    <div class="divider-wrapper text-center">
      <div class="section-divider"></div>
    </div>


    <!--   <section id="team-1" class="wide-60 team-section division">
      <div class="container">
     
        <div class="row">
          <div class="col-lg-10 offset-lg-1">
            <div class="section-title text-center mb-70">
              
              <h2 class="h2-md">One Team Many Talents</h2>

              
              <p class="p-xl">
                Aliquam a augue suscipit, luctus neque purus ipsum neque at
                dolor primis libero tempus, blandit and cursus varius magna
                tempus a dolor
              </p>
            </div>
          </div>
        </div>

      
        <div class="team-members-holder pc-20 text-center">
          <div class="row">
            
            <div class="col-sm-6 col-lg-3">
              <div class="team-member wow fadeInUp" data-wow-delay="0.4s">
               
                <div class="team-member-photo pc-10">
                  <img
                    class="img-fluid"
                    src="/images/team-1.jpg"
                    alt="İş Hesap"
                  />
                </div>

                
                <div class="team-member-data">
                  <h5 class="h5-sm">Jonathan Barnes</h5>
                  <p>Founder and CEO</p>
                  <span><a href="#" class="grey-color">@jonatanbarnes</a></span>
                </div>
              </div>
            </div>
           

           
            <div class="col-sm-6 col-lg-3">
              <div class="team-member wow fadeInUp" data-wow-delay="0.6s">
              
                <div class="team-member-photo pc-10">
                  <img
                    class="img-fluid"
                    src="/images/team-2.jpg"
                    alt="İş Hesap"
                  />
                </div>

               
                <div class="team-member-data">
                  <h5 class="h5-sm">Jamie Bartlett</h5>
                  <p>Software Engineer</p>
                  <span><a href="#" class="grey-color">@jamiebartlett</a></span>
                </div>
              </div>
            </div>
           

            
            <div class="col-sm-6 col-lg-3">
              <div class="team-member wow fadeInUp" data-wow-delay="0.8s">
                
                <div class="team-member-photo pc-10">
                  <img
                    class="img-fluid"
                    src="/images/team-3.jpg"
                    alt="İş Hesap"
                  />
                </div>

              
                <div class="team-member-data">
                  <h5 class="h5-sm">Matthew Anderson</h5>
                  <p>Software Engineer</p>
                  <span
                    ><a href="#" class="grey-color">@matthewanderson</a></span
                  >
                </div>
              </div>
            </div>
            

            
            <div class="col-sm-6 col-lg-3">
              <div class="team-member wow fadeInUp" data-wow-delay="1s">
                
                <div class="team-member-photo pc-10">
                  <img
                    class="img-fluid"
                    src="/images/team-4.jpg"
                    alt="İş Hesap"
                  />
                </div>

                
                <div class="team-member-data">
                  <h5 class="h5-sm">Megan Coleman</h5>
                  <p>UX / UI Designer</p>
                  <span><a href="#" class="grey-color">@megancoleman</a></span>
                </div>
              </div>
            </div>
            

           
            <div class="col-sm-6 col-lg-3">
              <div class="team-member wow fadeInUp" data-wow-delay="0.4s">
                
                <div class="team-member-photo pc-10">
                  <img
                    class="img-fluid"
                    src="/images/team-5.jpg"
                    alt="İş Hesap"
                  />
                </div>

              
                <div class="team-member-data">
                  <h5 class="h5-sm">Charlotte Johnson</h5>
                  <p>Quality Assurance</p>
                  <span
                    ><a href="#" class="grey-color">@charlottejohnson</a></span
                  >
                </div>
              </div>
            </div>
            

            <div class="col-sm-6 col-lg-3">
              <div class="team-member wow fadeInUp" data-wow-delay="0.6s">
                
                <div class="team-member-photo pc-10">
                  <img
                    class="img-fluid"
                    src="/images/team-6.jpg"
                    alt="İş Hesap"
                  />
                </div>

               
                <div class="team-member-data">
                  <h5 class="h5-sm">Olivia Steiner</h5>
                  <p>Head of Marketing</p>
                  <span><a href="#" class="grey-color">@oliviasteiner</a></span>
                </div>
              </div>
            </div>
           

           
            <div class="col-sm-6 col-lg-3">
              <div class="team-member wow fadeInUp" data-wow-delay="0.8s">
                
                <div class="team-member-photo pc-10">
                  <img
                    class="img-fluid"
                    src="/images/team-7.jpg"
                    alt="İş Hesap"
                  />
                </div>

                
                <div class="team-member-data">
                  <h5 class="h5-sm">Mark Brayton</h5>
                  <p>Customer Care</p>
                  <span><a href="#" class="grey-color">@markbrayton</a></span>
                </div>
              </div>
            </div>
            

            
            <div class="col-sm-6 col-lg-3">
              <div class="team-member wow fadeInUp" data-wow-delay="1s">
                
                <div class="team-member-photo pc-10">
                  <img
                    class="img-fluid"
                    src="/images/team-8.jpg"
                    alt="İş Hesap"
                  />
                </div>

                
                <div class="team-member-data">
                  <h5 class="h5-sm">Grow With Us</h5>
                  <span
                    ><a href="mailto:youremail@mail.com" class="grey-color"
                      >hireme@domain.com</a
                    ></span
                  >
                  <span
                    ><a href="mailto:youremail@mail.com" class="grey-color"
                      >hireme1@domain.com</a
                    ></span
                  >
                </div>
              </div>
            </div>
           
          </div>
          
        </div>
        
      </div>
    
    </section>
     -->



    <!-- FOOTER-1
			============================================= -->
    <Footer></Footer>
    <!-- END FOOTER-1 -->
  </div>
</template>

<script>
export default {
  head: {
    title: "Hakkımızda - İş Hesap",
    meta: [
      {
        hid: "description",
        name: "description",
        content: "Hakkımızda",
      },
    ],
  },
  data() {
    return {
      loading: true
    }
  }
};
</script>

<style>

</style>
