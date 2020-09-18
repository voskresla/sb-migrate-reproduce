declare module '*.css?module' {
	interface ClassNames {
		[className: string]: string
	}
	const classNames: ClassNames

	export = classNames
}
