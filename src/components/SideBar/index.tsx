import React from 'react';
import * as S from './styles';

const SideBar = () => {
    return (
        <S.Container>
            <S.InfoDiv>
                <S.LogoDiv>
                    <S.Logo src="assets/images/chick-svgrepo-com 1.png" />
                    <S.LogoText>PIUPIUWER</S.LogoText>
                </S.LogoDiv>
                <S.ComandsDiv>
                    <S.InfinhoDiv1>
                        <S.InfinhoDiv11>
                            <S.Logohome src="assets\images\bx_home.png" />
                            <S.Infotext1>Página Inicial</S.Infotext1>
                        </S.InfinhoDiv11>
                    </S.InfinhoDiv1>
                    <S.InfinhoDiv2>
                        <S.InfinhoDiv22>
                            <S.LogoSino src="assets\images\ic_outline-notifications.png" />
                            <S.Infotext2>Notificações</S.Infotext2>
                        </S.InfinhoDiv22>
                    </S.InfinhoDiv2>
                    <S.InfinhoDiv3>
                        <S.InfinhoDiv33>
                            <S.LogoFala src="assets\images\jam_messages-alt.png" />
                            <S.Infotext3>Mensagens</S.Infotext3>
                        </S.InfinhoDiv33>
                    </S.InfinhoDiv3>
                    <S.InfinhoDiv4>
                        <S.InfinhoDiv44>
                            <S.LogoNuvem src="assets\images\Cloud_Check.png" />
                            <S.Infotext4>Salvos</S.Infotext4>
                        </S.InfinhoDiv44>
                    </S.InfinhoDiv4>
                    <S.InfinhoDiv5>
                        <S.InfinhoDiv55>
                            <S.LogoPerfil src="assets\images\pajamas_profile.png" />
                            <S.Infotext5>Perfil</S.Infotext5>
                        </S.InfinhoDiv55>
                    </S.InfinhoDiv5>
                    <S.InfinhoDiv6>
                        <S.InfinhoDiv66>
                            <S.LogoConf src="assets\images\akar-icons_gear.png" />
                            <S.Infotext6>Configurações</S.Infotext6>
                        </S.InfinhoDiv66>
                    </S.InfinhoDiv6>
                </S.ComandsDiv>
                <S.QuadDiv>
                    <S.LogoQuad src="assets\images\quadrados 1.png" />
                </S.QuadDiv>
                <S.LogoOutDiv>
                    <S.LogoOut src="assets\images\Log_Out.png" />
                </S.LogoOutDiv>
            </S.InfoDiv>
        </S.Container>
    );
};
export default SideBar;
