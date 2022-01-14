<template>
  <div class="flex justify-center">
    <div class="container ">
      <div class="bg-gray-800 rounded-xl p-8 shadow-xl">
        <p class="text-white pb-5 text-4xl">Welcome in TODO: host name</p>
        <div class="bg-black-100 rounded-xl">
          <p class="text-white" v-for="item in this.data" :key=item.id>{{ item }}</p>
        </div>
        <div class="mt-5">
          <input type="text" name="message"
                 class="mt-1 px-5 py-2 bg-white border shadow-md border-gray-300
                  placeholder-gray-400 focus:border-sky-500 focus:ring-sky-500
                  block w-full rounded-md sm:text-sm focus:ring-1"
                 placeholder="Message" v-model="this.message"/>
        </div>
        <div class="mt-5">
          <button class="hover:bg-fuchsia-600 border-2 shadow-xl
        border-green-500 bg-green-400 rounded-xl
        w-max py-2 px-3" v-on:click="send(this.message)">
            Send
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import io, { Socket } from 'socket.io-client';
import { Options, Vue } from 'vue-class-component';

@Options({
  name: 'Channel',
  data() {
    return {
      message: '',
      socket: null,
      data: [''],
    };
  },
  created() {
    this.socket = io('ws://localhost:3000');
    this.socket.on('msgFromServerToClient', (text: string) => {
      this.data.push(text);
    });
  },
  afterCreated() {
    this.socket.on('ClientConnect', (text: string) => {
      this.data.push(text);
    });

    this.socket.on('ClientDisconnect', (text: string) => {
      this.data.push(text);
    });
  },
  methods: {
    send(messsage : string) {
      this.socket.emit('msgFromClientToServer', messsage);
      this.message = '';
    },
  },
})

export default class Channel extends Vue {
  message!: string

  socket!: Socket
}
</script>
