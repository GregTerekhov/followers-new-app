import PropTypes from 'prop-types';
import formatNumber from 'services/formatNumber';
import { Avatar, FollowingButton } from 'components';
import logo from 'assets/images/svg/logo.svg';
import pictureQuestion from 'assets/images/picturequestion.png';
import {
  PictureQuestion,
  LogoGoIt,
  TweetInfo,
  TweetInfoWrap,
  TweetWrap,
} from './tweetItem.styled';

const TweetItem = ({ id, user, tweets, followers, avatar }) => {
  return (
    <TweetWrap>
      <a href="https://www.goit.global">
        <LogoGoIt src={logo} alt="Logotype of Go-IT School" />
      </a>
      <PictureQuestion
        src={pictureQuestion}
        alt="picture with a question and an answer"
        width="308px"
      />
      <Avatar avatar={avatar} user={user} />
      <TweetInfoWrap>
        <TweetInfo>{formatNumber(tweets)} Tweets</TweetInfo>
        <TweetInfo>{formatNumber(followers)} Followers</TweetInfo>
      </TweetInfoWrap>
      <FollowingButton id={id} followers={followers} />
    </TweetWrap>
  );
};

export default TweetItem;

TweetItem.propTypes = {
  id: PropTypes.string.isRequired,
  user: PropTypes.string.isRequired,
  tweets: PropTypes.number.isRequired,
  followers: PropTypes.number.isRequired,
  avatar: PropTypes.string.isRequired,
};
