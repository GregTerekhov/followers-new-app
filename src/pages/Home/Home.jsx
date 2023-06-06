import { Helmet } from 'react-helmet-async';
import { HomePagePic, Title } from './Home.styled';
import { HomeJoinBtn } from 'styles/Button.styled';
import homePicture from 'keyboard.jpg';

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Homepage of Your tweetbook</title>
      </Helmet>
      <HomePagePic src={homePicture} alt="keyboard" />
      <Title>Read, write and enjoy!</Title>
      <HomeJoinBtn to="/tweets">Join us</HomeJoinBtn>
    </>
  );
};

export default Home;
