<template>
  <div class="container mx-auto my-16 text-xl">
    <!-- TODO: validation -->
    <div class="input-elem">
      <label>เลือกวันที่ </label>
      <input type="date" v-model="form.date" id="dateForm" class="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
    </div>
    
    <div class="input-elem" id="inc-exp">
      <label>เลือกรายรับ/รายจ่าย </label>
      <select v-model="form.detail.type" class="border border-gray-300 shadow rounded text-gray-600 h-10 pl-5 pr-10 bg-white hover:border-gray-400 focus:outline-none">
        <option value="" selected disabled>เลือก option</option>
        <option value="income">รายรับ(Income)</option>
        <option value="expense">รายจ่าย(Expense)</option>
      </select>
    </div>

    <div class="input-elem" id="baht">
      <label>จำนวนเงิน </label>
      <input type="text" v-model="form.detail.price" class="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
      <label> บาท</label>
    </div>

    <label id="note-label">Note</label>
    <div class="input-elem" id="note-div">
      <textarea id="note-textfield" rows="6" cols="50" v-model="form.detail.note" class="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"></textarea>
    </div>
    <div class="flex justify-center">
      <button @click="addNewLedgerList" class="w-1/5 px-6 py-3 mb-4 text-base font-semibold leading-6 focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-gray-900 focus:outline-none transition-colors duration-200 rounded-full block  border-b border-purple-300 bg-blue-300 hover:bg-blue-500 text-blue-900">
      บันทึก
      <font-awesome-icon icon="save"/>
      </button>
    </div>
  </div>
</template>

<script>
import LedgerStore from '@/store/LedgerStore'
import LedgerTable from '@/components/LedgerTable'

export default {
  components: {
    LedgerTable
  },
  data() {
    return {
      form: {
        date: '',
        detail: {
          type: '',
          note: '',
          price: ''
        },
      }
    }
  },
  mounted() {
    let date = this.$el.querySelector("#dateForm")
    let today = new Date().toISOString().substr(0, 10);
    date.value = today
    this.form.date = today
  },
  methods: {
    addNewLedgerList() {
      let price = parseInt(this.form.detail.price || 0)
      let detail = {
        type: this.form.detail.type,
        note: this.form.detail.note,
        price: price
      }
      let payload = {
        date: this.form.date,
        detail: detail,
      }

      if (this.form.detail.type === "income"){
        payload.detail.type = "รายรับ"
      } else {
        payload.detail.type = "รายจ่าย"
      }

      LedgerStore.dispatch('addLedgerList', payload)
      console.log(payload)
      this.clearForm()
    },
    clearForm() {
      this.form = {
            date: '',
            detail: {
              type: '',
              note: '',
              price: ''
          }
        }
    let date = this.$el.querySelector("#dateForm")
    let today = new Date().toISOString().substr(0, 10);
    date.value = today
    this.form.date = today
      }
    }
}
</script>

<style lang="scss" scoped>
  .input-elem {
    margin: 1em;
  }

  textarea {
    resize: none;
  }

  select option[disabled]:first-child {
	  display: none;
  }
  
</style>