import React from "react"

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
          <h3>ご宿泊</h3>
          <span>チェックイン　15:00 - 20:00</span>
          <span>チェックアウト　11:00</span>
        </div>
        <div className="contact">
          <h3>お問合せ</h3>
          <span className="line">
            <a href="https://lin.ee/miMytzL">
              <img
                height="36"
                border="0"
                src="https://scdn.line-apps.com/n/line_add_friends/btn/ja.png"
              />
            </a>
          </span>
        </div>
      </section>
      <p>
        Copyright &copy; 2020 
        <a href="#" target="_blank" rel="noopener noreferrer">
          ITサポート aim
        </a>
      </p>
    </footer>
  )
}

export default Footer
