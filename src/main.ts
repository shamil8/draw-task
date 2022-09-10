import fs from 'fs';
import { createCanvas, } from 'canvas';

const width = 800;
const height = 600;

const canvas = createCanvas(width, height);
const context = canvas.getContext('2d');

context.fillStyle = 'blue';
context.fillRect(0, 0, width, height);

const buffer = canvas.toBuffer('image/png');

fs.writeFileSync('./dist/image.png', buffer);
