export default {
    data() {
        return {
            counter: 0,
            msgg:'mounted from mixin'
        };
    },
    mounted() {
        console.log('mounted from mixin');

    },
    methods: {
        onIncrement(count) {
            this.counter += count;
        },
    },
};
