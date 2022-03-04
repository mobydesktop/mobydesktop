import styled from "styled-components"
import MobyLogo from "../../assets/images/moby.svg"
import { FaBox, FaBoxes, FaCogs, FaGlobe, FaHome, FaImage, FaLayerGroup, FaRegImages, FaUser, FaUserCircle } from "react-icons/fa"

const PrimaryLayout = ({ user, children }: { user: string | undefined, children: JSX.Element | JSX.Element[] | undefined }) => {
  return <PrimaryLayoutStyle>
    <div className="sidebar">
      <div className="top">
        <div className="title"><img src={MobyLogo} /><span>moby</span>desktop</div>
        <div className="links">
          <a href="#preview"><span><FaHome /></span>Overview</a>
          <a className="active" href="#preview"><span><FaBox /></span>Containers</a>
          <a href="#preview"><span><FaBoxes /></span>Images</a>
          <a href="#preview"><span><FaLayerGroup /></span>Stacks</a>
          <a href="#preview"><span><FaGlobe /></span>Environments</a>
        </div>
      </div>
      <div className="bottom">
        <div className="wrapper">
          <div>
            <a href="#preview"><span><FaCogs /></span>Settings</a>
          </div>
          <div className="profile">
            <span className="icon"><FaUserCircle /></span>
            <span>John Smith</span>
          </div>
        </div>
      </div>
    </div>
    <div className="content">
      {children}
    </div>
  </PrimaryLayoutStyle>
}

const defaultPadding = '30px'

const PrimaryLayoutStyle = styled.div`
  display: flex;
  align-items: flex-start;
  background: #485563;

  .content {
    flex: 1;
    margin: 50px;
  }

  .sidebar {
    width: 300px;
    height: 100vh;
    border-right: #28394b solid 1px;
    box-shadow: rgba(0,0,0,.2) 5px 0px 10px;

    background: #485563;  /* fallback for old browsers */
    background: -webkit-linear-gradient(100deg, #29323c, #485563);  /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(100deg, #29323c, #485563); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

    display: flex;
    flex-direction: column;
    justify-content: space-between;
     
    a {
      font-weight: 300;
    }

    .bottom {
      display: block;
      flex-direction: column;

      .wrapper {
        display: flex;
        flex-direction: column;

        a {
          padding: ${defaultPadding} ${defaultPadding} 0px ${defaultPadding};
          font-size: 18px;
          color: #fff;
          text-decoration: none;
          
          display: flex;
          align-items: flex-end;
          vertical-align: bottom;
          
          span {
            width: 24px;
            margin-bottom: -2px;
          }
        }
      
      .profile {
        padding: ${defaultPadding};
        font-size: 18px;
        display: flex;
        align-items: center;
        color: #fff;

        span.icon {
          width: 24px;
          margin-bottom: -2px;
        }
      }
    }
  }

    .top {
      .title {
        padding: ${defaultPadding} 0px 0px ${defaultPadding};
        font-size: 24px;
        color: #eee;
        font-weight: 200;
        margin-bottom: 20px;
        display:flex;
        align-items: center;

        img {
          height: 30px;
          width: 30px;
          margin-right: 10px;
        }

        span {
          font-weight: 600;
        }
      }
      
      .links {
        display: flex;
        flex-direction: column;
        
        a {
          padding: 15px 0px 15px ${defaultPadding};
          font-size: 18px;
          color: #fff;
          text-decoration: none;
          
          display: flex;
          align-items: flex-end;
          vertical-align: bottom;

          &.active {
            position: relative;
            &:before {
              position: absolute;
              display: block;
              content: "";
              background: linear-gradient(130deg, rgba(255,255,255,.1), rgba(255,255,255,.25));
              top: 0px;
              bottom: 0px;
              left: 0px;
              right: 0px;
            }
          }
          
          span {
            width: 24px;
            margin-bottom: -2px;
          }
        }
      }
    }
  }

  
`

export default PrimaryLayout