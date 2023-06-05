import { CirclesWithBar } from 'react-loader-spinner';
import { LoaderContainer } from './Loader.styled';

const Loader = () => {
  return (
    <LoaderContainer>
      <CirclesWithBar />;
    </LoaderContainer>
  );
};

export default Loader;
