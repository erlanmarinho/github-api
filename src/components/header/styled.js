import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  background-color: #E5DBFF;
  width: 100%;
  justify-content: space-between;
  padding: 4px;
  padding-left: 32px;
  padding-right: 26px;
  


  input {
    background-color: #F3F0FF;
    border: 1px solid #ccc;
    border-radius: 8px;
   
    width: 100%;
    height: 44px;
    padding: 8px;
    
    font-weight: 500;

  }

  button {
    background-color: #5F3DC4;
    padding: 8px 16px;
    margin: 0 16px;
    border-radius: 8px;

    &:hover {
      background-color:  #331983;
      box-shadow: 3px 2px 10px rgba(0, 0, 0, 0.2);
    }

    span {
      font-weight: bold;
      color: #ffff;
    }
  }
`;
