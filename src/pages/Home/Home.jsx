import { Helmet } from 'react-helmet-async';
import { HomePagePic, Title } from './home.styled';
import { HomeJoinBtn } from 'styles/button.styled';
import homePicture from 'assets/images/keyboard.jpg';
import { useEffect, useState } from 'react';
import { CSSTransition } from 'react-transition-group';

const Home = () => {
  const [showTitle, setShowTitle] = useState(false);

  useEffect(() => {
    setShowTitle(true);
  }, []);
  return (
    <>
      <Helmet>
        <title>Homepage of Your tweetbook</title>
      </Helmet>
      <HomePagePic src={homePicture} alt="keyboard" />
      <CSSTransition
        in={showTitle}
        classNames="fade"
        timeout={500}
        unmountOnExit
      >
        <Title>Read, write and enjoy!</Title>
      </CSSTransition>
      <HomeJoinBtn to="/tweets">Join us</HomeJoinBtn>
    </>
  );
};

export default Home;
