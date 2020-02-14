import React from "react"
import PropTypes from "prop-types"

const Header = ({ siteTitle }) => (
  <header>
    <span>{siteTitle}</span>
    <span className="line">
      <a href="https://lin.ee/miMytzL">
        <img
          height="40"
          border="0"
          src="https://scdn.line-apps.com/n/line_add_friends/btn/ja.png"
        />
      </a>
    </span>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
