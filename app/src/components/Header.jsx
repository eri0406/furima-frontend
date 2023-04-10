import React from 'react';

const Header = () => {

return(
<>
<div className='topHeader'>
  <div className='leftHeader'>
    <h2 className='leftHeaderName'>FURIMA</h2>
  </div>
    <form className="inputForm" action="#">
      <input className="inputBox" type="text" placeholder="キーワードから探す"></input>
        <button className="inputBtn">
          <i className="magnifyingGlass" class="faSolidMagnifyingGlass">検 索</i>
        </button>
    </form>
</div>

<div className='nav'>
  <ul className='leftLink'>
    <li className='leftList'>
      <a href='#'>カテゴリ</a>
    </li>
    <li className='leftList'>
      <a href='#'>ブランド</a>
    </li>
  </ul>
  <ul className='rightLink'>
    <li className='rightList'>
      <a href='#'>ログイン</a>
    </li>
    <li className='rightList'>
      <a href='#'>新規登録</a>
    </li>
    <li className='rightList'>
      <a href='#'>出品する</a>
    </li>
  </ul>
</div>

<div className='headerTitle'>
  <h2 className='headerMain'>人生を変えるフリマアプリ</h2>
    <p className='headerSub'>FURIMAは誰でも出品・購入ができる</p>
    <p className='headerSub'>フリマアプリです</p>
</div>

<div className='selectReason'>
  <h2 className='listContents'>FURIMAが選ばれる3つの理由</h2>
    <ul className='contentList'>
      <li className='list'>
        <h3 className='listContent'>3分ですぐに出品</h3>
        <p className='listDesc'>スマホで入力するだけで簡単に出品できる！</p>
      </li>
      <li className='list'>
        <h3 className='listContent'>シンプルで使いやすい</h3>
        <p className='listDesc'>めんどくさい入力は必要なく、検索も購入可能！</p>
      </li>
      <li className='list'>
        <h3 className='listContent'>手数料が業界最安</h3>
        <p className='listDesc'>10%でお得に出品&購入！</p>
      </li>
    </ul>
</div>
</>
)
}

export default Header;
