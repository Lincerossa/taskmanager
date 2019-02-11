import React, { ReactComponentElement, ReactChild } from 'react'
import * as S from './styles'

interface CtaProps {
  children: ReactChild,
  onClick: Function
}

export default (props: CtaProps) => (
  <S.Cta onClick={props.onClick}>{props.children}</S.Cta>
)