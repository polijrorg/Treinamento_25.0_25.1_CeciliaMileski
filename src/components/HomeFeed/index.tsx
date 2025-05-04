import React from 'react';
import * as S from './styles';
import PiuCard from 'components/PiuCard';

const HomeFeed = () => {
    return (
        <S.Feed>
            <S.PesqDiv>
                <S.PesqText>Ouvir um piu...</S.PesqText>
                <S.PesqImage src="assets\images\ci_search.png" />
            </S.PesqDiv>
            <S.MesDiv>
                <S.MesText>Quero dar um piu...</S.MesText>
                <S.EmojiDiv>
                    <S.EmojiDiv2>
                        <S.FotoLogo src="assets\images\Image_02.png" />
                        <S.CamLogo src="assets\images\Video.png" />
                        <S.SmileLogo src="assets\images\Frame.png" />
                        <S.PriceLogo src="assets\images\Tag.png" />
                        <S.GifLogo src="assets\images\Gif.png" />
                    </S.EmojiDiv2>
                    <S.SendLogo src="assets\images\Paper_Plane.png" />
                </S.EmojiDiv>
            </S.MesDiv>
            <S.Line17Div>
                -----------------------------------------------------------------------------------------------------------------------------
            </S.Line17Div>
            <S.Piu1Div>
                <S.P1UsuarioDiv>
                    <S.P1DadosDiv>
                        <S.P1FotoDiv>
                            <S.P1Foto2Div>
                                <S.LogoP1 src="assets\images\quadrados 1.png" />
                            </S.P1Foto2Div>
                        </S.P1FotoDiv>
                        <S.P1NomeDiv>
                            <S.P1NomeText1>Nome de usuário</S.P1NomeText1>
                            <S.P1NomeText2>@user</S.P1NomeText2>
                        </S.P1NomeDiv>
                    </S.P1DadosDiv>
                    <S.LogoTrash src="assets\images\Trash_Full.png" />
                </S.P1UsuarioDiv>
                <S.P1Text>
                    only love can hurt like this... ᶜᵃᵈᵉ ᵒ ˡᵒˡᵒ only love can
                    hurt like this ᵐᵉ ᵈᵃ ᵒ ˡᵒˡᵒ
                </S.P1Text>
                <S.InteDiv1>
                    <S.CompDiv1>
                        <S.LogoComp1 src="assets\images\Arrow_Reload_02.png" />
                        <S.TextComp1>1</S.TextComp1>
                    </S.CompDiv1>
                    <S.ComenDiv1>
                        <S.LogoComen1 src="assets\images\Chat_Circle.png" />
                        <S.TextComen1>1</S.TextComen1>
                    </S.ComenDiv1>
                    <S.AmeiDiv1>
                        <S.LogoAmei1 src="assets\images\Heart_02.png" />
                        <S.TextAmei1>2</S.TextAmei1>
                    </S.AmeiDiv1>
                </S.InteDiv1>
            </S.Piu1Div>
            <PiuCard />
            <S.Piu3Div>
                <S.P3UsuarioDiv>
                    <S.P3FotoDiv>
                        <S.P3Foto2Div>
                            <S.LogoP3 src="assets\images\cff6e084839def42a6f45e9f5d27eddf317a15e7.png" />
                        </S.P3Foto2Div>
                    </S.P3FotoDiv>
                    <S.P3NomeDiv>
                        <S.P3NomeText1>Anna Karoline</S.P3NomeText1>
                        <S.P3NomeText2>@nnakarol</S.P3NomeText2>
                    </S.P3NomeDiv>
                </S.P3UsuarioDiv>
                <S.P3Text>
                    Oiiiiiii (Intenção de furar a fila do bandejão)
                </S.P3Text>
                <S.InteDiv3>
                    <S.CompDiv3>
                        <S.LogoComp3 src="assets\images\Arrow_Reload_02.png" />
                        <S.TextComp3>3</S.TextComp3>
                    </S.CompDiv3>
                    <S.ComenDiv3>
                        <S.LogoComen3 src="assets\images\Chat_Circle.png" />
                        <S.TextComen3>12</S.TextComen3>
                    </S.ComenDiv3>
                    <S.AmeiDiv3>
                        <S.LogoAmei3 src="assets\images\Heart_02.png" />
                        <S.TextAmei3>27</S.TextAmei3>
                    </S.AmeiDiv3>
                </S.InteDiv3>
            </S.Piu3Div>
            <S.Piu4Div>
                <S.P4UsuarioDiv>
                    <S.P4FotoDiv>
                        <S.LogoP4 src="assets\images\55142361f8f3fc821bed5c57314b42384b704a79.png" />
                    </S.P4FotoDiv>
                    <S.P4NomeDiv>
                        <S.P4NomeText1>Arthur Maia</S.P4NomeText1>
                        <S.P4NomeText2>@Ntutsdoscrias</S.P4NomeText2>
                    </S.P4NomeDiv>
                </S.P4UsuarioDiv>
                <S.P4Text>
                    3,141592653589793238461643383279502884197269399375105820974944
                    59230781640628620899862803482534211706798214808651
                </S.P4Text>
                <S.InteDiv4>
                    <S.CompDiv4>
                        <S.LogoComp4 src="assets\images\Arrow_Reload_02.png" />
                        <S.TextComp4>3</S.TextComp4>
                    </S.CompDiv4>
                    <S.ComenDiv4>
                        <S.LogoComen4 src="assets\images\Chat_Circle.png" />
                        <S.TextComen4>12</S.TextComen4>
                    </S.ComenDiv4>
                    <S.AmeiDiv4>
                        <S.LogoAmei4 src="assets\images\Heart_02.png" />
                        <S.TextAmei4>27</S.TextAmei4>
                    </S.AmeiDiv4>
                </S.InteDiv4>
            </S.Piu4Div>
        </S.Feed>
    );
};
export default HomeFeed;
