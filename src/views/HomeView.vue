<template>
    <div class="row">
        <div class="col-8">
            <instagram-card v-for="card in filteredCards" :key="card.url" :info="card" />
        </div>
        <div class="col-4">
            Sidebar
            <div>
                <br>
                <input v-model = "firstName" placeholder="Ime:" />
                <input v-model= "secondName" placeholder="Prezime:" />
                <br>
                <button @click="mergeNames">Spoji ime i prezime</button>
            </div>
            <div>
                <p>Spojeno ime i prezime: {{ mergedName }}</p>
            </div>
        </div>
    </div>
  </template>
  <script>
  // @ is an alias to /src
  import InstagramCard from '@/components/InstagramCard.vue';
  import store from '@/store';
  
  let cards = [];
  
  //... API/Firebase -> sve kartice -> cards
  
  cards = [
    { url: 'https://picsum.photos/id/1/400/400', description: 'laptop', time: 'few minutes ago...' },
    { url: 'https://picsum.photos/id/2/400/400', description: 'laptop #2', time: 'hour ago...' },
    { url: 'https://picsum.photos/id/3/400/400', description: 'laptop #3', time: 'few hours ago...' },
  ];
  
  export default {
    name: 'home',
    data: function() {
        return {
            cards,
            store,
            firstName: '',
            secondName:'',
            mergedName:'',
        };
    },

    methods: {
        mergeNames() {
            this.mergedName = this.firstName + ' ' + this.secondName;
        },
    },

    computed: {
        filteredCards() {
            // logika koja filtrira cards
            let termin = this.store.searchTerm;
  
            return this.cards.filter((card) => card.description.includes(termin));
        },
    },
    components: {
        InstagramCard,
    },
  };
  </script>