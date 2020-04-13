import styled from 'styled-components';

export const Container = styled.div`
  display: block;
  height: 54px;
`;

export const Input = styled.input`
  position: relative;
  font-size: 1rem;
  width: 30%;
  top: 8px;
  margin-left: 40px;
  height: 38px;
  border: 2px solid #b7b7b7;
  padding: 16px;
  border-radius: 0.50rem;

  background-color: #ffffff;
  transition: all .3s ease;

  &:focus {
    outline: none;
  }
`;

export const Button = styled.button`
  position: relative;
  border: 2px solid #b7b7b7;
  top: 8px;
  padding: 0.250rem 0.75rem;
  font-size: 1rem;
  line-height: 1.5;
  border-radius: 0.50rem;
  margin-left: 20px;
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
