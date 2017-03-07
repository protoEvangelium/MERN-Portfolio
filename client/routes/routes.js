import React from 'react'
import { Route, IndexRoute } from 'react-router'

// NOTE: Main site stuff
import Layout from '../components/Main/Layout.js'
import Home from '../components/Main/Home'
import AllProjects from '../components/Main/Projects/AllProjects'
import APIProjects from '../components/Main/Projects/APIProjects'
import UtilityProjects from '../components/Main/Projects/UtilityProjects'
import VizProjects from '../components/Main/Projects/VizProjects'
import About from '../components/Main/About'
import Contact from '../components/Main/Contact'
import Privacy from '../components/Main/Privacy'
import NotFound from '../components/Main/NotFound'

// NOTE: API Projects
import Wiki from '../components/APIProjects/Wiki'
import Quote from '../components/APIProjects/Quote'
import Weather from '../components/APIProjects/Weather'
import Twitch from '../components/APIProjects/Twitch'
import Leaderboard from '../components/APIProjects/Leaderboard'
import RecipeBox from '../components/APIProjects/RecipeBox'
import YoutubeViewer from '../components/APIProjects/YoutubeViewer'

// NOTE: Utility and Gaming Projects
import Tic from '../components/UtilityProjects/Tic'
import Calc from '../components/UtilityProjects/Calc'
import Pomodoro from '../components/UtilityProjects/Pomodoro'
import Simon from '../components/UtilityProjects/Simon'
import Markdown from '../components/UtilityProjects/Markdown'
import GameOfLife from '../components/UtilityProjects/GameOfLife'

// NOTE: Data Visualization Projects
import GDP from '../components/DataVizProjects/GDP'
import ScatterPlot from '../components/DataVizProjects/ScatterPlot'
import Heatmap from '../components/DataVizProjects/Heatmap'
import ForceGraph from '../components/DataVizProjects/Force'

export default (
	<Route path="/" component={Layout}>
		<IndexRoute component={Home} />

		<Route path="about" component={About} />
		<Route path="projects" component={AllProjects} />
		<Route path="apiProjects" component={APIProjects} />
		<Route path="utilityProjects" component={UtilityProjects} />
		<Route path="vizProjects" component={VizProjects} />
		<Route path="contact" component={Contact} />

		<Route path="weather" component={Weather} />
		<Route path="wikiViewer" component={Wiki} />
		<Route path="quotepump" component={Quote} />
		<Route path="twitch" component={Twitch} />
		<Route path="leaderboard" component={Leaderboard} />
		<Route path="recipebox" component={RecipeBox} />
		<Route path="youtube-viewer" component={YoutubeViewer} />

		<Route path="game-of-life" component={GameOfLife} />
		<Route path="tictactoe" component={Tic} />
		<Route path="calc" component={Calc} />
		<Route path="pomodoro" component={Pomodoro} />
		<Route path="simon" component={Simon} />
		<Route path="markdown" component={Markdown} />

		<Route path="GDP" component={GDP} />
		<Route path="scatterplot_doping_olympian_cyclists" component={ScatterPlot} />
		<Route path="heatmap" component={Heatmap} />
		<Route path="world-force-graph" component={ForceGraph} />

		<Route path="privacy-policy" component={Privacy} />
		<Route path="*" component={NotFound} />
	</Route>
)
