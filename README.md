# Resume

Resume is my personal portfolio hosted on <a href="https://www.zackaryjamessantana.com">my website</a>
It also hosts different games and navigates to different websites I have designed and developed.

## Games

The following games are made to be built in this repo:

<ul>
<li>- [<a href="https://github.com/ZackarySantana/TileGame">Tile Game</a>]</li>
<li>- [<a href="https://github.com/ZackarySantana/AnimalCollector">Animal Collector</a>]</li>
<li>- [<a href="https://github.com/ZackarySantana/RPG">RPG</a>]</li>
<li>- [<a href="https://github.com/ZackarySantana/Kamryn2048">Kamryn2048</a>] - NA</li>
</ul>
intended use in the src folder.

## Motivation

I'm really motivated to design and create applications/websites. I love learning new thinks and I pick on stuff fast. I would love for a company to view my repositories and contact me.

## Code style

<b>One time use Components:</b> Has a folder for implementation (index.js, styles.scss, and reducer.js as needed)
<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Uses SASS for styling
<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Usually has a HOC to handle layout
<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Typically uses class components
<br>
<b>Reusable Components:</b> Placed in components folder, imported by one time use components
<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Uses styled components for styling
<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Provides HOC and various functions to improve efficiency
<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Exports multiple constants or functions; HOC export a class component

## Tech/framework used

<b>Built with</b>

<ul>
<li>- [<a href="https://reactjs.org/">React</a>] - Is the framework of this repo</li>
<li>- [<a href="https://www.npmjs.com/package/react-router-dom">React Router DOM</a>] - Used to handle connection between portfolio and games</li>
<li>- [<a href="https://react-redux.js.org/>">Redux & React-Redux</a>] - Used in required repo inside of the games</li>
<li>- [<a href="https://www.npmjs.com/package/prop-types">PropTypes</a>] - Used to document expected props for components</li>
<li>- [<a href="https://www.npmjs.com/package/sass">SASS</a>] - Used for its nesting and better look</li>
<li>- [<a href="https://styled-components.com/">Styled Components & Babel Plugin Styled Components</a>] - Used for lower file sizes and easier to read styles</li>
<li>- [<a href="https://reactcommunity.org/react-transition-group/">React Transition Group</a>] - Used for animations and transitions</li>
</ul>

## Note

This repository is made to compile with each game in the games tag.

## Installation

Use CRA (create-react-app) to build the node_modules. Then install this repo (as the root directory, so the src and public folder have the same parent as node_modules).<br>Add each dependance (see Frameworks)<br>Finally, add the <a href="https://github.com/ZackarySantana/PortfolioGames">repo</a> in to the src/ folder
<br /><u><i>Commands:</i></u>

```
git clone https://github.com/ZackarySantana/Resume.git
npm create-react-app modules
# Transfer node_modules from 'modules' to 'Resume'
# cd to 'Resume'

# Download dependancies
npm i --save react-router-dom
npm i --save redux react-redux
npm i --save proptypes
npm i --save sass
npm i --save styled-components babel-plugin-styled-components
npm i --save react-transition-group

# I broke down the dependancies but here is one command to install all

npm i --save react-router-dom redux react-redux proptypes sass styled-components babel-plugin-styled-components react-transition-group
```
