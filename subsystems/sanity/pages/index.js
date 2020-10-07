import { useState } from 'react'
import Head from 'next/head'

import { JobTitle } from '../components'

import {
  Main,
  Button,
  Job,
  JobImage,
  JobContent,
  Section,
  Hero,
  Container,
  H1,
  H2,
  H3,
  CloserSection,
  Link,
  JobTitleContainer,
} from "./styles";

const SanityPage = () => {
  const [ctaClicked, setCtaClicked] = useState(false);

  const ctaHandler = () => setCtaClicked(true);

  return (
    <>
      <Head>
        <meta name="robots" content="noindex, nofollow" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;800&family=IBM+Plex+Serif:wght@400;600&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Main>
        <Hero>
          <Section>
            <Container>
              <H1>
                <span>François</span>{" "}
                <span className="emoji">
                  <span className="glow">⚡️</span>
                </span>{" "}
                <span>Sanity.io</span>
              </H1>

              <p>Hi Even and team,</p>
              <p>
                I didn't have my portfolio ready when I applied (typical, I
                know), so here is an overview of my previous positions and the
                projects I had the opportunity to work on.
              </p>
            </Container>
          </Section>
        </Hero>

        <Section>
          <Container>
            <Job>
              <JobTitleContainer>
                <JobTitle
                  company="InVision"
                  title="Senior Frontend Engineer, Marketing"
                  dateRange="January 2018 - Today"
                />
              </JobTitleContainer>
              <JobImage>
                <img src="/images/sanity/dbco@800.png" />
              </JobImage>
              <JobContent>
                <p>
                  I started working for InVision as a contractor where I helped
                  rebuild{" "}
                  <Link href="https://www.invisionapp.com/inside-design">
                    Inside Design
                  </Link>
                  , our main blog. From that point on I became the de-facto blog
                  expert and I joined the company full-time.
                </p>
                <p>
                  During the last 12 months, I contributed to implement a new
                  design system and build a fresh stack that runs on Next.js
                  and is backed by Sanity. We then built a self-serve system to
                  allow the Marketing team to publish{" "}
                  <Link href="https://www.invisionapp.com/lp/business-impact-design-forrester">
                    Landing Pages
                  </Link>
                  without engineers intervention.
                </p>

                <p>
                  More recently, I re-built some of our main product pages(
                  <Link href="https://www.invisionapp.com/cloud/prototype">
                    Prototype
                  </Link>
                  ,{" "}
                  <Link href="https://www.invisionapp.com/design-system-manager">
                    Design System Manager
                  </Link>
                  ) as well as the
                  <Link href="https://www.invisionapp.com/plans">
                    Plans & Pricing
                  </Link>{" "}
                  page.
                </p>
              </JobContent>
            </Job>

            <Job className="flip">
              <JobTitleContainer>
                <JobTitle
                  company="PremiumBeat.com & Shutterstock"
                  title="Senior Frontend Developer, Motion Business Unit"
                  dateRange="March 2015 - November 2017"
                />
              </JobTitleContainer>
              <JobImage>
                <img src="/images/sanity/pb@800.jpg" />
              </JobImage>
              <JobContent>
                <p>
                  I joined Premiumbeat.com during the same month they got
                  aquired by Shutterstock. The following years were spent
                  scaling the team from 4 to 50 developers, implementing the{" "}
                  <em>Scrum</em> methodology and the <em>Squads & Guilds</em>{" "}
                  structure (aka{" "}
                  <Link href="https://www.atlassian.com/agile/agile-at-scale/spotify">
                    <em>The Spotify Model</em>
                  </Link>
                  ). It was a great experience to try to maintain the vibe of a
                  small studio while integrating with the high-scale services of
                  a tech giant.
                </p>
                <p>
                  I had the opportunity to develop{" "}
                  <Link href="https://www.rocketstock.com">
                    RocketStock.com
                  </Link>{" "}
                  from scratch, an MVP marketplace experiment of selling After
                  Effects packages. It is backed by Wordpress+Woocommerce and
                  still runs strong today. I also maintained{" "}
                  <Link href="https://www.premiumbeat.com">
                    PremiumBeat.com
                  </Link>{" "}
                  and the related blog for content marketing,{" "}
                  <Link href="https://www.premiumbeat.com/blog">The Beat</Link>.
                </p>
                <p>
                  As the integration with Shutterstock evolved, I worked on the{" "}
                  <Link href="https://www.shutterstock.com/music">Music</Link>{" "}
                  and
                  <Link href="https://www.shutterstock.com/video">
                    Video
                  </Link>{" "}
                  marketplaces as part of the Motion Business Unit.
                </p>
              </JobContent>
            </Job>

            <Job>
              <JobTitleContainer>
                <JobTitle
                  company="Web Agencies and Freelance"
                  title="Frontend Developer"
                  dateRange="2005 to 2015"
                />
              </JobTitleContainer>
              <JobImage>
                <img src="/images/sanity/safewalls@800.jpg" />
              </JobImage>
              <JobContent>
                <p>
                  Previously, I worked for various digital agencies in Montreal (
                  <Link href="https://www.sidlee.com">Sid Lee</Link>,{" "}
                  <Link href="https://featuringagency.com/">Featuring</Link>,{" "}
                  <Link href="https://www.cloudraker.com">Cloudraker</Link>),
                  doing mostly Frontend work.
                </p>
                <p>
                  This was the period that allowed me to build the solid
                  foundations of a typical love/hate relationship with Wordpress.
                </p>
              </JobContent>
            </Job>
          </Container>
        </Section>

        <CloserSection>
          <H3>Try out François</H3>
          <Button onClick={ctaHandler}>Get started for free</Button>
          {ctaClicked && <div>;)</div>}
        </CloserSection>
      </Main>
    </>
  );
}

export default SanityPage
