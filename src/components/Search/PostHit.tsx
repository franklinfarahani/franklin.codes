import React from 'react'
import { Highlight, Snippet } from 'react-instantsearch-dom'
import { Link } from 'gatsby'

type PostHitProps = {
  hit: any
}

const PostHit = (clickHandler: ()=>void) => ({ hit }: PostHitProps) => (
  <div>
    <Link to={'/blog' + hit.fields.slug} onClick={clickHandler}>
      <h3>
        <Highlight attribute="title" hit={hit} tagName="mark" />
      </h3>
    </Link>
    <div>
      <Highlight attribute="date" hit={hit} tagName="mark" />
      {' - '}
      <Highlight attribute="tags" hit={hit} tagName="mark" />
    </div>
    <Snippet attribute="excerpt" hit={hit} tagName="mark" />
  </div>
)

export default PostHit