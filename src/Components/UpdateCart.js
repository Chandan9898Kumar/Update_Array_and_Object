import { useState } from 'react';

const initialProducts = [{
    id: 0,
    name: 'Baklava',
    count: 1,
}, {
    id: 1,
    name: 'Cheese',
    count: 5,
}, {
    id: 2,
    name: 'Spaghetti',
    count: 2,
}];

const ShoppingCart = () => {
    const [products, setProducts] = useState(initialProducts)


    // Update an item in the shopping cart
    function handleIncreaseClick(productId) {
        setProducts(products.map((item) =>{
          if(item.id===productId){
            return {...item,count:item.count+1}
          }else{
            return item
          }
        }))

        //       OR We can do it like below as well   .

        // const data = products.map((item) => {
        //     if (item.id === productId) {
        //         return { ...item, count: item.count + 1 }
        //     } else {
        //         return item
        //     }
        // })
        // setProducts(data)

    }

    //
    const handleDecreaseClick =(ProductId)=>{
        const data=products.map((item)=>{
          if(item.id===ProductId){
                return {...item,count:item.count-1}
              }else{
                return item
              }
        })
        //     if your count is 0 then that item should be removed, uncomment below and check.

        // const result=data.filter((item)=> item.count>0)
        // setProducts(result)
        setProducts(data)



        // setProducts(products.map((item) =>{
        //   if(item.id===productId){
        //     return {...item,count:item.count+1}
        //   }else{
        //     return item
        //   }
    
        // }))
      }

    return (
        <ul>
            {products.map(product => (
                <li key={product.id}>
                    {product.name}
                    {' '}
                    (<b>{product.count}</b>)
                    <button onClick={() => {
                        handleIncreaseClick(product.id);
                    }}>
                        +
                    </button>
                    <button onClick={() => {
                        handleDecreaseClick(product.id);
                    }}>
                        -
                    </button>
                </li>
            ))}
        </ul>
    );
}
export default ShoppingCart;
