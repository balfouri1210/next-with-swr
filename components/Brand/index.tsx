import { IBrandProps } from '../../interfaces';
import styles from '../../styles/Brand.module.css';
import Image from 'next/image';

export const Brand = (props: IBrandProps) => {
  return (
    <div className={styles.brand}>
      <div className={styles.brandImgContainer} style={{
        backgroundImage: `url(${props.brand.imageUrl})`
      }}>
        {/* <Image layout="fill" src={props.brand.imageUrl} alt={`${props.brand.name} image`}/> */}
      </div>

      <p>{props.brand.name}</p>
      <span>Brand ID: {props.brand.id}</span>
    </div>
  )
}

export default Brand;