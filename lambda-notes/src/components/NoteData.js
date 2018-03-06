/**
   NoteData.js
   ============
   DATA FOR THE APP
   --------------------------------------------------
   Version 0.1 2018-03-03T14:31:06
   ..................................................
   - create dummy data
   __________________________________________________
   Version 0.2 2018-03-06T10:17:16
   ..................................................
   - use some lorem ipsum packages to flesh out nine
     cards
   __________________________________________________
 */

import randomTitle from 'random-title';
import randomParagraph from 'random-paragraph';

const NUM_NOTES = 9;

const fillNotes = (num, data) => {
  if (num === 0) return data;
  return fillNotes(num - 1, (data.push(
    {
      id:       num,
      title:    randomTitle(),
      contents: randomParagraph()
    })) && data
  );
}

const NoteData = fillNotes(NUM_NOTES, []);
export default NoteData;
