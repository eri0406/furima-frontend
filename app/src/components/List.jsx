// import applyCaseMiddleware from 'axios-case-converter';
import axios from 'axios';
import React, { useState, useEffect } from 'react';
// import React from 'react';


// const options =  {
//   ignoreHeaders: true,
// };

// const List = applyCaseMiddleware(
//   axios.create({
//     baseURL: 'http://localhost:3000/items',
//   }),
//   options
// );

const List = () =>  {

  const [items, setItems] = useState([]) ;

   useEffect(() => {
     axios.get('http://localhost:3001/items')
     .then(res => {
       console.log(res.data)
       setItems(res.data) 
     })
     .catch(error =>{
      console.log(error)
     })
   },[])


return(
  <>
  <div className='itemContents'>
    <h3 className='itemTitle'>ピックアップカテゴリ</h3>
    <div className='subTitle'>新規投稿商品
      <ul>
        {
          items.map((item) => <li key={item.id}>
            {item.image}
            {item.name}
            {item.price}
            {item.load_id}
            </li>)
        }
      </ul>
    </div>
  </div>
  </>
  );
}

export default List;

// export default List = () => {
//   return List.get('/items');
// };