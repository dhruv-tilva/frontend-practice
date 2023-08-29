<template>
    <div class="w-full max-w-sm mx-auto pt-4">
        <form action="" class="w-full">
            <div class="w-full max-w-sm mx-auto pt-4">
                <form action="" class="w-full">
                    <div class="w-full">
                        <label class="block font-bold" for="name">Name</label>
                        <input v-model="name"
                            class="mt-4 border-2 border-black p-4 w-full outline-none text-base font-archivo" type="text"
                            id="name" placeholder="Jane Code" required>
                    </div>

                    <div>
                        <label class="block font-bold mt-4" for="email">Email Address</label>
                        <input v-model="email"
                            class="mt-4 border-2 border-black p-4 w-full outline-none text-base font-archivo" type="email"
                            name="email" placeholder="email@webisite.com" required>
                    </div>

                    <div>
                        <label class="block font-bold mt-4" for="message">Message</label>
                        <textarea v-model="message"
                            class="mt-4 border-2 border-black p-2 w-full outline-none text-base font-archivo" name="message"
                            placeholder="What would you like to say?" cols="30" rows="10" required></textarea>
                    </div>

                    <button @click="onSubmition" v-if="!isSubmit"
                        class="w-36 mt-4 px-4 py-3 border-2 border-black bg-white text-black text-base font-bold hover:bg-black hover:text-white transition-all duration-200">Submit</button>
                    <p v-else class="font-semibold mt-4 text-center">Your Message has been sent, thanks!</p>
                </form>
            </div>
        </form>
    </div>
</template>


<script>
export default {
    data() {
        return {
            isSubmit: false,
            name: "",
            email: "",
            message: ""
        }
    },
    methods: {
        onSubmition() {
            if (this.name !== "" && this.email !== "" && this.message !== "") {
                this.isSubmit = true
            } else {
                this.isSubmit = false
            }
        }
    }
}
</script>