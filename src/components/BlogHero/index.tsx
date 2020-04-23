import React from 'react';
import { InputContainer, InputIconContainer, Input, InputHotkey } from "../style"
import FeatherIcon from 'feather-icons-react';
import { Link } from 'gatsby';
import { isBrowser } from '../../helpers/login';

export const BlogHero = () => {
    const searchRef = React.createRef<HTMLInputElement>();

    isBrowser() && window.addEventListener('keyup', (event) => {
        if(event.which == 191) {
            if(searchRef.current) searchRef.current.focus()
        }
    })

    return (
        <div className="blog-hero">
            <Link to={"/blog"}>
                <h1 style={{ fontSize: '1.5rem', margin: 0, width: 0, display: 'flex' }}>Blog</h1>
            </Link>
            <InputContainer style={{ width: '275px' }}>
                <InputIconContainer>
                    <FeatherIcon icon={"search"} size={16} />
                </InputIconContainer>
                <Input placeholder="Search for a post" type="text" ref={searchRef} />
                <InputIconContainer>
                    <InputHotkey>/</InputHotkey>
                </InputIconContainer>
            </InputContainer>
            <div></div>
        </div>
    )
}