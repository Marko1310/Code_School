import { Filters } from "../types/data.types";

const handleChangeFilter = (id: number, type: keyof Filters, setFilters: React.Dispatch<React.SetStateAction<Filters>>) => {
    setFilters((prevFilters) => {
      const updatedFilters = { ...prevFilters };
      const currentFilter = prevFilters[type] as Filters[keyof Filters];

      if (currentFilter?.includes(id)) {
        updatedFilters[type] = currentFilter.filter(
          (filterId) => filterId !== id,
        );
      } else {
        updatedFilters[type] = [...(currentFilter ?? []), id];
      }

      return updatedFilters;
    });
  };

  export {handleChangeFilter}