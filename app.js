Vue.component('comment', {
    props: ['comment'],
    template: `
        <div class="card mb-3">
            <div class="card-body">
                <div class="d-flex align-items-center mb-3">
                    <img src="images/profile.png" alt="Profile" class="profile-img" @click="$emit('profile-click', comment.author)">
                    <div class="ml-3">
                        <h5 class="card-title">{{ comment.author }}</h5>
                        <small class="text-muted">{{ comment.date }}</small>
                    </div>
                </div>
                <p class="card-text">{{ comment.text }}</p>
                <button class="btn btn-link" @click="showProfile(comment.author)">View Profile</button>
            </div>
        </div>
    `,
});

new Vue({
    el: '#app',
    data: {
        comments: [
            { id: 1, author: 'Brianna', date: 'Feb 18, 2025', text: 'Was amazing! My Walmart didn’t have coriander in stock and didn’t have ground cumin. I used serrano instead of jalapeño. It was just like my favorite tortilla soup from BJs. I am sending this recipe to my family. I want everyone to try it!' },
            { id: 2, author: 'LINH', date: 'Feb 15, 2025', text: 'I just made this soup today and it’s so tasty! didn’t have corn at home but still turned out very good. It’s a winner! I made beef chili for my parents; but since my dad has gout he can’t eat beef; this white chicken chili is perfect for him. Thank you Lisa!' },
            { id: 3, author: 'CATHERINE LEONARDO', date: 'Feb 13, 2025', text: 'I LOVE this White Chicken Chili! You are right, it is satiating meal—delicious with toasted bread. Refreshingly different taste than any chicken chili I’ve made in the past. I made it exactly as written and added some chopped zucchini, carrots, and celery. Instead of shredding the chicken, I chopped it into small pieces. It freezes very well. Will be an all-time favorite, for sure.' },
            { id: 4, author: 'KALI', date: 'Feb 13, 2025', text: 'This recipe is dynamite! My partner usually won’t eat beans but he finished the whole pot (darn was hoping to have some for leftovers haha). This is crowd-pleaser that I am going to add to my regular recipe rotation. Thanks so much, Lisa' }
        ],
        showFloatingBox: false,
        selectedProfile: { name: '', foodieLevel: '', bio: '' },
        profiles: {
            'Brianna': { foodieLevel: 'Novice', bio: 'Food enthusiast. Love to cook and experiment. Into only organic, fat free, sugar free stuffs!' },
            'LINH': { foodieLevel: 'Newcomer', bio: 'Love food! Grew up with meat and potatoes. Recently venture outside my comfort zone. Loving everything I have been eating so far. Thai is my favorite at this time' },
            'CATHERINE LEONARDO': { foodieLevel: 'Mentor', bio: 'I have to say I never was the adventurous type until 2 years ago. My boyfriend, who is of Japanese background, exposed me to other cultural food and I have never looked back since!' },
            'KALI': { foodieLevel: 'Novice', bio: 'Food is my passion. So is cooking. I love to experiment and try new things. I have to admit I am a food whore! Invite me over for dinner and I will be there!' }
        }
    },
    methods: {
        showProfile(author) {
            if (this.profiles[author]) {
                this.selectedProfile = { ...this.profiles[author], name: author };
                this.showFloatingBox = true;
            }
        },
        closeProfile() {
            this.showFloatingBox = false;
        }
    }
});
