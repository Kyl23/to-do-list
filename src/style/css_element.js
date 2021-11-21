import style from "styled-components";

export const AddButton = style.input`
    width:45px;
    outline: none;
    border-width: 0;
    color: black;
    border-radius:50px;
    background-color: #3DC7BE;
    font-size:inherit;
`;
export const TextInput = style.input`
    border-radius: 50px;
    width: 149px;
    height:30px;
    border: 2px solid #000000
    margin-right: 5px;
    padding-left: 5px;
    font-size:inherit;
`;

export const HeadDiv = style.div`
    display: flex;
    width: 199px;
    margin:auto;
    margin-bottom: 20px;
`;

export const ButtonContainer = style.div`
    margin:auto;
    margin-bottom: 10px;
    width: 199px;
    min-height: 40px;
    max-height: 40px;
    background-color: bisque;
    &:hover{
        background-color:rgb(188, 161, 126);
    }
`;

export const DeleteIcon = style.div`
    color: red;
    position: relative;
    right:5px;
    cursor:pointer;
    &:hover{
        color:lightblue;
    };
`;
export const TextDiv = style.input`
    height:40px;
    width:80%;
    text-align:left;
    font-size:inherit;
    background-color:transparent;
    border:0px;
    outline:none;
`;

export const DynamicRemindStatus = style.div`
    width:100%;
    height:40px;
    display: flex;
    align-items:center;

    font-size: inherit;
    font-family: KaiTi;
    padding-left: ${(props) => (props.task.reminder ? "5px" : "9px")};
    border-left: ${(props) => (props.task.reminder ? "4px" : "0")} ${(props) =>
  props.task.reminder ? "solid" : "none"} green;        
    cursor:pointer;
`;
