<template>
    <div class="skills">
        <h2>MY SKILLS</h2>
        <div class="skill-grid">
            <div class="skill-card" v-for="skill in skills">
                <h3>{{ skill.name }}</h3>
                <p class="skill-description">{{ skill.description }}</p>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
interface Skill {
    name: string;
    description: string;
}
defineProps<{
    skills: Skill[];
}>();

</script>

<style scoped>
.skills {
    padding: 1rem;
}

.skill-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 2rem;
    margin: 2rem 0;
}

.skill-card {
    padding: 1.5rem;
    border-radius: 8px;
    background: #f5f5f5;
    color: #333333;
    transition: transform 0.3s;
}

.skill-description {
    color: #777777;
}

.skill-card:hover {
    transform: translateY(-5px);
}

ul {
    list-style: none;
    padding: 0;
    margin: 0;
}

li {
    padding: 0.5rem 0;
    font-size: 1.1rem;
}
</style>