import style from "styled-components";

export const AddButton = style.input`
    width:30%;
    outline: none;
    border-width: 0;
    color: black;
    border-radius:50px;
    background-color: burlywood;
    font-size:20px;
`;
export const TextInput = style.input`
    border-radius: 50px;
    width: 70%;
    margin-right: 5px;
    padding-left: 20px;
    font-size:20px;
`;

export const HeadDiv = style.div`
    display: flex;
    width: 60%;
    margin:auto;
    margin-bottom: 20px;
`;

export const ButtonContainer = style.div`
    margin:auto;
    margin-bottom: 10px;
    width: 60%;
    min-height: 80px;
    max-height: 80px;
    background-color: bisque;
    &:hover{
        background-color:rgb(188, 161, 126);
    }
`;

export const DeleteIcon = style.div`
    height:55px;
    color: red;
    position: relative;
    right:5px;
    cursor:pointer;
    &:hover{
        color:lightblue;
    };
`;
export const TextDiv = style.div`
    height:55px;
    width:80%;
    text-align:left;
`;

export const DynamicRemindStatus = style.div`
    width:100%;
    height:80px;
    display: flex;
    align-items:center;

    font-size: 40px;
    font-family: KaiTi;
    padding-left: ${(props) => (props.task.reminder ? "5px" : "20px")};
    border-left: ${(props) => (props.task.reminder ? "15px" : "0")} ${(props) =>
  props.task.reminder ? "solid" : "none"} green;        
    cursor:pointer;
`;
