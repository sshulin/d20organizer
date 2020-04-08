const omitKey = (obj, key) => {
  const { [key]: omitted, ...rest } = obj;
  return rest;
}

export default omitKey;