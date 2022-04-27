import React from 'react'
import ContentLoader from 'react-content-loader'

const SkeletonLoader = () => (
    <ContentLoader
        speed={2}
        width={320}
        height={580}
        viewBox="0 0 320 580"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
    >
        <rect x="20" y="420" rx="3" ry="3" width="250" height="20" />
        <rect x="20" y="450" rx="3" ry="3" width="120" height="20" />
        <rect x="20" y="0" rx="14" ry="14" width="260" height="400" />
        <rect x="20" y="480" rx="3" ry="3" width="120" height="20" />
        <rect x="20" y="540" rx="3" ry="3" width="80" height="20" />
        <rect x="202" y="540" rx="50" ry="50" width="20" height="20" />
        <rect x="255" y="540" rx="50" ry="50" width="20" height="20" />
    </ContentLoader>
)

export default SkeletonLoader