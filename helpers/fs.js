const fs = require('fs');
const util = require('util');

// Promise version of fs.readFile
const readFromFile = util.promisify(fs.readFile);
/**
 *  Function to write data to the JSON file given a destination and some content
 *  @param {string} destination The file you want to write to.
 *  @param {object} content The content you want to write to the file.
 *  @returns {void} Nothing
 */
const writeToFile = (destination, content) =>
 fs.writeFile(destination, JSON.stringify(content, null, 4), (err) =>
  err ? console.error(err) : console.info(`\nData written to ${destination}`)
 );
/**
 *  Function to read data from a given a file and append some content
 *  @param {object} content The content you want to append to the file.
 *  @param {string} file The path to the file you want to save to.
 *  @returns {void} Nothing
 */
const readAndAppend = (content, file) => {
 fs.readFile(file, 'utf8', (err, data) => {
  if (err) {
   console.error(err);
  } else {
   const parsedData = JSON.parse(data);
   parsedData.push(content);
   writeToFile(file, parsedData);
  }
 });
};

module.exports = { readFromFile, writeToFile, readAndAppend };

// const fs = require('fs');
// const util = require('util');

// // const readFromFile = util.promisify(fs.readFile);
// // const writeToFile = util.promisify(fs.writeFile);

// /**
//  * Function to write data to the JSON file given a destination and some content
//  * @param {string} destination The file you want to write to.
//  * @param {object} content The content you want to write to the file.
//  * @returns {void} Nothing
//  */
// const writeToFile = async (destination, content) => {
//  try {
//   await writeToFile(destination, JSON.stringify(content, null, 4));
//   console.info(`Data written to ${destination}`);
//  } catch (err) {
//   console.error(err);
//  }
// };

// /**
//  * Function to read data from a given file asynchronously
//  * @param {string} file The path to the file you want to read from.
//  * @returns {object} The parsed JSON data.
//  */
// const readFromFile = async (file) => {
//  try {
//   const data = await readFromFile(file, 'utf8');

//   if (!data) {
//    // If the file is empty, return an empty array
//    return [];
//   }
//   return JSON.parse(data);
//  } catch (err) {
//   console.error(err);
//   return [];
//  }
// };

// /**
//  * Function to read data from a file, append some content, and write back to the file
//  * @param {object} content The content you want to append to the file.
//  * @param {string} file The path to the file you want to append to.
//  * @returns {void} Nothing
//  */
// const readAndAppend = async (content, file) => {
//  try {
//   const existingData = await readFromFile(file);
//   existingData.push(content);
//   await writeToFile(file, existingData);
//  } catch (err) {
//   console.error(err);
//  }
// };

// module.exports = { readFromFile, writeToFile, readAndAppend };
