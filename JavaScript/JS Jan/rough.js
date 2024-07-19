const debounce = (funnc, delay) => {
  let timeoutid;

  return function (...args) {
    clearInterval(timeoutid);
    setTimeout(() => {
      funnc.apply(this, args);
    }, delay);
  };
};

const someFun = () => {
  console.log("first");
};
const valfunc = debounce(someFun, 1000);
valfunc();
