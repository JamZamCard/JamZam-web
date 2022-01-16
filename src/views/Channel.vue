<template>
  <div class="container">
    <Channel/>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import Channel from '@/components/Channel.vue'; // @ is an alias to /src

@Options({
  components: {
    Channel,
  },
})
export default class Home extends Vue {}
</script>
