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
      'Dịch vụ hậu cần fulfillment tại Đông Nam Á là một giải pháp toàn diện giúp các doanh nghiệp quản lý và thực hiện các quy trình sau khi bán hàng một cách hiệu quả và linh hoạt. Với sự chuyên nghiệp và kinh nghiệm, chúng tôi cung cấp dịch vụ bao gồm lưu kho, đóng gói, giao hàng và quản lý hàng hóa, giúp khách hàng tập trung vào việc phát triển kinh doanh mà không lo lắng về các hoạt động logisitcs phức tạp. Đội ngũ của chúng tôi cam kết mang lại sự tiện lợi, tin cậy và linh hoạt để đáp ứng mọi nhu cầu của quý khách hàng.',
    images: 'images/slide-1.jpeg'
  },
  {
    title: 'Dịch vụ hỗ trợ tìm nguồn hàng',
    content:
      'Dịch vụ hỗ trợ tìm nguồn hàng tại Đông Nam Á là lời giải cho các doanh nghiệp muốn mở rộng hoặc tối ưu hóa chuỗi cung ứng của họ. Chúng tôi cung cấp một mạng lưới đối tác đáng tin cậy, được chọn lọc kỹ lưỡng trên toàn khu vực Đông Nam Á, giúp khách hàng tìm kiếm và chọn lựa những nguồn hàng chất lượng với giá cả cạnh tranh nhất. Với sự hiểu biết sâu sắc về thị trường và kinh nghiệm trong ngành, chúng tôi cam kết mang đến sự hỗ trợ toàn diện và chuyên nghiệp, giúp khách hàng tiết kiệm thời gian và chi phí, đồng thời tối đa hóa lợi ích từ việc kinh doanh tại Đông Nam Á.',
    images: 'images/slide-2.jpeg'
  }
]

