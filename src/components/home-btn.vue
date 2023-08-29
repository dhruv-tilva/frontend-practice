<template>
    <RouterLink
        class="font-archivo py-3 px-4 text-black no-underline border-2 border-black hover:bg-black hover:text-white transition-colors duration-200 font-semibold"
        :class="background" to="/projects">{{ btnText }}</RouterLink>
</template>

<script>
export default {
    props: ['btnText', 'background']
}
</script>
