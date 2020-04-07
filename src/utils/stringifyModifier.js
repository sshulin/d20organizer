const stringifyModifier = (value) => {
  return (value > 0 ? '+' : '') + value
}

export default stringifyModifier;