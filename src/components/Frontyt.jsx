import styled from "styled-components";

 function Frontyt(props) { 

    return (
      <>
        <Container>
          <div>
            <img src="/images/dices.png" alt="image not found" />
          </div>
          <div>
               <h1>DICE GAME</h1>
               <Button
               onClick={props.toggle}>Play Now</Button>

          </div>
        </Container>
        
      </>
    )
  }
  
  export default Frontyt;

  const Container = styled.div`
  display:flex;
  max-width: 1180px;
  justify-content:center;
  align-items:center;

  h1{
    font-size:96px;
  }
  
  `;

 

  const Button= styled.button`
    background:black;
    color:white;
    height: 56px;
    width:  200px;
    cursor:pointer;
    border:1px solid-black;
    border-radius:20%;
    transition: 0.5s background ease-out;
    
    &:hover{
      background-color:white;
      color:black;
      border:1px solid-black;
      border-radius:20%;
      transition: 0.3s background ease-in;

    }

  `;