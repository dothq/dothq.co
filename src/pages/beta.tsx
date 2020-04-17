import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { HeroButton } from "../components/Button";
import { Buttons } from "../components/style";
import FeatherIcon from 'feather-icons-react'

// const launchDate = 1587466800000;
const launchDate = 1587466800000;

const SecondPage = () => {
	const [timeUntilLaunch, setTimeUntilLaunch] = React.useState();

	React.useEffect(() => {
		const showTime = () => {
			var t = (launchDate - new Date().getTime()) / 1000;
			if (t > 1) {
				const days = Math.floor(t / 86400);
				t -= days * 86400;
				const hours = Math.floor(t / 3600) % 24;
				t -= hours * 3600;
				const minutes = Math.floor(t / 60) % 60;
				t -= minutes * 60;
				const seconds = Math.floor(t % 60);

				setTimeUntilLaunch((
					`${days} ${days === 1 ? "day" : "days"}, ${hours} ${
						hours === 1 ? "hour" : "hours"
					}, ${minutes} ${
						minutes === 1 ? "minute" : "minutes"
					} and ${seconds} ${seconds === 1 ? "second" : "seconds"}`
        ) as any);
			} else {
				setTimeUntilLaunch(("-" as any));
			}
		};
		const countdown = setInterval(showTime, 1000);
		showTime();

		return () => {
			clearInterval(countdown);
		};
	}, []);

  return (
    <Layout>
      <SEO title="Dot Browser Beta Testing" />
      {timeUntilLaunch !== "-" && <CountdownDisplay timeUntilLaunch={timeUntilLaunch} />}
      {timeUntilLaunch == "-" && <LaunchDisplay />}
    </Layout>
)}

export default SecondPage

const CountdownDisplay = ({ timeUntilLaunch }) => {
  return (
    <>
      <h1 style={{ fontSize: '80px' }}>Coming soon</h1>
      <p>Beta builds unlocks 21th April 2020 at {new Date(1587466800000).toLocaleString().split(", ")[1].split(":")[0]}:00 {/\((.*)\)/.exec(new Date().toString())[1].replace(/[a-z]/g, "").replace(/ /g, "")}.</p>
      <p>{timeUntilLaunch} to go</p>
    </>
)}

const LaunchDisplay = () => {
  return (
    <>
      <h1 style={{ fontSize: '80px' }}>Beta Launched</h1>
      <p>Press the redeem button below to receive a beta version of Dot Browser.</p>
      <Buttons>
        <HeroButton shade={"blue"}><FeatherIcon icon="gift" size={18} style={{ marginRight: '8px' }} /> Redeem build</HeroButton>
      </Buttons>
    </>
)}