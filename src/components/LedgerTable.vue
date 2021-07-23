<template>
    <div style="margin-top: 3em"> 
        <input type="date">
        <table>
            <thead>
                <tr>
                    <th>#</th>
                    <th>ประเภท</th>
                    <th>รายละเอียด</th>
                    <th>จำนวนเงิน</th>
                    <th>วันที่บันทึก</th>
                </tr>
            </thead>
            <tbody>
              <tr v-for="(item, index) in data.detail" :key="index">
                  <td>{{ index + 1 }}</td>
                  <td>{{ item.type }}</td>
                  <td>{{ item.note }}</td>
                  <td>{{ item.price }}</td>
                  <td>{{ data.date }}</td>
                  <td>
                      <button>edit</button>
                  </td>
                  <td>
                      <button>delete</button>
                  </td>
              </tr>
          </tbody>
        </table>
          <p>ยอดรวมรายรับ: 1000</p>
          <p>ยอดรวมรายจ่าย: 1500</p>
    </div>
</template>

<script>
export default {
    data() {
        return {
            data: {
                    date: Date.now(),
                    detail: [
                        {
                            type: 'รายรับ',
                            note: 'คุณแม่ให้คุณแม่ให้คุณแม่ให้คุณแม่ให้คุณแม่ให้คุณแม่ให้คุณแม่ให้คุณแม่ให้คุณแม่ให้คุณแม่ให้คุณแม่ให้คุณแม่ให้คุณแม่ให้คุณแม่ให้',
                            price: 1000,
                        },
                        {
                            type: 'รายรับ',
                            note: 'แม่จ้างล้างจาน',
                            price: 100,
                        },
                        {
                            type: 'รายจ่าย',
                            note: 'ซื้อข้าว',
                            price: 100,
                        },
                        {
                            type: 'รายจ่าย',
                            note: 'ซื้อสกินแคร์',
                            price: 500,
                        },
                    ],
                    totalIncome: 1100,
                    totalExpense: 600,
                    balance: 500
                },
        }
    }
}
</script>

<style lang="scss" scoped>
    table {
        table-layout: fixed;
        width: 100%
    }
</style>