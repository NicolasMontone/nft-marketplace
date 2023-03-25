export type Props = {
  description: string
  image: string
  name: string
  attributes: Attribute[]
}

type Attribute = {
  trait_type: string
  value: string
}
