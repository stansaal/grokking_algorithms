const speedtestSync = (logName, fn) => {
  const startTime = Date.now();
  const result = fn();
  const endTime = Date.now();

  console.log(
    logName,
    " Result: ",
    result,
    " Time: ",
    endTime - startTime,
    "ms"
  );
};

const speedtestAsync = async (logName, fn) => {
  const startTime = Date.now();
  const result = await fn();
  const endTime = Date.now();

  console.log(
    logName,
    " Result: ",
    result,
    " Time: ",
    endTime - startTime,
    "ms"
  );
};

module.exports = {
  speedtestSync,
  speedtestAsync,
};
