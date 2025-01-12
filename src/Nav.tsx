import './Nav.css';
import BrandIcon from './data/img/ultreon-circle.png'

function NavMenu() {
  return <div className="NavMenuWrap">
    <nav role="navigation" className="NavMenu w-nav">
      <a href="./#" className="NavLink">
        Home
      </a>
      <a href="./#mods" className="NavLink" rel="noreferrer">
        Mods
      </a>
      <a href="./#games" className="NavLink" rel="noreferrer">
        Games
      </a>
      <a href="./#misc" className="NavLink" rel="noreferrer">
        Misc.
      </a>
    </nav>
    <div className="menu-button NavButton">
      <div className="menu-icon w-icon-nav-menu">

      </div>
    </div>
  </div>;
}

function Brand() {
  return <a href="/" className="Brand">
    <div className="BrandBlock">
      <img src={BrandIcon} alt="Brand Icon" loading="eager" height="48" width="48" style={{ marginRight: '20px', borderRadius: '25%' }} className="BrandIcon" />
      <div className="BrandText">
        Ultreon
      </div>
    </div>
  </a>;
}

export function NavBar() {
  return (
    <div className="NavMain">
      <div data-collapse="small" data-animation="default" data-duration="400" data-doc-height="1" role="banner" className="Nav">
        <div className="NavInner">
          <Brand />
          <NavMenu />
        </div>
      </div>
    </div>
  );
}

export function Footer() {
  return (
    <div className="Footer">
      <div className="FooterText">
        © 2022-2025, Ultreon. All rights reserved.<br/>
        Links: <a href="https://github.com/Ultreon/ultreon.github.io" className='FooterLink'>Source Code</a> |&nbsp;
        <a href="https://discord.gg/WePT9v2CmQ" className='FooterLink'>Discord</a> |&nbsp;
        <a href="https://github.com/Ultreon" className='FooterLink'>GitHub</a> |&nbsp;
        <a href="https://gitlab.com/ultreon" className='FooterLink'>GitLab</a> |&nbsp;
        <a href="https://modrinth.com/organization/ultreon" className='FooterLink'>Modrinth</a> |&nbsp;
        <a href="https://www.curseforge.com/members/xypercode" className='FooterLink'>CurseForge</a> |&nbsp;
        <a href="https://youtube.com/@ultreon" className='FooterLink'>YouTube</a>
        <br/>
        <p>ANY MINECRAFT-RELATED CONTENT ON THIS WEBSITE IS NOT AN OFFICIAL MINECRAFT PRODUCT.<br/>NOT APPROVED BY OR ASSOCIATED WITH MOJANG OR MICROSOFT.<br/></p>
      </div>
    </div>
  );
}
