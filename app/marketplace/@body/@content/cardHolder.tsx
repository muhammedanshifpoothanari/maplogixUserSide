import { useEffect, useState } from "react";
import CardComponent from "./card";

const CardHolder = ({ data, filterState, filterType ,set}: any) => {
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    if (filterState) {
      // Filter by state or location
      const filtered = data.filter(
        (item: any) =>
          item.startingPoint === filterState ||
          item.location === filterState
      );
      setFilteredData(filtered);
    } else if (filterType) {
      // Filter by loadType, wareHouseType, or truckType
      const filtered = data.filter(
        (item: any) =>
          item.loadType === filterType ||
          item.wareHouseType === filterType ||
          item.truckType === filterType
      );
      setFilteredData(filtered);
    } else {
      // No filters applied, use the original data
      setFilteredData(data);
    }
  }, [data, filterState, filterType]);

  return (
    <>
      {filteredData?.map((obj: any, index: any) => {
        let title =
          obj.loadName || obj.truckName || obj.wareHouseName || "Default Title";
          
        let description =
          obj.loadDetails ||
          obj.wareHouseDetails ||
          obj.truckDetails ||
          "Default Description";

        let content =
          obj.loadType ||
          obj.wareHouseType ||
          obj.truckType ||
          "Default Content";
        let footer =
          obj.startingPoint || obj.location || "Default Content";

        return (
          <CardComponent
            set={set}
            key={index}
            title={title}
            description={description}
            content={content}
            footer={footer}
          />
        );
      })}
    </>
  );
};

export default CardHolder;
