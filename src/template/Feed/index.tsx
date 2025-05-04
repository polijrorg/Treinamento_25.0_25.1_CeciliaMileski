import React from 'react';
import * as S from './styles';
import SideBar from 'components/SideBar';
import HomeFeed from 'components/HomeFeed';
import OtherSideBar from 'components/OtherSideBar';

const HomeTemplate = () => {
    return (
        <S.Container>
            <SideBar />
            <HomeFeed />
            <OtherSideBar />
        </S.Container>
    );
};
export default HomeTemplate;
