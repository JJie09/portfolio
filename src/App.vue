<template>
  <header class="md-header">
    <nav class="md-nav">
      <a class="md-nav-link" href="#intro">Home</a>
      <a class="md-nav-link" href="#skills">Skills</a>
      <a class="md-nav-link" href="#about">About</a>
      <a class="md-nav-link" href="#contact">Contact</a>
    </nav>
  </header>

  <main class="md-main">
    <Home />
  </main>

  <footer class="md-footer">
    <p>© All rights reserved.</p>
  </footer>
</template>
<script setup lang="ts">
import Home from './views/Home.vue'
</script>

<style>
.md-header {
  background: var(--md-primary);
  padding: 1rem;
  box-shadow: var(--md-elevation-4);
  position: sticky;
  top: 0;
  z-index: 1;
}

.md-nav {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  gap: 2rem;
  justify-content: center;
}

.md-nav-link {
  color: var(--md-on-primary);
  text-decoration: none;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  transition: background-color 0.3s, box-shadow 0.3s;
  font-weight: 500;
  letter-spacing: 0.0892857143em;
}

.md-main {
  max-width: 1200px;
  padding: 1rem 1rem 0rem 1rem;
  min-height: calc(100vh - 200px);
}

.md-footer {
  background: var(--md-surface);
  padding: 1.5rem;
  box-shadow: var(--md-elevation-1);
  color: var(--md-on-surface);
}

html {
  scroll-behavior: smooth;
}
</style>
