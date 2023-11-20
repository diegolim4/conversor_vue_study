<template>
  <div class="conversor">
    <h3>{{ moedaA }} para {{ moedaB }}</h3>
    <input type="text" v-model="moedaA_value" v-bind:placeholder="moedaA" />
    <input type="button" value="Converter" v-on:click="converter" />
    <h4>{{ moedaB_value }}</h4>
  </div>
</template>

<script>
import api from '@/services/api';
export default {
  // o nome da classe que que ser no padrão abaixo

  name: 'Conversor-moedas',
  props: ['moedaA', 'moedaB'],

  data() {
    return {
      moedaA_value: '',
      moedaB_value: 0,
    };
  },

  methods: {


  async converter() {
    let pair = `${this.moedaA}_${this.moedaB}`;


    async function getCurrentyCoin(p) {
      try {
        let response = await api.get(
          `${p}?token=4478|Hx0F45aN3Jk5VzifsQWCnHC9lj4WQ25r`
        );
        return response.data;
      } catch (error) {
        console.error('Erro ao obter dados da API:', error);
      }
    }

    try {
      let coinPrice = await getCurrentyCoin(pair);

      this.moedaB_value = parseFloat(coinPrice.USD_BRL.price).toFixed(2)
    } catch (error) {

      console.error('Erro ao obter preço da moeda:', error);
    }
  },
},

};
</script>

<style scoped>
.conversor {
  padding: 20px;
  max-width: 300px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.6);
  margin: 5%;
}
</style>
