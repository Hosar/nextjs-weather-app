import {  ZipCodeSearch } from "./ZipCodeSearch";

const definition = {
  title: "Molecules/ZipCodeSearch",
  component: Text,
};

export const ZipCodeSearchDefault = () => 
  <ZipCodeSearch onSearch={(zipCode) => console.log('zipCode', zipCode)} />;
    
    
export default definition;