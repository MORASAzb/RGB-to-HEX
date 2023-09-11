import './style.css'





function rgbToHex(r, g, b) {

  const hexRed = r.toString(16).padStart(2, '0');
  const hexGreen = g.toString(16).padStart(2, '0');
  const hexBlue = b.toString(16).padStart(2, '0');

  return `#${hexRed}${hexGreen}${hexBlue}`.toUpperCase();

}


const redInput = prompt("Enter the value for Red :");
const greenInput = prompt("Enter the value for Green :");
const blueInput = prompt("Enter the value for Blue :");


const red = parseInt(redInput, 10);
const green = parseInt(greenInput, 10);
const blue = parseInt(blueInput, 10);

const hexColor=rgbToHex(red , green , blue)
if (!isNaN(red) && !isNaN(green) && !isNaN(blue)
  && red >= 0 && red <= 255 && green >= 0
 && green <= 255 && blue >= 0 && blue <= 255) {
    

  console.log(`RGB Color : (${red}, ${green}, ${blue})`)
  console.log(`HEX Color :${hexColor}`)
}else{
  console.log('invalid input')
}


