<template>
  <div class='container fade-content l_contact'>
    <div class=''>
          <br /><br /><br />
    <h3>CONTACT ME</h3>
    <br />

    <form name="sentMessage" id="contactForm" novalidate="novalidate">
      <div class="control-group">
        <div class="form-group floating-label-form-group controls mb-0 pb-2">
          <label>Name</label>
          <input
            class="form-control"
            id="name"
            type="text"
            placeholder="Name"
            required="required"
            data-validation-required-message="Please enter your name."
            aria-invalid="false"
          />
          <p class="help-block text-danger"></p>
        </div>
      </div>
      <div class="control-group">
        <div class="form-group floating-label-form-group controls mb-0 pb-2">
          <label>{{ $t('email') }}</label>
          <input v-model="email" v-focus v-validation
            class="form-control"
            id="email"
            type="email"
            placeholder="Email Address"
            required="required"
            data-validation-required-message="Please enter your email address."
            aria-invalid="false"
          />
          <p class="help-block text-danger"></p>
        </div>
      </div>
      <div class="control-group">
        <div class="form-group floating-label-form-group controls mb-0 pb-2">
          <label>Phone Number</label>
          <input
            class="form-control"
            id="phone"
            type="tel"
            placeholder="Phone Number"
            required="required"
            data-validation-required-message="Please enter your phone number."
            aria-invalid="false"
          />
          <p class="help-block text-danger"></p>
        </div>
      </div>
      <div class="control-group">
        <div class="form-group floating-label-form-group controls mb-0 pb-2">
          <label>Message</label>
          <textarea
            class="form-control"
            id="message"
            rows="5"
            placeholder="Message"
            required="required"
            data-validation-required-message="Please enter a message."
            aria-invalid="false"
          ></textarea>
          <p class="help-block text-danger"></p>
        </div>
      </div>
      <br />
      <div id="success"></div>
      <div class="form-group">
        <button type="submit" @click='showalert' class="btn btn-primary btn-xl" id="sendMessageButton">Send</button>
      </div>
    </form>
    </div>

  </div>
</template>

<style lang='scss'>
label{
  float:left;
}
input{
  border:1px solid #eee;
}
</style>

<script>
export default {
  data () {
    return {
      name: '',
      email: ''
    }
  },
  directives: {
    focus: {
      // directive definition
      inserted: function (el) {
        el.focus()
      }
    },
    validation: {
      update: function (el, binding, vnode) {
        var value = el.value
        var emailReg = ''
        if (value == 'test') {
          $('.text-danger').text('test')
        }
      },
      bind: function (el, binding, vnode) {
        // console.log('binding',el,binding,vnode)
      }
    }
  },
  methods: {
    showalert () {
      this.$swal('送出')
    }
  }
}
</script>
