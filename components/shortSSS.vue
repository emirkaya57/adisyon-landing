<template>
    <section id="faqs-1" class="bg_whitesmoke faqs-section division">				
  <div class="container">
    <div class="row">


      <!-- FAQs TITLE -->
      <div class="col-lg-4 mb-50 ">
        <div class="faqs-1-title pc-10 text-center">

          <!-- Section ID -->	
          <!--  <span class="section-id grey-color">Sıkça Sorulan Sorular</span> -->

          <!-- Title -->
          <h2 class="h2-md mb-20">Sıkça Sorulanlar</h2>

          <!-- Text -->	
          <p class="p-lg ">Siz sormadan biz sizin için cevaplayalım.
          </p>

        </div>
      </div>


            <div  class="col-lg-8">
              <div id="accordion" role="tablist" class="pc-20">
                <div class="card grey-color" v-for="soru in data1" :key="soru">

       <a style="color:#222222" class="collapsed" data-toggle="collapse" :href="'#collapseFour' + soru.id" role="button" aria-expanded="false" aria-controls="collapseFour">
         <!-- Question -->
         <div class="card-header" role="tab" id="headingFour">
          <h5 class="h5-sm" style="color:#222222" >
                		
                  {{soru.content}}
             
            </h5>
        </div>

        <!-- Answer -->
        <div :id="'collapseFour' + soru.id" class="collapse" role="tabpanel" aria-labelledby="headingFour" data-parent="#accordion">
            <div class="card-body">
              
              <!-- Text -->
              <p class="p-lg">{{soru.cevaplar_id}} 
          </p> 

            </div>
        </div>

       </a>
        </div>

      </div>
    </div>
    </div>	<!-- End row -->
  </div>	   <!-- End container -->	
</section>	<!-- END FAQs-1 -->	


</template>

<script>
export default {
  data() {
    return {
      data1: [],
      loading:true,
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
  methods: {
    change(e) {
      this.params.page = e;
      this.getData();
    },
    getData() {
      this.$axios
        .$post("https://blog.siberhesap.com/api/v1/public/tables/sssorular", {
          params: JSON.stringify(this.params),
        })
        .then((res) => {
          this.data1 = res.data.records
          this.pagesData = res.data
         this.loading=false
        });
    },
  },
  mounted() {
    this.getData();
  },
}
</script>

<style>

</style>