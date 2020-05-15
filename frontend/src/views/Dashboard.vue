<template>
  <div class="dashboard">
    <h1 id="margin">Dashboard page</h1>
    <vs-row vs-type="flex" vs-justify="center" vs-align="center" vs-w="12">
      <vs-col vs-type="flex" vs-justify="flex-start" vs-align="flex-start" vs-w="6" id="marginBtn">
        <ProjectsForm />
      </vs-col>
    </vs-row>
  </div>
</template>

<script>
import {  mapGetters } from 'vuex'
import router from '../router/index'
import ProjectsForm from '../components/ProjectsForm'

export default {
  components: {
    ProjectsForm
  },
  mounted() {
    if(!this.isLoggedIn) {
      return router.push('/login')
    }
  },
  computed: {
    ...mapGetters('auth', [
      'isLoggedIn'
    ])
  }
}
</script>

<style>
#margin {
  margin-top: 25px;
}
#marginBtn {
  margin-top: 60px;
}
</style>