import { CirclesWithBar } from 'react-loader-spinner';
import { LoaderContainer } from './Loader.styled';

export const Loader = () => {
  return (
    <LoaderContainer>
      <CirclesWithBar />;
    </LoaderContainer>
  );
};
