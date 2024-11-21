<template>
  <form @submit.prevent="sendData">
    <input type="text" v-model="clubName" placeholder="Name" required/>
    <input type="date" v-model="clubGoals" placeholder="Goals" required/>
    <button type="submit">Send</button>
  </form>

  <Club v-for="(item, index) in clubs" :key="index" :club="item" :index="index" :deleteClub="deleteClub" @updateCheckbox="updateCheckbox"/>

</template>

<script>
import Club from './components/Club.vue'

export default {
  components: {
    Club
  },
  
  data() {
    return{
      clubs: [],
      clubName: '',
      clubGoals: '',
    }
  },
  methods: {
    sendData(){
      this.clubs.push({
        name: this.clubName,
        goals: this.clubGoals,
        is_Checked: false,
      })
    },
    deleteClub(index) {
      this.clubs.splice(index, 1);
    },

    updateCheckbox(index, checked) {
      this.clubs[index].is_Checked = checked;
    }
  }
}
</script>

