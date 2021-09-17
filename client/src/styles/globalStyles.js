import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

    *{
        transition: all 1;
    }

    .App{
        background-color: ${({ theme }) => theme.background_secondary};
        color:${({ theme }) => theme.text};
    }

    .cards{
        background-color: ${({ theme }) => theme.background_secondary};
        color:${({ theme }) => theme.text};
    }

    .menu{
        background-color: ${({ theme }) => theme.background_secondary};
        color:${({ theme }) => theme.text};
    }

    .navbar{
        background-color: ${({ theme }) => theme.background_primary};
        color:${({ theme }) => theme.text};
    }

    .pagination{
        background-color: ${({ theme }) => theme.background_primary};
        color:${({ theme }) => theme.text};
    }

    .dropdown-wrapper{
        background-color: ${({ theme }) => theme.background_primary};
        color:${({ theme }) => theme.text};
    }

    .dropdown-header-title{
        color:${({ theme }) => theme.text};
    }

    .toggle-span{
        color:${({ theme }) => theme.text};
    }

    .search-bar{
        background-color: ${({ theme }) => theme.background_primary};
        color:${({ theme }) => theme.text};
        transition: unset;
    }

    .search-input{
        background-color: ${({ theme }) => theme.background_primary};
        color:${({ theme }) => theme.text};
        transition: unset;
    }
`;

export const lightTheme = {
  background_primary: "fff",
  background_secondary: "fff",
  text: "#1F1F1F",
};

export const darkTheme = {
  background_primary: "#2B2B2B",
  background_secondary: "#1F1F1F",
  text: "#fff",
};
