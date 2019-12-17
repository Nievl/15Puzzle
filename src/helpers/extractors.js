
export const dataSetExtractor = ({ dataset } = {}, names) => {
  if (Array.isArray(names)) {
    const result = names.reduce((accum, element) => (dataset[element] ? { ...accum, [element]: dataset[element] } : accum), {});
    return result;
  } if (typeof names === "string") {
    return dataset[names] || "";
  }
  return {};
};
