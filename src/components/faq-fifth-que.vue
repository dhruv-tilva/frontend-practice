<template>
    <div class="max-w-[750px] w-full mt-5 border-2 border-black mx-auto">
        <p @click="isForth = !isForth"
            class="bg-orange-100 p-3 dm text-2xl font-bold leading-none border-black hover:underline hover:underline-offset-1 cursor-pointer"
            :class="{ 'border-b-2': isForth }">Where can I find
            images and icons?
        </p>
        <p v-show="isForth" class="text-lg font-normal px-3 py-5 font-archivo"><a
                class="font-bold text-black hover:text-blue-700 transition-all duration-200 underline" @cllick.prevent
                href="">Pexels</a> and <a href="">Pixabay</a> are
            excellent sources for free stock photos, while <a
                class="font-bold text-black hover:text-blue-700 transition-all duration-200 underline" @cllick.prevent
                href="">Boxicons</a> and <a
                class="font-bold text-black hover:text-blue-700 transition-all duration-200 underline" @cllick.prevent
                href="">Font Awesome</a>
            offer a variety of free icons. Links to these resources can be found at the top of every project page on
            Frontend Practice.
        </p>
    </div>
</template>

<script>
export default {
    data() {
        return {
            isForth: false
        }
    }
}
</script>