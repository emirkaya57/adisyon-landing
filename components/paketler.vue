<template>
    <section id="pricing-3" class="bg_whitesmoke hero-offset-nav pb-50 pricing-section division">
        <div class="container">
            <!-- SECTION TITLE -->
            <div class="row">
                <div class="col-lg-10 offset-lg-1">
                    <div class="section-title text-center mb-70">
                        <!-- Title -->
                        <h2 class="h2-md">Size özel paketler</h2>

                        <!-- Text -->
                        <p class="p-xl">
                            Size en uygun paketi aşağıdan seçebilirsiniz. Fiyatlar aylık ve
                            yıllık olarak değişkenlik gösterebilir.
                        </p>
                    </div>
                </div>
            </div>

            <!-- PRICING TABLES -->
            <div class="row text-center">
                <!-- FREE PLAN -->
                <div class="col-md-4">
                    <div class="pricing-table mb-40 wow fadeInUp" data-wow-delay="0.4s">

                        <!-- Plan Price  -->
                        <div class="pricing-plan bg_white">
                            <span style="font-size:17px">%20 indirim</span>
                            <h5 class="h5-md">Kobi</h5>
                            <sup class="dark-color">₺</sup>
                            <span class="dark-color" v-if="kobi_para">1<sub style="font-size:15px">/
                                    GÜNLÜK</sub></span>
                            <span class="dark-color" v-else>25 <sub style="font-size:15px">/ AYLIK</sub></span>

                            <div class="d-flex justify-content-center my-2">
                                <label>Aylık</label>
                                <el-switch class="mx-2" style="display: block" v-model="kobi_para" active-color="#434242"
                                    inactive-color="#434242" size="large">
                                </el-switch>
                                <label class="">Günlük</label>
                            </div>

                            <p class="p-sm">Kobi paketimiz için bunu seçebilirsiniz</p>

                            <!-- Pricing Table Button  -->
                            <a href="https://adisyon.masahesap.com" class="btn btn-tra-grey skyblue-hover mb-15">Şimdi
                                Dene</a>

                            <!-- Pricing Trial Link -->
                            <!-- <a href="/kobi" style="text-decoration: none;" class="pricing-trial-link">Detaylar</a> -->
                        </div>

                        <!-- Plan Description -->
                        <div class="pricing-description bg_white">
                            <ul class="features">
                                <li>
                                    <p class="p-lg">500 Adet E-Fatura Ücretsiz</p>
                                </li>
                                <li>
                                    <p class="p-lg">Mobil Uygulama Ücretsiz</p>
                                </li>
                                <li>
                                    <p class="p-lg">Finans Yönetimi</p>
                                </li>
                                <li>
                                    <p class="p-lg">Cari Hesap Yönetimi</p>
                                </li>
                                <li>
                                    <p class="p-lg">Sipariş Yönetimi</p>
                                </li>
                                <li>
                                    <p class="p-lg">E-Dönüşüm</p>
                                </li>
                                <li>
                                    <p class="p-lg">Tek Kullanıcı</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <!-- END PFREE PLAN -->
                <!-- FREE PLAN -->
                <div class="col-md-4">
                    <div class="pricing-table mb-40 wow fadeInUp" data-wow-delay="0.4s">
                        <!-- Plan Price  -->
                        <div class="pricing-plan highlight crocus_gradient white-color">
                            <span style="font-size:17px">%22 indirim</span>
                            <h5 class="h5-md">Ön Muhasebe</h5>
                            <sup class="">₺</sup>
                            <span class="" v-if="on_para">1 <sub style="font-size:16px">/ GÜNLÜK</sub></span>
                            <span class="" v-else>30 <sub style="font-size:15px">/ AYLIK</sub></span>


                            <div class="d-flex justify-content-center my-2">
                                <label>Aylık</label>
                                <el-switch class="mx-2" style="display: block" v-model="on_para" active-color="#434242"
                                    inactive-color="#434242" size="large">
                                </el-switch>
                                <label class="">Günlük</label>
                            </div>

                            <p class="p-sm">
                                Ön Muhasebe paketimiz için bunu seçebilirsiniz
                            </p>

                            <!-- Pricing Table Button  -->
                            <a href="https://adisyon.masahesap.com" class="btn btn-tra-white skyblue-hover mb-15">Şimdi
                                Dene</a>

                            <!-- Pricing Trial Link -->
                            <!--  <a href="/onmuhasebe" style="text-decoration: none;" class="pricing-trial-link">Detaylar</a> -->
                        </div>

                        <!-- Plan Description -->
                        <div class="pricing-description bg_white">
                            <ul class="features">
                                <li>
                                    <p class="p-lg">500 Adet E-Fatura Ücretsiz</p>
                                </li>
                                <li>
                                    <p class="p-lg">Mobil Uygulama Ücretsiz</p>
                                </li>
                                <li>
                                    <p class="p-lg">Finans Yönetimi</p>
                                </li>
                                <li>
                                    <p class="p-lg">Cari Hesap Yönetimi</p>
                                </li>
                                <li>
                                    <p class="p-lg">Ön Muhasebe Yönetimi</p>
                                </li>
                                <li>
                                    <p class="p-lg">E-Dönüşüm</p>
                                </li>
                                <li>
                                    <p class="p-lg">Üç Kullanıcı</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="pricing-table mb-40 wow fadeInUp" data-wow-delay="0.4s">
                        <!-- Plan Price  -->
                        <div class="pricing-plan bg_white">
                            <h5 class="h5-md">Resmi Muhasebe</h5>
                            <sup class="dark-color">₺</sup>
                            <span class="dark-color" v-if="mhsb_para">1<sub style="font-size:15px">/GÜNLÜK</sub></span>
                            <span class="dark-color" v-else>60<sub style="font-size:15px">/ AYLIK</sub> </span>

                            <div class="d-flex justify-content-center my-2">
                                <label>Aylık</label>
                                <el-switch class="mx-2" style="display: block" v-model="mhsb_para" active-color="#434242"
                                    inactive-color="#434242" size="large">
                                </el-switch>
                                <label class="">Günlük</label>
                            </div>

                            <p class="p-sm">
                                Resmi Muhasebe paketimiz için bunu seçebilirsiniz
                            </p>

                            <!-- Pricing Table Button  -->
                            <a href="https://adisyon.masahesap.com" class="btn btn-tra-grey  mb-15">Şimdi Dene</a>

                        </div>

                        <!-- Plan Description -->
                        <div class="pricing-description bg_white">
                            <ul class="features">
                                <li>
                                    <p class="p-lg">500 Adet E-Fatura Ücretsiz</p>
                                </li>
                                <li>
                                    <p class="p-lg">Mobil Uygulama Ücretsiz</p>
                                </li>
                                <li>
                                    <p class="p-lg">Finans Yönetimi</p>
                                </li>
                                <li>
                                    <p class="p-lg">Cari Hesap Yönetimi</p>
                                </li>
                                <li>
                                    <p class="p-lg">Resmi Muhasebe Modülleri</p>
                                </li>
                                <li>
                                    <p class="p-lg">SGK Modülleri</p>
                                </li>
                                <li>
                                    <p class="p-lg">Üç Kullanıcı</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <!-- END PFREE PLAN -->
            </div>
            <!-- END PRICING TABLES -->
        </div>
        <!-- End container -->

        <!-- GEOMETRIC OVERLAY -->
        <div class="bg_fixed geometric_overlay"></div>
    </section>
</template>

<script>
export default {
    data() {
        return {
            kobi_para: true,
            on_para: true,
            mhsb_para: true,
        };
    }
}
</script>

<style></style>