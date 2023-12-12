import styled from "styled-components";
//${}

const MenuButton = styled.div`
    width: 0px;
    height: 0px;
    border-left: 15px solid transparent;
    border-right: 15px solid transparent;
    border-top: 15px solid #e4e5f1;
`;

const MenuStyle = styled.div`

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
    width: 30px;
    text-align: left;
    height: 0;
    padding: 6px;
    

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

