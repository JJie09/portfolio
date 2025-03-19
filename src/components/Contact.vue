<template>
    <div>
        <h2>CONTACT ME</h2>
        <div class="contact-card">
            <div class="contact-item" v-if="email">
                <div class="icon">
                    <font-awesome-icon :icon="['fas', 'envelope']" style="color: white" />
                </div>
                <div class="text">
                    <h3>Email</h3>
                    <a href="mailto:{{email}}" style="color: white">{{ email }}</a>
                </div>
            </div>
            <div class="contact-item" v-if="linkedin">
                <div class="icon">
                    <font-awesome-icon :icon="['fab', 'linkedin']" style="color: white" />
                </div>
                <div class="text">
                    <h3>Message</h3>
                    <a :href="linkedin" style="color: white">{{ linkedin }}</a>
                </div>
            </div>
            <div class="contact-item" v-if="github">
                <div class="icon">
                    <font-awesome-icon :icon="['fab', 'github']" style="color: white" />
                </div>
                <div class="text">
                    <h3>Github</h3>
                    <a :href="github" style="color: white">{{ github }}</a>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
defineProps<{
    email?: string,
    linkedin?: string,
    github?: string,
}>()

</script>

<style scoped>
.contact-item {
    display: flex;
    align-items: center;
    gap: 15px;
    max-width: 70%;
}

.icon {
    min-width: 50px;
    min-height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 2px solid white;
    border-radius: 50%;
    font-size: 24px;
}

.contact-card {
    margin: 0 auto;
    padding: 2rem;
    border-radius: 8px;
    position: relative;
    overflow: hidden;
}

.contact-card::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: url('../assets/background.webp');
    background-size: cover;
    background-position: center;
    filter: brightness(0.3) sepia(0.3) hue-rotate(15deg);
    z-index: -1;
}

.contact-card::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(255, 255, 255, 0.2);
    z-index: -1;
}

.text {
    color: white;
    font-size: 16px;
    margin: 1rem;
    opacity: 0.8;
    text-align: left;
    overflow-wrap: break-word;
    max-width: 100%;  
}

.text h3 {
    margin: 4px 0px;
}
</style>
