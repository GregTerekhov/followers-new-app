import { CirclesWithBar } from 'react-loader-spinner';
import { LoaderContainer } from './loader.styled';

const Loader = () => {
  return (
    <LoaderContainer>
      <CirclesWithBar
        height="100"
        width="100"
        color="#5cd3a8"
        wrapperStyle={{}}
        visible={true}
        outerCircleColor="#5cd3a8"
        innerCircleColor="#5cd3a8"
        barColor="#ebd8ff"
        ariaLabel="circles-with-bar-loading"
      />
      ;
    </LoaderContainer>
  );
};

export default Loader;
