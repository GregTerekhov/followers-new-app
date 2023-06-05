import homePicture from 'keyboard.jpg';
import { HomePagePic, Title } from './Home.styled';
import { HomeJoinBtn } from 'styles/Button.styled';

const Home = () => {
  return (
    <>
      <HomePagePic src={homePicture} alt="keyboard" />
      <Title>Read, write and enjoy!</Title>
      <HomeJoinBtn to="/tweets">Join us</HomeJoinBtn>
    </>
  );
};

export default Home;
