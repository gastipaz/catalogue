import styled from 'styled-components'

export const PageContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    width: 100%;
    max-width: 100vw;
    height: 100%;
    min-height: 100vh;
`

export const PageWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    width: 100%;
    max-width: 100vw;
    height: 100%;
    padding-top: 60px;
`

export const PageRow = styled.div`
    display: grid;
    grid-auto-columns: minmax(auto, 1fr);
    justify-content: center;
    align-items: center;
    grid-template-areas: 'col1 col2';
    width: 100%;
    height: fit-content;
`

export const PageColumn1 = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    grid-area: col1;
    height: 100%;
    width: 100%;
    overflow: hidden;
`
export const PageColumn2 = styled.div`
    display: flex;
    height: 100%;
    width: 100%;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    grid-area: col2;
    overflow: hidden;
`
export const ElementWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: fit-content;
    height: fit-content;
    margin: 10px 10px;
`
export const Title = styled.h2`
    font-family: Montserrat;
    font-size: 30px;
    margin: 5px 5px;
`
export const Subtitle = styled.h3`
    font-family: Montserrat;
    font-size: 23px;
    margin: 5px 5px;
`
export const Paragraph = styled.p`
    font-family: Montserrat;
    font-size: 18px;
    text-align: justify;
    text-justify: "inter-word";
    overflow-wrap: "break-word"; 
    margin: 5px 5px;
`
export const Button = styled.button`
    font-family: Montserrat;
    font-size: 18px;
    padding: 5px 10px;
    color: ${({primary}) => (primary ? 'white': 'black')};
    background-color: ${({primary}) => (primary ? '#8e5bf5': '#fce77e')};
    border-radius: 5px;
    border: none;
    cursor: pointer;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
    transition: all 0.2s ease-in-out;

    &:hover {
        color: ${({primary}) => (primary ? '#8e5bf5': '#fce77e')};
        background-color: ${({primary}) => (primary ? '#fce77e': '#8e5bf5')};
        transition: all 0.2s ease-in-out;
    }

    @media screen and (max-width: 600px) {
        font-size: 13px;
    }
`
