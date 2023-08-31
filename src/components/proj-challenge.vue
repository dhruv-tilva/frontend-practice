<template>
    <div class="w-full p-6 bg-black max-w-[350px] lg:mx-3 md:mr-3"
        :class="{ 'h-44': abletontitle == 'Backstage Talks' || abletontitle == 'GoDaddy' || abletontitle == 'Nintendo' || abletontitle == 'Nintendo' || abletontitle == 'Starbucks', 'h-36': abletontitle == 'Pulse' || abletontitle == 'Instrument' }">
        <h2 class="text-3xl font-bold mb-3 text-white font-dm">Up for a challenge?</h2>
        <p class="text-base font-normal mt-3 text-white font-archivo">{{ abletonupChallenge }}</p>
    </div>
</template>

<script>
export default {
    inject: ['abletonupChallenge', 'abletontitle']
}
</script>