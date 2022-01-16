<template>
  <div class="bg-white rounded-xl w-3/4 mb-4 p-3 shadow-lg">
    <input type="text" name="message"
           class="mt-1 px-5 py-2 bg-white border shadow-md border-gray-300
                  placeholder-gray-400 focus:border-sky-500 focus:ring-sky-500
                  block w-full rounded-md sm:text-sm focus:ring-1"
           placeholder="Send message..."
           v-model="this.message"
           v-on:keyup.enter="send(this.message)"/>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

@Options({
  name: 'Message',
})
export default class SendMessage extends Vue {
}

</script>

<style scoped>

</style>
