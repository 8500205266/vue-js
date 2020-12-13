<template>
    <div>
        <button v-for="(item, index) in items" :key="index" @click="onItemSelected(item)">{{item}}</button>
        <p v-if="selectedItem">You selected {{selectedItem}}</p>
        <p v-else >Please select your favorite</p>
    </div>
</template>

<script>
    export default {
        
        props: ['items'],
        data() {
            return {
                selectedItem: null
            }
        },
        methods: {
            onItemSelected(item) {
                this.selectedItem = item;
            }
        }
    }
</script>

<style scoped>
    button {
        background: lightsteelblue;
    }
</style>