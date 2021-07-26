<template>
    <div style="margin-top: 3em"> 
        <div class="container mx-auto">
            <div class="flex space-x-4 items-baseline">
                <input type="date" id="dateTable" v-model="today" class="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
                <button @click="searchByDate" class="w-auto px-6 py-3   mb-4 text-base  font-semibold leading-6 focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-gray-900 focus:outline-none transition-colors duration-200 rounded-full block  border-b border-purple-300 bg-blue-300 hover:bg-blue-500 text-blue-900">
                    ค้นหา
                    <font-awesome-icon icon="search"/>
                </button>  
                <div v-if="data !== undefined" class="flex space-x-8 justify-center text-2xl" style="margin-left: auto">
                <div class="text-white rounded-2xl px-4 py-4" style="background-color: #5C969E">
                <p>ยอดรวมรายรับรายวัน</p>
                <p>{{ data.totalIncome }} บาท</p>
                </div>
                
                <div class="text-white rounded-2xl px-4 py-4" style="background-color: #F38BA0">
                <p>ยอดรวมรายจ่ายรายวัน</p>
                <p>{{ data.totalExpense }} บาท</p>
                </div>

                <div class="text-white rounded-2xl px-4 py-4" style="background-color: #CFC5A5">
                <p>ยอดคงเหลือ </p>
                <p>{{ data.balance }} บาท</p>
                </div>
        </div>
        <div v-if="data === undefined" class="flex space-x-8 justify-center my-16 text-2xl" style="margin-left: auto">
                <div class="text-white rounded-2xl px-4 py-4" style="background-color: #5C969E">
                <p>ยอดรวมรายรับรายวัน</p>
                <p>0 บาท</p>
                </div>
                
                <div class="text-white rounded-2xl px-4 py-4" style="background-color: #F38BA0">
                <p>ยอดรวมรายจ่ายรายวัน</p>
                <p>0 บาท</p>
                </div>

                <div class="text-white rounded-2xl px-4 py-4" style="background-color: #CFC5A5">
                <p>ยอดคงเหลือ </p>
                <p>0 บาท</p>
                </div>
        </div>
        </div>
        </div>
        <div v-if="data !== undefined && data.balance !== 0" class="container mx-auto">
            <div class="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
            <div class="inline-block min-w-full shadow rounded-lg overflow-hidden">
            <table class="min-w-full leading-normal text-2xl">
                <thead>
                    <tr>
                        <th class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-lg font-semibold text-gray-600 uppercase tracking-wider">#</th>
                        <th class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-lg font-semibold text-gray-600 uppercase tracking-wider">ประเภท</th>
                        <th class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-lg font-semibold text-gray-600 uppercase tracking-wider">รายละเอียด</th>
                        <th class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-lg font-semibold text-gray-600 uppercase tracking-wider">จำนวนเงิน</th>
                        <th class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-lg font-semibold text-gray-600 uppercase tracking-wider">วันที่บันทึก</th>
                        <th class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-lg font-semibold text-gray-600 uppercase tracking-wider"></th>
                    </tr>
                </thead>
                <tbody>
                <tr v-for="(item, index) in data.detail" :key="index" class="bg-gray-300">
                    <td class="px-5 py-5 border-b border-gray-200 bg-white text-lg">{{ index + 1 }}</td>
                    <td class="px-5 py-5 border-b border-gray-200 bg-white text-lg">
                       <span v-if="item.type === `รายรับ`" class="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                            <span v-if="item.type === `รายรับ`" aria-hidden class="absolute inset-0 bg-green-200 opacity-50 rounded-full"></span>
                                <span class="relative">{{item.type}}</span>
                        </span>
                        <span v-if="item.type === `รายจ่าย`" class="relative inline-block px-3 py-1 font-semibold text-yellow-900 leading-tight">
                            <span v-if="item.type === `รายจ่าย`" aria-hidden class="absolute inset-0 bg-yellow-200 opacity-50 rounded-full"></span>
                            <span class="relative">{{item.type}}</span>
                        </span>
                    </td>

                    <td class="px-5 py-5 border-b border-gray-200 bg-white text-lg">
                        {{ item.note }}
                    </td>

                    <td class="px-5 py-5 border-b border-gray-200 bg-white text-lg">{{ item.price }}</td>
                    <td class="px-5 py-5 border-b border-gray-200 bg-white text-lg">{{ data.date }}</td>
                    <td class="px-5 py-5 border-b border-gray-200 bg-white text-lg">
                        <button @click="deleteItem(index)" class="w-auto px-3 py-1 leading-6 font-semibold focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-gray-900 focus:outline-none transition-colors duration-200 rounded border-b border-purple-300 bg-red-300 hover:bg-red-500 text-red-900">
                            <font-awesome-icon icon="times" />
                        </button>
                    </td>
                </tr>
            </tbody>
            </table>
                </div>
            </div>
        </div>
        <div v-if="data === undefined || data.balance === 0" class="my-12">
            <h3 class="text-3xl">ว้าาา วันนี้ยังไม่ได้ใช้จ่ายอะไรเลย</h3>
        </div>
        <div class="flex space-x-8 justify-center text-2xl my-16" style="margin-left: auto">
            <div class="text-white tracking-wider rounded-2xl px-4 py-4" style="background-color: #628395">
                <p>ยอดรวมรายรับ</p>
                <p>{{ sum.income }} บาท</p>
                </div>

            <div class="text-white tracking-wider rounded-2xl px-4 py-4" style="background-color: #FFA0A0">
                <p>ยอดรวมรายจ่าย</p>
                <p>{{ sum.expense }} บาท</p>
            </div>

            <div class="text-white tracking-wider rounded-2xl px-4 py-4" style="background-color: #5089C6">
                <p>ยอดรวมคงเหลือ</p>
                <p>{{ sum.balance }} บาท</p>
            </div>
        </div>
        <div class="container mx-auto">
            <ledger-chart v-bind:sum="sum"></ledger-chart>
        </div>
    </div>
