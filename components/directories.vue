<template>
    <div class="flex items-center gap-3 px-10 pb-12">
        <div v-for="(singlePath, index) in path" class="flex opacity-40 last:opacity-100 gap-3">
            <img src="~/assets/img/right-arrow-dark.svg" alt="right button icon" v-if="index!=0">
            <p>{{ singlePath }}</p>
        </div>
    </div>
</template>

<script>
    export default{
        props: ['path'],     
    }
</script>

