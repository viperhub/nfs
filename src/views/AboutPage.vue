<script setup lang="ts"></script>

<template>
  <main>
    <!-- Container for demo purpose -->
    <div class="container my-2 mx-auto md:px-6">
      <!-- Section: Design Block -->
      <section class="mb-10">
        <div
          class="relative h-[300px] overflow-hidden bg-cover bg-[50%] bg-no-repeat bg-[url('/images/about.jpeg')]"
        ></div>
        <div class="container px-6 md:px-12">
          <div
            class="block rounded-lg bg-[hsla(0,0%,100%,0.8)] px-6 py-12 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] md:py-16 md:px-12 -mt-[100px] backdrop-blur-[30px]"
          >
            <div class="flex flex-wrap">
              <div
                class="mb-12 w-full shrink-0 grow-0 basis-auto md:px-3 lg:mb-0 lg:w-5/12 lg:px-6"
              >
                <form>
                  <div class="relative mb-6" data-te-input-wrapper-init>
                    <input
                      type="text"
                      class="peer block min-h-[auto] w-full rounded border-0 bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                      id="exampleInput90"
                      placeholder="Name"
                    />
                    <label
                      class="pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none"
                      for="exampleInput90"
                      >Tên
                    </label>
                  </div>
                  <div class="relative mb-6" data-te-input-wrapper-init>
                    <input
                      type="email"
                      class="peer block min-h-[auto] w-full rounded border-0 bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                      id="exampleInput91"
                      placeholder="Email address"
                    />
                    <label
                      class="pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none"
                      for="exampleInput91"
                      >Email
                    </label>
                  </div>
                  <div class="relative mb-6" data-te-input-wrapper-init>
                    <textarea
                      class="peer block min-h-[auto] w-full rounded border-0 bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                      id="exampleFormControlTextarea1"
                      rows="3"
                      placeholder="Nội dung"
                    ></textarea>
                    <label
                      for="exampleFormControlTextarea1"
                      class="pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none"
                      >Nội dung quan tâm</label
                    >
                  </div>
                  <button
                    type="button"
                    data-te-ripple-init
                    data-te-ripple-color="light"
                    class="mb-6 inline-block w-full rounded bg-primary px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] lg:mb-0"
                  >
                    Gửi
                  </button>
                </form>
              </div>
              <div class="w-full shrink-0 grow-0 basis-auto lg:w-7/12">
                <div class="flex flex-wrap">
                  <div
                    class="mb-12 w-full shrink-0 grow-0 basis-auto md:w-6/12 md:px-3 lg:w-full lg:px-6 xl:w-6/12"
                  >
                    <div class="flex items-start">
                      <div class="ml-6 grow">
                        <p class="mb-2 font-bold">Địa chỉ</p>
                        <p class="text-neutral-500">
                          Số 28 Lô 6 ngõ 23 Lê Văn Lương - Nhân Chính - Thanh Xuân
                        </p>
                        <p class="text-neutral-500">0968.959.567</p>
                      </div>
                    </div>
                  </div>
                  <div
                    class="mb-12 w-full shrink-0 grow-0 basis-auto md:w-6/12 md:px-3 lg:w-full lg:px-6 xl:w-6/12"
                  >
                    <div class="flex items-start">
                      <div class="ml-6 grow">
                        <p class="mb-2 font-bold">Đường dây nóng</p>
                        <p class="text-neutral-500">0968.959.567</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </main>
</template>
