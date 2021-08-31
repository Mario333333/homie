import PortfolioItem from "../../components/PortfolioItem";
import useAxios from "../../hooks/useAxios";
import { PortfolioData } from "../../utils/ts/componentTypes";

const Portfolio = () => {
  const { data, error } = useAxios<Array<PortfolioData>>("briefcase");
  console.log(data);

  return (
    <div className="portfolio-container">
      {error === false &&
        data !== null &&
        data.map((item: PortfolioData, index: number) => {
          return <PortfolioItem item={item} key={`portfolio-${index}`} />;
        })}
    </div>
  );
};

export default Portfolio;
