import fs from 'fs';
import { createCanvas, } from 'canvas';

const width = 800;
const height = 600;

const canvas = createCanvas(width, height);
const context = canvas.getContext('2d');

context.fillStyle = '#b7b7b7';
context.fillRect(0, 0, width, height);

context.fillStyle = 'yellow';

context.fillRect(0, 0, 150, 100);

context.fillStyle = 'blue';
context.fillRect(150 + 20, 0, 150, 100);

const buffer = canvas.toBuffer('image/png');

fs.writeFileSync('./dist/image.png', buffer);
