import { useEffect, useState } from "react";
import CardComponent from "./card";

const CardHolder = ({ data, filterState, filterType }: any) => {
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    if (filterState) {
      // Filter by state or location
      const filtered = data.filter(
        (item: any) =>
          item.startingPoint === filterState.toLowerCase() ||
          item.location === filterState.toLowerCase()
      );
      setFilteredData(filtered);
    } else if (filterType) {
      // Filter by loadType, wareHouseType, or truckType
      const filtered = data.filter(
        (item: any) =>
          item.loadType === filterType.toLowerCase() ||
          item.wareHouseType === filterType.toLowerCase() ||
          item.truckType === filterType.toLowerCase()
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
