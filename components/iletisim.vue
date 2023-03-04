<template>
    <div>
        <section id="contacts-2" class="bg_whitesmoke hero-offset-nav pb-50 contacts-section division">
            <div class="container">
                <!-- SECTION TITLE -->
                <div class="row">
                    <div class="col-lg-10 offset-lg-1">
                        <div class="section-title text-center mb-70">
                            <!-- Title -->
                            <h2 class="h2-md">Nasıl Yardımcı Olabiliriz?</h2>
                        </div>
                    </div>
                </div>
                <!-- CONTACT FORM -->
                <div class="row">
                    <div class="col-lg-10 col-xl-8 offset-lg-1 offset-xl-2">
                        <div class="form-holder">
                            <form id="contactForm" name="contact-form" class="row contact-form" method="post">
                                <!-- Contact Form Input -->
                                <div id="input-name" class="col-md-12">
                                    <p class="p-lg">Ad Soyad*</p>
                                    <input type="text" name="name" class="form-control name" placeholder="Ad Soyad"
                                        v-model="name" required autocomplete="off" />
                                </div>
                                <div id="input-tel" class="col-md-12">
                                    <p class="p-lg">Telefon*</p>
                                    <input type="text" name="phone" class="form-control phone" id="phone" v-model="telefon"
                                        placeholder="555-555-5555" required autocomplete="off" />
                                </div>

                                <div id="input-email" class="col-md-12">
                                    <p class="p-lg">Email* </p>
                                    <span>Lütfen e-posta adresinizin doğruluğunu dikkatlice kontrol
                                        edin</span>
                                    <input v-model="email" type="text" name="email" class="form-control email"
                                        placeholder="Email" required autocomplete="off" />
                                </div>

                                <div id="input-message" class="col-md-12 input-message">
                                    <p class="p-lg">Sorunuzu ayrıntılı olarak açıklayınız*</p>
                                    <textarea required class="form-control message" name="message" rows="6"
                                        v-model="description" placeholder="Sorununuzu Detaylı Yazınız" minlength="5"
                                        autocomplete="off"></textarea>
                                </div>
                                <!-- Contact Form Button -->
                                <div class="col-md-12 mt-15 form-btn text-right">

                                    <button type="button" @click="getData" id="click"
                                        class="btn btn-skyblue tra-skyblue-hover">
                                        Gönder
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <!-- END CONTACT FORM -->
            </div>
            <!-- End container -->

            <!-- GEOMETRIC OVERLAY -->
            <div class="bg_fixed geometric_overlay"></div>
        </section>
    </div>
</template>

<script>
export default {

    data() {
        return {
            data: [],
            loading: true,
            name: '',
            telefon: '',
            email: '',
            description: ''
        }
    },
    methods: {
        getData() {
            if (this.name == '' || this.email == '' || this.description == '') {
                this.$notify.error({
                    title: 'Hata',
                    message: 'Hata , Boş Alanları Doldurunuz'
                });

            }
            else {
                this.$axios.$post('https://blog.siberhesap.com/api/v1/public/tables/feedbacks/store', {
                    name_surname: this.name,
                    phone: this.telefon,
                    email_basic: this.email,
                    description: this.description,
                    state: 1,
                    column_set_id: 0,
                    id: 0
                }).then(res => {
                    if (res.data.message == "success") {
                        this.$notify({
                            title: 'Success',
                            message: 'Başarılı , Mailiniz Gönderildi',
                            type: 'success'

                        });
                        this.loading = false
                        this.name = '',
                            this.telefon = '',
                            this.email = '',
                            this.description = ''


                    }
                    console.log(res.data)
                })
            }
        },
    },


}

</script>

<style></style>