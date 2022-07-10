import styled from "styled-components";

export const Wrapper = styled.div`
display: flex;
align-items: flex-start;
background-color: #E5DBFF;

padding: 16px;
`;

export const WrapperInfoUser = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
justify-content: space-between;

height: auto;
margin-left: 12px;
height: 200px;

h1 {
  margin-left: 5px;
  font-size: 32px;
  font-weight: bold;
  color: #22262a;
}

h3 {
  margin-left: 5px;
  font-size: 18px;
  font-weight: bold;
  color: #2d3748;
}

h4 {
  margin-top: 16px;
  font-size: 16px;
  font-weight: bold;
  color: #2d3748;
}
`;

export const WrapperStatusCount = styled.div`
display: flex;
align-items: center;
div {
  margin: 8px;
  text-align: center;
  color: 		#484f56;;
}
`;

export const WrapperUserGeneric = styled.div`
display: flex;
align-items: center;
margin-top: 8px;
h3 {
  margin-right: 8px;
}

span {
  color: 	#484f56;
}

a {
  font-size: 18px;
  color: #5F3DC4;
  font-weight: bold;
}
`;

export const WrapperImage = styled.img`
border-radius: 50%;
width: 200px;
margin: 8px;
margin-left: 30px;
`;
