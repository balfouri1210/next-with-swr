import axios from 'axios';
import { SWRConfig } from 'swr';
import { GetServerSideProps } from 'next'
import BrandList from '../../components/BrandList';
import { IBrandsProps } from '../../interfaces';

export const Brands = (props: IBrandsProps) => {
  return (
    <div>
      {/* fallback으로 BrandList에서 쓰이는 brands의 초기값을 설정 */}
      <SWRConfig value={{ fallback: props.fallback }}>
        <BrandList />
      </SWRConfig>
    </div>
  )
};

export const getServerSideProps: GetServerSideProps = async () => {
  const brands = (await axios.get('https://api-dev.sodagift.com/api/brands')).data;

  return {
    props: {
      // SWR 초기값을 지정해 SSR이 가능하도록 하기위해 swr fallback제공
      fallback: {
        'https://api-dev.sodagift.com/api/brands': brands
      }
    }
  }
}

export default Brands;