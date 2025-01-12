import React from "react";
import { Project } from "./ProjectInfo";
import './Head.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import { ProjectList } from "./ProjectList";

type PageType = Project | 'games' | 'mods' | 'misc' | null;

function HomePageButton(project: PageType) {
  if (project instanceof Object && project.homepage !== undefined) {
    return (
      <a href={project.homepage} className="StartButton">
        Homepage
      </a>
    )
  } else {
    return (
      <></>
    )
  }
}

function DeprecatedBadge(project: PageType) {
  if (project instanceof Object && project.deprecated) {
    return (
      <span className="Badge Deprecated">
        Deprecated
      </span>
    )
  } else {
    return (
      <></>
    )
  }
}

function ComingSoonBadge(project: PageType) {
  if (project instanceof Object && project.comingSoon) {
    return (
      <span className="Badge ComingSoon">
        Coming Soon
      </span>
    )
  } else {
    return (
      <></>
    )
  }
}

function NewBadge(project: PageType) {
  if (project instanceof Object && project.new) {
    return (
      <span className="Badge New">
        New Project
      </span>
    )
  } else {
    return (
      <></>
    )
  }
}

function SussyBadge(project: PageType) {
  let bytes = [0x45, 0x61, 0x73, 0x74, 0x65, 0x72, 0x20, 0x45, 0x67, 0x67];

  if (project instanceof Object && project.sussy) {
    return (
      <span className="Badge">
        {bytes.map((b) => String.fromCharCode(b))}
      </span>
    )
  } else {
    return (
      <></>
    )
  }
}

function AlphaBadge(project: PageType) {
  if (project instanceof Object && project.stage === "alpha") {
    return (
      <span className="Badge Alpha">
        Alpha
      </span>
    )
  } else {
    return (
      <></>
    )
  }
}

function BetaBadge(project: PageType) {
  if (project instanceof Object && project.stage === "beta") {
    return (
      <span className="Badge Beta">
        Beta
      </span>
    )
  } else {
    return (
      <></>
    )
  }
}

function SourceCodeButton(project: PageType) {
  if (project instanceof Object && project.sourceCode !== undefined) {
    return (
      <a href={project.sourceCode} className="StartButton">
        Source Code
      </a>
    )
  } else {
    return (
      <></>
    )
  }
}

function DownloadsButton(project: PageType) {
  if (project instanceof Object && project.downloads !== undefined) {
    return (
      <a href={project.downloads} className="StartButton">
        Downloads
      </a>
    )
  } else {
    return (
      <></>
    )
  }
}

function CurseForgeButton(project: PageType) {
  if (project instanceof Object && project.curseforge !== undefined) {
    return (
      <a href={project.curseforge} className="StartButton">
        CurseForge
      </a>
    )
  } else {
    return (
      <></>
    )
  }
}

function ModrinthButton(project: PageType) {
  if (project instanceof Object && project.modrinth !== undefined) {
    return (
      <a href={project.modrinth} className="StartButton">
        Modrinth
      </a>
    )
  } else {
    return (
      <></>
    )
  }
}

function PlanetMcButton(project: PageType) {
  if (project instanceof Object && project.planetMc !== undefined) {
    return (
      <a href={project.planetMc} className="StartButton">
        Planet Minecraft
      </a>
    )
  } else {
    return (
      <></>
    )
  }
}

function ForgeDLButton(project: PageType) {
  if (project instanceof Object && project.forgeDL !== undefined) {
    return (
      <a href={project.forgeDL} className="StartDLButton">
        Forge Download {
          project.forgeMCV !== undefined
           ? (<span className="Badge Version">{project.forgeMCV}</span>)
           : (<></>)
        }
      </a>
    )
  } else {
    return (
      <></>
    )
  }
}

function FabricDLButton(project: PageType) {
  if (project instanceof Object && project.fabricDL !== undefined) {
    return (
      <a href={project.fabricDL} className="StartDLButton">
        Fabric Download {
          project.fabricMCV !== undefined
           ? (<span className="Badge Version">{project.fabricMCV}</span>)
           : (<></>)
        }
      </a>
    )
  } else {
    return (
      <></>
    )
  }
}

function NeoForgeDLButton(project: PageType) {
  if (project instanceof Object && project.neoForgeDL !== undefined) {
    return (
      <a href={project.neoForgeDL} className="StartDLButton">
        NeoForge Download {
          project.neoForgeMCV !== undefined
           ? (<span className="Badge Version">{project.neoForgeMCV}</span>)
           : (<></>)
        }
      </a>
    )
  } else {
    return (
      <></>
    )
  }
}

