<template>
  <vs-row vs-type="flex" vs-justify="center" vs-align="center" vs-w="12">
    <vs-col vs-type="flex" vs-justify="flex-start" vs-align="flex-start" vs-w="12">
      <!-- Add new project button -->
      <vs-button color="success" type="gradient" @click="activePrompt2 = true">Add New</vs-button>
      <!-- Dialog to insert data -->
      <vs-prompt
        color="success"
        @cancel="cancelAlert"
        @accept="$emit('create')"
        @close="closeAlert"
        :active.sync="activePrompt2"
      >
        <div class="prompt">
          <vs-input
            type="text"
            :value="value"
            @keyup.enter="$emit('create')"
            @input="$emit('onInput', $event)"
            :label-placeholder="placeholder"
          />
        </div>
      </vs-prompt>
    </vs-col>
  </vs-row>
</template>

<script>
export default {
    data() {
        return {
            activePrompt2: false,
        }
    },
    props: [
        'placeholder',
        'value',
    ],
    methods: {
     closeAlert(){
      this.$vs.notify({
        color:'primary',
        title:'Closed',
        text:'Dialog closed',
        position: 'top-center'
      })
    },
    cancelAlert(){
      this.$vs.notify({
        color:'warning',
        title:'Canceled',
        text:'Relax, it wasn\'t submited',
        position: 'top-center'
      })
    },
    }
}
</script>

<style>

</style>