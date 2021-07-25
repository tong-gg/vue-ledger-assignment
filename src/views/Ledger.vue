<template>
  <div>
    <h1 class="text-center text-white text-xl text-6xl px-7 py-7 tracking-widest font-bold" style="background-color: #284E78">ระบบบันทึกรายรับ-รายจ่าย</h1>
    <div>
      <ledger-form></ledger-form>
      <ledger-table></ledger-table>
    </div>
  </div>
</template>

<script>
import LedgerForm from '../components/LedgerForm.vue'
import LedgerTable from '@/components/LedgerTable'

export default {
  components: { 
    LedgerForm,
    LedgerTable,
  }
}
</script>

<style>

</style>