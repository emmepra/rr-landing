import { csvParse, autoType } from 'd3-dsv';

export async function getData(url) {
  const response = await fetch(url);
  const string = await response.text();
  let data = await csvParse(string, autoType);
  return data;
}