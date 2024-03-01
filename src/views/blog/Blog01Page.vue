<template>
  <main class="pt-4 pb-16 lg:pt-4 lg:pb-24">
    <section class="px-3">
      <main class="max-w-6xl mx-auto mt-4 lg:mt-4 space-y-6">
        <article class="max-w-7xl mx-auto lg:grid lg:grid-cols-12 gap-x-10">
          <div
            class="h-fit sticky md:top-20 md:z-20 col-span-4 text-center flex flex-col min-w-0 break-words border-0 shadow-xl bg-center bg-cover rounded-2xl"
            :style="{
              backgroundImage: `url('https://media.baodautu.vn/Images/phuongthanh/2023/03/22/TM%C4%90T%20%C4%90%C3%B4ng%20Nam%20%C3%81.jpg')`,
              backgroundPositionY: '100%',
              backgroundSize: 'cover'
            }"
          >
            <div
              class="h-full shadow-blur bg-gray-400/90 bg-clip-border backdrop-blur-2xl backdrop-saturate-200 p-4 rounded-2xl"
            >
              <div class="w-full rounded-xl relative overflow-hidden">
                <div class="image-container">
                  <img
                    src="https://media.baodautu.vn/Images/phuongthanh/2023/03/22/TM%C4%90T%20%C4%90%C3%B4ng%20Nam%20%C3%81.jpg"
                    alt="banner"
                    class="w-full h-full object-contain rounded-xl"
                  />
                </div>
              </div>

              <div class="pt-3 space-x-2">
                <i
                  class="text-sm text-gray-200 line-clamp-3"
                  :class="showMore === true ? 'line-clamp-none' : ''"
                >
                  Thương mại điện tử đang bùng nổ tại Đông Nam Á, đặc biệt là tại các quốc gia có
                  nền kinh tế phát triển như Singapore, Malaysia, Thái Lan, Indonesia, Philippines,
                  Việt Nam. Đây là cơ hội lớn cho các doanh nghiệp trong và ngoài khu vực.
                </i>
                <i
                  v-if="showMore === false"
                  class="text-sm font-bold text-gray-200 line-clamp-7 cursor-pointer"
                  @click="showMore = !showMore"
                >
                  Xem thêm
                </i>

                <i
                  v-if="showMore"
                  class="text-sm font-bold text-gray-200 line-clamp-none cursor-pointer"
                  @click="showMore = !showMore"
                >
                  Thu gọn
                </i>
              </div>

              <p class="mt-4 block text-gray-100 text-xs font-bold">
                Ngày đăng:
                <time>12/12/2023</time>
              </p>
            </div>
          </div>

          <div class="col-span-8">
            <h1 class="font-bold text-3xl lg:text-4xl mb-10 py-3">
              THƯƠNG MẠI ĐIỆN TỬ BÙNG NỔ TẠI ĐÔNG NAM Á
            </h1>

            <div class="space-y-4 lg:text-lg leading-loose">
              <h2 class="text-gray-600">
                TTO - Báo cáo "SYNC Southeast Asia" mô tả Đông Nam Á là khu vực dẫn đầu về chuyển
                đổi số ở châu Á - Thái Bình Dương và Việt Nam là một trong những quốc gia có màn thể
                hiện xuất sắc nhất tại khu vực này.
              </h2>

              <img
                src="https://cdn.tuoitre.vn/thumb_w/730/2021/11/26/vietnam-1637926212042507115026.jpeg"
                alt="banner"
              />

              <p>
                Ngày 25-11, trang Fibre2fashion dẫn một báo cáo nghiên cứu cho biết Việt Nam được dự
                báo sẽ là thị trường thương mại điện tử phát triển nhanh nhất ở Đông Nam Á vào năm
                2026, với tổng giá trị hàng hóa thương mại điện tử (GMV) đạt 56 tỉ USD, gấp 4,5 lần
                giá trị ước tính vào năm 2021.
              </p>

              <p>
                Thông tin này được đưa ra trong báo cáo hằng năm "SYNC Southeast Asia" (SYNC Đông
                Nam Á) của Facebook và Công ty tư vấn Bain & Company (Mỹ).
              </p>

              <p>
                Báo cáo cho biết Việt Nam đang đi đầu trong việc thúc đẩy các thay đổi và nắm bắt cơ
                hội phát triển dựa trên sự chuyển đổi kỹ thuật số trong thời kỳ hậu đại dịch
                COVID-19.
              </p>

              <p>
                Báo cáo đã khảo sát khoảng 16.700 người dùng kỹ thuật số và hơn 20 nhân viên cấp cao
                ở 6 quốc gia Đông Nam Á, trong đó có 3.579 người tham gia khảo sát đến từ Việt Nam.
              </p>

              <p>
                Nghiên cứu mô tả Đông Nam Á là khu vực dẫn đầu về chuyển đổi kỹ thuật số ở châu Á -
                Thái Bình Dương và Việt Nam là một trong những quốc gia có màn thể hiện xuất sắc
                nhất. Tại Việt Nam, cứ 10 người tiêu dùng sẽ có 7 người truy cập kỹ thuật số. Việt
                Nam sẽ có 53 triệu người tiêu dùng kỹ thuật số vào cuối năm 2021. Số danh mục hàng
                hóa được người mua sắm trực tuyến Việt Nam mua trong năm nay đã tăng 50% so với năm
                2020, trong khi số lượng cửa hàng trực tuyến tại Việt Nam cũng tăng 40% so với cùng
                kỳ năm ngoái, nhờ đó tổng doanh số bán lẻ trực tuyến trên toàn quốc tăng gấp 1,5
                lần. Khoảng 49% người tiêu dùng Việt Nam đã chuyển sang mua sắm trực tuyến trong
                vòng 3 tháng qua dựa trên những xem xét đối với các ưu đãi về giá (45%), chất lượng
                sản phẩm (34%) và sự sẵn có của hàng hóa (33%). Lần đầu tiên, việc thanh toán bằng
                tiền mặt có nguy cơ bị "truất ngôi" với mức giảm đáng kể từ 60% (năm 2020) xuống còn
                42% (năm 2021). Tính an toàn, quyền riêng tư và phí dịch vụ là ba mối quan tâm chính
                của người tiêu dùng Việt Nam khi xem xét các loại hình thanh toán này. Năm 2021,
                người Việt Nam dành phần lớn thời gian cho việc sử dụng mạng xã hội, nhắn tin, xem
                video, mua sắm trực tuyến và gửi thư điện tử (email). Người Việt Nam đã sử dụng 72%
                thời gian của mình cho các hoạt động tại nhà thay vì ra ngoài.
              </p>
            </div>
          </div>
        </article>
      </main>
    </section>
  </main>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const showMore = ref(false)
</script>
