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
        <rect x="20" y="430" rx="3" ry="3" width="257" height="20" />
        <rect x="20" y="461" rx="3" ry="3" width="120" height="21" />
        <rect x="20" y="12" rx="14" ry="14" width="269" height="400" />
        <rect x="20" y="492" rx="3" ry="3" width="122" height="21" />
        <rect x="20" y="539" rx="3" ry="3" width="81" height="21" />
        <rect x="202" y="537" rx="3" ry="3" width="29" height="21" />
        <rect x="255" y="540" rx="3" ry="3" width="29" height="21" />
    </ContentLoader>
)

export default SkeletonLoader