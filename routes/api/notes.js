const app = require('express').Router();
const path = require('path');
const { readFromFile, writeToFile, readAndAppend } = require('../../helpers/fs');

// Route to get all notes
app.get('/', async (req, res) => {
 try {
  const noteData = await readFromFile(path.join(__dirname, '..', '..', 'db', 'db.json'));
  res.json(JSON.parse(noteData));
 } catch (err) {
  console.error('Error retrieving note:', err);
  res.status(500).send('Server Error');
 }
});

// Route to add note
app.post('/', async (req, res) => {
 const { title, text } = req.body;
 const newNote = { title, text };

 try {
  await readAndAppend(newNote, path.join(__dirname, '..', '..', 'db', 'db.json'));
  res.json({ message: 'Note submitted successfully!' });
 } catch (err) {
  console.error('Error submitting Note:', err);
  res.status(500).send('Server Error');
 }
});

app.delete('/:id', async (req, res) => {

 try {
  const { id } = req.params.id
  notes = await deleteNote(id, notes);
  res.json(notes);
 } catch (err) {
  console.log('Hi you');
  console.error('Error deleting Note:', err);
  res.status(500).send('Server Error');
 }

});

module.exports = app;