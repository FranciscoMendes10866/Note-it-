<template>
  <div class="about">
    <vs-row>
      <vs-col vs-type="flex" vs-justify="center" vs-align="center" vs-w="3"></vs-col>
      <vs-col vs-type="flex" vs-justify="center" vs-align="center" vs-w="6" id="marginBtn">
        <vs-alert title="Error" :active="loginError" color="danger">
          <p>An error occured when trying to login to your account&nbsp;🥺.</p>
        </vs-alert>
      </vs-col>
      <vs-col vs-type="flex" vs-justify="center" vs-align="center" vs-w="3"></vs-col>
    </vs-row>
    <vs-row>
      <vs-col vs-type="flex" vs-justify="center" vs-align="center" vs-w="3"></vs-col>
      <vs-col vs-type="flex" vs-justify="center" vs-align="center" vs-w="6" id="marginBtn">
        <h1>Login</h1>
      </vs-col>
      <vs-col vs-type="flex" vs-justify="center" vs-align="center" vs-w="3"></vs-col>
    </vs-row>
    <vs-row>
      <vs-col vs-type="flex" vs-justify="center" vs-align="center" vs-w="3"></vs-col>
      <vs-col vs-type="flex" vs-justify="center" vs-align="center" vs-w="6" id="margin">
        <vs-input
          type="email"
          label-placeholder="Email"
          :value="loginEmail"
          @input="setLoginEmail"
        />
      </vs-col>
      <vs-col vs-type="flex" vs-justify="center" vs-align="center" vs-w="3"></vs-col>
    </vs-row>
    <vs-row>
      <vs-col vs-type="flex" vs-justify="center" vs-align="center" vs-w="3"></vs-col>
      <vs-col vs-type="flex" vs-justify="center" vs-align="center" vs-w="6" id="margin">
        <vs-input
          type="password"
          label-placeholder="Password"
          :value="loginPassword"
          @input="setLoginPassword"
        />
      </vs-col>
      <vs-col vs-type="flex" vs-justify="center" vs-align="center" vs-w="3"></vs-col>
    </vs-row>
    <vs-row>
      <vs-col vs-type="flex" vs-justify="center" vs-align="center" vs-w="3"></vs-col>
      <vs-col vs-type="flex" vs-justify="center" vs-align="center" vs-w="6" id="marginBtn">
        <vs-button
          color="#3dd495"
          gradient-color-secondary="rgb(130, 207, 23)"
          type="gradient"
          @click="login"
        >Sign In</vs-button>
      </vs-col>
      <vs-col vs-type="flex" vs-justify="center" vs-align="center" vs-w="3"></vs-col>
    </vs-row>
  </div>
</template>

<style>
#margin {
  margin-top: 25px;
}
#marginBtn {
  margin-top: 45px;
}
</style>

<script>
import { mapState, mapMutations, mapActions } from 'vuex'

export default {
  computed: {
    ...mapState('auth', [
      'loginEmail', 
      'loginPassword',
      'loginError'
    ])
  },
  methods: {
    ...mapMutations('auth', [
      'setLoginEmail', 
      'setLoginPassword'
    ]),
    ...mapActions('auth', [
      'login',
    ]),
  }
}
</script>