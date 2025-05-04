import styled from 'styled-components';

export const Feed = styled.div`
    display: flex;
    width: 50vw;
    height: 100%;
    padding: 32px;
    flex-direction: column;
    align-items: center;
    gap: 46px;
    background: var(--Slate-1, #151718);
    overflow-y: auto;
`;
export const PesqDiv = styled.div`
    display: flex;
    padding: 8px;
    justify-content: space-between;
    align-items: center;
    align-self: stretch;
    border-radius: 8px;
    background: var(--Slate-8, #4c5155);
`;
export const PesqText = styled.h1`
    color: var(--Slate-12, #ecedee);
    text-align: center;
    font-feature-settings: 'liga' off, 'clig' off;

    /* Ouvir um piu... */
    font-family: 'Poppins', sans-serif;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px; /* 171.429% */
    letter-spacing: 0.5px;
`;
export const PesqImage = styled.img`
    width: 24px;
    height: 24px;
`;
export const MesDiv = styled.div`
    display: flex;
    padding: 24px;
    flex-direction: column;
    align-items: flex-start;
    gap: 55px;
    align-self: stretch;
    border-radius: 16px;
    background: var(--Slate-8, #4c5155);
`;
export const MesText = styled.h1`
    color: var(--Slate-12, #ecedee);
    text-align: center;

    /* Quero dar um piu... */
    font-family: 'Poppins', sans-serif;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
`;
export const EmojiDiv = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    align-self: stretch;
`;
export const EmojiDiv2 = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;
`;
export const FotoLogo = styled.img`
    width: 24px;
    height: 24px;
`;
export const CamLogo = styled.img`
    width: 24px;
    height: 24px;
`;
export const SmileLogo = styled.img`
    width: 20px;
    height: 20px;
`;
export const PriceLogo = styled.img`
    width: 24px;
    height: 24px;
`;
export const GifLogo = styled.img`
    width: 24px;
    height: 24px;
`;
export const SendLogo = styled.img`
    display: flex;
    align-items: center;
    gap: 8px;
`;
export const Line17Div = styled.div`
    height: 0px;
    align-self: stretch;
    stroke-width: 1px;
    stroke: var(--Slate-8, #4c5155);
`;
export const Piu1Div = styled.div`
    display: flex;
    padding: 24px;
    flex-direction: column;
    align-items: flex-start;
    gap: 30px;
    align-self: stretch;
    border-radius: 16px;
    background: var(--Slate-3, #202425);
`;
export const P1UsuarioDiv = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    align-self: stretch;
`;
export const P1DadosDiv = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;
`;
export const P1FotoDiv = styled.div`
    display: flex;
    padding: 8px;
    align-items: center;
    gap: 10px;
    border-radius: 48px;
    border: 4px solid var(--Institutional-Blue-Fade, #004c97);
`;
export const P1Foto2Div = styled.div`
    display: flex;
    width: 80px;
    height: 80px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
    border-radius: 100px;
    background: #fff;
`;
export const LogoP1 = styled.img`
    width: 80px;
    height: 80px;
    border-radius: 40px;
    background: url(<path-to-image>) lightgray 50% / cover no-repeat, #fff;
`;
export const P1NomeDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 8px;
`;
export const P1NomeText1 = styled.h1`
    color: var(--Slate-12, #ecedee);
    text-align: center;
    /* Nome do usuário */
    font-family: 'Poppins', sans-serif;
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
`;
export const P1NomeText2 = styled.h1`
    color: var(--Slate-12, #ecedee);
    text-align: center;
    font-feature-settings: 'liga' off, 'clig' off;

    /* @user */
    font-family: 'Poppins', sans-serif;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px; /* 171.429% */
    letter-spacing: 0.5px;
`;
export const LogoTrash = styled.img`
    width: 24px;
    height: 24px;
`;
export const P1Text = styled.h1`
    color: var(--Slate-12, #ecedee);
    text-align: center;
    font-family: 'Poppins', sans-serif;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
`;
export const InteDiv1 = styled.div`
    display: flex;
    align-items: flex-start;
    gap: 24px;
`;
export const CompDiv1 = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;
`;
export const LogoComp1 = styled.img`
    width: 24px;
    height: 24px;
`;
export const TextComp1 = styled.h1`
    color: var(--Slate-12, #ecedee);
    /* 1 */
    font-family: 'Poppins', sans-serif;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
`;
export const ComenDiv1 = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;
`;
export const LogoComen1 = styled.img`
    width: 24px;
    height: 24px;
`;
export const TextComen1 = styled.h1`
    color: var(--Slate-12, #ecedee);
    /* 1 */
    font-family: 'Poppins', sans-serif;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
`;
export const AmeiDiv1 = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;
`;
export const LogoAmei1 = styled.img`
    width: 24px;
    height: 24px;
`;
export const TextAmei1 = styled.h1`
    color: var(--Slate-12, #ecedee);
    /* 2 */
    font-family: 'Poppins', sans-serif;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
`;
export const Piu2Button = styled.button`
    display: flex;
    padding: 24px;
    flex-direction: column;
    align-items: flex-start;
    gap: 30px;
    align-self: stretch;
    border: none;
    border-radius: 16px;
    background: var(--Slate-3, #202425);
`;
export const P2UsuarioDiv = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;
`;
export const P2FotoDiv = styled.div`
    display: flex;
    padding: 8px;
    align-items: center;
    gap: 10px;
    border-radius: 48px;
    border: 4px solid var(--Institutional-Blue-Fade, #004c97);
`;
export const P2Foto2Div = styled.div`
    display: flex;
    width: 80px;
    justify-content: center;
    align-items: center;
    border-radius: 40px;
    background: #fff;
`;
export const LogoP2 = styled.img`
    width: 80px;
    height: 80px;
    border-radius: 40px;
    background: url(<path-to-image>) lightgray 50% / cover no-repeat, #fff;
`;
export const P2NomeDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 8px;
`;
export const P2NomeText1 = styled.h1`
    color: var(--Slate-12, #ecedee);
    text-align: center;

    /* Pedro Souza */
    font-family: 'Poppins', sans-serif;
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
`;
export const P2NomeText2 = styled.h1`
    color: var(--Slate-12, #ecedee);
    text-align: center;
    font-feature-settings: 'liga' off, 'clig' off;
    /* @pebaiano */
    font-family: 'Poppins', sans-serif;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px; /* 171.429% */
    letter-spacing: 0.5px;
`;
export const P2Text = styled.h1`
    color: var(--Slate-12, #ecedee);

    /* Subtitle/Normal */
    font-family: 'Poppins', sans-serif;
    text-align: left;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
`;
export const InteDiv2 = styled.div`
    display: flex;
    align-items: flex-start;
    gap: 24px;
`;
export const CompDiv2 = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;
`;
export const LogoComp2 = styled.img`
    width: 24px;
    height: 24px;
`;
export const TextComp2 = styled.h1`
    color: var(--Slate-12, #ecedee);
    /* 5 */
    font-family: 'Poppins', sans-serif;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
`;
export const ComenDiv2 = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;
`;
export const LogoComen2 = styled.img`
    width: 24px;
    height: 24px;
`;
export const TextComen2 = styled.h1`
    color: var(--Slate-12, #ecedee);
    /* 3 */
    font-family: 'Poppins', sans-serif;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
`;
export const AmeiDiv2 = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;
`;
export const LogoAmei2 = styled.img`
    width: 24px;
    height: 24px;
`;
export const TextAmei2 = styled.h1`
    color: var(--Slate-12, #ecedee);
    /* 8 */
    font-family: 'Poppins', sans-serif;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
`;
export const Piu3Div = styled.div`
    display: flex;
    padding: 24px;
    flex-direction: column;
    align-items: flex-start;
    gap: 30px;
    align-self: stretch;
    border-radius: 16px;
    background: #202425;
`;
export const P3UsuarioDiv = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;
`;
export const P3FotoDiv = styled.div`
    display: flex;
    padding: 8px;
    align-items: center;
    gap: 10px;
    border-radius: 48px;
    border: 4px solid var(--Institutional-Blue-Fade, #004c97);
`;
export const P3Foto2Div = styled.div`
    display: flex;
    width: 80px;
    height: 80px;
    justify-content: center;
    align-items: center;
    border-radius: 40px;
    background: #fff;
`;
export const LogoP3 = styled.img`
    width: 80px;
    height: 80px;
    border-radius: 40px;
    background: url(<path-to-image>) lightgray 50% / cover no-repeat, #fff;
`;
export const P3NomeDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 8px;
`;
export const P3NomeText1 = styled.h1`
    color: #ecedee;
    text-align: center;

    /* Anna Karoline */
    font-family: 'Poppins', sans-serif;
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
`;
export const P3NomeText2 = styled.h1`
    color: #ecedee;
    text-align: center;
    font-feature-settings: 'liga' off, 'clig' off;

    /* @nnakarol */
    font-family: 'Poppins', sans-serif;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px; /* 171.429% */
    letter-spacing: 0.5px;
`;
export const P3Text = styled.h1`
    color: #ecedee;
    text-align: center;

    /* Oiiiiiii (Intenção de furar a fila do bandejão) */
    font-family: 'Poppins', sans-serif;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
`;
export const InteDiv3 = styled.div`
    display: flex;
    align-items: flex-start;
    gap: 24px;
`;
export const CompDiv3 = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;
`;
export const LogoComp3 = styled.img`
    width: 24px;
    height: 24px;
`;
export const TextComp3 = styled.h1`
    color: var(--Slate-12, #ecedee);
    /* 5 */
    font-family: N 'Poppins', sans-serif;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
`;
export const ComenDiv3 = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;
`;
export const LogoComen3 = styled.img`
    width: 24px;
    height: 24px;
`;
export const TextComen3 = styled.h1`
    color: var(--Slate-12, #ecedee);
    /* 3 */
    font-family: 'Poppins', sans-serif;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
`;
export const AmeiDiv3 = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;
`;
export const LogoAmei3 = styled.img`
    width: 24px;
    height: 24px;
`;
export const TextAmei3 = styled.h1`
    color: var(--Slate-12, #ecedee);
    /* 8 */
    font-family: 'Poppins', sans-serif;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
`;
export const Piu4Div = styled.div`
    display: flex;
    padding: 24px;
    flex-direction: column;
    align-items: flex-start;
    gap: 30px;
    align-self: stretch;
    border-radius: 16px;
    background: #202425;
`;
export const P4UsuarioDiv = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;
`;
export const P4FotoDiv = styled.div`
    display: flex;
    padding: 8px;
    align-items: center;
    gap: 10px;
    border-radius: 48px;
    border: 4px solid var(--Institutional-Blue-Fade, #004c97);
`;
export const LogoP4 = styled.img`
    width: 80px;
    height: 80px;
    border-radius: 40px;
    background: url(<path-to-image>) lightgray 50% / cover no-repeat, #fff;
`;
export const P4NomeDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 8px;
`;
export const P4NomeText1 = styled.h1`
    color: #ecedee;

    text-align: center;
    /* Arthur Maia */
    font-family: 'Poppins', sans-serif;
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
`;
export const P4NomeText2 = styled.h1`
    color: #ecedee;
    text-align: center;
    font-feature-settings: 'liga' off, 'clig' off;

    /* @Ntutsdoscrias */
    font-family: 'Poppins', sans-serif;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px; /* 171.429% */
    letter-spacing: 0.5px;
`;
export const P4Text = styled.h1`
    align-self: stretch;
    color: var(--Slate-12, #ecedee);

    /* Subtitle/Normal */
    font-family: 'Poppins', sans-serif;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
`;
export const InteDiv4 = styled.div`
    display: flex;
    align-items: flex-start;
    gap: 24px;
`;
export const CompDiv4 = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;
`;
export const LogoComp4 = styled.img`
    width: 24px;
    height: 24px;
`;
export const TextComp4 = styled.h1`
    color: var(--Slate-12, #ecedee);
    /* 5 */
    font-family: 'Poppins', sans-serif;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
`;
export const ComenDiv4 = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;
`;
export const LogoComen4 = styled.img`
    width: 24px;
    height: 24px;
`;
export const TextComen4 = styled.h1`
    color: var(--Slate-12, #ecedee);
    /* 3 */
    font-family: 'Poppins', sans-serif;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
`;
export const AmeiDiv4 = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;
`;
export const LogoAmei4 = styled.img`
    width: 24px;
    height: 24px;
`;
export const TextAmei4 = styled.h1`
    color: var(--Slate-12, #ecedee);
    /* 8 */
    font-family: 'Poppins', sans-serif;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
`;
