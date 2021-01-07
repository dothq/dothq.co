import React from 'react';

import { FeatureDisplay, Feature, FeatureImage, Heading, Description, Title, FeatureIcon } from "../style"

import lock from '../../assets/images/features/lock.svg'
import mail from '../../assets/images/features/mail.svg'
import migrate from '../../assets/images/features/migrate.svg'
import opensource from '../../assets/images/features/opensource.svg'
import shield from '../../assets/images/features/shield.svg'
import sparkles from '../../assets/images/features/sparkles.svg'

import { ButtonV2 } from '../ButtonV2';

import { isBrowser } from "../../../lib/helpers/login"

export const Features = () => {
    return (
        <FeatureDisplay>
            <Feature>
                <div style={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
                    <FeatureIcon src={lock} />
                    <div style={{ marginTop: '20px' }}>
                        <Heading>Respects your privacy</Heading>
                        <Description>We never send telemetry or crash reports without your consent.</Description>
                    </div>
                </div>
            </Feature>

            <Feature>
                <div style={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
                    <FeatureIcon src={sparkles} />
                    <div style={{ marginTop: '20px' }}>
                        <Heading>Make Dot Browser yours</Heading>
                        <Description>Browse our library of thousands of themes and extensions to get Dot just how you like it.</Description>
                    </div>
                </div>
            </Feature>

            <Feature>
                <div style={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
                    <FeatureIcon src={shield} />
                    <div style={{ marginTop: '20px' }}>
                        <Heading>Block nasty ads and trackers</Heading>
                        <Description>Dot will automatically block all avertisements and trackers while you surf the web.</Description>
                    </div>
                </div>
            </Feature>

            <Feature>
                <div style={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
                    <FeatureIcon src={mail} />
                    <div style={{ marginTop: '20px' }}>
                        <Heading>Protect your mailbox</Heading>
                        <Description>We will offer to mask your email address when you sign up for sites or services.</Description>
                    </div>
                </div>
            </Feature>

            <Feature>
                <div style={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
                    <FeatureIcon src={migrate} />
                    <div style={{ marginTop: '20px' }}>
                        <Heading>Migrate from Chrome or Edge</Heading>
                        <Description>Dot can migrate all your data from your previous browser in just a few clicks.</Description>
                    </div>
                </div>
            </Feature>

            <Feature>
                <div style={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
                    <FeatureIcon src={opensource} />
                    <div style={{ marginTop: '20px' }}>
                        <Heading>Powered by Open Source</Heading>
                        <Description>Dot is built on top of open-source software meaning the source code is open to anyone.</Description>
                    </div>
                </div>
            </Feature>

        </FeatureDisplay>
    )
}