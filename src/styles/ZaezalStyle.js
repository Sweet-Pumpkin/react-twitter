import styled from "styled-components";

export const ZaezalStyle = styled.div`
  .zaezal {
    border: 1px solid rgb(220, 220, 220);
    border-radius: 15px;
    margin-bottom: 10px;
  }

  .userInfo {
    display: flex;
    padding: 15px;
    border-bottom: 1px solid rgb(220, 220, 220);
    img {
      width: 52px;
      height: 52px;
      border-radius: 50px;
      margin: 5px;
    }
    .textInfo {
      margin: 5px;
      .userName {
        font-size: 20px;
        font-weight: 700;
        margin-bottom: 2px;
      }
      .email {
        font-size: 14px;
        color: rgb(160, 160, 160);
        margin-bottom: 2px;
      }
      .time {
        font-size: 14px;
        color: rgb(160, 160, 160);
      }
    }
  }

  .text {
    width: 348px;
    padding: 20px;
    box-sizing: border-box
  }

  .zaezalImg {
    width: 348px;
  }

  .option {
    width: 348px;
    height: 45px;

    .setting, .delete {
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