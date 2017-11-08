import { FeatureList, Footer, Hero, ProjectHeader } from 'components/organisms'
import { PageTemplate } from 'components/templates'
import { Navbar } from 'containers'
import React from 'react'

import force from '../../../../public/projectimages/force.png'
import gameOfLife from '../../../../public/projectimages/gameOfLife.png'
import tradeshow from '../../../../public/projectimages/tradeshow.png'
import weather from '../../../../public/projectimages/weather.png'

const HomePage = () => {
  return (
    <PageTemplate header={<Navbar />} hero={<Hero />} footer={<Footer />}>
      <ProjectHeader
        id="tradeshowApp"
        image={tradeshow}
        header="A fullstack MERN project built to help trade show teams consolidate their efforts and collaborate in real time..."
        link="View my Fullstack Tradeshow App"
        href="https://aoatradeshow.herokuapp.com"
        background
      />
      <ProjectHeader
        id="utilityApps"
        image={gameOfLife}
        header="A cool collection consisting of simple game projects and utilities like a Markdown previewer..."
        link="View my Gaming & Utility Projects"
        to="utilityApps"
        flip
      />
      <ProjectHeader
        id="apiApps"
        image={weather}
        header="An interesting group of API projects that span from a  Pinterest recipe box to syndicating the coolest channels on Twitch..."
        link="View my API Projects"
        to="apiApps"
        background
      />
      <ProjectHeader
        id="d3Apps"
        image={force}
        header="A dynamic collection of D3 projects implementing cutting edge data visualization technology..."
        link="View my D3 Projects"
        to="d3Apps"
        flip
      />
      <FeatureList />
    </PageTemplate>
  )
}

export default HomePage