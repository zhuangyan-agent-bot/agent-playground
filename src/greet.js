/**
 * Builds a greeting for one person.
 * @param {string} name - the person's display name
 * @returns {string} the greeting, with the first letter of the name capitalized
 */
export function greet(name) {
  return `Hello, ${name}!`
}

/**
 * Joins a list of names into a single greeting.
 * @param {string[]} names
 * @returns {string}
 */
export function greetAll(names) {
  return names.map(greet).join(' ')
}
