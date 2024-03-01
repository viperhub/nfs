<template>
  <section
    class="bg-[url('https://www.yeastar.com/wp-content/uploads/2020/12/Solution_for_Transportation_case_comic_img.png')] flex bg-cover bg-center font-poppins rounded-2xl shadow-md mb-8"
  >
    <div class="flex w-full backdrop-blur-md backdrop-saturate-600 bg-black/40">
      <div class="w-full h-[35vh] flex items-center justify-center">
        <div class="w-full mx-auto">
          <div class="text-center">
            <div class="relative flex flex-col items-center">
              <h2 class="text-3xl font-bold leading-tight text-orange-500">Tin tức mới nhất</h2>
              <div class="flex w-24 mt-1 mb-10 overflow-hidden rounded">
                <div class="flex-1 h-2 bg-orange-200"></div>
                <div class="flex-1 h-2 bg-orange-400"></div>
                <div class="flex-1 h-2 bg-orange-600"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
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
          tế phát triển như Singapore, Malaysia, Thái Lan, Indonesia, Philippines, Việt Nam. Đây là
          cơ hội lớn cho các doanh nghiệp trong và ngoài khu vực.
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
          bớt gánh nặng vận chuyển hàng hóa và quản lý kho. Vậy dịch vụ này có những ưu điểm gì? Hãy
          cùng tìm hiểu qua bài viết dưới đây.
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
          nặng vận chuyển hàng hóa và quản lý kho. Vậy dịch vụ này có những ưu điểm gì? Hãy cùng tìm
          hiểu qua bài viết dưới đây.
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
</template>
<script setup lang="ts"></script>
