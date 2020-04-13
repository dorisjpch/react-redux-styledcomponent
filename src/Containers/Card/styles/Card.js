import styled from 'styled-components';

export const Container = styled.div`
  background-color: $white;
  display: block;
`;

export const Body = styled.li`
list-style-type: none;
border: 2px solid #b7b7b7;
padding: 16px;
border-radius: 0.50rem;
margin: 10px;
box-shadow: 3px 3px 0px #c5c5c585;
`;

export const Title = styled.h2`
  font-size: 1.25rem;
  font-weight: bold;
  margin: 0;
`;

export const Text = styled.p`
  color: #6c757d;
`;


export const Button = styled.button`
  cursor: pointer;
  float: right;
  border: 2px solid #b7b7b7;
  padding: 0.250rem 0.75rem;
  font-size: 1rem;
  line-height: 1.5;
  border-radius: 0.50rem;
  margin-top: -90px;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
    border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;

  &:hover {
    color: #fff;
    background-color: #212121;
    border-color: #212121;
  }
  
  &:focus {
    outline: none;
  }
`;
