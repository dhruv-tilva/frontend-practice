<template>
    <div class="px-4 my-4 max-w-[650px] mx-auto md:px-1">
        <p v-if="clickData == 'View All'" class="font-archivo font-bold text-lg text-center mb-4 mt-8">There are no
            rules with these projects. Use any languages, libraries, or frameworks you want to recreate and learn from them.
        </p>
        <p v-else-if="clickData == 'Level 1'"
            class="font-archivo font-bold text-lg text-center mb-4 mt-8 max-w-sm mx-auto bg-lime-200 p-2">A great place
            to
            start learning about layouts, animations, color choices, and more.</p>
        <p v-else-if="clickData == 'Level 2'"
            class="font-archivo font-bold text-lg text-center mb-4 mt-8 max-w-lg mx-auto bg-yellow-200 p-2">A wonderful
            variety of projects with well designed layouts, interactive elements, hover effects and animations.
        </p>
        <p v-else-if="clickData == 'Level 3'"
            class="font-archivo font-bold text-lg text-center mb-4 mt-8 max-w-lg mx-auto bg-amber-400 p-2">Test
            and push
            your skills even further with these complex layouts, animations, and interactive elements.
        </p>
        <p v-else-if="clickData == ''" class="font-archivo font-bold text-lg text-center mb-4 mt-8 p-2">There are no
            rules with these projects. Use any languages, libraries, or frameworks you want to recreate and learn from them.
        </p>
    </div>
</template>

<script>
export default {
    props: ['clickData']
}
</script>