import styled from "styled-components";

export const RegisterStyle = styled.div`
  .loginMain {
    width: 350px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    .login {
      width: 350px;
      border: 1px solid rgb(170, 170, 170);
      border-radius: 5px;
      box-sizing: border-box;
      @media screen and (max-width: 350px) {
        border: none;
      }
    
      .form {
        width: 260px;
        margin: 0 auto;
    
        .email, .name, .password, .passwordConfirm {
          width: 250px;
          height: 30px;
          margin: 5px;
          font-size: 12px;
          padding: 5px;
          border-radius: 5px;
          border: 1px solid rgb(170, 170, 170);
          box-sizing: border-box;
        }
    
        .email:focus, .password:focus {
          border: 1px solid #FF0090;
        }

        span {
          width: 145px;
          display: block;
          margin: 0 auto;
          font-size: 12px;
          color: #ff0090;
          margin-top: 5px
        }
    
        .loginbtn {
          width: 250px;
          height: 30px;
          margin: 10px 5px 10px 5px;
          border-radius: 5px;
          color: #fff;
          background-color: #FF0090;
          border: none;
          box-sizing: border-box;
          cursor: pointer;
          margin-bottom: 30px;
          :disabled {
            opacity: 0.2;
            cursor: default;
          }
        }
      }  

      hr {
        width: 250px;
        margin: 0 auto;
        opacity: 0.5;
        margin-bottom: 20px;
      }

    }

    .register {
      outline: 1px solid rgb(170, 170, 170);
      border-radius: 5px;
      box-sizing: border-box;
      padding: 20px;
      margin-top: 15px;
      font-size: 14px;
      @media screen and (max-width: 350px) {
        border-top: 1px solid rgb(170, 170, 170);
        outline: none;
        border-radius: 0px;
      }
      
      .nav {
        width: 150px;
        margin: 0 auto;
        text-align: center;
        span{
          margin-right: 10px;
          color: rgb(100, 100, 100);
        }
    
        .goTo {
          color: #FF0090;
          font-weight: 700;
        }
      }
    }
  }
`