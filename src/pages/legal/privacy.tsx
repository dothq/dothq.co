import React from "react"

import Layout from "../../components/layout"
import SEO from "../../components/seo"

import { Link } from "gatsby"
import { Heading, PolicySectionTitle } from "../../components/style"

import '../../components/legal.css'

const PrivacyPage = () => {
    return (
        <Layout noHero>
            <SEO title={'Privacy Policy'} />
            <div className="small-hero" style={{ borderBottom: '1px solid var(--border)' }}>
                <div className="hero-container">
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <div style={{ marginLeft: '38px' }}>
                            <h1 style={{ fontSize: '32px', marginBottom: '0' }}>Privacy Policy</h1>
                            <Heading style={{ textTransform: 'uppercase', fontSize: '14px', color: 'gray', margin: 0 }}>Last updated</Heading>
                            <p className={"legal-content"} style={{ fontSize: '14px', margin: 0, textAlign: 'left' }}>1st June 2020 <Link to={"/legal/history"}>View history</Link></p>
                        </div>
                    </div>
                </div>
            </div>
            <div className={"legal-content"}>
                <p style={{ fontSize: '14px', margin: '0 auto', textAlign: 'center', maxWidth: '900px' }}>
                    Welcome to <a href={"https://dothq.co"}>https://dothq.co</a> (“Site”), hosted by <b>Dot HQ</b> (“Company”, “we”, “us”, or “our”). 
                    <br />
                    We are committed to protecting your personal information and your right to privacy.
                    
                    <br /><br />
                    If you have any questions or concerns about our notice, or our practices with regards to your personal information, please contact us at <a href={"mailto:privacy@dothq.co"}>privacy@dothq.co</a>.
                    <br /><br />
                    If there are any terms in this privacy notice that you do not agree with, please discontinue use of our Sites or Dot and our services.
                    <br /><br />
                    This privacy notice applies to all information collected through our site, Dot Browser, ("Dot"), Dot ID, ("ID"), and/or any related services.
                    <br />
                    Please read this privacy notice carefully as it will help you make informed decisions about sharing your personal information with us.
                    <br /><br /><br /><br /><br />
                    <PolicySectionTitle><b>Table of contents</b></PolicySectionTitle>
                    <br />
                    <p style={{ textAlign: 'left', fontSize: '14px', margin: 0 }}>
                        1. <Link to={"/legal/privacy#what-information-do-we-collect"}>What information do we collect?</Link>
                        <br />
                        2. <Link to={"/legal/privacy#how-do-we-use-your-information"}>How do we use your information?</Link>
                        <br />
                        3. <Link to={"/legal/privacy#will-your-information-be-shared-with-anyone"}>Will your information be shared with anyone?</Link>
                        <br />
                        4. <Link to={"/legal/privacy#do-we-use-cookies-and-other-tracking-technologies"}>Do we use cookies and other tracking technologies?</Link>
                        <br />
                        5. <Link to={"/legal/privacy#how-long-do-we-keep-your-information"}>How long do we keep your information?</Link>
                        <br />
                        6. <Link to={"/legal/privacy#how-do-we-keep-your-information-safe"}>How do we keep your information safe?</Link>
                        <br />
                        7. <Link to={"/legal/privacy#what-are-your-privacy-rights"}>What are your privacy rights?</Link>
                        <br />
                        8. <Link to={"/legal/privacy#do-california-residents-have-specific-privacy-rights"}>Do California residents have specific privacy rights?</Link>
                        <br />
                        9. <Link to={"/legal/privacy#do-we-make-updates-to-this-policy"}>Do we make updates to this policy?</Link>
                        <br />
                        10. <Link to={"/legal/privacy#how-can-you-contact-us-about-this-policy"}>How can you contact us about this policy?</Link>
                        <br />
                        11. <Link to={"/legal/privacy#how-can-you-review-update-or-delete-the-data-we-collect-from-you"}>How can you review, update, or delete the data we collect from you?</Link>
                    </p>


                    <br /><br />
                    <PolicySectionTitle id="what-information-do-we-collect"><b>1. What information do we collect?</b></PolicySectionTitle><br />
                    <p style={{ textAlign: 'left', fontSize: '14px', margin: 0, maxWidth: '1200px' }}>
                        We don't collect information when you use Dot, for example, crash reports, errors, and telemetry data. 
                        <br />However, we do collect information when you register for an ID on our Site like email, username and OAuth 2 applications.
                    </p>
                    <br /><br />
                    <PolicySectionTitle id="how-do-we-use-your-information"><b>2. How do we use your information?</b></PolicySectionTitle><br />
                    <p style={{ textAlign: 'left', fontSize: '14px', margin: 0, maxWidth: '1200px' }}>
                        We use personal information collected via our Site or Dot for a variety of purposes.
                        <br /><br />
                        We use the information we collect or receive:
                        <br /><br />
                        • To facilitate account creation and logon process.
                        <br />
                        • To enforce our terms, conditions and policies for Legal Reasons and Contractual.
                        <br />
                        • To respond to legal requests and prevent harm. If we receive a subpoena or other legal request, we may need to inspect the data we hold to determine how to respond.
                        <br />
                        • To manage user accounts. We may use your information for managing your account and keeping it in working order.
                        <br />
                        • To respond to user inquiries/offer support to users. We may use your information to respond to your inquiries and solve any potential issues you might have with the use of our Services.
                    </p>

                    <br /><br />
                    <PolicySectionTitle id="will-your-information-be-shared-with-anyone"><b>3. Will your information be shared with anyone?</b></PolicySectionTitle><br />
                    <p style={{ textAlign: 'left', fontSize: '14px', margin: 0, maxWidth: '1200px' }}>
                        We do not exchange your personal information. <br /><b>We do not</b> share your information with third parties, use it for marketing or use it for advertising and tracking.
                    </p>
                    <br /><br />
                    <PolicySectionTitle id="do-we-use-cookies-and-other-tracking-technologies"><b>4. Do we use cookies and other tracking technologies?</b></PolicySectionTitle><br />
                    <p style={{ textAlign: 'left', fontSize: '14px', margin: 0, maxWidth: '1200px' }}>
                        We use cookies to keep you logged into Dot Services and on our Site. 
                        <br /><br />
                        The cookie contains your user token which you could think of like a key to access our Services. Without it, you don't have a "key" to enter.
                        <br /><br />
                        We <b>do not use</b> tracking technologies on our Site or Dot Services.
                        <br /><br />
                        When you visit our Site, a service called Cloudflare (which we utilise to stop DDOS attacks and dangerous actions against our Site, will place a cookie to determine your trust-factor on the Cloudflare network. Cloudflare powers millions of sites and you can <a href={"https://support.cloudflare.com/hc/en-us/articles/200170156-What-does-the-Cloudflare-cfduid-cookie-do-"}>learn more about their trust-factor cookie here</a>.
                    </p>
                    <br /><br />
                    <PolicySectionTitle id="how-long-do-we-keep-your-information"><b>5. How long do we keep your information?</b></PolicySectionTitle><br />

                    <p style={{ textAlign: 'left', fontSize: '14px', margin: 0, maxWidth: '1200px' }}>
                        We will only keep your personal information for the duration you have an account registered with us. Your account will be automatically deleted from our databases once you close your account on our Site.
                    </p>
                    <br /><br />
                    <PolicySectionTitle id="how-do-we-keep-your-information-safe"><b>6. How do we keep your information safe?</b></PolicySectionTitle><br />
                    <p style={{ textAlign: 'left', fontSize: '14px', margin: 0, maxWidth: '1200px' }}>
                        We aim to protect your personal information and we do this by encrypting data you give us, like your password, email and other sensitive information you have provided us with. 
                        <br /><br />
                        We have implemented the appropriate security measures to protect the security of your personal information stored in our database, however, you should be careful with your information, as the internet is not 100% secure. It is your responsibility to access our Services in a controlled and safe environment. An example of an <b>unsafe</b> environment could be a library or public space.
                        <br /><br />
                        Personal Information that has been gained from another source like a bad actor on public Wi-Fi <b>is not our responsibility</b>.
                    </p>

                    <br /><br />
                    <PolicySectionTitle id="what-are-your-privacy-rights"><b>7. What are your privacy rights?</b></PolicySectionTitle><br />

                    <p style={{ textAlign: 'left', fontSize: '14px', margin: 0, maxWidth: '1200px' }}>
                        In regions like the European Economic Area, you have rights which allow you a large amount of control over your personal information and how it is processed. You can view, modify and delete any information you have with us at any time.
                        <br /><br />
                        <b>You have the right</b> to withdraw your consent if you believe we are processing your personal information in an unlawful way.  
                        <br /><br />
                        If you are a resident of a European Economic Area and you believe we are processing your personal information in an unlawful way, <b>you have the right</b> to complain to your local data protection supervisory authority. You can find <a href="http://ec.europa.eu/justice/data-protection/bodies/authorities/index_en.htm">their contact details here</a>.
                        <br /><br />
                        If you have questions or comments about your privacy rights, you may email us at <a href={"mailto:privacy@dothq.co"}>privacy@dothq.co</a>.
                        <br /><br />
                        <PolicySectionTitle style={{ fontSize: '20px' }}><b>Account Information</b></PolicySectionTitle><br />
                        If you would at any time like to review or change the information in your account or terminate your account, you can:
                        <br /><br />
                        • Login to your ID and navigate to the <Link to={"/me"}>account settings page</Link>.<br />
                        • You can now modify or terminate your account from this page.
                        <br /><br />
                        Upon your request to terminate your account, we will immediately deactivate or delete your account and information from our active databases.
                        <br /><br />
                        <PolicySectionTitle style={{ fontSize: '20px' }}><b>Cookie Settings</b></PolicySectionTitle><br />
                        Most browsers have cookies enabled by default. 
                        <br />
                        If you are on a Chromium-based web browser and you want to opt-out of cookies, visit <a href="https://support.google.com/accounts/answer/61416">this article to learn more</a>. 
                        <br />
                        Or if you are on Firefox or another browser, <a href="https://www.howtogeek.com/241006/how-to-block-third-party-cookies-in-every-web-browser/">read this article</a>. 
                        <br />
                        <b>Disclaimer</b> Dot HQ does not moderate or run these sites, open with caution.
                        <br /><br />
                        <PolicySectionTitle style={{ fontSize: '20px' }}><b>Email Settings</b></PolicySectionTitle><br />
                        If you would like to opt-out of our emails, you can:
                        <br /><br />
                        • Login to your ID and navigate to the <Link to={"/me"}>account settings page</Link>.<br />
                        • Un-check the "I want to receive emails from Dot HQ" box.
                        <br /><br />
                    </p>
                    <br />
                    <PolicySectionTitle id="do-california-residents-have-specific-privacy-rights"><b>8. Do California residents have specific privacy rights?</b></PolicySectionTitle><br />

                    <p style={{ textAlign: 'left', fontSize: '14px', margin: 0, maxWidth: '1200px' }}>
                        Yes, California residents are granted rights regarding access to your personal information.
                        <br /><br />
                        <a href="https://en.wikipedia.org/wiki/California_Shine_the_Light_law">California Civil Code Section 1798.83</a>, also known as the “Shine The Light” law, states that users who are California residents have the right to obtain a free-of-charge information bundle with categories of personal information (if any) we disclosed to third parties for marketing purposes and the names and addresses of all third parties with which we shared personal information in the preceding calendar year.
                        <br /><br />
                        If you are under 18, reside in California, and have a registered account with our Services or Dot, you have the right to request removal of unwanted data that you have given us on our Services.
                        <br /><br />
                        If you are a California resident and would like to request any of this data, please contact us with the information provided in section 10 of this policy.
                    </p>

                    <br /><br />
                    <PolicySectionTitle id="do-we-make-updates-to-this-policy"><b>9. Do we make updates to this policy?</b></PolicySectionTitle><br />

                    <p style={{ textAlign: 'left', fontSize: '14px', margin: 0, maxWidth: '1200px' }}>
                        We will always revise this policy to stay in line with all new laws.
                        <br /><br />
                        We will place all old policies for viewing at a later date at <Link to={"/legal/history"}>our privacy history page.</Link>
                    </p>


                    <br /><br />
                    <PolicySectionTitle id="how-can-you-contact-us-about-this-policy"><b>10. How can you contact us about this policy?</b></PolicySectionTitle><br />

                        <p style={{ textAlign: 'left', fontSize: '14px', margin: 0, maxWidth: '1200px' }}>
                            If you have questions or comments about this policy, you may email us at <a href={"mailto:privacy@dothq.co"}>privacy@dothq.co</a>.
                        </p>
                    <br />
                    <PolicySectionTitle id="how-can-you-review-update-or-delete-the-data-we-collect-from-you"><b>11. How can you review, update, or delete the data we collect from you?</b></PolicySectionTitle><br />
                    
                    <p style={{ textAlign: 'left', fontSize: '14px', margin: 0, maxWidth: '1200px' }}>
                        Based on the laws of some countries, you may have the right to request access to the personal information we collect from you, change that information, or delete it in some circumstances. To request to review, update, or delete your personal information, please visit <Link to={"/legal/gdpr"}>dothq.co/legal/gdpr</Link>. We will respond to your request within 30 days.
                    </p>
                    <br /><br />
                
                </p>
                <input id="cc" style={{ opacity: 0, height: 0, display: 'block', pointerEvents: 'none' }} />
            </div>
        </Layout>
    )
}

export default PrivacyPage
