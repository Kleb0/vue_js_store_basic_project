<template>
    <div class="product List">
      <h1>Our products </h1>
      <div class="product-grid">
        <!-- Boucle sur les produits récupérés du store pour les afficher -->
        <div v-for="product in products" :key="product.id" class="product-card">
            <img :src="product.image" alt="product image" class = "product-image"/>
            <h3 class="product-price">{{ product.title }}</h3>
            <h3 class="product-price">{{product.price }} €</h3>
            <div class ="mt-auto">
                <button 
                @click="addToCart(product)"
                class="add-to-cart btn btn-success w-100">
                Add to cart</button>                
            </div>

        </div>
      </div>
    </div>
  </template>

<script>
    import { mapGetters, mapActions } from 'vuex';

    export default {
        
        name : 'ProductList',
        computed : {
            ...mapGetters(['products']),
        },
        methods: {
            ...mapActions(['addToCart']),
        },
        created(){
            //l'action sera déclenchée dès que le composant sera créé
            this.$store.dispatch('fetchProducts');
        },        
    };
</script>

<style scoped>

.product-list {
    padding : 20px;
    text-align : center;
}

.product-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 30px;
    margin-top: 20px;
}

.product-card{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background: #ffffff;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    padding: 16px;
    text-align : left;
    transition:  transform 0.3s ease;
}

.add-to-cart{
    margin-top: 10px;   

}

.product-card:hover{
    transform: translateY(-5px);
}

.product-image{
    width: 100%;
    height: 200px;
    object-fit: contain;
}

.product-title {
    font-size : 18px;
    margin: 10px 0;
}

.product-price {
    font-size : 16px;
    margin: 10px 0;
}

</style>