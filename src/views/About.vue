<template>
  <div class="flex justify-center">
    <div class="container ">
      <div class="bg-gray-100 rounded-xl p-8 dark:bg-gray-800">
        <p>Welcome in TODO: host name</p>
        <div class="bg-black-100 rounded-xl ">
          <ul class="bg-white"></ul>
        </div>
        <input type="text" name="message"
               class="mt-1 px-3 py-2 bg-white border shadow-sm border-gray-300
                  placeholder-gray-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500
                  block w-full rounded-md sm:text-sm focus:ring-1"
               placeholder="Message" v-model="msg"/>
        <button class="dark:md:hover:bg-fuchsia-600" v-on:click="send">
          Send
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import io from 'socket.io-client';

export default {
  name: 'About',
  data() {
    return {
      msg: '',
      socket: null,
    };
  },
  created() {
    this.socket = io('ws://localhost:3000');
  },
  methods: {
    send() {
      this.socket.on('msgFromServerToClient', (text) => {
        const el = document.createElement('li');
        el.innerHTML = text;
        document.querySelector('ul')
          .appendChild(el);
      });

      document.querySelector('button').onclick = () => {
        this.socket.emit('msgFromClientToServer', this.msg);
      };
    },
  },
};
</script>
