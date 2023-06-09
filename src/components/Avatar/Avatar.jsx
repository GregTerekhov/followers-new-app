import PropTypes from 'prop-types';
import { AvatarImage, AvatarWrapper } from './avatar.styled';

const Avatar = ({ avatar, user }) => {
  return (
    <AvatarWrapper>
      <AvatarImage src={avatar} alt={user} width="80px" />
    </AvatarWrapper>
  );
};

export default Avatar;

Avatar.propTypes = {
  avatar: PropTypes.string.isRequired,
  user: PropTypes.string.isRequired,
};
