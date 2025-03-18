<template>
    <div class="about">
        <h2>ABOUT ME</h2>
        <div class="skill-card" v-for="about in processedAbouts">
            <p class="about-description" v-html="about"></p>
        </div>
    </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps<{
    abouts: String[];
}>();

const processedAbouts = computed(() => {
    return props.abouts.map(about => {
        return about.replace(/\*([^*]+)\*/g, '<strong>$1</strong>');
    });
});

</script>

<style scoped>
.about {
    padding: 0 2rem;
}

.about-description {
    color: #777777;
    margin-bottom: 1.5rem;
}
</style>