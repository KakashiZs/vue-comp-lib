export const sayHello: Say = (to: string) => {
  console.log("hello ", to);
};

type Say = (to: string) => void;
