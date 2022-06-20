import styled from "styled-components";

export const ModalStyle = styled.div`

  .modal {
    width: 350px;
    border: 1px solid #cccccc;
    border-radius: 15px;
    background-color: #fff;
    
    .closeBtn {
      border-radius: 50px;
      padding: 0 1px 0 1px;
      line-height: 0.9;
      border: none;
      background-color: transparent;
      cursor: pointer;
      margin: 10px;
      &:hover {
        background-color: #ff0090;
        .close {
          filter: invert(81%) sepia(100%) saturate(6496%) hue-rotate(188deg) brightness(120%) contrast(104%);
        }
      }
      
      .close {
        width: 18px;
        height: 18px;
        filter: invert(25%) sepia(90%) saturate(7408%) hue-rotate(318deg) brightness(101%) contrast(109%);
      }
    }

    form {
      label {
        display: block;
        cursor: pointer;
        width: 154px;
        margin: 0 auto;
        position: relative;
        padding: 10px;

        .photo {
          width: 150px;
          height: 150px;
          border: 2px solid #cccccc;
          border-radius: 100px;
        }

        .cameraBtn {
          border: 1px solid rgb(100, 100, 100);
          border-radius: 50px;
          background-color: #ffffff;
          position: absolute;
          bottom: 20px;
          right: 20px; 
          &:hover {
            border: 1px solid #ff0090;
            background-color: #ff0090;
            .camera {
              filter: invert(89%) sepia(69%) saturate(2%) hue-rotate(339deg) brightness(110%) contrast(101%);
            }
          }

          .camera {
            width: 18px;
            height: 18px;
            padding: 4px 5px 3px 5px;
            filter: invert(39%) sepia(4%) saturate(107%) hue-rotate(314deg) brightness(97%) contrast(88%);
          }
        }

      }
      /* HIDE INPUT */
      #file-input {
        display: none;
      }

      /* EDITING USER NAME */
      .editingUserName {
        display: block;
        width: 200px;
        margin: 0 auto;
        padding: 5px 10px 5px 10px;
        border: 1px solid #cccccc;
        border-radius: 5px;
        margin-bottom: 10px;
        outline: 0;
        &:focus {
          border: 1px solid #ff0090;
        }
      }
      /* SUBMIT BUTTON */
      .submitEdit {
        color: #ff0090;
        display: block;
        width: 222px;
        margin: 0 auto;
        padding: 5px 10px 5px 10px;
        border: 1px solid #ff0090;
        border-radius: 5px;
        background-color: transparent;
        outline: 0;
        margin-bottom: 30px;
        &:hover {
          color: #ffffff;
          background-color: #ff0090;
        }
      }
    }
  }
`