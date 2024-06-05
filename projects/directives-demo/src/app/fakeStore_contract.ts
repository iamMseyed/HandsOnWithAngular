/*
{
    "id":1,
    "title":"Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    "price":109.95,
    "description":"Your perfect pack for everyday use and walks in the forest.",
    "category":"men's clothing",
    "image":"https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    "rating":
      {
        "rate":3.9,
        "count":120
      }
    }
*/
// type of json converted to typescript
export interface Product {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
    rating:{
        rate: number;
        count: number;
    }
  }