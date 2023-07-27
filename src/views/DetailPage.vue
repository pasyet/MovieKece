<template>
 <div class="wrapper">

    <div class="content-wrapper">
      <!-- Content Header (Page header) -->
      <div class="container">
        <section class="content-header">
          <div class="container-fluid">
            <div class="row mb-2">
              <div class="col-sm-6">
                  <br>
                <h1>{{ movie.title }}</h1>
              </div>
            </div>
          </div>
          <!-- /.container-fluid -->
        </section>

        <!-- Main content -->
        <section class="content">
          <!-- Default box -->
          <div class="card card-solid">
            <div class="card-body">
              <div class="row">
                <div class="col-12 col-sm-6">
                  <h3 class="d-inline-block d-sm-none">{{ movie.title }}</h3>
                  <div class="col-12">
                    <img :src="movie.imgUrl" class="product-image" :alt="movie.title"  style="width: 500px"/>
                  </div>
                </div>
                <div class="col-12 col-sm-6">
                    <h4>Synopsis</h4>
                    <p>{{ movie.synopsis }}</p>
                    <p>Rating: {{ movie.rating }}</p>
                    <div class="btn btn-danger btn-lg" @click.prevent="addToBookmark(movie.id)">
                        <i class="fas fa-heart fa-lg mr-2"></i>
                        Add to Bookmark
                    </div>
                     <hr />
                    <iframe width="420" height="345" :src=movie.trailerUrl style="width: 510px"></iframe>
                     <hr />
                     <div class="col-12 mt-4">
                    <div class="col-3">
                    <div class="card mx-auto my-2" style="width: 100x">
                    <img :src="qrcode" class="card-img-top" />
                    </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!-- /.card-body -->
          </div>
          <!-- /.card -->
        </section>
      </div>
      <!-- /.content -->
    </div>
  </div>
</template>

<script>
export default {
    name: "DetailPage",
    computed: {
        movie() {
        return this.$store.state.movie;
        },
        qrcode() {
            console.log(this.$store.state.qrcode, 'ini qr code');
            return this.$store.state.qrcode;
        },
        email(){
            return this.$store.state.email
        },
    },
    addToBookmark(id){
      // console.log('movie item', id);
        this.$store.dispatch('addBookmark', id)
    },
    created() {
        this.$store.dispatch("detailMovies", this.$route.params.id),
        this.$store.dispatch("getqrCode", this.$route.params.id);
    },
};
</script>

<style></style>