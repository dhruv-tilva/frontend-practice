<template>
    <input type="text" @input="$emit('sendindInput', this.userInput)"
        class="block w-full max-w-[450px] outline-none px-4 py-3 border-2 border-black text-xl placeholder:text-gray-400 mx-auto focus:outline-dashed focus:outline-2 focus:outline-black focus:outline-offset-2"
        placeholder="Search">
</template>

<script>
export default {
    data() {
        return {
            userInput: ""
        }
    }
}
</script>

