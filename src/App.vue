<template >
    <Channel/>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import Channel from '@/views/Channel.vue';

@Options({
  components: {
    Channel,
  },
  mounted() {
    document.body.classList.add('bg-gray-100');
  },
})
export default class Home extends Vue {}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
