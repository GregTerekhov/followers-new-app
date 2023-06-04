import logo from 'logo.svg';
import pictureQuestion from 'picture-question.png';
import {
  Avatar,
  FollowingBtn,
  Line,
  LogoGoIt,
  PictureQuestion,
  TweetInfo,
  TweetInfoWrap,
  TweetWrap,
} from './TweetItem.styled';
import formatNumber from 'services/formatNumber';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateFollowers } from 'store/users/usersOperations';

const TweetItem = ({ user, tweets, followers, avatar }) => {
  const [following, setFollowing] = useState(false);
  const dispatch = useDispatch();

  const handleFollowClick = () => {
    setFollowing(!following);
    dispatch(updateFollowers({ userId: user.id, increment: !following }));
  };
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
      <Avatar src={avatar} alt={user} width="80px" />
      <Line></Line>
      <TweetInfoWrap>
        <TweetInfo>Tweets: {formatNumber(tweets)}</TweetInfo>
        <TweetInfo>Followers: {formatNumber(followers)}</TweetInfo>
      </TweetInfoWrap>
      <FollowingBtn
        type="submit"
        following={following}
        onClick={handleFollowClick}
        style={{ backgroundColor: following ? '#5cd3a8' : '#ebd8ff' }}
      >
        {following ? 'Following' : 'Follow'}
      </FollowingBtn>
    </TweetWrap>
  );
};

export default TweetItem;
