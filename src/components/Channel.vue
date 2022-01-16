<template>
  <div class="block">
    <div class="mt-5 ">
      <p class="text-gray-200 pb-5 text-2xl ml-16">Messages</p>
    </div>

    <div class="mt-2">
      <MessageList v-bind:messages=this.data></MessageList>

    </div>
    <div class="mt-2 w-3/4 flex mx-auto">
      <input type="text" name="message"
             class="p-2 placeholder-gray-300 text-black text-18px w-full
               border rounded-lg focus:border-blue-800
               border-gray-800
               shadow-xl bg-gray-600 text-gray-200"
             placeholder="Send message..."
             v-model="this.message"
             v-on:keyup.enter="send(this.message)"/>
    </div>
  </div>
</template>

<script lang="ts">
import io, { Socket } from 'socket.io-client';
import { Options, Vue } from 'vue-class-component';
import MessageList from '@/components/MessageList.vue';

@Options({
  name: 'Channel',
  components: { MessageList },
  data() {
    return {
      message: null,
      socket: null,
      data: [],
    };
  },
  mounted() {
    this.socket = io('ws://localhost:3000');
    this.socket.on('msgFromServerToClient', (text: string) => {
      const message = {
        message: text,
        time: new Date(),
      };
      this.data.push(message);
    });

    this.socket.on('ClientConnect', (text: string) => {
      const message = {
        message: text,
        time: new Date(),
      };
      this.data.push(message);
    });

    this.socket.on('ClientDisconnect', (text: string) => {
      const message = {
        message: text,
        time: new Date(),
      };
      this.data.push(message);
    });
  },
  methods: {
    send(messsage: string) {
      this.socket.emit('msgFromClientToServer', messsage);
      this.message = '';
    },
  },
})

export default class Channel extends Vue {
  message!: string

  // data!: [{
  //   message: string,
  //   time: Date,
  // }]

  socket!: Socket
}
</script>
