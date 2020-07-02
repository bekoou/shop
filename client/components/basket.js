import React from 'react'
import HashLoader from 'react-spinners/HashLoader'
import Markdown from 'markdown-to-jsx'
import './readme.scss'

const Basket = (props) => {
  if (!props.readme) {
    return <HashLoader size={50} color="#4a5982" />
  }
  return <Markdown className="markdown-body">{props.readme}</Markdown>
}

Basket.propTypes = {}

export default React.memo(Basket)
