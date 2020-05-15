<template>
  <div class="about">
    <vs-row>
      <vs-col vs-type="flex" vs-justify="center" vs-align="center" vs-w="3"></vs-col>
      <vs-col vs-type="flex" vs-justify="center" vs-align="center" vs-w="6" id="marginBtn">
        <vs-alert title="Error" :active="registerError" color="danger">
          <p>This account was already taken, don't quit just yet&nbsp;🥺.</p>
        </vs-alert>
      </vs-col>
      <vs-col vs-type="flex" vs-justify="center" vs-align="center" vs-w="3"></vs-col>
    </vs-row>
    <vs-row>
      <vs-col vs-type="flex" vs-justify="center" vs-align="center" vs-w="3"></vs-col>
      <vs-col vs-type="flex" vs-justify="center" vs-align="center" vs-w="6" id="marginBtn">
        <h1>Create Account</h1>
      </vs-col>
      <vs-col vs-type="flex" vs-justify="center" vs-align="center" vs-w="3"></vs-col>
    </vs-row>
    <vs-row>
      <vs-col vs-type="flex" vs-justify="center" vs-align="center" vs-w="3"></vs-col>
      <vs-col vs-type="flex" vs-justify="center" vs-align="center" vs-w="6" id="margin">
        <vs-input type="text" label-placeholder="Username" :value="username" @input="setUsername" />
      </vs-col>
      <vs-col vs-type="flex" vs-justify="center" vs-align="center" vs-w="3"></vs-col>
    </vs-row>
    <vs-row>
      <vs-col vs-type="flex" vs-justify="center" vs-align="center" vs-w="3"></vs-col>
      <vs-col vs-type="flex" vs-justify="center" vs-align="center" vs-w="6" id="margin">
        <vs-input type="email" label-placeholder="Email" :value="email" @input="setEmail" />
      </vs-col>
      <vs-col vs-type="flex" vs-justify="center" vs-align="center" vs-w="3"></vs-col>
    </vs-row>
    <vs-row>
      <vs-col vs-type="flex" vs-justify="center" vs-align="center" vs-w="3"></vs-col>
      <vs-col vs-type="flex" vs-justify="center" vs-align="center" vs-w="6" id="margin">
        <vs-input
          type="password"
          label-placeholder="Password"
          :value="password"
          @input="setPassword"
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
          @click.prevent="register"
        >Create new account</vs-button>
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
      'email', 
      'password',
      'username',
      'registerError'
    ])
  },
  methods: {
    ...mapMutations('auth', [
      'setEmail', 
      'setPassword',
      'setUsername',
    ]),
    ...mapActions('auth', [
      'register',
    ]),
  }
}
</script>