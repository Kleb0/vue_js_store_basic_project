<template>
    <div class="shopping-bag">
      <h1>Your Shopping Bag</h1>
      <div v-if="cart.length === 0">
        <p>Your shipping bag is empty.</p>
      </div>
      <div v-else class="cart-items">
        <div v-for="item in cart" :key="item.id" class="cart-item">
          <img :src="item.image" alt="product image" class="cart-item-image"/>
          <div class="item-info">
            <h3 class="cart-item-title">{{ item.title }}</h3>
            <h3 class="cart-item-price">{{ item.price }} €</h3>
          </div>

          <button
            @click="removeFromCart(item.uniqueId)"
            class="remove-from-cart btn btn-danger w-100">
            Remove from cart
          </button>
          </div>
          <div class="total-container">
            <h2>Total : {{ cartTotal }} €</h2>
          </div>
      </div>      
    </div>

  </template>

<script>
import { mapGetters, mapActions } from 'vuex';

    export default {    
        name : 'ShoppingBag',
        computed : {
          ...mapGetters(['cart', 'cartTotal']) // we get the cart and the total from getters
        },
        methods: {
          ...mapActions(['removeFromCart']) // we get the action removeFromCart from our methods
        }        
    }
</script>

<style scoped>

.shopping-bag {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
}

.cart-items {
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 95%;
  margin-left: 30px;
}

.cart-item{
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #ffffff;
  border-radius: 8px;
  box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.15), 
              0px 12px 12px rgba(0, 0, 0, 0.1), 
              0px 12px 12px rgba(0, 0, 0, 0.1),
              0px 4px 36px rgba(0, 0, 0, 0.25);
              
  padding: 16px;
  transition: transform 0.3s ease;

}

.cart-item:hover {
  transform: translateY(-5px);
}

.cart-item-image {
  width: 100px;
  height: 100px;
  object-fit: contain;
  margin-right: 15px;
}

.item-info {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  flex: 2;
  margin-left: 50px;

}

.cart-item-title {
  font-size: 20px;

}

.cart-item-price {
  font-size: 20px;
  margin-left: 400px;

}

.remove-from-cart {
  border: none;
  border-radius: 5px;
  color: white;
  padding: 10px 20px;
  cursor: pointer;
  font-size: 14px;
  font-weight: bold;
  transition: background-color 0.3s ease;
  max-width: 200px;
}

.remove-from-cart:hover {
  background-color: #ff3333;
}

.total-container {
  display: flex;
  justify-content: flex-end; 
  width: 100%; 
  padding-right: 20px; 
}

.total-container h2 {
  font-size: 24px;
  font-weight: bold;
}

</style>