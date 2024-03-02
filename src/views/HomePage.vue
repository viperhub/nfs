<script setup lang="ts">
import NavBar from '@/components/commons/layout/public/NavBar.vue'
import SessionContent from '@/components/commons/layout/public/SessionContent.vue'
import { ref, computed } from 'vue'
import FooterContent from '@/components/commons/layout/public/FooterContent.vue'
import FloatingContent from '@/components/commons/layout/public/FloatingContent.vue'

interface Slide {
  title: string
  content: string
  images: string
}

const slides: Slide[] = [
  {
    title: 'Dịch vụ hậu cần Fulfillment',
    content:
      '<div><p>NA Fulfillment sẽ hỗ trợ khách hàng thành lập đội ngũ nội bộ tại thị trường Đông Nam Á, bao gồm:</p><ul><li>Hoạt động văn phòng, kho bãi</li><li>Tuyển dụng và đào tạo Telesale, CSR, Bill of Lading, Logistics Team - Hồ sơ doanh nghiệp, thủ tục thuế, thủ tục pháp lý</li><li>Đăng ký tài khoản VIP riêng tại các đơn vị vận chuyển lớn như J&T, Ninja, Flash với mức chiết khấu cao 50% phí vận chuyển và đồng giá 1,5% phí COD</li></ul><p>Sau đó, NA Fulfillment sẽ hỗ trợ khách hàng vận hành đội ngũ nội bộ cũng như xử lý các vấn đề phát sinh tại Thailand, Malaysia, Philippines.</p></div>',
    images: 'images/slide-01.jpg'
  },
  {
    title: 'FULFILLMENT SERVICE',
    content:
      '<div><p>NA cung cấp các dịch vụ hoàn thiện đơn hàng bao gồm:</p> <ul > <li>Telesales</li><li>Chat mess</li><li>Chăm sóc khách hàng</li><li>Logistics</li><li>Storage</li></ul><p >NA Fulfillment luôn tự hào với đội ngũ vận hành chuyên nghiệp, có nhiều năm kinh nghiệm và hỗ trợ hàng chục công ty với 400.000 đơn hàng tại Thailand, Malaysia, Philippines.</p></div>',
    images: 'images/slide-02.jpg'
  },
  {
    title: 'DỊCH VỤ VẬN CHUYỂN QUỐC TẾ',
    content:
      '<div><p>Hiện nay NA Fulfillment là một trong những đại lý lớn về vận chuyển quốc tế nên giá vận chuyển luôn được đảm bảo tối ưu nhất cho khách hàng trong hệ thống NA như sau:</p> <ul > <li>Vận chuyển Trung Quốc, Việt Nam</li><li>Vận chuyển về Việt Nam Thailand, Malaysia, Philippines</li></ul></div>',
    images: 'images/slide-03.jpg'
  },
  {
    title: 'DỊCH VỤ VẬN CHUYỂN QUỐC TẾ',
    content:
      '<div><p>Hiện nay NA Fulfillment là một trong những đại lý lớn về vận chuyển quốc tế nên giá vận chuyển luôn được đảm bảo tối ưu nhất cho khách hàng trong hệ thống NA như sau:</p> <ul > <li>Vận chuyển Trung Quốc, Việt Nam</li><li>Vận chuyển về Việt Nam Thailand, Malaysia, Philippines</li></ul></div>',
    images: 'images/slide-03.jpg'
  },
  {
    title: 'HỖ TRỢ KIỂM TRA THỊ TRƯỜNG MIỄN PHÍ',
    content:
      '<div><p>Đối với mỗi sản phẩm, ngành hàng khách hàng, cách thức thâm nhập thị trường và thử nghiệm sản  luôn khác nhau. Nhận thấy điều đó, NA Fulfillment sẽ hỗ trợ tìm kiếm và thử nghiệm thị trường MIỄN PHÍ cho khách hàng, giúp bạn tối ưu hóa chi phí và thời gian thử nghiệm thị trường.</p></div>',
    images: 'images/slide-04.jpeg'
  }
]

const currentIndex = ref(0)

const nextSlide = () => {
  currentIndex.value = (currentIndex.value + 1) % slides.length
}

const prevSlide = () => {
  currentIndex.value = (currentIndex.value - 1 + slides.length) % slides.length
}

const autoNextSlide = () => {
  setInterval(() => {
    nextSlide()
  }, 6000)
}

autoNextSlide()

const transform = computed(() => `translateX(-${currentIndex.value * 100}%)`)

const showServiceButton1 = ref<boolean>(false)
const showServiceButton2 = ref<boolean>(false)
const showServiceButton3 = ref<boolean>(false)
const showServiceButton4 = ref<boolean>(false)
</script>

