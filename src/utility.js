export const capitalize = (input) => {
	return input.split('_')
			.map(name => name.toUpperCase())
			.join(' ')
}
