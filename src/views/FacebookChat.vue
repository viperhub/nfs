<template>
  <div>
    <div id="fb-root"></div>
    <div id="fb-customer-chat" class="fb-customerchat"></div>
  </div>
</template>

<script>
export default {
  name: 'FacebookChat',
  mounted() {
    this.addFacebookSDK()
  },
  methods: {
    addFacebookSDK() {
      const chatbox = document.getElementById('fb-customer-chat')
      chatbox.setAttribute('page_id', '109772402001877')
      chatbox.setAttribute('attribution', 'biz_inbox')
      window.fbAsyncInit = function () {
        FB.init({
          xfbml: true,
          version: 'v18.0'
        })
      }
      ;(function (d, s, id) {
        const fjs = document.getElementsByTagName(s)[0]
        if (d.getElementById(id)) return
        const js = d.createElement(s)
        js.id = id
        js.src = 'https://connect.facebook.net/vi_VN/sdk/xfbml.customerchat.js'
        fjs.parentNode.insertBefore(js, fjs)
      })(document, 'script', 'facebook-jssdk')
    }
  }
}
</script>
