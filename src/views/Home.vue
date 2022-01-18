<template>
  <div class="container flex justify-center mt-5 shadown-lg">
    <div class="text-4xl text-gray-200">Welcome in JamZam World !</div>
  </div>
  <div class="flex justify-center">
    <div class="container border-1 bg-gray-700 border-gray-600 rounded-lg p-5 shadow-lg mt-5">

      <div class="text-gray-200">Join channel :</div>

      <div class="flex justify-center">
        <div class="flex-initial">
          <input type="text" name="message"
                 class="flex p-2 placeholder-gray-600 text-black text-18px w-full
               flex-none border rounded-l-lg focus:border-blue-300 shadow-xl bg-gray-200"
                 placeholder="Type code..." v-model="joinCode"/>
        </div>
        <div class="flex-initial">
          <div class="bg-gray-800 p-2 rounded-r-lg text-gray-200 h-11" v-on:click="joinChannel">
            Enter
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="flex justify-center">
    <div class="container border-1 bg-gray-700
    border-gray-600 rounded-lg p-5 shadow-lg mt-5">
      <div class="text-gray-200">Create channel :</div>
      <div class="flex justify-center">
        <div class="flex-initial">
          <input type="text" name="message"
                 class="flex p-2 placeholder-gray-600 text-black text-18px w-full
               flex-none border rounded-l-lg focus:border-blue-300 shadow-xl bg-gray-200"
                 placeholder="Name your channel..." v-model="createCode"/>
        </div>
        <div class="flex-initial">
          <div class="bg-gray-800 p-2 rounded-r-lg text-gray-200 h-11" v-on:click="createChannel">
            Enter
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
// eslint-disable-next-line import/no-cycle
import router from '@/router';

@Options({
  components: {},
  data() {
    return {
      joinCode: '',
      createCode: '',
    };
  },
  methods: {
    joinChannel() {
      router.push({ name: 'Channel', params: { code: this.joinCode } });
    },

    createChannel() {
      router.push({ name: 'Channel', params: { code: this.createCode } });
    },
  },
})
export default class Home extends Vue {
}
</script>
