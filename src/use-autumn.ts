import { AutumnAPI } from "./client/index";

async function main() {
  const autumn = new AutumnAPI();
  const response = await autumn.entitled({
    customer_id: "",
    feature_id: "",
  });
  console.log(response);
}

main();
