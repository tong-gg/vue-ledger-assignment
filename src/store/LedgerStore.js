import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    data: [],
    today: '',
    filterData: [],
    sum: {
      income: 0,
      expense: 0,
      balance: 0
    }
  },
  getters: {
    ledgerLists: (state) => {
      console.log('getters called!')
      let res = state.data.filter((obj) => obj.date === state.today)[0]
      if(res !== undefined){
        state.filterData = res
      }
      return state.filterData // ตัวนี้เปลี่ยน
    },
    getSum: (state) => {
      console.log("getsum")
      // sum from state.data
      state.sum.income = state.data.map(item => item.totalIncome)
                    .reduce((prev, next) => {
                        return prev + next
      })
      state.sum.expense = state.data.map(item => item.totalExpense)
                    .reduce((prev, next) => {
                        return prev + next
      })
      state.sum.balance = state.sum.income - state.sum.expense
      return state.sum
    }
  },
  //setter-like
  mutations: {
    fetch(state, { res }) {
      // console.log(state.data)
      state.data = res.data
    },
    setDate(state, date) {
      state.today = date
      state.filterData = state.data.filter((item) => item.date === state.today)[0]
    },
    add(state, { payload }) {
      console.log("in add mutation")
      let selectedItems = state.data.filter((item) => item.date === payload.date)[0]
      console.log(selectedItems)

      if(selectedItems === undefined) {
        // initialData before push to state.data
        // case new day, there is no any data
        let detail = [{...payload.detail}]
        payload.detail = detail
        if(payload.detail[0].type === "รายรับ") {
          console.log('รายรับ')
          payload['totalIncome'] = detail[0].price
          payload['totalExpense'] = 0
          payload['balance'] = detail[0].price
        }else {
          payload['totalExpense'] = detail[0].price
          payload['totalIncome'] = 0
          payload['balance'] = detail[0].price
        }
        state.data.push(payload)
        console.log(state.data)
        if(state.today === payload.date) {
          state.filterData = state.data.filter((item) => item.date === payload.date)[0]
        }
      } else {
        console.log("else condition line 75")
        if(payload.detail.type === "รายรับ"){
          selectedItems.totalIncome += payload.detail.price
          selectedItems.balance += payload.detail.price
        } else {
          selectedItems.totalExpense += payload.detail.price
          selectedItems.balance -= payload.detail.price
        }
        selectedItems.detail.push(payload.detail)
        console.log(state.data)
      }
    },
    delete(state, index) {
      console.log(`remove index: `, index)
      console.log(state.filterData)
      let deleteData = state.filterData.detail.filter((item, indexItem) => indexItem === index)[0]

      if(deleteData.type === "รายรับ"){
        state.filterData.totalIncome -= deleteData.price
        state.filterData.balance -= deleteData.price
      }else{
        state.filterData.totalExpense -= deleteData.price
        state.filterData.balance += deleteData.price
      }

      state.filterData.detail = state.filterData.detail.filter((item, indexItem) => indexItem !== index)
    }
  },
  // public method
  // call from component via dispatch method
  actions: {
    async fetchData({ commit }, date) {
      let res = await Axios.get("example-data.json")
      commit('setDate', date)
      commit('fetch', { res }) // call mutation method
    },
    addLedgerList({ commit, getters }, payload) {
      console.log(payload)
      commit('add', { payload })
      getters.ledgerLists
    },
    searchLedger({ commit }, date){
      commit('setDate', date)
    },
    deleteItem({ commit }, index) {
      commit('delete', index)
    },
  },
  modules: {
  }
})
