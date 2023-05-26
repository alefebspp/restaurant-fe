export interface CreateRestaurantRequest {
  name: string;
  cnpj: string;
  segment: string;
}

export interface Restaurant {
  id: string;
  name: string;
  cnpj: string;
  segment: string;
  created_at: Date;
  updated_at: Date;
}

export interface UpdateRestaurantRequest {
  restaurantData: {
    name?: string;
    cnpj?: string;
    segment?: string;
  };
  restaurantId: string | undefined;
}
