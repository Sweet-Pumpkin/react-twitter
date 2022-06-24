import styled from "styled-components";

export const UpdateZaezalStyle = styled.div`
  
  .btns {
    .closeBtn, .updateBtn {
      background-color: transparent;
      border: none;
      margin: 5px 0 0 100px;

      img {
        width: 30px;
        &:hover {
          filter: invert(25%) sepia(90%) saturate(7408%) hue-rotate(318deg) brightness(101%) contrast(109%);
        }
      }
    }
  }

`