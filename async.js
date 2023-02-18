async function dheeraj() {
  let delhi = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("27 delhi");
    }, 1000);
  });
  let bangalore = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("21 bangalore");
    }, 2000);
  });
  //   delhi.then(alert);
  //   bangalore.then(alert);
  console.log("fetching delhi wether please wait");
  let delhiw = await delhi;
  console.log("fetching delhi wether please wait", delhiw);
  console.log("fetching banglor wether please wait");
  let banglorw = await bangalore;
  console.log("fetching banglor wether please wait", banglorw);
  return [delhiw, banglorw];
}
const Cherry = async () => {
  console.log("hello i am cherry");
};
const main = async () => {
  console.log("welcome to weather control rool");

  let v = await dheeraj();
  let b = await Cherry();
};
main();
