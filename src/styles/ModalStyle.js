import styled from "styled-components";

export const ModalStyle = styled.div`

  .modal {
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