import styled from 'styled-components';

export const PopupOverlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.6);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
`;

export const PopupContent = styled.div`
    background: var(--Slate-3, #202425);
    padding: 24px;
    border-radius: 16px;
    max-width: 50vw;
    width: 90%;
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
export const PiuExpDiv = styled.div`
    display: inline-flex;
    padding: 10px;
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
`;
export const PiuExp2Div = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
`;
export const PiuExp3Div = styled.div`
    display: flex;
    padding: 10px;
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
`;
export const PiuExp4Div = styled.div`
    display: flex;
    width: 720px;
    padding: 24px;
    flex-direction: column;
    align-items: flex-start;
    gap: 30px;
`;
export const UsuarioExpDiv = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;
`;
export const FotoExpDiv = styled.div`
    display: flex;
    padding: 8px;
    align-items: center;
    gap: 10px;
    border-radius: 48px;
    border: 4px solid var(--Institutional-Blue-Fade, #004c97);
`;
export const FotoExp2Div = styled.div`
    display: flex;
    width: 80px;
    justify-content: center;
    align-items: center;
    border-radius: 40px;
    background: #fff;
`;
export const LogoExp1 = styled.img`
    width: 80px;
    height: 80px;
    border-radius: 40px;
    background: url(<path-to-image>) lightgray 50% / cover no-repeat, #fff;
`;
export const NomeExpDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 8px;
`;
export const TextNomeExp1 = styled.h1`
    color: var(--Slate-12, #ecedee);
    text-align: center;

    /* Pedro Souza */
    font-family: 'Poppins', sans-serif;
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
`;
export const TextNomeExp2 = styled.h1`
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
export const TextComenExp = styled.h1`
    align-self: stretch;
    color: var(--Slate-12, #ecedee);

    /* NÃO há imoralidade em furar a fila do bandejão quem não defende é porque não tem amigos */
    font-family: 'Poppins', sans-serif;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
`;
export const InteExpDiv = styled.div`
    display: flex;
    align-items: flex-start;
    gap: 24px;
`;
export const CompExpDiv = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;
`;
export const LogoCompExp2 = styled.img`
    width: 24px;
    height: 24px;
`;
export const TextCompExp = styled.h1`
    color: var(--Slate-12, #ecedee);
    /* 5 */
    font-family: 'Poppins', sans-serif;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
`;
export const ComenDivExp = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;
`;
export const LogoComenExp = styled.img`
    width: 24px;
    height: 24px;
`;
export const TextComenExp2 = styled.h1`
    color: var(--Slate-12, #ecedee);
    /* 3 */
    font-family: 'Poppins', sans-serif;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
`;
export const AmeiDivExp = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;
`;
export const LogoAmeiExp = styled.img`
    width: 24px;
    height: 24px;
`;
export const TextAmeiExp = styled.h1`
    color: var(--Slate-12, #ecedee);
    /* 8 */
    font-family: 'Poppins', sans-serif;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
`;
export const ComentarExpDiv = styled.div`
    display: flex;
    padding: 8px;
    justify-content: space-between;
    align-items: flex-end;
    align-self: stretch;
    border-radius: 8px;
    background: var(--Slate-8, #4c5155);
`;
export const TextComentarExp = styled.h1`
    width: 103px;
    color: #fff;
    text-align: center;

    /* Subtitle/Normal */
    font-family: 'Poppins', sans-serif;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
`;
export const LogoComentarExp = styled.img`
    width: 16px;
    height: 16px;
`;
export const Amig1Div = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;
`;
export const LogoAmig1Div1 = styled.div`
    display: flex;
    padding: 4px;
    align-items: center;
    gap: 10px;
    border-radius: 48px;
    border: 2px solid var(--Institutional-Blue-Fade, #004c97);
`;
export const LogoAmig1Div2 = styled.div`
    display: flex;
    width: 60px;
    justify-content: center;
    align-items: center;
    border-radius: 40px;
    background: #fff;
`;
export const LogoAmig1 = styled.img`
    width: 60px;
    height: 60px;
    border-radius: 40px;
    background: url(<path-to-image>) lightgray 50% / cover no-repeat, #fff;
`;
export const TextAmig1Div = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 8px;
`;
export const Text1Amig1 = styled.h1`
    color: #ecedee;
    text-align: center;
    font-feature-settings: 'liga' off, 'clig' off;

    /* Anna Karoline */
    font-family: 'Poppins', sans-serif;
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
    line-height: 24px; /* 171.429% */
    letter-spacing: 0.5px;
`;
export const Text2Amig1 = styled.h1`
    color: #ecedee;
    text-align: center;

    /* Oiiiiiii (Intenção de furar a fila do bandejão) */
    font-family: 'Poppins', sans-serif;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
`;
export const Amig2Div = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;
`;
export const LogoAmig2Div1 = styled.div`
    display: flex;
    padding: 4px;
    align-items: center;
    gap: 10px;
    border-radius: 48px;
    border: 2px solid var(--Institutional-Blue-Fade, #004c97);
`;
export const LogoAmig2Div2 = styled.div`
    display: flex;
    width: 60px;
    justify-content: center;
    align-items: center;
    border-radius: 40px;
    background: #fff;
`;
export const LogoAmig2 = styled.img`
    width: 60px;
    height: 60px;
    border-radius: 40px;
    background: url(<path-to-image>) lightgray 50% / cover no-repeat, #fff;
`;
export const TextAmig2Div = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 8px;
`;
export const Text1Amig2 = styled.h1`
    color: #ecedee;
    text-align: center;
    font-feature-settings: 'liga' off, 'clig' off;

    /* Caio V */
    font-family: 'Poppins', sans-serif;
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
    line-height: 24px; /* 171.429% */
    letter-spacing: 0.5px;
`;
export const Text2Amig2 = styled.h1`
    color: #ecedee;
    text-align: center;

    /*AINNNNN ZÉ DA MANGAA*/
    font-family: 'Poppins', sans-serif;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
`;
