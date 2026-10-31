export function replaceDesignLine(message, previous, next) {
  if (previous && message.includes(previous)) return message.replace(previous, next);
  return message.trim() ? message.trimEnd() + '\n' + next : next;
}
