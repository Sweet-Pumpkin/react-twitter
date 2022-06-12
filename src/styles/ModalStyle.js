import styled from "styled-components";

export const ModalStyle = styled.div`
  .background {
    width: 100vw;
    height: 100vh;
    position: relative;
    .backgroundColor {
      width: 100vw;
      height: 100vh;
      background-color: gray;
      opacity: 0.6;
    }
  }

  .modal {
    position: absolute;
    margin-top: 100px;
    left: 50%;
    transform: translate(-50%);
    width: 350px;
    border: 1px solid red;
    background-color: #fff;
    
    button {

    }

    form {
      label {
        .photo {
          width: 52px;
          height: 52px;
          border-radius: 50px;
          cursor: pointer;
        }
      }
      #file-input {
        display: none;
      }
    }
  }
`