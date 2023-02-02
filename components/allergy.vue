<template>
    <div class="flex items-center gap-2">
        <img :src="'_nuxt/assets/img/' + iconSrc" :alt="allergyName + 'icon'">
        <p class="text-sm">{{ allergyName }}</p>
    </div>
</template>


<script>

    export default{
        props: ['allergyName' , 'iconSrc'],     
    }
</script>

