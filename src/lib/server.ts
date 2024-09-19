export const executeOnServer = () => {
  "use server";

  console.log("This should run on server");

  return { message: "From Server hello" };
};
