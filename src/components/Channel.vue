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
      username: null,
      message: null,
      socket: null,
      channelCode: null,
      data: [],
    };
  },
  beforeRouteLeave() {
    this.socket.on('disconnect', () => {
      this.socket.disconnect();
      this.socket.close();
    });
  },
  mounted() {
    this.username = localStorage.getItem('username');

    this.socket = io('ws://localhost:3000/channel');
    this.socket.emit('joinChannel', { code: this.$route.params.code, username: this.username });
    this.socket.on('hasJoinChannel', (data: {code: string, username: string}) => {
      this.channelCode = data.code;
      const message = {
        sender: data.username,
        message: 'has joined channel',
        time: new Date(),
      };
      this.data.push(message);
    });

    this.socket.on('msgFromServerToClient', (msgFromServer: { sender: string, code: string, text: string }) => {
      const message = {
        sender: msgFromServer.sender,
        message: msgFromServer.text,
        time: new Date(),
      };
      this.data.push(message);
    });
  },
  methods: {
    send(messsage: string) {
      this.socket.emit('msgFromClientToServer', {
        sender: this.username,
        code: this.channelCode,
        text: this.message,
      });
      this.message = '';
    },
  },
})

export default class Channel extends Vue {
  message?: {
    sender: string
    message: string
    time: Date
  }

  socket!: Socket
}
</script>
