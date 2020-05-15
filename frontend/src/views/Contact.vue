<template>
  <div class="about">
    <vs-row>
      <vs-col vs-type="flex" vs-justify="center" vs-align="center" vs-w="3"></vs-col>
      <vs-col vs-type="flex" vs-justify="center" vs-align="center" vs-w="6" id="marginBtn">
        <h1>Any questions</h1>
      </vs-col>
      <vs-col vs-type="flex" vs-justify="center" vs-align="center" vs-w="3"></vs-col>
    </vs-row>
    <vs-row>
      <vs-col vs-type="flex" vs-justify="center" vs-align="center" vs-w="3"></vs-col>
      <vs-col vs-type="flex" vs-justify="center" vs-align="center" vs-w="6" id="margin">
        <vs-input type="text" label-placeholder="Your email" v-model="email" />
      </vs-col>
      <vs-col vs-type="flex" vs-justify="center" vs-align="center" vs-w="3"></vs-col>
    </vs-row>
    <vs-row>
      <vs-col vs-type="flex" vs-justify="center" vs-align="center" vs-w="3"></vs-col>
      <vs-col vs-type="flex" vs-justify="center" vs-align="center" vs-w="6" id="margin">
        <vs-input type="email" label-placeholder="Subject" v-model="subject" />
      </vs-col>
      <vs-col vs-type="flex" vs-justify="center" vs-align="center" vs-w="3"></vs-col>
    </vs-row>
    <vs-row>
      <vs-col vs-type="flex" vs-justify="center" vs-align="center" vs-w="3"></vs-col>
      <vs-col vs-type="flex" vs-justify="center" vs-align="center" vs-w="6" id="margin">
        <vs-textarea
          width="300px"
          counter="300"
          :counter-danger.sync="counterDanger"
          v-model="message"
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
          @click.prevent="Mail"
        >Send it</vs-button>
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
const axios = require('axios')
const url = 'https://micro-service-email.herokuapp.com/api/v1/smtp'

export default {
  data(){
    return {
      email: '',
      subject: '',
      message: '',
      counterDanger: false
    }
  },
  methods: {
    Mail(){
      axios.post(url, {
        websiteEmail: 'avizinhadochico@gmail.com',
        email: this.email,
        subject: this.subject,
        message: this.message
      })
      .then(() => {
        this.$vs.notify({
        time:6000,
        title:'Email sent!',
        text:'Your email was sent with success.',
        color:'success',
        position:'top-right'
        })
      })
      .catch(err => console.log(err))
    }
  }
}
</script>