</template>

<script>
import LedgerStore from '@/store/LedgerStore'
import LedgerChart from '@/components/LedgerChart'

export default {
    components: {
        LedgerChart
    },
    data() {
        return {
            data: {},
            today: '',
            editIndex: -1,
            form: {
                date: '',
                detail: {
                    type: '',
                    note: '',
                    price: ''
                },
            },
            sum: 0
        }
    },
    mounted() {
        let dateTable = this.$el.querySelector("#dateTable")
        let today = new Date().toISOString().substr(0, 10);
        dateTable.value = today
        this.today = today
    },
    async created() {
        let today = new Date().toISOString().substr(0, 10);
        await this.fetchLedgerList(today)
        // bug fixed!
        this.sum = LedgerStore.getters.getSum
        LedgerStore.watch(
            (state) => {
                return LedgerStore.getters.ledgerLists
            }, 
            (newValue, oldValue) => {
                this.data = newValue
                console.log(this.data.detail)
            }
        )
        LedgerStore.watch(
            (state) => {
                return LedgerStore.getters.getSum
            }, 
            (newValue, oldValue) => {
                this.sum = newValue
            }
        )
    },
    methods: {
        async fetchLedgerList(date) {
            console.log('fired!')
            // invoke action method using dispatch
            await LedgerStore.dispatch('fetchData', date)
            
            // filter แล้ว reference เปลี่ยน
            // ลองเอาไปฟิลเตอร์ใน store สิ
            this.data = LedgerStore.getters.ledgerLists
            console.log(this.data)
        },
        async searchByDate() {
            console.log('fired!')
            console.log(this.today);
            await LedgerStore.dispatch('searchLedger', this.today)
            this.data = LedgerStore.getters.ledgerLists
            console.log(this.data)
        },
        deleteItem(index) {
            LedgerStore.dispatch('deleteItem', index)
        }
    }
}
</script>

<style lang="scss" scoped>

</style>