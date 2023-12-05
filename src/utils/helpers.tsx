import { INote } from "interfaces";

function getFormedText(note: string) {
  const arr= note.split(' ').map((item)=> item.match(/#[a-z0-9_]+/g) ? `<span class="hashTag">${item}</span>` : item).join(' ');
  return arr
}

function getHashTags(note: string) {
  const res: string[]=[];
  note.split(' ').forEach((item)=> {if(item.match(/#[a-z0-9_]+/g))res.push(item)});
  return res;
}

function getMatchedNotes(notes: INote[], match: string[]) {
  function noteFilter (note: INote) {
    return match.every((hashtag)=> note.hashTags.includes(hashtag))
  }
  return notes.filter(noteFilter);
}
export {getFormedText, getHashTags, getMatchedNotes};
