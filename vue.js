const app = {
    data() {
        return {
            num1: '',
            num2: '',
            op: '',
            ans: '',
            result: '',
            history: [],
        }
    },
    methods: {
        plus() {
            this.ans = this.num1 + this.num2;
            this.op = '+';
        },
        minus() {
            this.ans = this.num1 - this.num2;
            this.op = '-';
        },
        times() {
            this.ans = this.num1 * this.num2;
            this.op = '*';
        },
        divided() {
            this.ans = this.num1 / this.num2;
            this.op = '/';
        },
        output() {
            this.result = this.ans;
            if (this.history.length < 3){
                this.history.push( this.num1 + ' ' + this.op + ' ' + this.num2 + ' = ' + this.result);
            }else {
                this.history.shift();
                this.history.push( this.num1 + ' ' + this.op + ' ' + this.num2 + ' = ' + this.result);
            }
            
        },
        clear() {
            this.num1 = '';
            this.num2 = '';
            this.result = '';
        }
    },
    mounted() {
        
    }
}

Vue.createApp(app).mount('#app');















