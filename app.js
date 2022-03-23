
const app = Vue.createApp({

    template: '',
    data() {
        return {
            name: {title: 'Mr', first: 'John', last: 'Doe'},
            email: 'johndoe@gmail.com',
            username: 'johndoe',
            dob: {date: '1989-01-01', age: 33 },
            gender: 'male',
            btn_class: 'btn-primary',
            img_class: 'border-primary',
            picture: 'https://randomuser.me/api/portraits/men/10.jpg'
        }
    },
    methods: {
        async getUser() {
            const res = await fetch('https://randomuser.me/api')
            const { results } = await res.json();

            // console.log(results[0])

            this.name = results[0].name;
            this.email = results[0].email;
            this.username = results[0].login.username;
            this.dob = results[0].dob;
            this.gender = results[0].gender;
            this.btn_class = this.gender == 'male' ? 'btn-primary' : 'btn-warning';
            this.img_class = this.gender == 'male' ? 'border-primary' : 'border-warning';
            this.picture = results[0].picture.large;

        }
    }
});

app.mount('#app')