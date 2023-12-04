function getFormedText(note: string) {
  const arr= note.split(' ').map((item)=> item.match(/#[a-z0-9_]+/g) ? `<span class="hashTag">${item}</span>` : item).join(' ');
  return arr
}

function getHashTags(note: string) {
  const res: string[]=[];
  note.split(' ').forEach((item)=> {if(item.match(/#[a-z0-9_]+/g))res.push(item)});
  return res.join(' ');
}
export {getFormedText, getHashTags};
