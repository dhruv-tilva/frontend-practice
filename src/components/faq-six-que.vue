<template>
    <div class="max-w-[750px] w-full mt-5 border-2 border-black mx-auto">
        <p @click="isFifth = !isFifth"
            class="bg-orange-100 p-3 dm text-2xl font-bold leading-none border-black hover:underline hover:underline-offset-1 cursor-pointer"
            :class="{ 'border-b-2': isFifth }">Why did you pick
            these websites?
        </p>
        <p v-show="isFifth" class="text-lg font-normal px-3 py-5 font-archivo">The selection of websites featured on
            Frontend
            Practice is based on personal preference and takes into consideration various factors, including design
            and style, difficulty to recreate, and elements and features that offer a learning opportunity through
            recreation.</p>
        <p v-show="isFifth" class="text-lg font-normal px-3 py-5 font-archivo italic">It is important to note that
            some projects may
            be more challenging to recreate than others.</p>
    </div>
</template>

<script>
export default {
    data() {
        return {
            isFifth: false
        }
    }
}
</script>