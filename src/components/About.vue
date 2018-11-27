<template>
    <div class="about component">
        <AdSlot id="Example_300x250" />
        <div class="description">
            <p>
                Let me get this straight. You think that your client, one of the
                wealthiest, most powerful men in the world is secretly a
                vigilante who spends his nights beating criminals to a pulp with
                his bare hands and your plan is to blackmail this person? Good
                luck.
            </p>
            <p>
                You wanna know how I got them? So I had a wife. She was
                beautiful, like you, who tells me I worry too much, who tells me
                I ought to smile more, who gambles and gets in deep with the
                sharks. Hey. One day they carve her face. And we have no money
                for surgeries. She can't take it. I just wanna see her smile
                again. I just want her to know that I don't care about the
                scars. So, I do this to myself. And you know what? She can't
                stand the sight of me. She leaves. Now I see the funny side. Now
                I'm always smiling.
            </p>
        </div>
    </div>
</template>

<script>
import AdSlot from "@/components/AdSlot.vue";
export default {
    name: "about",
    components: {
        AdSlot
    }
};
</script>
<style scoped lang="scss">
.about {
    margin: 2em auto;
    text-align: left;
}
#Example_300x250 {
    float: left;
    margin: 0 2em 2em 0;
}
</style>
