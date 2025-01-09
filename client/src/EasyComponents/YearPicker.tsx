import { useState } from "react";
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
import { useDispatch } from "react-redux";

export const YearPicker = ({label}) => {
  const [selectedYear, setSelectedYear] = useState<string | null>(null);


  const dispatch = useDispatch()

  // Define the year range (from 2024 to 1950)
  const currentYear = 2024;
  const startYear = 1950;
  const endYear = currentYear;

  // Generate years in reverse order from currentYear to startYear
  const years = Array.from({ length: endYear - startYear + 1 }, (_, i) => endYear - i);

  const handleChange = (value: string) => {
    setSelectedYear(value);

  };

  return (
    <div className="w-full">
      <label className="block text-xs font-medium leading-6 text-muted-foreground" htmlFor="year">{label}</label>
      <div className="w-44">
      <Select onValueChange={handleChange}>
        <SelectTrigger id="year">
          <SelectValue placeholder="-" />
        </SelectTrigger>
        <SelectContent>
          {years.map((year) => (
            <SelectItem key={year} value={String(year)}>
              {year}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

      </div>

      
    </div>
  );
};


