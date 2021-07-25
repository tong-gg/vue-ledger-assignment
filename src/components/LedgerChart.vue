<template>
  <div>
   <apexchart 
     height="350" type="pie" 
     :options="data.chartOptions" :series="data.series">
   </apexchart>  
  </div>
</template>

<script>
import LedgerStore from '@/store/LedgerStore'

export default {
  name: 'HelloWorld',
  async created() {
        let today = new Date().toISOString().substr(0, 10);
        await this.fetchData(today)
        LedgerStore.watch(
            (state) => {
                return LedgerStore.getters.getSum
            }, 
            (newValue, oldValue) => {
                let newData = [newValue.income, newValue.expense]
                this.data.series = newData
            }
        )
  },
  data() {
      return {
          data: {
          series: [],
          chartOptions: {
            chart: {
              width: 380,
              type: 'pie',
            },
            colors:['#628395', '#FFA0A0'],
            labels: ['รายรับ', 'รายจ่าย'],
            dataLabels: {
                style: {
                    fontSize: '1em',
                    fontFamily: 'Avenir, Helvetica, Arial, Kanit, sans-serif'
                }
            },
            title: {
                text: "แผนภาพวงกลมแสดงยอดรวมรายรับและรายจ่าย",
                align: 'center',
                margin: 35,
                offsetX: 0,
                offsetY: 0,
                floating: false,
                style: {
                    fontSize:  '1.5em',
                    fontWeight:  'bold',
                    fontFamily:  'Avenir, Helvetica, Arial, Kanit, sans-serif',
                    color:  '#464646'
                },
            },
            responsive: [{
              breakpoint: 480,
              options: {
                chart: {
                  width: 200
                },
                legend: {
                  position: 'bottom'
                }
              }
            }],
          },
        },
      }
  },
  methods: {
      async fetchData(date) {
        await LedgerStore.dispatch('fetchData', date)
        let sum = LedgerStore.getters.getSum
        this.data.series.push(sum.income)
        this.data.series.push(sum.expense)
      }
  }
}
</script>


<style>

</style>