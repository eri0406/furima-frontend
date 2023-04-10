import axios from 'axios';
import React, { useState, useEffect } from 'react';


const List = () =>  {

  const [items, setItems] = useState([]);

   useEffect(() => {
     axios.get('http://localhost:3001/items')
     .then(res => {
       setItems(res.data) 
     })
   },[])

return(
  <>
  <div className='itemContents'>
    <h3 className='itemTitle'>ピックアップカテゴリ</h3>
    <h4 className='subTitle'>新規投稿商品</h4>
      <ul className='indexItem'>
        {
          items.map((item) => <li key={item.id}>
            <img src={item.image_url} alt="" />
            <p>{item.name}</p>
            <p>{item.price}円</p>
            <p>{item.load_name}</p>
            </li>)
        }
      </ul>
    </div>
  </>
  );
}

export default List;