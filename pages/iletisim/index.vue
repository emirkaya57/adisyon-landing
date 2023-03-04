<template>
  <div id="page" class="page">
    <!-- HEADER
			============================================= -->
    <Header :loading="loading"></Header>
    <!-- END HEADER -->

    <!-- CONTACTS-2
			============================================= -->

    <!-- END CONTACTS-2 -->

    <!-- SECTION DIVIDER
			============================================= -->
    <div class="divider-wrapper text-center bg_whitesmoke">
      <div class="section-divider"></div>
    </div>

    <Footer></Footer>
    <!-- END FOOTER-2 -->
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
  head: {
    title: "İletişim - MasaHesap",
    meta: [
      {
        hid: "description",
        name: "description",
        content: "İletişim bilgilerimiz.",
      },
    ],
  },

}


</script>

<style></style>
