const root = new Vue({
    el: '#root',
    data: {
        cards: [
            {
                img: 'img/01.jpg',
                title: 'Svezia',
                text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
                
                status: true,
                classActive: 'active',
            },
            {
                img: 'img/02.jpg',
                title: 'Svizzera',
                text: 'Lorem ipsum.',
                
                status: false,
                classActive: '',
            },
            {
                img: 'img/03.jpg',
                title: 'Gran Bretagna',
                text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
                
                status: false,
                classActive: '',
            },
            {
                img: 'img/04.jpg',
                title: 'Germania',
                text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam.',
                
                status: false,
                classActive: '',
            },
            {
                img: 'img/05.jpg',
                title: 'Paradise',
                text: 'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam.',
                
                status: false,
                classActive: '',
            },
        ],

        counter: 0,
    },

    methods: {
        scrollUp(){
            if(this.counter > 0){
                //display none to previous hero img
                this.cards[this.counter].status = false;
                //remove active class to previous thumbnail
                this.cards[this.counter].classActive = '';
                
                //increment counter
                this.counter--

                //display block to current hero img
                this.cards[this.counter].status = true;
                //add active class to current thumbnail
                this.cards[this.counter].classActive = 'active';

            } else {
                //remove display & class to last elements in array
                this.cards[this.counter].status = false;
                this.cards[this.counter].classActive = '';
                
                //reset counter
                this.counter = this.cards.length - 1;

                //add display & class to first elements in array
                this.cards[this.counter].status = true;
                this.cards[this.counter].classActive = 'active';
            }
            console.log(this.counter);
        },
        
        scrollDown(){
            if(this.counter < this.cards.length - 1){
                //display none to previous hero img
                this.cards[this.counter].status = false;
                //remove active class to previous thumbnail
                this.cards[this.counter].classActive = '';
                
                //increment counter
                this.counter++

                //display block to current hero img
                this.cards[this.counter].status = true;
                //add active class to current thumbnail
                this.cards[this.counter].classActive = 'active';

            } else {
                //remove display & class to last elements in array
                this.cards[this.counter].status = false;
                this.cards[this.counter].classActive = '';
                
                //reset counter
                this.counter = 0;

                //add display & class to first elements in array
                this.cards[this.counter].status = true;
                this.cards[this.counter].classActive = 'active';
            }
            console.log(this.counter);
        }

    }
});

