<template>
  <div class="con-type-example">
    <vs-navbar :type="type" v-model="activeItem" class="nabarx">
      <div slot="title">
        <vs-navbar-title>{{brand}}</vs-navbar-title>
      </div>
      <vs-navbar-item index="0">
        <router-link to="/" v-if="!isLoggedIn">Home</router-link>
      </vs-navbar-item>
      <vs-navbar-item index="1">
        <router-link to="/dashboard" v-if="isLoggedIn">Dashboard</router-link>
      </vs-navbar-item>
      <vs-navbar-item index="2">
        <router-link to="/login" v-if="!isLoggedIn">Login</router-link>
      </vs-navbar-item>
      <vs-navbar-item index="3">
        <router-link to="/register" v-if="!isLoggedIn">Register</router-link>
      </vs-navbar-item>
      <vs-navbar-item index="4">
        <router-link to="/contact">Contact</router-link>
      </vs-navbar-item>
      <vs-navbar-item index="5">
        <a v-if="isLoggedIn" @click="logout">Logout</a>
      </vs-navbar-item>
    </vs-navbar>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  data:()=>({
    activeItem: 0,
    brand: 'Note it!',
    type: 'shadow',
  }),
  computed: {
    ...mapGetters('auth', [
      'isLoggedIn',
    ])
  },
  methods: {
    ...mapActions('auth', [
      'logout',
    ])
  }
}
</script>

<style lang="stylus">
.con-type-example {
  .vs-navbar {
    margin-top: 10px;
  }
}
</style>