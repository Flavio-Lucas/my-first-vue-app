import Vue from "vue"
import Vuex from "vuex"


Vue.use(Vuex)


export default new Vuex.Store({
  state: {
    cards: [
      { id: 1, title: 'Título do card 1', url: 'https://images.tcdn.com.br/img/img_prod/491560/sal_grosso_azul_claro_100g_3412_1_20180308160645.jpg' },
      { id: 2, title: 'Título do card 2', url: 'https://images.tcdn.com.br/img/img_prod/491560/sal_grosso_azul_claro_100g_3412_1_20180308160645.jpg' },
      { id: 3, title: 'Título do card 3', url: 'https://images.tcdn.com.br/img/img_prod/491560/sal_grosso_azul_claro_100g_3412_1_20180308160645.jpg' },
      { id: 4, title: 'Título do card 4', url: 'https://images.tcdn.com.br/img/img_prod/491560/sal_grosso_azul_claro_100g_3412_1_20180308160645.jpg' },
      { id: 5, title: 'Título do card 5', url: 'https://images.tcdn.com.br/img/img_prod/491560/sal_grosso_azul_claro_100g_3412_1_20180308160645.jpg' },
      { id: 6, title: 'Título do card 6', url: 'https://images.tcdn.com.br/img/img_prod/491560/sal_grosso_azul_claro_100g_3412_1_20180308160645.jpg' },
      { id: 7, title: 'Título do card 7', url: 'https://images.tcdn.com.br/img/img_prod/491560/sal_grosso_azul_claro_100g_3412_1_20180308160645.jpg' },
      { id: 8, title: 'Título do card 8', url: 'https://images.tcdn.com.br/img/img_prod/491560/sal_grosso_azul_claro_100g_3412_1_20180308160645.jpg' },
      { id: 9, title: 'Título do card 9', url: 'https://images.tcdn.com.br/img/img_prod/491560/sal_grosso_azul_claro_100g_3412_1_20180308160645.jpg' },
      { id:10, title: 'Título do card 10', url: 'https://images.tcdn.com.br/img/img_prod/491560/sal_grosso_azul_claro_100g_3412_1_20180308160645.jpg' },
      { id:11, title: 'Título do card 11', url: 'https://images.tcdn.com.br/img/img_prod/491560/sal_grosso_azul_claro_100g_3412_1_20180308160645.jpg' },
      { id:12, title: 'Título do card 12', url: 'https://images.tcdn.com.br/img/img_prod/491560/sal_grosso_azul_claro_100g_3412_1_20180308160645.jpg' },
      { id:13, title: 'Título do card 13', url: 'https://images.tcdn.com.br/img/img_prod/491560/sal_grosso_azul_claro_100g_3412_1_20180308160645.jpg' },
      { id:14, title: 'Título do card 14', url: 'https://images.tcdn.com.br/img/img_prod/491560/sal_grosso_azul_claro_100g_3412_1_20180308160645.jpg' },
      { id:15, title: 'Título do card 15', url: 'https://images.tcdn.com.br/img/img_prod/491560/sal_grosso_azul_claro_100g_3412_1_20180308160645.jpg' },
    ],

    userData: { name: "Flávio Lucas", age: "21", date: "17/02/2000" }
  },
  mutations: {},
  actions: {},
  getters: {}
});
