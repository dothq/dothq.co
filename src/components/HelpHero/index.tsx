import React from 'react';
import { HelpHero, HelpContainer, HelpIcon, HelpTitle, HelpSearch, SearchInput } from '../style';

import FeatherIcon from 'feather-icons-react';

import { Link } from 'gatsby';

export const HelpDeskHero = ({ title, icon }: { title: string; icon: string }) => (
    <HelpHero>
        <HelpContainer>
            <Link to={"/help"}>
                <HelpIcon src={icon} size={48} />
            </Link>
            <HelpTitle style={{ margin: '15px 0' }}>{title}</HelpTitle>
            <HelpSearch style={{ margin: '24px 0px 42px 0px' }}>
                <SearchInput placeholder={"Find help and services"} />
                <FeatherIcon icon={"search"} size={22} color={"#383838"} />
            </HelpSearch>
        </HelpContainer>
    </HelpHero>
)