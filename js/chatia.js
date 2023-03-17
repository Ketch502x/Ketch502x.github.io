const openai = require('openai');
const api_key = '<tu clave de API>';

openai.api_key = api_key;

const prompt = 'Hola, ¿cómo estás?';
const engine = 'text-davinci-002';

async function generateText(prompt, engine) {
  const response = await openai.completions.create({
    engine,
    prompt,
    max_tokens: 100,
    n: 1,
    stop: '\n',
  });
  const { choices } = response.data;
  return choices[0].text.trim();
}

generateText(prompt, engine).then((text) => {
  console.log(text);
});