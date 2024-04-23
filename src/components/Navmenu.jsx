import React from 'react'
import GameScore from './GameScore'
import Numbers from './Numbers'
import styled from 'styled-components';

export default function Navmenu() {
  return (
    <>

     <Container>
      <GameScore/>
      <Numbers/>
    </Container>

   

    </>
    
  )
}


const Container=styled.div`
 display:flex;
 justify-content: space-around;

`;