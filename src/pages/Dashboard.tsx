import { useEffect, useState } from 'react';
import useLoginEffect from '../hooks/LoginEffect';
import IProps from '../interfaces/IProps';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Loading from '../components/Loading';
import getTopSellers from '../utils/api/getTopSellers';
import getTopProducts from '../utils/api/getTopProducts';
import { PieChart, Pie, Tooltip, Legend } from 'recharts';

function generateRandomHex() {
  const letters = '0123456789ABCDEF';
  let hex = '#';

  for (let i = 0; i < 6; i++) {
    hex += letters[Math.floor(Math.random() * 16)];
  }

  return hex;
}

function Dashboard(props: IProps) {
  const [hiddeCart, setHiddeCart] = useState(true);
  const { userData, loading, setLoading } = useLoginEffect(props.history);
  const [topSellers, setTopSellers] = useState([]);
  const [topProducts, setTopProducts] = useState([]);
  const roleUser = (userData.role === 'user');
  const [roleSeller, setRoleSeller] = useState(!(userData.role === 'seller' || userData.role === 'admin'))
  
  useEffect(() => {
    setLoading(true);
    const getSellers = async () => {
      const sellers = await getTopSellers();
      const sellerUpdate = sellers.map((seller: any) => {
        return ({
          name: seller.name,
          value: Number(seller.total_sales),
          fill: generateRandomHex(),
        })
      })
      const products = await getTopProducts();

      const productsUpdate = products.map((product: any) => {
        return ({
          name: product.name,
          value: Number(product.total_sales),
          fill: generateRandomHex(),
        })
      })
      setTopProducts( productsUpdate);
      setTopSellers(sellerUpdate)
      setLoading(false);
    };
    getSellers();
  }, []);

  return (
    <>
        <Header hiddeCart={hiddeCart} setHiddeCart={setHiddeCart} name={userData.name} history={props.history} roleUser={roleUser} roleSeller={roleSeller} />
        <section className='min_height'>
        { loading ? <Loading />: (
          <div>
            <div className='dashboard_header'>
              <h3>Dashboard</h3>
            </div>
            <div className='dashboard_section'>
              <div className='dashboard_div'>
                <h3>Vendedores com mais vendas:</h3>
                <PieChart width={400} height={400}>
                  <Pie
                    data={topSellers}
                    dataKey="value"
                    nameKey="name"
                    cx="50%"
                    cy="50%"
                    outerRadius={80}
                    fill="#8884d8"
                    label
                  />
                  <Tooltip />
                  <Legend />
                </PieChart>
                <div className='top_sellers'>
                  {topSellers.map((seller: any, index: number) => {
                    return (
                    <div key={`seller-${index}`}>
                      <span>{seller.name}</span>
                      <span className='font-12'>Vendas: {seller.value}</span>
                    </div>
                    )
                  })}
                </div>
              </div>
              <div className='dashboard_div'  >
                <h3>Produtos com mais vendas:</h3>
                <PieChart width={400} height={400}>
                  <Pie
                    data={topProducts}
                    dataKey="value"
                    nameKey="name"
                    cx="50%"
                    cy="50%"
                    outerRadius={80}
                    fill="#8884d8"
                    label
                  />
                  <Tooltip />
                  <Legend />
                </PieChart>
                <div className='top_sellers'>
                  {topProducts.map((seller: any, index: number) => {
                    return (
                    <div key={`seller-${index}`}>
                      <span>{seller.name}</span>
                      <span className='font-12'>Vendas: {seller.value}</span>
                    </div>
                    )
                  })}
                </div>
              </div>
            </div>
          </div>
            ) }
        </section>
      <Footer setLoginOpen={() => {}} />
    </>
  );
}

export default Dashboard;