const goToMarket = (url: string) => {
  window.open(url, '_blank')
}

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
const showServiceButton5 = ref<boolean>(false)
const showServiceButton6 = ref<boolean>(false)
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
                    <p class="text-sm md:text-base text-white transition duration-500">
                      {{ slide.content }}
                    </p>
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
          <h2 class="text-3xl font-bold text-orange-500">NA Fulfillment</h2>
          <p class="mt-6 text-orange-600">Đối Tác Tin Cậy Cho Các Doanh Nghiệp Tại Đông Nam Á</p>
          <p class="mt-6 text-gray-600">
            Chào mừng đến với công ty fulfillment hàng đầu với hơn 10 năm kinh nghiệm trong ngành.
            Chúng tôi tự hào là đối tác tin cậy cho các doanh nghiệp trên toàn cầu, cung cấp các
            giải pháp hậu cần toàn diện và chất lượng cao. Với sự chuyên nghiệp, đội ngũ giàu kinh
            nghiệm và cơ sở hạ tầng hiện đại, chúng tôi cam kết đem lại dịch vụ vượt trội, từ việc
            lưu kho, đóng gói đến vận chuyển và quản lý hàng hóa, giúp khách hàng tập trung hoàn
            toàn vào việc phát triển kinh doanh của mình mà không lo lắng về các vấn đề logisitcs
            phức tạp. Hãy đồng hành cùng chúng tôi để thúc đẩy sự thành công và phát triển bền vững
            của bạn!
          </p>
        </div>
      </div>
    </div>
  </SessionContent>

  <SessionContent
    title="Quy Trình Fulfillment"
    description="Fulfillment là một trong những mô hình kinh doanh phát triển nhanh nhất trong ngành Thương mại điện tử. Sự thâm nhập nhanh chóng của các dịch vụ Internet và số lượng khách hàng có nhu cầu mua sắm trực tuyến tăng đáng kể là hai yếu tố thúc đẩy nhu cầu về các dịch vụ E-Commerce fulfillment trên toàn thế giới. Sử dụng dịch vụ Fulfillment là một giải pháp tối ưu giúp doanh nghiệp, đơn vị, công ty và cá nhân tiết kiệm được chi phí, giảm thiểu được việc phải thuê nhiều nhân công hay giải quyết công công đoạn hậu cần sau mua."
  >
    <div class="grid grid-cols-1 gap-6 px-4 py-4 mx-auto md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
      <div
        class="relative flex w-full max-w-[26rem] flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-lg"
      >
        <div
          class="relative mx-4 mt-4 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40"
        >
          <img
            src="https://cdn.tuoitre.vn/471584752817336320/2023/7/14/photo-1689322997464-1689322997518742017271.jpg"
            alt="ui/ux review check"
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
              Tư Vấn Và Lựa Chọn
            </h5>
          </div>
          <p class="block font-sans text-base font-light leading-relaxed text-gray-700 antialiased">
            Với kinh nghiệm và kiến thức sâu sắc về thị trường Đông Nam Á, chúng tôi hân hạnh đưa ra
            những tư vấn chuyên sâu để hỗ trợ quý vị trong quá trình này. Đầu tiên, chúng tôi sẽ
            phân tích cẩn thận về đặc điểm và tiềm năng của từng thị trường, từ đó đưa ra những
            phương án hợp tác phù hợp và chiến lược hiệu quả.
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
            src="https://sudospaces.com/ketoanleanh/2020/10/hop-dong-lao-dong.jpg"
            alt="ui/ux review check"
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
              Ký Hợp Đồng
            </h5>
          </div>
          <p class="block font-sans text-base font-light leading-relaxed text-gray-700 antialiased">
            Sau khi quý vị đã chọn lựa được những đối tác phù hợp, chúng tôi sẽ hỗ trợ quý vị trong
            việc ký kết hợp đồng. Chúng tôi cam kết đưa ra những hợp đồng minh bạch, rõ ràng và hợp
            lý, giúp quý vị an tâm và tin tưởng trong quá trình hợp tác.
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
            src="https://vietnamcleanroom.com/vcr-media/23/6/5/quy-trinh-luu-tru-tai-lieu-iso.jpg"
            alt="ui/ux review check"
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
              Triển khai tìm nguồn hàng và lưu trữ
            </h5>
          </div>
          <p class="block font-sans text-base font-light leading-relaxed text-gray-700 antialiased">
            Chúng tôi sẽ hỗ trợ quý vị trong việc tìm kiếm nguồn hàng chất lượng và lưu trữ hàng hóa
            tại các kho lưu trữ hiện đại, đảm bảo an toàn và tiện lợi cho quý vị.
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
            src="https://dichvulogistics.vn/uploads/pictures/611e14b00ae4861d92421973/content_quy-cach-dong-goi-hang-hoa-2.jpg"
            alt="ui/ux review check"
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
              Đóng Gói, Bàn Giao
            </h5>
          </div>
          <p class="block font-sans text-base font-light leading-relaxed text-gray-700 antialiased">
            Trong quá trình này, chúng tôi sẽ hỗ trợ quý vị trong việc đóng gói hàng hóa, chuẩn bị
            và bàn giao hàng hóa cho đối tác vận chuyển một cách nhanh chóng và chính xác.
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
            src="https://images.fpt.shop/unsafe/filters:quality(90)/fptshop.com.vn/uploads/images/tin-tuc/174904/Originals/tra-cuu-don-hang-bang-do-dien-thoai-1.jpg"
            alt="ui/ux review check"
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
              Nhập dữ liệu và theo dõi đơn hàng
            </h5>
          </div>
          <p class="block font-sans text-base font-light leading-relaxed text-gray-700 antialiased">
            Đối soát hàng hóa, nhập dữ liệu và theo dõi đơn hàng một cách chính xác và kịp thời.
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
            src="https://www.vib.com.vn/wps/wcm/connect/7943c1f0-317a-471a-a348-e074275b54b1/1/ty-gia-hoi-doai-1.webp?MOD=AJPERES"
            alt="ui/ux review check"
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
              Đổi Tiền Và Chuyển Giao Lại Cho Đối Tác
            </h5>
          </div>
          <p class="block font-sans text-base font-light leading-relaxed text-gray-700 antialiased">
            Sau khi các quá trình hoàn tất và đơn hàng đã được giao thành công, chúng tôi sẽ hỗ trợ
            quý vị trong việc đổi tiền và chuyển giao lại cho đối tác một cách nhanh chóng và chính
            xác.
          </p>
        </div>
      </div>
    </div>
  </SessionContent>

  <SessionContent
    title="Dịch Vụ"
    description="Chúng tôi cung cấp các dịch vụ hậu cần và hỗ trợ tìm nguồn hàng chất lượng"
  >
    <div class="justify-center max-w-6xl px-4 py-4 mx-auto lg:py-0">
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
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
                  Na Fulfillment cung cấp dịch vụ hậu cần fulfillment toàn diện, giúp khách hàng
                  quản lý và thực hiện các quy trình sau khi bán hàng một cách hiệu quả và linh
                  hoạt.
                </p>
              </div>
            </div>
          </div>
          <button
            v-show="showServiceButton1"
            class="absolute inset-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 text-white"
          >
            <a
              href="tel:0848195555"
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
              src="https://hyepost.com/medias/public/20210701/kinh%20nghiem%20gui%20hang%20dong%20nam%20a-2.jpg"
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
              <h2 class="mb-3 text-base font-semibold">Dịch vụ vận chuyển hàng hóa</h2>
              <div class="flex items-center justify-between mb-3">
                <p class="text-sm font-medium">
                  Chúng tôi cung cấp dịch vụ vận chuyển hàng hóa trên toàn Đông Nam Á, giúp khách
                  hàng tối ưu chi phí và thời gian vận chuyển.
                </p>
              </div>
            </div>
          </div>
          <button
            v-show="showServiceButton2"
            class="absolute inset-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 text-white"
          >
            <a
              href="tel:0848195555"
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
              src="https://blog.dktcdn.net/files/phan-mem-quan-ly-kho-4.jpg"
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
              <h2 class="mb-3 text-base font-semibold">HỖ TRỢ TÌM NGUỒN HÀNG</h2>
              <div class="flex items-center justify-between mb-3">
                <p class="text-sm font-medium">
                  Với mạng lưới đối tác đáng tin cậy, được chọn lọc kỹ lưỡng trên toàn khu vực Đông
                  Nam Á, chúng tôi hỗ trợ quý vị tìm kiếm và chọn lựa những nguồn hàng chất lượng
                  với giá cả cạnh tranh nhất.
                </p>
              </div>
            </div>
          </div>
          <button
            v-show="showServiceButton3"
            class="absolute inset-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 text-white"
          >
            <a
              href="tel:0848195555"
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
              src="https://media.loveitopcdn.com/7985/telesales-la-gi-1.jpg"
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
              <h class="mb-3 text-base font-semibold">ĐỘI NGŨ TELESALES, MARKETING CHUYÊN NGHIỆP</h>
              <div class="flex items-center justify-between mb-3">
                <p class="text-sm font-medium">
                  Chúng tôi cung cấp dịch vụ telesales, marketing chuyên nghiệp, giúp quý vị tối ưu
                  hóa chiến lược kinh doanh và tiếp cận khách hàng một cách hiệu quả.
                </p>
              </div>
            </div>
          </div>
          <button
            v-show="showServiceButton4"
            class="absolute inset-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 text-white"
          >
            <a
              href="tel:0848195555"
              class="px-4 py-2 text-center text-gray-900 bg-orange-300 rounded-md hover:bg-orange-400"
            >
              Liên hệ ngay</a
            >
          </button>
        </div>
        <div
          class="rounded-lg overflow-hidden shadow-lg flex flex-col transition duration-500 hover:scale-90"
          @mouseover="showServiceButton5 = true"
          @mouseleave="showServiceButton5 = false"
        >
          <div class="bg-white rounded-md">
            <img
              class="object-cover w-full h-48 rounded-t-md"
              src="https://cdn.tgdd.vn/hoi-dap/1307810/ship-cod-la-gi-uu-nhuoc-diem-ra-sao-quy-trinh-mua-chuyen2.jpg"
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
              <h class="mb-3 text-base font-semibold">DỊCH VỤ SHIPPING COD</h>
              <div class="flex items-center justify-between mb-3">
                <p class="text-sm font-medium">
                  Tại Đông Nam Á, dịch vụ COD được sử dụng vô cùng phổ biến. Chúng tôi cung cấp dịch
                  vụ shipping COD toàn diện, giúp quý vị tối ưu hóa chi phí và thời gian vận chuyển.
                </p>
              </div>
            </div>
          </div>
          <button
            v-show="showServiceButton5"
            class="absolute inset-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 text-white"
          >
            <a
              href="tel:0848195555"
              class="px-4 py-2 text-center text-gray-900 bg-orange-300 rounded-md hover:bg-orange-400"
            >
              Liên hệ ngay</a
            >
          </button>
        </div>
        <div
          class="rounded-lg overflow-hidden shadow-lg flex flex-col transition duration-500 hover:scale-90"
          @mouseover="showServiceButton6 = true"
          @mouseleave="showServiceButton6 = false"
        >
          <div class="bg-white rounded-md">
            <img
              class="object-cover w-full h-48 rounded-t-md"
              src="https://www.shopbase.com/blog/wp-content/uploads/2022/03/e-fulfillment-la-gi-1.jpg"
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
              <h class="mb-3 text-base font-semibold">TƯ VẤN GIẢI PHÁP FULLFILLMENT</h>
              <div class="flex items-center justify-between mb-3">
                <p class="text-sm font-medium">
                  Ngoài những dịch vụ cơ bản, chúng tôi còn cung cấp dịch vụ tư vấn giải pháp
                  fullfillment toàn diện cho các đối tác có nhu cầu.
                </p>
              </div>
            </div>
          </div>
          <button
            v-show="showServiceButton6"
            class="absolute inset-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 text-white"
          >
            <a
              href="tel:0848195555"
              class="px-4 py-2 text-center text-gray-900 bg-orange-300 rounded-md hover:bg-orange-400"
            >
              Liên hệ ngay</a
            >
          </button>
        </div>
      </div>
    </div>
  </SessionContent>

  <SessionContent title="Thị Trường của Chúng Tôi (Nhấn để xem bảng giá)" description="">
    <div class="grid grid-cols-3 gap-6 px-4 py-4 mx-auto md:grid-cols-3 lg:grid-cols-3 lg:gap-8">
      <div
        class="relative flex w-full max-w-[26rem] flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-lg"
        @click="
          goToMarket(
            'https://docs.google.com/document/d/1n3rYKbJ2-8EDSMTOFJnFZavfZVSjVdKGsVnHqwJG-oI/edit?pli=1'
          )
        "
      >
        <div
          class="relative m-1 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40"
        >
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Flag_of_Thailand.svg/640px-Flag_of_Thailand.svg.png"
            alt="ui/ux review check"
          />
          <div
            class="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-tr from-transparent via-transparent to-black/60"
          ></div>
        </div>
      </div>
      <div
        class="relative flex w-full max-w-[26rem] flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-lg"
        @click="
          goToMarket(
            'https://docs.google.com/document/d/1vdveYj9i4MnqITwsB2HOr1cDXZi6WVIeUVaMnDsnLV0/edit'
          )
        "
      >
        <div
          class="relative m-1 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40"
        >
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Flag_of_Malaya.svg/500px-Flag_of_Malaya.svg.png"
            alt="ui/ux review check"
          />
          <div
            class="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-tr from-transparent via-transparent to-black/60"
          ></div>
        </div>
      </div>
      <div
        class="relative flex w-full max-w-[26rem] flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-lg"
        @click="
          goToMarket(
            'https://docs.google.com/document/d/1vdveYj9i4MnqITwsB2HOr1cDXZi6WVIeUVaMnDsnLV0/edit'
          )
        "
      >
        <div
          class="relative m-1 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40"
        >
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Flag_of_the_Philippines.svg/800px-Flag_of_the_Philippines.svg.png"
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

<style scoped lang="scss">
.typing {
  overflow: hidden;
  white-space: nowrap;
  animation:
    typing 2s steps(40, end),
    blink-caret 0.75s step-end infinite;
}

@keyframes typing {
  from {
    width: 0;
  }
  to {
    width: 100%;
  }
}

@keyframes blink-caret {
  from,
  to {
    border-color: transparent;
  }
  50% {
    border-color: orange;
  }
}
</style>
