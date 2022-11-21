import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

export default async function (req, res) {
  console.log(openai);
  const response = await openai.createImage({
    prompt: "a white siamese cat",
    n: 1,
    size: "1024x1024",
  });
  const image_url = response.data.data[0].url;
  console.log(image_url);
  res.status(200).json({ result: image_url });
}
