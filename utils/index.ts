import { CarProps } from "@/types";


export async function fetchCars() {
    // const url = `https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=${modelName}`
    const url = 'https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=carrera'
    const headers = {
        'X-RapidAPI-Key': 'c4285249e2mshb6b7225a4b47b31p1693f4jsn1a4a81d8a5e8',
        'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
    }

    const response = await fetch(url, {
        headers
    });
    const result = await response.json()
    
    return result;
}


export const calculateCarRent = (city_mpg: number, year: number) => {
    const basePricePerDay = 50; // base rental price per day in dollars
    const mileageFactor = 0.1; // additional rate per mile driven
    const ageFactor = 0.05; // additional rate per year of vehicle age
  
    // calculate additional rate based on mileage and age
    const mileageRate = city_mpg * mileageFactor;
    const ageRate = (new Date().getFullYear() - year) * ageFactor;
  
    // calculate total rental rate per day
    const rentalRatePerDay = basePricePerDay + mileageRate + ageRate;
  
    return rentalRatePerDay.toFixed(0);
  };
  
  export const generateCarImageUrl = (car: CarProps, angle?: string) => {
    const url = new URL("https://cdn.imagin.studio/getImage");
  
    const { make, year, model } = car;
  
    url.searchParams.append("customer", "hrjavascript-mastery");
    url.searchParams.append("make", make);
    url.searchParams.append("modelFamily", model.split(" ")[0]);
    url.searchParams.append("zoomType", "fullscreen");
    url.searchParams.append("modelYear", `${year}`);
    url.searchParams.append("angle", `${angle}`);
  
    return `${url}`;
  };
  
  export const updateSearchParams = (type: string, value: string) => {
    const searchParams = new URLSearchParams(window.location.search);
  
    searchParams.set(type, value);
  
    const newPathname = `${window.location.pathname}?${searchParams.toString()}`;
  
    return newPathname;
  };