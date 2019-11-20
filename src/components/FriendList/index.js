import React from 'react';
import PropTypes from 'prop-types';
import {
  StyledUl,
  StyledLi,
  StyledSpan,
  StyledAvatar,
  StyledName,
} from './FriendList.styled';

const FriendList = ({ friends }) => {
  return (
    <StyledUl>
      {friends.map(({ id, isOnline, avatar, name }) => (
        <StyledLi key={id}>
          <StyledSpan isOnline={isOnline} />
          <StyledAvatar src={avatar} alt="avatar" />
          <StyledName>{name}</StyledName>
        </StyledLi>
      ))}
    </StyledUl>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      isOnline: PropTypes.bool,
      avatar: PropTypes.string,
      name: PropTypes.string,
    }),
  ).isRequired,
};

export default FriendList;
