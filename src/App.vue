<template >
  <router-view/>
  <!--  <Channel/>-->
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import Home from '@/views/Home.vue';
// import Channel from '@/views/Channel.vue';

@Options({
  components: {
    // Channel,
    Home,
  },
  mounted() {
    document.body.classList.add('bg-gray-800');
  },
})
export default class App extends Vue {}
</script>
