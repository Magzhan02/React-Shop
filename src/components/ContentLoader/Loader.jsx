import React from "react"
import ContentLoader from "react-content-loader"

import styles from './Loader.module.scss'

const Loader = () => (
  <div className={styles.card}>
  <ContentLoader 
    speed={2}
    width={150}
    height={265}
    viewBox="0 0 150 265"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <rect x="0" y="0" rx="10" ry="10" width="150" height="140" /> 
    <rect x="0" y="154" rx="5" ry="5" width="150" height="15" /> 
    <rect x="4" y="181" rx="3" ry="3" width="100" height="15" /> 
    <rect x="7" y="233" rx="5" ry="5" width="80" height="25" /> 
    <rect x="112" y="229" rx="5" ry="5" width="32" height="32" />
  </ContentLoader>
  </div>
)

export default Loader