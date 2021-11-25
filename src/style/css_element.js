import style from "styled-components";
import { Link } from "react-router-dom";
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
    background-color: #FFFFFF;
`;

export const DeleteIcon = style.div`
    color: #D81B60;
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
    padding-left: ${(props) => (props.task.reminder ? "5px" : "10px")};
    border-left: ${(props) => (props.task.reminder ? "5px" : "0")} ${(props) =>
  props.task.reminder ? "solid" : "none"} green;        
    cursor:pointer;
`;
export const Nav = style.ul`
    width:100vw;
    position:absolute;
    top:0;left:0;
    margin:0;
    background-color:lightblue;
    font-size:inherit;
    text-align:left;
`;
export const NavOption = style.li`
    display:inline-block;
    margin:0 20px 0 20px;
    text-decoration:none;
`;
export const LinkCSS = style(Link)`
    text-decoration:none;
`;
