const compose = (...funcs) => (comp) => {
  return funcs.reduceRight((prev, f) =>{
    return f(prev);
  }, comp);
}

export default compose;