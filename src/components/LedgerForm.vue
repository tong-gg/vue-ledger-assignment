<template>
  <div>
    <div class="input-elem">
      <label>เลือกวันที่ </label>
      <input type="date">
    </div>
    
    <div class="input-elem" id="inc-exp">
      <label>เลือกรายรับ/รายจ่าย </label>
      <select>
        <option value="income">รายรับ(Income)</option>
        <option value="expense">รายจ่าย(Expense)</option>
      </select>
    </div>

    <div class="input-elem" id="baht">
      <label>จำนวนเงิน </label>
      <input type="text">
      <label> บาท</label>
    </div>

    <div class="input-elem" id="note-div">
      <label id="note-label">Note </label>
      <textarea id="note-textfield" rows="6" cols="50"></textarea>
    </div>

    <button>บันทึก</button>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
  .input-elem {
    margin: 1em;
  }

  textarea {
    resize: none;
  }
  
</style>