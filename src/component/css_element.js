import style from "styled-components";

export const AddButton = style.input`
    width:30%;
    outline: none;
    border-width: 0;
    color: black;
    border-radius:50px;
    background-color: burlywood;
    font-size:3vw;
`;
export const TextInput = style.input`
    border-radius: 50px;
    width: 70%;
    margin-right: 1vw;
    padding-left: 20px;
    font-size:3vw;
`;

export const HeadDiv = style.div`
    display: flex;
    width: 60%;
    margin:auto;
    margin-bottom: 20px;
`;

export const ButtonContainer = style.div`
    display: flex;
    margin:auto;
    margin-bottom: 10px;
    width: 60%;
    min-height: 8vw;
    max-height: 8vw;
    text-align: right;
    padding:auto;
    background-color: bisque;
    &:hover{
        background-color:rgb(188, 161, 126);
    }
`;

export const DeleteIcon = style.span`
    color: red;
    align-self: center;
    font-size: 5vw;
    position: relative;
    right: -2vw;
    top:-0.5vw;
    cursor:pointer;
    &:hover{
        color:lightblue;
    };
`;

export const DynamicRemindStatus = style.div`
    width:80%;
    font-size: 4vw;
    font-family: KaiTi;
    text-align: left;
    padding-left: ${(props) => (props.task.reminder ? "5px" : "20px")};
    border-left: ${(props) => (props.task.reminder ? "15px" : "0")} ${(props) =>
  props.task.reminder ? "solid" : "none"} green;
    padding-top:1.5vw;
    cursor:pointer;
`;
