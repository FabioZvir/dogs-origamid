import React from 'react'
import { STATS_GET } from '../../api';
import useFetch from '../../Hooks/useFetch'
import Head from '../Helper/Head'
import Loading from '../Helper/Loading';
import Error from '../Helper/Error';
const UserStatsGraphis = React.lazy(() => import('./UserStatsGraphis'))

const UserStats = () => {
  const {data, error, loading, request} = useFetch();

  React.useEffect(() => {
    async function getData() {
      const {url, options} = STATS_GET();
      await request(url, options)
      }
    getData()
  }, [request])

  if(loading) return <Loading />
  if(error) return <Error />
  if(data){
  return (
    <React.Suspense fallback={<div></div>}>
      <Head title="Estatisticas" />
      <UserStatsGraphis data={data} />  
    </React.Suspense>
  )
  }
  else return null
}

export default UserStats