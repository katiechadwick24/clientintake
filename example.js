import { askClaude } from "./claude.js";

async function main() {
  try {
    const response = await askClaude(
      "What is the capital of France? Keep it brief."
    );
    console.log("Claude says:", response);
  } catch (error) {
    console.error("Error:", error.message);
  }
}

main();
