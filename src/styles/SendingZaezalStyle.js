import styled from "styled-components";

export const SendingZaezalStyle = styled.div`
  .myZaezal {
    width: 350px;
    height: auto;
    min-height: 80px;
    margin: 0 auto;
    display: flex;
    position: relative;
    padding-bottom: 15px;
    border-bottom: 1px solid rgb(220, 220, 220);

    .goToProfile {
      img {
        width: 52px;
        height: 52px;
        border-radius: 50px;
        margin: 5px;
        &:hover {
          opacity: .8;
        }
      }
    }

    form {
      width: 282px;
      margin: 0 auto;

      // img preview
      .preview {
        position: relative;
        .clear {
          position: absolute;
          top: 5%;
          left: 5%;
          width: 25px;
          height: 25px;
          border: none;
          border-radius: 50px;
          background-color: gray;
          color: white;
          opacity: 0.5;
          &:hover {
            opacity: .8;
          }
        }
      }

      .inputZaezal {
        margin-top: 10px;
        width: 260px;
        height: auto;
        font-size: 18px;
        padding: 10px;
        border: none;
      }

      .btn {
        margin-left: 200px;
        margin-top: 5px;
        label {
          margin-right: 10px;
          cursor: pointer;
          .photo {    
            width: 30px;
            transition: 0.1s;
            filter: invert(25%) sepia(90%) saturate(7408%) hue-rotate(318deg) brightness(101%) contrast(109%);
            &:hover {
              width: 33px;
            }
          } 
        }

        #file-input {
          display: none;
        }

        .sendBtn {
          border: none;
          background-color: transparent;
          cursor: pointer;
          .send {
            width: 30px;
            transition: 0.1s;
            filter: invert(25%) sepia(90%) saturate(7408%) hue-rotate(318deg) brightness(101%) contrast(109%);
            &:hover {
              width: 33px;
            }
          }
        }
      }
    }
  }
`