import React from 'react';

import { FeatureDisplay, Feature, FeatureImage, Heading, Description, Title, FeatureIcon } from "../style"

import * as shield from '../../images/icons/shield.svg'
import * as mail from '../../images/icons/mail.svg'
import * as sync from '../../images/icons/sync.svg'

import * as blockerFeature from '../../images/features/blocker_feature.svg'
import * as maskFeature from '../../images/features/mask_feature.svg'
import * as syncFeature from '../../images/features/sync_feature.svg'

import { ButtonV2 } from '../ButtonV2';

import { isBrowser } from "../../helpers/login"

export const Features = () => {
    const blockerRef = React.createRef<HTMLDivElement>();
    const maskRef = React.createRef<HTMLDivElement>();
    const syncRef = React.createRef<HTMLDivElement>();
    
    isBrowser() && window.addEventListener('scroll', () => {
      if(!isBrowser()) return;
      if(!blockerRef.current || !maskRef.current || !syncRef.current) return;
    
      if(window.scrollY > (blockerRef.current.offsetTop - (blockerRef.current.offsetTop / 4))) {
        blockerRef.current.style.opacity = "1";
      } else blockerRef.current.style.opacity = "0";
    
      if(window.scrollY > (maskRef.current.offsetTop - (maskRef.current.offsetTop / 4))) {
        maskRef.current.style.opacity = "1";
      } else maskRef.current.style.opacity = "0";
    
      if(window.scrollY > (syncRef.current.offsetTop - (syncRef.current.offsetTop / 4))) {
        syncRef.current.style.opacity = "1";
      } else syncRef.current.style.opacity = "0";
    })

    return (
        <>
            <div id="features" dot-slideup="true" style={{ animationDelay: '1.8s', paddingTop: '3rem' }}>
                <FeatureDisplay>
                    <Feature>
                        <div style={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
                            <FeatureIcon src={shield} />
                            <div style={{ marginTop: '58px' }}>
                                <Heading>Block ads with ease</Heading>
                                <Description>Dot Browser blocks all those pesky advertisments and trackers you come across while browsing the web.</Description>
                            </div>
                        </div>

                        <div style={{ display: 'flex' }}>
                            <FeatureImage ref={blockerRef} src={blockerFeature} style={{ width: '623px', height: '325px', opacity: 0 }} />
                        </div>

                    </Feature>

                    <Feature>
                        <div style={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
                            <FeatureImage ref={maskRef} src={maskFeature} style={{ width: '623px', height: '325px', opacity: 0 }} />
                        </div>

                        <div style={{ display: 'flex' }}>
                            <div>
                                <FeatureIcon src={mail} style={{ marginLeft: 'auto' }} />
                                <Heading style={{ marginTop: '58px', direction: 'rtl' }}>Say goodbye to spam</Heading>
                                <Description style={{ textAlign: 'right' }}>Dot Browser offers to mask your email with a temporary email address when registering for services online.</Description>
                            </div>
                        </div>


                    </Feature>

                    <Feature>
                        <div style={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
                            <FeatureIcon src={sync} />
                            <div style={{ marginTop: '58px' }}>
                                <Heading>Pick up where you left off</Heading>
                                <Description>Dot Browser securely syncs your browsing data between devices linked to your Dot ID.</Description>

                                <ButtonV2 w={224} style={{ marginTop: '32px', display: 'block' }}>Learn more about this</ButtonV2>
                            </div>
                        </div>

                        <div style={{ display: 'flex' }}>
                            <FeatureImage ref={syncRef} src={syncFeature} style={{ width: '623px', height: '325px', opacity: 0, backgroundSize: 'contain', backgroundRepeat: 'no-repeat' }} />
                        </div>

                    </Feature>

                </FeatureDisplay>
            </div>

            <div id={"features-s"} style={{ display: 'none', flexFlow: 'row wrap', justifyContent: 'center', '--spacing': '54px', marginBottom: '8px' }}>
                <div style={{ display: 'flex', margin: '0 var(--spacing)', paddingBottom: '4.25rem' }}>
                    <div style={{ maxWidth: '299px', justifySelf: 'center' }}>
                        <FeatureIcon src={shield} style={{ margin: '0 auto' }} />
                        <Heading style={{ marginTop: '58px', fontSize: '30px', textAlign: 'center' }}>Block ads with ease</Heading>
                        <Description style={{ width: 'auto', textAlign: 'center' }}>Dot Browser blocks all those pesky advertisments and trackers you come across while browsing the web.</Description>
                    </div>
                </div>
                <div style={{ display: 'flex', margin: '0 var(--spacing)', paddingBottom: '4.25rem' }}>
                    <div style={{ maxWidth: '325px', justifySelf: 'center' }}>
                        <FeatureIcon src={mail} style={{ margin: '0 auto' }} />
                        <Heading style={{ marginTop: '58px', fontSize: '30px', textAlign: 'center' }}>Say goodbye to spam</Heading>
                        <Description style={{ width: 'auto', textAlign: 'center' }}>Dot Browser offers to mask your email with a temporary email address when registering for services online.</Description>
                    </div>
                </div>
                <div style={{ display: 'flex', margin: '0 var(--spacing)', paddingBottom: '4.25rem' }}>
                    <div style={{ maxWidth: '377px', justifySelf: 'center' }}>
                        <FeatureIcon src={sync} style={{ margin: '0 auto' }} />
                        <Heading style={{ marginTop: '58px', fontSize: '30px', textAlign: 'center' }}>Pick up where you left off</Heading>
                        <Description style={{ width: 'auto', textAlign: 'center' }}>Dot Browser securely syncs your browsing data between devices linked to your Dot ID.</Description>
                    </div>
                </div>
            </div>
        </>
    )
}