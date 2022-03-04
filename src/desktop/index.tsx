import PrimaryLayout from "./layouts/primary"
import RoundedBox from "./components/RoundedBox"
import { FaCircle } from "react-icons/fa"

const Desktop = () => {
  return <PrimaryLayout user={undefined}>
    <h1 style={{ color: "#fff", marginBottom: 20 }}>Good afternoon, John</h1>
    <RoundedBox>
      <h2 style={{ marginBottom: 10 }}>Overview</h2>
      <table width="100%">
        <tbody>
          <tr><th style={{ width: 175, textAlign: "left" }}>Engine Status</th><td><FaCircle color="#090" /> Running</td><th style={{ width: 175, textAlign: "left" }}>Stacks Running</th><td>2</td></tr>
          <tr><th style={{ textAlign: "left" }}>Container Running</th><td>8</td><th style={{ textAlign: "left" }}>Size of Images</th><td>82 GB</td></tr>
          <tr><th style={{ textAlign: "left" }}>Active Environments</th><td>1</td></tr>
        </tbody>
      </table>
    </RoundedBox>
    <RoundedBox>
      <h2>Running Containers</h2>
      <ul>
        <li>f9f9f3da5 - golang:alpine</li>
        <li>a9d993c93 - nginx:alpine</li>
      </ul>
    </RoundedBox>
  </PrimaryLayout>
}

export default Desktop