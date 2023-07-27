<template>
  <div class="col-3">
    <div class="card mx-auto my-2" style="width: 12rem">
      <img
        :src="movie.imgUrl"
        class="card-img-top"
      />
      <div class="card-body card-body">
        <h5 class="card-title"><router-link :to="`/detail/${movie.id}`">{{movie.title}}</router-link></h5>
        <p class="card-text"> Rating: {{movie.rating}}</p>
        <p class="card-text"> Genre: {{movie.Genre.name}}</p>
        <a v-if="email" href="#" class="btn btn-primary" @click.prevent="addToBookmark(movie.id)"><i class="fas fa-heart fa-lg mr-2"  aria-hidden="true"></i></a>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: 'MoviesItem',
  props:["movie"],
  data () {
      return {
        id : 0
      }
  },
  computed: {
    email(){
      return this.$store.state.email
    }
  },
  methods:{
    addToBookmark(id){
      // console.log('movie item', id);
      this.$store.dispatch('addBookmark', id)
    }
  },
  created() {
    this.$store.dispatch("getqrCode");
  },
}
</script>

<style>
</style>