<template>
  <div class="container mt-5">
    <h1>About Us</h1>
    <p>
      At Master Machinery, we specialize in precision machining, heavy equipment
      repair, and custom fabrication for customers in Bluefield and Princeton,
      WV. Founded and operated by Willie Worley, our shop brings over 28 years
      of hands-on experience to every job—whether it's rebuilding hydraulic
      cylinders, repairing pumps, or fabricating components to exact
      specifications. We take pride in our craftsmanship, fast turnaround, and
      commitment to keeping your equipment running at peak performance. Whether
      you're a contractor, farmer, or industrial operator, Master Machinery is
      your trusted partner for reliable repairs and custom solutions. Let us put
      our experience to work for you.
    </p>
    <p>
      <router-link to="/contact">Contact us</router-link> today for a quote!
    </p>
  </div>
  <div class="gallery-container">
    <!--<h1 class="text-2xl font-bold text-center mb-4">Photo Slideshow</h1>-->
    <Swiper
      :modules="[Navigation, Pagination]"
      :slides-per-view="1"
      :space-between="20"
      navigation
      pagination
      class="mySwiper"
    >
      <SwiperSlide v-for="(photo, index) in photos" :key="index">
        <img
          :src="`/gallery/${photo}`"
          :alt="`Photo ${index + 1}`"
          class="gallery-image"
        />
      </SwiperSlide>
    </Swiper>
  </div>
</template>

<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation, Pagination } from "swiper/modules";

// Styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
const photos = [
  "IMG_1109.jpg",
  "IMG_1118.jpg",
  "IMG_1119.jpg",
  "IMG_1146.jpg",
  "IMG_1156.jpg",
  "IMG_1157.jpg",
  "IMG_1307.jpg",
  "IMG_1589.jpg",
  "IMG_1846.jpg",
  "IMG_1866.jpg",
  "IMG_1876.jpg",
  "IMG_1877.jpg",
  "IMG_2939.jpg",
  "IMG_2945.jpg",
  "77318849056__E679FCDC-D650-48D0-AF6E-BBDD275A3B3E.jpg",
  // Add more as needed
];
</script>

<style lang="css" scoped>
.gallery-container {
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem 1rem;
}

.gallery-image {
  width: 100%;
  height: 70vh;
  object-fit: contain;
  border-radius: 12px;
}
</style>
