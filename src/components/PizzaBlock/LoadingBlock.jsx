import React from "react"
import ContentLoader from "react-content-loader"

const LoadingBlock = () => (
  <ContentLoader 
    speed={2}
    width={280}
    height={460}
    viewBox="0 0 280 460"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"

  >
    <circle cx="135" cy="130" r="130" /> 
    <rect x="0" y="275" rx="3" ry="3" width="280" height="25" /> 
    <rect x="0" y="312" rx="3" ry="3" width="280" height="86" /> 
    <rect x="0" y="420" rx="3" ry="3" width="80" height="28" /> 
    <rect x="130" y="407" rx="25" ry="25" width="150" height="44" />
  </ContentLoader>
)

export default LoadingBlock