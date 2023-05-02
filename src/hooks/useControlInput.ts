import { ChangeEvent, useState } from 'react'


export const useControlInput = (initialValue: any) => {
	const [value, setValue] = useState(initialValue)

	const reset = () => {
		setValue(initialValue)
	}

	const bind = {
		value,
		onChange: ((e: ChangeEvent<HTMLInputElement>) => setValue(e.target.value))
	}

	return { value, reset, bind }
}