import styled from "styled-components";

export const ProfileStyle = styled.div`
  .profile {
    width: 350px;
    margin: 0 auto;
    position: relative;

    .info-wrap {
      position: relative;
      
      /* USER IMG */
      img {
        width: 100px;
        height: 100px;
        border-radius: 50px;
        margin: 5px;
      }
      
      /* BUTTONS */
      .btns {
        position: absolute;
        top: 0;
        right: 0;

        .editBtn, .logoutBtn {
          background-color: transparent;
          border: none;
          cursor: pointer;

          img {
            width: 30px;
            height: 30px;
            transition: 0.1s;
            filter: invert(25%) sepia(90%) saturate(7408%) hue-rotate(318deg) brightness(101%) contrast(109%);
            
            &:hover {
              width: 33px;
              height: 33px;
            }

          }

        }

      }
      
      /* USER INFO */
      .userInfo {
        padding: 10px 0 10px 5px;

        /* USER NAME */
        .userName {
          font-size: 24px;
          padding-bottom: 5px;
        }

        /* USER EMAIL */
        .userEmail {
          font-size: 14px;
          color: #cccccc;
          padding-bottom: 5px;
        }

        /* USER JOINED DATE */
        .userJoined {
          font-size: 14px;
          color: #cccccc;
        }
      }

      /* HR */
      hr {
        border: .5px solid #cccccc;
      }
    }
  }

  .modal-wrap {
    width: 100vw;
    height: 100vh;
    position: absolute;
    top: 0;
    left: 0;

    .background {
      width: 100vw;
      height: 100vh;
      position: absolute;
      top: 0;
      left: 0;
      background-color: #cccccc;
      opacity: .5;
    }

    .modal {
      width: 350px;
      position: absolute;
      left: 50%;
      transform: translate(-50%, 30%);
    }

  }
`