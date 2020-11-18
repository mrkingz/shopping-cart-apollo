export type ProductType = {
    id: number
    title: string
    image_url: string
    price: number
    product_options?: ProductOptionType[]
}

export type ProductOptionType = {
    title?: string
    prefix?: string
    suffix?: string
    options?: OptionsType[]
}

export type OptionsType = {
    id: number
    value: string
}

export type CartItemType = {
    quantity: number
    product: ProductType
}

export type ColorType = {
	'neutral-100': string,
	'neutral-200': string,
	'neutral-300': string,

	'grey-100': string,
	'grey-200': string,
	'grey-300': string,
	'grey-400': string,
	'grey-500': string,
	'grey-600': string,
	'grey-700': string,
	'grey-800': string,
	'grey-900': string
}