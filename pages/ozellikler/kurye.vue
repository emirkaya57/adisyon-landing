<template>
    <div id="page" class="page">
        <Header :loading="loading"></Header>
        <section id="hero-3" class="bg_scroll hero-section division h-100">
            <div class="container">
                <div class="row d-flex align-items-center">


                    <!-- HERO TEXT -->
                    <div class="col-md-7 col-lg-6">
                        <div class="hero-3-txt pc-10 mb-40 wow fadeInRight" data-wow-delay="0.4s">

                            <!-- Small Tittle -->
                            <h5 class="h5-xs grey-color">MasaHesap</h5>

                            <!-- Title -->
                            <h2 class="h2-lg ">Kurye Modülü</h2>

                            <!-- Text -->
                            <p class="p-xl grey-color">İşletmenizi ve Siparişlerinizi kolaylıkla yönetmek istiyorsanız bu
                                çözüm
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
                            <img class="img-fluid" src="/anasayfa/3.png" alt="hero-image">
                        </div>
                    </div>


                </div> <!-- End row -->
            </div> <!-- End container -->


            <!-- SECTION OVERLAY -->
            <div class="bg_fixed wave_overlay"></div>


        </section>

        <hazir></hazir>


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
                                <span class="section-id grey-color">Kurye Erkanı</span>

                                <!-- Title -->
                                <h2 class="h2-md">
                                    Paket Siparişi ve Kurye Yönetimi
                                </h2>

                                <!-- Text -->
                                <p class="p-lg">
                                    MasaHesap ile paket siparişlerinizi çok daha kolay şekilde yönetebilirsiniz. Paket
                                    siparişlerinizin
                                    teslim edileceği müşterilerinize ait bilgileri kolayca kayıt altında tutabilirsiniz.
                                    Bu özellik ile
                                    paket siparişlerinizin teslim edileceği müşterilerinize ait bilgileri kolayca
                                    sisteme kaydedebilir,
                                    ayrıca siparişlerinizi teslim eden kuryelerinizin takibini de
                                    gerçekleştirebilirsiniz. Dilerseniz
                                    mobil uygulamamız üzerinden kuryelerinizin kendi paket siparişlerini takip
                                    edebilmelerini de
                                    sağlayabilirsiniz.
                                </p>
                            </div>
                            <div>
                                <a style="font-size: 18px; font-weight: 500;" href="/ozellikler/siparis-yonetimi">Sipariş
                                    Yönetimi <i class="bi bi-arrow-right"></i></a>
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

        <Footer></Footer>
    </div>
</template>

<script>
import Footer from '../../components/Footer.vue'
export default {
    data() {
        return {
            loading: true
        }
    },
    components: { Footer },

}
</script>

<style></style>