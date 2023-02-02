<template>
    <div class="flex gap-2 items-center px-2 py-1 rounded-full" :style="'background-color: ' + statistics.color">
        <img :src="'_nuxt/assets/img/' + statistics.iconPath" :alt="statistics.color + ' icon'" class="h-5">
        <p>{{ statistics.count }}</p>
    </div>
</template>


<script>
    export default{
        props: ['statistics'],     
    }
</script>

