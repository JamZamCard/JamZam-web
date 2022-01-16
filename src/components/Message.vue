<template>
  <div class="bg-gray-700 rounded-xl w-3/4 mb-4 p-3 shadow-xl flex">
    <div class="mr-5 ">
      <img class="h-16 w-16 rounded-full"
           :src="require('../assets/mikasa-chan.jpg')" alt="" >
    </div>
    <div class="w-full">
      <p class="flex-wrap font-bold text-left text-blue-500">{{ idUser }}</p>
      <p class="flex-wrap text-md text-left text-gray-300">{{ messageComputed }}</p>
      <p class="flex-wrap text-md text-right text-gray-500">{{ formatTime }}</p>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import moment from 'moment';

@Options({
  name: 'Message',
  props: {
    message: {
      message: '',
      time: Date,
    },
  },
  data() {
    return {
      currentTime: null,
    };
  },
  created() {
    this.currentTime = moment(new Date());
    setInterval(() => this.updateCurrentTime(), 1 * 1000);
  },
  computed: {
    idUser() {
      return this.message.message.split(' ')[0];
    },
    messageComputed() {
      return this.message.message.substring(this.idUser.length + 1);
    },
    formatTime() {
      const timeMoment = moment(this.message.time);
      return this.currentTime.diff(timeMoment, 'minutes') !== 0 ? `${this.currentTime.diff(timeMoment, 'minutes')} min ago` : 'now';
    },
  },
  methods: {
    updateCurrentTime() {
      this.currentTime = moment(new Date());
    },
  },
})
export default class Message extends Vue {
}

</script>

<style scoped>

</style>
