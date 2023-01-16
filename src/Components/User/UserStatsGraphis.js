import React from 'react'
import styles from './UserStatsGraphs.module.css'
import {VictoryPie, VictoryChart, VictoryBar} from 'victory'

const UserStatsGraphis = ({data}) => {
    const [grafh, setGrafh] = React.useState([]);
    const [total, setTotal] = React.useState(0)

    React.useEffect(() => {
      const grafhData = data.map(item => {
        return {
          x: item.title,
          y: Number(item.acessos)
        }
      })
        
        setTotal(data.map(({ acessos }) => Number(acessos)).reduce((a, b) => a + b)
        );
        setGrafh(grafhData)
    }, [data])

  return (
    <section className={`${styles.grafh} animeLeft`}>
        <div className={`${styles.total} ${styles.graphItem}`}>
          <p>Acessos: {total} </p>
        </div>
        <div className={styles.graphItem}>
          <VictoryPie
            data={grafh}
            innerRadius={50}
            padding={{top:20, bottom: 20, left: 80, right:80}}
            style={{
              data: {
                fillOpacity: 0.9,
                stroke: '#fff',
                strokeWidth: 2,
              },
              labels: {
                fontSize: 14,
                fill: '#333'
              }
            }}
          />  
        </div>
        <div className={styles.graphItem}>
            <VictoryChart>
              <VictoryBar alignment='start' data={grafh}>   
              </VictoryBar>
            </VictoryChart>
        </div> 
    </section>
  )
}

export default UserStatsGraphis