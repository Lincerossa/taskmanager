import styled from 'styled-components'

export const Cta = styled.a`
    padding: .75rem;
    background-color: white;
    border-radius: 25px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    font-family: sans-serif;
    color: black;
    min-width: 125px;
    font-size: 1rem;
    border: 2px solid black;
    cursor: pointer;

    &:hover{
      background-color: black;
      color:  white;
    }

    @media screen and (min-width: 768px){
      min-width: 200px;
    }
`