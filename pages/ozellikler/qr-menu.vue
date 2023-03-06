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
                            <h2 class="h2-lg ">Modern Qr Menü</h2>

                            <!-- Text -->
                            <p class="p-xl grey-color">Eklediğiniz ürünler anında menünüzde yer alır.
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
                            <img class="img-fluid" src="/anasayfa/2.png" alt="hero-image">
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
                                <img class="img-fluid" src="/anasayfa/5.png" alt="İş Hesap Kobi" />
                            </div>
                        </div>

                        <!-- TEXT BLOCK -->
                        <div class="col-md-7 col-lg-6">
                            <div class="txt-block left-column mb-40 wow fadeInLeft" data-wow-delay="0.6s">
                                <!-- Section ID -->
                                <span class="section-id grey-color">Sade Qr Menü Ekranı</span>

                                <!-- Title -->
                                <h2 class="h2-md">
                                    Qr Menü
                                </h2>

                                <!-- Text -->
                                <p class="p-lg">
                                    Müşterileriniz masadaki QR kodu, telefonlarına okutarak eklediğiniz ürünlerinize erişir
                                    ve kolaylıkla siparişlerini verir.
                                    MasaHesap ile ürün tanımlama oldukça kolaydır. İşletmenizdeki ürünleri kolayca
                                    kayıt edebilir, otomatik olarak qr menünüz oluşur. Eklediğiniz ürünleri favori olarak
                                    belirleyebilir ve 2'li görünüm olarak listeyebilirsiniz.
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