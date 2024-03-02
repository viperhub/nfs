<template>
  <div class="fixed bottom-20 left-4">
    <div class="flex flex-col items-center justify-center">
      <div
        class="mr-2 px-1 text-xl rounded-full transform duration-500 hover:scale-125"
        @click="goZalo"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          width="60"
          height="60"
          viewBox="0 0 48 48"
        >
          <path
            fill="#2962ff"
            d="M15,36V6.827l-1.211-0.811C8.64,8.083,5,13.112,5,19v10c0,7.732,6.268,14,14,14h10	c4.722,0,8.883-2.348,11.417-5.931V36H15z"
          ></path>
          <path
            fill="#eee"
            d="M29,5H19c-1.845,0-3.601,0.366-5.214,1.014C10.453,9.25,8,14.528,8,19	c0,6.771,0.936,10.735,3.712,14.607c0.216,0.301,0.357,0.653,0.376,1.022c0.043,0.835-0.129,2.365-1.634,3.742	c-0.162,0.148-0.059,0.419,0.16,0.428c0.942,0.041,2.843-0.014,4.797-0.877c0.557-0.246,1.191-0.203,1.729,0.083	C20.453,39.764,24.333,40,28,40c4.676,0,9.339-1.04,12.417-2.916C42.038,34.799,43,32.014,43,29V19C43,11.268,36.732,5,29,5z"
          ></path>
          <path
            fill="#2962ff"
            d="M36.75,27C34.683,27,33,25.317,33,23.25s1.683-3.75,3.75-3.75s3.75,1.683,3.75,3.75	S38.817,27,36.75,27z M36.75,21c-1.24,0-2.25,1.01-2.25,2.25s1.01,2.25,2.25,2.25S39,24.49,39,23.25S37.99,21,36.75,21z"
          ></path>
          <path fill="#2962ff" d="M31.5,27h-1c-0.276,0-0.5-0.224-0.5-0.5V18h1.5V27z"></path>
          <path
            fill="#2962ff"
            d="M27,19.75v0.519c-0.629-0.476-1.403-0.769-2.25-0.769c-2.067,0-3.75,1.683-3.75,3.75	S22.683,27,24.75,27c0.847,0,1.621-0.293,2.25-0.769V26.5c0,0.276,0.224,0.5,0.5,0.5h1v-7.25H27z M24.75,25.5	c-1.24,0-2.25-1.01-2.25-2.25S23.51,21,24.75,21S27,22.01,27,23.25S25.99,25.5,24.75,25.5z"
          ></path>
          <path
            fill="#2962ff"
            d="M21.25,18h-8v1.5h5.321L13,26h0.026c-0.163,0.211-0.276,0.463-0.276,0.75V27h7.5	c0.276,0,0.5-0.224,0.5-0.5v-1h-5.321L21,19h-0.026c0.163-0.211,0.276-0.463,0.276-0.75V18z"
          ></path>
        </svg>
      </div>
      <div class="mr-2 px-1 text-xl rounded-full transform duration-500 hover:scale-125">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          width="55"
          height="55"
          viewBox="0,0,256,256"
          @click="goFacebook"
        >
          <g
            fill="#4776f1"
            fill-rule="nonzero"
            stroke="none"
            stroke-width="1"
            stroke-linecap="butt"
            stroke-linejoin="miter"
            stroke-miterlimit="10"
            stroke-dasharray=""
            stroke-dashoffset="0"
            font-family="none"
            font-weight="bold"
            font-size="none"
            text-anchor="end"
            style="mix-blend-mode: normal"
          >
            <g transform="scale(5.12,5.12)">
              <path
                d="M41,4h-32c-2.76,0 -5,2.24 -5,5v32c0,2.76 2.24,5 5,5h32c2.76,0 5,-2.24 5,-5v-32c0,-2.76 -2.24,-5 -5,-5zM37,19h-2c-2.14,0 -3,0.5 -3,2v3h5l-1,5h-4v15h-5v-15h-4v-5h4v-3c0,-4 2,-7 6,-7c2.9,0 4,1 4,1z"
              ></path>
            </g>
          </g>
        </svg>
      </div>
    </div>
  </div>

  <div class="fixed bottom-4 left-4">
    <div
      class="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded-full shadow-lg"
    >
      <div class="flex flex-nowrap items-center justify-center" @click="call">
        <div
          class="mr-2 px-1 text-xl rounded-full bg-white text-orange-500 transform duration-500 hover:scale-125"
        >
          <font-awesome-icon :icon="['fas', 'phone']" />
        </div>
        0968959567
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const goFacebook = () => {
  window.open('https://www.facebook.com/NAfulfillment/ ', '_blank')
}

const call = () => {
  window.open('tel:0968959567')
}

const goZalo = () => {
  window.open('https://zalo.me/0968959567', '_blank')
}
</script>
