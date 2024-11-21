<script>
import axios from 'axios'

export default {
    data() {
        return {
            city: "",
            error: "",
            info: null,
            region: "",
            regions: ["USD", "GB", "EURO"]
        }
    },
    computed: {
        cityName() {
            return "«" + this.city + "»"
        },
        showUSD() {
            return "Сумма в долларах: " + this.city/7479156 * this.info.bpi.USD.rate_float
        },
        showFrank() {
            return "Сумма в франках: " + this.city/7479156 * this.info.bpi.GBP.rate_float
        },
        showEuro() {
            return "Сумма в евро: " + this.city/7479156 * this.info.bpi.EUR.rate_float
        },
       
    },
    methods: {
        getSum() {
            axios.get(`https://api.coindesk.com/v1/bpi/currentprice.json`)
                .then(res => (this.info = res.data))
        }
    }
}
</script>

<template>
    <div class="wrapper">
        <h1>Валюты</h1>
        <p>Узнать сумму покупки в разных валютах. {{ city == "" ? "" : "Ваша сумма: " + cityName }}</p>
        <input type="text" v-model="city" placeholder="Введите сумму"> 
        <select v-model="region" required>
            <option value="" disabled>Выберите Валюту</option>
            <option v-for="region in regions" :key="region" :value="region">
                {{ region }}
            </option>
        </select>
        <button @click="getSum()">Получить сумму</button>
        <p class="error">{{ error }}</p>
 
        <div v-if="info != null">
            <div v-if="region == 'USD'">
                <p>{{ showUSD }}</p>
            </div>
            <div v-if="region == 'GB'">
                <p>{{ showFrank }}</p>
            </div>
            <div v-if="region == 'EURO'">
                <p>{{ showEuro }}</p>
            </div>
        </div>
    </div>
</template>

