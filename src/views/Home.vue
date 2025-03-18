<template>
    <div>
        <section id="intro">
            <Intro :name="profile.name" />
        </section>
        <section id="skills">
            <Skills :skills="profile.skills" />
        </section>
        <section id="about">
            <About :abouts="profile.abouts" />
        </section>
        <section id="contact">
            <Contact :email="profile.email" :linkedin="profile.linkedin" :github="profile.github" />
        </section>
    </div>
</template>

<script setup lang="ts">
import Intro from '../components/Intro.vue'
import Skills from '../components/Skills.vue'
import About from '../components/About.vue'
import Contact from '../components/Contact.vue'
import profile from '../assets/profile.json'

</script>

<style scoped>
section {
    scroll-margin-top: 100px;
    margin: 0rem 0rem 2rem 0rem;
}
</style>