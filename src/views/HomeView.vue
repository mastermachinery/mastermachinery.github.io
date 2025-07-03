<!-- src/views/Home.vue -->
<template>
  <div>
    <!-- Hero banner -->
    <div class="hero-banner position-relative">
      <div class="overlay"></div>
      <div
        class="position-absolute top-50 start-50 translate-middle text-white text-center"
      >
        <h1 class="display-4 fw-bold">Welcome to Master Machinery</h1>
        <p class="lead">
          Custom Machining & Hydraulic Repair Serving Princeton, WV with 28+
          Years of Precision & Reliability.
        </p>
      </div>
    </div>

    <!-- Below-the-fold content -->
    <div class="container mt-5">
      <h2>Why Choose Us?</h2>
      <p>
        Master Machinery is your trusted source for custom machining and expert
        repair of hydraulic equipment in Princeton, WV. With over 28 years of
        hands-on experience, we deliver precision-crafted parts and dependable
        repair solutions tailored to your exact needs. Whether it’s rebuilding
        cylinders, repairing hydraulic pumps, or fabricating components to spec,
        we combine craftsmanship with quality service to keep your equipment
        running strong. Serving local industries with pride, reliability, and
        the skill only decades of experience can offer.
      </p>
    </div>
  </div>
</template>

<script setup></script>

<style scoped>
.hero-banner {
  background-image: url("@/assets/banner.jpg");
  background-size: cover;
  background-position: center;
  height: 60vh;
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5); /* dark overlay */
}
</style>
