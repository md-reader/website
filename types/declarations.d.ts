export interface Review {
  name: string
  rating: number
  content: string
}

declare module 'reviews.json' {
  const value: Review[]
  export default value
}
