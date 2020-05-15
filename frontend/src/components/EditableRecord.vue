<template>
  <vs-col>
    <vs-col vs-type="flex" vs-justify="flex-start" vs-align="flex-start" vs-w="6">
      <!-- The Project Title -->
      <span v-if="!isEditMode" @click="$emit('onClick')">{{title}}</span>
      <!-- If you edit the Project Title -->
      <vs-input
        v-if="isEditMode"
        type="text"
        :value="title"
        @keyup.enter="$emit('onSave')"
        @input="$emit('onInput', $event)"
      />
    </vs-col>
    <vs-col vs-type="flex" vs-justify="flex-end" vs-align="flex-end" vs-w="6">
      <!-- Button to edit the Project title -->
      <vs-button
        class="mag-war"
        color="warning"
        type="gradient"
        v-if="!isEditMode"
        @click="$emit('onEdit')"
      >edit</vs-button>
      <!-- Button to save the edited Project Title -->
      <vs-button
        class="mag-war"
        color="success"
        type="gradient"
        v-if="isEditMode"
        @click="$emit('onSave')"
      >save</vs-button>
      <!-- Button to Delete a Project -->
      <vs-button class="mag-del" color="danger" type="gradient" @click="$emit('onDelete')">delete</vs-button>
    </vs-col>
  </vs-col>
</template>

<script>
export default {
    props: [
        'isEditMode',
        'title',
        'record',
    ],
}
</script>

<style>

</style>