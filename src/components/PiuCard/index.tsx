import React, { useState } from 'react';
import * as S from './styles';

const PiuCard = () => {
    const [mostrarPopup, setMostrarPopup] = useState(false);

    return (
        <>
            <S.Piu2Button onClick={() => setMostrarPopup(true)}>
                <S.P2UsuarioDiv>
                    <S.P2FotoDiv>
                        <S.P2Foto2Div>
                            <S.LogoP2 src="assets\images\image 5.png" />
                        </S.P2Foto2Div>
                    </S.P2FotoDiv>
                    <S.P2NomeDiv>
                        <S.P2NomeText1>Pedro Souza</S.P2NomeText1>
                        <S.P2NomeText2>@pebaiano</S.P2NomeText2>
                    </S.P2NomeDiv>
                </S.P2UsuarioDiv>
                <S.P2Text>
                    NÃO há imoralidade em furar a fila do bandejão quem não
                    defende é porque não tem amigos
                </S.P2Text>
                <S.InteDiv2>
                    <S.CompDiv2>
                        <S.LogoComp2 src="assets\images\Arrow_Reload_02.png" />
                        <S.TextComp2>5</S.TextComp2>
                    </S.CompDiv2>
                    <S.ComenDiv2>
                        <S.LogoComen2 src="assets\images\Chat_Circle.png" />
                        <S.TextComen2>3</S.TextComen2>
                    </S.ComenDiv2>
                    <S.AmeiDiv2>
                        <S.LogoAmei2 src="assets\images\Heart_02.png" />
                        <S.TextAmei2>8</S.TextAmei2>
                    </S.AmeiDiv2>
                </S.InteDiv2>
            </S.Piu2Button>

            {mostrarPopup && (
                <S.PopupOverlay onClick={() => setMostrarPopup(false)}>
                    <S.PopupContent onClick={(e) => e.stopPropagation()}>
                        <S.PiuExpDiv>
                            <S.PiuExp2Div>
                                <S.PiuExp3Div>
                                    <S.PiuExp4Div>
                                        <S.UsuarioExpDiv>
                                            <S.FotoExpDiv>
                                                <S.FotoExp2Div>
                                                    <S.LogoExp1 src="assets\images\image 5.png" />
                                                </S.FotoExp2Div>
                                            </S.FotoExpDiv>
                                            <S.NomeExpDiv>
                                                <S.TextNomeExp1>
                                                    Pedro Souza
                                                </S.TextNomeExp1>
                                                <S.TextNomeExp2>
                                                    @pebaiano
                                                </S.TextNomeExp2>
                                            </S.NomeExpDiv>
                                        </S.UsuarioExpDiv>
                                        <S.TextComenExp>
                                            NÃO há imoralidade em furar a fila
                                            do bandejão quem não defende é
                                            porque não tem amigos
                                        </S.TextComenExp>
                                        <S.InteExpDiv>
                                            <S.CompExpDiv>
                                                <S.LogoCompExp2 src="assets\images\Arrow_Reload_02.png" />
                                                <S.TextCompExp>5</S.TextCompExp>
                                            </S.CompExpDiv>
                                            <S.ComenDivExp>
                                                <S.LogoComenExp src="assets\images\Chat_Circle.png" />
                                                <S.TextComenExp2>
                                                    3
                                                </S.TextComenExp2>
                                            </S.ComenDivExp>
                                            <S.AmeiDivExp>
                                                <S.LogoAmeiExp src="assets\images\Heart_02.png" />
                                                <S.TextAmeiExp>8</S.TextAmeiExp>
                                            </S.AmeiDivExp>
                                        </S.InteExpDiv>
                                        <S.ComentarExpDiv>
                                            <S.TextComentarExp>
                                                Comentar...
                                            </S.TextComentarExp>
                                            <S.LogoComentarExp src="assets\images\Paper_Plane.png" />
                                        </S.ComentarExpDiv>
                                        <S.Amig1Div>
                                            <S.LogoAmig1Div1>
                                                <S.LogoAmig1Div2>
                                                    <S.LogoAmig1 src="assets\images\cff6e084839def42a6f45e9f5d27eddf317a15e7.png" />
                                                </S.LogoAmig1Div2>
                                            </S.LogoAmig1Div1>
                                            <S.TextAmig1Div>
                                                <S.Text1Amig1>
                                                    Anna Karoline
                                                </S.Text1Amig1>
                                                <S.Text2Amig1>
                                                    Oiiiiiii (Intenção de furar
                                                    a fila do bandejão)
                                                </S.Text2Amig1>
                                            </S.TextAmig1Div>
                                        </S.Amig1Div>
                                        <S.Amig2Div>
                                            <S.LogoAmig2Div1>
                                                <S.LogoAmig2Div2>
                                                    <S.LogoAmig2 src="assets\images\neyma 1.png" />
                                                </S.LogoAmig2Div2>
                                            </S.LogoAmig2Div1>
                                            <S.TextAmig2Div>
                                                <S.Text1Amig2>
                                                    Caio V
                                                </S.Text1Amig2>
                                                <S.Text2Amig2>
                                                    AINNNNN ZÉ DA MANGAA
                                                </S.Text2Amig2>
                                            </S.TextAmig2Div>
                                        </S.Amig2Div>
                                    </S.PiuExp4Div>
                                </S.PiuExp3Div>
                            </S.PiuExp2Div>
                        </S.PiuExpDiv>
                    </S.PopupContent>
                </S.PopupOverlay>
            )}
        </>
    );
};

export default PiuCard;
