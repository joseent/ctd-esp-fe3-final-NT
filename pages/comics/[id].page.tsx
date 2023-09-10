import { CharacterInter } from 'interface/character';
import { NextPage } from 'next'
import React from 'react'

interface Props {
    character: CharacterInter;
  }

export const Character:NextPage<Props> = ({character}) => {
  return (
    <div>Character</div>
  )
}
