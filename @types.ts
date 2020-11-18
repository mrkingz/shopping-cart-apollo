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