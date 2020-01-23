import styled from "styled-components";

export const MainContainer = styled.div`
  padding: 40px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
`;

export const StyledDiv = styled.div`
  background-color: gray;
  border: 12px solid black;
  word-wrap: break-word;
  padding: 4px 10px;
  color: white;
  width: 200px;
  height: 390px;
  margin: 10px 50px 10px 20px;
  @media all and (max-width: 600px) {
    margin: 10px 10px 10px 10px;
    width: 100px;
    display: inline-block;
    padding: 4px 0px;
  }
`;

export const Image = styled.img`
  height: 40%;
  width: 100%;
`;

export const Name = styled.div`
  font-size: 16px;
  height: 15px;
  color: orange;
  padding-top: 8px;
  @media all and (max-width: 600px) {
    font-size: 10px;
  }
`;

export const Title = styled.span`
  width: 45%;
  float: left;
`;

export const Value = styled.span`
  width: 45%;
  float: right;
  text-align: right;
`;
