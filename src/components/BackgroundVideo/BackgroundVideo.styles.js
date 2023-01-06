import styled from 'styled-components';

const StyledBackgoundVideo = styled.div`
  position: fixed;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  & .video {
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    margin: auto;
    min-height: 50%;
    min-width: 50%;
  }
`;

export default StyledBackgoundVideo;
