import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    align-items: center;

    width: 100vw;
    height: 100vh;

`;

export const Title = styled.h2`
    font-size: 2rem;
    text-align: center;
    color: #000;
`
export const Form = styled.form`
    width: 45%;
    height: 50%;

    border-radius: 5%;
    background-color: #bcbfbb;

    display: flex;
    flex-direction: column;
    margin: 0 auto;

    gap: 24px;
`;

export const InputContainer = styled.label`
    display: flex;    
    flex-direction: column;

    width: 100%;
    max-width: 300px;

    margin: 0 auto;

`;
export const Input = styled.input`
    padding: 16px 14px;
    
    background-color: #f3f3f3;
    
    border: none;
    border-radius: 2%;

    -webkit-box-shadow: -4px 3px 18px 0px rgba(0,0,0,0.33);
    -moz-box-shadow: -4px 3px 18px 0px rgba(0,0,0,0.33);
    box-shadow: -4px 3px 18px 0px rgba(0,0,0,0.30);

`;
export const Button = styled.button`
    width: 100%;
    max-width: 300px;
 
    padding: 13px 10px;
    margin: 0 auto;
 
    border: none;

    background-color: #55a142;
    
    font-size: 1rem;
    color: #fff;

    cursor: pointer;
`;

export const Pre = styled.p`
    color: #000;
`
