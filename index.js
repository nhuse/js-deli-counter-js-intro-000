function takeANumber(currentLine, newName) {
  currentLine.push(newName);
  return `Welcome, ${newName}. You are number ${currentLine.length} in line.`;
}

function nowServing(currentLine) {
  if(currentLine.length==0) {
    return 'There is nobody waiting to be served!';
  }
  return `Currently serving ${currentLine.shift()}`;
}

function currentLine(currentLine) {
  let currentLineString = 'The line is currently: ';
  for(let x = 0; x < currentLine.length; x++) {
    currentLineString = currentLineString + `${x+1}. ${currentLine[x]}, `;
  }
  return currentLineString;
}
