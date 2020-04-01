import styled from 'styled-components';

export const Container = styled.div`
    .start-container{
        width: 100%;
        max-width: 600px; 
        margin: 0 auto;  
        padding: 50px 0;

        form { 
        }


        input {
            margin-top: 20px;
            width: 100%;
            padding: 15px;
            border-radius: 5px;
            border: 1px solid #CCC;
            text-align:center;
            font-size: 18px;
        }

        button {
            width: 100%;
            padding: 5px;
            margin-top: 5px;
            background: #7159C1;
            color: #fff;
            border-radius: 5px;
            border: none;
            cursor: pointer;
        }

        .error{
            color: red;
        }
    }

    .data{
        width: 100%;
        max-width: 600px; 
        margin: 0 auto;  
        padding: 50px 0;
        text-align: center;
        font-size: 18px;
    }
`;