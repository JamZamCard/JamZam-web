<template>
  <div class="flex justify-center">
    <div class="container ">
      <div class="bg-gray-800 rounded-xl p-8 ">
        <div class="mt-5">
          <button class="hover:bg-fuchsia-600 border-2
        border-green-500 bg-green-400 hover:bg-green-600 rounded-xl
        w-max py-2 px-3" ref="/channel">
            Go To Channel
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

@Options({
  props: {
    msg: String,
  },
})
export default class HelloWorld extends Vue {
  msg!: string
}
</script>
