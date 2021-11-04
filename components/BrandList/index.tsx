import Brand from '../Brand';
import { IBrandProps } from '../../interfaces';
import styles from '../../styles/BrandList.module.css';
import Link from 'next/link';
import useBrands from '../../hooks/useBrands';

export const BrandList = () => {
  // 최초렌더링시의 brands는 SWRConfig에서 넘어온 'fallback' data.
  // SSR을 마무리한 다음부터는 원래대로 client side SWR 진행.
  const { brands, error } = useBrands();
  if (!brands) return <h2>Loading ...</h2>

  return (
    <div className={styles.BrandList}>
      <Link href="/">GO HOME</Link>

      <ul>
        {brands.map((brand: { id: number, name: string, imageUrl: string}) => {
          return (
            <li key={brand.id}>
              <Brand brand={brand} />
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default BrandList;