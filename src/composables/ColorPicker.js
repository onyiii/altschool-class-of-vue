import { ref } from "vue";

export default function ColorPicker() {
  const colors = ["green", "red", "blue", "purple"];
  let message = ref("pick a color...");

  const matchColor = (value) => {
    const randomColor = Math.floor(Math.random() * colors.length);
    if (value === colors[randomColor]) {
      message.value = `You win...[response: ${colors[randomColor]}]`;
      return;
    }
    message.value = `You lose...[response: ${colors[randomColor]}]`;
  };
  return { message, colors, matchColor };
}
