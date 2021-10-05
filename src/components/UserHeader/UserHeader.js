import React from 'react';
import { useLocation } from 'react-router-dom';
import "react-image-gallery/styles/css/image-gallery.css";
import { AboutMe, CenterDiv, HeaderContainer, H1, P } from './styles';

import Bath1 from '../../images/Bathroom1.jpg';
import Bath2 from '../../images/Bathroom2.jpg';

import Kitchen1 from '../../images/Kitchen1.jpg';
import Kitchen2 from '../../images/Kitchen2.jpg';

import ImageGallery from 'react-image-gallery';

const images = [
  {
    original: Bath1,
    thumbnail: Bath1,
  },
  {
    original: Bath2,
    thumbnail: Bath2,
  },
  {
    original: Kitchen1,
    thumbnail: Kitchen1,
  },
  {
    original: Kitchen2,
    thumbnail: Kitchen2,
  },
];

const UserHeader = ({ user }) => {
  const location = useLocation();
  return (
    <HeaderContainer isHome={location.pathname !== '/'}>
      <AboutMe>
        <CenterDiv>
          <H1>Costantin Bulgaru Company</H1>
        </CenterDiv>
      </AboutMe>
      <ImageGallery items={images} autoPlay={true} />
      <AboutMe>
        <CenterDiv>
          <P> We specialize in bathroom and kitchen renovations projects. Whether you are looking to redo a small bathroom or kitchen,
            our experienced team uses high standards of craftsmanship to get the project completed on time and within budget.
          </P>
        </CenterDiv>
      </AboutMe>
    </HeaderContainer>
  );
};

export default UserHeader;