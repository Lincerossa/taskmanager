import React, { useState } from 'react'

import * as S from './styles'
import Cta from '../Cta'

interface CardProps<T, G> {
  title: T,
  description: G
}


function Card(props: CardProps<String, String|Number>){
  const [isDescriptionVisible, setIsDescriptionVisible] = useState<boolean | null>(null)
  function toggleDescription(){
    setIsDescriptionVisible(!isDescriptionVisible)
  }

  const { title, description} = props

  return(
    <S.Card>
      <h2>{title}</h2>
      <S.CtaWrapper>
        <Cta onClick={toggleDescription}>{isDescriptionVisible ? 'nascondi' : 'visualizza descrizione'}</Cta>
      </S.CtaWrapper>
      {isDescriptionVisible && <h3>{description}</h3>}
    </S.Card>
  )
}

export default Card