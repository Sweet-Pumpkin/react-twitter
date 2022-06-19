import styled from "styled-components";

export const ProfileStyle = styled.div`
  .profile {
    width: 350px;
    margin: 0 auto;
    position: relative;

    .info-wrap {
      position: relative;
      img {
        width: 100px;
        height: 100px;
        border-radius: 50px;
      }

      .btns {
        position: absolute;
        top: 0;
        right: 0;
      }

      .userInfo {
        padding: 10px 0 10px 0;
      }
    }
  }
`