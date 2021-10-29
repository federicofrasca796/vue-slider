const root = new Vue({
    el: '#root',
    data: {
        cards: [
            {
                img: 'img/01.jpg',
                title: 'Svezia',
                text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
                status: true,
            },
            {
                img: 'img/02.jpg',
                title: 'Svizzera',
                text: 'Lorem ipsum.',
                status: false,
            },
            {
                img: 'img/03.jpg',
                title: 'Gran Bretagna',
                text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
                status: false,
            },
            {
                img: 'img/04.jpg',
                title: 'Germania',
                text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam.',
                status: false,
            },
            {
                img: 'img/05.jpg',
                title: 'Paradise',
                text: 'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam.',
                status: false,
            },
        ],

        counter: 0,
    },

    methods: {
        scrollUp(){
            //code here
        },
        
        scrollDown(){
            /* console.log(this['cards'][0].status);
            console.log(this.counter); */
            // console.log(this.cards[this.counter].status);
            this.cards[this.counter].status = false;
            this.counter++

            this.cards[this.counter].status = true;
            console.log(this.cards);
        }

    }
});

