import React from 'react'
import styled from '@emotion/styled'

export enum Orientation {
  Left,
  Right,
}

type ProjectProps = {
  orientation: Orientation
  children: React.ReactNode
}

const Project = ({orientation, children} : ProjectProps) => {
  return orientation === Orientation.Right ? 
    <div>
      Project Right
      {children}
    </div>
    :
    <div>
      Project Left
      {children}
    </div>

}

export default Project