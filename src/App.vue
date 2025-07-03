<!-- src/App.vue -->
<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary my-0 py-0">
      <div class="container py-0 my-0">
        <router-link to="/" class="navbar-brand d-flex align-items-center">
          <img
            src="@/assets/LogoWhite.png"
            alt="Master Machinery Logo"
            height="85"
            class="me-0 py-0 my-0"
          />
        </router-link>

        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ms-auto">
            <li class="nav-item">
              <router-link to="/" class="nav-link">Home</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/about" class="nav-link">About Us</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/contact" class="nav-link"
                >Contact Us</router-link
              >
            </li>
          </ul>
        </div>
      </div>
    </nav>

    <main>
      <router-view />
    </main>

    <footer class="bg-light text-center p-4 mt-5">
      <p class="mb-0">&copy; 2025 Master Machinery. All rights reserved.</p>
    </footer>
  </div>
</template>

<script setup></script>
