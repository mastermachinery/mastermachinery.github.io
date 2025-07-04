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
          Custom Machining & Hydraulic Repair Serving Bluefield and Princeton,
          WV with 28+ Years of Precision & Reliability.
        </p>
      </div>
    </div>

    <!-- Below-the-fold content -->
    <div class="container mt-5">
      <h2>Why Choose Us?</h2>
      <p>
        With over 28 years of experience, Master Machinery delivers expert
        machining and reliable repair services you can count on. From rebuilding
        hydraulic cylinders to custom fabrication, we tackle the tough jobs with
        precision and pride. Locally owned and operated by Willie Worley, we
        serve the Bluefield and Princeton, WV area with honest work, fast
        turnaround times, and a commitment to keeping your equipment running
        strong.
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
