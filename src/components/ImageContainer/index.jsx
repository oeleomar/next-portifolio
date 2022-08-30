import P from 'prop-types';
import Image from 'next/image';
import * as Styled from './styles';

export const ImageContainer = ({ data = {} }) => {
  const {
    Title: title,
    altText,
    image: { data: { attributes: { url: imgUrl = '' } = {} } = {} },
  } = data;
  return (
    <Styled.ImageContainer>
      <Image src={imgUrl} alt={altText} width="350px" height="260px" />
    </Styled.ImageContainer>
  );
};

ImageContainer.propTypes = {
  data: P.object,
};