function Description(project: PageType) {
  if (project instanceof Object && project.descriptionText !== undefined) {
    class Comp extends React.Component {
      componentDidMount() {
        if (project instanceof Object && project.descriptionText !== undefined) {
          document.getElementById("ProjectDescription").innerHTML = project.descriptionText;
        }
      }
      render(): React.ReactNode {
        return <div id="ProjectDescription"></div>
      }
    }

    const b = (
      <Comp />
    )
    return b;
  } else {
    return (
      <></>
    )
  }
}

export function Head(project: PageType) {
  let style: React.CSSProperties = {} as React.CSSProperties
  style = { background: "linear-gradient(0deg, #FF4F00, #FF6F00" } as React.CSSProperties;
  let projectName = "Ultreon Studios";
  let projectDescription = "Mods, games and other software";
  let projectIcon = "./data/project/ultreon.png";
  console.log(project);
  let isProject = false
  let projectId = null
  if (project instanceof Object) {
    style = {} as React.CSSProperties;
    projectIcon = './data/project/icon-' + project.id + '.png'
    if (project.background === 'image') {
      style.background = 'url("./data/project/' + project.id + '.png")';
      style.backgroundSize = "cover"
    } else {
      style.background = project.background;
    }
    projectId = project.id
    projectName = project.name;
    projectDescription = project.summary;
    isProject = true
  }
  if (project === 'games') {
    style.background = '#303242'
    projectName = "Game List"
    projectDescription = "List of all games made by Ultreon."
  }
  if (project === 'mods') {
    style.background = '#303242'
    projectName = "Mod List"
    projectDescription = "List of all mods made by Ultreon."
  }
  if (project === 'misc') {
    style.background = '#303242'
    projectName = "Miscelaneous List"
    projectDescription = "List of other projects made by Ultreon that don't fit into other categories."
  }
  if (project === undefined) {
    style.background = 'crimson'
    projectName = "Error"
    projectDescription = "Project not found"
  }

  function RootButtons(): React.ReactNode {
    return (
      <>
        <a href="https://discord.gg/WePT9v2CmQ" target="_blank" className="StartButton" rel="noreferrer">
          Discord Server &nbsp;<i className="bi bi-box-arrow-up-right"></i>
        </a>
        <a href="#games" target="_blank" className="StartButton" rel="noreferrer">
          Game List
        </a>
        <a href="#mods" target="_blank" className="StartButton" rel="noreferrer">
          Mod List
        </a>
        <a href="/app-center" target="_blank" className="StartButton" rel="noreferrer">
          Download AppCenter
        </a>
      </>
    )
  }

  return (
    <>
      <div className='Head' id={window.location.hash.substring(1)} style={style}>
        <div id="Start" className="Section StartPage" style={style}>
          {!isProject ? (
            <ul className="circles">
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
      </ul>) : (<></>)}
          <img src="./data/img/arrow.svg" alt="" className="Arrow" />
          <div className="HeroContent">
            <span className="ProjectIcon" style={{background: "url('" + projectIcon + "')"}}></span>
            <h1 className="ProjectTitle">
              {projectName}
            </h1>
            <h3 className="StartSubHead">
              {projectDescription}
              <div className="Badges">
                {DeprecatedBadge(project)}
                {ComingSoonBadge(project)}
                {AlphaBadge(project)}
                {BetaBadge(project)}
                {NewBadge(project)}
                {SussyBadge(project)}
              </div>
            </h3>
            <div className="ButtonGroup">
              {project === null ? RootButtons() : <></>}
              {HomePageButton(project)}
              {SourceCodeButton(project)}
              {DownloadsButton(project)}
              {CurseForgeButton(project)}
              {ModrinthButton(project)}
              {PlanetMcButton(project)}
            </div>
            <br/>
            <br/>
            <div className="ButtonGroup">
              {ForgeDLButton(project)}
              {NeoForgeDLButton(project)}
              {FabricDLButton(project)}
            </div>
          </div>
        </div>
      </div>
      {Description(project)}
      {project === 'games' ? ProjectList(project) : <></>}
      {project === 'mods' ? ProjectList(project) : <></>}
      {project === 'misc' ? ProjectList(project) : <></>}
      {projectId === "quantum" ? (
        <div className="game-card">
            <div className="card-header">
                <h2>Quantum Voxel: Recomputed</h2>
            </div>
            <div className="card-body">
                <p>Quantum Voxel is being rewritten, and there's currently an in-development version on the Web! The
                    game is still in development, and your feedback will appreciated!</p>
                <p><b>Current build:</b> In-Development</p>
            </div>
            <div className="card-footer">
                <a href="https://playqv.ultreon.dev" className="test-button">Test it out</a>
            </div>
        </div>
      ) : (<></>)}
    </>
  );
}
