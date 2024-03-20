import styled from "styled-components";
//${}

const MenuButton = styled.svg`
    position: relative;
    width: 40px;
    fill: #e4e5f1;
    margin-left: 10px;
    
`;

const MenuStyle = styled.div`
    position: fixed;
    z-index: 1;

    .dropdown.active {
        opacity: 1;
        visibility: visible;
        transform: translate(0);
        transition: all 0.3s ease-in-out;
    }


    .dropdown.inactive {
        opacity: 0;
        visibility: hidden;
        transform: translateY(-10px);
        transition: all 0.3s ease-in-out;
    }

    

`;

const DropdownBar = styled.div`
    position: absolute;
    width: 30px;
    text-align: left;
    margin-top: -px;
    margin-left:12px;
    height: 0;
    

    & > * {
        text-decoration: none;
        color: #e4e5f1;
        font-family: 'Karla', sans-serif;
    }

    & > *:hover {
        color: #f2d77e;
        transition: all 0.2s ease;
    }

`;

export {MenuButton,MenuStyle,DropdownBar};

