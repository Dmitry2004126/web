<script>
import axios from 'axios'

export default {
    data() {
        return {
            city: "",
            error: "",
            info: null,
            region: "", 
            regions: [],
        }
    },
    computed: {
        cityName() {
            return "«" + this.city + "»"
        },
        showTemp() {
            return "Температура: " + this.info.main.temp
        },
        showFeelsLike() {
            return "Ощущается как: " + this.info.main.feels_like
        },
        showMinTemp() {
            return "Минимальная температура: " + this.info.main.temp_min
        },
        showMaxTemp() {
            return "Максимальная температура: " + this.info.main.temp_max
        },
    },
    methods: {
        getWeather2() {
            if(this.city.trim().length < 2) {
                this.error = "Нужно название более одного символа :)"
                return false
            }

            this.error = ""
            axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${this.city}&units=metric&appid=5c740d036b809038965eb177e1e0c81f`)
                .then(res => (this.info = res.data))
        },
    getWeather3(){
        if(this.region.trim().length < 2) {
                this.error = "Нужно название более одного символа :)"
                return false
            }
            console.log(this.region)

            this.error = ""
            axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${this.region}&units=metric&appid=5c740d036b809038965eb177e1e0c81f`)
                .then(res => {
                    this.info = res.data;
                    this.error = "";
                })
                .catch(error => {
                    this.info = null;
                    this.error = "No such region in our database sorry";
                })
        
    },

    
        loadRegions() {
      axios.get('/russia.json') 
        .then(res => {
          const data = res.data;

          const regions = [...new Set(data.map(item => item.region))];
          this.regions = regions;

        
        })
        .catch(error => {
          console.error("Ошибка при загрузке регионов:", error);
        });
    }
  },
  mounted() {
    this.loadRegions();
  }
}
</script>

<template>
    <div class="wrapper">
        <h1>Погодное приложение</h1>
        <p>Узнать погоду в {{ city == "" ? "вашем городе" : cityName }}</p>

        <select v-model="region" required>
            <option value="" disabled>Выберите регион</option>
            <option v-for="region in regions" :key="region" :value="region">
                {{ region }}
            </option>
        </select>
        <button v-if="region != ''" @click="getWeather3()">Получить погоду</button>

        <input type="text" v-model="city" placeholder="Введите город">
        <button v-if="city != ''" @click="getWeather2()">Получить погоду</button>
        <button disabled v-else>Введите название города</button>
        <p class="error">{{ error }}</p>
        
        <div v-if="info != null">
            <p>{{ showTemp }}</p>
            <p>{{ showFeelsLike }}</p>
            <p>{{ showMinTemp }}</p>
            <p>{{ showMaxTemp }}</p>
        </div>
    </div>
</template>

<style scoped>
.error {
    color: #d03939;
}

.wrapper {
    width: 900px;
    height: 500px;
    border-radius: 50px;
    padding: 20px;
    background: #1f0f24;
    text-align: center;
    color: #fff;
}

.wrapper h1 {
    margin-top: 50px;
}

.wrapper p {
    margin-top: 20px;
}

.wrapper input {
    margin-top: 30px;
    background: transparent;
    border: 0;
    border-bottom: 2px solid #110813;
    color: #fcfcfc;
    font-size: 14px;
    padding: 5px 8px;
    outline: none;
}

.wrapper input:focus {
    border-bottom-color: #6e2d7d;
}

.wrapper button:disabled {
    background: #746027;
    cursor: not-allowed;
}

.wrapper button {
    background: #e3bc4b;
    color: #fff;
    border-radius: 10px;
    border: 2px solid #b99935;
    padding: 10px 15px;
    margin-left: 20px;
    cursor: pointer;
    transition: transform 500ms ease;
}

.wrapper button:hover {
    transform: scale(1.1) translateY(-5px);
}
</style>
