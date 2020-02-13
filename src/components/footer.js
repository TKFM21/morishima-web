import React from 'react'

const Footer = () => {

  return (
    <footer>
      <section>
        <div className="address">
          <h3>住所</h3>
          <span>〒386-0501</span>
          <span>長野県上田市武石鳥屋146-1</span>
        </div>
        <div className="hours">
          <h3>営業時間</h3>
          <span>不定休</span>
          <span>お気軽にお問合せください！</span>
        </div>
        <div className="contact">
          <h3>お問合せ</h3>
          <span>LINE公式アカウント</span>
          <span>@yourSocialName</span>
        </div>
      </section>
      <p>Built by
        <a href="#" target="_blank" rel="noopener noreferrer">ITサポート aim</a>
      </p>
    </footer>
  )
}

export default Footer;