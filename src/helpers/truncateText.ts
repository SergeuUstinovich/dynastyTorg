export function truncateText(text: string, maxLength: number) {
  if (text.length > maxLength) {
    return text.slice(0, maxLength) + "...";
  }
  return text;
}

export function displayName(
  lenghtString: number,
  firstName: string,
  lastName: string,
  userName: string
) {
  let name;
  if (firstName && lastName) {
    name = `${firstName} ${lastName}`;
  } else if (firstName) {
    name = firstName;
  } else {
    name = `@${userName}`;
  }
  return truncateText(name, lenghtString);
}
