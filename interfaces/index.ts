export interface IBrandsProps {
  brands: {
    id: number;
    name: string;
    nameEn: string;
    imageUrl: string;
  }[],
  fallback: object;
  jsonTest?: any;
}

export interface IBrandListProps {
  brandList: {
    id: number;
    name: string;
    imageUrl: string;
  }[]
}

export interface IBrandProps {
  brand: {
    id: number;
    name: string;
    imageUrl: string;
  }
}
