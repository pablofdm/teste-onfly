export interface Amenities {
  key: string
  label: string
}

export interface Adress {
  street: string
  number: string | number
  district: string
  city: string
  state: string
  country: string
  zipCode: string
  fullAddress: string
}

export interface Hotel {
  id: number
  favorite: boolean
  name: string
  description: string
  stars: number
  thumb: string
  amenities: Array<Amenities>
  hasBreakfast: true
  nonRefundable: boolean | null
  address: Adress
  images: Array<string>
  deals: boolean | null
  roomsQuantity: number
  price: number
  hasAgreement: boolean
}

export interface HotelByCity {
  hotels: Hotel[]
  placeId: number
}

export type placeId = number
export type Hotels = Array<HotelByCity>
