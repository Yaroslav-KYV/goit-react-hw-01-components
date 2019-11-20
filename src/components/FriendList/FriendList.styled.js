import styled from 'styled-components';

export const StyledUl = styled.ul`
  margin: 0 auto;
  list-style: none;
  padding: 0;
  width: 400px;
  margin-bottom: 100px;
`;

export const StyledLi = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  padding-left: 20px;
  box-shadow: 1px 1px 3px 1px rgba(191, 205, 222, 0.75);
`;

export const StyledSpan = styled.span`
  margin-right: 20px;
  height: 25px;
  width: 25px;
  border-radius: 50%;
  background-color: ${props => (props.isOnline ? 'green' : 'red')};
`;

export const StyledAvatar = styled.img`
  width: 100px;
  height: 100px;
  margin-right: 20px;
  padding: 10px 0;
  border-radius: 15%;
`;

export const StyledName = styled.p`
  font-family: Tahoma, sans-serif;
  font-size: 30px;
`;
