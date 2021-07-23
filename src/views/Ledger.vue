<template>
  <div>
    <h1>Ledger Assignment</h1>
    <ledger-form></ledger-form>
    <ledger-table></ledger-table>
  </div>
</template>

<script>
import LedgerForm from '../components/LedgerForm.vue'
import LedgerTable from '@/components/LedgerTable'

export default {
  components: { 
    LedgerForm,
    LedgerTable
  }

}
</script>

<style>

</style>