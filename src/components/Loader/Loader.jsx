import ContentLoader from "react-content-loader";

const Loader = () => (
  <ContentLoader
    speed={0}
    width={210}
    height={260}
    viewBox="0 0 210 260"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <rect x="325" y="158" rx="0" ry="0" width="1" height="12" />
    <rect x="10" y="20" rx="20" ry="20" width="190" height="90" />
    <rect x="10" y="130" rx="5" ry="5" width="190" height="15" />
    <rect x="10" y="165" rx="5" ry="5" width="100" height="15" />
    <rect x="10" y="200" rx="5" ry="5" width="142" height="34" />
    <rect x="160" y="200" rx="5" ry="5" width="36" height="34" />
  </ContentLoader>
);

export default Loader;
