<template>
    <div class="club">
        <button @click="deleteClub(index)">Delete!</button>
        <h3 class="club2" :class="{'new-bg': club.is_Checked}">I need to {{ club.name }}</h3>
        <p class="club2" :class="{'new-bg': club.is_Checked}">at {{ club.goals }}</p>
        <input type="checkbox" :checked="club.is_Checked" @change="handleChangeBox($event)"/>
    </div>
</template>

<script>
export default {
    name: 'MyClubComponent',
    props: {
        club: {
            type: Object,
            required : true
        },
        index: {
            type: Number,
            required : true
        },
        deleteClub: {
            type: Function,
            required : true
        }

    },
    methods: {
      handleChangeBox(event) {
        this.$emit('updateCheckbox', this.index, event.target.checked);
      }
    }
    
}
</script>

<style scoped>
.club {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.club button {
  margin-right: .5rem;
  background-color: #ff7b00;
  color: white;
  font-size: 16px;
  border: none;
  cursor: pointer;
  padding: 8px 16px;
  border-radius: 4px;
  transition: all 0.3s ease;
}

.club h3 {
  margin: 0;
  font-size: 24px;
  line-height: 1.5em;
  color: black;
}

.club p {
  margin: 0;
  font-size: 16px;
  line-height: 1.5em;
  color: gray;
  margin-left: 5px;
}
.club2.new-bg {
  background-color: #ef3038;
  color: #fff;
  text-decoration: line-through;
  color: gray;
}
</style>