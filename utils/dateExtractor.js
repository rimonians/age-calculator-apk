const dateExtractor = (data) => {
  // ms => milliseconds
  const ms = data;
  // s => seconds
  const s = Math.floor(ms / 1000);
  // m => minutes
  const m = Math.floor(ms / 60000);
  // h => hours
  const h = Math.floor(ms / 3600000);
  // d => days
  const d = Math.floor(ms / 86400000);

  // w => weeks
  let w = Math.floor(ms / 604800000);
  // wEd => weeks extra days
  let wEd = Math.floor((ms % 604800000) / 86400000);

  // mn => months
  let mn = Math.floor(ms / 2629746000);
  // mnEw => months extra weeks
  let mnEw = Math.floor((ms % 2629746000) / 604800000);
  // mnEd => months extra days
  let mnEd = Math.floor(((ms % 2629746000) % 604800000) / 86400000);

  // y => years
  let y = Math.floor(ms / 31556952000);
  // yEmn => years extra months
  let yEmn = Math.floor((ms % 31556952000) / 2629746000);
  // yEw => years extra weeks
  let yEw = Math.floor(((ms % 31556952000) % 2629746000) / 604800000);
  // yEd => years extra days
  let yEd = Math.floor(
    (((ms % 31556952000) % 2629746000) % 604800000) / 86400000
  );

  return {
    ms,
    s,
    m,
    h,
    d,
    w,
    wEd,
    mn,
    mnEw,
    mnEd,
    y,
    yEmn,
    yEw,
    yEd,
  };
};

export default dateExtractor;
