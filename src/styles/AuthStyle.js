import styled from "styled-components";

export const AuthStyle = styled.div`
  .loginMain {
    width: 350px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    // border: 1px solid red;

    .login {
      width: 350px;
      border: 1px solid rgb(170, 170, 170);
      border-radius: 5px;
      box-sizing: border-box;
    
      .form {
        width: 260px;
        margin: 0 auto;
        // border: 1px solid greenyellow;
    
        .email, .password {
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
          :disabled {
            opacity: 0.2;
            cursor: default;
          }
        }
      }  
    }

    .register {
      border: 1px solid rgb(170, 170, 170);
      border-radius: 5px;
      box-sizing: border-box;
      padding: 20px;
      margin-top: 15px;
      font-size: 14px;
      
      .nav {
        width: 130px;
        margin: 0 auto;
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