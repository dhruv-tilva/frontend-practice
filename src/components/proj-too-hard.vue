<template>
    <div class="p-6 bg-white border-2 border-black max-w-[350px] lg:mx-3"
        :class="{ 'h-44': abletontitle == 'Backstage Talks' || abletontitle == 'GoDaddy' || abletontitle == 'Nintendo' || abletontitle == 'Nintendo' || abletontitle == 'Starbucks', 'h-36': abletontitle == 'Pulse' || abletontitle == 'Instrument' }">
        <h2 class="text-3xl font-bold mb-3 text-black font-dm">Too hard?</h2>
        <p class="text-base font-normal mt-3 text-black font-archivo">That's ok! <br> <a
                class="underline hover:text-blue-600 transition-all duration-200 font-bold" href="">View other
                projects</a>
        </p>
    </div>
</template>

<script>
export default {
    inject: ['abletontitle']
}
</script>