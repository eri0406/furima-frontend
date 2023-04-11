import React from 'react';

const Footer = () => {
  return(
  <>
<div className='footer'>
  <div className='footerContents'>
    <h3 className='footerContent'>FURIMAについて</h3>
      <ul>
        <li>
          <a className='footerLink'>会社概要（運営会社）</a>
        </li>
        <li>
          <a className='footerLink'>プライバシーポリシー</a>
        </li>
        <li>
          <a className='footerLink'>利用企画</a>
        </li>
        <li>
          <a className='footerLink'>FURIMAガイド</a>
        </li>
      </ul>
  </div>
    <h5 className='footerComp'>
        ©︎ FURIMA
    </h5>
</div>
  </>
  );
}

export default Footer;