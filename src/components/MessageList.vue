<template>
  <div class="flex justify-center" v-for="message in this.messages" :key="message.id">
    <Message v-bind:message=message></Message>
  </div>
</template>

<script lang="ts">
import Message from '@/components/Message.vue';
import { Options, Vue } from 'vue-class-component';

@Options({
  name: 'MessageList',
  components: { Message },
  props: {
    messages: Array,
  },
})
export default class MessageList extends Vue {}

</script>

<style scoped>

</style>
