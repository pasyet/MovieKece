import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import Swal from 'sweetalert2'

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        // baseUrl: "http://localhost:3000",
        baseUrl: "https://biskopkece.herokuapp.com",
        email: '',
        movies: [],
        bookmark: [],
        totalPage: 0,
        movie: [],
        qrcode: []
    },
    mutations: {
        SET_EMAIL(state, payload) {
            state.email = payload
        },
        SET_MOVIES(state, payload) {
            state.movies = payload
        },
        SET_BOOKMARK(state, payload) {
            state.bookmark = payload
        },
        SET_TOTALPAGE(state, payload) {
            state.totalPage = payload
        },
        SET_MOVIE(state, payload) {
            state.movie = payload
        },
        SET_QRCODE(state, payload) {
            state.qrcode = payload
        }
    },
    actions: {
        login(context, payload) {
            return axios({
                url: `${this.state.baseUrl}/customers/login`,
                method: 'POST',
                data: payload
            })
        },
        onSignIn(context, idToken) {
            axios({
                url: `${this.state.baseUrl}/customers/google-sign-in`,
                method: 'POST',
                data: {
                    id_token: idToken
                }
            })
                .then(({ data }) => {
                    localStorage.setItem('access_token', data.access_token)
                    localStorage.setItem('email', data.email)
                    context.commit('SET_EMAIL', data.email)
                    Swal.fire({
                        icon: 'success',
                        title: `Welcome to ${this.data.email}`,
                        showConfirmButton: false,
                        timer: 1500
                    })
                })
                .catch((error) => {
                    console.log(error.response)
                })
        },
        register(context, newUser) {
            axios({
                url: `${this.state.baseUrl}/customers/register`,
                method: 'POST',
                data: {
                    email: newUser.email,
                    password: newUser.password,
                    phoneNumber: newUser.phoneNumber,
                    address: newUser.address
                }
            })
                .then(() => {
                    Swal.fire({
                        icon: 'success',
                        title: 'Register Success',
                        showConfirmButton: false,
                        timer: 1500
                    })
                })
                .catch((error) => {
                    Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: error.response.data.messages
                    })
                })
        },
        getMovies(context) {
            axios({
                url: `${this.state.baseUrl}/movies/pub/pag`,
                method: 'GET'
            })
                .then(({ data }) => {
                    // console.log('test');
                    // console.log(data.Movies);
                    context.commit('SET_MOVIES', data.Movies)
                    context.commit('SET_TOTALPAGE', data.totalPages)
                })
                .catch((error) => {
                    console.log(error)
                })
        },
        MoviesPage(context, payload) {
            axios({
                url: `${this.state.baseUrl}/movies/pub/pag?page=${payload.page}&genre=${payload.genre}&title=${payload.title}`,
                method: 'GET'
            })
                .then(({ data }) => {
                    // console.log(data);
                    context.commit('SET_MOVIES', data.Movies)
                    context.commit('SET_TOTALPAGE', data.totalPage)
                })
                .catch((err) => {
                    console.log(err);
                });
        },
        addBookmark(context,id) {
            // console.log(id);
            axios({
                url: `${this.state.baseUrl}/movies/${id}/bookmark`,
                method: 'POST',
                headers: {
                    access_token: localStorage.getItem('access_token')
                }
            })
                .then(({data}) => {
                    Swal.fire({
                        icon: 'success',
                        title: `Movie with id ${data.data.movieId} added to bookmark`,
                        showConfirmButton: false,
                        timer: 1500
                    })
                })
                .catch((responseJSON) => {
                    const messages = responseJSON.response.data.messages;
                    // console.log(messages)
                    Swal.fire({
                        icon: 'error',
                        title: messages,
                        showConfirmButton: false,
                        timer: 1500
                    })
                })
        },
        getBookmark(context) {
            axios({
                url: `${this.state.baseUrl}/movies/bookmark`,
                method: 'GET',
                headers: {
                    access_token: localStorage.getItem('access_token')
                }
            })
                .then(({ data }) => {
                    // console.log(data[0].User.email);
                    localStorage.setItem('email', data[0].User.email)
                    context.commit('SET_EMAIL', data[0].User.email)
                    context.commit('SET_BOOKMARK', data)
                })
                .catch((error) => {
                    console.log(error)
                })
        },
        detailMovies(context, id) {
            axios({
                url: `${this.state.baseUrl}/movies/pub/${id}`,
                method: 'GET'
            })
                .then(({ data }) => {
                    // console.log(data);
                    context.commit('SET_MOVIE', data.movie)
                })
                .catch((error) => {
                    console.log(error)
                })
        },
        getqrCode(context, id) {
            // console.log(id);
            axios({
                url: `https://api.happi.dev/v1/qrcode?data=${this.state.baseUrl}/detail/${id}&width=&dots=000000&bg=FFFFFF&apikey=ddbf4bZrnLOMh3TboEIceE7urXDLqrwqRBGGl0zIdYNaD31ckNpTIybR`,
                method: 'GET'
            })
                .then(({ data }) => {
                    console.log(data.qrcode);
                    context.commit('SET_QRCODE', data.qrcode)
                })
                .catch((err) => {
                    // console.log(err);
                    Swal.fire({
                        icon: 'error',
                        title: 'QR CODE ERROR',
                        showConfirmButton: false,
                        timer: 1500
                    })
                })
        }
    }
})