<template>
  <NavBar />
  <header>
    <div class="relative">
      <div class="overflow-hidden">
        <div class="flex transition-transform duration-500" :style="{ transform: transform }">
          <div v-for="(slide, index) in slides" :key="index" class="w-full flex-shrink-0">
            <div
              class="bg-gray-200 p-4 h-[70vh] backdrop-filter backdrop-blur-lg bg-opacity-50 flex flex-col justify-center items-start text-white transition duration-500 hover:bg-opacity-70"
              :style="{
                backgroundImage: `url(${slide.images})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
              }"
            >
              <div class="container mx-auto">
                <div
                  v-motion-roll-left
                  class="w-full md:w-4/6 bg-black/30 rounded-md backdrop-filter backdrop-blur-md bg-opacity-75 p-4"
                >
                  <div class="mb-4">
                    <h1 class="text-4xl font-bold text-orange-500 typing">
                      {{ slide.title }}
                    </h1>
                  </div>
                  <div class="mt-4 w-full md:w-3/4">
                    <p
                      class="text-sm md:text-base text-white transition duration-500"
                      v-html="slide.content"
                    ></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <button
        class="absolute top-1/2 left-0 transform -translate-y-1/2 px-2 py-1 bg-gray-500/30 text-white rounded-full ml-5"
        @click="prevSlide"
      >
        <font-awesome-icon :icon="['fas', 'chevron-left']" />
      </button>
      <button
        class="absolute top-1/2 right-0 transform -translate-y-1/2 px-2 py-1 bg-gray-500/30 text-white rounded-full mr-5"
        @click="nextSlide"
      >
        <font-awesome-icon :icon="['fas', 'chevron-right']" />
      </button>
    </div>
  </header>

  <SessionContent title="Giới thiệu về chúng tôi" description="">
    <div class="flex flex-col md:flex-row rounded-xl bg-clip-border text-gray-700">
      <div
        v-motion-roll-left
        class="flex-shrink-0 m-0 overflow-hidden rounded-xl bg-clip-border text-gray-700 md:sticky md:top-0 md:z-10 w-full h-[480px] md:w-[480px] md:h-full"
        :style="{
          backgroundImage: 'url(/images/about.jpeg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }"
        data-aos="fade-right"
      >
        <div class="image-container backdrop-blur-3xl backdrop-saturate-900">
          <img
            src="/images/about.jpeg"
            alt="image"
            class="w-[500px] h-[480px] object-contain object-center"
          />
        </div>
      </div>
      <div
        v-motion-roll-right
        class="md:max-h-[480px] md:overflow-auto px-6 py-2 sm:px-4 md:px-10 w-full block font-sans text-base font-normal leading-relaxed text-gray-700 antialiased transition duration-500 hover:scale-105 hover:max-h-100 md:expand-on-hover"
        data-aos="fade-left"
      >
        <div>
          <h2 class="text-xl font-bold text-orange-500">
            NA Fulfillment - Your Trusted Fulfillment Partner
          </h2>
          <p class="text-md mb-6">
            Với kinh nghiệm 4 năm làm việc tại thị trường Fulfillment Thái Lan – Philippines –
            Malaysia – Lào, chúng tôi luôn tự hào là người bạn đồng hành uy tín và tận tâm, mang đến
            cho khách hàng sự hài lòng thông qua những trải nghiệm chất lượng. chất lượng ở một mức
            giá hợp lý.
          </p>

          <p class="text-md mb-6">Các dịch vụ của chúng tôi bao gồm:</p>

          <ul class="list-disc ml-8 mb-6">
            <li>Hỗ trợ SETUP các công ty thương mại điện tử</li>
            <li>
              Cung cấp dịch vụ hoàn thiện đơn hàng từ kho bãi, telesale, chăm sóc khách hàng, chuyển
              tiền về Việt Nam và các văn bản pháp luật.
            </li>
            <li>Cung cấp dịch vụ vận chuyển quốc tế với GIÁ RẺ nhất thị trường</li>
            <li>
              Thuê tài khoản vận chuyển nội địa như J&T Express, Ninja Va,Express với chiết khấu vận
              chuyển lên tới 100% và COD đồng giá 1,5%
            </li>
          </ul>
        </div>
      </div>
    </div>
  </SessionContent>

  <SessionContent title="NA FULFILLMENT - TAKE CARE BY HEART" description="">
    <div class="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-3 gap-4">
      <div class="flex items-center justify-center bg-white">
        <div class="max-w-md h-[300px] rounded-3xl p-px border-solid border-2 border-orange-600">
          <div class="rounded-[calc(1.5rem-1px)] p-4 bg-white">
            <div class="m-2 flex gap-4 items-center">
              <div>
                <h3 class="text-lg font-bold text-gray-700">Tìm hiểu thị trường</h3>
              </div>
            </div>
            <p class="text-gray-700">
              Với kinh nghiệm hoạt động tại thị trường ĐÔNG NAM Á từ năm 2015, số lượng hồ sơ được
              xử lý trung bình mỗi tháng là 300.000 - 400.000 hồ sơ. NA Fulfillment tự tin với quy
              trình vận hành tất cả các khâu từ Telesale, chăm sóc khách hàng, kho bãi và tài chính.
              Dễ dàng tối ưu hóa và giải quyết các vấn đề trong quá trình vận hành giúp khách hàng
              đạt được kết quả kinh doanh tốt nhất.
            </p>
          </div>
        </div>
      </div>
      <div class="flex items-center justify-center bg-white">
        <div class="max-w-md h-[300px] rounded-3xl p-px border-solid border-2 border-orange-600">
          <div class="rounded-[calc(1.5rem-1px)] p-4 bg-white">
            <div class="m-2 flex gap-4 items-center">
              <div>
                <h3 class="text-lg font-bold text-gray-700">HUMAN RESOURCES</h3>
              </div>
            </div>
            <p class="text-gray-700">
              NA Fulfillment có đội ngũ nhân viên là người bản địa tại các thị trường Philippines,
              Malaysia,Thailand am hiểu thị trường, giúp khách hàng tìm được nguồn hàng chất lượng
              với giá cạnh tranh, luôn sẵn sàng hỗ trợ giải quyết các vấn đề cho khách hàng một cách
              nhanh chóng và đạt hiệu quả cao.
            </p>
          </div>
        </div>
      </div>
      <div class="flex items-center justify-center bg-white">
        <div class="max-w-md h-[300px] rounded-3xl p-px border-solid border-2 border-orange-600">
          <div class="rounded-[calc(1.5rem-1px)] p-4 bg-white">
            <div class="m-2 flex gap-4 items-center">
              <div>
                <h3 class="text-lg font-bold text-gray-700">DISCOUNT DOMESTIC SHIPPING</h3>
              </div>
            </div>
            <p class="text-gray-700">
              Hiện nay NA Fulfillment là một trong những đối tác hàng đầu của các đơn vị vận chuyển
              như J&T, Ninja Van nên tài khoản của NA được miễn phí Ship và COD đồng giá 1,5% giúp
              khách hàng tối ưu hóa chi phí vận hành.
            </p>
          </div>
        </div>
      </div>
    </div>
  </SessionContent>

  <SessionContent
    title="Quy Trình Fulfillment"
    description="Bằng cách hợp tác với NA Fulfillment, các doanh nghiệp có thể tận dụng các dịch vụ toàn diện trong hệ sinh thái của NA. Điều này cho phép các doanh nghiệp thiết lập một chu trình liền mạch bắt đầu từ thử nghiệm sản phẩm và nhập khẩu hàng hóa từ Trung Quốc đến quản lý các giao dịch thu tiền khi giao hàng. Sự hợp tác như vậy sẽ giúp các doanh nghiệp tối ưu hóa hoạt động của họ và đạt được kết quả kinh doanh đáng kể."
  >
    <div class="grid grid-cols-1 gap-6 px-4 py-4 mx-auto md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
      <div
        class="relative flex w-full max-w-[26rem] flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-lg"
      >
        <div
          class="relative mx-4 mt-4 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40"
        >
          <img
            src="https://www.shopbase.com/blog/wp-content/uploads/2022/03/fulfilment-la-gi-7.jpg"
            alt="ui/ux review check"
            class="object-cover h-48 w-full"
          />
          <div
            class="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-tr from-transparent via-transparent to-black/60"
          ></div>
        </div>
        <div class="p-6">
          <div class="mb-3 flex items-center justify-between">
            <h5
              class="block font-sans text-xl font-medium leading-snug tracking-normal text-blue-gray-900 antialiased"
            >
              Kho
            </h5>
          </div>
          <p class="block font-sans text-base font-light leading-relaxed text-gray-700 antialiased">
            tiếp nhận hàng hoá từ khách hàng gửi về sau đó kiểm đếm phân loại hàng hoá => nhận đơn
            hàng và đóng gói theo đơn hàng => gửi cho đvvc j&t, flash => sau khi gửi đơn đi thì sẽ
            có bộ vận vận đơn và care đơn gọi điện nhắn tin cho khách hàng nhận hàng để giảm tỉ lệ
            hoàn => sau thời gian gửi đơn đi thì sẽ nhận cod và quy đổi thành tiền việt gửi lại cho
            khách hàng
          </p>
        </div>
      </div>

      <div
        class="relative flex w-full max-w-[26rem] flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-lg"
      >
        <div
          class="relative mx-4 mt-4 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40"
        >
          <img
            src="https://cdn1.123job.vn/123job/uploads/2020/10/27/2020_10_27______b2a32b413fd004b35c16b7b462bdf510.jpg"
            alt="ui/ux review check"
            class="object-cover h-48 w-full"
          />
          <div
            class="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-tr from-transparent via-transparent to-black/60"
          ></div>
        </div>
        <div class="p-6">
          <div class="mb-3 flex items-center justify-between">
            <h5
              class="block font-sans text-xl font-medium leading-snug tracking-normal text-blue-gray-900 antialiased"
            >
              Sale
            </h5>
          </div>
          <p class="block font-sans text-base font-light leading-relaxed text-gray-700 antialiased">
            có bao gồm sale mess và sale call
            <br />
            + sale mess sẽ vào page của khách hàng và trả lời tin nhắn khách hàng mua sắm sản phẩm
            và chuyển hoá thành đơn hàng
            <br />
            + sale call sẽ vào nhận data từ marketing ( khách hàng thuê fulfill) để gọi tư vấn - các
            nhận - hẹn nhận đơn hàng
          </p>
        </div>
      </div>

      <div
        class="relative flex w-full max-w-[26rem] flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-lg"
      >
        <div
          class="relative mx-4 mt-4 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40"
        >
          <img
            src="https://suno.vn/blog/wp-content/uploads/2018/11/meo-ship-hang-an-toan-cho-cac-shop-online-707x400.jpg"
            alt="ui/ux review check"
            class="object-cover h-48 w-full"
          />
          <div
            class="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-tr from-transparent via-transparent to-black/60"
          ></div>
        </div>
        <div class="p-6">
          <div class="mb-3 flex items-center justify-between">
            <h5
              class="block font-sans text-xl font-medium leading-snug tracking-normal text-blue-gray-900 antialiased"
            >
              Vận chuyển
            </h5>
          </div>
          <p class="block font-sans text-base font-light leading-relaxed text-gray-700 antialiased">
            Dịch vụ ff hỗ trợ khách hàng đặt hàng , tìm hàng và deal giá nhập sản phẩm hộ khách hàng
            tại bản địa hoặc ở trung quốc vận chuyển tới các nước đông nam á .( vận chuyển có đường
            bộ - đường bay - đường biển )
          </p>
        </div>
      </div>
    </div>
  </SessionContent>

  <SessionContent
    title="Dịch Vụ"
    description="NA Fulfillment là một trong những công ty hàng đầu tại Việt Nam cung cấp các hoạt động dịch vụ Fulfillment cho doanh nghiệp. Với thế mạnh là đơn vị giàu kinh nghiệm, sở hữu những chính sách đặc biệt từ các hãng tàu lớn cũng như sở hữu kho bãi NỘI ĐỊA chất lượng đáp ứng mọi nhu cầu của khách hàng.( NOTE : DỊCH VỤ NÀY CHIA THEO DẠNG TỪNG Ô CẠNH NHAU CHO KHÁCH HÀNG CÓ CÁI NHÌN TỔNG QUAN VỀ DỊCH VỤ BÊN MÌNH )"
  >
    <div class="justify-center max-w-6xl px-4 py-4 mx-auto lg:py-0">
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-4">
        <div
          class="rounded-lg overflow-hidden shadow-lg flex flex-col transition duration-500 hover:scale-90"
          @mouseover="showServiceButton1 = true"
          @mouseleave="showServiceButton1 = false"
        >
          <div class="bg-white rounded-md flex-grow">
            <img
              class="object-cover w-full h-48 rounded-t-md"
              src="https://www.dropoff.com/wp-content/uploads/2022/09/Last-Mile-Fulfillment-Everything-You-Need-to-Know-01.png"
              alt=""
            />
          </div>
          <div class="bg-white rounded-md">
            <div class="p-4">
              <div class="flex items-center justify-between mb-3">
                <span
                  class="inline-block px-2 py-1 text-sm text-orange-500 rounded-full bg-orange-50"
                >
                  Hoạt động
                </span>
              </div>
              <h2 class="mb-3 text-base font-semibold">Dịch vụ hậu cần cần fulfillment</h2>
              <div class="flex items-center justify-between mb-3">
                <p class="text-sm font-medium">
                  NA Fulfillment sẽ hỗ trợ khách hàng thành lập đội ngũ nội bộ tại Philippines, bao
                  gồm:
                  <br />
                  - Hoạt động văn phòng, kho bãi
                  <br />
                  - Tuyển dụng, đào tạo đội ngũ quý Telesale, chăm sóc khách hàng, vận đơn kho
                  <br />
                  - Hồ sơ doanh nghiệp, thủ tục thuế, thủ tục pháp lý
                  <br />
                  - Đăng ký tài khoản VVIP riêng tại các đơn vị vận chuyển lớn như J&T, Ninja,
                  <br />
                  - Flash với mức chiết khấu cao 100% phí vận chuyển và 1,5% phí COD. Sau đó, NA
                  Fulfillment sẽ hỗ trợ khách hàng vận hành đội ngũ in-house cũng như xử lý các vấn
                  đề phát sinh tại thị trường Đông Nam Á.
                </p>
              </div>
            </div>
          </div>
          <button
            v-show="showServiceButton1"
            class="absolute inset-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 text-white"
          >
            <a
              href="tel:0968959567"
              class="px-4 py-2 text-center text-gray-900 bg-orange-300 rounded-md hover:bg-orange-400"
            >
              Liên hệ ngay</a
            >
          </button>
        </div>
        <div
          class="rounded-lg overflow-hidden shadow-lg flex flex-col transition duration-500 hover:scale-90"
          @mouseover="showServiceButton2 = true"
          @mouseleave="showServiceButton2 = false"
        >
          <div class="bg-white rounded-md">
            <img
              class="object-cover w-full h-48 rounded-t-md"
              src="https://bizweb.dktcdn.net/100/366/963/files/fulfillment-la-gi-2.jpg?v=1651544243877"
              alt=""
            />
          </div>
          <div class="bg-white rounded-md">
            <div class="p-4">
              <div class="flex items-center justify-between mb-3">
                <span
                  class="inline-block px-2 py-1 text-sm text-orange-500 rounded-full bg-orange-50"
                >
                  Hoạt động
                </span>
              </div>
              <h2 class="mb-3 text-base font-semibold">Dịch vụ Fulfillment</h2>
              <div class="flex items-center justify-between mb-3">
                <p class="text-sm font-medium">
                  NA cung cấp các dịch vụ hoàn thiện đơn hàng bao gồm:
                  <br />
                  - Telesales
                  <br />
                  - Chat mess
                  <br />
                  - Chăm sóc khách hàng
                  <br />
                  - Logistics
                  <br />
                  - Storage NA Fulfillment luôn tự hào với đội ngũ vận hành chuyên nghiệp, có nhiều
                  năm kinh nghiệm và hỗ trợ hàng chục công ty với 400.000 đơn hàng tại Thailand,
                  Malaysia, Philippines
                </p>
              </div>
            </div>
          </div>
          <button
            v-show="showServiceButton2"
            class="absolute inset-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 text-white"
          >
            <a
              href="tel:0968959567"
              class="px-4 py-2 text-center text-gray-900 bg-orange-300 rounded-md hover:bg-orange-400"
            >
              Liên hệ ngay</a
            >
          </button>
        </div>
        <div
          class="rounded-lg overflow-hidden shadow-lg flex flex-col transition duration-500 hover:scale-90"
          @mouseover="showServiceButton3 = true"
          @mouseleave="showServiceButton3 = false"
        >
          <div class="bg-white rounded-md">
            <img
              class="object-cover w-full h-48 rounded-t-md"
              src="https://atls.vn/wp-content/uploads/2021/03/HTL-009.jpg"
              alt=""
            />
          </div>
          <div class="bg-white rounded-md">
            <div class="p-4">
              <div class="flex items-center justify-between mb-3">
                <span
                  class="inline-block px-2 py-1 text-sm text-orange-500 rounded-full bg-orange-50"
                >
                  Hoạt động
                </span>
              </div>
              <h2 class="mb-3 text-base font-semibold">DỊCH VỤ VẬN CHUYỂN QUỐC TẾ</h2>
              <div class="flex items-center justify-between mb-3">
                <p class="text-sm font-medium">
                  Hiện nay NA Fulfillment là một trong những đại lý lớn về vận chuyển quốc tế nên
                  giá vận chuyển luôn được đảm bảo tối ưu nhất cho khách hàng trong hệ thống NA như
                  sau:
                  <br />
                  - Vận chuyển Trung Quốc, Việt Nam
                  <br />
                  - Vận chuyển về Việt Nam Thailand, Malaysia, Philippines
                </p>
              </div>
            </div>
          </div>
          <button
            v-show="showServiceButton3"
            class="absolute inset-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 text-white"
          >
            <a
              href="tel:0968959567"
              class="px-4 py-2 text-center text-gray-900 bg-orange-300 rounded-md hover:bg-orange-400"
            >
              Liên hệ ngay</a
            >
          </button>
        </div>
        <div
          class="rounded-lg overflow-hidden shadow-lg flex flex-col transition duration-500 hover:scale-90"
          @mouseover="showServiceButton4 = true"
          @mouseleave="showServiceButton4 = false"
        >
          <div class="bg-white rounded-md">
            <img
              class="object-cover w-full h-48 rounded-t-md"
              src="https://accgroup.vn/wp-content/uploads/2022/10/cach-moi-de-tra-cuu-bhxh_0204112908-2.jpg"
              alt=""
            />
          </div>
          <div class="bg-white rounded-md">
            <div class="p-4">
              <div class="flex items-center justify-between mb-3">
                <span
                  class="inline-block px-2 py-1 text-sm text-orange-500 rounded-full bg-orange-50"
                >
                  Hoạt động
                </span>
              </div>
              <h class="mb-3 text-base font-semibold">HỖ TRỢ KIỂM TRA THỊ TRƯỜNG MIỄN PHÍ </h>
              <div class="flex items-center justify-between mb-3">
                <p class="text-sm font-medium">
                  Đối với mỗi sản phẩm, ngành hàng khách hàng, cách thức thâm nhập thị trường và thử
                  nghiệm sản phẩm luôn khác nhau. Nhận thấy điều đó, NA Fulfillment sẽ hỗ trợ tìm
                  kiếm và thử nghiệm thị trường MIỄN PHÍ cho khách hàng, giúp bạn tối ưu hóa chi phí
                  và thời gian thử nghiệm thị trường.
                </p>
              </div>
            </div>
          </div>
          <button
            v-show="showServiceButton4"
            class="absolute inset-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 text-white"
          >
            <a
              href="tel:0968959567"
              class="px-4 py-2 text-center text-gray-900 bg-orange-300 rounded-md hover:bg-orange-400"
            >
              Liên hệ ngay</a
            >
          </button>
        </div>
      </div>
    </div>
  </SessionContent>

  <SessionContent title="Đối tác của chúng tôi" description="">
    <div class="grid grid-cols-3 gap-6 px-4 py-4 mx-auto md:grid-cols-3 lg:grid-cols-3 lg:gap-8">
      <div
        class="relative flex w-full max-w-[26rem] flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-lg"
      >
        <div
          class="relative m-1 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40"
        >
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/3/35/Logo_J%26T_Merah_Square.jpg"
            alt="ui/ux review check"
          />
          <div
            class="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-tr from-transparent via-transparent to-black/60"
          ></div>
        </div>
      </div>
      <div
        class="relative flex w-full max-w-[26rem] flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-lg"
      >
        <div
          class="relative m-1 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40"
        >
          <img src="https://www.ninjavan.co/cover.png" alt="ui/ux review check" />
          <div
            class="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-tr from-transparent via-transparent to-black/60"
          ></div>
        </div>
      </div>
      <div
        class="relative flex w-full max-w-[26rem] flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-lg"
      >
        <div
          class="relative m-1 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40"
        >
          <img
            src="https://static.ybox.vn/2021/8/5/1629470855654-the-gallerie-by-prudential-avatar.png"
            alt="ui/ux review check"
          />
          <div
            class="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-tr from-transparent via-transparent to-black/60"
          ></div>
        </div>
      </div>
    </div>
  </SessionContent>

  <SessionContent
    title="Hãy nghe những gì khách hàng của chúng tôi nói gì khi sử dụng dịch vụ của chúng tôi."
    description=""
  >
    <div class="min-w-screen flex items-center justify-center">
      <div class="w-full bg-white border-gray-200 px-2 py-2 md:py-10 text-gray-800">
        <div class="w-full max-w-6xl mx-auto">
          <div class="-mx-3 md:flex items-start">
            <div class="px-3 md:w-1/3">
              <div
                class="w-full mx-auto rounded-lg bg-white border border-gray-200 p-5 text-gray-800 font-light mb-6"
              >
                <div class="w-full flex mb-4 items-center">
                  <div
                    class="overflow-hidden rounded-full w-10 h-10 bg-gray-50 border border-gray-200"
                  >
                    <img src="https://i.pravatar.cc/100?img=1" alt="" />
                  </div>
                  <div class="flex-grow pl-3">
                    <h6 class="font-bold text-sm uppercase text-gray-600">Nguyễn Thị Hà</h6>
                  </div>
                </div>
                <div class="w-full">
                  <p class="text-sm leading-tight">
                    <span class="text-lg leading-none italic font-bold text-gray-400 mr-1">"</span>
                    Trước đây chúng tôi gặp rất nhiều khó khăn trong việc tìm nguồn hàng chất lượng
                    và vận chuyển hàng hóa. Nhưng từ khi sử dụng dịch vụ của Na Fulfillment, chúng
                    tôi đã không còn gặp phải những khó khăn đó nữa. Chúng tôi rất hài lòng với dịch
                    vụ của Na Fulfillment.
                    <span class="text-lg leading-none italic font-bold text-gray-400 ml-1">"</span>
                  </p>
                </div>
              </div>
              <div
                class="w-full mx-auto rounded-lg bg-white border border-gray-200 p-5 text-gray-800 font-light mb-6"
              >
                <div class="w-full flex mb-4 items-center">
                  <div
                    class="overflow-hidden rounded-full w-10 h-10 bg-gray-50 border border-gray-200"
                  >
                    <img src="https://i.pravatar.cc/100?img=2" alt="" />
                  </div>
                  <div class="flex-grow pl-3">
                    <h6 class="font-bold text-sm uppercase text-gray-600">Tuấn Trần</h6>
                  </div>
                </div>
                <div class="w-full">
                  <p class="text-sm leading-tight">
                    <span class="text-lg leading-none italic font-bold text-gray-400 mr-1">"</span>
                    Thực sự rất khó tìm được đơn vị giàu kinh nhiệm và uy tín như Na Fulfillment.
                    Chúng tôi rất hài lòng với dịch vụ của Na Fulfillment và sẽ tiếp tục hợp tác
                    trong tương lai.
                    <span class="text-lg leading-none italic font-bold text-gray-400 ml-1">"</span>
                  </p>
                </div>
              </div>
            </div>
            <div class="px-3 md:w-1/3">
              <div
                class="w-full mx-auto rounded-lg bg-white border border-gray-200 p-5 text-gray-800 font-light mb-6"
              >
                <div class="w-full flex mb-4 items-center">
                  <div
                    class="overflow-hidden rounded-full w-10 h-10 bg-gray-50 border border-gray-200"
                  >
                    <img src="https://i.pravatar.cc/100?img=3" alt="" />
                  </div>
                  <div class="flex-grow pl-3">
                    <h6 class="font-bold text-sm uppercase text-gray-600">Nguyễn Linh</h6>
                  </div>
                </div>
                <div class="w-full">
                  <p class="text-sm leading-tight">
                    <span class="text-lg leading-none italic font-bold text-gray-400 mr-1">"</span>
                    Trở thành đối tác với Na Fulfillment mang lại cho chúng tôi nhiều lợi ích hơn
                    chúng tôi tưởng tượng. Chúng tôi rất hài lòng với dịch vụ của Na Fulfillment.
                    <span class="text-lg leading-none italic font-bold text-gray-400 ml-1">"</span>
                  </p>
                </div>
              </div>
              <div
                class="w-full mx-auto rounded-lg bg-white border border-gray-200 p-5 text-gray-800 font-light mb-6"
              >
                <div class="w-full flex mb-4 items-center">
                  <div
                    class="overflow-hidden rounded-full w-10 h-10 bg-gray-50 border border-gray-200"
                  >
                    <img src="https://i.pravatar.cc/100?img=4" alt="" />
                  </div>
                  <div class="flex-grow pl-3">
                    <h6 class="font-bold text-sm uppercase text-gray-600">Trần Thị Hà</h6>
                  </div>
                </div>
                <div class="w-full">
                  <p class="text-sm leading-tight">
                    <span class="text-lg leading-none italic font-bold text-gray-400 mr-1">"</span>
                    Để thành công ở thị trường Đông Nam Á, không thể thiếu người bạn đồng thành NA
                    Fulfillment. Chúng tôi rất hài lòng với dịch vụ của Na Fulfillment.
                    <span class="text-lg leading-none italic font-bold text-gray-400 ml-1">"</span>
                  </p>
                </div>
              </div>
            </div>
            <div class="px-3 md:w-1/3">
              <div
                class="w-full mx-auto rounded-lg bg-white border border-gray-200 p-5 text-gray-800 font-light mb-6"
              >
                <div class="w-full flex mb-4 items-center">
                  <div
                    class="overflow-hidden rounded-full w-10 h-10 bg-gray-50 border border-gray-200"
                  >
                    <img src="https://i.pravatar.cc/100?img=5" alt="" />
                  </div>
                  <div class="flex-grow pl-3">
                    <h6 class="font-bold text-sm uppercase text-gray-600">Khương Hùng</h6>
                  </div>
                </div>
                <div class="w-full">
                  <p class="text-sm leading-tight">
                    <span class="text-lg leading-none italic font-bold text-gray-400 mr-1">"</span>
                    Là một khách hàng gắn bó với Na Fulfillment từ lâu, chúng tôi rất hài lòng với
                    dịch vụ của Na Fulfillment.
                    <span class="text-lg leading-none italic font-bold text-gray-400 ml-1">"</span>
                  </p>
                </div>
              </div>
              <div
                class="w-full mx-auto rounded-lg bg-white border border-gray-200 p-5 text-gray-800 font-light mb-6"
              >
                <div class="w-full flex mb-4 items-center">
                  <div
                    class="overflow-hidden rounded-full w-10 h-10 bg-gray-50 border border-gray-200"
                  >
                    <img src="https://i.pravatar.cc/100?img=6" alt="" />
                  </div>
                  <div class="flex-grow pl-3">
                    <h6 class="font-bold text-sm uppercase text-gray-600">Cao Thanh Trung</h6>
                  </div>
                </div>
                <div class="w-full">
                  <p class="text-sm leading-tight">
                    <span class="text-lg leading-none italic font-bold text-gray-400 mr-1">"</span>
                    Vô cùng tin tưởng những dịch vụ mà Na Fulfillment cung cấp. Chúng tôi rất hài
                    lòng với dịch vụ của Na Fulfillment.
                    <span class="text-lg leading-none italic font-bold text-gray-400 ml-1">"</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </SessionContent>

  <SessionContent
    title="Tin tức"
    description="Cập nhật những thông tin mới nhất về dịch vụ của chúng tôi"
  >
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
      <div
        class="rounded-lg overflow-hidden shadow-lg flex flex-col transition duration-500 hover:scale-90"
      >
        <div
          :style="{
            backgroundImage:
              'url(https://cdn.tgdd.vn/hoi-dap/1443081/huong-dan-su-dung-o-cam-wifi-xiaomi-cuc-ky-don-gian-ban-2-800x550.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }"
        >
          <div class="image-container backdrop-blur-3xl backdrop-saturate-900">
            <img
              class="h-56 lg:h-60 w-full object-contain object-center"
              src="https://media.baodautu.vn/Images/phuongthanh/2023/03/22/TM%C4%90T%20%C4%90%C3%B4ng%20Nam%20%C3%81.jpg"
              alt=""
            />
          </div>
        </div>

        <div class="p-2 flex flex-col space-y-3">
          <div class="flex flex-wrap space-x-2">
            <div class="flex flex-wrap align-center justify-between">
              <span class="text-sm font-medium text-gray-600 bg-red-100 rounded-lg p-1">
                <font-awesome-icon :icon="['fas', 'fire']" class="text-red-500"></font-awesome-icon>
                Mới nhất
              </span>
            </div>

            <div class="flex flex-wrap align-center justify-between">
              <span class="text-sm font-medium text-gray-600 bg-blue-100 rounded-lg p-1">
                <font-awesome-icon
                  :icon="['fas', 'book-open-reader']"
                  class="text-blue-500"
                ></font-awesome-icon>
                Nổi bật
              </span>
            </div>
          </div>

          <router-link to="/news/01" class="font-semibold text-md leading-6 text-gray-700 my-1">
            THƯƠNG MẠI ĐIỆN TỬ BÙNG NỔ TẠI ĐÔNG NAM Á
          </router-link>

          <i class="text-sm text-gray-600 line-clamp-3">
            Thương mại điện tử đang bùng nổ tại Đông Nam Á, đặc biệt là tại các quốc gia có nền kinh
            tế phát triển như Singapore, Malaysia, Thái Lan, Indonesia, Philippines, Việt Nam. Đây
            là cơ hội lớn cho các doanh nghiệp trong và ngoài khu vực.
          </i>

          <div class="flex flex-wrap space-x-2">
            <span class="text-sm font-medium text-gray-600 rounded-lg p-1">
              <font-awesome-icon :icon="['fas', 'eye']"></font-awesome-icon>
              230
            </span>

            <span class="text-sm font-medium text-gray-600 rounded-lg p-1">
              <font-awesome-icon :icon="['fas', 'heart']" />
              20
            </span>
          </div>
        </div>
      </div>
      <div
        class="rounded-lg overflow-hidden shadow-lg flex flex-col transition duration-500 hover:scale-90"
      >
        <div
          :style="{
            backgroundImage:
              'url(https://cdn.tgdd.vn/hoi-dap/1443081/huong-dan-su-dung-o-cam-wifi-xiaomi-cuc-ky-don-gian-ban-2-800x550.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }"
        >
          <div class="image-container backdrop-blur-3xl backdrop-saturate-900">
            <img
              class="h-56 lg:h-60 w-full object-contain object-center"
              src="https://i.ytimg.com/vi/Usn8qJuesrU/maxresdefault.jpg"
              alt=""
            />
          </div>
        </div>

        <div class="p-2 flex flex-col space-y-3">
          <div class="flex flex-wrap space-x-2">
            <div class="flex flex-wrap align-center justify-between">
              <span class="text-sm font-medium text-gray-600 bg-red-100 rounded-lg p-1">
                <font-awesome-icon :icon="['fas', 'fire']" class="text-red-500"></font-awesome-icon>
                Mới nhất
              </span>
            </div>

            <div class="flex flex-wrap align-center justify-between">
              <span class="text-sm font-medium text-gray-600 bg-blue-100 rounded-lg p-1">
                <font-awesome-icon
                  :icon="['fas', 'book-open-reader']"
                  class="text-blue-500"
                ></font-awesome-icon>
                Nổi bật
              </span>
            </div>
          </div>

          <router-link to="#" class="font-semibold text-md leading-6 text-gray-700 my-1">
            Dịch Vụ Fulfillment Là Gì? Những Điều Bạn Nên Biết Về Dịch Vụ Này
          </router-link>

          <i class="text-sm text-gray-600 line-clamp-3">
            Fulfillment là gì? Đây là một dịch vụ hậu cần mà nhiều doanh nghiệp đang sử dụng để giảm
            bớt gánh nặng vận chuyển hàng hóa và quản lý kho. Vậy dịch vụ này có những ưu điểm gì?
            Hãy cùng tìm hiểu qua bài viết dưới đây.
          </i>

          <div class="flex flex-wrap space-x-2">
            <span class="text-sm font-medium text-gray-600 rounded-lg p-1">
              <font-awesome-icon :icon="['fas', 'eye']"></font-awesome-icon>
              230
            </span>

            <span class="text-sm font-medium text-gray-600 rounded-lg p-1">
              <font-awesome-icon :icon="['fas', 'heart']" />
              20
            </span>
          </div>
        </div>
      </div>
      <div
        class="rounded-lg overflow-hidden shadow-lg flex flex-col transition duration-500 hover:scale-90"
      >
        <div
          :style="{
            backgroundImage:
              'url(https://www.shipbob.com/wp-content/uploads/2021/12/director-of-fulfillment.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }"
        >
          <div class="image-container backdrop-blur-3xl backdrop-saturate-900">
            <img
              class="h-56 lg:h-60 w-full object-contain object-center"
              src="https://www.shipbob.com/wp-content/uploads/2021/12/director-of-fulfillment.jpg"
              alt=""
            />
          </div>
        </div>

        <div class="p-2 flex flex-col space-y-3">
          <div class="flex flex-wrap space-x-2">
            <div class="flex flex-wrap align-center justify-between">
              <span class="text-sm font-medium text-gray-600 bg-red-100 rounded-lg p-1">
                <font-awesome-icon :icon="['fas', 'fire']" class="text-red-500"></font-awesome-icon>
                Mới nhất
              </span>
            </div>

            <div class="flex flex-wrap align-center justify-between">
              <span class="text-sm font-medium text-gray-600 bg-blue-100 rounded-lg p-1">
                <font-awesome-icon
                  :icon="['fas', 'book-open-reader']"
                  class="text-blue-500"
                ></font-awesome-icon>
                Nổi bật
              </span>
            </div>
          </div>

          <router-link to="#" class="font-semibold text-md leading-6 text-gray-700 my-1">
            DỊCH VỤ FULFILLMENT - MỞ RỘNG CON ĐƯỜNG BÁN HÀNG ONLINE
          </router-link>

          <i class="text-sm text-gray-600 line-clamp-3">
            Fulfillment là một dịch vụ hậu cần mà nhiều doanh nghiệp đang sử dụng để giảm bớt gánh
            nặng vận chuyển hàng hóa và quản lý kho. Vậy dịch vụ này có những ưu điểm gì? Hãy cùng
            tìm hiểu qua bài viết dưới đây.
          </i>

          <div class="flex flex-wrap space-x-2">
            <span class="text-sm font-medium text-gray-600 rounded-lg p-1">
              <font-awesome-icon :icon="['fas', 'eye']"></font-awesome-icon>
              230
            </span>

            <span class="text-sm font-medium text-gray-600 rounded-lg p-1">
              <font-awesome-icon :icon="['fas', 'heart']" />
              20
            </span>
          </div>
        </div>
      </div>
    </div>
  </SessionContent>

  <FloatingContent />

  <FooterContent />
</template>
